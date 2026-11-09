"use client";

import {
  createContext,
  useContext,
  useId,
  useMemo,
  useState,
  type HTMLAttributes,
  type ReactNode,
  type ThHTMLAttributes,
  type TdHTMLAttributes,
} from "react";
import { cn } from "./cn";

/* ---------------------------------------------------------------- sorting */

export type SortDirection = "ascending" | "descending";
export interface SortDescriptor {
  column: string;
  direction: SortDirection;
}

/**
 * Sorts by the given column, handling the three types a table cell actually
 * holds. Exported because sorting is the caller's data concern, not the
 * table's — the table renders whatever order it is given.
 */
export function sortRows<T extends Record<string, unknown>>(
  rows: readonly T[],
  { column, direction }: SortDescriptor,
): T[] {
  const dir = direction === "descending" ? -1 : 1;
  // Copy first. The original of this component sorted `items` in place, which
  // mutates the caller's array and makes useMemo return a stale-but-reordered
  // reference — the classic "sort works the first time" bug.
  return [...rows].sort((a, b) => {
    const x = a[column];
    const y = b[column];
    if (typeof x === "number" && typeof y === "number") return (x - y) * dir;
    if (typeof x === "boolean" && typeof y === "boolean")
      return (Number(x) - Number(y)) * dir;
    if (typeof x === "string" && typeof y === "string")
      return x.localeCompare(y) * dir;
    return 0;
  });
}

/* ---------------------------------------------------------------- context */

type SelectionMode = "none" | "multiple";

interface TableCtx {
  selectionMode: SelectionMode;
  selected: Set<string>;
  toggle: (id: string) => void;
  allIds: string[];
  sortDescriptor?: SortDescriptor;
  onSortChange?: (d: SortDescriptor) => void;
  registerId: (id: string) => void;
}
const Ctx = createContext<TableCtx | null>(null);
const useTable = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("Table.* must be used inside <Table>");
  return c;
};

/* ---------------------------------------------------------------- checkbox */

function SelectBox({
  checked,
  indeterminate = false,
  onChange,
  label,
}: {
  checked: boolean;
  indeterminate?: boolean;
  onChange: () => void;
  label: string;
}) {
  return (
    <input
      type="checkbox"
      aria-label={label}
      checked={checked}
      ref={(el) => {
        if (el) el.indeterminate = indeterminate && !checked;
      }}
      onChange={onChange}
      className={cn(
        "grid h-[18px] w-[18px] shrink-0 cursor-pointer appearance-none place-content-center",
        "rounded-xs border-[length:var(--tt-border-form)] border-line-field bg-surface",
        "transition-colors duration-150 ease-standard",
        // Checked fills with `strong`, not `primary` — changed 29 Sep 2026.
        // A checkbox column is the single most-repeated control on a table
        // screen: ticking twelve rows used to paint twelve orange squares,
        // which is selection shouting louder than the action the selection is
        // for. `strong` is 19.78:1 against its own label in both themes, so
        // this is also the more legible of the two.
        "checked:border-strong checked:bg-strong",
        "indeterminate:border-strong indeterminate:bg-strong",
        // A 1px STROKE, not a filled glyph — changed 29 Sep 2026. This was a
        // clip-path polygon, where the stroke weight is implied by the outline's
        // geometry and worked out around 2px: heavy against a hairline field
        // border, and impossible to specify. Two borders on a rotated box give
        // an exact, stated 1px that cannot drift. The translate re-centres it —
        // rotating a 5x9 box moves its optical centre down and left of the
        // bounding box the grid is centring.
        "checked:after:h-[9px] checked:after:w-[5px] checked:after:content-['']",
        "checked:after:border-r checked:after:border-b checked:after:border-on-strong",
        "checked:after:rotate-45 checked:after:-translate-y-[1px] checked:after:translate-x-[1px]",
        // The indeterminate dash matches that 1px so the two states read as one
        // control drawn with one pen.
        "indeterminate:after:h-[1px] indeterminate:after:w-[9px]",
        "indeterminate:after:bg-on-strong indeterminate:after:content-['']",
      )}
    />
  );
}

/* ---------------------------------------------------------------- table */

export interface TableProps extends HTMLAttributes<HTMLTableElement> {
  /** REQUIRED. A table with no accessible name is unnavigable by screen reader. */
  "aria-label": string;
  selectionMode?: SelectionMode;
  sortDescriptor?: SortDescriptor;
  onSortChange?: (d: SortDescriptor) => void;
  children: ReactNode;
}

export function Table({
  "aria-label": ariaLabel,
  selectionMode = "none",
  sortDescriptor,
  onSortChange,
  className,
  children,
  ...rest
}: TableProps) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [allIds, setAllIds] = useState<string[]>([]);

  const ctx = useMemo<TableCtx>(
    () => ({
      selectionMode,
      selected,
      allIds,
      sortDescriptor,
      onSortChange,
      toggle: (id) =>
        setSelected((prev) => {
          const next = new Set(prev);
          if (id === "__all__") {
            return next.size === allIds.length ? new Set() : new Set(allIds);
          }
          if (next.has(id)) next.delete(id);
          else next.add(id);
          return next;
        }),
      registerId: (id) =>
        setAllIds((prev) => (prev.includes(id) ? prev : [...prev, id])),
    }),
    [selectionMode, selected, allIds, sortDescriptor, onSortChange],
  );

  return (
    <Ctx.Provider value={ctx}>
      {/* The wrapper scrolls, not the page — a wide table must never make the
          document scroll sideways. */}
      <div className="w-full overflow-x-auto">
        <table
          aria-label={ariaLabel}
          className={cn(
            "w-full min-w-[560px] border-collapse font-ui text-[13.5px]",
            className,
          )}
          {...rest}
        >
          {children}
        </table>
      </div>
    </Ctx.Provider>
  );
}

