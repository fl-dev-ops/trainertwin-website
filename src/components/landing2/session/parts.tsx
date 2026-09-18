"use client";

import { useEffect, useState } from "react";
import type { ReactNode, RefObject } from "react";
import Image from "next/image";
import { LogoSymbol } from "@/components/Logo";
import { cn } from "@/components/cn";
import { u } from "../primitives";

/**
 * Everything the session scenes share: the call chrome, the two participants,
 * and the vocabulary the timelines speak in.
 *
 * A scene supplies its own title and panel; the shell supplies the parts that
 * are identical in every frame of every scene, including the `data-anim` hooks
 * both timelines drive by the same names.
 */

/**
 * One lap of a session scene. Every scene writes its beats as fractions of it,
 * so changing it here changes the pace of all of them at once — and of the two
 * lists that hand over a scenario per lap.
 *
 * It was 17s, which read as slow; this is that at 1.5x.
 */
export const CYCLE_MS = 11333;

/** The pace the comparison panels keep, which is the original 17s. */
export const SLOW_CYCLE_MS = 17000;

export const IDLE_BORDER = "var(--tt-neutral-200)";
export const TWIN_GREEN = "#0aad51";
/** The learner's blue, taken from the pill in the Figma frames. */
export const LEARNER_BLUE = "#1474ea";

export const HIDDEN = "inset(0 100% 0 0)";
export const SHOWN = "inset(0 0 0 0)";

export type Play = (
  selector: string,
  keyframes: Keyframe[],
  index?: number,
) => void;

/**
 * Builds the `play()` used by every scene timeline. Each track shares one
 * duration and one explicitly stamped start time, which is what keeps the
 * typing, the sweeps and the bubbles locked to each other for good — creating
 * them in the same synchronous pass does not by itself guarantee it.
 */
export function createTimeline(el: HTMLElement, duration = CYCLE_MS) {
  const animations: Animation[] = [];

  const play: Play = (selector, keyframes, index) => {
    const nodes = el.querySelectorAll<HTMLElement>(selector);
    const target = index === undefined ? nodes[0] : nodes[index];
    if (!target) return;
    // animate() throws on offsets that go backwards, and a timeline built from
    // arithmetic can easily produce one at the tail of a lap. Clamping here
    // means a scene loses a beat rather than the whole page losing its
    // animations to an exception during mount.
    let last = 0;
    for (const frame of keyframes) {
      if (typeof frame.offset !== "number") continue;
      frame.offset = Math.min(1, Math.max(last, frame.offset));
      last = frame.offset;
    }
    animations.push(
      target.animate(keyframes, {
        duration,
        iterations: Infinity,
        fill: "both",
      }),
    );
  };

  const start = () => {
    const t0 = document.timeline.currentTime ?? 0;
    for (const animation of animations) animation.startTime = t0;
  };

  const stop = () => {
    for (const animation of animations) animation.cancel();
  };

  return { play, start, stop };
}

/**
 * Registers the "who has the floor" tracks, which are the same shape in every
 * scene: the learner's card lights while they are working and again while they
 * answer, the Twin's only while it is asking about the work.
 */
export function playFloor(
  play: Play,
  beats: {
    learnerFrom: number;
    learnerTo: number;
    twinFrom: number;
    twinTo: number;
    answerFrom: number;
    answerTo: number;
  },
): void {
  const { learnerFrom, learnerTo, twinFrom, twinTo, answerFrom, answerTo } =
    beats;

  play("[data-anim='learner-card']", [
    { offset: 0, borderColor: IDLE_BORDER },
    { offset: Math.max(0, learnerFrom - 0.02), borderColor: IDLE_BORDER },
    { offset: learnerFrom, borderColor: LEARNER_BLUE },
    { offset: learnerTo, borderColor: LEARNER_BLUE },
    { offset: learnerTo + 0.025, borderColor: IDLE_BORDER },
    { offset: answerFrom - 0.02, borderColor: IDLE_BORDER },
    { offset: answerFrom, borderColor: LEARNER_BLUE },
    { offset: answerTo, borderColor: LEARNER_BLUE },
    { offset: Math.min(1, answerTo + 0.02), borderColor: IDLE_BORDER },
    { offset: 1, borderColor: IDLE_BORDER },
  ]);

  play("[data-anim='twin-card']", [
    { offset: 0, borderColor: IDLE_BORDER },
    { offset: Math.max(0, twinFrom - 0.04), borderColor: IDLE_BORDER },
    { offset: twinFrom, borderColor: TWIN_GREEN },
    { offset: twinTo, borderColor: TWIN_GREEN },
    { offset: Math.min(1, twinTo + 0.03), borderColor: IDLE_BORDER },
    { offset: 1, borderColor: IDLE_BORDER },
  ]);

  play("[data-anim='learner-wave']", [
    { offset: 0, opacity: 0 },
    { offset: answerFrom - 0.02, opacity: 0 },
    { offset: answerFrom, opacity: 1 },
    { offset: answerTo, opacity: 1 },
    { offset: Math.min(1, answerTo + 0.02), opacity: 0 },
    { offset: 1, opacity: 0 },
  ]);
}

