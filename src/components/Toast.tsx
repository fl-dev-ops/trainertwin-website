"use client";

import { createPortal } from "react-dom";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { cn } from "./cn";
import { XIcon } from "./UiIcons";
import "./Toast.css";

/**
 * Toast (§8, Alerts vs Toasts), to the V3 prototype (decided 16 Nov 2026: "prototype is final").
 * A card TINTED by its kind (`*-subtle`), radius 16, `--tt-shadow-toast`, bottom-right, 380 wide
 * (100vw - 32 on a phone). A 36px disc in the kind's colour with a white glyph, a 14/20 title,
 * a 13/18 message, a 28px close button and a 3px timer bar along the bottom that drains over the
 * toast's life. One toast at a time: a new one replaces the one on screen. It CONFIRMS something
 * that already happened; an error that needs a decision goes in an alert instead.
 *
 * Auto-dismisses at 4.5s, 6.5s for error and warning. `role="status"`, or `role="alert"` for
 * error and warning. The timer (and the bar) pause while the pointer is over the toast or focus
 * is inside it (WCAG 2.2.1); that is the one thing added to the prototype.
 *
 * Words are NOT baked in: titles and labels are props with neutral defaults. For the port, mount
 * `<ToastProvider inferKind titles={PROTOTYPE_TOAST_TITLES}>` and the prototype's ninety plain
 * `toast("…")` calls work unchanged (the kind is read from the message); or pass `{ type, title }`.
 *
 * Why the viewport is a `popover`: a toast must show above an open modal dialog, but a native
 * `<dialog>` from `showModal()` lives in the browser's top layer and ignores z-index. A `popover`
 * lives there too and is re-shown on every toast so it lands on top. A top-layer popover OUTSIDE
 * an open modal is still inert (visible, but cannot be hovered or dismissed), so while a dialog is
 * open the viewport is portalled INTO the top-most one and moves back when it closes.
 */
export type ToastKind = "success" | "info" | "warning" | "error";

export interface ToastOptions {
  type?: ToastKind;
  /** Defaults per kind: "All set", "Good to know", "Heads up", "Something went wrong". */
  title?: string;
  /** Milliseconds. Defaults to 4500, or 6500 for error and warning. */
  duration?: number;
}

interface ToastItem {
  id: number;
  msg: string;
  type: ToastKind;
  title: string;
  duration: number;
}

interface ToastApi {
  toast: (msg: string, opts?: ToastOptions) => number;
  dismiss: (id: number) => void;
}

const Ctx = createContext<ToastApi | null>(null);

export function useToast(): ToastApi {
  const v = useContext(Ctx);
  if (!v) throw new Error("useToast must be used inside <ToastProvider>");
  return v;
}

/** Neutral defaults. The V3 prototype's friendlier titles are exported as `PROTOTYPE_TOAST_TITLES`. */
const DEFAULT_TITLES: Record<ToastKind, string> = {
  success: "Success",
  info: "Information",
  warning: "Warning",
  error: "Error",
};

/** The V3 prototype's titles, for the port: pass as `<ToastProvider titles={PROTOTYPE_TOAST_TITLES}>`. */
export const PROTOTYPE_TOAST_TITLES: Record<ToastKind, string> = {
  success: "All set",
  info: "Good to know",
  warning: "Heads up",
  error: "Something went wrong",
};

/** Tint and disc colour per kind. */
const TONE: Record<ToastKind, { box: string; disc: string }> = {
  success: { box: "bg-success-subtle", disc: "bg-success" },
  info: { box: "bg-info-subtle", disc: "bg-info" },
  warning: { box: "bg-caution-subtle", disc: "bg-caution" },
  error: { box: "bg-danger-subtle", disc: "bg-danger" },
};

const GLYPH: Record<ToastKind, ReactNode> = {
  success: <path d="M5 12l5 5l10-10" />,
  info: (
    <>
      <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0-1 3a2 2 0 0 1-4 0a3.5 3.5 0 0 0-1-3" />
      <path d="M9.7 17l4.6 0" />
    </>
  ),
  warning: (
    <>
      <path d="M12 7v6" />
      <path d="M12 17v.01" />
    </>
  ),
  error: (
    <>
      <path d="M6 6l12 12" />
      <path d="M18 6l-12 12" />
    </>
  ),
};

/**
 * Read the kind from the message, as the V3 prototype does, so a plain `toast("Saved")` needs
 * no options. Errors first ("couldn't", "failed"), then nudges ("Pick a…", "at least"), then
 * progress ("…"), then confirmations ("saved", "sent"); anything else is info.
 */
export function inferToastKind(msg: string): ToastKind {
  const t = String(msg || "");
  if (/(couldn’t|can’t|cannot|failed|error|unable|went wrong|didn’t work)/i.test(t)) return "error";
  if (/(at least|only have|first\.?$|^tell me|^name the|^add a|^pick |^choose |^enter |keep at least|not enough|too (low|short|long))/i.test(t)) return "warning";
  if (/…$|\.\.\.$/.test(t) || /^(plan the scene|opening|looking|we’ll look)/i.test(t)) return "info";
  if (/(thanks|created|saved|updated|assigned|unlocked|copied|sent|noted|done|published|removed|added|finished|ready|calibration saved|learner link)/i.test(t)) return "success";
  return "info";
}

