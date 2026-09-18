"use client";

import type { ReactNode } from "react";
import { u } from "../primitives";
import { Pointer, TWIN_GREEN, type Play } from "./parts";

/**
 * The pieces the two Explainer Video scenes share.
 *
 * Both are the same three-beat story — the trainer briefs the Twin, the thing
 * it made appears somewhere a learner is, the learner plays it — so the first
 * and last beats are built once here and the scenes supply only the middle and
 * their own copy. The timeline halves live here too, beside the markup whose
 * `data-anim` names they drive.
 */

/* ------------------------------------------------------------------ markup */

/**
 * Beat one: the brief, and the button that turns it into a video.
 * Figma 555:4217 and 575:5607, which draw the same card with different rows
 * under the prompt — `controls` is that row.
 */
export function BriefScreen({
  heading,
  lines,
  controls,
}: {
  heading: ReactNode;
  /** Typed out one line at a time, so they are lines rather than a string. */
  lines: string[];
  controls: ReactNode;
}) {
  return (
    <div
      data-anim="brief"
      className="absolute inset-0 bg-[var(--tt-neutral-50)]"
    >
      <span
        className="font-ui absolute block text-center font-semibold text-[var(--tt-neutral-950)]"
        style={{
          left: 0,
          right: 0,
          top: u(96),
          fontSize: u(18),
          lineHeight: u(22),
        }}
      >
        {heading}
      </span>

      <div
        className="absolute bg-white"
        style={{
          left: u(93.5),
          top: u(158),
          width: u(404),
          height: u(120),
          borderRadius: u(12),
          boxShadow: `0 ${u(4)} ${u(18)} rgba(23,35,60,0.07)`,
        }}
      >
        <span
          className="absolute"
          style={{ left: u(18), top: u(15), width: u(350) }}
        >
          {lines.map((line) => (
            <span
              key={line}
              data-anim="brief-line"
              className="font-ui block whitespace-pre text-[var(--tt-neutral-900)]"
              style={{ fontSize: u(12.5), lineHeight: u(16) }}
            >
              {line}
            </span>
          ))}
        </span>

        <span
          className="absolute flex items-center"
          style={{ left: u(13), bottom: u(11), gap: u(6) }}
        >
          {controls}
        </span>

        <span
          data-anim="generate"
          className="font-ui absolute grid place-items-center bg-[var(--tt-neutral-950)] text-white"
          style={{
            right: u(13),
            bottom: u(12),
            width: u(60),
            height: u(22),
            borderRadius: u(6),
            fontSize: u(11),
          }}
        >
          Generate
        </span>
      </div>

      <span
        data-anim="twin-pointer"
        className="absolute"
        style={{ left: u(472), top: u(262) }}
      >
        <Pointer label="Twin" colour={TWIN_GREEN} width={46} />
      </span>
    </div>
  );
}

/** A chip in the brief's control row: an attachment, or a video setting. */
export function BriefChip({
  children,
  background,
}: {
  children: ReactNode;
  /** A file's own colour. Omitted for the outlined setting chips. */
  background?: string;
}) {
  return background ? (
    <span
      data-anim="control"
      className="grid place-items-center"
      style={{
        width: u(20),
        height: u(21),
        borderRadius: u(3),
        background,
      }}
    >
      <span
        className="font-ui font-semibold text-white"
        style={{ fontSize: u(String(children).length > 1 ? 6 : 9) }}
      >
        {children}
      </span>
    </span>
  ) : (
    <span
      data-anim="control"
      className="font-ui grid place-items-center bg-white text-[var(--tt-neutral-700)]"
      style={{
        height: u(24),
        paddingLeft: u(10),
        paddingRight: u(10),
        borderRadius: u(8),
        border: `${u(1)} solid var(--tt-neutral-200)`,
        fontSize: u(10.5),
      }}
    >
      {children}
    </span>
  );
}

/**
 * Beat three: the player the learner watches, over whatever the scene has
 * behind it. Figma 561:5477 and 575:5607 draw the same window; `children` is
 * the board or the slide inside it.
 */
