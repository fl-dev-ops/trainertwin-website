"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";
import { cn } from "./cn";
import { Avatar } from "./Avatar";
import { LearnerStack, type Learner } from "./LearnerStack";
import { MoreVerticalIcon } from "./UiIcons";
import "./AgentCard.css";

/**
 * One shell, two cases (D117): the Twin agent card (a use case the twin handles)
 * and the roleplay card (a scenario a learner practises). They differ only in
 * the face inside the quote bubble and in the client eyebrow.
 *
 *   twin      40px looping muted video of the twin listening, bubble vertically
 *             centred in the picture, no eyebrow.
 *   roleplay  24px client image (initials when none) + the client's name, with
 *             the client's name also as an eyebrow above the bubble.
 *
 * The whole card opens the item. That is done with a stretched link on the
 * title, not by making the card itself a button, so the ⋮ menu button inside it
 * is a real, separate control and there are no nested hit areas.
 */
export type AgentCardKind = "twin" | "roleplay";

/** A card takes `index % 10` from its place in the list. It never picks its own. */
const ART = [
  "bg-art-0",
  "bg-art-1",
  "bg-art-2",
  "bg-art-3",
  "bg-art-4",
  "bg-art-5",
  "bg-art-6",
  "bg-art-7",
  "bg-art-8",
  "bg-art-9",
] as const;

export type AgentCardLearner = Learner;

export interface AgentCardProps {
  kind: AgentCardKind;
  title: string;
  description: string;
  /** What the client (or the learner, for a twin) says. Shown in the bubble. */
  quote: string;
  /** Position in the list; picks the gradient. */
  index?: number;
  /** Roleplay only: the client's name and image. */
  client?: { name: string; src?: string };
  /** Twin only: the looping video face. */
  faceVideoSrc?: string;
  learners?: readonly AgentCardLearner[];
  /** How many learners to draw before collapsing into "+N". */
  maxLearners?: number;
  /** Where the card goes. Renders the title as a link. */
  href?: string;
  /** Or run something instead. Renders the title as a button. */
  onOpen?: () => void;
  /** Called by the ⋮ button. The menu itself is the caller's. */
  onMore?: () => void;
  /** Force a state for documentation. */
  forceState?: "hover" | "focus";
  /** Slot for an open menu, positioned over the footer. */
  menu?: ReactNode;
  className?: string;
}

const STRETCH =
  "after:absolute after:inset-0 after:z-[1] after:content-[''] focus-visible:outline-none";

export function AgentCard({
  kind,
  title,
  description,
  quote,
  index = 0,
  client,
  faceVideoSrc,
  learners = [],
  maxLearners = 4,
  href,
  onOpen,
  onMore,
  forceState,
  menu,
  className,
}: AgentCardProps) {
  const bubble = useRef<HTMLSpanElement>(null);
  const art = ART[((index % 10) + 10) % 10];

  // Mouse and pen only. A finger dragging across a card is scrolling, not aiming.
  function track(e: PointerEvent<HTMLElement>) {
    if (e.pointerType !== "mouse" && e.pointerType !== "pen") return;
    const el = bubble.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const clamp = (n: number) => Math.max(-1, Math.min(1, n));
    const nx = clamp(((e.clientX - r.left) / r.width - 0.5) * 2);
    const ny = clamp(((e.clientY - r.top) / r.height - 0.5) * 2);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const k = reduced ? 0.3 : 1;
    const deg = parseFloat(getComputedStyle(el).getPropertyValue("--tt-tilt-max")) || 9;
    el.classList.add("is-tilting");
    el.style.setProperty("--rx", (-ny * deg * k).toFixed(2));
    el.style.setProperty("--ry", (nx * deg * k).toFixed(2));
    el.style.setProperty("--tx", (nx * 8).toFixed(2));
    el.style.setProperty("--gx", `${(50 + nx * 46).toFixed(1)}%`);
    el.style.setProperty("--gy", `${(50 + ny * 46).toFixed(1)}%`);
  }
  function release() {
    const el = bubble.current;
    if (!el) return;
    el.classList.remove("is-tilting");
    for (const n of ["--rx", "--ry", "--tx", "--gx", "--gy"]) el.style.removeProperty(n);
  }

  const titleClass = cn(
    "relative text-left font-ui text-[15px] leading-[22px] font-title tracking-[-0.015em] text-ink",
    STRETCH,
  );

  return (
    <article
      className={cn(
        "group relative flex min-h-(--tt-size-card-h) w-(--tt-size-card-w) max-w-full flex-col",
        "rounded-lg border border-line-card bg-surface text-left shadow-card",
        "transition-shadow duration-(--tt-duration-quick) ease-standard",
        "hover:shadow-e2 has-[.tt-open:focus-visible]:outline-2 has-[.tt-open:focus-visible]:outline-offset-2 has-[.tt-open:focus-visible]:outline-primary",
        forceState === "hover" && "shadow-e2",
        forceState === "focus" && "outline-2 outline-offset-2 outline-primary",
        className,
      )}
    >
      <div
        className={cn(
          "relative flex min-h-(--tt-size-card-art) overflow-hidden rounded-t-lg",
          art,
          kind === "twin" && "items-center",
        )}
        onPointerMove={track}
        onPointerLeave={release}
        aria-hidden="true"
      >
        <div
          className={cn(
            "relative z-0 flex min-w-0 flex-1 flex-col gap-2 px-4",
            kind === "twin" ? "py-4" : "pt-4 pb-9",
          )}
        >
          {kind === "roleplay" && client ? (
            <span className="font-ui text-[12px] leading-4 font-medium tracking-[0.06em] text-on-art uppercase">
              {client.name}
            </span>
          ) : null}
          <span
            ref={bubble}
            className="tt-bubble flex items-start gap-2 rounded-md bg-surface p-3 font-ui text-[13px] leading-[18px] text-ink-tertiary"
          >
            {kind === "twin" ? (
              faceVideoSrc ? (
                <video
                  className="tt-bubble-face h-10 w-10 flex-none rounded-full bg-fill-soft object-cover"
                  style={{ objectPosition: "center 22%" }}
                  src={faceVideoSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                />
              ) : null
            ) : client ? (
              <Avatar
                className="tt-bubble-face"
                src={client.src}
                alt={client.name}
                size="xs"
              />
            ) : null}
            <span className="tt-bubble-text flex min-w-0 flex-col">
              {kind === "roleplay" && client ? (
                <span className="font-title text-ink">{client.name}</span>
              ) : null}
              <span>&ldquo;{quote}&rdquo;</span>
            </span>
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2 px-4 pt-[14px]">
        {href ? (
          <a href={href} className={cn(titleClass, "tt-open")}>
            {title}
          </a>
        ) : (
          <button type="button" onClick={onOpen} className={cn(titleClass, "tt-open")}>
            {title}
          </button>
        )}
        <p className="font-ui text-[13px] leading-5 text-ink-tertiary">{description}</p>
      </div>

      <div className="mt-auto flex items-center justify-between gap-2 p-4">
        <LearnerStack learners={learners} max={maxLearners} />
        <button
          type="button"
          aria-label={`Actions for ${title}`}
          aria-haspopup="menu"
          onClick={onMore}
          className="relative z-[2] grid h-8 w-8 place-items-center rounded-full text-ink-secondary hover:bg-fill-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <MoreVerticalIcon />
        </button>
      </div>
      {menu}
    </article>
  );
}
