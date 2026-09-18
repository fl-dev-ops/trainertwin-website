"use client";

import { useEffect, useRef } from "react";
import { characterViews, PARTICLE_COUNT } from "@/data/characterViews";
import {
  createParticles,
  DEFAULT_CONFIG,
  getStageMetrics,
  interpolateViews,
  renderParticles,
  resampleViews,
  updateParticles,
  type MarkStyle,
  type Envelope,
  type MorphConfig,
  type PaintStyle,
  type ParticleSystem,
} from "@/utils/particleMorph";

/**
 * A mannequin bust built out of ASCII particles, turning through eight views.
 *
 * The eight views are keyframes of one particle set, not eight pictures: every
 * particle exists in all of them and is interpolated between the pair either
 * side of the current position, so the character comes apart into travelling
 * glyphs and reassembles at the next angle rather than cutting or crossfading.
 * The rotation is an illusion made of 2D interpolation — nothing here is
 * projected at runtime (see `src/data/characterViews.ts`).
 *
 * React owns the element, the lifecycle and the pointer; it renders once. The
 * frame loop lives entirely in refs and never touches state, so a 2,600
 * particle field costs nothing in reconciliation.
 */
export type AsciiCharacterProps = {
  /** Turn on its own. Off leaves it on the front view until dragged. */
  autoRotate?: boolean;
  /** Clamped to what the view data carries; fewer thins the character. */
  particleCount?: number;
  /** ms for one whole revolution, entrance and exit included. */
  rotationDuration?: number;
  /** ms at the head of the revolution spent assembling. */
  enterDuration?: number;
  /** ms at the tail of it spent coming apart. */
  exitDuration?: number;
  /** Glyph size in px at a 700px stage. */
  particleSize?: number;
  /** How far particles bow out at the middle of a morph. */
  scatterAmount?: number;
  /** Amplitude of the idle drift. */
  noiseAmount?: number;
  /** Multiplier on the whole timeline. 2 turns twice as fast. */
  rotationSpeed?: number;
  /**
   * Ink. Anything canvas accepts. Left off, the element's own computed `color`
   * is used, so the character follows whatever the surrounding CSS says — a
   * dark panel and a white page need no prop between them.
   */
  color?: string;
  /**
   * What each particle is drawn as. `pixel` is a square that grows from a dot
   * in the highlights to a filled box in shadow; `ascii` is the glyph ramp
   * `. ' \` : ^ * + o O #`.
   */
  marks?: MarkStyle;
  /** Only read when `marks` is `ascii`. */
  fontFamily?: string;
  /** Drag to scrub, and a little parallax on hover. */
  interactive?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

/** How far the pointer travels to turn the character one whole view. */
const DRAG_PER_VIEW = 150;
/** ms of stillness after a drag before it picks the turn back up. */
const RESUME_DELAY = 1400;

/** Views in a full turn. The data carries eight; a revolution is all of them. */
const VIEWS = 8;

/**
 * The clock, in milliseconds, read as a position in the turn: `0` is the front
 * view, `8` the front again one revolution later.
 *
 * Linear, with nothing held. The revolution is the loop — it emerges over the
 * first `enterDuration` of it and comes apart over the last `exitDuration`,
 * but the turn underneath never pauses for either.
 */
function clockToPos(clock: number, cfg: MorphConfig): number {
  return (clock / cfg.rotationDuration) * VIEWS;
}

/** The inverse, for handing a scrubbed position back to the clock. */
function posToClock(pos: number, cfg: MorphConfig): number {
  return (pos / VIEWS) * cfg.rotationDuration;
}

/**
 * How assembled the figure is at this point in the revolution, and which way
 * the stagger runs — out of nothing at the start, back into it at the end.
 */
function envelopeAt(clock: number, cfg: MorphConfig): Envelope {
  const cycle = cfg.rotationDuration;
  const within = ((clock % cycle) + cycle) % cycle;
  const exitFrom = cycle - cfg.exitDuration;

  if (within < cfg.enterDuration) {
    return { presence: within / cfg.enterDuration, direction: 1 };
  }
  if (within >= exitFrom) {
    return {
      presence: 1 - (within - exitFrom) / cfg.exitDuration,
      direction: -1,
    };
  }
  return { presence: 1, direction: 1 };
}

export function AsciiCharacter({
  autoRotate = true,
  particleCount = PARTICLE_COUNT,
  rotationDuration = DEFAULT_CONFIG.rotationDuration,
  enterDuration = DEFAULT_CONFIG.enterDuration,
  exitDuration = DEFAULT_CONFIG.exitDuration,
  particleSize = DEFAULT_CONFIG.particleSize,
  scatterAmount = DEFAULT_CONFIG.scatterAmount,
  noiseAmount = DEFAULT_CONFIG.noiseAmount,
  rotationSpeed = 1,
  color,
  marks = "pixel",
  fontFamily = 'ui-monospace, SFMono-Regular, Menlo, "JetBrains Mono", monospace',
  interactive = true,
  className,
  style,
}: AsciiCharacterProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const colorRef = useRef(color);
  const frameRef = useRef(0);
  const systemRef = useRef<ParticleSystem | null>(null);
  const configRef = useRef<MorphConfig>(DEFAULT_CONFIG);
  const paintRef = useRef<PaintStyle>({
    color: color ?? "#141414",
    fontFamily,
    marks,
  });
  /** Whatever CSS says the element's colour is, resolved on mount and resize. */
  const inheritedColorRef = useRef("#141414");

  /* The clock, and everything the pointer does to it. Refs rather than state:
     these change every frame and nothing in the tree depends on them. */
  const clockRef = useRef(0);
  const dragRef = useRef({
    active: false,
    pointerId: -1,
    startX: 0,
    startPos: 0,
    pos: 0,
    releasedAt: 0,
    hover: 0,
  });

  /* Props mirrored into refs so the frame loop can read the latest values
     without being torn down and rebuilt every time one of them changes. No
     dependency array: this is "after every render", which is exactly when the
     mirror should be refreshed. Declared before the loop's own effect so the
     first frame already sees real values rather than the defaults. */
  useEffect(() => {
    colorRef.current = color;
    configRef.current = {
      particleCount: Math.max(1, Math.min(PARTICLE_COUNT, particleCount)),
      particleSize,
      scatterAmount,
      noiseAmount,
      stagger: DEFAULT_CONFIG.stagger,
      rotationDuration: rotationDuration / Math.max(0.05, rotationSpeed),
      enterDuration: enterDuration / Math.max(0.05, rotationSpeed),
      exitDuration: exitDuration / Math.max(0.05, rotationSpeed),
    };
    paintRef.current = {
      color: color ?? inheritedColorRef.current,
      fontFamily,
      marks,
    };
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const count = Math.max(1, Math.min(PARTICLE_COUNT, particleCount));
    /* Thinned once, here, rather than indexed through on every frame. */
    const views = resampleViews(characterViews, count);
    const system = createParticles(count, views);
    systemRef.current = system;

    let width = 0;
    let height = 0;
    let dpr = 1;

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      const nextW = Math.max(1, Math.round(rect.width));
      const nextH = Math.max(1, Math.round(rect.height));
      const nextDpr = Math.min(window.devicePixelRatio || 1, 2);
      if (nextW === width && nextH === height && nextDpr === dpr) return;
      width = nextW;
      height = nextH;
      dpr = nextDpr;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      /* Read here rather than per frame: `getComputedStyle` forces a style
         recalc, and resize is the only moment the answer can have changed
         without a re-render having already refreshed the mirror. */
      inheritedColorRef.current = getComputedStyle(canvas).color || "#141414";
      if (!colorRef.current) paintRef.current.color = inheritedColorRef.current;
      /* setTransform, not scale: resize runs repeatedly and scale compounds. */
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    handleResize();

    const observer = new ResizeObserver(handleResize);
    observer.observe(canvas);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    /** Fully present and settled, for the frames that are not animated. */
    const STILL: Envelope = { presence: 1, direction: 1 };

    const paintOnce = (pos: number) => {
      const cfg = configRef.current;
      const span = interpolateViews(views, pos);
      /* Repeatedly: one pass only moves particles a fraction of the way toward
         their targets, and a still frame should be settled. */
      for (let i = 0; i < 15; i++) {
        updateParticles(system, span, cfg, 16.7, 0, STILL);
      }
      renderParticles(
        ctx,
        system,
        cfg,
        getStageMetrics(width, height),
        paintRef.current,
      );
    };

    let last = 0;
    const tick = (now: number) => {
      const cfg = configRef.current;
      const dt = last ? now - last : 16.7;
      last = now;

      const drag = dragRef.current;
      let pos: number;
      let env: Envelope;

      if (drag.active) {
        /* Scrubbing: the pointer owns the position outright, and the figure
           stays assembled the whole time — a hand on it is not the moment to
           dissolve. */
        pos = drag.pos;
        env = STILL;
      } else {
        if (autoRotate && now - drag.releasedAt >= RESUME_DELAY) {
          clockRef.current += dt;
        }
        pos = clockToPos(clockRef.current, cfg);
        env = envelopeAt(clockRef.current, cfg);
      }

      pos += drag.hover;

      const span = interpolateViews(views, pos);
      updateParticles(system, span, cfg, dt, now, env);
      renderParticles(
        ctx,
        system,
        cfg,
        getStageMetrics(width, height),
        paintRef.current,
      );
      frameRef.current = requestAnimationFrame(tick);
    };

    /* Reduced motion gets the front view and no loop at all. Dragging still
       works — the pointer handler repaints on demand — which keeps the
       character explorable for a reader who has asked not to be moved at. */
    if (reduced.matches || !autoRotate) {
      paintOnce(0);
      if (!reduced.matches) frameRef.current = requestAnimationFrame(tick);
    } else {
      frameRef.current = requestAnimationFrame(tick);
    }

    /* ------------------------------------------------------------ pointer */
    const onPointerDown = (e: PointerEvent) => {
      if (!interactive) return;
      const drag = dragRef.current;
      drag.active = true;
      drag.pointerId = e.pointerId;
      drag.startX = e.clientX;
      drag.startPos = clockToPos(clockRef.current, configRef.current);
      drag.pos = drag.startPos;
      canvas.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!interactive) return;
      const drag = dragRef.current;
      if (drag.active && e.pointerId === drag.pointerId) {
        drag.pos = drag.startPos + (e.clientX - drag.startX) / DRAG_PER_VIEW;
        if (reduced.matches) paintOnce(drag.pos);
        e.preventDefault();
        return;
      }
      /* Not dragging: a fraction of a view of parallax, enough to feel alive
         under the cursor and not enough to read as a control. */
      if (e.pointerType === "mouse") {
        const rect = canvas.getBoundingClientRect();
        drag.hover = ((e.clientX - rect.left) / rect.width - 0.5) * 0.3;
      }
    };

    const endDrag = (e: PointerEvent) => {
      const drag = dragRef.current;
      if (!drag.active || e.pointerId !== drag.pointerId) return;
      drag.active = false;
      drag.releasedAt = performance.now();
      /* Hand the scrubbed position back to the clock, so the automatic turn
         picks up from where the hand left it rather than snapping back. */
      clockRef.current = posToClock(drag.pos, configRef.current);
      if (canvas.hasPointerCapture(e.pointerId)) {
        canvas.releasePointerCapture(e.pointerId);
      }
    };

    const onPointerLeave = () => {
      dragRef.current.hover = 0;
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", endDrag);
    canvas.addEventListener("pointercancel", endDrag);
    canvas.addEventListener("pointerleave", onPointerLeave);

    return () => {
      cancelAnimationFrame(frameRef.current);
      observer.disconnect();
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerup", endDrag);
      canvas.removeEventListener("pointercancel", endDrag);
      canvas.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [autoRotate, particleCount, interactive]);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label="A mannequin head and shoulders built from ASCII characters, turning slowly"
      className={className}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        touchAction: "pan-y",
        cursor: interactive ? "ew-resize" : "default",
        ...style,
      }}
    />
  );
}

export default AsciiCharacter;
