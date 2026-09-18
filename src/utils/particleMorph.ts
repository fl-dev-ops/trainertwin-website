/**
 * The particle system behind `AsciiCharacter`.
 *
 * Everything here is plain functions over flat typed arrays: no objects per
 * particle, no allocation in the frame loop, nothing that touches React. The
 * component owns the canvas and the clock and calls into this; this owns the
 * maths.
 *
 * The eight views are keyframes of one particle set — particle `i` is the same
 * point on the model in every view (see `src/data/characterViews.ts`) — so a
 * morph between two of them is a per-particle interpolation, and it reads as a
 * rotation because the data was built from one.
 */
import type { CharacterView } from "@/data/characterViews";

/** Light to dark. A particle picks from this by how deep in shadow it sits. */
export const ASCII_RAMP = [
  ".",
  "'",
  "`",
  ":",
  "^",
  "*",
  "+",
  "o",
  "O",
  "#",
] as const;

/**
 * The pixel ramp: the side of the mark a particle draws, as a fraction of the
 * base size, light to dark. The low end is a dot a pixel or two across, the
 * high end a box that all but closes the gap to its neighbours — so shadow
 * reads as solid and highlight as scattered specks, which is the same trade
 * the ASCII ramp makes with glyph weight instead of area.
 */
export const PIXEL_RAMP = [
  0.16, 0.24, 0.34, 0.45, 0.56, 0.67, 0.79, 0.92,
] as const;

/** Which marks a particle is drawn as. */
export type MarkStyle = "pixel" | "ascii";

/** Everything the renderer needs that is not geometry. */
export type PaintStyle = {
  color: string;
  fontFamily: string;
  marks: MarkStyle;
};

export type MorphConfig = {
  /** Particles drawn. Clamped to what the view data actually holds. */
  particleCount: number;
  /** Glyph size in px at a 700px stage, scaled with the stage from there. */
  particleSize: number;
  /** How far particles bow outward at the middle of a morph, in stage units. */
  scatterAmount: number;
  /** Amplitude of the idle drift, in stage units. */
  noiseAmount: number;
  /** Share of an entrance spent letting particles arrive at different times. */
  stagger: number;
  /** ms for one whole revolution, entrance and exit included. */
  rotationDuration: number;
  /** ms at the head of the revolution spent assembling. */
  enterDuration: number;
  /** ms at the tail of it spent coming apart. */
  exitDuration: number;
};

export const DEFAULT_CONFIG: MorphConfig = {
  /* A floor, not the real default — the component defaults to every particle
     the view data carries. */
  particleCount: 2600,
  particleSize: 9,
  scatterAmount: 0.05,
  noiseAmount: 0.0016,
  stagger: 0.45,
  rotationDuration: 9000,
  enterDuration: 900,
  exitDuration: 800,
};

/**
 * How present the character is, and which way it is going.
 *
 * `presence` runs 0 (dispersed and invisible) to 1 (assembled). `direction` is
 * which end of the stagger goes first — assembling and dissolving read as
 * different events rather than one played backwards.
 */
export type Envelope = { presence: number; direction: 1 | -1 };

/**
 * Per-particle state. Position persists between frames — a particle chases its
 * interpolated target rather than being teleported onto it, which is where the
 * drag and the softness in the movement come from.
 */
export type ParticleSystem = {
  count: number;
  /** Current position, in 0..1 stage units. */
  px: Float32Array;
  py: Float32Array;
  /** Where this frame wants it. Kept for inspection; the loop writes it. */
  tx: Float32Array;
  ty: Float32Array;
  /** Interpolated channels for this frame. */
  opacity: Float32Array;
  lum: Float32Array;
  depth: Float32Array;
  /** Fixed per particle. */
  stagger: Float32Array;
  scatterX: Float32Array;
  scatterY: Float32Array;
  follow: Float32Array;
  noisePhase: Float32Array;
  /** Index into ASCII_RAMP, recomputed only when it would change. */
  glyph: Uint8Array;
};