/**
 * Types a block of lines out with a steps() reveal, sharing the window between
 * them by character count so the caret keeps a steady speed instead of racing
 * the long lines and crawling through the short ones.
 */
export function playTyping(
  play: Play,
  selector: string,
  lines: string[],
  from: number,
  to: number,
  /**
   * Where `lines` starts among the selector's matches. Needed when a caller
   * types one item at a time out of a longer list — without it every call
   * would drive match 0 and the rest would never animate.
   */
  offsetIndex = 0,
): void {
  const chars = lines.reduce((sum, line) => sum + line.length, 0) || 1;
  lines.forEach((text, i) => {
    const before = lines.slice(0, i).reduce((s, l) => s + l.length, 0);
    const start = from + (before / chars) * (to - from);
    const end = from + ((before + text.length) / chars) * (to - from);
    play(
      selector,
      [
        { offset: 0, clipPath: HIDDEN, easing: "linear" },
        {
          offset: start,
          clipPath: HIDDEN,
          easing: `steps(${text.length || 1})`,
        },
        { offset: end, clipPath: SHOWN },
        { offset: 1, clipPath: SHOWN },
      ],
      offsetIndex + i,
    );
  });
}

/** Fades a thing in for a stretch of the lap and out again at the end. */
export function playHold(
  play: Play,
  selector: string,
  from: number,
  to = 0.96,
  index?: number,
): void {
  play(
    selector,
    [
      { offset: 0, opacity: 0 },
      { offset: from, opacity: 0 },
      { offset: Math.min(1, from + 0.025), opacity: 1 },
      { offset: to, opacity: 1 },
      { offset: Math.min(1, to + 0.025), opacity: 0 },
      { offset: 1, opacity: 0 },
    ],
    index,
  );
}

/* ------------------------------------------------------------------ shell */

export function SessionShell({
  title,
  rootRef,
  participants = true,
  topFlush = false,
  children,
}: {
  /** A node, not a string: the "Generic AI vs" panels title their session in
      two weights, and the position and colour are the shell's to own. */
  title: ReactNode;
  /** Omitted by a shell that is not animated — the ref is a timeline's hook. */
  rootRef?: RefObject<HTMLDivElement | null>;
  /** The two cards down the right. A scene that fills the width opts out. */
  participants?: boolean;
  /** Squares the top corners, for a shell sitting under window chrome. */
  topFlush?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="l-fit w-full">
      <div
        ref={rootRef}
        className="l-stage overflow-hidden bg-[var(--tt-neutral-50)]"
        style={{
          ["--l-design" as string]: "591",
          height: u(445),
          borderRadius: u(16),
          ...(topFlush
            ? { borderTopLeftRadius: 0, borderTopRightRadius: 0 }
            : null),
        }}
      >
        <span
          className="font-ui absolute font-semibold text-[var(--tt-neutral-800)]"
          style={{ left: u(28), top: u(18), fontSize: u(16) }}
        >
          {title}
        </span>

        {children}

        {participants ? (
          <>
            <Participant
              anim="twin-card"
              top={40}
              height={99}
              borderColor={TWIN_GREEN}
              label="Trainer’s Twin"
              labelTop={64}
            >
              <div
                className="absolute grid place-items-center rounded-full bg-[var(--tt-neutral-900)]"
                style={{ left: u(34), top: u(15), width: u(36), height: u(36) }}
              >
                <span
                  className="block text-white"
                  style={{ width: u(17), height: u(17) }}
                >
                  <LogoSymbol size={17} className="h-full w-full" />
                </span>
              </div>
            </Participant>

            {/* The Twin's turn indicator. The design gives the speaker a waveform
            under their card; the Twin's card leaves only the gap above the
            learner, so its version is the same mark, drawn compact. */}
            <Waveform
              anim="twin-wave"
              left={486}
              top={141}
              width={53}
              height={10}
            />

            <Participant
              anim="learner-card"
              top={152}
              height={96}
              borderColor={IDLE_BORDER}
              label="Learner"
              labelTop={62}
            >
              <Image
                src="/tt/avatar-learner.png"
                alt=""
                width={34}
                height={34}
                className="absolute object-cover"
                style={{
                  left: u(36),
                  top: u(19),
                  width: u(34),
                  height: u(34),
                  borderRadius: u(15),
                }}
              />
            </Participant>

            <Waveform
              anim="learner-wave"
              left={486}
              top={259}
              width={53}
              height={19}
            />
          </>
        ) : null}

        <CallBar />
      </div>
    </div>
  );
}

