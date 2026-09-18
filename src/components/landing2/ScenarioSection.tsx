"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/components/cn";
import { Container, Eyebrow, MaskIcon } from "./primitives";
import { SessionMockup, type SessionScene } from "./SessionMockup";
import { CYCLE_MS } from "./session/parts";

export type Scenario = {
  label: string;
  icon: string;
  body?: string;
  scene?: SessionScene;
};

/**
 * A dark section that pairs a list of scenarios with the mockup the open one
 * plays. Two sections on the page are built from it — Interactive Twin and
 * Explainer Video — so the interaction lives here once while each caller keeps
 * its own copy and its own list.
 *
 * `id` is the scroll target the header nav aims at, so it has to be unique per
 * section.
 */
export function ScenarioSection({
  id,
  eyebrow,
  heading,
  scenarios,
  topRule = false,
}: {
  id: string;
  eyebrow: ReactNode;
  heading: ReactNode;
  scenarios: readonly Scenario[];
  /** Draws a lit rule across the section's top edge. For a section that meets
      another dark one, where nothing else marks the seam. */
  topRule?: boolean;
}) {
  const [scenario, setScenario] = useState(0);

  const section = useRef<HTMLElement>(null);
  /* Whether the section is the one being looked at, and a counter that changes
     every time it becomes so. The counter is what the mockup and the border
     light are keyed on: bumping it rebuilds them, which is how coming back to
     the section starts the scenario again rather than dropping into the middle
     of a lap that ran while it was off screen. */
  const [inView, setInView] = useState(false);
  const [run, setRun] = useState(0);

  useEffect(() => {
    const el = section.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          setRun((n) => n + 1);
        } else {
          setInView(false);
        }
      },
      // Counted as reached once it crosses into the middle band of the window,
      // rather than the moment a pixel of it clears the bottom edge.
      { rootMargin: "-15% 0px -15% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* The list plays itself while it is on screen: a scenario holds for exactly
     one lap of the mockup beside it, then hands over to the next. The timer is
     keyed on the open scenario as well, so picking one by hand restarts its
     full lap rather than cutting it short with whatever was left on the
     previous one's clock. */
  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setTimeout(
      () => setScenario((i) => (i + 1) % scenarios.length),
      CYCLE_MS,
    );
    return () => clearTimeout(timer);
  }, [inView, run, scenario, scenarios.length]);

  /* Below lg the mockup belongs inside the open scenario's card; from lg it
     belongs in the column beside the list. Those are different parents, so the
     breakpoint has to be read here rather than expressed in classes — the
     alternative is mounting the mockup twice and running two timelines to keep
     one of them hidden. Starts false so the server and the first paint agree. */
  const [narrow, setNarrow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const sync = () => setNarrow(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const item = scenarios[scenario];
  const scene: SessionScene = item.scene ?? scenarios[0].scene ?? "code";

  return (
    <section
      ref={section}
      id={id}
      className="tt-night relative overflow-hidden py-20 md:py-[72px]"
    >
      {topRule ? (
        /* The seam between two dark sections: a hairline that fades out at both
           ends, with its bloom below it — the section clips its own overflow,
           so a glow above the line would be cut off — and a highlight crossing
           it. */
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[120px] overflow-hidden"
        >
          <span className="l-rule absolute inset-x-0 top-0 block h-px" />
          <span className="l-rule-glow absolute inset-x-0 top-0 block h-[96px]" />
          <span className="l-rule-shine absolute top-0 block h-px w-[26%]" />
        </div>
      ) : null}

      {/* The soft ellipse the design bleeds off the top edge. Centred with a
          negative margin rather than -translate-x-1/2: Tailwind v4 compiles
          translate utilities to the `translate` property, which is exactly what
          the parallax loop writes every frame, so the two would fight. */}
      <div
        data-parallax="0.22"
        className="pointer-events-none absolute -top-[240px] left-1/2 ml-[-761px] h-[476px] w-[1522px] rounded-[50%] bg-[radial-gradient(closest-side,rgba(255,120,40,0.10),rgba(255,120,40,0))]"
      />

      <Container className="relative">
        <div className="flex flex-col items-center">
          <Eyebrow data-reveal className="text-[var(--l-eyebrow-bright)]">
            {eyebrow}
          </Eyebrow>

          <h2
            data-reveal
            data-reveal-delay="140"
            className="l-display mt-10 max-w-[820px] text-center text-[30px] text-white sm:text-[36px] md:text-[44px] md:leading-[60px]"
          >
            {heading}
          </h2>
        </div>

        {/* --------------------------------------------------------- panel */}
        <div
          data-reveal
          data-reveal-delay="200"
          className="mt-16 md:mt-[64px] lg:p-12"
        >
          <div className="grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-14">
            {/* ------------------------------------------- scenario list */}
            <div className="flex min-w-0 flex-col gap-[12px]">
              {scenarios.map((item, i) =>
                i === scenario ? (
                  <div
                    key={item.label}
                    className="l-usecase-card relative rounded-[16px] border-[0.5px] border-[var(--tt-neutral-500)]/45 p-4"
                  >
                    {/* A light that travels the card's whole border once,
                        over exactly the lap the mockup is playing — so it is
                        both an accent and how long this scenario has left. */}
                    <span
                      key={`beam-${run}`}
                      aria-hidden="true"
                      className="l-beam pointer-events-none absolute inset-0 block rounded-[16px]"
                      style={{ ["--l-dwell" as string]: `${CYCLE_MS}ms` }}
                    />
                    <div className="flex items-start gap-2.5">
                      <MaskIcon src={item.icon} className="mt-0.5 text-white" />
                      <span className="font-ui text-[14px] leading-[23px] font-semibold text-white">
                        {item.label}
                      </span>
                    </div>
                    <p className="font-ui mt-[8px] max-w-[327px] text-[14px] leading-[23.9px] text-[var(--l-ink-onnight-2)]">
                      {item.body ??
                        "Learners run realistic scenarios with your Twin whenever they're ready not only when you are."}
                    </p>
                    {narrow ? (
                      <Mockup
                        key={`mockup-${run}`}
                        scene={scene}
                        live={inView}
                        inCard
                      />
                    ) : null}
                  </div>
                ) : (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setScenario(i)}
                    className="font-ui group flex items-center gap-2.5 rounded-full py-[8px] pl-3 text-left text-[16px] leading-[23px] text-[var(--l-ink-onnight-3)] transition-colors duration-150 ease-standard hover:text-white"
                  >
                    <MaskIcon src={item.icon} />
                    {item.label}
                  </button>
                ),
              )}
            </div>

            {narrow ? null : (
              <Mockup key={`mockup-${run}`} scene={scene} live={inView} />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

/**
 * From sm up the mockup holds a 440px floor — the width below which its 12px
 * labels stop being legible — and scrolls sideways rather than shrinking past
 * it. On a phone the floor is dropped instead, so the whole scene fits the card
 * at about half scale: legibility traded for seeing the animation entire,
 * rather than having to scroll sideways to find the rest of it.
 */
function Mockup({
  scene,
  inCard,
  live = true,
}: {
  scene: SessionScene;
  inCard?: boolean;
  /** Off screen the scene is not rendered at all — its timelines are built on
      mount, so leaving it out is what actually stops them rather than leaving
      them running against a section nobody is looking at. The box it would
      fill is held open at the stage's own ratio so nothing shifts. */
  live?: boolean;
}) {
  return (
    <div
      className={cn(
        "-mx-2 overflow-x-auto pb-2 sm:mx-0 sm:overflow-visible",
        inCard && "mt-4",
      )}
    >
      {/* `safe` centring: plain `center` pushes the mockup's left edge out of
          a scroller it overflows, with no way to scroll back to it. */}
      <div className="flex px-2 [justify-content:safe_center] sm:px-0 lg:justify-end">
        <div
          data-parallax="0.12"
          className={cn(
            "w-full max-w-[591px] min-w-0 sm:min-w-[440px]",
            !live && "aspect-[591/445]",
          )}
        >
          {live ? <SessionMockup scene={scene} /> : null}
        </div>
      </div>
    </div>
  );
}
