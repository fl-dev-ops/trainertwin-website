"use client";
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { UsageCard, ActivityRow } from "./Usage";
import { Button } from "./Button";
import { SidePanel } from "./Modal";

const meta = {
  title: "Product/Usage",
  component: UsageCard,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Copied from the V3 prototype on request (16 Nov 2026). **UsageCard**: \"Remaining credits\", a 40px number with its unit, a primary action, a 6px real-progress bar and a note; no bar inside an agent card, this is the one place it appears. **ActivityRow**: one line of the Activity log, a coloured dot by kind (call, tried, credit), the name, the time and the amount. **Story copy is example copy** from the V3 prototype, to show realistic content; it is not a default, and none of it is baked into the component.",
      },
    },
  },
  args: { label: "Remaining credits", value: 618, unit: "min", percent: 62, barLabel: "618 of 1000", note: "Each new learner gets 30 min; give more on their page (up to 360 min each). 90 min (Auto credited) expire 10 Nov." },
} satisfies Meta<typeof UsageCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Credits: Story = { render: (a) => <div className="w-[640px] max-w-full"><UsageCard {...a} action={<Button size="sm" variant="strong">Buy credits</Button>} /></div> };

export const ActivityLog: Story = {
  args: { label: "x", value: 0, percent: 0 },
  parameters: { docs: { description: { story: "The Activity log inside a SidePanel." } } },
  render: function Render() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="secondary" size="sm" onClick={() => setOpen(true)}>Activity log</Button>
        <SidePanel open={open} onClose={() => setOpen(false)} title="Activity log" description="Every credit given and every call in the period.">
          <ul className="m-0 p-0">
            <ActivityRow kind="call" name="Hassan Ali · The off-plan sales process" when="Today, 10:40 am" amount="−12 min" />
            <ActivityRow kind="tried" name="Leo Martin · free trial" when="Yesterday, 4:20 pm" amount="−10 min" />
            <ActivityRow kind="credit" name="Credits added · Auto credited" when="12 Nov, 9:00 am" amount="+90 min" />
          </ul>
        </SidePanel>
      </>
    );
  },
};

export const Rows: Story = {
  args: { label: "x", value: 0, percent: 0 },
  render: () => (
    <ul className="m-0 w-[420px] max-w-full p-0">
      <ActivityRow kind="call" name="Hassan Ali · The off-plan sales process" when="Today, 10:40 am" amount="−12 min" />
      <ActivityRow kind="tried" name="Leo Martin · free trial" when="Yesterday, 4:20 pm" amount="−10 min" />
      <ActivityRow kind="credit" name="Credits added · Auto credited" when="12 Nov, 9:00 am" amount="+90 min" />
    </ul>
  ),
};
