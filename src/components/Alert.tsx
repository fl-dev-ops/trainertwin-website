import type { ReactNode } from "react";
import { cn } from "./cn";
import { AlertIcon, CheckIcon, InfoIcon, XIcon } from "./UiIcons";

/**
 * Inline alert (§8, Alerts vs Toasts). It sits IN THE FLOW next to what it describes, on
 * the `*-subtle` background with the matching status border and icon, and is for anything
 * the user must act on. A toast confirms something that already happened and can be missed;
 * an error that needs a decision belongs here.
 *
 * Severity rides on the icon, the fill and the words, never colour alone (SC 1.4.1). The
 * status borders are deliberately below 3:1 (a recorded exception): they are a soft edge,
 * not the only signal. `danger` and `caution` announce with `role="alert"`; `info` and
 * `success` are `role="status"`.
 *
 * 12 gap, padding 16, `--tt-radius-sm`, 0.5px border, 13.5px at 1.55. An optional bold
 * title, an optional single action, and an optional dismiss.
 */
export type AlertTone = "info" | "success" | "caution" | "danger";

const tone: Record<AlertTone, { box: string; icon: string; glyph: ReactNode }> = {
  info: { box: "bg-info-subtle border-info-border", icon: "text-info", glyph: <InfoIcon size={16} /> },
  success: { box: "bg-success-subtle border-success-border", icon: "text-success", glyph: <CheckIcon size={16} /> },
  caution: { box: "bg-caution-subtle border-caution-border", icon: "text-caution", glyph: <AlertIcon size={16} /> },
  danger: { box: "bg-danger-subtle border-danger-border", icon: "text-danger", glyph: <AlertIcon size={16} /> },
};

export interface AlertProps {
  tone: AlertTone;
  title?: string;
  children: ReactNode;
  /** One action, usually a Link or a small Button. */
  action?: ReactNode;
  onDismiss?: () => void;
  /** Accessible name of the dismiss button, for translation. */
  dismissLabel?: string;
  className?: string;
}

export function Alert({ tone: t, title, children, action, onDismiss, dismissLabel = "Dismiss", className }: AlertProps) {
  const urgent = t === "danger" || t === "caution";
  return (
    <div
      role={urgent ? "alert" : "status"}
      className={cn(
        "flex gap-3 rounded-sm border-[length:var(--tt-border-form)] border-solid p-4 font-ui text-[13.5px] leading-[1.55] text-ink-secondary",
        tone[t].box,
        className,
      )}
    >
      <span className={cn("mt-[1px] flex-none", tone[t].icon)} aria-hidden="true">
        {tone[t].glyph}
      </span>
      <div className="min-w-0 flex-1">
        {title ? <p className="mb-0.5 font-medium text-ink">{title}</p> : null}
        <div>{children}</div>
        {action ? <div className="mt-2">{action}</div> : null}
      </div>
      {onDismiss ? (
        <button
          type="button"
          aria-label={dismissLabel}
          onClick={onDismiss}
          className="-mt-1 -mr-1 grid h-7 w-7 flex-none place-items-center rounded-sm text-ink-secondary hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary"
        >
          <XIcon size={14} />
        </button>
      ) : null}
    </div>
  );
}
