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
 * No border on a filled tone as of 25 Sep 2026 — the fill alone is enough to
 * read as a shape; a border on top of a fill was doubling up. Severity still
 * rides on the icon, fill and text (SC 1.4.1), never the border alone.
 *
 * `live`/`available` are the exception, unchanged: their background is
 * transparent, so their border is the only thing defining the pill at all.
 * Removing it there wouldn't lighten the badge, it would delete it.
 */
const tones: Record<BadgeTone, string> = {
  neutral: "bg-surface-sunken text-ink-secondary",
  /**
   * `brand` is the RECOMMENDED marker, and nothing else — narrowed 29 Sep 2026.
   *
   * Use it on the one option the product is steering toward, paired with a
   * `primary` select button on that same card. It is not a category label and
   * not a "this is ours" decoration: a grid where every card carries a brand
   * badge is the exact failure the 29 Sep pass exists to undo — six orange
   * pills on six cards, and no recommendation legible among them.
   *
   * For a category or a type, reach for `neutral`.
   */
  brand: "bg-primary-subtle text-primary-ink",
  success: "bg-success-subtle text-success",
  info: "bg-info-subtle text-info",
  caution: "bg-caution-subtle text-caution",
  danger: "bg-danger-subtle text-danger",
  live: "border bg-transparent text-live border-live",
  available: "border bg-transparent text-available border-available",
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
        "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full",
        "font-ui font-label",
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
