import type { ButtonHTMLAttributes } from "react";
import { cn } from "./cn";
import { ArrowUpRightIcon } from "./UiIcons";

/**
 * The "Needs a look" chips (§8). 32px pills, 13/500, trailing ↗ at 14px. Order them
 * by priority. Pressing one toggles a filter on the table below it, and the page
 * shows a "Show all" link while one is on: `pressed` is that state.
 *
 * Hover and pressed are a 1px inset outline in the chip's OWN colour, so the chip
 * keeps its size. Each chip carries a word, never colour alone.
 */
export type AttentionTone = "danger" | "caution" | "info";

const tone: Record<AttentionTone, string> = {
  danger: "bg-danger-subtle text-danger hover:shadow-[inset_0_0_0_1px_var(--tt-danger)] aria-pressed:shadow-[inset_0_0_0_1px_var(--tt-danger)]",
  caution: "bg-caution-subtle text-caution hover:shadow-[inset_0_0_0_1px_var(--tt-caution)] aria-pressed:shadow-[inset_0_0_0_1px_var(--tt-caution)]",
  info: "bg-info-subtle text-info hover:shadow-[inset_0_0_0_1px_var(--tt-info)] aria-pressed:shadow-[inset_0_0_0_1px_var(--tt-info)]",
};

export interface AttentionChipProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  tone: AttentionTone;
  label: string;
  /** Toggled state of the filter this chip controls. */
  pressed?: boolean;
}

export function AttentionChip({ tone: t, label, pressed = false, className, ...rest }: AttentionChipProps) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      className={cn(
        "inline-flex h-8 items-center gap-1 rounded-full px-4 font-ui text-[13px] leading-5 font-medium",
        "transition-shadow duration-(--tt-duration-quick) ease-standard",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        tone[t],
        className,
      )}
      {...rest}
    >
      {label}
      <ArrowUpRightIcon size={14} />
    </button>
  );
}
