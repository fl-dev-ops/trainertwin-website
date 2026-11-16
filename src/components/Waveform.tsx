import type { CSSProperties } from "react";
import { cn } from "./cn";
import "./Waveform.css";

/**
 * Audio waveform (§8, Sign-in flow: Record). A row of rounded bars, 32px tall with a 3px
 * gap, drawn in `--tt-live` while recording (the live-recording colour, used for nothing
 * else) or in neutral ink for a recorded clip.
 *
 * Two modes:
 *   `live`    bars bounce on a staggered 900ms loop; no data needed. For "recording now" when
 *             you are not feeding it audio levels. Stops (static) under reduced motion.
 *   `levels`  a fixed shape from an array of 0 to 1 amplitudes, e.g. a recorded clip or a
 *             real mic stream you sample yourself.
 *
 * Decorative by default (`aria-hidden`): the words "Recording · 0:12" beside it carry the
 * meaning. Pass `label` where the waveform is the only indication.
 */
export interface WaveformProps {
  /** Animate. Ignored when `levels` is given (those are driven by you). */
  live?: boolean;
  /** 0 to 1 amplitudes, one per bar. */
  levels?: readonly number[];
  /** Bar count when `live` and no `levels`. */
  bars?: number;
  tone?: "live" | "neutral";
  /** Accessible name; makes it `role="img"` instead of decorative. */
  label?: string;
  className?: string;
}

export function Waveform({ live = false, levels, bars = 32, tone = "live", label, className }: WaveformProps) {
  const n = levels ? levels.length : bars;
  return (
    <span
      {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })}
      className={cn("inline-flex h-8 items-center gap-[3px]", live && !levels && "tt-wave--live", className)}
    >
      {Array.from({ length: n }, (_, i) => {
        const lv = levels ? Math.max(0.08, Math.min(1, levels[i])) : 0.3 + ((i * 37) % 7) / 10;
        return (
          <span
            key={i}
            className={cn("tt-wave-bar block h-full w-[3px] rounded-full", tone === "live" ? "bg-live" : "bg-ink-tertiary")}
            style={{ "--lv": lv, "--i": i % 12 } as CSSProperties}
          />
        );
      })}
    </span>
  );
}
