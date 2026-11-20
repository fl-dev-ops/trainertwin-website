"use client";

import { createContext, useContext, useId, useRef, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "./cn";

/**
 * Underline tabs (§8). Secondary: reach for the Segmented control first, and use these only
 * when a screen calls for them by name: more than four options, a wide horizontal nav where
 * pills would read as buttons, or many sections of one large object (Sources / Pedagogy /
 * Guardrails / Sessions). The selected tab has a 2px bottom border in `--tt-primary` and its
 * label in `--tt-primary-ink`. Something is always selected; labels stay short and parallel.
 *
 * Built to the ARIA tabs pattern: `role="tablist"`, roving tabindex, arrow keys move AND
 * select (automatic activation), Home and End jump. Put a `<TabPanel>` for each tab inside
 * `<Tabs>`; it only renders while its tab is selected.
 */
export interface TabItem {
  id: string;
  label: string;
  /** A count beside the label, e.g. open reports. Neutral. */
  count?: number;
}

const Ctx = createContext<{ base: string; value: string } | null>(null);
const tabId = (base: string, id: string) => `${base}-tab-${id}`;
const panelId = (base: string, id: string) => `${base}-panel-${id}`;

export interface TabsProps {
  tabs: readonly TabItem[];
  value: string;
  onChange: (id: string) => void;
  /** Names the tab list, e.g. "Twin's brain". Required. */
  "aria-label": string;
  /** The `TabPanel`s. */
  children?: ReactNode;
  className?: string;
}

export function Tabs({ tabs, value, onChange, children, className, ...rest }: TabsProps) {
  const base = useId();
  const refs = useRef<Array<HTMLButtonElement | null>>([]);

  function onKey(e: KeyboardEvent, i: number) {
    const n = tabs.length;
    const to =
      e.key === "ArrowRight" ? (i + 1) % n : e.key === "ArrowLeft" ? (i + n - 1) % n : e.key === "Home" ? 0 : e.key === "End" ? n - 1 : null;
    if (to === null) return;
    e.preventDefault();
    onChange(tabs[to].id);
    refs.current[to]?.focus();
  }

  return (
    <Ctx.Provider value={{ base, value }}>
      <div className={className}>
        <div role="tablist" aria-label={rest["aria-label"]} className="flex gap-6 border-b border-line font-ui">
          {tabs.map((t, i) => {
            const on = t.id === value;
            return (
              <button
                key={t.id}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                id={tabId(base, t.id)}
                type="button"
                role="tab"
                aria-selected={on}
                aria-controls={panelId(base, t.id)}
                tabIndex={on ? 0 : -1}
                onClick={() => onChange(t.id)}
                onKeyDown={(e) => onKey(e, i)}
                className={cn(
                  "-mb-px inline-flex min-h-10 items-center gap-2 border-b-2 px-0.5 pb-0 text-[14px] leading-5 whitespace-nowrap cursor-pointer",
                  "transition-colors duration-(--tt-duration-quick) ease-standard",
                  "focus-visible:rounded-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                  on ? "border-primary font-label text-primary-ink" : "border-transparent text-ink-tertiary hover:text-ink",
                )}
              >
                {t.label}
                {t.count !== undefined ? (
                  <span className="grid h-[18px] min-w-[18px] place-items-center rounded-full bg-fill-soft px-[6px] text-[11px] leading-[18px] font-label text-ink-secondary tabular-nums">
                    {t.count}
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
        {children}
      </div>
    </Ctx.Provider>
  );
}

export function TabPanel({ id, children, className }: { id: string; children: ReactNode; className?: string }) {
  const c = useContext(Ctx);
  if (!c || c.value !== id) return null;
  return (
    <div role="tabpanel" id={panelId(c.base, id)} aria-labelledby={tabId(c.base, id)} tabIndex={0} className={cn("pt-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary", className)}>
      {children}
    </div>
  );
}
