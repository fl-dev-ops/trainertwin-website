import type { ReactNode } from "react";

/**
 * NOT IN STORYBOOK YET. Small pieces the pages share; each is a candidate for a Storybook component.
 */

/** The prototype's `.overline`: 11/12, 600, +.09em, uppercase, tertiary. */
export function Overline({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`m-0 mb-3 font-ui text-[11px] leading-3 font-label tracking-[0.09em] text-ink-tertiary uppercase ${className}`}>{children}</p>;
}

/** Five 16px stars, `n` filled in the tone's colour and the rest in the border colour (the prototype's `.ts-stars`). */
export function Stars({ n, tone, size = 16 }: { n: number; tone: "is-great" | "is-good" | "is-low" | string; size?: number }) {
  const color = tone === "is-great" ? "text-success" : tone === "is-good" ? "text-caution" : "text-danger";
  return (
    <span className={`inline-flex gap-[2px] ${color}`} role="img" aria-label={`${n} of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
          <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" fill={i <= n ? "currentColor" : "var(--tt-border)"} />
        </svg>
      ))}
    </span>
  );
}

/** The learner initial circle (`.rp-avatar--1..5`): Storybook's Avatar tones, in the prototype's order. */
export const AVATAR_TONES = ["success", "info", "caution", "danger", "brand"] as const;
