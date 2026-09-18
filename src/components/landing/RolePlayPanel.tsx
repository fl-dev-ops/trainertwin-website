"use client";

import { useEffect, useRef } from "react";
import { MaskIcon, u } from "./primitives";
import { createTimeline, playTyping } from "./session/parts";

/**
 * "Build your Role Plays" — the panel in the How it works section, played as a
 * loop. Figma: SHXsv4d0ROls7tuOqQBNLZ node 383:12449, five frames.
 *
 *   1  the brief: a goal and the instructions behind it
 *   2  the questions the Twin generated from that brief
 *   3  the learner list, nobody picked yet
 *   4  everyone picked
 *   5  assigned
 *
 * The card's height is fixed and the five states are stacked inside it, so the
 * panel never resizes as the loop runs — a section this far down the page
 * should not push its own layout around while someone is reading past it.
 *
 * The tabs are real state here: "Build Role play" owns states 1-2 and "Assign"
 * owns 3-5, and the pill swaps when the flow crosses that line.
 */

const GOAL = "Understanding what the candidate actually worked on";

const INSTRUCTIONS = [
  "The interviewer should select important",
  "projects or experiences from the candidate’s",
  "resume and progressively drill down into them.",
  "The interviewer should progressively go deeper",
  "rather than asking disconnected questions.",
];

const QUESTIONS = [
  ["What was the project and what problem", "was it solving?"],
  ["What was the candidate’s specific role", "and responsibility?"],
  ["What exactly did the candidate build or", "contribute?"],
  ["What technologies and architectural", "decisions were involved?"],
];

const LEARNERS = ["Prateek", "Prateek", "Prateek", "Prateek"];

/** Scattered once, by hand, so the burst has no visible grid to it. */
const CONFETTI = [
  { x: 18, y: 12, s: 7, r: 24, c: "#f5169c" },
  { x: 42, y: 30, s: 5, r: -18, c: "#4a2ce0" },
  { x: 66, y: 8, s: 8, r: 40, c: "#ff8a1e" },
  { x: 96, y: 26, s: 5, r: 12, c: "#f5169c" },
  { x: 124, y: 6, s: 6, r: -32, c: "#4a2ce0" },
  { x: 150, y: 22, s: 4, r: 8, c: "#ff8a1e" },
  { x: 176, y: 10, s: 7, r: -24, c: "#f5169c" },
  { x: 204, y: 32, s: 5, r: 36, c: "#4a2ce0" },
  { x: 228, y: 8, s: 9, r: -12, c: "#ff8a1e" },
  { x: 252, y: 28, s: 6, r: 20, c: "#4a2ce0" },
  { x: 274, y: 14, s: 5, r: -40, c: "#f5169c" },
  { x: 292, y: 34, s: 7, r: 16, c: "#ff8a1e" },
  { x: 34, y: 52, s: 4, r: 0, c: "#ff8a1e" },
  { x: 108, y: 48, s: 5, r: 28, c: "#4a2ce0" },
  { x: 190, y: 54, s: 4, r: -20, c: "#f5169c" },
  { x: 262, y: 50, s: 6, r: 34, c: "#4a2ce0" },
];

const CARD_H = 303;

