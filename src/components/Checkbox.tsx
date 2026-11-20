"use client";

import type { InputHTMLAttributes, ReactNode } from "react";
import { useEffect, useId, useRef } from "react";
import { cn } from "./cn";
import { InfoHint } from "./Tooltip";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "className" | "children"> {
  label: string;
  /** Supporting text. `inline` (default) is a line under the label; `tooltip` puts it
   *  behind an info icon, and it is still read out by assistive tech. */
  hint?: ReactNode;
  hintStyle?: "inline" | "tooltip";
  /** Mixed state, for a parent whose children are partly selected. Shows a dash. */
  indeterminate?: boolean;
  /** Hide the label visually but keep it for assistive tech. The 18px box is then the only target. */
  labelHidden?: boolean;
  /** Make the whole nearest positioned ancestor (a card) the click target, by stretching
   *  the label over it. The card must be `relative`. Anything interactive inside needs `relative z-10`. */
  stretchLabel?: boolean;
  className?: string;
}

/**
 * Checkbox. 18px, the 0.5px form border, the 4px `xs` radius: the smallest step in
 * the radius scale is theirs. Checked fills with `--tt-cta-strong` and marks in
 * `--tt-on-cta-strong`, never the brand orange (§8 Form controls).
 *
 * The tick is a 1px stroke drawn as two borders on a rotated box, not a clip-path
 * polygon: a polygon's stroke weight is implied by its outline, the retired one
 * worked out near 2px, heavy against a 0.5px border. The indeterminate dash is 1px
 * to match, so both states read as one control drawn with one pen.
 *
 * A real `<input type="checkbox">` under a `<label>`, so the label is part of the
 * hit target, grouping and form submit come from the browser, and the space key works.
 */
export function Checkbox({
  label,
  hint,
  hintStyle = "inline",
  indeterminate = false,
  labelHidden = false,
  stretchLabel = false,
  className,
  id,
  ...rest
}: CheckboxProps) {
  const autoId = useId();
  const boxId = id ?? autoId;
  const ref = useRef<HTMLInputElement>(null);

  // `indeterminate` is a DOM property, not an attribute; React cannot set it from props.
  useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);

  return (
    <div className={cn("flex items-start gap-3", className)}>
      <input
        ref={ref}
        id={boxId}
        type="checkbox"
        aria-describedby={hint ? `${boxId}-hint` : undefined}
        className={cn(
          "mt-[1px] grid h-[18px] w-[18px] flex-none cursor-pointer appearance-none place-items-center",
          "rounded-xs border-[length:var(--tt-border-form)] border-solid border-line-field bg-surface p-0",
          "hover:border-line-interactive focus:border-line-interactive",
          "transition-colors duration-(--tt-duration-quick) ease-standard",
          "checked:border-strong checked:bg-strong indeterminate:border-strong indeterminate:bg-strong",
          // Tick: two 1px borders on a 5 x 9 box, rotated 45deg. Same recipe as the
          // Table's row checkbox, so the two cannot drift.
          "checked:after:h-[9px] checked:after:w-[5px] checked:after:content-['']",
          "checked:after:border-r checked:after:border-b checked:after:border-on-strong",
          "checked:after:rotate-45 checked:after:-translate-y-[1px] checked:after:translate-x-[1px]",
          // Dash: a 1px line, so the two states read as one control drawn with one pen.
          "indeterminate:after:h-[1px] indeterminate:after:w-[9px]",
          "indeterminate:after:bg-on-strong indeterminate:after:content-['']",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
          "disabled:cursor-not-allowed disabled:opacity-45",
        )}
        {...rest}
      />
      <label
        htmlFor={boxId}
        className={cn(
          "flex min-w-0 cursor-pointer flex-col gap-0.5 font-ui",
          stretchLabel && "after:absolute after:inset-0 after:content-['']",
          labelHidden && "sr-only",
          rest.disabled && "cursor-not-allowed opacity-45",
        )}
      >
        <span className="text-[14px] leading-5 text-ink">{label}</span>
        {hint && hintStyle === "inline" ? (
          <span id={`${boxId}-hint`} className="text-[13px] leading-5 text-ink-tertiary">
            {hint}
          </span>
        ) : null}
      </label>
      {hint && hintStyle === "tooltip" ? <InfoHint id={`${boxId}-hint`}>{hint}</InfoHint> : null}
    </div>
  );
}
