"use client";
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FilterSelect } from "./FilterSelect";
import { CalendarIcon, SparklesIcon } from "./icons";

const opts = [
  { value: "all", label: "All items" },
  { value: "one", label: "Item one" },
  { value: "two", label: "Item two" },
];

const meta = {
  title: "Foundations/FilterSelect",
  component: FilterSelect,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The compact filter control for toolbars (V3 `.bot-range` and `.bq-chip`): a pill that opens a listbox. `select` shows the chosen label with a chevron (the list lines up right); `chip` shows a fixed label and highlights when anything but the first option is chosen (the list lines up left). The first option is \"no filter\". The list is V3's one dropdown surface: white with a 1px border, 12px radius, 36px options; hover and the chosen option share one soft grey. Arrow keys, Home/End, Enter, Escape. `Select` stays the labelled form field.",
      },
    },
  },
  args: { label: "Filter", options: opts, value: "all", onChange: () => {} },
} satisfies Meta<typeof FilterSelect>;
export default meta;
type Story = StoryObj<typeof meta>;

function Demo(p: { variant?: "select" | "chip"; icon?: React.ReactNode; width?: number; defaultOpen?: boolean; initial?: string }) {
  const { initial = "all", ...rest } = p;
  const [v, setV] = useState(initial);
  return <FilterSelect label="Filter" options={opts} value={v} onChange={setV} {...rest} />;
}
export const Select: Story = { render: () => <Demo width={148} /> };
export const Chip: Story = { render: () => <Demo variant="chip" icon={<SparklesIcon />} /> };
export const ChipRow: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Demo variant="chip" icon={<SparklesIcon />} />
      <Demo variant="chip" icon={<CalendarIcon />} />
    </div>
  ),
};

export const OpenList: Story = {
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story:
          "The open list. The chosen option (\"Item one\") keeps the soft grey fill and the label weight; hovering another option paints the same grey on it, so two rows can be grey at once. Hover \"Item two\" to see it. Keyboard focus looks the same as hover.",
      },
    },
  },
  render: () => (
    <div className="h-[200px] w-[240px]">
      <Demo width={180} defaultOpen initial="one" />
    </div>
  ),
};
