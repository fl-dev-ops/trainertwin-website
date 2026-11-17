/** Scrape the Create new page's icons and copy from v3 (read only) into prototype-build/src/data/create.json. */
import { createRequire } from "module";
import fs from "node:fs";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
await p.goto("http://localhost:8791/v3/index.html?app=1", { waitUntil: "domcontentloaded" });
await p.waitForTimeout(1500);
await p.click(".lib-tools .btn--strong");
await p.waitForTimeout(800);
const d = await p.evaluate(() => {
  const t = (e) => (e ? e.textContent.trim() : "");
  const q = (s) => document.querySelector(s);
  const svg = (e) => (e && e.querySelector("svg") ? e.querySelector("svg").outerHTML : "");
  return {
    back: t(q(".create-bar-back")), title: t(q(".tee-title")), placeholder: q("#bot-ask").getAttribute("placeholder"),
    suggestions: [...document.querySelectorAll(".tee-suggest")].map((b) => ({ label: t(b), svg: svg(b) })),
    micSvg: svg(q(".voice-pill__mic")), submitSvg: svg(q(".home-ask-submit")), submitLabel: q(".home-ask-submit").getAttribute("aria-label"),
    manualTitle: t(q(".role-manual-title")), manualSub: t(q(".role-manual-sub")), chevron: svg(q(".role-manual-head")),
  };
});
fs.writeFileSync("prototype-build/src/data/create.json", JSON.stringify(d, null, 1));
console.log(d.suggestions.length, d.manualTitle);
await b.close();
