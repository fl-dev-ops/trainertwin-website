/**
 * Compare Storybook components with the V3 prototype, side by side.
 *
 * For each case it injects the prototype's own markup (its real classes) into the live prototype page, reads the
 * computed styles, reads the matching Storybook story, and prints every property that differs, in light and dark.
 * Needs both servers up:  npm run storybook (6006)  and  the `prototype` launch config (8791).
 *
 *   npm run compare:prototype
 *
 * The prototype is the visual reference (D120-D122). Expect some noise (a root font-size of 15 vs 16, `display`,
 * non-text elements): run.mjs filters the known kinds. See cases*.mjs to add a component.
 */
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const PROTO = 'http://localhost:8791/v3/index.html';
const SB = 'http://localhost:6006/iframe.html?viewMode=story&id=';

const PROPS = ['width','height','paddingTop','paddingRight','paddingBottom','paddingLeft','columnGap','rowGap','fontSize','fontWeight','lineHeight','letterSpacing','textTransform','color','backgroundColor','backgroundImage','borderTopWidth','borderTopStyle','borderTopColor','borderBottomWidth','borderBottomColor','borderTopLeftRadius','boxShadow','opacity','display','flexDirection','alignItems','justifyContent','textAlign','cursor','textDecorationLine'];

const FREEZE = `*,*::before,*::after{transition:none!important;animation:none!important;caret-color:transparent!important}`;

const SNAP_SRC = `(args) => {
  const { selMap, PROPS, opts } = args;
  const root = document.querySelector(opts.root) || document;
  const out = {};
  for (const [label, spec] of Object.entries(selMap)) {
    const [sel, nth = 0] = Array.isArray(spec) ? spec : [spec, 0];
    const el = [...root.querySelectorAll(sel)][nth];
    if (!el) { out[label] = null; continue; }
    const cs = getComputedStyle(el);
    const o = {};
    for (const p of PROPS) { if (opts.skipSize && (p === 'width' || p === 'height')) continue; o[p] = cs[p]; }
    const rc = el.getBoundingClientRect(); o.rw = Math.round(rc.width * 2) / 2 + 'px'; o.rh = Math.round(rc.height * 2) / 2 + 'px';
    out[label] = o;
  }
  return out;
}`;

const norm = (k, v) => {
  if (v == null) return v;
  v = String(v);
  if (/Color|^color$|backgroundColor/.test(k)) {
    const m = v.match(/rgba?\(([^)]+)\)/);
    if (m) { const n = m[1].split(/[ ,\/]+/).filter(Boolean).map(Number); const a = n[3] ?? 1; return a === 0 ? 'transparent' : `rgb(${n[0]},${n[1]},${n[2]}${a !== 1 ? ','+(+a).toFixed(2) : ''})`; }
  }
  if (/px$/.test(v) && !/ /.test(v)) return (Math.round(parseFloat(v) * 2) / 2) + 'px';
  if (k === 'boxShadow') return v.replace(/\s+/g, ' ').replace(/rgba?\(([^)]+)\)/g, (_, c) => { const n = c.split(/[ ,\/]+/).map(Number); return `rgb(${n.slice(0,3).join(',')}${(n[3] ?? 1) !== 1 ? ','+(+n[3]).toFixed(2) : ''})`; }).replace(/rgb\(0,0,0,0\)[^,]*,?\s?/g,'').trim();
  if (k === 'backgroundImage') return v.replace(/\s+/g, ' ').replace(/rgba?\(([^)]+)\)/g, (_, c) => 'c' + c.replace(/\s/g,'')).slice(0, 140);
  if (k === 'letterSpacing') return v === 'normal' ? '0px' : (Math.round(parseFloat(v) * 10) / 10) + 'px';
  if (k === 'lineHeight' && v === 'normal') return 'normal';
  return v;
};

