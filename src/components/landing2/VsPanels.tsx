"use client";

import { useEffect, useRef } from "react";
import { LogoSymbol } from "@/components/Logo";
import { u } from "./primitives";
import {
  Bubble,
  createTimeline,
  SLOW_CYCLE_MS,
  IDLE_BORDER,
  LEARNER_BLUE,
  Panel,
  playHold,
  playTyping,
  Pointer,
  SessionShell,
  TWIN_GREEN,
} from "./session/parts";

/**
 * The two windows in "Not another generic AI chatbot": the same question put to
 * a generic assistant and to a Twin.
 *
 * Both are drawn as one browser window with two tabs, the panel's own tab
 * active. The Twin side is the session mockup the rest of the page already
 * speaks — measured against the frame, its panel, participant cards and call
 * bar land within a couple of units of `SessionShell`, so it is that component
 * rather than a copy of it.
 *
 * Both loop on the shared session cycle, so the two windows stay in step:
 *
 *   Figma 438:17412  the generic side, empty then filled — it answers twice,
 *                    both times with a finished solution. Its copy is not the
 *                    frame's: see CHAT.
 *   Figma 438:17413  the Twin side, in three states — the learner sat with the
 *                    error, the Twin asking about the two lines, the fix.
 *
 * The frames give the states; the beats between them are composed here in the
 * vocabulary the session scenes already use.
 */

/* --------------------------------------------------------------- marks */

/** What the design gives a generic assistant. */
function StarMark({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={{ width: u(size), height: u(size) }}
    >
      <path d="M12 2l2.9 6.26 6.85.77-5.08 4.63 1.4 6.74L12 17.02l-6.07 3.38 1.4-6.74L2.25 9.03l6.85-.77L12 2Z" />
    </svg>
  );
}

/** A mark on its dark disc, as the tabs and the message avatars carry it. */
function Disc({
  size,
  tone = "var(--tt-neutral-900)",
  children,
}: {
  size: number;
  tone?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className="grid shrink-0 place-items-center rounded-full text-white"
      style={{ width: u(size), height: u(size), background: tone }}
    >
      {children}
    </span>
  );
}

/* --------------------------------------------------------------- chrome */

const CHROME_H = 42;

/**
 * The window bar both panels share: three dots and the two tabs, with the
 * panel's own tab lifted out in white.
 */
function Chrome({ active }: { active: "generic" | "twin" }) {
  return (
    <>
      <span
        className="absolute inset-x-0 top-0 bg-[var(--tt-neutral-200)]"
        style={{ height: u(CHROME_H) }}
      />
      {[22, 37, 52].map((x) => (
        <span
          key={x}
          className="absolute rounded-full bg-[var(--tt-neutral-300)]"
          style={{ left: u(x), top: u(19), width: u(7), height: u(7) }}
        />
      ))}

      <Tab active={active === "generic"} left={80} width={118}>
        <StarMark size={13} className="text-[var(--tt-neutral-900)]" />
        Generic AI
      </Tab>
      <Tab active={active === "twin"} left={202} width={126}>
        <span
          className="text-[var(--l-brand)]"
          style={{ width: u(13), height: u(13) }}
        >
          <LogoSymbol size={13} className="h-full w-full" />
        </span>
        TrainerTwin
      </Tab>
    </>
  );
}

function Tab({
  active,
  left,
  width,
  children,
}: {
  active: boolean;
  left: number;
  width: number;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`font-ui absolute flex items-center font-semibold whitespace-nowrap ${
        active
          ? "bg-white text-[var(--tt-neutral-900)]"
          : "text-[var(--tt-neutral-600)]"
      }`}
      style={{
        left: u(left),
        top: u(6),
        width: u(width),
        height: u(CHROME_H - 6),
        gap: u(7),
        paddingInline: u(13),
        fontSize: u(13),
        borderTopLeftRadius: u(9),
        borderTopRightRadius: u(9),
      }}
    >
      {children}
    </span>
  );
}

