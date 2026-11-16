import type { ReactNode } from "react";
import { cn } from "./cn";

/**
 * A headline metric card (§8). Two sit in a row, equal width, 16 apart, 108px tall,
 * `--tt-radius-md`, the standard card border and shadow, padding 20 × 24.
 *
 * A number and its count share ONE text baseline, the count pushed to the card's
 * right edge. Wording is "21 sessions rated", never "of 27".
 *
 * `visual` is the left slot: the 66px rating illustration, or `ProgressRing`.
 */
export interface SummaryCardProps {
  title: string;
  icon?: ReactNode;
  /** The big number: "4.3" or "AED 90". */
  value: ReactNode;
  /** Muted suffix next to the number, e.g. "/ 5". */
  unit?: string;
  /** Right-aligned on the number's baseline: "21 sessions rated". */
  count?: string;
  /** `sm` is the prototype's 24px figure for a money amount ("AED 630"); the default 32px suits a score. */
  valueSize?: "md" | "sm";
  visual?: ReactNode;
  className?: string;
}

export function SummaryCard({ title, icon, value, unit, count, valueSize = "md", visual, className }: SummaryCardProps) {
  return (
    <div
      className={cn(
        "flex min-h-[104px] flex-1 items-center gap-4 rounded-lg border border-line-card bg-surface px-6 py-5 shadow-e1",
        className,
      )}
    >
      {visual ? <div className="flex-none">{visual}</div> : null}
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <div className="flex items-center gap-[6px] font-ui text-[15px] leading-5 text-ink-secondary">
          {icon ? <span className="flex-none [&>svg]:h-[14px] [&>svg]:w-[14px]">{icon}</span> : null}
          {title}
        </div>
        <div className="flex items-baseline justify-between gap-4">
          <span className={cn("font-ui font-title tabular-nums text-ink", valueSize === "sm" ? "text-[24px] leading-none tracking-[-0.01em]" : "text-[32px] leading-[1.1]")}>
            {value}
            {unit ? <span className="ml-1 text-[15px] font-normal text-ink-secondary">{unit}</span> : null}
          </span>
          {count ? <span className="font-ui text-[14px] leading-5 text-ink-secondary tabular-nums">{count}</span> : null}
        </div>
      </div>
    </div>
  );
}

export { ProgressRing } from "./Progress";
