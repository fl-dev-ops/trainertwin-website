"use client";

import { useEffect, useRef } from "react";
import { LogoSymbol } from "@/components/Logo";
import { u } from "../primitives";
import { createTimeline, HIDDEN, LEARNER_BLUE, Pointer, SHOWN } from "./parts";

/**
 * "24/7 Chat - Doubt clearance" — the learner's own space with the Twin.
 * Figma: SHXsv4d0ROls7tuOqQBNLZ node 380:12044.
 *
 * This one shares no chrome with the call scenes — it is a chat app, full
 * bleed, with a conversation list down the left — so it builds its own stage
 * rather than going through SessionShell. It does share their palette: the
 * Figma frames draw this screen dark, but a single dark scene in a row of
 * light ones reads as a different product, so it is rendered light on the same
 * grounds (var(--tt-neutral-50) card, var(--tt-neutral-200) panel) the other three use. The avatar discs
 * stay dark because that is where the mark has to read.
 *
 * The loop: the learner hits the new-chat icon at the top of the sidebar, a
 * fresh thread opens, they type their doubt, and the Twin answers.
 *
 * NOTE ON FIDELITY: geometry here was measured off renders rather than read out
 * of the file — the Figma MCP had hit its plan's tool-call limit. Structure,
 * copy and colour are right; individual offsets may be a pixel or two off.
 */

const QUESTION =
  "Why do we compare the target with the middle element in Binary Search?";

const ANSWER = [
  "Great question! 👍",
  "We compare with the middle element to eliminate half of the",
  "remaining search space in each step.",
  "•  If target == mid → we found it!",
  "•  If target < mid → search left half",
  "•  If target > mid → search right half",
  "This divide-and-conquer approach makes Binary Search",
  "very efficient:  O(log n)",
  "Want a quick example?",
];

const HISTORY = [
  {
    title: "Time Complexity",
    note: "Big O for nested loops",
    time: "11:32 PM",
  },
  { title: "Arrays", note: "Prefix sum explanation", time: "10:15 PM" },
  { title: "Linked List", note: "Detect cycle in a list", time: "9:47 PM" },
];

/** The new-chat icon at the top right of the sidebar. */
const NEW_CHAT = { x: 144, y: 16 };

