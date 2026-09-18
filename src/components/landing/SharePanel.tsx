"use client";

import { useEffect, useRef } from "react";
import { LogoSymbol } from "@/components/Logo";
import { u } from "./primitives";
import { createTimeline, playTyping } from "./session/parts";

/**
 * "Sharable link - to your Twin page" — the panel in the How it works section,
 * played as a loop. Figma: SHXsv4d0ROls7tuOqQBNLZ node 442:17427, three frames.
 *
 *   1  the share card: one URL, copied
 *   2  the page that link opens — a learner asks
 *   3  the Twin answers, with somewhere to go next
 *
 * Same 307-wide card as the other steps: they are alternatives in one slot, and
 * a width change between them would read as the panel resizing rather than the
 * step changing.
 *
 * Frames 2 and 3 are one screen at two moments, so the page is up for the whole
 * back half of the lap and the answer arrives inside it.
 */

const CARD_H = 302;
const URL = "yourtwin-trainertwin.com/chat";

/** The learner's side of the exchange, and the Twin's, as the frames give them. */
const ASK = [
  "Why do we compare the target",
  "with the middle element in",
  "Binary Search?",
];

const REPLY = [
  "Great question! 🎉",
  "We compare with the middle element to",
  "eliminate half of the remaining search",
  "space in each step.",
];

const RULES = [
  "If target == mid → we found it!",
  "If target < mid → search left half",
  "If target > mid → search right half",
];

const CHIPS = ["Yes, show example", "More on time complexity", "Thanks!"];

/** The learner's own history down the rail, newest first. */
const THREADS = [
  {
    title: "Binary Search",
    sub: "Why do we compare with mid?",
    time: "3:07 AM",
  },
  { title: "Time Complexity", sub: "Big O for nested loops", time: "11:32 PM" },
  { title: "Arrays", sub: "Prefix sum explanation", time: "10:15 PM" },
  { title: "Linked List", sub: "Detect cycle in a list", time: "9:47 PM" },
];