export function PlayerModal({
  title,
  time,
  children,
}: {
  title: string;
  /** The stamp on the transport. Each scene's video runs its own length. */
  time: string;
  children: ReactNode;
}) {
  return (
    <div
      data-anim="player"
      className="absolute opacity-0"
      style={{
        left: u(38),
        top: u(23),
        width: u(515),
        height: u(400),
        borderRadius: u(14),
        background: "var(--tt-neutral-900)",
        boxShadow: `0 ${u(24)} ${u(60)} rgba(8,12,24,0.35)`,
      }}
    >
      <span
        className="font-ui absolute font-semibold text-white"
        style={{ left: u(17), top: u(14), fontSize: u(12.5) }}
      >
        {title}
      </span>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="absolute"
        style={{ right: u(17), top: u(16), width: u(11), height: u(11) }}
        fill="none"
        stroke="var(--tt-neutral-0)"
        strokeWidth="2.4"
        strokeLinecap="round"
      >
        <path d="M5 5l14 14M19 5L5 19" />
      </svg>

      <div
        className="absolute overflow-hidden bg-white"
        style={{
          left: u(11),
          top: u(43),
          width: u(493),
          height: u(346),
          borderRadius: u(10),
          border: `${u(1.5)} solid var(--l-accent)`,
        }}
      >
        {children}
        <PresenterBubble />
        <Transport time={time} />
      </div>
    </div>
  );
}

/**
 * The camera bubble. The design drops the trainer's own footage in here, and
 * the clip is encoded with no audio track at all, so there is nothing to
 * unmute — the waveform over it is the design's, not a volume control.
 */
