import Image from "next/image";
import type { ReactNode } from "react";
import { LogoSymbol } from "@/components/Logo";
import { cn } from "@/components/cn";
import { SiriOrb } from "@/components/SiriOrb";
import { MutedClip } from "./MutedClip";
import { Container, Eyebrow, SectionTitle, u } from "./primitives";

/**
 * Two 1198 x 560 rows, each a pair of 599 x 560 panels: a pale blueprint panel
 * carrying the copy, and a mesh-gradient panel carrying an illustration. The
 * pairing alternates side down the page.
 */
export function BuildYourTwin() {
  return (
    <section id="build-your-twin" className="bg-white py-20 md:py-[104px]">
      <Container>
        <div className="flex flex-col items-center">
          {/* Not "How it works" — the section below owns that name, and the
              nav points at it. This one is the setup: every row here is
              something you hand the Twin. */}
          <Eyebrow data-reveal className="text-[var(--l-eyebrow)]">
            What you give your twin
          </Eyebrow>
          <SectionTitle data-reveal data-reveal-delay="80" className="mt-4">
            Build your twin today
          </SectionTitle>
        </div>

        <div className="mt-14 md:mt-[128px]">
          <Row
            data-reveal
            copy={{
              title: "Give it your knowledge",
              body: "Integrate your notes from Notion, Notebook LM, Google Drive to reflect your accumulated knowledge",
            }}
            art={<KnowledgeArt />}
          />
          <Row
            data-reveal
            reversed
            copy={{
              title: "Give it your persona",
              body: "Clone your voice, then tune how your twin questions, coaches and evaluates — so it doesn’t only sound like you, it teaches like you.",
            }}
            art={<VoiceArt />}
          />
        </div>
      </Container>
    </section>
  );
}

function Row({
  copy,
  art,
  reversed = false,
  ...rest
}: {
  copy: { title: string; body: string };
  art: ReactNode;
  reversed?: boolean;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="grid md:grid-cols-2" {...rest}>
      {/* Copy panel. Laid out in normal flow rather than a scaled stage — text
          that shrinks with a transform stops being readable long before the
          layout runs out of room. */}
      <div
        className={cn(
          "l-grid-light flex flex-col justify-center px-8 py-16 md:aspect-[599/560] md:px-[64px] md:py-0",
          reversed && "md:order-2",
        )}
      >
        <h3 className="l-display text-[24px] md:text-[30px]">{copy.title}</h3>
        <p className="font-ui mt-4 max-w-[405px] text-[16px] leading-[24px] text-[var(--l-ink-body)]">
          {copy.body}
        </p>
        {/* A link, not a button: it goes to the form in the footer, which is
            where every other CTA on the page points. Sized by its label rather
            than the design's fixed 108px, which was cut for the one word this
            used to say; `self-start` keeps it from stretching the column. */}
        <a
          href="#early-access"
          /* Button's `strong` at size md — the in-page CTA size. Written out
             rather than using <Button> because this one is a link, and the
             component renders a <button> only; that gap is worth closing in
             the system. */
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-ui font-semibold rounded-sm border border-transparent bg-strong text-on-strong hover:bg-strong-hover transition-colors duration-150 ease-standard mt-9 h-10 w-fit self-start px-5 text-[14px]"
        >
          Request for early demo
        </a>
      </div>

      <Stage className={cn(reversed && "md:order-1")}>{art}</Stage>
    </div>
  );
}

/**
 * A 599 x 560 mesh panel. Its contents are positioned in the Figma's own
 * coordinates and expressed through `u()`, so the illustration keeps every
 * offset in proportion right down to a phone rather than being cropped.
 */
