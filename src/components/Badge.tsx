import type { HTMLAttributes } from "react";
import { cn } from "./cn";

/**
 * Six semantic tones, and deliberately no arbitrary colour prop.
 *
 * The Untitled UI table this was ported from passes a free-form colour per team
 * badge (`color={team.color}`). That is exactly the drift decision D05 rules out:
 * category colours stay outside the system, because a palette that anyone can add
 * to is not a palette. A team badge takes `neutral` unless the tone carries real
 * meaning — and if every team is a different colour, none of them means anything.
 */
export type BadgeTone =
  | "neutral"
  | "brand"
  | "success"
  | "info"
  | "caution"
  | "danger"
  | "live"
  | "available";

export type BadgeSize = "sm" | "md";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
  size?: BadgeSize;
  /**
   * Show a leading dot. Use it for STATE (active / inactive / live), not for
   * category — a dot reads as "this is happening now".
   */
  dot?: boolean;
}

/**
 * Borders take the --tt-*-badge-border family, one step lighter than the
 * --tt-*-border alerts use. A badge is a small pill, often several to a row —
 * the alert-strength border reads as heavy repeated at that scale. Severity
 * still rides on the icon, fill and text (SC 1.4.1), never the border alone.
 */
const tones: Record<BadgeTone, string> = {
  neutral: "bg-surface-sunken text-ink-secondary border-line",
  brand: "bg-primary-subtle text-primary-ink border-primary-badge-border",
  success: "bg-success-subtle text-success border-success-badge-border",
  info: "bg-info-subtle text-info border-info-badge-border",
  caution: "bg-caution-subtle text-caution border-caution-badge-border",
  danger: "bg-danger-subtle text-danger border-danger-badge-border",
  /** Transparent fill, so this one keeps a full-strength border — it is the
   *  only thing defining the pill. Recording is a warning; it stays red. */
  live: "bg-transparent text-live border-live",
  /** Availability is reassurance, not success. Different token, same green. */
  available: "bg-transparent text-available border-available",
};

const sizes: Record<BadgeSize, string> = {
  sm: "text-[11px] px-2 py-[2px] leading-4",
  md: "text-[11.5px] px-3 py-1 leading-4",
};

export function Badge({
  tone = "neutral",
  size = "sm",
  dot = false,
  className,
  children,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border",
        "font-ui font-semibold",
        tones[tone],
        sizes[size],
        className,
      )}
      {...rest}
    >
      {dot ? (
        <span
          aria-hidden="true"
          className="h-[6px] w-[6px] shrink-0 rounded-full bg-current"
        />
      ) : null}
      {children}
    </span>
  );
}
