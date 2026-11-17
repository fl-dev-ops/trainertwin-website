"use client";

import type { ReactNode } from "react";
import { cn } from "./cn";
import { Button } from "./Button";
import { SearchIcon } from "./icons";
import { XIcon } from "./UiIcons";

/**
 * A search box for toolbars and dialogs (V3 `.lib-search`, the assign dialog's search and the Questions search): a pill
 * with a leading magnifier and a borderless input. `Input` is the labelled form field; this one has no visible label, so
 * `label` is required for assistive tech.
 *
 *   `size`        `md` 36px (header, dialog) or `sm` 32px (inside a card's toolbar).
 *   `appearance`  `ring` a 1px inset ring in `--tt-border` (the header look) or `field` a 1px `--tt-border-field` border.
 *   `onClear`     adds a × at the right. Give it when the box can be dismissed or emptied.
 *
 * Width comes from `className` (`w-[196px]`, `flex-1`); it is full width by default.
 */
export interface SearchFieldProps {
  label: string;
  value: string;
  onChange: (next: string) => void;
  placeholder?: string;
  size?: "md" | "sm";
  appearance?: "ring" | "field";
  onClear?: () => void;
  clearLabel?: string;
  autoFocus?: boolean;
  /** Replace the magnifier. */
  icon?: ReactNode;
  className?: string;
}

export function SearchField({ label, value, onChange, placeholder, size = "md", appearance = "ring", onClear, clearLabel = "Clear search", autoFocus, icon, className }: SearchFieldProps) {
  return (
    <label
      className={cn(
        "flex items-center gap-2 rounded-full bg-surface pl-3 text-ink-tertiary font-ui",
        onClear ? "pr-1" : "pr-3",
        size === "md" ? "h-9" : "h-8",
        appearance === "ring" ? "shadow-[0_0_0_1px_var(--tt-border)]" : "border border-line-field",
        "focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-primary",
        className,
      )}
    >
      <span aria-hidden="true" className="flex-none [&_svg]:h-4 [&_svg]:w-4">{icon ?? <SearchIcon />}</span>
      <input
        type="search"
        aria-label={label}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
        autoFocus={autoFocus}
        className="min-w-0 flex-1 border-0 bg-transparent p-0 text-[14px] leading-5 text-ink outline-none placeholder:text-ink-muted"
      />
      {onClear ? (
        <Button variant="ghost" size="sm" iconOnly aria-label={clearLabel} onClick={onClear} className="h-6! min-h-0! w-6!">
          <XIcon />
        </Button>
      ) : null}
    </label>
  );
}
