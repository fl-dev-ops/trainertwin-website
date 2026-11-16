import { cn } from "./cn";
import { CheckIcon } from "./UiIcons";

/**
 * Stepper / wizard (§12, resolved 30 Sep 2026; §8 sign-in flow). A numbered row of
 * steps: 24px circles with a 13/500 numeral, labels 14/20 500, each step 32 tall,
 * 12 between circle and label, 24 between steps.
 *
 *   current   `--tt-text-primary` fill, white (`--tt-surface`) numeral, label in ink
 *   done      `--tt-fill-soft` fill with a check (14px, stroke 2.4)
 *   upcoming  `--tt-fill-soft` fill, secondary numeral, tertiary label
 *
 * Steps are 1-based. Pass `onSelect` to let people go back to a DONE step; upcoming
 * steps are never clickable (the flow is linear). A real `<ol>` with
 * `aria-current="step"` on the current one.
 */
export interface StepperProps {
  steps: readonly string[];
  /** 1-based index of the current step. */
  current: number;
  /** Names the list for assistive tech, e.g. "Setup". Required. */
  "aria-label": string;
  /** Makes done steps buttons. */
  onSelect?: (step: number) => void;
  className?: string;
}

export function Stepper({ steps, current, onSelect, className, ...rest }: StepperProps) {
  return (
    <ol aria-label={rest["aria-label"]} className={cn("m-0 flex list-none flex-wrap items-center justify-center gap-x-6 gap-y-3 p-0 font-ui", className)}>
      {steps.map((label, i) => {
        const n = i + 1;
        const state = n === current ? "current" : n < current ? "done" : "upcoming";
        const body = (
          <>
            <span
              aria-hidden="true"
              className={cn(
                "grid h-6 w-6 flex-none place-items-center rounded-full text-[13px] leading-none font-label tabular-nums",
                state === "current" ? "bg-ink text-surface" : "bg-fill-soft",
                state === "done" && "text-ink",
                state === "upcoming" && "text-ink-secondary",
              )}
            >
              {state === "done" ? <CheckIcon size={14} /> : n}
            </span>
            <span className={cn("text-[14px] leading-5", state === "current" ? "font-label text-ink" : "text-ink-tertiary")}>{label}</span>
            {state === "done" ? <span className="sr-only">(done)</span> : null}
          </>
        );
        // The prototype: 24px tall, 8 between the circle and its label (`.setup-steps li`).
        const row = "flex min-h-6 items-center gap-2";
        return (
          <li key={label} aria-current={state === "current" ? "step" : undefined} className="flex">
            {state === "done" && onSelect ? (
              <button
                type="button"
                onClick={() => onSelect(n)}
                className={cn(row, "cursor-pointer rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary")}
              >
                {body}
              </button>
            ) : (
              <span className={row}>{body}</span>
            )}
          </li>
        );
      })}
    </ol>
  );
}
