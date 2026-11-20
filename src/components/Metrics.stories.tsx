"use client";
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { NumberTile } from "./NumberTile";
import { AttentionChip } from "./AttentionChip";
import { SummaryCard, ProgressRing } from "./SummaryCard";
import { EyeIcon } from "./UiIcons";

const meta = {
  title: "Product/Metrics",
  component: NumberTile,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "The block that opens a Twin or Roleplay sessions page, top to bottom: summary cards → number tiles → \"Needs a look\" chips → rule → table. Nothing else. **Story copy is example copy** from the V3 prototype, to show realistic content; it is not a default, and none of it is baked into the component.",
      },
    },
  },
} satisfies Meta<typeof NumberTile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NumberTiles: Story = {
  args: { label: "Sessions", value: "27" },
  render: () => (
    <div className="grid max-w-[900px] grid-cols-2 gap-4 sm:grid-cols-4">
      <NumberTile label="Sessions" value="27" onGo={() => {}} goLabel="Go to the sessions table" />
      <NumberTile label="Twin minutes" value="412" />
      <NumberTile label="Questions" value="6" onGo={() => {}} goLabel="Open Inbox, Ask Olga" />
      <NumberTile label="Issues reported" value="2" onGo={() => {}} goLabel="Filter the table to issues" />
    </div>
  ),
};

export const AttentionChips: Story = {
  args: { label: "x", value: "x" },
  render: function Render() {
    const [on, setOn] = useState<string | null>(null);
    const toggle = (k: string) => setOn((c) => (c === k ? null : k));
    return (
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 font-ui text-[14px] text-ink-secondary">
          <EyeIcon size={14} /> Needs a look
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <AttentionChip tone="danger" label="Reported problems" pressed={on === "r"} onClick={() => toggle("r")} />
          <AttentionChip tone="caution" label="Low ratings" pressed={on === "l"} onClick={() => toggle("l")} />
          <AttentionChip tone="info" label="Questions sent to you" pressed={on === "q"} onClick={() => toggle("q")} />
          {on ? (
            <button type="button" className="font-ui text-[13px] text-ink-secondary underline" onClick={() => setOn(null)}>
              Show all
            </button>
          ) : null}
        </div>
      </div>
    );
  },
};

export const SummaryCards: Story = {
  args: { label: "x", value: "x" },
  render: () => (
    <div className="flex max-w-[900px] gap-4">
      <SummaryCard title="Average help score" value="4.3" unit="/ 5" count="21 sessions rated" />
      <SummaryCard
        title="Paid by learners"
        value="AED 90"
        count="1 extension"
        visual={<ProgressRing percent={20} title="1 of 5 sessions paid for an extension" />}
      />
    </div>
  ),
};
