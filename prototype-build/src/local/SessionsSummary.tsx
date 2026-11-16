import { NumberTile } from "@components/NumberTile";
import { SummaryCard } from "@components/SummaryCard";
import { ProgressRing } from "@components/Progress";
import { AttentionChip } from "@components/AttentionChip";

/**
 * NOT IN STORYBOOK YET. The summary block shared by Twin sessions and Roleplay sessions (the prototype's
 * `sessionsSummary` + `.ts-attn`): four number tiles on the left, the rating and "paid by learners" cards on the
 * right, then a "Needs a look" row of attention chips. Composed from NumberTile, SummaryCard, ProgressRing and
 * AttentionChip; the arrangement is what is missing as a component.
 */
export interface SessionsSummaryData {
  tiles: { label: string; value: string; muted?: string; go: boolean; svg: string }[];
  rating: { value: string; count: string; svg: string; icon: string };
  paid: { pct: string; amount: string; count: string; title: string; icon: string };
  attnIcon: string;
  attn: { tone: string; label: string }[];
}

const html = (svg: string) => <span aria-hidden="true" className="contents" dangerouslySetInnerHTML={{ __html: svg }} />;

export function SessionsSummary({ label, data }: { label: string; data: SessionsSummaryData }) {
  return (
    <>
      <section aria-label={label} className="mt-6 grid grid-cols-2 items-stretch gap-4">
        <div className="grid grid-cols-2 gap-4">
          {data.tiles.map((t) => (
            <NumberTile
              key={t.label}
              label={t.label}
              icon={html(t.svg)}
              value={
                <>
                  {t.value}
                  {t.muted ? <span className="ml-1 text-[18px] font-medium text-ink-secondary">{t.muted}</span> : null}
                </>
              }
              onGo={t.go ? () => {} : undefined}
              goLabel={`${t.label}: see the details`}
            />
          ))}
        </div>
        <div className="flex min-w-0 flex-col gap-4">
          <SummaryCard
            title="Average help score"
            icon={html(data.rating.icon)}
            value={data.rating.value}
            unit="/ 5"
            count={data.rating.count}
            visual={<span aria-hidden="true" className="-my-[2px] block h-[66px] w-[66px]" dangerouslySetInnerHTML={{ __html: data.rating.svg }} />}
          />
          <SummaryCard title="Paid by learners" icon={html(data.paid.icon)} valueSize="sm" value={data.paid.amount} count={data.paid.count} visual={<ProgressRing percent={parseInt(data.paid.pct)} title={data.paid.title} />} />
        </div>
      </section>
      <div role="group" aria-label="Needs a look" className="mt-5 mb-3 flex flex-wrap items-center gap-2">
        <span className="mr-1 inline-flex items-center gap-1 font-ui text-[13px] leading-5 font-label text-ink [&>span>svg]:h-[14px] [&>span>svg]:w-[14px]">{html(data.attnIcon)}Needs a look</span>
        {data.attn.map((a) => (
          <AttentionChip key={a.label} tone={a.tone as "danger" | "caution" | "info"} label={a.label} />
        ))}
      </div>
    </>
  );
}
