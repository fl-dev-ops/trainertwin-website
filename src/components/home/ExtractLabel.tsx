"use client";

import { useEffect, useState } from "react";
import { FuzzyText } from "@/components/FuzzyText";

/**
 * The line under the figure, cycling through what the twin is made of.
 *
 * Each phrase arrives smeared and settles: the swap sets the fuzz to a burst
 * and then drops the target, and FuzzyText eases the rest of the way down over
 * `SETTLE`. So the change is not a cut between two words — the next one comes
 * in out of the noise the way the character itself assembles out of particles.
 *
 * One lap of the list takes 12.95s against the figure's 13s revolution, so the
 * caption comes round as the character finishes its turn.
 */
const PHRASES = [
  "Trainer DNA",
  "Coaching pattern & style",
  "AI Twin of You",
] as const;

/** ms a phrase is legible before the next one arrives. */
const HOLD = 1850;
/** ms the arriving phrase takes to resolve out of the smear. */
const SETTLE = 620;

/** How hard it is smeared on arrival, and where it rests. */
const BURST = 0.85;
const REST = 0.06;

export function ExtractLabel() {
  /* Starts on the disclosure rather than arriving at it: the last phrase is
     the first thing shown, and the cycle runs the list from there. */
  const [index, setIndex] = useState(PHRASES.length - 1);
  const [intensity, setIntensity] = useState(REST);

  useEffect(() => {
    /* Reduced motion: FuzzyText draws one clean frame and stops on its own, so
       all this has to do is not change the words underneath it. */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let swap = 0;
    let settle = 0;
    const step = () => {
      swap = window.setTimeout(() => {
        setIndex((i) => (i + 1) % PHRASES.length);
        setIntensity(BURST);
        /* A tick later, not in the same render: the burst has to be the value
           the new canvas starts at, and the drop is what it eases toward. */
        settle = window.setTimeout(() => setIntensity(REST), 40);
        step();
      }, HOLD);
    };
    step();

    return () => {
      window.clearTimeout(swap);
      window.clearTimeout(settle);
    };
  }, []);

  return (
    <span className="flow-caption">
      {/* `aria-live` on a wrapper, because the canvas itself has no text for a
          screen reader to read. Polite, not assertive: a caption that
          announced every change would talk over whatever else is being read. */}
      <span className="sr-only" aria-live="polite">
        {PHRASES[index]}
      </span>
      <FuzzyText
        fontSize={14}
        fontWeight={400}
        color="inherit"
        enableHover={false}
        baseIntensity={intensity}
        transitionDuration={SETTLE}
        fuzzRange={22}
        fps={30}
      >
        {PHRASES[index]}
      </FuzzyText>
    </span>
  );
}
