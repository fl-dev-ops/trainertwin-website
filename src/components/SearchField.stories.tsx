"use client";
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SearchField } from "./SearchField";

const meta = {
  title: "Foundations/SearchField",
  component: SearchField,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A search box for toolbars and dialogs: a pill with a magnifier and a borderless input. `ring` (header look) or `field` (bordered), 36px or 32px, an optional × (`onClear`). No visible label, so `label` is required. Width comes from `className`.",
      },
    },
  },
  args: { label: "Search", value: "", onChange: () => {}, placeholder: "Search…" },
} satisfies Meta<typeof SearchField>;
export default meta;
type Story = StoryObj<typeof meta>;

function Demo(p: Partial<React.ComponentProps<typeof SearchField>>) {
  const [v, setV] = useState("");
  return <SearchField label="Search" placeholder="Search…" value={v} onChange={setV} className="w-[240px]" {...p} />;
}
export const Header: Story = { render: () => <Demo /> };
export const Field: Story = { render: () => <Demo appearance="field" /> };
export const Small: Story = { render: () => <Demo size="sm" appearance="field" /> };
export const WithClear: Story = { render: () => <Demo size="sm" appearance="field" onClear={() => {}} /> };
