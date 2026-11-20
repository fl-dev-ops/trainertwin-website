import { useState } from "react";
import { Page } from "@components/Page";
import { Card } from "@components/Card";
import { Button } from "@components/Button";
import { Avatar } from "@components/Avatar";
import { SegmentedControl } from "@components/SegmentedControl";
import { ListTable, ListRow } from "@components/ListTable";
import { useToast } from "@components/Toast";
import { ArrowLeftIcon } from "@components/UiIcons";
import { PlusIcon } from "@components/icons";
import { html } from "../Svg";
import { AVATAR_TONES } from "../local/bits";
import { useLearnerExtra, addCredits } from "../local/learnerCredits";
import all from "../data/learners.json";

const SESSION_COLS = "minmax(0,1.1fr) minmax(0,1.7fr) 90px 110px 24px";
const CREDIT_COLS = "minmax(0,1fr) 140px 140px 120px";
const parseGiven = (used: string) => parseFloat(used.split("of")[1]);

/** v3 `pageLearnerDetail`: one learner's credits (with Add credits), their sessions and their credit history. */
export function LearnerPage({ name, onBack }: { name: string; onBack: () => void }) {
  const [tab, setTab] = useState("sessions");
  const extra = useLearnerExtra()[name] ?? 0;
  const { toast } = useToast();
  const L = all.find((l) => l.name === name);
  if (!L) return null;
  const base = parseGiven(L.used);
  const used = parseFloat(L.used);
  const given = base + extra;
  const left = Math.round((given - used) * 10) / 10;
  const pct = Math.min(100, Math.round((used / given) * 100));
  const tone = AVATAR_TONES[(L.tone - 1) % 5];
  return (
    <Page>
      {/* NOT IN STORYBOOK YET: BackLink, the small "← Back" text button (V3 `.acc-back`) used above account-style pages. */}
      <button type="button" onClick={onBack} className="mb-2 inline-flex cursor-pointer items-center gap-2 self-start rounded-sm border-0 bg-transparent py-1 pr-2 pl-0 font-ui text-[14px] leading-5 font-label text-ink-secondary hover:text-ink [&_svg]:h-4 [&_svg]:w-4">
        <ArrowLeftIcon />
        Back
      </button>
      <div className="mt-4 mb-8 flex items-center justify-between gap-5">
        <div className="flex min-w-0 flex-1 items-center gap-4">
          <Avatar alt={L.name} initials={L.name[0].toUpperCase()} tone={tone} className="h-20! w-20! text-[32px]!" />
          <div>
            <h1 className="m-0 font-ui text-[20px] leading-7 font-title text-ink">{L.name}</h1>
            <p className="m-0 mt-[2px] font-ui text-[16px] leading-[22px] text-ink-secondary">{L.email}</p>
          </div>
        </div>
        <Card className="ml-auto flex min-w-0 flex-[0_1_460px] flex-row items-center gap-5 px-5 py-4">
          <div className="min-w-0 flex-1 font-ui">
            <p className="m-0 text-[12px] tracking-[0.06em] text-ink-secondary uppercase">Credits left</p>
            <p className="mt-1 mb-2 text-[18px] text-ink-secondary">
              <span className="text-[28px] leading-8 font-title text-ink">{left}</span> <span>min</span>
            </p>
            <span aria-hidden="true" className="block h-[6px] overflow-hidden rounded-full bg-fill-soft">
              <span className={`block h-full rounded-full ${left <= 0 ? "bg-caution" : "bg-ink"}`} style={{ width: `${pct}%` }} />
            </span>
            <p className="m-0 mt-2 text-[14px] text-ink-secondary">{used} of {given} min used</p>
          </div>
          <Button
            onClick={() => {
              addCredits(name);
              toast(`30 min added to ${name}.`, { type: "success" });
            }}
            className="[&_svg]:h-4 [&_svg]:w-4"
          >
            <PlusIcon />
            Add credits
          </Button>
        </Card>
      </div>
      <SegmentedControl aria-label="Learner" className="mb-4" value={tab} onChange={setTab} options={[{ value: "sessions", label: "Sessions" }, { value: "credits", label: "Credits" }]} />
      {tab === "sessions" ? (
        <ListTable label="Sessions" className="shadow-e1">
          <ListRow head columns={SESSION_COLS} className="font-normal!">
            {["Learner", "Topics", "Duration", "Helpfulness"].map((h) => (
              <span key={h} role="columnheader">{h}</span>
            ))}
            <span aria-hidden="true" />
          </ListRow>
          {L.sessions.map((s, i) => (
            <ListRow key={i} columns={SESSION_COLS} onClick={() => toast("Opens the session report.", { type: "info" })} className="cursor-pointer hover:bg-surface-sunken">
              <span role="cell" className="flex min-w-0 items-center gap-3">
                <Avatar alt={L.name} initials={L.name[0].toUpperCase()} tone={tone} className="h-10! w-10! text-[16px]!" />
                <span className="flex min-w-0 flex-col gap-[2px]">
                  <span className="truncate text-[15px] leading-5 font-title">{L.name}</span>
                  <span className="truncate text-[13px] leading-[18px] text-ink-secondary">{s.when}</span>
                </span>
              </span>
              <span role="cell" className="flex flex-wrap gap-2">
                {s.chips.map((c) => (
                  <span key={c} className="rounded-full border border-line px-[10px] py-[2px] text-[13px] leading-5 whitespace-nowrap">{c}</span>
                ))}
              </span>
              <span role="cell" className="tabular-nums">{s.mins}</span>
              <span role="cell" className="text-ink-secondary">–</span>
              <span role="cell" aria-hidden="true" className="grid place-items-center text-ink-secondary [&_svg]:h-[14px] [&_svg]:w-[14px]">{html(L.arrow)}</span>
            </ListRow>
          ))}
        </ListTable>
      ) : (
        <ListTable label="Credits" className="shadow-e1">
          <ListRow head columns={CREDIT_COLS} className="font-normal!">
            {["Note", "Date", "Until", "Credits"].map((h, i) => (
              <span key={h} role="columnheader" className={i === 3 ? "text-right" : undefined}>{h}</span>
            ))}
          </ListRow>
          {[["Given when they joined", "11 Nov 2026", base], ...(extra ? [["Added by you", "Today", extra]] : [])].map(([note, date, n]) => (
            <ListRow key={String(note)} columns={CREDIT_COLS}>
              <span role="cell">{note}</span>
              <span role="cell" className="text-ink-secondary">{date}</span>
              <span role="cell" className="text-ink-secondary">12 Dec 2026</span>
              <span role="cell" className="text-right tabular-nums"><span className="font-title">+{n}</span> min</span>
            </ListRow>
          ))}
        </ListTable>
      )}
    </Page>
  );
}
