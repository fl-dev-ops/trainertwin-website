"use client";
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AddCard, SourceCard, TwinAllCard } from "./Cards";
import { StatPill } from "./StatPill";

const learners = [{ name: "Priya Raman", src: "/tt/avatar-learner.png" }, { name: "Marcus Lee" }, { name: "Ana Souza" }, { name: "Tom Okafor" }, { name: "Wen Li" }];

const meta = {
  title: "Product/Cards",
  component: AddCard,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Three small card patterns that sit in grids. **AddCard**: the dashed tile that ends a grid. **SourceCard**: a checkbox, a name and a stat pill; ticking changes colour, never size, and the whole card is the click target. **TwinAllCard**: the wide \"Twin for all use cases\" card above the grid of use-case twins. **Story copy is example copy** from the V3 prototype, to show realistic content; it is not a default, and none of it is baked into the component.",
      },
    },
  },
  args: { label: "Add knowledge" },
} satisfies Meta<typeof AddCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Add: Story = { render: (args) => <div className="w-[316px]"><AddCard {...args} /></div> };

export const Sources: Story = {
  parameters: { docs: { description: { story: "A source picker: a fixed two-column grid at 316px, so every checkbox aligns across rows, ending with the Add card." } } },
  render: function Render() {
    const [on, setOn] = useState<Record<string, boolean>>({ yt: true, li: true, blog: false, pod: false });
    const rows = [["yt", "YouTube channel", "36 videos"], ["li", "LinkedIn", "52 posts"], ["blog", "Blog", "14 pages"], ["pod", "Podcast", "9 episodes"]] as const;
    return (
      <div className="grid w-[648px] max-w-full grid-cols-[repeat(2,316px)] gap-4">
        {rows.map(([k, n, c]) => (
          <SourceCard key={k} name={n} count={c} checked={on[k]} onChange={(v) => setOn({ ...on, [k]: v })} />
        ))}
        <AddCard label="Add knowledge" />
      </div>
    );
  },
};

export const SourceChecked: Story = { render: () => <SourceCard name="Blog" count="14 pages" checked onChange={() => {}} /> };

export const TwinAll: Story = {
  render: () => (
    <TwinAllCard name="Olga’s twin" meta="Last updated 29 Oct, 13:00" photoSrc="/tt/avatar-learner.png" learners={learners} onOpen={() => {}} onMore={() => {}} />
  ),
};

export const StatPills: Story = {
  render: () => (
    <div className="flex gap-2">
      <StatPill>14 pages</StatPill>
      <StatPill>36 posts</StatPill>
      <StatPill>52 videos</StatPill>
    </div>
  ),
};
