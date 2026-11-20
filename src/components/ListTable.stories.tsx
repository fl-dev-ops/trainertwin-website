import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ListTable, ListRow, LearnerRow, UsageMeter } from "./ListTable";

const cols = "minmax(0,1.2fr) minmax(0,1.5fr) 120px 110px 110px minmax(0,1.3fr)";

const meta = {
  title: "Data/ListTable",
  component: ListTable,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "The list-as-table card, copied from the V3 prototype on request (16 Nov 2026). A grid of rows in a card (radius 16, `--tt-shadow-list`), unlike `Table`, the sortable data table. `ListRow` takes its `grid-template-columns` as `columns`; `head` makes the sunken label row. `LearnerRow` is the people row: avatar and name, email, cohort badge, counts and a `UsageMeter`, which turns caution at 90% and above. The prototype tints learner avatars with five tones; pass `tone` to match, or leave it neutral. **Story copy is example copy** from the V3 prototype, to show realistic content; it is not a default, and none of it is baked into the component.",
      },
    },
  },
  args: { label: "Twin users", children: null },
} satisfies Meta<typeof ListTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Learners: Story = {
  render: (args) => (
    <div className="w-[980px] max-w-full overflow-x-auto">
      <ListTable {...args}>
        <ListRow head columns={cols}>
          <span role="columnheader">Learner</span><span role="columnheader">Email</span><span role="columnheader">Cohort</span>
          <span role="columnheader">Agents</span><span role="columnheader">Minutes</span><span role="columnheader">Usage</span>
        </ListRow>
        <LearnerRow columns={cols} name="Priya Nair" email="priya.nair@example.com" cohort="Sep 2026 batch" tone="success" counts={["1 agents", "120 min"]} usage={{ used: 48, total: 120 }} />
        <LearnerRow columns={cols} name="Hassan Ali" email="hassan.ali@example.com" cohort="Aug 2026 batch" tone="info" counts={["1 agents", "60 min"]} usage={{ used: 58, total: 60 }} />
        <LearnerRow columns={cols} name="Nora Ali" email="nora.ali@example.com" cohort="Walk-ins" tone="caution" counts={["2 agents", "90 min"]} usage={{ used: 12, total: 90 }} />
      </ListTable>
    </div>
  ),
};

export const Meters: Story = {
  render: () => (
    <div className="flex w-[240px] flex-col gap-4">
      <UsageMeter used={30} total={120} />
      <UsageMeter used={115} total={120} />
    </div>
  ),
};
