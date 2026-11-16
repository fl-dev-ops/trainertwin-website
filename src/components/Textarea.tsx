"use client";

import type { ReactNode, TextareaHTMLAttributes } from "react";
import { useId, useState } from "react";
import { cn } from "./cn";

export interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "className"> {
  label: string;
  /** Helper text under the field. Replaced by `error` when the field is invalid. */
  hint?: ReactNode;
  /** Sets the invalid state and replaces the hint. Name the fix, not the failure. */
  error?: string;
  /** Hide the label visually but keep it for assistive tech. Use sparingly. */
  labelHidden?: boolean;
  /**
   * Shows a "n / max" counter when `maxLength` is set. It turns `--tt-danger` and
   * bold once over the limit, per the form-control spec. Note the browser stops
   * typing at `maxLength`, so "over" only happens for pasted or programmatic text:
   * pass `limit` instead of `maxLength` to allow going over and let the counter warn.
   */
  limit?: number;
  /** `none` (the default, a fixed box) or `vertical` for long free text. */
  resize?: "none" | "vertical";
  className?: string;
}

/**
 * Multi-line text field. Same border, radius, states and label/hint/error wiring
 * as `Input`; differs only in height and padding. Default is the prototype's
 * measured 72px box with 12px padding and 23px line height, which fits three lines
 * of 14px text. Use `rows` to change it.
 */
export function Textarea({
  label,
  hint,
  error,
  labelHidden = false,
  limit,
  resize = "none",
  className,
  id,
  value,
  defaultValue,
  onChange,
  maxLength,
  rows,
  ...rest
}: TextareaProps) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  const describedBy = error || hint ? `${fieldId}-desc` : undefined;
  const [typed, setTyped] = useState(String(defaultValue ?? ""));
  const text = value !== undefined ? String(value) : typed;
  const cap = limit ?? maxLength;
  const over = limit !== undefined && text.length > limit;

  return (
    <div className="flex w-full flex-col gap-1.5">
      <label
        htmlFor={fieldId}
        className={cn("font-ui text-[13px] leading-5 font-label text-ink-secondary", labelHidden && "sr-only")}
      >
        {label}
      </label>

      <textarea
        id={fieldId}
        aria-invalid={error || over ? true : undefined}
        aria-describedby={describedBy}
        maxLength={maxLength}
        rows={rows}
        value={value}
        defaultValue={defaultValue}
        onChange={(e) => {
          setTyped(e.target.value);
          onChange?.(e);
        }}
        className={cn(
          "w-full rounded-sm bg-surface p-3 font-ui text-[14px] leading-[23px] text-ink",
          rows ? "" : "h-[72px]",
          resize === "vertical" ? "resize-y" : "resize-none",
          "overflow-y-auto border-[length:var(--tt-border-form)] border-solid",
          error || over
            ? "border-danger"
            : "border-line-field hover:border-line-interactive focus:border-line-interactive",
          "placeholder:text-ink-muted focus:outline-none",
          "transition-colors duration-(--tt-duration-quick) ease-standard",
          "disabled:cursor-not-allowed disabled:opacity-45",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
          className,
        )}
        {...rest}
      />

      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          {error ? (
            <p id={describedBy} className="font-ui text-[13px] leading-5 text-danger">
              {error}
            </p>
          ) : hint ? (
            <p id={describedBy} className="font-ui text-[13px] leading-5 text-ink-tertiary">
              {hint}
            </p>
          ) : null}
        </div>
        {cap !== undefined ? (
          <span
            aria-live="polite"
            className={cn(
              "flex-none font-ui text-[12px] tabular-nums",
              over ? "font-title text-danger" : "text-ink-tertiary",
            )}
          >
            {text.length} / {cap}
          </span>
        ) : null}
      </div>
    </div>
  );
}
