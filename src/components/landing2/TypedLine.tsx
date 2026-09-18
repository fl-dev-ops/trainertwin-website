"use client";

import { useEffect, useState } from "react";
import { cn } from "@/components/cn";

/**
 * The second line of the hero headline, typed out and retyped through a list
 * of things a Twin is.
 *
 * It renders the first phrase complete on the server and starts its cycle from
 * that phrase's hold, so the headline is whole in the markup and nothing has to
 * appear after hydration. The height is held by an invisible copy of the
 * longest phrase, so the block does not grow a line mid-word and shove the
 * paragraph and button below it around.
 *
 * The animation is hidden from assistive tech, which gets the whole list as one
 * sentence instead of a headline that rewrites itself every two seconds.
 */
export function TypedLine({
  phrases,
  className,
  /** Per character, in ms. Deleting runs at half of it. */
  speed = 55,
  /** How long a finished phrase holds, in ms. */
  hold = 1800,
}: {
  phrases: string[];
  className?: string;
  speed?: number;
  hold?: number;
}) {
  /* One piece of state, advanced only from inside the timer. Split into three
     it would take three setState calls in the effect body to turn a phrase
     over, and each of those is a render nothing else needs. */
  const [{ index, count, deleting }, setTyped] = useState({
    index: 0,
    count: phrases[0].length,
    deleting: false,
  });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const finished = !deleting && count === phrases[index].length;
    const emptied = deleting && count === 0;
    const delay = finished
      ? hold
      : emptied
        ? 320
        : deleting
          ? speed / 2
          : speed;

    const timer = setTimeout(() => {
      setTyped((state) => {
        if (!state.deleting && state.count === phrases[state.index].length) {
          return { ...state, deleting: true };
        }
        if (state.deleting && state.count === 0) {
          return {
            index: (state.index + 1) % phrases.length,
            count: 0,
            deleting: false,
          };
        }
        return { ...state, count: state.count + (state.deleting ? -1 : 1) };
      });
    }, delay);

    return () => clearTimeout(timer);
  }, [count, deleting, hold, index, phrases, speed]);

  const longest = phrases.reduce((a, b) => (b.length > a.length ? b : a));

  return (
    <span className={cn("relative block", className)}>
      {/* Reserves the tallest the line can be, and is never seen. */}
      <span aria-hidden="true" className="invisible block">
        {longest}
      </span>
      <span className="sr-only">
        {phrases.slice(0, -1).join(", ")} and {phrases[phrases.length - 1]}
      </span>
      <span
        aria-hidden="true"
        className="l-gradient-ink absolute inset-0 block"
      >
        {phrases[index].slice(0, count)}
      </span>
    </span>
  );
}
