"use client";

import { useEffect, useRef } from "react";
import { u } from "../primitives";
import {
  createTimeline,
  Panel,
  playFloor,
  playHold,
  playTyping,
  SessionShell,
} from "./parts";

/**
 * "1:1 Coaching" — the session ends and the Twin gives the learner their read.
 *
 * NO FIGMA SOURCE; composed from the vocabulary the four drawn scenes
 * established. See ReviewScene for the reasoning.
 *
 * The other scenes animate an exchange. This one animates a judgement: bars
 * grow to where the learner actually landed, and the note underneath explains
 * the one that did not move much. Growing the bars is the point — a static
 * chart would say the same thing without saying it happened.
 */

const SKILLS = [
  { label: "Problem solving", pct: 0.72, tone: "#0aad51" },
  { label: "Communication", pct: 0.58, tone: "#1474ea" },
  { label: "Trade-off framing", pct: 0.34, tone: "#e08a1e" },
];

const NOTE = [
  "You reach a working answer quickly, then explain it",
  "backwards. Next session: say the trade-off out loud",
  "before you pick — even one sentence.",
];

const BAR = { left: 176, width: 240, height: 8 };
const ROW_TOP = 108;
const ROW_H = 46;

export function CoachingScene() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const { play, start, stop } = createTimeline(el);

    /* ------------------------------- 1. the read comes in (6-40%)
       Each bar grows from nothing to its mark. They are staggered so the eye
       reads them in order rather than seeing one block move. */
    SKILLS.forEach((skill, i) => {
      const from = 0.06 + i * 0.1;
      play(
        "[data-anim='skill-row']",
        [
          { offset: 0, opacity: 0, transform: "translateY(8px)" },
          { offset: from, opacity: 0, transform: "translateY(8px)" },
          {
            offset: from + 0.035,
            opacity: 1,
            transform: "translateY(0)",
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          },
          { offset: 0.95, opacity: 1, transform: "translateY(0)" },
          { offset: 0.985, opacity: 0, transform: "translateY(0)" },
          { offset: 1, opacity: 0, transform: "translateY(8px)" },
        ],
        i,
      );

      play(
        "[data-anim='skill-fill']",
        [
          { offset: 0, transform: "scaleX(0)" },
          { offset: from + 0.02, transform: "scaleX(0)" },
          {
            offset: from + 0.12,
            transform: `scaleX(${skill.pct})`,
            easing: "cubic-bezier(0.2, 0, 0, 1)",
          },
          { offset: 0.95, transform: `scaleX(${skill.pct})` },
          { offset: 1, transform: "scaleX(0)" },
        ],
        i,
      );

      // The number counts with the bar rather than being there from the start.
      play(
        "[data-anim='skill-pct']",
        [
          { offset: 0, opacity: 0 },
          { offset: from + 0.1, opacity: 0 },
          { offset: from + 0.13, opacity: 1 },
          { offset: 0.95, opacity: 1 },
          { offset: 0.985, opacity: 0 },
          { offset: 1, opacity: 0 },
        ],
        i,
      );
    });

    /* --------------------------- 2. the Twin's note (44-80%) */
    playHold(play, "[data-anim='note-head']", 0.44, 0.95);
    playTyping(play, "[data-anim='note-line']", NOTE, 0.48, 0.78);

    /* --------------------------- 3. what to work on next (82%) */
    play("[data-anim='focus']", [
      { offset: 0, opacity: 0, transform: "scale(0.92)" },
      { offset: 0.82, opacity: 0, transform: "scale(0.92)" },
      {
        offset: 0.855,
        opacity: 1,
        transform: "scale(1)",
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      { offset: 0.95, opacity: 1, transform: "scale(1)" },
      { offset: 0.985, opacity: 0, transform: "scale(1)" },
      { offset: 1, opacity: 0, transform: "scale(0.92)" },
    ]);

    /* ------------------------------------------- who has the floor */
    playFloor(play, {
      learnerFrom: 0.06,
      learnerTo: 0.4,
      twinFrom: 0.44,
      twinTo: 0.8,
      answerFrom: 0.85,
      answerTo: 0.95,
    });

    start();
    return stop;
  }, []);

  return (
    <SessionShell title="1:1 coaching" rootRef={root}>
      <Panel label="This week" />

      {SKILLS.map((skill, i) => (
        <div
          key={skill.label}
          data-anim="skill-row"
          className="absolute flex items-center"
          style={{ left: u(52), top: u(ROW_TOP + i * ROW_H), width: u(376) }}
        >
          <span
            className="font-ui shrink-0 text-[#242424]"
            style={{ width: u(120), fontSize: u(12) }}
          >
            {skill.label}
          </span>
          <span
            className="relative overflow-hidden bg-[#d3dbe4]"
            style={{
              width: u(BAR.width),
              height: u(BAR.height),
              borderRadius: u(BAR.height / 2),
            }}
          >
            <span
              data-anim="skill-fill"
              className="absolute inset-0 origin-left"
              style={{
                background: skill.tone,
                borderRadius: u(BAR.height / 2),
              }}
            />
          </span>
          <span
            data-anim="skill-pct"
            className="font-mono ml-auto shrink-0 text-right text-[#5a6069] tabular-nums"
            style={{ fontSize: u(11) }}
          >
            {Math.round(skill.pct * 100)}%
          </span>
        </div>
      ))}

      {/* the Twin's note */}
      <div
        className="absolute"
        style={{ left: u(52), top: u(ROW_TOP + SKILLS.length * ROW_H + 18) }}
      >
        <span
          data-anim="note-head"
          className="font-ui block font-semibold text-[#242424]"
          style={{ fontSize: u(12), marginBottom: u(6) }}
        >
          What your Twin noticed
        </span>
        {NOTE.map((line, i) => (
          <span
            key={i}
            data-anim="note-line"
            className="font-ui block whitespace-pre text-[#5a6069]"
            style={{ fontSize: u(11), lineHeight: u(17) }}
          >
            {line}
          </span>
        ))}
      </div>

      <span
        data-anim="focus"
        className="font-ui absolute flex items-center bg-[#fdf0dc] font-semibold text-[#8a5a10]"
        style={{
          left: u(52),
          top: u(344),
          height: u(20),
          paddingInline: u(10),
          borderRadius: u(10),
          fontSize: u(10),
        }}
      >
        Focus next · trade-off framing
      </span>
    </SessionShell>
  );
}
