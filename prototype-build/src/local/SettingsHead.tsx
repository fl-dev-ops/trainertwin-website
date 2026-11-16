import type { ReactNode } from "react";

/**
 * NOT IN STORYBOOK YET. The header of the Usage / Billing / Settings pages (the prototype's `.set-head`): a 18/24
 * title with the 28px icon mark, a 14/20 subtitle, and one tool on the right. Close to PageHeader with a subtitle;
 * a candidate to fold into it.
 */
export function SettingsHead({ title, icon, sub, tool }: { title: string; icon: ReactNode; sub?: string; tool?: ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <h1 className="m-0 flex items-center gap-3 font-ui text-[18px] leading-6 font-title text-ink">
          <span aria-hidden="true" className="grid h-7 w-7 flex-none place-items-center rounded-sm text-ink-secondary [&>svg]:h-[18px] [&>svg]:w-[18px]">{icon}</span>
          {title}
        </h1>
        {sub ? <p className="mt-1 mb-0 font-ui text-[14px] leading-5 text-ink-secondary">{sub}</p> : null}
      </div>
      {tool}
    </div>
  );
}
