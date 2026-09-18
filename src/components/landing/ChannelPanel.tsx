"use client";

import { useEffect, useRef } from "react";
import { LogoSymbol } from "@/components/Logo";
import { u } from "./primitives";
import { createTimeline, playTyping } from "./session/parts";

/**
 * "Integrate into any channel" — the panel in the How it works section, played
 * as a loop. Figma: SHXsv4d0ROls7tuOqQBNLZ node 442:17428, three frames.
 *
 *   1  the assistant the learner already has open
 *   2  its tool menu, with the Twin sitting in it
 *   3  the Twin picked, answering in the same window
 *
 * The point the frames make is that nothing new has to be opened, so all three
 * are the same window and only what is inside it changes.
 */

const CARD_H = 302;

const RAIL = [
  { label: "New chat", icon: "pencil" as const, on: true },
  { label: "Search chats", icon: "search" as const },
  { label: "Library", icon: "library" as const },
  { label: "GPTs", icon: "grid" as const },
  { label: "Explore GPTs", icon: "grid" as const },
];

const RECENT = [
  "Explain LRU Cache",
  "Big-O time complexity",
  "System design basics",
];

/** The tool menu, with the Twin among the things already in it. */
const TOOLS = [
  { label: "Add photos & files", icon: "clip" as const },
  { label: "Deep research", icon: "search" as const },
  { label: "Create image", icon: "image" as const },
  { label: "Canvas", icon: "canvas" as const },
  { label: "Study and learn", icon: "book" as const, gap: true },
  { label: "Web search", icon: "globe" as const },
  { label: "GPTs", icon: "grid" as const },
  { label: "Trainer’s Twin", icon: "twin" as const, twin: true },
  { label: "Explore apps", icon: "grid" as const },
];

const ASK = [
  "Explain the difference between",
  "synchronous and asynchronous",
  "programming in JavaScript.",
];

const REPLY = [
  "Great question!",
  "In JavaScript:",
  "· Synchronous: Code runs line by line. Each",
  "  operation waits for the previous one.",
  "· Asynchronous: Operations run in the",
  "  background and it can handle other tasks.",
];

const REPLY_2 = [
  "Examples:",
  "· Synchronous: for loops, regular function calls",
  "· Asynchronous: setTimeout, fetch, Promises",
  "Asynchronous programming helps in building",
  "non-blocking, more efficient applications.",
];

const ROW_H = 19;
const MENU_TOP = 58;

