"use client";
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Menu, type MenuEntry } from "./Menu";
import { Button } from "./Button";

const items: MenuEntry[] = [
  { label: "Item one", onSelect: () => {} },
  { label: "Item two", onSelect: () => {} },
  { label: "Item three", onSelect: () => {} },
  { label: "Item four", onSelect: () => {} },
  "divider",
  { label: "Delete", onSelect: () => {}, danger: true },
];

const meta = {
  title: "Foundations/Menu",
  component: Menu,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A button that opens a list of actions: `--tt-surface-raised`, elevation-2, 13px items on a 32px row, the destructive item last and below a divider. Not for navigation, and not for choosing a value (use Select). Keyboard: Enter, Space or ↓ on the trigger opens it and focuses the first item; ↑ ↓ Home End move; a letter jumps to the next item that starts with it; Escape closes and returns focus to the trigger; Tab closes.",
      },
    },
  },
  args: { label: "Menu", items },
  decorators: [(Story) => <div className="min-h-[260px] min-w-[260px] pt-4"><Story /></div>],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const AlignStart: Story = { args: { align: "start" } };
export const CustomTrigger: Story = {
  render: (args) => (
    <Menu
      {...args}
      align="start"
      trigger={({ onClick, onKeyDown, ...aria }) => (
        <Button variant="secondary" size="sm" onClick={onClick} onKeyDown={onKeyDown} {...aria}>
          Options
        </Button>
      )}
    />
  ),
};
export const WithDisabledItem: Story = {
  args: { items: [{ label: "Item two", onSelect: () => {} }, { label: "Item three", onSelect: () => {}, disabled: true }, "divider", { label: "Delete", onSelect: () => {}, danger: true }] },
};
export const Selecting: Story = {
  render: function Render(args) {
    const [last, setLast] = useState("nothing yet");
    return (
      <div className="flex flex-col items-start gap-3 font-ui text-[13px] text-ink-secondary">
        <Menu {...args} align="start" items={items.map((i) => (i === "divider" ? i : { ...i, onSelect: () => setLast(i.label) }))} />
        <span>Picked: {last}</span>
      </div>
    );
  },
};
