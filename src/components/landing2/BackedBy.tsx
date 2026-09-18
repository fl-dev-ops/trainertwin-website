import type { ComponentType } from "react";
import { Container, Eyebrow, SectionTitle } from "./primitives";

/**
 * "Backed by global technology leaders" — the two startup programmes behind the
 * build, as a night band between the comparison and the invite.
 *
 * No credit figures and no "Learn more". The amounts date badly and are not the
 * claim being made; the claim is *who vouched for us*. A link here would also be
 * the only way off the page in the two screens before the invite, which is the
 * one action this stretch of the page is for.
 *
 * `.tt-night` is the whole of the dark treatment — text, hairlines and surfaces
 * re-point inside it, so nothing below writes a colour for the dark state (§7,
 * §14.8). Card text sits on the band's own surface rather than on a lifted
 * panel, which is what keeps the documented contrast ratios true: the night ink
 * steps are measured against --tt-night, and --tt-on-night-3 drops to 4.35:1 on
 * --tt-night-panel. The brand tint is a corner wash behind the watermark only,
 * nowhere near a line of type.
 */

type Partner = {
  id: string;
  /** Names the programme, and so names the logo beside it — which is why the
      lockup itself is aria-hidden rather than repeating the brand to a reader. */
  programme: string;
  line: string;
  Logo: ComponentType;
  Mark: ComponentType;
  /** Page-level decoration, per D05: defined here, never promoted to a token. */
  wash: string;
  markTone: string;
};

const PARTNERS: Partner[] = [
  {
    id: "microsoft",
    programme: "Microsoft for Startups",
    line: "TrainerTwin is built, tested and scaled on Azure.",
    Logo: MicrosoftLockup,
    Mark: CloudMark,
    wash: "rgba(0, 164, 239, 0.10)",
    markTone: "#00A4EF",
  },
  {
    id: "aws",
    programme: "AWS Activate",
    line: "The infrastructure every Twin runs on, ready to scale.",
    Logo: AwsLockup,
    Mark: CubesMark,
    wash: "rgba(255, 153, 0, 0.10)",
    markTone: "#FF9900",
  },
];

