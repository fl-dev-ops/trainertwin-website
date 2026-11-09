"use client";

import { useEffect, useState } from "react";
import { LogoSymbol } from "@/components/Logo";
import { Icon, type IconName } from "./icons";

const STEPS: Array<{ icon: IconName; label: string }> = [
  { icon: "sparkles", label: "AI" },
  { icon: "video", label: "Avatar" },
  { icon: "mic", label: "Voice" },
  { icon: "chat", label: "Real time conversation" },
];

const STEP_MS = 550;
const BRAND_MS = 700;

/* The cover dissolves as a grid of tiles rather than one flat fade — each
   tile's own delay comes from its distance to the grid's centre, so the
   opening reads as one aperture widening outward rather than a directional
   wipe. Delay/duration here must match the `--tt-tile-delay` consumer and
   `tt-loader-tile-out`'s own duration in home.css. */
const GRID_COLS = 8;
const GRID_ROWS = 5;
const TILE_STAGGER_MS = 24;
const TILE_DURATION_MS = 420;

const TILES = Array.from({ length: GRID_COLS * GRID_ROWS }, (_, i) => {
  const col = i % GRID_COLS;
  const row = Math.floor(i / GRID_COLS);
  const cx = (GRID_COLS - 1) / 2;
  const cy = (GRID_ROWS - 1) / 2;
  const delay = Math.hypot(col - cx, row - cy) * TILE_STAGGER_MS;
  return { key: `${col}-${row}`, delay };
});

const GRID_MS = Math.max(...TILES.map((t) => t.delay)) + TILE_DURATION_MS;

/**
 * v3-only splash on first paint: a word/icon cycles through what a twin is
 * (AI, Avatar, Voice, Real time conversation), settles on the wordmark, then
 * a grid of tiles dissolves outward from the centre to reveal the page
 * underneath — which has been rendering all along, just covered. Skipped
 * under reduced motion, and `@media (scripting: none)` in the stylesheet
 * keeps a no-JS visit from being stuck behind it, since nothing would ever
 * remove the overlay.
 */
export function SiteLoader() {
  const [step, setStep] = useState(0);
  const [closing, setClosing] = useState(false);
  const [done, setDone] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    if (done) return;

    document.documentElement.classList.add("tt-loading");
    let cancelled = false;
    const timers: number[] = [];

    for (let i = 1; i < STEPS.length; i++) {
      timers.push(
        window.setTimeout(() => {
          if (!cancelled) setStep(i);
        }, STEP_MS * i),
      );
    }
    timers.push(
      window.setTimeout(() => {
        if (!cancelled) setStep(STEPS.length);
      }, STEP_MS * STEPS.length),
    );
    timers.push(
      window.setTimeout(() => {
        if (cancelled) return;
        setClosing(true);
        document.documentElement.classList.remove("tt-loading");
      }, STEP_MS * STEPS.length + BRAND_MS),
    );
    timers.push(
      window.setTimeout(
        () => {
          if (!cancelled) setDone(true);
        },
        STEP_MS * STEPS.length + BRAND_MS + GRID_MS,
      ),
    );

    return () => {
      cancelled = true;
      timers.forEach(window.clearTimeout);
      document.documentElement.classList.remove("tt-loading");
    };
  }, [done]);

  if (done) return null;

  const onBrand = step >= STEPS.length;
  const current = STEPS[step];

  return (
    <div className="tt-loader" aria-hidden="true">
      <div
        className={closing ? "tt-loader-wash is-closing" : "tt-loader-wash"}
      />
      <div
        key={step}
        className={closing ? "tt-loader-step is-closing" : "tt-loader-step"}
      >
        <span className="tt-loader-icon">
          {onBrand ? <LogoSymbol size={28} /> : <Icon name={current.icon} />}
        </span>
        <span className="tt-loader-label">
          {onBrand ? "TrainerTwin" : current.label}
        </span>
      </div>
      <div
        className={closing ? "tt-loader-grid is-closing" : "tt-loader-grid"}
      >
        {TILES.map((tile) => (
          <span
            key={tile.key}
            className="tt-loader-tile"
            style={{ ["--tt-tile-delay" as string]: `${tile.delay}ms` }}
          />
        ))}
      </div>
    </div>
  );
}
