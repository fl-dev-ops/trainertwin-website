import { cn } from "./cn";
import { Button } from "./Button";

export interface PaginationProps {
  page: number;
  total: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

/**
 * Minimal centred pagination — Previous, "Page N of M", Next.
 *
 * No numbered page buttons. At ten pages they add six targets that all look
 * alike; the count carries the same information in one line, and the two things
 * people actually do are "next" and "back".
 */
export function Pagination({
  page,
  total,
  onPageChange,
  className,
}: PaginationProps) {
  const atStart = page <= 1;
  const atEnd = page >= total;
  return (
    <nav
      aria-label="Pagination"
      className={cn(
        "flex items-center justify-between gap-3 border-t border-line px-4 py-3 md:px-6",
        className,
      )}
    >
      <Button
        variant="secondary"
        size="sm"
        disabled={atStart}
        onClick={() => onPageChange?.(page - 1)}
      >
        Previous
      </Button>
      {/* aria-live so a screen reader hears the page change, which is otherwise
          a silent content swap. */}
      <span
        aria-live="polite"
        // Figtree, not mono — 29 Sep 2026. `tabular-nums` is load-bearing
        // here, not decoration: Figtree's default figures are proportional
        // and measure 99px vs 154px for "111111" vs "000000" at 40px, so
        // the page counter would visibly jitter as it advanced without it.
        className="text-[11.5px] tabular-nums text-ink-tertiary"
      >
        Page {page} of {total}
      </span>
      <Button
        variant="secondary"
        size="sm"
        disabled={atEnd}
        onClick={() => onPageChange?.(page + 1)}
      >
        Next
      </Button>
    </nav>
  );
}
