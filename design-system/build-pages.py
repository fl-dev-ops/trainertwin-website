#!/usr/bin/env python3
"""
RETIRED as the publishing path — 30 Sep 2026, the same day it was built.

Splits design-system/foundations.html into one page per §00-§10 section — 11
real, separately-loaded documents. That broke theme persistence: Claude's
artifact viewer intercepts a click on an internal link and re-issues its own
signed URL for the next file rather than a plain browser navigation, which
silently drops any query string riding on the href (confirmed on the live
artifact — dark mode "worked" only because it happened to match that
environment's OS-level preference; light never survived a single click). A
fresh, differently-tokened iframe per click means storage can't be trusted
either. foundations.html is a single document again, with its own in-page
section-switcher (JS, at the bottom of the file) standing in for the
per-file navigation this script built — see the CSS/JS comments there dated
30 Sep 2026 for the full account.

This script is left in the repo rather than deleted, in case the platform's
navigation behaviour ever changes and a real multi-file split becomes viable
again — but do NOT run it to produce what gets published; publish
foundations.html directly. Running `python3 build-pages.py` still works
mechanically (it will split the current single-document source right back
into 11 files), it just produces something that must not be shipped.

Usage (regenerates pages/, kept only for reference — do not publish the result):
    python3 build-pages.py            # writes design-system/pages/*.html + app.css/app.js
    python3 build-pages.py --check    # also asserts nothing was left out
"""
import re, sys
from pathlib import Path

ROOT = Path(__file__).parent
SRC = (ROOT / "foundations.html").read_text(encoding="utf-8")
OUT = ROOT / "pages"
OUT.mkdir(exist_ok=True)

def between(text, start_pat, end_pat, label):
    m = re.search(start_pat, text)
    n = re.search(end_pat, text)
    assert m and n and n.start() > m.end(), f"marker not found: {label}"
    return text[m.end():n.start()]

STYLE_CSS = between(SRC, r"<style>\n", r"\n</style>", "style block")
SCRIPT_JS = between(SRC, r"<script>\n", r"\n</script>", "script block")
RAILMARK  = between(SRC, r'<div class="rail-mark">', r"\n    </div>\n    <nav", "rail-mark")
RAILMARK  = '<div class="rail-mark">' + RAILMARK + "\n    </div>"
MASTHEAD  = between(SRC, r'<header class="masthead">', r"\n    </header>", "masthead")
MASTHEAD  = '<header class="masthead">' + MASTHEAD + "\n    </header>"
FOOTER    = between(SRC, r"<footer>", r"\n    </footer>", "footer")
FOOTER    = "<footer>" + FOOTER + "\n    </footer>"

# ---------------------------------------------------------------- sections
# id, published filename, nav label, 16x16 stroke icon (matches the existing
# sun/moon toggle: stroke="currentColor" stroke-width="1.5", round caps/joins)
SECTIONS = [
    ("decisions",  "index.html",           "Decisions",
     '<circle cx="8" cy="8" r="6.2" stroke="currentColor" stroke-width="1.5"/><path d="m5 8.2 2.1 2.1L11.2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>'),
    ("color",      "colour.html",          "Colour",
     '<path d="M8 1.6c3 2.4 4.9 5 4.9 7.5a4.9 4.9 0 1 1-9.8 0c0-2.5 1.9-5.1 4.9-7.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>'),
    ("audit",      "contrast-audit.html",  "Contrast audit",
     '<circle cx="8" cy="8" r="6.2" stroke="currentColor" stroke-width="1.5"/><path d="M8 1.8a6.2 6.2 0 0 1 0 12.4Z" fill="currentColor"/>'),
    ("type",       "typography.html",      "Typography",
     '<path d="M3 3.6h10M8 3.6v8.8M5.6 12.4h4.8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>'),
    ("shape",      "space-shape.html",     "Space &amp; shape",
     '<rect x="2.2" y="2.2" width="11.6" height="11.6" rx="2" stroke="currentColor" stroke-width="1.5" stroke-dasharray="1.6 1.8"/><rect x="5.6" y="5.6" width="4.8" height="4.8" rx="1" stroke="currentColor" stroke-width="1.5"/>'),
    ("motion",     "motion.html",          "Motion",
     '<path d="M2 12.5c2 0 2-9 6-9s4 9 6 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="2" cy="12.5" r="1.1" fill="currentColor"/><circle cx="14" cy="12.5" r="1.1" fill="currentColor"/>'),
    ("logo",       "logo.html",            "Logo &amp; the well",
     '<path d="M6 1.6h4a2 2 0 0 1 2 2v1.6a2 2 0 0 1-2 2H8.4a1 1 0 0 0-1 1v.4a1 1 0 0 0 1 1H10a2 2 0 0 1 2 2v1.6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1.6a2 2 0 0 1 2-2h1.6a1 1 0 0 0 1-1v-.4a1 1 0 0 0-1-1H6a2 2 0 0 1-2-2V3.6a2 2 0 0 1 2-2Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/>'),
    ("patterns",   "patterns.html",        "Signature patterns",
     '<path d="M8 1.6v3.2M8 11.2v3.2M1.6 8h3.2M11.2 8h3.2M3.6 3.6l2.3 2.3M10.1 10.1l2.3 2.3M12.4 3.6l-2.3 2.3M5.9 10.1l-2.3 2.3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>'),
    ("components", "components.html",     "Components",
     '<rect x="2" y="2" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.5"/><rect x="9" y="2" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.5"/><rect x="2" y="9" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.5"/><rect x="9" y="9" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.5"/>'),
    ("layout",     "layout.html",          "Layout &amp; structure",
     '<rect x="1.8" y="2.4" width="12.4" height="11.2" rx="1.6" stroke="currentColor" stroke-width="1.5"/><path d="M1.8 5.8h12.4M5.6 5.8v7.8" stroke="currentColor" stroke-width="1.5"/>'),
    ("open",       "open.html",            "Still open",
     '<circle cx="8" cy="8" r="6.2" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2.2 2"/><circle cx="8" cy="8" r="1" fill="currentColor"/>'),
]
ID_TO_FILE = {sid: fname for sid, fname, *_ in SECTIONS}

