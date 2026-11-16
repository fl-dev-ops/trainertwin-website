import type { ReactNode, CSSProperties } from "react";
import { cn } from "./cn";
import { Avatar, type AvatarTone } from "./Avatar";
import { Badge } from "./Badge";

/**
 * The list-as-table card, copied from the V3 prototype (`.an-table`, `.an-row`, `.lr-*`) on request
 * (16 Nov 2026). Distinct from `Table` (the sortable data table): this is a grid of rows in a card.
 *
 * `ListTable`  radius 16, 1px `--tt-card-border`, `--tt-shadow-list`, overflow hidden.
 * `ListRow`    a CSS grid row, `columns` is the `grid-template-columns`; padding 14 / 20, 14/20,
 *              rows divide with a hairline. `head` makes the label row: sunken fill, 12px 600
 *              uppercase +.04em, secondary.
 * `LearnerRow` a row for people: avatar + name, email, cohort badge, counts, and a `UsageMeter`.
 * `UsageMeter` a 6px bar with a line of text; the fill turns caution at 90% and above.
 */
export function ListTable({ children, label, className }: { children: ReactNode; label: string; className?: string }) {
  return (
    <div role="table" aria-label={label} className={cn("overflow-hidden rounded-lg border border-line-card bg-surface font-ui shadow-list", className)}>
      {children}
    </div>
  );
}

export interface ListRowProps {
  columns: string;
  head?: boolean;
  children: ReactNode;
  className?: string;
}

export function ListRow({ columns, head = false, children, className }: ListRowProps) {
  return (
    <div
      role="row"
      style={{ gridTemplateColumns: columns } as CSSProperties}
      className={cn(
        "grid items-center gap-3 px-5 leading-5 not-first:border-t not-first:border-line",
        head ? "bg-surface-sunken py-[10px] text-[12px] font-label tracking-[0.04em] text-ink-secondary uppercase" : "py-[14px] text-[14px] text-ink",
        className,
      )}
    >
      {children}
    </div>
  );
}

export interface UsageMeterProps {
  used: number;
  total: number;
  unit?: string;
}

export function UsageMeter({ used, total, unit = "" }: UsageMeterProps) {
  const pct = Math.max(0, Math.min(100, Math.round((used / total) * 100)));
  return (
    <span className="flex min-w-0 flex-col gap-[6px]">
      <span aria-hidden="true" className="block h-1.5 overflow-hidden rounded-full bg-fill-soft">
        <span className={cn("block h-full rounded-[inherit]", pct >= 90 ? "bg-caution" : "bg-ink")} style={{ width: `${pct}%` }} />
      </span>
      <span className="text-[13px] leading-[18px] text-ink-secondary tabular-nums">
        {used} used · {total - used} left{unit ? ` ${unit}` : ""}
      </span>
    </span>
  );
}

export interface LearnerRowProps {
  columns: string;
  name: string;
  email: string;
  cohort: string;
  /** "3 agents", "120 min", rendered as given. */
  counts?: ReactNode[];
  usage?: UsageMeterProps;
  tone?: AvatarTone;
  src?: string;
}

export function LearnerRow({ columns, name, email, cohort, counts = [], usage, tone = "neutral", src }: LearnerRowProps) {
  return (
    <ListRow columns={columns}>
      <span role="cell" className="flex min-w-0 items-center gap-3 font-label">
        <Avatar src={src} alt={name} size="sm" tone={tone} />
        <span className="truncate">{name}</span>
      </span>
      <span role="cell" className="truncate text-ink-secondary">{email}</span>
      <span role="cell"><Badge>{cohort}</Badge></span>
      {counts.map((c, i) => (
        <span key={i} role="cell" className="tabular-nums">{c}</span>
      ))}
      {usage ? <span role="cell"><UsageMeter {...usage} /></span> : null}
    </ListRow>
  );
}
