"use client";
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SegmentedControl } from "./SegmentedControl";
import { EyeIcon, ArrowUpRightIcon } from "./UiIcons";

const meta = {
  title: "Foundations/SegmentedControl",
  component: SegmentedControl,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The default tabbed-content pattern. Two to four segments, short parallel labels, something always selected, never for a committing or destructive action. The selected pill is raised on `--tt-surface` with elevation-1 and its icon turns brand orange. A radiogroup: arrow keys move and select, Home/End jump.",
      },
    },
  },
} satisfies Meta<typeof SegmentedControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    "aria-label": "Options",
    value: "voice",
    onChange: () => {},
    options: [
      { value: "voice", label: "One" },
      { value: "text", label: "Two" },
      { value: "video", label: "Three" },
    ],
  },
  render: function Render(args) {
    const [v, setV] = useState(args.value);
    return <SegmentedControl {...args} value={v} onChange={setV} />;
  },
};

export const WithIcons: Story = {
  args: {
    "aria-label": "Options",
    value: "a",
    onChange: () => {},
    options: [
      { value: "a", label: "One", icon: <EyeIcon /> },
      { value: "b", label: "Two", icon: <ArrowUpRightIcon /> },
    ],
  },
  render: function Render(args) {
    const [v, setV] = useState(args.value);
    return <SegmentedControl {...args} value={v} onChange={setV} />;
  },
};

export const FullWidth: Story = {
  args: { ...Default.args, fullWidth: true },
  render: function Render(args) {
    const [v, setV] = useState(args.value);
    return (
      <div className="w-[420px] max-w-full">
        <SegmentedControl {...args} value={v} onChange={setV} />
      </div>
    );
  },
};
