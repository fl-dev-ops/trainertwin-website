import { cn } from "./cn";

/**
 * A rule: `border-top: var(--tt-border-thin) solid var(--tt-border)`. Use one only
 * where whitespace has already failed. Most things read better with more space and
 * no line. A visual-only divider is `aria-hidden`; pass `semantic` where the rule
 * genuinely separates two regions a screen reader should know about.
 */
export interface DividerProps {
  /** Announce as a separator. Default false: most rules are decoration. */
  semantic?: boolean;
  /** `vertical` for a rule inside a toolbar row. */
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function Divider({ semantic = false, orientation = "horizontal", className }: DividerProps) {
  const vertical = orientation === "vertical";
  return (
    <hr
      {...(semantic ? { role: "separator", "aria-orientation": orientation } : { "aria-hidden": true })}
      className={cn(
        "m-0 border-0 bg-line",
        vertical ? "h-full min-h-4 w-[var(--tt-border-thin)] self-stretch" : "h-[var(--tt-border-thin)] w-full",
        className,
      )}
    />
  );
}
