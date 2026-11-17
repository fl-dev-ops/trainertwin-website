import type { ReactNode } from "react";
import { cn } from "./cn";

/**
 * Flow nodes: the cards on the Twin's-brain canvas (`pageStudioFlow`, `.flow-*`), copied from the
 * V3 prototype on request (16 Nov 2026) with no spec of their own; change them later if needed.
 * The canvas itself (absolute positioning, the connecting lines) is page layout, not a component:
 * place a node by wrapping it.
 *
 * `FlowNode`  a card, padding 14 / 16, radius 16, 1px `--tt-card-border`, `--tt-shadow-node`;
 *             `on` (selected) firms the border to `--tt-border-interactive` and lifts to elevation-2.
 *             Kicker 11/12 600 uppercase +.09em tertiary, title 15/22 600, note 13/18 secondary.
 * `FlowSource` a source line inside a node: `--tt-fill-soft`, radius 12, 13/18, a 16px icon.
 * `FlowStartNode` the dark pill that starts a flow (`--tt-cta-strong`).
 * `FlowEditRow` a row inside an editing node: bordered, radius 12, optional dashed "add" style.
 */
export interface FlowNodeProps {
  kicker?: string;
  title: string;
  note?: string;
  /** Source lines under the title. */
  children?: ReactNode;
  on?: boolean;
  /** Makes the node a button. */
  onSelect?: () => void;
  className?: string;
}

export function FlowNode({ kicker, title, note, children, on = false, onSelect, className }: FlowNodeProps) {
  const body = (
    <>
      {kicker ? <span className="text-[11px] leading-3 font-label tracking-[0.09em] text-ink-tertiary uppercase">{kicker}</span> : null}
      <span className="text-[15px] leading-[22px] font-title">{title}</span>
      {note ? <span className="text-[13px] leading-[18px] text-ink-secondary">{note}</span> : null}
      {children ? <span className="mt-2 flex w-full flex-col gap-[6px]">{children}</span> : null}
    </>
  );
  const box = cn(
    "box-border flex w-full flex-col items-start gap-[6px] rounded-lg border bg-surface px-4 py-[14px] text-left font-ui text-ink shadow-node",
    "transition-[box-shadow,border-color] duration-(--tt-duration-quick) ease-standard",
    on ? "border-line-interactive shadow-e2" : "border-line-card",
    className,
  );
  return onSelect ? (
    <button type="button" aria-pressed={on} onClick={onSelect} className={cn(box, "cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary")}>
      {body}
    </button>
  ) : (
    <div className={box}>{body}</div>
  );
}

export function FlowSource({ icon, children }: { icon?: ReactNode; children: ReactNode }) {
  return (
    <span className="flex w-full items-center gap-2 rounded-md bg-fill-soft py-2 pr-2 pl-[10px] font-ui text-[13px] leading-[18px] text-ink">
      {icon ? <span aria-hidden="true" className="inline-flex h-4 w-4 flex-none text-ink [&_svg]:h-4 [&_svg]:w-4">{icon}</span> : null}
      {children}
    </span>
  );
}

export function FlowStartNode({ children, icon, onClick }: { children: ReactNode; icon?: ReactNode; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-strong px-[18px] font-ui text-[14px] leading-5 font-cta text-on-strong cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary [&_svg]:h-[14px] [&_svg]:w-[14px]"
    >
      {icon}
      {children}
    </button>
  );
}

export interface FlowEditRowProps {
  title: string;
  sub?: string;
  /** Left slot: a checkbox, an icon. */
  leading?: ReactNode;
  /** The dashed "add" style, in primary ink. */
  add?: boolean;
  onClick?: () => void;
}

export function FlowEditRow({ title, sub, leading, add = false, onClick }: FlowEditRowProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex w-full items-center gap-3 rounded-md border bg-surface p-2 text-left font-ui cursor-pointer",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        add ? "border-dashed border-line-card text-primary-ink" : "border-line-card text-ink",
      )}
    >
      {add ? (
        <span aria-hidden="true" className="grid h-7 w-7 flex-none place-items-center rounded-full bg-fill-soft text-primary-ink">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
        </span>
      ) : (
        leading
      )}
      <span className="flex min-w-0 flex-1 flex-col text-[13px] leading-[18px]">
        <span className="text-[14px] font-title text-ink">{title}</span>
        {sub ? <span className="text-ink-secondary">{sub}</span> : null}
      </span>
    </button>
  );
}
