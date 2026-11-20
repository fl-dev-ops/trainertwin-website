"use client";

import type { ReactNode } from "react";
import { cn } from "./cn";
import { Avatar } from "./Avatar";
import { Checkbox } from "./Checkbox";
import { StatPill } from "./StatPill";
import { LearnerStack, type Learner } from "./LearnerStack";
import { Button } from "./Button";
import { Menu, type MenuEntry } from "./Menu";
import { MoreVerticalIcon } from "./UiIcons";

/**
 * Three small card patterns from §8 that sit in grids: the dashed Add card, the source
 * card (checkbox, name, stat pill) and the Twin-for-all wide card.
 */

/* ------------------------------------------------------------------ AddCard */

/**
 * The dashed "add a new one" tile that ends a card grid, to the V3 prototype's `.card--add` (16 Nov 2026): no fill,
 * no shadow, `1px dashed --tt-border-field`, `--tt-radius-lg`, a 24px `+` glyph and a 14/24 600 label in
 * `--tt-primary-ink`; it stretches to the height of its row. Use it
 * wherever a grid needs its own trailing add affordance instead of a button floating
 * outside the grid. Hover firms the border and darkens the text.
 */
export function AddCard({ label, onClick, className }: { label: string; onClick?: () => void; className?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex h-full min-h-[60px] flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-line-field bg-transparent px-1.5 py-px font-ui text-ink-secondary cursor-pointer",
        "transition-colors duration-(--tt-duration-quick) ease-standard hover:border-line-interactive hover:bg-fill-soft hover:text-ink",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        className,
      )}
    >
      <span aria-hidden="true" className="flex h-6 w-6 items-center justify-center">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </span>
      <span className="text-[14px] leading-6 font-title text-primary-ink">{label}</span>
    </button>
  );
}

/* ---------------------------------------------------------------- SourceCard */

/**
 * The knowledge source card: a checkbox, the source's name and a stat pill ("14 pages").
 * Multi-select, so ticking changes colour, never size: the border steps up a colour step
 * and nothing reflows. The whole card is the click target (the Checkbox's label is stretched
 * over it). In a source picker the cards sit in a fixed two-column grid at 316px each: every
 * card has the same shape, and a flexible width would misalign the checkboxes across rows.
 */
export interface SourceCardProps {
  name: string;
  /** "14 pages", "36 posts". */
  count: string;
  checked: boolean;
  onChange: (next: boolean) => void;
  /** Optional source icon or avatar at the left of the name. */
  leading?: ReactNode;
  disabled?: boolean;
  className?: string;
}

export function SourceCard({ name, count, checked, onChange, leading, disabled, className }: SourceCardProps) {
  return (
    <div
      className={cn(
        "relative flex w-[316px] max-w-full items-center gap-3 rounded-md border bg-surface p-4 shadow-card",
        "transition-colors duration-(--tt-duration-quick) ease-standard",
        checked ? "border-ink-tertiary" : "border-line-card",
        "has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-primary",
        className,
      )}
    >
      <Checkbox label={name} stretchLabel checked={checked} disabled={disabled} onChange={(e) => onChange(e.target.checked)} className="min-w-0 flex-1 items-center" />
      {leading ? <span className="flex-none">{leading}</span> : null}
      <StatPill>{count}</StatPill>
    </div>
  );
}

/* ------------------------------------------------------------- TwinAllCard */

/**
 * "Twin for all use cases": the wide card above the grid of use-case twins. A 76px photo,
 * the name at 18/24 600, "Last updated …" at 15/20 secondary, the learner stack, and a ⋮
 * button. Hover firms the border (it does not lift: it is wide, and a lifting shadow
 * under 896px reads heavy). The whole card opens the twin through a stretched link on the
 * name, so the ⋮ stays a separate control.
 */
export interface TwinAllCardProps {
  name: string;
  /** "Last updated 29 Oct, 13:00". */
  meta: string;
  /** After the meta line: the prototype draws a 12px chevron here. */
  metaIcon?: ReactNode;
  photoSrc?: string;
  learners?: readonly Learner[];
  href?: string;
  onOpen?: () => void;
  onMore?: () => void;
  /** The card's own ⋮ menu: pass the items and the card renders a `Menu`. Ignored `onMore` then. */
  actions?: readonly MenuEntry[];
  /** Force a state for documentation. */
  forceState?: "hover" | "focus";
  className?: string;
}

/**
 * The wide "Twin for all use cases" card. The whole card is the click target (the name is a stretched link, so the ⋮
 * stays separate) and it lifts to `--tt-elevation-2` on hover, the same lift as an `AgentCard`. That needs the link NOT to be
 * `relative`: its ::after stretches to the nearest positioned ancestor, which must be the card.
 */
export function TwinAllCard({ name, meta, metaIcon, photoSrc, learners = [], href, onOpen, onMore, actions, forceState, className }: TwinAllCardProps) {
  // No `relative` here: the ::after stretches to the nearest positioned ancestor, which must be the card itself.
  const nameCls =
    "text-left font-ui text-[18px] leading-6 font-title text-ink after:absolute after:inset-0 after:z-[1] after:content-[''] focus-visible:outline-none tt-open";
  return (
    <article
      className={cn(
        "relative flex w-full max-w-[896px] items-center gap-5 rounded-lg border border-line-card bg-surface p-5 shadow-card",
        (href || onOpen) && "cursor-pointer",
        "transition-shadow duration-(--tt-duration-quick) ease-standard hover:shadow-e2",
        forceState === "hover" && "shadow-e2",
        forceState === "focus" && "outline-2 outline-offset-2 outline-primary",
        "has-[.tt-open:focus-visible]:outline-2 has-[.tt-open:focus-visible]:outline-offset-2 has-[.tt-open:focus-visible]:outline-primary",
        className,
      )}
    >
      {photoSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={photoSrc} alt="" className="h-(--tt-size-photo) w-(--tt-size-photo) flex-none rounded-lg bg-fill-soft object-cover" style={{ objectPosition: "center 18%" }} />
      ) : (
        <span className="grid h-(--tt-size-photo) w-(--tt-size-photo) flex-none place-items-center rounded-lg bg-fill-soft">
          <Avatar alt={name} size="lg" />
        </span>
      )}
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        {href ? (
          <a href={href} className={nameCls}>
            {name}
          </a>
        ) : (
          <button type="button" onClick={onOpen} className={nameCls}>
            {name}
          </button>
        )}
        <p className="m-0 flex items-center gap-1 font-ui text-[15px] leading-5 text-ink-secondary">{meta}{metaIcon ? <span aria-hidden="true" className="flex-none [&_svg]:h-3 [&_svg]:w-3">{metaIcon}</span> : null}</p>
        {learners.length ? <LearnerStack learners={learners} /> : null}
      </div>
      {actions ? (
        <Menu
          label={`Actions for ${name}`}
          items={actions}
          className="relative z-[2] flex-none"
          trigger={(p) => (
            <Button variant="ghost" size="sm" iconOnly {...p} aria-label={`Actions for ${name}`} className="bg-fill-soft! hover:bg-fill-soft-hover!">
              <MoreVerticalIcon />
            </Button>
          )}
        />
      ) : (
              <Button variant="ghost" size="sm" iconOnly aria-label={`Actions for ${name}`} aria-haspopup="menu" onClick={onMore} className="relative z-[2] flex-none bg-fill-soft! hover:bg-fill-soft-hover!">
          <MoreVerticalIcon />
        </Button>
      )}
    </article>
  );
}
