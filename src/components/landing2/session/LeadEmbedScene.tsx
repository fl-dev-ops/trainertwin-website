"use client";

import { useEffect, useRef } from "react";
import { LogoSymbol } from "@/components/Logo";
import { u } from "../primitives";
import { createTimeline, playTyping } from "./parts";

/**
 * "Embed your twin in website" — the Leads conversion scenario.
 * Figma: SHXsv4d0ROls7tuOqQBNLZ node 393:12546, four frames.
 *
 *   1  the course page, with an ask bar across the foot of it
 *   2  the chat open over the page, question answered
 *   3  the page again, chat collapsed to its launcher
 *   4  the same exchange in a docked side panel
 *
 * Frames 2 and 4 are two placements of one conversation, so the loop plays the
 * centred one — it is the larger of the two and the exchange is the point — and
 * lands on frame 3's launcher.
 *
 * The exchange is the same one the co-trainer scene runs. That is deliberate:
 * it is the same Twin answering the same question, once inside a class and once
 * on a public course page.
 */

const SITE = "CareerwithVasanth";
const PROMPT = "Ask your doubts about the course!";
const PLACEHOLDER = "Hey, I’m Vasant’s Twin! How can I help you";
const ASK = "How do we handle high availability in this system?";

const ANSWER = [
  "Great question, Arjun!",
  "We can achieve high availability using these strategies :",
  "•  Multiple instances across availability zones",
  "•  Load balancer to distribute traffic",
  "•  Database replication (Primary + Read Replicas)",
  "•  Health checks and auto failover",
  "This ensures our system remains available even if a component fails.",
];

/** The wireframed page behind the chat: copy blocks and image placeholders. */
const BARS = [
  { x: 34, y: 74, w: 168 },
  { x: 34, y: 88, w: 152 },
  { x: 34, y: 102, w: 104 },
  { x: 34, y: 140, w: 168 },
  { x: 34, y: 154, w: 152 },
  { x: 34, y: 168, w: 104 },
];

