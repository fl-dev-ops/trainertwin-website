import { PageHeader, SectionHeading } from "@components/PageHeader";
import { Page } from "@components/Page";
import { ListTable, ListRow, UsageMeter } from "@components/ListTable";
import { Avatar } from "@components/Avatar";
import { Badge } from "@components/Badge";
import { Icon } from "../Svg";
import { AVATAR_TONES } from "../local/bits";
import { useLearnerExtra } from "../local/learnerCredits";
import data from "../data/twinusers.json";

const COLS = "minmax(0,1.2fr) minmax(0,1.4fr) 100px 100px 140px minmax(190px,1.3fr)";
const num = (s: string) => parseFloat(s);

export function TwinUsers({ onOpen }: { onOpen?: (name: string) => void }) {
  const extra = useLearnerExtra();
  return (
    <Page>
      <PageHeader title="Twin users" icon={<Icon name="learners" />} />
      <div className="mt-10 flex flex-col items-start gap-1">
        <SectionHeading className="mt-0!">{data.title}</SectionHeading>
        <p className="m-0 font-ui text-[14px] leading-5 text-ink-secondary">{data.sub}</p>
      </div>
      <ListTable label={data.title} className="mt-4">
        <ListRow head columns={COLS}>
          {data.head.map((h) => (
            <span key={h} role="columnheader">{h}</span>
          ))}
        </ListRow>
        {data.rows.map((r) => {
          const used = parseFloat(r.used);
          const given = num(r.credits) + (extra[r.name] ?? 0);
          const left = Math.round((given - used) * 10) / 10;
          return (
            <ListRow key={r.name} columns={COLS} onClick={() => onOpen?.(r.name)} className="cursor-pointer hover:bg-surface-sunken">
              <span role="cell" className="flex min-w-0 items-center gap-3 font-label">
                <Avatar alt={r.name} size="sm" tone={AVATAR_TONES[(r.tone - 1) % 5]} />
                <span className="truncate">{r.name}</span>
              </span>
              <span role="cell" className="truncate text-ink-secondary">{r.email}</span>
              <span role="cell" className="tabular-nums">1 <span className="text-ink-secondary">agents</span></span>
              <span role="cell" className="tabular-nums">{given} <span className="text-ink-secondary">min</span></span>
              <span role="cell" className="tabular-nums">{r.until}</span>
              <span role="cell">
                <UsageMeter used={used} total={given} badge={left === 0 ? <Badge tone="caution">Low</Badge> : undefined} />
              </span>
            </ListRow>
          );
        })}
      </ListTable>
    </Page>
  );
}