export function SharePanel() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const { play, start, stop } = createTimeline(el);

    const appear = (selector: string, from: number, to: number) =>
      play(selector, [
        { offset: 0, opacity: 0 },
        { offset: from, opacity: 0 },
        { offset: Math.min(1, from + 0.02), opacity: 1 },
        { offset: to, opacity: 1 },
        { offset: Math.min(1, to + 0.02), opacity: 0 },
        { offset: 1, opacity: 0 },
      ]);

    /* The share card opens and closes the lap, so the wrap is invisible. */
    play("[data-anim='state-share']", [
      { offset: 0, opacity: 1 },
      { offset: 0.3, opacity: 1 },
      { offset: 0.33, opacity: 0 },
      { offset: 0.965, opacity: 0 },
      { offset: 0.995, opacity: 1 },
      { offset: 1, opacity: 1 },
    ]);

    /* Copy, then the button says so — the same beat the embed step plays. */
    play("[data-anim='copy-idle']", [
      { offset: 0, opacity: 1 },
      { offset: 0.19, opacity: 1 },
      { offset: 0.21, opacity: 0 },
      { offset: 0.96, opacity: 0 },
      { offset: 0.99, opacity: 1 },
      { offset: 1, opacity: 1 },
    ]);
    appear("[data-anim='copy-done']", 0.2, 0.3);

    appear("[data-anim='state-page']", 0.34, 0.97);

    /* The learner's question, then the answer written out under it. */
    appear("[data-anim='ask']", 0.38, 0.97);
    playTyping(play, "[data-anim='ask-line']", ASK, 0.4, 0.5);

    appear("[data-anim='reply']", 0.56, 0.97);
    playTyping(play, "[data-anim='reply-line']", REPLY, 0.6, 0.74);
    playTyping(play, "[data-anim='rule-line']", RULES, 0.74, 0.84);
    appear("[data-anim='reply-tail']", 0.85, 0.97);

    CHIPS.forEach((_, i) =>
      play(
        "[data-anim='chip']",
        [
          { offset: 0, opacity: 0, transform: "translateY(4px)" },
          {
            offset: 0.88 + i * 0.015,
            opacity: 0,
            transform: "translateY(4px)",
          },
          {
            offset: 0.9 + i * 0.015,
            opacity: 1,
            transform: "translateY(0)",
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          },
          { offset: 0.97, opacity: 1, transform: "translateY(0)" },
          { offset: 0.99, opacity: 0, transform: "translateY(0)" },
          { offset: 1, opacity: 0, transform: "translateY(4px)" },
        ],
        i,
      ),
    );

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
          {/* ------------------------------------------------- 1. the link */}
          <div data-anim="state-share" className="absolute inset-0">
            <span
              className="absolute flex w-full items-center justify-center"
              style={{ top: u(58), gap: u(6) }}
            >
              <span
                className="block text-[var(--l-brand)]"
                style={{ width: u(11), height: u(11) }}
              >
                <LogoSymbol size={11} className="h-full w-full" />
              </span>
              <span
                className="font-ui font-bold text-[#242424]"
                style={{ fontSize: u(11) }}
              >
                Sharable link
              </span>
            </span>

            <div
              className="absolute bg-white"
              style={{
                left: u(66),
                top: u(86),
                width: u(247),
                height: u(138),
                borderRadius: u(10),
                boxShadow: `0 ${u(4)} ${u(14)} rgba(23,35,60,0.06)`,
              }}
            >
              <span
                className="font-ui absolute font-semibold text-[#4f46e5]"
                style={{ left: u(16), top: u(14), fontSize: u(9.5) }}
              >
                URL
              </span>
              <span
                className="absolute bg-[#4f46e5]"
                style={{ left: u(16), top: u(30), width: u(20), height: u(2) }}
              />
              <span
                className="absolute bg-[#ededf1]"
                style={{ left: u(16), top: u(31), width: u(215), height: u(1) }}
              />

              <span
                className="font-ui absolute text-[#8a8f98]"
                style={{ left: u(16), top: u(42), fontSize: u(8.5) }}
              >
                Copy and paste this link in your post
              </span>

              <span
                className="absolute flex items-center border border-[#e6e8ee]"
                style={{
                  left: u(16),
                  top: u(58),
                  width: u(215),
                  height: u(24),
                  paddingInline: u(9),
                  gap: u(6),
                  borderRadius: u(6),
                }}
              >
                <Glyph size={9} className="text-[#8a8f98]">
                  <path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" />
                  <path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" />
                </Glyph>
                <span
                  className="font-ui text-[#242424]"
                  style={{ fontSize: u(8) }}
                >
                  {URL}
                </span>
                <Glyph size={9} className="ml-auto text-[#8a8f98]">
                  <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
                </Glyph>
              </span>

              <span
                className="absolute flex items-center"
                style={{ left: u(16), top: u(98), gap: u(5) }}
              >
                <Glyph size={9} className="text-[#8a8f98]">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" />
                </Glyph>
                <span
                  className="font-ui text-[#5a6069]"
                  style={{ fontSize: u(8.5) }}
                >
                  Custom domain
                </span>
              </span>

              {/* One button, two faces — the second replaces the first. */}
              <span
                className="absolute"
                style={{
                  left: u(166),
                  top: u(92),
                  width: u(65),
                  height: u(22),
                }}
              >
                <CopyFace anim="copy-idle" tone="#5a6069" label="Copy">
                  <rect x="9" y="9" width="11" height="11" rx="2" />
                  <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
                </CopyFace>
                <CopyFace anim="copy-done" tone="#0aad51" label="Copied">
                  <path d="m5 12.5 4.5 4.5L19 7.5" />
                </CopyFace>
              </span>
            </div>
          </div>

          {/* -------------------------------------------- 2 & 3. the page */}
          <div
            data-anim="state-page"
            className="absolute inset-0 overflow-hidden bg-[#1a1c22] opacity-0"
          >
            {/* the learner's own history */}
            <span
              className="absolute inset-y-0 left-0 bg-[#101216]"
              style={{ width: u(128) }}
            />
            <span
              className="absolute grid place-items-center rounded-[4px] bg-[#2a2d36]"
              style={{ left: u(9), top: u(10), width: u(17), height: u(17) }}
            >
              <span
                className="block text-white"
                style={{ width: u(9), height: u(9) }}
              >
                <LogoSymbol size={9} className="h-full w-full" />
              </span>
            </span>
            <span
              className="font-ui absolute font-semibold text-white"
              style={{ left: u(31), top: u(10), fontSize: u(8.5) }}
            >
              Trainer’s Twin
            </span>
            <span
              className="absolute flex items-center"
              style={{ left: u(31), top: u(21), gap: u(4) }}
            >
              <span
                className="block rounded-full bg-[#22c55e]"
                style={{ width: u(4), height: u(4) }}
              />
              <span
                className="font-ui text-[#7f858f]"
                style={{ fontSize: u(7) }}
              >
                Always online
              </span>
            </span>

            {THREADS.map((thread, i) => (
              <span key={thread.title}>
                {i === 0 || i === 1 ? (
                  <span
                    className="font-ui absolute text-[#6b7280]"
                    style={{
                      left: u(10),
                      top: u(i === 0 ? 38 : 84),
                      fontSize: u(7),
                    }}
                  >
                    {i === 0 ? "Today" : "Yesterday"}
                  </span>
                ) : null}
                <span
                  className={`absolute block ${i === 0 ? "bg-[#20242c]" : ""}`}
                  style={{
                    left: u(6),
                    top: u(i === 0 ? 48 : 94 + (i - 1) * 32),
                    width: u(116),
                    height: u(28),
                    borderRadius: u(6),
                  }}
                >
                  <span
                    className="font-ui absolute font-medium text-[#e8eaee]"
                    style={{ left: u(7), top: u(5), fontSize: u(7) }}
                  >
                    {thread.title}
                  </span>
                  <span
                    className="font-ui absolute text-[#7f858f]"
                    style={{ left: u(7), top: u(15), fontSize: u(6.5) }}
                  >
                    {thread.sub}
                  </span>
                  <span
                    className="font-ui absolute text-right text-[#6b7280]"
                    style={{ right: u(6), top: u(5), fontSize: u(5.5) }}
                  >
                    {thread.time}
                  </span>
                </span>
              </span>
            ))}

            <span
              className="absolute bg-[#1a1e26]"
              style={{
                left: u(6),
                top: u(238),
                width: u(116),
                height: u(52),
                borderRadius: u(7),
              }}
            >
              <span
                className="font-ui absolute font-semibold text-[#e8eaee]"
                style={{
                  left: u(20),
                  top: u(7),
                  width: u(90),
                  fontSize: u(7),
                  lineHeight: u(10),
                }}
              >
                We’re here while you learn
              </span>
              <span
                className="font-ui absolute text-[#7f858f]"
                style={{
                  left: u(8),
                  top: u(30),
                  width: u(104),
                  fontSize: u(6.5),
                  lineHeight: u(9),
                }}
              >
                Day or night, your AI Twin has your back.
              </span>
              <span
                className="absolute text-[#8b8cf5]"
                style={{ left: u(8), top: u(8) }}
              >
                <Glyph size={9}>
                  <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.6 6.6 0 0 0 10.5 10.5Z" />
                </Glyph>
              </span>
            </span>

            {/* the conversation */}
            <span
              className="absolute grid place-items-center rounded-[5px] bg-[#2a2d36]"
              style={{ left: u(137), top: u(10), width: u(16), height: u(16) }}
            >
              <span
                className="block text-white"
                style={{ width: u(8), height: u(8) }}
              >
                <LogoSymbol size={8} className="h-full w-full" />
              </span>
            </span>
            <span
              className="absolute flex items-center"
              style={{ left: u(158), top: u(10), gap: u(4) }}
            >
              <span
                className="font-ui font-semibold text-white"
                style={{ fontSize: u(8.5) }}
              >
                Twin
              </span>
              <span
                className="font-ui rounded-full bg-[#173a2a] text-[#3ddc84]"
                style={{ paddingInline: u(4), fontSize: u(6) }}
              >
                AI
              </span>
            </span>
            <span
              className="font-ui absolute text-[#7f858f]"
              style={{ left: u(158), top: u(21), fontSize: u(6.5) }}
            >
              Your AI Twin is online
            </span>
            <span
              className="font-ui absolute text-[#7f858f]"
              style={{ right: u(10), top: u(14), fontSize: u(6.5) }}
            >
              Private &amp; secure
            </span>
            <span
              className="absolute bg-[#262a33]"
              style={{ left: u(128), top: u(36), width: u(252), height: u(1) }}
            />

            {/* the learner asks */}
            <span
              data-anim="ask"
              className="absolute bg-[#e6e5fb] opacity-0"
              style={{
                left: u(223),
                top: u(46),
                width: u(147),
                paddingInline: u(8),
                paddingBlock: u(6),
                borderRadius: u(7),
              }}
            >
              <span
                className="font-ui block font-medium text-[#5a6069]"
                style={{ fontSize: u(6.5) }}
              >
                You
              </span>
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

            {/* the Twin answers */}
            <span
              data-anim="reply"
              className="absolute opacity-0"
              style={{ left: u(135), top: u(96) }}
            >
              <span
                className="absolute grid place-items-center rounded-[5px] bg-[#2a2d36]"
                style={{ width: u(15), height: u(15) }}
              >
                <span
                  className="block text-white"
                  style={{ width: u(8), height: u(8) }}
                >
                  <LogoSymbol size={8} className="h-full w-full" />
                </span>
              </span>

              <span
                className="absolute bg-[#20242c]"
                style={{
                  left: u(20),
                  width: u(215),
                  paddingInline: u(9),
                  paddingBlock: u(8),
                  borderRadius: u(8),
                }}
              >
                <span
                  className="font-ui block font-semibold text-[#e8eaee]"
                  style={{ fontSize: u(7), marginBottom: u(3) }}
                >
                  Trainer’s Twin
                </span>
                {REPLY.map((line, i) => (
                  <span
                    key={i}
                    data-anim="reply-line"
                    className="font-ui block whitespace-pre text-[#c9cdd4]"
                    style={{ fontSize: u(7.5), lineHeight: u(11) }}
                  >
                    {line}
                  </span>
                ))}
                {RULES.map((line, i) => (
                  <span
                    key={i}
                    data-anim="rule-line"
                    className="font-ui block whitespace-pre text-[#c9cdd4]"
                    style={{
                      fontSize: u(7.5),
                      lineHeight: u(11),
                      paddingLeft: u(7),
                    }}
                  >
                    · {line}
                  </span>
                ))}
                <span data-anim="reply-tail" className="block opacity-0">
                  <span
                    className="font-mono block text-[#a78bfa]"
                    style={{ fontSize: u(7.5), lineHeight: u(12) }}
                  >
                    O(log n)
                  </span>
                  <span
                    className="font-ui block text-[#c9cdd4]"
                    style={{ fontSize: u(7.5), lineHeight: u(11) }}
                  >
                    Want a quick example?
                  </span>
                </span>
              </span>
            </span>

            {/* where the learner can go next */}
            <span
              className="absolute flex"
              style={{ left: u(135), top: u(250), gap: u(5) }}
            >
              {CHIPS.map((chip, i) => (
                <span
                  key={chip}
                  data-anim="chip"
                  className={`font-ui flex items-center rounded-full whitespace-nowrap opacity-0 ${
                    i === 0
                      ? "bg-[#2b2550] text-[#c7b8ff]"
                      : "bg-[#20242c] text-[#9aa0aa]"
                  }`}
                  style={{
                    height: u(14),
                    paddingInline: u(6),
                    fontSize: u(6.5),
                  }}
                >
                  {chip}
                </span>
              ))}
            </span>

            <span
              className="absolute flex items-center border border-[#2a2e38]"
              style={{
                left: u(135),
                top: u(270),
                width: u(235),
                height: u(22),
                paddingInline: u(9),
                borderRadius: u(11),
              }}
            >
              <span
                className="font-ui text-[#6b7280]"
                style={{ fontSize: u(7.5) }}
              >
                Ask your doubt...
              </span>
              <span
                className="ml-auto grid place-items-center rounded-full bg-[var(--l-brand)]"
                style={{ width: u(14), height: u(14) }}
              >
                <Glyph size={7} className="text-white">
                  <path d="M4 12h16M13 5l7 7-7 7" />
                </Glyph>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Glyph({
  size,
  className,
  children,
}: {
  size: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ width: u(size), height: u(size) }}
    >
      {children}
    </svg>
  );
}

function CopyFace({
  anim,
  tone,
  label,
  children,
}: {
  anim: string;
  tone: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <span
      data-anim={anim}
      className="absolute inset-0 flex items-center justify-center border border-[#e6e8ee] bg-white"
      style={{ gap: u(5), borderRadius: u(6), color: tone }}
    >
      <Glyph size={9}>{children}</Glyph>
      <span className="font-ui font-medium" style={{ fontSize: u(8.5) }}>
        {label}
      </span>
    </span>
  );
}
