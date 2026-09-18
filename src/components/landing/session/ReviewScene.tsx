"use client";

import { useEffect, useRef } from "react";
import { u } from "../primitives";
import {
  Bubble,
  createTimeline,
  LEARNER_BLUE,
  Panel,
  playFloor,
  playHold,
  playTyping,
  Pointer,
  SessionShell,
  TWIN_GREEN,
} from "./parts";

/**
 * "Code review" — the learner pushes a change, the Twin reviews the diff.
 *
 * NO FIGMA SOURCE. The interview, whiteboard, co-trainer and doubt scenes are
 * each drawn frame by frame in the file; this one is not. It is composed from
 * the vocabulary those four established — same shell, same cursors, same
 * bubble, same "who has the floor" borders — so it sits with them rather than
 * reading as a different product. Swap it for real frames when they exist.
 *
 * The beat that makes this scene its own is the verdict: the review opens on
 * "Changes requested" and lands on "Approved", which is the thing a review is
 * actually for.
 */

/** A unified diff. `sign` drives the gutter, the tint and the ink. */
const DIFF: Array<{ sign: " " | "-" | "+"; text: string }> = [
  { sign: " ", text: "function getDiscount(items) {" },
  { sign: "-", text: "  const total = items.reduce((a,b) => a + b.price);" },
  { sign: "+", text: "  if (!items.length) return 0;" },
  { sign: "+", text: "  const total = items.reduce((a,b) => a + b.price, 0);" },
  { sign: " ", text: "  return total * 0.9;" },
  { sign: " ", text: "}" },
];

const COMMENT = [
  "The seed fixes the empty cart.",
  "Does the guard still earn its place",
  "once reduce can’t throw?",
];

const LINE_H = 25;
const TOP = 96;

