import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "./cn";
import { Badge } from "./Badge";

/**
 * The frame a table sits in. Separate from Card because a table needs its head
 * and foot padded while the table itself runs edge to edge — a Card with padding
 * on the card would inset the header row, which is the tell of a table bolted
 * into the wrong container.
 */
export function TableCardRoot({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-md border border-line bg-surface shadow-e1",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export interface TableCardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  /** Count or status beside the title. Rendered as a neutral badge. */
  badge?: string;
  description?: string;
  /** Actions pinned to the right — menu, filters, an Add button. */
  contentTrailing?: ReactNode;
}

export function TableCardHeader({
  title,
  badge,
  description,
  contentTrailing,
  className,
  ...rest
}: TableCardHeaderProps) {
  return (
    <div
      className={cn(
        "flex items-start justify-between gap-3 px-4 py-4 md:px-6",
        className,
      )}
      {...rest}
    >
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="font-ui text-[15px] font-semibold text-ink">{title}</h3>
          {badge ? <Badge tone="neutral">{badge}</Badge> : null}
        </div>
        {description ? (
          <p className="mt-1 text-[13px] text-ink-tertiary">{description}</p>
        ) : null}
      </div>
      {contentTrailing ? (
        <div className="flex shrink-0 items-center gap-1">{contentTrailing}</div>
      ) : null}
    </div>
  );
}

export const TableCard = { Root: TableCardRoot, Header: TableCardHeader };
