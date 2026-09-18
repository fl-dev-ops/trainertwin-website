import { BuildYourTwin } from "@/components/home/BuildYourTwin";
import { Hero } from "@/components/home/Hero";
import { PageFooter } from "@/components/home/PageFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { ThreeWays } from "@/components/home/ThreeWays";
import { WhoItsFor } from "@/components/home/WhoItsFor";
import { WhyTrainerTwin } from "@/components/home/WhyTrainerTwin";
import { ScrollEffects } from "@/components/landing2/ScrollEffects";

/**
 * TrainerTwin home — the general, multi-vertical marketing page (not the Tech
 * Trainer persona page: that's /TrainerTwin_home and /TrainerTwin_home_2,
 * whose eyebrow says so directly — "Twin for Tech Trainers"). This is the page
 * the logo links back to.
 *
 * Alternates light and dark by section, the same editorial rhythm the two
 * /TrainerTwin_home* marketing routes use: a night band reads as a pause, not
 * a mode switch (§7, D13). Here that's the right half of the hero, "Who it's
 * for", and the reused comparison's own two-window night contrast.
 *
 *   Hero               split — light copy, dark mechanism
 *   What can it do      light
 *   Who it's for        night
 *   Build your twin     light (sunken)
 *   Generic AI vs Twin  reused whole from landing2 (WhyTrainerTwin.tsx)
 *   Footer              night — and the invite, reused from landing2
 *
 * `ScrollEffects` is mounted once, at the page: the only client motion the
 * reused comparison section needs (`data-reveal` on its heading and points).
 * Nothing else on this page uses it yet.
 */
export default function TrainerTwinHomeV1() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <Hero />
        <ThreeWays />
        <WhoItsFor />
        <BuildYourTwin />
        <WhyTrainerTwin />
      </main>
      <PageFooter />
      <ScrollEffects />
    </>
  );
}
