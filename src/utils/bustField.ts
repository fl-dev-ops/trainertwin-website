/**
 * The mannequin bust, as a signed distance field.
 *
 * Nothing reads it at runtime. `scripts/generate-character-views.mts` samples
 * its surface offline to produce the eight keyframes `AsciiCharacter` morphs
 * between, and this is the file to edit to change the character — the shape of
 * the skull, the set of the shoulders, where the cut falls — after which the
 * script is re-run and the data regenerated.
 *
 * Model space: origin at the centre of the skull, y up, z toward the viewer,
 * the head about one unit tall. Nine ellipsoids and a capsule, smooth-unioned
 * so the joins read as one body rather than as intersecting solids, and a
 * plane the bust ends on.
 */

/** Everything below this is not part of the bust. */
export const CUT_Y = -1.26;

/**
 * Halfway between the crown and the cut. Added to a world y on the way into
 * the field, which is what puts the middle of the bust on the middle of the
 * frame rather than the middle of the skull.
 */
export const MODEL_CY = -0.2175;

/** Bounding sphere about the framed centre. Nothing lies outside it. */
export const BOUND_R = 1.4;

/** Approximate ellipsoid distance — exact enough to sphere-trace against. */
function ell(
  x: number,
  y: number,
  z: number,
  rx: number,
  ry: number,
  rz: number,
): number {
  const ax = x / rx;
  const ay = y / ry;
  const az = z / rz;
  const k0 = Math.sqrt(ax * ax + ay * ay + az * az);
  if (k0 === 0) return -Math.min(rx, ry, rz);
  const bx = x / (rx * rx);
  const by = y / (ry * ry);
  const bz = z / (rz * rz);
  const k1 = Math.sqrt(bx * bx + by * by + bz * bz);
  return (k0 * (k0 - 1)) / k1;
}

/** Smooth union — the polynomial one, so the blend has no seam of its own. */
function smin(a: number, b: number, k: number): number {
  const h = Math.max(0, Math.min(1, 0.5 + (0.5 * (b - a)) / k));
  return b * (1 - h) + a * h - k * h * (1 - h);
}

/** Distance to the bust's surface. Negative inside. */
export function bustSdf(x: number, y: number, z: number): number {
  // Cranium, then the face mass and the jaw hung off it.
  let d = ell(x, y - 0.3, z + 0.03, 0.455, 0.525, 0.5);
  d = smin(d, ell(x, y + 0.02, z - 0.05, 0.4, 0.42, 0.46), 0.14);
  d = smin(d, ell(x, y + 0.33, z - 0.06, 0.285, 0.25, 0.32), 0.14);

  // Brow and nose: too small to be drawn, big enough to bend the light.
  d = smin(d, ell(x, y - 0.12, z - 0.3, 0.33, 0.1, 0.17), 0.1);
  d = smin(d, ell(x, y + 0.07, z - 0.4, 0.09, 0.16, 0.16), 0.08);

  // Ears, mirrored — the one feature that shows on the silhouette.
  const mx = Math.abs(x);
  d = smin(d, ell(mx - 0.44, y, z + 0.07, 0.06, 0.135, 0.1), 0.06);

  // Neck: a capsule from the jaw down into the shoulders.
  const ny = Math.min(Math.max(y, -0.92), -0.5);
  const nz = z + 0.04;
  d = smin(d, Math.sqrt(x * x + (y - ny) * (y - ny) + nz * nz) - 0.215, 0.17);

  // Shoulders, and the plane the bust ends on.
  d = smin(d, ell(x, y + 1.1, z + 0.03, 0.95, 0.3, 0.38), 0.22);
  return Math.max(d, -(y - CUT_Y));
}

/**
 * Surface normal by the tetrahedron trick: four samples rather than six. The
 * result is normalised.
 */
export function bustNormal(
  x: number,
  y: number,
  z: number,
  h = 0.012,
): [number, number, number] {
  const s1 = bustSdf(x + h, y - h, z - h);
  const s2 = bustSdf(x - h, y - h, z + h);
  const s3 = bustSdf(x - h, y + h, z - h);
  const s4 = bustSdf(x + h, y + h, z + h);
  let nx = s1 - s2 - s3 + s4;
  let ny = -s1 - s2 + s3 + s4;
  let nz = -s1 + s2 - s3 + s4;
  const len = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1;
  nx /= len;
  ny /= len;
  nz /= len;
  return [nx, ny, nz];
}
