/**
 * Generates `src/data/characterViews.ts` — the eight keyframes AsciiCharacter
 * morphs between.
 *
 * The character is not traced from a raster. It is sampled from the signed
 * distance field in `src/utils/bustField.ts`, the same mannequin the hero
 * panel ray-marches, which is what makes the eight views agree with each
 * other: every particle is one fixed point on the model's surface, projected
 * eight times. Particle 412 is the same freckle of skull in all of them, so
 * interpolating between two views moves it the way a rotation would rather
 * than shuffling unrelated dots around.
 *
 *   node scripts/generate-character-views.mts [--count 2600]
 *
 * Re-run it after editing the field, or with a different count for a denser
 * or sparser character.
 */
import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import {
  bustNormal,
  bustSdf,
  BOUND_R,
  CUT_Y,
  MODEL_CY,
} from "../src/utils/bustField.ts";

/** Half-extent of the frame in model units — what the 0..1 range spans. */
const VIEW = 1.16;

/** Where the light comes from, fixed in world space as the character turns. */
const LIGHT = (() => {
  const [x, y, z] = [-0.34, 0.6, 0.72];
  const len = Math.hypot(x, y, z);
  return [x / len, y / len, z / len] as const;
})();

const ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];

const argCount = Number(
  process.argv[process.argv.indexOf("--count") + 1] || NaN,
);
const COUNT = Number.isFinite(argCount) ? argCount : 2600;

/* ------------------------------------------------------------------- random
   Seeded, so regenerating without changing anything produces byte-identical
   data and the diff stays empty. */