/** The window both panels are built in: chrome on top, content beneath. */
function Window({
  active,
  children,
}: {
  active: "generic" | "twin";
  children: React.ReactNode;
}) {
  return (
    <div
      className="overflow-hidden rounded-[16px]"
      style={{ boxShadow: "0 18px 44px rgba(23,35,60,0.13)" }}
    >
      <div className="l-fit w-full">
        <div
          className="l-stage bg-[var(--tt-neutral-200)]"
          style={{ ["--l-design" as string]: "591", height: u(CHROME_H) }}
        >
          <Chrome active={active} />
        </div>
      </div>
      {children}
    </div>
  );
}

/* ----------------------------------------------------------- generic AI */

const NAV = [
  { label: "New chat", icon: "pencil" as const, on: true },
  { label: "Search chats", icon: "search" as const },
  { label: "Library", icon: "library" as const },
];

const RECENT = [
  "Explain LRU Cache",
  "Big-O time complexity",
  "System design basics",
];

type ChatTurn = {
  who: "Arjun" | "Generic AI";
  time: string;
  lines: string[];
  /** Indexes into `lines` that are code, and so are set in the mono face. */
  code?: number[];
};

/**
 * The four turns the frame draws. Both panels are now the same incident — the
 * `reduce()` error the Twin side has the learner sat in front of — because the
 * comparison only lands if the two windows are answering the same question.
 * The design's copy was a different one (a high-availability question), which
 * read as two unrelated demos side by side.
 *
 * The shape the frame gives is kept exactly: the learner asks twice, and both
 * times the assistant hands back a finished solution instead of asking what
 * made `items` undefined. That is the point the section is making.
 */
const CHAT: ChatTurn[] = [
  {
    who: "Arjun",
    time: "10:15 AM",
    lines: [
      "Why does this line throw “Cannot read properties of undefined”?",
      "const total = items.reduce((a,b) => a + b.price, 0);",
    ],
    code: [1],
  },
  {
    who: "Generic AI",
    time: "10:16 AM",
    lines: [
      "Solution :",
      "const total = (items ?? []).reduce((a,b) => a + b.price, 0);",
      "Falling back to an empty array stops reduce() running on undefined.",
    ],
    code: [1],
  },
  {
    who: "Arjun",
    time: "10:17 AM",
    lines: ["But why is items undefined by the time getDiscount() runs?"],
  },
  {
    who: "Generic AI",
    time: "10:18 AM",
    lines: [
      "Solution :",
      "if (!items) items = [];",
      "Guard the input at the top of getDiscount() and the error goes away.",
    ],
    code: [1],
  },
];

const SIDEBAR_W = 126;
/** Where each turn starts, in stage units — a turn is 31u plus 13u a line. */
const TURN_TOP = [70, 137, 217, 271];

/** Where each turn arrives, and where its answer types out. */
const TURN_IN = [0.11, 0.26, 0.48, 0.6];