export function RolePlayPanel() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const { play, start, stop } = createTimeline(el);

    /** A state fades in over `from` and out again at `to`. */
    const state = (selector: string, from: number, to: number) =>
      play(selector, [
        { offset: 0, opacity: 0 },
        { offset: Math.max(0, from - 0.02), opacity: 0 },
        { offset: from, opacity: 1 },
        { offset: to, opacity: 1 },
        { offset: Math.min(1, to + 0.02), opacity: 0 },
        { offset: 1, opacity: 0 },
      ]);

    /** The press: a quick squash on the button that caused the next state. */
    const press = (selector: string, at: number) =>
      play(selector, [
        { offset: 0, transform: "scale(1)" },
        { offset: at - 0.012, transform: "scale(1)" },
        { offset: at, transform: "scale(0.94)" },
        { offset: at + 0.015, transform: "scale(1)" },
        { offset: 1, transform: "scale(1)" },
      ]);

    /* ------------------------------------- 1. the brief is written (2-46%) */
    state("[data-anim='state-form']", 0.02, 0.485);
    playTyping(play, "[data-anim='goal-value']", [GOAL], 0.05, 0.17);
    playTyping(play, "[data-anim='instr-line']", INSTRUCTIONS, 0.2, 0.44);
    press("[data-anim='btn-generate']", 0.47);

    /* --------------------------------- 2. the questions come back (50-70%) */
    state("[data-anim='state-questions']", 0.505, 0.715);
    QUESTIONS.forEach((lines, i) => {
      const from = 0.53 + i * 0.038;
      play(
        "[data-anim='question']",
        [
          { offset: 0, opacity: 0, transform: "translateY(5px)" },
          { offset: from, opacity: 0, transform: "translateY(5px)" },
          {
            offset: from + 0.028,
            opacity: 1,
            transform: "translateY(0)",
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          },
          { offset: 0.7, opacity: 1, transform: "translateY(0)" },
          { offset: 1, opacity: 0, transform: "translateY(5px)" },
        ],
        i,
      );
    });
    press("[data-anim='btn-save']", 0.7);

    /* ------------------------------- 3-4. the learners are picked (73-90%) */
    state("[data-anim='state-learners']", 0.735, 0.915);
    LEARNERS.forEach((_, i) => {
      const from = 0.78 + i * 0.026;
      play(
        "[data-anim='tick']",
        [
          { offset: 0, opacity: 0, transform: "scale(0.6)" },
          { offset: from, opacity: 0, transform: "scale(0.6)" },
          {
            offset: from + 0.018,
            opacity: 1,
            transform: "scale(1)",
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          },
          { offset: 0.91, opacity: 1, transform: "scale(1)" },
          { offset: 1, opacity: 0, transform: "scale(0.6)" },
        ],
        i,
      );
    });
    press("[data-anim='btn-assign']", 0.9);

    // The tab pill follows the flow rather than being decoration.
    play("[data-anim='tab-build']", [
      { offset: 0, opacity: 1 },
      { offset: 0.715, opacity: 1 },
      { offset: 0.735, opacity: 0 },
      { offset: 0.985, opacity: 0 },
      { offset: 1, opacity: 1 },
    ]);
    play("[data-anim='tab-assign']", [
      { offset: 0, opacity: 0 },
      { offset: 0.715, opacity: 0 },
      { offset: 0.735, opacity: 1 },
      { offset: 0.985, opacity: 1 },
      { offset: 1, opacity: 0 },
    ]);

    /* ------------------------------------------ 5. assigned (93-99%) */
    state("[data-anim='state-done']", 0.935, 0.985);
    CONFETTI.forEach((bit, i) => {
      const from = 0.935 + (i % 6) * 0.004;
      play(
        "[data-anim='confetti']",
        [
          {
            offset: 0,
            opacity: 0,
            transform: `translateY(${-bit.y - 20}px) rotate(0deg)`,
          },
          {
            offset: from,
            opacity: 0,
            transform: `translateY(${-bit.y - 20}px) rotate(0deg)`,
          },
          {
            offset: from + 0.02,
            opacity: 1,
            transform: `translateY(0) rotate(${bit.r}deg)`,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          },
          {
            offset: 0.985,
            opacity: 1,
            transform: `translateY(0) rotate(${bit.r}deg)`,
          },
          {
            offset: 1,
            opacity: 0,
            transform: `translateY(${-bit.y - 20}px) rotate(0deg)`,
          },
        ],
        i,
      );
    });

    start();
    return stop;
  }, []);

  return (
    /* The one step whose panel is a card on the frame's ground rather than a
       window filling it — its tabs sit outside the card — so it stays at the
       size the design draws it, centred, instead of bleeding to the edges.

       The wrapper carries the same aspect as the panels that do fill the
       frame, so switching steps does not change the frame's height. */
    <div className="flex h-full w-full items-center justify-center">
      <div className="l-fit w-[58%]">
        <div
          ref={root}
          className="l-stage"
          style={{ ["--l-design" as string]: "307" }}
        >
          {/* --------------------------------------------------------- tabs */}
          <div
            className="relative flex items-center"
            style={{ gap: u(13), height: u(27) }}
          >
            <Tab width={112} label="Build Role play" anim="tab-build" />
            <Tab width={56} label="Assign" anim="tab-assign" />
          </div>

          {/* --------------------------------------------------------- card */}
          <div
            className="relative overflow-hidden bg-white"
            style={{
              marginTop: u(12),
              height: u(CARD_H),
              borderRadius: u(14),
              boxShadow: `0 ${u(6)} ${u(20)} rgba(23,35,60,0.07)`,
            }}
          >
            {/* 1 — the brief */}
            <div
              data-anim="state-form"
              className="absolute inset-0 flex flex-col"
              style={{ padding: u(23), gap: u(20) }}
            >
              <Field label="Goal" height={46}>
                <span
                  data-anim="goal-value"
                  className="font-ui block whitespace-pre text-[#242424]"
                  style={{ fontSize: u(9), lineHeight: u(12) }}
                >
                  {GOAL}
                </span>
              </Field>
              <Field label="Specific Instructions" height={77}>
                {INSTRUCTIONS.map((line, i) => (
                  <span
                    key={i}
                    data-anim="instr-line"
                    className="font-ui block whitespace-pre text-[#242424]"
                    style={{ fontSize: u(9), lineHeight: u(12) }}
                  >
                    {line}
                  </span>
                ))}
              </Field>
              <PillButton anim="btn-generate" icon>
                Generate Questions
              </PillButton>
            </div>

            {/* 2 — what came back */}
            <div
              data-anim="state-questions"
              className="absolute inset-0 flex flex-col opacity-0"
              style={{ padding: u(23), gap: u(14) }}
            >
              <span
                className="font-ui font-semibold text-[#5f5f5f]"
                style={{ fontSize: u(11.4) }}
              >
                Generated Questions
              </span>
              <div
                className="flex-1 bg-[#f4f6f9]"
                style={{ borderRadius: u(8), padding: `${u(11)} ${u(12)}` }}
              >
                {QUESTIONS.map((lines, i) => (
                  <div
                    key={i}
                    data-anim="question"
                    className="flex opacity-0"
                    style={{ gap: u(7), marginBottom: u(8) }}
                  >
                    <span
                      className="shrink-0 rounded-full bg-[#8b8f96]"
                      style={{ width: u(3), height: u(3), marginTop: u(5) }}
                    />
                    <span className="block">
                      {lines.map((line, j) => (
                        <span
                          key={j}
                          className="font-ui block whitespace-pre text-[#242424]"
                          style={{ fontSize: u(9), lineHeight: u(12.5) }}
                        >
                          {line}
                        </span>
                      ))}
                    </span>
                  </div>
                ))}
              </div>
              <PillButton anim="btn-save" check>
                Save and Assign
              </PillButton>
            </div>

            {/* 3 + 4 — who gets it */}
            <div
              data-anim="state-learners"
              className="absolute inset-0 flex flex-col opacity-0"
              style={{ padding: u(23), gap: u(10) }}
            >
              <span
                className="font-ui font-semibold text-[#5f5f5f]"
                style={{ fontSize: u(11.4) }}
              >
                Learners
              </span>
              {LEARNERS.map((name, i) => (
                <div
                  key={i}
                  className="flex items-center border border-[#ececec] bg-white"
                  style={{
                    borderRadius: u(7),
                    padding: `${u(6)} ${u(10)}`,
                    boxShadow: `0 ${u(1)} ${u(2)} rgba(23,35,60,0.04)`,
                  }}
                >
                  <span className="block">
                    <span
                      className="font-ui block font-semibold text-[#242424]"
                      style={{ fontSize: u(9.5), lineHeight: u(12) }}
                    >
                      {name}
                    </span>
                    <span
                      className="font-ui block text-[#8b8f96]"
                      style={{ fontSize: u(8), lineHeight: u(11) }}
                    >
                      prateek@gmail.com
                    </span>
                  </span>
                  <span
                    className="relative ml-auto shrink-0 border border-[#c9cfd8]"
                    style={{
                      width: u(13),
                      height: u(13),
                      borderRadius: u(3.5),
                    }}
                  >
                    <span
                      data-anim="tick"
                      className="absolute inset-0 grid place-items-center bg-[#4a2ce0] opacity-0"
                      style={{ borderRadius: u(3) }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        style={{ width: u(9), height: u(9) }}
                      >
                        <path
                          d="m5 12.5 4.5 4.5L19 7.5"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </span>
                </div>
              ))}
              <PillButton anim="btn-assign">Assign</PillButton>
            </div>

            {/* 5 — assigned */}
            <div data-anim="state-done" className="absolute inset-0 opacity-0">
              {CONFETTI.map((bit, i) => (
                <span
                  key={i}
                  data-anim="confetti"
                  className="absolute opacity-0"
                  style={{
                    left: u(bit.x),
                    top: u(bit.y),
                    width: u(bit.s),
                    height: u(bit.s),
                    background: bit.c,
                    borderRadius: u(1),
                  }}
                />
              ))}
              <div
                className="absolute inset-x-0 flex flex-col items-center"
                style={{ top: u(96), gap: u(10) }}
              >
                <span
                  className="grid place-items-center rounded-full bg-[#ff8a1e]"
                  style={{ width: u(22), height: u(22) }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{ width: u(12), height: u(12) }}
                  >
                    <path
                      d="m5 12.5 4.5 4.5L19 7.5"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span
                  className="font-ui font-semibold text-[#242424]"
                  style={{ fontSize: u(11) }}
                >
                  Successfully assigned to 15 learners
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * One step in the flow. Both looks are stacked and the active one is faded in
 * over the top, because `border-style` cannot be animated between solid and
 * dashed — cross-fading two layers is what makes the swap possible at all.
 */
function Tab({
  width,
  label,
  anim,
}: {
  width: number;
  label: string;
  anim: string;
}) {
  return (
    <span className="relative" style={{ width: u(width), height: u(27) }}>
      <span
        className="font-ui absolute inset-0 flex items-center justify-center border border-dashed border-[#9aa4ad] bg-white font-semibold text-black"
        style={{ borderRadius: u(8), fontSize: u(11.4) }}
      >
        {label}
      </span>
      <span
        data-anim={anim}
        className="font-ui absolute inset-0 flex items-center justify-center border border-[#ff5a00] bg-white font-bold text-black"
        style={{ borderRadius: u(8), fontSize: u(11.4) }}
      >
        {label}
      </span>
    </span>
  );
}

function Field({
  label,
  height,
  children,
}: {
  label: string;
  height: number;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col" style={{ gap: u(6) }}>
      <span
        className="font-ui font-semibold text-[#5f5f5f]"
        style={{ fontSize: u(11.4) }}
      >
        {label}
      </span>
      <div
        className="overflow-hidden border border-[#dfe5ec] bg-[#eef2f8]"
        style={{
          height: u(height),
          borderRadius: u(9),
          padding: `${u(8)} ${u(10)}`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

function PillButton({
  anim,
  icon,
  check,
  children,
}: {
  anim: string;
  icon?: boolean;
  check?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      data-anim={anim}
      type="button"
      className="font-ui mx-auto inline-flex shrink-0 items-center justify-center bg-[var(--l-btn)] font-semibold text-white"
      style={{
        marginTop: "auto",
        gap: u(9),
        paddingInline: u(23),
        height: u(32),
        borderRadius: u(23),
        fontSize: u(11),
      }}
    >
      {icon ? (
        <MaskIcon src="/tt/ic-sparkles.svg" size={13} className="text-white" />
      ) : null}
      {check ? (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          style={{ width: u(13), height: u(13) }}
        >
          <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" />
          <path
            d="m8 12.2 2.8 2.8L16 9.8"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
      {children}
    </button>
  );
}
