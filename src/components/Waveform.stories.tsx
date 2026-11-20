import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Waveform } from "./Waveform";
import { Button } from "./Button";

const meta = {
  title: "Foundations/Waveform",
  component: Waveform,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The voice-recording wave, copied from the V3 prototype: the `react-animated-waves` canvas, 72px tall, three soft layers in an orange gradient (`--tt-primary`, #FF8A4C, `--tt-primary`), filling its container's width. `live` is the recording preset (amplitude 30, intensity 1, speed 1.4); off is the quiet idle swell (12, .35, .6). Decorative by default: the words \"Recording · 0:12\" beside it carry the meaning. Reduced motion is respected; the prototype ignores it.",
      },
    },
  },
  decorators: [(Story) => <div className="w-[420px] max-w-full"><Story /></div>],
  args: { live: false },
} satisfies Meta<typeof Waveform>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Idle: Story = {};
export const Live: Story = { args: { live: true } };
export const RecordingCard: Story = {
  decorators: [],
  parameters: { docs: { description: { story: "The Record step: timer line, the live wave, a full-width primary button." } } },
  render: () => (
    <div className="flex w-[420px] max-w-full flex-col gap-4 rounded-xl bg-surface p-8 shadow-e2">
      <p className="m-0 font-ui text-[13px] leading-[23px] text-ink-secondary">Recording · 0:12</p>
      <Waveform live />
      <Button className="w-full">Button</Button>
    </div>
  ),
};
