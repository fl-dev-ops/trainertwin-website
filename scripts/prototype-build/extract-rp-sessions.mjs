/** Scrape the 27 Roleplay sessions (list rows + every report) from v3, read only, into prototype-build/src/data/rp-sessions.json. */
import { createRequire } from "module";
import fs from "node:fs";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
await p.goto("http://localhost:8791/v3/index.html?app=1", { waitUntil: "domcontentloaded" });
await p.waitForTimeout(1500);
await p.click('.nav-item[data-id="sessions"]');
await p.waitForTimeout(600);
const n = await p.locator(".ts-rowbtn").count();
const out = [];
for (let i = 0; i < n; i++) {
  const row = await p.evaluate((i) => {
    const t = (e) => (e ? e.textContent.trim().replace(/\s+/g, " ") : "");
    const e = document.querySelectorAll(".ts-rowbtn")[i];
    return { role: e.dataset.role, id: e.dataset.id, name: t(e.querySelector("b")), sub: t(e.querySelector(".an-muted")), tone: Number((e.querySelector(".rp-avatar").className.match(/rp-avatar--(\d)/) || [0, 1])[1]), scenario: t(e.querySelector(".rs-col-scn")), score: t(e.querySelector(".rs-score")), weak: t(e.querySelector(".rs-col-weak")), stars: e.querySelector(".ts-stars") ? Number(e.querySelector(".ts-stars").getAttribute("aria-label")[0]) : null, helpLabel: t(e.querySelector(".ts-help-label")), issue: t(e.querySelector(".ts-issue")) };
  }, i);
  await p.click(`.ts-rowbtn >> nth=${i}`);
  await p.waitForTimeout(250);
  const rep = await p.evaluate(() => {
    const t = (e) => (e ? e.textContent.trim().replace(/\s+/g, " ") : "");
    const q = (s, r = document) => r.querySelector(s);
    const qa = (s, r = document) => [...r.querySelectorAll(s)];
    const fbs = q(".sr-fb-score");
    return {
      back: t(q(".create-bar-back")), name: t(q(".sr-name")), subs: qa(".sr-sub").map(t),
      client: { face: q(".sr-client img") ? q(".sr-client img").getAttribute("src") : "", name: t(q(".sr-client b")) },
      video: q(".sr-rec video") ? q(".sr-rec video").getAttribute("src") : "", caption: t(q(".sr-rec figcaption")),
      fb: { empty: t(q(".sr-fb-empty")), stars: q(".sr-fb-score .ts-stars") ? Number(q(".sr-fb-score .ts-stars").getAttribute("aria-label")[0]) : null, num: t(q(".sr-fb-score b")), rest: t(q(".sr-fb-score .an-muted")), quote: t(q(".sr-fb-quote")) },
      issues: qa(".sr-fb-issues li").map((li) => ({ badge: t(q(".badge", li)), note: t(q(".sr-fb-note", li)) })),
      rubric: { total: t(q(".sr-rubric-total")), lines: qa(".sr-rubric li").map((li) => ({ name: t(q(".sr-rubric-name", li)), pts: t(q(".sr-rubric-pts", li)), pct: parseInt(q(".sr-rubric-bar span", li).style.width, 10) })) },
      goals: qa(".sr-goals li").map((li) => ({ text: t(li.children[0]), status: t(q(".badge", li)) })),
      notes: qa(".sr-notes").map((c) => ({ h: t(q("h2", c)), items: qa("li", c).map((li) => ({ title: t(q(".rr-note-title", li)), text: t(q(".rr-note-text", li)), jump: t(q(".rr-jump", li)), at: q(".rr-jump", li) ? Number(q(".rr-jump", li).dataset.t) : null })) })),
      lines: qa(".sr-call .rp-chat-line").map((l) => ({ who: t(q("b", l)), twin: l.classList.contains("rp-chat-line--twin"), text: t(q("p", l)) })),
    };
  });
  out.push({ ...row, report: rep });
  await p.click('[data-action="session-report-back"]');
  await p.waitForTimeout(250);
}
fs.writeFileSync("prototype-build/src/data/rp-sessions.json", JSON.stringify(out, null, 1));
console.log(out.length, JSON.stringify(out[0]).slice(0, 1500));
console.log("roles", [...new Set(out.map((r) => r.role + ":" + r.report.back))].join(" | "));
await b.close();
