import { Button } from "@components/Button";
import { html } from "../Svg";
import { BackBar } from "@components/PageHeader";
import { Card } from "@components/Card";
import { SectionHeading } from "@components/PageHeader";
import { Overline } from "../local/bits";
import detail from "../data/agent-detail.json";

const STATS: [string, string, string][] = [
  ["Total sessions", "4", "calibrations"],
  ["Feels like me", "9", "responses"],
  ["Feels off", "3", "responses"],
  ["Overall accuracy", "75%", "Rated “Feels like me”"],
];
const card = "shadow-[0_2px_4px_rgb(30_28_25/0.035),0_8px_20px_rgb(30_28_25/0.055)]";

/** v3 "calibration overview" (Calibrate in the agent menu): the twin, four stat cards, past calibrations, "Calibrate now". */
export function CalibrateOverview({ title, onBack, onNow }: { title: string; onBack: () => void; onNow: () => void }) {
  return (
    <div className="flex min-h-full flex-col">
      <BackBar label="My Twins" onBack={onBack} />
      <div className="mx-auto w-full max-w-[720px] flex-1 px-8 pt-6 pb-8">
        <div className="flex flex-col items-center text-center">
          <span className="block h-16 w-16 overflow-hidden rounded-lg bg-fill-soft shadow-e2">
            <video className="h-full w-full object-cover" style={{ objectPosition: "center 18%" }} src="../media/twin-listening.mp4" autoPlay muted loop playsInline preload="auto" aria-hidden="true" />
          </span>
          <h1 className="mt-3 mb-0 font-ui text-[18px] leading-6 font-title tracking-[-0.015em] text-ink">{title}</h1>
        </div>
        <div className="mt-3 grid grid-cols-4 gap-3">
          {STATS.map(([label, value, note]) => (
            <Card key={label} className={`px-4 py-5 ${card}`}>
              <Overline className="mb-0 tracking-[0.06em] whitespace-nowrap">{label}</Overline>
              <p className="mt-2 mb-0 font-ui text-[28px] leading-[34px] font-title tracking-[-0.015em] tabular-nums text-ink">{value}</p>
              <p className="mt-1 mb-0 font-ui text-[13px] leading-[18px] text-ink-secondary">{note}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex items-center justify-between gap-3">
          <SectionHeading className="mt-0!">Calibrations</SectionHeading>
          <p className="m-0 font-ui text-[14px] leading-5 text-ink-secondary">Conversations you’ve had with this twin</p>
        </div>
        <Card className={`mt-4 overflow-hidden p-0 ${card}`}>
          {detail.cals.map((r, i) => (
            <button key={r.title} type="button" className={`flex w-full cursor-pointer items-center gap-4 px-5 py-[14px] text-left font-ui hover:bg-surface-sunken ${i ? "border-t border-line" : ""}`}>
              <span className="flex min-w-0 flex-1 flex-col gap-[2px]">
                <span className="truncate text-[14px] leading-5 font-label text-ink">{r.title}</span>
                <span className="text-[13px] leading-[18px] text-ink-tertiary">{r.meta}</span>
              </span>
              <span aria-hidden="true" className="grid h-7 w-7 flex-none place-items-center text-ink-secondary [&>span>svg]:h-4 [&>span>svg]:w-4">{html(r.svg)}</span>
            </button>
          ))}
        </Card>
      </div>
      <div className="pointer-events-none sticky bottom-0 z-[2] flex justify-center px-6 pt-8 pb-6" style={{ background: "linear-gradient(to bottom, transparent, var(--tt-canvas) 45%)" }}>
        <Button onClick={onNow} className="pointer-events-auto [&_svg]:h-4 [&_svg]:w-4">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
          Calibrate now
        </Button>
      </div>
    </div>
  );
}