/**
 * Thins every view down to `count` particles, index-matched.
 *
 * An even stride, not the first `count`: the generated data is sorted
 * spatially so it compresses, which means a prefix of it is a horizontal slice
 * of the body — ask for a third of the particles and you get the shoulders and
 * nothing else. Striding takes one in every `total / count` along that sort,
 * which is an even sample of the whole surface.
 *
 * Returns the views unchanged when nothing needs dropping, so the common case
 * copies nothing.
 */
export function resampleViews(
  views: CharacterView[],
  count: number,
): CharacterView[] {
  const total = views[0].x.length;
  if (count >= total) return views;

  return views.map((v) => {
    const out: CharacterView = {
      angle: v.angle,
      x: new Float32Array(count),
      y: new Float32Array(count),
      lum: new Float32Array(count),
      depth: new Float32Array(count),
      vis: new Float32Array(count),
    };
    for (let i = 0; i < count; i++) {
      const src = Math.floor((i * total) / count);
      out.x[i] = v.x[src];
      out.y[i] = v.y[src];
      out.lum[i] = v.lum[src];
      out.depth[i] = v.depth[src];
      out.vis[i] = v.vis[src];
    }
    return out;
  });
}

function mulberry32(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Builds the particle set and seeds everything that stays fixed for its life:
 * when it starts moving, which way it bows out, how hard it chases its target.
 * All of it seeded, so the character looks the same on every load.
 */
export function createParticles(
  count: number,
  views: CharacterView[],
): ParticleSystem {
  const rand = mulberry32(0x9e37);
  const s: ParticleSystem = {
    count,
    px: new Float32Array(count),
    py: new Float32Array(count),
    tx: new Float32Array(count),
    ty: new Float32Array(count),
    opacity: new Float32Array(count),
    lum: new Float32Array(count),
    depth: new Float32Array(count),
    stagger: new Float32Array(count),
    scatterX: new Float32Array(count),
    scatterY: new Float32Array(count),
    follow: new Float32Array(count),
    noisePhase: new Float32Array(count),
    glyph: new Uint8Array(count),
  };

  const first = views[0];
  for (let i = 0; i < count; i++) {
    s.px[i] = first.x[i];
    s.py[i] = first.y[i];
    s.tx[i] = first.x[i];
    s.ty[i] = first.y[i];
    s.stagger[i] = rand();
    /* Bow outward from the middle of the frame, so a morph opens up rather
       than shearing sideways as one block. */
    const dx = first.x[i] - 0.5;
    const dy = first.y[i] - 0.5;
    const len = Math.hypot(dx, dy) || 1;
    const swirl = rand() * 0.7 - 0.35;
    s.scatterX[i] = (dx / len) * (0.75 + rand() * 0.5) - (dy / len) * swirl;
    s.scatterY[i] = (dy / len) * (0.75 + rand() * 0.5) + (dx / len) * swirl;
    /* Spread of chase rates: some particles snap onto the next view, some
       arrive a few frames late. That lag is most of the organic feel. */
    s.follow[i] = 0.16 + rand() * 0.2;
    s.noisePhase[i] = rand() * Math.PI * 2;
  }
  return s;
}

export const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);

/**
 * The four views a position in the turn sits among, and how far between the
 * middle two it is.
 *
 * Four, not two, because the path between keyframes has to curve. Eight views
 * of a rotation are eight points on a circle: interpolate straight between two
 * of them and every particle travels the chord instead of the arc, so the head
 * visibly deflates and re-inflates eight times a revolution — about 8% at the
 * midpoint, which at this size is a dozen pixels of pulsing. A Catmull-Rom
 * spline through the neighbours on either side follows the arc closely enough
 * that the wobble disappears.
 */
export type Span = {
  p0: CharacterView;
  p1: CharacterView;
  p2: CharacterView;
  p3: CharacterView;
  t: number;
};

/**
 * Resolves a continuous position in the turn — `0` is the front view, `1` the
 * next one round, `8` the front again — into the four views around it.
 */
export function interpolateViews(views: CharacterView[], pos: number): Span {
  const n = views.length;
  const wrapped = ((pos % n) + n) % n;
  const i = Math.floor(wrapped);
  return {
    p0: views[(i - 1 + n) % n],
    p1: views[i],
    p2: views[(i + 1) % n],
    p3: views[(i + 2) % n],
    t: wrapped - i,
  };
}

