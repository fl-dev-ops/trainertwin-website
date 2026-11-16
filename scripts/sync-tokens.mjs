#!/usr/bin/env node
/**
 * sync-tokens — one source, every copy.
 *
 *   src/styles/tokens.css   is the source of truth. Nothing else is edited by hand.
 *
 * From it this script regenerates, or (with --check) verifies:
 *
 *   1. design-system/tokens.json                    machine-readable export, every token
 *   2. design-system/TRAINERTWIN-DESIGN-SYSTEM.md    the §4 "paste this whole block" fence,
 *                                                    and the fingerprint in the header
 *   3. design-system/DECISIONS.md                    the fingerprint it quotes
 *   5. onboarding-prototype/v3/tokens.css           a generated block holding every token the prototype
 *                                                    copy does not define, and a value-drift check
 *   4. design-system/foundations.html                a generated block holding every token the
 *                                                    page does not already define by hand, and a
 *                                                    drift report for the ones it does
 *
 * The fingerprint is sha256(tokens.css)[0..8], the same value the docs have always
 * carried, so an existing stamp can be checked against it.
 *
 *   node scripts/sync-tokens.mjs            write everything
 *   node scripts/sync-tokens.mjs --check    write nothing; exit 1 on any drift (CI)
 *
 * No dependencies. Node 18+.
 */
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const P = {
  tokens: join(ROOT, "src/styles/tokens.css"),
  md: join(ROOT, "design-system/TRAINERTWIN-DESIGN-SYSTEM.md"),
  decisions: join(ROOT, "design-system/DECISIONS.md"),
  html: join(ROOT, "design-system/foundations.html"),
  json: join(ROOT, "design-system/tokens.json"),
  proto: join(ROOT, "onboarding-prototype/v3/tokens.css"),
};
const CHECK = process.argv.includes("--check");

const read = (p) => readFileSync(p, "utf8");
const problems = [];
const wrote = [];
const note = (m) => problems.push(m);

/* ------------------------------------------------------------------ parse */

const css = read(P.tokens);
const fingerprint = createHash("sha256").update(css).digest("hex").slice(0, 8);

const strip = (t) => t.replace(/\/\*[\s\S]*?\*\//g, "");

/** Walk top-level and one-level-nested blocks; return [{selector, media, body}]. */
function blocks(text) {
  const src = strip(text);
  const out = [];
  let i = 0;
  const walk = (media) => {
    while (i < src.length) {
      const open = src.indexOf("{", i);
      const close = src.indexOf("}", i);
      if (open === -1 && close === -1) return;
      if (close !== -1 && (open === -1 || close < open)) {
        i = close + 1;
        return;
      }
      const selector = src.slice(i, open).trim();
      i = open + 1;
      if (selector.startsWith("@media")) {
        walk(selector);
      } else {
        const end = src.indexOf("}", i);
        out.push({ selector, media, body: src.slice(i, end) });
        i = end + 1;
      }
    }
  };
  walk(null);
  return out;
}

const decls = (body) => {
  const m = new Map();
  for (const x of body.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)) m.set(x[1], x[2].trim().replace(/\s+/g, " "));
  return m;
};

const bl = blocks(css).filter((b) => b.selector.startsWith(":root"));
const rootBlocks = bl.filter((b) => b.selector === ":root" && !b.media);
const baseDecl = decls(rootBlocks[0].body); // primitives + structural
const lightDecl = decls(rootBlocks[1].body); // semantic, light
const sysDark = decls(bl.find((b) => b.media && b.selector.includes(":not([data-theme=")).body);
const expDark = decls(bl.find((b) => b.selector === ':root[data-theme="dark"]').body);

// The two dark blocks are supposed to be identical (see the note in tokens.css).
// This is exactly the failure that cost a day on 30 Sep 2026, so it is checked here.
for (const k of new Set([...sysDark.keys(), ...expDark.keys()])) {
  if (!sysDark.has(k)) continue; // explicit dark is a superset by design
  if (expDark.get(k) !== sysDark.get(k)) note(`dark blocks disagree on ${k}: system "${sysDark.get(k)}" vs explicit "${expDark.get(k)}"`);
}
for (const k of sysDark.keys()) if (!expDark.has(k)) note(`${k} is in system dark but missing from explicit dark`);
for (const k of expDark.keys()) if (!lightDecl.has(k)) note(`${k} is overridden in dark but has no light value`);

/* ------------------------------------------------------------- 1. tokens.json */

