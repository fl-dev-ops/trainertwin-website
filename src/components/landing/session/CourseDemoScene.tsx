"use client";

import { useEffect, useRef } from "react";
import { u } from "../primitives";
import { createTimeline, LEARNER_BLUE, playTyping, Pointer } from "./parts";
import {
  BriefChip,
  BriefScreen,
  PlayerModal,
  playBrief,
  playPlayer,
  playPop,
} from "./studio";

/**
 * "Course demos & preview" — the Explainer Video scenario.
 * Figma: SHXsv4d0ROls7tuOqQBNLZ node 575:5607, three frames.
 *
 *   1  the trainer asks for a short demo video, 1:1 and 30 seconds
 *   2  the course page a lead lands on, two cohorts open
 *   3  the explainer playing over it, opened from a course
 *
 * It is the lessons story told to a different audience, so it is built from
 * the same parts: the brief and the player come from ./studio, and only the
 * page between them is its own. The resting markup is frame 1, complete.
 */

const BRIEF = ["Create explainer video for system design course", "video."];

const FILTERS = ["ALL FIELDS", "DISTRIBUTED SYSTEMS", "FRONTEND ARCHITECTURE"];

const COURSES = [
  {
    tag: "DISTRIBUTED SYSTEMS",
    meta: "4 SEATS LEFT",
    /** The seats-left count is the live one, so the design marks it. */
    urgent: true,
    title: "System Design: Distributed Systems",
    body: "Build distributed systems from scratch with Raft consensus, commit logs, and vector clocks.",
    chips: ["6 WEEKS", "LIVE + LABS", "CAP: 25 SEATS"],
    cohort: "COHORT 08",
  },
  {
    tag: "SYSTEMS PROGRAMMING",
    meta: "STARTS MAY 12",
    urgent: false,
    title: "Advanced Rust: Systems Programming",
    body: "Unsafe Rust, custom memory allocators, lock-free queues, and epoll-backed event loops.",
    chips: ["8 WEEKS", "INTENSIVE COHORT"],
    cohort: "COHORT 04",
  },
];

/**
 * The two claims the slide pins beside the title. The frame draws a third
 * behind the camera bubble, too far under it to read, so it is left out rather
 * than invented.
 */
const CLAIMS = [
  { icon: "globe", lines: ["Powers real-world", "applications"] },
  { icon: "people", lines: ["Used in interviews", "& on the job"] },
];

