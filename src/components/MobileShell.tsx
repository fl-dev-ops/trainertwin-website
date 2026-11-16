import type { ReactNode } from "react";
import { cn } from "./cn";
import { Logo } from "./Logo";

/**
 * The phone shell (§7, Desktop and phone shell). At 767px and below the left rail is
 * hidden and the app is framed by two bars:
 *
 *   `MobileHeader`  56px, canvas, padding 0 16, logo and wordmark left, 40px round icon
 *                   buttons right (layout, theme, account).
 *   `TabBar`        68px, white (`--tt-surface`), padding 8, a soft shadow upward; five items
 *                   at 11/14 500 with a 22px icon; the active one is primary-ink text with an
 *                   orange icon.
 *
 * Both hide themselves from 768px up (`responsive`, the default), so they can sit in the
 * layout unconditionally. Pass `responsive={false}` to show them at any width (stories,
 * previews). `TabBar` is fixed to the bottom of the screen and respects the safe-area inset;
 * pass `inline` to lay it out in the flow instead.
 */
export interface MobileHeaderProps {
  /** Right-hand actions: `<HeaderButton/>`s. */
  children?: ReactNode;
  onLogoClick?: () => void;
  responsive?: boolean;
  className?: string;
}

export function MobileHeader({ children, onLogoClick, responsive = true, className }: MobileHeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-(--tt-z-sticky) flex h-14 items-center justify-between bg-canvas px-4 font-ui",
        responsive && "md:hidden",
        className,
      )}
    >
      <button
        type="button"
        onClick={onLogoClick}
        aria-label="TrainerTwin, home"
        className="inline-flex items-center border-0 bg-transparent p-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <Logo size={20} color="var(--tt-text-primary)" />
      </button>
      <div className="flex items-center gap-1">{children}</div>
    </header>
  );
}

/** A 40px round ghost icon button for the header. `label` is its accessible name. */
export function HeaderButton({ label, onClick, children }: { label: string; onClick?: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="grid h-10 w-10 place-items-center rounded-full border-0 bg-transparent text-ink-secondary cursor-pointer hover:bg-fill-soft hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary [&>svg]:h-5 [&>svg]:w-5"
    >
      {children}
    </button>
  );
}

export interface TabBarProps {
  children: ReactNode;
  /** Names the navigation landmark, e.g. "Main". Required. */
  "aria-label": string;
  responsive?: boolean;
  /** Lay out in the flow instead of fixing to the bottom of the screen. */
  inline?: boolean;
  className?: string;
}

export function TabBar({ children, responsive = true, inline = false, className, ...rest }: TabBarProps) {
  return (
    <nav
      aria-label={rest["aria-label"]}
      className={cn(
        "flex justify-around bg-surface px-2 pt-2 pb-[calc(var(--tt-space-2)+env(safe-area-inset-bottom))] shadow-[0_-4px_16px_rgb(30_28_25/0.06)]",
        inline ? "relative" : "fixed inset-x-0 bottom-0 z-(--tt-z-sticky)",
        responsive && "md:hidden",
        className,
      )}
    >
      {children}
    </nav>
  );
}

export interface TabBarItemProps {
  label: string;
  icon: ReactNode;
  active?: boolean;
  href?: string;
  onClick?: () => void;
}

export function TabBarItem({ label, icon, active = false, href, onClick }: TabBarItemProps) {
  const cls = cn(
    "flex min-h-[52px] min-w-0 flex-1 flex-col items-center gap-1 rounded-md border-0 bg-transparent px-0 py-[6px] font-ui text-[11px] leading-[14px] font-label cursor-pointer",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
    active ? "text-primary-ink" : "text-ink-secondary",
  );
  const inner = (
    <>
      <span aria-hidden="true" className={cn("[&>svg]:h-[22px] [&>svg]:w-[22px]", active && "text-primary")}>
        {icon}
      </span>
      <span className="max-w-full truncate">{label}</span>
    </>
  );
  return href ? (
    <a href={href} aria-current={active ? "page" : undefined} className={cls}>
      {inner}
    </a>
  ) : (
    <button type="button" onClick={onClick} aria-current={active ? "page" : undefined} className={cls}>
      {inner}
    </button>
  );
}
