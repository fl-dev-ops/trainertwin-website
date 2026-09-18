import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";

const meta = {
  title: "Foundations/Button",
  component: Button,
  parameters: {
    /**
     * Scoped exception, not a blanket one.
     *
     * `--tt-on-primary` is white on #FF5A00 = 3.13:1, a deliberate brand
     * decision signed off 9 Sep 2026. axe correctly flags it, so the
     * colour-contrast rule is switched off for THIS component only. Every
     * other component in the library still runs the full gate at `error`.
     *
     * Reverting the token to near-black is what retires this block.
     */
    a11y: {
      config: { rules: [{ id: "color-contrast", enabled: false }] },
    },
    docs: {
      description: {
        component:
          "The primary action is **white on orange** — a deliberate brand decision, taken with the tradeoff known. White on `#FF5A00` measures 3.13:1, which fails WCAG AA for normal text and passes only at large sizes (≥18.66px bold, or ≥24px). Near-black would have measured 6.32:1. The `lg` size is therefore the compliant one; `sm` and `md` are not. The axe colour-contrast rule is disabled for this component alone so the rest of the library keeps its gate.",
      },
    },
  },
  argTypes: {
    variant: { control: "inline-radio", options: ["primary", "strong", "secondary", "ghost", "danger"] },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    fullWidth: { control: "boolean" },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
  args: {
    children: "Start mock interview",
    variant: "primary",
    size: "md",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "At `md` (14px) this label is below the large-text threshold, so it does not meet AA. Use `lg` for hero CTAs where the label reaches 19px bold — that combination is compliant white-on-orange.",
      },
    },
  },
};

export const Strong: Story = {
  args: { variant: "strong", children: "Customize page" },
  parameters: {
    docs: {
      description: {
        story:
          "**Black in light theme, white in dark theme — flip the toolbar and watch it invert.** One variant, not two: the token layer swaps the polarity, so it is always the opposite of its canvas and cannot be shipped invisible. 19.78:1 in both themes, which makes it the most legible button in the system and the only filled one carrying no accessibility tradeoff. This is the workhorse — the action on a card, a row, a toolbar.",
      },
    },
  },
};

export const Secondary: Story = {
  args: { variant: "secondary", children: "Save draft" },
};

export const Ghost: Story = {
  args: { variant: "ghost", children: "Cancel" },
};

export const Danger: Story = {
  args: { variant: "danger", children: "Delete source" },
  parameters: {
    docs: {
      description: {
        story:
          "Destructive actions are outlined, not filled. A filled destructive button carries the same visual weight as the primary action — which is how someone deletes a trainer's uploaded material by mistake. It also avoids a theme fork: `--tt-danger` inverts across themes, so it works as a border and label but not as a fill.",
      },
    },
  },
};

export const AllVariants: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Emphasis runs left to right. `primary` is the directed moment, `strong` is the everyday action, `secondary` and `ghost` step down from there, and `danger` sits outside the ladder because destructive actions are outlined rather than ranked.",
      },
    },
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="primary">Save and continue</Button>
      <Button variant="strong">Customize page</Button>
      <Button variant="secondary">Save draft</Button>
      <Button variant="ghost">Cancel</Button>
      <Button variant="danger">Delete source</Button>
    </div>
  ),
};

/**
 * The rule this whole variant exists to serve.
 */
export const WhichCtaWhere: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Left: a checklist where every row carries an action. If each were `primary`, the orange would compete with itself and none would read as the one to press — so the row actions are `strong`. Right: a dialog, where one action is the only thing on screen and has earned `primary`.",
      },
    },
  },
  render: () => (
    <div className="flex flex-wrap items-start gap-6 font-ui">
      <div className="w-[320px] rounded-md border border-line bg-surface p-5">
        <p className="mb-4 text-[13px] font-semibold text-ink">Set up your twin</p>
        <div className="flex flex-col gap-3">
          {["Customize page", "Add sources", "Set guardrails"].map((label) => (
            <div key={label} className="flex items-center justify-between gap-3">
              <span className="text-[13px] text-ink-secondary">{label}</span>
              <Button variant="strong" size="sm">
                {label.split(" ")[0]}
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[320px] rounded-lg border border-line bg-surface-raised p-5 shadow-e3">
        <p className="mb-2 font-display text-[17px] font-semibold text-ink">
          Publish this twin?
        </p>
        <p className="mb-4 text-[13px] leading-relaxed text-ink-secondary">
          Learners with your link can start a session straight away.
        </p>
        <div className="flex justify-end gap-2">
          <Button variant="ghost" size="sm">
            Not yet
          </Button>
          <Button variant="primary" size="sm">
            Publish twin
          </Button>
        </div>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

const Bell = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M4 6.5a4 4 0 0 1 8 0c0 3 1.2 4 1.2 4H2.8S4 9.5 4 6.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M6.6 13a1.6 1.6 0 0 0 2.8 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);
const Help = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="6.2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M6.4 6.3a1.7 1.7 0 0 1 3.3.5c0 1.1-1.6 1.4-1.6 2.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M8.1 11.7v.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);
const Doc = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M4 2.5h5L12 5.5v8H4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M9 2.5v3h3" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M6 8.5h4M6 10.8h2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);
const Dots = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <circle cx="8" cy="3" r="1.5" /><circle cx="8" cy="8" r="1.5" /><circle cx="8" cy="13" r="1.5" />
  </svg>
);

export const Toolbar: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "`secondary` is a soft grey fill rather than an outline — the utility button, for things that sit together in a toolbar and should not each shout. Its fill is `--tt-fill-soft`, deliberately not `--tt-surface-sunken`: in dark theme sunken is *darker* than the card a button sits on, so a button using it would read as a hole rather than a control. **Every icon-only button carries an `aria-label`** — without one a screen reader announces \"button\" and nothing else.",
      },
    },
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Button variant="secondary" leadingIcon={Bell} count={1} aria-label="Notifications, 1 unread" />
      <Button variant="secondary" leadingIcon={Help}>Help</Button>
      <Button variant="secondary" leadingIcon={Doc}>Docs</Button>
      <Button variant="secondary" iconOnly leadingIcon={Dots} aria-label="More options" />
      <Button variant="secondary" size="sm" iconOnly leadingIcon={Dots} aria-label="More options" />
    </div>
  ),
};

export const Disabled: Story = {
  args: { disabled: true, children: "Processing 12 sources" },
};
