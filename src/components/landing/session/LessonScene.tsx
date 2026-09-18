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
 * "Lessons and study notes" — the Explainer Video scenario.
 * Figma: SHXsv4d0ROls7tuOqQBNLZ node 563:5565, three frames.
 *
 *   1  the trainer briefs the Twin and attaches their material (555:4217)
 *   2  the learner's course library, six modules deep (557:5078)
 *   3  one of them open, the Twin presenting over the board (561:5310)
 *
 * The three are one story rather than three states, so the lap plays them in
 * order: the brief is written and generated, the library it produces fills in,
 * and the learner opens the course that was just made. Frame 2 stays on screen
 * under frame 3's modal, exactly as the design draws it.
 *
 * The resting markup — what renders server-side and what stays under reduced
 * motion — is frame 1, complete: the brief written, the files attached, the
 * Twin's cursor on Generate. It is also where the lap starts, so nothing has to
 * move between first paint and the timeline taking over.
 */

const BRIEF = [
  "Create course for system design with the uploaded",
  "materials",
];

/** The library. Order is the Figma's: down the left column, then the right. */
const COURSES = [
  { title: "System design course", time: "12 min", x: 152.4, y: 74 },
  { title: "Binary Search", time: "10 min", x: 367.4, y: 74 },
  { title: "Arrays", time: "15 min", x: 152.4, y: 243 },
  { title: "Linked list", time: "11 min", x: 367.4, y: 243 },
];

const NAV = ["Home", "My Courses", "Progress", "Settings"];

/** The three attachments the brief carries, drawn as their file colours. */
const FILES = [
  { label: "W", bg: "#2b579a" },
  { label: "PDF", bg: "#d93025" },
  { label: "P", bg: "#d24726" },
];

const CARD_LINE = "#eceff4";
/** --l-accent, resolved: see the note on the card-open track. */
const ACCENT = "#ec3013";

/**
 * The system-design board, drawn twice: once as course art at 189×105 and once
 * inside the player at 493×346. One list drives both, in the small frame's
 * coordinates, so the two can never drift apart.
 */
const BOARD = {
  nodes: [
    {
      x: 8,
      y: 42,
      w: 32,
      h: 21,
      fill: "#e8f6ec",
      line: "#b3e0c1",
      label: "User",
      icon: "user",
    },
    {
      x: 50,
      y: 42,
      w: 38,
      h: 21,
      fill: "#ffffff",
      line: "#e0e5ee",
      label: "Load Balancer",
      icon: "globe",
    },
    {
      x: 98,
      y: 38,
      w: 30,
      h: 29,
      fill: "#f1ebfd",
      line: "#cdbcf6",
      label: "Web Servers",
      icon: "server",
    },
    {
      x: 140,
      y: 8,
      w: 44,
      h: 19,
      fill: "#e9f1fd",
      line: "#bad3f8",
      label: "Cache (Redis)",
      icon: "db",
    },
    {
      x: 140,
      y: 43,
      w: 44,
      h: 19,
      fill: "#f1ebfd",
      line: "#cdbcf6",
      label: "Database (MySQL)",
      icon: "db",
    },
    {
      x: 140,
      y: 78,
      w: 44,
      h: 19,
      fill: "#e6f5f4",
      line: "#a9ded9",
      label: "Storage (S3)",
      icon: "box",
    },
    {
      x: 88,
      y: 84,
      w: 44,
      h: 17,
      fill: "#fdf4e2",
      line: "#f0d59d",
      label: "Analytics Service",
      icon: "chart",
    },
  ],
  wires: [
    "M40 52.5 H50",
    "M88 52.5 H98",
    "M128 46 L140 22",
    "M128 52.5 H140",
    "M128 59 L140 84",
  ],
  /** The one the design dashes, because analytics reads the traffic rather
      than serving it. */
  dashed: "M113 67 V84",
};

