import { PageHeader, SectionHeading } from "@components/PageHeader";
import { ListTable, ListRow, UsageMeter } from "@components/ListTable";
import { Avatar } from "@components/Avatar";
import { Badge } from "@components/Badge";
import { Icon } from "../Svg";
import { AVATAR_TONES } from "../local/bits";
import data from "../data/twinusers.json";

const COLS = "minmax(0,1.2fr) minmax(0,1.4fr) 100px 100px 140px minmax(190px,1.3fr)";
const num = (s: string) => parseFloat(s);

export function TwinUsers() {
  return (
    <div className="mx-auto max-w-[1024px] px-16 pt-5 pb-8">
      <PageHeader title="Twin users" icon={<Icon name="learners" />} />
      <div className="mt-10 flex flex-col items-start gap-1">
        <SectionHeading className="mt-0!">{data.title}</SectionHeading>
        <p className="m-0 font-ui text-[14px] leading-5 text-ink-secondary">{data.sub}</p>
      </div>
      <ListTable label={data.title} className="mt-3">
        <ListRow head columns={COLS}>
          {data.head.map((h) => (
            <span key={h} role="columnheader">{h}</span>
          ))}
        </ListRow>
        {data.rows.map((r) => {
          const used = num(r.used);
          const left = parseFloat(r.used.split("·")[1]);
          return (
            <ListRow key={r.name} columns={COLS} className="cursor-pointer hover:bg-surface-sunken" >
              <span role="cell" className="flex min-w-0 items-center gap-3 font-label">
                <Avatar alt={r.name} size="sm" tone={AVATAR_TONES[(r.tone - 1) % 5]} />
                <span className="truncate">{r.name}</span>
              </span>
              <span role="cell" className="truncate text-ink-secondary">{r.email}</span>
              <span role="cell" className="tabular-nums">1 <span className="text-ink-secondary">agents</span></span>
              <span role="cell" className="tabular-nums">{num(r.credits)} <span className="text-ink-secondary">min</span></span>
              <span role="cell" className="tabular-nums">{r.until}</span>
              <span role="cell">
                <UsageMeter used={used} total={used + left} badge={r.low ? <Badge tone="caution">Low</Badge> : undefined} />
              </span>
            </ListRow>
          );
        })}
      </ListTable>
    </div>
  );
}