export function LeadEmbedScene() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const { play, start, stop } = createTimeline(el);

    const appear = (selector: string, from: number, to: number, i?: number) =>
      play(
        selector,
        [
          { offset: 0, opacity: 0, transform: "translateY(7px)" },
          { offset: from, opacity: 0, transform: "translateY(7px)" },
          {
            offset: from + 0.022,
            opacity: 1,
            transform: "translateY(0)",
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          },
          { offset: to, opacity: 1, transform: "translateY(0)" },
          {
            offset: Math.min(1, to + 0.02),
            opacity: 0,
            transform: "translateY(0)",
          },
          { offset: 1, opacity: 0, transform: "translateY(7px)" },
        ],
        i,
      );

    /* --------------------------------- 1. the ask bar is offered (2-32%) */
    play("[data-anim='ask-bar']", [
      { offset: 0, opacity: 0, transform: "translateY(10px)" },
      { offset: 0.02, opacity: 0, transform: "translateY(10px)" },
      {
        offset: 0.06,
        opacity: 1,
        transform: "translateY(0)",
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      { offset: 0.33, opacity: 1, transform: "translateY(0)" },
      { offset: 0.36, opacity: 0, transform: "translateY(6px)" },
      { offset: 1, opacity: 0, transform: "translateY(10px)" },
    ]);

    /* ------------------------------ 2. a visitor types their doubt (14-32%) */
    playTyping(play, "[data-anim='ask-draft']", [ASK], 0.15, 0.29);
    play("[data-anim='ask-placeholder']", [
      { offset: 0, opacity: 1 },
      { offset: 0.148, opacity: 1 },
      { offset: 0.152, opacity: 0 },
      { offset: 0.33, opacity: 0 },
      { offset: 1, opacity: 1 },
    ]);
    play("[data-anim='btn-send']", [
      { offset: 0, transform: "scale(1)" },
      { offset: 0.3, transform: "scale(1)" },
      { offset: 0.315, transform: "scale(0.86)" },
      { offset: 0.335, transform: "scale(1)" },
      { offset: 1, transform: "scale(1)" },
    ]);

    /* --------------------------------- 3. the chat answers it (36-88%) */
    play("[data-anim='chat']", [
      { offset: 0, opacity: 0, transform: "translateY(16px) scale(0.97)" },
      { offset: 0.35, opacity: 0, transform: "translateY(16px) scale(0.97)" },
      {
        offset: 0.4,
        opacity: 1,
        transform: "translateY(0) scale(1)",
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      { offset: 0.9, opacity: 1, transform: "translateY(0) scale(1)" },
      { offset: 0.93, opacity: 0, transform: "translateY(10px) scale(0.98)" },
      { offset: 1, opacity: 0, transform: "translateY(16px) scale(0.97)" },
    ]);

    appear("[data-anim='msg-ask']", 0.42, 0.9);
    appear("[data-anim='reply-head']", 0.48, 0.9);
    playTyping(play, "[data-anim='reply-line']", ANSWER, 0.51, 0.84);
    appear("[data-anim='on-behalf']", 0.85, 0.9);

    /* ----------------------------- 4. it collapses to its launcher (92%) */
    play("[data-anim='launcher']", [
      { offset: 0, opacity: 0, transform: "scale(0.7)" },
      { offset: 0.925, opacity: 0, transform: "scale(0.7)" },
      {
        offset: 0.95,
        opacity: 1,
        transform: "scale(1)",
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      { offset: 0.985, opacity: 1, transform: "scale(1)" },
      { offset: 1, opacity: 0, transform: "scale(0.7)" },
    ]);

    start();
    return stop;
  }, []);

  return (
    <div className="l-fit w-full">
      <div
        ref={root}
        className="l-stage overflow-hidden bg-[var(--tt-neutral-50)]"
        style={{
          ["--l-design" as string]: "591",
          height: u(445),
          borderRadius: u(16),
        }}
      >
        {/* ------------------------------------------------ the course page */}
        <span
          className="font-ui absolute font-semibold text-[var(--tt-neutral-800)]"
          style={{ left: u(34), top: u(30), fontSize: u(13) }}
        >
          {SITE}
        </span>
        <div
          className="absolute flex"
          style={{ right: u(34), top: u(34), gap: u(12) }}
        >
          {[38, 34, 42].map((w, i) => (
            <span
              key={i}
              className="rounded-full bg-[var(--tt-blue-100)]"
              style={{ width: u(w), height: u(6) }}
            />
          ))}
        </div>

        {BARS.map((bar, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              left: u(bar.x),
              top: u(bar.y),
              width: u(bar.w),
              height: u(8),
              background:
                "linear-gradient(90deg,var(--tt-blue-50),var(--tt-blue-100))",
            }}
          />
        ))}

        <Placeholder left={244} top={64} width={230} height={132} />
        <Placeholder left={34} top={214} width={180} height={104} />
        {[
          { y: 222, w: 194 },
          { y: 238, w: 178 },
          { y: 254, w: 132 },
        ].map((bar, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              left: u(246),
              top: u(bar.y),
              width: u(bar.w),
              height: u(8),
              background:
                "linear-gradient(90deg,var(--tt-blue-50),var(--tt-blue-100))",
            }}
          />
        ))}

        {/* --------------------------------------------------- the ask bar */}
        <div
          data-anim="ask-bar"
          className="absolute flex flex-col items-center"
          style={{ left: u(96), right: u(96), bottom: u(34), gap: u(12) }}
        >
          <span
            className="font-ui font-semibold text-[var(--tt-neutral-800)]"
            style={{ fontSize: u(12) }}
          >
            {PROMPT}
          </span>
          <span
            className="relative flex w-full items-center bg-white"
            style={{
              height: u(38),
              paddingLeft: u(16),
              paddingRight: u(46),
              borderRadius: u(19),
              boxShadow: `0 ${u(4)} ${u(14)} rgba(23,35,60,0.08)`,
            }}
          >
            <span className="relative flex-1 overflow-hidden">
              <span
                data-anim="ask-placeholder"
                className="font-ui block whitespace-pre text-[var(--tt-neutral-600)]"
                style={{ fontSize: u(10) }}
              >
                {PLACEHOLDER}
              </span>
              <span
                data-anim="ask-draft"
                className="font-ui absolute top-0 left-0 block whitespace-pre text-[var(--tt-neutral-800)]"
                style={{ fontSize: u(10) }}
              >
                {ASK}
              </span>
            </span>
            <span
              data-anim="btn-send"
              className="absolute grid place-items-center rounded-full bg-[var(--l-accent)]"
              style={{ right: u(5), width: u(28), height: u(28) }}
            >
              <svg viewBox="0 0 24 24" fill="white" style={{ width: u(13) }}>
                <path d="M3 20.5 22 12 3 3.5l4 8.5z" />
              </svg>
            </span>
          </span>
        </div>

        {/* ------------------------------------------------------ the chat */}
        <div
          data-anim="chat"
          className="absolute overflow-hidden bg-white opacity-0"
          style={{
            left: u(74),
            top: u(96),
            width: u(444),
            height: u(292),
            borderRadius: u(12),
            boxShadow: `0 ${u(14)} ${u(40)} rgba(23,35,60,0.16)`,
          }}
        >
          <div
            className="absolute"
            style={{ left: u(18), top: u(16), right: u(18) }}
          >
            {/* the visitor */}
            <div data-anim="msg-ask">
              <div className="flex items-center" style={{ gap: u(7) }}>
                <span
                  className="grid shrink-0 place-items-center rounded-full"
                  style={{
                    width: u(17),
                    height: u(17),
                    background:
                      "linear-gradient(160deg,#5fcce8,var(--tt-blue-500))",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="white"
                    style={{ width: u(10) }}
                  >
                    <circle cx="12" cy="8.5" r="3.4" />
                    <path d="M5 20a7 7 0 0 1 14 0z" />
                  </svg>
                </span>
                <span
                  className="font-ui font-semibold text-[var(--tt-neutral-800)]"
                  style={{ fontSize: u(9.5) }}
                >
                  Arjun
                </span>
                <span
                  className="font-ui ml-auto text-[var(--tt-neutral-500)]"
                  style={{ fontSize: u(8.5) }}
                >
                  10:15 AM
                </span>
              </div>
              <span
                className="font-ui block bg-[var(--tt-neutral-100)] whitespace-pre text-[var(--tt-neutral-800)]"
                style={{
                  marginTop: u(6),
                  marginLeft: u(24),
                  padding: `${u(7)} ${u(10)}`,
                  borderRadius: u(7),
                  fontSize: u(9.5),
                }}
              >
                {ASK}
              </span>
            </div>

            {/* the Twin */}
            <div style={{ marginTop: u(14) }}>
              <div
                data-anim="reply-head"
                className="flex items-center"
                style={{ gap: u(7) }}
              >
                <span
                  className="grid shrink-0 place-items-center rounded-full bg-[var(--tt-neutral-900)]"
                  style={{ width: u(17), height: u(17) }}
                >
                  <span
                    className="block text-white"
                    style={{ width: u(9), height: u(9) }}
                  >
                    <LogoSymbol size={9} className="h-full w-full" />
                  </span>
                </span>
                <span
                  className="font-ui font-semibold text-[var(--tt-neutral-800)]"
                  style={{ fontSize: u(9.5) }}
                >
                  AI Twin (Co-Trainer)
                </span>
                <span
                  className="font-ui ml-auto text-[var(--tt-neutral-500)]"
                  style={{ fontSize: u(8.5) }}
                >
                  10:16 AM
                </span>
              </div>

              <div
                className="bg-[var(--tt-neutral-100)]"
                style={{
                  marginTop: u(6),
                  marginLeft: u(24),
                  padding: `${u(9)} ${u(11)}`,
                  borderRadius: u(7),
                }}
              >
                {ANSWER.map((line, i) => (
                  <span
                    key={i}
                    data-anim="reply-line"
                    className="font-ui block whitespace-pre text-[var(--tt-neutral-800)]"
                    style={{ fontSize: u(9.5), lineHeight: u(14) }}
                  >
                    {line}
                  </span>
                ))}
              </div>
              <span
                data-anim="on-behalf"
                className="font-ui block text-[var(--tt-neutral-500)]"
                style={{ marginTop: u(8), marginLeft: u(24), fontSize: u(8.5) }}
              >
                Sent on trainer’s behalf
              </span>
            </div>
          </div>

          <div
            className="absolute inset-x-0 bottom-0 flex items-center border-t border-[var(--tt-neutral-100)]"
            style={{ height: u(38), paddingInline: u(18) }}
          >
            <span
              className="font-ui flex-1 text-[var(--tt-neutral-400)]"
              style={{ fontSize: u(10) }}
            >
              Type your message
            </span>
            <span
              className="grid shrink-0 place-items-center rounded-full bg-[var(--l-accent)]"
              style={{ width: u(24), height: u(24) }}
            >
              <svg viewBox="0 0 24 24" fill="white" style={{ width: u(11) }}>
                <path d="M3 20.5 22 12 3 3.5l4 8.5z" />
              </svg>
            </span>
          </div>
        </div>

        {/* --------------------------------------------------- the launcher */}
        <span
          data-anim="launcher"
          className="absolute grid place-items-center rounded-full bg-[var(--l-accent)] opacity-0"
          style={{
            right: u(30),
            bottom: u(30),
            width: u(38),
            height: u(38),
            boxShadow: `0 ${u(6)} ${u(16)} rgba(236,48,19,0.35)`,
          }}
        >
          <span
            className="block text-white"
            style={{ width: u(18), height: u(18) }}
          >
            <LogoSymbol size={18} className="h-full w-full" />
          </span>
        </span>
      </div>
    </div>
  );
}

/** A crossed box, the way the frames wireframe an image. */
function Placeholder({
  left,
  top,
  width,
  height,
}: {
  left: number;
  top: number;
  width: number;
  height: number;
}) {
  return (
    <svg
      aria-hidden="true"
      className="absolute"
      viewBox={`0 0 ${width} ${height}`}
      style={{ left: u(left), top: u(top), width: u(width), height: u(height) }}
      fill="none"
    >
      <rect
        x="0.5"
        y="0.5"
        width={width - 1}
        height={height - 1}
        rx="6"
        stroke="var(--tt-neutral-200)"
      />
      <path
        d={`M0 0 L${width} ${height} M${width} 0 L0 ${height}`}
        stroke="var(--tt-neutral-200)"
      />
    </svg>
  );
}
