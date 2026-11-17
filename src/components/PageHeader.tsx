import type { ElementType, ReactNode } from "react";
import { cn } from "./cn";
import { ArrowLeftIcon } from "./UiIcons";

/**
 * The per-page header (§7, `.lib-head`): a flex row, items centred, 16 gap, 40px
 * high (32px when it holds only small filters), the title on the left and a tools
 * cluster (12 gap) on the right. Every one of the product's pages opens with one.
 *
 * Title is 16/22, weight 600, -0.015em, with an optional 28 × 28 icon box (radius 8,
 * secondary colour). That size is off the type scale (§10); recorded, built as measured.
 *
 * One secondary tool button may sit top-right level with the title (Usage's
 * "Activity log", Billing's "Support"); it never competes with the page's one
 * primary action, which belongs in the content.
 */
export interface PageHeaderProps {
  title: string;
  /** A 18px outline icon for the 28px box beside the title. */
  icon?: ReactNode;
  /** A line under the title (14/20, secondary). With it the title is 18/24 and the tools sit at the top, as on Usage and Billing. */
  description?: ReactNode;
  /** Right-hand cluster: filters, search, one action. */
  tools?: ReactNode;
  /** 32px instead of 40px, for a header whose tools are only small filters. */
  compact?: boolean;
  /** Heading level. h1 by default; use h2 where a page already has one. */
  as?: ElementType;
  className?: string;
}

export function PageHeader({ title, icon, description, tools, compact = false, as: Tag = "h1", className }: PageHeaderProps) {
  const icoBox = icon ? (
    <span aria-hidden="true" className="grid h-7 w-7 flex-none place-items-center rounded-sm text-ink-secondary [&_svg]:h-[18px] [&_svg]:w-[18px]">
      {icon}
    </span>
  ) : null;
  return (
    <div className={cn("flex justify-between gap-4 font-ui", description ? "items-start" : "items-center", compact ? "min-h-8" : "min-h-10", className)}>
      <div className="min-w-0">
        <Tag className={cn("m-0 flex items-center text-ink", description ? "gap-3 text-[18px] leading-6 font-title" : "gap-2 text-[16px] leading-[22px] font-title tracking-[-0.015em]")}>
          {icoBox}
          {title}
        </Tag>
        {description ? <p className="m-0 mt-1 text-[14px] leading-5 text-ink-secondary">{description}</p> : null}
      </div>
      {tools ? <div className="flex flex-none items-center gap-3">{tools}</div> : null}
    </div>
  );
}

/**
 * A heading for a section within a page: 18/24, weight 600, -0.015em, 32px below
 * whatever precedes it.
 */
export function SectionHeading({ children, as: Tag = "h2", className }: { children: ReactNode; as?: ElementType; className?: string }) {
  return (
    <Tag className={cn("mt-8 mb-0 font-ui text-[18px] leading-6 font-title tracking-[-0.015em] text-ink", className)}>{children}</Tag>
  );
}

/**
 * The back-bar on detail and builder pages: 64px tall on the canvas, padding 0 32,
 * a back link at 14/20 with a 16px arrow, and optional actions on the right.
 * Renders `<a>` when `href` is given, `<button>` when `onBack` is.
 */
export interface BackBarProps {
  label: string;
  href?: string;
  onBack?: () => void;
  actions?: ReactNode;
  className?: string;
}

export function BackBar({ label, href, onBack, actions, className }: BackBarProps) {
  const cls =
    "inline-flex items-center gap-2 m-0 border-0 bg-transparent p-0 font-ui text-[14px] leading-5 text-ink cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
  return (
    <div className={cn("flex min-h-16 flex-none items-center justify-between gap-3 bg-canvas px-8", className)}>
      {href ? (
        <a href={href} className={cls}>
          <ArrowLeftIcon size={16} />
          {label}
        </a>
      ) : (
        <button type="button" onClick={onBack} className={cls}>
          <ArrowLeftIcon size={16} />
          {label}
        </button>
      )}
      {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
    </div>
  );
}
