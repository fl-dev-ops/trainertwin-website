#!/usr/bin/env python3
"""
Generate the library icons the V3 prototype uses from the SVGs scraped into prototype-build/src (read only).
Writes src/components/icons.tsx (named React components, 24 viewBox, stroke 2) and
prototype-build/src/iconSigs.json (shape signature -> component name, so scraped data resolves to library icons).
Run:  python3 scripts/prototype-build/gen-icons.py
"""
import json, re, glob, os

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SRC = os.path.join(ROOT, "prototype-build/src")

def sig_of(inner):
    parts = []
    for m in re.finditer(r"<(path|circle|rect|line|polyline)\b([^>]*?)/?>", inner):
        tag, attrs = m.group(1), m.group(2)
        a = dict(re.findall(r'([\w-]+)="([^"]*)"', attrs))
        if tag == "path" and "d" in a: parts.append("p:" + re.sub(r"\s+", " ", a["d"]).strip())
        elif tag == "circle": parts.append(f"c:{a.get('cx')},{a.get('cy')},{a.get('r')}")
        elif tag == "rect": parts.append(f"r:{a.get('x','')},{a.get('y','')},{a.get('width')},{a.get('height')},{a.get('rx','')}")
        elif tag == "line": parts.append(f"l:{a.get('x1')},{a.get('y1')},{a.get('x2')},{a.get('y2')}")
    return "|".join(parts)

def jsx_of(inner):
    out = []
    for m in re.finditer(r"<(path|circle|rect|line)\b([^>]*?)/?>", inner):
        tag, attrs = m.group(1), m.group(2)
        a = dict(re.findall(r'([\w-]+)="([^"]*)"', attrs))
        keep = {k: v for k, v in a.items() if k in ("d", "cx", "cy", "r", "x", "y", "width", "height", "rx", "x1", "y1", "x2", "y2")}
        if tag == "path" and keep.get("d") == "M0 0h24v24H0z": continue  # Tabler's invisible bounding box
        props = " ".join(f'{k}="{v}"' for k, v in keep.items())
        out.append(f"    <{tag} {props} />")
    return "\n".join(out)

# Where each icon comes from: (component name, data file or generated key, dotted key path, optional nth svg in a list)
def load(path):
    return json.load(open(os.path.join(SRC, "data", path)))

gen = open(os.path.join(SRC, "generated.ts")).read()
def gen_icon(name):
    m = re.search(rf'^ "{name}": "(.*)",?$', gen, re.M)
    return m.group(1).encode().decode("unicode_escape") if m else None

def svg_inner(s):
    m = re.search(r"<svg[^>]*>(.*?)</svg>", s, re.S)
    return m.group(1) if m else s

ICONS = {}
def add(name, src):
    if src: ICONS[name] = svg_inner(src)

# Nav and menu icons from V3's own icon() / menuIcon() sets
for n, key in [("SparklesIcon", "setup"), ("MessagesIcon", "messages"), ("UsersIcon", "learners"), ("BrainIcon", "brain"), ("UserCheckIcon", "role"),
               ("HistoryIcon", "sessions"), ("UserCogIcon", "rpsettings"), ("CoinsIcon", "credits"), ("CreditCardIcon", "billing"), ("LifebuoyIcon", "lifebuoy"),
               ("PencilIcon", "edit"), ("SlidersIcon", "sliders"), ("PlayIcon", "play"), ("UserPlusIcon", "assign"), ("ShareIcon", "share"), ("TrashIcon", "trash")]:
    add(n, gen_icon(key))
# The rest come from the scraped data
cal = load("calibrations.json"); sess = load("sessions.json"); ad = load("agent-detail.json"); tr = load("try.json"); bu = load("brain-ui.json")
bl = load("billing.json"); st = load("settings.json"); kn = load("knowledge.json"); us = load("usage.json"); sd = load("twin-session-detail.json")
add("MessagesIcon", cal["tiles"][0]["svg"])
add("ClockIcon", cal["tiles"][1]["svg"]); add("QuestionCircleIcon", cal["tiles"][2]["svg"]); add("FlagIcon", cal["tiles"][3]["svg"])
add("StarOutlineIcon", cal["rating"]["icon"]); add("DollarCircleIcon", cal["paid"]["icon"])
add("ChartBarIcon", st["cards"][0]["svg"]); add("UsersGroupIcon", st["cards"][1]["svg"]); add("UserIcon", st["cards"][2]["svg"]); add("BriefcaseIcon", st["cards"][3]["svg"])
add("FileIcon", ad["bf"]["svg"]); add("ListIcon", us["toolSvg"])
add("MailIcon", bl["info"][0]["svg"]); add("BuildingIcon", bl["info"][1]["svg"]); add("MapPinIcon", bl["info"][2]["svg"]); add("PhoneIcon", bl["info"][3]["svg"])
add("CrownIcon", bl["crown"]); add("ReceiptIcon", bl["invoices"][0]["svg"]); add("RefreshIcon", bl["invoices"][1]["svg"])
add("CalendarIcon", bu["questions"]["chips"][1]["svg"]); add("SearchIcon", bu["questions"]["searchSvg"])
add("AlertCircleIcon", bu["issues"]["menu"][0]["svg"]); add("CheckCircleIcon", bu["issues"]["menu"][1]["svg"])
add("UploadIcon", kn["knowledge"]["lines"][4]["glyph"])
add("PhoneEndIcon", tr["endSvg"]); add("MonitorIcon", tr["views"][0]["svg"]); add("SmartphoneIcon", tr["views"][1]["svg"])
add("CameraOffIcon", tr["ctrls"][0]["svg"]); add("MicIcon", tr["ctrls"][1]["svg"]); add("ScreenShareIcon", tr["ctrls"][2]["svg"])
add("PaperclipIcon", tr["ctrls"][3]["svg"]); add("ChatIcon", tr["ctrls"][4]["svg"]); add("ReportFlagIcon", tr["reportSvg"]); add("ArrowUpIcon", tr["chat"]["sendSvg"])
add("ThumbUpIcon", sd[0]["rateSvgs"][0]); add("ThumbDownIcon", sd[0]["rateSvgs"][1])
add("StarIcon", None)
ICONS["ChevronDownIcon"] = '<path d="M6 9l6 6l6 -6" />'
ICONS["PlusIcon"] = '<path d="M12 5v14M5 12h14" />'
ICONS["StarIcon"] = '<path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />'
ICONS["ChevronUpIcon"] = '<path d="M6 15l6 -6l6 6" />'

