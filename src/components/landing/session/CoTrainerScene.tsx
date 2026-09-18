"use client";

import { useEffect, useRef } from "react";
import { LogoSymbol } from "@/components/Logo";
import { u } from "../primitives";
import {
  createTimeline,
  HIDDEN,
  LEARNER_BLUE,
  Pointer,
  SessionShell,
  SHOWN,
} from "./parts";

/**
 * "Co-trainer for on your zoom calls" — the Twin sitting in on a live class.
 * Figma: SHXsv4d0ROls7tuOqQBNLZ node 380:12045, frames 001-004.
 *
 *   001  the course is running: participant grid and a live transcript
 *   002  the learner opens the message panel and drafts a question
 *   003  the question is sent and appears in the thread
 *   004  the Twin answers, on the trainer's behalf
 *
 * The class fills the whole width here, so this scene opts out of the shell's
 * two participant cards and draws its own grid instead. The call bar and title
 * are the shell's, unchanged.
 *
 * NOTE ON FIDELITY: unlike the interview and whiteboard scenes, the geometry
 * below was measured off renders rather than read out of the file — the Figma
 * MCP had hit its plan's tool-call limit. Structure, copy and colour are right;
 * individual offsets may be a pixel or two off the source.
 */

const TRANSCRIPT = [
  {
    who: "Trainer",
    lines: [
      "Alright, let’s look at how we’d design this",
      "system for millions of users.",
    ],
  },
  {
    who: "Trainer",
    lines: [
      "We have the load balancer sitting in front of",
      "our application servers.",
    ],
  },
  { who: "Learner 1", lines: ["Should we use a cache here?"] },
  {
    who: "Trainer",
    lines: ["Good question. What kind of data would you cache?"],
  },
  {
    who: "Learner 2",
    lines: [
      "How do we make sure the system stays available if",
      "one server goes down?",
    ],
  },
];

const DRAFT = "How do we handle high availability in this system?";

const ANSWER = [
  "Great question, Arjun!",
  "We can achieve high availability",
  "using these strategies :",
  "•  Multiple instances across",
  "   availability zones",
  "•  Load balancer to distribute traffic",
  "•  Database replication (Primary +",
  "   Read Replicas)",
  "•  Health checks and auto failover",
  "This ensures our system remains",
  "available even if a component fails.",
];

/** Where the chat button sits in the shell's call bar, and where the panel opens. */
const CHAT_BUTTON = { x: 513, y: 416 };
/* Right-aligned with the transcript it opens over — 349 + 214 lands on the
   transcript's own right edge at 563, which is the frame's right margin. It
   rises from 80% of its width, the corner nearest the button that opened it. */
const PANEL = { left: 349, top: 56, width: 214, height: 292 };