const resolve = (v, map, depth = 0) => {
  const m = depth < 4 && v.match(/^var\((--[\w-]+)\)$/);
  return m && map.has(m[1]) ? resolve(map.get(m[1]), map, depth + 1) : v;
};
const allBase = new Map([...baseDecl]);
const tokens = {};
for (const [k, v] of baseDecl) tokens[k] = { layer: "base", value: v, resolved: resolve(v, allBase) };
for (const [k, v] of lightDecl) {
  const dark = expDark.get(k) ?? v;
  const merged = new Map([...baseDecl, ...lightDecl]);
  const mergedDark = new Map([...baseDecl, ...lightDecl, ...expDark]);
  tokens[k] = {
    layer: "semantic",
    light: v,
    dark,
    resolved: { light: resolve(v, merged), dark: resolve(dark, mergedDark) },
  };
}
const jsonOut =
  JSON.stringify(
    {
      $meta: {
        source: "src/styles/tokens.css",
        fingerprint,
        note: "Generated by scripts/sync-tokens.mjs. Do not edit; edit tokens.css and re-run.",
        count: Object.keys(tokens).length,
      },
      tokens,
    },
    null,
    2,
  ) + "\n";

/* --------------------------------------------------------------------- write */

function put(path, next, label) {
  const prev = (() => {
    try {
      return read(path);
    } catch {
      return null;
    }
  })();
  if (prev === next) return;
  if (CHECK) return note(`${label} is out of date; run npm run tokens:sync`);
  writeFileSync(path, next);
  wrote.push(label);
}

put(P.json, jsonOut, "design-system/tokens.json");

/* ------------------------------------------------------------------ 2. the MD */

