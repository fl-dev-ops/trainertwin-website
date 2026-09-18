"use client";

import { useEffect, useRef } from "react";
import { LogoSymbol } from "@/components/Logo";
import { u } from "./primitives";
import { createTimeline, playTyping } from "./session/parts";

/**
 * "Embed in your website" — the panel in the How it works section, played as a
 * loop. Figma: SHXsv4d0ROls7tuOqQBNLZ node 393:12711, three frames.
 *
 *   1  Create New Chatbot — name it, write its greeting, pick a theme
 *   2  Embed Your Twin — one script tag, copied
 *   3  the site with the widget live on it
 *
 * The brief was "setup and see one chat response", so the third frame carries
 * an exchange the design does not draw: the greeting it does specify, then a
 * question and answer lifted from the 24/7 doubt screen. Reusing that copy
 * rather than inventing some keeps one Twin voice across the page.
 *
 * Same 307-wide card as the role-play panel — the two are alternatives in one
 * slot, and a width change between them would read as the panel resizing rather
 * than the step changing.
 */

const NAME = "TrainerTwin Assistant";
const WELCOME = ["Hi! I’m your TrainerTwin.", "How can I help you today?"];

const SWATCHES = ["#5b5bea", "#3b82f6", "#4ec99a", "#e8767c"];

/** Coloured as the design does: comment grey, attributes navy, values green. */
const CODE: Array<Array<{ t: string; c: string }>> = [
  [{ t: "<!-- TrainerTwin Chatbot -->", c: "#9aa4ad" }],
  [{ t: "<script", c: "#1e3a8a" }],
  [
    { t: "  src=", c: "#1e3a8a" },
    { t: '"https://cdn.trainertwin.ai/chatbot.js"', c: "#16803d" },
  ],
  [
    { t: "  data-chatbot-id=", c: "#1e3a8a" },
    { t: '"tt_your_chatbot_id"', c: "#16803d" },
  ],
  [{ t: "  defer>", c: "#5a6069" }],
  [{ t: "</script>", c: "#1e3a8a" }],
];

/** The exchange, borrowed from the 24/7 doubt screen. */
const ASK = "Why do we compare with mid in Binary Search?";
/* Three lines, and none wider than the widget's bubble: a fourth line pushes
   the bubble down into the composer, and a longer line gets clipped. */
const REPLY = [
  "We compare with the middle",
  "element to eliminate half of",
  "the search space each step.",
];

const CARD_H = 303;

/** The three the loop moves through, in step with the states below. */
const STEPS = ["Configure", "Embed", "Setup & Live"];

/**
 * Where each step takes over, matching the state it labels. A step stays lit
 * once reached, so the row reads as progress rather than as a spotlight.
 * `--l-brand` resolved, because a keyframe cannot carry a custom property.
 */
const STEP_FROM = [0, 0.32, 0.59];
const BRAND = "#fe5900";

