import type { ElementType, ReactNode } from "react";
import { cn } from "./cn";

/**
 * The small uppercase label that sits above a value or a section (V3 `.overline`): 11/12, 600, +.09em, uppercase,
 * `--tt-text-tertiary`. No margin of its own; the caller spaces it. Use `as` to change the element (a `p` by default;
 * a `span` inside a flow, a `dt` in a definition list). It is a label, not a heading: if it names a section, put a
 * real heading next to it.
 */
export function Eyebrow({ children, as: Tag = "p", className }: { children: ReactNode; as?: ElementType; className?: string }) {
  return <Tag className={cn("m-0 font-ui text-[11px] leading-3 font-label tracking-[0.09em] text-ink-tertiary uppercase", className)}>{children}</Tag>;
}