export function GenericAIPanel() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const { play, start, stop } = createTimeline(el, SLOW_CYCLE_MS);

    /* The thread starts empty and ends empty, so the lap closes on the frame
       it opened with and the wrap is invisible. */
    play("[data-anim='empty']", [
      { offset: 0, opacity: 1 },
      { offset: 0.07, opacity: 1 },
      { offset: 0.1, opacity: 0 },
      { offset: 0.96, opacity: 0 },
      { offset: 0.995, opacity: 1 },
      { offset: 1, opacity: 1 },
    ]);

    CHAT.forEach((turn, i) => {
      const from = TURN_IN[i];
      play(
        "[data-anim='turn']",
        [
          { offset: 0, opacity: 0, transform: "translateY(7px)" },
          { offset: from, opacity: 0, transform: "translateY(7px)" },
          {
            offset: from + 0.025,
            opacity: 1,
            transform: "translateY(0)",
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          },
          { offset: 0.94, opacity: 1, transform: "translateY(0)" },
          { offset: 0.965, opacity: 0, transform: "translateY(0)" },
          { offset: 1, opacity: 0, transform: "translateY(7px)" },
        ],
        i,
      );
    });

    /* The learner's turns land whole — they were typed and sent. The
       assistant's are written out, which is the one thing the generic side
       does that reads as thinking. */
    playTyping(play, "[data-anim='ai-line']", CHAT[1].lines, 0.29, 0.44, 0);
    playTyping(play, "[data-anim='ai-line']", CHAT[3].lines, 0.63, 0.82, 3);

    start();
    return stop;
  }, []);

  return (
    <Window active="generic">
      <div className="l-fit w-full">
        <div
          ref={root}
          className="l-stage bg-white"
          style={{ ["--l-design" as string]: "591", height: u(445) }}
        >
          {/* ------------------------------------------------------ rail */}
          <span
            className="absolute inset-y-0 left-0 border-r border-[var(--tt-neutral-100)] bg-[var(--tt-neutral-50)]"
            style={{ width: u(SIDEBAR_W) }}
          />
          <span className="absolute" style={{ left: u(17), top: u(19) }}>
            <StarMark size={15} className="text-[var(--tt-neutral-900)]" />
          </span>

          {NAV.map((item, i) => (
            <span
              key={item.label}
              className={`font-ui absolute flex items-center ${
                item.on
                  ? "bg-[var(--tt-blue-50)] text-[var(--tt-neutral-900)]"
                  : "text-[var(--tt-neutral-700)]"
              }`}
              style={{
                left: u(10),
                top: u(50 + i * 29),
                width: u(SIDEBAR_W - 20),
                height: u(25),
                gap: u(8),
                paddingInline: u(8),
                borderRadius: u(7),
                fontSize: u(11),
              }}
            >
              <NavIcon kind={item.icon} />
              {item.label}
            </span>
          ))}

          <span
            className="font-ui absolute font-semibold text-[var(--tt-neutral-400)]"
            style={{ left: u(18), top: u(152), fontSize: u(10) }}
          >
            Today
          </span>
          {/* Held to the rail's own width and truncated, the way a chat
              history behaves — the titles are longer than the column and were
              running out over the conversation beside it. */}
          {RECENT.map((label, i) => (
            <span
              key={label}
              className="font-ui absolute block overflow-hidden text-ellipsis whitespace-nowrap text-[var(--tt-neutral-700)]"
              style={{
                left: u(18),
                top: u(176 + i * 26),
                width: u(SIDEBAR_W - 28),
                fontSize: u(11),
              }}
            >
              {label}
            </span>
          ))}

          <span
            className="absolute flex items-center"
            style={{ left: u(14), top: u(400), gap: u(9) }}
          >
            <Disc size={22}>
              <StarMark size={11} />
            </Disc>
            <span
              className="font-ui font-semibold text-[var(--tt-neutral-900)]"
              style={{ fontSize: u(11) }}
            >
              Max
            </span>
          </span>

          {/* --------------------------------------------------- thread */}
          <span
            className="font-ui absolute flex items-center font-semibold text-[var(--tt-neutral-900)]"
            style={{ left: u(146), top: u(22), gap: u(5), fontSize: u(13) }}
          >
            Generic AI
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--tt-neutral-600)"
              strokeWidth="2.4"
              strokeLinecap="round"
              style={{ width: u(11), height: u(11) }}
            >
              <path d="m5 9 7 7 7-7" />
            </svg>
          </span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--tt-neutral-600)"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute"
            style={{ left: u(558), top: u(23), width: u(13), height: u(13) }}
          >
            <path d="M4 20h4L19.5 8.5a2.1 2.1 0 0 0-3-3L5 17v3Z" />
          </svg>

          {/* What the window sits on before anything is asked (438:17412). */}
          <span
            data-anim="empty"
            className="font-ui absolute text-center font-semibold text-[var(--tt-neutral-900)]"
            style={{
              left: u(SIDEBAR_W),
              top: u(172),
              width: u(591 - SIDEBAR_W),
              fontSize: u(13.5),
              lineHeight: u(19),
            }}
          >
            How can I help
            <br />
            you today?
          </span>

          {CHAT.map((turn, i) => (
            <Turn key={i} turn={turn} top={TURN_TOP[i]} />
          ))}

          {/* ------------------------------------------------ composer */}
          <span
            className="absolute border border-[var(--tt-neutral-200)] bg-white"
            style={{
              left: u(146),
              top: u(366),
              width: u(424),
              height: u(60),
              borderRadius: u(13),
            }}
          />
          <span
            className="font-ui absolute text-[var(--tt-neutral-400)]"
            style={{ left: u(162), top: u(380), fontSize: u(11) }}
          >
            Message ChatGPT
          </span>
          <span
            className="absolute flex items-center text-[var(--tt-neutral-600)]"
            style={{ left: u(162), top: u(402), gap: u(14) }}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ width: u(13), height: u(13) }}
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              style={{ width: u(13), height: u(13) }}
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
            </svg>
          </span>
          <span
            className="absolute grid place-items-center rounded-full bg-[var(--tt-neutral-900)] text-white"
            style={{ left: u(534), top: u(394), width: u(24), height: u(24) }}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ width: u(12), height: u(12) }}
            >
              <path d="M2.5 21 22 12 2.5 3l4.2 7.4L15 12l-8.3 1.6L2.5 21Z" />
            </svg>
          </span>
        </div>
      </div>
    </Window>
  );
}