export function LessonScene() {
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

    // Cursor paths travel in the stage's own unit, so they follow the column
    // as it resizes instead of being pinned to mount-time pixels.
    const uu = (n: number) => `calc(${n} * var(--l-u))`;
    const at = (x: number, y: number) => `translate(${uu(x)}, ${uu(y)})`;

    /* ------------------------------ 1. the trainer writes the brief (4-29%) */
    playBrief(play, playTyping, {
      lines: BRIEF,
      typeFrom: 0.045,
      typeTo: 0.165,
      controls: [0.18, 0.202, 0.224],
      pointerFrom: 0.2,
      pressAt: 0.262,
      outFrom: 0.29,
    });

    /* ---------------------------------- 2. the library it produces (30-58%) */
    play("[data-anim='library']", [
      { offset: 0, opacity: 0 },
      { offset: 0.3, opacity: 0 },
      { offset: 0.34, opacity: 1 },
      { offset: 0.965, opacity: 1 },
      { offset: 0.995, opacity: 0 },
      { offset: 1, opacity: 0 },
    ]);

    COURSES.forEach((_, i) =>
      playPop(play, "[data-anim='course']", 0.35 + i * 0.028, i),
    );

    // The learner arrives, crosses to the course that was just generated, and
    // opens it.
    play("[data-anim='learner-pointer']", [
      { offset: 0, opacity: 0, transform: at(96, 74) },
      { offset: 0.47, opacity: 0, transform: at(96, 74) },
      { offset: 0.49, opacity: 1, transform: at(78, 60) },
      {
        offset: 0.56,
        opacity: 1,
        transform: at(0, 0),
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      { offset: 0.6, opacity: 1, transform: at(0, 0) },
      { offset: 0.625, opacity: 0, transform: at(0, 0) },
      { offset: 1, opacity: 0, transform: at(96, 74) },
    ]);

    // A literal rather than var(--l-accent): WAAPI interpolates colour values,
    // not custom-property references.
    play("[data-anim='course-open']", [
      { offset: 0, borderColor: CARD_LINE },
      { offset: 0.55, borderColor: CARD_LINE },
      { offset: 0.575, borderColor: ACCENT },
      { offset: 0.62, borderColor: ACCENT },
      { offset: 0.66, borderColor: CARD_LINE },
      { offset: 1, borderColor: CARD_LINE },
    ]);

    /* ------------------------------------- 3. the lesson plays (59.5-97.5%) */
    playPlayer(play, {
      from: 0.595,
      to: 0.955,
      behind: "[data-anim='library']",
    });

    /* The board draws itself as the lesson runs: a node lands, then the wire
       that leaves it. The nodes only fade — an SVG transform is measured in
       viewBox units against the viewBox's own origin, so a "rise" here would
       swing them toward the middle of the board rather than lift them. */
    BOARD.nodes.forEach((_, i) =>
      play(
        "[data-anim='node']",
        [
          { offset: 0, opacity: 0 },
          { offset: 0.66 + i * 0.019, opacity: 0 },
          { offset: 0.695 + i * 0.019, opacity: 1 },
          { offset: 1, opacity: 1 },
        ],
        i,
      ),
    );

    // The stroke and its arrowhead wait together: a marker is painted whole
    // however little of the path it caps is showing.
    BOARD.wires.forEach((_, i) =>
      play(
        "[data-anim='wire']",
        [
          { offset: 0, strokeDashoffset: 100, opacity: 0 },
          { offset: 0.7 + i * 0.019, strokeDashoffset: 100, opacity: 0 },
          { offset: 0.702 + i * 0.019, strokeDashoffset: 100, opacity: 1 },
          {
            offset: 0.745 + i * 0.019,
            strokeDashoffset: 0,
            opacity: 1,
            easing: "cubic-bezier(0.4, 0, 0.2, 1)",
          },
          { offset: 1, strokeDashoffset: 0, opacity: 1 },
        ],
        i,
      ),
    );

    // The analytics link is dashed in the design, so it cannot be drawn by its
    // own dash offset — it fades in with the box it points at instead.
    play("[data-anim='wire-dashed']", [
      { offset: 0, opacity: 0 },
      { offset: 0.79, opacity: 0 },
      { offset: 0.83, opacity: 1 },
      { offset: 1, opacity: 1 },
    ]);

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
        {/* =================================================== 2. the library
            Drawn first so the brief can sit over it and the player over both,
            which is the order the three frames stack in. */}
        <div data-anim="library" className="absolute inset-0 opacity-0">
          {/* ------------------------------------------------------ sidebar */}
          <div
            className="absolute border-r bg-[#f8fafc]"
            style={{
              left: 0,
              top: u(6),
              width: u(131),
              height: u(432),
              borderColor: "#edf1f6",
            }}
          >
            <span
              className="font-ui absolute font-bold text-[#131722]"
              style={{ left: u(13), top: u(13), fontSize: u(11) }}
            >
              Trainer&rsquo;s Twin
            </span>
            <span
              className="absolute rounded-full bg-[#1cc26a]"
              style={{ left: u(13), top: u(33), width: u(4.5), height: u(4.5) }}
            />
            <span
              className="font-ui absolute text-[#77808f]"
              style={{ left: u(21), top: u(30), fontSize: u(7.5) }}
            >
              Always online
            </span>

            {NAV.map((item, i) => {
              const active = item === "My Courses";
              const top = 56 + i * 24.3;
              return (
                <span
                  key={item}
                  className="absolute flex items-center"
                  style={{
                    left: u(13),
                    top: u(top),
                    width: u(106),
                    height: u(22),
                    paddingLeft: u(7),
                    gap: u(7),
                    borderRadius: u(8),
                    ...(active
                      ? {
                          background: "#ffffff",
                          border: "1px solid #e7edf6",
                          boxShadow: `0 ${u(1)} ${u(3)} rgba(23,35,60,0.06)`,
                        }
                      : null),
                  }}
                >
                  <NavIcon name={item} active={active} />
                  <span
                    className="font-ui"
                    style={{
                      fontSize: u(8.5),
                      fontWeight: active ? 600 : 500,
                      color: active ? "#131722" : "#98a1b0",
                    }}
                  >
                    {item}
                  </span>
                </span>
              );
            })}

            <span
              className="absolute"
              style={{ left: u(13), top: u(392), width: u(106) }}
            >
              <span
                className="block border-t"
                style={{ borderColor: "#e7edf6" }}
              />
            </span>
            <span
              className="font-ui absolute grid place-items-center rounded-full bg-[#1d4ed8] font-bold text-white"
              style={{
                left: u(13),
                top: u(406),
                width: u(18.5),
                height: u(18.5),
                fontSize: u(7),
              }}
            >
              TT
            </span>
            <span
              className="font-ui absolute font-semibold text-[#131722]"
              style={{ left: u(38), top: u(406), fontSize: u(8.5) }}
            >
              Alex Student
            </span>
            <span
              className="font-ui absolute text-[#98a1b0]"
              style={{ left: u(38), top: u(417), fontSize: u(7) }}
            >
              Pro Member
            </span>
          </div>

          {/* --------------------------------------------------- the courses */}
          <span
            className="font-ui absolute font-bold text-[#131722]"
            style={{ left: u(152), top: u(27), fontSize: u(19) }}
          >
            My Courses
          </span>
          <span
            className="font-ui absolute text-[#8a93a3]"
            style={{ left: u(152), top: u(50), fontSize: u(8.5) }}
          >
            6 modules • 65 min total
          </span>

          {COURSES.map((course, i) => (
            <div
              key={course.title}
              data-anim="course"
              className="absolute bg-white opacity-0"
              style={{
                left: u(course.x),
                top: u(course.y),
                width: u(202.6),
                height: u(157),
                borderRadius: u(10),
                border: `${u(1)} solid ${CARD_LINE}`,
                boxShadow: `0 ${u(1)} ${u(3)} rgba(23,35,60,0.05)`,
              }}
            >
              {/* The card that gets opened carries the highlight track; the
                  border lives on this inner ring so the pop-in transform above
                  and the colour track below never fight over one property. */}
              <span
                {...(i === 0 ? { "data-anim": "course-open" } : null)}
                className="absolute"
                style={{
                  inset: 0,
                  borderRadius: u(10),
                  border: `${u(1.5)} solid #eceff4`,
                  ...(i === 0 ? null : { opacity: 0 }),
                }}
              />
              <div
                className="absolute overflow-hidden bg-[#fbfcfe]"
                style={{
                  left: u(6.7),
                  top: u(6.7),
                  width: u(189.3),
                  height: u(105),
                  borderRadius: u(8),
                  border: `${u(1)} solid #eef1f6`,
                }}
              >
                <CourseArt title={course.title} />
              </div>
              <span
                className="font-ui absolute font-semibold text-[#131722]"
                style={{ left: u(11), top: u(120), fontSize: u(10.5) }}
              >
                {course.title}
              </span>
              <span
                className="font-ui absolute text-[#8a93a3]"
                style={{ left: u(11), top: u(135), fontSize: u(8.5) }}
              >
                {course.time}
              </span>
            </div>
          ))}

          <span
            data-anim="learner-pointer"
            className="absolute opacity-0"
            style={{ left: u(302), top: u(176) }}
          >
            <Pointer label="Learner" colour={LEARNER_BLUE} width={61} />
          </span>
        </div>

        {/* ================================================ 3. the lesson */}
        <PlayerModal title="System design course" time="12:00">
          <Board />
          {/* the board tools, as in the frame */}
          <span
            className="absolute flex items-center bg-white"
            style={{
              left: u(18),
              top: u(252),
              height: u(26),
              paddingLeft: u(6),
              paddingRight: u(6),
              gap: u(4),
              borderRadius: u(8),
              border: `${u(1)} solid #e6eaf2`,
            }}
          >
            {["cursor", "square", "text", "line"].map((tool, i) => (
              <span
                key={tool}
                className="grid place-items-center"
                style={{
                  width: u(18),
                  height: u(18),
                  borderRadius: u(5),
                  background: i === 0 ? "#efe9fd" : "transparent",
                }}
              >
                <ToolIcon name={tool} active={i === 0} />
              </span>
            ))}
          </span>
        </PlayerModal>

        {/* ================================================= 1. the brief */}
        <BriefScreen
          heading={
            <>
              Generate course video with
              <br />
              your training materials
            </>
          }
          lines={BRIEF}
          controls={
            <>
              <span
                className="flex items-center bg-white"
                style={{
                  height: u(24),
                  paddingLeft: u(8),
                  paddingRight: u(10),
                  gap: u(5),
                  borderRadius: u(8),
                  border: `${u(1)} solid #e6e8ec`,
                }}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3f4552"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: u(11), height: u(11) }}
                >
                  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                  <path d="M5 8V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3" />
                  <path d="M8 12h5M8 16h3" />
                </svg>
                <span
                  className="font-ui text-[#3f4552]"
                  style={{ fontSize: u(10.5) }}
                >
                  Attach
                </span>
              </span>

              {FILES.map((file) => (
                <BriefChip key={file.label} background={file.bg}>
                  {file.label}
                </BriefChip>
              ))}
            </>
          }
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- the board */

/** The full-size board inside the player, drawn on the course-art grid. */
function Board() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 189 105"
      className="absolute"
      style={{ left: u(24), top: u(18), width: u(400), height: u(222) }}
    >
      <g fill="none" stroke="#b6bdcc" strokeWidth="0.9" strokeLinecap="round">
        {/* pathLength normalises every wire to 100 units, so one dash track
            draws them all at the same speed whatever their real length. */}
        {BOARD.wires.map((d) => (
          <path
            key={d}
            data-anim="wire"
            d={d}
            pathLength={100}
            strokeDasharray="100"
            strokeDashoffset={0}
            markerEnd="url(#l-arrow)"
          />
        ))}
        <path data-anim="wire-dashed" d={BOARD.dashed} strokeDasharray="3 3" />
      </g>
      <defs>
        <marker
          id="l-arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="5"
          markerHeight="5"
          markerUnits="userSpaceOnUse"
          orient="auto-start-reverse"
        >
          <path d="M0 1l8 4-8 4z" fill="#b6bdcc" />
        </marker>
      </defs>

      {BOARD.nodes.map((node) => (
        <g key={node.label} data-anim="node">
          <rect
            x={node.x}
            y={node.y}
            width={node.w}
            height={node.h}
            rx="3"
            fill={node.fill}
            stroke={node.line}
            strokeWidth="0.8"
          />
          <BoardIcon
            name={node.icon}
            x={node.x + node.w / 2 - 3.25}
            y={node.y + node.h * 0.3 - 3.25}
          />
          <text
            x={node.x + node.w / 2}
            y={node.y + node.h - 4}
            textAnchor="middle"
            fill="#3d4453"
            style={{ fontSize: "3.6px", fontWeight: 600 }}
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* -------------------------------------------------------- the course art */

/**
 * A course's banner. Each is the same diagram the module teaches, drawn at
 * thumbnail size — shapes only, since type this small reads as texture rather
 * than words.
 */
function CourseArt({ title }: { title: string }) {
  if (title === "System design course") {
    return (
      <svg aria-hidden="true" viewBox="0 0 189 105" className="h-full w-full">
        <g stroke="#b6bdcc" strokeWidth="0.8" fill="none">
          {BOARD.wires.map((d) => (
            <path key={d} d={d} />
          ))}
          <path d={BOARD.dashed} strokeDasharray="3 3" />
        </g>
        {BOARD.nodes.map((node) => (
          <g key={node.label}>
            <rect
              x={node.x}
              y={node.y}
              width={node.w}
              height={node.h}
              rx="3"
              fill={node.fill}
              stroke={node.line}
              strokeWidth="0.8"
            />
            <Rule x={node.x + 5} y={node.y + node.h / 2 - 1} w={node.w - 10} />
          </g>
        ))}
      </svg>
    );
  }

  if (title === "Binary Search") {
    const cells = [3, 7, 12, 18, 25, 31, 42, 56];
    return (
      <svg aria-hidden="true" viewBox="0 0 189 105" className="h-full w-full">
        <rect
          x="66"
          y="14"
          width="56"
          height="17"
          rx="4"
          fill="#f1ebfd"
          stroke="#cdbcf6"
          strokeWidth="0.8"
        />
        <circle
          cx="76"
          cy="22.5"
          r="4"
          fill="none"
          stroke="#8b6ff0"
          strokeWidth="0.9"
        />
        <Rule x={84} y={21} w={30} />
        {cells.map((_, i) => {
          const found = i === 4;
          return (
            <g key={i}>
              <rect
                x={16 + i * 20}
                y={44}
                width="17"
                height="15"
                rx="3"
                fill={found ? "#e6dcfb" : "#ffffff"}
                stroke={found ? "#a78bfa" : "#e0e5ee"}
                strokeWidth="0.8"
              />
              <Rule
                x={20 + i * 20}
                y={50}
                w={9}
                tone={found ? "#7c56e8" : "#c3cad6"}
              />
            </g>
          );
        })}
        {[
          { x: 14, fill: "#e8f6ec", line: "#b3e0c1" },
          { x: 68, fill: "#f1ebfd", line: "#cdbcf6" },
          { x: 122, fill: "#e9f1fd", line: "#bad3f8" },
        ].map((chip) => (
          <g key={chip.x}>
            <rect
              x={chip.x}
              y={72}
              width="53"
              height="19"
              rx="4"
              fill={chip.fill}
              stroke={chip.line}
              strokeWidth="0.8"
            />
            <Rule x={chip.x + 5} y={78} w={38} />
            <Rule x={chip.x + 5} y={83} w={26} />
          </g>
        ))}
      </svg>
    );
  }

  if (title === "Arrays") {
    return (
      <svg aria-hidden="true" viewBox="0 0 189 105" className="h-full w-full">
        <rect
          x="10"
          y="10"
          width="62"
          height="21"
          rx="4"
          fill="#e8f6ec"
          stroke="#b3e0c1"
          strokeWidth="0.8"
        />
        <Rule x={15} y={16} w={45} />
        <Rule x={15} y={22} w={33} />
        <rect
          x="117"
          y="10"
          width="62"
          height="21"
          rx="4"
          fill="#e9f1fd"
          stroke="#bad3f8"
          strokeWidth="0.8"
        />
        <Rule x={122} y={16} w={45} />
        <Rule x={122} y={22} w={33} />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <g key={i}>
            <rect
              x={44 + i * 17}
              y={44}
              width="17"
              height="11"
              rx="2"
              fill="#ffffff"
              stroke="#e0e5ee"
              strokeWidth="0.8"
            />
            <rect
              x={44 + i * 17}
              y={55}
              width="17"
              height="13"
              rx="2"
              fill="#f1ebfd"
              stroke="#cdbcf6"
              strokeWidth="0.8"
            />
            <Rule x={49 + i * 17} y={60} w={7} tone="#7c56e8" />
          </g>
        ))}
        <Rule x={16} y={48} w={22} />
        <Rule x={16} y={60} w={22} />
        <rect
          x="62"
          y="78"
          width="66"
          height="19"
          rx="4"
          fill="#fdf4e2"
          stroke="#f0d59d"
          strokeWidth="0.8"
        />
        <Rule x={67} y={84} w={50} />
        <Rule x={67} y={89} w={34} />
      </svg>
    );
  }

  // Linked list
  return (
    <svg aria-hidden="true" viewBox="0 0 189 105" className="h-full w-full">
      <rect
        x="8"
        y="8"
        width="66"
        height="22"
        rx="4"
        fill="#e8f6ec"
        stroke="#b3e0c1"
        strokeWidth="0.8"
      />
      <Rule x={13} y={14} w={50} />
      <Rule x={13} y={20} w={38} />
      <rect
        x="113"
        y="8"
        width="68"
        height="22"
        rx="4"
        fill="#e9f1fd"
        stroke="#bad3f8"
        strokeWidth="0.8"
      />
      <Rule x={118} y={14} w={52} />
      <Rule x={118} y={20} w={38} />
      <rect
        x="6"
        y="52"
        width="20"
        height="13"
        rx="3"
        fill="#e8f6ec"
        stroke="#b3e0c1"
        strokeWidth="0.8"
      />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect
            x={32 + i * 39}
            y={46}
            width="33"
            height="24"
            rx="3"
            fill="#f7f5ff"
            stroke="#cdbcf6"
            strokeWidth="0.8"
          />
          <Rule x={37 + i * 39} y={51} w={16} tone="#7c56e8" />
          <Rule x={37 + i * 39} y={61} w={12} />
          {i < 3 ? (
            <path
              d={`M${65 + i * 39} 58 H${71 + i * 39}`}
              stroke="#b6bdcc"
              strokeWidth="0.8"
              fill="none"
            />
          ) : null}
        </g>
      ))}
      <path d="M26 58 H32" stroke="#b6bdcc" strokeWidth="0.8" fill="none" />
      <rect
        x="112"
        y="80"
        width="70"
        height="19"
        rx="4"
        fill="#fdf4e2"
        stroke="#f0d59d"
        strokeWidth="0.8"
      />
      <Rule x={117} y={86} w={52} />
      <Rule x={117} y={91} w={36} />
    </svg>
  );
}

