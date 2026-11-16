"use client";
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Tabs, TabPanel } from "./Tabs";

const tabs = [
  { id: "sources", label: "Tab one" },
  { id: "pedagogy", label: "Tab two" },
  { id: "guardrails", label: "Tab three" },
  { id: "sessions", label: "Tab four", count: 12 },
];

const meta = {
  title: "Foundations/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Underline tabs: secondary. Reach for the Segmented control first; use these when a screen calls for them by name (more than four options, a wide nav where pills would read as buttons, or many sections of one large object). The selected tab has a 2px bottom border in `--tt-primary` and its label in `--tt-primary-ink`. Built to the ARIA tabs pattern: roving tabindex, arrow keys move and select, Home and End jump. Each `TabPanel` renders only while its tab is selected.",
      },
    },
  },
  args: { tabs, value: "sources", onChange: () => {}, "aria-label": "Sections" },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render(args) {
    const [v, setV] = useState(args.value);
    return (
      <div className="w-[560px] max-w-full">
        <Tabs {...args} value={v} onChange={setV}>
          {tabs.map((t) => (
            <TabPanel key={t.id} id={t.id}>
              <p className="font-ui text-[14px] text-ink-secondary">The {t.label} panel.</p>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    );
  },
};
