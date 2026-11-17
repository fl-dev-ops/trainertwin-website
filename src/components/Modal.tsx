"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";
import { cn } from "./cn";
import { Button } from "./Button";
import { AlertIcon, InfoIcon, XIcon } from "./UiIcons";
import "./Modal.css";

/**
 * Modal, side panel and the confirm dialog (§8). All three are the native `<dialog>` opened with
 * `showModal()`: focus is trapped, the page behind is inert, Escape closes, and the dialog sits in
 * the browser's top layer, so it ignores z-index. That also makes stacking free: a dialog opened
 * over a panel is simply later in the top layer, so Escape and the backdrop close the top-most first.
 *
 * Reserved for decisions that must be made now, or that are destructive. The confirm button takes
 * the variant of the ACTION, not of the dialog: a delete dialog confirms with the danger button.
 *
 * Surface, to the V3 prototype (decided 16 Nov 2026: "prototype is final"): EVERY popup shares the
 * confirm dialog's surface, a soft grey-to-white gradient (`--tt-surface-sunken` to `--tt-surface`),
 * a 4px `--tt-surface` border, `--tt-radius-xl` (24) and one drop shadow, `--tt-shadow-dialog`. An
 * icon sits in a framed tile; the tile is `--tt-danger` for a destructive dialog and ink for a calm
 * one. Scrim `--tt-scrim`. The SidePanel keeps the raised surface with 24px left corners.
 */

type DialogBase = {
  open: boolean;
  onClose: () => void;
  title: string;
  /** Optional line under the title. */
  description?: ReactNode;
  /** A glyph for the framed tile above the title. */
  icon?: ReactNode;
  /** `danger` (default) colours the tile `--tt-danger`; `calm` uses ink. */
  iconTone?: "danger" | "calm";
  /** Accessible name of the close button, for translation. */
  closeLabel?: string;
  /** Close when the backdrop is clicked. Default true; turn off for a form in progress. */
  closeOnBackdrop?: boolean;
  /** `gradient` (default) is the prototype's grey-to-white surface; `plain` is flat `--tt-surface` white, for a dialog that holds a list or a table. */
  surface?: "gradient" | "plain";
  children?: ReactNode;
  /** The action row, right-aligned. Cancel first, the confirm action last. */
  footer?: ReactNode;
  className?: string;
};

/** Shared plumbing: keep `open` and the native dialog in step, route Esc and backdrop. */
function useDialog(open: boolean, onClose: () => void, closeOnBackdrop: boolean) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);
  return {
    ref,
    // Escape fires `cancel`. Hand the decision to the parent instead of closing here,
    // so a controlled `open` never drifts from the DOM.
    onCancel: (e: React.SyntheticEvent) => {
      e.preventDefault();
      onClose();
    },
    // A click whose target is the <dialog> itself landed on the backdrop: the card
    // fills the whole box, so nothing else can be the target.
    onClick: (e: React.MouseEvent<HTMLDialogElement>) => {
      if (closeOnBackdrop && e.target === e.currentTarget) onClose();
    },
  };
}

const widths = { sm: "w-[min(440px,calc(100vw-32px))]", md: "w-[min(520px,calc(100vw-32px))]", lg: "w-[min(640px,calc(100vw-32px))]" };

export interface ModalProps extends DialogBase {
  /** sm 440 (confirm) · md 520 (respond) · lg 640 (assign). */
  size?: keyof typeof widths;
}

const GRADIENT = "bg-[linear-gradient(180deg,var(--tt-surface-sunken)_0%,var(--tt-surface)_100%)]";
const SURFACE = `rounded-xl border-4 border-surface ${GRADIENT} shadow-dialog`;
const SURFACE_PLAIN = "rounded-xl border-4 border-surface bg-surface shadow-dialog";

/** The framed icon tile from the confirm dialog: a hairline gradient frame around an inset tile. */
function IconTile({ children, tone }: { children: ReactNode; tone: "danger" | "calm" }) {
  return (
    <span aria-hidden="true" className="flex rounded-[18px] bg-[linear-gradient(180deg,var(--tt-border),var(--tt-surface))] p-[2px]">
      <span
        className={cn(
          "flex rounded-lg border-4 border-surface p-3 shadow-[0_4px_8px_rgb(30_28_25/0.2),inset_0_0_4px_rgb(30_28_25/0.05)] [&_svg]:h-5 [&_svg]:w-5",
          GRADIENT,
          tone === "danger" ? "text-danger" : "text-ink",
        )}
      >
        {children}
      </span>
    </span>
  );
}

