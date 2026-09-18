import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Logo, LogoSymbol } from "./Logo";

const meta = {
  title: "Foundations/Logo",
  component: Logo,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Reconstructed parametrically from the supplied artwork rather than traced: a 3×3 grid of 147-unit cells on a 441 viewBox, corners and fillets at r=20. Verified against the source at ~1px edge tolerance. Both halves inherit `currentColor`, so the mark reverses to `--tt-canvas` over photography without a second asset, and the lockup's proportions are locked to a single `size` prop.",
      },
    },
  },
  argTypes: {
    size: { control: { type: "range", min: 16, max: 96, step: 2 } },
    symbolOnly: { control: "boolean" },
  },
  args: { size: 28 },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Lockup: Story = {};

export const SymbolOnly: Story = {
  args: { symbolOnly: true, size: 48 },
};

export const MinimumSizes: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Full lockup bottoms out at 104px wide; below that it becomes the mark alone at 20px minimum. It never becomes a squeezed wordmark. At 20px the counters are the first thing to close up, which is why that is the floor.",
      },
    },
  },
  render: () => (
    <div className="flex flex-wrap items-end gap-8 font-ui">
      {[20, 24, 32, 48].map((s) => (
        <div key={s} className="flex flex-col items-center gap-2">
          <LogoSymbol size={s} className="text-primary" title="TrainerTwin" />
          <span className="font-mono text-[10px] text-ink-tertiary">{s}px</span>
        </div>
      ))}
    </div>
  ),
};

export const OnBrandAndOnDark: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The mark is `--tt-primary` on canvas in both themes — 3.03:1 on cream, 5.94:1 on near-black, both clearing the 3:1 bar for non-text graphics. Over photography or a trainer's cover art it reverses to `--tt-canvas`, with no exceptions and no tinting.",
      },
    },
  },
  render: () => (
    <div className="flex flex-wrap gap-4">
      <div className="rounded-md border border-line bg-canvas p-6">
        <Logo size={26} />
      </div>
      <div className="rounded-md bg-primary p-6">
        <Logo size={26} className="text-on-primary!" />
      </div>
      <div className="rounded-md bg-[#2E2C27] p-6">
        <Logo size={26} className="text-[#FDFBF7]!" />
      </div>
    </div>
  ),
};

export const ClearSpace: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Clear space equals the mark's own height on all four sides. Nothing — including a trainer's logo in the session header — enters that box.",
      },
    },
  },
  render: () => (
    <div className="inline-block rounded-sm border border-dashed border-primary p-[34px]">
      <Logo size={34} />
    </div>
  ),
};
