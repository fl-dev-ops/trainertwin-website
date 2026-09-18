"use client";

import { useEffect, useRef, useState, type ComponentType } from "react";
import { cn } from "@/components/cn";
import { Container, Eyebrow, SectionTitle } from "./primitives";
import { CYCLE_MS } from "./session/parts";
import { ChannelPanel } from "./ChannelPanel";
import { ExplainerPanel } from "./ExplainerPanel";
import { RolePlayPanel } from "./RolePlayPanel";
import { SharePanel } from "./SharePanel";
import { WebEmbedPanel } from "./WebEmbedPanel";

/**
 * The steps, and the panel each one plays. All five are drawn in Figma —
 * 563:5565, 383:12449, 393:12711, 442:17427 and 442:17428 — so all five are
 * built; `hidden` keeps one of them off the page without taking its copy and
 * its panel out of the codebase. Drop the flag to bring it back.
 */
const ALL_STEPS: Array<{
  title: string;
  body?: string;
  panel?: ComponentType;
  hidden?: boolean;
}> = [
  {
    title: "Generate explainer video",
    body: "One prompt turns your material into video — a course lesson, a demo of how you teach, or a short explainer that brings new learners in.",
    panel: ExplainerPanel,
  },
  {
    title: "Build your Role Plays",
    body: "Build any scenario - create mock interview in JS, re-teach recursion to a late comer or repeat doubts. You name it TT builds it",
    panel: RolePlayPanel,
  },
  {
    title: "Embed in your website",
    body: "Name your chatbot, copy one script tag before the </body> tag, and your Twin is answering on your own site.",
    panel: WebEmbedPanel,
  },
  {
    title: "Sharable link - to your Twin page",
    body: "One link is the whole setup. Send it anywhere and your learners get a page that answers in your voice, at 3am as readily as at noon.",
    panel: SharePanel,
  },
  {
    title: "Integrate into any channel",
    body: "Your Twin turns up inside the tools your learners already have open — no new app to install, no new habit to build.",
    panel: ChannelPanel,
    hidden: true,
  },
];

/** Filtered once, so the index the selection holds is an index into what is
    actually on the page. */
const STEPS = ALL_STEPS.filter((item) => !item.hidden);

export function HowItWorks() {
  const [step, setStep] = useState(0);
  const Panel = STEPS[step].panel ?? ExplainerPanel;

  const section = useRef<HTMLElement>(null);
  /* Whether the section is the one being looked at, and a counter that changes
     every time it becomes so. The panel is keyed on the counter, so coming
     back to the section starts the step again rather than dropping into the
     middle of a lap that ran while it was off screen. */
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
      { rootMargin: "-15% 0px -15% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* Every panel plays one lap of the shared clock, so a step holds for exactly
     that long and then hands over. Keyed on the open step as well, so picking
     one by hand gives it a full lap rather than the remainder of the last
     one's. */
  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setTimeout(
      () => setStep((i) => (i + 1) % STEPS.length),
      CYCLE_MS,
    );
    return () => clearTimeout(timer);
  }, [inView, run, step]);

  return (
    <section
      ref={section}
      id="how-it-works"
      className="relative overflow-hidden border-y border-[var(--l-line-warm)] bg-[var(--l-night)] py-20 md:py-[104px]"
    >
      {/* Centred with a margin, not a translate utility — see UseCases: the
          parallax loop owns the `translate` property on its targets. */}
      <div
        data-parallax="0.3"
        className="pointer-events-none absolute -bottom-[200px] left-1/2 ml-[-612px] h-[383px] w-[1224px] rounded-[50%] bg-[radial-gradient(closest-side,rgba(255,120,40,0.09),rgba(255,120,40,0))]"
      />

      <Container className="relative">
        <div className="flex flex-col items-center">
          <Eyebrow data-reveal className="text-[var(--l-eyebrow)]">
            How it works
          </Eyebrow>
          <SectionTitle
            data-reveal
            data-reveal-delay="80"
            className="mt-4 max-w-[820px] text-center text-white"
          >
            See how you can use your twin
          </SectionTitle>
        </div>

        <div className="mt-20 grid gap-14 lg:grid-cols-2 lg:gap-8">
          {/* ------------------------------------------------------- steps */}
          {/* self-start, or the column stretches to the panel beside it and the
              rail runs on past the last step into empty space. */}
          <div data-reveal className="relative self-start pl-8">
            <span className="absolute top-0 left-0 h-full w-px bg-[#3a3d43]" />

            {STEPS.map((item, i) => {
              const selectable = Boolean(item.panel);
              const active = i === step;
              return (
                <div
                  key={item.title}
                  className={cn("relative", i > 0 && "mt-10")}
                >
                  {/* The marker rides the active step rather than sitting at a
                      fixed height, so it stays true as the copy reflows. */}
                  {active ? (
                    <span className="absolute top-0 -left-8 h-full w-[3px] rounded-full bg-[var(--l-brand)]" />
                  ) : null}

                  {selectable ? (
                    <button
                      type="button"
                      onClick={() => setStep(i)}
                      aria-pressed={active}
                      className="block text-left"
                    >
                      <h3
                        className={cn(
                          "l-display transition-colors duration-200 ease-standard",
                          active
                            ? "text-[24px] text-white"
                            : "text-[16px] text-white/75 hover:text-white",
                        )}
                      >
                        {item.title}
                      </h3>
                    </button>
                  ) : (
                    <h3 className="l-display text-[16px] text-white/75">
                      {item.title}
                    </h3>
                  )}

                  {active && item.body ? (
                    <p className="font-ui mt-4 max-w-[405px] text-[16px] leading-[23px] text-[var(--l-ink-onnight-2)]">
                      {item.body}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>

          {/* ------------------------------------------------------- panel
              A light panel on the dark section, per 383:12449. The earlier
              dark-glass treatment came from 353:10396, which draws this step
              before the flow was designed. */}
          <div data-reveal data-reveal-delay="120" className="lg:pl-8">
            <div
              data-parallax="-0.1"
              className="relative aspect-[380/302] overflow-hidden rounded-[24px] bg-[#f4f7fd]"
            >
              {/* Keyed so switching steps rebuilds the panel from its first
                  beat instead of joining the outgoing one mid-lap — and on the
                  run counter too, so returning to the section restarts it. */}
              {inView ? <Panel key={`${step}-${run}`} /> : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
