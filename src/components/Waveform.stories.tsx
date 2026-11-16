import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Waveform } from "./Waveform";
import { Button } from "./Button";

const clip = [0.2, 0.35, 0.6, 0.45, 0.8, 0.5, 0.3, 0.7, 0.9, 0.55, 0.4, 0.65, 0.85, 0.5, 0.35, 0.25, 0.5, 0.75, 0.6, 0.4, 0.3, 0.55, 0.7, 0.45];

const meta = {
  title: "Foundations/Waveform",
  component: Waveform,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A row of rounded bars, 32px tall with a 3px gap. `--tt-live` while recording (the live-recording colour, used for nothing else); neutral ink for a recorded clip. `live` bounces the bars on a staggered 900ms loop with no data needed (static under reduced motion); `levels` draws a fixed shape from 0 to 1 amplitudes. Decorative by default: the words \"Recording · 0:12\" beside it carry the meaning.",
      },
    },
  },
  argTypes: { tone: { control: "inline-radio", options: ["live", "neutral"] } },
  args: { tone: "live" },
} satisfies Meta<typeof Waveform>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Live: Story = { args: { live: true } };
export const Recorded: Story = { args: { levels: clip, tone: "neutral" } };
export const RecordingCard: Story = {
  parameters: { docs: { description: { story: "The sign-in flow's Record step: timer, waveform, a full-width primary Stop." } } },
  render: () => (
    <div className="flex w-[420px] max-w-full flex-col gap-4 rounded-xl bg-surface p-8 shadow-e2">
      <p className="m-0 font-ui text-[13px] leading-[23px] text-ink-secondary">Recording · 0:12</p>
      <Waveform live bars={48} />
      <Button className="w-full">Stop</Button>
    </div>
  ),
};
