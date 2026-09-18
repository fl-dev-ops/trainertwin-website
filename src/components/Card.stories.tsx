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
          "The default container — almost every product screen is cards in a grid. Padding lives on the sections rather than the Card, so a card can hold a full-bleed image or an edge-to-edge table without fighting a padding it never asked for. Radius is 12, one step above the 8 used by the controls inside it.",
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
        <span className="font-mono text-[11px] text-ink-tertiary">14 pages</span>
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
        <Button variant="strong" size="sm">
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
              <span className="font-mono text-[10px] uppercase tracking-wider text-ink-tertiary">
                {kind}
              </span>
              <span className="font-mono text-[11px] text-ink-tertiary">{meta_}</span>
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
        <span className="font-mono text-[11px] text-primary-ink">full-bleed media</span>
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
