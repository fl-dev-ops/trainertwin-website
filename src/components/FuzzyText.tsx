"use client";

import { Children, useEffect, useRef } from "react";

/**
 * Text drawn to a canvas and smeared a row at a time, after the React Bits
 * component of the same name. Ported to TypeScript; the behaviour and the prop
 * names are upstream's.
 *
 * Three changes, all needed to use it inside a running page rather than as a
 * 404 headline:
 *
 *   · `color` accepts `"inherit"`, the way `fontFamily` already did, so the
 *     canvas can take its ink from the token layer instead of a hex being
 *     passed down from a component that should not know one.
 *   · The intensities live in a ref that a second effect refreshes, so changing
 *     `baseIntensity` retunes the running loop instead of tearing the canvas
 *     down and re-measuring the font. That is what lets a caller ramp the fuzz
 *     up for a beat without the text blinking out.
 *   · Honours prefers-reduced-motion by drawing one clean frame and stopping.
 *
 * `direction: "both"` is kept for API parity but reads and writes the canvas
 * per column every frame; it is much more expensive than the other two and is
 * not what you want behind body copy.
 */
export type FuzzyDirection = "horizontal" | "vertical" | "both";

export interface FuzzyTextProps {
  children: React.ReactNode;
  fontSize?: number | string;
  fontWeight?: string | number;
  fontFamily?: string;
  /** Any canvas colour, or `"inherit"` to read the element's computed colour. */
  color?: string;
  enableHover?: boolean;
  baseIntensity?: number;
  hoverIntensity?: number;
  fuzzRange?: number;
  fps?: number;
  direction?: FuzzyDirection;
  /** ms to ease between intensity states. 0 snaps. */
  transitionDuration?: number;
  clickEffect?: boolean;
  glitchMode?: boolean;
  glitchInterval?: number;
  glitchDuration?: number;
  gradient?: string[] | null;
  letterSpacing?: number;
  className?: string;
}