# Existing hand-made icons in UiIcons.tsx stay; do not redefine them
existing = set(re.findall(r"export const (\w+) =", open(os.path.join(ROOT, "src/components/UiIcons.tsx")).read()))
lines = ['import type { SVGProps } from "react";', "",
         "/**", " * More outline icons, generated from the glyphs the V3 prototype draws (`scripts/prototype-build/gen-icons.py`).",
         " * Same spec as UiIcons.tsx: 24 viewBox, stroke 2, round caps and joins, `currentColor`, decorative (`aria-hidden`).",
         " * Size with the `size` prop (default 16) or a width/height class.", " */",
         "type IconProps = SVGProps<SVGSVGElement> & { size?: number };", "",
         "function Svg({ size = 16, children, ...rest }: IconProps) {", "  return (",
         '    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...rest}>',
         "      {children}", "    </svg>", "  );", "}", ""]
sigs = {}
# Extra shapes V3 draws that map onto an icon we already have (often a 16px-box twin of a 24px icon).
cr = load("create.json"); rp = load("rpsettings.json"); ro = load("roleplay.json")
ALIAS = [
    ("SparklesIcon", cr["suggestions"][0]["svg"]), ("ArrowUpRightIcon", ad["bf"]["viewAllSvg"]), ("ArrowUpRightIcon", ad["stats"][0]["viewSvg"]),
    ("CheckIcon", bl["activeSvg"]), ("XIcon", kn["style"]["rules"][1]["svg"]), ("XIcon", tr["chat"]["closeSvg"]), ("ArrowLeftIcon", ad["backSvg"]),
    ("EyeIcon", cal["attnIcon"]), ("SettingsIcon", "<svg>" + gen_icon("settings") + "</svg>"),
    ("MoreVerticalIcon", ad["moreSvg"]), ("MoreVerticalIcon", rp["moreSvg"]), ("ChevronDownIcon", ad["rangeSvg"]), ("MicIcon", cr["micSvg"]),
    ("ArrowUpIcon", cr["submitSvg"]), ("SearchIcon", ro["searchSvg"]), ("PlusIcon", ro["newSvg"]),
    ("RowsIcon", rp["view"][1]["svg"]), ("LayoutGridIcon", rp["view"][0]["svg"]), ("PlayIcon", kn["voice"]["play"]),
    ("HistoryClockIcon", bu["questions"]["menu"][1]["svg"]), ("TargetIcon", sess["tiles"][2]["svg"]),
]
ICONS["RowsIcon"] = '<path d="M4 6h16M4 12h16M4 18h16" />'
ICONS["LayoutGridIcon"] = '<path d="M4 4h6v6h-6z" /><path d="M14 4h6v6h-6z" /><path d="M4 14h6v6h-6z" /><path d="M14 14h6v6h-6z" />'
add("HistoryClockIcon", bu["questions"]["menu"][1]["svg"]); add("TargetIcon", sess["tiles"][2]["svg"])
sigs = {}
for name in sorted(ICONS):
    if name in existing:
        sigs[sig_of(ICONS[name])] = name
        continue
    body = jsx_of(ICONS[name])
    if not body: continue
    lines += [f"export const {name} = (p: IconProps) => (", "  <Svg {...p}>", body, "  </Svg>", ");", ""]
    sigs[sig_of(ICONS[name])] = name
for name, svg in ALIAS:
    if svg: sigs[sig_of(svg_inner(svg))] = name
open(os.path.join(ROOT, "src/components/icons.tsx"), "w").write("\n".join(lines))
json.dump(sigs, open(os.path.join(SRC, "iconSigs.json"), "w"), indent=1)
print(len(sigs), "icons:", ", ".join(sorted(sigs.values())))
