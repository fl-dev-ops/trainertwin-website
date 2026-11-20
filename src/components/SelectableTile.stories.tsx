"use client";
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { RadioCard, ImageTile } from "./SelectableTile";

const meta = {
  title: "Foundations/SelectableTile",
  component: RadioCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Two single-select patterns that communicate \"chosen\" without changing their footprint: the radio-card darkens its border by a colour step (never a width step), and the image tile takes an inset ring. Both are native radios, so grouping, arrow keys and form submit come from the browser.",
      },
    },
  },
} satisfies Meta<typeof RadioCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioCards: Story = {
  args: { title: "Option one", name: "voice" },
  render: function Render() {
    const [v, setV] = useState("mine");
    return (
      <div className="grid w-[560px] max-w-full gap-3 sm:grid-cols-2">
        <RadioCard
          name="voice"
          value="mine"
          checked={v === "mine"}
          onChange={() => setV("mine")}
          title="Option one"
          description="Supporting text."
        />
        <RadioCard
          name="voice"
          value="library"
          checked={v === "library"}
          onChange={() => setV("library")}
          title="Option two"
          description="Supporting text."
        />
      </div>
    );
  },
};

export const ImageTiles: Story = {
  args: { title: "x" },
  render: function Render() {
    const [v, setV] = useState("a");
    return (
      <div className="flex gap-3">
        {["a", "b", "c"].map((k) => (
          <ImageTile
            key={k}
            name="look"
            value={k}
            checked={v === k}
            onChange={() => setV(k)}
            src="/tt/avatar-learner.png"
            label={`Image ${k.toUpperCase()}`}
          />
        ))}
      </div>
    );
  },
};
