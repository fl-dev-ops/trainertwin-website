"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { cn } from "./cn";
import { InfoIcon } from "./UiIcons";

/**
 * Tooltip (§8, Menu, tooltip). Inverted: `--tt-text-primary` background with
 * `--tt-canvas` text, so it reads as a different layer in both themes. Tooltips
 * EXPLAIN. They never hold the only copy of something required: anything the user
 * needs must also be on the page or reachable by assistive tech (see `InfoHint`).
 *
 * Opens on hover after a short delay and on keyboard focus at once; closes on leave,
 * blur and Escape. The bubble is `role="tooltip"`, linked to the trigger with
 * `aria-describedby`, and `pointer-events: none` so it never traps the pointer.
 *
 * Wrap any single focusable element. For a non-interactive thing (a chart bar,
 * a ring) give the wrapped element `tabIndex={0}`.
 */
export type TooltipSide = "top" | "bottom";

export interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  side?: TooltipSide;
  /** Hover delay in ms. Focus is always immediate. */
  delay?: number;
  className?: string;
}

export function Tooltip({ content, children, side = "top", delay = 250, className }: TooltipProps) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const show = (wait: number) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(true), wait);
  };
  const hide = () => {
    clearTimeout(timer.current);
    setOpen(false);
  };

  return (
    <span
      className={cn("relative inline-flex", className)}
      aria-describedby={open ? id : undefined}
      onMouseEnter={() => show(delay)}
      onMouseLeave={hide}
      onFocus={() => show(0)}
      onBlur={hide}
      onKeyDown={(e) => e.key === "Escape" && hide()}
    >
      {children}
      <span
        id={id}
        role="tooltip"
        className={cn(
          "pointer-events-none absolute left-1/2 z-(--tt-z-tooltip) w-max max-w-[240px] -translate-x-1/2",
          "rounded-sm bg-ink px-2 py-1 font-ui text-[12px] leading-4 text-canvas shadow-e2",
          "transition-opacity duration-(--tt-duration-quick) ease-standard",
          side === "top" ? "bottom-[calc(100%+6px)]" : "top-[calc(100%+6px)]",
          open ? "opacity-100" : "invisible opacity-0",
        )}
      >
        {content}
      </span>
    </span>
  );
}

/**
 * A hint that lives behind an info icon: the icon is a real button (focusable, so a
 * keyboard user gets the tooltip too), and the text is also rendered once for
 * assistive tech and linked by the caller via `id`, so the tooltip is never the only copy.
 */
export function InfoHint({ id, children, label = "More information" }: { id: string; children: ReactNode; label?: string }) {
  return (
    <>
      <Tooltip content={children}>
        <button
          type="button"
          aria-label={label}
          className="grid h-5 w-5 place-items-center rounded-full text-ink-tertiary hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <InfoIcon size={14} />
        </button>
      </Tooltip>
      <span id={id} className="sr-only">
        {children}
      </span>
    </>
  );
}
