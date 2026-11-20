"use client";
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FlowNode, FlowSource, FlowStartNode, FlowEditRow } from "./FlowNode";
import { Checkbox } from "./Checkbox";
import { CheckIcon, XIcon, EyeIcon } from "./UiIcons";

const meta = {
  title: "Product/FlowNode",
  component: FlowNode,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "The cards on the Twin's-brain canvas, copied from the V3 prototype on request (16 Nov 2026); they had no spec, so change them as needed. A card (radius 16, `--tt-shadow-node`) with a kicker, a title and an optional note, source lines inside it, and an `on` state that firms the border and lifts it. `FlowStartNode` is the dark pill that starts a flow; `FlowEditRow` is a row inside an editing node, with a dashed add style. Placement on the canvas, and the connecting lines, are page layout. **Story copy is example copy** from the V3 prototype, to show realistic content; it is not a default, and none of it is baked into the component.",
      },
    },
  },
  args: { title: "Training style" },
} satisfies Meta<typeof FlowNode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { kicker: "Training style", title: "How your twin teaches", note: "Based on 14 do’s and don’ts." }, render: (a) => <div className="w-[280px]"><FlowNode {...a} /></div> };

export const WithSources: Story = {
  render: function Render() {
    const [on, setOn] = useState(false);
    return (
      <div className="w-[280px]">
        <FlowNode kicker="Training style" title="Your rules" on={on} onSelect={() => setOn(!on)}>
          <FlowSource icon={<CheckIcon />}>6 do’s</FlowSource>
          <FlowSource icon={<XIcon />}>4 don’ts</FlowSource>
        </FlowNode>
      </div>
    );
  },
};

export const Start: Story = { render: () => <FlowStartNode icon={<EyeIcon />}>Start here</FlowStartNode> };

export const EditRows: Story = {
  render: () => (
    <div className="flex w-[300px] flex-col gap-2">
      <FlowEditRow title="Website" sub="14 pages" leading={<Checkbox label="Website" labelHidden defaultChecked />} />
      <FlowEditRow title="LinkedIn" sub="36 posts" leading={<Checkbox label="LinkedIn" labelHidden />} />
      <FlowEditRow add title="Add new" />
    </div>
  ),
};
