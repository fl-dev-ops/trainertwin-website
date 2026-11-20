import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AgentCard } from "./AgentCard";

const learners = [
  { name: "Priya Raman", src: "/tt/avatar-learner.png" },
  { name: "Marcus Lee" },
  { name: "Ana Souza" },
  { name: "Tom Okafor" },
  { name: "Wen Li" },
];

const meta = {
  title: "Product/AgentCard",
  component: AgentCard,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "The Twin agent card and the roleplay card (D117): one shell, 288 × 338, a 168px pastel picture holding a white quote bubble that tilts toward the pointer (mouse and pen only; reduced motion keeps 30% of the depth and drops the transitions). The whole card opens the item through a stretched link on the title, so the ⋮ button is a separate control with no nested hit areas. A card never picks its own gradient: it takes `--tt-art-<index % 10>` from its position. Every size, colour and motion value is a token (`--tt-size-card-*`, `--tt-art-*`, `--tt-tilt-*`, `--tt-duration-follow/settle`). **Story copy is example copy** from the V3 prototype, to show realistic content; it is not a default, and none of it is baked into the component.",
      },
    },
  },
  argTypes: {
    kind: { control: "inline-radio", options: ["twin", "roleplay"] },
    index: { control: { type: "number", min: 0, max: 9 } },
    forceState: { control: "inline-radio", options: [undefined, "hover", "focus"] },
  },
  args: {
    kind: "roleplay",
    index: 1,
    title: "Ravi: first conversation",
    description:
      "First-time investor · Oman. Lead from Instagram ad about passive income.",
    quote: "Can you send me some options on WhatsApp?",
    client: { name: "Ravi", src: "/tt/avatar-learner.png" },
    learners,
    onOpen: () => {},
    onMore: () => {},
  },
} satisfies Meta<typeof AgentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Roleplay: Story = {};

export const Twin: Story = {
  args: {
    kind: "twin",
    index: 0,
    title: "The off-plan sales process",
    description:
      "First call, educational Zoom and presentation meeting. Every stage books the next one.",
    quote: "I need a structure, step by step.",
    client: undefined,
    faceVideoSrc: undefined,
  },
  parameters: {
    docs: {
      description: {
        story:
          "In the product the face is a 40px looping, muted video of the twin listening (`faceVideoSrc`). Omitted here so the story needs no media file.",
      },
    },
  },
};

export const States: Story = {
  parameters: {
    docs: {
      description: {
        story: "Rest, hover (lifts to elevation-2), and keyboard focus (2px orange ring, 2px offset).",
      },
    },
  },
  render: (args) => (
    <div className="flex flex-wrap gap-4">
      <AgentCard {...args} />
      <AgentCard {...args} forceState="hover" />
      <AgentCard {...args} forceState="focus" />
    </div>
  ),
};

export const Grid: Story = {
  parameters: {
    docs: {
      description: {
        story: "Three columns at 16 gap on the library page; two at ≤1100, one at ≤767.",
      },
    },
  },
  render: (args) => (
    <div className="grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(288px,1fr))]">
      {["Ravi: first conversation", "Faisal: first conversation", "Meera: price objection"].map((t, i) => (
        <AgentCard key={t} {...args} index={i + 1} title={t} className="w-auto" client={{ name: t.split(":")[0] }} />
      ))}
    </div>
  ),
};

export const WithMenu: Story = {
  args: {
    actions: [
      { label: "Item one", onSelect: () => {} },
      { label: "Item two", onSelect: () => {} },
      "divider",
      { label: "Item three", danger: true, onSelect: () => {} },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "Pass `actions` and the card renders its own ⋮ `Menu` (named \"Actions for <title>\") instead of calling `onMore`. Open it and use the arrow keys.",
      },
    },
  },
};
