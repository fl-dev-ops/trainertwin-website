import { chromium } from "playwright";

async function check(page, width, label) {
  await page.setViewportSize({ width, height: 900 });
  await page.goto("http://127.0.0.1:3000/TrainerTwin_home", {
    waitUntil: "networkidle",
  });
  await page.locator("#who").scrollIntoViewIfNeeded();
  const data = await page.evaluate(() => {
    const tiles = document.querySelector(".who-tiles");
    const cards = [...document.querySelectorAll(".who-card")];
    const titles = cards.map((c) => c.querySelector("h3")?.textContent?.trim());
    const other = document.querySelector(".who-other h3")?.textContent?.trim();
    const prev = document.querySelector(
      '.who-arrow[aria-label="Show previous fields"]',
    );
    const next = document.querySelector(
      '.who-arrow[aria-label="Show next fields"]',
    );
    const rect = tiles.getBoundingClientRect();
    const vis = cards.map((c) => {
      const r = c.getBoundingClientRect();
      const visible = Math.max(
        0,
        Math.min(r.right, rect.right) - Math.max(r.left, rect.left),
      );
      return {
        title: c.querySelector("h3")?.textContent?.trim(),
        width: Math.round(r.width),
        visible: Math.round(visible),
        fully: visible > r.width - 2,
      };
    });
    return {
      cardCount: cards.length,
      titles,
      other,
      prevDisabled: prev?.disabled ?? null,
      nextDisabled: next?.disabled ?? null,
      scrollWidth: Math.round(tiles.scrollWidth),
      clientWidth: Math.round(tiles.clientWidth),
      overflow: Math.round(tiles.scrollWidth - tiles.clientWidth),
      vis,
      wrap: getComputedStyle(tiles).flexWrap,
    };
  });
  return { label, width, ...data };
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
const desktop = await check(page, 1280, "desktop");
await page.click('.who-arrow[aria-label="Show next fields"]');
await page.waitForTimeout(450);
const afterNext = await page.evaluate(() => {
  const tiles = document.querySelector(".who-tiles");
  const prev = document.querySelector(
    '.who-arrow[aria-label="Show previous fields"]',
  );
  return {
    scrollLeft: Math.round(tiles.scrollLeft),
    prevDisabled: prev.disabled,
  };
});
await page.click('.who-arrow[aria-label="Show next fields"]');
await page.waitForTimeout(450);
const atEnd = await page.evaluate(() => {
  const tiles = document.querySelector(".who-tiles");
  const next = document.querySelector(
    '.who-arrow[aria-label="Show next fields"]',
  );
  const prev = document.querySelector(
    '.who-arrow[aria-label="Show previous fields"]',
  );
  return {
    scrollLeft: Math.round(tiles.scrollLeft),
    max: Math.round(tiles.scrollWidth - tiles.clientWidth),
    nextDisabled: next.disabled,
    prevDisabled: prev.disabled,
  };
});
const mobile = await check(page, 390, "mobile");
await browser.close();
console.log(JSON.stringify({ desktop, afterNext, atEnd, mobile }, null, 2));
