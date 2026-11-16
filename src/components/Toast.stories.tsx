"use client";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ToastProvider, PROTOTYPE_TOAST_TITLES, useToast, type ToastKind } from "./Toast";
import { Button } from "./Button";

const meta = {
  title: "Foundations/Toast",
  component: ToastProvider,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "To the V3 prototype (decided 16 Nov 2026): a card tinted by its kind with a 36px coloured disc, a timer bar that drains over its life (4.5s, or 6.5s for error and warning), one toast at a time. A toast CONFIRMS something that already happened; an error that needs a decision goes in an alert. `role=\"status\"`, or `role=\"alert\"` for error and warning. The timer pauses on hover and focus. Mount one `<ToastProvider>` at the app root and call `useToast().toast(message, { type })`. Titles and the dismiss label are props (`titles`, `labels`) and default to neutral words; `inferKind` makes the kind follow the message, as in the prototype, and `PROTOTYPE_TOAST_TITLES` holds its titles. The viewport stays above, and clickable inside, an open modal dialog.",
      },
    },
  },
  decorators: [(Story) => <ToastProvider><Story /></ToastProvider>],
} satisfies Meta<typeof ToastProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

const samples: Record<ToastKind, string> = {
  success: "Message text for a success.",
  info: "Message text for information.",
  warning: "Message text for a warning.",
  error: "Message text for an error.",
};

function Buttons() {
  const { toast } = useToast();
  return (
    <div className="flex flex-wrap gap-2">
      {(Object.keys(samples) as ToastKind[]).map((k) => (
        <Button key={k} variant="secondary" onClick={() => toast(samples[k], { type: k })}>
          {k}
        </Button>
      ))}
    </div>
  );
}

export const AllKinds: Story = { args: { children: null }, render: () => <Buttons /> };

export const InferredKind: Story = {
  args: { children: null },
  decorators: [(Story) => <ToastProvider inferKind titles={PROTOTYPE_TOAST_TITLES}><Story /></ToastProvider>],
  parameters: { docs: { description: { story: "With `inferKind` on (and `titles` set to the prototype's), the kind and title are read from the words when no type is given, as the V3 prototype does. Off by default: it is product behaviour, not a component default." } } },
  render: function Render() {
    const { toast } = useToast();
    return (
      <div className="flex flex-wrap gap-2">
        {["Item saved", "Pick an item first.", "Working on it…", "That didn’t work."].map((m) => (
          <Button key={m} variant="secondary" onClick={() => toast(m)}>{m}</Button>
        ))}
      </div>
    );
  },
};

export const Replacing: Story = {
  args: { children: null },
  parameters: { docs: { description: { story: "One at a time: a new toast replaces the one on screen." } } },
  render: function Render() {
    const { toast } = useToast();
    return (
      <Button
        onClick={() => {
          toast("First message", { type: "success" });
          setTimeout(() => toast("Second message", { type: "success" }), 250);
          setTimeout(() => toast("Third message", { type: "warning" }), 500);
        }}
      >
        Fire three
      </Button>
    );
  },
};