export function BackedBy() {
  return (
    <section
      id="backed-by"
      className="tt-night relative overflow-hidden border-y border-[var(--l-line-warm)] py-20 md:py-[104px]"
    >
      <Container className="relative">
        <div className="flex flex-col items-center text-center">
          <Eyebrow data-reveal className="text-[var(--l-eyebrow)]">
            Our journey
          </Eyebrow>
          <SectionTitle
            data-reveal
            data-reveal-delay="80"
            className="mt-4 max-w-[820px] text-center text-white"
          >
            Backed by global technology leaders
          </SectionTitle>
          <p
            data-reveal
            data-reveal-delay="140"
            className="font-ui mt-4 max-w-[620px] text-[16px] leading-[26px] text-[var(--l-ink-onnight-2)]"
          >
            TrainerTwin is a recipient of startup credits from Microsoft and
            AWS, supporting our mission to build the future of learning.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2">
          {PARTNERS.map(
            ({ id, programme, line, Logo, Mark, wash, markTone }, i) => (
              <div
                key={id}
                data-reveal
                data-reveal-delay={200 + i * 80}
                className="relative overflow-hidden rounded-lg border border-line-night px-8 py-8"
              >
                {/* Closest-side, so the tint is spent on the corner the mark
                    sits in and has fully faded before the text column. */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -bottom-16 h-[280px] w-[280px] rounded-full"
                  style={{
                    background: `radial-gradient(closest-side, ${wash}, transparent)`,
                  }}
                />
                {/* Smaller on a phone, where the card is a third the width
                    and the mark would otherwise sit under the copy. */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-6 bottom-6 h-14 w-14 opacity-30 md:h-[72px] md:w-[72px]"
                  style={{ color: markTone }}
                >
                  <Mark />
                </span>

                {/* Tall enough for the AWS lockup, which stands the smile
                    under the wordmark; both marks centre in it, so the two
                    cards start their copy on the same line. */}
                <div className="relative flex h-[42px] items-center">
                  <Logo />
                </div>
                <p className="l-eyebrow mt-6 text-[var(--l-eyebrow)]">
                  {programme}
                </p>
                <p className="font-ui relative mt-3 max-w-[320px] pr-[72px] text-[16px] leading-[26px] text-[var(--l-ink-onnight-2)] md:pr-0">
                  {line}
                </p>
              </div>
            ),
          )}
        </div>

        {/* The rule is the element here — the label is set into a break in it,
            so the two halves have to be flexible rather than a fixed width. */}
        <div
          data-reveal
          data-reveal-delay="360"
          className="mt-12 flex items-center justify-center gap-4"
        >
          <span className="h-px max-w-[180px] flex-1 bg-[var(--l-line-night)]" />
          <span className="flex items-center gap-2 text-[var(--l-eyebrow)]">
            <RocketMark />
            <span className="l-eyebrow whitespace-nowrap">
              Trusted by innovators worldwide
            </span>
          </span>
          <span className="h-px max-w-[180px] flex-1 bg-[var(--l-line-night)]" />
        </div>
      </Container>
    </section>
  );
}

/* --------------------------------------------------------------- lockups */

/**
 * STAND-IN LOCKUPS. Both are built from the brand's own geometry and colours,
 * with the wordmark set in the page's UI face rather than the vendor's — so
 * they read correctly at this size but are not the official artwork, which both
 * programmes supply to their members and whose guidelines require. Swapping in
 * a real SVG means replacing one function; nothing else in the section knows
 * what a logo is made of.
 *
 * Both are drawn for a dark ground: the wordmarks are white, which is the
 * variant each brand publishes for exactly this case.
 */
function MicrosoftLockup() {
  const squares = [
    { x: 0, y: 0, fill: "#F25022" },
    { x: 12, y: 0, fill: "#7FBA00" },
    { x: 0, y: 12, fill: "#00A4EF" },
    { x: 12, y: 12, fill: "#FFB900" },
  ];
  return (
    <span aria-hidden="true" className="flex items-center gap-3">
      <svg
        viewBox="0 0 23 23"
        fill="none"
        className="h-[23px] w-[23px] shrink-0"
      >
        {squares.map((s) => (
          <rect
            key={s.fill}
            x={s.x}
            y={s.y}
            width="11"
            height="11"
            fill={s.fill}
          />
        ))}
      </svg>
      {/* Regular weight: the Microsoft wordmark is set in Segoe UI at a normal
          weight, and a semibold here reads as a different company. */}
      <span className="font-ui text-[22px] leading-none font-normal tracking-[-0.01em] text-white">
        Microsoft
      </span>
    </span>
  );
}

function AwsLockup() {
  return (
    <span aria-hidden="true" className="flex flex-col items-start gap-[3px]">
      <span className="font-ui text-[26px] leading-none font-semibold tracking-[-0.03em] text-white">
        aws
      </span>
      {/* The smile, as an arc that lifts into an arrowhead at the right. */}
      <svg viewBox="0 0 54 12" fill="none" className="h-[11px] w-[54px]">
        <path
          d="M2 3.4c8.4 6.2 27.4 7.6 42.6 0.4"
          stroke="#FF9900"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path d="M39.6 0.6 52 2.9l-7.6 6z" fill="#FF9900" />
      </svg>
    </span>
  );
}

/* ----------------------------------------------------------------- marks */

function CloudMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-full w-full"
    >
      <path d="M7 18.5a4.5 4.5 0 0 1-.3-9A6 6 0 0 1 18 9.8a4.35 4.35 0 0 1-.6 8.7Z" />
    </svg>
  );
}

function CubesMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-full w-full"
    >
      {/* One cube drawn three times: top, then the pair it rests on. */}
      <path d="M12 2.4 16.2 4.8 12 7.2 7.8 4.8Zm4.2 2.4v4.8L12 12V7.2Zm-8.4 0v4.8L12 12V7.2Z" />
      <path d="M7 12.4l4.2 2.4L7 17.2 2.8 14.8Zm4.2 2.4v4.8L7 22v-4.8Zm-8.4 0v4.8L7 22v-4.8Z" />
      <path d="M17 12.4l4.2 2.4-4.2 2.4-4.2-2.4Zm4.2 2.4v4.8L17 22v-4.8Zm-8.4 0v4.8L17 22v-4.8Z" />
    </svg>
  );
}

function RocketMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[14px] w-[14px] shrink-0"
    >
      <path d="M12 2.6c3 2 4.8 5.3 4.8 9.1l-1.9 3.8H9.1L7.2 11.7c0-3.8 1.8-7.1 4.8-9.1Z" />
      <path d="M9.1 15.5 7 18.2m7.9-2.7 2.1 2.7M12 8.6v.01" />
    </svg>
  );
}
