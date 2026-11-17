"use client";

import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "./cn";
import { SearchField } from "./SearchField";

/**
 * The compact filter control for toolbars and page headers (V3 `.bot-range .home-ask-mode` and `.bq-chip`): a pill that
 * opens a listbox. `Select` is the labelled form field; this is for narrowing a list.
 *
 *   `select`  shows the chosen option's label with a chevron; 32px, a hairline field border (`--tt-border-form`, 0.5px), a thin 12×7 chevron, `--tt-text-primary`. The list
 *             lines up with the pill's right edge. For "All cohorts", "Last 30 days".
 *   `chip`    shows a fixed `label` (with an optional leading `icon`) and highlights when anything other than the first
 *             option is chosen; no chevron. For a row of independent filters ("Agent", "Date asked"). The list lines up
 *             with the left edge.
 *
 * The list is V3's one dropdown surface (`.twin-hero-ask-menu`): white, 1px card border, 12px radius, 8px padding, 2px
 * between options, 6px below the pill. Each option is 36px; hover and the chosen option share one soft grey.
 *
 * The first option is the "no filter" choice. Keyboard: Enter, Space or ArrowDown on the pill opens the list and focuses
 * the chosen option; ArrowUp/Down, Home and End move; Enter picks; Escape closes and returns focus; Tab closes.
 */
export interface FilterOption {
  value: string;
  label: string;
  /** A second, quieter line under the label (an email under a name). Also searched. */
  description?: string;
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
  /**
   * Put a search box above the list (V3's learner filter): typing narrows the options by label and description. The list
   * becomes 320 wide and scrolls past 360. Every option is searched, "All learners" included.
   */
  searchable?: boolean;
  searchPlaceholder?: string;
  /** Shown when the search matches nothing. */
  emptyText?: string;
  /** Start with the list open. For documentation and tests; real pages leave it closed. */
  defaultOpen?: boolean;
  className?: string;
}

export function FilterSelect({ label, options, value, onChange, variant = "select", icon, width, searchable = false, searchPlaceholder = "Search", emptyText = "Nothing matches that search.", defaultOpen = false, className }: FilterSelectProps) {
  const [open, setOpen] = useState(defaultOpen);
  const [query, setQuery] = useState("");
  const searchBox = useRef<HTMLDivElement>(null);
  const id = useId();
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const refs = useRef<Array<HTMLButtonElement | null>>([]);
  const chip = variant === "chip";
  const current = options.find((o) => o.value === value) ?? options[0];
  const active = chip && value !== options[0].value;
  const q = query.trim().toLowerCase();
  const shown = useMemo(
    () => (searchable && q ? options.filter((o) => `${o.label} ${o.description ?? ""}`.toLowerCase().includes(q)) : options),
    [options, q, searchable],
  );
  const empty = searchable && shown.length === 0;

  useEffect(() => {
    if (!open) return;
    const away = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", away);
    return () => document.removeEventListener("pointerdown", away);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    if (searchable) searchBox.current?.querySelector("input")?.focus();
    else refs.current[Math.max(0, options.findIndex((o) => o.value === value))]?.focus();
    // Only when it opens: re-running as the value changes would yank focus.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function close(refocus = true) {
    setOpen(false);
    setQuery("");
    if (refocus) trigger.current?.focus();
  }
  function onTriggerKey(e: KeyboardEvent) {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      setOpen(true);
    }
  }
  function onListKey(e: KeyboardEvent) {
    const live = refs.current.slice(0, shown.length);
    if (e.key === "ArrowDown" && document.activeElement instanceof HTMLInputElement) { e.preventDefault(); live[0]?.focus(); return; }
    const i = live.findIndex((r) => r === document.activeElement);
    const go = (n: number) => shown.length && live[(n + shown.length) % shown.length]?.focus();
    if (e.key === "ArrowDown") { e.preventDefault(); go(i + 1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); go(i - 1); }
    else if (e.key === "Home") { e.preventDefault(); go(0); }
    else if (e.key === "End") { e.preventDefault(); go(shown.length - 1); }
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
          "inline-flex h-8 items-center gap-2 rounded-full border-solid font-ui text-[13px] leading-5 text-ink",
          "hover:border-line-interactive focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
          // The chip is a 1px outline (V3 `.bq-chip`); the select pill is a form-weight hairline (`--tt-border-form`, 0.5px).
          chip
            ? cn("cursor-pointer border px-[14px] [&_svg]:h-4 [&_svg]:w-4 [&_svg]:text-ink-secondary", active ? "border-line-interactive bg-fill-soft" : "border-line-field bg-surface")
            : "w-full cursor-pointer justify-between border-[length:var(--tt-border-form)] border-line-field bg-surface pr-3 pl-4 font-label",
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
            <svg viewBox="3.8 5.8 8.4 4.9" fill="none" aria-hidden="true" className="h-[7px] w-3 flex-none">
              <path d="M4.5 6.5 8 10l3.5-3.5" stroke="currentColor" strokeWidth="0.94" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </>
        )}
      </button>
      {open ? (
        <div
          onKeyDown={onListKey}
          className={cn(
            "absolute top-[calc(100%+6px)] z-(--tt-z-dropdown) flex min-w-full flex-col gap-0.5 rounded-md border border-line-card bg-surface p-2 font-ui shadow-e2",
            chip ? "left-0 min-w-[180px]" : "right-0",
            searchable ? "max-h-[360px] w-[320px] overflow-y-auto" : "w-max",
          )}
        >
          {searchable ? (
            <div ref={searchBox} className="mb-1">
              <SearchField label={`Search ${label.replace(/^Filter by /i, "").toLowerCase()}`} placeholder={searchPlaceholder} value={query} onChange={setQuery} appearance="field" className="hover:border-line-interactive focus-within:border-line-interactive focus-within:outline-0!" />
            </div>
          ) : null}
          <div id={id} role="listbox" aria-label={label} className="flex flex-col gap-0.5">
            {shown.map((o, i) => (
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
                  // One look for both variants (V3 `.twin-hero-ask-opt`): 36px, 8px radius, 14px. The chosen option keeps
                  // the grey fill and the label weight; hover and keyboard focus paint the same grey on the others, so
                  // the chosen one and the one under the pointer can both be grey at once.
                  "flex min-h-9 w-full cursor-pointer items-center rounded-sm px-2 py-2 text-left text-[14px] leading-5 whitespace-nowrap text-ink",
                  "hover:bg-fill-soft focus-visible:bg-fill-soft focus-visible:outline-none",
                  o.description && "flex-col items-start gap-0",
                  o.value === value && "bg-fill-soft font-label",
                )}
              >
                {o.description ? (
                  <>
                    <span className="text-[14px] leading-5">{o.label}</span>
                    <span className="text-[12px] leading-4 font-normal text-ink-secondary">{o.description}</span>
                  </>
                ) : (
                  o.label
                )}
              </button>
            ))}
          </div>
          {empty ? <p className="m-0 p-3 text-center text-[13px] text-ink-secondary">{emptyText}</p> : null}
        </div>
      ) : null}
    </div>
  );
}
