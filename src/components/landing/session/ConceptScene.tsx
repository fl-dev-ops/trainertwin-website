"use client";

import { useEffect, useRef } from "react";
import { LogoSymbol } from "@/components/Logo";
import { u } from "../primitives";
import {
  createTimeline,
  LEARNER_BLUE,
  Panel,
  playFloor,
  playHold,
  playTyping,
  SessionShell,
} from "./parts";

/**
 * "Concept explanation" — the learner asks why something works, the Twin builds
 * the answer a step at a time instead of dumping it.
 *
 * NO FIGMA SOURCE; composed from the vocabulary the four drawn scenes
 * established. See ReviewScene for the reasoning.
 *
 * This is the one scene with no cursor in it. Nobody is pointing at code here —
 * the exchange is spoken, so the turn is carried by the card borders and the
 * waveforms alone, and the panel is the explanation itself.
 */

const ASK = "Why does the inner function still see count?";

const STEPS = [
  {
    n: "1",
    title: "The inner function keeps its scope",
    body: "It holds a reference to where it was created, not a copy.",
  },
  {
    n: "2",
    title: "So the scope can’t be collected",
    body: "As long as the function is alive, the variables it closed over are too.",
  },
  {
    n: "3",
    title: "Each call makes a fresh one",
    body: "Two counters from the same factory never share a count.",
  },
];

export function ConceptScene() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const { play, start, stop } = createTimeline(el);

    /* --------------------------------- 1. the learner asks (4-22%) */
    play("[data-anim='ask']", [
      { offset: 0, opacity: 0, transform: "translateY(8px)" },
      { offset: 0.04, opacity: 0, transform: "translateY(8px)" },
      {
        offset: 0.08,
        opacity: 1,
        transform: "translateY(0)",
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      { offset: 0.95, opacity: 1, transform: "translateY(0)" },
      { offset: 0.985, opacity: 0, transform: "translateY(0)" },
      { offset: 1, opacity: 0, transform: "translateY(8px)" },
    ]);
    playTyping(play, "[data-anim='ask-line']", [ASK], 0.09, 0.22);

    /* ------------------------- 2. the Twin builds the answer (28-78%)
       Steps land one at a time and the connector between them draws down as
       each arrives, so the explanation accumulates rather than appearing. */
    STEPS.forEach((step, i) => {
      const from = 0.3 + i * 0.16;
      play(
        "[data-anim='step']",
        [
          { offset: 0, opacity: 0, transform: "translateY(10px)" },
          { offset: from, opacity: 0, transform: "translateY(10px)" },
          {
            offset: from + 0.045,
            opacity: 1,
            transform: "translateY(0)",
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          },
          { offset: 0.95, opacity: 1, transform: "translateY(0)" },
          { offset: 0.985, opacity: 0, transform: "translateY(0)" },
          { offset: 1, opacity: 0, transform: "translateY(10px)" },
        ],
        i,
      );

      playTyping(
        play,
        "[data-anim='step-body']",
        [step.body],
        from + 0.05,
        from + 0.13,
        i,
      );

      if (i > 0) {
        play(
          "[data-anim='rung']",
          [
            { offset: 0, transform: "scaleY(0)" },
            { offset: from - 0.03, transform: "scaleY(0)" },
            {
              offset: from + 0.02,
              transform: "scaleY(1)",
              easing: "cubic-bezier(0.2, 0, 0, 1)",
            },
            { offset: 0.95, transform: "scaleY(1)" },
            { offset: 1, transform: "scaleY(0)" },
          ],
          i - 1,
        );
      }
    });

    playHold(play, "[data-anim='got-it']", 0.83, 0.95);

    /* ------------------------------------------- who has the floor */
    playFloor(play, {
      learnerFrom: 0.05,
      learnerTo: 0.24,
      twinFrom: 0.3,
      twinTo: 0.8,
      answerFrom: 0.84,
      answerTo: 0.94,
    });

    start();
    return stop;
  }, []);

  return (
    <SessionShell title="Concept explainer" rootRef={root}>
      <Panel label="Closures" />

      {/* the learner's question, right-aligned the way a chat would put it */}
      <div
        data-anim="ask"
        className="absolute flex flex-col items-end"
        style={{ left: u(150), top: u(76), width: u(278) }}
      >
        <span
          className="font-ui text-[#8b8f96]"
          style={{ fontSize: u(9), marginBottom: u(4) }}
        >
          Learner
        </span>
        <span
          className="font-ui block bg-[#e4e9fb] whitespace-pre text-[#242424]"
          style={{
            padding: `${u(8)} ${u(11)}`,
            borderRadius: u(9),
            fontSize: u(11),
          }}
        >
          <span data-anim="ask-line" className="block whitespace-pre">
            {ASK}
          </span>
        </span>
      </div>

      {/* the ladder of steps */}
      {STEPS.map((step, i) => (
        <div key={step.n}>
          {i > 0 ? (
            <div
              data-anim="rung"
              className="absolute origin-top bg-[#c3ccd6]"
              style={{
                left: u(63),
                top: u(140 + (i - 1) * 74 + 26),
                width: u(1.5),
                height: u(48),
              }}
            />
          ) : null}

          <div
            data-anim="step"
            className="absolute flex items-start"
            style={{
              left: u(52),
              top: u(140 + i * 74),
              width: u(370),
              gap: u(10),
            }}
          >
            <span
              className="font-ui grid shrink-0 place-items-center rounded-full bg-[#1b1d21] font-bold text-white"
              style={{ width: u(22), height: u(22), fontSize: u(11) }}
            >
              {step.n}
            </span>
            <span className="block" style={{ width: u(338) }}>
              <span
                className="font-ui block font-semibold text-[#242424]"
                style={{ fontSize: u(12.5), lineHeight: u(18) }}
              >
                {step.title}
              </span>
              <span
                data-anim="step-body"
                className="font-ui block whitespace-pre text-[#5a6069]"
                style={{ fontSize: u(11), lineHeight: u(16) }}
              >
                {step.body}
              </span>
            </span>
          </div>
        </div>
      ))}

      {/* the learner signs off */}
      <div
        data-anim="got-it"
        className="absolute flex items-center opacity-0"
        style={{ left: u(52), top: u(336), gap: u(7) }}
      >
        <span
          className="grid shrink-0 place-items-center rounded-full"
          style={{
            width: u(18),
            height: u(18),
            background: LEARNER_BLUE,
          }}
        >
          <LogoSymbol size={9} className="h-full w-full p-[22%] text-white" />
        </span>
        <span
          className="font-ui text-[#5a6069]"
          style={{ fontSize: u(11) }}
        >
          Got it — so two counters never share a count.
        </span>
      </div>
    </SessionShell>
  );
}
