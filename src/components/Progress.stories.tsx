import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ProgressBar, ProgressRing, Skeleton, SkeletonText } from "./Progress";
import { Card, CardBody } from "./Card";

const meta = {
  title: "Foundations/Progress",
  component: ProgressBar,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Real progress only. `ProgressBar` is for work with a known amount done (ingest shows REAL progress per source, never an indeterminate bar). If you cannot say how far along it is, use the Spinner. `ProgressRing` is a share of a whole: 64px with the number inside, or 18px for the top bar, switching to caution at 90%. `Skeleton` holds the shape of what is coming and pulses opacity rather than shimmering, so it survives both themes.",
      },
    },
  },
  args: { value: 60, label: "Source one", valueLabel: "9 of 14" },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bar: Story = { render: (args) => <div className="w-[360px] max-w-full"><ProgressBar {...args} /></div> };

export const IngestPerSource: Story = {
  parameters: { docs: { description: { story: "One bar per source. A finished source turns green." } } },
  render: () => (
    <div className="flex w-[420px] max-w-full flex-col gap-4 font-ui text-[14px] text-ink">
      {[["Source one", 100, "14 of 14"], ["Source two", 62, "24 of 39"], ["Source three", 8, "1 of 12"]].map(([n, v, t]) => (
        <div key={n as string} className="flex flex-col gap-1.5">
          <span>{n}</span>
          <ProgressBar value={v as number} label={n as string} valueLabel={t} />
        </div>
      ))}
    </div>
  ),
};

export const Rings: Story = {
  args: { label: "x" },
  parameters: { docs: { description: { story: "Large: a share of a whole, with the number inside. Small: the top-bar pill, neutral, switching to caution at 90 and above." } } },
  render: () => (
    <div className="flex items-center gap-8">
      <ProgressRing percent={20} title="20 percent" />
      <ProgressRing percent={72} />
      <div className="flex items-center gap-2 font-ui text-[13px] text-ink-secondary">
        <ProgressRing size="sm" tone="neutral" percent={60} warnAt={90} title="60 percent" /> 60%
      </div>
      <div className="flex items-center gap-2 font-ui text-[13px] text-ink-secondary">
        <ProgressRing size="sm" tone="neutral" percent={93} warnAt={90} title="93 percent" /> 93%
      </div>
    </div>
  ),
};

export const Skeletons: Story = {
  args: { label: "x" },
  parameters: { docs: { description: { story: "A card's shape, before its content arrives." } } },
  render: () => (
    <Card className="w-[340px] max-w-full">
      <CardBody>
        <div className="mb-4 flex items-center gap-3">
          <Skeleton shape="circle" width={32} />
          <Skeleton width={140} height={16} />
        </div>
        <SkeletonText lines={3} />
        <Skeleton shape="block" height={72} className="mt-4" />
      </CardBody>
    </Card>
  ),
};