export async function run(cases, { themes = ['light', 'dark'], only } = {}) {
  const browser = await chromium.launch();
  const results = [];
  for (const theme of themes) {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, colorScheme: theme === 'dark' ? 'dark' : 'light' });
    const proto = await ctx.newPage();
    await proto.goto(PROTO); await proto.waitForTimeout(1200);
    await proto.addStyleTag({ content: FREEZE });
    if (theme === 'dark') { const sw = proto.locator('#theme-switch').first(); if (await sw.count()) { await sw.click(); await proto.waitForTimeout(400); } }
    for (const c of cases) {
      if (only && !only.includes(c.name)) continue;
      const vp = c.viewport; if (vp) await proto.setViewportSize(vp);
      // prototype snapshot
      await proto.evaluate(({ html }) => { let h = document.getElementById('__t'); if (h) h.remove(); h = document.createElement('div'); h.id = '__t'; h.style.cssText = 'position:fixed;left:0;top:0;width:900px;z-index:99999;background:var(--tt-canvas,#fff);padding:20px'; h.innerHTML = html; document.body.appendChild(h); }, { html: c.proto.html });
      await proto.mouse.move(1270, 880); await proto.waitForTimeout(250);
      if (c.proto.before) await c.proto.before(proto);
      const ps = await proto.evaluate(`(${SNAP_SRC})(${JSON.stringify({ selMap: c.proto.sel, PROPS, opts: { root: '#__t', skipSize: !!c.skipSize } })})`).catch(e => ({ __err: String(e) }));
      if (vp) await proto.setViewportSize({ width: 1280, height: 900 });
      // storybook snapshot
      const sb = await ctx.newPage();
      await sb.setViewportSize(vp || { width: 1280, height: 900 });
      await sb.goto(SB + c.story.id); await sb.waitForSelector('#storybook-root > *', { timeout: 15000 }).catch(() => {});
      await sb.addStyleTag({ content: FREEZE });
      await sb.evaluate((t) => document.documentElement.setAttribute('data-theme', t), theme);
      await sb.waitForTimeout(500);
      if (c.story.before) await c.story.before(sb);
      const ss = await sb.evaluate(`(${SNAP_SRC})(${JSON.stringify({ selMap: c.story.sel, PROPS, opts: { root: '#storybook-root', skipSize: !!c.skipSize } })})`).catch(e => ({ __err: String(e) }));
      await sb.close();
      results.push({ name: c.name, theme, proto: ps, sb: ss, ignore: c.ignore || [] });
    }
    await ctx.close();
  }
  await browser.close();
  return results;
}

const isZeroShadow = (t) => /^rgb\(0,0,0,0(\.00)?\) 0px 0px 0px 0px$/.test(t.trim());
const cleanShadow = (v) => { if (v == null || v === 'none') return 'none'; const parts = []; let depth = 0, cur = ''; for (const ch of String(v)) { if (ch === '(') depth++; if (ch === ')') depth--; if (ch === ',' && depth === 0) { parts.push(cur.trim()); cur = ''; } else cur += ch; } parts.push(cur.trim()); const out = parts.filter(p => !isZeroShadow(p)); return out.length ? out.join(' | ') : 'none'; };
const px = (v) => parseFloat(v);
export function diff(results, { widths = false, strict = false } = {}) {
  const lines = [];
  for (const r of results) {
    if (r.proto.__err || r.sb.__err) { lines.push(`!! ${r.name} [${r.theme}] error: ${r.proto.__err || r.sb.__err}`); continue; }
    for (const label of Object.keys(r.proto)) {
      const a = r.proto[label], b = r.sb[label];
      if (!a || !b) { lines.push(`?? ${r.name} [${r.theme}] ${label}: ${!a ? 'prototype' : 'storybook'} element not found`); continue; }
      const bw0 = px(a.borderTopWidth) === 0 && px(b.borderTopWidth) === 0;
      if (strict) for (const k of ['rw', 'rh']) { if (Math.abs(px(a[k]) - px(b[k])) > 1) lines.push(`${r.name} [${r.theme}] ${label}.RENDERED_${k === 'rw' ? 'WIDTH' : 'HEIGHT'}: prototype=${a[k]} | storybook=${b[k]}`); }
      for (const p of PROPS) {
        if (!strict && (r.ignore.includes(p) || r.ignore.includes(label + '.' + p))) continue;
        if ((p === 'width' || p === 'height') && strict) continue;
        if (p === 'width' && !widths) continue;
        if (p === 'display') continue;
        if (bw0 && /^border(Top|Bottom)(Style|Color)$/.test(p)) continue;
        let x = norm(p, a[p]), y = norm(p, b[p]);
        if (p === 'boxShadow') { x = cleanShadow(x); y = cleanShadow(y); }
        if (p === 'borderTopLeftRadius') { const f = (t) => (parseFloat(t) >= 999 || t === '50%') ? 'round' : t; x = f(x); y = f(y); }
        if (p === 'lineHeight' && /px$/.test(x) && /px$/.test(y) && Math.abs(px(x) - px(y)) <= 1.5) continue;
        if (x !== y) lines.push(`${r.name} [${r.theme}] ${label}.${p}: prototype=${x} | storybook=${y}`);
      }
    }
  }
  return lines;
}
