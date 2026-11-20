import type { CSSProperties, ReactNode } from "react";
import { cn } from "./cn";
import "./Progress.css";

/**
 * Progress and loading placeholders (§8, Progress, skeleton, empty state).
 *
 * `ProgressBar` is for work that has a real amount done: ingest shows REAL progress
 * per source, never an indeterminate bar, because uploading a trainer's life's work is
 * slow and anxious. If you cannot say how far along it is, use the Spinner instead.
 *
 * `ProgressRing` is a share of a whole: a conic fill over `--tt-border`, clockwise.

 * `lg` is 64px with a 25px-radius hole and the percentage at 13/600 inside; `sm` is 18px for the top bar
 * and switches to caution at `warnAt` (90) and above. Usage credit inside the agent
 * card has no bar at all.
 *
 * `Skeleton` holds the shape of what is coming so the layout does not jump, and
 * pulses opacity rather than shimmering.
 */
export interface ProgressBarProps {
  /** 0 to 100. */
  value: number;
  /** What is progressing, e.g. "Sprint Planning.pdf". Required: names the bar for assistive tech. */
  label: string;
  /** Visible text beside the bar, e.g. "12 of 14 pages". Defaults to nothing. */
  valueLabel?: ReactNode;
  className?: string;
}

export function ProgressBar({ value, label, valueLabel, className }: ProgressBarProps) {
  const v = Math.max(0, Math.min(100, value));
  return (
    <div className={cn("flex items-center gap-3 font-ui", className)}>
      <div
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(v)}
        className="h-1.5 flex-1 overflow-hidden rounded-full bg-fill-soft"
      >
        <div
          className={cn("h-full rounded-full transition-[width] duration-(--tt-duration-base) ease-standard", v >= 100 ? "bg-success" : "bg-ink")}
          style={{ width: `${v}%` }}
        />
      </div>
      {valueLabel ? <span className="flex-none text-[13px] leading-5 text-ink-tertiary tabular-nums">{valueLabel}</span> : null}
    </div>
  );
}

export interface ProgressRingProps {
  /** 0 to 100. */
  percent: number;
  /** `lg` 64px with the number inside; `sm` 18px for the top bar. */
  size?: "lg" | "sm";
  /** The fill colour. `success` is green as a DATA colour (open question §13); `neutral` is ink. */
  tone?: "success" | "neutral";
  /** At or above this percent the fill switches to caution. The top-bar pill uses 90. */
  warnAt?: number;
  /** A sentence stating the share, e.g. "1 of 5 sessions paid for an extension". */
  title?: string;
  className?: string;
}

export function ProgressRing({ percent, size = "lg", tone = "success", warnAt, title, className }: ProgressRingProps) {
  const p = Math.max(0, Math.min(100, percent));
  const warn = warnAt !== undefined && p >= warnAt;
  const fill = warn ? "var(--tt-caution)" : tone === "success" ? "var(--tt-success)" : "var(--tt-text-primary)";
  const px = size === "lg" ? "var(--tt-size-avatar-xl)" : "18px";
  // The hole is a RADIUS, as in the CSS `radial-gradient(circle, transparent 25px, #000 25.5px)`:
  // 25px at 64 (the spec, final 16 Nov 2026) and 5px at 18 (the prototype's credit pill).
  const hole = size === "lg" ? "25px" : "5px";
  const style = {
    "--ring": px,
    width: px,
    height: px,
    background: `conic-gradient(${fill} ${p}%, var(--tt-border) 0)`,
    // Punch the hole through the ring so it works on any background.
    WebkitMask: `radial-gradient(circle, transparent ${hole}, #000 calc(${hole} + 0.5px))`,
    mask: `radial-gradient(circle, transparent ${hole}, #000 calc(${hole} + 0.5px))`,
  } as CSSProperties;
  return (
    <span
      role="img"
      aria-label={title ?? `${Math.round(p)} percent`}
      title={title}
      className={cn("relative inline-grid flex-none place-items-center", className)}
      style={{ width: px, height: px }}
    >
      <span className="block rounded-full" style={style} />
      {size === "lg" ? (
        <span className="absolute font-ui text-[13px] font-title text-ink tabular-nums">{Math.round(p)}%</span>
      ) : null}
    </span>
  );
}

export interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  /** `text` (a line, radius 4), `block` (radius 12), `circle`. */
  shape?: "text" | "block" | "circle";
  className?: string;
}

export function Skeleton({ width = "100%", height, shape = "text", className }: SkeletonProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "tt-skeleton block bg-fill-soft",
        shape === "circle" ? "rounded-full" : shape === "block" ? "rounded-md" : "rounded-xs",
        className,
      )}
      style={{ width, height: height ?? (shape === "text" ? 14 : shape === "circle" ? width : 64) }}
    />
  );
}

/** A paragraph's worth of skeleton lines; the last one is shorter. */
export function SkeletonText({ lines = 3, className }: { lines?: number; className?: string }) {
  return (
    <div className={cn("flex flex-col gap-2", className)} role="status" aria-busy="true" aria-label="Loading">
      {Array.from({ length: lines }, (_, i) => (
        <Skeleton key={i} width={i === lines - 1 && lines > 1 ? "60%" : "100%"} />
      ))}
    </div>
  );
}
