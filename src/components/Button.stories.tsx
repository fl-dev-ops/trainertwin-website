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
          "**`primary` is the default** as of 4 Nov 2026 (D107, \"Orange everywhere\") — `<Button>` with no variant is white on orange, at most one per view or dialog: Create new, Next, Looks right, Save and assign, Calibrate, Done. It reverses the 29 Sep rule that made black `strong` the default and allowlisted orange to three moments. Selection, state, tints and avatars stay neutral (D04's exclusions); orange is a button, not a theme.\n\nThe tradeoff now applies to every view: white on `#FF5A00` measures 3.13:1, which fails WCAG AA for normal text and passes only at large sizes (≥18.66px bold, or ≥24px). `lg` is marketing-only, so `primary` has no compliant in-product size. Recorded as open (D29), not patched. The axe colour-contrast rule is disabled for this component alone so the rest of the library keeps its gate.",
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
  args: { variant: "primary", children: "Create new" },
  parameters: {
    docs: {
      description: {
        story:
          "**The default.** One per view or dialog — the action the screen exists for. At `md` (14px) the label is below the large-text threshold, so it does not meet AA; `lg` would be compliant but is marketing-only. That gap is recorded as open in DECISIONS.md (D29) rather than patched. The page-header \"Create new\" label is weight 500 where every other CTA is 600 (D108) — a named exception, set per call site, not a variant.",
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
          "Black in light theme, white in dark — flip the toolbar and watch it invert. **No longer the default (D107).** Nothing in product uses it as a button now; it stays for marketing CTAs and for a second filled button on a screen that already has its one orange primary. 19.78:1 in both themes, the only filled variant with no accessibility tradeoff. Whether to keep, merge or retire it is open (DECISIONS.md, \"What is left of strong\").",
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
          "Emphasis runs left to right, but the ladder is lopsided on purpose: `primary` is the default and there is at most one per view, `strong` is the neutral filled alternative, `secondary` and `ghost` step down, and `danger` sits outside the ladder because destructive actions are outlined rather than ranked.",
      },
    },
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="primary">Save &amp; finish</Button>
      <Button variant="strong">Customize page</Button>
      <Button variant="secondary">Save draft</Button>
      <Button variant="ghost">Cancel</Button>
      <Button variant="danger">Delete source</Button>
    </div>
  ),
};

/**
 * D107 made visible: one orange button per view or dialog, whatever the step.
 * Two orange buttons in one viewport means one of them is wrong.
 */
