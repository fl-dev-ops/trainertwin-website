"use client";

import { createContext, useContext, type ReactNode } from "react";
import { cn } from "./cn";
import { Avatar } from "./Avatar";
import { LogoSymbol } from "./Logo";
import { Tooltip } from "./Tooltip";

/**
 * The app's left rail (§7, Desktop and phone shell), copied from the V3 prototype's `.rail`
 * (the prototype is final, 16 Nov 2026). `--tt-surface-sunken`, no border, padding 16 12 12, a
 * column with 8 between blocks. **214px** wide (the prototype's last override; the 248 recorded
 * in D120 was a stale rule), 72px collapsed (8px side padding), the width animating over
 * `--tt-duration-base`. The main sheet beside it is the lifted white one.
 *
 * Compose: `<NavRail brand={<RailBrand/>} footerNav={…items} footer={<RailUser/>}>` holding
 * `<NavItem/>`s and `<NavGroup label>`s. Collapsed, labels are hidden visually, items shrink to
 * 40px squares and each gets a tooltip, so the icon is never the only name.
 *
 * An item can carry an `alert`: a plain 8px orange dot, no number (the prototype's `.nav-badge`).
 * Collapsed, the dot moves onto the icon's corner with a 2px ring in the rail colour.
 */
const Collapsed = createContext(false);

export interface NavRailProps {
  /** The brand row: usually `<RailBrand/>`. 32px tall; stacks when collapsed. */
  brand?: ReactNode;
  children: ReactNode;
  /** Items pinned above the user card (Usage, Billing, Support, Settings). 8px between. */
  footerNav?: ReactNode;
  /** Pinned to the very bottom: usually `<RailUser/>`. */
  footer?: ReactNode;
  collapsed?: boolean;
  /** Names the navigation landmark, e.g. "Main". */
  "aria-label": string;
  className?: string;
}

export function NavRail({ brand, children, footerNav, footer, collapsed = false, className, ...rest }: NavRailProps) {
  return (
    <Collapsed.Provider value={collapsed}>
      <aside
        className={cn(
          "flex min-h-0 flex-none flex-col gap-2 overflow-auto bg-surface-sunken pt-4 pb-3 font-ui",
          "transition-[width] duration-(--tt-duration-base) ease-standard",
          collapsed ? "w-[72px] px-2" : "w-[214px] px-3",
          className,
        )}
      >
        {brand ? (
          <div className={cn("flex min-h-8 items-center justify-between gap-2", collapsed && "flex-col")}>{brand}</div>
        ) : null}
        <nav aria-label={rest["aria-label"]} className="flex min-h-0 flex-1 flex-col gap-2">
          {children}
        </nav>
        {footerNav || footer ? (
          <div className="mt-auto flex flex-col gap-3 pt-3">
            {footerNav ? <div className="flex flex-col gap-2">{footerNav}</div> : null}
            {footer}
          </div>
        ) : null}
      </aside>
    </Collapsed.Provider>
  );
}

export interface RailBrandProps {
  /** The wordmark next to the logo. */
  name?: string;
  /** Called by the logo button, which collapses and expands the rail. */
  onToggle?: () => void;
  /** Accessible names for the logo button. Defaults are plain English. */
  labels?: { collapse?: string; expand?: string };
  /** Right-hand slot: the theme switch (a `RailAction`). */
  actions?: ReactNode;
}

const expandIcon = (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="hidden flex-none text-ink group-hover/lockup:block group-focus-visible/lockup:block">
    <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" />
    <path d="M15 4l0 16" />
  </svg>
);

/** The lockup (20px orange mark and a 16px wordmark) as a button that toggles the rail, plus a slot for actions. */
export function RailBrand({ name = "TrainerTwin", onToggle, labels, actions }: RailBrandProps) {
  const collapsed = useContext(Collapsed);
  const l = { collapse: "Collapse menu", expand: "Expand menu", ...labels };
  return (
    <>
      <button
        type="button"
        onClick={onToggle}
        aria-pressed={collapsed}
        aria-label={collapsed ? l.expand : l.collapse}
        className={cn(
          "group/lockup flex min-h-8 items-center gap-[6px] rounded-sm text-ink cursor-pointer",
          "hover:text-ink-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
          collapsed && "w-10 justify-center",
        )}
      >
        <LogoSymbol size={20} className={cn("text-primary", collapsed && "group-hover/lockup:hidden group-focus-visible/lockup:hidden")} />
        {collapsed ? expandIcon : null}
        {collapsed ? null : <span className="text-[16px] leading-none font-title tracking-[-0.02em]">{name}</span>}
      </button>
      {actions ? <div className={cn("flex items-center gap-[2px]", !collapsed && "ml-auto")}>{actions}</div> : null}
    </>
  );
}

