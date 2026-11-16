/**
 * Compare the storybook-build prototype with the real V3, element by element.
 *   npm run build:prototype && node scripts/prototype-build/compare.mjs [page] [light|dark]
 * Both pages are opened at the same viewport; for each matched pair it prints position/size differences
 * (> 1px) and the style differences that matter. v3 is only read, never changed.
 * Needs the prototype server on 8791 (launch config `prototype`).
 */
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const V3 = "http://localhost:8791/v3/index.html?app=1";
const SB = "http://localhost:8791/storybook-build/index.html";

// [label, v3 selector, build selector, nth, "parent"?]  — selectors are queried inside each page.
const PAGES = {
  setup: [
    ["rail", ".rail-scroll", "aside", 0],
    ["brand row", ".rail-brand", "aside > div:first-child", 0],
    ["logo button", ".lockup", "aside > div:first-child > button", 0],
    ["theme button", ".theme-switch", "aside > div:first-child > div button", 0],
    ["group label", ".rail-label", "[role=group] > span", 0],
    ["active item", ".nav-item[aria-current=page]", "nav button[aria-current=page]", 0],
    ["item 2", ".rail-nav .nav-item", "nav button", 1],
    ["usage item", ".rail-foot-nav .nav-item", "aside > div:last-child > div:first-child button", 0],
    ["user card", ".rail-user", "aside > div:last-child > button", 0],
    ["main sheet", ".main", "main", 0],
    ["page header", ".lib-head", "main h1", 0, "build"],
    ["page title", ".lib-title", "main h1", 0],
    ["credit pill", ".credit-pill", "main button[title]", 0],
    ["create button", ".lib-tools .btn--strong", "main button:not([title])", 0],
    ["heading 1", ".twin-bots-head .page-title", "main h2", 0],
    ["twin-all card", ".twin-all", "main article", 0],
    ["twin-all photo", ".twin-all-photo", "main article img", 0],
    ["twin-all name", ".twin-all-name", "main article button.tt-open", 0],
    ["twin-all meta", ".twin-all-meta", "main article p", 0],
    ["twin-all more", ".twin-all-more", "main article [aria-haspopup]", 0],
    ["heading 2", ".twin-bots-head .page-title", "main h2", 1],
    ["grid", ".rp-grid", "main div.grid-cols-3", 0],
    ["agent card", ".rp-card", "main div.grid-cols-3 > article", 0],
    ["agent art", ".rp-art", "main div.grid-cols-3 > article > div:first-child", 0],
    ["agent bubble", ".rp-quote-bubble", ".tt-bubble", 0],
    ["agent title", ".rp-title", "main div.grid-cols-3 > article button.tt-open", 0],
    ["agent copy", ".rp-copy", "main div.grid-cols-3 > article p", 0],
    ["agent learners", ".rp-grid .rp-learners", "main div.grid-cols-3 > article [role=group]", 0],
    ["agent more", ".rp-grid .rp-row-more", "main div.grid-cols-3 > article [aria-haspopup]", 0],
    ["agent card 2", ".rp-card", "main div.grid-cols-3 > article", 1],
    ["agent card 4", ".rp-card", "main div.grid-cols-3 > article", 3],
  ],
};

const STY = ["fontSize", "fontWeight", "lineHeight", "color", "backgroundColor", "borderTopLeftRadius", "boxShadow", "paddingTop", "paddingLeft", "columnGap"];
const SNAP = `(a) => {
  const [sel, nth, parent] = a;
  const el = [...document.querySelectorAll(sel)][nth];
  if (!el) return null;
  const t = parent ? el.parentElement : el;
  const b = t.getBoundingClientRect(), cs = getComputedStyle(t);
  const o = { x: Math.round(b.x * 2) / 2, y: Math.round(b.y * 2) / 2, w: Math.round(b.width * 2) / 2, h: Math.round(b.height * 2) / 2 };
  for (const p of ${JSON.stringify(STY)}) o[p] = cs[p];
  return o;
}`;
const norm = (k, v) =>
  /Color|^color$/.test(k)
    ? String(v).replace(/rgba?\(([^)]+)\)/, (_, c) => {
        const n = c.split(/[ ,\/]+/).map(Number);
        const a = n[3] ?? 1;
        return a === 0 ? "transparent" : `rgb(${n[0]},${n[1]},${n[2]}${a !== 1 ? "," + a.toFixed(2) : ""})`;
      })
    : k === "boxShadow"
      ? String(v).split(/,(?![^(]*\))/).map((t) => t.trim().replace(/\s+/g, " ")).filter((t) => !/^rgba\(0, 0, 0, 0\)/.test(t)).join(" | ") || "none"
      : k === "borderTopLeftRadius"
        ? (parseFloat(v) >= 999 ? "round" : v)
        : v;

const pageName = process.argv[2] || "setup";
const theme = process.argv[3] || "light";
const cases = PAGES[pageName];
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, colorScheme: theme });

async function open(url, dark, switchSel) {
  const p = await ctx.newPage();
  await p.goto(url, { waitUntil: "domcontentloaded", timeout: 20000 });
  await p.waitForTimeout(2000);
  await p.addStyleTag({ content: "*,*::before,*::after{transition:none!important;animation:none!important}" });
  if (dark) {
    const sw = p.locator(switchSel).first();
    if (await sw.count()) await sw.click();
    await p.waitForTimeout(400);
  }
  await p.mouse.move(1270, 890);
  return p;
}
const a = await open(V3, theme === "dark", "#theme-switch");
const b = await open(SB, theme === "dark", "aside [aria-label='Switch to dark']");
const out = [];
let diffs = 0;
for (const [label, s1, s2, nth, parent] of cases) {
  const x = await a.evaluate(`(${SNAP})(${JSON.stringify([s1, nth, false])})`);
  const y = await b.evaluate(`(${SNAP})(${JSON.stringify([s2, nth, !!parent])})`);
  if (!x || !y) {
    out.push(`?? ${label}: ${!x ? "v3" : "build"} element not found`);
    diffs++;
    continue;
  }
  const d = [];
  for (const k of ["x", "y", "w", "h"]) if (Math.abs(x[k] - y[k]) > 1) d.push(`${k} ${x[k]} -> ${y[k]}`);
  for (const k of STY) {
    if (norm(k, x[k]) === norm(k, y[k])) continue;
    if (k === "lineHeight" && Math.abs(parseFloat(x[k]) - parseFloat(y[k])) <= 1.5) continue;
    d.push(`${k} ${norm(k, x[k])} -> ${norm(k, y[k])}`);
  }
  if (d.length) {
    out.push(`${label}: ${d.join(" | ")}`);
    diffs++;
  }
}
console.log(out.join("\n") || "NO DIFFERENCES");
console.log(`\n[${pageName}, ${theme}] ${cases.length} elements, ${diffs} differ (v3 -> build)`);
await browser.close();