let md = read(P.md);
const header = css.match(/^\/\*[\s\S]*?\*\/\s*\n/)[0];
const fence = css.slice(header.length).replace(/×/g, "x").replace(/\s+$/, "");
const FENCE = /(## 4\. Tokens[\s\S]*?```css\n)([\s\S]*?)(\n```)/;
if (!FENCE.test(md)) note("MD: could not find the §4 fenced block");
else md = md.replace(FENCE, (_, a, _b, c) => a + fence + c);
const FP_MD = /(Version [\d.]+ · [^`]*fingerprint `)[0-9a-f]{8}(`)/;
if (!FP_MD.test(md)) note("MD: could not find the fingerprint in the header");
else md = md.replace(FP_MD, `$1${fingerprint}$2`);
put(P.md, md, "design-system/TRAINERTWIN-DESIGN-SYSTEM.md");

/* ------------------------------------------------------------ 3. DECISIONS.md */

let dec = read(P.decisions);
const FP_DEC = /(\(v[\d.]+, `)[0-9a-f]{8}(`\))/;
if (!FP_DEC.test(dec)) note("DECISIONS: could not find the quoted design-system fingerprint");
else dec = dec.replace(FP_DEC, `$1${fingerprint}$2`);
put(P.decisions, dec, "design-system/DECISIONS.md");

/* ------------------------------------------------------------- 4. foundations */

let html = read(P.html);
const START = "/* tt:generated:start";
const END = "/* tt:generated:end */";
const existing = html.includes(START) ? html.slice(0, html.indexOf(START)) + html.slice(html.indexOf(END) + END.length) : html;
const counterpart = (name) => {
  if (name.startsWith("--tt-")) return name;
  const m = name.match(/^--(color|radius|space)-(.+)$/);
  if (!m) return null;
  if (m[1] === "color") return `--tt-${m[2]}`;
  return `--tt-${m[1]}-${m[2]}`;
};
// A token counts as hand-defined if the page has it under its own name OR under the
// page's alias (--color-canvas for --tt-canvas, --space-4 for --tt-space-4, ...).
const handDefined = new Set();
for (const m of existing.matchAll(/(--[\w-]+)\s*:/g)) {
  handDefined.add(m[1]);
  const c = counterpart(m[1]);
  if (c) handDefined.add(c);
}

const baseMissing = [...baseDecl].filter(([k]) => !handDefined.has(k));
const themedMissing = [...lightDecl].filter(([k]) => !handDefined.has(k));
const line = (k, v) => `  ${k}: ${v};`;
let gen = `${START} — written by scripts/sync-tokens.mjs from src/styles/tokens.css (${fingerprint}).\n   Every --tt-* token this page does not define by hand. Do not edit. */\n`;
gen += `:root {\n${baseMissing.map(([k, v]) => line(k, v)).join("\n")}\n${themedMissing.map(([k, v]) => line(k, v)).join("\n")}\n}\n`;
const darkRows = themedMissing.filter(([k]) => expDark.has(k)).map(([k]) => line(k, expDark.get(k)));
if (darkRows.length) {
  gen += `@media (prefers-color-scheme: dark) {\n  :root:not([data-theme="light"]) {\n${darkRows.map((r) => "  " + r).join("\n")}\n  }\n}\n`;
  gen += `:root[data-theme="dark"] {\n${darkRows.join("\n")}\n}\n`;
}
gen += END;

if (html.includes(START)) html = html.slice(0, html.indexOf(START)) + gen + html.slice(html.indexOf(END) + END.length);
else html = html.replace(/<\/style>/, `${gen}\n</style>`);
put(P.html, html, "design-system/foundations.html");

/* ---- drift: values the page defines by hand against tokens.css ---------------
   The page keeps its own --tt-* primitives and a --color-* / --radius-* / --space-*
   semantic layer. Compare every pair that has a counterpart. */

const norm = (v) => v.toLowerCase().replace(/\s+/g, "").replace(/;$/, "");
const pageBlocks = blocks(existing.match(/<style>([\s\S]*?)<\/style>/)[1]).filter((b) => b.selector.startsWith(":root"));
const pageBase = new Map();
const pageDark = new Map();
for (const b of pageBlocks) {
  const d = decls(b.body);
  const dark = b.selector.includes("data-theme=\"dark\"") || (b.media && b.selector.includes(":not("));
  for (const [k, v] of d) (dark ? pageDark : pageBase).set(k, v);
}
let checked = 0;
for (const [name, v] of pageBase) {
  const t = counterpart(name);
  if (!t) continue;
  const mergedLight = new Map([...baseDecl, ...lightDecl]);
  if (!mergedLight.has(t)) continue;
  const want = resolve(mergedLight.get(t), mergedLight);
  const got = resolve(v, new Map([...pageBase, ...mergedLight]));
  checked++;
  if (norm(want) !== norm(got) && !/var\(/.test(want)) note(`foundations.html ${name} = ${v}, tokens.css ${t} = ${want}`);
}
for (const [name, v] of pageDark) {
  const t = counterpart(name);
  if (!t || !expDark.has(t)) continue;
  const want = resolve(expDark.get(t), new Map([...baseDecl, ...lightDecl, ...expDark]));
  const got = resolve(v, new Map([...pageBase, ...pageDark]));
  checked++;
  if (norm(want) !== norm(got)) note(`foundations.html dark ${name} = ${v}, tokens.css dark ${t} = ${want}`);
}


/* ----------------------------------------------- 5. the prototype's tokens.css
   The v3 prototype ships its own copy of tokens.css (it is plain HTML, outside the
   Next app). Two things were true of it on 16 Nov 2026: no value disagreed with
   src/styles/tokens.css, and 36 tokens were simply missing. Keep the file as it is
   and append what is missing in a generated block, so it can never fall behind. */
{
  let proto = read(P.proto);
  const pStart = "/* tt:generated:start";
  const pEnd = "/* tt:generated:end */";
  const bare = proto.includes(pStart) ? proto.slice(0, proto.indexOf(pStart)) + proto.slice(proto.indexOf(pEnd) + pEnd.length) : proto;
  const have = new Map();
  for (const b of blocks(bare)) for (const [k, v] of decls(b.body)) if (!have.has(k)) have.set(k, v);
  const mergedLight = new Map([...baseDecl, ...lightDecl]);
  for (const [k, v] of have) {
    if (!mergedLight.has(k)) continue;
    if (norm(resolve(mergedLight.get(k), mergedLight)) !== norm(resolve(v, new Map([...have, ...mergedLight])))) {
      note(`prototype tokens.css ${k} = ${v}, tokens.css = ${mergedLight.get(k)}`);
    }
  }
  const pBase = [...baseDecl].filter(([k]) => !have.has(k));
  const pThemed = [...lightDecl].filter(([k]) => !have.has(k));
  const pDark = pThemed.filter(([k]) => expDark.has(k)).map(([k]) => line(k, expDark.get(k)));
  let g = `${pStart} — written by scripts/sync-tokens.mjs from src/styles/tokens.css (${fingerprint}).\n   Every token this file does not define by hand. Do not edit. */\n`;
  g += `:root {\n${[...pBase, ...pThemed].map(([k, v]) => line(k, v)).join("\n")}\n}\n`;
  if (pDark.length) {
    g += `@media (prefers-color-scheme: dark) {\n  :root:not([data-theme="light"]) {\n${pDark.map((r) => "  " + r).join("\n")}\n  }\n}\n`;
    g += `:root[data-theme="dark"] {\n${pDark.join("\n")}\n}\n`;
  }
  g += pEnd + "\n";
  put(P.proto, bare.replace(/\s+$/, "\n") + "\n" + g, "onboarding-prototype/v3/tokens.css");
  console.log(`prototype    ${have.size} hand-defined, ${pBase.length + pThemed.length} generated`);
}

/* -------------------------------------------------------------------- report */

console.log(`tokens.css  ${fingerprint}  ·  ${Object.keys(tokens).length} tokens (${baseDecl.size} base, ${lightDecl.size} semantic)`);
console.log(`foundations  ${checked} hand-defined values compared, ${baseMissing.length + themedMissing.length} generated`);
if (wrote.length) console.log("wrote:\n  " + wrote.join("\n  "));
if (problems.length) {
  console.log(`\n${problems.length} problem${problems.length === 1 ? "" : "s"}:`);
  for (const p of problems) console.log("  - " + p);
  process.exit(CHECK || problems.some((p) => /disagree|missing|could not/.test(p)) ? 1 : 0);
}
console.log(CHECK ? "in sync" : "done");
