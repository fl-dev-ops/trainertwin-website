"use client";

import type { ReactNode } from "react";
import { useId } from "react";
import { cn } from "./cn";
import { useListbox } from "./useListbox";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  label: string;
  options: readonly SelectOption[];
  value: string;
  onChange: (next: string) => void;
  /** Shown in the field while nothing is picked. */
  placeholder?: string;
  /** Helper text under the field. Replaced by `error` when the field is invalid. */
  hint?: ReactNode;
  /** Sets the invalid state and replaces the hint. Say what to do, not what broke. */
  error?: string;
  disabled?: boolean;
  /** Emits a hidden input, so a real form submit carries the value. */
  name?: string;
}

/**
 * Single select, on the same custom listbox `MultiSelect` uses.
 *
 * §8 offers a native `<select>` for choices that are "short and self-evident",
 * and this started there. It does not survive contact with this page: a native
 * select's open menu is drawn by the operating system and ignores every token
 * in the repo, so on a near-black card it drops a grey system panel. §8 names
 * that trade directly — "if the menu opens somewhere the brand has to hold, use
 * the custom listbox" — and on this footer the brand has to hold.
 *
 * The behaviour lives in `useListbox`, shared with `MultiSelect`, so the two
 * cannot answer the keyboard differently. The only real differences here: the
 * trigger shows one label rather than chips, and taking a row closes the list.
 */
export function Select({
  label,
  options,
  value,
  onChange,
  placeholder = "Select…",
  hint,
  error,
  disabled = false,
  name,
}: SelectProps) {
  const id = useId();
  const listId = `${id}-list`;
  const labelId = `${id}-label`;
  const describedBy = error || hint ? `${id}-desc` : undefined;

  const selectedIndex = options.findIndex((option) => option.value === value);
  const selected = selectedIndex === -1 ? undefined : options[selectedIndex];

  const {
    open,
    setOpen,
    close,
    rootRef,
    triggerRef,
    optionRefs,
    onListKeyDown,
    onTriggerKeyDown,
  } = useListbox({
    length: options.length,
    selectedIndex,
    onActivate: (index) => onChange(options[index].value),
    closeOnActivate: true,
  });

  const pick = (optionValue: string) => {
    onChange(optionValue);
    close(true);
  };

  return (
    <div className="flex w-full flex-col gap-1.5" ref={rootRef}>
      <span id={labelId} className="font-ui text-[13px] font-semibold text-ink">
        {label}
      </span>

      <div className="relative">
        <button
          ref={triggerRef}
          type="button"
          disabled={disabled}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listId}
          aria-labelledby={labelId}
          aria-describedby={describedBy}
          onClick={() => setOpen((current) => !current)}
          onKeyDown={onTriggerKeyDown}
          className={cn(
            "tt-lb-field",
            "flex w-full items-center justify-between gap-2",
            "min-h-10 rounded-sm bg-surface px-3 py-1.5",
            "font-ui text-left text-[14px]",
            "border-[length:var(--tt-border-form)] border-solid",
            "transition-colors duration-150 ease-standard",
            "disabled:cursor-not-allowed disabled:opacity-45",
            error
              ? "border-danger"
              : "border-line-field hover:border-line-interactive focus-visible:border-line-interactive",
            selected ? "text-ink" : "text-ink-muted",
          )}
        >
          {selected ? selected.label : placeholder}
          <svg
            viewBox="0 0 16 16"
            className="size-4 shrink-0 text-ink-tertiary"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M4 6l4 4 4-4" />
          </svg>
        </button>

        <ul
          id={listId}
          role="listbox"
          aria-labelledby={labelId}
          hidden={!open}
          onKeyDown={onListKeyDown}
          className={cn(
            "tt-lb-list",
            "absolute z-20 mt-1 max-h-64 w-full overflow-y-auto",
            "rounded-sm border-[length:var(--tt-border-form)] border-solid border-line-field",
            "bg-surface-raised py-1 shadow-e2",
          )}
        >
          {options.map((option, index) => {
            const isSelected = option.value === value;
            return (
              <li
                key={option.value}
                ref={(node) => {
                  optionRefs.current[index] = node;
                }}
                role="option"
                aria-selected={isSelected}
                tabIndex={-1}
                onClick={() => pick(option.value)}
                className={cn(
                  "tt-lb-option",
                  "flex cursor-pointer items-center gap-2 px-3 py-2",
                  "font-ui text-[14px] text-ink outline-none",
                  isSelected && "bg-fill-soft",
                  "hover:bg-fill-soft focus-visible:bg-fill-soft",
                  "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus",
                )}
              >
                <svg
                  viewBox="0 0 16 16"
                  className={cn(
                    "size-4 shrink-0 text-primary",
                    !isSelected && "invisible",
                  )}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3.5 8.5l3 3 6-7" />
                </svg>
                {option.label}
              </li>
            );
          })}
        </ul>
      </div>

      {name ? <input type="hidden" name={name} value={value} /> : null}

      {error ? (
        <p id={describedBy} className="font-ui text-[12px] text-danger">
          {error}
        </p>
      ) : hint ? (
        <p id={describedBy} className="font-ui text-[12px] text-ink-tertiary">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