/** Catmull-Rom through four values. */
function spline(a: number, b: number, c: number, d: number, t: number): number {
  const t2 = t * t;
  const t3 = t2 * t;
  return (
    0.5 *
    (2 * b +
      (c - a) * t +
      (2 * a - 5 * b + 4 * c - d) * t2 +
      (-a + 3 * b - 3 * c + d) * t3)
  );
}

/**
 * One particle at one moment, without running the whole system. Useful for
 * tests and for anything that needs a position outside the render loop.
 */
export function getInterpolatedParticle(
  span: Span,
  i: number,
): { x: number; y: number; lum: number; depth: number; vis: number } {
  const { p0, p1, p2, p3, t } = span;
  return {
    x: spline(p0.x[i], p1.x[i], p2.x[i], p3.x[i], t),
    y: spline(p0.y[i], p1.y[i], p2.y[i], p3.y[i], t),
    lum: lerp(p1.lum[i], p2.lum[i], t),
    depth: lerp(p1.depth[i], p2.depth[i], t),
    vis: lerp(p1.vis[i], p2.vis[i], t),
  };
}

/**
 * How dark a particle wants to be, 0-1.
 *
 * Indexed by the absence of light, which is why the eye sockets and the
 * underside of the jaw fill in while the forehead stays scattered. Distance
 * lightens it a little further, and that is most of the depth cue.
 */
export function getDensity(lum: number, depth: number): number {
  return clamp01((1 - lum) * (0.62 + 0.38 * depth));
}

/** Ramp index for a particle, from how deep in shadow and how far away it is. */
export function getAsciiCharacter(lum: number, depth: number): string {
  const density = getDensity(lum, depth);
  const idx = Math.min(
    ASCII_RAMP.length - 1,
    Math.floor(density * ASCII_RAMP.length),
  );
  return ASCII_RAMP[idx];
}

/** Side of the square a particle draws, as a fraction of the base size. */
export function getPixelScale(lum: number, depth: number): number {
  const density = getDensity(lum, depth);
  const idx = Math.min(
    PIXEL_RAMP.length - 1,
    Math.floor(density * PIXEL_RAMP.length),
  );
  return PIXEL_RAMP[idx];
}

export const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
export const easeInCubic = (t: number) => t * t * t;

/**
 * Advances every particle one frame.
 *
 * The turn itself is linear and unbroken — `span.t` is used raw, with no
 * easing and no per-particle stagger, because anything that slows a particle
 * near a keyframe is exactly what makes a continuous rotation look like it
 * stops eight times a lap. The stagger and the scatter belong to the entrance
 * and the exit, where a particle arriving a beat late is the point.
 *
 * `dt` is milliseconds since the last frame and `time` a monotonic clock for
 * the idle drift; both are passed in so the loop stays deterministic and the
 * caller can pause it without this knowing.
 */
export function updateParticles(
  s: ParticleSystem,
  span: Span,
  cfg: MorphConfig,
  dt: number,
  time: number,
  env: Envelope,
): void {
  const { p0, p1, p2, p3, t } = span;
  /* Frame-rate independence, capped: a tab that was backgrounded comes back
     with a huge dt, and without the cap every particle would jump. */
  const step = Math.min(3, dt / 16.6667);
  const spread = Math.min(0.9, Math.max(0, cfg.stagger));
  const window = 1 - spread;

  /* Coming out toward the reader and going back in: the whole figure is drawn
     small and faint at presence 0 and full size at 1. Scaling the positions
     about the middle of the frame rather than the canvas keeps the bust on the
     same axis as it swells. */
  const scale = 0.55 + 0.45 * env.presence;

  for (let i = 0; i < s.count; i++) {
    let x = spline(p0.x[i], p1.x[i], p2.x[i], p3.x[i], t);
    let y = spline(p0.y[i], p1.y[i], p2.y[i], p3.y[i], t);

    /* Each particle's own share of the entrance. Running the stagger from the
       other end on the way out means the figure does not simply play its
       arrival backwards. */
    const order = env.direction === 1 ? s.stagger[i] : 1 - s.stagger[i];
    const local = clamp01((env.presence - order * spread) / window);
    const settled = env.direction === 1 ? easeOutCubic(local) : local;

    x = 0.5 + (x - 0.5) * scale;
    y = 0.5 + (y - 0.5) * scale;

    /* Dispersed when absent, gathered when present. */
    const loose = 1 - settled;
    if (loose > 0.001) {
      x += s.scatterX[i] * cfg.scatterAmount * loose;
      y += s.scatterY[i] * cfg.scatterAmount * loose;
    }

    // A little life once it has arrived.
    const phase = s.noisePhase[i];
    x += Math.sin(time * 0.0011 + phase) * cfg.noiseAmount;
    y += Math.cos(time * 0.0013 + phase * 1.7) * cfg.noiseAmount;

    s.tx[i] = x;
    s.ty[i] = y;

    const k = Math.min(1, s.follow[i] * step);
    s.px[i] += (x - s.px[i]) * k;
    s.py[i] += (y - s.py[i]) * k;

    s.lum[i] = lerp(p1.lum[i], p2.lum[i], t);
    s.depth[i] = lerp(p1.depth[i], p2.depth[i], t);
    s.opacity[i] = lerp(p1.vis[i], p2.vis[i], t) * settled;
  }
}

