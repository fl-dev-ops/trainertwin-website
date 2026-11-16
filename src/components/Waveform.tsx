"use client";

import { useSyncExternalStore } from "react";
import { Waves } from "react-animated-waves";
import { cn } from "./cn";

/**
 * The voice-recording wave, copied from the V3 prototype (`obWave` / `mountObWaves`, the "Add your voice"
 * step): the `react-animated-waves` canvas, 72px tall, three soft layers in an orange gradient
 * (`--tt-primary`, #FF8A4C, `--tt-primary`). It fills its container's width.
 *
 * Two presets, the prototype's:
 *   idle  `live` off: amplitude 12, intensity .35, speed .6 (a gentle swell while waiting to record).
 *   live  `live` on:  amplitude 30, intensity 1, speed 1.4 (while recording).
 *
 * Decorative by default (`aria-hidden`): the words "Recording · 0:12" beside it carry the meaning. Pass
 * `label` where the wave is the only indication. Colours are read from `--tt-primary` (and follow a theme
 * change); pass `colors` to override. Reduced motion is respected (the canvas is still); the prototype
 * itself ignores the setting, so that is the one difference.
 */
export interface WaveformProps {
  /** Recording now. Off is the quiet idle wave. */
  live?: boolean;
  /** Canvas height in px. The prototype's is 72. */
  height?: number;
  /** Override the gradient stops (any CSS colours). Default: `--tt-primary`, #FF8A4C, `--tt-primary`. */
  colors?: string[];
  /** Stop animating for users who ask for reduced motion. Default true. */
  respectReducedMotion?: boolean;
  /** Accessible name; makes it `role="img"` instead of decorative. */
  label?: string;
  className?: string;
}

const PRESET = {
  idle: { amplitude: 12, intensity: 0.35, speed: 0.6 },
  live: { amplitude: 30, intensity: 1, speed: 1.4 },
} as const;

function readPrimary() {
  if (typeof document === "undefined") return "#FF5A00";
  return getComputedStyle(document.documentElement).getPropertyValue("--tt-primary").trim() || "#FF5A00";
}

function subscribe(notify: () => void) {
  const mo = new MutationObserver(notify);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme", "class"] });
  return () => mo.disconnect();
}

export function Waveform({ live = false, height = 72, colors, respectReducedMotion = true, label, className }: WaveformProps) {
  const primary = useSyncExternalStore(subscribe, readPrimary, () => "#FF5A00");
  const p = PRESET[live ? "live" : "idle"];
  return (
    <div
      {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })}
      className={cn("w-full", className)}
      style={{ height }}
    >
      <Waves
        colors={colors ?? [primary, "#FF8A4C", primary]}
        amplitude={p.amplitude}
        intensity={p.intensity}
        speed={p.speed}
        height="100%"
        respectReducedMotion={respectReducedMotion}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
}
