"use client";

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
 * "Technical interview" — the code-review session.
 * Figma: SHXsv4d0ROls7tuOqQBNLZ node 374:11948, frames 001-004.
 *
 *   001  empty editor, the Twin asking for code
 *   002  the learner has typed the function
 *   003  the Twin highlights line 2, its cursor arrives, the question appears
 *   004  the bubble clears and the learner answers
 *
 * The resting markup is frame 003 — the most complete one. That is what renders
 * server-side, what shows before hydration, and what stays under reduced
 * motion. The timeline only animates away from it.
 */

const CODE = [
  "function getDiscount(items) {",
  "  const total = items.reduce((a,b) => a + b.price, 0);",
  "  return total * 0.9; // flat discount",
  "}",
];

const QUESTION = [
  "What happens when items is empty",
  "does reduce throw here without a seed",
  "check?",
];

const TYPE_FROM = 0.11;
const TYPE_TO = 0.32;
const LINE_H = 25;

export function CodeReviewScene() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const { play, start, stop } = createTimeline(el);

    /* ------------------------------------------------------ measure the code
       The caret and the learner's cursor sit at the end of the text as it
       appears, so the real rendered width of each line is needed — Figtree is
       proportional, so `ch` units would be a guess. Widths are converted back
       into design units and emitted as `calc(n * var(--l-u))`, the unit the
       stage lays itself out in, so the path follows a resize instead of being
       pinned to the pixels that happened to apply on mount. */
    const scale = el.getBoundingClientRect().width / 591 || 1;
    const lineWidths = Array.from(
      el.querySelectorAll<HTMLElement>("[data-anim='code-text']"),
    ).map((node) => node.getBoundingClientRect().width / scale);
    const uu = (n: number) => `calc(${n.toFixed(2)} * var(--l-u))`;

    /* ---------------------------------------------- 1. the Twin asks (0-10%) */
    play("[data-anim='twin-wave']", [
      { offset: 0, opacity: 0 },
      { offset: 0.015, opacity: 1 },
      { offset: 0.085, opacity: 1 },
      { offset: 0.1, opacity: 0 },
      { offset: 1, opacity: 0 },
    ]);

    /* ------------------------------------- 2. the learner types code (11-32%)
       Each line gets a slice of the window proportional to its length, so the
       caret moves at a steady speed instead of racing the long line and
       crawling through `}`. */
    const totalChars = CODE.reduce((sum, l) => sum + l.length, 0);
    const slots = CODE.map((line, i) => {
      const before = CODE.slice(0, i).reduce((s, l) => s + l.length, 0);
      const span = TYPE_TO - TYPE_FROM;
      return {
        start: TYPE_FROM + (before / totalChars) * span,
        end: TYPE_FROM + ((before + line.length) / totalChars) * span,
      };
    });

    CODE.forEach((line, i) => {
      const { start: from, end: to } = slots[i];

      play(
        "[data-anim='code-clip']",
        [
          { offset: 0, width: "0px", easing: "linear" },
          { offset: from, width: "0px", easing: `steps(${line.length})` },
          { offset: to, width: uu(lineWidths[i] ?? 0) },
          { offset: 0.93, width: uu(lineWidths[i] ?? 0) },
          { offset: 0.965, width: "0px" },
          { offset: 1, width: "0px" },
        ],
        i,
      );

      play(
        "[data-anim='code-row']",
        [
          { offset: 0, opacity: 0 },
          { offset: Math.max(0, from - 0.001), opacity: 0 },
          { offset: from, opacity: 1 },
          { offset: 0.93, opacity: 1 },
          { offset: 0.97, opacity: 0 },
          { offset: 1, opacity: 0 },
        ],
        i,
      );
    });

    /* ------------------------------------------------- the typing path
       Caret and learner cursor walk the same route: along each line to its end,
       then a quick diagonal back to the start of the next — a carriage return.
       Line-boundary keyframes are held a hair apart so offsets stay strictly
       increasing. */
    const path: Keyframe[] = [
      { offset: 0, transform: "translate(0px, 0px)" },
      {
        offset: Math.max(0, TYPE_FROM - 0.001),
        transform: "translate(0px, 0px)",
      },
    ];
    slots.forEach(({ start: from, end: to }, i) => {
      const y = uu(i * LINE_H);
      const last = path[path.length - 1]?.offset;
      path.push({
        offset: last === from ? from + 0.0008 : from,
        transform: `translate(0px, ${y})`,
      });
      path.push({
        offset: to,
        transform: `translate(${uu(lineWidths[i] ?? 0)}, ${y})`,
      });
    });
    path.push({
      offset: 1,
      transform: `translate(${uu(lineWidths[CODE.length - 1] ?? 0)}, ${uu((CODE.length - 1) * LINE_H)})`,
    });

    const whileTyping = (fadeOut: number): Keyframe[] => [
      { offset: 0, opacity: 0 },
      { offset: Math.max(0, TYPE_FROM - 0.008), opacity: 0 },
      { offset: TYPE_FROM, opacity: 1 },
      { offset: TYPE_TO, opacity: 1 },
      { offset: fadeOut, opacity: 0 },
      { offset: 1, opacity: 0 },
    ];

    play("[data-anim='caret-track']", path);
    play("[data-anim='caret']", whileTyping(0.33));
    play("[data-anim='learner-pointer-track']", path);
    play("[data-anim='learner-pointer']", whileTyping(0.335));

    /* ------------------------------------- 3. the Twin reviews line 2 (32-44%) */
    play("[data-anim='pointer']", [
      { offset: 0, opacity: 0, transform: "translate(46px, 54px)" },
      { offset: 0.335, opacity: 0, transform: "translate(46px, 54px)" },
      {
        offset: 0.385,
        opacity: 1,
        transform: "translate(0px, 0px)",
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      { offset: 0.48, opacity: 1, transform: "translate(5px, -3px)" },
      { offset: 0.6, opacity: 1, transform: "translate(-4px, 2px)" },
      { offset: 0.72, opacity: 1, transform: "translate(2px, 4px)" },
      { offset: 0.76, opacity: 0, transform: "translate(2px, 4px)" },
      { offset: 1, opacity: 0, transform: "translate(46px, 54px)" },
    ]);

    play("[data-anim='highlight']", [
      { offset: 0, transform: "scaleX(0)", opacity: 1 },
      { offset: 0.355, transform: "scaleX(0)", opacity: 1 },
      {
        offset: 0.4,
        transform: "scaleX(1)",
        opacity: 1,
        easing: "cubic-bezier(0.2, 0, 0, 1)",
      },
      { offset: 0.76, transform: "scaleX(1)", opacity: 1 },
      { offset: 0.79, transform: "scaleX(1)", opacity: 0 },
      { offset: 1, transform: "scaleX(0)", opacity: 0 },
    ]);

    // Line 2 sits on the green bar once it lands, so its ink flips to white.
    play(
      "[data-anim='code-text']",
      [
        { offset: 0, color: "var(--tt-neutral-800)" },
        { offset: 0.365, color: "var(--tt-neutral-800)" },
        { offset: 0.4, color: "var(--tt-neutral-0)" },
        { offset: 0.77, color: "var(--tt-neutral-0)" },
        { offset: 0.79, color: "var(--tt-neutral-800)" },
        { offset: 1, color: "var(--tt-neutral-800)" },
      ],
      1,
    );

    /* ------------------------------------------ 4. the question (40-76%) */
    play("[data-anim='bubble']", [
      { offset: 0, opacity: 0, transform: "translateY(8px) scale(0.97)" },
      { offset: 0.41, opacity: 0, transform: "translateY(8px) scale(0.97)" },
      {
        offset: 0.45,
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
      { offset: 0.455, opacity: 0 },
      { offset: 0.475, opacity: 1 },
      { offset: 0.755, opacity: 1 },
      { offset: 0.775, opacity: 0 },
      { offset: 1, opacity: 0 },
    ]);

    let line = 0.485;
    QUESTION.forEach((text, i) => {
      const from = line;
      const to = from + 0.05;
      line = to + 0.005;
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
      learnerFrom: TYPE_FROM,
      learnerTo: TYPE_TO,
      twinFrom: 0.385,
      twinTo: 0.755,
      answerFrom: 0.8,
      answerTo: 0.93,
    });

    start();
    return stop;
  }, []);

  return (
    <SessionShell title="Code Review" rootRef={root}>
      {/* ------------------------------------------------------ editor */}
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
        <PanelDots />
      </div>

      {/* The bar sits under the code and grows from its left edge, so the sweep
          reads as the Twin dragging a selection across the line. */}
      <div
        data-anim="highlight"
        className="absolute origin-left bg-[var(--tt-green-500)]"
        style={{ left: u(66), top: u(114), width: u(334), height: u(25) }}
      />

      {CODE.map((text, i) => (
        <div
          key={i}
          data-anim="code-row"
          className="absolute"
          style={{ left: u(42), top: u(89 + i * LINE_H) }}
        >
          <span
            className="font-ui absolute text-[var(--tt-neutral-800)]"
            style={{ fontSize: u(14), lineHeight: u(LINE_H) }}
          >
            {i + 1}
          </span>
          {/* The wrapper's width is what gets typed; clipping here rather than
              on the text is what lets the caret ride its right edge. */}
          <span
            data-anim="code-clip"
            className="absolute block overflow-hidden"
            style={{ left: u(24), width: "max-content" }}
          >
            <span
              data-anim="code-text"
              className="font-ui block w-max whitespace-pre text-[var(--tt-neutral-800)]"
              style={{ fontSize: u(14), lineHeight: u(LINE_H) }}
            >
              {text}
            </span>
          </span>
        </div>
      ))}

      <span
        data-anim="caret-track"
        className="absolute"
        style={{ left: u(66), top: u(93) }}
      >
        <span data-anim="caret" className="block opacity-0">
          <span
            className="l-caret block bg-[var(--tt-neutral-800)]"
            style={{ width: u(1.5), height: u(17) }}
          />
        </span>
      </span>

      <span
        data-anim="learner-pointer-track"
        className="absolute"
        style={{ left: u(66), top: u(98) }}
      >
        <span data-anim="learner-pointer" className="block opacity-0">
          <Pointer label="Learner" colour={LEARNER_BLUE} width={62} />
        </span>
      </span>

      <div
        data-anim="pointer"
        className="absolute"
        style={{ left: u(327), top: u(145) }}
      >
        <Pointer label="Twin" colour={TWIN_GREEN} width={46} />
      </div>

      <Bubble left={155} top={187} width={221} height={91} lines={QUESTION} />
    </SessionShell>
  );
}