export function Modal({ open, onClose, title, description, icon, iconTone = "danger", closeLabel = "Close", closeOnBackdrop = true, surface = "gradient", children, footer, size = "md", className }: ModalProps) {
  const titleId = useId();
  const { ref, ...handlers } = useDialog(open, onClose, closeOnBackdrop);
  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      className={cn("tt-dialog m-auto max-h-[calc(100dvh-32px)] max-w-none overflow-visible border-0 bg-transparent p-0", widths[size])}
      {...handlers}
    >
      {open ? (
        <div className={cn("relative flex max-h-[calc(100dvh-32px)] flex-col items-start gap-5 p-6 font-ui text-ink", surface === "plain" ? SURFACE_PLAIN : SURFACE, className)}>
          <Button variant="ghost" size="sm" iconOnly leadingIcon={<XIcon />} aria-label={closeLabel} onClick={onClose} className="absolute top-3 right-3" />
          {icon ? <IconTile tone={iconTone}>{icon}</IconTile> : null}
          <div className="flex min-w-0 flex-col gap-2">
            <h2 id={titleId} className="m-0 pr-8 text-[20px] leading-7 font-title tracking-[-0.025em]">
              {title}
            </h2>
            {description ? <p className="m-0 text-[14px] leading-5 text-ink-secondary">{description}</p> : null}
          </div>
          {children ? <div className="min-h-0 w-full flex-1 overflow-y-auto">{children}</div> : null}
          {footer ? <div className="flex w-full flex-wrap justify-end gap-2">{footer}</div> : null}
        </div>
      ) : null}
    </dialog>
  );
}

export interface ConfirmDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  /** One line of consequence: what will happen, and whether it can be undone. */
  description: ReactNode;
  confirmLabel: string;
  /** Match the ACTION: `danger` for a delete, `primary` for a send, `strong` for a neutral yes. */
  confirmVariant?: "danger" | "primary" | "strong";
  cancelLabel?: string;
  onConfirm: () => void;
  /** Defaults to an alert glyph for `danger` and an info glyph otherwise. */
  icon?: ReactNode;
}

export function ConfirmDialog({ open, onClose, title, description, confirmLabel, confirmVariant = "primary", cancelLabel = "Cancel", onConfirm, icon }: ConfirmDialogProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      size="sm"
      title={title}
      description={description}
      icon={icon ?? (confirmVariant === "danger" ? <AlertIcon /> : <InfoIcon />)}
      iconTone={confirmVariant === "danger" ? "danger" : "calm"}
      footer={
        <>
          <Button variant="secondary" onClick={onClose}>
            {cancelLabel}
          </Button>
          <Button variant={confirmVariant} onClick={onConfirm}>
            {confirmLabel}
          </Button>
        </>
      }
    />
  );
}

export interface SidePanelProps extends DialogBase {
  /** Line under the title. */
  description?: ReactNode;
  /** Panel width in px (100vw on small screens). 480 is the prototype's Activity log; 560 for a wider list. */
  width?: number;
}

/**
 * The side panel, to the V3 prototype's `.sidepanel` (checked 16 Nov 2026): 480 wide by default (100vw on small
 * screens; `width` for another), full height, square edges, `--tt-elevation-3` on `--tt-surface-raised`, slides in from
 * the right once on open. Header padding 20 / 24, title 17/24, subtitle 13/20 tertiary; the body scrolls inside.
 */
export function SidePanel({ open, onClose, title, description, closeLabel = "Close", closeOnBackdrop = true, children, footer, width = 480, className }: SidePanelProps) {
  const titleId = useId();
  const { ref, ...handlers } = useDialog(open, onClose, closeOnBackdrop);
  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      style={{ width: `min(${width}px, 100vw)` }}
      className="tt-dialog tt-panel m-0 mr-0 ml-auto h-dvh max-h-none max-w-none overflow-visible border-0 bg-transparent p-0"
      {...handlers}
    >
      {open ? (
        <div className={cn("flex h-full flex-col bg-surface-raised font-ui text-ink shadow-e3", className)}>
          <div className="flex items-start justify-between gap-3 border-b border-line px-6 py-5">
            <div className="min-w-0">
              <h2 id={titleId} className="m-0 text-[17px] leading-6 font-title tracking-[-0.015em]">
                {title}
              </h2>
              {description ? <p className="m-0 mt-0.5 text-[13px] leading-5 text-ink-tertiary">{description}</p> : null}
            </div>
            <Button variant="ghost" size="sm" iconOnly leadingIcon={<XIcon />} aria-label={closeLabel} onClick={onClose} />
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto px-6 py-4">{children}</div>
          {footer ? <div className="flex flex-wrap justify-end gap-2 border-t border-line px-6 py-4">{footer}</div> : null}
        </div>
      ) : null}
    </dialog>
  );
}