function Turn({ turn, top }: { turn: ChatTurn; top: number }) {
  const mine = turn.who === "Arjun";
  return (
    <span
      data-anim="turn"
      className="absolute flex items-start"
      style={{ left: u(146), top: u(top), gap: u(7) }}
    >
      {mine ? (
        <span
          className="grid shrink-0 place-items-center rounded-full bg-[#3fa2f0]"
          style={{ width: u(21), height: u(21) }}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="var(--tt-neutral-0)"
            style={{ width: u(13), height: u(13) }}
          >
            <circle cx="12" cy="8.2" r="3.9" />
            <path d="M4.6 20.4a7.4 7.4 0 0 1 14.8 0Z" />
          </svg>
        </span>
      ) : (
        <Disc size={21}>
          <StarMark size={11} />
        </Disc>
      )}

      {/* Sized by the bubble, so the timestamp keeps to the bubble's right
          edge the way the frame draws it however long the copy runs. */}
      <span className="flex w-fit flex-col" style={{ gap: u(5) }}>
        <span className="flex items-baseline" style={{ gap: u(16) }}>
          <span
            className="font-ui font-semibold whitespace-nowrap text-[var(--tt-neutral-900)]"
            style={{ fontSize: u(10) }}
          >
            {turn.who}
          </span>
          <span
            className="font-ui ml-auto whitespace-nowrap text-[var(--tt-neutral-400)]"
            style={{ fontSize: u(8.5) }}
          >
            {turn.time}
          </span>
        </span>

        <span
          className={`block w-fit ${
            mine
              ? "border border-[var(--tt-neutral-200)] bg-white"
              : "bg-[var(--tt-blue-50)]"
          }`}
          style={{
            paddingBlock: u(7),
            paddingInline: u(11),
            borderRadius: u(8),
          }}
        >
          {turn.lines.map((line, i) => (
            <span
              key={i}
              data-anim={mine ? undefined : "ai-line"}
              /* Code is told apart by the face alone, the way the editor on
                 the Twin side draws it — it takes the same ink. */
              className={`block whitespace-pre text-[var(--tt-neutral-800)] ${
                turn.code?.includes(i) ? "font-mono" : "font-ui"
              }`}
              style={{ fontSize: u(9.5), lineHeight: u(13) }}
            >
              {line}
            </span>
          ))}
        </span>
      </span>
    </span>
  );
}

function NavIcon({ kind }: { kind: "pencil" | "search" | "library" }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    style: { width: u(12), height: u(12) },
  };
  if (kind === "search")
    return (
      <svg aria-hidden="true" {...common}>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>
    );
  if (kind === "library")
    return (
      <svg aria-hidden="true" {...common}>
        <path d="M5 4h14v16l-7-3.5L5 20V4Z" />
      </svg>
    );
  return (
    <svg aria-hidden="true" {...common}>
      <path d="M4 20h4L19.5 8.5a2.1 2.1 0 0 0-3-3L5 17v3Z" />
    </svg>
  );
}

