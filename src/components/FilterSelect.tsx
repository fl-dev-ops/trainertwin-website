"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "./cn";
import { ChevronDownIcon } from "./icons";

/**
 * The compact filter control for toolbars and page headers (V3 `.bot-range .home-ask-mode` and `.bq-chip`): a pill that
 * opens a listbox. `Select` is the labelled form field; this is for narrowing a list.
 *
 *   `select`  shows the chosen option's label with a chevron; 32px, a 1px field border, `--tt-text-primary`. The list
 *             lines up with the pill's right edge. For "All cohorts", "Last 30 days".
 *   `chip`    shows a fixed `label` (with an optional leading `icon`) and highlights when anything other than the first
 *             option is chosen; no chevron. For a row of independent filters ("Agent", "Date asked"). The list lines up
 *             with the left edge.
 *
 * The first option is the "no filter" choice. Keyboard: Enter, Space or ArrowDown on the pill opens the list and focuses
 * the chosen option; ArrowUp/Down, Home and End move; Enter picks; Escape closes and returns focus; Tab closes.
 */
export interface FilterOption {
  value: string;
  label: string;
}

export interface FilterSelectProps {
  /** Names the filter ("Filter by cohort"). In the `chip` variant it is also the text on the pill. */
  label: string;
  options: readonly FilterOption[];
  value: string;
  onChange: (next: string) => void;
  variant?: "select" | "chip";
  /** Leading glyph, `chip` only. */
  icon?: ReactNode;
  /** `select` width in px or any CSS length. Default: as wide as its text. */
  width?: number | string;
  className?: string;
}

export function FilterSelect({ label, options, value, onChange, variant = "select", icon, width, className }: FilterSelectProps) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const refs = useRef<Array<HTMLButtonElement | null>>([]);
  const chip = variant === "chip";
  const current = options.find((o) => o.value === value) ?? options[0];
  const active = chip && value !== options[0].value;

  useEffect(() => {
    if (!open) return;
    const away = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", away);
    return () => document.removeEventListener("pointerdown", away);
  }, [open]);

  useEffect(() => {
    if (open) refs.current[Math.max(0, options.findIndex((o) => o.value === value))]?.focus();
    // Only when it opens: re-running as the value changes would yank focus.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function close(refocus = true) {
    setOpen(false);
    if (refocus) trigger.current?.focus();
  }
  function onTriggerKey(e: KeyboardEvent) {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      setOpen(true);
    }
  }
  function onListKey(e: KeyboardEvent) {
    const i = refs.current.findIndex((r) => r === document.activeElement);
    const go = (n: number) => refs.current[(n + options.length) % options.length]?.focus();
    if (e.key === "ArrowDown") { e.preventDefault(); go(i + 1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); go(i - 1); }
    else if (e.key === "Home") { e.preventDefault(); go(0); }
    else if (e.key === "End") { e.preventDefault(); go(options.length - 1); }
    else if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); close(); }
    else if (e.key === "Tab") close(false);
  }

  return (
    <div ref={root} className={cn("relative", className)} style={!chip && width !== undefined ? { width } : undefined}>
      <button
        ref={trigger}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? id : undefined}
        aria-label={`${label}: ${current.label}`}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onTriggerKey}
        className={cn(
          "inline-flex h-8 items-center gap-2 rounded-full border font-ui text-[13px] leading-5 text-ink",
          "hover:border-line-interactive focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
          chip
            ? cn("cursor-pointer px-[14px] [&_svg]:h-4 [&_svg]:w-4 [&_svg]:text-ink-secondary", active ? "border-line-interactive bg-fill-soft" : "border-line-field bg-surface")
            : "w-full cursor-pointer justify-between border-line-field bg-surface pr-3 pl-4 font-label",
        )}
      >
        {chip ? (
          <>
            {icon}
            {label}
          </>
        ) : (
          <>
            <span className="min-w-0 flex-1 truncate text-left">{current.label}</span>
            <ChevronDownIcon size={12} className="flex-none" />
          </>
        )}
      </button>
      {open ? (
        <div
          id={id}
          role="listbox"
          aria-label={label}
          onKeyDown={onListKey}
          className={cn("absolute top-[calc(100%+4px)] z-(--tt-z-dropdown) min-w-full rounded-md bg-surface-raised p-2 font-ui shadow-e2", chip ? "left-0 min-w-[180px]" : "right-0 rounded-sm")}
        >
          {options.map((o, i) => (
            <button
              key={o.value}
              ref={(el) => {
                refs.current[i] = el;
              }}
              type="button"
              role="option"
              aria-selected={o.value === value}
              onClick={() => {
                onChange(o.value);
                close();
              }}
              className={cn(
                "flex w-full cursor-pointer items-center text-left whitespace-nowrap text-ink focus-visible:bg-fill-soft focus-visible:outline-none",
                chip ? "min-h-10 rounded-sm px-3 text-[14px] leading-5" : "min-h-8 rounded-xs px-[10px] py-[6px] text-[13px] leading-5",
                o.value === value ? (chip ? "bg-fill-soft" : "font-label") : "hover:bg-fill-soft",
              )}
            >
              {o.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
