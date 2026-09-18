import { LogoSymbol } from "@/components/Logo";
import { cn } from "@/components/cn";
import { CursorGrid } from "@/components/CursorGrid";
import { Container, PrimaryButton } from "./primitives";
import { TwinUpdated } from "./TwinUpdated";
import { TypedLine } from "./TypedLine";

/** What the headline types through, after "We help you build". */
const BUILDS = [
  "Your interactive AI twin",
  "Course explainer video",
  "Promotional short videos",
];

/** Pill labels down the right of the diagram, top to bottom, as drawn. */
const FACETS = [
  { label: "Trainer DNA", y: 306 },
  { label: "Coaching pattern & style", y: 392 },
  { label: "AI Twin of You", y: 478 },
];

/** Must match the `l-pulse` animation duration in landing.css. */
const PULSE_SECONDS = 3.4;

/** Where the connectors leave the mark, in stage coordinates. */
const HUB = { x: 306, y: 392 };
const PILL_X = 382;

/**
 * The expertise belt, in stage coordinates.
 *
 * BELT_CLIP is the scan line itself (the beam is 2px at x=285): the belt is
 * clipped there so a card is cut off by the line rather than passing behind it.
 * A lap is one full set of cards, so the duplicated set lands exactly where the
 * first began and the loop has no seam.
 */
const BELT_SLOT = 96;
const BELT_LAP = BELT_SLOT * 3;
const BELT_CLIP = 286;
const CARD_LEFT = -22;
const BELT_SECONDS = 12;

