import { useEffect, useId, useRef, useState } from "react";

/**
 * NOT IN STORYBOOK YET. The compact filter dropdown in page headers (the prototype's `.bot-range .home-ask-mode`):
 * a 32px pill, 1px field border, label + 12px chevron, a listbox below. Storybook's `Select` is the labelled form
 * field; this is the toolbar version. Candidate for a Storybook component.
 */
export function FilterSelect({
  label,
  options,
  value,
  onChange,
  width = 180,
}: {
  label: string;
  options: readonly { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
  width?: number | string;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const away = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", away);
    return () => document.removeEventListener("pointerdown", away);
  }, [open]);
  const current = options.find((o) => o.value === value) ?? options[0];
  return (
    <div ref={root} className="relative" style={{ width }}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? id : undefined}
        aria-label={`${label}: ${current.label}`}
        onClick={() => setOpen((o) => !o)}
        className="inline-flex h-8 w-full items-center justify-between gap-2 rounded-full border border-line-field bg-surface pr-3 pl-4 font-ui text-[13px] leading-5 font-label text-ink hover:border-line-interactive focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <span className="min-w-0 flex-1 truncate text-left">{current.label}</span>
        <svg className="h-3 w-3 flex-none" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open ? (
        <div id={id} role="listbox" aria-label={label} className="absolute top-[calc(100%+4px)] right-0 z-(--tt-z-dropdown) min-w-full rounded-sm bg-surface-raised p-2 font-ui shadow-e2">
          {options.map((o) => (
            <button
              key={o.value}
              type="button"
              role="option"
              aria-selected={o.value === value}
              onClick={() => {
                onChange(o.value);
                setOpen(false);
              }}
              className="flex min-h-8 w-full items-center rounded-xs px-[10px] py-[6px] text-left text-[13px] leading-5 whitespace-nowrap text-ink hover:bg-fill-soft aria-selected:font-label"
            >
              {o.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