function Stage({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    // Below ~440px the labels inside would fall under 8px, so the stage stops
    // shrinking there and the panel crops it instead — centred, so it loses the
    // same amount from each side. That is what the design already does with
    // this row: the learner cards are drawn running off both edges.
    <div className={cn("flex justify-center overflow-hidden", className)}>
      <div className="l-fit w-full min-w-[440px]">
        <div
          className="l-stage l-mesh l-grain overflow-hidden"
          style={{ ["--l-design" as string]: "599", height: u(560) }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ art 1 */

/**
 * One beat of the knowledge illustration, in seconds. A pulse leaves a source
 * tile every quarter beat and a tile trades its two marks every two beats.
 * Must match the durations given to `.l-flow` and `.l-cyc-2` in landing.css.
 */
const BEAT = 2.8;

/** A 26px mark inside a source tile: one of the exports in /public. */
function logo(src: string) {
  return (
    <Image
      src={src}
      alt=""
      width={26}
      height={26}
      className="object-contain"
      style={{ width: u(26), height: u(26) }}
    />
  );
}

/** The same mark for the three sources with no export to point at. */
function Drawn({ children }: { children: ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      style={{ width: u(26), height: u(26) }}
    >
      {children}
    </svg>
  );
}

const GOOGLE_DOC = (
  <Drawn>
    <path
      d="M5.5 3.4A2.4 2.4 0 0 1 7.9 1h6.2L19 5.9v14.7a2.4 2.4 0 0 1-2.4 2.4H7.9a2.4 2.4 0 0 1-2.4-2.4V3.4Z"
      fill="var(--tt-blue-500)"
    />
    <path d="M14.1 1 19 5.9h-4.9V1Z" fill="var(--tt-blue-300)" />
    <path
      d="M8.6 10.4h6.8M8.6 13.4h6.8M8.6 16.4h4.3"
      stroke="#fff"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </Drawn>
);

const VIDEO = (
  <Drawn>
    <rect
      x="2"
      y="5.6"
      width="14.2"
      height="12.8"
      rx="3.4"
      fill="var(--tt-neutral-800)"
    />
    <path d="M17.6 9.6 22 7.1v9.8l-4.4-2.5V9.6Z" fill="var(--tt-neutral-800)" />
    <path d="M7.4 9.5 11.9 12l-4.5 2.5V9.5Z" fill="#fff" />
  </Drawn>
);

/* Two pages rather than one, so it does not read as a second Google Doc when
   both drawn marks happen to be up at the same time. */
const DOCS = (
  <Drawn>
    <rect
      x="3.2"
      y="3"
      width="11.4"
      height="15"
      rx="2.2"
      fill="var(--tt-neutral-300)"
    />
    <rect
      x="5.8"
      y="6.6"
      width="12.8"
      height="15.4"
      rx="2.4"
      fill="var(--tt-neutral-700)"
    />
    <path
      d="M8.6 11.2h7.2M8.6 14.2h7.2M8.6 17.2h4.4"
      stroke="#fff"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </Drawn>
);

/**
 * The four source tiles. Each holds two marks and trades between them, so the
 * fan reads as "wherever you already keep the material" rather than as four
 * fixed vendors.
 */
const SOURCES = [
  { x: 138, y: 118, marks: [logo("/tt/logo-notion.png"), GOOGLE_DOC] },
  { x: 230, y: 146, marks: [logo("/tt/logo-youtube.png"), VIDEO] },
  { x: 323, y: 118, marks: [logo("/tt/logo-pdf.png"), DOCS] },
  {
    x: 415,
    y: 146,
    marks: [logo("/tt/logo-drive.png"), logo("/tt/logo-notion.png")],
  },
];

/**
 * All four drop to one bus at y=238 before the single line down to the pill.
 * Turning each at its own height would draw two staggered buses, which is not
 * what the design does.
 */
const ROUTES = SOURCES.map((s) => {
  const cx = s.x + 23;
  const turn = cx < 300 ? cx + 14 : cx - 14;
  return `M${cx} ${s.y + 46} V 224 Q ${cx} 238 ${turn} 238 H 300`;
});

function KnowledgeArt() {
  return (
    <>
      {/* Connectors are drawn in one SVG across the whole stage, in design
          coordinates — the viewBox does the scaling, so no u() needed inside. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 599 560"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        {ROUTES.map((d) => (
          <path key={d} d={d} stroke="var(--tt-neutral-300)" strokeWidth="1" />
        ))}
        <path
          d="M300 238 V 260"
          stroke="var(--tt-neutral-300)"
          strokeWidth="1"
        />
        <path
          d="M300 306 V 349"
          stroke="var(--tt-neutral-300)"
          strokeWidth="1"
        />

        {/* The pulses ride the same routes, extended past the bus to the twin,
            and are drawn after every grey line so none of them cuts across a
            pulse on the shared trunk. The pill is opaque and sits over this
            SVG, which is what makes a pulse look like it goes into the pill
            and comes out the bottom on its way down. */}
        {ROUTES.map((d, i) => (
          <path
            /* Prefixed: the grey line above is keyed on the same path string,
               and two siblings cannot share a key. */
            key={`flow-${d}`}
            d={`${d} V 349`}
            pathLength={100}
            stroke="var(--tt-blue-500)"
            strokeWidth="2"
            strokeLinecap="round"
            className="l-flow"
            style={{ animationDelay: `${((i * BEAT) / 4).toFixed(2)}s` }}
          />
        ))}
      </svg>

      {SOURCES.map((s, i) => (
        <div
          key={s.x}
          className="absolute grid place-items-center bg-white"
          style={{
            left: u(s.x),
            top: u(s.y),
            width: u(46),
            height: u(46),
            borderRadius: u(11),
            boxShadow: `0 ${u(4)} ${u(12)} rgba(23,35,60,0.10)`,
          }}
        >
          {/* Hidden rather than labelled: the copy beside the illustration is
              what names the sources, and eight logo names read out in a row
              would tell a screen reader user nothing. */}
          <span
            aria-hidden="true"
            className="l-cyc l-cyc-2 relative block"
            style={{ width: u(26), height: u(26) }}
          >
            {s.marks.map((mark, k) => (
              <span
                key={k}
                className="grid place-items-center"
                /* Negative, so every tile is already showing its first mark at
                   t=0 instead of fading one in. The four then trade a quarter
                   beat apart, the same cascade the pulses leave in. */
                style={{
                  animationDelay: `${(k * BEAT - (i * BEAT) / 4).toFixed(2)}s`,
                }}
              >
                {mark}
              </span>
            ))}
          </span>
        </div>
      ))}

      {/* The design stacks two cards here: a faded one behind, and the pill
          itself. The pill no longer names a rotating facet, so the card behind
          carries no second word — it is the stack the frame draws, nothing
          more. */}
      <div
        className="absolute bg-white/55"
        style={{
          left: u(216),
          top: u(248),
          width: u(169),
          height: u(40),
          borderRadius: u(10),
        }}
      />
      <div
        className="font-ui absolute grid place-items-center bg-white text-black"
        style={{
          left: u(204),
          top: u(260),
          width: u(193),
          height: u(46),
          borderRadius: u(12),
          fontSize: u(16),
          boxShadow: `0 ${u(6)} ${u(16)} rgba(23,35,60,0.10)`,
        }}
      >
        Knowledge
      </div>

      <div
        className="absolute grid place-items-center bg-white"
        style={{
          left: u(255),
          top: u(349),
          width: u(92),
          height: u(87),
          borderRadius: u(16),
          boxShadow: `0 ${u(6)} ${u(18)} rgba(23,35,60,0.10)`,
        }}
      >
        <TwinOrbit />
      </div>
      {/* Wider than the card it sits under: the line is a sentence now, and
          it stays centred on the twin rather than on the stage. */}
      <span
        className="l-ellipsis font-ui absolute text-center font-semibold whitespace-nowrap text-black"
        style={{ left: u(141), top: u(449), width: u(320), fontSize: u(14) }}
      >
        Updating your twin with your knowledge
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </span>
    </>
  );
}

/**
 * The Twin, drawn as an atom: the mark at the centre with two rings of dots
 * turning around it (Figma 462:15). Angles are in the usual maths convention —
 * counterclockwise from east — and flipped into SVG's y-down space here, so
 * the table below reads the way the design is described.
 */
const RINGS = [
  {
    radius: 42,
    dot: 2.2,
    seconds: 22,
    reverse: false,
    dots: [
      { angle: 145, fill: "var(--tt-orange-400)" },
      { angle: 35, fill: "var(--tt-gold-500)" },
      { angle: -25, fill: "#22c07b" },
      { angle: -75, fill: "var(--tt-neutral-500)" },
      { angle: 190, fill: "var(--tt-blue-500)" },
    ],
  },
  {
    radius: 25,
    dot: 2,
    seconds: 16,
    reverse: true,
    dots: [
      { angle: 70, fill: "var(--tt-red-500)" },
      { angle: 175, fill: "var(--tt-gold-500)" },
      { angle: -50, fill: "var(--tt-blue-500)" },
    ],
  },
];

function TwinOrbit() {
  return (
    <span
      className="relative grid place-items-center"
      style={{ width: u(80), height: u(80) }}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        fill="none"
        className="absolute inset-0 h-full w-full"
      >
        {RINGS.map((ring) => (
          <g key={ring.radius}>
            <circle
              cx="50"
              cy="50"
              r={ring.radius}
              stroke="var(--tt-neutral-200)"
              strokeWidth="1.6"
            />
            <g
              className={`l-orbit${ring.reverse ? " l-orbit-rev" : ""}`}
              style={{ ["--l-orbit" as string]: `${ring.seconds}s` }}
            >
              {ring.dots.map((dot) => {
                const rad = (dot.angle * Math.PI) / 180;
                return (
                  <circle
                    key={dot.angle}
                    cx={50 + ring.radius * Math.cos(rad)}
                    cy={50 - ring.radius * Math.sin(rad)}
                    r={ring.dot}
                    fill={dot.fill}
                  />
                );
              })}
            </g>
          </g>
        ))}
      </svg>

      <span
        className="relative block text-[var(--l-brand)]"
        style={{ width: u(20), height: u(20) }}
      >
        <LogoSymbol size={20} className="h-full w-full" />
      </span>
    </span>
  );
}

/* ------------------------------------------------------------------ art 2 */

/**
 * "Give it your voice" — Figma 583:6096, two frames of one mind map.
 *
 *   1  the hub holds a forming blob, captioned "Building Your Twin"
 *   2  the hub holds the trainer, captioned "Your Twin Ready!"
 *
 * Eight traits feed the hub down two curved bundles. A blue pulse runs each
 * wire inward on a 2.25s cycle, and the orb counts up as they arrive: three
 * full rounds from both sides take it to 100%, at which point the trainer
 * takes the hub and a burst goes off behind it. Two more rounds run against
 * him before the lap starts over.
 *
 * Frame 2 is where reduced motion rests: it is the finished state, and the one
 * the caption is counting towards.
 */

const NODE = { w: 129.5, h: 36 };
const LEFT_X = 35.5;
const RIGHT_X = 434;
/** The four rows both columns share. */
const ROWS = [184, 248, 312, 376];
const HUB = { x: 254, y: 233, w: 92, h: 91 };
const HUB_MID = HUB.y + HUB.h / 2;

/**
 * The burst behind the hub when the count lands. Twelve pieces on a ring of
 * varied radii rather than a random scatter — random would change on every
 * render and give the server and the client different markup.
 */
const CONFETTI = Array.from({ length: 12 }, (_, i) => {
  const angle = (i / 12) * Math.PI * 2 + 0.35;
  const distance = 52 + ((i * 37) % 34);
  return {
    x: Math.round(Math.cos(angle) * distance),
    y: Math.round(Math.sin(angle) * distance),
    rot: (i % 2 ? 1 : -1) * (120 + ((i * 53) % 180)),
    w: 3 + (i % 3),
    h: 5 + (i % 2) * 2,
    fill: [
      "var(--tt-orange-400)",
      "var(--tt-blue-500)",
      "#22c07b",
      "var(--tt-gold-500)",
      "var(--tt-red-500)",
      "#a63ce8",
    ][i % 6],
  };
});

/** Left column first, then right — the order the wires are generated in. */
const TRAITS = [
  { label: "Coaching", icon: "bulb", side: "left" },
  { label: "Personalisation", icon: "person", side: "left" },
  { label: "Evaluation", icon: "file", side: "left" },
  { label: "Questioning", icon: "ask", side: "left" },
  { label: "Voice", icon: "message", side: "right" },
  { label: "Tone", icon: "sliders", side: "right" },
  { label: "Pacing", icon: "gauge", side: "right" },
  { label: "Pauses", icon: "clock", side: "right" },
] as const;

/**
 * One wire per trait, leaving the pill's inner edge and arriving flat at the
 * hub. The first control point holds the line horizontal out of the pill and
 * the second flattens it into the hub, which is what fans the outer rows wide
 * and leaves the middle two nearly straight.
 */
const WIRES = TRAITS.map((trait, i) => {
  const y = ROWS[i % ROWS.length];
  return trait.side === "left"
    ? `M${LEFT_X + NODE.w} ${y} C${LEFT_X + NODE.w + 52} ${y}, ${HUB.x - 46} ${HUB_MID}, ${HUB.x} ${HUB_MID}`
    : `M${RIGHT_X} ${y} C${RIGHT_X - 52} ${y}, ${HUB.x + HUB.w + 46} ${HUB_MID}, ${HUB.x + HUB.w} ${HUB_MID}`;
});

function VoiceArt() {
  return (
    <>
      <svg
        aria-hidden="true"
        className="absolute inset-0"
        viewBox="0 0 599 560"
        fill="none"
      >
        {WIRES.map((d) => (
          <path key={d} d={d} stroke="var(--tt-neutral-300)" strokeWidth="1" />
        ))}
        {/* The pulses ride the same paths. Both columns fire their top row
            together, so the two bundles read as one arrival rather than eight. */}
        {WIRES.map((d, i) => (
          <path
            key={`flow-${d}`}
            d={d}
            pathLength={100}
            stroke="var(--tt-blue-500)"
            strokeWidth="2.4"
            strokeLinecap="round"
            className="l-mind-flow"
            style={{
              animationDelay: `${((i % ROWS.length) * 0.18).toFixed(2)}s`,
            }}
          />
        ))}
      </svg>

      {TRAITS.map((trait, i) => {
        const y = ROWS[i % ROWS.length];
        return (
          <span
            key={trait.label}
            className="absolute flex items-center justify-center bg-white/45"
            style={{
              left: u(trait.side === "left" ? LEFT_X : RIGHT_X),
              top: u(y - NODE.h / 2),
              width: u(NODE.w),
              height: u(NODE.h),
              gap: u(7),
              borderRadius: u(NODE.h / 2),
              border: `${u(1)} solid var(--tt-neutral-300)`,
            }}
          >
            <TraitIcon name={trait.icon} />
            <span
              className="font-ui text-[var(--tt-neutral-900)]"
              style={{ fontSize: u(13) }}
            >
              {trait.label}
            </span>
          </span>
        );
      })}

      {/* ------------------------------------------------------------ the hub */}
      {CONFETTI.map((piece, i) => (
        <span
          key={i}
          className="l-confetti absolute"
          style={{
            left: u(HUB.x + HUB.w / 2),
            top: u(HUB_MID),
            width: u(piece.w),
            height: u(piece.h),
            borderRadius: u(1),
            background: piece.fill,
            ["--l-x" as string]: u(piece.x),
            ["--l-y" as string]: u(piece.y),
            ["--l-rot" as string]: `${piece.rot}deg`,
          }}
        />
      ))}

      <div
        className="absolute overflow-hidden bg-white"
        style={{
          left: u(HUB.x),
          top: u(HUB.y),
          width: u(HUB.w),
          height: u(HUB.h),
          borderRadius: u(22),
          boxShadow: `0 ${u(10)} ${u(24)} rgba(23,35,60,0.10)`,
        }}
      >
        {/* forming: the orb the first frame draws. 12s rather than the
            component's 20s default — the hub only holds the screen for half of
            a 9s lap, and a slower turn would read as a still. The blur and
            contrast are pushed off their defaults too: at 42px across, the
            proportional blur alone leaves the colours pastel, where the frame
            has them saturated. */}
        <span className="l-mind-orb absolute inset-0 grid place-items-center">
          <SiriOrb
            size={u(58)}
            animationDuration={12}
            blur={u(3)}
            contrast={2.6}
          />
          {/* The count reads out of a registered custom property; the text is
              drawn by the ::after in landing.css. */}
          <span
            className="l-count font-ui absolute inset-0 grid place-items-center font-semibold text-[var(--tt-neutral-900)]"
            style={{ fontSize: u(15) }}
          />
        </span>

        {/* ready: the trainer, silent */}
        <MutedClip
          src="/tt/presenter.mp4"
          className="l-mind-twin absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <span
        className="absolute block text-center"
        style={{ left: 0, right: 0, top: u(340) }}
      >
        <span
          className="l-mind-orb font-ui absolute right-0 left-0 font-semibold text-[var(--tt-neutral-900)]"
          style={{ fontSize: u(13) }}
        >
          Building Your Twin
        </span>
        <span
          className="l-mind-twin font-ui absolute right-0 left-0 font-semibold text-[var(--tt-neutral-900)]"
          style={{ fontSize: u(13) }}
        >
          Your Twin Ready!
        </span>
      </span>
    </>
  );
}

/** The mark on a trait pill, drawn on the 24 grid the rest of the page uses. */
function TraitIcon({ name }: { name: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--tt-neutral-900)",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    style: { width: u(16), height: u(16) },
  };

  if (name === "bulb") {
    return (
      <svg aria-hidden="true" {...common}>
        <path d="M9.5 15.5a5 5 0 1 1 5 0V17h-5z" />
        <path d="M10 20h4" />
        <path d="M12 2.5v1.4M4.8 6l1 1M19.2 6l-1 1M3 13h1.4M19.6 13H21" />
      </svg>
    );
  }
  if (name === "person") {
    return (
      <svg aria-hidden="true" {...common}>
        <circle cx="9.5" cy="7.5" r="3" />
        <path d="M3.5 19a6 6 0 0 1 9-5.2" />
        <circle cx="17.5" cy="17" r="2.2" />
        <path d="M17.5 13.4v1M17.5 20.6v1M14.4 15.2l.9.5M19.7 18.3l.9.5M14.4 18.8l.9-.5M19.7 15.7l.9-.5" />
      </svg>
    );
  }
  if (name === "file") {
    return (
      <svg aria-hidden="true" {...common}>
        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
        <path d="M19 8v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7z" />
        <path d="M9 14.5l2 2 4-4" />
      </svg>
    );
  }
  if (name === "ask") {
    return (
      <svg aria-hidden="true" {...common}>
        <circle cx="12" cy="12" r="9" strokeDasharray="3 2.6" />
        <path d="M9.8 9.6a2.3 2.3 0 1 1 3.2 2.1c-.7.3-1.1.9-1.1 1.6v.4" />
        <path d="M12 16.6h.01" />
      </svg>
    );
  }
  if (name === "message") {
    return (
      <svg aria-hidden="true" {...common}>
        <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H12l-5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5z" />
        <path d="M8.5 10h.01M12 10h.01M15.5 10h.01" />
      </svg>
    );
  }
  if (name === "sliders") {
    return (
      <svg aria-hidden="true" {...common}>
        <path d="M4 7h4M12 7h8M4 12h10M18 12h2M4 17h6M14 17h6" />
        <circle cx="10" cy="7" r="1.8" />
        <circle cx="16" cy="12" r="1.8" />
        <circle cx="12" cy="17" r="1.8" />
      </svg>
    );
  }
  if (name === "gauge") {
    return (
      <svg aria-hidden="true" {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M15.5 8.5 11 13" />
      </svg>
    );
  }
  return (
    <svg aria-hidden="true" {...common}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l2.5 1.6" />
      <path d="M10.6 16.4v2.2M13.4 16.4v2.2" />
    </svg>
  );
}