/** A 32px square icon button for the brand row (the theme switch): 16px glyph, secondary ink, soft fill on hover. */
export function RailAction({
  label,
  icon,
  onClick,
  pressed,
}: {
  label: string;
  icon: ReactNode;
  onClick?: () => void;
  pressed?: boolean;
}) {
  const collapsed = useContext(Collapsed);
  const btn = (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-pressed={pressed}
      className="grid h-8 w-8 flex-none place-items-center rounded-sm text-ink-secondary cursor-pointer hover:bg-fill-soft hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary [&>svg]:h-4 [&>svg]:w-4"
    >
      {icon}
    </button>
  );
  return collapsed ? (
    <Tooltip content={label} side="top">
      {btn}
    </Tooltip>
  ) : (
    btn
  );
}

/** A section label in the rail: 11/16, 500, uppercase, +.08em, tertiary. Becomes a 1px divider when collapsed. */
export function NavGroup({ label, children }: { label: string; children: ReactNode }) {
  const collapsed = useContext(Collapsed);
  return (
    <div role="group" aria-label={label} className="flex flex-col gap-2 [&:first-child>span]:mt-1">
      {collapsed ? (
        <span className="mx-3 mt-3 h-px bg-line" aria-hidden="true" />
      ) : (
        <span className="mt-3 px-2 text-[11px] leading-4 font-label tracking-[0.08em] text-ink-tertiary uppercase" aria-hidden="true">
          {label}
        </span>
      )}
      {children}
    </div>
  );
}

export interface NavItemProps {
  label: string;
  icon: ReactNode;
  /** The page you are on. Sets `aria-current="page"`. */
  active?: boolean;
  /** Anchor if given, otherwise a button. */
  href?: string;
  onClick?: () => void;
  /** Something is waiting here: a plain 8px orange dot at the end of the row (on the icon when collapsed). No number. */
  alert?: boolean;
  /** Screen-reader name for the dot. Default is plain English. */
  alertLabel?: string;
  /** A quiet value at the end of the row, e.g. minutes left. Hidden when collapsed. */
  meta?: string;
}

export function NavItem({ label, icon, active = false, href, onClick, alert, alertLabel = "Needs attention", meta }: NavItemProps) {
  const collapsed = useContext(Collapsed);
  const cls = cn(
    "relative flex min-h-8 items-center gap-2 rounded-sm text-left font-ui text-[14px] leading-5 cursor-pointer",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
    collapsed ? "mx-auto w-10 justify-center px-0" : "w-full px-2",
    active
      ? "bg-surface font-label text-primary-ink shadow-e1 dark:text-ink"
      : "text-ink-secondary hover:bg-fill-soft hover:text-ink",
  );
  const dot = alert ? (
    <span
      role="img"
      aria-label={alertLabel}
      className={cn(
        "h-2 w-2 flex-none rounded-full bg-primary",
        collapsed ? "absolute top-[6px] right-[6px] shadow-[0_0_0_2px_var(--tt-surface-sunken)]" : "mr-1 ml-auto",
      )}
    />
  ) : null;
  const inner = (
    <>
      <span className={cn("flex-none [&>svg]:h-5 [&>svg]:w-5", active && "text-primary dark:text-ink")} aria-hidden="true">
        {icon}
      </span>
      <span className={cn("min-w-0 truncate", collapsed ? "sr-only" : !meta && !alert && "flex-1")}>{label}</span>
      {meta && !collapsed ? <span className="ml-auto text-[13px] leading-[18px] text-ink-secondary">{meta}</span> : null}
      {dot}
    </>
  );
  const el = href ? (
    <a href={href} aria-current={active ? "page" : undefined} className={cls}>
      {inner}
    </a>
  ) : (
    <button type="button" onClick={onClick} aria-current={active ? "page" : undefined} className={cls}>
      {inner}
    </button>
  );
  return collapsed ? (
    <Tooltip content={label} side="top" className="w-full">
      {el}
    </Tooltip>
  ) : (
    el
  );
}

/** The user card at the foot of the rail: photo 32, name 14/20 medium, a 1px card border, radius 12, two soft shadows. Collapsed, only the photo. */
export function RailUser({ name, src, onClick }: { name: string; src?: string; onClick?: () => void }) {
  const collapsed = useContext(Collapsed);
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={collapsed ? name : undefined}
      className={cn(
        "flex w-full items-center gap-3 text-left cursor-pointer",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        collapsed
          ? "justify-center rounded-md p-0"
          : "rounded-md border border-line-card bg-surface py-2 pr-3 pl-2 shadow-[0_1px_2px_rgb(30_28_25/0.04),0_2px_8px_rgb(30_28_25/0.05)] hover:bg-surface-sunken",
      )}
    >
      <Avatar src={src} alt={name} size="md" />
      {collapsed ? null : <span className="min-w-0 truncate text-[14px] leading-5 font-label text-ink">{name}</span>}
    </button>
  );
}