/** A line of type at thumbnail scale. */
function Rule({
  x,
  y,
  w,
  tone = "#c3cad6",
}: {
  x: number;
  y: number;
  w: number;
  tone?: string;
}) {
  return <rect x={x} y={y} width={w} height="2.2" rx="1.1" fill={tone} />;
}

/* ------------------------------------------------------------------ icons */

function NavIcon({ name, active }: { name: string; active: boolean }) {
  const colour = active ? "#131722" : "#a8b0bd";
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: colour,
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    style: { width: u(10.5), height: u(10.5) },
  };

  if (name === "Home") {
    return (
      <svg aria-hidden="true" {...common}>
        <path d="M4 11l8-6 8 6v8a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z" />
      </svg>
    );
  }
  if (name === "My Courses") {
    return (
      <svg aria-hidden="true" {...common}>
        <path d="M4 5h6a2 2 0 0 1 2 2v12a2 2 0 0 0-2-2H4zM20 5h-6a2 2 0 0 0-2 2v12a2 2 0 0 1 2-2h6z" />
      </svg>
    );
  }
  if (name === "Progress") {
    return (
      <svg aria-hidden="true" {...common}>
        <path d="M5 20V10M12 20V4M19 20v-6" />
      </svg>
    );
  }
  return (
    <svg aria-hidden="true" {...common}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v2M12 19v2M4.2 7.5l1.7 1M18.1 15.5l1.7 1M4.2 16.5l1.7-1M18.1 8.5l1.7-1" />
    </svg>
  );
}

