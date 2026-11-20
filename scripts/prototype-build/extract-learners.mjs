/** Scrape every Twin user's learner page (both tabs) from v3, read only, into prototype-build/src/data/learners.json. */
import { createRequire } from "module";
import fs from "node:fs";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
await p.goto("http://localhost:8791/v3/index.html?app=1", { waitUntil: "domcontentloaded" });
await p.waitForTimeout(1500);
await p.click('.nav-item[data-id="twinusers"]');
await p.waitForTimeout(500);
const n = await p.locator('[data-action="learner-open"]').count();
const out = [];
for (let i = 0; i < n; i++) {
  await p.click(`[data-action="learner-open"] >> nth=${i}`);
  await p.waitForTimeout(250);
  const d = await p.evaluate(() => {
    const t = (e) => (e ? e.textContent.trim().replace(/\s+/g, " ") : "");
    const q = (s, r = document) => r.querySelector(s);
    const qa = (s, r = document) => [...r.querySelectorAll(s)];
    return {
      name: t(q(".ld-name")), email: t(q(".ld-email")), tone: Number((q(".ld-avatar").className.match(/rp-avatar--(\d)/) || [0, 1])[1]),
      left: t(q(".ld-left b")), used: t(q(".ld-used")), barPct: parseFloat(q(".lr-bar span").style.width), high: q(".lr-bar").classList.contains("is-high"),
      arrow: q(".ld-go svg") ? q(".ld-go svg").outerHTML : "",
      sessions: qa('.us-row--sessions[data-action="learner-session"]').map((r) => ({ when: t(q(".set-row-sub", r)), chips: qa(".ld-chip", r).map(t), mins: t(q(".tabular", r)) })),
    };
  });
  await p.click('[data-action="learner-tab"][data-id="credits"]');
  await p.waitForTimeout(150);
  d.credits = await p.evaluate(() => [...document.querySelectorAll('.us-row--credits[role="row"]:not(.us-row--head)')].map((r) => [...r.querySelectorAll('[role="cell"]')].map((c) => c.textContent.trim().replace(/\s+/g, " "))));
  out.push(d);
  await p.click('[data-action="learner-back"]');
  await p.waitForTimeout(200);
}
fs.writeFileSync("prototype-build/src/data/learners.json", JSON.stringify(out, null, 1));
console.log(out.length, JSON.stringify(out[0]).slice(0, 700));
console.log(out.map((o) => `${o.name}: left ${o.left}, ${o.used}, bar ${o.barPct}, sessions ${o.sessions.length}`).join("\n"));
await b.close();