export function CoTrainerScene() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const { play, start, stop } = createTimeline(el);
    const uu = (n: number) => `calc(${n} * var(--l-u))`;
    const at = (x: number, y: number) => `translate(${uu(x)}, ${uu(y)})`;

    /* ------------------------------- 1. the class runs (0-20%)
       Transcript lines land one after another so the panel reads as live
       rather than as a static block of copy. */
    TRANSCRIPT.forEach((_, i) => {
      const from = 0.02 + i * 0.038;
      play(
        "[data-anim='transcript-entry']",
        [
          { offset: 0, opacity: 0, transform: "translateY(6px)" },
          { offset: from, opacity: 0, transform: "translateY(6px)" },
          {
            offset: from + 0.022,
            opacity: 1,
            transform: "translateY(0)",
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          },
          { offset: 0.95, opacity: 1, transform: "translateY(0)" },
          { offset: 0.985, opacity: 0, transform: "translateY(0)" },
          { offset: 1, opacity: 0, transform: "translateY(6px)" },
        ],
        i,
      );
    });

    /* ------------------------- 2. the learner reaches for chat (20-27%) */
    play("[data-anim='learner-pointer']", [
      { offset: 0, opacity: 0, transform: at(-60, -120) },
      { offset: 0.2, opacity: 0, transform: at(-60, -120) },
      {
        offset: 0.255,
        opacity: 1,
        transform: at(0, 0),
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      { offset: 0.3, opacity: 1, transform: at(0, 0) },
      { offset: 0.36, opacity: 1, transform: at(-52, -66) },
      { offset: 0.46, opacity: 1, transform: at(-40, -40) },
      { offset: 0.5, opacity: 0, transform: at(-40, -40) },
      { offset: 1, opacity: 0, transform: at(-60, -120) },
    ]);

    // The button answers the click.
    play("[data-anim='chat-button']", [
      { offset: 0, boxShadow: "0 0 0 0 rgba(20,116,234,0)" },
      { offset: 0.27, boxShadow: "0 0 0 0 rgba(20,116,234,0)" },
      {
        offset: 0.295,
        boxShadow: `0 0 0 ${uu(3)} rgba(20,116,234,0.45)`,
        easing: "cubic-bezier(0.2, 0, 0, 1)",
      },
      { offset: 0.93, boxShadow: `0 0 0 ${uu(2)} rgba(20,116,234,0.35)` },
      { offset: 0.97, boxShadow: "0 0 0 0 rgba(20,116,234,0)" },
      { offset: 1, boxShadow: "0 0 0 0 rgba(20,116,234,0)" },
    ]);

    /* --------------------------------- 3. the panel opens (28-33%) */
    play("[data-anim='panel']", [
      {
        offset: 0,
        opacity: 0,
        transform: "translateY(14px) scale(0.96)",
        transformOrigin: "80% 100%",
      },
      { offset: 0.285, opacity: 0, transform: "translateY(14px) scale(0.96)" },
      {
        offset: 0.335,
        opacity: 1,
        transform: "translateY(0) scale(1)",
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      { offset: 0.94, opacity: 1, transform: "translateY(0) scale(1)" },
      { offset: 0.975, opacity: 0, transform: "translateY(10px) scale(0.97)" },
      { offset: 1, opacity: 0, transform: "translateY(14px) scale(0.96)" },
    ]);

    /* ------------------------- 4. the learner types the question (34-47%) */
    play("[data-anim='draft']", [
      { offset: 0, clipPath: HIDDEN, easing: "linear" },
      { offset: 0.35, clipPath: HIDDEN, easing: `steps(${DRAFT.length})` },
      { offset: 0.46, clipPath: SHOWN },
      { offset: 0.475, clipPath: SHOWN },
      { offset: 0.48, clipPath: HIDDEN },
      { offset: 1, clipPath: HIDDEN },
    ]);

    // The placeholder gives way to the draft, then comes back once it is sent.
    play("[data-anim='placeholder']", [
      { offset: 0, opacity: 1 },
      { offset: 0.348, opacity: 1 },
      { offset: 0.352, opacity: 0 },
      { offset: 0.478, opacity: 0 },
      { offset: 0.482, opacity: 1 },
      { offset: 1, opacity: 1 },
    ]);

    play("[data-anim='send']", [
      { offset: 0, transform: "scale(1)" },
      { offset: 0.465, transform: "scale(1)" },
      { offset: 0.475, transform: "scale(0.82)" },
      { offset: 0.49, transform: "scale(1)" },
      { offset: 1, transform: "scale(1)" },
    ]);

    /* -------------------------------- 5. the message lands (48-52%) */
    play("[data-anim='sent']", [
      { offset: 0, opacity: 0, transform: "translateY(8px)" },
      { offset: 0.48, opacity: 0, transform: "translateY(8px)" },
      {
        offset: 0.515,
        opacity: 1,
        transform: "translateY(0)",
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      { offset: 0.95, opacity: 1, transform: "translateY(0)" },
      { offset: 0.975, opacity: 0, transform: "translateY(0)" },
      { offset: 1, opacity: 0, transform: "translateY(8px)" },
    ]);

    /* ------------------------------ 6. the Twin answers (54-92%) */
    play("[data-anim='reply-head']", [
      { offset: 0, opacity: 0 },
      { offset: 0.55, opacity: 0 },
      { offset: 0.58, opacity: 1 },
      { offset: 0.95, opacity: 1 },
      { offset: 0.975, opacity: 0 },
      { offset: 1, opacity: 0 },
    ]);

    const REPLY_FROM = 0.6;
    const REPLY_TO = 0.88;
    const replyChars = ANSWER.reduce((sum, l) => sum + l.length, 0);
    ANSWER.forEach((text, i) => {
      const before = ANSWER.slice(0, i).reduce((s, l) => s + l.length, 0);
      const span = REPLY_TO - REPLY_FROM;
      const from = REPLY_FROM + (before / replyChars) * span;
      const to = REPLY_FROM + ((before + text.length) / replyChars) * span;
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

    play("[data-anim='on-behalf']", [
      { offset: 0, opacity: 0 },
      { offset: 0.89, opacity: 0 },
      { offset: 0.91, opacity: 1 },
      { offset: 0.95, opacity: 1 },
      { offset: 0.975, opacity: 0 },
      { offset: 1, opacity: 0 },
    ]);

    start();
    return stop;
  }, []);

  return (
    <SessionShell
      title="System design course"
      rootRef={root}
      participants={false}
    >
      {/* -------------------------------------------------- participant grid */}
      {/* Four rows on a 77 pitch: 69-tall tiles with 8 between them, which
          takes the grid from 52 to 352 — the same height as the transcript
          beside it, instead of stopping short of it. */}
      <div
        className="absolute"
        style={{ left: u(28), top: u(52), width: u(148) }}
      >
        <Tile x={0} y={0} tone="dark" label="You (Trainer)" avatar="person" />
        <Tile x={78} y={0} tone="dark" label="Trainer’s Twin" avatar="twin" />
        {[1, 2, 3, 4, 5, 6].map((n, i) => (
          <Tile
            key={n}
            x={(i % 2) * 78}
            y={77 + Math.floor(i / 2) * 77}
            tone="light"
            label={`Learner ${n}`}
            avatar="person"
          />
        ))}
      </div>

      {/* ------------------------------------------------- live transcript */}
      <div
        className="absolute overflow-hidden border border-[#cfe7f0] bg-[#e9f6fb]"
        style={{
          left: u(190),
          top: u(52),
          width: u(373),
          height: u(300),
          borderRadius: u(12),
        }}
      >
        <span
          className="font-ui absolute flex items-center bg-white font-medium text-[#4a5b63]"
          style={{
            left: u(8),
            top: u(6),
            height: u(16),
            paddingInline: u(8),
            borderRadius: u(8),
            fontSize: u(9),
          }}
        >
          Live Transcript
        </span>

        <div
          className="absolute"
          style={{ left: u(8), top: u(28), width: u(357) }}
        >
          {TRANSCRIPT.map((entry, i) => (
            <div
              key={i}
              data-anim="transcript-entry"
              className="border-l-2 border-[#bcdfeb] bg-[#dcf0f7]"
              style={{
                marginBottom: u(6),
                padding: `${u(6)} ${u(9)}`,
                borderRadius: u(6),
              }}
            >
              <span
                className="font-ui block text-[#5d7a86]"
                style={{ fontSize: u(9), lineHeight: u(13) }}
              >
                {entry.who}:
              </span>
              {entry.lines.map((line, j) => (
                <span
                  key={j}
                  className="font-ui block text-[#242424]"
                  style={{ fontSize: u(9.5), lineHeight: u(13) }}
                >
                  {line}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ------------------------------------------------- message panel */}
      <div
        data-anim="panel"
        className="absolute overflow-hidden bg-white"
        style={{
          left: u(PANEL.left),
          top: u(PANEL.top),
          width: u(PANEL.width),
          height: u(PANEL.height),
          borderRadius: u(12),
          boxShadow: `0 ${u(10)} ${u(28)} rgba(23,35,60,0.16)`,
        }}
      >
        <span
          className="font-ui absolute font-semibold text-[#242424]"
          style={{ left: u(12), top: u(10), fontSize: u(10) }}
        >
          Message
        </span>

        {/* the learner's sent question */}
        <div
          data-anim="sent"
          className="absolute"
          style={{ left: u(12), top: u(34), width: u(190) }}
        >
          <div className="flex items-center" style={{ gap: u(5) }}>
            <span
              className="grid shrink-0 place-items-center rounded-full bg-[#3c80f0]"
              style={{ width: u(14), height: u(14) }}
            >
              <svg viewBox="0 0 24 24" fill="white" style={{ width: u(9) }}>
                <circle cx="12" cy="8" r="3.6" />
                <path d="M4.5 20a7.5 7.5 0 0 1 15 0z" />
              </svg>
            </span>
            <span
              className="font-ui font-semibold text-[#242424]"
              style={{ fontSize: u(8.5) }}
            >
              Arjun
            </span>
            <span
              className="font-ui ml-auto text-[#8b8f96]"
              style={{ fontSize: u(7.5) }}
            >
              10:15 AM
            </span>
          </div>
          <div
            className="bg-[#eef1f5]"
            style={{
              marginTop: u(5),
              marginLeft: u(19),
              padding: `${u(6)} ${u(8)}`,
              borderRadius: u(7),
            }}
          >
            <span
              className="font-ui block text-[#242424]"
              style={{ fontSize: u(8.5), lineHeight: u(12) }}
            >
              How do we handle high availability
            </span>
            <span
              className="font-ui block text-[#242424]"
              style={{ fontSize: u(8.5), lineHeight: u(12) }}
            >
              in this system?
            </span>
          </div>
        </div>

        {/* the Twin's reply */}
        <div
          className="absolute"
          style={{ left: u(12), top: u(88), width: u(190) }}
        >
          <div
            data-anim="reply-head"
            className="flex items-center"
            style={{ gap: u(5) }}
          >
            <span
              className="grid shrink-0 place-items-center rounded-full bg-[#1b1d21]"
              style={{ width: u(14), height: u(14) }}
            >
              <span
                className="block text-white"
                style={{ width: u(7), height: u(7) }}
              >
                <LogoSymbol size={7} className="h-full w-full" />
              </span>
            </span>
            <span
              className="font-ui font-semibold text-[#242424]"
              style={{ fontSize: u(8.5) }}
            >
              AI Twin (Co-Trainer)
            </span>
            <span
              className="font-ui ml-auto text-[#8b8f96]"
              style={{ fontSize: u(7.5) }}
            >
              10:16 AM
            </span>
          </div>

          <div style={{ marginTop: u(5), marginLeft: u(19) }}>
            {ANSWER.map((text, i) => (
              <span
                key={i}
                data-anim="reply-line"
                className="font-ui block whitespace-pre text-[#242424]"
                style={{ fontSize: u(8.5), lineHeight: u(11.5) }}
              >
                {text}
              </span>
            ))}
            <span
              data-anim="on-behalf"
              className="font-ui block text-[#8b8f96]"
              style={{ marginTop: u(6), fontSize: u(7.5) }}
            >
              Sent on trainer’s behalf
            </span>
          </div>
        </div>

        {/* composer */}
        <div
          className="absolute flex items-center border-t border-[#ececec]"
          style={{
            left: 0,
            bottom: 0,
            width: "100%",
            height: u(30),
            paddingInline: u(12),
          }}
        >
          <span className="relative flex-1">
            <span
              data-anim="placeholder"
              className="font-ui block text-[#a2a6ad]"
              style={{ fontSize: u(8.5) }}
            >
              Type your message
            </span>
            <span
              data-anim="draft"
              className="font-ui absolute top-0 left-0 block whitespace-pre text-[#242424]"
              style={{ fontSize: u(8.5) }}
            >
              {DRAFT}
            </span>
          </span>
          <span
            data-anim="send"
            className="grid shrink-0 place-items-center rounded-full bg-[#ff5a00]"
            style={{ width: u(16), height: u(16) }}
          >
            <svg viewBox="0 0 24 24" fill="white" style={{ width: u(9) }}>
              <path d="M3 20.5 22 12 3 3.5l4 8.5z" />
            </svg>
          </span>
        </div>
      </div>

      {/* the learner's cursor, resting on the chat button */}
      <div
        data-anim="learner-pointer"
        className="absolute opacity-0"
        style={{ left: u(CHAT_BUTTON.x), top: u(CHAT_BUTTON.y) }}
      >
        <Pointer label="Learner" colour={LEARNER_BLUE} width={62} />
      </div>
    </SessionShell>
  );
}

/** One seat in the class grid. */
function Tile({
  x,
  y,
  tone,
  label,
  avatar,
}: {
  x: number;
  y: number;
  tone: "dark" | "light";
  label: string;
  avatar: "person" | "twin";
}) {
  const dark = tone === "dark";
  return (
    <div
      className="absolute flex flex-col items-center justify-center"
      style={{
        left: u(x),
        top: u(y),
        width: u(70),
        height: u(69),
        gap: u(5),
        borderRadius: u(10),
        background: dark ? "#1b1d21" : "#dbeef9",
      }}
    >
      {avatar === "twin" ? (
        <span
          className="grid place-items-center rounded-full bg-[#2c2f34]"
          style={{ width: u(26), height: u(26) }}
        >
          <span
            className="block text-white"
            style={{ width: u(13), height: u(13) }}
          >
            <LogoSymbol size={13} className="h-full w-full" />
          </span>
        </span>
      ) : (
        <span
          className="grid place-items-center rounded-full"
          style={{
            width: u(26),
            height: u(26),
            background: "linear-gradient(160deg, #5fcce8, #3c80f0)",
          }}
        >
          <svg viewBox="0 0 24 24" fill="white" style={{ width: u(15) }}>
            <circle cx="12" cy="8.5" r="3.4" />
            <path d="M5 20a7 7 0 0 1 14 0z" />
          </svg>
        </span>
      )}
      <span
        className="font-ui"
        style={{
          fontSize: u(8.5),
          color: dark ? "#ffffff" : "#242424",
        }}
      >
        {label}
      </span>
    </div>
  );
}
