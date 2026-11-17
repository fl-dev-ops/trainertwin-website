/**
 * Compare interaction states of the Twin agents page (menu open, card hover, rail collapsed) pixel by pixel.
 *   node scripts/prototype-build/states.mjs [light|dark]
 * Writes v3-/build-/diff- PNGs per state into the scratchpad dir and prints the percentage of pixels that differ.
 */
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
import { execFileSync } from "node:child_process";
import fs from "node:fs";

const theme = process.argv[2] || "light";
const DIR = "/private/tmp/claude-501/-Users-bhuvan-TrainerTwin/e75dde56-2310-472e-add7-fd84d95edfb4/scratchpad/states";
fs.mkdirSync(DIR, { recursive: true });
const V3 = "http://localhost:8791/v3/index.html?app=1";
const SB = "http://localhost:8791/storybook-build/index.html#/setup";
const FREEZE = "*,*::before,*::after{transition:none!important;animation:none!important}";

const STATES = {
  rest: { v3: async () => {}, sb: async () => {} },
  "card-hover": {
    v3: async (p) => p.hover(".rp-grid .rp-card >> nth=0"),
    sb: async (p) => p.hover("main div.grid-cols-3 > article >> nth=0"),
  },
  "menu-open": {
    v3: async (p) => p.click(".rp-grid .rp-row-more >> nth=0"),
    sb: async (p) => p.click("main div.grid-cols-3 > article [aria-haspopup] >> nth=0"),
  },
  "twinall-menu": {
    v3: async (p) => p.click(".twin-all-more"),
    sb: async (p) => p.click("main article >> nth=0 >> [aria-haspopup]"),
  },
  "rail-collapsed": {
    v3: async (p) => p.click(".lockup-toggle"),
    sb: async (p) => p.click("aside button[aria-pressed] >> nth=0"),
  },
  "credit-popover": {
    v3: async (p) => p.click(".credit-pill"),
    sb: async (p) => p.click("main button[title]"),
  },
  "remove-dialog": {
    v3: async (p) => { await p.click(".rp-grid .rp-row-more >> nth=0"); await p.click('.rp-row-menu [data-action="twin-bot-remove"]:visible'); },
    sb: async (p) => { await p.click("main div.grid-cols-3 > article [aria-haspopup] >> nth=0"); await p.click('[role=menuitem]:has-text("Remove")'); },
  },
  "share-dialog": {
    v3: async (p) => { await p.click(".rp-grid .rp-row-more >> nth=0"); await p.click('.rp-row-menu [data-action="twin-bot-share"]:visible'); },
    sb: async (p) => { await p.click("main div.grid-cols-3 > article [aria-haspopup] >> nth=0"); await p.click('[role=menuitem]:has-text("Share")'); },
  },
  "assign-dialog": {
    v3: async (p) => { await p.click(".rp-grid .rp-row-more >> nth=0"); await p.click('.rp-row-menu [data-action="role-assign-open"]:visible'); },
    sb: async (p) => { await p.click("main div.grid-cols-3 > article [aria-haspopup] >> nth=0"); await p.click('[role=menuitem]:has-text("Assign")'); },
  },
  "credit-hover": {
    v3: async (p) => p.hover(".credit-pill"),
    sb: async (p) => p.hover("main button[title]"),
  },
};

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, colorScheme: theme });
async function open(url, dark, sw) {
  const p = await ctx.newPage();
  await p.goto(url, { waitUntil: "domcontentloaded" });
  await p.waitForTimeout(1800);
  await p.addStyleTag({ content: FREEZE });
  if (dark) { await p.locator(sw).first().click(); await p.waitForTimeout(700); }
  await p.mouse.move(1270, 890);
  return p;
}
const only = process.argv.slice(3);
const out = [];
for (const [name, s] of Object.entries(STATES)) {
  if (only.length && !only.includes(name)) continue;
  const a = await open(V3, theme === "dark", "#theme-switch");
  const b = await open(SB, theme === "dark", "aside [aria-label='Switch to dark']");
  await s.v3(a); await s.sb(b);
  await a.waitForTimeout(500); await b.waitForTimeout(500);
  await a.screenshot({ path: `${DIR}/v3-${name}.png` });
  await b.screenshot({ path: `${DIR}/build-${name}.png` });
  const r = execFileSync("python3", ["-c", `
from PIL import Image, ImageChops
a=Image.open("${DIR}/v3-${name}.png").convert("RGB"); b=Image.open("${DIR}/build-${name}.png").convert("RGB")
d=ImageChops.difference(a,b).convert("L").point(lambda v:255 if v>24 else 0)
n=sum(1 for v in d.getdata() if v); d.save("${DIR}/diff-${name}.png")
print(round(100*n/(a.size[0]*a.size[1]),2), d.getbbox())
`]).toString().trim();
  out.push(`${name.padEnd(16)} ${r}`);
  await a.close(); await b.close();
}
console.log(`[${theme}] % of pixels differing, bounding box\n` + out.join("\n"));
await browser.close();
