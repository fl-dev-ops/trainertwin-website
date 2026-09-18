import { BackedBy } from "@/components/landing/BackedBy";
import { BuildYourTwin } from "@/components/landing/BuildYourTwin";
import { ExplainerVideo } from "@/components/landing/ExplainerVideo";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { InAction } from "@/components/landing/InAction";
import { Integrations } from "@/components/landing/Integrations";
import { NotGenericAI } from "@/components/landing/NotGenericAI";
import { ScrollEffects } from "@/components/landing/ScrollEffects";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { UseCases } from "@/components/landing/UseCases";

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
