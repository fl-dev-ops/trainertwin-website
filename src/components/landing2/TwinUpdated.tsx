"use client";

import { useEffect, useState } from "react";
import { ShinyText } from "@/components/ShinyText";

/** How long ago the Twin last learned something, as the line reports it. */
const MINUTES = [1, 2, 3, 4, 5];

/** Long enough to read the line before the number moves under it. */
const TICK_MS = 3400;

/**
 * The status line under the hero diagram. The minute count wanders so the Twin
 * reads as something that keeps learning rather than a fixed screenshot.
 *
 * Renders 2min on the server and on the first paint — the same value every
 * time, so there is nothing for hydration to disagree about — and only starts
 * wandering after mount.
 */
export function TwinUpdated() {
  const [minutes, setMinutes] = useState(2);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      setMinutes((current) => {
        // Never the same twice running, or the line looks frozen rather than live.
        const others = MINUTES.filter((m) => m !== current);
        return others[Math.floor(Math.random() * others.length)];
      });
    }, TICK_MS);

    return () => clearInterval(id);
  }, []);

  return (
    <ShinyText
      className="font-ui text-[15px]"
      text={`Your Twin has been updated ${minutes}min ago`}
      color="var(--tt-neutral-300)"
      shineColor="var(--tt-gold-300)"
      speed={2.6}
      spread={100}
    />
  );
}