export function DoubtChatScene() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const { play, start, stop } = createTimeline(el);
    const uu = (n: number) => `calc(${n} * var(--l-u))`;
    const at = (x: number, y: number) => `translate(${uu(x)}, ${uu(y)})`;

    /* ------------------------- 1. the learner opens a new chat (0-13%) */
    play("[data-anim='pointer']", [
      { offset: 0, opacity: 0, transform: at(120, 150) },
      { offset: 0.015, opacity: 1, transform: at(120, 150) },
      {
        offset: 0.09,
        opacity: 1,
        transform: at(0, 0),
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      { offset: 0.14, opacity: 1, transform: at(0, 0) },
      { offset: 0.2, opacity: 1, transform: at(150, 300) },
      { offset: 0.235, opacity: 0, transform: at(150, 300) },
      { offset: 1, opacity: 0, transform: at(120, 150) },
    ]);

    play("[data-anim='new-chat']", [
      { offset: 0, background: "rgba(255,255,255,0)" },
      { offset: 0.1, background: "rgba(255,255,255,0)" },
      { offset: 0.115, background: "rgba(20,116,234,0.14)" },
      { offset: 0.17, background: "rgba(255,255,255,0)" },
      { offset: 1, background: "rgba(255,255,255,0)" },
    ]);

    // The fresh thread takes its place at the top of Today.
    play("[data-anim='thread']", [
      { offset: 0, opacity: 0, transform: "translateY(-6px)" },
      { offset: 0.115, opacity: 0, transform: "translateY(-6px)" },
      {
        offset: 0.165,
        opacity: 1,
        transform: "translateY(0)",
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      { offset: 0.96, opacity: 1, transform: "translateY(0)" },
      { offset: 0.99, opacity: 0, transform: "translateY(-6px)" },
      { offset: 1, opacity: 0, transform: "translateY(-6px)" },
    ]);

    /* ------------------------------ 2. they type their doubt (17-33%) */
    play("[data-anim='draft']", [
      { offset: 0, clipPath: HIDDEN, easing: "linear" },
      { offset: 0.175, clipPath: HIDDEN, easing: `steps(${QUESTION.length})` },
      { offset: 0.325, clipPath: SHOWN },
      { offset: 0.345, clipPath: SHOWN },
      { offset: 0.35, clipPath: HIDDEN },
      { offset: 1, clipPath: HIDDEN },
    ]);

    play("[data-anim='placeholder']", [
      { offset: 0, opacity: 1 },
      { offset: 0.172, opacity: 1 },
      { offset: 0.176, opacity: 0 },
      { offset: 0.348, opacity: 0 },
      { offset: 0.352, opacity: 1 },
      { offset: 1, opacity: 1 },
    ]);

    /* --------------------------------- 3. the doubt is sent (35-38%) */
    play("[data-anim='sent']", [
      { offset: 0, opacity: 0, transform: "translateY(10px)" },
      { offset: 0.35, opacity: 0, transform: "translateY(10px)" },
      {
        offset: 0.385,
        opacity: 1,
        transform: "translateY(0)",
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      { offset: 0.96, opacity: 1, transform: "translateY(0)" },
      { offset: 0.99, opacity: 0, transform: "translateY(0)" },
      { offset: 1, opacity: 0, transform: "translateY(10px)" },
    ]);

    /* ------------------------------- 4. the Twin answers (41-90%) */
    play("[data-anim='reply-head']", [
      { offset: 0, opacity: 0 },
      { offset: 0.41, opacity: 0 },
      { offset: 0.44, opacity: 1 },
      { offset: 0.96, opacity: 1 },
      { offset: 0.99, opacity: 0 },
      { offset: 1, opacity: 0 },
    ]);

    const FROM = 0.46;
    const TO = 0.9;
    const chars = ANSWER.reduce((sum, l) => sum + l.length, 0);
    ANSWER.forEach((text, i) => {
      const before = ANSWER.slice(0, i).reduce((s, l) => s + l.length, 0);
      const from = FROM + (before / chars) * (TO - FROM);
      const to = FROM + ((before + text.length) / chars) * (TO - FROM);
      play(
        "[data-anim='reply-line']",
        [
          { offset: 0, clipPath: HIDDEN, easing: "linear" },
          { offset: from, clipPath: HIDDEN, easing: `steps(${text.length})` },
          { offset: to, clipPath: SHOWN },
          { offset: 1, clipPath: SHOWN },
        ],
        i,
      );
    });

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
        {/* ------------------------------------------------------ sidebar */}
        <div
          className="absolute top-0 left-0 h-full border-r border-[var(--tt-neutral-200)] bg-[var(--tt-neutral-200)]"
          style={{ width: u(168) }}
        >
          <span
            className="absolute grid place-items-center bg-[var(--tt-neutral-900)]"
            style={{
              left: u(14),
              top: u(12),
              width: u(26),
              height: u(26),
              borderRadius: u(8),
            }}
          >
            <span
              className="block text-white"
              style={{ width: u(13), height: u(13) }}
            >
              <LogoSymbol size={13} className="h-full w-full" />
            </span>
          </span>
          <span
            className="font-ui absolute font-semibold text-[var(--tt-neutral-800)]"
            style={{ left: u(48), top: u(14), fontSize: u(11) }}
          >
            Trainer&rsquo;s Twin
          </span>
          <span
            className="font-ui absolute flex items-center text-[var(--tt-neutral-500)]"
            style={{ left: u(48), top: u(28), fontSize: u(8), gap: u(4) }}
          >
            <span
              className="rounded-full bg-[#22c55e]"
              style={{ width: u(5), height: u(5) }}
            />
            Always online
          </span>

          {/* the new-chat control */}
          <span
            data-anim="new-chat"
            className="absolute grid place-items-center"
            style={{
              left: u(NEW_CHAT.x),
              top: u(NEW_CHAT.y),
              width: u(18),
              height: u(18),
              borderRadius: u(5),
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              style={{ width: u(12), height: u(12) }}
            >
              <path
                d="M4 20h4l10-10a2.8 2.8 0 0 0-4-4L4 16v4Z"
                stroke="var(--tt-neutral-500)"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <span
            className="font-ui absolute text-[var(--tt-neutral-400)]"
            style={{ left: u(14), top: u(56), fontSize: u(8) }}
          >
            Today
          </span>
          <div
            data-anim="thread"
            className="absolute border border-[var(--tt-neutral-200)] bg-white"
            style={{
              left: u(10),
              top: u(70),
              width: u(148),
              height: u(36),
              borderRadius: u(8),
              boxShadow: `0 ${u(1)} ${u(3)} rgba(23,35,60,0.06)`,
            }}
          >
            <span
              className="font-ui absolute font-semibold text-[var(--tt-neutral-800)]"
              style={{ left: u(10), top: u(7), fontSize: u(9.5) }}
            >
              Binary Search
            </span>
            <span
              className="font-ui absolute text-[var(--tt-neutral-500)]"
              style={{ left: u(10), top: u(21), fontSize: u(8) }}
            >
              Why do we compare with mid?
            </span>
            <span
              className="font-ui absolute text-[var(--tt-neutral-500)]"
              style={{ right: u(16), top: u(7), fontSize: u(7.5) }}
            >
              3:07 AM
            </span>
            <span
              className="absolute rounded-full bg-[#1474ea]"
              style={{ right: u(8), top: u(10), width: u(5), height: u(5) }}
            />
          </div>

          <span
            className="font-ui absolute text-[var(--tt-neutral-400)]"
            style={{ left: u(14), top: u(116), fontSize: u(8) }}
          >
            Yesterday
          </span>
          {HISTORY.map((item, i) => (
            <div
              key={item.title}
              className="absolute"
              style={{
                left: u(10),
                top: u(130 + i * 40),
                width: u(148),
                height: u(36),
                borderRadius: u(8),
              }}
            >
              <span
                className="font-ui absolute font-semibold text-[var(--tt-neutral-800)]"
                style={{ left: u(10), top: u(4), fontSize: u(9.5) }}
              >
                {item.title}
              </span>
              <span
                className="font-ui absolute text-[var(--tt-neutral-500)]"
                style={{ left: u(10), top: u(18), fontSize: u(8) }}
              >
                {item.note}
              </span>
              <span
                className="font-ui absolute text-[var(--tt-neutral-500)]"
                style={{ right: u(10), top: u(4), fontSize: u(7.5) }}
              >
                {item.time}
              </span>
            </div>
          ))}

          <div
            className="absolute bg-[var(--tt-blue-100)]"
            style={{
              left: u(10),
              top: u(376),
              width: u(148),
              height: u(52),
              borderRadius: u(10),
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="absolute"
              style={{ left: u(10), top: u(10), width: u(14), height: u(14) }}
            >
              <path
                d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z"
                stroke="#4a5bd0"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
            </svg>
            <span
              className="font-ui absolute font-semibold text-[var(--tt-neutral-800)]"
              style={{ left: u(30), top: u(10), fontSize: u(8.5) }}
            >
              We&rsquo;re here while you learn
            </span>
            <span
              className="font-ui absolute text-[var(--tt-neutral-500)]"
              style={{
                left: u(30),
                top: u(24),
                width: u(108),
                fontSize: u(7.5),
                lineHeight: u(10),
              }}
            >
              Day or night, your AI Twin has your back.
            </span>
          </div>
        </div>

        {/* --------------------------------------------------- chat header */}
        <div
          className="absolute border-b border-[var(--tt-neutral-200)]"
          style={{ left: u(168), top: 0, right: 0, height: u(46) }}
        >
          <span
            className="absolute grid place-items-center bg-[var(--tt-neutral-900)]"
            style={{
              left: u(16),
              top: u(12),
              width: u(22),
              height: u(22),
              borderRadius: u(7),
            }}
          >
            <span
              className="block text-white"
              style={{ width: u(11), height: u(11) }}
            >
              <LogoSymbol size={11} className="h-full w-full" />
            </span>
          </span>
          <span
            className="font-ui absolute flex items-center font-semibold text-[var(--tt-neutral-800)]"
            style={{ left: u(46), top: u(11), fontSize: u(11), gap: u(5) }}
          >
            Twin
            <span
              className="font-ui font-semibold text-[#1474ea]"
              style={{ fontSize: u(7.5) }}
            >
              AI
            </span>
          </span>
          <span
            className="font-ui absolute text-[var(--tt-neutral-500)]"
            style={{ left: u(46), top: u(26), fontSize: u(8) }}
          >
            Your AI Twin is online
          </span>
          <span
            className="font-ui absolute flex items-center text-[var(--tt-neutral-500)]"
            style={{ right: u(16), top: u(18), fontSize: u(8), gap: u(4) }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              style={{ width: u(10), height: u(10) }}
            >
              <path
                d="M12 3 5 6v6c0 4 3 7.4 7 9 4-1.6 7-5 7-9V6l-7-3Z"
                stroke="var(--tt-neutral-500)"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
            </svg>
            Private &amp; secure
          </span>
        </div>

        {/* -------------------------------------------------- the learner */}
        <div
          data-anim="sent"
          className="absolute flex flex-col items-end"
          style={{ left: u(300), top: u(62), width: u(275) }}
        >
          <span
            className="font-ui flex items-center text-[var(--tt-neutral-500)]"
            style={{ fontSize: u(8), gap: u(8) }}
          >
            You <span style={{ fontSize: u(7.5) }}>3:07 AM</span>
          </span>
          <span
            className="font-ui block bg-[var(--tt-blue-100)] text-[var(--tt-neutral-800)]"
            style={{
              marginTop: u(5),
              padding: `${u(8)} ${u(10)}`,
              borderRadius: u(9),
              fontSize: u(9),
              lineHeight: u(13),
            }}
          >
            {QUESTION}
          </span>
        </div>

        {/* ---------------------------------------------------- the Twin */}
        <div
          className="absolute"
          style={{ left: u(184), top: u(132), width: u(390) }}
        >
          <div
            data-anim="reply-head"
            className="flex items-center"
            style={{ gap: u(7) }}
          >
            <span
              className="grid shrink-0 place-items-center rounded-full bg-[var(--tt-neutral-900)]"
              style={{ width: u(18), height: u(18) }}
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
              style={{ fontSize: u(9) }}
            >
              Trainer&rsquo;s Twin
            </span>
            <span className="font-ui" style={{ fontSize: u(8) }}>
              ✨
            </span>
            <span
              className="font-ui text-[var(--tt-neutral-500)]"
              style={{ fontSize: u(7.5) }}
            >
              3:07 AM
            </span>
          </div>

          <div style={{ marginTop: u(8), marginLeft: u(25) }}>
            {ANSWER.map((text, i) => (
              <span
                key={i}
                data-anim="reply-line"
                className="font-ui block whitespace-pre text-[var(--tt-neutral-800)]"
                style={{
                  fontSize: u(9),
                  lineHeight: u(15),
                  marginTop: i === 3 || i === 6 ? u(5) : 0,
                }}
              >
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* --------------------------------------------------- composer */}
        <div
          className="absolute flex items-center border border-[var(--tt-neutral-200)] bg-[var(--tt-neutral-0)]"
          style={{
            left: u(184),
            top: u(396),
            width: u(390),
            height: u(32),
            borderRadius: u(16),
            paddingInline: u(14),
          }}
        >
          <span className="relative flex-1 overflow-hidden">
            <span
              data-anim="placeholder"
              className="font-ui block text-[var(--tt-neutral-400)]"
              style={{ fontSize: u(9) }}
            >
              Ask your doubt...
            </span>
            <span
              data-anim="draft"
              className="font-ui absolute top-0 left-0 block whitespace-pre text-[var(--tt-neutral-800)]"
              style={{ fontSize: u(9) }}
            >
              {QUESTION}
            </span>
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="shrink-0"
            style={{ width: u(13), height: u(13) }}
          >
            <path
              d="M20 11.5 12.2 19a4.5 4.5 0 0 1-6.4-6.4l8-7.9a3 3 0 1 1 4.3 4.3l-8 7.9a1.5 1.5 0 0 1-2.2-2.2l7.4-7.3"
              stroke="var(--tt-neutral-400)"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* the learner's cursor, resting on the new-chat icon */}
        <div
          data-anim="pointer"
          className="absolute opacity-0"
          style={{ left: u(NEW_CHAT.x + 4), top: u(NEW_CHAT.y + 4) }}
        >
          <Pointer label="Learner" colour={LEARNER_BLUE} width={62} />
        </div>
      </div>
    </div>
  );
}