export function PresenterBubble() {
  return (
    <span
      className="absolute grid place-items-center overflow-hidden rounded-full"
      style={{
        right: u(18),
        bottom: u(16),
        width: u(92),
        height: u(92),
        background:
          "radial-gradient(120% 120% at 30% 20%,var(--tt-neutral-800),var(--tt-neutral-950))",
        border: `${u(1.5)} solid var(--tt-neutral-0)`,
        boxShadow: `0 ${u(6)} ${u(16)} rgba(8,12,24,0.28)`,
      }}
    >
      {/* Decorative: hidden from assistive tech rather than captioned, since it
          carries no information the page depends on. */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/tt/presenter.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <span
        className="absolute flex items-center justify-center"
        style={{ bottom: u(16), gap: u(1.5), height: u(14) }}
      >
        {[0.4, 0.7, 1, 0.55, 0.85, 0.45, 0.9, 0.6, 0.35].map((h, i) => (
          <span
            key={i}
            className="l-bar rounded-full bg-white/85"
            style={{
              width: u(1.6),
              height: `${h * 100}%`,
              animationDelay: `${i * 70}ms`,
            }}
          />
        ))}
      </span>
    </span>
  );
}

function Transport({ time }: { time: string }) {
  return (
    <span
      className="absolute flex items-center bg-[var(--tt-neutral-900)]"
      style={{
        left: u(128),
        bottom: u(22),
        width: u(200),
        height: u(28),
        paddingLeft: u(10),
        paddingRight: u(10),
        gap: u(8),
        borderRadius: u(14),
      }}
    >
      <span className="font-ui text-white" style={{ fontSize: u(8.5) }}>
        {time}
      </span>
      <span
        className="relative flex-1 rounded-full bg-white/25"
        style={{ height: u(3) }}
      >
        <span
          data-anim="progress"
          className="absolute inset-0 origin-left rounded-full bg-[var(--l-accent)]"
          style={{ transform: "scaleX(0.12)" }}
        />
        {/* Its own track, in percent: riding inside the fill would stretch it
            with the scaleX. */}
        <span
          data-anim="knob"
          className="absolute rounded-full bg-white"
          style={{
            left: "12%",
            top: "50%",
            width: u(6),
            height: u(6),
            marginLeft: u(-3),
            marginTop: u(-3),
          }}
        />
      </span>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="var(--tt-neutral-0)"
        style={{ width: u(9), height: u(9) }}
      >
        <path d="M7 4h3v16H7zM14 4h3v16h-3z" />
      </svg>
      <span className="font-ui text-white" style={{ fontSize: u(8) }}>
        2×
      </span>
    </span>
  );
}

/* ---------------------------------------------------------------- timeline */

/** Lands a thing on the beat given, and leaves it there. */
export function playPop(
  play: Play,
  selector: string,
  from: number,
  index?: number,
): void {
  play(
    selector,
    [
      { offset: 0, opacity: 0, transform: "translateY(6px) scale(0.96)" },
      { offset: from, opacity: 0, transform: "translateY(6px) scale(0.96)" },
      {
        offset: Math.min(1, from + 0.03),
        opacity: 1,
        transform: "translateY(0) scale(1)",
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      { offset: 1, opacity: 1, transform: "translateY(0) scale(1)" },
    ],
    index,
  );
}

/**
 * Beat one's tracks: the brief types, its controls land, the Twin's cursor
 * crosses to Generate and presses it, and the screen hands over.
 */
export function playBrief(
  play: Play,
  playTyping: (
    play: Play,
    selector: string,
    lines: string[],
    from: number,
    to: number,
    offsetIndex?: number,
  ) => void,
  beats: {
    lines: string[];
    typeFrom: number;
    typeTo: number;
    /** One start per control, in the order they are rendered. */
    controls: number[];
    pointerFrom: number;
    pressAt: number;
    outFrom: number;
  },
): void {
  const { lines, typeFrom, typeTo, controls, pointerFrom, pressAt, outFrom } =
    beats;

  playTyping(play, "[data-anim='brief-line']", lines, typeFrom, typeTo);
  controls.forEach((from, i) =>
    playPop(play, "[data-anim='control']", from, i),
  );

  // The cursor travels in the stage's own unit, so its path follows the column
  // as it resizes rather than being pinned to mount-time pixels.
  const at = (x: number, y: number) =>
    `translate(calc(${x} * var(--l-u)), calc(${y} * var(--l-u)))`;

  play("[data-anim='twin-pointer']", [
    { offset: 0, opacity: 0, transform: at(34, 30) },
    { offset: pointerFrom, opacity: 0, transform: at(34, 30) },
    {
      offset: pointerFrom + 0.053,
      opacity: 1,
      transform: at(0, 0),
      easing: "cubic-bezier(0.16, 1, 0.3, 1)",
    },
    { offset: outFrom - 0.002, opacity: 1, transform: at(0, 0) },
    { offset: outFrom + 0.01, opacity: 0, transform: at(0, 0) },
    { offset: 1, opacity: 0, transform: at(34, 30) },
  ]);

  play("[data-anim='generate']", [
    { offset: 0, transform: "scale(1)" },
    { offset: pressAt, transform: "scale(1)" },
    { offset: pressAt + 0.01, transform: "scale(0.9)" },
    { offset: pressAt + 0.026, transform: "scale(1)" },
    { offset: 1, transform: "scale(1)" },
  ]);

  play("[data-anim='brief']", [
    { offset: 0, opacity: 1 },
    { offset: outFrom, opacity: 1 },
    { offset: outFrom + 0.035, opacity: 0 },
    { offset: 0.965, opacity: 0 },
    { offset: 0.995, opacity: 1 },
    { offset: 1, opacity: 1 },
  ]);
}

/** Beat three's tracks: the player rises, plays out its length, and closes. */
export function playPlayer(
  play: Play,
  beats: {
    from: number;
    to: number;
    /** The screen the player opens over. It is blurred back while the player
        is up, so the window reads as being in front of it rather than pasted
        on. Its own opacity track is left alone — this is a second animation on
        the same element, writing only the filter. */
    behind?: string;
  },
): void {
  const { from, to, behind } = beats;

  if (behind) {
    play(behind, [
      { offset: 0, filter: "blur(0px)" },
      { offset: from, filter: "blur(0px)" },
      { offset: from + 0.045, filter: "blur(5px)" },
      { offset: to, filter: "blur(5px)" },
      { offset: Math.min(1, to + 0.025), filter: "blur(0px)" },
      { offset: 1, filter: "blur(0px)" },
    ]);
  }

  play("[data-anim='player']", [
    { offset: 0, opacity: 0, transform: "translateY(14px) scale(0.97)" },
    { offset: from, opacity: 0, transform: "translateY(14px) scale(0.97)" },
    {
      offset: from + 0.045,
      opacity: 1,
      transform: "translateY(0) scale(1)",
      easing: "cubic-bezier(0.16, 1, 0.3, 1)",
    },
    { offset: to, opacity: 1, transform: "translateY(0) scale(1)" },
    {
      offset: to + 0.025,
      opacity: 0,
      transform: "translateY(8px) scale(0.99)",
    },
    { offset: 1, opacity: 0, transform: "translateY(14px) scale(0.97)" },
  ]);

  play("[data-anim='progress']", [
    { offset: 0, transform: "scaleX(0)" },
    { offset: from + 0.055, transform: "scaleX(0)" },
    { offset: to - 0.005, transform: "scaleX(1)", easing: "linear" },
    { offset: 1, transform: "scaleX(1)" },
  ]);

  play("[data-anim='knob']", [
    { offset: 0, left: "0%" },
    { offset: from + 0.055, left: "0%" },
    { offset: to - 0.005, left: "100%", easing: "linear" },
    { offset: 1, left: "100%" },
  ]);
}
