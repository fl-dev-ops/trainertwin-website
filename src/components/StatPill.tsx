import type { ReactNode } from "react";
import { cn } from "./cn";

/**
 * A count against a source or item: "14 pages", "36 posts". `--tt-fill-soft`, pill
 * radius, secondary text, tabular numbers, `--tt-pad-pill-md`. A standalone stat that sits
 * inside a card. Not Button's `count` prop, which is an unread count glued to a control.
 */
export function StatPill({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-fill-soft font-ui text-[12px] leading-4 text-ink-secondary tabular-nums whitespace-nowrap",
        "[padding:var(--tt-pad-pill-md)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
