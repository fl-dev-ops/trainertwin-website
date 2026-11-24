"use client";

import FlexCarousel, { type FlexCarouselItem } from "./FlexCarousel";
import { COACHES } from "./coachSpotlightData";

/** A one-word category per coach — short enough to sit over the photo without wrapping. */
const CATEGORY: Record<string, string> = {
  "Vasanth Bhat": "Tech",
  "Olga Sinenko": "Sales",
  "Aishwarya Naresh Reganti": "Founder",
  "Prathosh A P": "ML",
  Jameel: "Interview",
  "Antoni Lacinai": "Communication",
  "Johnny (Daniele Ponzo)": "English",
  "Darren Mitchell": "Sales",
  "Tony Latimer": "Leadership",
  "Marcus Cauchi": "Sales",
  "Bevan Broadbent": "Founder",
  "Flo Akinbiyi": "Communication",
  "Gopal RajGuru": "Sales",
  "Seán Weafer": "Sales",
  "Clive Miller": "Sales",
  "Shehzad Mukadam": "Sales",
  "Natalie Serebrennik": "Career",
};

const SLIDES: FlexCarouselItem[] = COACHES.map((coach) => ({
  src: coach.photo,
  alt: coach.name,
  title: coach.name,
  subtitle: coach.meta,
  cardLabel: CATEGORY[coach.name] ?? coach.meta.split(" · ")[0],
}));

/**
 * Coaches exploring their twins, shown with the same WebGL "liquid glass"
 * carousel as the team section (FlexCarousel): the few cards nearest centre
 * get a short role tag over the photo, and the centred coach's full name and
 * role show in the caption below the row.
 */
export function CoachSpotlight() {
  return (
    <div className="coach-stage">
      <FlexCarousel
        items={SLIDES}
        preset="liquid"
        intro="deal"
        cardHeight={0.48}
        gap={10}
        squeeze={0.2}
        focusOnClick={false}
        captureWheel={false}
        captions
        fit="portrait"
        radius={28}
        autoplay
        interval={3.5}
      />
    </div>
  );
}