function ToolIcon({ name, active }: { name: string; active: boolean }) {
  const colour = active ? "#6d43e8" : "#7b8494";
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: colour,
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    style: { width: u(10), height: u(10) },
  };

  if (name === "cursor") {
    return (
      <svg aria-hidden="true" {...common}>
        <path d="M5 3l14 6-6 2-2 6z" />
      </svg>
    );
  }
  if (name === "square") {
    return (
      <svg aria-hidden="true" {...common}>
        <rect x="4" y="5" width="16" height="14" rx="2" />
      </svg>
    );
  }
  if (name === "text") {
    return (
      <svg aria-hidden="true" {...common}>
        <path d="M5 5h14M12 5v14M9 19h6" />
      </svg>
    );
  }
  return (
    <svg aria-hidden="true" {...common}>
      <path d="M5 19L19 5" />
    </svg>
  );
}

/** The glyph a board node wears, drawn on a 6.5-unit square. */
function BoardIcon({ name, x, y }: { name: string; x: number; y: number }) {
  const common = {
    fill: "none",
    stroke: "#5b6272",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg x={x} y={y} width="6.5" height="6.5" viewBox="0 0 24 24">
      {name === "user" ? (
        <g {...common}>
          <circle cx="12" cy="8" r="3.4" />
          <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
        </g>
      ) : null}
      {name === "globe" ? (
        <g {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M4 12h16M12 4c2.2 2.4 2.2 13.6 0 16-2.2-2.4-2.2-13.6 0-16z" />
        </g>
      ) : null}
      {name === "server" ? (
        <g {...common}>
          <rect x="4.5" y="4" width="15" height="5" rx="1.6" />
          <rect x="4.5" y="15" width="15" height="5" rx="1.6" />
          <path d="M8 6.5h.01M8 17.5h.01" />
        </g>
      ) : null}
      {name === "db" ? (
        <g {...common}>
          <ellipse cx="12" cy="6.5" rx="7" ry="2.8" />
          <path d="M5 6.5v11c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8v-11" />
          <path d="M5 12c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8" />
        </g>
      ) : null}
      {name === "box" ? (
        <g {...common}>
          <rect x="4.5" y="4.5" width="15" height="15" rx="2.4" />
          <path d="M9 9.5h6M9 14.5h6" />
        </g>
      ) : null}
      {name === "chart" ? (
        <g {...common}>
          <path d="M5 19V9M11 19V5M17 19v-6" />
        </g>
      ) : null}
    </svg>
  );
}
