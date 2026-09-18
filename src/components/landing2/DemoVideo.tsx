"use client";

import { useState } from "react";

const VIDEO_ID = "ArAxbHGoyyw";
/** The `si` the share link carried, kept so the view is attributed the same. */
const EMBED = `https://www.youtube.com/embed/${VIDEO_ID}?si=ZxGTU0OJb3ZnAZXm&autoplay=1`;

/**
 * The demo, played in place.
 *
 * Until it is clicked this is a poster and a play button, not the embed: a
 * YouTube iframe pulls in the better part of a megabyte of script and sets its
 * cookies the moment it mounts, which is a lot to spend on every visitor who
 * scrolls past. The click swaps it in with autoplay, so the button press and
 * the video starting are one action.
 */
export function DemoVideo() {
  const [playing, setPlaying] = useState(false);
  const [poster, setPoster] = useState(
    `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
  );

  return (
    <div
      data-reveal
      className="relative mx-auto aspect-video w-full max-w-[960px] overflow-hidden rounded-[16px] border border-[var(--l-line-card)] bg-black shadow-[var(--tt-elevation-2)]"
    >
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={EMBED}
          title="TrainerTwin demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label="Play the TrainerTwin demo"
          className="group absolute inset-0 block cursor-pointer"
        >
          {/* A remote poster straight from YouTube: next/image would want the
              host allow-listed in next.config for one picture it cannot
              optimise anyway. maxres is missing on some uploads, so a failure
              falls back to the size every video has. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={poster}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            onError={() =>
              setPoster(`https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`)
            }
          />
          <span className="absolute inset-0 bg-black/10 transition-colors duration-200 ease-standard group-hover:bg-black/20" />
          <span className="absolute top-1/2 left-1/2 grid h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/35 backdrop-blur-[2px] transition-[background-color,transform] duration-200 ease-standard group-hover:scale-105 group-hover:bg-white/55">
            <svg width="22" height="24" viewBox="0 0 18 20" fill="white">
              <path d="M0 0l18 10L0 20z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
