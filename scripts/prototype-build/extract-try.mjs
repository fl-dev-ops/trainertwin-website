/** Scrape the "Try as learner" demo room's icons and copy from v3 (read only) into prototype-build/src/data/try.json. */
import { createRequire } from "module";
import fs from "node:fs";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
await p.goto("http://localhost:8791/v3/index.html?app=1", { waitUntil: "domcontentloaded" });
await p.waitForTimeout(1500);
await p.click(".rp-grid .rp-row-more >> nth=0");
await p.click('.rp-row-menu [data-action="role-row-test"]:visible');
await p.waitForTimeout(1200);
const d = await p.evaluate(() => {
  const t = (e) => (e ? e.textContent.trim() : "");
  const q = (s) => document.querySelector(s);
  const qa = (s) => [...document.querySelectorAll(s)];
  const svg = (e) => (e && e.querySelector("svg") ? e.querySelector("svg").outerHTML : "");
  return {
    brandSvg: svg(q(".demo-brand")), title: t(q(".demo-title")),
    views: qa(".demo-view button").map((b) => ({ label: b.getAttribute("aria-label"), id: b.dataset.id, svg: svg(b), on: b.getAttribute("aria-pressed") === "true" })),
    report: t(q(".demo-pill-btn")), reportSvg: svg(q(".demo-pill-btn")),
    speaking: t(q(".demo-speaking")), speaker: t(q(".demo-speaker-name")), selfLabel: t(q(".demo-self-label")), selfInitial: t(q(".demo-self-avatar")), selfMic: svg(q(".demo-self-mic")),
    face: q("video[data-demo-face]") ? q("video[data-demo-face]").getAttribute("src") : "",
    ctrls: qa(".demo-cluster .demo-ctrl").map((b) => ({ label: b.getAttribute("aria-label"), off: b.classList.contains("is-off"), svg: svg(b) })),
    end: t(q(".demo-end")), endSvg: svg(q(".demo-end")), timer: t(q(".demo-timer")),
    chat: { title: t(q(".demo-chat-title")), closeSvg: svg(q(".demo-chat-close")), attachSvg: svg(q(".demo-attach")), sendSvg: svg(q(".demo-send")), placeholder: q(".demo-chat-input").getAttribute("placeholder") },
  };
});
fs.writeFileSync("prototype-build/src/data/try.json", JSON.stringify(d, null, 1));
console.log(Object.keys(d).join(","), d.ctrls.length, d.face);
await b.close();
