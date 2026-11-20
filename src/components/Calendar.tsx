"use client";

import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "./cn";

/**
 * Calendar and date field (§8, Date field). Orange marks TODAY (a dot under the number);
 * the dark CTA marks the SELECTION. Two different facts, two treatments: a day number is
 * about 13px, far below the size at which white-on-orange stays legible, so "selected" is
 * never orange (D76).
 *
 * `Calendar`: 288px, `--tt-radius-md`, `--tt-elevation-2`, padding 12 / 16 / 16. A header with
 * the month at 14/600 and two 28px round ghost buttons (previous is disabled on the current
 * month); Sunday-first two-letter weekdays at 12px; 34px day circles at 13px. Days before
 * `min` (today by default) are disabled at 45% opacity and the footer says why: a disabled day
 * always needs a reason in the UI. Keyboard: arrows move by day and week, PageUp / PageDown by
 * month, Home / End to the start and end of the week; Enter or Space picks.
 *
 * `DateField`: ALWAYS keeps the typable text input (typing "17 sep" beats four taps through a
 * grid, and it is the route that works with a screen reader). It is a real `<input type="date">`
 * with the native picker indicator hidden and our own 16px calendar icon at the right; it never
 * calls the native `showPicker()`. Clicking anywhere on the field opens the popover; Escape
 * closes it first (and stops there, so a dialog around it stays open).
 *
 * Dates are `yyyy-mm-dd` strings in local time throughout; no timezone arithmetic.
 */

const pad = (n: number) => String(n).padStart(2, "0");
export const toIso = (y: number, m: number, d: number) => `${y}-${pad(m + 1)}-${pad(d)}`;
export const todayIso = () => {
  const d = new Date();
  return toIso(d.getFullYear(), d.getMonth(), d.getDate());
};
const parse = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return { y, m: m - 1, d };
};
const addDays = (iso: string, n: number) => {
  const { y, m, d } = parse(iso);
  const t = new Date(y, m, d + n);
  return toIso(t.getFullYear(), t.getMonth(), t.getDate());
};
const addMonths = (iso: string, n: number) => {
  const { y, m, d } = parse(iso);
  const first = new Date(y, m + n, 1);
  const last = new Date(first.getFullYear(), first.getMonth() + 1, 0).getDate();
  return toIso(first.getFullYear(), first.getMonth(), Math.min(d, last));
};
/** Sunday-first two-letter initials in the given locale ("Su Mo Tu…" in English). */
const weekdays = (locale: string) =>
  Array.from({ length: 7 }, (_, i) => new Date(2023, 0, 1 + i).toLocaleDateString(locale, { weekday: "short" }).slice(0, 2));

export interface CalendarProps {
  /** Selected date, `yyyy-mm-dd`, or "" for none. */
  value: string;
  onChange: (iso: string) => void;
  /** Earliest pickable date. Defaults to today. */
  min?: string;
  /** Override "today", for tests and docs. */
  today?: string;
  /**
   * Why disabled days are disabled, shown as the footer. A disabled day always needs a reason in
   * the UI. The default is neutral; write the product's own words ("Dates before today can't be picked").
   */
  disabledReason?: ReactNode;
  /** BCP 47 locale for the month name, weekday initials and day labels. Default en-GB. */
  locale?: string;
  /** Accessible names, for translation. */
  labels?: { previousMonth?: string; nextMonth?: string };
  className?: string;
}

