"use client";

import { useEffect, useState } from "react";
import FoldText from "./FoldText";

/**
 * v3-only rotating line. "Want to" and "Your AI Twin can do it." are sticky
 * and static; only the ask in between changes, folding in char-by-char via
 * `FoldText` (React Bits) each time it's replaced.
 *
 * The word intentionally does NOT carry the shimmer gradient the rest of
 * `.rot-word` gets elsewhere: `FoldText` layer-promotes every character to
 * animate it independently (a 3D transform context + `will-change`), and a
 * `background-clip: text` gradient doesn't survive that — tried painting the
 * same gradient per character instead (sized to the word, offset per
 * character), which worked when it worked, but the layer promotion combined
 * with the rapid remount-per-ask made GSAP's fold-in intermittently stick at
 * `opacity: 0` or paint a stale frame. A solid colour was the only version
 * that came back reliable across repeated cycles.
 */
const ASKS: string[] = [
  "create more videos?",
  "be available 24/7?",
  "enable more 1:1 practice?",
  "reach more people?",
];

/* How long an ask sits fully folded-in before the next one replaces it. The
   fold-in itself (duration + stagger, below) plays on top of this, not
   instead of it — the swap is a hard cut, and FoldText's own unfold sells
   the transition. */
const HOLD = 3200;
const FOLD_DURATION = 1;
const FOLD_STAGGER = 0.06;

export function WantToTwin() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % ASKS.length);
    }, HOLD);

    return () => window.clearInterval(id);
  }, []);

  const ask = ASKS[index];

  return (
    <p className="hero-v3-want">
      <span className="sr-only">
        Want to {ask} Your AI Twin can do it.
      </span>
      <span aria-hidden="true">
        <span className="rot-line">Want to</span>
        <span className="rot-line">
          <span className="rot-slot">
            <FoldText
              key={ask}
              text={ask}
              splitBy="char"
              hinge="top"
              trigger="mount"
              duration={FOLD_DURATION}
              stagger={FOLD_STAGGER}
              ease="power3.out"
              className="rot-word rot-word--fold"
              fontSize="inherit"
              fontWeight="inherit"
              color="var(--tt-on-night)"
            />
          </span>
        </span>
        <span className="rot-line">Your AI Twin can do it.</span>
      </span>
    </p>
  );
}