/** The editor-sized panel every session scene works inside. */
export function Panel({
  label,
  children,
}: {
  label?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className="absolute border border-[var(--tt-neutral-200)] bg-[var(--tt-neutral-200)]"
      style={{
        left: u(28),
        /* 8 below the shell's title, which sits at 18 and stands about 19
           tall — it was landing almost against the panel's top edge. */
        top: u(48),
        width: u(417),
        height: u(330),
        borderRadius: u(12),
      }}
    >
      <PanelDots label={label} />
      {children}
    </div>
  );
}

/** The window dots every panel header carries, optionally with a label. */
export function PanelDots({ label }: { label?: string }) {
  return (
    <>
      {[16.5, 26.5, 36.5].map((x) => (
        <span
          key={x}
          className="absolute rounded-full bg-[var(--tt-neutral-400)]"
          style={{ left: u(x), top: u(12.5), width: u(5), height: u(5) }}
        />
      ))}
      {label ? (
        <span
          className="font-ui absolute font-semibold text-[var(--tt-neutral-800)]"
          style={{ left: u(60), top: u(6), fontSize: u(12) }}
        >
          {label}
        </span>
      ) : null}
    </>
  );
}

/** A collaborator's cursor with their name on it. */
export function Pointer({
  label,
  colour,
  width,
}: {
  label: string;
  colour: string;
  width: number;
}) {
  return (
    <>
      <svg
        aria-hidden="true"
        viewBox="0 0 12 12"
        fill={colour}
        style={{ width: u(11.25), height: u(11.25) }}
      >
        <path d="M0 0l11.2 4.4-4.5 1.4-1.4 4.5z" />
      </svg>
      <span
        className="font-ui absolute flex items-center justify-center font-normal whitespace-nowrap text-white"
        style={{
          left: u(7),
          top: u(7),
          width: u(width),
          height: u(22),
          borderRadius: u(11),
          fontSize: u(12),
          background: colour,
        }}
      >
        {label}
      </span>
    </>
  );
}