/** Where the 0..1 stage sits inside the canvas, in CSS px. */
export type StageMetrics = { size: number; offsetX: number; offsetY: number };

export function getStageMetrics(width: number, height: number): StageMetrics {
  const size = Math.min(width, height);
  return {
    size,
    offsetX: (width - size) / 2,
    offsetY: (height - size) / 2,
  };
}

/**
 * Draws the frame.
 *
 * Pixels are one pass of `fillRect`: no font state, no text shaping, and the
 * mark's area carries the shading instead of a glyph's weight. Glyphs are
 * three passes, one per depth band, because `ctx.font` is the expensive piece
 * of canvas state and this way it is set three times rather than once per
 * particle. Within either, only `globalAlpha` changes, which is cheap.
 */
export function renderParticles(
  ctx: CanvasRenderingContext2D,
  s: ParticleSystem,
  cfg: MorphConfig,
  stage: StageMetrics,
  paint: PaintStyle,
): void {
  const { size, offsetX, offsetY } = stage;
  const base = (cfg.particleSize * size) / 700;

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = paint.color;

  if (paint.marks === "pixel") {
    for (let i = 0; i < s.count; i++) {
      const alpha = s.opacity[i];
      if (alpha <= 0.012) continue;
      const lum = s.lum[i];
      const depth = s.depth[i];
      const density = getDensity(lum, depth);

      /* Nearer marks a little larger, the same depth cue the glyph bands
         give, but continuous because a rectangle costs nothing to resize. */
      const side = base * getPixelScale(lum, depth) * (0.86 + 0.28 * depth);
      ctx.globalAlpha = alpha * (0.42 + 0.58 * density);
      ctx.fillRect(
        offsetX + s.px[i] * size - side / 2,
        offsetY + s.py[i] * size - side / 2,
        side,
        side,
      );
    }
    ctx.globalAlpha = 1;
    return;
  }

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  const bands = [0.86, 1, 1.14];
  for (let band = 0; band < 3; band++) {
    ctx.font = `${(base * bands[band]).toFixed(2)}px ${paint.fontFamily}`;
    const lo = band / 3;
    const hi = (band + 1) / 3;
    for (let i = 0; i < s.count; i++) {
      const alpha = s.opacity[i];
      if (alpha <= 0.012) continue;
      const d = s.depth[i];
      if (d < lo || (d >= hi && band < 2)) continue;

      /* Lit areas pale, shadow dark — the same trade the reference sheet
         makes, and what keeps the face readable from far enough away that the
         glyphs stop being legible. Most of the shading is carried by the glyph
         rather than by this, so the floor stays high enough that the lit side
         of the head is still a surface and not a hole. */
      ctx.globalAlpha = alpha * (0.42 + 0.58 * (1 - s.lum[i]));
      ctx.fillText(
        getAsciiCharacter(s.lum[i], d),
        offsetX + s.px[i] * size,
        offsetY + s.py[i] * size,
      );
    }
  }
  ctx.globalAlpha = 1;
}