export function ChannelPanel() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const { play, start, stop } = createTimeline(el);

    const appear = (
      selector: string,
      from: number,
      to: number,
      index?: number,
    ) =>
      play(
        selector,
        [
          { offset: 0, opacity: 0 },
          { offset: from, opacity: 0 },
          { offset: Math.min(1, from + 0.02), opacity: 1 },
          { offset: to, opacity: 1 },
          { offset: Math.min(1, to + 0.02), opacity: 0 },
          { offset: 1, opacity: 0 },
        ],
        index,
      );

    /* The window the learner already had open, which is also where the lap
       ends, so the loop closes on the frame it opened with. */
    play("[data-anim='state-idle']", [
      { offset: 0, opacity: 1 },
      { offset: 0.24, opacity: 1 },
      { offset: 0.27, opacity: 0 },
      { offset: 0.965, opacity: 0 },
      { offset: 0.995, opacity: 1 },
      { offset: 1, opacity: 1 },
    ]);

    appear("[data-anim='state-menu']", 0.28, 0.54);

    /* The pointer arrives on the Twin, and the row takes the hover. */
    play("[data-anim='cursor']", [
      { offset: 0, opacity: 0, transform: "translate(-14px, -26px)" },
      { offset: 0.33, opacity: 0, transform: "translate(-14px, -26px)" },
      { offset: 0.36, opacity: 1, transform: "translate(-14px, -26px)" },
      {
        offset: 0.45,
        opacity: 1,
        transform: "translate(0, 0)",
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      { offset: 0.54, opacity: 1, transform: "translate(0, 0)" },
      { offset: 0.56, opacity: 0, transform: "translate(0, 0)" },
      { offset: 1, opacity: 0, transform: "translate(-14px, -26px)" },
    ]);
    appear("[data-anim='tool-hover']", 0.45, 0.54);

    /* Picked: the Twin is named in the header from here on. */
    appear("[data-anim='state-twin']", 0.57, 0.97);
    appear("[data-anim='twin-pill']", 0.57, 0.97);

    appear("[data-anim='ask']", 0.61, 0.97);
    playTyping(play, "[data-anim='ask-line']", ASK, 0.63, 0.7);

    appear("[data-anim='reply-head']", 0.73, 0.97);
    playTyping(play, "[data-anim='reply-line']", REPLY, 0.75, 0.87);
    playTyping(play, "[data-anim='reply-line-2']", REPLY_2, 0.87, 0.95);

    start();
    return stop;
  }, []);

  return (
    <div className="l-fit w-full">
      <div
        ref={root}
        className="l-stage"
        style={{ ["--l-design" as string]: "380" }}
      >
        <div className="relative" style={{ height: u(CARD_H) }}>
          {/* The rail is open only in the first frame; after that it is the
              icon strip, so the menu has room. */}
          <div
            data-anim="state-idle"
            className="absolute inset-0 overflow-hidden bg-white"
          >
            <span
              className="absolute inset-y-0 left-0 bg-[#f7f7f8]"
              style={{ width: u(105) }}
            />
            <Mark size={13} left={9} top={9} />

            {RAIL.map((item, i) => (
              <span
                key={item.label}
                className={`font-ui absolute flex items-center whitespace-nowrap ${
                  item.on ? "bg-[#eceef2] text-[#1b1d21]" : "text-[#3f4650]"
                }`}
                style={{
                  left: u(6),
                  top: u(30 + i * 18),
                  width: u(93),
                  height: u(16),
                  gap: u(6),
                  paddingInline: u(6),
                  borderRadius: u(5),
                  fontSize: u(7.5),
                }}
              >
                <Tool kind={item.icon} size={9} />
                {item.label}
              </span>
            ))}

            <span
              className="font-ui absolute font-semibold text-[#9aa0aa]"
              style={{ left: u(12), top: u(128), fontSize: u(7) }}
            >
              Today
            </span>
            {RECENT.map((label, i) => (
              <span
                key={label}
                className="font-ui absolute whitespace-nowrap text-[#3f4650]"
                style={{ left: u(12), top: u(142 + i * 16), fontSize: u(7.5) }}
              >
                {label}
              </span>
            ))}

            <span
              className="absolute flex items-center"
              style={{ left: u(8), top: u(272), gap: u(6) }}
            >
              <span
                className="font-ui grid place-items-center rounded-full bg-[#1b1d21] font-bold text-white"
                style={{ width: u(15), height: u(15), fontSize: u(6) }}
              >
                MA
              </span>
              <span
                className="font-ui font-semibold text-[#1b1d21]"
                style={{ fontSize: u(8) }}
              >
                Max
              </span>
            </span>

            {/* nothing asked yet */}
            <span
              /* Centred on the thread column by coordinate — a `w-full`
                 wrapper offset from the left overhangs the stage. */
              className="absolute"
              style={{ left: u(232), top: u(112) }}
            >
              <Mark size={20} />
            </span>
            <span
              className="font-ui absolute text-center font-semibold text-[#1b1d21]"
              style={{
                left: u(105),
                top: u(142),
                width: u(275),
                fontSize: u(11),
                lineHeight: u(15),
              }}
            >
              How can I help
              <br />
              you today?
            </span>

            <Composer left={117} width={253} placeholder="Message ChatGPT" />
          </div>

          {/* ------------------------------------------------- 2. the menu */}
          <div
            data-anim="state-menu"
            className="absolute inset-0 overflow-hidden bg-white opacity-0"
          >
            <IconRail />
            <Header />

            <div
              className="absolute border border-[#ececf1] bg-white"
              style={{
                left: u(40),
                top: u(MENU_TOP),
                width: u(152),
                height: u(TOOLS.length * ROW_H + 16),
                borderRadius: u(10),
                boxShadow: `0 ${u(8)} ${u(24)} rgba(23,35,60,0.12)`,
              }}
            >
              {TOOLS.map((tool, i) => (
                <span
                  key={tool.label}
                  className="absolute flex items-center"
                  style={{
                    left: u(6),
                    top: u(8 + i * ROW_H),
                    width: u(140),
                    height: u(ROW_H - 2),
                    gap: u(7),
                    paddingInline: u(7),
                    borderRadius: u(6),
                    fontSize: u(8),
                  }}
                >
                  {tool.twin ? (
                    <span
                      data-anim="tool-hover"
                      className="absolute inset-0 bg-[#f3f4f7] opacity-0"
                      style={{ borderRadius: u(6) }}
                    />
                  ) : null}
                  {tool.gap ? (
                    <span
                      className="absolute bg-[#ececf1]"
                      style={{
                        left: u(1),
                        top: u(-5),
                        width: u(138),
                        height: u(1),
                      }}
                    />
                  ) : null}

                  <span className="relative text-[#5a6069]">
                    {tool.twin ? (
                      <span
                        className="grid place-items-center rounded-full bg-[#1b1d21]"
                        style={{ width: u(11), height: u(11) }}
                      >
                        <span
                          className="block text-[var(--l-brand)]"
                          style={{ width: u(6), height: u(6) }}
                        >
                          <LogoSymbol size={6} className="h-full w-full" />
                        </span>
                      </span>
                    ) : (
                      <Tool kind={tool.icon} size={10} />
                    )}
                  </span>
                  <span
                    className="font-ui relative whitespace-nowrap text-[#242424]"
                    style={{ fontSize: u(8) }}
                  >
                    {tool.label}
                  </span>
                  {tool.twin ? (
                    <span
                      className="font-ui relative ml-auto rounded-full bg-[#fdeaea] text-[#e5342b]"
                      style={{ paddingInline: u(4), fontSize: u(6) }}
                    >
                      New
                    </span>
                  ) : null}
                </span>
              ))}
            </div>

            <span
              data-anim="cursor"
              className="absolute opacity-0"
              style={{ left: u(120), top: u(MENU_TOP + 8 + 7 * ROW_H + 10) }}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 12 12"
                fill="#1b1d21"
                style={{ width: u(9), height: u(9) }}
              >
                <path d="M0 0l11.2 4.4-4.5 1.4-1.4 4.5z" />
              </svg>
            </span>

            <Composer left={40} width={330} placeholder="Ask anything" />
          </div>

          {/* ------------------------------------------ 3. the Twin answers */}
          <div
            data-anim="state-twin"
            className="absolute inset-0 overflow-hidden bg-white opacity-0"
          >
            <IconRail />
            <Header />

            <span
              data-anim="twin-pill"
              className="absolute flex items-center bg-[#f3f4f7] opacity-0"
              style={{
                left: u(108),
                top: u(9),
                height: u(15),
                gap: u(4),
                paddingInline: u(6),
                borderRadius: u(8),
              }}
            >
              <span
                className="grid place-items-center rounded-full bg-[#1b1d21]"
                style={{ width: u(10), height: u(10) }}
              >
                <span
                  className="block text-[var(--l-brand)]"
                  style={{ width: u(6), height: u(6) }}
                >
                  <LogoSymbol size={6} className="h-full w-full" />
                </span>
              </span>
              <span
                className="font-ui whitespace-nowrap text-[#242424]"
                style={{ fontSize: u(8) }}
              >
                Trainer’s Twin
              </span>
            </span>

            <span
              data-anim="ask"
              className="absolute bg-[#e9e7fb] opacity-0"
              style={{
                left: u(223),
                top: u(36),
                width: u(147),
                paddingInline: u(8),
                paddingBlock: u(6),
                borderRadius: u(7),
              }}
            >
              {ASK.map((line, i) => (
                <span
                  key={i}
                  data-anim="ask-line"
                  className="font-ui block whitespace-pre text-[#242424]"
                  style={{ fontSize: u(7.5), lineHeight: u(11) }}
                >
                  {line}
                </span>
              ))}
            </span>

            <span
              data-anim="reply-head"
              className="absolute flex items-center opacity-0"
              style={{ left: u(36), top: u(96), gap: u(5) }}
            >
              <span
                className="grid place-items-center rounded-full bg-[#1b1d21]"
                style={{ width: u(12), height: u(12) }}
              >
                <span
                  className="block text-[var(--l-brand)]"
                  style={{ width: u(7), height: u(7) }}
                >
                  <LogoSymbol size={7} className="h-full w-full" />
                </span>
              </span>
              <span
                className="font-ui text-[#5a6069]"
                style={{ fontSize: u(7) }}
              >
                Trainer’s Twin
              </span>
            </span>

            <span className="absolute" style={{ left: u(36), top: u(114) }}>
              {REPLY.map((line, i) => (
                <span
                  key={i}
                  data-anim="reply-line"
                  className="font-ui block whitespace-pre text-[#242424]"
                  style={{ fontSize: u(7.5), lineHeight: u(11.5) }}
                >
                  {line}
                </span>
              ))}
              {REPLY_2.map((line, i) => (
                <span
                  key={i}
                  data-anim="reply-line-2"
                  className={`font-ui block whitespace-pre text-[#242424] ${
                    i === 0 ? "font-semibold" : ""
                  }`}
                  style={{ fontSize: u(7.5), lineHeight: u(11.5) }}
                >
                  {line}
                </span>
              ))}
            </span>

            <Composer left={36} width={334} placeholder="Ask anything" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ parts */

/** The assistant's own mark, drawn rather than reproduced as its logo. */
function Mark({
  size,
  left,
  top,
}: {
  size: number;
  left?: number;
  top?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1b1d21"
      strokeWidth="1.4"
      className={left === undefined ? undefined : "absolute"}
      style={{
        width: u(size),
        height: u(size),
        ...(left === undefined ? null : { left: u(left), top: u(top ?? 0) }),
      }}
    >
      <path d="M12 3.2 19 7.1v7.8L12 18.8 5 14.9V7.1l7-3.9Z" />
      <path d="M12 3.2v7.7l7 4M12 10.9l-7 4M12 10.9v7.9" />
    </svg>
  );
}

/** The collapsed rail the second and third frames show. */
function IconRail() {
  return (
    <>
      <span
        className="absolute inset-y-0 left-0 bg-[#f7f7f8]"
        style={{ width: u(26) }}
      />
      <Mark size={12} left={7} top={9} />
      {(["pencil", "search", "library", "grid", "menu"] as const).map(
        (kind, i) => (
          <span
            key={kind}
            className="absolute text-[#5a6069]"
            style={{ left: u(8), top: u(32 + i * 17) }}
          >
            <Tool kind={kind} size={10} />
          </span>
        ),
      )}
    </>
  );
}

function Header() {
  return (
    <span
      className="font-ui absolute flex items-center font-semibold text-[#1b1d21]"
      style={{ left: u(40), top: u(12), gap: u(4), fontSize: u(9) }}
    >
      ChatGPT 4o
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#5a6069"
        strokeWidth="2.4"
        strokeLinecap="round"
        style={{ width: u(8), height: u(8) }}
      >
        <path d="m5 9 7 7 7-7" />
      </svg>
    </span>
  );
}

function Composer({
  left,
  width = 201,
  placeholder,
}: {
  left: number;
  width?: number;
  placeholder: string;
}) {
  return (
    <span
      className="absolute border border-[#e6e8ee]"
      style={{
        left: u(left),
        top: u(248),
        width: u(width),
        height: u(40),
        borderRadius: u(10),
      }}
    >
      <span
        className="font-ui absolute text-[#9aa0aa]"
        style={{ left: u(10), top: u(9), fontSize: u(8) }}
      >
        {placeholder}
      </span>
      <span
        className="absolute text-[#5a6069]"
        style={{ left: u(10), top: u(24) }}
      >
        <Tool kind="plus" size={10} />
      </span>
      <span
        className="absolute grid place-items-center rounded-full bg-[#1b1d21]"
        style={{ right: u(9), top: u(22), width: u(14), height: u(14) }}
      >
        <span
          className="block rounded-[1px] bg-white"
          style={{ width: u(5), height: u(5) }}
        />
      </span>
    </span>
  );
}

const PATHS = {
  pencil: <path d="M4 20h4L19.5 8.5a2.1 2.1 0 0 0-3-3L5 17v3Z" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  library: <path d="M5 4h14v16l-7-3.5L5 20V4Z" />,
  grid: (
    <>
      <circle cx="7" cy="7" r="2" />
      <circle cx="17" cy="7" r="2" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  clip: (
    <path d="M20 11.5 12.5 19a4.6 4.6 0 0 1-6.5-6.5l8-8a3 3 0 0 1 4.3 4.3l-8 8a1.5 1.5 0 0 1-2.1-2.1l7.3-7.3" />
  ),
  image: (
    <>
      <rect x="4" y="5" width="16" height="14" rx="2.5" />
      <path d="m5 17 4.5-4.5 3 3L16 12l3 3" />
    </>
  ),
  canvas: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2.5" />
      <path d="M4 10h16M10 10v10" />
    </>
  ),
  book: (
    <path d="M4 5.5A2 2 0 0 1 6 4h5v16H6a2 2 0 0 1-2-2V5.5ZM20 5.5A2 2 0 0 0 18 4h-5v16h5a2 2 0 0 0 2-2V5.5Z" />
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.4 2.5 2.4 14.5 0 17M12 3.5c-2.4 2.5-2.4 14.5 0 17" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  twin: <path d="M12 5v14M5 12h14" />,
};

function Tool({ kind, size }: { kind: keyof typeof PATHS; size: number }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: u(size), height: u(size) }}
    >
      {PATHS[kind]}
    </svg>
  );
}
