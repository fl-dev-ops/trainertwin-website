import { Card, CardBody, CardTitle } from "@/components/Card";
import { EarlyAccessSteps } from "@/components/home/EarlyAccessSteps";
import { PageFooter } from "@/components/home/PageFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { CtaLink } from "@/components/home/CtaLink";
import { Icon } from "@/components/home/icons";
import { InviteSubmitForm } from "@/components/home/InviteSubmitForm";
import { NAV_V3 } from "@/components/home/nav";
import { ScrollEffects } from "@/components/landing2/ScrollEffects";
import {
  INVITE_EVOLVE,
  INVITE_FOUNDING,
  INVITE_HERO,
  INVITE_LAYERS,
  INVITE_PRIVACY,
  INVITE_TEAM,
} from "@/data/invite-trainer";

/** Section links on the home; absolute so they work from this nested route. */
const HOME_NAV = NAV_V3.map((item) => ({
  ...item,
  href: item.href.startsWith("#")
    ? `/TrainerTwin_home_v3${item.href}`
    : item.href,
}));

/**
 * Startup program / founding-trainer invite. Copy from trainertwin.com/invite,
 * chrome and section rhythm from /TrainerTwin_home_v3.
 */
export function InviteTrainerPage() {
  return (
    <>
      <SiteHeader
        nav={HOME_NAV}
        mobileMenu
        ctaLabel="Become a founding trainer"
      />
      <main id="top" className="invite-page">
        <Hero />
        <Layers />
        <Privacy />
        <Evolve />
        <Team />
        <Founding />
      </main>
      <PageFooter
        nav={HOME_NAV}
        layout="v3"
        cta={<EarlyAccessSteps />}
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

function Hero() {
  return (
    <section
      className="sec sec--line tt-night invite-hero"
      aria-labelledby="invite-h"
    >
      <div className="wrap">
        <div className="head invite-hero-head">
          <span className="eyebrow">{INVITE_HERO.eyebrow}</span>
          <h1 id="invite-h">{INVITE_HERO.title}</h1>
          <p>{INVITE_HERO.lead}</p>
        </div>
        <p className="invite-lead">{INVITE_HERO.experiencesIntro}</p>
        <ul className="can invite-can">
          {INVITE_HERO.experiences.map((item) => (
            <li key={item}>
              <Icon name="check" />
              {item}
            </li>
          ))}
        </ul>
        <CtaLink href="#early-access" className="hero-v3-cta" size="md">
          Become a founding trainer
        </CtaLink>
      </div>
    </section>
  );
}

function Layers() {
  return (
    <section className="sec sec--line" aria-labelledby="layers-h">
      <div className="wrap">
        <div className="head">
          <span className="eyebrow">{INVITE_LAYERS.eyebrow}</span>
          <h2 id="layers-h">{INVITE_LAYERS.title}</h2>
          <p>{INVITE_LAYERS.lead}</p>
        </div>
        <div className="invite-layers">
          {INVITE_LAYERS.items.map((item, i) => (
            <Card key={item.title} className="invite-layer-card">
              <CardBody>
                <span className="invite-layer-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <CardTitle>{item.title}</CardTitle>
                <p>{item.body}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Privacy() {
  return (
    <section className="sec sec--sunken sec--line" aria-labelledby="privacy-h">
      <div className="wrap">
        <div className="head">
          <span className="eyebrow">{INVITE_PRIVACY.eyebrow}</span>
          <h2 id="privacy-h">{INVITE_PRIVACY.title}</h2>
          <p>{INVITE_PRIVACY.body}</p>
        </div>
      </div>
    </section>
  );
}

function Evolve() {
  return (
    <section className="sec sec--line" aria-labelledby="evolve-h">
      <div className="wrap">
        <div className="head">
          <span className="eyebrow">{INVITE_EVOLVE.eyebrow}</span>
          <h2 id="evolve-h">{INVITE_EVOLVE.title}</h2>
          <p>{INVITE_EVOLVE.body}</p>
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section
      className="sec sec--line tt-night"
      id="team"
      aria-labelledby="team-h"
    >
      <div className="wrap">
        <div className="head">
          <span className="eyebrow">{INVITE_TEAM.eyebrow}</span>
          <h2 id="team-h">{INVITE_TEAM.title}</h2>
          <p>{INVITE_TEAM.lead}</p>
        </div>
        <ul className="invite-team">
          {INVITE_TEAM.members.map((member) => (
            <li key={member.name}>
              <p className="invite-team-name">{member.name}</p>
              <p className="invite-team-role">{member.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Founding() {
  return (
    <section
      className="sec sec--sunken sec--line"
      id="early-access"
      aria-labelledby="founding-h"
    >
      <div className="wrap invite-founding">
        <div className="head">
          <span className="eyebrow">{INVITE_FOUNDING.eyebrow}</span>
          <h2 id="founding-h">{INVITE_FOUNDING.title}</h2>
          <p>{INVITE_FOUNDING.lead}</p>
        </div>
        <div className="invite-founding-grid">
          <div className="invite-founding-copy">
            <p>{INVITE_FOUNDING.equity}</p>
            <p>{INVITE_FOUNDING.domains}</p>
            <ul className="can">
              {INVITE_FOUNDING.points.map((item) => (
                <li key={item}>
                  <Icon name="check" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="invite-founding-close">{INVITE_FOUNDING.close}</p>
          </div>
          <InviteSubmitForm surface="light" />
        </div>
      </div>
    </section>
  );
}
