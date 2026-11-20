import { cn } from "./cn";

/**
 * Five stars, `value` of them filled (V3 `.ts-stars`). The colour follows the value unless you set `tone`: 5 is
 * success, 4 is caution (gold), 3 or less is danger. Unfilled stars use the border colour. Read as an image with its
 * own label ("4 of 5 stars"), so the stars are never the only name for the rating.
 */
export type StarTone = "great" | "good" | "low";
const toneClass: Record<StarTone, string> = { great: "text-success", good: "text-caution", low: "text-danger" };
export const starTone = (value: number): StarTone => (value >= 5 ? "great" : value === 4 ? "good" : "low");

export function StarRating({ value, size = 16, tone, label, className }: { value: number; size?: number; tone?: StarTone; label?: string; className?: string }) {
  const n = Math.max(0, Math.min(5, Math.round(value)));
  return (
    <span role="img" aria-label={label ?? `${n} of 5 stars`} className={cn("inline-flex gap-[2px]", toneClass[tone ?? starTone(n)], className)}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
          <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" fill={i <= n ? "currentColor" : "var(--tt-border)"} />
        </svg>
      ))}
    </span>
  );
}
