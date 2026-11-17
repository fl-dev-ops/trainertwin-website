/**
 * Generic page comparison: matches elements by their visible text (and occurrence order) in the real V3 and the
 * storybook-build page, then reports position/size/colour differences. Needs no per-page selector list.
 *
 *   node scripts/prototype-build/compare-text.mjs <nav id> [light|dark] [--shot]
 *
 * <nav id> is the left-nav id both apps share (setup, calibrations, learners, knowledge, roleplay, sessions,
 * rpsettings, usage, billing, support, settings). v3 is only read. --shot also saves side-by-side screenshots
 * to the scratchpad. Output: texts only on one side, then boxes that differ by more than 1px.
 */
import { createRequire } from "module";
import fs from "node:fs";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const id = process.argv[2] || "setup";
const theme = process.argv.includes("dark") ? "dark" : "light";
const shot = process.argv.includes("--shot");
const V3 = "http://localhost:8791/v3/index.html?app=1";
const flow = (process.argv.find((a) => a.startsWith("--flow=")) || "").slice(7);
// Flows: a sub-view reached by clicking in v3 (first agent card, or its Configure) and the matching hash here.
const FLOWS = {
  detail: { hash: "setup/offplan-process", v3: async (p) => p.click(".rp-grid .rp-card >> nth=0") },
  calibrate: { hash: "setup/offplan-process/calibrate", v3: async (p) => { await p.click(".rp-grid .rp-row-more >> nth=0"); await p.click('.rp-row-menu [data-action="twin-bot-calibrate"]:visible'); } },
  try: { hash: "setup/offplan-process/try", rootA: ".demo-room", rootB: "#root", v3: async (p) => { await p.click(".rp-grid .rp-row-more >> nth=0"); await p.click('.rp-row-menu [data-action="role-row-test"]:visible'); } },
  session: { hash: "calibrations/0", v3: async (p) => { await p.click('.nav-item[data-id="calibrations"]'); await p.click(".ts-rowbtn >> nth=0"); } },
  questions: { hash: "knowledge/questions", v3: async (p) => { await p.click('.nav-item[data-id="knowledge"]'); await p.click('.flow-tabs [data-id="questions"]'); } },
  issues: { hash: "knowledge/issues", v3: async (p) => { await p.click('.nav-item[data-id="knowledge"]'); await p.click('.flow-tabs [data-id="reports"]'); } },
  rpsession: { hash: "sessions/0", v3: async (p) => { await p.click('.nav-item[data-id="sessions"]'); await p.click(".ts-rowbtn >> nth=0"); } },
  learner: { hash: "twinusers/bechir.realestate", v3: async (p) => { await p.click('.nav-item[data-id="twinusers"]'); await p.click('[data-action="learner-open"] >> nth=0'); } },
  create: { hash: "setup/new", v3: async (p) => p.click(".lib-tools .btn--strong") },
  twinall: { hash: "setup/olga-twin", v3: async (p) => p.click(".twin-all") },
  agent2: { hash: "setup/listing-pitch", v3: async (p) => p.click('.rp-grid .rp-card[data-id="listing-pitch"]') },
  edit: { hash: "setup/offplan-process/edit", v3: async (p) => { await p.click(".rp-grid .rp-row-more >> nth=0"); await p.click('.rp-row-menu [data-action="twin-bot-edit"]:visible'); } },
};
const SB = `http://localhost:8791/storybook-build/index.html#/${flow ? FLOWS[flow].hash : id}`;

// Collect every leaf-ish element with its own visible text: tag, text, rect, a few styles.
const COLLECT = `(sel) => {
  const root = document.querySelector(sel);
  const out = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
  let el;
  while ((el = walker.nextNode())) {
    const own = [...el.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent).join(" ").replace(/\\s+/g, " ").trim();
    if (!own) continue;
    const cs = getComputedStyle(el);
    if (cs.visibility === "hidden" || cs.display === "none") continue;
    const r = el.getBoundingClientRect();
    if (!r.width || !r.height) continue;
    out.push({ text: own.slice(0, 60), x: r.x, y: r.y, w: r.width, h: r.height, fs: cs.fontSize, fw: cs.fontWeight, color: cs.color, tag: el.tagName.toLowerCase() });
  }
  return out;
}`;

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, colorScheme: theme });
async function open(url, ready) {
  const p = await ctx.newPage();
  await p.goto(url, { waitUntil: "domcontentloaded", timeout: 20000 });
  await p.waitForTimeout(1800);
  await p.addStyleTag({ content: "*,*::before,*::after{transition:none!important;animation:none!important}" });
  if (ready) await ready(p);
  return p;
}
const a = await open(V3, async (p) => {
  if (flow) await FLOWS[flow].v3(p);
  else await p.locator(`.nav-item[data-id="${id}"], .rail-foot-nav [data-id="${id}"]`).first().click();
  if (theme === "dark") await p.locator("#theme-switch").first().click();
  await p.waitForTimeout(900);
});
const b = await open(SB, async (p) => {
  if (theme === "dark") await p.locator("aside [aria-label='Switch to dark']").first().click();
  await p.waitForTimeout(500);
});
await a.mouse.move(1270, 890);
await b.mouse.move(1270, 890);
const rootA = (flow && FLOWS[flow].rootA) || ".main", rootB = (flow && FLOWS[flow].rootB) || "main";
const A = await a.evaluate(`(${COLLECT})(${JSON.stringify(rootA)})`);
console.log("v3 main found; build main found");
const B = await b.evaluate(`(${COLLECT})(${JSON.stringify(rootB)})`);

