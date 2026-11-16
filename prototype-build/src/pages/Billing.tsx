import { Button } from "@components/Button";
import { Card } from "@components/Card";
import { Badge } from "@components/Badge";
import { Menu, type MenuEntry } from "@components/Menu";
import { Icon } from "../Svg";
import { SettingsHead } from "../local/SettingsHead";
import data from "../data/billing.json";

const html = (svg: string) => <span aria-hidden="true" className="contents" dangerouslySetInnerHTML={{ __html: svg }} />;
const rich = (h: string) => <span dangerouslySetInnerHTML={{ __html: h.replace(/class="bl-price"/g, 'style="font-weight:600;color:var(--tt-text-primary)"') }} />;
const noop = () => {};
const invActions: MenuEntry[] = [
  { label: "Download invoice", onSelect: noop },
  { label: "View details", onSelect: noop },
];
const title = "m-0 flex items-center gap-2 font-ui text-[15px] leading-[22px] font-title text-ink";
const sub = "mt-[2px] mb-0 font-ui text-[14px] leading-5 text-ink-secondary";
const icoBox = "grid h-9 w-9 flex-none place-items-center rounded-[10px] bg-fill-soft text-ink-secondary [&>span>svg]:h-5 [&>span>svg]:w-5";

export function Billing() {
  return (
    <div className="mx-auto max-w-[1000px] px-16 pt-5 pb-8">
      <SettingsHead
        title={data.title}
        icon={<Icon name="billing" />}
        sub={data.sub}
        tool={
          <Button variant="secondary" className="flex-none [&_svg]:h-4 [&_svg]:w-4">
            {html(data.toolSvg)}
            {data.tool}
          </Button>
        }
      />
      <div className="mt-[60px] grid grid-cols-1 items-stretch gap-8">
        <div className="flex min-w-0 flex-col">
          <div className="flex min-h-8 items-center justify-between gap-4">
            <h2 className="m-0 font-ui text-[18px] leading-6 font-title text-ink">{data.planH}</h2>
          </div>
          <Card className="mt-3 flex flex-1 flex-col gap-4 px-5 py-4 shadow-none!">
            <div>
              <p className={title}>
                {data.planTitle}
                <Badge tone="success" className="gap-1 pl-2 [&>span>svg]:h-[14px] [&>span>svg]:w-[14px]">{html(data.activeSvg)}{data.active}</Badge>
              </p>
              <p className={sub}>{rich(data.planSubHtml)}</p>
            </div>
            <div className="mt-3 flex items-start justify-between gap-4 rounded-md bg-surface-sunken p-4">
              <div className="self-stretch">
                <p className={title}>
                  {data.addonTitle}
                  <Badge tone="caution" className="ml-auto gap-1 border border-[color-mix(in_srgb,var(--tt-caution)_40%,transparent)] py-[3px] pr-[10px] pl-2 [&_svg]:h-[14px] [&_svg]:w-[14px]">
                    {html(data.crown)}
                    {data.addonBadge}
                  </Badge>
                </p>
                <p className={`${sub} pt-2`}>{rich(data.addonSubHtml)}</p>
              </div>
              <div className="flex flex-none items-center gap-3 self-start">
                <Button variant="secondary" size="sm">{data.addonButtons[0]}</Button>
                <Button size="sm">{data.addonButtons[1]}</Button>
              </div>
            </div>
          </Card>
        </div>
        <div className="flex min-w-0 flex-col">
          <div className="flex min-h-8 items-center justify-between gap-4">
            <h2 className="m-0 font-ui text-[18px] leading-6 font-title text-ink">{data.infoH}</h2>
            <Button variant="ghost" size="sm">{data.infoEdit}</Button>
          </div>
          <Card className="mt-3 flex flex-1 flex-col p-0 shadow-none!">
            {data.info.map((r, i) => (
              <div key={r.title} className={`flex items-center gap-3 px-5 py-[14px] ${i ? "border-t border-line" : ""}`}>
                <span className={icoBox}>{html(r.svg)}</span>
                <span className="min-w-0">
                  <p className={title}>{r.title}</p>
                  <p className={`${sub} [overflow-wrap:anywhere]`}>{r.sub}</p>
                </span>
              </div>
            ))}
          </Card>
        </div>
      </div>
      <h2 className="mt-8 mb-0 font-ui text-[18px] leading-6 font-title text-ink">{data.invH}</h2>
      <Card className="mt-3 flex flex-col overflow-visible! p-0 shadow-none!">
        {data.invoices.map((r, i) => (
          <div key={i} className={`flex items-center gap-4 px-5 py-[14px] ${i ? "border-t border-line" : ""}`}>
            <span className={icoBox}>{html(r.svg)}</span>
            <span className="min-w-0 flex-1 font-ui text-[15px]">{r.name}</span>
            <span className="font-ui text-ink-secondary">{r.date}</span>
            <Badge>{r.status}</Badge>
            <b className="min-w-20 text-right font-ui font-title">{r.amt}</b>
            <span className="font-ui text-ink-secondary">{r.credits}</span>
            <Menu label="Invoice actions" items={invActions} />
          </div>
        ))}
      </Card>
    </div>
  );
}
