"use client";

import { useEffect, useRef } from "react";
import { u } from "../primitives";
import {
  Bubble,
  createTimeline,
  Panel,
  playFloor,
  playHold,
  playTyping,
  Pointer,
  SessionShell,
  TWIN_GREEN,
} from "./parts";

/**
 * "Debugging" — a test fails, the Twin points at why, the test goes green.
 *
 * NO FIGMA SOURCE; composed from the vocabulary the four drawn scenes
 * established. See ReviewScene for the reasoning.
 *
 * The loop turns on one thing being visible twice: the run fails, and after the
 * Twin's nudge the same run passes. That red-to-green is the whole point of the
 * scenario, so it gets the last beat rather than the bubble.
 */

const FAILING = [
  "$ npm test",
  "",
  "● getDiscount › returns 0 for an empty cart",
  "",
  "  Expected: 0",
  "  Received: NaN",
  "",
  "  at getDiscount (discount.js:2:18)",
];

const HINT = [
  "reduce with no seed returns",
  "undefined on an empty array —",
  "NaN comes from the multiply.",
];

const LINE_H = 21;
const TOP = 92;
/** The stack-trace line the Twin lands on. */
const TRACE_ROW = 7;

export function DebugScene() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const { play, start, stop } = createTimeline(el);
    const uu = (n: number) => `calc(${n} * var(--l-u))`;
    const at = (x: number, y: number) => `translate(${uu(x)}, ${uu(y)})`;

    /* ------------------------------ 1. the run fails (3-26%)
       Console output is typed rather than faded in: a test run arrives a line
       at a time, and typing it is what makes it read as a run. */
    playTyping(play, "[data-anim='out-line']", FAILING, 0.03, 0.24);
    FAILING.forEach((_, i) => {
      const from = 0.03 + (i / FAILING.length) * 0.21;
      play(
        "[data-anim='out-row']",
        [
          { offset: 0, opacity: 0 },
          { offset: Math.max(0, from - 0.001), opacity: 0 },
          { offset: from, opacity: 1 },
          { offset: 0.86, opacity: 1 },
          { offset: 0.9, opacity: 0 },
          { offset: 1, opacity: 0 },
        ],
        i,
      );
    });

    playHold(play, "[data-anim='fail-badge']", 0.2, 0.87);

    /* --------------------------- 2. the Twin finds the line (30-44%) */
    play("[data-anim='pointer']", [
      { offset: 0, opacity: 0, transform: at(60, -70) },
      { offset: 0.3, opacity: 0, transform: at(60, -70) },
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
      { offset: 1, opacity: 0, transform: at(60, -70) },
    ]);

    play("[data-anim='trace-mark']", [
      { offset: 0, transform: "scaleX(0)" },
      { offset: 0.34, transform: "scaleX(0)" },
      {
        offset: 0.38,
        transform: "scaleX(1)",
        easing: "cubic-bezier(0.2, 0, 0, 1)",
      },
      { offset: 0.78, transform: "scaleX(1)" },
      { offset: 0.81, transform: "scaleX(0)" },
      { offset: 1, transform: "scaleX(0)" },
    ]);

    /* ---------------------------------- 3. the hint (42-76%) */
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
    playTyping(play, "[data-anim='bubble-line']", HINT, 0.5, 0.66);

    /* ------------------------- 4. the learner fixes it, the run goes green */
    playFloor(play, {
      learnerFrom: 0.03,
      learnerTo: 0.26,
      twinFrom: 0.35,
      twinTo: 0.755,
      answerFrom: 0.8,
      answerTo: 0.9,
    });

    play("[data-anim='pass']", [
      { offset: 0, opacity: 0, transform: "translateY(6px)" },
      { offset: 0.89, opacity: 0, transform: "translateY(6px)" },
      {
        offset: 0.92,
        opacity: 1,
        transform: "translateY(0)",
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      { offset: 0.975, opacity: 1, transform: "translateY(0)" },
      { offset: 0.995, opacity: 0, transform: "translateY(0)" },
      { offset: 1, opacity: 0, transform: "translateY(6px)" },
    ]);

    start();
    return stop;
  }, []);

  return (
    <SessionShell title="Debugging session" rootRef={root}>
      <Panel label="terminal">
        <span
          data-anim="fail-badge"
          className="font-ui absolute flex items-center bg-[#fbe0e2] font-semibold text-[#a3212a]"
          style={{
            right: u(12),
            top: u(9),
            height: u(17),
            paddingInline: u(8),
            borderRadius: u(9),
            fontSize: u(9),
          }}
        >
          1 failed
        </span>
      </Panel>

      {/* the underline the Twin draws under the stack-trace line */}
      <div
        data-anim="trace-mark"
        className="absolute origin-left bg-[#e5484d]"
        style={{
          left: u(52),
          top: u(TOP + TRACE_ROW * LINE_H + 15),
          width: u(214),
          height: u(1.5),
        }}
      />

      {FAILING.map((text, i) => (
        <div
          key={i}
          data-anim="out-row"
          className="absolute"
          style={{ left: u(52), top: u(TOP + i * LINE_H) }}
        >
          <span
            data-anim="out-line"
            className="font-mono block whitespace-pre"
            style={{
              fontSize: u(12),
              lineHeight: u(LINE_H),
              color:
                i === 2 ? "#a3212a" : i >= 4 && i <= 5 ? "#7a4a12" : "#3d4249",
            }}
          >
            {text}
          </span>
        </div>
      ))}

      {/* the same run, green */}
      <div
        data-anim="pass"
        className="absolute"
        style={{ left: u(52), top: u(TOP) }}
      >
        <span
          className="font-mono block whitespace-pre text-[#3d4249]"
          style={{ fontSize: u(12), lineHeight: u(LINE_H) }}
        >
          $ npm test
        </span>
        <span
          className="font-mono block whitespace-pre text-[#0a7a3c]"
          style={{ fontSize: u(12), lineHeight: u(LINE_H), marginTop: u(LINE_H) }}
        >
          ✓ getDiscount › returns 0 for an empty cart
        </span>
        <span
          className="font-mono block whitespace-pre text-[#0a7a3c]"
          style={{ fontSize: u(12), lineHeight: u(LINE_H) }}
        >
          {"  1 passed, 0 failed"}
        </span>
      </div>

      <div
        data-anim="pointer"
        className="absolute"
        style={{ left: u(250), top: u(TOP + TRACE_ROW * LINE_H + 18) }}
      >
        <Pointer label="Twin" colour={TWIN_GREEN} width={46} />
      </div>

      <Bubble left={148} top={266} width={232} height={92} lines={HINT} />
    </SessionShell>
  );
}
