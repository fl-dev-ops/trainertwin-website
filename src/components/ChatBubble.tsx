import type { ReactNode } from "react";
import { cn } from "./cn";

/**
 * Chat bubbles, copied from the V3 prototype on request (16 Nov 2026). Three surfaces draw a
 * message three ways, so there are three variants; the Session Shell proper (one transcript across
 * voice, text and video) is still to be specced.
 *
 *   `message`     (`.tee-msg`)  a compact assistant chat: max 85% wide, padding 8 / 12, radius 12, 14/20.
 *                 The twin is `--tt-fill-soft` on the left, "you" is the dark CTA on the right.
 *   `transcript`  (`.rp-chat-line`) a line in a recorded session: a surface card with elevation-1,
 *                 a bold name above the text, up to 78% wide, in a `ChatThread` well.
 *   `call`        (`.talk-bubble`) the live call: radius 20, padding 10 / 16, twin `--tt-fill-soft`
 *                 on the left, the trainer on the surface with a 1px inset ring on the right, and
 *                 `ask` (caution-tinted) for a question the twin is raising.
 */
export type ChatSide = "twin" | "you";

export interface ChatBubbleProps {
  variant?: "message" | "transcript" | "call";
  side?: ChatSide;
  /** `call` only: the twin is asking the trainer something. */
  ask?: boolean;
  /** `transcript` only: who is speaking. */
  name?: string;
  children: ReactNode;
  className?: string;
}

export function ChatBubble({ variant = "message", side = "twin", ask = false, name, children, className }: ChatBubbleProps) {
  const left = side === "twin";
  if (variant === "transcript") {
    return (
      <div className={cn("max-w-[78%] rounded-md bg-surface p-3 font-ui shadow-e1 dark:bg-surface-raised", left ? "self-start" : "self-end", className)}>
        {name ? <span className="mb-0.5 block text-[13px] leading-[18px] font-label text-ink">{name}</span> : null}
        <p className="m-0 text-[14px] leading-5 text-ink">{children}</p>
      </div>
    );
  }
  if (variant === "call") {
    return (
      <div className={cn("flex max-w-full flex-none flex-col font-ui", left ? "items-start" : "items-end", className)}>
        <div
          className={cn(
            "box-border min-h-10 max-w-[88%] rounded-[20px] py-[10px] text-[14px] leading-5 font-normal",
            left ? (ask ? "bg-caution-subtle px-4 text-caution" : "bg-fill-soft px-4 text-ink") : "bg-surface px-5 text-ink shadow-[inset_0_0_0_1px_var(--tt-border)]",
          )}
        >
          {children}
        </div>
      </div>
    );
  }
  return (
    <p
      className={cn(
        "m-0 max-w-[85%] rounded-md px-3 py-2 font-ui text-[14px] leading-5",
        left ? "self-start bg-fill-soft text-ink" : "self-end bg-strong text-on-strong",
        className,
      )}
    >
      {children}
    </p>
  );
}

/** The well a column of bubbles sits in: the transcript's grey, radius 12, padding 16, gap 12. */
export function ChatThread({ children, well = false, className }: { children: ReactNode; /** the `.rp-chat` grey well */ well?: boolean; className?: string }) {
  return <div className={cn("flex flex-col gap-3", well && "rounded-md bg-fill-soft p-4 dark:bg-surface-sunken", className)}>{children}</div>;
}
