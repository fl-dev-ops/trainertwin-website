/** Scrape every Twin session report (click each row in v3, read only) into prototype-build/src/data/twin-session-detail.json. */
import { createRequire } from "module";
import fs from "node:fs";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
await p.goto("http://localhost:8791/v3/index.html?app=1", { waitUntil: "domcontentloaded" });
await p.waitForTimeout(1500);
await p.click('.nav-item[data-id="calibrations"]');
await p.waitForTimeout(600);
const n = await p.locator(".ts-rowbtn").count();
const out = [];
for (let i = 0; i < n; i++) {
  await p.click(`.ts-rowbtn >> nth=${i}`);
  await p.waitForTimeout(250);
  out.push(await p.evaluate(() => {
    const t = (e) => (e ? e.textContent.trim() : "");
    const q = (s, r = document) => r.querySelector(s);
    const qa = (s, r = document) => [...r.querySelectorAll(s)];
    const svg = (e) => (e && e.querySelector("svg") ? e.querySelector("svg").outerHTML : "");
    return {
      back: t(q(".create-bar-back")), name: t(q(".sr-name")), tone: Number((q(".sr-avatar").className.match(/rp-avatar--(\d)/) || [0, 1])[1]),
      subs: qa(".sr-sub").map(t), video: q(".sr-rec video") ? q(".sr-rec video").getAttribute("src") : "", caption: t(q(".sr-rec figcaption")),
      fb: { stars: q(".sr-fb-score .ts-stars") ? Number(q(".sr-fb-score .ts-stars").getAttribute("aria-label")[0]) : null, tone: q(".sr-fb-score .ts-stars") ? q(".sr-fb-score .ts-stars").className.replace("ts-stars", "").trim() : "", num: t(q(".sr-fb-score b")), rest: t(q(".sr-fb-score .an-muted")), quote: t(q(".sr-fb-quote")) },
      issues: qa(".sr-fb-issues li").map((li) => ({ badge: t(q(".badge", li)), note: t(q(".sr-fb-note", li)) })),
      topics: qa(".sr-topics .rps-tag").map(t),
      lines: qa(".sr-call .rp-chat-line").map((l) => ({ who: t(q("b", l)), twin: l.classList.contains("rp-chat-line--twin"), text: t(q("p", l)) })),
      rateSvgs: qa(".talk-feedback .btn").slice(0, 2).map(svg),
    };
  }));
  await p.click('[data-action="twin-session-back"]');
  await p.waitForTimeout(250);
}
fs.writeFileSync("prototype-build/src/data/twin-session-detail.json", JSON.stringify(out, null, 1));
console.log(out.length, out[0].lines.length, out[1].issues.length, out[2].topics);
await b.close();
