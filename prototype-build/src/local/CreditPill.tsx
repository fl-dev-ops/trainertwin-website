/**
 * NOT IN STORYBOOK YET. The "200 min left" pill in the Twin agents header (the prototype's `.credit-pill`,
 * final rules): 36px like the Create button, surface fill with a 1px inset border, a 40px usage bar, the
 * number and "min left", a 12px chevron. Written here so the page matches; a candidate for a Storybook component.
 */
export function CreditPill({ left, total, onClick }: { left: number; total: number; onClick?: () => void }) {
  const assigned = total - left;
  const pct = Math.round((assigned / total) * 100);
  const state = left === 0 ? "bg-danger" : assigned >= total * 0.9 ? "bg-caution" : "bg-ink";
  return (
    <button
      type="button"
      onClick={onClick}
      title="See your minutes"
      className="inline-flex h-9 items-center gap-3 rounded-full bg-surface pr-3 pl-4 font-ui text-[14px] leading-[23px] whitespace-nowrap text-ink-secondary shadow-[inset_0_0_0_1px_var(--tt-border)] hover:bg-surface-sunken focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <span className="block h-1 w-10 flex-none overflow-hidden rounded-full bg-[color-mix(in_srgb,var(--tt-text-primary)_16%,transparent)]" aria-hidden="true">
        <span className={`block h-full rounded-full ${state}`} style={{ width: `${pct}%` }} />
      </span>
      <span className="inline-flex items-baseline gap-1">
        <span className="font-label text-ink tabular-nums">{left}</span> min left
      </span>
      <svg className="h-3 w-3 flex-none text-ink-secondary" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
