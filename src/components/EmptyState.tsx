import type { ReactNode } from "react";
import { cn } from "./cn";

/**
 * Empty state (§8, Progress, skeleton, empty state): a dashed
 * `--tt-border-interactive` container, a title, one line of copy, and EXACTLY ONE
 * action. Not two: an empty state that offers a choice has not decided what the page is for.
 * Say what the space is for and what to do next, not that it is empty.
 */
export interface EmptyStateProps {
  title: string;
  description: ReactNode;
  /** The one action: a Button, usually primary. */
  action?: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export function EmptyState({ title, description, action, icon, className }: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-3 rounded-md border border-dashed border-line-interactive px-6 py-10 text-center font-ui",
        className,
      )}
    >
      {icon ? <span className="text-ink-tertiary [&_svg]:h-6 [&_svg]:w-6">{icon}</span> : null}
      <div className="flex max-w-[44ch] flex-col gap-1">
        <h3 className="m-0 text-[16px] leading-6 font-title text-ink">{title}</h3>
        <p className="m-0 text-[14px] leading-5 text-ink-tertiary">{description}</p>
      </div>
      {action ? <div className="mt-1">{action}</div> : null}
    </div>
  );
}

/**
 * The empty-state GATE: what Home, Analytics and Roleplay show before a twin exists. To the V3 prototype's
 * `.gate-card` (checked 16 Nov 2026): `--tt-radius-lg` (16), a 1px `--tt-border`, NO shadow, centred text, 420 wide
 * (100% of its column). A hero band on top (padding 28 / 36, the pastel gradient scoped to this one band) holds
 * the illustration; the body is padding 24 with a 16/22 title, a 14/20 line, and centred actions 20 below. It may
 * carry two actions (Build my Twin / Sign up).
 */
export interface GateCardProps {
  illustration: ReactNode;
  title: string;
  description: ReactNode;
  actions: ReactNode;
  className?: string;
}

export function GateCard({ illustration, title, description, actions, className }: GateCardProps) {
  return (
    <div className={cn("mx-auto w-[min(420px,100%)] overflow-hidden rounded-lg border border-line bg-surface text-center font-ui", className)}>
      <div
        aria-hidden="true"
        className="flex items-center justify-center px-9 py-7 bg-[linear-gradient(135deg,#AFD1F5,#D9C4F0_55%,#F4C7D6)]"
      >
        {illustration}
      </div>
      <div className="p-6">
        <h2 className="m-0 text-[16px] leading-[22px] font-title text-ink">{title}</h2>
        <p className="mt-[2px] mb-0 text-[13px] leading-5 text-ink-tertiary">{description}</p>
        <div className="mt-5 flex flex-wrap justify-center gap-2">{actions}</div>
      </div>
    </div>
  );
}