export function Calendar({ value, onChange, min, today = todayIso(), disabledReason = "Earlier dates can’t be selected.", locale = "en-GB", labels, className }: CalendarProps) {
  const lower = min ?? today;
  const start = value && value >= lower ? value : today >= lower ? today : lower;
  const [focus, setFocus] = useState(start);
  const [view, setView] = useState(() => ({ y: parse(start).y, m: parse(start).m }));
  const gridRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  const lead = new Date(view.y, view.m, 1).getDay();
  const count = new Date(view.y, view.m + 1, 0).getDate();
  const lowerMonth = parse(lower);
  const atFirstMonth = view.y < lowerMonth.y || (view.y === lowerMonth.y && view.m <= lowerMonth.m);
  const title = new Date(view.y, view.m, 1).toLocaleDateString(locale, { month: "long", year: "numeric" });

  function step(iso: string) {
    const next = iso < lower ? lower : iso;
    setFocus(next);
    const p = parse(next);
    setView({ y: p.y, m: p.m });
  }
  function nav(delta: number) {
    const base = new Date(view.y, view.m + delta, 1);
    const day = Math.min(parse(focus).d, new Date(base.getFullYear(), base.getMonth() + 1, 0).getDate());
    step(toIso(base.getFullYear(), base.getMonth(), day));
  }

  // After a keyboard move changes the month, put focus on the new day.
  const moved = useRef(false);
  useEffect(() => {
    if (!moved.current) return;
    moved.current = false;
    gridRef.current?.querySelector<HTMLButtonElement>(`[data-iso="${focus}"]`)?.focus();
  }, [focus, view]);

  function onKey(e: KeyboardEvent) {
    const k = e.key;
    const dow = new Date(parse(focus).y, parse(focus).m, parse(focus).d).getDay();
    const to =
      k === "ArrowLeft" ? addDays(focus, -1)
      : k === "ArrowRight" ? addDays(focus, 1)
      : k === "ArrowUp" ? addDays(focus, -7)
      : k === "ArrowDown" ? addDays(focus, 7)
      : k === "PageUp" ? addMonths(focus, -1)
      : k === "PageDown" ? addMonths(focus, 1)
      : k === "Home" ? addDays(focus, -dow)
      : k === "End" ? addDays(focus, 6 - dow)
      : null;
    if (!to) return;
    e.preventDefault();
    moved.current = true;
    step(to);
  }

  const weeks = useMemo(() => {
    const cells: Array<string | null> = Array.from({ length: lead }, () => null);
    for (let d = 1; d <= count; d += 1) cells.push(toIso(view.y, view.m, d));
    while (cells.length % 7) cells.push(null);
    return Array.from({ length: cells.length / 7 }, (_, i) => cells.slice(i * 7, i * 7 + 7));
  }, [lead, count, view]);

  const ghost =
    "grid h-7 w-7 place-items-center rounded-full text-ink-secondary hover:bg-fill-soft hover:text-ink disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-transparent focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary";

  return (
    <div role="group" aria-labelledby={titleId} className={cn("w-[288px] rounded-md border border-line-card bg-surface px-4 pt-3 pb-4 font-ui shadow-e2", className)}>
      <div className="mb-2 flex items-center justify-between">
        <span id={titleId} aria-live="polite" className="text-[14px] leading-5 font-label text-ink">
          {title}
        </span>
        <span className="flex gap-1">
          <button type="button" aria-label={labels?.previousMonth ?? "Previous month"} disabled={atFirstMonth} onClick={() => nav(-1)} className={ghost}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M10 4 6 8l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button type="button" aria-label={labels?.nextMonth ?? "Next month"} onClick={() => nav(1)} className={ghost}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </span>
      </div>
      <div ref={gridRef} role="grid" aria-labelledby={titleId} onKeyDown={onKey} className="flex flex-col gap-y-[2px] text-center">
        <div role="row" className="grid grid-cols-7 gap-x-[2px]">
          {weekdays(locale).map((w) => (
            <span key={w} role="columnheader" className="grid h-7 place-items-center text-[12px] text-ink-secondary tabular-nums">
              {w}
            </span>
          ))}
        </div>
        {weeks.map((week, wi) => (
          <div key={wi} role="row" className="grid grid-cols-7 gap-x-[2px]">
            {week.map((iso, i) => {
              if (!iso) return <span key={`b${wi}-${i}`} role="gridcell" />;
              const disabled = iso < lower;
              const selected = iso === value;
              const isToday = iso === today;
              const { d } = parse(iso);
              return (
                <span key={iso} role="gridcell" aria-selected={selected} className="grid place-items-center">
                  <button
                    type="button"
                    data-iso={iso}
                    disabled={disabled}
                    tabIndex={iso === focus ? 0 : -1}
                    aria-current={isToday ? "date" : undefined}
                    aria-label={new Date(view.y, view.m, d).toLocaleDateString(locale, { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
                    onClick={() => onChange(iso)}
                    className={cn(
                      "relative grid h-[34px] w-[34px] place-items-center rounded-full text-[13px] tabular-nums",
                      disabled ? "cursor-not-allowed" : "cursor-pointer",
                      "focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary",
                      selected ? "bg-strong font-label text-on-strong" : "text-ink hover:bg-fill-soft",
                      disabled && "text-ink-tertiary opacity-45 hover:bg-transparent",
                    )}
                  >
                    {d}
                    {isToday ? <span aria-hidden="true" className={cn("absolute bottom-[3px] h-1 w-1 rounded-full", selected ? "bg-on-strong" : "bg-primary")} /> : null}
                  </button>
                </span>
              );
            })}
          </div>
        ))}
      </div>
      <p className="mt-3 text-[12px] leading-4 text-ink-secondary">{disabledReason}</p>
    </div>
  );
}

/* ---------------------------------------------------------------- DateField */

export interface DateFieldProps {
  label: string;
  value: string;
  onChange: (iso: string) => void;
  min?: string;
  today?: string;
  hint?: ReactNode;
  error?: string;
  /** Passed to the calendar. */
  disabledReason?: ReactNode;
  locale?: string;
  labels?: CalendarProps["labels"];
  /** 150 × 32, for a field in a popup row. */
  compact?: boolean;
  disabled?: boolean;
  className?: string;
}

export function DateField({ label, value, onChange, min, today, hint, error, disabledReason, locale, labels, compact = false, disabled, className }: DateFieldProps) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const wrap = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    const away = (e: PointerEvent) => {
      if (!wrap.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", away);
    return () => document.removeEventListener("pointerdown", away);
  }, [open]);

  return (
    <div ref={wrap} className={cn("relative flex flex-col gap-1.5 font-ui", compact ? "w-[150px]" : "w-full", className)}>
      <label htmlFor={id} className="text-[13px] leading-5 font-label text-ink-secondary">
        {label}
      </label>
      <div
        className="relative"
        onClick={() => !disabled && setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Escape" && open) {
            e.stopPropagation();
            setOpen(false);
          }
        }}
      >
        <input
          ref={input}
          id={id}
          type="date"
          value={value}
          min={min}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          onChange={(e) => onChange(e.target.value)}
          className={cn(
            "w-full rounded-sm bg-surface pr-9 pl-3 text-[14px] text-ink font-ui tabular-nums",
            compact ? "h-8" : "h-10",
            "border-[length:var(--tt-border-form)] border-solid",
            error ? "border-danger" : "border-line-field hover:border-line-interactive focus:border-line-interactive",
            "focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
            "disabled:cursor-not-allowed disabled:opacity-45",
            // Hide the native picker; we draw our own icon and never call showPicker().
            "[&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none",
          )}
        />
        <span aria-hidden="true" className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-ink-tertiary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="5" width="16" height="16" rx="2" />
            <path d="M16 3v4M8 3v4M4 11h16" />
          </svg>
        </span>
      </div>
      {error ? <p className="text-[13px] leading-5 text-danger">{error}</p> : hint ? <p className="text-[13px] leading-5 text-ink-tertiary">{hint}</p> : null}
      {open ? (
        <div role="dialog" aria-label={`Choose ${label.toLowerCase()}`} className="absolute top-full left-0 z-(--tt-z-dropdown) mt-1">
          <Calendar
            value={value}
            min={min}
            today={today}
            disabledReason={disabledReason}
            locale={locale}
            labels={labels}
            onChange={(iso) => {
              onChange(iso);
              setOpen(false);
              input.current?.focus();
            }}
          />
        </div>
      ) : null}
    </div>
  );
}