export function ReviewScene() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const { play, start, stop } = createTimeline(el);
    const uu = (n: number) => `calc(${n} * var(--l-u))`;
    const at = (x: number, y: number) => `translate(${uu(x)}, ${uu(y)})`;

    /* ----------------------------- 1. the change lands (4-26%)
       Diff rows arrive top to bottom; the two added lines slide in from the
       gutter so the change reads as something that just happened. */
    DIFF.forEach((row, i) => {
      const from = 0.04 + i * 0.035;
      const added = row.sign === "+";
      play(
        "[data-anim='diff-row']",
        [
          {
            offset: 0,
            opacity: 0,
            transform: added ? "translateX(-10px)" : "translateX(0)",
          },
          {
            offset: from,
            opacity: 0,
            transform: added ? "translateX(-10px)" : "translateX(0)",
          },
          {
            offset: from + 0.03,
            opacity: 1,
            transform: "translateX(0)",
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          },
          { offset: 0.95, opacity: 1, transform: "translateX(0)" },
          { offset: 0.985, opacity: 0, transform: "translateX(0)" },
          { offset: 1, opacity: 0, transform: "translateX(0)" },
        ],
        i,
      );
    });

    /* ------------------------ 2. the Twin reads the added line (30-44%) */
    play("[data-anim='pointer']", [
      { offset: 0, opacity: 0, transform: at(50, 60) },
      { offset: 0.3, opacity: 0, transform: at(50, 60) },
      {
        offset: 0.35,
        opacity: 1,
        transform: at(0, 0),
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      { offset: 0.5, opacity: 1, transform: at(5, -3) },
      { offset: 0.64, opacity: 1, transform: at(-4, 3) },
      { offset: 0.74, opacity: 1, transform: at(3, 4) },
      { offset: 0.775, opacity: 0, transform: at(3, 4) },
      { offset: 1, opacity: 0, transform: at(50, 60) },
    ]);

    // The row under review gets a ring rather than a fill: the row already
    // carries a tint for being an addition, and two fills would fight.
    play("[data-anim='review-ring']", [
      { offset: 0, opacity: 0 },
      { offset: 0.335, opacity: 0 },
      { offset: 0.37, opacity: 1 },
      { offset: 0.775, opacity: 1 },
      { offset: 0.8, opacity: 0 },
      { offset: 1, opacity: 0 },
    ]);

    /* -------------------------------- 3. the review comment (42-76%) */
    play("[data-anim='bubble']", [
      { offset: 0, opacity: 0, transform: "translateY(8px) scale(0.97)" },
      { offset: 0.42, opacity: 0, transform: "translateY(8px) scale(0.97)" },
      {
        offset: 0.46,
        opacity: 1,
        transform: "translateY(0) scale(1)",
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      { offset: 0.74, opacity: 1, transform: "translateY(0) scale(1)" },
      { offset: 0.775, opacity: 0, transform: "translateY(-6px) scale(0.98)" },
      { offset: 1, opacity: 0, transform: "translateY(8px) scale(0.97)" },
    ]);
    playHold(play, "[data-anim='bubble-label']", 0.465, 0.755);
    playTyping(play, "[data-anim='bubble-line']", COMMENT, 0.5, 0.66);

    /* --------------------------- 4. the learner answers, then the verdict */
    playFloor(play, {
      learnerFrom: 0.04,
      learnerTo: 0.26,
      twinFrom: 0.35,
      twinTo: 0.755,
      answerFrom: 0.8,
      answerTo: 0.93,
    });

    // "Changes requested" gives way to "Approved" once the learner has answered.
    play("[data-anim='verdict-open']", [
      { offset: 0, opacity: 0 },
      { offset: 0.06, opacity: 0 },
      { offset: 0.09, opacity: 1 },
      { offset: 0.88, opacity: 1 },
      { offset: 0.905, opacity: 0 },
      { offset: 1, opacity: 0 },
    ]);
    play("[data-anim='verdict-done']", [
      { offset: 0, opacity: 0, transform: "scale(0.9)" },
      { offset: 0.9, opacity: 0, transform: "scale(0.9)" },
      {
        offset: 0.925,
        opacity: 1,
        transform: "scale(1)",
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      { offset: 0.97, opacity: 1, transform: "scale(1)" },
      { offset: 0.99, opacity: 0, transform: "scale(1)" },
      { offset: 1, opacity: 0, transform: "scale(0.9)" },
    ]);

    start();
    return stop;
  }, []);

  return (
    <SessionShell title="Code review" rootRef={root}>
      <Panel label="cart / discount.js">
        {/* the verdict chip, top right of the panel */}
        <span
          data-anim="verdict-open"
          className="font-ui absolute flex items-center bg-[#fdf0dc] font-semibold text-[#8a5a10]"
          style={{
            right: u(12),
            top: u(9),
            height: u(17),
            paddingInline: u(8),
            borderRadius: u(9),
            fontSize: u(9),
          }}
        >
          Changes requested
        </span>
        <span
          data-anim="verdict-done"
          className="font-ui absolute flex items-center bg-[#dcf5e6] font-semibold text-[#0a7a3c]"
          style={{
            right: u(12),
            top: u(9),
            height: u(17),
            paddingInline: u(8),
            borderRadius: u(9),
            fontSize: u(9),
          }}
        >
          Approved
        </span>
      </Panel>

      {/* The ring marks the line under review. Drawn over the row's own tint. */}
      <div
        data-anim="review-ring"
        className="absolute border border-[#0aad51] bg-[#0aad51]/10"
        style={{
          left: u(52),
          top: u(TOP + 3 * LINE_H - 3),
          width: u(376),
          height: u(LINE_H - 2),
          borderRadius: u(4),
        }}
      />

      {DIFF.map((row, i) => {
        const tint =
          row.sign === "+" ? "#dff3e6" : row.sign === "-" ? "#fbe4e6" : undefined;
        const ink =
          row.sign === "+" ? "#0a7a3c" : row.sign === "-" ? "#a3212a" : "#242424";
        return (
          <div
            key={i}
            data-anim="diff-row"
            className="absolute flex items-center"
            style={{
              left: u(52),
              top: u(TOP + i * LINE_H - 3),
              width: u(376),
              height: u(LINE_H - 2),
              borderRadius: u(4),
              background: tint,
            }}
          >
            <span
              className="font-ui shrink-0 text-center"
              style={{ width: u(16), fontSize: u(13), color: ink }}
            >
              {row.sign.trim()}
            </span>
            <span
              className="font-ui whitespace-pre"
              style={{ fontSize: u(13.5), color: ink }}
            >
              {row.text}
            </span>
          </div>
        );
      })}

      <div
        data-anim="pointer"
        className="absolute"
        style={{ left: u(352), top: u(TOP + 3 * LINE_H + 6) }}
      >
        <Pointer label="Twin" colour={TWIN_GREEN} width={46} />
      </div>

      <Bubble left={150} top={248} width={228} height={92} lines={COMMENT} />

      {/* the learner's cursor sits on the diff while they push */}
      <div
        data-anim="learner-pointer"
        className="absolute opacity-0"
        style={{ left: u(300), top: u(TOP + 5 * LINE_H) }}
      >
        <Pointer label="Learner" colour={LEARNER_BLUE} width={62} />
      </div>
    </SessionShell>
  );
}