function mulberry32(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rand = mulberry32(0x5eed);

/* ------------------------------------------------------------------ surface
   Candidates in the bounding box, pulled onto the surface by a few Newton
   steps along the gradient. The field is smooth, so this converges in five. */
type P3 = {
  x: number;
  y: number;
  z: number;
  nx: number;
  ny: number;
  nz: number;
};

function project(x: number, y: number, z: number): P3 | null {
  for (let i = 0; i < 6; i++) {
    const d = bustSdf(x, y, z);
    if (Math.abs(d) < 1e-4) break;
    const [nx, ny, nz] = bustNormal(x, y, z);
    x -= nx * d;
    y -= ny * d;
    z -= nz * d;
  }
  if (Math.abs(bustSdf(x, y, z)) > 2e-3) return null;
  /* The cut is a flat lid, not part of the character: a disc of particles
     across the bottom of the bust reads as a table, not as a body. */
  if (y < CUT_Y + 0.02) return null;
  const [nx, ny, nz] = bustNormal(x, y, z);
  return { x, y, z, nx, ny, nz };
}

const pool: P3[] = [];
for (let i = 0; i < 420000 && pool.length < 90000; i++) {
  const x = (rand() * 2 - 1) * 1.05;
  const y = CUT_Y + rand() * (0.86 - CUT_Y);
  const z = (rand() * 2 - 1) * 0.72;
  const d = bustSdf(x, y, z);
  if (Math.abs(d) > 0.22) continue;
  const p = project(x, y, z);
  if (p) pool.push(p);
}

/* ------------------------------------------------------------------ spacing
   Greedy blue noise: walk the pool in its (random) order and keep a point only
   if nothing already kept sits within `r`. Even spacing is what stops the
   character reading as clumps of ink with holes between them. */
function thin(points: P3[], r: number): P3[] {
  const cell = r;
  const grid = new Map<string, P3[]>();
  const kept: P3[] = [];
  const key = (x: number, y: number, z: number) =>
    `${Math.floor(x / cell)},${Math.floor(y / cell)},${Math.floor(z / cell)}`;
  const r2 = r * r;

  for (const p of points) {
    const gx = Math.floor(p.x / cell);
    const gy = Math.floor(p.y / cell);
    const gz = Math.floor(p.z / cell);
    let ok = true;
    outer: for (let a = -1; a <= 1; a++)
      for (let b = -1; b <= 1; b++)
        for (let c = -1; c <= 1; c++) {
          const near = grid.get(`${gx + a},${gy + b},${gz + c}`);
          if (!near) continue;
          for (const q of near) {
            const dx = q.x - p.x;
            const dy = q.y - p.y;
            const dz = q.z - p.z;
            if (dx * dx + dy * dy + dz * dz < r2) {
              ok = false;
              break outer;
            }
          }
        }
    if (!ok) continue;
    kept.push(p);
    const k = key(p.x, p.y, p.z);
    const bucket = grid.get(k);
    if (bucket) bucket.push(p);
    else grid.set(k, [p]);
  }
  return kept;
}

/* Bisect the spacing until the kept set is just over the count asked for. */
let lo = 0.015;
let hi = 0.12;
let surface: P3[] = [];
for (let i = 0; i < 18; i++) {
  const mid = (lo + hi) / 2;
  const kept = thin(pool, mid);
  if (kept.length >= COUNT) {
    surface = kept;
    lo = mid;
  } else {
    hi = mid;
  }
  if (surface.length && surface.length < COUNT * 1.06) break;
}
if (surface.length < COUNT) {
  throw new Error(`only ${surface.length} points; lower --count`);
}
surface.length = COUNT;

/* Shuffled, deliberately.

   An earlier version sorted these spatially so the packed strings would
   compress, and that made the ORDER meaningful: a prefix of the array was a
   horizontal slice of the body, so anything that thinned the particles by
   taking the first N got the shoulders and no head. The compression it bought
   was about a percent — base64 of quantised data barely compresses whatever
   order it is in — and the trap it set cost a great deal more than that. A
   random order makes any subsample of the data an even sample of the body,
   whether or not the code doing the subsampling knows to be careful. */
for (let i = surface.length - 1; i > 0; i--) {
  const j = Math.floor(rand() * (i + 1));
  [surface[i], surface[j]] = [surface[j], surface[i]];
}

/* ------------------------------------------------------------------- views */
const smoothstep = (e0: number, e1: number, v: number) => {
  const t = Math.max(0, Math.min(1, (v - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
};
const q = (v: number, bits: number) =>
  Math.max(0, Math.min((1 << bits) - 1, Math.round(v * ((1 << bits) - 1))));

function packView(angle: number): string {
  /* Negative, so that +90° turns the character's own right toward the camera
     — the order the reference sheet reads in. */
  const a = (-angle * Math.PI) / 180;
  const cos = Math.cos(a);
  const sin = Math.sin(a);
  const words = new Uint32Array(COUNT);

  surface.forEach((p, i) => {
    // Frame the model, then turn it about the vertical axis.
    const fx = p.x;
    const fy = p.y - MODEL_CY;
    const fz = p.z;
    const rx = fx * cos + fz * sin;
    const rz = -fx * sin + fz * cos;
    const nrx = p.nx * cos + p.nz * sin;
    const nrz = -p.nx * sin + p.nz * cos;

    const x = 0.5 + rx / (2 * VIEW);
    const y = 0.5 - fy / (2 * VIEW); // canvas y counts down the screen
    const lum = Math.max(0, nrx * LIGHT[0] + p.ny * LIGHT[1] + nrz * LIGHT[2]);
    const depth = (rz / BOUND_R + 1) / 2;
    /* Facing, not true occlusion: on a body this convex the normal is a good
       enough stand-in, and it is what fades a particle out as it travels
       around the back of the head. */
    const vis = smoothstep(-0.05, 0.35, nrz);

    words[i] =
      ((q(x, 10) << 22) |
        (q(y, 10) << 12) |
        (q(lum, 4) << 8) |
        (q(depth, 4) << 4) |
        q(vis, 4)) >>>
      0;
  });

  return Buffer.from(words.buffer).toString("base64");
}

const chunk = (s: string, n: number) => {
  const out: string[] = [];
  for (let i = 0; i < s.length; i += n) out.push(s.slice(i, i + n));
  return out;
};

const body = ANGLES.map((angle) => {
  const lines = chunk(packView(angle), 108)
    .map((l) => `  "${l}",`)
    .join("\n");
  return `// ${angle}°\n[\n${lines}\n].join("")`;
}).join(",\n");

const file = `/**
 * GENERATED — do not hand-edit.
 *
 *   node scripts/generate-character-views.mts --count ${COUNT}
 *
 * Eight views of the mannequin in \`src/utils/bustField.ts\`, sampled as
 * ${COUNT} points on its surface and projected once per view. Particle \`i\` is
 * the same point on the model in all eight, which is what lets AsciiCharacter
 * interpolate between two views and have the result read as a rotation.
 *
 * Each particle packs into one 32-bit word:
 *
 *   bits 31-22  x        0..1 across the frame, 1024 steps
 *   bits 21-12  y        0..1 down the frame, 1024 steps
 *   bits 11-8   lum      lambert against a fixed light, 16 steps
 *   bits 7-4    depth    0 furthest, 1 nearest, 16 steps
 *   bits 3-0    vis      how much the point faces the camera, 16 steps
 *
 * To change the character: edit the field, re-run the script above. To change
 * how many particles there are: pass --count. Nothing here is read at runtime
 * except the strings.
 */

/** Degrees of turn each view was projected at. */
export const VIEW_ANGLES = [${ANGLES.join(", ")}] as const;

/** How many particles every view carries. They are index-matched. */
export const PARTICLE_COUNT = ${COUNT};

/** One view, unpacked into the flat arrays the particle system reads. */
export type CharacterView = {
  angle: number;
  x: Float32Array;
  y: Float32Array;
  lum: Float32Array;
  depth: Float32Array;
  vis: Float32Array;
};

const PACKED: string[] = [
${body},
];

function unpack(packed: string, angle: number): CharacterView {
  const bytes = atob(packed);
  const words = new Uint32Array(PARTICLE_COUNT);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const o = i * 4;
    words[i] =
      (bytes.charCodeAt(o) |
        (bytes.charCodeAt(o + 1) << 8) |
        (bytes.charCodeAt(o + 2) << 16) |
        (bytes.charCodeAt(o + 3) << 24)) >>>
      0;
  }

  const view: CharacterView = {
    angle,
    x: new Float32Array(PARTICLE_COUNT),
    y: new Float32Array(PARTICLE_COUNT),
    lum: new Float32Array(PARTICLE_COUNT),
    depth: new Float32Array(PARTICLE_COUNT),
    vis: new Float32Array(PARTICLE_COUNT),
  };
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const w = words[i];
    view.x[i] = ((w >>> 22) & 1023) / 1023;
    view.y[i] = ((w >>> 12) & 1023) / 1023;
    view.lum[i] = ((w >>> 8) & 15) / 15;
    view.depth[i] = ((w >>> 4) & 15) / 15;
    view.vis[i] = (w & 15) / 15;
  }
  return view;
}

/** The eight keyframes, in turn order. */
export const characterViews: CharacterView[] = PACKED.map((packed, i) =>
  unpack(packed, VIEW_ANGLES[i]),
);
`;

const out = new URL("../src/data/characterViews.ts", import.meta.url);
writeFileSync(out, file);
/* Formatted on the way out, so regenerating never shows up in the diff as a
   whitespace change and `prettier --check` stays green. */
execFileSync(
  "npx",
  ["prettier", "--write", "--log-level", "warn", out.pathname],
  {
    stdio: "inherit",
  },
);
console.log(`wrote ${COUNT} particles x ${ANGLES.length} views`);
