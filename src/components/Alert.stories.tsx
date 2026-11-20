"use client";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Alert } from "./Alert";
import { Link } from "./Link";
import { Button } from "./Button";

const meta = {
  title: "Foundations/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "An inline alert sits in the flow next to what it describes, for anything the user must act on. A toast confirms something already done and can be missed; an error that needs a decision belongs here. Severity rides on the icon, the fill and the words, never colour alone. The status borders are deliberately under 3:1 (a recorded exception). `danger` and `caution` announce with `role=\"alert\"`, `info` and `success` with `role=\"status\"`.",
      },
    },
  },
  args: { tone: "info", children: "Message text that explains the alert." },
  decorators: [(Story) => <div className="w-[520px] max-w-full"><Story /></div>],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {};
export const Success: Story = { args: { tone: "success", title: "Title", children: "Message text." } };
export const Caution: Story = { args: { tone: "caution", title: "Title", children: "Message text.", action: <Link href="#">Action</Link> } };
export const Danger: Story = {
  args: { tone: "danger", title: "Title", children: "Message text that says what to do.", action: <Button size="sm" variant="secondary">Action</Button> },
};
export const Dismissible: Story = { args: { tone: "info", onDismiss: () => {} } };
export const AllTones: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Alert tone="info">Info: a tip or neutral context.</Alert>
      <Alert tone="success">Success: something worked.</Alert>
      <Alert tone="caution">Caution: needs a look soon.</Alert>
      <Alert tone="danger">Danger: something failed and needs you.</Alert>
    </div>
  ),
};
