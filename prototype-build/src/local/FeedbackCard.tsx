import { StarRating } from "@components/StarRating";
import { Card } from "@components/Card";
import { Badge } from "@components/Badge";

const h = "m-0 mb-3 font-ui text-[16px] leading-6 font-title text-ink";

/**
 * NOT IN STORYBOOK YET. The "Learner feedback" card on both session reports (V3 `learnerFeedbackCard`): stars and score
 * with the question, the learner's quote, then any reported issues. Without a rating it says so.
 */
export function FeedbackCard({ fb, issues }: { fb: { stars: number | null; num: string; rest: string; quote: string }; issues: { badge: string; note: string }[] }) {
  return (
    <Card className="px-6 py-5 font-ui">
      <h2 className={h}>Learner feedback</h2>
      {fb.stars == null ? (
        <p className="m-0 text-[15px] leading-[23px] text-ink-tertiary">No feedback left after this session.</p>
      ) : (
        <>
          <p className="m-0 flex flex-wrap items-center gap-2 text-[15px] leading-6">
            <StarRating value={fb.stars} size={20} />
            <span className="text-[18px] leading-6 font-title tabular-nums text-ink">{fb.num}</span>
            <span className="text-ink-secondary">{fb.rest}</span>
          </p>
          {fb.quote ? <p className="mt-2 mb-0 text-[15px] leading-[23px] text-ink-secondary">{fb.quote}</p> : null}
        </>
      )}
      {issues.length ? (
        <>
          <h3 className={`${h} mt-5`}>Issues reported</h3>
          <ul className="m-0 flex list-none flex-col gap-2 p-0">
            {issues.map((i) => (
              <li key={i.badge} className="flex flex-wrap items-center gap-3">
                <Badge tone="caution">{i.badge}</Badge>
                {i.note ? <span className="text-[14px] text-ink-secondary">{i.note}</span> : null}
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </Card>
  );
}
