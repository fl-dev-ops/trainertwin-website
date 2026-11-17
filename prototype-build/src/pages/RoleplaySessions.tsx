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
import { AVATAR_TONES, LEARNER_OPTIONS } from "../local/bits";
import data from "../data/sessions.json";
import sessions from "../data/rp-sessions.json";

const COLS = "minmax(0,1fr) minmax(0,1.2fr) 90px minmax(0,1.5fr) minmax(0,1.1fr) 24px";
const COHORT_OF: Record<string, string> = { Aisha: "sep", James: "sep", Nora: "sep", Leo: "aug", Priya: "aug" };
const COHORTS = [["all", "All cohorts"], ["sep", "Sep 2026 batch"], ["aug", "Aug 2026 batch"]];
const RANGES = [["7", "Last 7 days"], ["30", "Last 30 days"], ["90", "Last 90 days"]];
const daysAgo = (when: string) => (/^Today/.test(when) ? 0 : /^Yesterday/.test(when) ? 1 : /^Monday/.test(when) ? 3 : /^Sunday/.test(when) ? 4 : 5);
const num = (s: string) => parseInt(s, 10) || 0;
const arrow = (
  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Each scraped session, with the numbers the filters and the summary work from.
const ALL = sessions.map((s, idx) => {
  const m = s.weak.match(/^(.*) (\d+\/\d+)$/);
  return { ...s, idx, pct: num(s.score), minutes: num(s.sub.split("·")[1] ?? ""), when: s.sub.split("·")[0].trim(), issues: s.report.issues.length, weakName: m ? m[1] : s.weak, weakScore: m ? m[2] : "" };
});
type Row = (typeof ALL)[number];
const isLow = (r: Row) => r.pct < 70 || (r.stars != null && r.stars <= 3);

export function RoleplaySessions({ onOpen }: { onOpen?: (index: number) => void }) {
  const [f, setF] = useState({ cohort: "all", learner: "all", role: "all", date: "30" });
  const [focus, setFocus] = useState<string | null>(null);
  const roles = useMemo(() => [...new Map(ALL.map((r) => [r.role, r.scenario])).entries()], []);
  const rows = useMemo(
    () => ALL.filter((r) => (f.role === "all" || r.role === f.role) && (f.cohort === "all" || COHORT_OF[r.name] === f.cohort) && (f.learner === "all" || r.name === f.learner) && daysAgo(r.when) <= Number(f.date)),
    [f],
  );
  const rated = rows.filter((r) => r.stars != null);
  const minutes = rows.reduce((a, r) => a + r.minutes, 0);
  const avg = rows.length ? Math.round(rows.reduce((a, r) => a + r.pct, 0) / rows.length) : 0;
  const issueTotal = rows.reduce((a, r) => a + r.issues, 0);
  const low = rows.filter(isLow).length;
  const helpful = rated.length ? (rated.reduce((a, r) => a + (r.stars ?? 0), 0) / rated.length).toFixed(1) : "–";
  const purchases = Math.floor(rows.length / 4);
  const shown = focus === "issues" ? rows.filter((r) => r.issues > 0) : focus === "low" ? rows.filter(isLow) : rows;
  const s: SessionsSummaryData = {
    ...data,
    tiles: [
      { ...data.tiles[0], value: String(rows.length) },
      { ...data.tiles[1], value: String(minutes) },
      { ...data.tiles[2], value: String(avg) },
      { ...data.tiles[3], value: String(issueTotal) },
    ],
    rating: { ...data.rating, value: helpful, count: `${rated.length} ${rated.length === 1 ? "session" : "sessions"} rated` },
    paid: { ...data.paid, pct: `${rows.length ? Math.round((purchases / rows.length) * 100) : 0}%`, amount: `AED ${purchases * 60}`, count: `${purchases} ${purchases === 1 ? "purchase" : "purchases"}`, title: `${purchases} of ${rows.length} ${rows.length === 1 ? "session" : "sessions"} were purchased` },
    attn: [
      ...(issueTotal ? [{ tone: "danger", id: "issues", label: `${issueTotal} reported ${issueTotal === 1 ? "problem" : "problems"}` }] : []),
      ...(low ? [{ tone: "caution", id: "low", label: `${low} ${low === 1 ? "session" : "sessions"} with a low scorecard or a client that didn’t feel real` }] : []),
    ],
  };
  const set = (k: keyof typeof f) => (v: string) => setF((x) => ({ ...x, [k]: v }));
  return (
    <Page>
      <PageHeader
        title="Roleplay sessions"
        icon={<Icon name="sessions" />}
        tools={
          <div className="flex items-center gap-3">
            <FilterSelect width={148} label="Filter by cohort" options={COHORTS.map(([v, l]) => ({ value: v, label: l }))} value={f.cohort} onChange={set("cohort")} />
            <FilterSelect width={148} label="Filter by learner" options={LEARNER_OPTIONS} value={f.learner} onChange={set("learner")} searchable searchPlaceholder="Search by name or email" emptyText="No one matches that search." />
            <FilterSelect width={148} label="Filter by roleplay" options={[{ value: "all", label: "All roleplays" }, ...roles.map(([v, l]) => ({ value: v, label: l }))]} value={f.role} onChange={set("role")} />
            <FilterSelect width={148} label="Filter by date" options={RANGES.map(([v, l]) => ({ value: v, label: l }))} value={f.date} onChange={set("date")} />
          </div>
        }
      />
      <SessionsSummary
        label="Roleplay sessions summary"
        data={s}
        pressedId={focus}
        onChip={(id) => setFocus((c) => (c === id ? null : id))}
        onShowAll={() => setFocus(null)}
        onTile={(l) => {
          if (l === "Issues reported") setFocus("issues");
          document.getElementById("rs-table")?.scrollIntoView({ behavior: "smooth" });
        }}
      />
      <div id="rs-table" className="mt-5 border-t border-line pt-5">
        <Eyebrow className="mb-3">{data.overline}</Eyebrow>
        {shown.length === 0 ? (
          <p className="m-0 py-6 text-center font-ui text-[14px] text-ink-secondary">No sessions match these filters.</p>
        ) : (
          <ListTable label={data.tableLabel}>
            <ListRow head columns={COLS}>
              {data.head.map((h) => (
                <span key={h} role="columnheader">{h}</span>
              ))}
              <span aria-hidden="true" />
            </ListRow>
            {shown.map((r) => (
              <ListRow key={r.id} columns={COLS} onClick={() => onOpen?.(r.idx)} className="cursor-pointer text-[15px] leading-[23px] hover:bg-surface-sunken">
                <span role="cell" className="flex min-w-0 items-center gap-3">
                  <Avatar alt={r.name} size="sm" tone={AVATAR_TONES[rows.indexOf(r) % 5]} />
                  <span className="flex min-w-0 flex-col leading-5">
                    <span className="font-title">{r.name}</span>
                    <span className="text-[13px] text-ink-tertiary">{r.sub}</span>
                  </span>
                </span>
                <span role="cell">{r.scenario}</span>
                <span role="cell" className="whitespace-nowrap tabular-nums">{r.pct} <span className="text-ink-secondary">/ 100</span></span>
                <span role="cell">{r.weakName} <span className="text-ink-secondary tabular-nums">{r.weakScore}</span></span>
                <span role="cell" className="flex min-w-0 flex-col items-start gap-[2px]">
                  {r.stars == null ? (
                    <span className="text-ink-secondary">No rating</span>
                  ) : (
                    <StarRating value={r.stars} />
                  )}
                  {r.stars != null ? <span className="text-[13px] leading-[18px] text-ink-secondary">{r.helpLabel}</span> : null}
                  {r.issue ? <Badge tone="caution" className="mt-[2px]">{r.issue}</Badge> : null}
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
