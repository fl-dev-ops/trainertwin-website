"use client";

import { useRef, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "./cn";

/**
 * The default tabbed-content pattern (§8), to the V3 prototype's `.seg` (16 Nov 2026): padding 4,
 * no border, a sunken trough, buttons 14/20 with 6 / 16 padding. The selected segment is a raised
 * pill on `--tt-surface` with `--tt-elevation-1`. Its icon takes brand orange; the rest stay muted.
 *
 * Rules, from the spec: two to four segments (beyond four, use a select);
 * short parallel labels; something is always selected; never for a committing or
 * destructive action.
 *
 * Built as a radiogroup: arrow keys move AND select, Home/End jump, one tab stop.
 */
export interface SegmentOption<T extends string> {
  value: T;
  label: string;
  icon?: ReactNode;
  /** After the label: a count, or the prototype's 8px orange dot for "something is waiting". */
  badge?: ReactNode;
}

export interface SegmentedControlProps<T extends string> {
  options: readonly SegmentOption<T>[];
  value: T;
  onChange: (next: T) => void;
  /** Names the control for assistive tech, e.g. "View". Required. */
  "aria-label": string;
  /** Stretch to the container; segments share the width. */
  fullWidth?: boolean;
  className?: string;
}

export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  fullWidth = false,
  className,
  ...rest
}: SegmentedControlProps<T>) {
  const refs = useRef<Array<HTMLButtonElement | null>>([]);

  function onKey(e: KeyboardEvent, i: number) {
    const n = options.length;
    const to =
      e.key === "ArrowRight" || e.key === "ArrowDown"
        ? (i + 1) % n
        : e.key === "ArrowLeft" || e.key === "ArrowUp"
          ? (i + n - 1) % n
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? n - 1
              : null;
    if (to === null) return;
    e.preventDefault();
    onChange(options[to].value);
    refs.current[to]?.focus();
  }

  return (
    <div
      role="radiogroup"
      aria-label={rest["aria-label"]}
      className={cn(
        // The V3 prototype's `.seg` (16 Nov 2026): padding 4, no border, a sunken trough, a pill.
        "items-center rounded-full bg-surface-sunken p-1",
        fullWidth ? "flex w-full" : "inline-flex",
        className,
      )}
    >
      {options.map((o, i) => {
        const on = o.value === value;
        return (
          <button
            key={o.value}
            ref={(el) => {
              refs.current[i] = el;
            }}
            type="button"
            role="radio"
            aria-checked={on}
            tabIndex={on ? 0 : -1}
            onClick={() => onChange(o.value)}
            onKeyDown={(e) => onKey(e, i)}
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-4 py-[6px]",
              "font-ui text-[14px] leading-5 font-label whitespace-nowrap",
              "transition-[color,background-color,box-shadow] duration-(--tt-duration-quick) ease-standard",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
              fullWidth && "flex-1 justify-center",
              on ? "bg-surface text-ink shadow-e1" : "text-ink-secondary hover:text-ink",
            )}
          >
            {o.icon ? <span className={cn("flex-none", on && "text-primary")}>{o.icon}</span> : null}
            {o.label}
            {o.badge}
          </button>
        );
      })}
    </div>
  );
}