export function CourseDemoScene() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    /* The camera bubble's clip. React does not always emit `muted` into the
       server-rendered markup, and a video without it is refused autoplay, so
       the property is set here as well. */
    const video = el.querySelector("video");
    if (video) {
      video.muted = true;
      if (reduced) {
        video.autoplay = false;
        video.pause();
      } else {
        void video.play().catch(() => {});
      }
    }

    if (reduced) return;

    const { play, start, stop } = createTimeline(el);

    const at = (x: number, y: number) =>
      `translate(calc(${x} * var(--l-u)), calc(${y} * var(--l-u)))`;

    /* -------------------------------- 1. the trainer asks for it (4.5-29%) */
    playBrief(play, playTyping, {
      lines: BRIEF,
      typeFrom: 0.045,
      typeTo: 0.165,
      controls: [0.18, 0.205],
      pointerFrom: 0.2,
      pressAt: 0.262,
      outFrom: 0.29,
    });

    /* ------------------------------------- 2. the course page (30-59%) */
    play("[data-anim='page']", [
      { offset: 0, opacity: 0 },
      { offset: 0.3, opacity: 0 },
      { offset: 0.34, opacity: 1 },
      { offset: 0.965, opacity: 1 },
      { offset: 0.995, opacity: 0 },
      { offset: 1, opacity: 0 },
    ]);

    COURSES.forEach((_, i) =>
      playPop(play, "[data-anim='course']", 0.4 + i * 0.03, i),
    );

    // A lead reads down the page and opens the demo on the first cohort.
    play("[data-anim='learner-pointer']", [
      { offset: 0, opacity: 0, transform: at(112, -66) },
      { offset: 0.47, opacity: 0, transform: at(112, -66) },
      { offset: 0.49, opacity: 1, transform: at(92, -52) },
      {
        offset: 0.56,
        opacity: 1,
        transform: at(0, 0),
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      { offset: 0.6, opacity: 1, transform: at(0, 0) },
      { offset: 0.625, opacity: 0, transform: at(0, 0) },
      { offset: 1, opacity: 0, transform: at(112, -66) },
    ]);

    play("[data-anim='details']", [
      { offset: 0, transform: "scale(1)" },
      { offset: 0.565, transform: "scale(1)" },
      { offset: 0.575, transform: "scale(0.94)" },
      { offset: 0.59, transform: "scale(1)" },
      { offset: 1, transform: "scale(1)" },
    ]);

    /* ---------------------------------- 3. the demo plays (59.5-95.5%) */
    playPlayer(play, {
      from: 0.595,
      to: 0.955,
      behind: "[data-anim='page']",
    });

    /* The slide builds while it plays, in reading order: the number, the
       heading, its line, the board, then the two claims beside it. One start
       per marked element — a missing one would leave that element on the
       opacity-0 it renders with. */
    [0.65, 0.675, 0.71, 0.75, 0.785, 0.815].forEach((from, i) =>
      playPop(play, "[data-anim='slide']", from, i),
    );

    start();
    return stop;
  }, []);

  return (
    <div className="l-fit w-full">
      <div
        ref={root}
        className="l-stage overflow-hidden bg-white"
        style={{
          ["--l-design" as string]: "591",
          height: u(445),
          borderRadius: u(16),
        }}
      >
        {/* ============================================== 2. the course page */}
        <div data-anim="page" className="absolute inset-0 opacity-0">
          <span
            className="font-ui absolute font-bold text-[#0f1420]"
            style={{ left: u(26), top: u(26), fontSize: u(12.5) }}
          >
            Alex Dev
          </span>
          <span
            className="absolute bg-[#dfe3ea]"
            style={{ left: u(84), top: u(26), width: u(1), height: u(13) }}
          />
          <span
            className="font-ui absolute text-[#8a93a3]"
            style={{
              left: u(94),
              top: u(29),
              fontSize: u(7.5),
              letterSpacing: "0.08em",
            }}
          >
            TECHNICAL PEDAGOGY
          </span>
          <span
            className="font-ui absolute flex items-center bg-[#eaf1ff]"
            style={{
              right: u(26),
              top: u(23),
              height: u(18),
              paddingLeft: u(8),
              paddingRight: u(8),
              gap: u(5),
              borderRadius: u(4),
              fontSize: u(7),
              letterSpacing: "0.06em",
              color: "#2f6fe0",
            }}
          >
            <span
              className="rounded-full bg-[#2f6fe0]"
              style={{ width: u(4), height: u(4) }}
            />
            OFFICE HOURS: OPEN
          </span>
          <span
            className="absolute bg-[#edf0f5]"
            style={{ left: 0, right: 0, top: u(56), height: u(1) }}
          />

          <span
            className="font-ui absolute font-bold text-[#0f1420]"
            style={{ left: u(26), top: u(74), fontSize: u(24) }}
          >
            Curriculum &amp; Intensive Cohorts
          </span>
          <span
            className="font-ui absolute block text-[#6b7280]"
            style={{
              left: u(26),
              top: u(112),
              width: u(470),
              fontSize: u(10),
              lineHeight: u(15),
            }}
          >
            Practical, systems-level engineering masterclasses designed for
            senior developers and tech leads. Direct access, zero corporate
            fluff, production-grade workloads.
          </span>

          <span
            className="absolute flex items-center"
            style={{ left: u(26), top: u(154), gap: u(8) }}
          >
            {FILTERS.map((filter, i) => (
              <span
                key={filter}
                className="font-ui grid place-items-center"
                style={{
                  height: u(21),
                  paddingLeft: u(11),
                  paddingRight: u(11),
                  borderRadius: u(10.5),
                  fontSize: u(7.5),
                  letterSpacing: "0.06em",
                  fontWeight: 600,
                  background: i === 0 ? "#111318" : "#f2f4f8",
                  color: i === 0 ? "#ffffff" : "#5b6272",
                }}
              >
                {filter}
              </span>
            ))}
          </span>

          {COURSES.map((course, i) => (
            <div
              key={course.title}
              data-anim="course"
              className="absolute bg-white opacity-0"
              style={{
                left: u(i === 0 ? 26 : 306.5),
                top: u(192),
                width: u(258.5),
                height: u(208),
                borderRadius: u(10),
                border: `${u(1)} solid #e7eaf0`,
              }}
            >
              <span
                className="font-ui absolute grid place-items-center bg-[#f1f3f8] text-[#5b6272]"
                style={{
                  left: u(14),
                  top: u(14),
                  height: u(15),
                  paddingLeft: u(6),
                  paddingRight: u(6),
                  borderRadius: u(4),
                  fontSize: u(6.5),
                  letterSpacing: "0.06em",
                  fontWeight: 600,
                }}
              >
                {course.tag}
              </span>
              <span
                className="font-ui absolute flex items-center"
                style={{
                  right: u(14),
                  top: u(17),
                  gap: u(4),
                  fontSize: u(6.5),
                  letterSpacing: "0.05em",
                  fontWeight: 600,
                  color: course.urgent ? "#2f6fe0" : "#9aa2b1",
                }}
              >
                {course.urgent ? (
                  <span
                    className="rounded-full bg-[#2f6fe0]"
                    style={{ width: u(3.5), height: u(3.5) }}
                  />
                ) : null}
                {course.meta}
              </span>

              <span
                className="font-ui absolute block font-semibold text-[#0f1420]"
                style={{
                  left: u(14),
                  top: u(40),
                  width: u(230),
                  fontSize: u(12.5),
                  lineHeight: u(16),
                }}
              >
                {course.title}
              </span>
              <span
                className="font-ui absolute block text-[#7b8494]"
                style={{
                  left: u(14),
                  top: u(64),
                  width: u(228),
                  fontSize: u(8),
                  lineHeight: u(12),
                }}
              >
                {course.body}
              </span>

              <span
                className="absolute flex items-center"
                style={{ left: u(14), top: u(100), gap: u(6) }}
              >
                {course.chips.map((chip) => (
                  <span
                    key={chip}
                    className="font-ui grid place-items-center text-[#5b6272]"
                    style={{
                      height: u(15),
                      paddingLeft: u(6),
                      paddingRight: u(6),
                      borderRadius: u(4),
                      border: `${u(1)} solid #e7eaf0`,
                      fontSize: u(6.2),
                      letterSpacing: "0.05em",
                      fontWeight: 600,
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </span>

              <span
                className="absolute bg-[#eef1f6]"
                style={{ left: 0, right: 0, top: u(126), height: u(1) }}
              />
              <span
                className="font-ui absolute font-bold text-[#0f1420]"
                style={{ left: u(14), top: u(136), fontSize: u(17) }}
              >
                $$
              </span>
              <span
                className="font-ui absolute text-[#9aa2b1]"
                style={{
                  right: u(14),
                  top: u(145),
                  fontSize: u(6.5),
                  letterSpacing: "0.05em",
                  fontWeight: 600,
                }}
              >
                {course.cohort}
              </span>

              <span
                {...(i === 0 ? { "data-anim": "details" } : null)}
                className="font-ui absolute grid place-items-center bg-[#111318] font-semibold text-white"
                style={{
                  left: u(14),
                  top: u(166),
                  width: u(104),
                  height: u(27),
                  borderRadius: u(6),
                  fontSize: u(8),
                  letterSpacing: "0.06em",
                }}
              >
                DETAILS
              </span>
              <span
                className="font-ui absolute grid place-items-center bg-white font-semibold text-[#111318]"
                style={{
                  left: u(126),
                  top: u(166),
                  width: u(118),
                  height: u(27),
                  borderRadius: u(6),
                  border: `${u(1)} solid #d7dce5`,
                  fontSize: u(8),
                  letterSpacing: "0.06em",
                }}
              >
                ENROLL NOW
              </span>
            </div>
          ))}

          <span
            data-anim="learner-pointer"
            className="absolute opacity-0"
            style={{ left: u(100), top: u(374) }}
          >
            <Pointer label="Learner" colour={LEARNER_BLUE} width={61} />
          </span>
        </div>

        {/* ================================================ 3. the explainer */}
        <PlayerModal title="Explainer : System design course" time="3:00">
          <Slide />
        </PlayerModal>

        {/* ================================================= 1. the brief */}
        <BriefScreen
          heading={
            <>
              Generate short course video with
              <br />
              your prompts
            </>
          }
          lines={BRIEF}
          controls={
            <>
              <BriefChip>Aspect - 1:1</BriefChip>
              <BriefChip>30 sec</BriefChip>
            </>
          }
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- the slide */

/** The first slide of the generated explainer, as the frame draws it. */
function Slide() {
  return (
    <>
      <span
        data-anim="slide"
        className="font-ui absolute grid place-items-center bg-[#e8f0ff] font-bold text-[#2f6fe0] opacity-0"
        style={{
          left: u(24),
          top: u(20),
          width: u(34),
          height: u(34),
          borderRadius: u(17),
          fontSize: u(16),
        }}
      >
        1
      </span>
      <span
        data-anim="slide"
        className="font-ui absolute font-bold text-[#14213d] opacity-0"
        style={{ left: u(70), top: u(22), fontSize: u(21) }}
      >
        Introduction
      </span>
      <span
        data-anim="slide"
        className="font-ui absolute text-[#4a5568] opacity-0"
        style={{ left: u(70), top: u(50), fontSize: u(10.5) }}
      >
        Understand what system design is and why it matters.
      </span>

      {/* the sketch */}
      <span
        data-anim="slide"
        className="absolute opacity-0"
        style={{
          left: u(24),
          top: u(84),
          width: u(292),
          height: u(196),
          borderRadius: u(14),
          border: `${u(2)} solid #cbd9f0`,
          background: "#f8fbff",
        }}
      >
        <span
          className="l-display absolute block text-[#14213d]"
          style={{
            left: u(28),
            top: u(24),
            fontSize: u(30),
            lineHeight: u(34),
          }}
        >
          System
          <br />
          Design
        </span>
        {/* the highlighter stroke the frame runs under the title */}
        <span
          className="absolute"
          style={{
            left: u(28),
            top: u(88),
            width: u(104),
            height: u(6),
            borderRadius: u(3),
            background: "#f7d774",
          }}
        />
        <span
          className="font-ui absolute block text-[#4a5568]"
          style={{
            left: u(28),
            top: u(108),
            width: u(224),
            fontSize: u(10),
            lineHeight: u(15),
          }}
        >
          Designing scalable, reliable and efficient systems for the real world.
        </span>
      </span>

      {/* the ticks the frame sketches around the board */}
      <svg
        aria-hidden="true"
        className="absolute"
        style={{ left: u(6), top: u(76), width: u(22), height: u(40) }}
        viewBox="0 0 22 40"
        fill="none"
        stroke="#14213d"
        strokeWidth="1.6"
        strokeLinecap="round"
      >
        <path d="M4 14 L14 8M2 24 L13 22M6 34 L15 30" />
      </svg>

      {CLAIMS.map((claim, i) => (
        <span
          key={claim.lines[0]}
          data-anim="slide"
          className="absolute flex items-center bg-white opacity-0"
          style={{
            left: u(330),
            top: u(i === 0 ? 96 : 158),
            width: u(146),
            height: u(52),
            paddingLeft: u(10),
            gap: u(9),
            borderRadius: u(12),
            border: `${u(2)} solid #cbd9f0`,
          }}
        >
          <ClaimIcon name={claim.icon} />
          <span
            className="font-ui block text-[#14213d]"
            style={{ fontSize: u(9.5), lineHeight: u(12.5) }}
          >
            {claim.lines[0]}
            <br />
            {claim.lines[1]}
          </span>
        </span>
      ))}
    </>
  );
}

function ClaimIcon({ name }: { name: string }) {
  return (
    <span
      className="grid shrink-0 place-items-center rounded-full bg-[#e8f0ff]"
      style={{ width: u(28), height: u(28) }}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2f6fe0"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: u(15), height: u(15) }}
      >
        {name === "globe" ? (
          <>
            <circle cx="12" cy="12" r="8.5" />
            <path d="M3.5 12h17M12 3.5c2.4 2.6 2.4 14.4 0 17-2.4-2.6-2.4-14.4 0-17z" />
          </>
        ) : (
          <>
            <circle cx="9" cy="9.5" r="3.2" />
            <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
            <path d="M15.5 7.2a3 3 0 0 1 0 5.6M17 18.6a5.6 5.6 0 0 0-1.6-3.9" />
          </>
        )}
      </svg>
    </span>
  );
}
