"use client";

import { cn } from "./cn";

/**
 * A highlight swept across text, after the React Bits component of the same
 * name — same props, same defaults, same result.
 *
 * The upstream build drives `background-position` from `useAnimationFrame` in
 * the `motion` package. Here that sweep is a CSS keyframe instead: it is the
 * same property being animated, nothing reads the value per frame, and every
 * other loop on this page (l-pulse, l-belt, l-bars, l-swap-*) is already CSS —
 * so a 30kB animation runtime would be carried on every page for one shimmer.
 *
 * `delay` is the one prop not carried over: a pause between cycles needs a
 * keyframe stop at a position that varies per instance, and @keyframes
 * percentages are static. It is 0 by default and 0 here.
 */
export interface ShinyTextProps {
  text: string;
  /** Falls back to plain `color` text, no gradient and no sweep. */
  disabled?: boolean;
  /** One cycle, in seconds. */
  speed?: number;
  className?: string;
  color?: string;
  shineColor?: string;
  /** Angle of the gradient, in degrees. */
  spread?: number;
  /** Reverse on alternate cycles rather than restarting. */
  yoyo?: boolean;
  pauseOnHover?: boolean;
  direction?: "left" | "right";
}

export function ShinyText({
  text,
  disabled = false,
  speed = 2,
  className = "",
  color = "#b5b5b5",
  shineColor = "#ffffff",
  spread = 120,
  yoyo = false,
  pauseOnHover = false,
  direction = "left",
}: ShinyTextProps) {
  if (disabled) {
    return (
      <span className={className} style={{ color }}>
        {text}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "l-shine",
        direction === "right" && "l-shine-reverse",
        yoyo && "l-shine-yoyo",
        pauseOnHover && "l-shine-hover",
        className,
      )}
      style={{
        // The colours are props, so the gradient is inline; only the sweep
        // itself lives in the stylesheet.
        backgroundImage: `linear-gradient(${spread}deg, ${color} 0%, ${color} 35%, ${shineColor} 50%, ${color} 65%, ${color} 100%)`,
        // Read back by the reduced-motion rule, which drops the gradient and
        // paints the text in it flat.
        color,
        ["--l-shine-speed" as string]: `${speed}s`,
      }}
    >
      {text}
    </span>
  );
}
