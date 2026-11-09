import { cn } from "./cn";

export type SpinnerSize = "sm" | "md";

export interface SpinnerProps {
  size?: SpinnerSize;
  className?: string;
  /** Defaults to "Loading" — pass a specific one when the caller has context,
   *  e.g. "Processing 12 sources". */
  label?: string;
}

/**
 * The loading mark, added 25 Sep 2026 from the Figma reference at node 885:274
 * ("loader gif animation and button loader place"). Not a generic spinner —
 * it's the brand mark's own 3x3 grid (see Logo.tsx), decomposed into its nine
 * cells so a brightness sweep can chase around them. The Figma export is an
 * 8-frame sprite; this reproduces it as a CSS `steps(8)` animation on
 * `currentColor` opacity rather than shipping a GIF, so it inherits whatever
 * colour the surrounding text does — white on a primary button, near-black on
 * `strong`, brand orange on a bare page. A GIF can't do that.
 *
 * Read from the reference at native resolution (zoomed with nearest-neighbour
 * to avoid guessing through blur): each of the 8 frames lights three cells at
 * roughly full/70%/40% opacity in an L-shaped run that rotates one cell per
 * frame. Reproduced below with the same three opacity steps and eight
 * rotational offsets — a best-effort read of a small reference render, not a
 * pixel-exact trace; flag it if it doesn't match.
 */
const sizes: Record<SpinnerSize, { box: number; gap: number; cell: number }> = {
  sm: { box: 16, gap: 1, cell: 4 },
  md: { box: 20, gap: 1.5, cell: 5 },
};

// Cell index 0..8 reads left-to-right, top-to-bottom, matching Logo's grid.
// Each frame names which three cells sit at full / 0.7 / 0.4 opacity; every
// other cell is 0.15 (present, not absent — an unlit LED, not a missing one).
const FRAMES: [number, number, number][] = [
  [0, 1, 4],
  [1, 2, 5],
  [2, 5, 8],
  [5, 8, 7],
  [8, 7, 6],
  [7, 6, 3],
  [6, 3, 0],
  [3, 0, 1],
];

export function Spinner({ size = "sm", className, label = "Loading" }: SpinnerProps) {
  const { box, gap, cell } = sizes[size];
  return (
    <span
      role="status"
      aria-label={label}
      className={cn("inline-grid shrink-0 grid-cols-3 grid-rows-3", className)}
      style={{ width: box, height: box, gap }}
    >
      {Array.from({ length: 9 }, (_, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="tt-spinner-cell rounded-[1px] bg-current"
          style={
            {
              width: cell,
              height: cell,
              "--tt-spin-name": `tt-spin-${i}`,
            } as React.CSSProperties
          }
        />
      ))}
    </span>
  );
}

/**
 * The keyframe + per-cell opacity table live in globals.css (`.tt-spinner-cell`
 * and `@keyframes tt-spin-cell`) rather than inline styles, because a distinct
 * 9-step `animation-delay` per cell is the only way to get a `steps(8)` chase
 * without one keyframe block per cell — see globals.css for the real values;
 * FRAMES above is the source of truth they were generated from.
 */
export const SPINNER_FRAMES = FRAMES;
