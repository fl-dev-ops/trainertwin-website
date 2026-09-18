import { BackedBy } from "@/components/landing2/BackedBy";
import { BuildYourTwin } from "@/components/landing2/BuildYourTwin";
import { ExplainerVideo } from "@/components/landing2/ExplainerVideo";
import { Hero } from "@/components/landing2/Hero";
import { HowItWorks } from "@/components/landing2/HowItWorks";
import { InAction } from "@/components/landing2/InAction";
import { Integrations } from "@/components/landing2/Integrations";
import { NotGenericAI } from "@/components/landing2/NotGenericAI";
import { ScrollEffects } from "@/components/landing2/ScrollEffects";
import { SiteFooter } from "@/components/landing2/SiteFooter";
import { SiteHeader } from "@/components/landing2/SiteHeader";
import { UseCases } from "@/components/landing2/UseCases";

/**
 * TrainerTwin marketing home.
 * Figma: SHXsv4d0ROls7tuOqQBNLZ, node 353:9923.
 *
 * Every section below is a Server Component. The only client code on the page
 * is ScrollEffects (the reveal + parallax layer, which reads `data-*`
 * attributes off the rendered DOM) and the scenario sections behind UseCases
 * and ExplainerVideo, which track which scenario is open.
 */
export default function TrainerTwinHome() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ExplainerVideo />
        <UseCases />
        <BuildYourTwin />
        <HowItWorks />
        <Integrations />
        <NotGenericAI />
        <BackedBy />
        <InAction />
      </main>
      <SiteFooter />
      <ScrollEffects />
    </>
  );
}
