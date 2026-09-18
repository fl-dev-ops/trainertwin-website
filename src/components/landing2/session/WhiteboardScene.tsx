"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { u } from "../primitives";
import {
  Bubble,
  createTimeline,
  HIDDEN,
  LEARNER_BLUE,
  PanelDots,
  playFloor,
  Pointer,
  SessionShell,
  SHOWN,
  TWIN_GREEN,
} from "./parts";

/**
 * "System design" — the whiteboard session.
 * Figma: SHXsv4d0ROls7tuOqQBNLZ node 376:12032, frames 001-004.
 *
 *   001  the diagram is half drawn, a white cover over everything right of x=201
 *   002  the diagram is complete, the learner's cursor still on the board
 *   003  the Twin's cursor takes over and its question appears
 *   004  the learner's cursor moves left and they answer
 *
 * The difference between 001 and 002 is the cover, so "the learner draws" is
 * that cover retracting: it is anchored to its right edge and scales to nothing,
 * which uncovers the board left to right in the order the diagram flows. The
 * same track run backwards at the end of the lap wipes the board for the next
 * one.
 *
 * The resting markup is frame 003 — the most complete one — so that is what
 * renders server-side and what stays under reduced motion.
 */

/** The whiteboard raster, and the region the cover hides in frame 001. */
const BOARD = { left: 34, top: 78, width: 403, height: 295 };
const COVER = { left: 201, top: 88, width: 230, height: 248 };

/** Both cursors rest here; the learner moves off to the left to answer. */
const CURSOR = { left: 374, top: 283 };
const ANSWER_OFFSET = { x: 144 - CURSOR.left, y: 233 - CURSOR.top };

const QUESTION = ["How will you generate short code"];

const DRAW_FROM = 0.045;
const DRAW_TO = 0.24;

