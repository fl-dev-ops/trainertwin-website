"use client";

import { CtaLink } from "./CtaLink";
import { AsciiCharacter } from "@/components/AsciiCharacter";
import { CursorGrid } from "@/components/CursorGrid";
import { ExtractLabel } from "./ExtractLabel";
import { FeedLines } from "./FeedLines";
import { HeroBackers } from "./HeroBackers";
import { Icon, type IconName } from "./icons";
import { RotatingHeadline } from "./RotatingHeadline";

/** What you hand over. Five of the sources the integrations page offers. */
const INPUTS: Array<{ icon: IconName; label: string }> = [
  { icon: "video", label: "Recorded sessions" },
  { icon: "mic", label: "Voice notes" },
  { icon: "folder", label: "Notion" },
  { icon: "cloud", label: "Google Drive" },
  { icon: "chat", label: "Conversations" },
];

export function Hero({
  variant = "split",
}: {
  /** `centered` is the v3 experiment: copy only, no night-panel diagram. */
  variant?: "split" | "centered";
}) {
  const centered = variant === "centered";

  return (
    <section className={centered ? "hero hero--centered" : "hero"}>
      {/* Behind everything, and the same settings TrainerTwin_home's hero
          uses. The night panel to the right is opaque, so the lattice is only
          ever seen against the white half — which is where it was asked for. */}
      {!centered && (
      <div className="hero-lattice">
        <CursorGrid
          cellSize={48}
          radius={150}
          color="#fe5900"
          falloff="smooth"
          /* Heavier than the source page's settings: there the lattice is the
             only thing on the white half, where here it competes with a
             headline, a lede, two buttons and a logo strip, and at 0.22 it was
             not reading at all. */
          maxOpacity={0.45}
          fillOpacity={0.12}
          lineWidth={1.1}
          cellRadius={3}
          holdTime={140}
          fadeDuration={1500}
          pulseSpeed={520}
          /* The resting lattice: on all the time, and neutral rather than
             brand — the orange is what the cursor adds. */
          gridOpacity={0.6}
          gridColor="#e7ebf1"
        />
      </div>
      )}

      {/* Not `.wrap` around the whole grid: the panel bleeds to the viewport's
          right edge the way TrainerTwin_home's hero diagram does, which a
          max-width container would clip. `.hero-grid` supplies the left inset
          the container would have given it instead (see home.css). */}
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow">AI Twin for Trainers</p>

          <h1>
            <RotatingHeadline />
          </h1>

          <p className="hero-lede">
            TrainerTwin turns your knowledge and persona into a version of you
            that your students can reach whenever they need. It talks like you,
            teaches like you and thinks like you.
          </p>

          <div className="hero-cta">
            <CtaLink href="#early-access">Request early access</CtaLink>
            <a className="link" href="#can-do">
              See how it works
            </a>
          </div>

          <HeroBackers />
        </div>

        {!centered && (
        /* `.tt-night` re-points canvas/surface/text/border/cta for everything
            inside — the panel is drawn night without a single literal colour
            for its type or its tokens (§7, D13: a night band, not a theme,
            which is exactly right for one half of a hero rather than the whole
            page). Its own background texture is the one exception — see the
            comment on `.flow` in home.css. */
        <div className="flow tt-night">
          {/* The diagram is its own box inside the panel so it can be scaled
              without taking the panel's background with it. */}
          <div className="flow-inner">
            {/* Drawn under the columns: the paths are measured off the chips
                and the figure, so they must not sit over any of them. */}
            <FeedLines />

            <div className="flow-col flow-in">
              <span>What you give it</span>
              {INPUTS.map((item) => (
                <div key={item.label} data-feed-from className="chip chip--in">
                  <Icon name={item.icon} />
                  {item.label}
                </div>
              ))}
            </div>

            {/* What the feed arrives at: the label, the bust, and the line
                that cycles through what is being extracted. */}
            <div className="fig-main">
              <span className="flow-label">What we extract</span>
              {/* The turnaround, ambient: it rotates on its own and takes no
                  pointer, because a marketing hero is read rather than played
                  with. The ink comes from CSS, so `.tt-night` colours it. */}
              <span data-feed-to className="figure">
                <CharacterOrbit />
                <AsciiCharacter
                  autoRotate
                  interactive={false}
                  particleCount={1500}
                  particleSize={20}
                  rotationDuration={13000}
                />
              </span>
              <ExtractLabel />
            </div>
          </div>
        </div>
        )}
      </div>
    </section>
  );
}

function CharacterOrbit() {
  return (
    <svg
      aria-hidden="true"
      className="orbit-lines"
      viewBox="0 0 320 220"
      fill="none"
    >
      <g className="orbit orbit--a">
        <ellipse
          className="orbit-track"
          cx="160"
          cy="110"
          rx="132"
          ry="34"
        />
        <circle className="orbit-dot orbit-dot--bright" r="2.6">
          <animateMotion
            dur="8.5s"
            repeatCount="indefinite"
            path="M28 110a132 34 0 1 0 264 0a132 34 0 1 0 -264 0"
          />
        </circle>
      </g>
      <g className="orbit orbit--b">
        <ellipse
          className="orbit-track"
          cx="160"
          cy="110"
          rx="118"
          ry="42"
        />
        <circle className="orbit-dot" r="2.2">
          <animateMotion
            dur="10.8s"
            repeatCount="indefinite"
            path="M42 110a118 42 0 1 1 236 0a118 42 0 1 1 -236 0"
          />
        </circle>
      </g>
      <g className="orbit orbit--c">
        <ellipse
          className="orbit-track orbit-track--soft"
          cx="160"
          cy="110"
          rx="145"
          ry="52"
        />
        <circle className="orbit-dot orbit-dot--soft" r="1.8">
          <animateMotion
            dur="13.2s"
            repeatCount="indefinite"
            path="M15 110a145 52 0 1 0 290 0a145 52 0 1 0 -290 0"
          />
        </circle>
      </g>
    </svg>
  );
}
