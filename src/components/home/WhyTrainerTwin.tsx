import { LogoSymbol } from "@/components/Logo";
import { Container, SectionTitle } from "@/components/landing2/primitives";
import { GenericAIPanel, TwinPanel } from "@/components/landing2/VsPanels";
import "@/app/TrainerTwin_home_2/landing.css";

/**
 * "Generic AI vs TrainerTwin", with a field switcher under the subhead.
 *
 * The two windows are the built ones — `GenericAIPanel` and `TwinPanel`, the
 * same components /TrainerTwin_home renders. The shell around them is this
 * page's own rather than landing2's `NotGenericAI`, because the switcher has
 * to sit between that section's subhead and its panels, and editing the shared
 * component to make room would have put a switcher on /TrainerTwin_home_2 too.
 *
 * `.tt-landing` supplies the `--l-*` vocabulary and the `.l-stage` unit system
 * the panels are drawn in; neither exists outside that scope.
 */

/** Two lines under each label, drawn from what the windows actually show. */
const GENERIC_POINTS = [
  "Finds the solution and hands it straight over",
  "Answers every learner the same way",
];

const TWIN_POINTS = [
  "Shows the root cause so the learner can fix it",
  "Answers in your voice, the way you would teach it",
];

/**
 * The four fields, matching "Who it's for" above.
 *
 * Only Tech is live: the windows below are one written comparison — a
 * `reduce()` error and the question a tech trainer's twin asks about it — and
 * the other three have no script yet. So they are rendered as what they are,
 * marked `aria-disabled` and carrying no click, rather than as buttons that
 * would highlight without changing a thing under them.
 */
const FIELDS = ["Tech", "Sales", "Communication", "Fitness"];
const ACTIVE = "Tech";

export function WhyTrainerTwin() {
  return (
    <div className="tt-landing">
      <section id="how-it-differs" className="bg-white py-20 md:py-[104px]">
        <Container>
          <div className="flex flex-col items-center text-center">
            {/* This page's own kicker, not landing2's `Eyebrow`: the other
                three sections are opened by `.eyebrow` in home.css, and two
                kickers cut differently on one page is the thing the switch to
                a shared treatment was meant to stop. */}
            <span data-reveal className="eyebrow">
              Generic AI vs TrainerTwin
            </span>

            <SectionTitle data-reveal data-reveal-delay="80">
              Not another generic AI chatbot.
            </SectionTitle>

            <p
              data-reveal
              data-reveal-delay="140"
              className="font-ui mt-4 max-w-[672px] text-[16px] leading-[26px] text-[var(--l-ink-body-soft)]"
            >
              A generic AI knows information. Your Twin knows how you train.
            </p>

            <div
              data-reveal
              data-reveal-delay="180"
              className="vs-tabs"
              role="group"
              aria-label="Field"
            >
              {FIELDS.map((field) => (
                <span
                  key={field}
                  className={`vs-tab${field === ACTIVE ? " is-on" : ""}`}
                  aria-current={field === ACTIVE ? "true" : undefined}
                  aria-disabled={field === ACTIVE ? undefined : "true"}
                >
                  {field}
                </span>
              ))}
            </div>
          </div>

          {/* The badge is centred on the whole block rather than placed in a
              column, so it lands on the seam at two columns and between the two
              windows when they stack. */}
          <div
            data-reveal
            data-reveal-delay="200"
            className="relative mt-14 grid gap-12 md:mt-[80px] md:grid-cols-2 md:gap-[96px]"
          >
            <div className="flex h-full w-full flex-col md:ml-auto md:w-[90%]">
              <PanelLabel mark="star">Generic AI</PanelLabel>
              <Points items={GENERIC_POINTS} />
              <div className="mt-auto">
                <GenericAIPanel />
              </div>
            </div>

            <div className="flex h-full w-full flex-col md:mr-auto md:w-[90%]">
              <PanelLabel mark="twin">Trainer’s Twin</PanelLabel>
              <Points items={TWIN_POINTS} />
              <div className="mt-auto">
                <TwinPanel />
              </div>
            </div>

            <span
              aria-hidden="true"
              className="font-display absolute top-1/2 left-1/2 grid h-[44px] w-[44px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-[15px] text-white"
              style={{
                background: "linear-gradient(160deg,var(--tt-red-500),#e5251b)",
                boxShadow: "0 6px 18px rgba(229,37,27,0.32)",
              }}
            >
              VS
            </span>
          </div>
        </Container>
      </section>
    </div>
  );
}

function PanelLabel({
  mark,
  children,
}: {
  mark: "star" | "twin";
  children: React.ReactNode;
}) {
  return (
    <div className="mb-5 flex items-center gap-2.5">
      <span className="grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full bg-[var(--tt-neutral-900)]">
        {mark === "star" ? (
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="var(--tt-neutral-0)"
            className="h-[11px] w-[11px]"
          >
            <path d="M12 2l2.9 6.26 6.85.77-5.08 4.63 1.4 6.74L12 17.02l-6.07 3.38 1.4-6.74L2.25 9.03l6.85-.77L12 2Z" />
          </svg>
        ) : (
          <span className="block h-[11px] w-[11px] text-[var(--l-brand)]">
            <LogoSymbol size={11} className="h-full w-full" />
          </span>
        )}
      </span>
      <span className="font-ui text-[16px] text-[var(--l-ink-body)]">
        {children}
      </span>
    </div>
  );
}

/** The two ticked lines under a panel label. */
function Points({ items }: { items: string[] }) {
  return (
    <ul className="mb-6 flex flex-col gap-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span className="mt-[4px] grid h-[16px] w-[16px] shrink-0 place-items-center rounded-full bg-[var(--l-brand)]/12 text-[var(--l-brand)]">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-[9px] w-[9px]"
            >
              <path d="M5 12.5 10 17.5 19 7" />
            </svg>
          </span>
          <span className="font-ui text-[15px] leading-[23px] text-[var(--l-ink-body)]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