// Match by text + occurrence index.
const key = (list) => {
  const seen = new Map();
  return list.map((e) => {
    const t = e.text.replace(/[\s“”"]/g, "");
    const n = (seen.get(t) ?? 0) + 1;
    seen.set(t, n);
    return { ...e, k: `${t}#${n}` };
  });
};
const KA = key(A), KB = new Map(key(B).map((e) => [e.k, e]));
// The content area is offset by the main sheet origin: compare relative to each page's main element.
const ma = await a.evaluate(`(() => { const r = document.querySelector(${JSON.stringify(rootA)}).getBoundingClientRect(); return [r.x, r.y]; })()`);
const mb = await b.evaluate(`(() => { const r = document.querySelector(${JSON.stringify(rootB)}).getBoundingClientRect(); return [r.x, r.y]; })()`);
const onlyA = [], diffs = [];
let matched = 0;
for (const e of KA) {
  const f = KB.get(e.k);
  if (!f) { onlyA.push(e.text); continue; }
  KB.delete(e.k);
  matched++;
  const d = [];
  const dx = e.x - ma[0] - (f.x - mb[0]), dy = e.y - ma[1] - (f.y - mb[1]);
  if (Math.abs(dx) > 1) d.push(`x ${dx > 0 ? "+" : ""}${dx.toFixed(0)}`);
  if (Math.abs(dy) > 1) d.push(`y ${dy > 0 ? "+" : ""}${dy.toFixed(0)}`);
  if (Math.abs(e.w - f.w) > 1.5) d.push(`w ${e.w.toFixed(0)}->${f.w.toFixed(0)}`);
  if (Math.abs(e.h - f.h) > 1.5) d.push(`h ${e.h.toFixed(0)}->${f.h.toFixed(0)}`);
  if (e.fs !== f.fs) d.push(`font ${e.fs}->${f.fs}`);
  if (e.fw !== f.fw) d.push(`weight ${e.fw}->${f.fw}`);
  if (e.color !== f.color) d.push(`color ${e.color}->${f.color}`);
  if (d.length) diffs.push({ text: e.text, d: d.join(" "), mag: Math.abs(dx) + Math.abs(dy) });
}
const onlyB = [...KB.values()].map((e) => e.text);
const lines = [];
if (onlyA.length) lines.push(`ONLY IN V3 (${onlyA.length}): ${onlyA.slice(0, 40).join(" | ")}`);
if (onlyB.length) lines.push(`ONLY IN BUILD (${onlyB.length}): ${onlyB.slice(0, 40).join(" | ")}`);
diffs.sort((x, y) => y.mag - x.mag);
for (const x of diffs.slice(0, 40)) lines.push(`  "${x.text}": ${x.d}`);
console.log(lines.join("\n") || "NO DIFFERENCES");
console.log(`\n[${id}, ${theme}] matched ${matched} of ${KA.length} v3 texts; ${diffs.length} differ, ${onlyA.length} only in v3, ${onlyB.length} only in build`);
if (shot) {
  const dir = "/private/tmp/claude-501/-Users-bhuvan-TrainerTwin/e75dde56-2310-472e-add7-fd84d95edfb4/scratchpad";
  fs.mkdirSync(dir, { recursive: true });
  await a.screenshot({ path: `${dir}/v3-${id}.png` });
  await b.screenshot({ path: `${dir}/build-${id}.png` });
  console.log(`screenshots in ${dir}/{v3,build}-${id}.png`);
}
await browser.close();
