/** Scrape the Twin agent detail page (the first card in v3 -> agent-detail.json) and every agent incl. "Olga's twin" -> agent-details.json, by id. Read only. */
import { createRequire } from "module";
import fs from "node:fs";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
await p.goto("http://localhost:8791/v3/index.html?app=1", { waitUntil: "domcontentloaded" });
await p.waitForTimeout(1500);
const IDS = ["offplan-process", "listing-pitch", "fee-negotiation", "cold-calling", "investor-yield", "deposit-handover", "olga-twin"];
const scrape = () => p.evaluate(() => {
  const t = (e) => (e ? e.textContent.trim() : "");
  const q = (s, r = document) => r.querySelector(s);
  const qa = (s, r = document) => [...r.querySelectorAll(s)];
  const svgOf = (e) => (e && e.querySelector("svg") ? e.querySelector("svg").outerHTML : "");
  return {
    backSvg: svgOf(q(".create-bar-back")), back: t(q(".create-bar-back")),
    range: t(q(".bot-range .home-ask-mode span")), rangeSvg: svgOf(q(".bot-range .home-ask-mode")),
    calibrate: t(q(".create-bar-end .btn--strong")), calibrateSvg: svgOf(q(".create-bar-end .btn--strong")), moreSvg: svgOf(q(".create-bar-end .rp-row-more")),
    title: t(q(".rp-detail .page-title")), kicker1: t(qa(".rp-detail-kicker")[0]), scenario: t(q(".rp-detail-scenario")), kicker2: t(qa(".rp-detail-kicker")[1]),
    bf: { svg: svgOf(q(".bf-ico")), name: t(q(".bf-name")), viewAll: t(q(".bf-viewall")), viewAllSvg: svgOf(q(".bf-viewall")) },
    credit: { pct: t(q(".rp-credit-ring span")), used: parseFloat(q(".rp-credit-ring").style.getPropertyValue("--used")), kicker: t(q(".rp-credit-text .overline")), value: t(q(".rp-detail-credit-value").childNodes[0]), muted: t(q(".rp-detail-credit-value .an-muted")), note: t(q(".credit-row-note")) },
    reportTitle: t(q(".rp-analytics-title")),
    stats: qa(".rp-detail-stats .rp-stat").map((s) => ({ cls: s.className.match(/rp-stat--(\w+)/g).join(" "), label: t(q(".overline", s)), value: t(q(".rp-detail-stat", s).childNodes[0]), muted: t(q(".rp-detail-stat .an-muted", s)), view: t(q(".rp-stat-view", s)), viewSvg: svgOf(q(".rp-stat-view", s)) })),
    weeksTitle: t(qa(".rp-analytics-title")[1]), chart: q(".rp-report svg").outerHTML,
    reports: qa(".rp-report-list li").map((li) => ({ label: t(li.children[0]), value: t(li.children[1]), link: !!q(".bot-asked-link", li), svg: svgOf(li) })),
    qTitle: t(qa(".rp-analytics-title")[2]), questions: qa(".rp-most-asked .bot-asked li").map((li) => ({ q: t(li.children[0]), btn: t(li.children[1]), svg: svgOf(li.children[1]) })),
    tabs: qa(".bot-seg button").map((b) => ({ label: t(b), on: b.getAttribute("aria-pressed") === "true" })),
    cals: qa(".bot-cal-list .cal-row").map((r) => ({ title: t(q(".cal-title", r)), meta: t(q(".cal-meta", r)), svg: svgOf(r) })),
  };
});
const all = {};
for (const id of IDS) {
  await p.click(id === "olga-twin" ? ".twin-all" : `.rp-grid .rp-card[data-id="${id}"]`);
  await p.waitForTimeout(700);
  all[id] = await scrape();
  await p.click('[data-action="bot-detail-back"]');
  await p.waitForTimeout(500);
}
const d = all["offplan-process"];
fs.writeFileSync("prototype-build/src/data/agent-detail.json", JSON.stringify(d, null, 1));
fs.writeFileSync("prototype-build/src/data/agent-details.json", JSON.stringify(all, null, 1));
console.log(Object.keys(d).join(","), d.stats.length, d.questions.length, d.cals.length);
await b.close();
