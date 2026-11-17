import { useMemo, useState } from "react";
import { StarRating } from "@components/StarRating";
import { Eyebrow } from "@components/Eyebrow";
import { Page } from "@components/Page";
import { PageHeader } from "@components/PageHeader";
import { ListTable, ListRow } from "@components/ListTable";
import { Avatar } from "@components/Avatar";
import { Badge } from "@components/Badge";
import { Icon } from "../Svg";
import { FilterSelect } from "@components/FilterSelect";
import { SessionsSummary, type SessionsSummaryData } from "../local/SessionsSummary";
import { AVATAR_TONES } from "../local/bits";
import data from "../data/calibrations.json";

const COLS = "minmax(0,1.3fr) minmax(0,1.2fr) 84px 96px minmax(150px,1fr) 28px";
const COHORT_OF: Record<string, string> = { Aisha: "sep", James: "sep", Nora: "sep", Leo: "aug", Priya: "aug" };
const COHORTS = [["all", "All cohorts"], ["sep", "Sep 2026 batch"], ["aug", "Aug 2026 batch"]];
const LEARNERS = ["all", "Aisha", "James", "Nora", "Leo", "Priya"];
const RANGES = [["7", "Last 7 days"], ["30", "Last 30 days"], ["90", "Last 90 days"]];
const daysAgo = (when: string) => (/^Today/.test(when) ? 0 : /^Yesterday/.test(when) ? 1 : /^Monday/.test(when) ? 3 : /^Sunday/.test(when) ? 4 : 5);
const arrow = (
  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
type Row = (typeof data.rows)[number] & { idx: number };

export function TwinSessions({ onOpen, onAsk }: { onOpen?: (index: number) => void; onAsk?: () => void }) {
  const [f, setF] = useState({ cohort: "all", learner: "all", agent: "all", date: "30" });
  const [focus, setFocus] = useState<string | null>(null);
  const agents = useMemo(() => [...new Set(data.rows.map((r) => r.agent))], []);
  const rows = useMemo<Row[]>(
    () => data.rows.map((r, idx) => ({ ...r, idx })).filter((r) =>
      (f.cohort === "all" || COHORT_OF[r.name] === f.cohort) && (f.learner === "all" || r.name === f.learner) && (f.agent === "all" || r.agent === f.agent) && daysAgo(r.when) <= Number(f.date)),
    [f],
  );
  const num = (s: string) => parseInt(s, 10) || 0;
  const rated = rows.filter((r) => r.stars != null);
  const minutes = rows.reduce((a, r) => a + num(r.minutes), 0);
  const questions = rows.reduce((a, r) => a + num(r.questions), 0);
  const issues = rows.filter((r) => r.issue).length;
  const low = rows.filter((r) => r.stars != null && r.stars <= 3).length;
  const ext = Math.floor(rows.length / 4);
  const helpful = rated.length ? (rated.reduce((a, r) => a + (r.stars ?? 0), 0) / rated.length).toFixed(1) : "–";
  const shown = focus === "issues" ? rows.filter((r) => r.issue) : focus === "low" ? rows.filter((r) => r.stars != null && r.stars <= 3) : rows;
  const s: SessionsSummaryData = {
    ...data,
    tiles: [
      { ...data.tiles[0], value: String(rows.length) },
      { ...data.tiles[1], value: String(minutes) },
      { ...data.tiles[2], value: String(questions) },
      { ...data.tiles[3], value: String(issues) },
    ],
    rating: { ...data.rating, value: helpful, count: `${rated.length} sessions rated` },
    paid: { ...data.paid, pct: `${rows.length ? Math.round((ext / rows.length) * 100) : 0}%`, amount: `AED ${ext * 90}`, count: `${ext} ${ext === 1 ? "extension" : "extensions"}`, title: `${ext} of ${rows.length} ${rows.length === 1 ? "session" : "sessions"} paid for an extension` },
    attn: [
      ...(issues ? [{ tone: "danger", id: "issues", label: `${issues} reported ${issues === 1 ? "problem" : "problems"}` }] : []),
      ...(low ? [{ tone: "caution", id: "low", label: `${low} rated 3★ or lower` }] : []),
      { tone: "info", id: "ask", label: "2 questions sent to you" },
    ],
  };
  const set = (k: keyof typeof f) => (v: string) => setF((x) => ({ ...x, [k]: v }));
  return (
    <Page>
      <PageHeader
        title="Twin sessions"
        icon={<Icon name="messages" />}
        tools={
          <div className="flex items-center gap-3">
            <FilterSelect width={148} label="Filter by cohort" options={COHORTS.map(([v, l]) => ({ value: v, label: l }))} value={f.cohort} onChange={set("cohort")} />
            <FilterSelect width={148} label="Filter by learner" options={LEARNERS.map((v) => ({ value: v, label: v === "all" ? "All learners" : v }))} value={f.learner} onChange={set("learner")} />
            <FilterSelect width={148} label="Filter by agent" options={[{ value: "all", label: "All twin agents" }, ...agents.map((a) => ({ value: a, label: a }))]} value={f.agent} onChange={set("agent")} />
            <FilterSelect width={148} label="Filter by date" options={RANGES.map(([v, l]) => ({ value: v, label: l }))} value={f.date} onChange={set("date")} />
          </div>
        }
      />
      <SessionsSummary
        label="Twin sessions summary"
        data={s}
        pressedId={focus}
        onChip={(id) => (id === "ask" ? onAsk?.() : setFocus((c) => (c === id ? null : id)))}
        onShowAll={() => setFocus(null)}
        onTile={(l) => {
          if (l === "Questions") return onAsk?.();
          if (l === "Issues reported") setFocus("issues");
          document.getElementById("ts-table")?.scrollIntoView({ behavior: "smooth" });
        }}
      />
      <div id="ts-table" className="mt-5 border-t border-line pt-5">
        <Eyebrow className="mb-3">{data.overline}</Eyebrow>
        {rows.length === 0 ? <p className="m-0 py-6 text-center font-ui text-[14px] text-ink-secondary">No sessions match these filters.</p> : (
        <ListTable label="Twin sessions">
          <ListRow head columns={COLS}>
            {data.head.map((h, i) => (
              <span key={i} role="columnheader" aria-hidden={h ? undefined : true}>{h}</span>
            ))}
          </ListRow>
          {shown.map((r) => (
            <ListRow key={r.idx} columns={COLS} onClick={() => onOpen?.(r.idx)} className="cursor-pointer text-[15px] leading-[23px] hover:bg-surface-sunken">
              <span role="cell" className="flex min-w-0 items-center gap-3">
                <Avatar alt={r.name} initials={r.initial} size="sm" tone={AVATAR_TONES[(r.tone - 1) % 5]} />
                <span className="flex min-w-0 flex-col leading-5">
                  <span className="font-title">{r.name}</span>
                  <span className="text-[13px] text-ink-tertiary">{r.when}</span>
                </span>
              </span>
              <span role="cell">{r.agent}</span>
              <span role="cell" className="tabular-nums">{r.minutes}</span>
              <span role="cell" className="tabular-nums">{r.questions}</span>
              <span role="cell" className="flex min-w-0 flex-col items-start gap-[2px]">
                {r.stars == null ? (
                  <span className="text-ink-secondary">No rating</span>
                ) : (
                  <>
                    <StarRating value={r.stars} />
                    <span className="text-[13px] leading-[18px] text-ink-secondary">{r.helpLabel}</span>
                    {r.issue ? <Badge tone="caution" className="mt-[2px]">{r.issue}</Badge> : null}
                  </>
                )}
              </span>
              <span role="cell" aria-hidden="true" className="justify-self-end text-ink-secondary">{arrow}</span>
            </ListRow>
          ))}
        </ListTable>
        )}
      </div>
    </Page>
  );
}