/* -------------------------------------------------------------- the twin */

/**
 * Line 5 is blank in the frame but goes unnumbered there; it is numbered here,
 * because a code editor that skips a line number reads as a bug rather than as
 * a blank line.
 */
const CODE = [
  "function getDiscount(items) {",
  "  const total = items.reduce((a,b) => a + b.price, 0);",
  "  return total * 0.9; // flat discount",
  "}",
  "",
  "return total",
  "}",
  "",
  "//Error: Cannot read properties of undefined",
];

const CODE_TOP = 96;
const CODE_LINE = 22.5;
/** The two lines the Twin asks about, and the box drawn round them. */
const BOX = { top: CODE_TOP + CODE_LINE - 12, height: 53 };

const QUESTION = [
  "What does reduce() return when there’s",
  "nothing to reduce?",
];

export function TwinPanel() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const { play, start, stop } = createTimeline(el, SLOW_CYCLE_MS);

    /* Three states, as drawn: the learner sat with the error, the Twin asking
       about the two lines, then the fix. */
    playHold(play, "[data-anim='learner-cursor']", 0.04, 0.3);
    playHold(play, "[data-anim='error-box']", 0.34, 0.64);
    playHold(play, "[data-anim='twin-cursor']", 0.34, 0.64);
    playHold(play, "[data-anim='bubble']", 0.38, 0.64);
    playHold(play, "[data-anim='bubble-label']", 0.38, 0.64);
    playTyping(play, "[data-anim='bubble-line']", QUESTION, 0.42, 0.6);
    playHold(play, "[data-anim='caret']", 0.68, 0.95);
    playHold(play, "[data-anim='fix-card']", 0.76, 0.95);

    /* The learner's cursor comes back for the fix — one element, up twice. */
    play("[data-anim='learner-cursor-2']", [
      { offset: 0, opacity: 0 },
      { offset: 0.66, opacity: 0 },
      { offset: 0.69, opacity: 1 },
      { offset: 0.95, opacity: 1 },
      { offset: 0.98, opacity: 0 },
      { offset: 1, opacity: 0 },
    ]);

    /* Whoever holds the floor takes the green border. The frames give it to
       the learner too, so this is not `playFloor` — there the learner's is
       blue. */
    play("[data-anim='learner-card']", [
      { offset: 0, borderColor: IDLE_BORDER },
      { offset: 0.04, borderColor: TWIN_GREEN },
      { offset: 0.32, borderColor: TWIN_GREEN },
      { offset: 0.35, borderColor: IDLE_BORDER },
      { offset: 0.66, borderColor: IDLE_BORDER },
      { offset: 0.69, borderColor: TWIN_GREEN },
      { offset: 0.95, borderColor: TWIN_GREEN },
      { offset: 0.98, borderColor: IDLE_BORDER },
      { offset: 1, borderColor: IDLE_BORDER },
    ]);

    play("[data-anim='twin-card']", [
      { offset: 0, borderColor: IDLE_BORDER },
      { offset: 0.32, borderColor: IDLE_BORDER },
      { offset: 0.35, borderColor: TWIN_GREEN },
      { offset: 0.64, borderColor: TWIN_GREEN },
      { offset: 0.67, borderColor: IDLE_BORDER },
      { offset: 1, borderColor: IDLE_BORDER },
    ]);

    start();
    return stop;
  }, []);

  return (
    <Window active="twin">
      <SessionShell
        topFlush
        rootRef={root}
        title={
          <span className="font-normal" style={{ fontSize: u(12.5) }}>
            <b>1:1</b> - Learners where to fix errors as your Twin help to
            identify the error
          </span>
        }
      >
        <Panel />

        {CODE.map((line, i) => (
          <span
            key={i}
            className="absolute"
            style={{ top: u(CODE_TOP + i * CODE_LINE) }}
          >
            <span
              className="font-mono absolute text-right text-[var(--tt-neutral-500)]"
              style={{ left: u(40), width: u(14), fontSize: u(11) }}
            >
              {i + 1}
            </span>
            <span
              className={`font-mono absolute whitespace-pre ${
                i === CODE.length - 1
                  ? "text-[var(--tt-red-600)]"
                  : "text-[var(--tt-neutral-800)]"
              }`}
              style={{ left: u(64), fontSize: u(11) }}
            >
              {line}
            </span>
          </span>
        ))}

        {/* The learner's caret, left on the line they just changed. */}
        <span
          data-anim="caret"
          className="absolute opacity-0"
          style={{ left: u(316), top: u(CODE_TOP + 2 * CODE_LINE + 1) }}
        >
          <span
            className="l-caret block bg-[var(--tt-neutral-800)]"
            style={{ width: u(1.2), height: u(13) }}
          />
        </span>

        {/* The Twin's highlight: up only while it is asking. */}
        <span
          data-anim="error-box"
          className="absolute border-[1.5px] border-[#e8833a] opacity-0"
          style={{
            left: u(52),
            top: u(BOX.top),
            width: u(378),
            height: u(BOX.height),
            borderRadius: u(8),
          }}
        />

        {/* The error marker itself stays up in all three states. */}
        <span
          className="absolute grid place-items-center rounded-full bg-[var(--tt-red-600)] text-white"
          style={{
            left: u(401),
            top: u(CODE_TOP + CODE_LINE - 4),
            width: u(19),
            height: u(19),
          }}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            style={{ width: u(9), height: u(9) }}
          >
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </span>

        {/* Two cursors over the same spot: whoever has the floor is holding
            it. The learner's is up twice, so it is drawn twice. */}
        <span
          data-anim="learner-cursor"
          className="absolute opacity-0"
          style={{ left: u(357), top: u(150) }}
        >
          <Pointer label="Learner" colour={LEARNER_BLUE} width={52} />
        </span>
        <span
          data-anim="learner-cursor-2"
          className="absolute opacity-0"
          style={{ left: u(357), top: u(150) }}
        >
          <Pointer label="Learner" colour={LEARNER_BLUE} width={52} />
        </span>
        <span
          data-anim="twin-cursor"
          className="absolute opacity-0"
          style={{ left: u(357), top: u(150) }}
        >
          <Pointer label="Twin" colour={TWIN_GREEN} width={34} />
        </span>

        <Bubble left={170} top={186} width={232} height={76} lines={QUESTION} />

        {/* What the fix earns, inside the panel under the code. */}
        <span
          data-anim="fix-card"
          className="absolute flex items-start bg-white opacity-0"
          style={{
            left: u(40),
            top: u(300),
            width: u(392),
            height: u(58),
            gap: u(9),
            paddingInline: u(13),
            paddingBlock: u(11),
            borderRadius: u(9),
          }}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="#0aad51"
            style={{ width: u(14), height: u(14) }}
          >
            <path d="M12 1.6A10.4 10.4 0 1 0 22.4 12 10.41 10.41 0 0 0 12 1.6Zm5.1 7.9-6.2 6.2a1.2 1.2 0 0 1-1.7 0l-3.1-3.1a1.2 1.2 0 1 1 1.7-1.7l2.25 2.25 5.35-5.35a1.2 1.2 0 0 1 1.7 1.7Z" />
          </svg>
          <span className="block">
            <span
              className="font-ui block font-semibold text-[var(--tt-neutral-900)]"
              style={{ fontSize: u(11.5), lineHeight: u(16) }}
            >
              Nice fix! 🎉
            </span>
            <span
              className="font-ui block text-[var(--tt-neutral-600)]"
              style={{ fontSize: u(10.5), lineHeight: u(15) }}
            >
              The loop now iterates over valid indexes
            </span>
          </span>
        </span>
      </SessionShell>
    </Window>
  );
}
