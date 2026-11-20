import type { ElementType, ReactNode } from "react";
import { cn } from "./cn";

/**
 * The page body inside the main sheet: centred, a max width, and the padding that goes with it. One place for the five
 * shapes the product uses, so a page says what it is, not which pixels.
 *
 *   `library`  1024, 64 side padding, 20 top: lists and dashboards (Twin agents, sessions, scenarios).
 *   `account`  1000, same padding: Usage and Billing.
 *   `fluid`    no max width, same padding: a wide table page (Persona).
 *   `reading`  720, 32 side padding, 24 top: a report or an overview read top to bottom.
 *   `form`     718, no side padding, 40 top: a single card of fields, centred under a back bar.
 */
const sizes = {
  library: "max-w-[1024px] px-16 pt-5 pb-8",
  account: "max-w-[1000px] px-16 pt-5 pb-8",
  fluid: "px-16 pt-5 pb-8",
  reading: "max-w-[720px] px-8 pt-6 pb-8",
  form: "max-w-[718px] pt-10 pb-12",
} as const;
export type PageSize = keyof typeof sizes;

export function Page({ size = "library", as: Tag = "div", className, children }: { size?: PageSize; as?: ElementType; className?: string; children: ReactNode }) {
  return <Tag className={cn("mx-auto w-full", sizes[size], className)}>{children}</Tag>;
}