let nextId = 1;

export interface ToastProviderProps {
  children: ReactNode;
  /** How many show at once. Default 1, as in the prototype. */
  max?: number;
  /** Per-kind titles. Defaults are neutral ("Success", "Error"); see `PROTOTYPE_TOAST_TITLES`. */
  titles?: Partial<Record<ToastKind, string>>;
  /**
   * Pick the kind from the message when `toast()` is given no `type`. Off by default: a message
   * decides its own kind in the V3 prototype, which is product behaviour, not a component default.
   * Pass `true` for `inferToastKind`, or your own function.
   */
  inferKind?: boolean | ((msg: string) => ToastKind);
  /** Accessible names, for translation. */
  labels?: { dismiss?: string; region?: string };
}

export function ToastProvider({ children, max = 1, titles, inferKind = false, labels }: ToastProviderProps) {
  const [items, setItems] = useState<ToastItem[]>([]);
  const viewport = useRef<HTMLDivElement>(null);
  const [host, setHost] = useState<Element | null>(null);

  // Follow the top-most open dialog (see the note above).
  useEffect(() => {
    const find = () => {
      const open = document.querySelectorAll("dialog[open]");
      setHost(open.length ? open[open.length - 1] : null);
    };
    find();
    const mo = new MutationObserver(find);
    mo.observe(document.body, { attributes: true, attributeFilter: ["open"], subtree: true });
    return () => mo.disconnect();
  }, []);

  const dismiss = useCallback((id: number) => setItems((l) => l.filter((t) => t.id !== id)), []);
  const toast = useCallback(
    (msg: string, opts: ToastOptions = {}) => {
      const infer = typeof inferKind === "function" ? inferKind : inferKind ? inferToastKind : null;
      const type = opts.type ?? (infer ? infer(msg) : "info");
      const id = nextId++;
      const title = opts.title ?? titles?.[type] ?? DEFAULT_TITLES[type];
      const duration = opts.duration ?? (type === "error" || type === "warning" ? 6500 : 4500);
      setItems((l) => [...l, { id, msg, type, title, duration }].slice(-max));
      return id;
    },
    [max, titles, inferKind],
  );
  const api = useMemo(() => ({ toast, dismiss }), [toast, dismiss]);

  // Re-show on every change so the popover is the last thing opened and sits on top.
  useLayoutEffect(() => {
    const el = viewport.current;
    if (!el || typeof el.showPopover !== "function") return;
    try {
      if (el.matches(":popover-open")) el.hidePopover();
      if (items.length) el.showPopover();
    } catch {
      /* popover unsupported or detached: the fixed fallback below still shows it */
    }
  }, [items, host]);

  const view = (
    <div
      ref={viewport}
      popover="manual"
      aria-label={labels?.region ?? "Notifications"}
      className={cn(
        "tt-toast-viewport flex w-[min(380px,calc(100vw-32px))] flex-col gap-2",
        // Fallback when popover is unsupported: plain fixed at the toast layer.
        "fixed right-5 bottom-5 z-(--tt-z-toast) m-0 border-0 bg-transparent p-0",
        !items.length && "pointer-events-none",
      )}
    >
      {items.map((t) => (
        <ToastCard key={t.id} item={t} dismissLabel={labels?.dismiss ?? "Dismiss"} onClose={() => dismiss(t.id)} />
      ))}
    </div>
  );

  return (
    <Ctx.Provider value={api}>
      {children}
      {host ? createPortal(view, host) : view}
    </Ctx.Provider>
  );
}

function ToastCard({ item, onClose, dismissLabel }: { item: ToastItem; onClose: () => void; dismissLabel: string }) {
  const [paused, setPaused] = useState(false);
  const left = useRef(item.duration);
  const started = useRef(0);

  useEffect(() => {
    if (paused) return;
    started.current = Date.now();
    const timer = setTimeout(onClose, left.current);
    return () => {
      clearTimeout(timer);
      left.current = Math.max(0, left.current - (Date.now() - started.current));
    };
  }, [paused, onClose]);

  const urgent = item.type === "error" || item.type === "warning";
  return (
    <div
      role={urgent ? "alert" : "status"}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      style={{ "--ms": `${item.duration}ms` } as React.CSSProperties}
      className={cn(
        "tt-toast tt-toast-in pointer-events-auto relative flex items-center gap-3 overflow-hidden rounded-lg p-3 font-ui text-ink shadow-toast",
        TONE[item.type].box,
      )}
    >
      <span aria-hidden="true" className={cn("grid h-9 w-9 flex-none place-items-center rounded-full text-white", TONE[item.type].disc)}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          {GLYPH[item.type]}
        </svg>
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[14px] leading-5 font-title">{item.title}</p>
        <p className="text-[13px] leading-[18px] text-ink-secondary">{item.msg}</p>
      </div>
      <button
        type="button"
        aria-label={dismissLabel}
        onClick={onClose}
        className="grid h-7 w-7 flex-none place-items-center rounded-sm text-ink-secondary hover:bg-white/70 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <XIcon size={14} />
      </button>
      <span aria-hidden="true" key={item.id} className={cn("tt-toast-timer absolute bottom-0 left-0 h-[3px] w-full opacity-55", TONE[item.type].disc)} />
    </div>
  );
}
