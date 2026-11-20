/** Pixel-compare Twin's brain interaction states with v3.  node scripts/prototype-build/states-brain.mjs [light|dark] [state...] */
import { createRequire } from "module";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const theme = process.argv[2] || "light";
const only = process.argv.slice(3);
const DIR = "/private/tmp/claude-501/-Users-bhuvan-TrainerTwin/e75dde56-2310-472e-add7-fd84d95edfb4/scratchpad/states-brain";
fs.mkdirSync(DIR, { recursive: true });
const V3 = "http://localhost:8791/v3/index.html?app=1";
const SB = "http://localhost:8791/storybook-build/index.html";
const FREEZE = "*,*::before,*::after{transition:none!important;animation:none!important}";
const STATES = {
  "questions": { hash: "knowledge/questions", v3: async (p) => { await p.click('.flow-tabs [data-id="questions"]'); }, sb: async () => {} },
  "date-chip": { hash: "knowledge/questions", v3: async (p) => { await p.click('.flow-tabs [data-id="questions"]'); await p.click(".bq-chip >> nth=1"); }, sb: async (p) => { await p.click('button[aria-haspopup=listbox]:has-text("Date asked")'); } },
  "search": { hash: "knowledge/questions", v3: async (p) => { await p.click('.flow-tabs [data-id="questions"]'); await p.click(".bq-search-btn"); }, sb: async (p) => { await p.click('button[aria-label="Search questions"]'); } },
  "issues-menu": { hash: "knowledge/issues", v3: async (p) => { await p.click('.flow-tabs [data-id="reports"]'); await p.locator(".bq-item .inbox-del").first().click(); }, sb: async (p) => { await p.locator('[aria-label^="Actions for Priya"]').click(); } },
  "correct-toast": { hash: "knowledge/issues", v3: async (p) => { await p.click('.flow-tabs [data-id="reports"]'); await p.locator(".bq-item .inbox-del").first().click(); await p.click('[data-action="inbox-issue-correct"] >> nth=0'); }, sb: async (p) => { await p.locator('[aria-label^="Actions for Priya"]').click(); await p.click('[role=menuitem]:has-text("Correct the answer")'); } },
};
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, colorScheme: theme });
async function open(url, dark, sw, pre) {
  const p = await ctx.newPage();
  await p.goto(url, { waitUntil: "domcontentloaded" });
  await p.waitForTimeout(1800);
  await p.addStyleTag({ content: FREEZE });
  if (dark) { await p.locator(sw).first().click(); await p.waitForTimeout(700); }
  if (pre) await pre(p);
  return p;
}
const out = [];
for (const [name, s] of Object.entries(STATES)) {
  if (only.length && !only.includes(name)) continue;
  const a = await open(V3, theme === "dark", "#theme-switch", async (p) => { await p.click('.nav-item[data-id="knowledge"]'); await p.waitForTimeout(400); });
  const b = await open(`${SB}#/${s.hash.split("/")[0]}`, theme === "dark", "aside [aria-label='Switch to dark']", async (p) => { await p.evaluate((h) => { location.hash = "#/" + h; }, s.hash); await p.waitForTimeout(500); });
  await s.v3(a); await s.sb(b);
  await a.mouse.move(1270, 890); await b.mouse.move(1270, 890);
  await a.waitForTimeout(600); await b.waitForTimeout(600);
  await a.screenshot({ path: `${DIR}/v3-${name}.png` });
  await b.screenshot({ path: `${DIR}/build-${name}.png` });
  const r = execFileSync("python3", ["-c", `
from PIL import Image, ImageChops
a=Image.open("${DIR}/v3-${name}.png").convert("RGB"); b=Image.open("${DIR}/build-${name}.png").convert("RGB")
d=ImageChops.difference(a,b).convert("L").point(lambda v:255 if v>24 else 0)
print(round(100*sum(1 for v in d.getdata() if v)/(a.size[0]*a.size[1]),2), d.getbbox())
`]).toString().trim();
  out.push(`${name.padEnd(14)} ${r}`);
  await a.close(); await b.close();
}
console.log(`[${theme}] % of pixels differing, bounding box\n` + out.join("\n"));
await browser.close();
