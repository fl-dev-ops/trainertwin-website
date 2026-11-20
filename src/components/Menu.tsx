"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "./cn";
import { Button } from "./Button";
import { MoreVerticalIcon } from "./UiIcons";

/**
 * Menu (§8, Menu, tooltip): a button that opens a list of actions. `--tt-surface-raised`,
 * `--tt-elevation-2`, 13px items on a 32px row, a destructive item LAST and below a
 * divider. Not for navigation and not for choosing a value (that is a Select).
 *
 * Keyboard: Enter, Space or ArrowDown on the trigger opens it and focuses the first
 * item; ArrowUp/Down, Home and End move; typing a letter jumps to the next item that
 * starts with it; Escape closes and returns focus to the trigger; Tab closes. Items are
 * `role="menuitem"`, the list `role="menu"`, the trigger `aria-haspopup` + `aria-expanded`.
 */
export interface MenuItem {
  label: string;
  onSelect: () => void;
  icon?: ReactNode;
  /** Destructive. Put it last, after a `"divider"`. */
  danger?: boolean;
  disabled?: boolean;
}
export type MenuEntry = MenuItem | "divider";

export interface MenuProps {
  /** Names the menu for assistive tech, e.g. "Actions for Ravi: first conversation". */
  label: string;
  items: readonly MenuEntry[];
  /** Which edge of the trigger the menu lines up with. */
  align?: "start" | "end";
  /** Replace the default ⋮ icon button. Receives the props the trigger must spread. */
  trigger?: (p: {
    id: string;
    "aria-haspopup": "menu";
    "aria-expanded": boolean;
    "aria-controls": string | undefined;
    onClick: () => void;
    onKeyDown: (e: KeyboardEvent) => void;
  }) => ReactNode;
  className?: string;
}

export function Menu({ label, items, align = "end", trigger, className }: MenuProps) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const wrap = useRef<HTMLDivElement>(null);
  const refs = useRef<Array<HTMLButtonElement | null>>([]);
  const actions = items.map((e, i) => [e, i] as const).filter((x): x is readonly [MenuItem, number] => x[0] !== "divider" && !x[0].disabled);

  // The trigger is found by id rather than by ref, so a custom trigger only has to
  // spread the props it is given.
  const getBtn = () => document.getElementById(`${id}-trigger`);

  function close(refocus = true) {
    setOpen(false);
    if (refocus) getBtn()?.focus();
  }
  const focusAt = (n: number) => {
    const target = actions[(n + actions.length) % actions.length];
    if (target) refs.current[target[1]]?.focus();
  };

  // Focus the first action as the list opens.
  useEffect(() => {
    if (open) refs.current[actions[0]?.[1] ?? -1]?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // A press anywhere outside closes it, without stealing focus from where it went.
  useEffect(() => {
    if (!open) return;
    const away = (e: PointerEvent) => {
      if (!wrap.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", away);
    return () => document.removeEventListener("pointerdown", away);
  }, [open]);

  function onTriggerKey(e: KeyboardEvent) {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      setOpen(true);
    }
  }

  function onListKey(e: KeyboardEvent) {
    const cur = actions.findIndex(([, i]) => refs.current[i] === document.activeElement);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      focusAt(cur + 1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      focusAt(cur - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      focusAt(0);
    } else if (e.key === "End") {
      e.preventDefault();
      focusAt(actions.length - 1);
    } else if (e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation();
      close();
    }
    else if (e.key === "Tab") close(false);
    else if (e.key.length === 1 && /\S/.test(e.key)) {
      const k = e.key.toLowerCase();
      const next = [...actions.slice(cur + 1), ...actions.slice(0, cur + 1)].find(([m]) => m.label.toLowerCase().startsWith(k));
      if (next) refs.current[next[1]]?.focus();
    }
  }

  const triggerProps = {
    id: `${id}-trigger`,
    "aria-haspopup": "menu" as const,
    "aria-expanded": open,
    "aria-controls": open ? id : undefined,
    onClick: () => setOpen((o) => !o),
    onKeyDown: onTriggerKey,
  };

  return (
    <div ref={wrap} className={cn("relative inline-block", className)}>
      {trigger ? (
        trigger(triggerProps)
      ) : (
        <Button variant="ghost" size="sm" iconOnly {...triggerProps} aria-label={label}>
          <MoreVerticalIcon />
        </Button>
      )}
      {open ? (
        <div
          id={id}
          role="menu"
          aria-label={label}
          onKeyDown={onListKey}
          className={cn(
            "absolute top-[calc(100%+4px)] z-(--tt-z-dropdown) min-w-[180px] rounded-sm bg-surface-raised p-2 font-ui shadow-e2",
            align === "end" ? "right-0" : "left-0",
          )}
        >
          {items.map((it, i) =>
            it === "divider" ? (
              <hr key={`d${i}`} role="separator" className="mx-[6px] my-1 h-px border-0 bg-line" />
            ) : (
              <button
                key={it.label}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                type="button"
                role="menuitem"
                tabIndex={-1}
                disabled={it.disabled}
                onClick={() => {
                  setOpen(false);
                  getBtn()?.focus();
                  it.onSelect();
                }}
                className={cn(
                  "flex min-h-8 w-full items-center gap-3 rounded-xs px-[10px] py-[6px] text-left text-[13px] leading-5",
                  "hover:bg-fill-soft focus-visible:bg-fill-soft focus-visible:outline-none",
                  "disabled:cursor-not-allowed disabled:opacity-45",
                  it.danger ? "text-danger" : "text-ink",
                )}
              >
                {it.icon ? <span className="flex-none [&_svg]:h-4 [&_svg]:w-4">{it.icon}</span> : null}
                {it.label}
              </button>
            ),
          )}
        </div>
      ) : null}
    </div>
  );
}
