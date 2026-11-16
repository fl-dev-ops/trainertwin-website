/**
 * Scrape sample data out of the rendered V3 (read only) into prototype-build/src/data/<page>.json, so the rebuilt
 * pages show the same rows without porting v3's data logic.   node scripts/prototype-build/extract.mjs <page>
 */
import { createRequire } from "module";
import fs from "node:fs";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const EXTRACT = {
  calibrations: `(() => {
    const t = (e) => (e ? e.textContent.trim() : "");
    const q = (s, r = document) => r.querySelector(s);
    const tiles = [...document.querySelectorAll(".tm-metric")].map((m) => ({ label: t(q(".tm-label", m)), value: t(q(".tm-value", m)), go: !!q(".tm-go", m), svg: q(".tm-label svg", m).outerHTML }));
    const rows = [...document.querySelectorAll(".ts-rowbtn")].map((r) => ({
      tone: Number((q(".rp-avatar", r).className.match(/rp-avatar--(\\d)/) || [0, 1])[1]),
      initial: t(q(".rp-avatar", r)), name: t(q(".ts-learner-text b", r)), when: t(q(".ts-learner-text .an-muted", r)),
      agent: t(q(".ts-col-twin", r)), minutes: t(r.children[2]), questions: t(q(".ts-col-q", r)),
      stars: q(".ts-stars", r) ? Number(q(".ts-stars", r).getAttribute("aria-label")[0]) : null,
      starTone: q(".ts-stars", r) ? q(".ts-stars", r).className.replace("ts-stars", "").trim() : "",
      helpLabel: t(q(".ts-help-label", r)), issue: t(q(".ts-issue", r)),
    }));
    return {
      filters: [...document.querySelectorAll(".ts-filter button span")].map(t),
      tiles,
      rating: { value: t(q(".tm-rating-head b")), outOf: "/ 5", count: t(q(".tm-rating-count")), svg: q(".tm-rating > svg") ? q(".tm-rating > svg").outerHTML : "", icon: q(".tm-rating .tm-hero-label svg").outerHTML },
      paid: { pct: t(q(".tm-ring-pct")), amount: t(q(".tm-hero-value")), count: t(q(".tm-hero-count")), title: q(".tm-ringwrap").getAttribute("title"), icon: q(".tm-hero .tm-hero-label svg").outerHTML },
      attnIcon: q(".ts-attn-label svg").outerHTML, attnGo: q(".ts-attn-chip svg").outerHTML,
      attn: [...document.querySelectorAll(".ts-attn-chip")].map((c) => ({ tone: c.className.match(/--(danger|caution|info)/)[1], label: t(c) })),
      overline: t(q(".ts-table-title")),
      head: [...document.querySelectorAll(".an-row--head [role=columnheader]")].map(t),
      rows,
    };
  })()`,
  twinusers: `(() => {
    const t = (e) => (e ? e.textContent.trim() : "");
    const q = (s, r = document) => r.querySelector(s);
    return {
      title: t(q(".twin-bots-head .page-title")), sub: t(q(".twin-bots-head .home-meta")),
      head: [...document.querySelectorAll(".an-row--head [role=columnheader]")].map(t),
      rows: [...document.querySelectorAll(".us-link")].map((r) => ({
        tone: Number((q(".rp-avatar", r).className.match(/rp-avatar--(\\d)/) || [0, 1])[1]),
        name: t(q(".lr-name-ell", r)), email: t(q(".lr-email", r)), agents: t(r.children[2]), credits: t(r.children[3]), until: t(r.children[4]),
        used: t(q(".lr-text", r)), pct: parseFloat(q(".lr-bar > span", r).style.width), high: !!q(".lr-bar.is-high", r), low: !!q(".lr-text .badge", r),
      })),
    };
  })()`,
  knowledge: `(() => {
    const t = (e) => (e ? e.textContent.trim() : "");
    const q = (s, r = document) => r.querySelector(s);
    const qa = (s, r = document) => [...r.querySelectorAll(s)];
    const nodes = qa(".flow-node");
    const rect = (e) => ({ left: parseInt(e.style.left), top: parseInt(e.style.top), width: parseInt(e.style.width), height: e.style.height });
    const svgOf = (e) => (e && e.querySelector("svg") ? e.querySelector("svg").outerHTML : "");
    const srcOf = (e) => (e ? e.getAttribute("src") : "");
    return {
      board: { w: 1000, h: 584, links: q(".flow-links").innerHTML },
      tags: qa(".flow-tag").map((e) => ({ tone: e.className.match(/--(info|caution|success)/)[1], ...rect(e), text: t(e) })),
      knowledge: { ...rect(nodes[0]), kicker: t(q(".flow-kicker", nodes[0])), lines: qa(".flow-lines > span", nodes[0]).map((l) => ({ img: srcOf(q("img", l)), glyph: svgOf(q(".flow-line-ico--glyph", l)), label: t(q(".flow-line-platform", l)), value: t(q(".tabular", l)) })), sources: qa(".flow-source", nodes[0]).map((s) => ({ svg: svgOf(q(".source-ico", s)), label: t(s.children[1]), status: t(s.children[2]), connected: !!q(".flow-connected", s) })) },
      style: { ...rect(nodes[1]), kicker: t(q(".flow-kicker", nodes[1])), overview: t(q(".ts-overview")), rules: qa(".ts-rules .flow-source", nodes[1]).map((s) => ({ svg: svgOf(q(".source-ico", s)), label: t(s) })) },
      voice: { ...rect(nodes[2]), kicker: t(q(".flow-kicker", nodes[2])), portrait: srcOf(q(".flow-portrait img")), title: t(q(".flow-node-title", nodes[2])), note: t(q(".flow-node-note", nodes[2])), play: svgOf(q(".flow-wave-play")), talk: t(q(".call-actions .btn--sm:not(.flow-edit-icon)")), talkSvg: svgOf(q(".call-actions .btn--sm:not(.flow-edit-icon)")) },
      editSvg: svgOf(q(".flow-edit-icon")),
      backSvg: svgOf(q(".create-bar-back")), back: t(q(".create-bar-back")), updated: t(q(".flow-updated")), done: t(q(".flow-toolbar .btn--strong")),
      tabs: qa(".flow-tabs [role=tab]").map((b) => ({ label: b.childNodes[0].textContent.trim(), dot: !!q(".inbox-count", b), dotLabel: q(".inbox-count", b) ? q(".inbox-count", b).getAttribute("aria-label") : "", selected: b.getAttribute("aria-selected") === "true" })),
      tabsLabel: q(".flow-tabs").getAttribute("aria-label"),
    };
  })()`,
  roleplay: `(() => {
    const t = (e) => (e ? e.textContent.trim() : "");
    const q = (s, r = document) => r.querySelector(s);
    const qa = (s, r = document) => [...r.querySelectorAll(s)];
    const svgOf = (e) => (e && e.querySelector("svg") ? e.querySelector("svg").outerHTML : "");
    return {
      title: t(q(".lib-title")), searchSvg: svgOf(q(".lib-search")), placeholder: q("#role-search").getAttribute("placeholder"), newLabel: t(q(".lib-tools .btn--strong")), newSvg: svgOf(q(".lib-tools .btn--strong")),
      sectionTitle: t(q(".rp-created-head .page-title")),
      status: qa(".rp-created-bar .seg:not(.seg--icons) button").map((b) => ({ label: t(b), id: b.dataset.id, on: b.getAttribute("aria-pressed") === "true" })),
      view: qa(".seg--icons button").map((b) => ({ label: b.getAttribute("aria-label"), id: b.dataset.id, svg: svgOf(b), on: b.getAttribute("aria-pressed") === "true" })),
      cards: qa(".rp-card").map((c) => ({
        art: Number((q(".rp-art", c).className.match(/rp-art--(\\d)/) || [0, 0])[1]), who: t(q(".rp-who", c)), quote: t(q(".rp-quote-text > span:last-child", c)).replace(/^[“"]|[”"]$/g, ""),
        face: q(".rp-quote-face", c) ? q(".rp-quote-face", c).getAttribute("src") : "", title: t(q(".rp-title", c)), copy: t(q(".rp-copy", c)),
        learners: qa(".rp-learner-avatar:not(.rp-learner-avatar--more)", c).map((i) => ({ name: i.getAttribute("alt"), src: i.getAttribute("src") })),
        more: t(q(".rp-learner-avatar--more", c)),
      })),
    };
  })()`,
  sessions: `(() => {
    const t = (e) => (e ? e.textContent.trim() : "");
    const q = (s, r = document) => r.querySelector(s);
    const qa = (s, r = document) => [...r.querySelectorAll(s)];
    return {
      filters: qa(".ts-filter button").map((b) => ({ label: b.getAttribute("aria-label").split(":")[0], value: t(b) })),
      tiles: qa(".tm-metric").map((m) => ({ label: t(q(".tm-label", m)), value: t(q(".tm-value", m).childNodes[0]), muted: q(".tm-value .an-muted", m) ? t(q(".tm-value .an-muted", m)) : "", go: !!q(".tm-go", m), svg: q(".tm-label svg", m).outerHTML })),
      rating: { value: t(q(".tm-rating-head b")), count: t(q(".tm-rating-count")), svg: q(".tm-rating > svg").outerHTML, icon: q(".tm-rating .tm-hero-label svg").outerHTML },
      paid: { pct: t(q(".tm-ring-pct")), amount: t(q(".tm-hero-value")), count: t(q(".tm-hero-count")), title: q(".tm-ringwrap").getAttribute("title"), icon: q(".tm-hero .tm-hero-label svg").outerHTML },
      attnIcon: q(".ts-attn-label svg").outerHTML,
      attn: qa(".ts-attn-chip").map((c) => ({ tone: c.className.match(/--(danger|caution|info)/)[1], label: t(c) })),
      overline: t(q(".ts-table-title")), tableLabel: q(".ts-table").getAttribute("aria-label"),
      head: qa(".an-row--head [role=columnheader]").map(t),
      rows: qa(".ts-rowbtn").map((r) => ({
        tone: Number((q(".rp-avatar", r).className.match(/rp-avatar--(\\d)/) || [0, 1])[1]), name: t(q(".ts-learner-text b", r)), sub: t(q(".ts-learner-text .an-muted", r)),
        scenario: t(q(".rs-col-scn", r)), score: q(".rs-score", r) ? t(q(".rs-score", r).childNodes[0]) : "", scoreOf: q(".rs-score .an-muted", r) ? t(q(".rs-score .an-muted", r)) : "",
        weak: q(".rs-col-weak", r) ? t(q(".rs-col-weak", r).childNodes[0]) : "", weakScore: q(".rs-col-weak .an-muted", r) ? t(q(".rs-col-weak .an-muted", r)) : "",
        stars: q(".ts-stars", r) ? Number(q(".ts-stars", r).getAttribute("aria-label")[0]) : null, starTone: q(".ts-stars", r) ? q(".ts-stars", r).className.replace("ts-stars", "").trim() : "",
        helpLabel: t(q(".ts-help-label", r)), issue: t(q(".ts-issue", r)),
      })),
    };
  })()`,
  rpsettings: `(() => {
    const t = (e) => (e ? e.textContent.trim() : "");
    const q = (s, r = document) => r.querySelector(s);
    const qa = (s, r = document) => [...r.querySelectorAll(s)];
    const svgOf = (e) => (e && e.querySelector("svg") ? e.querySelector("svg").outerHTML : "");
    return {
      title: t(q(".lib-title")), create: t(q(".lib-tools .btn--strong")), createSvg: svgOf(q(".lib-tools .btn--strong")),
      panelTitle: t(q(".rps-panel-title")), intro: t(q(".rps-intro")),
      view: qa(".seg--icons button").map((b) => ({ label: b.getAttribute("aria-label"), id: b.dataset.id, svg: svgOf(b), on: b.getAttribute("aria-pressed") === "true" })),
      head: qa(".rps-row--head > span").map(t), moreSvg: svgOf(q(".rps-row-more")),
      rows: qa(".rps-row:not(.rps-row--head)").map((r) => ({
        photo: q("img.rps-row-photo", r) ? q("img.rps-row-photo", r).getAttribute("src") : "", initial: q(".rps-row-photo--initial", r) ? t(q(".rps-row-photo--initial", r)) : "",
        name: t(q(".rps-row-who b", r)), place: t(q(".rps-row-who > span", r)), role: t(q(".rps-row-role", r)), tag: t(q(".rps-row-tag:not(.rps-row-tag--more)", r)), more: t(q(".rps-row-tag--more", r)),
      })),
    };
  })()`,
  usage: `(() => {
    const t = (e) => (e ? e.textContent.trim() : "");
    const q = (s, r = document) => r.querySelector(s);
    const qa = (s, r = document) => [...r.querySelectorAll(s)];
    const svgOf = (e) => (e && e.querySelector("svg") ? e.querySelector("svg").outerHTML : "");
    return {
      title: t(q(".set-title")), sub: t(q(".set-sub")), tool: t(q(".set-tool .btn")), toolSvg: svgOf(q(".set-tool .btn")),
      tabs: qa(".set-seg button").map((b) => ({ label: t(b), id: b.dataset.id, on: b.getAttribute("aria-pressed") === "true" })),
      card: { label: t(q(".us-label")), big: t(q(".us-big").childNodes[0]), unit: t(q(".us-big span")), buy: t(q(".us-top .btn")), pct: parseFloat(q(".us-bar i").style.width), of: t(q(".us-of")), note: t(q(".us-note")), barLabel: q(".us-bar").getAttribute("aria-label") },
      h2: t(q(".us-h2")), h2sub: t(q(".us-sub")), tableLabel: q(".us-table").getAttribute("aria-label"),
      head: qa(".us-row--head [role=columnheader]").map(t),
      rows: qa(".us-row:not(.us-row--head)").map((r) => [...r.children].map(t)),
    };
  })()`,
  billing: `(() => {
    const t = (e) => (e ? e.textContent.trim() : "");
    const q = (s, r = document) => r.querySelector(s);
    const qa = (s, r = document) => [...r.querySelectorAll(s)];
    const svgOf = (e) => (e && e.querySelector("svg") ? e.querySelector("svg").outerHTML : "");
    const h = (e) => (e ? e.innerHTML.replace(/<svg[\\s\\S]*?<\\/svg>/g, "") : "");
    return {
      title: t(q(".set-title")), sub: t(q(".set-sub")), tool: t(q(".set-tool .btn")), toolSvg: svgOf(q(".set-tool .btn")),
      planH: t(q(".bl-col .us-h2")), planTitle: t(q(".bl-plan .bl-title").childNodes[0]), activeSvg: svgOf(q(".bl-active")), active: t(q(".bl-active")), planSubHtml: h(q(".bl-plan .bl-sub")),
      addonTitle: t(q(".bl-addon .bl-title").childNodes[0]), crown: svgOf(q(".bl-crown")), addonBadge: t(q(".bl-addon-badge")), addonSubHtml: h(q(".bl-addon .bl-sub")), addonButtons: qa(".bl-actions .btn").map(t),
      infoH: t(qa(".bl-col .us-h2")[1]), infoEdit: t(q(".us-sec-head .btn")),
      info: qa(".bl-info > div").map((d) => ({ svg: svgOf(d), title: t(q(".bl-title", d)), sub: t(q(".bl-sub", d)) })),
      invH: t(q(".us-h2--gap")), moreSvg: svgOf(q(".bl-menu-wrap")),
      invoices: qa(".bl-inv-row").map((r) => ({ svg: svgOf(r), name: t(q(".bl-inv-name", r)), date: t(q(".us-muted", r)), status: t(q(".badge", r)), amt: t(q(".bl-inv-amt", r)), credits: t(q(".bl-inv-cr", r)) })),
    };
  })()`,
  settings: `(() => {
    const t = (e) => (e ? e.textContent.trim() : "");
    const q = (s, r = document) => r.querySelector(s);
    const qa = (s, r = document) => [...r.querySelectorAll(s)];
    const svgOf = (e) => (e && e.querySelector("svg") ? e.querySelector("svg").outerHTML : "");
    return {
      title: t(q(".lib-title")), who: t(q(".settings-who .page-title")), whoSub: t(q(".settings-who .home-meta")),
      groups: qa(".settings-group").map(t),
      modules: qa(".features-card .rps-row").map((r) => ({ label: t(q(".rps-label", r)), help: t(q(".rps-help", r)), on: q(".rps-switch", r).getAttribute("aria-checked") === "true" })),
      cards: qa(".fast-follow-card").map((c) => ({ name: t(q(".fast-follow-name", c)), svg: svgOf(c) })),
    };
  })()`,
};

const id = process.argv[2];
if (!EXTRACT[id]) { console.error("no extractor for", id, Object.keys(EXTRACT)); process.exit(1); }
const browser = await chromium.launch();
const p = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await p.goto("http://localhost:8791/v3/index.html?app=1", { waitUntil: "domcontentloaded" });
await p.waitForTimeout(1500);
await p.locator(`.nav-item[data-id="${id}"], .rail-foot-nav [data-id="${id}"]`).first().click();
await p.waitForTimeout(900);
const data = await p.evaluate(EXTRACT[id]);
fs.mkdirSync("prototype-build/src/data", { recursive: true });
fs.writeFileSync(`prototype-build/src/data/${id}.json`, JSON.stringify(data, null, 1));
console.log(id, Object.keys(data).join(","), data.rows ? data.rows.length + " rows" : "");
await browser.close();
