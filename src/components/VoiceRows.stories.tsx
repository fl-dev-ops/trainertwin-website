"use client";
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { VoiceRow, VoiceListRow } from "./VoiceRows";

const voices = [["amber", "Amber", "Warm, steady"], ["noor", "Noor", "Bright, quick"], ["sam", "Sam", "Low, calm"]] as const;

const meta = {
  title: "Product/VoiceRows",
  component: VoiceRow,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Copied from the V3 prototype on request (16 Nov 2026); no spec of their own. **VoiceRow**: the Voice-library row, a card row with a name, a ghost Play and a secondary Select; selected steps the border one colour step. **VoiceListRow**: the Persona-settings row inside a list card, with a radio dot and a 28px round play button. **Story copy is example copy** from the V3 prototype, to show realistic content; it is not a default, and none of it is baked into the component.",
      },
    },
  },
  args: { name: "Amber" },
} satisfies Meta<typeof VoiceRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Library: Story = {
  render: function Render() {
    const [sel, setSel] = useState("noor");
    const [play, setPlay] = useState<string | null>(null);
    return (
      <div className="flex w-[480px] max-w-full flex-col gap-2">
        {voices.map(([id, n, d]) => (
          <VoiceRow key={id} name={n} detail={d} selected={sel === id} playing={play === id} onSelect={() => setSel(id)} onPlay={() => setPlay(play === id ? null : id)} />
        ))}
      </div>
    );
  },
};

export const SettingsList: Story = {
  render: function Render() {
    const [sel, setSel] = useState("amber");
    const [play, setPlay] = useState<string | null>(null);
    return (
      <div role="radiogroup" aria-label="Voice" className="w-[420px] max-w-full overflow-hidden rounded-lg border border-line-card bg-surface shadow-list">
        {voices.map(([id, n, d]) => (
          <VoiceListRow key={id} name={n} description={d} selected={sel === id} playing={play === id} onSelect={() => setSel(id)} onPlay={() => setPlay(play === id ? null : id)} />
        ))}
      </div>
    );
  },
};
