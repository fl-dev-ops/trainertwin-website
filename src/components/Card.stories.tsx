import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Card, CardBody, CardFooter, CardHeader, CardTitle } from "./Card";
import { Button } from "./Button";
import { SourceChip } from "./SourceChip";

const meta = {
  title: "Structure/Card",
  component: Card,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "The default container — almost every product screen is cards in a grid. Padding lives on the sections rather than the Card, so a card can hold a full-bleed image or an edge-to-edge table without fighting a padding it never asked for. Radius is 16 for a page-level card; tiles and rows inside it take 12.",
      },
    },
  },
  argTypes: {
    variant: { control: "inline-radio", options: ["default", "raised", "interactive"] },
  },
  args: { variant: "default" },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card {...args} className="max-w-[380px]">
      <CardHeader>
        <CardTitle>System Design — week 3</CardTitle>
        <span className="text-[11px] text-ink-tertiary">14 pages</span>
      </CardHeader>
      <CardBody>
        <p className="text-[14px] leading-relaxed text-ink-secondary">
          Covers partitioning, write paths, and when to reach for a queue. Your twin
          cites this in 23 answers.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <SourceChip confidence="grounded" source="Sprint Planning.pdf, p.14" />
        </div>
      </CardBody>
      <CardFooter>
        <Button variant="ghost" size="sm">
          Remove
        </Button>
        <Button variant="secondary" size="sm">
          Open source
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const Variants: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "`default` carries `--tt-elevation-1` so a card reads as an object sitting on the canvas rather than a region drawn on it. `raised` steps up to elevation-2 for something genuinely floating — a popover-like panel, not every card. `interactive` is for a card that is itself a link or button; it lifts to elevation-2 on hover, and must contain no other clickable target or you have nested hit areas. In dark theme these are hairlines of light rather than shadows, because shadows are invisible on a near-black canvas.",
      },
    },
  },
  render: () => (
    <div className="grid gap-4 sm:grid-cols-3">
      {(["default", "raised", "interactive"] as const).map((v) => (
        <Card key={v} variant={v}>
          <CardBody>
            <CardTitle className="mb-1">{v}</CardTitle>
            <p className="text-[13px] leading-relaxed text-ink-tertiary">
              {v === "default"
                ? "Surface, hairline border, elevation-1."
                : v === "raised"
                  ? "Elevation-2. Genuinely floating. Use sparingly."
                  : "The whole card is the target. Hover to see it lift."}
            </p>
          </CardBody>
        </Card>
      ))}
    </div>
  ),
};

export const InAGrid: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "How cards actually appear. The grid picks a column count the items fill, so a card never stretches across dead space or sits alone in a row.",
      },
    },
  },
  render: () => (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {[
        ["System Design — week 3", "14 pages", "PDF"],
        ["Behavioural rounds", "8 pages", "Notion"],
        ["Mock interview recording", "42 min", "Video"],
        ["Coaching notes Q3", "6 pages", "Doc"],
      ].map(([title, meta_, kind]) => (
        <Card key={title} variant="interactive">
          <CardBody>
            <div className="mb-2 flex items-center justify-between gap-2">
              <span className="text-[10px] uppercase tracking-wider text-ink-tertiary">
                {kind}
              </span>
              <span className="text-[11px] text-ink-tertiary">{meta_}</span>
            </div>
            <CardTitle>{title}</CardTitle>
          </CardBody>
        </Card>
      ))}
    </div>
  ),
};

export const FullBleed: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Because padding sits on the sections, content can run flush to the card's edge and the radius still clips it. This is the case that breaks cards which pad themselves.",
      },
    },
  },
  render: () => (
    <Card className="max-w-[380px]">
      <div className="grid h-[120px] place-items-center bg-primary-subtle">
        <span className="text-[11px] text-primary-ink">full-bleed media</span>
      </div>
      <CardBody>
        <CardTitle className="mb-1">Cover art</CardTitle>
        <p className="text-[13px] text-ink-tertiary">
          Flush to the edge, clipped by the card&rsquo;s own radius.
        </p>
      </CardBody>
    </Card>
  ),
};

export const Setup: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The full-page onboarding card — Build my twin, Voice library, \"Olga's twin is ready\". Radius `--tt-radius-xl` (24), no border, elevation-2, 32px padding on the card itself. Centred at the width its content needs: 480 for a form or a choice, 640 for a result, 680 for a list. It is the only card that pads itself and the only one without a border; do not use it for anything that sits in a grid.",
      },
    },
  },
  render: () => (
    <Card variant="setup" className="mx-auto max-w-[480px] gap-4">
      <h2 className="text-[20px] leading-7 font-title text-ink">Add your voice</h2>
      <p className="text-[14px] leading-5 text-ink-secondary">
        Record a short clip so your twin sounds like you, or pick a voice from the library.
      </p>
      <Button variant="secondary" fullWidth>
        Record your voice
      </Button>
      <Button variant="secondary" fullWidth>
        Select voice
      </Button>
    </Card>
  ),
};
