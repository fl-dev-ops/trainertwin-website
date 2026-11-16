import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ChatBubble, ChatThread } from "./ChatBubble";

const meta = {
  title: "Product/ChatBubble",
  component: ChatBubble,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Copied from the V3 prototype on request (16 Nov 2026). Three surfaces draw a message three ways: **message** (a compact assistant chat; the twin is `--tt-fill-soft` on the left, \"you\" is the dark CTA on the right), **transcript** (a line in a recorded session, a card with elevation-1 and a bold name), and **call** (the live call: radius 20, the trainer on the surface with an inset ring, and an `ask` variant tinted caution for a question the twin is raising). The Session Shell proper, one transcript across voice, text and video, is still to be specced. **Story copy is example copy** from the V3 prototype, to show realistic content; it is not a default, and none of it is baked into the component.",
      },
    },
  },
  args: { children: "Can you send me some options?" },
} satisfies Meta<typeof ChatBubble>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Message: Story = {
  render: () => (
    <ChatThread className="w-[380px] max-w-full">
      <ChatBubble side="twin">Hi, I’m Olga’s twin. What are you working on?</ChatBubble>
      <ChatBubble side="you">A structure for my first client call.</ChatBubble>
    </ChatThread>
  ),
};

export const Transcript: Story = {
  render: () => (
    <ChatThread well className="w-[460px] max-w-full">
      <ChatBubble variant="transcript" side="twin" name="Ravi">Can you send me some options on WhatsApp?</ChatBubble>
      <ChatBubble variant="transcript" side="you" name="Learner">Of course. Do you prefer a villa or an apartment?</ChatBubble>
    </ChatThread>
  ),
};

export const Call: Story = {
  render: () => (
    <ChatThread className="w-[420px] max-w-full">
      <ChatBubble variant="call" side="twin">Tell me about the off-plan payment plan.</ChatBubble>
      <ChatBubble variant="call" side="you">It’s 60/40, with the first instalment on signing.</ChatBubble>
      <ChatBubble variant="call" side="twin" ask>Should I mention the handover date, or wait for them to ask?</ChatBubble>
    </ChatThread>
  ),
};