section_html = {}
for sid, *_ in SECTIONS:
    m = re.search(r'<section id="%s">' % re.escape(sid), SRC)
    assert m, sid
    depth = 1
    i = m.end()
    while depth:
        nxt = re.search(r"<section\b|</section>", SRC[i:])
        assert nxt, sid
        if nxt.group(0) == "</section>":
            depth -= 1
        else:
            depth += 1
        i += nxt.end()
    section_html[sid] = SRC[m.end():i - len("</section>")].rstrip() + "\n"

if "--check" in sys.argv:
    covered = sum(len(v) for v in section_html.values())
    print(f"sections extracted: {len(section_html)}, {covered} chars total")

# ---------------------------------------------------------------- nav / css
EXTRA_CSS = """
/* --- multi-page nav, added 29 Sep 2026 (icons, no numbers; one page per section) --- */
.rail a svg { flex: none; color: var(--color-text-tertiary); transition: color var(--duration-quick) var(--ease-standard); }
.rail a:hover svg { color: var(--color-text-primary); }
.rail a[aria-current="page"] {
  color: var(--color-text-primary); border-left-color: var(--color-text-primary);
  font-weight: var(--weight-label);
}
.rail a[aria-current="page"] svg { color: var(--color-text-primary); }
"""
# align-items/justify-content and the `.num` removal both now live directly in
# foundations.html's own `.rail a` rule — no patching needed here any more.
STYLE_CSS_PATCHED = STYLE_CSS + EXTRA_CSS

def page(sid, fname, label, icon, body, is_landing):
    nav = "\n".join(
        '      <a href="%s"%s><svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">%s</svg><span>%s</span></a>'
        % (f2, ' aria-current="page"' if s2 == sid else "", i2, l2)
        for s2, f2, l2, i2 in SECTIONS
    )
    # &mdash; entity, not a literal em-dash — matches the rest of the document's
    # own convention, and sidesteps a real bug found while verifying this script:
    # with no <meta charset>, a raw UTF-8 em-dash in <title> rendered as mojibake
    # ("Decisions â€” TrainerTwin...") because the browser guessed Latin-1 for a
    # page with no declared encoding. <meta charset="utf-8"> is added below too,
    # since the source content (curly quotes, etc.) still needs it either way.
    title = f"{label} &mdash; TrainerTwin Foundations"
    return f"""<meta charset="utf-8">
<title>{title}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Noto+Serif:ital,wght@0,400..700;1,400..700&display=swap">
<link rel="stylesheet" href="app.css">

<div class="shell">

  <aside class="rail">
{RAILMARK}
    <nav aria-label="Sections">
{nav}
    </nav>
  </aside>

  <main class="content">

{MASTHEAD if is_landing else ""}
    <section id="{sid}">
{body}    </section>

{FOOTER}

  </main>
</div>
<script src="app.js"></script>
"""

for sid, fname, label, icon in SECTIONS:
    is_landing = (sid == "decisions")
    out = page(sid, fname, label, icon, section_html[sid], is_landing)
    (OUT / fname).write_text(out, encoding="utf-8")
    if is_landing:
        # decisions.html duplicates index.html's content — the direct, explicit
        # filename that works whether or not the bare artifact URL literally
        # serves "index.html" underneath. See build script docstring.
        (OUT / "decisions.html").write_text(out, encoding="utf-8")

(OUT / "app.css").write_text(STYLE_CSS_PATCHED, encoding="utf-8")
(OUT / "app.js").write_text(SCRIPT_JS, encoding="utf-8")

print(f"wrote {len(SECTIONS)+3} files to {OUT}")  # +index, +decisions dup, +app.css, +app.js (app.js counted once, adjust below)
