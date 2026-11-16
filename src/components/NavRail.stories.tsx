"use client";
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { NavRail, NavGroup, NavItem, RailUser, RailBrand, RailAction } from "./NavRail";
import { ChatIcon, EyeIcon, HomeIcon, InboxIcon, SettingsIcon } from "./UiIcons";
import { Button } from "./Button";

const meta = {
  title: "Structure/NavRail",
  component: NavRail,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "The app's left rail, copied from the V3 prototype (final): `--tt-surface-sunken`, no border, **214px** wide and 72px collapsed (the width animates). Brand row = 20px orange mark + 16px wordmark (a button that toggles the rail) and a 32px theme switch. Items are 32px tall with 20px icons; the active item is a lifted `--tt-surface` pill with primary-ink text and an orange icon. An item can show an `alert`: a plain 8px orange dot, no number. `meta` is a quiet value at the end of a row. Collapsed, items become 40px squares with tooltips and the alert dot moves onto the icon. The foot is a list of items above a user card.",
      },
    },
  },
  args: { "aria-label": "Main", children: null },
} satisfies Meta<typeof NavRail>;

export default meta;
type Story = StoryObj<typeof meta>;

const SunIcon = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <circle cx="8" cy="8" r="2.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 1.8v1.6M8 12.6v1.6M1.8 8h1.6M12.6 8h1.6M3.6 3.6l1.1 1.1M11.3 11.3l1.1 1.1M3.6 12.4l1.1-1.1M11.3 4.7l1.1-1.1" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const nav = [
  { group: "Group one", items: [["one", "Item one", <HomeIcon key="a" />, true], ["two", "Item two", <ChatIcon key="s" />], ["three", "Item three", <EyeIcon key="b" />]] },
  { group: "Group two", items: [["four", "Item four", <ChatIcon key="c" />], ["five", "Item five", <ChatIcon key="d" />], ["six", "Item six", <EyeIcon key="e" />]] },
] as const;

function Demo({ collapsed, onToggle }: { collapsed: boolean; onToggle?: () => void }) {
  const [active, setActive] = useState("one");
  const item = ([id, label, icon, alert]: readonly [string, string, React.ReactNode, boolean?]) => (
    <NavItem key={id} label={label} icon={icon} alert={alert} active={active === id} onClick={() => setActive(id)} />
  );
  return (
    <div className="flex h-[640px] bg-surface-sunken">
      <NavRail
        aria-label="Main"
        collapsed={collapsed}
        brand={<RailBrand onToggle={onToggle} actions={<RailAction label="Switch theme" icon={<SunIcon />} />} />}
        footerNav={
          <>
            <NavItem label="Item seven" icon={<InboxIcon />} meta="618 min" active={active === "seven"} onClick={() => setActive("seven")} />
            <NavItem label="Item eight" icon={<SettingsIcon />} active={active === "eight"} onClick={() => setActive("eight")} />
          </>
        }
        footer={<RailUser name="Name Surname" />}
      >
        {nav.map((g) => (
          <NavGroup key={g.group} label={g.group}>
            {g.items.map((i) => item(i as never))}
          </NavGroup>
        ))}
      </NavRail>
      <main className="my-0 flex-1 rounded-l-lg bg-canvas p-6 font-ui text-[14px] text-ink-secondary shadow-[-4px_0_16px_rgb(30_28_25/0.06)]">
        Active: {active}
      </main>
    </div>
  );
}

export const Expanded: Story = { render: () => <Demo collapsed={false} /> };
export const Collapsed: Story = { render: () => <Demo collapsed /> };
export const Toggle: Story = {
  render: function Render() {
    const [c, setC] = useState(false);
    return (
      <div>
        <div className="p-3"><Button variant="secondary" size="sm" onClick={() => setC(!c)}>{c ? "Expand" : "Collapse"}</Button></div>
        <Demo collapsed={c} onToggle={() => setC(!c)} />
      </div>
    );
  },
};