/** The dark speech bubble both scenes use for the Twin's question. */
export function Bubble({
  left,
  top,
  width,
  height,
  lines,
}: {
  left: number;
  top: number;
  width: number;
  height: number;
  lines: string[];
}) {
  return (
    <div
      data-anim="bubble"
      className="absolute bg-[var(--tt-neutral-800)]"
      style={{
        left: u(left),
        top: u(top),
        width: u(width),
        height: u(height),
        borderRadius: u(10),
      }}
    >
      <div
        className="absolute"
        style={{ left: u(11), top: u(10), width: u(width - 20) }}
      >
        <span
          data-anim="bubble-label"
          className="font-ui block font-semibold text-white"
          style={{ fontSize: u(12), lineHeight: u(18) }}
        >
          Trainer Twin
        </span>
        {lines.map((text, i) => (
          <span
            key={i}
            data-anim="bubble-line"
            className="font-ui block whitespace-pre text-white"
            style={{ fontSize: u(12), lineHeight: u(18) }}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

function Participant({
  anim,
  top,
  height,
  borderColor,
  label,
  labelTop,
  children,
}: {
  anim: string;
  top: number;
  height: number;
  borderColor: string;
  label: string;
  labelTop: number;
  children: ReactNode;
}) {
  return (
    <div
      data-anim={anim}
      className="absolute bg-[var(--tt-green-50)]"
      style={{
        left: u(460),
        top: u(top),
        width: u(105),
        height: u(height),
        borderRadius: u(12),
        borderWidth: u(1.5),
        borderStyle: "solid",
        borderColor,
      }}
    >
      {children}
      <span
        className="font-ui absolute w-full text-center font-semibold text-[var(--tt-neutral-800)]"
        style={{ top: u(labelTop), fontSize: u(12) }}
      >
        {label}
      </span>
    </div>
  );
}

const WAVE = [
  0.4, 0.7, 0.45, 1, 0.55, 0.85, 0.35, 0.95, 0.5, 0.75, 0.4, 0.9, 0.6, 0.45,
  0.8, 0.5, 0.65, 0.35,
];

/** The speaking indicator: the mark the design puts under whoever has the floor. */
function Waveform({
  anim,
  left,
  top,
  width,
  height,
}: {
  anim: string;
  left: number;
  top: number;
  width: number;
  height: number;
}) {
  return (
    <div
      data-anim={anim}
      className="absolute flex items-center justify-center opacity-0"
      style={{
        left: u(left),
        top: u(top),
        width: u(width),
        height: u(height),
        gap: u(1.5),
      }}
    >
      {WAVE.map((h, i) => (
        <span
          key={i}
          className="l-bar rounded-full bg-[var(--tt-neutral-600)]"
          style={{
            width: u(1.5),
            height: `${h * 100}%`,
            animationDelay: `${i * 65}ms`,
          }}
        />
      ))}
    </div>
  );
}

function CallBar() {
  return (
    <div
      className="absolute left-0 w-full border-t border-[var(--tt-neutral-200)] bg-white"
      style={{
        top: u(388),
        height: u(57),
        borderBottomLeftRadius: u(16),
        borderBottomRightRadius: u(16),
      }}
    >
      <CallClock />

      <div
        className="absolute flex"
        style={{ left: u(354), top: u(10), gap: u(10) }}
      >
        {/* Tabler outline set, as supplied: microphone, video, sparkles,
            message-chatbot, phone-off. The stroke is the button's, so a path
            here is only ever geometry. */}
        <CallButton>
          <path d="M9 5a3 3 0 0 1 3 -3a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3a3 3 0 0 1 -3 -3l0 -5" />
          <path d="M5 10a7 7 0 0 0 14 0" />
          <path d="M8 21l8 0" />
          <path d="M12 17l0 4" />
        </CallButton>
        <CallButton>
          <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4" />
          <path d="M3 8a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -8" />
        </CallButton>
        <CallButton>
          <path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6" />
        </CallButton>
        <CallButton anim="chat-button">
          <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12" />
          <path d="M9.5 9h.01" />
          <path d="M14.5 9h.01" />
          <path d="M9.5 13a3.5 3.5 0 0 0 5 0" />
        </CallButton>
        <CallButton tone="danger">
          <path d="M3 21l18 -18" />
          <path d="M5.831 14.161a15.946 15.946 0 0 1 -2.831 -8.161a2 2 0 0 1 2 -2h4l2 5l-2.5 1.5c.108 .22 .223 .435 .345 .645m1.751 2.277c.843 .84 1.822 1.544 2.904 2.078l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a15.963 15.963 0 0 1 -10.344 -4.657" />
        </CallButton>
      </div>
    </div>
  );
}

/**
 * The call's clock: time elapsed, counting on from the 5:00 the design draws
 * rather than down to zero, so a session that is meant to be in progress does
 * not sit frozen — and never runs out.
 *
 * Renders 5:00 on the server and on the first client paint, so there is
 * nothing to mismatch on hydration — it only starts moving after mount.
 */
function CallClock() {
  const [elapsed, setElapsed] = useState(300);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setElapsed((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      className="font-ui absolute text-[var(--tt-neutral-800)] tabular-nums"
      style={{ left: u(28), top: u(18), fontSize: u(14) }}
    >
      {Math.floor(elapsed / 60)}:{String(elapsed % 60).padStart(2, "0")}
    </span>
  );
}

function CallButton({
  children,
  tone,
  anim,
}: {
  children: ReactNode;
  tone?: "danger";
  anim?: string;
}) {
  return (
    <span
      data-anim={anim}
      className={cn(
        "grid shrink-0 place-items-center rounded-full",
        tone === "danger"
          ? "bg-[#ff1f1f]"
          : "border border-[var(--tt-neutral-100)] bg-white",
      )}
      style={{ width: u(37), height: u(37) }}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke={
          tone === "danger" ? "var(--tt-neutral-0)" : "var(--tt-neutral-800)"
        }
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: u(20), height: u(20) }}
      >
        {children}
      </svg>
    </span>
  );
}
