import type { ReactNode } from "react";
import { cn } from "./cn";
import { Card } from "./Card";

/**
 * Usage card and activity rows, copied from the V3 prototype (`.us-card`, `.al-*`) on request
 * (16 Nov 2026).
 *
 * `UsageCard`   "Remaining credits": a label 14/20 secondary, the big number 40/44 600 with its unit
 *               at 18 secondary, a primary action on the right, a 6px real-progress bar, and a note
 *               14/22. It is a plain `Card` with padding 20.
 * `ActivityRow` one line of the Activity log: an 8px dot by kind (call = brand, tried = info,
 *               credit = success), the name, the time at 13/18 secondary, and the amount in 600.
 *               Rows divide with a hairline; put them in a list inside a SidePanel.
 */
export interface UsageCardProps {
  label: string;
  value: number | string;
  unit?: string;
  /** The primary action, e.g. a "Buy credits" button. */
  action?: ReactNode;
  /** 0 to 100. */
  percent: number;
  /** Visible text beside the bar, e.g. "180 of 300". */
  barLabel?: ReactNode;
  note?: ReactNode;
  className?: string;
}

export function UsageCard({ label, value, unit, action, percent, barLabel, note, className }: UsageCardProps) {
  const p = Math.max(0, Math.min(100, percent));
  return (
    <Card className={cn("gap-4 p-5 font-ui", className)}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="m-0 text-[14px] leading-5 text-ink-secondary">{label}</p>
          <p className="mt-1 mb-0 text-[40px] leading-[44px] font-title text-ink tabular-nums">
            {value}
            {unit ? <span className="ml-1 text-[18px] font-normal text-ink-secondary">{unit}</span> : null}
          </p>
        </div>
        {action}
      </div>
      <div className="flex items-center gap-4">
        <div role="progressbar" aria-label={label} aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(p)} className="h-1.5 flex-1 overflow-hidden rounded-full bg-fill-soft">
          <div className="h-full rounded-full bg-ink" style={{ width: `${p}%` }} />
        </div>
        {barLabel ? <span className="flex-none text-[13px] leading-[18px] text-ink-secondary tabular-nums">{barLabel}</span> : null}
      </div>
      {note ? <p className="m-0 text-[14px] leading-[22px] text-ink-secondary">{note}</p> : null}
    </Card>
  );
}

export type ActivityKind = "call" | "tried" | "credit";

const dot: Record<ActivityKind, string> = { call: "bg-primary", tried: "bg-info", credit: "bg-success" };

export interface ActivityRowProps {
  kind: ActivityKind;
  name: string;
  when: string;
  amount: string;
}

export function ActivityRow({ kind, name, when, amount }: ActivityRowProps) {
  return (
    <li className="flex list-none items-center gap-3 py-[14px] font-ui not-first:border-t not-first:border-line">
      <span aria-hidden="true" className={cn("h-2 w-2 flex-none rounded-full", dot[kind])} />
      <span className="flex min-w-0 flex-1 flex-col gap-0.5 text-[14px] leading-5 text-ink">
        <span>{name}</span>
        <span className="text-[13px] leading-[18px] text-ink-secondary">{when}</span>
      </span>
      <span className="text-[14px] font-title whitespace-nowrap text-ink tabular-nums">{amount}</span>
    </li>
  );
}
