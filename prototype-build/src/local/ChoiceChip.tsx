import type { ReactNode } from "react";

/**
 * NOT IN STORYBOOK YET. A toggle pill for picking one or more short options (V3 `.role-trait`): a soft-fill pill that
 * becomes a white pill with a 1.5px orange ring when pressed. Used for "Why does this feel off?" reasons and the roleplay
 * trait pickers. A candidate for a Storybook `ChoiceChip` (`aria-pressed`, group wrapper with `role="group"`).
 */
export function ChoiceChip({ pressed, onClick, children }: { pressed: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className="cursor-pointer rounded-full bg-fill-soft px-4 py-[6px] font-ui text-[13px] leading-5 font-label text-ink-secondary hover:bg-fill-soft-hover hover:text-ink aria-pressed:bg-surface aria-pressed:text-ink aria-pressed:shadow-[inset_0_0_0_1.5px_var(--tt-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      {children}
    </button>
  );
}
