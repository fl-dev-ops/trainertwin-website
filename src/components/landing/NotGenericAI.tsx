import { LogoSymbol } from "@/components/Logo";
import { Container, Eyebrow, SectionTitle } from "./primitives";
import { GenericAIPanel, TwinPanel } from "./VsPanels";

/**
 * Two lines under each label, drawn from what the windows below actually show:
 * the generic assistant hands over a corrected block, the Twin marks the line
 * and asks the question that leads to it.
 */
const GENERIC_POINTS = [
  "Finds the solution and hands it straight over",
  "Answers every learner the same way",
];

const TWIN_POINTS = [
  "Shows the root cause so the learner can fix it",
  "Answers in your voice, the way you would teach it",
];

/**
 * "Generic AI vs TrainerTwin". Figma: SHXsv4d0ROls7tuOqQBNLZ node 425:16126.
 *
 * The frame centres its heading over two windows of equal size — the same
 * question asked of a generic assistant and of a Twin — with a VS badge on the
 * seam between them.
 */
export function NotGenericAI() {
  return (
    <section id="how-it-differs" className="bg-white py-20 md:py-[104px]">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Eyebrow data-reveal className="text-[#9aa0aa]">
            Generic AI vs TrainerTwin
          </Eyebrow>

          <SectionTitle data-reveal data-reveal-delay="80" className="mt-5">
            Not another generic AI chatbot.
          </SectionTitle>

          <p
            data-reveal
            data-reveal-delay="140"
            className="font-ui mt-4 max-w-[672px] text-[17px] leading-[28px] text-[var(--l-ink-body-soft)] md:text-[18px]"
          >
            A generic AI knows information. Your Twin knows how you train.
          </p>
        </div>

        {/* The badge is centred on the whole block rather than placed in a
            column, so it lands on the seam at two columns and between the two
            windows when they stack. */}
        <div
          data-reveal
          data-reveal-delay="200"
          className="relative mt-14 grid gap-12 md:mt-[86px] md:grid-cols-2 md:gap-[100px]"
        >
          {/* The three-quarter width sits on the column rather than on the
              window, so the label, the points and the frame all share one left
              edge. Full width below md, where the column is narrow already.

              Each column pulls its block toward the middle — the left one to
              its right edge, the right one to its left — so the quarter the
              frames gave up falls in the outer margins instead of piling up
              around the badge between them.

              The frame is pushed to the foot of the column: the two windows
              are the same height, so aligning their bottoms aligns their tops
              even if one column's copy runs to an extra line. */}
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
              background: "linear-gradient(160deg,#f0685c,#e5251b)",
              boxShadow: "0 6px 18px rgba(229,37,27,0.32)",
            }}
          >
            VS
          </span>
        </div>
      </Container>
    </section>
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
      <span className="grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full bg-[#1b1d21]">
        {mark === "star" ? (
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="#ffffff"
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
          <span className="mt-[3px] grid h-[16px] w-[16px] shrink-0 place-items-center rounded-full bg-[var(--l-brand)]/12 text-[var(--l-brand)]">
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
