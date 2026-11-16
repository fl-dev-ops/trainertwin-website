"use client";
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

/**
 * Not a component: the ten card-art gradient tokens, read live from the page's
 * custom properties so this story can never disagree with `tokens.css`.
 */
const meta = {
  title: "Foundations/Card art gradients",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "`--tt-art-0` to `--tt-art-9`: ten pastel three-stop 135° gradients for the picture on a Twin agent or roleplay card. A card takes `index % 10` from its position and never picks its own. Identical in light and dark on purpose: the picture is an illustration surface, not a theme surface, so these are not semantic colours. Text on them is `--tt-on-art`. Tailwind: `bg-art-0` … `bg-art-9`.",
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

function Swatches() {
  // Read once on first render; tokens do not change at runtime.
  const [stops] = useState<string[]>(() => {
    if (typeof document === "undefined") return [];
    const cs = getComputedStyle(document.documentElement);
    return Array.from({ length: 10 }, (_, i) =>
      (cs.getPropertyValue(`--tt-art-${i}`).match(/#[0-9a-fA-F]{6}/g) ?? []).join(" → "),
    );
  });
  return (
    <div className="grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(168px,1fr))]">
      {Array.from({ length: 10 }, (_, i) => (
        <div key={i} className="flex flex-col gap-1 font-ui text-[13px] leading-[18px] text-ink-tertiary">
          <span
            role="img"
            aria-label={`Gradient ${i}`}
            className={`block h-[72px] rounded-md border border-line-card bg-art-${i}`}
            style={{ background: `var(--tt-art-${i})` }}
          />
          <b className="font-title text-ink">--tt-art-{i}</b>
          <code className="text-[11px]">{stops[i]}</code>
        </div>
      ))}
    </div>
  );
}

export const Tokens: Story = { render: () => <Swatches /> };
