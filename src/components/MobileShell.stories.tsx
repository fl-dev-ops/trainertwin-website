"use client";
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MobileHeader, HeaderButton, TabBar, TabBarItem } from "./MobileShell";
import { ChatIcon, EyeIcon, HomeIcon, InboxIcon, SettingsIcon } from "./UiIcons";

const meta = {
  title: "Structure/MobileShell",
  component: MobileHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    viewport: { defaultViewport: "mobile1" },
    docs: {
      description: {
        component:
          "The phone shell at 767px and below: a 56px header (logo left, 40px round icon buttons right) and a 68px tab bar (five items, 11/14 500, a 22px icon, the active one in primary-ink with an orange icon). Both hide from 768px up by default (`responsive`); the stories pass `responsive={false}` so they show at any width. The tab bar is fixed to the bottom and respects the safe-area inset; `inline` lays it out in the flow.",
      },
    },
  },
} satisfies Meta<typeof MobileHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

function Phone() {
  const [tab, setTab] = useState("three");
  const items = [
    ["one", "Item one", <HomeIcon key="h" />],
    ["two", "Item two", <ChatIcon key="r" />],
    ["three", "Item three", <EyeIcon key="a" />],
    ["four", "Item four", <InboxIcon key="i" />],
    ["five", "Item five", <SettingsIcon key="s" />],
  ] as const;
  return (
    <div className="mx-auto flex h-[640px] w-[390px] max-w-full flex-col overflow-hidden border border-line bg-canvas">
      <MobileHeader responsive={false}>
        <HeaderButton label="Layout"><EyeIcon /></HeaderButton>
        <HeaderButton label="Account"><SettingsIcon /></HeaderButton>
      </MobileHeader>
      <main className="flex-1 p-4 font-ui text-[14px] text-ink-secondary">Active: {tab}</main>
      <TabBar aria-label="Main" responsive={false} inline>
        {items.map(([id, label, icon]) => (
          <TabBarItem key={id} label={label} icon={icon} active={tab === id} onClick={() => setTab(id)} />
        ))}
      </TabBar>
    </div>
  );
}

export const Phone390: Story = { render: () => <Phone /> };
export const HeaderOnly: Story = {
  render: () => (
    <MobileHeader responsive={false}>
      <HeaderButton label="Theme"><EyeIcon /></HeaderButton>
    </MobileHeader>
  ),
};
