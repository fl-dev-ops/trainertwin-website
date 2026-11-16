import type { ReactNode } from "react";
import { cn } from "./cn";
import { ArrowUpRightIcon } from "./UiIcons";

/**
 * A single metric (§8), to the V3 prototype's `.tm-metric` (checked 16 Nov 2026): `--tt-surface-sunken`, radius 12,
 * padding 16 / 20, a 1px inset ring in `--tt-border`, in a grid with 16 between.
 * Label is a 14px icon + 14px secondary text; the value is 32/600 tabular-nums.
 *
 * No note line under the number: if a note only repeats the label, delete it.
 * The ↗ is a 28px ghost button, vertically centred on the number, and it goes
 * where the number leads. A tile whose number leads nowhere (minutes) has no
 * arrow: omit `onGo`.
 */
export interface NumberTileProps {
  label: string;
  icon?: ReactNode;
  value: ReactNode;
  /** Makes the ↗ appear. Say where it goes in `goLabel`. */
  onGo?: () => void;
  goLabel?: string;
  className?: string;
}

export function NumberTile({ label, icon, value, onGo, goLabel, className }: NumberTileProps) {
  return (
    <div className={cn("flex flex-col justify-center rounded-md bg-surface-sunken px-5 py-4 shadow-[inset_0_0_0_1px_var(--tt-border)]", className)}>
      <div className="flex items-center gap-2 font-ui text-[14px] leading-[23px] text-ink-secondary">
        {icon ? <span className="flex-none [&>svg]:h-[14px] [&>svg]:w-[14px]">{icon}</span> : null}
        {label}
      </div>
      <div className="flex items-center justify-between gap-3">
        <span className="mt-2 font-ui text-[32px] leading-[1.1] font-title tabular-nums text-ink">{value}</span>
        {onGo ? (
          <button
            type="button"
            onClick={onGo}
            aria-label={goLabel ?? `Go to ${label}`}
            className="mt-2 grid h-7 w-7 flex-none place-items-center rounded-full text-ink-secondary transition-colors duration-(--tt-duration-quick) ease-standard hover:bg-surface hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <ArrowUpRightIcon />
          </button>
        ) : null}
      </div>
    </div>
  );
}
