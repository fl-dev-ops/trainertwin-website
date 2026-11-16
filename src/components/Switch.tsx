"use client";

import type { ReactNode } from "react";
import { useId } from "react";
import { cn } from "./cn";
import { InfoHint } from "./Tooltip";

export interface SwitchProps {
  checked: boolean;
  onChange: (next: boolean) => void;
  /** Visible label. Required unless you pass `aria-label`. */
  label?: string;
  /** Supporting text. By default it sits behind an info icon and shows as a tooltip on
   *  hover and focus; it is also read out by assistive tech, so it is never tooltip-only. */
  hint?: ReactNode;
  /** `tooltip` (default): info icon + tooltip. `inline`: a line of text under the label. */
  hintStyle?: "tooltip" | "inline";
  /** Names the switch when there is no visible `label`, e.g. a row's own heading. */
  "aria-label"?: string;
  disabled?: boolean;
  name?: string;
  className?: string;
}

/**
 * On/off setting that takes effect immediately (a module on or off, a notification).
 * If the change needs a Save, use a Checkbox: a switch that does not act when you
 * flip it is a lie.
 *
 * 40 × 24 track, 20px thumb. On = `--tt-primary` (brand orange), off = `--tt-border`, the thumb is
 * always `--tt-surface`. Orange for a switch is Bhuvan's call, 16 Nov 2026 ("keep orange"): the
 * V3 prototype's `.rps-switch` fills orange, and a switch is a control whose state is its whole
 * point. This is the ONE place a state is orange; a checked Checkbox, a selected tile and a
 * selected segment stay neutral (D04, D107).
 *
 * `role="switch"` on a button, with `aria-checked`: Space and Enter toggle.
 */
export function Switch({
  checked,
  onChange,
  label,
  hint,
  hintStyle = "tooltip",
  disabled,
  name,
  className,
  ...rest
}: SwitchProps) {
  const id = useId();
  return (
    <div className={cn("flex items-start gap-3", className)}>
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label ? undefined : rest["aria-label"]}
        aria-labelledby={label ? `${id}-label` : undefined}
        aria-describedby={hint ? `${id}-hint` : undefined}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={cn(
          "relative h-6 w-10 flex-none rounded-full p-0",
          "transition-colors duration-(--tt-duration-quick) ease-standard",
          checked ? "bg-primary" : "bg-line",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
          "disabled:cursor-not-allowed disabled:opacity-45",
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            "absolute top-[2px] left-[2px] h-5 w-5 rounded-full shadow-[0_1px_2px_rgb(0_0_0/0.2)]",
            "transition-transform duration-(--tt-duration-quick) ease-standard",
            "bg-surface",
            checked ? "translate-x-4" : "translate-x-0",
          )}
        />
      </button>
      {name ? <input type="hidden" name={name} value={checked ? "on" : "off"} /> : null}
      {label || hint ? (
        <div className="flex min-w-0 flex-col gap-0.5 pt-[2px] font-ui">
          <div className="flex items-center gap-1">
            {label ? (
              <label
                id={`${id}-label`}
                htmlFor={id}
                className={cn("text-[14px] leading-5 text-ink", disabled ? "cursor-not-allowed opacity-45" : "cursor-pointer")}
              >
                {label}
              </label>
            ) : null}
            {hint && hintStyle === "tooltip" ? <InfoHint id={`${id}-hint`}>{hint}</InfoHint> : null}
          </div>
          {hint && hintStyle === "inline" ? (
            <span id={`${id}-hint`} className="text-[13px] leading-5 text-ink-tertiary">
              {hint}
            </span>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
