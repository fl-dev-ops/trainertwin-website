import { Button } from "@components/Button";

/**
 * NOT IN STORYBOOK YET. The minutes popover under the credit pill (the prototype's `.credit-pop`): 296px, 20px
 * padding, surface, radius 16, elevation-2. A big number, a stacked bar (used / assigned / still to assign), a
 * three-row legend and one primary action.
 */
export function CreditPopover({ total, used, idle, onBuy }: { total: number; used: number; idle: number; onBuy: () => void }) {
  const left = total - used - idle;
  return (
    <div role="dialog" aria-label="Minutes" className="absolute top-[calc(100%+8px)] right-0 z-30 flex w-[296px] flex-col rounded-lg bg-surface p-5 font-ui shadow-e2">
      <p className="m-0 text-[13px] leading-5 text-ink-secondary">Minutes</p>
      <p className="mt-[2px] mb-0 flex items-baseline gap-2">
        <b className="text-[32px] leading-10 font-title text-ink tabular-nums">{left}</b>
        <span className="text-[14px] leading-5 text-ink-secondary">to assign</span>
      </p>
      <p className="m-0 text-[13px] leading-5 text-ink-secondary tabular-nums">of {total} purchased</p>
      <div className="mt-4 flex h-2 gap-[2px] overflow-hidden rounded-full bg-fill-soft" role="img" aria-label={`${used} used by learners, ${idle} assigned and not yet used, ${left} still to assign`}>
        <span className="block h-full bg-ink" style={{ width: `${(used / total) * 100}%` }} />
        <span className="block h-full bg-ink-muted" style={{ width: `${(idle / total) * 100}%` }} />
      </div>
      <ul className="mt-4 mb-0 flex list-none flex-col gap-2 p-0">
        {[
          ["bg-ink", "Used by learners", used],
          ["bg-ink-muted", "Assigned, not used yet", idle],
          ["bg-fill-soft shadow-[inset_0_0_0_1px_var(--tt-border)]", "Still to assign", left],
        ].map(([dot, label, n]) => (
          <li key={label as string} className="flex items-center gap-2 text-[13px] leading-5 text-ink-secondary">
            <i className={`h-2 w-2 flex-none rounded-full ${dot}`} />
            <span className="flex-1">{label}</span>
            <b className="font-label text-ink tabular-nums">{n}</b>
          </li>
        ))}
      </ul>
      <Button onClick={onBuy} className="mt-5 w-full">Buy more minutes</Button>
    </div>
  );
}