/* ---------------------------------------------------------------- header */

Table.Header = function TableHeader({ children }: { children: ReactNode }) {
  const { selectionMode, selected, allIds, toggle } = useTable();
  return (
    <thead>
      <tr>
        {selectionMode === "multiple" ? (
          <th
            scope="col"
            className="w-[52px] bg-surface-sunken px-4 py-3 text-left border-b border-line"
          >
            <SelectBox
              label="Select all rows"
              checked={allIds.length > 0 && selected.size === allIds.length}
              indeterminate={selected.size > 0}
              onChange={() => toggle("__all__")}
            />
          </th>
        ) : null}
        {children}
      </tr>
    </thead>
  );
};

export interface TableHeadProps
  extends Omit<ThHTMLAttributes<HTMLTableCellElement>, "id"> {
  id: string;
  label?: string;
  allowsSorting?: boolean;
  /** Marks the column whose cells are the row's accessible name. */
  isRowHeader?: boolean;
  /** Supplementary hint. Rendered as `title`, so it is reachable, not decorative. */
  tooltip?: string;
  /**
   * Keep the label for screen readers but hide it visually. For action columns,
   * which look like they need no header and in fact need one most — an empty
   * `<th>` leaves the column unnamed in every screen reader's table navigation
   * (axe: empty-table-header). Pass a real label and set this, never omit it.
   */
  labelHidden?: boolean;
}

Table.Head = function TableHead({
  id,
  label,
  allowsSorting = false,
  tooltip,
  labelHidden = false,
  className,
  ...rest
}: TableHeadProps) {
  const { sortDescriptor, onSortChange } = useTable();
  const active = sortDescriptor?.column === id;
  const dir = active ? sortDescriptor.direction : undefined;

  const base = cn(
    "whitespace-nowrap bg-surface-sunken px-4 py-3 text-left align-middle",
    "border-b border-line",
    "font-ui text-[10px] font-label tracking-[0.09em] uppercase text-ink-tertiary",
    className,
  );

  const text = labelHidden ? <span className="sr-only">{label}</span> : label;

  if (!allowsSorting) {
    return (
      <th scope="col" className={base} {...rest}>
        {text}
      </th>
    );
  }

  return (
    // aria-sort belongs on the cell, not the button — it describes the column.
    <th scope="col" aria-sort={active ? dir : "none"} className={base} {...rest}>
      <button
        type="button"
        title={tooltip}
        onClick={() =>
          onSortChange?.({
            column: id,
            direction:
              active && dir === "ascending" ? "descending" : "ascending",
          })
        }
        className={cn(
          "inline-flex items-center gap-1 rounded-xs",
          "font-ui text-[10px] font-label tracking-[0.09em] uppercase",
          "transition-colors duration-150 ease-standard",
          active ? "text-ink" : "text-ink-tertiary hover:text-ink",
        )}
      >
        {text}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
          className={cn(
            "shrink-0 transition-transform duration-150 ease-standard",
            active && dir === "descending" && "rotate-180",
            !active && "opacity-40",
          )}
        >
          <path
            d="M6 2.5v7M3.5 7 6 9.5 8.5 7"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </th>
  );
};

/* ---------------------------------------------------------------- body */

Table.Body = function TableBody<T>({
  items,
  children,
}: {
  items: readonly T[];
  children: (item: T) => ReactNode;
}) {
  return <tbody>{items.map((item) => children(item))}</tbody>;
};

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  /** Stable row identity. Used for selection — an index would break on sort. */
  id: string;
}

Table.Row = function TableRow({ id, className, children, ...rest }: TableRowProps) {
  const { selectionMode, selected, toggle, registerId } = useTable();
  const rowId = useId();
  const isSelected = selected.has(id);

  // Register once per mount so "select all" knows the full set.
  useMemo(() => registerId(id), [id, registerId]);

  return (
    <tr
      aria-selected={selectionMode === "multiple" ? isSelected : undefined}
      className={cn(
        "group transition-colors duration-150 ease-standard",
        // Selected is a NEUTRAL fill, not an orange tint — changed 29 Sep 2026.
        // Selection is a state, not a destination; it should be legible at a
        // glance without spending the one colour that means "press this". The
        // checkbox beside it already carries the signal in a second channel,
        // so this satisfies SC 1.4.1 without colour doing the work alone.
        isSelected ? "bg-fill-soft" : "bg-surface hover:bg-surface-sunken",
        className,
      )}
      {...rest}
    >
      {selectionMode === "multiple" ? (
        <td className="border-b border-line px-4 py-3 align-middle">
          <SelectBox
            label={`Select row ${id}`}
            checked={isSelected}
            onChange={() => toggle(id)}
          />
        </td>
      ) : null}
      {children}
      <span id={rowId} hidden />
    </tr>
  );
};

export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  /** Right-aligns and applies tabular figures. Use for every numeric column. */
  numeric?: boolean;
  /** Promotes the cell to primary ink — the row's identifying value. */
  strong?: boolean;
}

Table.Cell = function TableCell({
  numeric = false,
  strong = false,
  className,
  children,
  ...rest
}: TableCellProps) {
  return (
    <td
      className={cn(
        "border-b border-line px-4 py-3 align-middle",
        strong ? "text-ink" : "text-ink-secondary",
        // Figtree, not mono — 29 Sep 2026. `tabular-nums` is what aligns the
        // column now that the monospace face is gone; drop it and the digits
        // go proportional and the right edge ragged.
        numeric && "text-right tabular-nums whitespace-nowrap",
        className,
      )}
      {...rest}
    >
      {children}
    </td>
  );
};
