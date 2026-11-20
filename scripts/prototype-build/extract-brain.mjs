/** Scrape Twin's brain Questions / Issues pane icons and copy from v3 (read only) into prototype-build/src/data/brain-ui.json. */
import { createRequire } from "module";
import fs from "node:fs";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
await p.goto("http://localhost:8791/v3/index.html?app=1", { waitUntil: "domcontentloaded" });
await p.waitForTimeout(1500);
await p.click('.nav-item[data-id="knowledge"]');
await p.waitForTimeout(500);
const grab = () => p.evaluate(() => {
  const t = (e) => (e ? e.textContent.trim() : "");
  const qa = (s) => [...document.querySelectorAll(s)];
  const q = (s) => document.querySelector(s);
  const svg = (e) => (e && e.querySelector("svg") ? e.querySelector("svg").outerHTML : "");
  return {
    menu: qa(".brain-menu .inbox-menu-item").map((b) => ({ id: b.dataset.id, label: t(q(".brain-menu-label")) && t(b.querySelector(".brain-menu-label")), svg: svg(b.querySelector(".brain-menu-label")), dot: !!b.querySelector(".inbox-count") })),
    title: t(q(".inbox-h")), sub: t(q(".inbox-sub")),
    chips: qa(".bq-chip").map((c) => ({ label: t(c), svg: svg(c) })), searchSvg: svg(q(".bq-search-btn")), searchLabel: q(".bq-search-btn").getAttribute("aria-label"),
    head: qa(".bq-head-main span").map(t), delSvg: svg(q(".inbox-del")),
  };
});
const out = {};
for (const [k, sel] of [["questions", '.flow-tabs [data-id="questions"]'], ["issues", '.flow-tabs [data-id="reports"]']]) {
  await p.click(sel);
  await p.waitForTimeout(400);
  out[k] = await grab();
}
await p.click('.flow-tabs [data-id="reports"]');
await p.locator('.bq-item .inbox-del').first().click();
await p.waitForTimeout(300);
out.issueMenu = await p.evaluate(() => [...document.querySelectorAll(".twin-hero-ask-opt")].map((o) => ({ label: o.textContent.trim(), svg: o.querySelector("svg") ? o.querySelector("svg").outerHTML : "" })));
await p.click('[data-action="brain-iview"][data-id="resolved"]');
await p.waitForTimeout(300);
out.resolvedPane = await p.evaluate(() => ({ title: document.querySelector(".inbox-h").textContent.trim(), sub: document.querySelector(".inbox-sub").textContent.trim(), rows: [...document.querySelectorAll(".bq-item")].map((r) => r.textContent.replace(/\s+/g, " ").trim()) }));
await p.click('[data-action="brain-iview"][data-id="corrected"]');
await p.waitForTimeout(300);
out.correctedPane = await p.evaluate(() => ({ title: document.querySelector(".inbox-h").textContent.trim(), sub: document.querySelector(".inbox-sub").textContent.trim(), rows: [...document.querySelectorAll(".bq-item")].map((r) => r.textContent.replace(/\s+/g, " ").trim()) }));
await p.click('.flow-tabs [data-id="questions"]');
await p.click('[data-action="brain-qview"][data-id="history"]');
out.historyPane = await p.evaluate(() => ({ title: document.querySelector(".inbox-h").textContent.trim(), sub: document.querySelector(".inbox-sub").textContent.trim() }));
fs.writeFileSync("prototype-build/src/data/brain-ui.json", JSON.stringify(out, null, 1));
console.log(out.questions.menu.map((m) => m.label), out.issues.menu.map((m) => m.label), out.issueMenu.map((m) => m.label), out.resolvedPane.title, out.correctedPane.title);
await b.close();
