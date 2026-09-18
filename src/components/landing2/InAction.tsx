import { Container, Eyebrow, SectionTitle } from "./primitives";
import { DemoVideo } from "./DemoVideo";

export function InAction() {
  return (
    <section className="l-wash border-y border-[var(--l-line-warm)] py-20 md:py-[96px]">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Eyebrow data-reveal className="text-[var(--l-eyebrow)]">
            Invite for Early Access
          </Eyebrow>
          <SectionTitle
            data-reveal
            data-reveal-delay="80"
            className="mt-4 text-[var(--l-ink)]"
          >
            Become a Founding Trainer
          </SectionTitle>
          <p
            data-reveal
            data-reveal-delay="140"
            /* Held to a readable measure: the container is 1200 wide, and a
               centred paragraph of this length runs to about 25 words a line
               across it. */
            className="font-ui mt-4 max-w-[760px] text-[16px] leading-[26px] text-[var(--l-ink-body-soft)] "
          >
            We want to explore this possibility with early-adopter trainers who
            believe in the vision and want to help shape it. Eligible founding
            trainers receive equity participation, subject to mutually agreed
            terms.
          </p>
        </div>

        <div className="mt-12 md:mt-[72px]">
          <DemoVideo />
        </div>
      </Container>
    </section>
  );
}