export const OneOrangePerView: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Three typical views, one orange button each. **1. The recommended card** — the option the product steers toward gets a `brand` badge and the `primary` select; its neighbour gets `neutral` and `secondary`. **2. The wizard footer** — Back is `ghost`, Next / Continue is `primary` on every step (the V3 onboarding ships this). **3. The last step** — still one `primary`; the label changes, the colour does not.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-7 font-ui">
      <div>
        <p className="mb-3 text-[11px] uppercase tracking-wide text-ink-tertiary">
          1 · Recommended vs ordinary
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="w-[264px] rounded-md border border-line-card bg-surface p-4 shadow-card">
            <span className="inline-block rounded-full bg-primary-subtle px-2 py-[2px] text-[11px] font-label leading-4 text-primary-ink">
              Recommended
            </span>
            <p className="mt-2 text-[15px] font-title text-ink">
              Objection-handling roleplay
            </p>
            <p className="mt-1 text-[13px] font-normal text-ink-tertiary">
              Built from the twelve calls you already uploaded.
            </p>
            <Button variant="primary" size="sm" className="mt-4">
              Select
            </Button>
          </div>

          <div className="w-[264px] rounded-md border border-line-card bg-surface p-4 shadow-card">
            <span className="inline-block rounded-full bg-surface-sunken px-2 py-[2px] text-[11px] font-label leading-4 text-ink-secondary">
              Live practice
            </span>
            <p className="mt-2 text-[15px] font-title text-ink">
              Cold-call practice
            </p>
            <p className="mt-1 text-[13px] font-normal text-ink-tertiary">
              A landlord who wants to hang up immediately.
            </p>
            <Button variant="secondary" size="sm" className="mt-4">
              Select
            </Button>
          </div>
        </div>
      </div>

      <div>
        <p className="mb-3 text-[11px] uppercase tracking-wide text-ink-tertiary">
          2 · Mid-flow — Next is the one orange button
        </p>
        <div className="flex w-[544px] items-center justify-between rounded-md border border-line-card bg-surface px-4 py-3 shadow-card">
          <span className="text-[13px] text-ink-tertiary">Step 3 of 7</span>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">
              Back
            </Button>
            <Button size="sm">Continue</Button>
          </div>
        </div>
      </div>

      <div>
        <p className="mb-3 text-[11px] uppercase tracking-wide text-ink-tertiary">
          3 · The last step — still one orange button
        </p>
        <div className="flex w-[544px] items-center justify-between rounded-md border border-line-card bg-surface px-4 py-3 shadow-card">
          <span className="text-[13px] text-ink-tertiary">Step 7 of 7</span>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">
              Back
            </Button>
            <Button variant="primary" size="sm">
              Save 6 tasks &amp; go to home
            </Button>
          </div>
        </div>
      </div>
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
          "Left: a checklist where every row carries an action. If each were `primary`, the orange would compete with itself and none would read as the one to press — so row actions are `secondary` and the card\u2019s single next step (not shown) would be the orange one. Right: a dialog, where one action is the only thing on screen and is `primary`. Two orange buttons in one viewport means one of them is wrong.",
      },
    },
  },
  render: () => (
    <div className="flex flex-wrap items-start gap-6 font-ui">
      <div className="w-[320px] rounded-md border border-line bg-surface p-5">
        <p className="mb-4 text-[13px] font-title text-ink">Set up your twin</p>
        <div className="flex flex-col gap-3">
          {["Customize page", "Add sources", "Set guardrails"].map((label) => (
            <div key={label} className="flex items-center justify-between gap-3">
              <span className="text-[13px] text-ink-secondary">{label}</span>
              <Button variant="secondary" size="sm">
                {label.split(" ")[0]}
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[320px] rounded-lg border border-line bg-surface-raised p-5 shadow-e3">
        <p className="mb-2 font-ui text-[17px] font-title text-ink">
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
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "`sm` and `md` are the only in-product sizes as of 25 Sep 2026. `lg` is shown here for completeness (marketing uses it) but is not a valid in-product choice — see the note on ButtonSize. These render `primary` because no variant is passed, which is the point of the 4 Nov default (D107).",
      },
    },
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large (marketing only)</Button>
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

const Plus = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const Disabled: Story = {
  args: { disabled: true, children: "Save" },
};

/**
 * THE states demo — there is only one, as of 29 Sep 2026. The spec document
 * carried two nearly identical rows, one using a generic circular spinner and
 * one using the real brand-mark grid; they were merged and the circular one
 * deleted, so nobody copies a loader that was never going to ship.
 *
 * Matches the Figma reference at node 885:274 ("loader gif animation and
 * button loader place"): the everyday action, its own loading state, true
 * disabled, and an icon-only utility button, side by side so the three
 * non-interactive-looking states stay visibly distinct from one another.
 *
 * The plus is a real SVG, not a "+" character — a text glyph sits on the
 * font's baseline rather than the icon's optical centre, and renders at the
 * label's weight instead of the icon stroke.
 */
export const LoadingAndDisabled: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button leadingIcon={Plus}>Add source</Button>
      <Button loading>
        Processing 12 sources
      </Button>
      <Button variant="secondary" disabled>
        Disabled
      </Button>
      <Button
        variant="secondary"
        iconOnly
        aria-label="More options"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <circle cx="8" cy="3" r="1.5" />
          <circle cx="8" cy="8" r="1.5" />
          <circle cx="8" cy="13" r="1.5" />
        </svg>
      </Button>
    </div>
  ),
};
