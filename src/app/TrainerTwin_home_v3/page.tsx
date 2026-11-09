import { EarlyAccessSteps } from "@/components/home/EarlyAccessSteps";
import { BuildYourTwinV3 } from "@/components/home/BuildYourTwinV3";
import { FoundingTrainers } from "@/components/home/FoundingTrainers";
import { HeroV3 } from "@/components/home/HeroV3";
import { PageFooter } from "@/components/home/PageFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteLoader } from "@/components/home/SiteLoader";
import { ThreeWays } from "@/components/home/ThreeWays";
import { CompareTwin } from "@/components/home/CompareTwin";
import { WhoItsFor } from "@/components/home/WhoItsFor";
import { NAV_V3 } from "@/components/home/nav";
import { ScrollEffects } from "@/components/landing2/ScrollEffects";

/**
 * Experimental home (v3): Figma node 717:9911 for the hero. Other sections
 * stay the live home.
 */
export default function TrainerTwinHomeV3() {
  return (
    <>
      <SiteLoader />
      <SiteHeader nav={NAV_V3} mobileMenu ctaLabel="Request a demo" />
      <main id="top">
        <HeroV3 />
        <ThreeWays
          explainerFirst
          art="v3"
          interactive={{
            title: "Learn with you. Practise with you. Talk to you.",
            body: "Your Twin teaches, practises, and answers questions just like you.",
            points: [
              "Role-play - Real world conversation",
              "1:1 conversation - Clear doubts",
              "Teach & Explain",
            ],
          }}
          explainer={{
            title: (
              <>
                Create videos without
                <br />
                being on camera.
              </>
            ),
            body: "Turn your knowledge into engaging videos without being on camera.",
            points: [
              "Animated explainers video",
              "Personalised demo video",
              "Short form video",
            ],
          }}
        />
        <WhoItsFor
          carousel={false}
          night={false}
          layout="scroll"
          profiles={[
            {
              key: "experts",
              kicker: "Experts & Influencers",
              title: "Be there, even when you're not.",
              body: "Turn your expertise into more conversations, leads, and revenue, 24/7.",
              href: "#early-access",
              art: "experts",
              cta: "Request a demo",
            },
            {
              key: "tech",
              kicker: "Tech Trainers",
              title: "Teach beyond the classroom.",
              body: "Turn your knowledge into interactive learning, demos, and practice, anytime.",
              href: "/TrainerTwin_home/tech_trainer",
              art: "tech",
              cta: "Request a demo",
            },
            {
              key: "sales",
              kicker: "Sales Trainer",
              title: "Practice every sales conversation.",
              body: "Let learners practise pitches, objections, negotiations, and real-world conversations.",
              href: "#sales-trainers",
              art: "sales",
              cta: "Request a demo",
            },
            {
              key: "other",
              kicker: "Something else?",
              title: "Something else?",
              body: "Language, finance, design, exam prep, leadership training. Tell us what you need and we’ll work it out with you.",
              href: "#early-access",
              art: "other",
              cta: "Get in touch",
            },
          ]}
        />
        <BuildYourTwinV3 />
        <CompareTwin />
        <FoundingTrainers />
      </main>
      <PageFooter
        cta={<EarlyAccessSteps />}
        nav={NAV_V3}
        layout="v3"
        points={[
          "A twin that explains, hints and assesses the way you do",
          "Learners can practise even when you are not on a call",
          "Founding trainers get a special equity program",
        ]}
        pointsNote="Takes less than 5 mins. We’ll follow up with a demo within 24hrs."
      />
      <ScrollEffects />
    </>
  );
}
