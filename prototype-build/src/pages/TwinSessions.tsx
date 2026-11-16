import { useState } from "react";
import { PageHeader } from "@components/PageHeader";
import { ListTable, ListRow } from "@components/ListTable";
import { Avatar } from "@components/Avatar";
import { Badge } from "@components/Badge";
import { Icon } from "../Svg";
import { FilterSelect } from "../local/FilterSelect";
import { SessionsSummary } from "../local/SessionsSummary";
import { Overline, Stars, AVATAR_TONES } from "../local/bits";
import data from "../data/calibrations.json";

const COLS = "minmax(0,1.3fr) minmax(0,1.2fr) 84px 96px minmax(150px,1fr) 28px";
const FILTERS = [
  ["All cohorts", ["All cohorts"]],
  ["All learners", ["All learners", "Aisha", "James", "Nora", "Leo", "Priya"]],
  ["All twin agents", ["All twin agents"]],
  ["Last 30 days", ["Last 30 days"]],
] as const;
const FILTER_LABELS = ["Filter by cohort", "Filter by learner", "Filter by agent", "Filter by date"];
const arrow = (
  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function TwinSessions() {
  const [filters, setFilters] = useState<string[]>(FILTERS.map((f) => f[0]));
  return (
    <div className="mx-auto max-w-[1024px] px-16 pt-5 pb-8">
      <PageHeader
        title="Twin sessions"
        icon={<Icon name="messages" />}
        tools={
          <div className="flex items-center gap-3">
            {FILTERS.map(([first, opts], i) => (
              <FilterSelect
                width={148}
                key={first}
                label={FILTER_LABELS[i]}
                options={opts.map((o) => ({ value: o, label: o }))}
                value={filters[i]}
                onChange={(v) => setFilters((f) => f.map((x, j) => (j === i ? v : x)))}
              />
            ))}
          </div>
        }
      />
      <SessionsSummary label="Twin sessions summary" data={data} />
      <div className="mt-5 border-t border-line pt-5">
        <Overline className="mb-3">{data.overline}</Overline>
        <ListTable label="Twin sessions">
          <ListRow head columns={COLS}>
            {data.head.map((h, i) => (
              <span key={i} role="columnheader" aria-hidden={h ? undefined : true}>{h}</span>
            ))}
          </ListRow>
          {data.rows.map((r, i) => (
            <ListRow key={i} columns={COLS} className="cursor-pointer text-[15px] leading-[23px] hover:bg-surface-sunken">
              <span role="cell" className="flex min-w-0 items-center gap-3">
                <Avatar alt={r.name} size="sm" tone={AVATAR_TONES[(r.tone - 1) % 5]} />
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
                    <Stars n={r.stars} tone={r.starTone} />
                    <span className="text-[13px] leading-[18px] text-ink-secondary">{r.helpLabel}</span>
                    {r.issue ? <Badge tone="caution" className="mt-[2px]">{r.issue}</Badge> : null}
                  </>
                )}
              </span>
              <span role="cell" aria-hidden="true" className="justify-self-end text-ink-secondary">{arrow}</span>
            </ListRow>
          ))}
        </ListTable>
      </div>
    </div>
  );
}
