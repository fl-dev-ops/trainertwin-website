import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SourceChip } from "./SourceChip";

const meta = {
  title: "Session/SourceChip",
  component: SourceChip,
  parameters: {
    docs: {
      description: {
        component:
          "Answers need three confidence states, not two. **Grounded** traces to a specific location in an uploaded source. **Inferred** is extrapolated from the trainer's demonstrated style rather than a passage. **Outside scope** is general knowledge the trainer never covered — the state that protects their reputation, and the only one that gets caution colour.",
      },
    },
  },
  argTypes: {
    confidence: { control: "inline-radio", options: ["grounded", "inferred", "outside"] },
    source: { control: "text" },
  },
  args: {
    confidence: "grounded",
    source: "Sprint Planning.pdf, p.14",
  },
} satisfies Meta<typeof SourceChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Grounded: Story = {};

export const Inferred: Story = {
  args: { confidence: "inferred" },
};

export const OutsideScope: Story = {
  args: { confidence: "outside" },
  parameters: {
    docs: {
      description: {
        story:
          "The exception state. Grounded and Inferred stay neutral so that this one reads as different at a glance — if all three were coloured, the one that actually needs attention would be just another chip.",
      },
    },
  },
};

export const BeneathAnAnswer: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Chips sit below the answer, never inline. Inline superscript markers interrupt reading, and a learner in a timed mock interview cannot afford that.",
      },
    },
  },
  render: () => (
    <div className="max-w-[62ch] font-ui">
      <p className="text-[15px] leading-relaxed text-ink">
        Start by sizing the write path, not the read path. Reads you can cache your
        way out of later; writes set the shape of everything downstream, so if you
        get the partition key wrong you rewrite the system, not the cache layer.
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <SourceChip confidence="grounded" source="System Design wk3.pdf, p.14" />
        <SourceChip confidence="inferred" />
      </div>
    </div>
  ),
};

export const AllStates: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <SourceChip confidence="grounded" source="Sprint Planning.pdf, p.14" />
      <SourceChip confidence="inferred" />
      <SourceChip confidence="outside" />
    </div>
  ),
};