export function WebEmbedPanel() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const { play, start, stop } = createTimeline(el);

    const state = (selector: string, from: number, to: number) =>
      play(selector, [
        { offset: 0, opacity: 0 },
        { offset: Math.max(0, from - 0.02), opacity: 0 },
        { offset: from, opacity: 1 },
        { offset: to, opacity: 1 },
        { offset: Math.min(1, to + 0.02), opacity: 0 },
        { offset: 1, opacity: 0 },
      ]);

    const press = (selector: string, at: number) =>
      play(selector, [
        { offset: 0, transform: "scale(1)" },
        { offset: at - 0.012, transform: "scale(1)" },
        { offset: at, transform: "scale(0.94)" },
        { offset: at + 0.015, transform: "scale(1)" },
        { offset: 1, transform: "scale(1)" },
      ]);

    const appear = (selector: string, from: number, to: number, i?: number) =>
      play(
        selector,
        [
          { offset: 0, opacity: 0, transform: "translateY(6px)" },
          { offset: from, opacity: 0, transform: "translateY(6px)" },
          {
            offset: from + 0.02,
            opacity: 1,
            transform: "translateY(0)",
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          },
          { offset: to, opacity: 1, transform: "translateY(0)" },
          {
            offset: Math.min(1, to + 0.015),
            opacity: 0,
            transform: "translateY(0)",
          },
          { offset: 1, opacity: 0, transform: "translateY(6px)" },
        ],
        i,
      );

    /* ------------------------------------- 1. create the chatbot (2-32%) */
    state("[data-anim='state-create']", 0.02, 0.315);
    playTyping(play, "[data-anim='name-value']", [NAME], 0.05, 0.13);
    playTyping(play, "[data-anim='welcome-line']", WELCOME, 0.16, 0.26);
    // The chosen swatch takes its selection ring once the copy is written.
    play("[data-anim='swatch-ring']", [
      { offset: 0, opacity: 0, transform: "scale(0.7)" },
      { offset: 0.275, opacity: 0, transform: "scale(0.7)" },
      {
        offset: 0.295,
        opacity: 1,
        transform: "scale(1)",
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      { offset: 0.315, opacity: 1, transform: "scale(1)" },
      { offset: 0.33, opacity: 0, transform: "scale(1)" },
      { offset: 1, opacity: 0, transform: "scale(0.7)" },
    ]);
    press("[data-anim='btn-save']", 0.305);

    /* -------------------------------------- 2. the embed code (34-58%) */
    state("[data-anim='state-embed']", 0.335, 0.575);
    CODE.forEach((_, i) =>
      appear("[data-anim='code-line']", 0.37 + i * 0.022, 0.56, i),
    );
    press("[data-anim='btn-copy']", 0.53);
    // "Copy" flips to "Copied" and stays until the state hands over.
    play("[data-anim='copy-idle']", [
      { offset: 0, opacity: 1 },
      { offset: 0.53, opacity: 1 },
      { offset: 0.545, opacity: 0 },
      { offset: 0.985, opacity: 0 },
      { offset: 1, opacity: 1 },
    ]);
    play("[data-anim='copy-done']", [
      { offset: 0, opacity: 0 },
      { offset: 0.53, opacity: 0 },
      { offset: 0.545, opacity: 1 },
      { offset: 0.985, opacity: 1 },
      { offset: 1, opacity: 0 },
    ]);

    /* --------------------------------- 3. live on the site (60-98%) */
    state("[data-anim='state-live']", 0.6, 0.975);
    play("[data-anim='widget']", [
      { offset: 0, opacity: 0, transform: "translateY(14px) scale(0.96)" },
      { offset: 0.615, opacity: 0, transform: "translateY(14px) scale(0.96)" },
      {
        offset: 0.655,
        opacity: 1,
        transform: "translateY(0) scale(1)",
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      { offset: 0.975, opacity: 1, transform: "translateY(0) scale(1)" },
      { offset: 1, opacity: 0, transform: "translateY(14px) scale(0.96)" },
    ]);

    appear("[data-anim='msg-greet']", 0.665, 0.97);

    // The visitor types in the widget, sends, and the Twin answers.
    playTyping(play, "[data-anim='ask-draft']", [ASK], 0.71, 0.79);
    play("[data-anim='composer-hint']", [
      { offset: 0, opacity: 1 },
      { offset: 0.708, opacity: 1 },
      { offset: 0.712, opacity: 0 },
      { offset: 0.8, opacity: 0 },
      { offset: 0.805, opacity: 1 },
      { offset: 1, opacity: 1 },
    ]);
    press("[data-anim='btn-send']", 0.8);
    appear("[data-anim='msg-ask']", 0.805, 0.97);
    appear("[data-anim='msg-reply']", 0.845, 0.97);
    playTyping(play, "[data-anim='reply-line']", REPLY, 0.865, 0.945);

    appear("[data-anim='all-set']", 0.93, 0.975);

    STEP_FROM.forEach((from, i) => {
      play(
        "[data-anim='step-dot']",
        [
          { offset: 0, background: "#e6e9ef", color: "#9aa0aa" },
          { offset: from, background: "#e6e9ef", color: "#9aa0aa" },
          { offset: from + 0.012, background: BRAND, color: "#ffffff" },
          { offset: 0.975, background: BRAND, color: "#ffffff" },
          { offset: 0.99, background: "#e6e9ef", color: "#9aa0aa" },
          { offset: 1, background: "#e6e9ef", color: "#9aa0aa" },
        ],
        i,
      );
      play(
        "[data-anim='step-label']",
        [
          { offset: 0, color: "#9aa0aa" },
          { offset: from, color: "#9aa0aa" },
          { offset: from + 0.012, color: "#242424" },
          { offset: 0.975, color: "#242424" },
          { offset: 0.99, color: "#9aa0aa" },
          { offset: 1, color: "#9aa0aa" },
        ],
        i,
      );
    });

    start();
    return stop;
  }, []);

  return (
    /* A card on the frame's ground rather than a window filling it, so it sits
       centred at the size the design draws it. The wrapper carries the same
       aspect as the panels that do fill the frame, so switching steps does not
       change the frame's height. */
    <div className="flex h-full w-full items-center justify-center">
      <div className="l-fit w-[58%]">
        <div
          ref={root}
          className="l-stage"
          style={{ ["--l-design" as string]: "307" }}
        >
          {/* Where the loop has got to, above the card the way the role-play
              panel puts its tabs. */}
          <div
            className="flex items-center justify-center"
            style={{ height: u(20), gap: u(9) }}
          >
            {STEPS.map((label, i) => (
              <span
                key={label}
                className="flex items-center"
                style={{ gap: u(9) }}
              >
                {i > 0 ? (
                  <span
                    className="block bg-[#dfe3ea]"
                    style={{ width: u(14), height: u(1) }}
                  />
                ) : null}
                <span
                  data-anim="step-dot"
                  className="font-ui grid place-items-center rounded-full font-semibold"
                  style={{
                    width: u(17),
                    height: u(17),
                    fontSize: u(9),
                    background: "#e6e9ef",
                    color: "#9aa0aa",
                  }}
                >
                  {i + 1}
                </span>
                <span
                  data-anim="step-label"
                  className="font-ui whitespace-nowrap"
                  style={{ fontSize: u(10), color: "#9aa0aa" }}
                >
                  {label}
                </span>
              </span>
            ))}
          </div>

          <div
            className="relative overflow-hidden bg-white"
            style={{
              marginTop: u(12),
              height: u(CARD_H),
              borderRadius: u(14),
              boxShadow: `0 ${u(6)} ${u(20)} rgba(23,35,60,0.07)`,
            }}
          >
            {/* ------------------------------------------ 1. create */}
            <div
              data-anim="state-create"
              className="absolute inset-0 flex flex-col"
              style={{ padding: u(20), gap: u(11) }}
            >
              <span
                className="font-ui font-bold text-[#242424]"
                style={{ fontSize: u(13) }}
              >
                Create New Chatbot
              </span>

              <EmbedField label="Chatbot Name" height={26}>
                <span
                  data-anim="name-value"
                  className="font-ui block whitespace-pre text-[#242424]"
                  style={{ fontSize: u(9.5), lineHeight: u(13) }}
                >
                  {NAME}
                </span>
              </EmbedField>

              <EmbedField label="Welcome Message" height={40}>
                {WELCOME.map((line, i) => (
                  <span
                    key={i}
                    data-anim="welcome-line"
                    className="font-ui block whitespace-pre text-[#242424]"
                    style={{ fontSize: u(9.5), lineHeight: u(13) }}
                  >
                    {line}
                  </span>
                ))}
              </EmbedField>

              <div className="flex flex-col" style={{ gap: u(7) }}>
                <span
                  className="font-ui text-[#6b7280]"
                  style={{ fontSize: u(10) }}
                >
                  Avatar &amp; Theme
                </span>
                <div className="flex items-center" style={{ gap: u(9) }}>
                  {SWATCHES.map((colour, i) => (
                    <span
                      key={colour}
                      className="relative grid place-items-center"
                      style={{ width: u(19), height: u(19) }}
                    >
                      {i === 0 ? (
                        <span
                          data-anim="swatch-ring"
                          className="absolute inset-0 rounded-full opacity-0"
                          style={{ boxShadow: `0 0 0 ${u(2)} #c3c3f5` }}
                        />
                      ) : null}
                      <span
                        className="rounded-full"
                        style={{
                          width: u(17),
                          height: u(17),
                          background: colour,
                        }}
                      />
                    </span>
                  ))}
                </div>
              </div>

              <button
                data-anim="btn-save"
                type="button"
                className="font-ui mt-auto ml-auto inline-flex items-center bg-[var(--l-accent)] font-semibold text-white"
                style={{
                  gap: u(5),
                  height: u(26),
                  paddingInline: u(12),
                  borderRadius: u(7),
                  fontSize: u(10),
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" style={{ width: u(11) }}>
                  <path
                    d="m5 12.5 4.5 4.5L19 7.5"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Save Chatbot
              </button>
            </div>

            {/* ------------------------------------------- 2. embed */}
            <div
              data-anim="state-embed"
              className="absolute inset-0 flex flex-col opacity-0"
              style={{ padding: u(20), gap: u(10) }}
            >
              <span
                className="font-ui font-bold text-[#242424]"
                style={{ fontSize: u(13) }}
              >
                Embed Your Twin
              </span>
              <span
                className="font-ui border-b-2 border-[#5b5bea] pb-[3px] font-semibold text-[#5b5bea]"
                style={{ width: "fit-content", fontSize: u(10.5) }}
              >
                Embed Code
              </span>
              <span
                className="font-ui text-[#5a6069]"
                style={{ fontSize: u(9.5), lineHeight: u(14) }}
              >
                Copy and paste this code before the{" "}
                <span
                  className="font-mono bg-[#eef2f8] text-[#3a4250]"
                  style={{
                    paddingInline: u(4),
                    borderRadius: u(3),
                    fontSize: u(8.5),
                  }}
                >
                  &lt;/body&gt;
                </span>{" "}
                tag on your website.
              </span>

              <div
                className="relative flex-1 border border-[#e6ebf2] bg-[#f6f8fb]"
                style={{ borderRadius: u(8), padding: u(11) }}
              >
                <span
                  data-anim="btn-copy"
                  className="font-ui absolute flex items-center border border-[#e0e5ed] bg-white font-semibold text-[#3a4250]"
                  style={{
                    right: u(9),
                    top: u(9),
                    gap: u(4),
                    height: u(19),
                    paddingInline: u(8),
                    borderRadius: u(5),
                    fontSize: u(9),
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" style={{ width: u(9) }}>
                    <rect
                      x="8"
                      y="8"
                      width="12"
                      height="12"
                      rx="2"
                      stroke="#3a4250"
                      strokeWidth="2"
                    />
                    <path
                      d="M16 5.5A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16"
                      stroke="#3a4250"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="relative">
                    <span data-anim="copy-idle">Copy</span>
                    <span
                      data-anim="copy-done"
                      className="absolute top-0 left-0 opacity-0"
                    >
                      Copied
                    </span>
                  </span>
                </span>

                {CODE.map((parts, i) => (
                  <span
                    key={i}
                    data-anim="code-line"
                    className="font-mono block whitespace-pre opacity-0"
                    style={{ fontSize: u(8.2), lineHeight: u(13) }}
                  >
                    {parts.map((part, j) => (
                      <span key={j} style={{ color: part.c }}>
                        {part.t}
                      </span>
                    ))}
                  </span>
                ))}
              </div>
            </div>

            {/* -------------------------------------------- 3. live */}
            <div
              data-anim="state-live"
              className="absolute inset-0 overflow-hidden bg-[#f6f8fa] opacity-0"
            >
              {/* the customer's own site, behind */}
              <span
                className="font-ui absolute flex items-center bg-[#e6eaef] font-semibold text-[#5a6069]"
                style={{
                  left: u(16),
                  top: u(16),
                  height: u(18),
                  paddingInline: u(9),
                  borderRadius: u(5),
                  fontSize: u(9),
                }}
              >
                LOGO
              </span>
              <div
                className="absolute flex"
                style={{ right: u(16), top: u(21), gap: u(11) }}
              >
                {["Home", "Courses", "About", "Contact"].map((item) => (
                  <span
                    key={item}
                    className="font-ui text-[#3a4250]"
                    style={{ fontSize: u(8.5) }}
                  >
                    {item}
                  </span>
                ))}
              </div>
              <span
                className="font-ui absolute font-semibold text-[#242424]"
                style={{ left: u(16), top: u(54), fontSize: u(13) }}
              >
                Welcome to our website
              </span>
              {[112, 96, 76].map((w, i) => (
                <span
                  key={i}
                  className="absolute rounded-full bg-[#e6eaef]"
                  style={{
                    left: u(16),
                    top: u(78 + i * 10),
                    width: u(w),
                    height: u(5),
                  }}
                />
              ))}
              <span
                className="font-ui absolute flex items-center border border-[#d6dce4] bg-white text-[#3a4250]"
                style={{
                  left: u(16),
                  top: u(118),
                  height: u(22),
                  paddingInline: u(10),
                  borderRadius: u(6),
                  fontSize: u(9),
                }}
              >
                Explore Courses
              </span>

              {/* the widget, in front */}
              <div
                data-anim="widget"
                className="absolute overflow-hidden bg-white opacity-0"
                style={{
                  right: u(12),
                  top: u(48),
                  width: u(168),
                  height: u(196),
                  borderRadius: u(9),
                  boxShadow: `0 ${u(8)} ${u(24)} rgba(23,35,60,0.18)`,
                }}
              >
                <div
                  className="flex items-center bg-[var(--l-accent)]"
                  style={{ height: u(28), paddingInline: u(9), gap: u(6) }}
                >
                  <span
                    className="grid shrink-0 place-items-center rounded-full bg-white/25"
                    style={{ width: u(16), height: u(16) }}
                  >
                    <span
                      className="block text-white"
                      style={{ width: u(9), height: u(9) }}
                    >
                      <LogoSymbol size={9} className="h-full w-full" />
                    </span>
                  </span>
                  <span
                    className="font-ui font-semibold text-white"
                    style={{ fontSize: u(9) }}
                  >
                    TrainerTwin Assistant
                  </span>
                  <span
                    className="font-ui ml-auto text-white/80"
                    style={{ fontSize: u(9) }}
                  >
                    &minus; &times;
                  </span>
                </div>

                <div
                  className="absolute inset-x-0 flex flex-col"
                  style={{ top: u(34), paddingInline: u(9), gap: u(6) }}
                >
                  <Bubble anim="msg-greet">
                    {WELCOME.map((line, i) => (
                      <span key={i} className="block whitespace-pre">
                        {line}
                      </span>
                    ))}
                  </Bubble>
                  <span
                    data-anim="msg-greet"
                    className="font-ui self-end text-[#8b8f96]"
                    style={{ fontSize: u(7) }}
                  >
                    10:30 AM
                  </span>

                  <Bubble anim="msg-ask" tone="ask">
                    <span className="block whitespace-pre">
                      Why do we compare with mid
                    </span>
                    <span className="block whitespace-pre">
                      in Binary Search?
                    </span>
                  </Bubble>

                  <Bubble anim="msg-reply">
                    {REPLY.map((line, i) => (
                      <span
                        key={i}
                        data-anim="reply-line"
                        className="block whitespace-pre"
                      >
                        {line}
                      </span>
                    ))}
                  </Bubble>
                </div>

                <div
                  className="absolute inset-x-0 bottom-0 flex items-center border-t border-[#eceff3]"
                  style={{ height: u(26), paddingInline: u(9), gap: u(6) }}
                >
                  <span className="relative flex-1 overflow-hidden">
                    <span
                      data-anim="composer-hint"
                      className="font-ui block text-[#a2a6ad]"
                      style={{ fontSize: u(8) }}
                    >
                      Type a message...
                    </span>
                    <span
                      data-anim="ask-draft"
                      className="font-ui absolute top-0 left-0 block whitespace-pre text-[#242424]"
                      style={{ fontSize: u(8) }}
                    >
                      {ASK}
                    </span>
                  </span>
                  <span data-anim="btn-send" className="block shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="#8b8f96"
                      style={{ width: u(10) }}
                    >
                      <path d="M3 20.5 22 12 3 3.5l4 8.5z" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* the confirmation strip */}
              <div
                data-anim="all-set"
                className="absolute inset-x-0 bottom-0 flex items-center bg-white opacity-0"
                style={{ height: u(38), paddingInline: u(16), gap: u(9) }}
              >
                <span
                  className="grid shrink-0 place-items-center rounded-full bg-[#22c55e]"
                  style={{ width: u(19), height: u(19) }}
                >
                  <svg viewBox="0 0 24 24" fill="none" style={{ width: u(11) }}>
                    <path
                      d="m5 12.5 4.5 4.5L19 7.5"
                      stroke="white"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span
                  className="font-ui font-semibold text-[#242424]"
                  style={{ fontSize: u(12) }}
                >
                  You&rsquo;re all set!
                </span>
                <span className="ml-auto" style={{ fontSize: u(13) }}>
                  🎉
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bubble({
  anim,
  tone,
  children,
}: {
  anim: string;
  tone?: "ask";
  children: React.ReactNode;
}) {
  const ask = tone === "ask";
  return (
    <span
      data-anim={anim}
      className="font-ui block opacity-0"
      style={{
        alignSelf: ask ? "flex-end" : "flex-start",
        maxWidth: u(132),
        padding: `${u(6)} ${u(8)}`,
        borderRadius: u(7),
        fontSize: u(8),
        lineHeight: u(11),
        background: ask ? "#e4e9fb" : "#e8eaed",
        color: "#242424",
      }}
    >
      {children}
    </span>
  );
}

function EmbedField({
  label,
  height,
  children,
}: {
  label: string;
  height: number;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col" style={{ gap: u(5) }}>
      <span className="font-ui text-[#6b7280]" style={{ fontSize: u(10) }}>
        {label}
      </span>
      <div
        className="overflow-hidden border border-[#dfe5ec] bg-[#f6f8fb]"
        style={{
          height: u(height),
          borderRadius: u(6),
          padding: `${u(6)} ${u(8)}`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
