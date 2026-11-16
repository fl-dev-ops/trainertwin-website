import type { ReactNode } from "react";

/**
 * NOT IN STORYBOOK YET. The header search (the prototype's `.lib-search`): a 36px pill with a 1px ring, a 16px
 * icon and a borderless input 148px wide. Storybook's `Input` is the labelled form field; this is the toolbar one.
 */
export function SearchField({ icon, placeholder, label, value, onChange }: { icon: ReactNode; placeholder: string; label: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="flex h-9 items-center gap-2 rounded-full bg-surface px-3 text-ink-tertiary shadow-[0_0_0_1px_var(--tt-border)] focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-primary">
      <span className="flex-none [&>svg]:h-4 [&>svg]:w-4" aria-hidden="true">{icon}</span>
      <input
        type="search"
        aria-label={label}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
        className="w-[148px] border-0 bg-transparent p-0 font-ui text-[14px] leading-5 text-ink outline-none placeholder:text-ink-muted"
      />
    </label>
  );
}