export function FuzzyText({
  children,
  fontSize = "clamp(2rem, 8vw, 8rem)",
  fontWeight = 900,
  fontFamily = "inherit",
  color = "#fff",
  enableHover = true,
  baseIntensity = 0.18,
  hoverIntensity = 0.5,
  fuzzRange = 30,
  fps = 60,
  direction = "horizontal",
  transitionDuration = 0,
  clickEffect = false,
  glitchMode = false,
  glitchInterval = 2000,
  glitchDuration = 200,
  gradient = null,
  letterSpacing = 0,
  className = "",
}: FuzzyTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /* Live values the loop reads every frame. Kept out of the effect's
     dependencies on purpose: retuning the fuzz should not re-measure the font
     and blank the canvas for a tick. */
  const levels = useRef({ baseIntensity, hoverIntensity, transitionDuration });
  useEffect(() => {
    levels.current = { baseIntensity, hoverIntensity, transitionDuration };
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationFrameId = 0;
    let isCancelled = false;
    let glitchTimeoutId: ReturnType<typeof setTimeout> | undefined;
    let glitchEndTimeoutId: ReturnType<typeof setTimeout> | undefined;
    let clickTimeoutId: ReturnType<typeof setTimeout> | undefined;
    /* Set by `init`, which is async: the effect can be torn down before it
       finishes, and upstream hung this off the canvas element to bridge that. */
    let detach: (() => void) | null = null;

    const init = async () => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const computed = window.getComputedStyle(canvas);
      const computedFontFamily =
        fontFamily === "inherit"
          ? computed.fontFamily || "sans-serif"
          : fontFamily;
      const ink = color === "inherit" ? computed.color || "#fff" : color;

      const fontSizeStr =
        typeof fontSize === "number" ? `${fontSize}px` : fontSize;
      const fontString = `${fontWeight} ${fontSizeStr} ${computedFontFamily}`;

      try {
        await document.fonts.load(fontString);
      } catch {
        await document.fonts.ready;
      }
      if (isCancelled) return;

      let numericFontSize: number;
      if (typeof fontSize === "number") {
        numericFontSize = fontSize;
      } else {
        const temp = document.createElement("span");
        temp.style.fontSize = fontSize;
        document.body.appendChild(temp);
        numericFontSize = parseFloat(window.getComputedStyle(temp).fontSize);
        document.body.removeChild(temp);
      }

      const text = Children.toArray(children).join("");

      const offscreen = document.createElement("canvas");
      const offCtx = offscreen.getContext("2d");
      if (!offCtx) return;

      offCtx.font = fontString;
      offCtx.textBaseline = "alphabetic";

      let totalWidth = 0;
      if (letterSpacing !== 0) {
        for (const char of text) {
          totalWidth += offCtx.measureText(char).width + letterSpacing;
        }
        totalWidth -= letterSpacing;
      } else {
        totalWidth = offCtx.measureText(text).width;
      }

      const metrics = offCtx.measureText(text);
      const actualLeft = metrics.actualBoundingBoxLeft ?? 0;
      const actualRight =
        letterSpacing !== 0
          ? totalWidth
          : (metrics.actualBoundingBoxRight ?? metrics.width);
      const actualAscent = metrics.actualBoundingBoxAscent ?? numericFontSize;
      const actualDescent =
        metrics.actualBoundingBoxDescent ?? numericFontSize * 0.2;

      const textBoundingWidth = Math.ceil(
        letterSpacing !== 0 ? totalWidth : actualLeft + actualRight,
      );
      const tightHeight = Math.ceil(actualAscent + actualDescent);

      const extraWidthBuffer = 10;
      const offscreenWidth = textBoundingWidth + extraWidthBuffer;

      offscreen.width = offscreenWidth;
      offscreen.height = tightHeight;

      const xOffset = extraWidthBuffer / 2;
      offCtx.font = fontString;
      offCtx.textBaseline = "alphabetic";

      if (gradient && gradient.length >= 2) {
        const grad = offCtx.createLinearGradient(0, 0, offscreenWidth, 0);
        gradient.forEach((c, i) =>
          grad.addColorStop(i / (gradient.length - 1), c),
        );
        offCtx.fillStyle = grad;
      } else {
        offCtx.fillStyle = ink;
      }

      if (letterSpacing !== 0) {
        let xPos = xOffset;
        for (const char of text) {
          offCtx.fillText(char, xPos, actualAscent);
          xPos += offCtx.measureText(char).width + letterSpacing;
        }
      } else {
        offCtx.fillText(text, xOffset - actualLeft, actualAscent);
      }

      const horizontalMargin = fuzzRange + 20;
      const verticalMargin = 0;
      canvas.width = offscreenWidth + horizontalMargin * 2;
      canvas.height = tightHeight + verticalMargin * 2;
      /* CSS size, so the canvas occupies the space it draws rather than being
         stretched by whatever layout it lands in. */
      canvas.style.width = `${canvas.width}px`;
      canvas.style.height = `${canvas.height}px`;
      ctx.translate(horizontalMargin, verticalMargin);

      const interactiveLeft = horizontalMargin + xOffset;
      const interactiveTop = verticalMargin;
      const interactiveRight = interactiveLeft + textBoundingWidth;
      const interactiveBottom = interactiveTop + tightHeight;

      let isHovering = false;
      let isClicking = false;
      let isGlitching = false;
      let currentIntensity = levels.current.baseIntensity;
      let lastFrameTime = 0;
      const frameDuration = 1000 / fps;

      const clear = () =>
        ctx.clearRect(
          -fuzzRange - 20,
          -fuzzRange - 10,
          offscreenWidth + 2 * (fuzzRange + 20),
          tightHeight + 2 * (fuzzRange + 10),
        );

      const smear = (intensity: number) => {
        if (direction === "horizontal") {
          for (let j = 0; j < tightHeight; j++) {
            const dx = Math.floor(
              intensity * (Math.random() - 0.5) * fuzzRange,
            );
            ctx.drawImage(
              offscreen,
              0,
              j,
              offscreenWidth,
              1,
              dx,
              j,
              offscreenWidth,
              1,
            );
          }
          return;
        }
        if (direction === "vertical") {
          for (let i = 0; i < offscreenWidth; i++) {
            const dy = Math.floor(
              intensity * (Math.random() - 0.5) * fuzzRange,
            );
            ctx.drawImage(
              offscreen,
              i,
              0,
              1,
              tightHeight,
              i,
              dy,
              1,
              tightHeight,
            );
          }
          return;
        }
        for (let j = 0; j < tightHeight; j++) {
          const dx = Math.floor(intensity * (Math.random() - 0.5) * fuzzRange);
          ctx.drawImage(
            offscreen,
            0,
            j,
            offscreenWidth,
            1,
            dx,
            j,
            offscreenWidth,
            1,
          );
        }
        const tempData = ctx.getImageData(
          0,
          0,
          offscreenWidth + fuzzRange,
          tightHeight + fuzzRange,
        );
        clear();
        ctx.putImageData(tempData, 0, 0);
        for (let i = 0; i < offscreenWidth + fuzzRange; i++) {
          const dy = Math.floor(
            intensity * (Math.random() - 0.5) * fuzzRange * 0.5,
          );
          const colData = ctx.getImageData(i, 0, 1, tightHeight + fuzzRange);
          ctx.clearRect(i, -fuzzRange, 1, tightHeight + 2 * fuzzRange);
          ctx.putImageData(colData, i, dy);
        }
      };

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        // One clean frame, no loop: the fuzz is the movement being asked about.
        clear();
        ctx.drawImage(offscreen, 0, 0);
        return;
      }

      const startGlitchLoop = () => {
        if (!glitchMode || isCancelled) return;
        glitchTimeoutId = setTimeout(() => {
          if (isCancelled) return;
          isGlitching = true;
          glitchEndTimeoutId = setTimeout(() => {
            isGlitching = false;
            startGlitchLoop();
          }, glitchDuration);
        }, glitchInterval);
      };
      if (glitchMode) startGlitchLoop();

      const run = (timestamp: number) => {
        if (isCancelled) return;
        if (timestamp - lastFrameTime < frameDuration) {
          animationFrameId = window.requestAnimationFrame(run);
          return;
        }
        lastFrameTime = timestamp;

        clear();

        const live = levels.current;
        const targetIntensity =
          isClicking || isGlitching
            ? 1
            : isHovering
              ? live.hoverIntensity
              : live.baseIntensity;

        if (live.transitionDuration > 0) {
          const stepSize = 1 / (live.transitionDuration / frameDuration);
          if (currentIntensity < targetIntensity) {
            currentIntensity = Math.min(
              currentIntensity + stepSize,
              targetIntensity,
            );
          } else if (currentIntensity > targetIntensity) {
            currentIntensity = Math.max(
              currentIntensity - stepSize,
              targetIntensity,
            );
          }
        } else {
          currentIntensity = targetIntensity;
        }

        smear(currentIntensity);
        animationFrameId = window.requestAnimationFrame(run);
      };
      animationFrameId = window.requestAnimationFrame(run);

      const isInsideTextArea = (x: number, y: number) =>
        x >= interactiveLeft &&
        x <= interactiveRight &&
        y >= interactiveTop &&
        y <= interactiveBottom;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        isHovering = isInsideTextArea(
          e.clientX - rect.left,
          e.clientY - rect.top,
        );
      };
      const handleMouseLeave = () => {
        isHovering = false;
      };
      const handleClick = () => {
        isClicking = true;
        clearTimeout(clickTimeoutId);
        clickTimeoutId = setTimeout(() => {
          isClicking = false;
        }, 150);
      };
      const handleTouchMove = (e: TouchEvent) => {
        e.preventDefault();
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        isHovering = isInsideTextArea(
          touch.clientX - rect.left,
          touch.clientY - rect.top,
        );
      };
      const handleTouchEnd = () => {
        isHovering = false;
      };

      if (enableHover) {
        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseleave", handleMouseLeave);
        canvas.addEventListener("touchmove", handleTouchMove, {
          passive: false,
        });
        canvas.addEventListener("touchend", handleTouchEnd);
      }
      if (clickEffect) canvas.addEventListener("click", handleClick);

      detach = () => {
        if (enableHover) {
          canvas.removeEventListener("mousemove", handleMouseMove);
          canvas.removeEventListener("mouseleave", handleMouseLeave);
          canvas.removeEventListener("touchmove", handleTouchMove);
          canvas.removeEventListener("touchend", handleTouchEnd);
        }
        if (clickEffect) canvas.removeEventListener("click", handleClick);
      };
    };

    void init();

    return () => {
      isCancelled = true;
      window.cancelAnimationFrame(animationFrameId);
      clearTimeout(glitchTimeoutId);
      clearTimeout(glitchEndTimeoutId);
      clearTimeout(clickTimeoutId);
      detach?.();
    };
  }, [
    children,
    fontSize,
    fontWeight,
    fontFamily,
    color,
    enableHover,
    fuzzRange,
    fps,
    direction,
    clickEffect,
    glitchMode,
    glitchInterval,
    glitchDuration,
    gradient,
    letterSpacing,
  ]);

  return <canvas ref={canvasRef} className={className} />;
}

export default FuzzyText;
