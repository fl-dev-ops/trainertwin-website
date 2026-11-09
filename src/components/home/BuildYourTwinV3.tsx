import type { ReactNode } from "react";
import { Card, CardBody, CardTitle } from "@/components/Card";
import { Icon } from "./icons";
import { TwinTestIllustration } from "./TwinTestIllustration";

const DNA_TRAITS = [
  { label: "Explains with examples", width: "100%" },
  { label: "Asks before answering", width: "100%" },
  { label: "Uses analogies", width: "85%" },
  { label: "Checks understanding", width: "88%" },
  { label: "Ends with application", width: "74%" },
] as const;

/** Three fit the panel above the fade; the rest read as bars in the plane behind. */
const DNA_SHOWN = 3;
const DNA_HIGHLIGHT = "Asks before answering";

/**
 * v3-only: three steps to build a twin (upload → DNA → test).
 * The live home still uses `BuildYourTwin` (knowledge + persona + DNA kit).
 */
export function BuildYourTwinV3() {
  return (
    <section
      id="training-dna"
      className="sec sec--sunken steps"
      aria-labelledby="build-h"
      data-reveal
    >
      <div className="wrap">
        <div className="head">
          <span className="eyebrow">See your training DNA in action</span>
          <h2 id="build-h">Build your Twin in 3 simple steps</h2>
        </div>

        <div className="steps-row">
          <StepCard
            title="Upload 3 teaching videos"
            copy="Share a few of your real sessions."
            stage={<UploadStage />}
          />
          <Arrow />
          <StepCard
            title="We extract your training DNA"
            copy="Our AI studies your videos to understand how you teach."
            stage={<DnaStage />}
          />
          <Arrow />
          <StepCard
            title="Test & see your Twin in action"
            copy="Chat, try a few examples, and experience your AI twin."
            frame={<TwinTestIllustration />}
          />
        </div>
      </div>
    </section>
  );
}

function StepCard({
  title,
  copy,
  stage,
  frame,
  orbit,
  chip,
}: {
  title: string;
  copy: string;
  stage?: ReactNode;
  /** Full stage inner (planes + orbit). Used by the shared twin demo. */
  frame?: ReactNode;
  /** The twin's avatar, orbited, in the corner of its own demo. */
  orbit?: boolean;
  chip?: ReactNode;
}) {
  return (
    <Card className="steps-card">
      <div className="steps-stage" aria-hidden="true">
        {frame ?? (
          <>
            <div className="steps-planes">{stage}</div>
            {orbit ? (
              <span className="st-orb">
                <span className="st-orb-path" />
                <span className="st-orb-spin">
                  <span className="st-orb-dot" />
                </span>
                <span className="st-orb-face">
                  <Icon name="face" />
                </span>
              </span>
            ) : null}
          </>
        )}
      </div>
      <CardBody className="steps-body">
        <CardTitle>{title}</CardTitle>
        <p className="steps-copy">{copy}</p>
        {chip}
      </CardBody>
    </Card>
  );
}

function Arrow() {
  return (
    <span className="steps-arrow" aria-hidden="true">
      <Icon name="arrow" />
    </span>
  );
}

/** Two sessions in, the third still going up — the only orange in this stage. */
function UploadStage() {
  return (
    <div className="st-pane st-pane--front st-pane--solo">
      <div className="st-bar">
        <Icon name="cloud" />
        Upload sessions
      </div>
      <div className="st-body">
        <span className="st-row">
          <Icon name="video" />
          <span className="st-row-name">07.mp4</span>
          <span className="st-row-meta">18:42</span>
          <Icon name="check" className="st-done" />
        </span>
        <span className="st-row">
          <Icon name="video" />
          <span className="st-row-name">08.mp4</span>
          <span className="st-row-meta">64%</span>
        </span>
      </div>
    </div>
  );
}

/** The traits that fit, read out; the rest as bars behind, with the helix. */
function DnaStage() {
  return (
    <div className="st-pane st-pane--front st-pane--solo">
      <div className="st-bar">
        <Icon name="info" />
        Teaching DNA
      </div>
      <div className="st-body">
        {DNA_TRAITS.slice(0, DNA_SHOWN).map((t) => (
          <span
            key={t.label}
            className={
              t.label === DNA_HIGHLIGHT ? "st-trait st-trait--on" : "st-trait"
            }
          >
            <span className="st-trait-top">
              {t.label}
              <span className="st-trait-pct">{t.width}</span>
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