export function Hero() {
  return (
    <section id="top" className="relative bg-white">
      {/* Behind everything: the diagram panel to the right is opaque, so the
          lattice is only ever seen against the white half. */}
      <div className="pointer-events-none absolute inset-0">
        <CursorGrid
          cellSize={48}
          radius={150}
          color="var(--tt-orange-500)"
          falloff="smooth"
          maxOpacity={0.22}
          fillOpacity={0.05}
          lineWidth={0.8}
          cellRadius={3}
          holdTime={140}
          fadeDuration={1500}
          pulseSpeed={520}
        />
      </div>

      <Container className="relative grid items-stretch gap-12 lg:grid-cols-2 lg:gap-0">
        {/* ------------------------------------------------------------ copy */}
        <div className="flex flex-col justify-center py-16 lg:h-[866px] lg:py-0 lg:pr-16">
          <p
            data-reveal
            data-reveal-y="16"
            className="font-mono l-gradient-ink l-gradient-ink--eyebrow text-[11px] leading-[1.14] font-semibold"
          >
            Twin for Tech Trainers
          </p>

          <h1
            data-reveal
            data-reveal-delay="90"
            className="l-display mt-6 text-[36px] sm:text-[44px] lg:text-[64px]"
          >
            <span className="block text-black">We help you build</span>
            <TypedLine phrases={BUILDS} className="mt-[4px]" />
          </h1>

          <p
            data-reveal
            data-reveal-delay="180"
            className="font-ui mt-6 max-w-[500px] text-[16px] leading-[26px] text-[var(--l-ink-body)]"
          >
            Your AI Twin steps in for you when you need it to. It speaks like
            you, sees like and supports your students like you.
          </p>

          <div data-reveal data-reveal-delay="270" className="mt-12">
            <PrimaryButton href="#early-access">
              Request for early demo &rarr;
            </PrimaryButton>
          </div>
        </div>

        {/* -------------------------------------------------------- diagram
            599 x 866 in the Figma, anchored to the container's right edge so
            the source cards bleed off the left the way they do in the design.
            Below lg the panel drops under the copy and keeps the same anchor,
            so the mark and the pills stay on screen and only the cards clip. */}
        {/* From lg the dark half runs to the edge of the window rather than
            stopping at the container: --l-hero-bleed is the gap between the
            column's right edge and that edge — the container's own padding
            below 1200, and half the leftover gutter above it. The diagram
            inside is pushed back by the same amount, so the panel grows to the
            right without anything in it moving. */}
        <div
          style={{
            ["--l-hero-bleed" as string]: "max(24px, calc(50vw - 576px))",
          }}
          className="relative -mx-6 h-[520px] overflow-hidden bg-[var(--l-hero-panel)] sm:mx-0 lg:mr-[calc(-1*var(--l-hero-bleed))] lg:h-[866px]"
        >
          <div className="l-grid-dark absolute inset-0" />
          {/* Warm bloom, top-left, exactly where the Figma puts its glow. */}
          <div className="absolute -top-24 -left-16 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,120,40,0.10)_0%,rgba(255,120,40,0)_70%)]" />

          <div
            data-parallax="-0.16"
            className="absolute top-0 right-0 h-[866px] w-[599px] origin-top-right max-lg:scale-[0.78] lg:top-0 lg:right-[var(--l-hero-bleed)]"
          >
            {/* ------------------------------------------------ status, top */}
            <div className="absolute top-[178px] right-[68px] flex items-center gap-2.5">
              <svg
                aria-hidden="true"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                className="l-spin"
              >
                <circle
                  cx="7.5"
                  cy="7.5"
                  r="6"
                  stroke="var(--tt-blue-600)"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeDasharray="22 12"
                />
              </svg>
              <span className="font-ui text-[15px] text-[var(--tt-neutral-300)]">
                Updating your Twin
              </span>
            </div>

            {/* -------------------------------------------- expertise label */}
            <div className="absolute top-[280px] left-[97px] flex items-center gap-2.5">
              <svg
                aria-hidden="true"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8 10.5V2.5m0 0L5 5.5m3-3 3 3M2.5 11v1.5A1.5 1.5 0 0 0 4 14h8a1.5 1.5 0 0 0 1.5-1.5V11"
                  stroke="var(--tt-neutral-300)"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-ui text-[15px] text-[var(--tt-neutral-300)]">
                Your expertise
              </span>
            </div>

            {/* ------------------------------------------------ source cards */}
            <ExpertiseBelt />

            {/* -------------------------------------------------- scan line */}
            <div className="absolute top-[295px] left-[256px] h-[192px] w-[30px] bg-[linear-gradient(to_left,rgba(236,48,19,0.22),rgba(236,48,19,0))]" />
            <div className="l-scanline absolute top-[295px] left-[285px] h-[192px] w-[2px]" />

            {/* ------------------------------------------------------- hub */}
            <div className="absolute top-[375px] left-[269px] grid h-[34px] w-[34px] place-items-center rounded-[8px] bg-[var(--l-accent)] shadow-[0_0_26px_rgba(236,48,19,0.45)]">
              <LogoSymbol size={17} className="text-white" />
            </div>

            {/* ------------------------------------------------ connectors */}
            <svg
              aria-hidden="true"
              viewBox="0 0 599 866"
              className="pointer-events-none absolute inset-0 h-full w-full"
              fill="none"
            >
              {FACETS.map((facet, i) => {
                const d = `M${HUB.x} ${HUB.y} C ${HUB.x + 46} ${HUB.y} ${PILL_X - 48} ${facet.y} ${PILL_X} ${facet.y}`;
                return (
                  <g key={facet.label}>
                    <path
                      d={d}
                      stroke="var(--tt-neutral-700)"
                      strokeWidth="1"
                    />
                    {/* Every connector carries a pulse. Delays are spread
                        evenly across one animation cycle rather than derived
                        from y, so the six fire as an even cascade down the fan
                        instead of clumping. */}
                    <path
                      d={d}
                      stroke="var(--tt-blue-500)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="l-pulse"
                      style={{
                        animationDelay: `${((i / FACETS.length) * PULSE_SECONDS).toFixed(3)}s`,
                      }}
                    />
                  </g>
                );
              })}
            </svg>

            {/* ----------------------------------------------------- pills */}
            {FACETS.map((facet, i) => (
              <div
                key={facet.label}
                data-reveal
                data-reveal-y="0"
                data-reveal-delay={400 + i * 90}
                className="font-ui absolute flex h-[43px] w-[178px] items-center justify-center rounded-[8px] border border-[var(--tt-neutral-800)] bg-[var(--tt-neutral-800)] text-[14px] text-[var(--tt-neutral-200)]"
                style={{ left: PILL_X, top: facet.y - 21 }}
              >
                {facet.label}
              </div>
            ))}

            {/* ------------------------------------------------ foot status */}
            <div className="absolute top-[812px] left-1/2 flex -translate-x-1/2 items-center gap-2.5 whitespace-nowrap">
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M7 2.5 8 5.4l2.9 1L8 7.5 7 10.4 6 7.5 3.1 6.4 6 5.4 7 2.5Z"
                  fill="var(--tt-neutral-200)"
                />
                <path
                  d="M13 9.5l.6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6.6-1.6Z"
                  fill="var(--tt-neutral-200)"
                />
              </svg>
              {/* The gold that used to sit on "Twin has been" is now the
                  highlight sweeping the whole line. */}
              <TwinUpdated />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------- the belt */

/**
 * The three kinds of material a trainer uploads, in the order the Figma shows
 * them: a recording, an audio track, a written document.
 */
const CARDS = [
  { key: "video", tone: "bg-[var(--tt-green-100)]", body: <VideoBody /> },
  { key: "audio", tone: "bg-[var(--tt-blue-100)]", body: <AudioBody /> },
  { key: "doc", tone: "bg-[var(--tt-gold-100)]", body: <DocBody /> },
];

/**
 * The cards ride into the scan line and are cut off by it.
 *
 * Two mechanisms, and it matters that they are separate:
 *
 *  - The clip. The track sits in a box whose right edge is the beam, so a card
 *    is progressively sliced away as it arrives and is gone the instant it is
 *    level with the line. Nothing is ever seen past it. Fading instead would
 *    show the card ghosting through the beam, which is what this replaces.
 *
 *  - The loop. The track carries two copies of CARDS, the second laid a full
 *    lap to the left of the first, so translating by exactly one lap puts copy
 *    two where copy one began. The wrap is then a no-op rather than a jump,
 *    which is why no fade is needed to hide it.
 */
function ExpertiseBelt() {
  return (
    <div
      className="absolute top-0 left-0 h-full overflow-hidden"
      style={{ width: BELT_CLIP }}
    >
      <div
        className="l-belt absolute inset-0"
        style={{
          ["--l-belt-lap" as string]: `${BELT_LAP}px`,
          ["--l-belt-duration" as string]: `${BELT_SECONDS}s`,
        }}
      >
        {[0, 1].map((copy) =>
          CARDS.map((card, i) => {
            const index = copy * CARDS.length + i;
            return (
              <div
                key={`${copy}-${card.key}`}
                className={cn(
                  "absolute top-[344px] flex h-[96px] w-[78px] flex-col items-center rounded-[12px] px-2.5 pt-2.5",
                  card.tone,
                )}
                // The second copy is offset one lap left of the first, so it is
                // off-panel until the wrap needs it.
                style={{ left: CARD_LEFT + (index - CARDS.length) * BELT_SLOT }}
              >
                <span className="h-[2px] w-[18px] rounded-full bg-black/70" />
                {card.body}
              </div>
            );
          }),
        )}
      </div>
    </div>
  );
}

function VideoBody() {
  return (
    <div className="mt-2 space-y-1.5">
      {[0, 1].map((i) => (
        <div
          key={i}
          className="flex h-[18px] w-[58px] items-center rounded-[4px] bg-white pl-1"
        >
          <span className="grid h-[11px] w-[11px] place-items-center rounded-full bg-[var(--tt-neutral-300)]">
            <svg width="4" height="5" viewBox="0 0 4 5" fill="white">
              <path d="M0 0l4 2.5L0 5z" />
            </svg>
          </span>
        </div>
      ))}
    </div>
  );
}

function AudioBody() {
  return (
    <>
      <svg
        aria-hidden="true"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="mt-1.5 opacity-40"
      >
        <path
          d="M3 6h2l3-2.5v9L5 10H3V6Z"
          stroke="var(--tt-blue-900)"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 5.8a3 3 0 0 1 0 4.4M12.4 4a5.4 5.4 0 0 1 0 8"
          stroke="var(--tt-blue-900)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
      <div className="mt-3 flex h-[22px] items-center gap-[4px]">
        {[
          0.4, 0.75, 0.5, 1, 0.6, 0.85, 0.35, 1, 0.55, 0.9, 0.45, 0.7, 0.95,
          0.4, 0.8, 0.5, 0.65, 0.35,
        ].map((h, i) => (
          <span
            key={i}
            className="l-bar w-[2px] rounded-full bg-[var(--tt-blue-900)]/70"
            style={{ height: `${h * 100}%`, animationDelay: `${i * 70}ms` }}
          />
        ))}
      </div>
    </>
  );
}

function DocBody() {
  return (
    <>
      <svg
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="mt-1.5"
      >
        <rect
          x="3.5"
          y="5.5"
          width="12"
          height="14"
          rx="1.6"
          stroke="#7a6a2a"
          strokeWidth="1.1"
        />
        <path
          d="M8 3.5h9.5A1.5 1.5 0 0 1 19 5v12"
          stroke="#7a6a2a"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        {[9, 12, 15].map((y) => (
          <path
            key={y}
            d={`M6.5 ${y}h6`}
            stroke="#7a6a2a"
            strokeWidth="1"
            strokeLinecap="round"
          />
        ))}
      </svg>
      <div className="mt-3 space-y-[5px]">
        {[0, 1, 2].map((i) => (
          <svg key={i} width="58" height="4" viewBox="0 0 58 4" fill="none">
            <path
              d="M0 2c2-2 4-2 6 0s4 2 6 0 4-2 6 0 4 2 6 0 4-2 6 0 4 2 6 0 4-2 6 0 4 2 6 0 4-2 6 0"
              stroke="#7a6a2a"
              strokeWidth="0.9"
            />
          </svg>
        ))}
      </div>
    </>
  );
}
