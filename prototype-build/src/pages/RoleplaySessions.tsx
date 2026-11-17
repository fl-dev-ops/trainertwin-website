import { useState } from "react";
import { StarRating } from "@components/StarRating";
import { Eyebrow } from "@components/Eyebrow";
import { Page } from "@components/Page";
import { PageHeader } from "@components/PageHeader";
import { ListTable, ListRow } from "@components/ListTable";
import { Avatar } from "@components/Avatar";
import { Badge } from "@components/Badge";
import { Icon } from "../Svg";
import { FilterSelect } from "../local/FilterSelect";
import { SessionsSummary } from "../local/SessionsSummary";
import { AVATAR_TONES } from "../local/bits";
import data from "../data/sessions.json";

const COLS = "minmax(0,1fr) minmax(0,1.2fr) 90px minmax(0,1.5fr) minmax(0,1.1fr) 24px";
const arrow = (
  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function RoleplaySessions() {
  const [vals, setVals] = useState<string[]>(data.filters.map((f) => f.value));
  return (
    <Page>
      <PageHeader
        title="Roleplay sessions"
        icon={<Icon name="sessions" />}
        tools={
          <div className="flex items-center gap-3">
            {data.filters.map((f, i) => (
              <FilterSelect key={f.label} width={148} label={f.label} options={[{ value: f.value, label: f.value }]} value={vals[i]} onChange={(v) => setVals((x) => x.map((y, j) => (j === i ? v : y)))} />
            ))}
          </div>
        }
      />
      <SessionsSummary label="Roleplay sessions summary" data={data} />
      <div className="mt-5 border-t border-line pt-5">
        <Eyebrow className="mb-3">{data.overline}</Eyebrow>
        <ListTable label={data.tableLabel}>
          <ListRow head columns={COLS}>
            {data.head.map((h) => (
              <span key={h} role="columnheader">{h}</span>
            ))}
            <span aria-hidden="true" />
          </ListRow>
          {data.rows.map((r, i) => (
            <ListRow key={i} columns={COLS} className="cursor-pointer text-[15px] leading-[23px] hover:bg-surface-sunken">
              <span role="cell" className="flex min-w-0 items-center gap-3">
                <Avatar alt={r.name} size="sm" tone={AVATAR_TONES[(r.tone - 1) % 5]} />
                <span className="flex min-w-0 flex-col leading-5">
                  <span className="font-title">{r.name}</span>
                  <span className="text-[13px] text-ink-tertiary">{r.sub}</span>
                </span>
              </span>
              <span role="cell">{r.scenario}</span>
              <span role="cell" className="whitespace-nowrap tabular-nums">{r.score} <span className="text-ink-secondary">{r.scoreOf}</span></span>
              <span role="cell">{r.weak} <span className="text-ink-secondary tabular-nums">{r.weakScore}</span></span>
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
      </div>
    </Page>
  );
}