export function WhiteboardScene() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const { play, start, stop } = createTimeline(el);

    // Offsets travel in the stage's own unit so the cursor paths follow the
    // column when it resizes, rather than being pinned to mount-time pixels.
    const uu = (n: number) => `calc(${n} * var(--l-u))`;
    const at = (x: number, y: number) => `translate(${uu(x)}, ${uu(y)})`;

    /* ------------------------------------- 1. the learner draws (4.5-24%) */
    play("[data-anim='cover']", [
      { offset: 0, transform: "scaleX(1)" },
      { offset: DRAW_FROM, transform: "scaleX(1)" },
      {
        offset: DRAW_TO,
        transform: "scaleX(0)",
        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      { offset: 0.94, transform: "scaleX(0)" },
      { offset: 0.99, transform: "scaleX(1)" },
      { offset: 1, transform: "scaleX(1)" },
    ]);

    // The learner's cursor works its way across the board and settles where the
    // design parks it, then returns on the left to answer.
    play("[data-anim='learner-pointer']", [
      { offset: 0, opacity: 0, transform: at(-150, 12) },
      { offset: DRAW_FROM, opacity: 1, transform: at(-150, 12) },
      { offset: 0.1, opacity: 1, transform: at(-96, -30) },
      { offset: 0.16, opacity: 1, transform: at(-44, 22) },
      {
        offset: DRAW_TO,
        opacity: 1,
        transform: at(0, 0),
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      { offset: 0.33, opacity: 1, transform: at(0, 0) },
      { offset: 0.355, opacity: 0, transform: at(0, 0) },
      {
        offset: 0.78,
        opacity: 0,
        transform: at(ANSWER_OFFSET.x, ANSWER_OFFSET.y),
      },
      {
        offset: 0.805,
        opacity: 1,
        transform: at(ANSWER_OFFSET.x, ANSWER_OFFSET.y),
      },
      {
        offset: 0.93,
        opacity: 1,
        transform: at(ANSWER_OFFSET.x, ANSWER_OFFSET.y),
      },
      {
        offset: 0.95,
        opacity: 0,
        transform: at(ANSWER_OFFSET.x, ANSWER_OFFSET.y),
      },
      { offset: 1, opacity: 0, transform: at(-150, 12) },
    ]);

    /* --------------------------------------- 2. the Twin asks (34.5-76%) */
    play("[data-anim='pointer']", [
      { offset: 0, opacity: 0, transform: at(42, 40) },
      { offset: 0.345, opacity: 0, transform: at(42, 40) },
      {
        offset: 0.395,
        opacity: 1,
        transform: at(0, 0),
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      { offset: 0.5, opacity: 1, transform: at(6, -4) },
      { offset: 0.62, opacity: 1, transform: at(-5, 3) },
      { offset: 0.73, opacity: 1, transform: at(3, 5) },
      { offset: 0.765, opacity: 0, transform: at(3, 5) },
      { offset: 1, opacity: 0, transform: at(42, 40) },
    ]);

    play("[data-anim='bubble']", [
      { offset: 0, opacity: 0, transform: "translateY(8px) scale(0.97)" },
      { offset: 0.415, opacity: 0, transform: "translateY(8px) scale(0.97)" },
      {
        offset: 0.455,
        opacity: 1,
        transform: "translateY(0) scale(1)",
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      { offset: 0.74, opacity: 1, transform: "translateY(0) scale(1)" },
      { offset: 0.775, opacity: 0, transform: "translateY(-6px) scale(0.98)" },
      { offset: 1, opacity: 0, transform: "translateY(8px) scale(0.97)" },
    ]);

    play("[data-anim='bubble-label']", [
      { offset: 0, opacity: 0 },
      { offset: 0.46, opacity: 0 },
      { offset: 0.48, opacity: 1 },
      { offset: 0.755, opacity: 1 },
      { offset: 0.775, opacity: 0 },
      { offset: 1, opacity: 0 },
    ]);

    QUESTION.forEach((text, i) => {
      const from = 0.49 + i * 0.06;
      const to = from + 0.055;
      play(
        "[data-anim='bubble-line']",
        [
          { offset: 0, clipPath: HIDDEN, easing: "linear" },
          { offset: from, clipPath: HIDDEN, easing: `steps(${text.length})` },
          { offset: to, clipPath: SHOWN },
          { offset: 1, clipPath: SHOWN },
        ],
        i,
      );
    });

    /* ------------------------------------------------- who has the floor */
    playFloor(play, {
      learnerFrom: DRAW_FROM,
      learnerTo: DRAW_TO,
      twinFrom: 0.395,
      twinTo: 0.755,
      answerFrom: 0.805,
      answerTo: 0.93,
    });

    start();
    return stop;
  }, []);

  return (
    <SessionShell title="System Design Interview" rootRef={root}>
      {/* ------------------------------------------------- whiteboard panel */}
      <div
        className="absolute border border-[var(--tt-neutral-200)] bg-[var(--tt-neutral-200)]"
        style={{
          left: u(28),
          // Matches the shared Panel: 8 clear of the title above it.
          top: u(48),
          width: u(417),
          height: u(330),
          borderRadius: u(12),
        }}
      >
        <PanelDots label="Whiteboard" />
      </div>

      <Image
        src="/tt/whiteboard.webp"
        alt=""
        width={806}
        height={590}
        className="absolute"
        style={{
          left: u(BOARD.left),
          top: u(BOARD.top),
          width: u(BOARD.width),
          height: u(BOARD.height),
          borderRadius: u(12),
        }}
      />

      {/* The cover is the board's own white, so retracting it reads as ink
          appearing rather than as a panel sliding away. Base state is retracted
          — the resting frame is 003, with the diagram complete. */}
      <div
        data-anim="cover"
        className="absolute origin-right bg-white"
        style={{
          left: u(COVER.left),
          top: u(COVER.top),
          width: u(COVER.width),
          height: u(COVER.height),
          transform: "scaleX(0)",
        }}
      />

      <div
        data-anim="learner-pointer"
        className="absolute opacity-0"
        style={{ left: u(CURSOR.left), top: u(CURSOR.top) }}
      >
        <Pointer label="Learner" colour={LEARNER_BLUE} width={62} />
      </div>

      <div
        data-anim="pointer"
        className="absolute"
        style={{ left: u(CURSOR.left), top: u(CURSOR.top) }}
      >
        <Pointer label="Twin" colour={TWIN_GREEN} width={46} />
      </div>

      <Bubble left={200} top={221} width={196} height={58} lines={QUESTION} />
    </SessionShell>
  );
}
