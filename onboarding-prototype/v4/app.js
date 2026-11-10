/* TrainerTwin onboarding — Olga Sinenko. Product UI on the design-system tokens. */

const state = {
  step: 1,
  link: "",
  linkBlurred: false,
  linkAttention: false,
  findShineDone: false,
  presenceLook: "yt1",
  presenceUpload: "",
  presenceVoice: "yours",
  presenceLibrary: "",
  voiceFilter: "female",
  voiceDialog: false,
  talkOpen: false,
  talk: null,
  presencePhase: "choose",
  callLive: false,
  callMode: "voice",
  callCelebrate: false,
  twinReady: false,
  studioView: "profile",
  studioFocus: "twin",
  studioZoom: 1,
  studioDialog: null,
  studioStatus: "",
  studioBehavior: "",
  studioStyles: null,
  studioStyleDraft: [],
  studioStyleEditLine: null,
  studioSnap: null,
  studioBio: "",
  roleCreate: false,
  roleStep: 1,
  roleAvatarOpen: false,
  roleLookPick: "yt1",
  roleDraft: null,
  roleEditId: "",
  roleAsk: "",
  teeteeOpen: false,
  teeteeBubble: true,
  teeteeShown: false,
  teeteeThread: [],
  teeteeDraft: "",
  teeteeMode: "chat",
  teeteeSpeaking: false,
  customRoles: [],
  demoTaskId: null,
  demoReveal: 0,
  demoPromptOpen: false,
  demoPromptSeen: false,
  demoInteractive: false,
  demoEnded: false,
  demoFeedback: null,
  demoFeedbackReasons: [],
  demoFeedbackText: "",
  demoSeconds: 0,
  demoChatOpen: true,
  demoDraft: "",
  demoExtra: [],
  demoMarks: {},
  demoScreenShare: false,
  demoIssueOpen: false,
  confirm: null,
  botCreate: false,
  botStep: 1,
  botDraft: null,
  customBots: [],
  demoIssueReasons: [],
  demoIssueText: "",
  roleFilter: "published",
  roleView: "card",
  roleQuery: "",
  roleMenuId: "",
  roleMenuFocus: false,
  roleDetailId: "",
  botDetailId: "",
  rpSettings: { persona: "daniel", voice: "olga", pace: "Normal", useKnowledge: true, length: "10 min", feedback: "After each session", score: true },
  rpsStep: 1,
  rpsCat: "sales",
  rpsInd: { sales: "Real estate", interview: "Technology", communication: "Customer support" },
  rpDefaults: { sales: "daniel", interview: "aarav", communication: "rosa" },
  rpsCreate: false,
  rpsDetailId: "",
  rpsDraft: null,
  rpPersonas: [],
  rpKnow: [
    { id: "website", name: "Website", meta: "olgasiliveitup.com · 24 pages", on: true },
    { id: "linkedin", name: "LinkedIn", meta: "Profile and 12 posts", on: true },
    { id: "youtube", name: "YouTube", meta: "6 videos", on: true },
    { id: "instagram", name: "Instagram", meta: "Not connected", on: false },
    { id: "drive", name: "Google Drive", meta: "Not connected", on: false },
    { id: "notion", name: "Notion", meta: "Not connected", on: false }
  ],
  rpKnowDraft: "",
  botEditId: "",
  botCalibrateId: "",
  botCalibrateReturn: "",
  botDetailTab: "learners",
  botChatId: "",
  roleChatId: "",
  sessionReportId: "",
  sessionReportRole: "",
  twinSessionId: "",
  twinSessionBot: "",
  twinRatings: {},
  voicePlaying: "",
  twinSessFilter: { bot: "all", date: "all" },
  sessionsView: "",
  botSettings: {},
  twinPersonaOpen: false,
  rpsEditId: "",
  rpsReturn: "",
  rpOverrides: {},
  twinOff: null,
  knowOpen: false,
  sharedStatus: {},
  sharedRemoved: [],
  botsRemoved: [],
  publishedExtra: [],
  draftsRemoved: [],
  searching: false,
  profiles: [
    { id: "web", platform: "Website", handle: "olgasiliveitup.com", meta: "14 pages", readMeta: "14 pages · 3 programmes", found: true, ticked: true, status: "idle" },
    { id: "li", platform: "LinkedIn", handle: "in/olgasi", meta: "36 posts", readMeta: "36 posts · key topics extracted", found: true, ticked: true, status: "idle" },
    { id: "yt", platform: "YouTube", handle: "@OlgaSinenkoRealEstate", meta: "48 videos", readMeta: "48 videos · 31 h transcribed", found: true, ticked: true, status: "idle" },
    { id: "x", platform: "X", handle: "", meta: "", readMeta: "Posts from the profile you added", found: false, ticked: false, status: "idle" },
    { id: "ig", platform: "Instagram", handle: "@olga_sinenko.official", meta: "120 reels", readMeta: "120 reels · captions and audio", found: true, ticked: true, status: "idle" },
    { id: "tg", platform: "Telegram", handle: "@Olgasidxb", meta: "86 channel posts", readMeta: "86 channel posts", found: true, ticked: true, status: "idle" }
  ],
  editing: null,
  editDraft: "",
  xAdding: false,
  xDraft: "",
  missed: "",
  addKnowledge: false,
  addKnowledgeOpen: false,
  knowledgeStarted: false,
  knowledgeBuilt: false,
  knowledgeNow: "",
  knowledgeLog: [],
  knowledgeGroupStep: -1,
  knowledgeGroupSub: 0,
  knowledgeUpsellOpen: false,
  knowledgeUpsellShown: false,
  knowledgeExploring: false,
  teeteeProgressStep: 0,
  teeteeProgressDone: 0,
  knowledgeReadyToast: false,
  lineStatus: {},
  lineEditing: null,
  lineDraft: "",
  lineOpen: null,
  dismissedOpen: false,
  removedOpen: false,
  drive: false,
  notion: false,
  notionOpen: false,
  notionLink: "",
  knowledgeFiles: [],
  samples: [
    { id: "cold", group: "explainer", title: "Cold-calling walkthrough", source: "YouTube", duration: "11:24", age: "3 weeks ago", older: false, kept: true, status: "idle", seen: 6, evidence: ["YouTube · Cold-calling walkthrough · 03:40: Walks the call as numbered steps."] },
    { id: "offplan", group: "explainer", title: "Off-plan objections, explained", source: "YouTube", duration: "8:02", age: "2 months ago", older: false, kept: true, status: "idle", seen: 4, evidence: ["YouTube · Off-plan objections · 02:10: Answers the wait-a-year objection in dirhams."] },
    { id: "master", group: "lecture", title: "Masterclass for agents", source: "YouTube", duration: "52:10", age: "1 month ago", older: false, kept: true, status: "idle", seen: 9, evidence: ["YouTube · Masterclass for agents · 22:30: Uses a real price band to reframe cost."] },
    { id: "webinar", group: "lecture", title: "Early sales webinar", source: "YouTube", duration: "1:04:18", age: "4 years ago", older: true, kept: false, status: "idle", seen: 3, evidence: ["YouTube · Early sales webinar · 18:00: Older session, still using the same close."] },
    { id: "liveqa", group: "qa", title: "Live Q&A with agents", source: "YouTube", duration: "41:12", age: "5 weeks ago", older: false, kept: true, status: "idle", seen: 8, evidence: ["YouTube · Live Q&A · 40:10: Closes on one thing to do before the next call."] },
    { id: "voice", group: "qa", title: "Voice-note answers", source: "Telegram", duration: "12 notes", age: "this month", older: false, kept: true, status: "idle", seen: 5, evidence: ["Telegram · Voice-note answers: Most notes end with a single task for the day."] },
    { id: "hesitant", group: "roleplay", title: "Hesitant buyer roleplay", source: "Instagram", duration: "0:42", age: "1 week ago", older: false, kept: true, status: "idle", seen: 4, evidence: ["Instagram · Hesitant buyer roleplay: Acts out both sides of the call."] },
    { id: "objection", group: "roleplay", title: "Objection roleplay session", source: "YouTube", duration: "7:15", age: "2 months ago", older: false, kept: true, status: "idle", seen: 7, evidence: ["YouTube · Objection roleplay · 07:15: Switches into the buyer’s voice, then breaks it down."] }
  ],
  uploads: [],
  styleStarted: false,
  styleBuilt: false,
  patternsShown: 0,
  openPattern: null,
  stageOffer: false,
  avatar: { phase: "waiting", question: 0, seconds: 0, modes: { conversational: false, stage: false, roleplay: false, qa: false } },
  modeRecording: null,
  modeSeconds: 0,
  coachingType: "realestate",
  typeMenu: false,
  showMore: { live: false, content: false, growth: false },
  selected: new Set(),
  flipped: null,
  suggestions: [
    { id: "sug-carousel", tier: "growth", title: "Carousel on off-plan hesitation", reason: "You posted about it three times this week.", blurb: "A carousel from this week’s posts on buyers who want to wait.", preview: ["Most agents don’t lose the deal on price. They lose it because they argued with the wait."] },
    { id: "sug-clips", tier: "growth", title: "Four clips from your newest masterclass", reason: "New YouTube video found this morning.", blurb: "Cuts from the masterclass uploaded this morning.", preview: ["04:12 Opening line on a cold call (0:38)", "17:50 The follow-up text after a viewing (0:45)"] },
    { id: "sug-split", tier: "live", title: "Commission-split answers for your Q&A twin", reason: "Agents asked about splits 12 times in your comments.", blurb: "Short answers on commission splits, in your wording.", preview: ["Agent: “The other agent wants half on an off-plan I sourced.”", "Twin: “If you sourced it, say the split before you book the viewing.”"] }
  ],
  dismissed: new Set(),
  pinned: [],
  asks: [],
  composer: "",
  listening: false,
  listeningTarget: null,
  askTopic: "",
  askMode: "roleplay",
  twinAsk: "",
  twinAttachments: [],
  botWhy: null,
  botShare: "",
  botShareCopied: false,
  twinAskMode: "bot",
  askMenu: "",
  teeAskMode: "roleplay",
  twinInfoOpen: false,
  nav: null,
  railCollapsed: false,
  theme: (function () {
    try {
      const saved = localStorage.getItem("tt-theme");
      if (saved === "dark" || saved === "light") return saved;
    } catch (err) { /* private mode */ }
    return "light";
  })(),
  setupStep: 1,
  railOpen: null,
  drawer: null,
  conversationQuery: "",
  runId: null,
  runFields: {},
  reveal: 0,
  toast: null,
  afterFocus: null,
  firstCallDone: false,
  studioTab: "bots",
  calibId: "",
  calOverviewId: "",
  calibRatings: {},
  reelsPublished: {},
  customReels: [],
  roleManual: null,
  videosAsk: "",
  analyticsAsk: "",
  analyticsAnswer: null,
  auth: null,
  authEmail: "",
  authPassword: "",
  authConfirm: "",
  authVia: "email",
  authError: "",
  authShowPassword: false,
  authShowConfirm: false,
  accountReady: false,
  authPendingAction: null
};

let voiceRecognizer = null;

const VOICE_TARGETS = {
  composer: "composer",
  "twin-ask": "twinAsk",
  "tee-ask": "roleAsk",
  "tee-chat-input": "teeteeDraft",
  "tee-talk": "teeteeDraft"
};

function startListening(targetId) {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  state.listening = true;
  state.listeningTarget = targetId;
  render();
  if (!SR) return;
  try {
    voiceRecognizer = new SR();
    voiceRecognizer.lang = "en-US";
    voiceRecognizer.interimResults = true;
    voiceRecognizer.continuous = true;
    voiceRecognizer.onresult = (e) => {
      let transcript = "";
      for (let i = 0; i < e.results.length; i++) transcript += e.results[i][0].transcript;
      state[VOICE_TARGETS[targetId]] = transcript;
      const input = document.getElementById(targetId);
      if (input) {
        input.value = transcript;
        if (input.tagName === "TEXTAREA") {
          input.style.height = "auto";
          input.style.height = input.scrollHeight + "px";
        }
      }
      if (targetId === "twin-ask") {
        const ghost = document.querySelector(".twin-ask-ghost");
        if (ghost) ghost.hidden = !!transcript;
      }
      const live = document.querySelector(".tee-talk-live");
      if (live) live.textContent = transcript;
      else if (targetId === "tee-talk" && transcript) {
        const status = document.querySelector(".tee-talk-status");
        if (status) {
          const cap = document.createElement("p");
          cap.className = "tee-talk-live";
          cap.textContent = transcript;
          status.after(cap);
        }
      }
    };
    voiceRecognizer.onerror = () => stopListening();
    voiceRecognizer.onend = () => {
      if (state.listening) stopListening();
    };
    voiceRecognizer.start();
  } catch (err) {
    stopListening();
  }
}

function haltVoice() {
  if (voiceRecognizer) {
    const rec = voiceRecognizer;
    voiceRecognizer = null;
    rec.onend = null;
    rec.onerror = null;
    try { rec.stop(); } catch (err) {}
  }
  state.listening = false;
  state.listeningTarget = null;
  state.teeteeSpeaking = false;
  if (window.speechSynthesis) window.speechSynthesis.cancel();
}

function speakTee(text) {
  if (!window.speechSynthesis || !text) return;
  window.speechSynthesis.cancel();
  const line = new SpeechSynthesisUtterance(text);
  line.lang = "en-US";
  state.teeteeSpeaking = true;
  line.onend = () => {
    state.teeteeSpeaking = false;
    if (state.teeteeOpen) render();
  };
  window.speechSynthesis.speak(line);
}

function finishTeeTalk() {
  const text = (state.teeteeDraft || "").trim();
  state.teeteeDraft = "";
  if (!text) return;
  const reply = teeChatReply(text);
  state.teeteeThread.push({ who: "you", text });
  state.teeteeThread.push({ who: "tee", text: reply });
  speakTee(reply);
}

function stopListening() {
  const wasTalk = state.listeningTarget === "tee-talk";
  if (voiceRecognizer) {
    const rec = voiceRecognizer;
    voiceRecognizer = null;
    rec.onend = null;
    rec.onerror = null;
    try { rec.stop(); } catch (err) {}
  }
  state.listening = false;
  state.listeningTarget = null;
  if (wasTalk) finishTeeTalk();
  render();
}

const GROUPS = [
  { id: "explainer", title: "Explainer videos", learn: "How you break one idea down" },
  { id: "lecture", title: "Lectures and masterclasses", learn: "Pace and energy across a long session" },
  { id: "whiteboard", title: "Whiteboard", learn: "How you draw and structure a problem" },
  { id: "qa", title: "Q&A and live sessions", learn: "How you handle questions you didn’t plan for" },
  { id: "roleplay", title: "Roleplays", learn: "How you play the other side of the call" }
];

const PATTERNS = [
  {
    id: "process",
    title: "Frames selling as a process, not motivation",
    seen: 11,
    evidence: [
      "Website · Home page headline: “Not motivation. Two mechanical processes.”",
      "YouTube · Cold-calling walkthrough · 03:40: Walks through the call as numbered steps before any pep talk.",
      "LinkedIn · Post on first-month agents: Gives a daily call routine instead of a mindset tip."
    ]
  },
  {
    id: "buyer",
    title: "Plays the difficult buyer herself before teaching the fix",
    seen: 9,
    evidence: [
      "YouTube · Objection roleplay session · 07:15: Switches into the buyer’s voice for a full exchange, then breaks it down.",
      "Instagram · Hesitant buyer roleplay: Acts out both sides of the call in 40 seconds."
    ]
  },
  {
    id: "lines",
    title: "Gives word-for-word lines agents can use on the call",
    seen: 14,
    evidence: [
      "Website · Free cold-calling course page: Offers scripts and techniques rather than theory.",
      "YouTube · Cold-calling walkthrough · 09:02: Pauses to read out the exact line to say next."
    ]
  },
  {
    id: "aed",
    title: "Grounds every example in AED prices and Dubai areas",
    seen: 18,
    evidence: [
      "LinkedIn · Post on off-plan payment plans: Works the maths in dirhams for a named community.",
      "YouTube · Masterclass for agents · 22:30: Uses a real price band to show how to reframe cost."
    ]
  },
  {
    id: "action",
    title: "Ends with one action to take today",
    seen: 7,
    evidence: [
      "Telegram · Voice-note answers: Most answers close with a single task for the day.",
      "YouTube · Live Q&A with agents · 40:10: Closes on one thing to do before the next call."
    ]
  }
];

const QUESTIONS = [
  { q: "Your site says “Not motivation. Two mechanical processes.” What are the two?", source: "Home page" },
  { q: "Who do you train, and what changes for them in the first month?", source: "Mentorship page" },
  { q: "What do most agents get wrong on their first cold call?", source: "Free cold-calling course" }
];

const TYPES = {
  realestate: {
    label: "Real-estate sales coach",
    banner: "You train real-estate agents and agency teams in Dubai and the GCC.",
    tags: ["Sales coach", "Real estate", "Dubai and GCC", "English"]
  },
  sales: {
    label: "Sales coach",
    banner: "You train sales teams on live calls, discovery, and price.",
    tags: ["Sales coach"]
  },
  tech: {
    label: "Tech interview coach",
    banner: "You coach people through technical interviews.",
    tags: ["Tech interview coach"]
  },
  professor: {
    label: "Professor or researcher",
    banner: "You coach students through vivas, research talks, and office hours.",
    tags: ["Professor or researcher"]
  },
  founder: {
    label: "Founder and investor coach",
    banner: "You coach founders through pitches, investor questions, and board meetings.",
    tags: ["Founder and investor coach"]
  }
};

const LIVE = {
  realestate: [
    { id: "objection", title: "Objection-handling roleplay", blurb: "Agents practise on a buyer who wants to wait for prices to drop.", pre: true, preview: ["Buyer: Honestly, I think prices drop next year. Why would I buy off-plan now?", "Agent: Fair question. What would you do with the money while you wait?"] },
    { id: "cold", title: "Cold-call practice", blurb: "A landlord who didn’t expect the call and wants to hang up.", pre: true, preview: ["Landlord: Who gave you my number? I’m not selling."] },
    { id: "offplan-call", title: "Off-plan discovery call", blurb: "Qualify an overseas investor in under ten minutes.", pre: false, preview: ["Investor: I have about two million dirhams. What would you show me?"] },
    { id: "commission", title: "Commission negotiation", blurb: "A seller wants you to drop to one percent.", pre: false, needs: "roleplay", needsCopy: "Better with your roleplay mode", preview: ["Seller: Another agency said they’d list it for one percent."] }
  ],
  sales: [
    { id: "s-obj", title: "Objection handling", blurb: "A buyer compares you with a cheaper quote.", pre: true, preview: ["Buyer: Your price is higher than the other quote I have."] },
    { id: "s-cold", title: "Cold-call practice", blurb: "They didn’t expect the call and want it over.", pre: true, preview: ["Prospect: I’m in a meeting. What is this about?"] },
    { id: "s-disc", title: "Discovery call", blurb: "They already have a vendor. Find the gap.", pre: false, preview: ["Buyer: We already have a vendor. Why switch?"] },
    { id: "s-price", title: "Price negotiation", blurb: "They’ll sign if you cut the fee.", pre: false, needs: "roleplay", needsCopy: "Better with your roleplay mode", preview: ["Buyer: We’ll sign if you take 15% off."] }
  ],
  tech: [
    { id: "t-mock", title: "Mock technical interview", blurb: "A live coding round with follow-up questions.", pre: true, preview: ["Interviewer: Walk me through how you’d find a cycle in a linked list."] },
    { id: "t-resume", title: "Resume review", blurb: "They defend one bullet out loud.", pre: true, preview: ["Reviewer: This bullet says you led a migration. What did you personally do?"] },
    { id: "t-doubt", title: "1:1 doubt clearing", blurb: "A concept they almost have.", pre: false, preview: ["Learner: I still don’t see why the index isn’t used here."] },
    { id: "t-sys", title: "System design round", blurb: "A feed that has to stay fast.", pre: false, preview: ["Interviewer: Design a feed that stays fast at ten million users."] }
  ],
  professor: [
    { id: "p-viva", title: "Viva preparation", blurb: "One sentence on the original contribution.", pre: true, preview: ["Examiner: What is the original contribution, in one sentence?"] },
    { id: "p-research", title: "Research discussion", blurb: "What would falsify the result.", pre: true, preview: ["Examiner: Which result would falsify this?"] },
    { id: "p-defence", title: "Concept defence", blurb: "Why this method, not the simpler one.", pre: false, preview: ["Examiner: Why this method and not the simpler one?"] },
    { id: "p-hours", title: "Office hours", blurb: "They got stuck on the third line.", pre: false, preview: ["Student: I followed the proof until the third line."] }
  ],
  founder: [
    { id: "f-pitch", title: "Pitch practice", blurb: "Why you, and why now.", pre: true, preview: ["Investor: Why you, and why now?"] },
    { id: "f-qa", title: "Investor Q&A", blurb: "The first channel stops working.", pre: true, preview: ["Investor: What happens if the first channel stops working?"] },
    { id: "f-term", title: "Term-sheet negotiation", blurb: "They restate the preference in their own words.", pre: false, preview: ["Investor: We want a 1x non-participating preference. Walk me through what you heard."] },
    { id: "f-board", title: "Board meeting rehearsal", blurb: "The numbers slipped. What changes this month.", pre: false, preview: ["Director: The numbers slipped. What are you changing this month?"] }
  ]
};

const CONTENT = [
  { id: "deck", tier: "content", title: "Deck for your next session", blurb: "Name a topic. Get slides built from your videos and notes.", pre: true, preview: ["Slides: Off-plan objections", "The three you’ll hear this week", "Word-for-word replies"] },
  { id: "scripts", tier: "content", title: "Call scripts and worksheets", blurb: "Printable scripts in your wording for each call type.", pre: true, preview: ["Cold call · landlord, secondary market", "Follow-up · after a viewing", "Voice note · lead gone quiet"] },
  { id: "quiz", tier: "content", title: "Academy module quiz", blurb: "Checks agents actually took in the module.", pre: false, preview: ["Q1. A buyer says “I’ll wait for the dip.” What’s your first question?", "Q2. When do you raise commission on a listing call?", "Q3. Rewrite this opener so it asks instead of tells."] }
];

const GROWTH = [
  { id: "posts", tier: "growth", title: "LinkedIn posts in your voice", blurb: "Drafts from what you’ve already taught.", pre: true, preview: ["Most agents don’t lose the deal on price. They lose it in the first forty seconds, by talking."] },
  { id: "clips", tier: "growth", title: "Long recordings into short clips", blurb: "Finds the moments worth posting and cuts them for reels.", pre: true, preview: ["Masterclass · 52:10", "04:12 Opening line on a cold call (0:38)", "17:50 The follow-up text after a viewing (0:45)", "31:05 Reframing “the market will drop” (0:29)"] },
  { id: "avatar-video", tier: "growth", title: "Avatar video", blurb: "Promo videos from a script, with your face and voice.", pre: false, needs: "stage", needsCopy: "Better with your stage energy mode", preview: ["Next mentorship intake (0:58): “If you closed fewer than three deals last quarter, this is for you.”"] },
  { id: "lead-chat", tier: "growth", title: "Lead chat on your website", blurb: "Answers agents asking which programme fits them.", pre: false, preview: ["Visitor: I’m new to Dubai. Academy or mentorship?", "Olga’s twin: Start with the academy. The mentorship makes sense once you’re on calls every day."] },
  { id: "email", tier: "growth", title: "Email to your list", blurb: "A weekly note built from your latest posts and videos.", pre: false, preview: ["Subject: The 40-second rule", "One idea from this week’s video", "One script to try", "One action for Monday"] }
];

const TIER_LABEL = { live: "Live practice", content: "Content creation", growth: "Growth" };

let recTimer = null;
let modeTimer = null;
let toastTimer = null;
let revealTimer = null;
let knowledgeTimer = null;
let groupTimer = null;
let demoTimer = null;
let demoClockTimer = null;
let studioTimer = null;
let studioCentered = false;

function fmtClock(total) {
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return [h, m, s].map((n) => String(n).padStart(2, "0")).join(":");
}
let styleTimer = null;

function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function fmt(total) {
  const m = Math.floor(total / 60);
  const s = total % 60;
  return m + ":" + String(s).padStart(2, "0");
}

function logo(size) {
  return `<svg viewBox="0 0 441 441" width="${size}" height="${size}" fill="currentColor" aria-hidden="true"><path d="M20 0L421 0A20 20 0 0 1 441 20L441 127A20 20 0 0 1 421 147L314 147A20 20 0 0 0 294 167L294 274A20 20 0 0 0 314 294L421 294A20 20 0 0 1 441 314L441 421A20 20 0 0 1 421 441L314 441A20 20 0 0 1 294 421L294 314A20 20 0 0 0 274 294L167 294A20 20 0 0 0 147 314L147 421A20 20 0 0 1 127 441L20 441A20 20 0 0 1 0 421L0 314A20 20 0 0 1 20 294L127 294A20 20 0 0 0 147 274L147 167A20 20 0 0 0 127 147L20 147A20 20 0 0 1 0 127L0 20A20 20 0 0 1 20 0Z"/></svg>`;
}

function linkKind() {
  const s = state.link.trim();
  if (!s) return "empty";
  const valid = /^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(\/\S*)?$/i.test(s) || /^@[\w.]{2,}$/.test(s);
  if (valid) return "valid";
  if (!state.linkBlurred) return "typing";
  return "invalid";
}

function tickedProfiles() {
  return state.profiles.filter((p) => p.found && p.ticked);
}

function sampleVisible(s) {
  const sourceProfile = { YouTube: "yt", Instagram: "ig", Telegram: "tg" }[s.source];
  if (!sourceProfile) return true;
  const profile = state.profiles.find((item) => item.id === sourceProfile);
  return !!(profile && profile.found && profile.ticked);
}

function keptSamples() {
  return allSamples().filter((s) => s.kept && sampleVisible(s));
}

function allSamples() {
  return state.samples.concat(state.uploads);
}

function liveTasks() {
  const base = LIVE[state.coachingType] || [];
  if (state.coachingType !== "realestate") return base;
  return state.customRoles.concat(base);
}

function tasksFor(tier) {
  if (tier === "live") return liveTasks();
  if (tier === "content") return CONTENT;
  return GROWTH;
}

function visibleTasks(tier) {
  const all = tasksFor(tier);
  return state.showMore[tier] ? all : all.filter((t) => t.pre);
}

function seedSelection() {
  state.selected = new Set();
  ["live", "content", "growth"].forEach((tier) => {
    tasksFor(tier).forEach((t) => { if (t.pre) state.selected.add(t.id); });
  });
}

function taskById(id) {
  const custom = state.customRoles.find((t) => t.id === id);
  if (custom) return custom;
  const pools = [CONTENT, GROWTH, state.pinned, state.suggestions].concat(Object.values(LIVE));
  for (const pool of pools) {
    const hit = pool.find((t) => t.id === id);
    if (hit) return hit;
  }
  const ask = state.asks.find((t) => t.id === id);
  return ask || null;
}

function dotOn(task, key) {
  if (key === "k") return state.knowledgeBuilt;
  if (key === "s") return state.styleBuilt;
  if (task.needs === "roleplay") return state.avatar.modes.roleplay;
  if (task.needs === "stage") return state.avatar.modes.stage;
  return state.avatar.modes.conversational;
}

function knowledgeNeeds() {
  let n = 0;
  if (!state.drive) n += 1;
  if (!state.notion) n += 1;
  return state.knowledgeBuilt ? n : 0;
}

function avatarNeeds() {
  if (state.step < 6) return 0;
  let n = 0;
  if (state.stageOffer && !state.avatar.modes.stage) n += 1;
  if (!state.avatar.modes.roleplay) n += 1;
  if (!state.avatar.modes.qa) n += 1;
  return n;
}

function toast(msg) {
  state.toast = msg;
  clearTimeout(toastTimer);
  render();
  toastTimer = setTimeout(() => {
    state.toast = null;
    render();
  }, 5000);
}

function render() {
  document.documentElement.setAttribute("data-theme", state.theme);
  const spots = [".main", ".rail-scroll", ".drawer"];
  const scrolls = spots.map((sel) => {
    const n = document.querySelector(sel);
    return n ? n.scrollTop : 0;
  });
  const ae = document.activeElement;
  const prevId = ae && ae.id ? ae.id : "";
  const ss = ae && typeof ae.selectionStart === "number" ? ae.selectionStart : null;
  const se = ae && typeof ae.selectionEnd === "number" ? ae.selectionEnd : null;
  const focusId = state.afterFocus || prevId;
  state.afterFocus = null;
  document.getElementById("shell").innerHTML = view();
  spots.forEach((sel, i) => {
    const n = document.querySelector(sel);
    if (n) n.scrollTop = scrolls[i];
  });
  if (state.step >= 1 && state.step <= 5) state.setupStep = state.step;
  const titles = { home: "Home", analytics: "Analytics", roleplay: "Roleplay", videos: "Gen videos", setup: "Twin Studio", knowledge: "Knowledge base", calibrations: "Twin sessions", sessions: "Sessions", rpsettings: "Persona", doubt: "Twin QnA", settings: "Settings", profile: "Profile", ask: "Ask your twin" };
  document.title = "TrainerTwin — " + (titles[activeNav()] || "Home");
  mountAuth();
  mountAddKnowledge();
  mountFindShine();
  mountVoiceDialog();
  mountKnowledgeUpsellDialog();
  mountTwinTalk();
  mountRoleAvatar();
  mountConfirmDialog();
  mountBotShareDialog();
  mountTwinOffDialog();
  mountKnowDialog();
  mountTeeChat();
  mountTeeWaves();
  mountTwinAsk();
  mountAurora();
  mountVoicePills();
  mountCelebrate();
  mountAnalyticsFloat();
  mountStudioFlow();
  mountRefineFrame();
  mountLatticeLoader();
  mountTwinHello();
  const menuWantsFocus = state.roleMenuFocus;
  placeRoleMenu();
  if (focusId && !menuWantsFocus) {
    const next = document.getElementById(focusId);
    if (next) {
      next.focus({ preventScroll: true });
      if (ss != null && next.setSelectionRange) {
        try { next.setSelectionRange(ss, se); } catch (err) { /* select/button */ }
      }
    }
  }
}

function boxedSetup() {
  if (state.twinReady) return false;
  if (activeNav() !== "setup") return false;
  const step = state.step >= 1 && state.step <= 5 ? state.step : state.setupStep;
  return step === 1 || step === 2 || step === 4;
}

function showingGate() {
  if (state.twinReady) return false;
  const nav = activeNav();
  return !state.accountReady && (nav === "home" || nav === "analytics" || nav === "roleplay");
}

function view() {
  if (state.demoTaskId) {
    return `
      ${pageTwinDemo()}
      ${state.toast ? `<div class="toast" role="status">${esc(state.toast)}</div>` : ""}
    `;
  }
  const bar = tabbar();
  return `
    ${bar ? mobileHead() : ""}
    <div class="shell${bar ? " has-tabbar" : ""}">
      ${rail()}
      <main class="main${(activeNav() === "home" || activeNav() === "analytics") && !showingGate() ? " is-home" : ""}${boxedSetup() ? " is-find" : ""}">${main()}</main>
    </div>
    ${bar}
    ${state.drawer ? drawer() : ""}
    ${state.auth ? authDialog() : ""}
    ${state.addKnowledgeOpen ? addKnowledgeDialog() : ""}
    ${state.voiceDialog ? voiceDialog() : ""}
    ${state.knowledgeUpsellOpen ? knowledgeUpsellDialog() : ""}
    ${state.roleAvatarOpen ? roleAvatarDialog() : ""}
    ${state.confirm ? confirmDialog() : ""}
    ${state.botShare ? botShareDialog() : ""}
    ${state.twinOff ? twinOffDialog() : ""}
    ${state.knowOpen && state.botDraft ? botKnowDialog() : ""}
    ${state.teeteeOpen ? teeteeDialog() : ""}
    ${state.toast ? `<div class="toast" role="status">${esc(state.toast)}</div>` : ""}
    ${state.knowledgeReadyToast ? knowledgeReadyToast() : ""}
    <div class="rail-tip" role="tooltip" hidden></div>
  `;
}

function knowledgeReadyToast() {
  return `
    <div class="ready-toast" role="status" aria-live="polite">
      <button class="ready-toast-hit" type="button" data-action="knowledge-ready-open">
        <span class="ready-toast-icon" aria-hidden="true">${sparklesIcon()}</span>
        <span class="ready-toast-body">
          <span class="ready-toast-title">Your twin is ready!</span>
          <span class="ready-toast-desc">See what we built in Twin Studio</span>
        </span>
      </button>
      <button class="ready-toast-close" type="button" data-action="knowledge-ready-dismiss" aria-label="Close">
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      </button>
      <span class="ready-toast-fuse" aria-hidden="true"></span>
    </div>
  `;
}

function icon(name) {
  const paths = {
    doubt: '<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 17v.01" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    messages: '<path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    sessions: '<path d="M12 8l0 4l2 2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    rpsettings: '<path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 21v-2a4 4 0 0 1 4 -4h2.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.001 15.5v1.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.001 21v1.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M22.032 17.25l-1.299 .75" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.27 20l-1.3 .75" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.97 17.25l1.3 .75" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.733 20l1.3 .75" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    calibrate: '<path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 6l8 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 6l4 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 12l2 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 12l10 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 18l11 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 18l1 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    brain: '<path d="M17 21v-1.25c0 -2.311 .778 -1.92 2.244 -3.749a8 8 0 1 0 -14.244 -5.001q 0 .25 -1.876 3.518a1 1 0 0 0 .876 1.482h2v3a2 2 0 0 0 2 2h3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 11a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    home: '<path d="M19 8.71l-5.333 -4.148a2.666 2.666 0 0 0 -3.274 0l-5.334 4.148a2.665 2.665 0 0 0 -1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-7.2c0 -.823 -.38 -1.6 -1.03 -2.105" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 15c-2.21 1.333 -5.792 1.333 -8 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    role: '<path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 21v-2a4 4 0 0 1 4 -4h4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 19l2 2l4 -4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    analytics: '<path d="M22 12H18L15 21L9 3L6 12H2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    conversations: '<path d="M4 5.5h8a2 2 0 0 1 2 2v2.8a2 2 0 0 1-2 2H8l-3.5 2.4v-2.4H4a2 2 0 0 1-2-2V7.5a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M5.5 8h5M5.5 10h3.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
    knowledge: '<path d="M8 4.2C7.2 3.5 5.9 3 4.3 3 3.6 3 3 3.6 3 4.3v7.4c0 .7.6 1.3 1.3 1.3 1.6 0 2.9.5 3.7 1.2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 4.2C8.8 3.5 10.1 3 11.7 3c.7 0 1.3.6 1.3 1.3v7.4c0 .7-.6 1.3-1.3 1.3-1.6 0-2.9.5-3.7 1.2V4.2Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    style: '<path d="M3 4.5h10a1 1 0 0 1 1 1V10a1 1 0 0 1-1 1H7.2L4 13.5V11H3a1 1 0 0 1-1-1V5.5a1 1 0 0 1 1-1Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
    avatar: '<rect x="2.5" y="4.5" width="8" height="7" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M10.5 7.3 13.5 5.5v5l-3-1.8Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
    setup: '<path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    settings: '<path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    profile: '<circle cx="8" cy="5.5" r="2.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M3 13.3a5 5 0 0 1 10 0" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
    video: '<path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 8a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    back: '<path d="M5 12l14 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 12l6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 12l6 -6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
  };
  const viewBox = name === "home" || name === "brain" || name === "calibrate" || name === "messages" || name === "doubt" || name === "sessions" || name === "rpsettings" || name === "setup" || name === "analytics" || name === "role" || name === "settings" || name === "back" || name === "video" ? "0 0 24 24" : "0 0 16 16";
  return `<svg viewBox="${viewBox}" aria-hidden="true">${paths[name]}</svg>`;
}

function sparklesIcon() {
  return `<svg class="line-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6" /></svg>`;
}

function roleCheckIcon() {
  return `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 8.5 6.5 11.5 12.5 5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

function navItem(id, label, glyph) {
  const onTwinList = id === "doubt" && activeNav() === "setup" && state.twinReady && state.studioView !== "editor" && !state.botCreate && !state.calOverviewId && !(state.botDetailId && botDetailRow());
  const on = onTwinList || activeNav() === id || (id === "settings" && ["home", "videos"].includes(activeNav()) && (state.accountReady || state.twinReady));
  const tip = state.railCollapsed ? ` data-rail-tip="${esc(label)}"` : "";
  return `<button class="nav-item" type="button" data-action="nav" data-id="${id}" ${on ? 'aria-current="page"' : ""}${tip}>${icon(glyph)}<span>${label}</span></button>`;
}

// Phone layout: the left rail turns into a slim header (logo, knowledge, theme, profile) and a
// bottom tab bar (Home, Roleplay, Twin Studio, Report, Settings). Both are hidden on desktop.
function tabbar() {
  if (state.talkOpen || state.calibId || state.roleCreate || state.botCreate || showingGate()) return "";
  const items = [
    ["home", "Home", "home"],
    ["roleplay", "Roleplay", "role"],
    ["setup", "Twin Studio", "setup"],
    ["analytics", "Report", "analytics"],
    ["settings", "Settings", "settings"]
  ];
  return `
    <nav class="tabbar" aria-label="Main">
      ${items.map(([id, label, glyph]) => `
        <button class="tabbar-item" type="button" data-action="nav" data-id="${id}"${activeNav() === id ? ' aria-current="page"' : ""}>${icon(glyph)}<span>${label}</span></button>
      `).join("")}
    </nav>
  `;
}

function mobileHead() {
  const dark = state.theme === "dark";
  return `
    <header class="mobile-head">
      <button class="mobile-head-logo" type="button" data-action="nav" data-id="home" aria-label="TrainerTwin home">${logo(20)}<span class="wordmark">TrainerTwin</span></button>
      <div class="mobile-head-actions">
        <button class="mobile-head-btn" type="button" data-action="open-drawer" data-id="knowledge" aria-label="Twin’s knowledge" title="Twin’s knowledge">${icon("knowledge")}</button>
        <button class="mobile-head-btn" type="button" data-action="toggle-theme" aria-pressed="${dark}" aria-label="${dark ? "Switch to light" : "Switch to dark"}">${themeIcon()}</button>
        <button class="mobile-head-btn mobile-head-avatar" type="button" data-action="nav" data-id="profile" aria-label="Profile, Olga Sinenko"><span class="user-avatar" aria-hidden="true">O</span></button>
      </div>
    </header>
  `;
}

function conversationsNavItem() {
  if (state.railCollapsed) return "";
  const items = conversationHistory();
  return `
    <section class="rail-conversations" aria-label="My conversations">
      <div class="rail-conversations-head">
        <p class="rail-label">My conversations</p>
        <button class="rail-conversations-new" type="button" data-action="new-chat" aria-label="New chat">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3.5v9M3.5 8h9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        </button>
      </div>
      <div class="rail-conversation-list">
        ${items.map((item) => `
          <button class="rail-conversation-row" type="button" data-action="open-conversation" data-id="${esc(item.id)}">
            <span class="rail-conversation-title">${esc(item.title)}</span>
            ${item.unread ? `<span class="rail-conversation-unread" role="img" aria-label="New activity"></span>` : ""}
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function themeIcon() {
  if (state.theme === "dark") {
    return `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M9.2 2.2a5.2 5.2 0 1 0 4.6 7.6 4.4 4.4 0 0 1-4.6-7.6Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`;
  }
  return `<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="2.25" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M8 1.8v1.6M8 12.6v1.6M1.8 8h1.6M12.6 8h1.6M3.6 3.6l1.1 1.1M11.3 11.3l1.1 1.1M3.6 12.4l1.1-1.1M11.3 4.7l1.1-1.1" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;
}

// render() rebuilds the rail, so CSS can't tween it. Instead the old rail is cloned as a ghost that
// shrinks and fades out while the new rail grows (or narrows) from the old width to its own.
function toggleRailAnimated() {
  const old = document.querySelector(".rail");
  const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!old || calm || getComputedStyle(old).display === "none") {
    state.railCollapsed = !state.railCollapsed;
    render();
    return;
  }
  const box = old.getBoundingClientRect();
  const ghost = old.cloneNode(true);
  ghost.setAttribute("aria-hidden", "true");
  ghost.setAttribute("inert", "");
  ghost.removeAttribute("aria-label");
  ghost.querySelectorAll("[id]").forEach((el) => el.removeAttribute("id"));
  Object.assign(ghost.style, {
    position: "fixed", left: box.left + "px", top: box.top + "px", width: box.width + "px", height: box.height + "px",
    overflow: "hidden", pointerEvents: "none", transition: "none", zIndex: "60"
  });
  document.body.appendChild(ghost);
  state.railCollapsed = !state.railCollapsed;
  render();
  const next = document.querySelector(".rail");
  if (!next) { ghost.remove(); return; }
  const to = next.getBoundingClientRect().width;
  const timing = { duration: 260, easing: "cubic-bezier(0.2, 0.7, 0.2, 1)" };
  next.style.overflow = "hidden";
  next.animate([{ width: box.width + "px" }, { width: to + "px" }], timing).finished
    .then(() => { next.style.overflow = ""; }, () => { next.style.overflow = ""; });
  if (next.firstElementChild) next.firstElementChild.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 220, delay: 60, fill: "backwards" });
  ghost.animate([{ width: box.width + "px", opacity: 1 }, { width: to + "px", opacity: 0 }], { duration: 200, easing: "ease-out" }).finished
    .then(() => ghost.remove(), () => ghost.remove());
}

function rail() {
  const dark = state.theme === "dark";
  const collapsed = state.railCollapsed;
  return `
    <aside class="rail${collapsed ? " is-collapsed" : ""}" aria-label="Main">
      <div class="rail-scroll">
        <div class="rail-brand">
          <button class="lockup lockup-toggle" type="button" data-action="toggle-rail-collapse" aria-pressed="${collapsed}" aria-label="${collapsed ? "Expand menu" : "Collapse menu"}"${collapsed ? ' data-rail-tip="Expand menu"' : ""}>
            ${logo(20)}${collapsed ? `<svg class="lockup-expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12"/><path d="M15 4l0 16"/></svg>` : ""}<span class="wordmark">TrainerTwin</span>
          </button>
          <div class="rail-brand-actions">
            <button class="theme-switch" id="theme-switch" type="button" data-action="toggle-theme" aria-pressed="${dark}" aria-label="${dark ? "Switch to light" : "Switch to dark"}"${collapsed ? ` data-rail-tip="${dark ? "Switch to light" : "Switch to dark"}"` : ""}>${themeIcon()}</button>
          </div>
        </div>
        <nav class="rail-nav" aria-label="Sections">
          ${navItem("doubt", "Twin QnA", "doubt")}
          ${navItem("roleplay", "Roleplay", "role")}
          ${navItem("rpsettings", "Persona", "rpsettings")}
        </nav>
        <div class="rail-foot">
          ${teeteeNudge()}
          <div class="rail-foot-nav">
            ${navItem("knowledge", "Knowledge base", "brain")}
            ${navItem("settings", "Settings", "settings")}
          </div>
          <button class="rail-user" type="button" data-action="nav" data-id="profile"${collapsed ? ' data-rail-tip="Olga Sinenko"' : ""}>
            <img class="rail-user-photo" src="${esc(presenceSrc())}" alt="">
            <span class="rail-user-name"><span class="rail-user-title">Olga Sinenko</span><span class="rail-user-role">Sales trainer</span></span>
          </button>
        </div>
      </div>
    </aside>
  `;
}

function miniLatticeLoader() {
  const cells = [0, 1, 2, 5, 4, 3, 6, 7, 8];
  const delay = 90;
  const run = cells.map((unit) => (
    `<span class="lattice-loader__cell" style="animation-delay:${unit * delay}ms"></span>`
  )).join("");
  return `
    <span class="lattice-loader lattice-loader--mini" aria-hidden="true">
      <span class="lattice-loader__grid">
        <span class="lattice-loader__layer lattice-loader__run">${run}</span>
      </span>
    </span>
  `;
}

function teeteeNudge() {
  const tip = state.railCollapsed ? ' data-rail-tip="TeeTee"' : "";
  const showProgress = state.knowledgeExploring && state.knowledgeStarted;
  const items = showProgress ? twinBuildItems().filter((i) => i.id !== "training-style") : [];
  const doneCount = state.teeteeProgressDone || 0;
  const activeIndex = state.teeteeProgressStep || 0;
  const visibleItems = items.slice(0, Math.min(items.length, activeIndex + 1));
  const allDone = showProgress && items.length > 0 && doneCount >= items.length;
  const checkIcon = `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 8.5 6.5 11.5 12.5 5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  // V3: the idle TeeTee hello and mascot are gone from the rail; it only appears while the twin's knowledge is being extracted.
  if (!showProgress) return "";
  return `
    <div class="teetee-nudge${state.teeteeShown || showProgress ? "" : " is-pending"}">
      ${showProgress ? `<canvas class="auth-confetti teetee-confetti" aria-hidden="true"></canvas>` : ""}
      ${state.teeteeBubble ? `
        <div class="teetee-bubble">
          <button class="teetee-bubble-close" type="button" data-action="close-teetee-bubble" aria-label="Close">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4.5 4.5l7 7M11.5 4.5l-7 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </button>
          <button class="teetee-bubble-open" type="button" data-action="open-teetee">
            ${showProgress ? `
              <span class="teetee-bubble-hi">${allDone ? "Your twin’s knowledge is ready!" : "Extracting your knowledge…"}</span>
              <span class="teetee-progress-list">
                ${visibleItems.map((item, i) => {
                  const isDone = i < doneCount;
                  return `<span class="teetee-progress-item"><span class="teetee-progress-check${isDone ? "" : " is-loading"}">${isDone ? checkIcon : miniLatticeLoader()}</span>${esc(item.title)}</span>`;
                }).join("")}
              </span>
            ` : `
              <span class="teetee-bubble-hi">👋🏼 Hello! I’m TeeTee, your twin build partner.</span>
              How can I help you today?
            `}
          </button>
        </div>
      ` : ""}
      <button class="teetee-mascot" type="button" data-action="open-teetee"${tip}>
        <img src="../media/teetee.png" alt="">
      </button>
    </div>
  `;
}

const TEE_CHIPS = [
  { id: "good", text: "I’m feeling good" },
  { id: "video", text: "Let’s build a video" }
];

function teeChatReply(text) {
  const q = text.toLowerCase();
  if (/video|build/.test(q)) return "Let’s do it. I’ll use a lesson you already taught and cut a short your twin can say.";
  if (/role|scenario|play/.test(q)) return "Open Roleplay and tell me the scenario. I’ll draft it with you.";
  if (/good|great|fine|well|happy|ok/.test(q)) return "Good to hear. A short video is a nice way to use that energy. Want me to start one?";
  if (/tired|bad|rough|low|not great|meh/.test(q)) return "That’s fair. The video can wait. I can sit with the next roleplay whenever you’re ready.";
  return "I’m here. Tell me how you’re feeling, or say the word and we’ll build that video.";
}

function teeteeDialog() {
  const talk = state.teeteeMode === "talk";
  const thread = state.teeteeThread.map((msg) => `
    <p class="tee-msg ${msg.who === "you" ? "is-you" : "is-tee"}">${esc(msg.text)}</p>
  `).join("");
  const lastYou = [...state.teeteeThread].reverse().find((msg) => msg.who === "you");
  const lastTee = [...state.teeteeThread].reverse().find((msg) => msg.who === "tee");
  const listening = state.listening && state.listeningTarget === "tee-talk";
  const talkStatus = listening
    ? "Listening…"
    : state.teeteeSpeaking
      ? "TeeTee is speaking"
      : "Tap the mic and talk";
  return `
    <dialog class="issue-dialog tee-chat-dialog" id="tee-chat-dialog" aria-labelledby="tee-chat-title">
      <div class="tee-chat-card">
        <button class="btn btn--ghost btn--icon btn--sm issue-close" type="button" data-action="close-teetee" aria-label="Close">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.5"/></svg>
        </button>
        <div class="tee-chat-head">
          <img src="../media/teetee.png" alt="">
          <div>
            <h2 id="tee-chat-title">TeeTee</h2>
            <p>${talk ? "A conversation, not a chat" : "Here if you want to talk"}</p>
          </div>
        </div>
        <div class="tee-mode" role="group" aria-label="How to talk with TeeTee">
          <button class="tee-mode-btn${talk ? "" : " is-on"}" type="button" data-action="tee-mode" data-id="chat" aria-pressed="${!talk}">Chat</button>
          <button class="tee-mode-btn${talk ? " is-on" : ""}" type="button" data-action="tee-mode" data-id="talk" aria-pressed="${talk}">Conversation</button>
        </div>
        ${talk ? `
          <div class="tee-talk">
            <p class="tee-talk-status">${esc(talkStatus)}</p>
            ${listening && state.teeteeDraft ? `<p class="tee-talk-live">${esc(state.teeteeDraft)}</p>` : ""}
            ${!listening && lastYou ? `<p class="tee-msg is-you">${esc(lastYou.text)}</p>` : ""}
            ${!listening && lastTee ? `<p class="tee-msg is-tee">${esc(lastTee.text)}</p>` : ""}
            <button class="tee-talk-mic${listening ? " is-listening" : ""}" type="button" data-action="tee-talk" aria-label="${listening ? "Stop talking" : "Talk to TeeTee"}">
              ${listening
                ? `<span class="mic-wave"><span></span><span></span><span></span><span></span></span>`
                : `<svg class="mic-anim" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <g class="mic-anim__mic" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="8.5" y="2.5" width="7" height="12" rx="3.5"/>
                      <path d="M5 11.5a7 7 0 0 0 14 0M12 18.5v3M8.5 21.5h7"/>
                    </g>
                    <g class="mic-anim__bars" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                      <path class="b b1" d="M4 10v4"/><path class="b b2" d="M8 6v12"/><path class="b b3" d="M12 3v18"/><path class="b b4" d="M16 7v10"/><path class="b b5" d="M20 10v4"/>
                    </g>
                  </svg>`}
            </button>
          </div>
        ` : `
          <div class="tee-thread">${thread}</div>
          <div class="tee-chips">
            ${TEE_CHIPS.map((chip) => `<button class="tee-chip" type="button" data-action="tee-chat-chip" data-id="${chip.id}">${esc(chip.text)}</button>`).join("")}
          </div>
          <div class="tee-chat-compose">
            <label class="sr" for="tee-chat-input">Message TeeTee</label>
            <div class="tee-chat-field">
              <input class="input" id="tee-chat-input" type="text" placeholder="Talk to TeeTee" value="${esc(state.teeteeDraft)}" autocomplete="off">
              ${micButton("tee-chat-input", "tee-chat-mic")}
            </div>
            <button class="btn btn--strong" type="button" data-action="tee-chat-send">Send</button>
          </div>
        `}
      </div>
    </dialog>
  `;
}

function mountTeeChat() {
  const dlg = document.getElementById("tee-chat-dialog");
  if (!dlg) return;
  if (typeof dlg.showModal === "function" && !dlg.open) dlg.showModal();
  const thread = dlg.querySelector(".tee-thread");
  if (thread) thread.scrollTop = thread.scrollHeight;
  dlg.addEventListener("cancel", (ev) => {
    ev.preventDefault();
    actions["close-teetee"]();
  });
  dlg.addEventListener("click", (ev) => {
    if (ev.target === dlg) actions["close-teetee"]();
  });
}

function knowledgeIcon(id) {
  const marks = {
    web: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#1A73E8"/><ellipse cx="12" cy="12" rx="4.2" ry="10" fill="none" stroke="#fff" stroke-width="1.4"/><path d="M2.4 12h19.2M4.2 7.6h15.6M4.2 16.4h15.6" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/></svg>`,
    li: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="4" fill="#0A66C2"/><path fill="#fff" d="M6.7 9.4H4.6V18h2.1V9.4ZM5.65 5.3a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM9.1 9.4h2v1.2h.03c.28-.53 1-1.1 2.05-1.1 2.2 0 2.6 1.45 2.6 3.33V18h-2.1v-4.7c0-1.12-.02-2.56-1.56-2.56-1.56 0-1.8 1.22-1.8 2.48V18H9.1V9.4Z"/></svg>`,
    yt: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="6" fill="#FF0033"/><path fill="#fff" d="M10 8.2v7.6l6.2-3.8L10 8.2Z"/></svg>`,
    ig: `<svg viewBox="0 0 24 24" aria-hidden="true"><defs><radialGradient id="know-ig" cx="30%" cy="107%" r="130%"><stop offset="0%" stop-color="#FEDA75"/><stop offset="40%" stop-color="#FA7E1E"/><stop offset="70%" stop-color="#D62976"/><stop offset="100%" stop-color="#4F5BD5"/></radialGradient></defs><rect width="24" height="24" rx="6" fill="url(#know-ig)"/><rect x="6.2" y="6.2" width="11.6" height="11.6" rx="3.4" fill="none" stroke="#fff" stroke-width="1.5"/><circle cx="12" cy="12" r="2.7" fill="none" stroke="#fff" stroke-width="1.5"/><circle cx="16.3" cy="7.7" r="0.8" fill="#fff"/></svg>`,
    tg: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12" fill="#2AABEE"/><path fill="#fff" d="M6.1 11.9 17.5 7.5c.5-.2.9.1.8.7l-2 9.1c-.1.6-.5.8-1 .5l-2.8-2.1-1.4 1.3c-.15.15-.3.1-.35-.1l.15-2.3 6-5.4c.25-.22 0-.34-.32-.14L8.4 13.2l-2.5-.8c-.55-.15-.55-.55.2-.5Z"/></svg>`
  };
  return marks[id] || marks.web;
}

function knowledgeTicker() {
  const bolt = `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M9 1.5 3.5 9H8l-1 5.5L12.5 7H8l1-5.5Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`;
  const items = [
    `${bolt}<span>Trained with 2 Instagram videos</span>`,
    `<span>Posted on LinkedIn yesterday</span>`,
    `<span>Learnt new lessons.</span>`
  ];
  return items.map((item) => `<span class="know-badge">${item}</span>`).join("");
}

function knowledgeTickerBlock() {
  return `
    <div class="know-ticker">
      <div class="know-ticker-track">
        ${knowledgeTicker()}
        ${knowledgeTicker()}
      </div>
    </div>
  `;
}

function knowledgeCard() {
  const open = state.railOpen === "knowledge";
  const connected = state.knowledgeBuilt;
  const showTicker = connected && state.accountReady;
  const rows = state.profiles.filter((p) => p.found && p.meta);
  const body = connected
    ? `<ul class="know-list">
        ${rows.map((p) => `
          <li>
            <span class="know-ico">${knowledgeIcon(p.id)}</span>
            <span class="know-name">${esc(p.platform)}</span>
            <span class="know-count tabular">${esc(p.meta)}</span>
          </li>
        `).join("")}
      </ul>
      ${showTicker ? knowledgeTickerBlock() : ""}
      <div class="know-dots" aria-hidden="true"><i class="is-on"></i><i></i><i></i><i></i></div>`
    : `<p class="know-empty">Connect knowledge in Setup. Counts show up once it’s read.</p>`;
  return `
    <section class="know-card${open ? " is-open" : ""}">
      <button class="know-toggle" id="rail-knowledge" type="button" data-action="toggle-rail" data-id="knowledge" aria-expanded="${open}" ${open ? 'aria-controls="knowledge-panel"' : ""}${state.railCollapsed ? ' data-rail-tip="Twin’s Knowledge"' : ""}>
        <span class="know-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <defs>
              <linearGradient id="tt-know-grad" x1="4" y1="3" x2="20" y2="21" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#FF5A00"/>
                <stop offset="1" stop-color="#FF4D8D"/>
              </linearGradient>
            </defs>
            <path fill="url(#tt-know-grad)" d="M5.144 4.72c3.92 -3.695 10.093 -3.625 13.927 .209c3.905 3.905 3.905 10.237 0 14.142c-3.905 3.905 -10.237 3.905 -14.142 0c-3.905 -3.905 -3.905 -10.237 0 -14.142zm3.32 10.816a1 1 0 1 0 -1.414 1.414a7 7 0 0 0 9.9 0a1 1 0 0 0 -1.414 -1.414a5 5 0 0 1 -7.072 0z"/>
          </svg>
        </span>
        <span class="know-title">Twin’s Knowledge</span>
        <svg class="chev" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 6.5 8 10.5 12 6.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      ${open ? `<div class="know-panel" id="knowledge-panel">${body}</div>` : (showTicker ? knowledgeTickerBlock() : "")}
    </section>
  `;
}

function asksBlock(compact) {
  if (!state.knowledgeBuilt) return "";
  if (state.drive && state.notion) {
    return `<p class="quiet" style="margin-top:12px">Google Drive and Notion are connected.</p>`;
  }
  return `
    <div class="${compact ? "mode-list" : "asks"}" style="margin-top:12px">
      ${state.drive ? "" : `<div class="mode"><h3 class="card-title" style="font-size:15px">Connect Google Drive</h3><p>Where do you keep course decks and call scripts?</p><div class="ask-row" style="margin-top:8px"><button class="btn btn--secondary btn--sm" type="button" data-action="connect-drive">Connect Google Drive</button></div></div>`}
      ${state.notion ? "" : `<div class="mode"><h3 class="card-title" style="font-size:15px">Connect Notion</h3><p>Or paste a public page link.</p><div class="ask-row" style="margin-top:8px">${state.notionOpen ? `<input class="input" id="notion" value="${esc(state.notionLink)}" placeholder="Public Notion link" aria-label="Public Notion link">` : ""}<button class="btn btn--secondary btn--sm" type="button" data-action="connect-notion">${state.notionOpen ? "Save link" : "Connect Notion"}</button></div></div>`}
    </div>
  `;
}

function patternButton(p) {
  const open = state.openPattern === p.id;
  return `
    <div>
      <button class="pattern" type="button" data-action="toggle-pattern" data-id="${p.id}" aria-expanded="${open}">
        ${esc(p.title)}
        <small class="tabular">Seen in ${p.seen} places</small>
      </button>
      ${open ? `<ul class="evidence">${p.evidence.map((e) => `<li>${esc(e)}</li>`).join("")}</ul>` : ""}
    </div>
  `;
}

function avatarBody() {
  const modes = state.avatar.modes;
  const phase = state.avatar.phase === "capturing" ? "Capturing" : modes.conversational ? "Conversational · ready" : "Waiting";
  if (state.step < 3 && !state.stageOffer && !modes.conversational) {
    return `<p class="quiet">${esc(phase)}. Voice and face come after your twin has shown what it knows.</p>`;
  }
  return `
    <p class="quiet">${esc(phase)}</p>
    <div class="mode-list" style="margin-top:12px">
      <div class="mode">
        <strong>Conversational</strong>
        <p>${modes.conversational ? "Ready · from your intro." : "From your 30-second intro."}</p>
      </div>
      <div class="mode">
        <strong>Stage energy</strong>
        <p>${modes.stage ? "Ready · from the 52-minute masterclass." : state.stageOffer ? "From the samples you kept: a 52-minute masterclass." : "A kept long recording can become this mode."}</p>
        ${state.stageOffer && !modes.stage ? `<div class="ask-row" style="margin-top:8px"><button class="btn btn--strong btn--sm" type="button" data-action="use-stage">Use it for this mode</button></div>` : ""}
      </div>
      ${modeRow("roleplay", "Roleplay, as the buyer", "Record 30 seconds, or upload a coaching call.")}
      ${modeRow("qa", "1:1 Q&A", "Record 30 seconds, or upload a strategy session.")}
    </div>
  `;
}

function avatarCard() {
  return railCard("avatar", "Twin Presence", "How you look and sound", "", avatarBody(), "avatar");
}

function railCard(id, title, sub, badge, body, glyph) {
  const open = state.railOpen === id;
  return `
    <section class="card ${open ? "is-open" : ""}">
      <button class="card-head rail-toggle" id="rail-${id}" type="button" data-action="toggle-rail" data-id="${id}" aria-expanded="${open}" ${open ? `aria-controls="${id}-panel"` : ""}${state.railCollapsed ? ` data-rail-tip="${esc(title)}"` : ""}>
        ${glyph ? `<span class="rail-card-icon" aria-hidden="true">${icon(glyph)}</span>` : ""}
        <span class="head-copy">
          <span class="card-title">${title}</span>
          <span class="card-sub">${sub}</span>
        </span>
        ${badge}
        <svg class="chev" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 6.5 8 10.5 12 6.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      ${open ? `<div class="card-body--tight" id="${id}-panel">${body}</div>` : ""}
    </section>
  `;
}

function modeRow(key, title, copy) {
  const on = state.avatar.modes[key];
  const recording = state.modeRecording === key;
  return `
    <div class="mode">
      <strong>${esc(title)}</strong>
      <p>${on ? "Ready." : esc(copy)}</p>
      ${on ? "" : `
        <div class="ask-row" style="margin-top:8px">
          ${recording
            ? `<span class="tabular" id="mode-timer">${fmt(state.modeSeconds)}</span><button class="btn btn--strong btn--sm" type="button" data-action="use-mode" data-mode="${key}">Use this take</button>`
            : `<button class="btn btn--secondary btn--sm" type="button" data-action="record-mode" data-mode="${key}">Record 30 seconds</button>
               <button class="btn btn--ghost btn--sm" type="button" data-action="upload-mode" data-mode="${key}">Upload</button>`}
        </div>`}
    </div>
  `;
}

function activeNav() {
  if (state.nav) return state.nav;
  return state.step >= 6 ? "home" : "setup";
}

function isLiveTask(id) {
  if (!id) return false;
  if (state.customRoles.some((task) => task.id === id)) return true;
  if (Object.values(LIVE).some((list) => list.some((task) => task.id === id))) return true;
  const pinned = state.pinned.find((task) => task.id === id);
  return !!(pinned && pinned.tier === "live");
}

function main() {
  const nav = activeNav();
  if (state.talkOpen && state.talk) return pageTwinTalk();
  if (state.twinSessionId) return pageTwinSessionReport();
  if (state.sessionReportId) return pageSessionReport();
  if (state.calibId) return pageCalibration();
  if (state.sessionsView) return pageSessions();
  if (state.botCreate) return pageBotCreate();
  if (nav === "settings") return pageSettings();
  if (nav === "knowledge") return pageStudioFlow();
  if (nav === "calibrations") return pageTwinSessions();
  if (nav === "sessions") return pageSessions();
  if (nav === "rpsettings") return state.twinPersonaOpen ? pageTwinPersonaDetail() : pageRoleSettings();
  if (nav === "doubt") return pageDoubt();
  if (nav === "setup") return state.botCreate ? pageBotCreate() : state.calOverviewId ? pageCalOverview() : (state.botDetailId && botDetailRow() ? pageBotDetail() : setupPage());
  if (nav === "profile") return pageProfile();
  if (nav === "ask") return pageAskTwin();
  if (nav === "videos") return pageGenVideos();
  if (showingGate()) return pageGate();
  if (nav === "analytics") return pageAnalytics();
  if (nav === "roleplay") {
    if (state.roleCreate) return pageRoleCreate();
    if (state.step === 7 && isLiveTask(state.runId)) return pageRun();
    return pageRoleplay();
  }
  if (state.step === 7 && state.runId) return pageRun();
  return pageHome();
}

function setupPage() {
  if (state.twinReady) return state.studioView === "editor" ? pageStudioFlow() : pageTwinProfile();
  const step = state.step >= 1 && state.step <= 5 ? state.step : state.setupStep;
  if (step === 2) return pageKnowledge();
  if (step === 3) return pageStyle();
  if (step === 4) {
    if (state.callCelebrate) return pageCelebrate();
    return pageHello();
  }
  if (step === 5) return pageTasks();
  return pageFind();
}

function listJoin(items) {
  if (items.length < 2) return items.join("");
  return items.slice(0, -1).join(", ") + " and " + items[items.length - 1];
}

function studioBioText() {
  if (state.studioBio) return state.studioBio;
  const sources = state.profiles.filter((p) => p.found && p.ticked).map((p) => p.platform);
  const learnt = sources.length ? `I’ve learnt from your ${listJoin(sources)}.` : "I’m ready to learn from your training materials.";
  return `${learnt} That covers ${listJoin(TWIN_TOPICS.map((t) => t.toLowerCase()))}.`;
}

function studioStyleList() {
  return state.studioStyles || PATTERNS.map((item) => item.title);
}

function studioVoiceCopy() {
  const libraryVoice = LIBRARY_VOICES.find((item) => item.id === state.presenceLibrary);
  if (state.presenceVoice === "library" && libraryVoice) return { title: libraryVoice.label, note: libraryVoice.note || "" };
  return { title: "Your voice", note: "Cloned from your videos" };
}

function studioLook() {
  return YT_LOOKS.concat(CHARACTER_LOOKS).find((item) => item.id === state.presenceLook) || YT_LOOKS[0];
}

function studioRefresh(behavior) {
  clearTimeout(studioTimer);
  state.studioDialog = null;
  state.studioStatus = "loading";
  state.studioFocus = "twin";
  render();
  studioTimer = setTimeout(() => {
    state.studioStatus = "updated";
    state.studioBehavior = behavior;
    render();
  }, 1400);
}

function studioKnowledgeInline() {
  const rows = state.profiles.filter((p) => p.found);
  return `
    <span class="flow-kicker">Knowledge</span>
    <span class="flow-node-title">Edit sources</span>
    <div class="flow-edit-rows">
      ${rows.map((p) => `
        <label class="flow-edit-row">
          <img class="profile-avatar profile-avatar--sm" src="${profileAvatar(p)}" alt="">
          <span class="flow-edit-row-copy">
            <b>${esc(p.platform)}</b>
            <span>${esc(p.meta)}</span>
          </span>
          <input class="check" type="checkbox" data-change="tick" data-id="${p.id}" ${p.ticked ? "checked" : ""}>
        </label>
      `).join("")}
      <button class="flow-edit-row flow-edit-row--add" type="button" data-action="open-add-knowledge">
        <span class="flow-edit-row-add-ico" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></span>
        <span class="flow-edit-row-copy"><b>Add new</b></span>
      </button>
      ${state.drive ? "" : `
        <button class="flow-edit-row" type="button" data-action="connect-drive">
          ${sourceMark("drive")}
          <span class="flow-edit-row-copy"><b>Connect Google Drive</b></span>
        </button>
      `}
      ${state.notion ? "" : `
        <button class="flow-edit-row" type="button" data-action="connect-notion">
          ${sourceMark("notion")}
          <span class="flow-edit-row-copy"><b>${state.notionOpen ? "Save link" : "Connect Notion"}</b></span>
        </button>
      `}
    </div>
    <div class="studio-foot">
      <button class="btn btn--strong btn--sm" type="button" data-action="close-studio">Save changes</button>
    </div>
  `;
}

function studioStyleLineRow(line, i) {
  const editing = state.studioStyleEditLine === i;
  return `
    <article class="line-card">
      <div class="line-top">
        <span class="flow-line-platform">
          ${sparklesIcon()}
          ${editing
            ? `<textarea class="input" rows="2" data-style-line="${i}">${esc(line)}</textarea>`
            : `<h3 class="line-title">${esc(line)}</h3>`}
        </span>
        ${editing
          ? `<div class="line-actions">
              <button class="btn btn--secondary btn--sm" type="button" data-action="studio-style-confirm-line" data-id="${i}">Confirm</button>
              <button class="btn btn--secondary btn--sm" type="button" data-action="studio-style-reject-line" data-id="${i}">Reject</button>
            </div>`
          : `<button class="btn btn--secondary btn--sm" type="button" data-action="studio-style-edit-line" data-id="${i}">Edit</button>`}
      </div>
    </article>
  `;
}

function studioStyleInline() {
  const lines = state.studioStyleDraft;
  return `
    <span class="flow-kicker">Training style</span>
    <span class="flow-node-title">Edit training style</span>
    <div class="flow-edit-rows">
      ${lines.map((line, i) => studioStyleLineRow(line, i)).join("")}
    </div>
    <div class="studio-foot">
      <button class="btn btn--ghost btn--sm" type="button" data-action="close-studio">Cancel</button>
      <button class="btn btn--strong btn--sm" type="button" data-action="save-studio-style">Save changes</button>
    </div>
  `;
}

function studioPresenceInline() {
  const voice = studioVoiceCopy();
  const voices = LIBRARY_VOICES.map((item) => ({ id: item.id, label: item.label, note: item.note || "" }));
  return `
    <span class="flow-kicker">Voice and avatar</span>
    <span class="flow-node-title">Edit voice and avatar</span>
    <p class="studio-label">Avatar</p>
    <div class="studio-looks studio-looks--compact">
      ${YT_LOOKS.concat(CHARACTER_LOOKS).map((item) => lookButton(item)).join("")}
    </div>
    <p class="studio-label">Voice</p>
    <div class="studio-voices studio-voices--compact">
      ${voices.map((item) => {
        const on = state.presenceLibrary === item.id && state.presenceVoice === "library";
        return `<button class="studio-voice${on ? " is-on" : ""}" type="button" data-action="studio-voice" data-id="${item.id}" aria-pressed="${on}"><b>${esc(item.label)}</b><span>${esc(item.note)}</span></button>`;
      }).join("")}
    </div>
    <p class="card-sub">Now: ${esc(studioLook().label)} · ${esc(voice.title)}</p>
    <div class="studio-foot">
      <button class="btn btn--ghost btn--sm" type="button" data-action="close-studio">Cancel</button>
      <button class="btn btn--strong btn--sm" type="button" data-action="save-studio-presence">Save</button>
    </div>
  `;
}

function socialIcon(name) {
  const icons = {
    linkedin: '<path d="M4.5 6.5h2.2v9H4.5v-9Zm1.1-3.5a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6ZM9 6.5h2.1v1.2h.03c.3-.56 1.03-1.15 2.12-1.15 2.27 0 2.69 1.5 2.69 3.44v5.51h-2.2v-4.88c0-1.16-.02-2.66-1.62-2.66-1.62 0-1.87 1.27-1.87 2.58v4.96H9v-9Z" fill="currentColor"/>',
    instagram: '<rect x="3.5" y="3.5" width="13" height="13" rx="4" stroke="currentColor" stroke-width="1.4"/><circle cx="10" cy="10" r="3" stroke="currentColor" stroke-width="1.4"/><circle cx="13.6" cy="6.4" r="0.9" fill="currentColor"/>',
    facebook: '<path d="M12.2 7.1h1.6V4.6h-1.9c-2 0-3.1 1.2-3.1 3.2v1.5H6.7v2.5h2.1V16h2.5v-4.2h2l.4-2.5h-2.4V8c0-.6.2-.9.9-.9Z" fill="currentColor"/>',
    youtube: '<rect x="3" y="5.5" width="14" height="9" rx="2.5" stroke="currentColor" stroke-width="1.4"/><path d="M8.5 8.2v3.6l3.2-1.8-3.2-1.8Z" fill="currentColor"/>',
    website: '<circle cx="10" cy="10" r="6.5" stroke="currentColor" stroke-width="1.4"/><path d="M3.5 10h13M10 3.5a9 9 0 0 1 0 13M10 3.5a9 9 0 0 0 0 13" stroke="currentColor" stroke-width="1.4"/>'
  };
  return `<svg viewBox="0 0 20 20" fill="none" aria-hidden="true">${icons[name] || ""}</svg>`;
}

const TWIN_TOPICS = ["Cold calling", "Off-plan buyer qualification", "Objection handling", "Listings and landlords", "Commission negotiation", "Buyer psychology", "Online closing"];

// The twin list now lives under Doubt clearance; there is no separate My Twins page.
function pageTwinProfile() {
  return pageDoubt();
}

// Bot mode on the Twin Studio and Home composers: attached documents show above the text, Attach sits by the type menu.
function twinAttachmentsHtml() {
  if (!state.twinAttachments.length) return "";
  return `
          <ul class="twin-attachments" aria-label="Attached documents">
            ${state.twinAttachments.map((name, i) => `
              <li class="twin-attachment">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/></svg>
                <span>${esc(name)}</span>
                <button type="button" data-action="twin-attach-remove" data-id="${i}" aria-label="Remove ${esc(name)}"><svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></button>
              </li>
            `).join("")}
          </ul>
  `;
}

function twinAttachButton(inputId) {
  return `
              <label class="btn btn--ghost btn--sm twin-attach" for="${inputId}" title="Attach documents">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5"/></svg>
                Attach
              </label>
              <input class="sr" type="file" id="${inputId}" multiple>
  `;
}

function twinHero() {
  const botMode = twinAskMode().id === "bot";
  return `
    <article class="twin-hero">
      <div class="twin-hero-top">
        <div class="twin-hero-copy">
          <p><b class="twin-hero-prompt">Create your twins for specific usecase!</b></p>
        </div>
      </div>
      <form class="home-ask twin-hero-ask" id="twin-ask-form">
        <label class="sr" for="twin-ask">Ask your twin</label>
        ${botMode ? twinAttachmentsHtml() : ""}
        <div class="twin-ask-field">
          <textarea class="home-ask-input" id="twin-ask" rows="1" placeholder="${esc(twinAskMode().id === "bot" ? TWIN_BOT_PLACEHOLDER : TWIN_ASK_PREFIX + TWIN_TOPICS.join(", "))}">${esc(state.twinAsk)}</textarea>
          ${twinAskMode().id === "bot"
            ? `<span class="twin-ask-ghost" aria-hidden="true"${state.twinAsk ? " hidden" : ""}>${esc(TWIN_BOT_PLACEHOLDER)}</span>`
            : `<span class="twin-ask-ghost" aria-hidden="true"${state.twinAsk ? " hidden" : ""}>${esc(TWIN_ASK_PREFIX)}<b class="twin-ask-topic">${esc(twinAskTopicText())}</b></span>`}
        </div>
        <div class="twin-hero-ask-row">
          <div class="twin-ask-tools">
            ${askTypeSelect("twin")}
            ${botMode ? twinAttachButton("twin-attach-input") : ""}
          </div>
          <div class="home-ask-actions">
            ${micButton("twin-ask", "twin-mic")}
            <button class="btn btn--strong home-ask-submit" type="submit" aria-label="Send">
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 13V3M4 7l4-4 4 4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
          </div>
        </div>
      </form>
    </article>
  `;
}

function twinBotsSection(bots, openBot) {
  return `
      <div class="twin-bots-head">
        <h2 class="page-title">My Twin</h2>
      </div>
      <article class="card twin-all-card is-clickable" data-action="twin-persona-open" data-id="olga-twin" tabindex="0" aria-label="Open Olga’s twin report">
        <video class="twin-all-video" src="../media/twin-listening.mp4" autoplay muted loop playsinline preload="auto" aria-hidden="true"></video>
        <div class="twin-all-copy">
          <h3 class="twin-all-title">Olga’s twin</h3>
          <p class="twin-all-meta">Last updated 2 days ago
            <button class="twin-hero-info-btn" id="twin-info-btn" type="button" data-action="twin-info-toggle" aria-expanded="${state.twinInfoOpen}" aria-controls="twin-info" aria-label="What I’ve learnt">
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4.5 6.5 8 10l3.5-3.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            ${state.twinInfoOpen ? `<span class="twin-hero-info" id="twin-info">${studioBioText().split("\n").filter(Boolean).map((line) => esc(line)).join("<br>")}</span>` : ""}
          </p>
        </div>
        <div class="twin-all-actions">
          <button class="btn btn--ghost btn--icon btn--sm rp-row-more" type="button" id="role-menu-olga-twin" data-action="role-row-menu" data-id="olga-twin" aria-label="More actions for Olga’s twin" aria-haspopup="menu" aria-expanded="${state.roleMenuId === "olga-twin"}">
            <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="3.25" r="1.15" fill="currentColor"/><circle cx="8" cy="8" r="1.15" fill="currentColor"/><circle cx="8" cy="12.75" r="1.15" fill="currentColor"/></svg>
          </button>
        </div>
      </article>
      ${openBot ? twinBotMenu(openBot) : ""}
  `;
}

// The use-case twins live under Doubt clearance.
function twinSpecificSection(bots, openBot) {
  return `
      <div class="twin-bots-head">
        <h2 class="page-title">Twins for specific usecases</h2>
      </div>
      <div class="rp-grid">
        ${bots.map((bot, i) => twinBotCard(bot, i)).join("")}
      </div>
      ${openBot ? twinBotMenu(openBot) : ""}
  `;
}

// Each thread entry is [who, text, rating?]; rating ("like" | "off") is what Olga picked on a twin reply.
const CALIBRATIONS = [
  {
    id: "cal-prices", title: "Handling “prices will drop next year”", when: "Today, 11:11", length: "6 min",
    thread: [
      ["twin", "Hi Olga! I’m your twin. I’ve learnt how you handle objections, cold calls and listing conversations. Ask me anything and I’ll answer the way you would."],
      ["olga", "Okay. A buyer tells me prices will drop next year. What do I say?"],
      ["twin", "I’d ask what they’ll do with the money while they wait. Then I’d put a year of rent next to today’s payment plan, so waiting becomes a number, not an opinion.", "like"],
      ["olga", "And if a seller wants me to cut my fee to one percent?"],
      ["twin", "I wouldn’t cut it. I’d name the work: photography, viewings, negotiation and paperwork. Then I’d ask which part they’d like me to skip.", "like"],
      ["olga", "What about a landlord who wants to hang up on a cold call?"],
      ["twin", "Stay brief. Say who you are, why you’re calling, and offer to text two comparable sales. Then let them go.", "like"],
      ["olga", "How soon should I follow up after a viewing?"],
      ["twin", "The same evening, with one specific detail from the viewing. Then wait a day before you ask for a decision.", "like"],
      ["olga", "A buyer says the developer’s payment plan is too long."],
      ["twin", "Show them the total cost with a shorter plan next to it, and let the numbers do the talking.", "off"],
      ["olga", "How do I open a conversation with someone who inquired online?"],
      ["twin", "Thank them by name, reference the exact property they clicked, and ask one easy question about timing.", "like"],
      ["olga", "A client wants to see ten properties in a day."],
      ["twin", "Cap it at five. People stop comparing after that, and the last ones suffer for it.", "off"]
    ]
  },
  {
    id: "cal-fee", title: "Pushing back on a one percent fee", when: "Yesterday, 4:20", length: "5 min",
    thread: [
      ["olga", "A seller wants me to cut my fee to one percent. How do I respond?"],
      ["twin", "I wouldn’t cut it. I’d name the work: photography, viewings, negotiation and paperwork. Then I’d ask which part they’d like me to skip.", "like"],
      ["olga", "Good. Add a line about the last property I sold above asking."],
      ["twin", "Got it. I’ll mention the Marina listing that closed above asking in nine days, right after the work list.", "like"]
    ]
  },
  {
    id: "cal-landlord", title: "Opening a cold call with a landlord", when: "Mon, 10:05", length: "4 min",
    thread: [
      ["olga", "What about a landlord who wants to hang up on a cold call?"],
      ["twin", "Stay brief. Say who you are, why you’re calling, and offer to text two comparable sales. Then let them go.", "like"],
      ["olga", "Should I ask for a meeting on that first call?"],
      ["twin", "Not yet. Earn the second call with something useful, then ask for ten minutes.", "off"]
    ]
  },
  {
    id: "cal-followup", title: "Following up after a viewing", when: "Sun, 6:48", length: "2 min",
    thread: [
      ["olga", "How soon should I follow up after a viewing?"],
      ["twin", "The same evening, with one specific detail from the viewing. Then wait a day before you ask for a decision.", "like"],
      ["olga", "Perfect, that’s exactly what I tell my team."]
    ]
  }
];

// A twin reply's rating: what Olga picks here wins over the seeded one.
function calibRating(item, index) {
  const given = state.calibRatings[item.id + ":" + index];
  return given || item.thread[index][2] || "";
}

// The "My conversations" threads in the left nav open on the same screen as a calibration.
const RAIL_THREADS = [
  {
    id: "demo", title: "Roleplay creation", when: "Today, 9:30", back: "Back",
    thread: [
      ["olga", "I want a roleplay for a buyer who wants to wait for prices to drop."],
      ["twin", "Got it. I’ll set the buyer as an off-plan investor who keeps coming back to waiting, and score the agent on holding the objection.", "like"],
      ["olga", "Make the buyer a bit more polite."],
      ["twin", "Done. Polite, but still asks for a reason about the money, not a brochure.", "like"],
      ["olga", "Add a goal about next steps."],
      ["twin", "Added: earn a next step before the call ends.", "like"]
    ]
  },
  {
    id: "bot-setup", title: "1:1 bot setup", when: "Yesterday, 5:12", back: "Back",
    thread: [
      ["olga", "Set up a 1:1 bot for my team leads."],
      ["twin", "I’ll make a private line for team leads, trained on your leadership notes. Who should it answer to?"],
      ["olga", "Just them. Keep it warm and direct."],
      ["twin", "Warm and direct, one question at a time. Ready to test it?", "like"]
    ]
  },
  {
    id: "report", title: "Report analysis for roleplay sessions", when: "Mon, 3:40", back: "Back",
    thread: [
      ["olga", "How did the objection roleplay do this week?"],
      ["twin", "64 sessions, 91% completed. Agents dropped off most after the second objection.", "like"],
      ["olga", "Which agents need help?"],
      ["twin", "Five agents scored under 60. They tend to skip the question about money.", "off"],
      ["olga", "Give me a one-line summary for the team."],
      ["twin", "Hold the objection, ask what they’d do with the money, then ask for a next step.", "like"]
    ]
  },
  {
    id: "knowledge-review", title: "Knowledge review", when: "Sun, 11:05", back: "Back",
    thread: [
      ["olga", "What’s new in my knowledge?"],
      ["twin", "Two new videos and one LinkedIn post since last week. 94% of your sources are fresh.", "like"],
      ["olga", "Anything outdated?"],
      ["twin", "Two older YouTube videos haven’t been read in 30 days.", "like"]
    ]
  }
];

function calibrationStats(item) {
  const ratings = item.thread.map((entry, i) => (entry[0] === "twin" ? calibRating(item, i) : "")).filter(Boolean);
  const like = ratings.filter((r) => r === "like").length;
  const off = ratings.length - like;
  return { like, off, accuracy: ratings.length ? Math.round((like / ratings.length) * 100) : 0 };
}

// ---- Sessions: practice sessions learners took, with who took them and a two-line summary ----
// One practice session: how the learner did, goal by goal, and the call itself.
const SESSION_TOPICS = {
  "wait-and-see": ["Waiting for the market", "News and fear", "Why they started looking", "Inflation and taxes", "Real sales and rental data", "A short Zoom"],
  "options-collector": ["Asking for options", "Brochure overload", "Goals for the next few years", "Comparing the offers they have", "Booking a Zoom"]
};

// The rubric a roleplay is scored on: the one saved with it, else the one for its type.
function rubricForRow(row) {
  const task = taskById(row.id);
  if (task && task.roleDraft && task.roleDraft.rubric) return task.roleDraft.rubric;
  if (ROLE_RUBRICS[row.id]) return roleRubricFor(row.id);
  return roleRubricFor("sales");
}

// How one session scored on each rubric line. The lines add up to the session's overall score,
// with some lines higher and some lower so the picture isn't flat.
function sessionRubricScores(row, session, pct) {
  const rubric = rubricForRow(row);
  const total = rubric.reduce((sum, item) => sum + item.points, 0);
  const seed = (text) => { let h = 0; for (let i = 0; i < text.length; i += 1) h = (h * 31 + text.charCodeAt(i)) % 997; return h; };
  const earned = rubric.map((item) => {
    const wobble = ((seed(item.name + session.id) % 7) - 3) / 20;
    const ratio = Math.min(1, Math.max(0.3, pct / 100 + wobble));
    return Math.min(item.points, Math.max(0, Math.round(item.points * ratio)));
  });
  let diff = Math.round((total * pct) / 100) - earned.reduce((sum, n) => sum + n, 0);
  for (let i = 0; diff !== 0 && i < earned.length * 4; i += 1) {
    const k = i % earned.length;
    if (diff > 0 && earned[k] < rubric[k].points) { earned[k] += 1; diff -= 1; }
    else if (diff < 0 && earned[k] > 0) { earned[k] -= 1; diff += 1; }
  }
  return { total, earned: earned.reduce((sum, n) => sum + n, 0), lines: rubric.map((item, i) => ({ name: item.name, points: item.points, earned: earned[i] })) };
}

function sessionReportData(row, session) {
  const pct = Math.round(Number(session.score) * 10);
  const goals = ((ROLE_PREFILL[row.id] || {}).goals) || ["Ask what is really holding the client back", "Offer a clear next step", "Leave with an agreed time"];
  const met = Math.round((goals.length * pct) / 100);
  const status = (i) => (i < met ? "Met" : i === met ? "Partly" : "Missed");
  const topics = (SESSION_TOPICS[row.id] || ["The opening", "The concern", "The next step"]).slice(0, 4 + (roleHistory(row).findIndex((item) => item.id === session.id) % 3));
  let lines = roleTranscript(row, session);
  if (DEMO_SCRIPTS[row.id]) {
    const client = row.clientName || row.client || "Client";
    lines = DEMO_SCRIPTS[row.id].map((line) => ({ who: line.who === "twin" ? "twin" : "learner", name: line.who === "twin" ? client : session.learner, text: line.text }));
  }
  return { pct, pass: pct >= 70, goals: goals.map((text, i) => ({ text, status: status(i) })), topics, lines, rubric: sessionRubricScores(row, session, pct) };
}

function pageSessionReport() {
  const row = sharedRowById(state.sessionReportRole);
  const session = row ? roleHistory(row).find((item) => item.id === state.sessionReportId) : null;
  if (!row || !session) { state.sessionReportId = ""; return pageSessions(); }
  const d = sessionReportData(row, session);
  const client = row.clientName || row.client || "Client";
  const chip = { Met: "badge--success", Partly: "badge--caution", Missed: "" };
  return `
    <div class="page page--cal">
      <header class="create-bar">
        <button class="create-bar-back" type="button" data-action="session-report-back">${icon("back")} ${esc(row.title)}</button>
      </header>
      <div class="cal-detail sr-report">
        <article class="card sr-head">
          <div class="sr-who">
            <div class="sr-who-text">
              <div class="sr-name-row">
                <span class="rp-avatar rp-avatar--${(roleHistory(row).findIndex((item) => item.id === session.id) % 5) + 1} sr-avatar" aria-hidden="true">${esc(session.learner.charAt(0).toUpperCase())}</span>
                <h1 class="sr-name">${esc(session.learner)}</h1>
              </div>
              <p class="sr-sub">${esc(row.title)}</p>
              <p class="sr-sub">${esc(session.when)} · ${esc(session.length)}</p>
              <div class="sr-client">
                ${row.clientFace ? `<img src="${esc(row.clientFace)}" alt="">` : ""}
                <span>Spoke with <b>${esc(client)}</b></span>
              </div>
            </div>
          </div>
          <figure class="sr-rec">
            <video controls preload="metadata" playsinline src="../media/reel.mp4#t=0.5" aria-label="Recording of this session"></video>
            <figcaption>Recording · ${esc(session.length)}</figcaption>
          </figure>
        </article>
        <article class="card sr-rubric">
          <div class="sr-rubric-head">
            <h2 class="sr-h">Scoring rubric</h2>
            <p class="sr-rubric-total tabular"><b>${d.rubric.earned}</b> / ${d.rubric.total}</p>
          </div>
          <ul>
            ${d.rubric.lines.map((line) => `
              <li>
                <span class="sr-rubric-name">${esc(line.name)}</span>
                <span class="sr-rubric-bar" aria-hidden="true"><span style="width:${Math.round((line.earned / line.points) * 100)}%"></span></span>
                <span class="sr-rubric-pts tabular">${line.earned} / ${line.points}</span>
              </li>
            `).join("")}
          </ul>
        </article>
        <article class="card sr-score">
          <h2 class="sr-h">Topic discussed</h2>
          <div class="sr-topics">
            ${d.topics.map((topic) => `<span class="rps-tag">${esc(topic)}</span>`).join("")}
          </div>
        </article>
        <article class="card sr-goals">
          <h2 class="sr-h">Learner goals</h2>
          <ul>
            ${d.goals.map((g) => `<li><span>${esc(g.text)}</span><span class="badge ${chip[g.status]}">${g.status}</span></li>`).join("")}
          </ul>
        </article>
        <article class="card sr-call">
          <h2 class="sr-h">Transcript</h2>
          <div class="rp-chat">
            ${d.lines.map((line) => `
              <div class="rp-chat-line rp-chat-line--${line.who}">
                <b>${esc(line.name)}</b>
                <p>${esc(line.text)}</p>
              </div>
            `).join("")}
          </div>
        </article>
      </div>
    </div>
  `;
}

function pageSessions() {
  const rows = [];
  sharedRoles().forEach((row) => {
    roleHistory(row).slice(0, 3).forEach((session, i) => {
      const lines = roleTranscript(row, session);
      rows.push({ role: row, session, line: lines[1] ? lines[1].text : row.blurb, idx: rows.length });
    });
  });
  const qna = state.sessionsView === "qna";
  const twin = qna ? twinSessionsParts() : null;
  return `
    <div class="rp-detail-shell">
    <header class="create-bar">
      <button class="create-bar-back" type="button" data-action="sessions-close">${icon("back")} ${qna ? "Twin QnA" : "Roleplay"}</button>
    </header>
    <div class="page page--library page--twin-profile">
      <div class="lib-head">
        <h1 class="lib-title"><span class="lib-mark">${icon("sessions")}</span>Sessions</h1>
        ${qna ? twin.tools : ""}
      </div>
      ${qna ? twin.body : `
      <div class="twin-bots-head">
        <h2 class="page-title">Practice sessions</h2>
        <p class="home-meta">Sessions your learners took on your roleplays</p>
      </div>
      <ul class="sess-list">
        ${rows.map(({ role, session, line, idx }) => `
          <li>
            <button class="sess-row" type="button" data-action="session-open" data-role="${esc(role.id)}" data-id="${esc(session.id)}">
              <span class="rp-avatar rp-avatar--${(idx % 5) + 1}" aria-hidden="true">${esc(session.learner.charAt(0).toUpperCase())}</span>
              <span class="sess-text">
                <span class="sess-name">${esc(session.learner)}</span>
                <span class="sess-line">${esc(role.title)} · ${esc(session.when)} · ${esc(session.length)}</span>
                <span class="sess-line">Score ${esc(session.score)} · “${esc(line)}”</span>
              </span>
              <span class="cal-go" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M7 17 17 7M8 7h9v9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </button>
          </li>
        `).join("")}
      </ul>`}
    </div>
    </div>
  `;
}

// ---- Roleplay settings: a secondary menu (Persona, Voice, Knowledge, Sessions), one screen each ----
const RPS_VOICE_OF = { daniel: "oliver", rajesh: "rajan", claire: "sofia", elena: "priya", marcus: "marcus" };
const RPS_BEHAVIOUR_OF = { daniel: ["Warm but Cautious"], rajesh: ["Skeptical & Reserved"], claire: ["Direct & Challenging"], elena: ["Curious & Probing"], marcus: ["Warm & Open"] };
const RPS_VOICES = [
  { id: "olga", name: "Olga (cloned)", gender: "Female", desc: "Your own voice, cloned from your recordings" },
  { id: "amelia", name: "Amelia", gender: "Female", desc: "Warm, British English" },
  { id: "sofia", name: "Sofia", gender: "Female", desc: "Bright, American English" },
  { id: "priya", name: "Priya", gender: "Female", desc: "Calm, Indian English" },
  { id: "oliver", name: "Oliver", gender: "Male", desc: "Calm, British English" },
  { id: "rajan", name: "Rajan", gender: "Male", desc: "Deep, Indian English" },
  { id: "marcus", name: "Marcus", gender: "Male", desc: "Steady, American English" },
  { id: "jamal", name: "Jamal", gender: "Male", desc: "Energetic, Gulf English" }
];

const RPS_OWN_INDUSTRY = "Real estate";
const RPS_CATS = [
  { id: "sales", label: "Sales personas", noun: "sales", blurb: "Practise sales conversations with clients in" },
  { id: "interview", label: "Interview personas", noun: "interview", blurb: "Practise interviews for roles in" },
  { id: "communication", label: "Communication personas", noun: "communication", blurb: "Practise everyday conversations in" }
];
const RPS_INDUSTRIES = {
  sales: ["Real estate", "Software & SaaS", "Insurance"],
  interview: ["Technology", "Finance", "Healthcare"],
  communication: ["Customer support", "Leadership", "Workplace"]
};
const RPS_ROLES_BY = {
  sales: ["Buyer", "Seller", "Landlord", "Investor", "Prospect", "Decision maker", "Customer", "Champion"],
  interview: ["Hiring manager", "Panel lead", "Recruiter", "Executive interviewer", "Peer interviewer"],
  communication: ["Customer", "Manager", "Colleague", "Stakeholder", "Team member"]
};

// [id, category, industry, name, role, photo, behaviours, speaking, voice, note]
const RPS_LIBRARY_ROWS = [
  ["nadia", "sales", "Software & SaaS", "Nadia Hussein", "Procurement lead", "claire", ["Skeptical & Reserved"], ["Formal", "Asks for proof"], "sofia", "Compares three vendors and wants numbers before a demo."],
  ["ben", "sales", "Software & SaaS", "Ben Carter", "VP Engineering", "marcus", ["Direct & Challenging"], ["Casual", "Interrupts often"], "marcus", "Knows the space and tests every claim."],
  ["maya", "sales", "Software & SaaS", "Maya Ortiz", "Startup founder", "elena", ["Curious & Probing"], ["Casual", "Fast paced"], "priya", "Short on time and budget, curious about quick wins."],
  ["tom", "sales", "Insurance", "Tom Gallagher", "Renewal customer", "daniel", ["Warm but Cautious"], ["Polite", "Short answers"], "oliver", "Renewing a policy and wondering about overpaying."],
  ["grace", "sales", "Insurance", "Grace Liu", "First-time buyer", "elena", ["Warm & Open"], ["Casual", "Asks many questions"], "priya", "Buying cover for the first time and unsure what is needed."],
  ["aarav", "interview", "Technology", "Aarav Mehta", "Engineering manager", "rajesh", ["Curious & Probing"], ["Measured pace", "Follows up"], "rajan", "Probes system design choices and asks why."],
  ["lena", "interview", "Technology", "Lena Fischer", "Recruiter", "claire", ["Warm & Open"], ["Friendly", "Structured"], "amelia", "Runs the first screen and listens for motivation and fit."],
  ["sam", "interview", "Technology", "Sam Brooks", "Staff engineer", "marcus", ["Direct & Challenging"], ["Casual", "Blunt"], "jamal", "Pushes on technical depth with tough follow-ups."],
  ["helen", "interview", "Finance", "Helen Wu", "Hiring partner", "elena", ["Skeptical & Reserved"], ["Formal", "Short answers"], "priya", "Tests judgment and numbers under pressure."],
  ["omar", "interview", "Finance", "Omar Haddad", "Panel lead", "daniel", ["Direct & Challenging"], ["Formal", "Interrupts sometimes"], "oliver", "Leads a panel and cuts in when answers drift."],
  ["ruth", "interview", "Healthcare", "Dr. Ruth Adams", "Department head", "claire", ["Warm but Cautious"], ["Calm", "Measured pace"], "amelia", "Cares about patient focus and teamwork."],
  ["ibrahim", "interview", "Healthcare", "Ibrahim Saleh", "Recruiter", "marcus", ["Warm & Open"], ["Friendly", "Structured"], "marcus", "Screens for values and communication."],
  ["rosa", "communication", "Customer support", "Rosa Delgado", "Upset customer", "elena", ["Direct & Challenging"], ["Fast paced", "Interrupts often"], "sofia", "A late order has gone wrong twice and she wants a straight answer."],
  ["george", "communication", "Customer support", "George Palmer", "Confused customer", "rajesh", ["Warm but Cautious"], ["Polite", "Needs simple steps"], "rajan", "Cannot find the setting and gets flustered."],
  ["zoe", "communication", "Customer support", "Zoe Park", "Chatty customer", "claire", ["Warm & Open"], ["Casual", "Goes off topic"], "amelia", "Friendly but drifts away from the issue."],
  ["victor", "communication", "Leadership", "Victor Alves", "Underperforming report", "daniel", ["Warm but Cautious"], ["Defensive", "Short answers"], "oliver", "Hears feedback as criticism and pulls back."],
  ["hana", "communication", "Leadership", "Hana Sato", "Senior stakeholder", "elena", ["Skeptical & Reserved"], ["Formal", "Wants the point first"], "priya", "Short on time and wants one clear recommendation."],
  ["ravi", "communication", "Workplace", "Ravi Kapoor", "Disagreeing colleague", "rajesh", ["Direct & Challenging"], ["Direct", "Interrupts sometimes"], "rajan", "Pushes back on the plan in a meeting."],
  ["mia", "communication", "Workplace", "Mia Johansson", "Nervous teammate", "claire", ["Warm but Cautious"], ["Quiet", "Hesitant"], "sofia", "Goes quiet when asked for feedback."]
];

function rpsPersonas(cat, ind) {
  const photo = (id) => (PERSONAS.find((p) => p.id === id) || PERSONAS[0]).src;
  const realEstate = PERSONAS.map((p) => ({ id: p.id, category: "sales", industry: "Real estate", name: p.name, role: p.role, src: p.src, behaviours: RPS_BEHAVIOUR_OF[p.id] || [], voice: RPS_VOICE_OF[p.id], speaking: RPS_SPEAK_OF[p.id] || [], note: p.title }));
  const rest = RPS_LIBRARY_ROWS.map(([id, c, i, name, role, ph, behaviours, speaking, voice, note]) => ({ id, category: c, industry: i, name, role, src: photo(ph), behaviours, speaking, voice, note }));
  const all = realEstate.concat(rest, state.rpPersonas).map((item) => state.rpOverrides[item.id] || item);
  return cat ? all.filter((p) => p.category === cat && p.industry === ind) : all;
}

const RPS_SPEAK_OF = { daniel: ["Polite", "Short answers"], rajesh: ["Formal", "Interrupts sometimes"], claire: ["Direct", "Brief"], elena: ["Formal", "Measured pace"], marcus: ["Casual", "Hesitant"] };
const RPS_FORMALITY = ["Casual", "Neutral", "Formal"];
const RPS_LENGTH = ["Short", "Medium", "Long"];
const RPS_INTERRUPT = ["Never", "Sometimes", "Often"];

function rpsSegField(key, label, help, options) {
  const d = state.rpsDraft;
  return `
    <div class="field">
      <p class="label">${esc(label)}</p>
      <div class="seg rps-seg" role="group" aria-label="${esc(label)}">
        ${options.map((o) => `<button type="button" data-action="rps-pick" data-key="${key}" data-id="${esc(o)}" aria-pressed="${d[key] === o}">${esc(o)}</button>`).join("")}
      </div>
      ${help ? `<p class="hint hint-below">${esc(help)}</p>` : ""}
    </div>`;
}
function rpsToggleRow(key, label, help) {
  const on = !!state.rpsDraft[key];
  return `
    <div class="rps-row">
      <div class="rps-copy"><p class="rps-label">${esc(label)}</p><p class="rps-help">${esc(help)}</p></div>
      <button class="rps-switch" type="button" role="switch" aria-checked="${on}" aria-label="${esc(label)}" data-action="rps-toggle" data-key="${key}"><span></span></button>
    </div>`;
}

// Each photo is a ready-made persona: picking one fills in the role, background, behaviour and speaking style.
const RPS_PRESETS = {
  daniel: { role: "Buyer", age: "44", city: "London", background: "Works in finance operations. Enquired about an off-plan project months ago, then put the idea on hold. Wants to wait for prices to hit the bottom.", behaviours: ["warm-cautious"], difficulty: "medium", opening: "Skeptical", formality: "Neutral", length: "Short", interrupts: "Never", pauses: true, fillers: false, phrases: ["I’ll wait and see.", "Maybe call me in three months."], talk: "Polite, a little guarded, slightly tired of sales calls. Short answers at first.", voice: "oliver", pace: "Normal" },
  rajesh: { role: "Landlord", age: "58", city: "Dubai", background: "Owns three rental apartments. Did not expect the call and wants to know who gave out the number.", behaviours: ["skeptical"], difficulty: "hard", opening: "Skeptical", formality: "Formal", length: "Short", interrupts: "Sometimes", pauses: false, fillers: false, phrases: ["Who gave you my number?", "I’m not selling."], talk: "Brief and businesslike. Stays on the line only if the agent is short.", voice: "rajan", pace: "Normal" },
  claire: { role: "Seller", age: "41", city: "Dubai Marina", background: "Selling a two-bedroom apartment. Another agency offered to list it for one percent.", behaviours: ["direct"], difficulty: "hard", opening: "Skeptical", formality: "Neutral", length: "Medium", interrupts: "Sometimes", pauses: true, fillers: false, phrases: ["What do I actually get for the higher fee?"], talk: "Calm and specific. Not angry, but ends the call if the answer sounds like a script.", voice: "sofia", pace: "Normal" },
  elena: { role: "Investor", age: "47", city: "Zurich", background: "Overseas investor with about two million dirhams and ten minutes. Wants a clear picture before booking anything.", behaviours: ["curious"], difficulty: "medium", opening: "Friendly", formality: "Formal", length: "Medium", interrupts: "Never", pauses: true, fillers: false, phrases: ["What would you show me?", "Walk me through the numbers."], talk: "Measured and precise. Asks for numbers and timelines.", voice: "priya", pace: "Normal" },
  marcus: { role: "Buyer", age: "34", city: "Manchester", background: "First-time buyer who went quiet after a viewing. Needs one clear next step.", behaviours: ["warm-open"], difficulty: "easy", opening: "Friendly", formality: "Casual", length: "Short", interrupts: "Never", pauses: true, fillers: true, phrases: ["I just need to think about it.", "It was nice, to be honest."], talk: "Friendly but hesitant. Opens up quickly once the agent asks a good question.", voice: "marcus", pace: "Normal" }
};

const RPS_CAT_PRESET = {
  interview: {
    daniel: { role: "Hiring manager", background: "Leads a product engineering team and has interviewed hundreds of candidates. Values straight answers.", phrases: ["Walk me through that decision.", "What was your part in it?"], talk: "Calm and probing. Follows up on vague answers." },
    rajesh: { role: "Panel lead", background: "Chairs the final panel. Keeps the schedule tight and steps in when answers drift.", phrases: ["Let’s keep to the point.", "Give me a specific example."], talk: "Formal and brisk. Moves on when an answer runs long." },
    claire: { role: "Recruiter", background: "Runs first-round screens. Friendly, but listening for fit and communication.", phrases: ["Tell me about yourself.", "Why this role?"], talk: "Warm and structured. Keeps to a script, with room for follow-ups." },
    elena: { role: "Executive interviewer", background: "Senior leader with little time. Tests judgment and how candidates handle pressure.", phrases: ["What would you do differently?", "Walk me through the numbers."], talk: "Measured and precise. Expects short, clear answers." },
    marcus: { role: "Peer interviewer", background: "Would be a teammate. Casual, but quietly checking how the candidate collaborates.", phrases: ["How did you handle the disagreement?", "What did you learn?"], talk: "Relaxed and conversational. Asks practical questions." }
  },
  communication: {
    daniel: { role: "Manager", background: "Hearing a hard update from the team and wants the facts first.", phrases: ["Give me the headline.", "What do you need from me?"], talk: "Calm and a little guarded. Listens before reacting." },
    rajesh: { role: "Customer", background: "Upset about a delayed order and wants a clear answer, not an apology.", phrases: ["I need a date.", "Who can actually fix this?"], talk: "Brief and businesslike. Gets sharper if the answer is vague." },
    claire: { role: "Colleague", background: "Disagrees with the plan and says so directly, but fairly.", phrases: ["I don’t see it that way.", "What’s the evidence?"], talk: "Calm and specific. Not angry, but will not back down." },
    elena: { role: "Stakeholder", background: "Short on time and wants the point in one sentence.", phrases: ["What’s the recommendation?", "Bottom line, please."], talk: "Measured and precise. Cuts to the decision." },
    marcus: { role: "Team member", background: "Nervous about feedback and tends to go quiet.", phrases: ["I’m not sure.", "I’ll think about it."], talk: "Friendly but hesitant. Opens up once they feel safe." }
  },
  sales: {
    daniel: { role: "Prospect", background: "Has heard similar pitches before and needs a clear reason to switch.", phrases: ["Send me something.", "What makes you different?"], talk: "Polite but busy. Opens up when the agent is specific." },
    rajesh: { role: "Decision maker", background: "Owns the budget and has been burned by vendors before.", phrases: ["Show me the numbers.", "Who else uses this?"], talk: "Brief and businesslike. Wants proof before a meeting." },
    claire: { role: "Customer", background: "Already working with a competitor and happy enough.", phrases: ["We’re fine for now.", "What would change for us?"], talk: "Calm and specific. Ends the call if the answer is a script." },
    elena: { role: "Prospect", background: "Interested, but comparing options and short on time.", phrases: ["What would you show me?", "Walk me through the pricing."], talk: "Measured and precise. Asks about timelines." },
    marcus: { role: "Champion", background: "Likes the idea but needs help making the case internally.", phrases: ["I just need to think about it.", "How do I sell this to my boss?"], talk: "Friendly but hesitant. Opens up quickly with a good question." }
  }
};

function rpsPresetFor(id, cat, ind) {
  const base = RPS_PRESETS[id] || RPS_PRESETS.daniel;
  if (cat === "sales" && ind === "Real estate") return base;
  const over = (RPS_CAT_PRESET[cat] || {})[id];
  return over ? Object.assign({}, base, over) : base;
}

function applyRpsPreset(d, id) {
  const persona = PERSONAS.find((item) => item.id === id) || PERSONAS[0];
  const p = rpsPresetFor(persona.id, d.category, d.industry);
  d.look = persona.id;
  d.name = persona.name;
  if (!p) return;
  Object.assign(d, p, { behaviours: p.behaviours.slice(), phrases: p.phrases.slice(), phraseDraft: "" });
}

// A short spoken sample of a voice, using the browser's own text-to-speech voices.
function voicePlayIcon() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 8a5 5 0 0 1 0 8"/><path d="M17.7 5a9 9 0 0 1 0 14"/><path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"/></svg>`;
}

function voiceButton(id, name) {
  const playing = state.voicePlaying === id;
  return `<button class="rps-voice-play${playing ? " is-playing" : ""}" type="button" data-action="rps-voice-play" data-id="${esc(id)}" aria-label="${playing ? "Stop" : "Play a sample of"} ${esc(name)}" aria-pressed="${playing}" title="${playing ? "Stop" : "Listen"}">${voicePlayIcon()}</button>`;
}

function playVoiceSample(id) {
  const v = RPS_VOICES.find((item) => item.id === id);
  if (!v) return;
  const synth = window.speechSynthesis;
  if (!synth) { toast("Audio isn’t available in this browser."); return; }
  const wasPlaying = state.voicePlaying === id;
  synth.cancel();
  if (wasPlaying) { state.voicePlaying = ""; render(); return; }
  const first = v.name.replace(/ \(.*$/, "");
  const line = new SpeechSynthesisUtterance(`Hi, I’m ${first}. Thanks for taking the time to talk with me today.`);
  const female = v.gender === "Female";
  const voices = synth.getVoices().filter((x) => /^en/i.test(x.lang));
  const hint = female ? /(samantha|victoria|karen|moira|tessa|fiona|serena|female|zira|susan)/i : /(daniel|alex|fred|oliver|rishi|male|david|mark|george)/i;
  const pick = voices.find((x) => hint.test(x.name)) || voices[RPS_VOICES.indexOf(v) % Math.max(1, voices.length)];
  if (pick) line.voice = pick;
  line.lang = (pick && pick.lang) || "en-US";
  line.pitch = female ? 1.15 : 0.85;
  line.rate = /fast|energetic/i.test(v.desc) ? 1.1 : 0.98;
  const done = () => { if (state.voicePlaying === id) { state.voicePlaying = ""; render(); } };
  line.onend = done;
  line.onerror = done;
  state.voicePlaying = id;
  render();
  synth.speak(line);
}

const RPS_STEPS = [[1, "Avatar"], [2, "Voice"], [3, "Speaking pattern"], [4, "Knowledge"]];

function rpsHead(title, sub, tool) {
  return `
    <div class="rps-panel-head">
      <div><h2 class="rps-panel-title">${esc(title)}</h2>${sub ? `<p class="rps-intro">${esc(sub)}</p>` : ""}</div>
      ${tool || ""}
    </div>`;
}

// Persona settings: every persona as a card. "Create persona" opens its own three-step screen.
// A persona's full profile. "Create roleplay" starts the roleplay flow with this persona already picked.
function rpsPresetOf(p) {
  return p.preset || RPS_PRESETS[p.id] || {};
}

function pageRpsDetail() {
  const p = rpsPersonas().find((item) => item.id === state.rpsDetailId);
  if (!p) { state.rpsDetailId = ""; return pageRoleSettings(); }
  const pre = rpsPresetOf(p);
  const diff = ROLE_DIFFICULTY.find((item) => item.id === pre.difficulty);
  const voice = RPS_VOICES.find((v) => v.id === p.voice);
  const traitLabels = (ids) => (ids || []).map((id) => (ROLE_TRAITS.find((t) => t.id === id) || { label: id }).label);
  const row = (label, body) => `<div class="rpd-row"><p class="rpd-label">${esc(label)}</p><div class="rpd-value">${body}</div></div>`;
  const tags = (list) => `<div class="rps-person-tags">${list.map((t) => `<span class="rps-tag">${esc(t)}</span>`).join("")}</div>`;
  const place = [pre.age, pre.city].filter(Boolean).join(", ") || p.meta;
  return `
    <div class="page page--cal">
      <header class="create-bar">
        <button class="create-bar-back" type="button" data-action="rps-persona-back">${icon("back")} Persona</button>
      </header>
      <div class="cal-detail rpd">
        <article class="card rpd-hero">
          ${p.src ? `<img class="rpd-photo" src="${esc(p.src)}" alt="">` : ""}
          <span class="rps-person-chip rpd-chip">${esc(p.role)}</span>
          <div class="rpd-title">
            <h1 class="rpd-name">${esc(p.name)}</h1>
            ${place ? `<p class="rpd-sub">${esc(place)}</p>` : ""}
          </div>
        </article>
        <article class="card rpd-card">
          ${pre.background ? row("Background", `<p>${esc(pre.background)}</p>`) : ""}
          ${row("Behaviour", tags(p.behaviours.length ? p.behaviours : ["Not set"]))}
          ${p.speaking && p.speaking.length ? row("Speaking", tags(p.speaking)) : ""}
          ${pre.talk ? row("How they talk", `<p>${esc(pre.talk)}</p>`) : ""}
          ${diff ? row("Difficulty", `<p><b>${esc(diff.label)}</b> · ${esc(diff.desc)}</p>`) : ""}
          ${pre.opening ? row("Opening style", `<p>${esc(pre.opening)}</p>`) : ""}
          ${pre.phrases && pre.phrases.length ? row("Signature phrases", tags(pre.phrases.map((t) => "“" + t + "”"))) : ""}
          ${voice ? row("Voice", `<p class="rpd-voice">${voiceButton(voice.id, voice.name)}<span><b>${esc(voice.name)}</b> · ${esc(voice.desc)}</span></p>`) : ""}
          ${p.knowledge ? row("Knowledge", `<p>${esc(p.knowledge)}</p>`) : ""}
        </article>
      </div>
      <div class="cal-foot">
        <button class="btn btn--strong" type="button" data-action="rps-role-create" data-id="${esc(p.id)}">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3.5v9M3.5 8h9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          Create roleplay
        </button>
      </div>
    </div>
  `;
}

// Olga's twin laid out like a persona: who it is, how it talks, what it has learnt from.
function pageTwinPersonaDetail() {
  const row = (label, body) => `<div class="rpd-row"><p class="rpd-label">${esc(label)}</p><div class="rpd-value">${body}</div></div>`;
  const tags = (list) => `<div class="rps-person-tags">${list.map((t) => `<span class="rps-tag">${esc(t)}</span>`).join("")}</div>`;
  const voice = RPS_VOICES.find((v) => v.id === "olga");
  const sources = state.profiles.filter((item) => item.found && item.ticked && item.meta).map((item) => `${item.platform} · ${item.meta}`);
  return `
    <div class="page page--cal">
      <header class="create-bar">
        <button class="create-bar-back" type="button" data-action="twin-persona-back">${icon("back")} Persona</button>
        <div class="create-bar-actions">
          <button class="btn btn--strong btn--sm" type="button" data-action="talk-open">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>
            Calibrate
          </button>
          <button class="btn btn--secondary btn--sm" type="button" data-action="twin-create-roleplay">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3.5v9M3.5 8h9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            Create roleplay
          </button>
          <button class="btn btn--secondary btn--sm" type="button" data-action="create-bot">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3.5v9M3.5 8h9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            Create QnA
          </button>
        </div>
      </header>
      <div class="cal-detail rpd">
        <article class="card rpd-hero">
          <video class="rpd-photo" src="../media/twin-listening.mp4" autoplay muted loop playsinline preload="auto" aria-hidden="true"></video>
          <span class="rps-person-chip rpd-chip">All use cases</span>
          <div class="rpd-title">
            <h1 class="rpd-name">Olga’s twin</h1>
            <p class="rpd-sub">Real estate, Dubai · Last updated 2 days ago</p>
          </div>
        </article>
        <article class="card rpd-card">
          ${row("Background", `<p>${studioBioText().split("\n").filter(Boolean).map((line) => esc(line)).join("<br>")}</p>`)}
          ${row("Topics", tags(TWIN_TOPICS))}
          ${row("Training style", studioStyleList().map((line) => `<p>${esc(line)}</p>`).join(""))}
          ${voice ? row("Voice", `<p class="rpd-voice">${voiceButton(voice.id, voice.name)}<span><b>${esc(voice.name)}</b> · ${esc(voice.desc)}</span></p>`) : ""}
          ${sources.length ? row("Learnt from", tags(sources)) : ""}
        </article>
      </div>
    </div>
  `;
}

function pageDoubt() {
  return `
    <div class="page page--library">
      <div class="lib-head">
        <h1 class="lib-title"><span class="lib-mark">${icon("doubt")}</span>Twin QnA</h1>
        <div class="lib-tools">
          <button class="btn btn--strong" type="button" data-action="create-bot">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3.5v9M3.5 8h9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            Create new
          </button>
        </div>
      </div>
      ${twinSpecificSection(twinBots(), twinBots().find((bot) => bot.id === state.roleMenuId))}
    </div>
  `;
}

function pageRoleSettings() {
  if (state.rpsCreate && state.rpsDraft) return pageRpsCreate();
  if (state.rpsDetailId) return pageRpsDetail();
  // Olga's industry is already known (real estate), so her predefined sales personas show straight away.
  const cat = RPS_CATS[0];
  const ind = RPS_OWN_INDUSTRY;
  const list = rpsPersonas(cat.id, ind);
  return `
    <div class="page page--library">
      <div class="lib-head">
        <h1 class="lib-title"><span class="lib-mark">${icon("rpsettings")}</span>Persona</h1>
        <div class="lib-tools">
          <button class="btn btn--strong" type="button" data-action="rps-persona-new">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3.5v9M3.5 8h9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            Create persona
          </button>
        </div>
      </div>
      ${twinBotsSection(twinBots(), state.roleMenuId === TWIN_ALL.id ? TWIN_ALL : null)}
      <div class="rps-panel-head rps-panel-head--page">
        <div><h2 class="rps-panel-title">Other personas</h2><p class="rps-intro">${esc(cat.blurb)} ${esc(ind.toLowerCase())}. Pick a default, or create your own.</p></div>
      </div>
      ${list.length ? `
      <div class="rps-people">
        ${list.map((p) => `
          <article class="card rps-person is-clickable" data-action="rps-persona-view" data-id="${esc(p.id)}" tabindex="0" aria-label="Open ${esc(p.name)}">
            <div class="rps-person-hero">
              ${p.src ? `<img class="rps-person-photo" src="${esc(p.src)}" alt="">` : `<span class="rps-person-photo rps-person-photo--initial" aria-hidden="true">${esc((p.name || "?").charAt(0).toUpperCase())}</span>`}
              <span class="rps-person-badge">${esc(p.role)}</span>
              <div class="rps-person-title">
                <span class="rps-person-name">${esc(p.name)}</span>
              </div>
            </div>
            <div class="rps-person-body">
              ${p.meta ? `<div class="rps-person-item"><p class="rps-person-label">Based in</p><p class="rps-person-value">${esc(p.meta)}</p></div>` : ""}
              <div class="rps-person-item"><p class="rps-person-label">Behaviour</p><div class="rps-person-tags">${(p.behaviours.length ? p.behaviours : ["Not set"]).map((t) => `<span class="rps-tag">${esc(t)}</span>`).join("")}</div></div>
              ${p.speaking && p.speaking.length ? `<div class="rps-person-item"><p class="rps-person-label">Speaking</p><div class="rps-person-tags">${p.speaking.map((t) => `<span class="rps-tag">${esc(t)}</span>`).join("")}</div></div>` : ""}
              ${p.voice ? `<div class="rps-person-item"><p class="rps-person-label">Voice</p><div class="rps-person-value rps-voice-line"><span>${esc((RPS_VOICES.find((v) => v.id === p.voice) || { name: "" }).name)}</span>${voiceButton(p.voice, (RPS_VOICES.find((v) => v.id === p.voice) || { name: "" }).name)}</div></div>` : ""}
              ${p.knowledge ? `<div class="rps-person-item"><p class="rps-person-label">Knowledge</p><p class="rps-person-value">${esc(p.knowledge)}</p></div>` : ""}
            </div>
            <button class="rps-edit" type="button" data-action="rps-persona-edit" data-id="${esc(p.id)}" aria-label="Edit ${esc(p.name)}" title="Edit">${menuIcon("edit")}</button>
          </article>
        `).join("")}
      </div>` : `
      <div class="rps-empty">
        <p>No ${esc(cat.noun)} personas for ${esc(ind.toLowerCase())} yet.</p>
        <button class="btn btn--secondary" type="button" data-action="rps-persona-new">Create persona</button>
      </div>`}
    </div>
  `;
}

function rpsAvatarStep(d) {
  const diff = ROLE_DIFFICULTY.find((item) => item.id === d.difficulty) || ROLE_DIFFICULTY[1];
  return `
    <h1 class="page-title role-card-title">Avatar</h1>
    <div class="field">
      <p class="label">Pick a persona</p>
      <div class="rpa-people" role="group" aria-label="Persona">
        ${PERSONAS.map((item) => `
          <button class="rpa-person" type="button" data-action="rps-persona-photo" data-id="${item.id}" aria-pressed="${d.look === item.id}">
            <span class="rpa-photo"><img src="${item.src}" alt="">${d.look === item.id ? `<span class="rpa-tick" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5 6.5 11.5 12.5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>` : ""}</span>
            <span class="rpa-name">${esc(item.name.split(" ")[0])}</span>
            <span class="rpa-sub">${esc(rpsPresetFor(item.id, d.category, d.industry).role)}</span>
          </button>
        `).join("")}
      </div>
      <p class="hint hint-below">Each persona comes with a role, background and speaking style already filled in. Change anything below.</p>
    </div>
    <div class="field">
      <label class="label" for="rps-name">Name</label>
      <input class="input" id="rps-name" data-rps-field="name" placeholder="Example: Sara Khan" value="${esc(d.name)}" autocomplete="off">
    </div>
    <div class="field">
      <label class="label" for="rps-role">Role</label>
      <select class="input" id="rps-role" data-rps-field="role">${(RPS_ROLES_BY[d.category].includes(d.role) ? RPS_ROLES_BY[d.category] : RPS_ROLES_BY[d.category].concat(d.role)).map((r) => `<option${r === d.role ? " selected" : ""}>${esc(r)}</option>`).join("")}</select>
      <p class="hint hint-below">Who they are on the call.</p>
    </div>
    <div class="rps-two">
      <div class="field">
        <label class="label" for="rps-age">Age</label>
        <input class="input" id="rps-age" data-rps-field="age" inputmode="numeric" placeholder="Example: 44" value="${esc(d.age)}" autocomplete="off">
      </div>
      <div class="field">
        <label class="label" for="rps-city">Based in</label>
        <input class="input" id="rps-city" data-rps-field="city" placeholder="Example: London" value="${esc(d.city)}" autocomplete="off">
      </div>
    </div>
    <div class="field">
      <label class="label" for="rps-bg">Background</label>
      <textarea class="input" id="rps-bg" data-rps-field="background" rows="3" placeholder="Example: Works in finance operations. Enquired about an off-plan project months ago, then put it on hold.">${esc(d.background)}</textarea>
    </div>
    <div class="field">
      <p class="label">Behaviour</p>
      <div class="role-traits" role="group" aria-label="Behaviour">
        ${ROLE_TRAITS.map((t) => `<button class="role-trait" type="button" data-action="rps-persona-trait" data-id="${t.id}" aria-pressed="${d.behaviours.includes(t.id)}">${esc(t.label)}</button>`).join("")}
      </div>
    </div>
    <div class="field">
      <p class="label">Difficulty</p>
      <div class="seg rps-seg" role="group" aria-label="Difficulty">
        ${ROLE_DIFFICULTY.map((item) => `<button type="button" data-action="rps-persona-diff" data-id="${item.id}" aria-pressed="${d.difficulty === item.id}">${esc(item.label)}</button>`).join("")}
      </div>
      <p class="hint hint-below">${esc(diff.desc)}</p>
    </div>
    <div class="field">
      <p class="label">Opening style</p>
      <div class="seg rps-seg" role="group" aria-label="Opening style">
        ${["Friendly", "Skeptical", "Rushed"].map((o) => `<button type="button" data-action="rps-persona-open" data-id="${o}" aria-pressed="${d.opening === o}">${o}</button>`).join("")}
      </div>
    </div>
  `;
}

function rpsSpeakingStep(d) {
  return `
    <h1 class="page-title role-card-title">Speaking pattern</h1>
    ${rpsSegField("formality", "Formality", "How polished their language is.", RPS_FORMALITY)}
    ${rpsSegField("length", "Answer length", "How much they say at a time.", RPS_LENGTH)}
    ${rpsSegField("interrupts", "Interrupts", "How often they cut the agent off.", RPS_INTERRUPT)}
    <div class="rps-rows">
      ${rpsToggleRow("pauses", "Pauses before answering", "Takes a beat to think, like a real call.")}
      ${rpsToggleRow("fillers", "Uses fillers", "Says “um”, “well” and “you know” now and then.")}
    </div>
    <div class="field">
      <p class="label">Signature phrases</p>
      <div class="role-goal-add">
        <label class="sr" for="rps-phrase">Signature phrase</label>
        <input class="input" id="rps-phrase" data-rps-field="phraseDraft" placeholder="Example: Let me think about it." value="${esc(d.phraseDraft)}" autocomplete="off" ${d.phrases.length >= 4 ? "disabled" : ""}>
        <button class="btn btn--secondary" type="button" data-action="rps-phrase-add" ${d.phrases.length >= 4 ? "disabled" : ""}>
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3.5v9M3.5 8h9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          Add
        </button>
      </div>
      ${d.phrases.length ? `<ul class="rps-files">${d.phrases.map((text, i) => `<li><span>“${esc(text)}”</span><button class="btn btn--ghost btn--sm" type="button" data-action="rps-phrase-remove" data-id="${i}" aria-label="Remove: ${esc(text)}">Remove</button></li>`).join("")}</ul>` : ""}
    </div>
    <div class="field">
      <label class="label" for="rps-talk">How they talk</label>
      <textarea class="input" id="rps-talk" data-rps-field="talk" rows="2" placeholder="Example: Polite and a little guarded. Short answers at first.">${esc(d.talk)}</textarea>
    </div>
  `;
}

function rpsVoiceStep(d) {
  const group = (gender) => `
    <h3 class="rps-group">${gender} voices</h3>
    <div class="rps-list">
      ${RPS_VOICES.filter((v) => v.gender === gender).map((v) => `
        <div class="rps-voice${d.voice === v.id ? " is-selected" : ""}">
          ${voiceButton(v.id, v.name)}
          <button class="rps-voice-main" type="button" data-action="rps-voice-pick" data-id="${v.id}" role="radio" aria-checked="${d.voice === v.id}">
            <span class="rps-voice-text"><span class="rps-voice-name">${esc(v.name)}</span><span class="rps-voice-desc">${esc(v.desc)}</span></span>
            <span class="role-dot" aria-hidden="true"></span>
          </button>
        </div>
      `).join("")}
    </div>`;
  return `
    <h1 class="page-title role-card-title">Voice</h1>
    <p class="rps-intro">The voice learners hear on the call.</p>
    ${group("Female")}
    ${group("Male")}
    <div class="field">
      <p class="label">Speaking pace</p>
      <div class="seg rps-seg" role="group" aria-label="Speaking pace">
        ${["Slow", "Normal", "Fast"].map((o) => `<button type="button" data-action="rps-pace" data-id="${o}" aria-pressed="${d.pace === o}">${o}</button>`).join("")}
      </div>
      <p class="hint hint-below">How fast the persona talks.</p>
    </div>
  `;
}

function rpsKnowledgeStep(d) {
  return `
    <h1 class="page-title role-card-title">Knowledge</h1>
    <p class="rps-intro">What this persona draws examples and objections from.</p>
    <h3 class="rps-group">Upload</h3>
    <label class="rps-drop" for="rps-upload">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5"/></svg>
      <span><b>Upload files</b><span>PDF, Word, slides or recordings</span></span>
    </label>
    <input class="sr" type="file" id="rps-upload" data-change="rps-upload" multiple>
    ${d.files.length ? `
      <ul class="rps-files">
        ${d.files.map((name, i) => `<li><span>${esc(name)}</span><button class="btn btn--ghost btn--sm" type="button" data-action="rps-file-remove" data-id="${i}" aria-label="Remove ${esc(name)}">Remove</button></li>`).join("")}
      </ul>` : ""}
    <h3 class="rps-group">Sources</h3>
    <div class="rps-list">
      ${d.sources.map((k) => `
        <div class="rps-know">
          <span class="rps-know-ico" aria-hidden="true">${esc(k.name.charAt(0))}</span>
          <span class="rps-voice-text"><span class="rps-voice-name">${esc(k.name)}</span><span class="rps-voice-desc">${esc(k.meta)}</span></span>
          <button class="rps-switch" type="button" role="switch" aria-checked="${k.on}" aria-label="${esc(k.name)}" data-action="rps-know-toggle" data-id="${esc(k.id)}"><span></span></button>
        </div>
      `).join("")}
    </div>
  `;
}

function pageRpsCreate() {
  const d = state.rpsDraft;
  const step = state.rpsStep;
  const last = step === RPS_STEPS.length;
  const body = step === 1 ? rpsAvatarStep(d) : step === 2 ? rpsVoiceStep(d) : step === 3 ? rpsSpeakingStep(d) : rpsKnowledgeStep(d);
  return `
    <div class="page page--create">
      <header class="create-bar">
        <button class="create-bar-back" type="button" data-action="rps-persona-cancel">${icon("back")} ${state.rpsReturn ? "Roleplay" : "Persona"}</button>
      </header>
      <div class="create-scroll">
        <div class="create-column">
          <div class="seg" role="group" aria-label="Persona steps">
            ${RPS_STEPS.map(([n, label]) => `<button type="button" data-action="rps-step" data-id="${n}" aria-pressed="${n === step}">${label}</button>`).join("")}
          </div>
          <article class="card">
            <div class="card-body role-card rps-create-body">${body}</div>
          </article>
        </div>
      </div>
      <footer class="create-foot">
        <div class="create-actions">
          <button class="btn btn--ghost" type="button" data-action="rps-back">${step === 1 ? "Cancel" : "Back"}</button>
          ${last
            ? `<button class="btn btn--primary" type="button" data-action="rps-persona-save">${roleCheckIcon()} Save persona</button>`
            : `<button class="btn btn--strong" type="button" data-action="rps-next">Next</button>`}
        </div>
      </footer>
    </div>
  `;
}

// Twin sessions: the conversations learners had with your twins, laid out like the Sessions page.
// One learner conversation with a twin: what they asked, how the answers landed, and the conversation itself.
const TWIN_SESSION_TOPICS = {
  "offplan-process": ["First call", "Educational Zoom", "Presentation meeting", "Qualifying", "Booking the next step"],
  "quiet-clients": ["Where it broke", "Follow-up message", "Call or message", "Re-qualifying money", "One open question"],
  "objection-handling": ["Clarify first", "“I need to think about it”", "Price concerns", "Wait and see", "Agreeing the next step"]
};

const twinOffReasons = () => BOT_OFF_TAGS.concat(["Something else"]);

function twinOffDialog() {
  const o = state.twinOff;
  const crossIcon = `<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;
  return `
    <dialog class="issue-dialog confirm-dialog twin-off-dialog" id="twin-off-dialog" aria-labelledby="twin-off-title">
      <div class="confirm-card">
        <button class="btn btn--ghost btn--icon btn--sm confirm-close" type="button" data-action="twin-off-cancel" aria-label="Close">${crossIcon}</button>
        <div class="confirm-copy">
          <h2 class="confirm-title" id="twin-off-title">Why does this feel off?</h2>
          <p class="confirm-sub">Pick what fits. Olga’s twin will learn from it.</p>
        </div>
        <p class="twin-off-quote">“${esc(o.text)}”</p>
        <div class="role-traits" role="group" aria-label="Reasons">
          ${twinOffReasons().map((reason) => `<button class="role-trait" type="button" data-action="twin-off-reason" data-id="${esc(reason)}" aria-pressed="${o.reasons.includes(reason)}">${esc(reason)}</button>`).join("")}
        </div>
        <div class="field twin-off-note">
          <label class="label" for="twin-off-note">Anything to add? <span class="twin-off-opt">Optional</span></label>
          <textarea class="input" id="twin-off-note" data-twin-off-note="1" rows="2" placeholder="Say it the way Olga would">${esc(o.note)}</textarea>
        </div>
        <div class="confirm-actions">
          <button class="btn btn--secondary" type="button" data-action="twin-off-cancel">Cancel</button>
          <button class="btn btn--strong" type="button" data-action="twin-off-submit">Submit</button>
        </div>
      </div>
    </dialog>
  `;
}

function mountTwinOffDialog() {
  const dlg = document.getElementById("twin-off-dialog");
  if (!dlg) return;
  if (typeof dlg.showModal === "function" && !dlg.open) dlg.showModal();
  dlg.addEventListener("cancel", (ev) => {
    ev.preventDefault();
    actions["twin-off-cancel"]();
  });
  dlg.addEventListener("click", (ev) => {
    if (ev.target === dlg) actions["twin-off-cancel"]();
  });
}

function pageTwinSessionReport() {
  const bot = twinBots().find((item) => item.id === state.twinSessionBot);
  const list = bot ? botConversations(bot) : [];
  const idx = list.findIndex((item) => item.id === state.twinSessionId);
  if (!bot || idx < 0) { state.twinSessionId = ""; return pageTwinSessions(); }
  const c = list[idx];
  const qa = botQA(bot);
  const start = Math.max(0, qa.findIndex(([q]) => q === c.q));
  const pairs = qa.slice(start).concat(qa.slice(0, start));
  const topics = (TWIN_SESSION_TOPICS[bot.id] || ["The question", "Olga’s answer"]).slice(0, 3 + (idx % 3));
  const lines = [];
  pairs.forEach(([q, a]) => { lines.push({ who: "learner", name: c.learner, text: q }); lines.push({ who: "twin", name: "Olga’s twin", text: a }); });
  const rated = lines.map((line, i) => state.twinRatings[c.id + ":" + i]).filter(Boolean);
  const likes = rated.filter((r) => r.v === "like").length;
  const offs = rated.length - likes;
  return `
    <div class="page page--cal">
      <header class="create-bar">
        <button class="create-bar-back" type="button" data-action="twin-session-back">${icon("back")} ${esc(bot.title)}</button>
      </header>
      <div class="cal-detail sr-report">
        <article class="card sr-head">
          <div class="sr-who">
            <div class="sr-who-text">
              <div class="sr-name-row">
                <span class="rp-avatar rp-avatar--${(idx % 5) + 1} sr-avatar" aria-hidden="true">${esc(c.learner.charAt(0).toUpperCase())}</span>
                <h1 class="sr-name">${esc(c.learner)}</h1>
              </div>
              <p class="sr-sub">${esc(bot.title)}</p>
              <p class="sr-sub">${esc(c.when)} · ${pairs.length * 2} min</p>
            </div>
          </div>
          <figure class="sr-rec">
            <video controls preload="metadata" playsinline src="../media/twin-speaking.mp4#t=0.5" aria-label="Recording of this conversation"></video>
            <figcaption>Recording · ${pairs.length * 2} min</figcaption>
          </figure>
        </article>
        <article class="card sr-score">
          <h2 class="sr-h">Topic discussed</h2>
          <div class="sr-topics">
            ${topics.map((topic) => `<span class="rps-tag">${esc(topic)}</span>`).join("")}
          </div>
        </article>
        <article class="card sr-call">
          <h2 class="sr-h">Transcript</h2>
          ${rated.length ? `<p class="sr-calib"><span>Your calibration</span><b>${likes} feels like me · ${offs} feels off</b></p>` : ""}
          <div class="rp-chat">
            ${lines.map((line, i) => {
              const key = c.id + ":" + i;
              const r = state.twinRatings[key];
              const feedback = line.who !== "twin" ? "" : r ? `
                <div class="sr-rated">
                  ${talkPick(r.v)}
                  ${r.v === "off" && (r.reasons.length || r.note) ? `<span class="sr-reasons">${esc(r.reasons.concat(r.note ? [r.note] : []).join(" · "))}</span>` : ""}
                  <button class="btn btn--ghost btn--sm" type="button" data-action="twin-rate-clear" data-key="${esc(key)}">Change</button>
                </div>` : `
                <div class="talk-feedback">
                  <button class="btn btn--secondary btn--sm" type="button" data-action="twin-rate" data-key="${esc(key)}" data-v="like" data-text="${esc(line.text)}">${demoVote("up")} Feels like me</button>
                  <button class="btn btn--secondary btn--sm" type="button" data-action="twin-rate" data-key="${esc(key)}" data-v="off" data-text="${esc(line.text)}">${demoVote("down")} Feels off</button>
                </div>`;
              const bubble = `
              <div class="rp-chat-line rp-chat-line--${line.who}">
                <b>${esc(line.name)}</b>
                <p>${esc(line.text)}</p>
              </div>`;
              // The rating sits under the bubble, not inside it.
              return feedback ? `<div class="sr-msg">${bubble}${feedback}</div>` : bubble;
            }).join("")}
          </div>
        </article>
      </div>
    </div>
  `;
}

// The twin's sessions now sit under Sessions > QnA Sessions.
function pageTwinSessions() {
  state.sessionsView = "qna";
  return pageSessions();
}

function twinSessionsParts() {
  const bots = twinBots();
  const f = state.twinSessFilter;
  const dateOf = (when) => (/^Today/.test(when) ? "today" : /^Yesterday/.test(when) ? "yesterday" : "earlier");
  const rows = [];
  for (let i = 0; i < 3; i += 1) {
    bots.forEach((bot) => {
      const c = botConversations(bot)[i];
      if (!c) return;
      if (f.bot !== "all" && f.bot !== bot.id) return;
      if (f.date !== "all" && f.date !== dateOf(c.when)) return;
      rows.push({ bot, c, idx: rows.length });
    });
  }
  const tools = `
        <div class="lib-tools ts-filters">
          <label class="ts-filter"><span>Session</span>
            <select class="input" data-change="ts-filter" data-key="bot" aria-label="Filter by session">
              <option value="all"${f.bot === "all" ? " selected" : ""}>All sessions</option>
              ${bots.map((bot) => `<option value="${esc(bot.id)}"${f.bot === bot.id ? " selected" : ""}>${esc(bot.title)}</option>`).join("")}
            </select>
          </label>
          <label class="ts-filter"><span>Date</span>
            <select class="input" data-change="ts-filter" data-key="date" aria-label="Filter by date">
              ${[["all", "All time"], ["today", "Today"], ["yesterday", "Yesterday"]].map(([v, label]) => `<option value="${v}"${f.date === v ? " selected" : ""}>${label}</option>`).join("")}
            </select>
          </label>
        </div>`;
  const body = `
      <div class="twin-bots-head">
        <h2 class="page-title">Learner conversations</h2>
        <p class="home-meta">Questions your learners asked your twins</p>
      </div>
      ${rows.length ? "" : `<p class="ts-empty">No sessions match these filters.</p>`}
      <ul class="sess-list"${rows.length ? "" : " hidden"}>
        ${rows.map(({ bot, c, idx }) => `
          <li>
            <button class="sess-row" type="button" data-action="twin-session-open" data-bot="${esc(bot.id)}" data-id="${esc(c.id)}">
              <span class="rp-avatar rp-avatar--${(idx % 5) + 1}" aria-hidden="true">${esc(c.learner.charAt(0).toUpperCase())}</span>
              <span class="sess-text">
                <span class="sess-name">${esc(c.learner)}</span>
                <span class="sess-line">${esc(bot.title)} · ${esc(c.when)}</span>
                <span class="sess-line">“${esc(c.q)}” · ${esc(c.a)}</span>
              </span>
              <span class="cal-go" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M7 17 17 7M8 7h9v9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </button>
          </li>
        `).join("")}
      </ul>`;
  return { tools, body };
}

// Calibrate (from a twin's menu): the twin's overall calibration numbers and its calibration conversations.
// Opening a row shows that conversation; "Calibrate now" starts a new calibration call.
function calOverviewTitle() {
  const bot = twinBots().find((item) => item.id === state.calOverviewId);
  return bot ? bot.title : "Olga’s twin";
}

function pageCalOverview() {
  const all = CALIBRATIONS.map((item) => calibrationStats(item));
  const like = all.reduce((sum, s) => sum + s.like, 0);
  const off = all.reduce((sum, s) => sum + s.off, 0);
  const accuracy = like + off ? Math.round((like / (like + off)) * 100) : 0;
  const metric = (label, value, note) => `
    <article class="an-stat">
      <p class="overline">${esc(label)}</p>
      <p class="an-value tabular">${esc(value)}</p>
      <p class="an-note">${esc(note)}</p>
    </article>
  `;
  return `
    <div class="page page--cal">
      <header class="create-bar">
        <button class="create-bar-back" type="button" data-action="cal-overview-back">${icon("back")} My Twins</button>
      </header>
      <div class="cal-detail">
        <div class="cal-who">
          <span class="cal-avatar"><video src="../media/twin-listening.mp4" autoplay muted loop playsinline preload="auto" aria-hidden="true"></video></span>
          <h1 class="cal-name">${esc(calOverviewTitle())}</h1>
        </div>
        <div class="cal-metrics cal-metrics--4">
          ${metric("Total sessions", String(CALIBRATIONS.length), CALIBRATIONS.length === 1 ? "calibration" : "calibrations")}
          ${metric("Feels like me", String(like), like === 1 ? "response" : "responses")}
          ${metric("Feels off", String(off), off === 1 ? "response" : "responses")}
          ${metric("Overall accuracy", accuracy + "%", "Rated “Feels like me”")}
        </div>
        <div class="twin-bots-head cal-list-head">
          <h2 class="page-title">Calibrations</h2>
          <p class="home-meta">Conversations you’ve had with this twin</p>
        </div>
        <div class="cal-list">
          ${CALIBRATIONS.map((item) => `
            <button class="cal-row" type="button" data-action="calib-open" data-id="${item.id}">
              <span class="cal-text">
                <span class="cal-title">${esc(item.title)}</span>
                <span class="cal-meta">${esc(item.when)} · ${esc(item.length)} · ${item.thread.length} turns</span>
              </span>
              <span class="cal-go" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M7 17 17 7M8 7h9v9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </button>
          `).join("")}
        </div>
      </div>
      <div class="cal-foot">
        <button class="btn btn--strong" type="button" data-action="cal-now" data-id="${esc(state.calOverviewId)}">
          <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"/></svg>
          Calibrate now
        </button>
      </div>
    </div>
  `;
}

function pageCalibration() {
  const item = CALIBRATIONS.concat(RAIL_THREADS).find((c) => c.id === state.calibId) || CALIBRATIONS[0];
  const stats = calibrationStats(item);
  const metric = (label, value, note) => `
    <article class="an-stat">
      <p class="overline">${esc(label)}</p>
      <p class="an-value tabular">${esc(value)}</p>
      <p class="an-note">${esc(note)}</p>
    </article>
  `;
  return `
    <div class="page page--cal">
      <header class="create-bar">
        <button class="create-bar-back" type="button" data-action="calib-back">${icon("back")} ${esc(state.calOverviewId ? calOverviewTitle() : (item.back || "Calibrations"))}</button>
      </header>
      <div class="cal-detail">
        <div class="cal-who">
          <span class="cal-avatar"><video src="../media/twin-listening.mp4" autoplay muted loop playsinline preload="auto" aria-hidden="true"></video></span>
          <h1 class="cal-name">Olga’s twin</h1>
        </div>
        <div class="cal-metrics">
          ${metric("Feels like me", String(stats.like), stats.like === 1 ? "response" : "responses")}
          ${metric("Feels off", String(stats.off), stats.off === 1 ? "response" : "responses")}
          ${metric("Response accuracy", stats.accuracy + "%", "Rated “Feels like me”")}
        </div>
        <p class="cal-when">${esc(item.when)}</p>
        <div class="cal-thread">
          ${item.thread.map(([who, text], i) => {
            if (who !== "twin") return `<div class="talk-msg is-olga"><div class="talk-bubble talk-bubble--olga">${esc(text)}</div></div>`;
            const rating = calibRating(item, i);
            return `
              <div class="talk-msg is-twin">
                <div class="talk-bubble">${esc(text)}</div>
                ${rating ? talkPick(rating) : `
                  <div class="talk-feedback">
                    <button class="btn btn--secondary btn--sm" type="button" data-action="calib-rate" data-id="${i}" data-v="like">${demoVote("up")} Feels like me</button>
                    <button class="btn btn--secondary btn--sm" type="button" data-action="calib-rate" data-id="${i}" data-v="off">${demoVote("down")} Feels off</button>
                  </div>
                `}
              </div>
            `;
          }).join("")}
        </div>
      </div>
    </div>
  `;
}

// One "type" dropdown (Bot / Roleplay / Promo video) shared by the Twin Studio, Home and
// Roleplay ask bars. `scope` picks which state field holds the choice.
function askTypeValue(scope) {
  if (scope === "home") return state.askMode;
  if (scope === "tee") return state.teeAskMode;
  return state.twinAskMode;
}

function askTypeSelect(scope) {
  const mode = TWIN_ASK_MODES.find((item) => item.id === askTypeValue(scope)) || TWIN_ASK_MODES[1];
  const open = state.askMenu === scope;
  return `
    <div class="twin-hero-ask-type">
      <button class="home-ask-mode" type="button" data-action="ask-type-toggle" data-scope="${scope}" aria-haspopup="listbox" aria-expanded="${open}" aria-label="Type: ${esc(mode.label)}">
        <span>${esc(mode.label)}</span>
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4.5 6.5 8 10l3.5-3.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      ${open ? `
        <div class="twin-hero-ask-menu" role="listbox">
          ${TWIN_ASK_MODES.map((m) => `
            <button type="button" class="twin-hero-ask-opt${m.id === mode.id ? " is-selected" : ""}" role="option" aria-selected="${m.id === mode.id}" data-action="ask-type-pick" data-scope="${scope}" data-id="${m.id}">
              <span class="twin-hero-ask-opt-ico" aria-hidden="true">${twinAskModeIcon(m.id)}</span>
              ${esc(m.label)}
            </button>
          `).join("")}
        </div>
      ` : ""}
    </div>
  `;
}

const TEE_PLACEHOLDERS = {
  bot: "Tell me what the bot should help with",
  roleplay: "Tell me what is the situation",
  video: "Tell me what the video is about"
};

const TWIN_ASK_MODES = [
  { id: "bot", label: "Bot" },
  { id: "roleplay", label: "Roleplay" },
  { id: "video", label: "Promo video" }
];

function twinAskMode() {
  return TWIN_ASK_MODES.find((item) => item.id === state.twinAskMode) || TWIN_ASK_MODES[0];
}

function twinAskModeIcon(id) {
  if (id === "roleplay") return icon("role");
  if (id === "video") return askModeIcon("video");
  return `<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" stroke-width="1.3"/><circle cx="6" cy="6.6" r=".7" fill="currentColor"/><circle cx="10" cy="6.6" r=".7" fill="currentColor"/><path d="M5.5 9.6c.6 1 1.4 1.5 2.5 1.5s1.9-.5 2.5-1.5" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`;
}

const TWIN_BOTS = [
  { id: "offplan-process", label: "Off-plan process", title: "The off-plan sales process", blurb: "First call, educational Zoom and presentation meeting. Every stage books the next one.", who: "Agent", quote: "I need a structure, step by step.", sessions: 112 },
  { id: "quiet-clients", label: "Quiet clients", title: "Re-engaging clients who have gone quiet", blurb: "Finds where the conversation broke, then gives you the right message for that moment.", who: "Agent", quote: "My client went quiet after the viewing.", sessions: 86 },
  { id: "objection-handling", label: "Objections", title: "Handling client objections", blurb: "Clarify, discuss, diffuse, then agree the next step. An objection is a concern, not a rejection.", who: "Agent", quote: "I’ll wait for the market to crash.", sessions: 74 }
];

function twinBots() {
  return state.customBots.concat(TWIN_BOTS).filter((bot) => !state.botsRemoved.includes(bot.id));
}

// Small icons for the more-menu items.
function menuIcon(name) {
  const paths = {
    edit: '<path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/>',
    sliders: '<path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 6l8 0"/><path d="M16 6l4 0"/><path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 12l2 0"/><path d="M10 12l10 0"/><path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 18l11 0"/><path d="M19 18l1 0"/>',
    play: '<path d="M7 4v16l13 -8z"/>',
    pause: '<path d="M6 6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/><path d="M14 6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/>',
    share: '<path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M8.7 10.7l6.6 -3.4"/><path d="M8.7 13.3l6.6 3.4"/>',
    send: '<path d="M10 14l11 -11"/><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"/>',
    check: '<path d="M5 12l5 5l10 -10"/>',
    trash: '<path d="M4 7h16"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/>'
  };
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || ""}</svg>`;
}

function twinBotMenu(bot, detail) {
  if (detail) {
    return `
    <div class="menu rp-row-menu" role="menu" aria-label="Actions for ${esc(bot.title)}" hidden>
      ${bot.twin ? "" : `<button type="button" role="menuitem" data-action="role-row-test" data-id="${esc(bot.id)}">${menuIcon("play")}<span>Try as learner</span></button>`}
      <button type="button" role="menuitem" data-action="twin-bot-share" data-id="${esc(bot.id)}">${menuIcon("share")}<span>Share</span></button>
    </div>
  `;
  }
  if (bot.twin) {
    return `
    <div class="menu rp-row-menu" role="menu" aria-label="Actions for ${esc(bot.title)}" hidden>
      <button type="button" role="menuitem" data-action="twin-brain-open">${menuIcon("edit")}<span>Configure</span></button>
      <button type="button" role="menuitem" data-action="twin-bot-share" data-id="${esc(bot.id)}">${menuIcon("share")}<span>Share</span></button>
    </div>
  `;
  }
  return `
    <div class="menu rp-row-menu" role="menu" aria-label="Actions for ${esc(bot.title)}" hidden>
      <button type="button" role="menuitem" data-action="twin-bot-edit" data-id="${esc(bot.id)}">${menuIcon("edit")}<span>Edit</span></button>
      <button type="button" role="menuitem" data-action="twin-bot-calibrate" data-id="${esc(bot.id)}">${menuIcon("sliders")}<span>Calibrate</span></button>
      <button type="button" role="menuitem" data-action="role-row-test" data-id="${esc(bot.id)}">${menuIcon("play")}<span>Try as learner</span></button>
      <button type="button" role="menuitem" data-action="twin-bot-share" data-id="${esc(bot.id)}">${menuIcon("share")}<span>Share</span></button>
      <div class="menu-rule" role="separator"></div>
      <button type="button" role="menuitem" class="is-danger" data-action="twin-bot-remove" data-id="${esc(bot.id)}">${menuIcon("trash")}<span>Remove</span></button>
    </div>
  `;
}

// A red flag on a card means a learner reported an issue on it.
function flagBadge(text) {
  return `<span class="rp-flag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 21V4m0 1c4-3 7 3 14 0v9c-7 3-10-3-14 0"/></svg>${esc(text)}</span>`;
}

function twinBotCard(bot, index) {
  const learners = roleLearnerAvatars(bot, index);
  return `
    <article class="rp-card is-clickable${bot.flag ? " is-flagged" : ""}" data-action="twin-bot-open" data-id="${esc(bot.id)}" tabindex="0" aria-label="Open ${esc(bot.title)}">
      <span class="rp-art rp-art--twin rp-art--${index % 10}" aria-hidden="true">
        <span class="rp-quote"><span class="rp-quote-bubble has-face"><video class="rp-quote-face rp-quote-face--video" src="../media/twin-listening.mp4" autoplay muted loop playsinline preload="auto"></video><span class="rp-quote-text"><span>“${esc(bot.quote)}”</span></span></span></span>
        ${bot.flag ? flagBadge(bot.flag) : ""}
      </span>
      <span class="rp-body">
        <span class="rp-title">${esc(bot.title)}</span>
        <span class="rp-copy">${esc(bot.blurb)}</span>
        ${bot.created ? `<span class="rp-created">${esc(bot.created)}</span>` : ""}
      </span>
      <span class="rp-actions">
        <span class="rp-learners" aria-label="Learners who asked this bot">
          ${learners.shown.map((learner) => `<img class="rp-learner-avatar" src="${esc(learner.src)}" alt="" title="${esc(learner.name)}">`).join("")}
          ${learners.extra > 0 ? `<span class="rp-learner-avatar rp-learner-avatar--more">+${learners.extra}</span>` : ""}
        </span>
        <button class="btn btn--ghost btn--icon btn--sm rp-row-more" type="button" id="role-menu-${esc(bot.id)}" data-action="role-row-menu" data-id="${esc(bot.id)}" aria-label="Actions for ${esc(bot.title)}" aria-haspopup="menu" aria-expanded="${state.roleMenuId === bot.id}">
          <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="3.25" r="1.15" fill="currentColor"/><circle cx="8" cy="8" r="1.15" fill="currentColor"/><circle cx="8" cy="12.75" r="1.15" fill="currentColor"/></svg>
        </button>
      </span>
    </article>
  `;
}

function pageStudioFlow() {
  const baseNodes = {
    knowledge: { x: 8, y: 70, w: 268, h: 328 },
    style: { x: 340, y: 70, w: 248, h: 284 },
    presence: { x: 652, y: 70, w: 260, h: 300 }
  };
  const order = ["knowledge", "style", "presence"];
  const expand = {
    knowledge: { w: 400, h: 620 },
    style: { w: 400, h: 420 },
    presence: { w: 460, h: 460 }
  };
  const editingId = state.studioDialog;
  const nodes = {};
  let shift = 0;
  order.forEach((id) => {
    const base = baseNodes[id];
    const grow = editingId === id ? expand[id] : null;
    const w = grow ? grow.w : base.w;
    const h = grow ? grow.h : base.h;
    nodes[id] = { x: base.x + shift, y: base.y, w, h };
    if (grow) shift += (grow.w - base.w) + 40;
  });
  const pad = 48;
  const minX = Math.min(...order.map((id) => nodes[id].x));
  const minY = Math.min(...order.map((id) => nodes[id].y)) - 36;
  const maxX = Math.max(...order.map((id) => nodes[id].x + nodes[id].w));
  const maxY = Math.max(...order.map((id) => nodes[id].y + nodes[id].h));
  const shiftX = pad - minX;
  const shiftY = pad - minY;
  order.forEach((id) => {
    nodes[id].x += shiftX;
    nodes[id].y += shiftY;
  });
  const boardW = maxX + shiftX + pad;
  const boardH = maxY + shiftY + pad;
  const right = (id) => ({ x: nodes[id].x + nodes[id].w, y: nodes[id].y + baseNodes[id].h / 2 });
  const left = (id) => ({ x: nodes[id].x, y: nodes[id].y + baseNodes[id].h / 2 });
  const curve = (a, b) => {
    const dx = Math.max(28, (b.x - a.x) / 2);
    return `M ${a.x} ${a.y} C ${a.x + dx} ${a.y}, ${b.x - dx} ${b.y}, ${b.x} ${b.y}`;
  };
  const links = order.slice(0, -1).map((id, i) => [right(id), left(order[i + 1])]);
  const sources = state.profiles.filter((p) => p.found && p.ticked && p.meta).slice(0, 4);
  const styles = studioStyleList().slice(0, 3);
  const look = studioLook();
  const voice = studioVoiceCopy();
  const on = (id) => state.studioFocus === id && state.studioDialog !== id ? " is-on" : "";
  const editing = (id) => state.studioDialog === id ? " is-editing" : "";
  const box = (id) => {
    const n = nodes[id];
    const grow = state.studioDialog === id;
    const h = grow ? "auto" : `${n.h}px`;
    return `style="left:${n.x}px;top:${n.y}px;width:${n.w}px;height:${h}${grow ? ";z-index:5" : ""}"`;
  };
  const tag = (id, label, variant) => {
    const n = nodes[id];
    return `<span class="flow-tag flow-tag--${variant}" style="left:${n.x}px;top:${n.y - 34}px;">${esc(label)}</span>`;
  };
  const loading = state.studioStatus === "loading";
  return `
    <div class="page page--flow">
      <div class="flow-stage">
        <div class="flow-canvas">
          <div class="flow-board" style="width:${boardW}px;height:${boardH}px;transform:scale(${state.studioZoom})">
            <svg class="flow-links" viewBox="0 0 ${boardW} ${boardH}" width="${boardW}" height="${boardH}" aria-hidden="true">
              ${links.map(([a, b]) => `<path d="${curve(a, b)}"/><circle cx="${a.x}" cy="${a.y}" r="3.5"/><circle cx="${b.x}" cy="${b.y}" r="3.5"/>`).join("")}
            </svg>
            ${tag("knowledge", "Knowledge", "info")}
            <article class="flow-node flow-node--actions${on("knowledge")}${editing("knowledge")}" ${box("knowledge")}>
              ${state.studioDialog === "knowledge" ? studioKnowledgeInline() : `
                <button class="flow-hit" type="button" data-action="studio-focus" data-id="knowledge" aria-pressed="${state.studioFocus === "knowledge"}">
                  <span class="flow-kicker">Knowledge</span>
                  <span class="flow-lines">
                    ${sources.map((p) => `<span><span class="flow-line-platform"><img class="flow-line-ico" src="${profileAvatar(p)}" alt="">${esc(p.platform)}</span><span class="tabular">${esc(p.meta)}</span></span>`).join("")}
                  </span>
                  <span class="flow-sources">
                    <span class="flow-source">
                      ${sourceMark("drive")}
                      <span>Google Drive</span>
                      <span class="flow-connected"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 8.2 6.4 11 12.5 5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>Connected</span>
                    </span>
                    <span class="flow-source">
                      ${sourceMark("notion")}
                      <span>Notion</span>
                      <span class="flow-connected"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 8.2 6.4 11 12.5 5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>Connected</span>
                    </span>
                  </span>
                </button>
                <button class="btn btn--secondary btn--sm" type="button" data-action="open-studio-knowledge">Edit</button>
              `}
            </article>
            ${tag("style", "Training style", "caution")}
            <article class="flow-node flow-node--actions${on("style")}${editing("style")}" ${box("style")}>
              ${state.studioDialog === "style" ? studioStyleInline() : `
                <button class="flow-hit" type="button" data-action="studio-focus" data-id="style" aria-pressed="${state.studioFocus === "style"}">
                  <span class="flow-kicker">Training style</span>
                  <span class="flow-lines flow-lines--stack">
                    ${styles.map((line) => `<span class="flow-line-platform">${sparklesIcon()}${esc(line)}</span>`).join("")}
                  </span>
                </button>
                <button class="btn btn--secondary btn--sm" type="button" data-action="open-studio-style">Edit</button>
              `}
            </article>
            ${tag("presence", "Voice and avatar", "success")}
            <article class="flow-node flow-node--actions${on("presence")}${editing("presence")}" ${box("presence")}>
              ${state.studioDialog === "presence" ? studioPresenceInline() : `
                <button class="flow-hit flow-hit--center" type="button" data-action="studio-focus" data-id="presence" aria-pressed="${state.studioFocus === "presence"}">
                  <span class="flow-kicker">Voice and avatar</span>
                  <span class="flow-portrait flow-portrait--md"><img src="${presenceSrc()}" alt=""></span>
                  <span class="flow-node-title">${esc(look.label)}</span>
                  <span class="flow-node-note">${esc(voice.title)}${voice.note ? ` · ${esc(voice.note)}` : ""}</span>
                  <span class="flow-wave" aria-hidden="true">
                    <span class="flow-wave-play">
                      <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M5 3.3v9.4a.6.6 0 0 0 .91.5l7.4-4.7a.6.6 0 0 0 0-1l-7.4-4.7a.6.6 0 0 0-.91.5Z"/></svg>
                    </span>
                    <span class="flow-wave-bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span>
                  </span>
                </button>
                <div class="call-actions">
                  <button class="btn btn--secondary btn--sm" type="button" data-action="open-studio-presence">Edit</button>
                  <button class="btn btn--secondary btn--sm" type="button" data-action="talk-open">Calibrate</button>
                </div>
              `}
            </article>
          </div>
        </div>
        <div class="flow-toolbar">
          <button class="create-bar-back" type="button" data-action="studio-view-profile">${icon("back")} Back</button>
          <span class="flow-updated">Knowledge base · Last updated 2 days ago</span>
          <button class="btn btn--strong" type="button" data-action="studio-view-profile" ${loading ? "disabled" : ""}>Done</button>
        </div>
        <div class="flow-zoom" aria-label="Zoom">
          <button class="btn btn--secondary btn--icon btn--sm" type="button" data-action="studio-zoom" data-id="out" aria-label="Zoom out">−</button>
          <span class="tabular">${Math.round(state.studioZoom * 100)}%</span>
          <button class="btn btn--secondary btn--icon btn--sm" type="button" data-action="studio-zoom" data-id="in" aria-label="Zoom in">+</button>
        </div>
      </div>
    </div>
  `;
}

function screenTitle(name) {
  return `<h1 class="screen-title">${name}</h1>`;
}

const ANALYTICS_TOPICS = [
  { id: "finish", label: "Which roleplay do agents finish least?", re: /finish|complet|drop|abandon|least/i, answer: "Cold-call practice has the lowest completion at 83%. Most agents stop after the second objection. Objection-handling roleplay leads at 91%." },
  { id: "active", label: "Who practiced the most this week?", re: /who|practi[cs]|active|learner|agent|most/i, answer: "36 agents practiced this week, 142 sessions in total. The five most active agents account for 41% of those sessions." },
  { id: "like", label: "How often does my twin feel like me?", re: /like me|feel|flag|rating|rated|sound/i, answer: "86% of rated answers were marked “Feels like me”. 4 replies marked “Feels off” are waiting for your review, mostly on pricing objections." },
  { id: "fresh", label: "How fresh is my twin’s knowledge?", re: /fresh|knowledge|source|stale|updated|read/i, answer: "94% of your sources were read in the last 30 days. Two older videos haven’t been refreshed since spring." }
];

function analyticsReply(question) {
  const hit = ANALYTICS_TOPICS.find((topic) => topic.re.test(question));
  return hit ? hit.answer : "Sessions are up 18 on last week at 142, with 87% completion across 36 active learners. Your twin’s knowledge is 94% fresh and 86% of rated answers feel like you.";
}

function analyticsBotMenu(bot) {
  return `
    <div class="menu rp-row-menu" role="menu" aria-label="Actions for ${esc(bot.title)}" hidden>
      <button type="button" role="menuitem" data-action="twin-bot-check" data-id="${esc(bot.id)}">${menuIcon("check")}<span>Check bot</span></button>
      <div class="menu-rule" role="separator"></div>
      <button type="button" role="menuitem" class="is-danger" data-action="twin-bot-remove" data-id="${esc(bot.id)}">${menuIcon("trash")}<span>Remove</span></button>
    </div>
  `;
}

// The ask bar floats at the top once the ask field itself reaches the top edge.
let anFloatCleanup = null;

function mountAnalyticsFloat() {
  if (anFloatCleanup) {
    anFloatCleanup();
    anFloatCleanup = null;
  }
  const float = document.querySelector(".an-float");
  const field = document.getElementById("analytics-ask-form");
  const main = document.querySelector(".main");
  if (!float || !field || !main) return;
  const update = () => {
    const limit = window.innerWidth < 768 ? 56 : main.getBoundingClientRect().top;
    // 12px = where the floating bar rests, so it takes over exactly as the field reaches that spot.
    float.classList.toggle("is-on", field.getBoundingClientRect().top < limit + (window.innerWidth < 768 ? 64 : 12));
  };
  main.addEventListener("scroll", update, { passive: true });
  window.addEventListener("scroll", update, { passive: true });
  anFloatCleanup = () => {
    main.removeEventListener("scroll", update);
    window.removeEventListener("scroll", update);
  };
  update();
}

function analyticsStat(label, value, note) {
  return `
    <article class="an-stat">
      <p class="overline">${esc(label)}</p>
      <p class="an-value tabular">${esc(value)}</p>
      <p class="an-note">${esc(note)}</p>
    </article>
  `;
}

function pageAnalytics() {
  const roleRows = [
    ["Objection-handling roleplay", "64", "91%", "82"],
    ["Cold-call practice", "48", "83%", "74"],
    ["Commission negotiation", "30", "80%", "77"]
  ];
  const helpScores = { "offplan-process": "4.8", "quiet-clients": "4.6", "objection-handling": "4.7", "post-roleplay": "4.7", onboarding: "4.4" };
  const bots = twinBots();
  const openBot = bots.find((bot) => bot.id === state.roleMenuId);
  const answer = state.analyticsAnswer;
  return `
    <div class="page page--home page--analytics">
      <header class="lib-head">
        <h1 class="lib-title"><span class="lib-mark">${icon("analytics")}</span>Analytics</h1>
      </header>
      <h2 class="page-title">How your twin is doing</h2>
      <p class="lede">A read-only view of practice activity and how current your twin’s knowledge is.</p>
      <div class="an-float">
        <form class="home-ask an-float-bar" id="analytics-float-form">
          <label class="sr" for="an-ask-float">Ask for a report</label>
          <textarea class="home-ask-input" id="an-ask-float" rows="1" placeholder="Ask anything, like “Which roleplay do agents finish least?”">${esc(state.analyticsAsk)}</textarea>
          <div class="home-ask-actions">
            <button class="btn btn--strong home-ask-submit" type="submit" aria-label="Ask">
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 13V3M4 7l4-4 4 4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
          </div>
        </form>
      </div>
      <section class="home-ask-card">
        <span class="home-ask-waves" aria-hidden="true"><canvas class="tee-waves"></canvas></span>
        <h2 class="group-title">Ask me any report from your roleplay and Twin bots.</h2>
        <form class="home-ask" id="analytics-ask-form">
          <label class="sr" for="an-ask">Ask for a report</label>
          <textarea class="home-ask-input" id="an-ask" rows="1" placeholder="Ask anything, like “Which roleplay do agents finish least?”">${esc(state.analyticsAsk)}</textarea>
          <div class="home-ask-actions">
            <button class="btn btn--strong home-ask-submit" type="submit" aria-label="Ask">
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 13V3M4 7l4-4 4 4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
          </div>
        </form>
        <div class="home-topics" role="group" aria-label="Quick questions">
          ${ANALYTICS_TOPICS.map((topic) => `<button class="home-topic" type="button" data-action="analytics-topic" data-id="${topic.id}">${esc(topic.label)}</button>`).join("")}
        </div>
        ${answer ? `
          <div class="an-answer" role="status">
            <p class="an-answer-q">${esc(answer.q)}</p>
            <p class="an-answer-a">${esc(answer.a)}</p>
          </div>
        ` : ""}
      </section>
      <section class="home-section an-flat">
        <div class="home-section-head">
          <h2 class="group-title">Roleplay analytics</h2>
          <p class="home-meta">This week · 3 roleplays</p>
        </div>
        <div class="an-grid">
          ${analyticsStat("Sessions this week", "142", "18 more than last week")}
          ${analyticsStat("Completion rate", "87%", "Across all role-play sessions")}
          ${analyticsStat("Active learners", "36", "Agents who practiced this week")}
          ${analyticsStat("Average score", "78", "Out of 100, all roleplays")}
        </div>
        <div class="an-table" role="table" aria-label="Roleplays by activity">
          <div class="an-row an-row--head" role="row">
            <span role="columnheader">Roleplay</span><span role="columnheader">Sessions</span><span role="columnheader">Completion</span><span role="columnheader">Avg. score</span>
          </div>
          ${roleRows.map(([name, sessions, done, score]) => `
            <div class="an-row" role="row">
              <span class="an-name" role="cell">${esc(name)}</span><span class="tabular" role="cell">${sessions}</span><span class="tabular" role="cell">${done}</span><span class="tabular" role="cell">${score}</span>
            </div>
          `).join("")}
        </div>
      </section>
      <section class="home-section an-flat">
        <div class="home-section-head">
          <h2 class="group-title">Your Twin report</h2>
          <p class="home-meta">How your twin is doing as you</p>
        </div>
        <div class="an-grid">
          ${analyticsStat("Knowledge freshness", "94%", "Sources read in the last 30 days")}
          ${analyticsStat("Twin conversations", "318", "Questions answered this week")}
          ${analyticsStat("Feels like me", "86%", "Of answers you rated")}
          ${analyticsStat("To review", "4", "Replies marked “Feels off”")}
        </div>
        <div class="an-table" role="table" aria-label="Your twin's bots">
          <div class="an-row an-row--bots an-row--head" role="row">
            <span role="columnheader">Twin’s bot</span><span role="columnheader">Sessions</span><span role="columnheader">Help score</span><span role="columnheader" class="an-end">Action</span>
          </div>
          ${bots.length ? bots.map((bot) => `
            <div class="an-row an-row--bots" role="row">
              <span class="an-name" role="cell">${esc(bot.title)}</span>
              <span class="tabular" role="cell">${bot.sessions}</span>
              <span class="tabular" role="cell">${esc(helpScores[bot.id] || "4.5")} <span class="an-muted">/ 5</span></span>
              <span class="an-end" role="cell">
                <button class="btn btn--ghost btn--icon btn--sm rp-row-more" type="button" id="role-menu-${esc(bot.id)}" data-action="role-row-menu" data-id="${esc(bot.id)}" aria-label="Actions for ${esc(bot.title)}" aria-haspopup="menu" aria-expanded="${state.roleMenuId === bot.id}">
                  <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="3.25" r="1.15" fill="currentColor"/><circle cx="8" cy="8" r="1.15" fill="currentColor"/><circle cx="8" cy="12.75" r="1.15" fill="currentColor"/></svg>
                </button>
              </span>
            </div>
          `).join("") : `<div class="an-row an-row--empty"><span class="an-muted">No bots yet.</span></div>`}
        </div>
        ${openBot ? analyticsBotMenu(openBot) : ""}
      </section>
    </div>
  `;
}

function pageProfile() {
  return `
    <div class="page">
      <p class="overline">Profile</p>
      <h1 class="page-title">Olga Sinenko</h1>
      <p class="lede">Account details for your TrainerTwin workspace.</p>
      <article class="card" style="margin-top:24px;max-width:420px">
        <div class="card-body" style="padding-top:var(--tt-space-4)">
          <p class="overline">Email</p>
          <p class="card-sub" style="margin-top:4px">${state.accountReady ? esc(state.authEmail || "olga@olgasiliveitup.com") : "Not signed in yet"}</p>
          <p class="overline" style="margin-top:16px">Account</p>
          <p class="card-sub" style="margin-top:4px">${state.accountReady ? "Verified" : "Sign up from any setup step to activate your account."}</p>
        </div>
      </article>
      ${state.accountReady || state.twinReady ? `
        <button class="btn btn--secondary profile-logout" type="button" data-action="logout">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"/><path d="M9 12h12l-3 -3"/><path d="M18 15l3 -3"/></svg>
          Log out
        </button>
      ` : ""}
    </div>
  `;
}

const SHARED_ROLES = [
  { id: "wait-and-see", title: "The wait-and-see investor", blurb: "A London investor who put Dubai on hold and says he’ll buy when prices hit bottom.", scenario: "A 44-year-old London investor enquired about an off-plan project seven months ago and put the idea on hold. He has about AED 1 million sitting “safe” in the bank and says he’ll wait for the market to bottom out. What he really fears is making a mistake with his family’s savings. The agent has to calm the fear without arguing, find out why he started looking, and leave with a dated follow-up.", persona: "Olga’s", face: "../media/yt-frame-1.png", client: "Investor", clientName: "Daniel Hart", clientFace: "../media/client-buyer.jpg", quote: "The market has basically stopped. I’ll wait for prices to hit the bottom, then I’ll buy.", sessions: 42, score: "7.8", activity: "2 hours ago", status: "active" },
  { id: "options-collector", title: "The options-collector who ghosts", blurb: "A first-time buyer who asks for “some options”, collects brochures and goes quiet.", scenario: "A 36-year-old NHS pharmacist in Manchester clicked an Instagram ad two days ago and is already talking to several agents. She keeps asking for options and prices to keep the agent at a distance, but she is overwhelmed and embarrassed about her budget. The agent has to avoid sending brochures, find out what she wants for the next few years, and book a Zoom.", persona: "Olga’s", face: "../media/yt-frame-1.png", client: "Buyer", clientName: "Priya Shah", clientFace: "../media/client-seller.jpg", quote: "Can you just send me some options?", sessions: 27, score: "7.4", activity: "Yesterday", status: "active" }
];

function sharedStatus(row) {
  return state.sharedStatus[row.id] || row.status;
}

function sharedRoles() {
  return SHARED_ROLES.concat(state.publishedExtra).filter((row) => !state.sharedRemoved.includes(row.id));
}

function sharedRowById(id) {
  return SHARED_ROLES.concat(state.publishedExtra).find((row) => row.id === id);
}

function publishedRowFromTask(task) {
  const quote = playQuote(task);
  const who = quote ? quote.who : "Buyer";
  const faces = { Buyer: "../media/client-buyer.jpg", Landlord: "../media/client-landlord.jpg", Seller: "../media/client-seller.jpg" };
  return { id: task.id, title: task.title, blurb: task.blurb, scenario: task.blurb, persona: "Olga’s", face: "../media/yt-frame-1.png", client: who, clientFace: faces[who] || faces.Buyer, sessions: 0, score: "—", activity: "Just now", status: "active", quote: quote ? quote.text : "" };
}

const SHARED_QUOTES = {
  "wait-and-see": "The market has basically stopped. I’ll wait for prices to hit the bottom, then I’ll buy.",
  "options-collector": "Can you just send me some options?"
};

function sharedCardTask(row) {
  return { id: row.id, clientFace: row.clientFace, clientName: row.clientName, title: row.title, blurb: row.blurb, score: row.score, sessions: row.sessions, pre: true, preview: [`${row.client}: ${row.quote || SHARED_QUOTES[row.id] || row.blurb}`] };
}

const TWIN_PROFILES = {
  "Olga’s": {
    id: "olga",
    name: "Olga",
    title: "Sales coach",
    role: "Agent twin",
    behaviour: "Warm and direct. Holds the point and asks one question at a time.",
    who: "A buyer",
    situation: "A buyer who wants to wait for prices to drop.",
    face: "../media/yt-frame-1.png"
  },
  "Marcus’s": {
    id: "marcus",
    name: "Marcus",
    title: "Cold-call coach",
    role: "Agent twin",
    behaviour: "Brief and steady. Earns a few more seconds without pitching.",
    who: "A landlord",
    situation: "A landlord who did not expect the call and wants to hang up.",
    face: "../media/persona-marcus.jpg"
  },
  "Elena’s": {
    id: "elena",
    name: "Elena",
    title: "Listing coach",
    role: "Agent twin",
    behaviour: "Calm and specific. Names the work and leaves with one next step.",
    who: "A seller",
    situation: "A seller asks what they get for the higher agency fee.",
    face: "../media/persona-elena.jpg"
  }
};

function hideRoleTip() {
  const tip = document.querySelector(".rp-hover-tip");
  if (tip) tip.hidden = true;
}

function railTipHost(node) {
  if (!node || !node.closest) return null;
  return node.closest("[data-rail-tip]");
}

function hideRailTip() {
  const tip = document.querySelector(".rail-tip");
  if (tip) tip.hidden = true;
}

function showRailTip(host) {
  const tip = document.querySelector(".rail-tip");
  if (!tip || !host) return;
  tip.textContent = host.dataset.railTip;
  tip.hidden = false;
  const rect = host.getBoundingClientRect();
  const gap = 8;
  let left = rect.right + gap;
  let top = rect.top + (rect.height - tip.offsetHeight) / 2;
  if (left + tip.offsetWidth > window.innerWidth - 8) left = Math.max(8, rect.left - gap - tip.offsetWidth);
  if (top < 8) top = 8;
  tip.style.left = left + "px";
  tip.style.top = top + "px";
}

function showRoleTip(host) {
  const tip = document.querySelector(".rp-hover-tip");
  if (!tip || !host) return;
  if (host.dataset.tipTitle) {
    tip.innerHTML = `<b>${esc(host.dataset.tipTitle)}</b><span class="rp-tip-role">${esc(host.dataset.tipRole || "")}</span><span>${esc(host.dataset.tipBehaviour || "")}</span>`;
  } else if (host.dataset.tip) {
    tip.textContent = host.dataset.tip;
  } else {
    hideRoleTip();
    return;
  }
  tip.hidden = false;
  const rect = host.getBoundingClientRect();
  const width = tip.offsetWidth;
  const height = tip.offsetHeight;
  let top = rect.top - height - 8;
  if (top < 8) top = rect.bottom + 8;
  let left = rect.left;
  if (left + width > window.innerWidth - 8) left = window.innerWidth - width - 8;
  if (left < 8) left = 8;
  tip.style.top = top + "px";
  tip.style.left = left + "px";
}

function roleTipHost(node) {
  if (!node || !node.closest) return null;
  return node.closest("[data-tip], [data-tip-title]");
}

function placeRoleMenu() {
  const menu = document.querySelector(".rp-row-menu");
  if (!menu || !state.roleMenuId) return;
  const btn = document.querySelector('.rp-row-more[data-id="' + state.roleMenuId + '"]');
  if (!btn) return;
  const r = btn.getBoundingClientRect();
  const gap = 4;
  menu.hidden = false;
  const w = menu.offsetWidth;
  const h = menu.offsetHeight;
  let top = r.bottom + gap;
  if (top + h > window.innerHeight - 8) top = Math.max(8, r.top - gap - h);
  let left = r.right - w;
  if (left < 8) left = 8;
  if (left + w > window.innerWidth - 8) left = Math.max(8, window.innerWidth - w - 8);
  menu.style.top = top + "px";
  menu.style.left = left + "px";
  if (state.roleMenuFocus) {
    state.roleMenuFocus = false;
    const first = menu.querySelector("[role='menuitem']");
    if (first) first.focus({ preventScroll: true });
  }
}

function roleRowMenu(row) {
  const paused = sharedStatus(row) === "paused";
  return `
    <div class="menu rp-row-menu" role="menu" aria-label="Actions for ${esc(row.title)}" hidden>
      <button type="button" role="menuitem" data-action="role-row-pause" data-id="${esc(row.id)}">${menuIcon(paused ? "play" : "pause")}<span>${paused ? "Resume" : "Pause"}</span></button>
      <button type="button" role="menuitem" data-action="role-row-test" data-id="${esc(row.id)}">${menuIcon("play")}<span>Try as learner</span></button>
      <div class="menu-rule" role="separator"></div>
      <button type="button" role="menuitem" class="is-danger" data-action="role-row-remove" data-id="${esc(row.id)}">${menuIcon("trash")}<span>Remove</span></button>
    </div>
  `;
}

function roleTable(rows) {
  if (!rows.length) {
    const searching = !!state.roleQuery.trim();
    return `
      <div class="rp-table-card">
        <div class="rp-table-empty">
          <p class="rp-table-name">${searching ? "No roleplays match that search" : "No published roleplays"}</p>
          <p class="card-sub">${searching ? "Try a name or a description." : "Published roleplays show up here once they’re shared."}</p>
        </div>
      </div>
    `;
  }
  const open = rows.find((row) => row.id === state.roleMenuId);
  return `
    <div class="rp-table-card">
      <div class="rp-table-scroll">
        <table class="rp-table">
          <thead>
            <tr>
              <th scope="col">Roleplay</th>
              <th scope="col">Status</th>
              <th scope="col" class="num">Sessions</th>
              <th scope="col" class="num">Avg help score</th>
              <th scope="col">Last activity</th>
              <th scope="col" class="rp-table-act"><span class="sr">Actions</span></th>
            </tr>
          </thead>
          <tbody>
            ${rows.map((row) => {
              const paused = sharedStatus(row) === "paused";
              return `
                <tr class="rp-table-row" data-action="role-open" data-id="${esc(row.id)}" tabindex="0">
                  <th scope="row" class="rp-table-name">
                    <span class="rp-table-title">${esc(row.title)}</span>
                    <span class="rp-table-desc" tabindex="0" data-tip="${esc(row.blurb)}">${esc(row.blurb)}</span>
                  </th>
                  <td><span class="badge ${paused ? "" : "badge--success"}">${paused ? "Paused" : "Active"}</span></td>
                  <td class="num tabular">${row.sessions}</td>
                  <td class="num tabular">${esc(row.score)}</td>
                  <td>${esc(row.activity)}</td>
                  <td class="rp-table-act">
                    <button class="btn btn--ghost btn--icon btn--sm rp-row-more" type="button" id="role-menu-${esc(row.id)}" data-action="role-row-menu" data-id="${esc(row.id)}" aria-label="Actions for ${esc(row.title)}" aria-haspopup="menu" aria-expanded="${state.roleMenuId === row.id}">
                      <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="3.25" r="1.15" fill="currentColor"/><circle cx="8" cy="8" r="1.15" fill="currentColor"/><circle cx="8" cy="12.75" r="1.15" fill="currentColor"/></svg>
                    </button>
                  </td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    </div>
    ${open ? roleRowMenu(open) : ""}
    <div class="rp-hover-tip" role="tooltip" hidden></div>
  `;
}

function twinLabel(persona) {
  return String(persona || "").replace(/[’']s$/, "");
}

function roleWeek(row) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return days.map((label, i) => ({ label, value: 3 + ((row.sessions + i * 5) % 12) }));
}

function roleScores(row) {
  const avg = Number(row.score) || 8;
  return [0, 1, 2, 3, 4, 5].map((i) => {
    const wobble = i % 2 ? 0.4 : -0.5;
    const next = avg + wobble + ((row.sessions + i) % 3) * 0.1;
    return Math.round(Math.min(10, Math.max(6, next)) * 10) / 10;
  });
}

function roleBars(row) {
  const items = roleWeek(row);
  const max = Math.max.apply(null, items.map((item) => item.value));
  const width = 720;
  const height = 96;
  const pad = 4;
  const gap = 18;
  const barW = (width - pad * 2 - gap * (items.length - 1)) / items.length;
  const bars = items.map((item, i) => {
    const barH = Math.max(6, Math.round((item.value / max) * 58));
    const x = pad + i * (barW + gap);
    const y = 68 - barH;
    return `<rect class="rp-chart-bar" x="${x.toFixed(1)}" y="${y}" width="${barW.toFixed(1)}" height="${barH}" rx="6"></rect><text class="rp-chart-label" x="${(x + barW / 2).toFixed(1)}" y="86" text-anchor="middle">${item.label}</text>`;
  }).join("");
  return `<svg class="rp-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="Sessions this week">${bars}</svg>`;
}

function roleLine(row) {
  const scores = roleScores(row);
  const width = 720;
  const height = 88;
  const pad = 16;
  const min = 6;
  const max = 10;
  const step = (width - pad * 2) / (scores.length - 1);
  const coords = scores.map((score, i) => {
    const x = pad + i * step;
    const y = 10 + (1 - (score - min) / (max - min)) * 44;
    return { x, y, score };
  });
  const line = coords.map((point) => point.x.toFixed(1) + "," + point.y.toFixed(1)).join(" ");
  const dots = coords.map((point) => `<circle class="rp-chart-dot" cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="4"></circle>`).join("");
  const labels = coords.map((point, i) => `<text class="rp-chart-label" x="${point.x.toFixed(1)}" y="78" text-anchor="middle">${i + 1}</text>`).join("");
  return `<svg class="rp-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="Help score across recent sessions"><polyline class="rp-chart-line" points="${line}"></polyline>${dots}${labels}</svg>`;
}

function roleHistory(row) {
  const learners = ["Aisha", "James", "Nora", "Leo", "Priya"];
  const whens = ["Today, 2:14 pm", "Yesterday, 11:02 am", "Yesterday, 4:40 pm", "Monday, 9:18 am", "Sunday, 6:05 pm"];
  const lengths = ["8 min", "6 min", "11 min", "5 min", "9 min"];
  const avg = Number(row.score) || 8;
  return learners.map((learner, i) => ({
    id: row.id + "-" + i,
    learner,
    when: whens[i],
    length: lengths[i],
    score: (Math.round(Math.min(10, Math.max(6.5, avg + (i % 2 ? 0.3 : -0.4))) * 10) / 10).toFixed(1)
  }));
}

function roleTranscript(row, session) {
  const scene = (row.scenario || row.blurb).split(". ")[0];
  return [
    { who: "twin", name: row.client, text: row.blurb },
    { who: "learner", name: session.learner, text: "Can you say what is holding you back?" },
    { who: "twin", name: row.client, text: scene.replace(/\.$/, "") + "." },
    { who: "learner", name: session.learner, text: "If we look at that together, what would make this call worth your time?" },
    { who: "twin", name: row.client, text: "Show me one number. Then I’ll tell you if I want a next step." }
  ];
}

function roleReport(row) {
  return `
    <div class="rp-report">
      <section>
        <h3 class="rp-analytics-label">Sessions this week</h3>
        ${roleBars(row)}
      </section>
      <section>
        <h3 class="rp-analytics-label">Help score</h3>
        ${roleLine(row)}
      </section>
    </div>
  `;
}

function roleHistoryList(row) {
  return `
    <ul class="rp-history">
      ${roleHistory(row).map((session, i) => `
        <li>
          <button type="button" data-action="session-open" data-role="${esc(row.id)}" data-id="${esc(session.id)}">
            <span class="rp-avatar rp-avatar--${(i % 5) + 1}" aria-hidden="true">${esc(session.learner.trim().charAt(0).toUpperCase())}</span>
            <span class="rp-history-body">
              <span class="rp-history-who">${esc(session.learner)}</span>
              ${roleTranscript(row, session).slice(0, 2).map((line) => `
                <span class="rp-history-line"><b>${esc(line.name)}</b> ${esc(line.text)}</span>
              `).join("")}
            </span>
            ${(() => { const r = sessionRubricScores(row, session, Math.round(Number(session.score) * 10)); return `<span class="rp-history-score tabular" title="Scoring rubric"><b>${r.earned}</b> / ${r.total}</span>`; })()}
          </button>
        </li>
      `).join("")}
    </ul>
  `;
}

function roleChatView(row) {
  const session = roleHistory(row).find((item) => item.id === state.roleChatId);
  if (!session) return roleHistoryList(row);
  return `
    <div class="rp-chat-view">
      <button class="rp-chat-back" type="button" data-action="role-chat-back" aria-label="Back to conversations">${icon("back")} ${esc(session.learner)} · ${esc(session.when)}</button>
      <div class="rp-chat">
        ${roleTranscript(row, session).map((line) => `
          <div class="rp-chat-line rp-chat-line--${line.who}">
            <b>${esc(line.name)}</b>
            <p>${esc(line.text)}</p>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

// The report (charts) sits under the details card; the conversations get their own card on the right.
function roleReportCard(row, statsHtml) {
  return `
    <article class="rp-analytics">
      <h2 class="rp-analytics-title">Report</h2>
      ${statsHtml || ""}
      ${roleReport(row)}
    </article>
  `;
}

function roleConversations(row) {
  return `
    <article class="rp-analytics rp-conversations">
      <h2 class="rp-analytics-title">Conversations</h2>
      ${state.roleChatId ? roleChatView(row) : roleHistoryList(row)}
    </article>
  `;
}

function roleDetail(row) {
  const paused = sharedStatus(row) === "paused";
  return `
    <div class="rp-detail-shell">
    <header class="create-bar">
      <button class="create-bar-back" type="button" data-action="role-detail-back">${icon("back")} Back</button>
    </header>
    <div class="page page--library rp-detail-page">
      <div class="rp-detail-layout rp-detail-layout--bot">
        <article class="rp-detail">
          <div class="rp-detail-head">
            <h1 class="page-title">${esc(row.title)}</h1>
            <div class="rp-detail-actions">
              <button class="btn btn--secondary btn--icon btn--sm rp-row-more" type="button" id="role-menu-${esc(row.id)}" data-action="role-row-menu" data-id="${esc(row.id)}" aria-label="More actions for ${esc(row.title)}" aria-haspopup="menu" aria-expanded="${state.roleMenuId === row.id}">
                <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="3.25" r="1.15" fill="currentColor"/><circle cx="8" cy="8" r="1.15" fill="currentColor"/><circle cx="8" cy="12.75" r="1.15" fill="currentColor"/></svg>
              </button>
            </div>
          </div>
          <p class="overline rp-detail-kicker">Client persona</p>
          <p class="rp-detail-twin">${row.clientName && row.clientFace ? `<img class="rp-detail-face" src="${esc(row.clientFace)}" alt="">` : ""}${esc(row.clientName || twinLabel(row.persona))}</p>
          <p class="overline rp-detail-kicker">Scenario</p>
          <p class="rp-detail-scenario">${esc(row.scenario || row.blurb)}</p>
        </article>
        ${roleReportCard(row, `<div class="rp-detail-stats">
            <div class="rp-stat rp-stat--sessions">
              <p class="overline">Sessions</p>
              <p class="rp-detail-stat tabular">${row.sessions}</p>
            </div>
            <div class="rp-stat rp-stat--score">
              <p class="overline">Avg help score</p>
              <p class="rp-detail-stat tabular">${esc(row.score)}</p>
            </div>
          </div>`)}
        ${roleConversations(row)}
      </div>
      ${state.roleMenuId === row.id ? roleRowMenu(row) : ""}
    </div>
    </div>
  `;
}

// ---- Twin bot detail: the same layout as a roleplay report, with numbers that fit a Q&A bot ----
const BOT_QA = {
  "olga-twin": [
    ["What should I say when a buyer wants to wait for prices to drop?", "Ask what they’ll do with the money while they wait, then put a year of rent next to today’s payment plan."],
    ["How do I open a cold call with a landlord?", "Say who you are and why you’re calling, offer two comparable sales, then let them go."],
    ["Should I cut my fee to one percent?", "Don’t. Name the work, then ask which part they’d like you to skip."]
  ],
  "offplan-process": [
    ["What do I say when a client asks “what good opportunities do you have?”", "Say “it depends”, then qualify around their five-year goal."],
    ["In the meeting, do I first explain the market?", "No. Open with “What were you hoping to get out of this meeting?”"],
    ["What numbers do I present?", "Past transaction data, shown as worst, average and best cases."]
  ],
  "quiet-clients": [
    ["A client asked for options, then went quiet. What now?", "Don’t send more yet. Ask their goal over the next three to four years, or their three criteria."],
    ["Should I call or message?", "Message first, and call if there is no reply within 15 minutes."],
    ["My follow-ups get no reply.", "Check whether the message is a statement, has two questions or says “just checking”. Rewrite it as one open question that points to the next step."]
  ],
  "objection-handling": [
    ["A client says “I need to think about it.”", "Lock an exact time and date to reconnect, then ask what they want to go over before then. That is where the real concern comes out."],
    ["The client says prices are too high. What do I ask?", "Ask “compared to what?”, then isolate it: “Money aside, is this the right property for you?”"],
    ["What are the four steps?", "Clarify, discuss, diffuse, then agree on the next step. Never answer before clarifying."]
  ],
  "post-roleplay": [
    ["What should I fix before the real call?", "Your opening ran long. Cut it to one sentence and ask the first question sooner."],
    ["Was my objection handling good?", "You named the worry well. Next time, ask what they’ll do with the money while they wait."],
    ["What do I practise next?", "The fee conversation. Try the one-percent seller roleplay."]
  ],
  "onboarding": [
    ["Where do I even start?", "Week one: the playbook, three recorded calls and one roleplay. Start with the opening."],
    ["Which call should I listen to first?", "The off-plan discovery call from Session 04."],
    ["How many calls a day should I make?", "Aim for twenty, and note what each buyer asks."]
  ]
};

// The twin itself (all use cases) opens the same report as a use-case twin.
const TWIN_ALL = { id: "olga-twin", title: "Olga’s twin", label: "All use cases", who: "All learners", quote: "What should I say when a buyer wants to wait?", blurb: "Answers any question from everything you’ve taught, in your voice.", sessions: 412, twin: true };

function botDetailRow() {
  if (state.botDetailId === TWIN_ALL.id) return TWIN_ALL;
  return twinBots().find((bot) => bot.id === state.botDetailId) || null;
}

function botQA(bot) {
  return BOT_QA[bot.id] || [[bot.quote, bot.blurb], ["Can you say that more simply?", "Short version: " + bot.blurb], ["What should I do next?", "Try the first step, then ask me again."]];
}

function botStats(bot) {
  const liked = 82 + (bot.sessions % 14);
  const review = Math.max(1, Math.round(bot.sessions / 14));
  return { conversations: bot.sessions, liked, review };
}

function botLine(bot) {
  const values = [0, 1, 2, 3, 4, 5].map((i) => 80 + ((bot.sessions + i * 7) % 14));
  const width = 720;
  const height = 88;
  const pad = 16;
  const min = 70;
  const max = 100;
  const step = (width - pad * 2) / (values.length - 1);
  const coords = values.map((value, i) => ({ x: pad + i * step, y: 10 + (1 - (value - min) / (max - min)) * 44 }));
  const line = coords.map((p) => p.x.toFixed(1) + "," + p.y.toFixed(1)).join(" ");
  const dots = coords.map((p) => `<circle class="rp-chart-dot" cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="4"></circle>`).join("");
  const labels = coords.map((p, i) => `<text class="rp-chart-label" x="${p.x.toFixed(1)}" y="78" text-anchor="middle">${i + 1}</text>`).join("");
  return `<svg class="rp-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="Feels like me rate by week"><polyline class="rp-chart-line" points="${line}"></polyline>${dots}${labels}</svg>`;
}

function botConversations(bot) {
  const learners = ["Aisha", "James", "Nora", "Leo", "Priya"];
  const whens = ["Today, 2:14 pm", "Yesterday, 11:02 am", "Yesterday, 4:40 pm", "Monday, 9:18 am", "Sunday, 6:05 pm"];
  const qa = botQA(bot);
  return learners.map((learner, i) => ({ id: bot.id + "-" + i, learner, when: whens[i], q: qa[i % qa.length][0], a: qa[i % qa.length][1] }));
}

function botDetailList(bot) {
  return `
    <ul class="rp-history">
      ${botConversations(bot).map((c, i) => `
        <li>
          <button type="button" data-action="bot-chat" data-id="${esc(c.id)}">
            <span class="rp-avatar rp-avatar--${(i % 5) + 1}" aria-hidden="true">${esc(c.learner.charAt(0).toUpperCase())}</span>
            <span class="rp-history-body">
              <span class="rp-history-who">${esc(c.learner)}</span>
              <span class="rp-history-line"><b>${esc(c.learner)}</b> ${esc(c.q)}</span>
              <span class="rp-history-line"><b>Olga’s twin</b> ${esc(c.a)}</span>
            </span>
          </button>
        </li>
      `).join("")}
    </ul>
  `;
}

// Calibrations: the calls Olga has had with this twin, opened the same way as on the Calibrations tab.
function botCalibrationList() {
  return `
    <div class="cal-list bot-cal-list">
      ${CALIBRATIONS.slice(0, 4).map((item) => `
        <button class="cal-row" type="button" data-action="calib-open" data-id="${item.id}">
          <span class="cal-text">
            <span class="cal-title">${esc(item.title)}</span>
            <span class="cal-meta">${esc(item.when)} · ${esc(item.length)} · ${item.thread.length} turns</span>
          </span>
          <span class="cal-go" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M7 17 17 7M8 7h9v9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
        </button>
      `).join("")}
    </div>
  `;
}

function botChatView(bot) {
  const c = botConversations(bot).find((item) => item.id === state.botChatId);
  if (!c) return botDetailList(bot);
  const lines = [["learner", c.learner, c.q], ["twin", "Olga’s twin", c.a], ["learner", c.learner, "Thanks, that helps."]];
  return `
    <div class="rp-chat-view">
      <button class="rp-chat-back" type="button" data-action="bot-chat-back" aria-label="Back to conversations">${icon("back")} ${esc(c.learner)} · ${esc(c.when)}</button>
      <div class="rp-chat">
        ${lines.map(([who, name, text]) => `
          <div class="rp-chat-line rp-chat-line--${who}">
            <b>${esc(name)}</b>
            <p>${esc(text)}</p>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function pageBotDetail() {
  const bot = botDetailRow();
  const s = botStats(bot);
  const qa = botQA(bot);
  const asked = [0.34, 0.22, 0.15].map((share, i) => Math.max(1, Math.round(bot.sessions * share)));
  return `
    <div class="rp-detail-shell">
    <header class="create-bar">
      <button class="create-bar-back" type="button" data-action="bot-detail-back">${icon("back")} Back</button>
      <div class="create-bar-actions">
        ${bot.twin ? "" : `<button class="btn btn--strong btn--sm" type="button" data-action="twin-bot-calibrate" data-id="${esc(bot.id)}">${menuIcon("sliders")} Calibrate</button>`}
        <button class="btn btn--secondary btn--sm" type="button" data-action="${bot.twin ? "twin-brain-open" : "twin-bot-edit"}" data-id="${esc(bot.id)}">${menuIcon("edit")} Configure</button>
        ${bot.twin ? "" : `<button class="btn btn--secondary btn--sm btn--danger" type="button" data-action="twin-bot-remove" data-id="${esc(bot.id)}">${menuIcon("trash")} Remove</button>`}
      </div>
    </header>
    <div class="page page--library rp-detail-page">
      <div class="rp-detail-layout rp-detail-layout--bot">
        <article class="rp-detail">
          <div class="rp-detail-head">
            <h1 class="page-title">${esc(bot.title)}</h1>
            <div class="rp-detail-actions">
              <button class="btn btn--secondary btn--icon btn--sm rp-row-more" type="button" id="role-menu-${esc(bot.id)}" data-action="role-row-menu" data-id="${esc(bot.id)}" aria-label="More actions for ${esc(bot.title)}" aria-haspopup="menu" aria-expanded="${state.roleMenuId === bot.id}">
                <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="3.25" r="1.15" fill="currentColor"/><circle cx="8" cy="8" r="1.15" fill="currentColor"/><circle cx="8" cy="12.75" r="1.15" fill="currentColor"/></svg>
              </button>
            </div>
          </div>
          <p class="overline rp-detail-kicker">Who asks</p>
          <p class="rp-detail-twin">${esc(bot.who)}</p>
          <p class="overline rp-detail-kicker">What it does</p>
          <p class="rp-detail-scenario">${esc(bot.blurb)}</p>
        </article>
        <article class="rp-analytics">
          <h2 class="rp-analytics-title">Report</h2>
          <div class="rp-detail-stats rp-detail-stats--3">
            <div class="rp-stat rp-stat--sessions">
              <p class="overline">Conversations</p>
              <p class="rp-detail-stat tabular">${s.conversations}</p>
            </div>
            <div class="rp-stat rp-stat--review">
              <p class="overline">To review</p>
              <p class="rp-detail-stat tabular">${s.review}</p>
            </div>
          </div>
          <div class="rp-report">
            <section>
              <h3 class="rp-analytics-label">Conversations this week</h3>
              ${roleBars(bot)}
            </section>
            <section>
              <h3 class="rp-analytics-label">Feels like me, by week</h3>
              ${botLine(bot)}
            </section>
          </div>
        </article>
        <article class="rp-analytics rp-most-asked">
          <h2 class="rp-analytics-title">Most asked</h2>
          <ul class="bot-asked">
            ${qa.map(([q], i) => `<li><span>${esc(q)}</span><b class="tabular">${asked[i]}</b></li>`).join("")}
          </ul>
        </article>
        <article class="rp-analytics rp-conversations">
          <div class="bot-tabs" role="tablist" aria-label="Conversations">
            ${[["learners", "Learner conversations"], ["calibrations", "Calibrations"]].map(([id, label]) => `<button type="button" role="tab" data-action="bot-detail-tab" data-id="${id}" aria-selected="${state.botDetailTab === id}">${label}</button>`).join("")}
          </div>
          ${state.botDetailTab === "calibrations" ? botCalibrationList() : (state.botChatId ? botChatView(bot) : botDetailList(bot))}
        </article>
      </div>
      ${state.roleMenuId === bot.id ? twinBotMenu(bot, true) : ""}
    </div>
    </div>
  `;
}

function pageRoleplay() {
  if (state.roleDetailId) {
    const openRow = sharedRoles().find((row) => row.id === state.roleDetailId);
    if (openRow) return roleDetail(openRow);
    state.roleDetailId = "";
  }
  const q = state.roleQuery.trim().toLowerCase();
  const published = state.roleFilter === "published";
  const cardView = state.roleView === "card";
  const drafts = liveTasks().filter((task) => {
    if (task.pre || state.draftsRemoved.includes(task.id)) return false;
    if (!q) return true;
    return `${task.title} ${task.blurb}`.toLowerCase().includes(q);
  });
  const shared = sharedRoles().filter((row) => {
    if (!q) return true;
    return `${row.title} ${row.blurb} ${row.persona}`.toLowerCase().includes(q);
  });
  const filters = [
    ["published", "Published"],
    ["draft", "Draft"]
  ];
  const draftCards = drafts.map((task, i) => roleCard(task, i, "draft", true, false, true)).join("");
  const sharedTasks = shared.map(sharedCardTask);
  const openCard = sharedTasks.find((task) => task.id === state.roleMenuId);
  const openDraft = drafts.find((task) => task.id === state.roleMenuId);
  const emptyNote = (none) => `<p class="card-sub rp-table-empty-note">${q ? "No roleplays match that search." : none}</p>`;
  let list;
  if (!published) {
    list = draftCards ? `<div class="rp-grid">${draftCards}</div>${openDraft ? roleDraftMenu(openDraft) : ""}` : emptyNote("No draft roleplays.");
  } else if (!cardView) {
    list = roleTable(shared);
  } else {
    list = sharedTasks.length
      ? `<div class="rp-grid">${sharedTasks.map((task, i) => roleCard(task, i, sharedStatus(shared[i]) === "paused" ? "paused" : "published", true, true)).join("")}</div>${openCard ? roleCardMenu(openCard, true) : ""}`
      : emptyNote("No published roleplays.");
  }
  return `
    <div class="page page--library">
      <header class="lib-head">
        <h1 class="lib-title"><span class="lib-mark">${icon("role")}</span>Roleplay</h1>
        <div class="lib-tools">
          <button class="btn btn--strong" type="button" data-action="role-new">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3.5v9M3.5 8h9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            New
          </button>
        </div>
      </header>
      <div class="rp-created-head">
        <h2 class="page-title">Created roleplays</h2>
        <div class="rp-created-bar">
          <div class="rp-created-right">
          ${published ? `
            <div class="seg seg--icons" role="group" aria-label="View">
              <button type="button" data-action="role-view" data-id="card" aria-pressed="${cardView}" aria-label="Card view" title="Card view">
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="2.5" y="2.5" width="4.5" height="4.5" rx="1" stroke="currentColor" stroke-width="1.5"/><rect x="9" y="2.5" width="4.5" height="4.5" rx="1" stroke="currentColor" stroke-width="1.5"/><rect x="2.5" y="9" width="4.5" height="4.5" rx="1" stroke="currentColor" stroke-width="1.5"/><rect x="9" y="9" width="4.5" height="4.5" rx="1" stroke="currentColor" stroke-width="1.5"/></svg>
              </button>
              <button type="button" data-action="role-view" data-id="list" aria-pressed="${!cardView}" aria-label="List view" title="List view">
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2.5 4h11M2.5 8h11M2.5 12h11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
              </button>
            </div>
          ` : ""}
          </div>
        </div>
      </div>
      ${list}
    </div>
  `;
}

const ROLE_TRAITS = [
  { id: "warm-open", label: "Warm & Open" },
  { id: "warm-cautious", label: "Warm but Cautious" },
  { id: "curious", label: "Curious & Probing" },
  { id: "skeptical", label: "Skeptical & Reserved" },
  { id: "direct", label: "Direct & Challenging" }
];

function roleAs(name) {
  const role = (name || "").trim() || "buyer";
  if (/^(a|an|the)\s/i.test(role)) return role;
  return "a " + role.charAt(0).toLowerCase() + role.slice(1);
}

function roleOpeningLine(draft) {
  const picked = ROLE_TRAITS.find((item) => item.id === draft.trait);
  // "I’m warm but cautious": the picked character role is how the persona feels, not a job title.
  const role = picked ? picked.label.toLowerCase() : roleAs("");
  const scene = ((draft.scenario || "").split("\n").map((line) => line.trim()).find(Boolean) || "").replace(/\s+/g, " ");
  const hook = scene ? scene.charAt(0).toLowerCase() + scene.slice(1).replace(/\.$/, "") : "";
  const lines = {
    "warm-open": hook
      ? `I’m glad you called. I’m ${role}. ${scene} I’m open — where should we start?`
      : `I’m glad you called. I’m ${role}, and I’m open to hearing this.`,
    "warm-cautious": hook
      ? `Thanks for calling. I’m ${role}. ${scene} I’m interested, but I’m not deciding today.`
      : `Thanks for calling. I’m ${role}. I’m interested, but I’m not deciding today.`,
    curious: hook
      ? `Before we go on — I’m ${role}. ${scene} What do you want me to understand first?`
      : `Before we go on — I’m ${role}. What do you want me to understand first?`,
    skeptical: hook
      ? `I’ll be honest. I’m ${role}. ${scene} I don’t see why I should move.`
      : `I’ll be honest. I’m ${role}, and I don’t see why I should move on this.`,
    direct: hook
      ? `Let’s keep this short. I’m ${role}. ${scene} What changes if I say yes today?`
      : `Let’s keep this short. I’m ${role}. What changes if I say yes today?`
  };
  return lines[draft.trait] || (hook
    ? `Hi. I’m ${role}. ${scene}`
    : `Hi. I’m ${role}. What’s the point of this call?`);
}

function syncRoleOpening() {
  const draft = state.roleDraft;
  if (!draft) return;
  draft.opening = roleOpeningLine(draft);
}

// The "Roleplay agent" step opens ready to go: the recommended character role is picked and
// the opening message is written from the scenario. Only the first time, and only into empty fields.
function prefillRoleAgent() {
  const draft = state.roleDraft;
  if (!draft || draft.agentFilled) return;
  draft.agentFilled = true;
  if (!draft.trait) draft.trait = "warm-cautious";
  if (!draft.opening.trim()) syncRoleOpening();
}

// Building a roleplay is one screen now: the persona, the scenario, learner role and goals.
// The persona's behaviour and the opening line are filled in from whatever is on the form when you try or create.
function ensureRoleAgent() {
  const draft = state.roleDraft;
  if (!draft) return;
  if (!draft.trait) draft.trait = "warm-cautious";
  if (!draft.opening.trim()) syncRoleOpening();
}

const ROLE_STEPS = [
  [1, "Roleplay situations"]
];
const roleStepPos = (step) => ROLE_STEPS.findIndex(([n]) => n === step);

function micButton(targetId, actionName) {
  const isListening = state.listening && state.listeningTarget === targetId;
  if (isListening) {
    return `
      <button class="home-ask-mic is-listening" type="button" data-action="${actionName}" aria-label="Stop listening">
        <span class="mic-wave"><span></span><span></span><span></span><span></span></span>
        <span class="mic-listening-text">Listening…</span>
      </button>
    `;
  }
  return `
    <button class="home-ask-mic" type="button" data-action="${actionName}" aria-label="Use voice">
      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="6" y="2" width="4" height="7" rx="2" stroke="currentColor" stroke-width="1.4"/><path d="M4 7.5a4 4 0 0 0 8 0M8 11.5v2.3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
    </button>
  `;
}

function voicePillButton(targetId, actionName) {
  const listening = state.listening && state.listeningTarget === targetId;
  return `
    <button type="button" class="voice-pill" data-target="${targetId}" data-vp-action="${actionName}" aria-label="Dictate" aria-pressed="${listening}" data-state="${listening ? "listening" : "idle"}" data-input="pointer">
      <span class="voice-pill__capsule" aria-hidden="true"></span>
      <canvas class="voice-pill__wave" aria-hidden="true"></canvas>
      <span class="voice-pill__time" aria-hidden="true">0:00</span>
      <span class="voice-pill__glyph">
        <span class="voice-pill__mic">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="6" y="2" width="4" height="7" rx="2" stroke="currentColor" stroke-width="1.4"/><path d="M4 7.5a4 4 0 0 0 8 0M8 11.5v2.3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
        </span>
        <span class="voice-pill__stop" aria-hidden="true"></span>
      </span>
    </button>
  `;
}

// Each suggestion is a short label on the chip and the full description that goes into the type box.
const TEE_SUGGESTIONS = [
  { label: "Cold call", text: "A cold call to a landlord who didn’t expect it and wants to know who gave out their number. The agent has to stay brief, say why they’re calling, and earn a few more minutes." },
  { label: "The wait-and-see investor", text: "A London investor who put Dubai on hold and says he’ll buy when prices hit bottom. The agent has to take the concern seriously, find out why he started looking, and leave with a dated follow-up." },
  { label: "The options-collector who ghosts", text: "A first-time buyer who asks for “some options”, collects brochures and goes quiet. The agent has to find out what matters most and earn one clear next step." }
];

function teeScenario(prompt) {
  const line = prompt.trim().replace(/\s+/g, " ").replace(/\.$/, "");
  const lead = line.charAt(0).toUpperCase() + line.slice(1);
  return `${lead}.\n\nYou are on a Dubai property call. Stay in character and come back to this point when the agent pushes for a next step.\n\nThe purpose of the call is for the agent to hold the objection, ask what matters to you, and earn one clear next step.`;
}

function teePlan(prompt) {
  return {
    scenario: teeScenario(prompt),
    learnerRole: "Agent on a Dubai property call",
    goals: ["Hold the objection without offering a discount", "Ask what matters most, then earn one clear next step"]
  };
}

// Types the plan into the open "Roleplay situations" card, one field after the next.
// Writes straight to the fields (and the draft) so the page isn't re-rendered per letter;
// any newer run, or leaving step 1, stops it.
let teeTypeRun = 0;
function teeTypeFill(plan) {
  const run = ++teeTypeRun;
  const alive = () => run === teeTypeRun && state.roleCreate && state.roleStep === 1 && !!state.roleDraft;
  const steps = [
    { id: "role-scenario", text: plan.scenario, set: (d, v) => { d.scenario = v; } },
    { id: "role-learner", text: plan.learnerRole, set: (d, v) => { d.learnerRole = v; } }
  ].concat(plan.goals.map((text) => ({ id: "role-goal", text, commit: true, set: (d, v) => { d.goalDraft = v; } })));
  let i = 0;
  const next = () => {
    if (!alive() || i >= steps.length) return;
    const step = steps[i++];
    const field = document.getElementById(step.id);
    if (field) field.scrollIntoView({ block: "center", behavior: "smooth" });
    let n = 0;
    const tick = () => {
      if (!alive()) return;
      n = Math.min(step.text.length, n + 1);
      const value = step.text.slice(0, n);
      step.set(state.roleDraft, value);
      const el = document.getElementById(step.id);
      if (el) el.value = value;
      if (n < step.text.length) {
        setTimeout(tick, 14);
      } else if (step.commit) {
        setTimeout(() => {
          if (!alive()) return;
          state.roleDraft.goals.push(step.text);
          state.roleDraft.goalDraft = "";
          render();
          setTimeout(next, 250);
        }, 300);
      } else {
        setTimeout(next, 250);
      }
    };
    setTimeout(tick, 200);
  };
  next();
}

function teeCard(withSuggestions) {
  const sent = !!(state.roleCreate && state.roleDraft && state.roleDraft.asked);
  return `
    <section class="tee-card${sent ? " tee-card--sent" : ""}" aria-label="Ask TeeTee">
      <canvas class="tee-waves" aria-hidden="true"></canvas>
      ${sent ? "" : `<div class="tee-copy">
        <p class="tee-title">What type of roleplay to build</p>
        ${withSuggestions ? `
        <div class="tee-suggestions">
          ${TEE_SUGGESTIONS.map((item, i) => `
            <button class="tee-suggest" type="button" data-action="tee-suggest" data-id="${i}" aria-pressed="${state.roleAsk === item.text}">
              ${sparklesIcon()} ${esc(item.label)}
            </button>
          `).join("")}
        </div>
        ` : ""}
      </div>`}
      <form class="home-ask tee-ask-box" id="tee-ask-form">
        <label class="sr" for="tee-ask">Tell TeeTee the scenario</label>
        <textarea class="home-ask-input" id="tee-ask" rows="1" placeholder="${esc(TEE_PLACEHOLDERS[state.teeAskMode] || TEE_PLACEHOLDERS.roleplay)}">${esc(state.roleAsk)}</textarea>
        <div class="home-ask-actions">
          ${voicePillButton("tee-ask", "tee-mic")}
          <button class="btn btn--strong home-ask-submit" type="submit" aria-label="Ask me">
            <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 13V3M4 7l4-4 4 4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
      </form>
    </section>
  `;
}

const ROLE_EXAMPLES = [
  {
    id: "wait",
    title: "Buyer wants to wait",
    text: "You are an off-plan buyer in Dubai. You have been looking for six months, and a friend told you prices will drop next year.\n\nThe agent is trying to book a viewing this week. You are polite, and you keep coming back to waiting. You want a reason about your money, not a brochure.\n\nThe purpose of the call is for the agent to hold the objection, ask what you would do with the money while you wait, and earn a next step."
  },
  {
    id: "fee",
    title: "Seller pushes the fee",
    text: "You are a seller in Dubai Marina. Another agency offered to list the apartment for one percent.\n\nYou are not angry. You want to know what you get for the higher fee, and you will end the call if the answer is a script.\n\nThe purpose of the call is for the agent to hold the fee, name the work, and leave with a listing appointment."
  }
];

const PERSONAS = [
  { id: "daniel", role: "Buyer", name: "Daniel Whitfield", title: "Off-plan buyer, wants to wait for prices to drop", src: "../media/client-buyer.jpg" },
  { id: "rajesh", role: "Landlord", name: "Rajesh Menon", title: "Landlord who didn’t expect the call", src: "../media/client-landlord.jpg" },
  { id: "claire", role: "Seller", name: "Claire Dunmore", title: "Seller in Dubai Marina, questions the fee", src: "../media/client-seller.jpg" },
  { id: "elena", role: "Investor", name: "Elena Rossi", title: "Overseas investor with two million dirhams", src: "../media/persona-elena.jpg" },
  { id: "marcus", role: "Buyer", name: "Marcus Reid", title: "First-time buyer who has gone quiet after a viewing", src: "../media/persona-marcus.jpg" }
];

function randomPersona() {
  return PERSONAS[Math.floor(Math.random() * PERSONAS.length)];
}

const ROLE_DIFFICULTY = [
  { id: "easy", label: "Easy", desc: "Nervous and open. Opens up quickly once the agent asks a good question." },
  { id: "medium", label: "Medium", desc: "Guarded at first. Opens up only when the agent earns it." },
  { id: "hard", label: "Hard", desc: "Confident and impatient. Tests the agent’s knowledge and gets short with weak questions." },
  { id: "hardest", label: "Hardest", desc: "The stated reason is not the real one. Only admits it if the agent asks, carefully." }
];

// What the persona does by default, taken from the roleplay prompt structure.
const ROLE_DEFAULTS = {
  talk: "Polite and a little guarded. Short answers at first, one to three sentences. Natural spoken English.",
  guarded: [
    "Agrees with their fear or sounds worried too",
    "Argues, lectures with statistics or uses hype",
    "Uses fake urgency or pitches before asking about them",
    "Asks two or three questions at once, or sounds like a script"
  ],
  opens: [
    "Acknowledges the concern calmly without arguing",
    "Asks what is really holding them back, or why now",
    "Offers real data to judge for themselves, with no pressure to buy",
    "Gives an easy way out of the call"
  ],
  endAgree: "Agrees to a short Zoom or a dated follow-up once the agent has lowered their guard.",
  endDecline: "Politely ends the call if the agent pressures, argues or pitches. Never agrees to buy on this call."
};

// How a sales roleplay is scored. The rubric follows the type of roleplay; each score has a name and the points it is worth.
const ROLE_RUBRICS = {
  sales: { label: "Sales roleplay", scores: [["Rapport and tone", 20], ["Discovery questions", 20], ["Objection handling", 20], ["Value and data", 20], ["Next step booked", 20]] },
  "cold-call": { label: "Cold call", scores: [["Opening and permission to talk", 20], ["Clear reason for calling", 20], ["Handling the brush-off", 25], ["Value in one line", 15], ["Follow-up agreed", 20]] },
  "wait-and-see": { label: "Wait-and-see investor", scores: [["Acknowledging the concern calmly", 20], ["Finding out why they started looking", 20], ["Real sales and rental data, no pressure", 25], ["Handling “wait for the bottom”", 20], ["Dated follow-up", 15]] },
  "options-collector": { label: "Options collector", scores: [["Holding back the options", 20], ["Asking what they want over the next years", 25], ["Comparing the offers they already have", 20], ["Booking a Zoom at a set time", 25], ["Tone and pace", 10]] },
  "fee-pushback": { label: "Fee push-back", scores: [["Staying calm on the fee", 20], ["Naming the work behind the fee", 25], ["Asking which part they’d skip", 20], ["Not discounting", 20], ["Next step agreed", 15]] }
};
const ROLE_RUBRIC_BY_PERSONA = { daniel: "wait-and-see", rajesh: "cold-call", claire: "fee-pushback", elena: "wait-and-see", marcus: "options-collector" };

// The roleplay type comes from what was written (the prompt, title or scenario), then from the persona picked.
function rubricTypeOf(draft) {
  const text = [draft.title, draft.scenario, state.roleAsk].join(" ").toLowerCase();
  if (/cold call|didn.t expect|who gave out/.test(text)) return "cold-call";
  if (/wait.{0,40}(price|bottom|crash)|hit bottom|wait-and-see|wait and see/.test(text)) return "wait-and-see";
  if (/options|brochure|ghost/.test(text)) return "options-collector";
  if (/\bfee\b|commission|one percent|1%/.test(text)) return "fee-pushback";
  return ROLE_RUBRIC_BY_PERSONA[draft.look] || "sales";
}
const roleRubricFor = (type) => ((ROLE_RUBRICS[type] || ROLE_RUBRICS.sales).scores).map(([name, points]) => ({ name, points }));

// Re-sets the rubric when the roleplay type changes, unless someone has already edited the scores.
function syncRubric(draft) {
  if (!draft || draft.rubricEdited) return;
  const type = rubricTypeOf(draft);
  if (type !== draft.rubricType || !draft.rubric) {
    draft.rubricType = type;
    draft.rubric = roleRubricFor(type);
  }
}

function freshRoleDraft() {
  const draft = freshRoleDraftBase();
  syncRubric(draft);
  return draft;
}

function freshRoleDraftBase() {
  const persona = randomPersona();
  return {
    scenario: "",
    learnerRole: "",
    name: persona.name,
    trait: "",
    opening: "",
    look: persona.id,
    title: "",
    goals: [],
    goalDraft: "",
    hidden: "",
    difficulty: "medium",
    talk: ROLE_DEFAULTS.talk,
    guarded: ROLE_DEFAULTS.guarded.slice(),
    guardedDraft: "",
    opens: ROLE_DEFAULTS.opens.slice(),
    opensDraft: "",
    endAgree: ROLE_DEFAULTS.endAgree,
    endDecline: ROLE_DEFAULTS.endDecline,
    rubric: null,
    rubricType: "",
    rubricEdited: false,
    rubricName: "",
    rubricPoints: "",
    sub: "",
    asked: false,
    agentFilled: false
  };
}

const ROLE_PREFILL = {
  "wait-and-see": {
    title: "The wait-and-see investor",
    ask: "An investor who says he will wait for prices to hit the bottom",
    scenario: "You are a property investor talking to a Dubai real estate agent. You are Daniel Hart, 44, from London, and you work in finance operations. You enquired about an off-plan project seven months ago and put the idea on hold. You have about AED 1 million in savings that you call “safe”.\n\nYou keep saying you will wait for prices to hit the bottom, and you would like to be called in three months.\n\nThe purpose of the call is for the agent to calm the fear without arguing and leave with a short Zoom or a dated follow-up.",
    hidden: "You are not scared of Dubai. You are scared of the unknown and of making a mistake with your family’s savings. You started looking because inflation and taxes at home are eating into your savings, and you have not said that out loud. You do not feel confident judging projects, and you do not trust agents. Only reveal this if the agent earns it.",
    learnerRole: "Agent calling a wait-and-see investor",
    trait: "warm-cautious",
    name: "Daniel Hart",
    look: "daniel",
    sub: "London investor with AED 1 million in savings",
    opening: "The market has basically stopped. I’ll wait for prices to hit the bottom, then I’ll buy.",
    difficulty: "medium",
    goals: ["Acknowledge the concern calmly, without arguing", "Find out why they started looking in the first place", "Offer real sales and rental data, with no pressure to buy", "Leave with a Zoom or a dated follow-up"],
    talk: "Polite, a little guarded, slightly tired of sales calls. Short answers at first, one to three sentences. Opens up only when the agent earns it.",
    guarded: ["Agrees with the fear or sounds worried too", "Argues, lectures with statistics or says “prices only go up”", "Uses fake urgency, like “last units” or “price goes up Monday”", "Pitches Dubai’s tax, safety or economy before asking about them", "Asks two or three questions at once, or sounds like a script", "Asks about the budget directly, early on"],
    opens: ["Acknowledges the concern calmly without arguing", "Asks what, besides the news, is really holding them back", "Asks why they started looking, or why now", "Asks how confident they feel judging projects on real transaction data", "Gives an easy way out: “If it’s not for you, I’ll stop contacting you”", "Offers real sales and rental data, with no pressure to buy"],
    endAgree: "Agrees to a short Zoom to look at the data together, or to a specific date to revisit, once the agent has lowered their guard and helped them say their own reason for acting.",
    endDecline: "Politely ends with “Let’s leave it for now” if the agent pressures, argues or pitches. Never agrees to buy on this call."
  },
  "options-collector": {
    title: "The options-collector who ghosts",
    ask: "A first-time buyer who asks for options and goes quiet",
    scenario: "You are a potential property buyer who clicked an Instagram ad for a Dubai off-plan project two days ago. You are Priya Shah, 36, an NHS pharmacist in Manchester. You have spoken to several other agents this week and your WhatsApp is already full of brochures.\n\nYou keep asking the agent to “just send some options” and say you are busy.\n\nThe purpose of the call is for the agent to avoid sending brochures and leave with a booked Zoom.",
    hidden: "You ask for options to keep the agent at a distance, because you expect to be pushed into buying. You feel overwhelmed: every agent sends different brochures and you cannot tell which is good. You are embarrassed that your budget is small, about £20,000 down and £400 to £500 a month. Your real goal is security for your family. If the agent just sends options, you reply once, politely, then go quiet.",
    learnerRole: "Agent following up an Instagram lead",
    trait: "warm-cautious",
    name: "Priya Shah",
    look: "claire",
    sub: "First-time buyer from an Instagram ad",
    opening: "Can you just send me some options?",
    difficulty: "medium",
    goals: ["Do not send options straight away", "Ask what they want from this investment over the next few years", "Offer to help compare the offers they already have", "Leave with a booked Zoom at a specific time"],
    talk: "Friendly but brisk, slightly impatient. Very short answers at first, one or two sentences. Spoken or WhatsApp-style English.",
    guarded: ["Opens with “How are you?” or sounds like every other agent", "Agrees to send options straight away, or starts listing projects", "Asks two unrelated questions in one message", "Asks permission nervously: “May I know…?”", "Asks the budget directly", "Sends long messages, or follows up with “Just checking if you had a chance to review”"],
    opens: ["Asks what they are trying to achieve over the next few years", "Points out, lightly, that they probably already have plenty of brochures", "Asks how confident they feel choosing between projects", "Offers to compare the offers they already have, with no promise to sell", "Asks gently what they could comfortably put aside in the next few months", "Asks for a specific time and adds “If anything changes, can I expect you to let me know?”"],
    endAgree: "Agrees to a Zoom at a specific day and time, or shares their real money position, once the agent has lowered their guard and helped them admit they are confused.",
    endDecline: "Says “Just send me the details” and ends the chat if the agent pushes, pitches or floods them with options. Never agrees to buy on this call."
  },
  objection: {
    title: "Objection-handling roleplay",
    ask: "A buyer who wants to wait for prices to drop",
    scenario: "You are an off-plan buyer in Dubai. You have been looking for six months, and a friend told you prices will drop next year.\n\nThe agent is trying to book a viewing this week. You are polite, and you keep coming back to waiting. You want a reason about your money, not a brochure.\n\nThe purpose of the call is for the agent to hold the objection, ask what you would do with the money while you wait, and earn a next step.",
    learnerRole: "Off-plan agent on a first call",
    trait: "warm-cautious",
    opening: "Honestly, I think prices drop next year. Why would I buy off-plan now?",
    goals: ["Hold the price objection without offering a discount", "Ask what they would do with the money while they wait"]
  },
  cold: {
    title: "Cold-call practice",
    ask: "A landlord who didn’t expect the call",
    scenario: "You are a landlord in Dubai. You did not expect this call, and you want to hang up.\n\nYou are not rude. You want to know who gave out your number, and you will stay on the line only if the agent is brief.\n\nThe purpose of the call is for the agent to earn a few more seconds and permission to send two comps, without pitching a listing.",
    learnerRole: "Agent calling a landlord",
    trait: "skeptical",
    opening: "Who gave you my number? I’m not selling.",
    goals: ["Earn a few more seconds without pitching a listing", "Leave with permission to send two comps"]
  },
  "offplan-call": {
    title: "Off-plan discovery call",
    ask: "An overseas investor with two million dirhams",
    scenario: "You are an overseas investor. You have about two million dirhams and ten minutes.\n\nYou want a clear picture of what you could buy, and you will not book anything until the agent has asked about timeline and who else decides.\n\nThe purpose of the call is for the agent to qualify you and leave with one next step.",
    learnerRole: "Agent qualifying an overseas investor",
    trait: "curious",
    opening: "I have about two million dirhams. What would you show me?",
    goals: ["Qualify budget, timeline, and who decides", "Book one next step in under ten minutes"]
  },
  commission: {
    title: "Commission negotiation",
    ask: "A seller pushing back on the agency fee",
    scenario: "You are a seller in Dubai Marina. Another agency offered to list the apartment for one percent.\n\nYou are not angry. You want to know what you get for the higher fee, and you will end the call if the answer is a script.\n\nThe purpose of the call is for the agent to hold the fee, name the work, and leave with a listing appointment.",
    learnerRole: "Listing agent on a fee conversation",
    trait: "direct",
    opening: "Another agency said they’d list it for one percent.",
    goals: ["Hold the fee without dropping to one percent", "Leave with a listing appointment"]
  }
};

function cloneRoleDraft(draft) {
  const persona = PERSONAS.find((item) => item.id === draft.look) || randomPersona();
  return {
    scenario: draft.scenario || "",
    learnerRole: draft.learnerRole || "",
    name: draft.name || persona.name,
    trait: draft.trait || "",
    opening: draft.opening || "",
    look: persona.id,
    title: draft.title || "",
    goals: (draft.goals || []).slice(),
    goalDraft: "",
    hidden: draft.hidden || "",
    difficulty: draft.difficulty || "medium",
    talk: draft.talk || ROLE_DEFAULTS.talk,
    guarded: (draft.guarded || ROLE_DEFAULTS.guarded).slice(),
    guardedDraft: "",
    opens: (draft.opens || ROLE_DEFAULTS.opens).slice(),
    opensDraft: "",
    endAgree: draft.endAgree || ROLE_DEFAULTS.endAgree,
    endDecline: draft.endDecline || ROLE_DEFAULTS.endDecline,
    rubric: (draft.rubric || roleRubricFor(rubricTypeOf(draft))).map((item) => Object.assign({}, item)),
    rubricType: draft.rubricType || "",
    rubricEdited: !!draft.rubricEdited,
    rubricName: "",
    rubricPoints: "",
    sub: draft.sub || "",
    agentFilled: true
  };
}

function draftFromTask(task) {
  if (task && task.roleDraft) return cloneRoleDraft(task.roleDraft);
  const known = task && ROLE_PREFILL[task.id];
  if (known) {
    const prefilled = Object.assign(freshRoleDraft(), known, {
      goals: known.goals.slice(),
      guarded: (known.guarded || ROLE_DEFAULTS.guarded).slice(),
      opens: (known.opens || ROLE_DEFAULTS.opens).slice()
    });
    syncRubric(prefilled);
    return prefilled;
  }
  const draft = freshRoleDraft();
  if (!task) return draft;
  draft.title = task.title || "";
  draft.scenario = task.blurb || "";
  const line = ((task.preview || [])[0] || "").replace(/^(Buyer|Landlord|Investor|Seller|Prospect|Agent|Twin):\s*/, "");
  draft.opening = line;
  syncRubric(draft);
  return draft;
}

function askFromTask(task, draft) {
  if (task && task.roleAsk) return task.roleAsk;
  const known = task && ROLE_PREFILL[task.id];
  if (known) return known.ask;
  return (draft.scenario || "").split("\n").find(Boolean) || "";
}

function roleLookSrc(id) {
  const persona = PERSONAS.find((item) => item.id === id);
  if (persona) return persona.src;
  const all = YT_LOOKS.concat(CHARACTER_LOOKS);
  const found = all.find((item) => item.id === id);
  return found ? found.src : YT_LOOKS[0].src;
}

const BOT_TABS = [[1, "Course"], [2, "Bot details"]];
const BOT_STARTERS = [
  "What is the difference between a problem statement and JTBD?",
  "Can you review the Slide 12 case study?",
  "What is the homework for this week?"
];
const BOT_GREETING = "Hi, I’m Olga’s twin for this course. Ask me what a learner would ask after class, and I’ll answer the way Olga would.";
const BOT_REPLIES = [
  { re: /jtbd|problem|difference/i, text: "A problem statement describes the problem you’re trying to solve. JTBD is about what the person is ultimately trying to get done. In Session 04 we used it on Slide 12 to find the motivation behind the customer’s purchase." },
  { re: /slide|case|study|review/i, text: "On Slide 12 the buyer says they want a cheaper plan, but the job they’re hiring the product for is certainty about next year’s rent. Start your review there, then ask what they’d do if the price stayed the same." },
  { re: /homework|task|assignment/i, text: "This week: take one customer you spoke to and write their job in a single sentence, starting with “When I…”. Then bring the sentence to the next session." }
];
const BOT_FALLBACK = "Good question. From the course: start with what the learner is trying to get done, then check it against what Session 04 covered. If it’s outside the course, I’ll tell you and point you to Olga.";

function freshBotDraft() {
  return {
    allKnowledge: true,
    recordings: [],
    recUrl: "",
    materials: [],
    procStarted: false,
    procPct: 0,
    procDone: false,
    revealStep: 0,
    name: "",
    description: "",
    slug: Math.random().toString(36).slice(2, 6),
    calOpen: false,
    calActive: false,
    calStartAt: 0,
    linkPhase: "idle",
    linkShown: 0,
    linkRevealed: false,
    linkCopied: false,
    calReady: false,
    calStage: null,
    calTagsShown: false,
    calReasonTimer: 0,
    calMuted: false,
    calMarks: {},
    calDone: 0,
    calMsgs: [],
    calInput: "",
    calSpeaking: false
  };
}

function botLink(d) {
  const slug = (d.name || "bot").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "bot";
  return `https://trainertwin.app/b/${slug}-${d.slug}`;
}

const BOT_COURSE = {
  "olga-twin": { rec: ["Olga’s YouTube channel (48 videos)", "Instagram reels (120)", "Session recordings: 2024 cohort"], mat: ["Website, 14 pages.pdf", "LinkedIn posts, 36.pdf", "Objection handling playbook.pdf", "Listing presentation checklist.docx"] },
  "offplan-process": { rec: ["Off-plan first call: live session", "Educational Zoom walkthrough"], mat: ["Three-stage process guide.pdf", "Dubai map and price per sq ft.pdf", "Presentation meeting checklist.docx"] },
  "quiet-clients": { rec: ["Re-engaging quiet clients: Q&A"], mat: ["Follow-up message sequence.pdf", "Screenshot review checklist.docx"] },
  "objection-handling": { rec: ["Objection handling masterclass", "Roleplay: wait and see"], mat: ["Clarify, discuss, diffuse, agree.pdf", "Client lines and responses.pdf", "Objection types A to G.pdf"] },
  "post-roleplay": { rec: ["Roleplay debrief: Session 05"], mat: ["Debrief checklist.pdf", "Scoring rubric.docx", "Next-step ideas.pdf"] },
  "onboarding": { rec: ["New agent bootcamp: Day 1", "Olga’s playbook walkthrough"], mat: ["Week-one plan.pdf", "Playbook.pdf"] }
};

function botFiles(d, kind) {
  const list = kind === "rec" ? d.recordings : d.materials;
  if (!list.length) return "";
  const status = d.procDone ? `<span class="badge badge--success">Processed</span>` : d.procStarted ? `<span class="badge badge--info">Processing</span>` : "";
  return `
    <ul class="bot-files">
      ${list.map((file, i) => `
        <li class="bot-file">
          <span class="bot-file-icon" aria-hidden="true">${kind === "rec" || /\.(mp4|mov|m4v|webm|avi)$/i.test(file.name) ? icon("video") : `<span class="bot-pdf">${esc((file.name.split(".").pop() || "file").slice(0, 4).toUpperCase())}</span>`}</span>
          <span class="bot-file-text">
            <span class="bot-file-name">${esc(file.name)}</span>
            
          </span>
          ${file.done ? `<span class="badge badge--success">Processed</span>` : file.fresh ? `<span class="badge badge--info">New</span>` : status}
          ${`<button class="btn btn--ghost btn--icon btn--sm" type="button" data-action="bot-file-remove" data-kind="${kind}" data-id="${i}" aria-label="Remove ${esc(file.name)}"><svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></button>`}
        </li>
      `).join("")}
    </ul>
  `;
}

function botDrop(d, kind) {
  const rec = kind === "rec";
  const id = rec ? "bot-rec-upload" : "bot-mat-upload";
  return `
    <label class="bot-drop" for="${id}" data-drop="${kind}">
      <span class="bot-drop-line">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"/><path d="M7 9l5 -5l5 5"/><path d="M12 4l0 12"/></svg>
        <span class="bot-drop-title">${rec ? "Drop your course recording here, or <u>browse</u>" : "Drop your course materials here, or <u>browse</u>"}</span>
      </span>
      <span class="bot-drop-sub">${rec ? "MP4, MOV, MP3 or WAV" : "Video, PDF, slides, documents"}</span>
      <input class="sr" type="file" id="${id}" multiple accept="${rec ? "video/*,audio/*" : "video/*,.pdf,.ppt,.pptx,.doc,.docx,.txt,.md,.key"}">
    </label>
  `;
}

// The sources behind "All your knowledge", each with its own switch (all on to begin with).
function botKnowSources() {
  return state.profiles.filter((item) => item.found && item.meta);
}

function botKnowDialog() {
  const d = state.botDraft;
  const off = d.knowOff || [];
  const master = d.allKnowledge !== false;
  const crossIcon = `<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;
  return `
    <dialog class="issue-dialog confirm-dialog bot-know-dialog" id="bot-know-dialog" aria-labelledby="bot-know-title">
      <div class="confirm-card">
        <button class="btn btn--ghost btn--icon btn--sm confirm-close" type="button" data-action="bot-know-close" aria-label="Close">${crossIcon}</button>
        <div class="confirm-copy">
          <h2 class="confirm-title" id="bot-know-title">All your knowledge</h2>
          <p class="confirm-sub">Everything this twin can draw on. Switch off what it shouldn’t use.</p>
        </div>
        <div class="rps-list bot-know-list${master ? "" : " is-off"}">
          ${botKnowSources().map((k) => `
            <div class="rps-know">
              <span class="rps-know-ico" aria-hidden="true">${esc(k.platform.charAt(0))}</span>
              <span class="rps-voice-text"><span class="rps-voice-name">${esc(k.platform)}</span><span class="rps-voice-desc">${esc(k.meta)}</span></span>
              <button class="rps-switch" type="button" role="switch" aria-checked="${!off.includes(k.id)}" aria-label="${esc(k.platform)}" data-action="bot-know-toggle" data-id="${esc(k.id)}"><span></span></button>
            </div>
          `).join("")}
        </div>
        <div class="confirm-actions">
          <button class="btn btn--strong" type="button" data-action="bot-know-close">Done</button>
        </div>
      </div>
    </dialog>
  `;
}

function mountKnowDialog() {
  const dlg = document.getElementById("bot-know-dialog");
  if (!dlg) return;
  if (typeof dlg.showModal === "function" && !dlg.open) dlg.showModal();
  dlg.addEventListener("cancel", (ev) => {
    ev.preventDefault();
    actions["bot-know-close"]();
  });
  dlg.addEventListener("click", (ev) => {
    if (ev.target === dlg) actions["bot-know-close"]();
  });
}

function botStepCourse(d) {
  const editing = !!state.botEditId;
  return `
    <article class="card">
      <div class="card-body role-card bot-card">
        <h1 class="page-title role-card-title">${editing ? "Edit twin persona for specific usecase" : "Create a twin persona for specific usecase"}</h1>
        ${`
          <div class="bot-know-card">
            <span class="bot-know-text"><span class="rps-voice-name">All your knowledge</span><span class="rps-voice-desc">Your website, social profiles and everything in your knowledge base.</span></span>
            <button class="bot-know-more" type="button" data-action="bot-know-open" aria-haspopup="dialog" aria-label="Show your sources" title="Show your sources"><svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4.5 6.5 8 10l3.5-3.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            <button class="rps-switch" type="button" role="switch" aria-checked="${d.allKnowledge !== false}" aria-label="All your knowledge" data-action="bot-setting-toggle" data-key="allKnowledge"><span></span></button>
          </div>
        `}
        <h2 class="role-label">Course materials</h2>
        ${botDrop(d, "mat")}
        ${botFiles(d, "mat")}
        <h2 class="role-label">Additional settings</h2>
        <div class="rps-rows bot-settings">
          ${[["screenshare", "Enable screen share", "Learners can share their screen while they ask a doubt."], ["upload", "Enable upload", "Learners can upload an image or a file for doubt clearance."]].map(([key, label, help]) => `
            <div class="rps-row">
              <div class="rps-copy"><p class="rps-label">${label}</p><p class="rps-help">${help}</p></div>
              <button class="rps-switch" type="button" role="switch" aria-checked="${d[key] !== false}" aria-label="${label}" data-action="bot-setting-toggle" data-key="${key}"><span></span></button>
            </div>`).join("")}
        </div>
        <div class="bot-card-foot">
          ${editing
            ? `<button class="btn btn--strong" type="button" data-action="bot-edit-save">Save changes</button>`
            : `<button class="btn btn--strong" type="button" data-action="bot-next">${d.procStarted ? "Save changes" : "Save and create"}</button>`}
        </div>
      </div>
    </article>
  `;
}

function botProcStage(d) {
  if (d.procPct < 40) return d.recordings.length ? "Transcribing your recording…" : "Reading your knowledge…";
  if (d.procPct < 75) return d.materials.length ? "Reading your course materials…" : "Finding the key moments…";
  return "Drafting your bot…";
}

// Bot details reads as a preview of the bot (cover, name, what learners can ask, what it was built from),
// not a form: the name and description are editable in place.
function botStepDetails(d) {
  const matText = d.materials.length ? `${d.materials.length} file${d.materials.length === 1 ? "" : "s"}` : "";
  const filesText = d.recordings.length === 0
    ? ([d.allKnowledge !== false ? "all your knowledge" : "", matText].filter(Boolean).join(" and ") || "your details")
    : `${d.recordings.length} recording${d.recordings.length === 1 ? "" : "s"}${matText ? ` and ${matText}` : ""}`;
  // While the course is processing the card shows only the progress, centred. When it finishes the rest
  // appears one piece at a time (revealStep 1 to 5), the name and description typing in.
  if (!d.procDone) {
    return `
      <article class="card bot-preview">
        <div class="bot-proc bot-proc--wait" role="status">
          <div class="bot-proc-row"><p class="bot-proc-text" id="bot-proc-label">${esc(botProcStage(d))}</p><span class="bot-proc-pct" id="bot-proc-pct">${Math.round(d.procPct)}%</span></div>
          <div class="bot-proc-track"><span id="bot-proc-bar" style="width:${Math.round(d.procPct)}%"></span></div>
        </div>
      </article>
    `;
  }
  const linked = d.calDone >= 1;
  const cls = (n) => `bot-reveal${d.revealStep >= n ? " is-in" : ""}`;
  return `
    <article class="card bot-preview">
      <div class="bot-proc is-done ${cls(1)}" role="status">
        <span class="bot-proc-check" aria-hidden="true">${roleCheckIcon()}</span>
        <p class="bot-proc-text"><strong>Awesome!</strong> Your bot is ready with ${esc(filesText)} processed.</p>
      </div>
      <div class="bot-preview-body">
        <div class="talk-card bot-preview-twin ${cls(2)}" aria-hidden="true">
          <video class="talk-video" src="../media/twin-listening.mp4" autoplay muted loop playsinline preload="auto"></video>
          <span class="talk-name">Olga’s twin</span>
        </div>
        <div class="bot-preview-head">
          <label class="sr" for="bot-name">Bot name</label>
          <input class="bot-name-input ${cls(3)}" id="bot-name" data-bot-field="name" value="${esc(d.name)}" placeholder="Name your bot" autocomplete="off">
          <label class="sr" for="bot-description">Description</label>
          <textarea class="bot-desc-input ${cls(4)}" id="bot-description" data-bot-field="description" rows="3" placeholder="What this bot helps learners with">${esc(d.description)}</textarea>
        </div>
        ${linked ? `<div class="bot-preview-link">${botLinkField(d)}</div>` : ""}
        <div class="bot-card-foot bot-cal-foot ${cls(5)}">
          ${linked
            ? `<button class="btn btn--primary" type="button" data-action="bot-create" ${d.name.trim() ? "" : "disabled"}>${roleCheckIcon()} Done</button>`
            : `<button class="btn btn--strong" type="button" data-action="bot-cal-open" ${d.calOpen ? "hidden" : ""}><svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"/></svg> Start calibration</button>`}
        </div>
      </div>
    </article>
  `;
}

// The link is "made" when the Share step opens: a dot grid for a moment, then the link is typed out.
let botLinkRun = 0;
let botCopyTimer = 0;
function botLinkStart() {
  const d = state.botDraft;
  if (!d || state.botStep !== 2 || d.calDone < 1 || d.linkRevealed) { render(); return; }
  const run = ++botLinkRun;
  const link = botLink(d);
  d.linkPhase = "loading";
  d.linkShown = 0;
  render();
  const alive = () => run === botLinkRun && state.botCreate && state.botDraft === d && state.botStep === 2;
  setTimeout(() => {
    if (!alive()) return;
    d.linkPhase = "typing";
    render();
    const tick = () => {
      if (!alive()) return;
      d.linkShown = Math.min(link.length, d.linkShown + 1);
      const el = document.getElementById("bot-link");
      if (el) el.value = link.slice(0, d.linkShown);
      if (d.linkShown < link.length) { setTimeout(tick, 24); return; }
      d.linkRevealed = true;
      d.linkPhase = "done";
      render();
    };
    tick();
  }, 1500);
}

function botLinkField(d) {
  const linked = d.calDone >= 1;
  const link = botLink(d);
  const loading = linked && !d.linkRevealed && d.linkPhase === "loading";
  const typing = linked && !d.linkRevealed && d.linkPhase === "typing";
  const shown = d.linkRevealed ? link : typing ? link.slice(0, d.linkShown) : "";
  const ready = linked && d.linkRevealed;
  const copyIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666"/><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"/></svg>`;
  const checkIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5l10 -10"/></svg>`;
  return `
        <div class="field role-field">
          <label for="bot-link">Learner distribution link</label>
          <div class="bot-link">
            <div class="bot-link-field">
              <input class="input" id="bot-link" readonly value="${esc(shown)}" placeholder="${loading ? "" : esc(link)}" ${linked ? "" : "disabled"}>
              ${loading ? `<span class="bot-link-loader" role="status" aria-label="Creating your link">${miniLatticeLoader()}</span>` : ""}
            </div>
            <button class="btn btn--secondary bot-copy${d.linkCopied ? " is-copied" : ""}" type="button" data-action="bot-copy-link" data-link="${esc(link)}" ${ready ? "" : "disabled"}>
              ${d.linkCopied ? `${checkIcon} Copied` : `${copyIcon} Copy link`}
            </button>
          </div>
          ${linked ? "" : `<p class="hint hint-below">Unlocks after you finish a calibration call.</p>`}
        </div>
  `;
}

function botClock(d) {
  const s = d.calActive && d.calStartAt ? Math.max(0, Math.floor((Date.now() - d.calStartAt) / 1000)) : 0;
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

// Same look as the Ask my twin call: the latest two messages, a "speaking" tag, then Feels like me / Feels off.
// "Why this answer?" for a twin reply: the reasoning, then the course material it drew on (5 at a time).
const BOT_WHY_STEP = 5;
const BOT_WHY_SOURCES = [
  { kind: "youtube", title: "Session 04: Finding the real problem", meta: "YouTube · 41:12", at: "Defines problem statements, 12:40" },
  { kind: "slides", title: "Course deck: Slide 12, the rent case study", meta: "Slides · Session 04", at: "Where JTBD is applied to a purchase" },
  { kind: "video", title: "Zoom recording: Q&A after class", meta: "Recording · 1:02:18", at: "Olga’s own example, 48:05" },
  { kind: "notion", title: "JTBD playbook", meta: "Notion · Olga’s workspace", at: "“The job is the progress someone wants”" },
  { kind: "doc", title: "Problem statement worksheet", meta: "Doc · Course materials", at: "Template and two worked examples" },
  { kind: "youtube", title: "Jobs to be done in 10 minutes", meta: "YouTube · 10:03", at: "Contrasts a problem with a job, 03:15" },
  { kind: "doc", title: "Session 04 notes", meta: "Google Doc · Shared with learners", at: "Olga’s summary of the day" },
  { kind: "video", title: "Roleplay walkthrough: discovery call", meta: "Recording · 28:40", at: "Asking about the job, not the product" },
  { kind: "notion", title: "Interview question bank", meta: "Notion · Olga’s workspace", at: "Questions that surface the real motivation" },
  { kind: "slides", title: "Course deck: Framing the customer problem", meta: "Slides · Session 03", at: "Problem vs. need vs. job" },
  { kind: "doc", title: "Reading list: JTBD", meta: "PDF · Course materials", at: "Chapter 2 on motivation" },
  { kind: "youtube", title: "Olga on talking to buyers", meta: "YouTube · 18:27", at: "Listening for the job behind “cheaper”" }
];

const BOT_WHY_EXCERPTS = {
 "Session 04: Finding the real problem": [
  [
   "12:31",
   "Olga",
   "A problem statement describes what is going wrong: people drop off at checkout."
  ],
  [
   "12:40",
   "Olga",
   "[[JTBD is about what the person is ultimately trying to get done]], and the problem is only the symptom."
  ]
 ],
 "Course deck: Slide 12, the rent case study": [
  [
   null,
   null,
   "Slide 12. Case study: a buyer says “cheaper”. [[Use the job lens to find the motivation behind the customer’s purchase]]: certainty about next year’s rent."
  ]
 ],
 "Zoom recording: Q&A after class": [
  [
   "47:58",
   "Learner",
   "Is JTBD just a better problem statement?"
  ],
  [
   "48:05",
   "Olga",
   "Not quite. [[A problem statement describes the problem you’re trying to solve. JTBD is what they want done]]. I use it on Slide 12."
  ]
 ],
 "JTBD playbook": [
  [
   null,
   null,
   "[[The job is the progress someone wants to make]] in a given situation. Write it as: when ___, I want to ___, so I can ___."
  ]
 ],
 "Problem statement worksheet": [
  [
   null,
   null,
   "Problem statement: [[state the problem you’re trying to solve in one sentence]]. Then ask: what job is the person hiring this for?"
  ]
 ],
 "Jobs to be done in 10 minutes": [
  [
   "03:09",
   "Host",
   "People don’t buy a drill."
  ],
  [
   "03:15",
   "Host",
   "They want a hole. [[A problem is the symptom, the job is the progress they’re after]]."
  ]
 ],
 "Session 04 notes": [
  [
   null,
   null,
   "Session 04 summary. Two lenses: problem statement and JTBD. [[JTBD finds the motivation behind the purchase]]; we practised it on Slide 12."
  ]
 ],
 "Roleplay walkthrough: discovery call": [
  [
   "09:12",
   "Agent",
   "What made you start looking?"
  ],
  [
   "09:20",
   "Olga",
   "Good. [[Ask about the job, not the product]]. What were they trying to get done?"
  ]
 ],
 "Interview question bank": [
  [
   null,
   null,
   "[[What were you trying to get done when you started looking?]] What else did you try first? What would make this a success?"
  ]
 ],
 "Course deck: Framing the customer problem": [
  [
   null,
   null,
   "Problem vs need vs job. [[A problem is what’s wrong; a job is what they’re ultimately trying to get done]]."
  ]
 ],
 "Reading list: JTBD": [
  [
   null,
   null,
   "Chapter 2, motivation: [[customers hire products to make progress]], not to fix a list of defects."
  ]
 ],
 "Olga on talking to buyers": [
  [
   "11:02",
   "Olga",
   "When a buyer says it’s too expensive, [[listen for the job behind “cheaper”]]: what are they afraid of next year?"
  ]
 ],
 "Handling “prices will drop” objections": [
  [
   "06:02",
   "Olga",
   "They’ll say prices will drop. Don’t argue."
  ],
  [
   "06:10",
   "Olga",
   "[[Put a year of rent next to today’s payment plan]], so waiting becomes a number, not an opinion."
  ]
 ],
 "Zoom recording: Listing conversations": [
  [
   "31:40",
   "Olga",
   "[[Name the work: photography, viewings, negotiation and paperwork]]."
  ],
  [
   "31:52",
   "Olga",
   "Then ask which part they’d like me to skip."
  ]
 ],
 "Course deck: Objections playbook": [
  [
   null,
   null,
   "Price objection: [[ask what they’ll do with the money while they wait]]. Timing objection: show the cost of waiting."
  ]
 ],
 "Cold-call scripts": [
  [
   null,
   null,
   "Open: [[who you are, why you’re calling]]. Offer: text two comparable sales. Close: let them go."
  ]
 ],
 "Commission conversation guide": [
  [
   null,
   null,
   "If a seller asks for one percent: [[don’t cut the fee. Name the work and ask which part they’d skip]]."
  ]
 ],
 "Cold calling landlords": [
  [
   "05:14",
   "Host",
   "Landlords will try to hang up."
  ],
  [
   "05:20",
   "Host",
   "[[Stay brief. Say who you are, why you’re calling]], offer one thing, then thank them."
  ]
 ],
 "Buyer timing worksheet": [
  [
   null,
   null,
   "Waiting costs money. [[Rent for 12 months against this month’s payment plan]]: write both numbers on one line."
  ]
 ],
 "Roleplay: the seller who wants one percent": [
  [
   "04:03",
   "Seller",
   "I want you to do it for one percent."
  ],
  [
   "04:10",
   "Olga",
   "[[I wouldn’t cut it.]] Photography, viewings, negotiation, paperwork. Which would you like me to skip?"
  ]
 ],
 "Comparable sales one-pager": [
  [
   null,
   null,
   "After any cold call, [[offer to text two comparable sales]] within the hour."
  ]
 ],
 "Course deck: First 30 seconds of a call": [
  [
   null,
   null,
   "The first 30 seconds: [[short, polite, easy to leave]]. You’re earning the next call."
  ]
 ],
 "Listing presentation checklist": [
  [
   null,
   null,
   "Fee conversation: [[photography, viewings, negotiation, paperwork]]. Say each one out loud."
  ]
 ],
 "Olga: why I never cut my fee": [
  [
   "08:30",
   "Olga",
   "[[Value before price]]. If they hear the work first, the number stops being the debate."
  ]
 ]
};

function botWhyIcon() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M12 21h-5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v3.5"/><path d="M9 9h1"/><path d="M9 13h6"/><path d="M9 17h3"/><path d="M19 22.5a4.75 4.75 0 0 1 3.5 -3.5a4.75 4.75 0 0 1 -3.5 -3.5a4.75 4.75 0 0 1 -3.5 3.5a4.75 4.75 0 0 1 3.5 3.5"/></svg>`;
}

function botWhyKindIcon(kind) {
  const paths = {
    youtube: `<rect x="3" y="5" width="18" height="14" rx="4"/><path d="m10 9.5 5 2.5-5 2.5z" fill="currentColor"/>`,
    video: `<path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z"/><rect x="3" y="6" width="12" height="12" rx="2"/>`,
    doc: `<path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/><path d="M9 13h6M9 17h4"/>`,
    slides: `<path d="M3 4h18"/><path d="M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10"/><path d="M12 16v4M9 20h6M8 12l3 -3l2 2l3 -3"/>`,
    notion: `<path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M9 16v-8l6 8v-8"/>`
  };
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[kind] || paths.doc}</svg>`;
}

// One "Why this answer" popup for both calls; `prefix` is "bot" or "talk" (talk actions must start with "talk-").
function whyPopupHtml(prefix, reason, pool, shownCount) {
  const shown = Math.min(shownCount, pool.length);
  return `
    <div class="demo-prompt-layer bot-why-layer${state.botWhy && state.botWhy.entering ? " is-entering" : ""}${state.botWhy && state.botWhy.closing ? " is-closing" : ""}">
      <div class="bot-why-backdrop" data-action="${prefix}-why-close"></div>
      <div class="demo-feedback-card bot-why-card" role="dialog" aria-labelledby="bot-why-title">
        <button class="btn btn--ghost btn--icon btn--sm bot-why-close" type="button" data-action="${prefix}-why-close" aria-label="Close">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        </button>
        <span class="confirm-tile bot-why-tile" aria-hidden="true"><span class="confirm-tile-in">${botWhyIcon()}</span></span>
        <h2 class="card-title" id="bot-why-title">Why this answer</h2>
        <p class="card-sub bot-why-reason">${esc(reason)}</p>
        <h3 class="bot-why-label">Sources from your course <span>${pool.length}</span></h3>
        <ul class="bot-why-list">
          ${pool.slice(0, shown).map((s, n) => {
            const open = state.botWhy && state.botWhy.open === s.title;
            const lines = BOT_WHY_EXCERPTS[s.title] || [];
            return `
            <li class="bot-why-item${open ? " is-open" : ""}">
              <button class="bot-why-row" type="button" data-action="${prefix}-why-toggle" data-id="${n}" aria-expanded="${open}">
                <span class="bot-why-kind bot-why-kind--${s.kind}">${botWhyKindIcon(s.kind)}</span>
                <span class="bot-why-text">
                  <span class="bot-why-title">${esc(s.title)}</span>
                  <span class="bot-why-meta">${esc(s.meta)} · ${esc(s.at)}</span>
                </span>
                <svg class="bot-why-chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4.5 6.5 8 10l3.5-3.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </button>
              ${open ? `
                <div class="bot-why-excerpt">
                  ${lines.map(([time, who, text]) => `
                    <p class="bot-why-line">
                      ${who ? `<span class="bot-why-who">${esc(who)} <span>${esc(time)}</span></span>` : ""}
                      ${esc(text).replace(/\[\[(.+?)\]\]/g, '<mark class="bot-why-hit">$1</mark>')}
                    </p>
                  `).join("")}
                </div>
              ` : ""}
            </li>
          `; }).join("")}
        </ul>
        ${shown < pool.length ? `<button class="btn btn--secondary btn--sm bot-why-more" type="button" data-action="${prefix}-why-more">Show more</button>` : ""}
      </div>
    </div>
  `;
}

// The popup slides up from the bottom over a blurred page and slides back down when closed. It only animates
// on the render that opens or closes it, not on the re-renders from expanding a source.
function whyOpen(scope, id) {
  state.botWhy = { scope, id, shown: BOT_WHY_STEP, entering: true };
  render();
  if (state.botWhy) state.botWhy.entering = false;
}
function whyClose() {
  const w = state.botWhy;
  if (!w || w.closing) return;
  w.closing = true;
  render();
  setTimeout(() => {
    if (state.botWhy === w) {
      state.botWhy = null;
      render();
    }
  }, 240);
}

// Expands one source (the others fold) and keeps the popup scrolled where it was.
function whyToggle(n) {
  const w = state.botWhy;
  if (!w) return;
  const title = document.querySelectorAll(".bot-why-item")[n] && document.querySelectorAll(".bot-why-item")[n].querySelector(".bot-why-title").textContent;
  if (!title) return;
  const card = document.querySelector(".bot-why-card");
  const top = card ? card.scrollTop : 0;
  w.open = w.open === title ? null : title;
  render();
  const next = document.querySelector(".bot-why-card");
  if (next) next.scrollTop = top;
}

function botWhyPopup(d) {
  const w = state.botWhy;
  if (!w || w.scope !== "bot" || !d || !d.calMsgs[w.id]) return "";
  const revised = d.calMsgs[w.id].text === BOT_REVISED;
  // The retry leans on different material first, so the two answers don't list the same sources.
  const pool = revised ? BOT_WHY_SOURCES.slice(3).concat(BOT_WHY_SOURCES.slice(0, 3)) : BOT_WHY_SOURCES;
  const reason = revised
    ? "You said the first answer felt too generic, so I led with the Slide 12 example from your own session and cut it down to a few lines, in the way you explain it to learners."
    : "I matched the question to where you separate a problem statement from a job to be done in Session 04, then used your Slide 12 case study as the example, phrased the way you would say it.";
  return whyPopupHtml("bot", reason, pool, w.shown);
}

// Talk to my twin: sales material (objections, fees, cold calls) instead of the JTBD course.
const TALK_WHY_SOURCES = [
  { kind: "youtube", title: "Handling “prices will drop” objections", meta: "YouTube · 14:22", at: "Rent next to payment plan, 06:10" },
  { kind: "video", title: "Zoom recording: Listing conversations", meta: "Recording · 52:09", at: "Naming the work behind the fee" },
  { kind: "slides", title: "Course deck: Objections playbook", meta: "Slides · Module 2", at: "Price, timing and fee objections" },
  { kind: "notion", title: "Cold-call scripts", meta: "Notion · Olga’s workspace", at: "Who I am, why I’m calling, one offer" },
  { kind: "doc", title: "Commission conversation guide", meta: "Doc · Course materials", at: "When not to discount" },
  { kind: "youtube", title: "Cold calling landlords", meta: "YouTube · 09:48", at: "Keeping it under 20 seconds" },
  { kind: "doc", title: "Buyer timing worksheet", meta: "Google Doc · Shared with learners", at: "Waiting turned into a number" },
  { kind: "video", title: "Roleplay: the seller who wants one percent", meta: "Recording · 21:30", at: "Asking which part they’d skip" },
  { kind: "notion", title: "Comparable sales one-pager", meta: "Notion · Olga’s workspace", at: "The two comps to text after a call" },
  { kind: "slides", title: "Course deck: First 30 seconds of a call", meta: "Slides · Module 1", at: "Short, polite, easy to leave" },
  { kind: "doc", title: "Listing presentation checklist", meta: "PDF · Course materials", at: "Photography, viewings, paperwork" },
  { kind: "youtube", title: "Olga: why I never cut my fee", meta: "YouTube · 12:05", at: "Value before price" }
];
const TALK_WHY_REASONS = {
  0: "I opened with a short hello built from the three areas you teach most: handling objections, cold calls and listing conversations, so it sounds like you from the first line.",
  2: "A buyer waiting for prices to fall is an objection you answer in your Objections playbook, by turning waiting into a number. I used your rent-versus-payment-plan example.",
  4: "You hold your fee when a seller pushes. Your commission guide says to name the work and let them choose what to drop, so I followed that.",
  6: "Your cold-call scripts keep it to who you are, why you’re calling and one small offer, then let them go. I kept that order and your tone."
};
// The twin's second try after "Feels off", per line of the call.
const TALK_REVISED = {
  0: "Hi Olga, I’m your twin. Ask me about objections, cold calls or listings and I’ll answer the way you would.",
  2: "I’d ask what they’ll do with the money while they wait, then put a year of rent next to today’s payment plan. Waiting turns into a number.",
  4: "I wouldn’t cut it. I’d list the work: photography, viewings, negotiation, paperwork. Then I’d ask which part they’d skip.",
  6: "Keep it short: who you are, why you’re calling, an offer of two comparable sales, then let them go."
};
const TALK_REVISED_FALLBACK = "Let me say that more simply, in your words and with your example.";

function talkWhyPopup(t) {
  const w = state.botWhy;
  if (!w || w.scope !== "talk") return "";
  const turn = talkScript(t)[w.id] || {};
  const key = turn.key;
  const pool = TALK_WHY_SOURCES.slice(w.id % 4).concat(TALK_WHY_SOURCES.slice(0, w.id % 4));
  const reason = typeof key === "string"
    ? "You said the first version felt too generic, so I rewrote it shorter and led with your own example, the way you coach it."
    : (TALK_WHY_REASONS[key] || TALK_WHY_REASONS[0]);
  return whyPopupHtml("talk", reason, pool, w.shown);
}

function botCalThread(d) {
  const first = Math.max(0, d.calMsgs.length - 2);
  return d.calMsgs.slice(first).map((m, n) => {
    const i = first + n;
    if (m.who === "you") return `<div class="talk-msg is-olga"><div class="talk-bubble talk-bubble--olga">${esc(m.text)}</div></div>`;
    const last = i === d.calMsgs.length - 1;
    const speaking = last && d.calSpeaking;
    const mark = d.calMarks[i];
    if (m.kind === "ask" || m.kind === "ack") {
      return `
        <div class="talk-msg is-twin">
          ${speaking ? `<p class="talk-status"><span class="talk-live-dot" aria-hidden="true"></span> Olga’s twin speaking</p>` : ""}
          <div class="talk-bubble${m.kind === "ask" ? " talk-bubble--ask" : ""}">${esc(m.text)}</div>
        </div>
      `;
    }
    const feedback = mark
      ? `<span class="talk-mark">${demoVote(mark === "like" ? "up" : "down")} ${mark === "like" ? "Feels like me" : "Feels off"}</span>`
      : speaking || !d.calReady
        ? ""
        : `
          <button class="btn btn--secondary btn--sm" type="button" data-action="bot-cal-like" data-id="${i}">${demoVote("up")} Feels like me</button>
          <button class="btn btn--secondary btn--sm" type="button" data-action="bot-cal-off" data-id="${i}">${demoVote("down")} Feels off</button>
        `;
    return `
      <div class="talk-msg is-twin">
        ${speaking ? `<p class="talk-status"><span class="talk-live-dot" aria-hidden="true"></span> Olga’s twin speaking</p>` : ""}
        <div class="talk-bubble-row">
          <div class="talk-bubble">${esc(m.text)}</div>
          ${speaking ? "" : `<button class="talk-why" type="button" data-action="bot-why-open" data-id="${i}" aria-label="Why did the twin say this?" title="Why this answer?">${botWhyIcon()}</button>`}
        </div>
        <div class="talk-feedback${last ? " is-active" : ""}">${feedback}</div>
      </div>
    `;
  }).join("");
}

// Calibration is a full-screen call, the same layout as the Ask my twin screen.
function pageBotCall(d) {
  const speaking = d.calSpeaking;
  const videoSrc = speaking ? "../media/twin-speaking.mp4" : "../media/twin-listening.mp4";
  return `
    <div class="page page--talk talk-page bot-call-page">
      <header class="create-bar">
        <button class="create-bar-back" type="button" data-action="bot-cal-close">${icon("back")} ${esc(d.name.trim() || "Create use case")}</button>
      </header>
      <div class="talk-body">
        <div class="talk-stage">
          <section class="talk-col" aria-label="Olga’s twin">
            <div class="talk-card${speaking ? " is-speaking" : ""}">
              <video class="talk-video" src="${videoSrc}" autoplay muted loop playsinline preload="auto" aria-hidden="true"></video>
              ${speaking ? `<span class="talk-glow" aria-hidden="true"></span>` : ""}
              <span class="talk-name">Olga’s twin</span>
              <span class="talk-clock" aria-label="Call duration">${botClock(d)}</span>
            </div>
            <div class="talk-thread" id="bot-talk-log" aria-live="polite">${botCalThread(d)}</div>
          </section>
        </div>
      </div>
      <div class="talk-controls">
        <div class="demo-cluster">
          <button class="demo-ctrl${d.calMuted ? " is-off" : ""}" type="button" data-action="bot-cal-mute" aria-pressed="${d.calMuted}" aria-label="${d.calMuted ? "Unmute" : "Mute"}" title="${d.calMuted ? "Unmute" : "Mute"}">${talkMicIcon(d.calMuted)}</button>
        </div>
        <button class="demo-end demo-end--icon" type="button" data-action="bot-cal-end" aria-label="End call" title="${d.calReady ? "End call" : "Available after the twin has answered"}" ${d.calReady ? "" : "disabled"}>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08a.99.99 0 0 1-.29-.7c0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28a11.27 11.27 0 0 0-2.67-1.85.996.996 0 0 1-.56-.9v-3.1C15.15 9.25 13.6 9 12 9Z" fill="currentColor"/></svg>
        </button>
      </div>
      ${demoIssuePopup()}
      ${botWhyPopup(d)}
    </div>
  `;
}

function pageBotCreate() {
  const d = state.botDraft || freshBotDraft();
  const step = state.botStep;
  if (step === 2 && d.calOpen) return pageBotCall(d);
  return `
    <div class="page page--create page--bot">
      <header class="create-bar">
        <button class="create-bar-back" type="button" data-action="bot-exit">${icon("back")} ${state.botEditId ? esc(d.name || "Edit twin") : "Create use case"}</button>
      </header>
      <div class="create-scroll">
        <div class="create-column">
          ${step === 1 || state.botEditId ? botStepCourse(d) : botStepDetails(d)}
        </div>
      </div>
      ${state.demoIssueOpen ? `<div class="talk-page bot-issue-wrap">${demoIssuePopup()}</div>` : ""}
    </div>
  `;
}

// Fake processing: the bar fills, then the bot's name and description are typed in.
let botProcRun = 0;
function botStartProcessing() {
  const d = state.botDraft;
  if (!d || d.procStarted) return;
  d.procStarted = true;
  d.procPct = 0;
  const run = ++botProcRun;
  const alive = () => run === botProcRun && state.botCreate && state.botDraft === d;
  const tick = () => {
    if (!alive()) return;
    d.procPct = Math.min(100, d.procPct + 2 + Math.random() * 3);
    if (d.procPct < 100) {
      const bar = document.getElementById("bot-proc-bar");
      const pct = document.getElementById("bot-proc-pct");
      const label = document.getElementById("bot-proc-label");
      if (bar) bar.style.width = Math.round(d.procPct) + "%";
      if (pct) pct.textContent = Math.round(d.procPct) + "%";
      if (label) label.textContent = botProcStage(d);
      setTimeout(tick, 110);
      return;
    }
    d.procPct = 100;
    d.procDone = true;
    render();
    botTypeFill(d);
  };
  setTimeout(tick, 400);
}

const BOT_DRAFT_NAME = "Post-class Q&A";
const BOT_DRAFT_DESC = "Answers learners’ questions after class: problem statements,\nJTBD and the Slide 12 case study, in Olga’s voice.";

// Shows the finished bot piece by piece: banner, twin, name (typed), description (typed), CTA.
function botTypeFill(d) {
  const run = ++botProcRun;
  const alive = () => run === botProcRun && state.botCreate && state.botDraft === d && state.botStep === 2;
  const show = (n) => {
    d.revealStep = n;
    const sel = [".bot-proc.is-done", ".bot-preview-twin", ".bot-name-input", ".bot-desc-input", ".bot-cal-foot"][n - 1];
    const el = document.querySelector(".bot-preview " + sel);
    if (el) el.classList.add("is-in");
  };
  const type = (id, field, text, done) => {
    let n = 0;
    const tick = () => {
      if (!alive()) return;
      n = Math.min(text.length, n + 1);
      d[field] = text.slice(0, n);
      const el = document.getElementById(id);
      if (el) el.value = d[field];
      if (n < text.length) setTimeout(tick, 16);
      else setTimeout(done, 250);
    };
    tick();
  };
  const steps = [
    () => { show(1); setTimeout(steps[1], 450); },
    () => { show(2); setTimeout(steps[2], 550); },
    () => { show(3); type("bot-name", "name", BOT_DRAFT_NAME, steps[3]); },
    () => { show(4); type("bot-description", "description", BOT_DRAFT_DESC, steps[4]); },
    () => { show(5); setTimeout(() => { if (alive()) render(); }, 500); }
  ];
  setTimeout(() => { if (alive()) steps[0](); }, 200);
}

// If you leave Bot details mid-reveal, show everything finished when you come back.
function botFinishReveal(d) {
  if (!d || !d.procDone || d.revealStep >= 5) return;
  d.revealStep = 5;
  if (!d.name) d.name = BOT_DRAFT_NAME;
  if (!d.description) d.description = BOT_DRAFT_DESC;
}

function botCalReply(text) {
  const hit = BOT_REPLIES.find((item) => item.re.test(text));
  return hit ? hit.text : BOT_FALLBACK;
}

let botCalRun = 0;
let botClockTimer = 0;
const BOT_OFF_QUESTION = "Why do you feel the response feels off?";
// Four quick reasons under the twin's question; Olga taps one or just says it out loud.
const BOT_OFF_TAGS = ["Too generic", "Too long", "Doesn’t sound like me", "Missing an example"];
const BOT_OFF_SPOKEN = "It feels too generic.";
const BOT_OFF_ACK = "Sure, I’ll update myself with your concern. Do you want to try again with the response?";
const BOT_RETRY_YES = "Yes, try again.";
const BOT_REVISED = "Short version: a problem statement names what’s going wrong, and JTBD names what the person is trying to get done. On Slide 12 the buyer says “cheaper”, but the job is certainty about next year’s rent.";

// "Feels off": the twin asks why, Olga answers out loud, the twin says it will update itself and offers another try.
function botCalOffFlow() {
  const d = state.botDraft;
  // Only once the scripted Q&A has finished, so the two scripts never overlap.
  if (!d || !d.calActive || d.calStage || !d.calReady) return;
  const run = botCalRun;
  const live = () => run === botCalRun && state.botDraft === d && d.calActive;
  d.calStage = "reason";
  d.calReady = false;
  d.calTagsShown = false;
  d.calMsgs.push({ who: "twin", kind: "ask", text: BOT_OFF_QUESTION });
  botCalSpeak(2400, () => {
    if (!live()) return;
    d.calTagsShown = true;
    render();
    // Olga answers out loud (simulated), so the reason follows the question after a moment.
    clearTimeout(d.calReasonTimer);
    d.calReasonTimer = setTimeout(() => {
      if (live() && d.calStage === "reason") botCalReasonPicked(BOT_OFF_SPOKEN);
    }, 2500);
  });
}

function botCalReasonPicked(text) {
  const d = state.botDraft;
  if (!d || !d.calActive || d.calStage !== "reason") return;
  clearTimeout(d.calReasonTimer);
  const run = botCalRun;
  const live = () => run === botCalRun && state.botDraft === d && d.calActive;
  d.calStage = "ack";
  d.calTagsShown = false;
  d.calMsgs.push({ who: "you", text });
  render();
  setTimeout(() => {
    if (!live()) return;
    d.calMsgs.push({ who: "twin", kind: "ack", text: BOT_OFF_ACK });
    botCalSpeak(3800, () => {
      if (!live()) return;
      setTimeout(() => {
        if (!live()) return;
        d.calMsgs.push({ who: "you", text: BOT_RETRY_YES });
        render();
        setTimeout(() => {
          if (!live()) return;
          d.calMsgs.push({ who: "twin", text: BOT_REVISED });
          d.calStage = "retry";
          botCalSpeak(4200, () => {
            if (!live()) return;
            d.calStage = null;
            d.calReady = true;
            render();
          });
        }, 1000);
      }, 2000);
    });
  }, 1000);
}

function botCalSpeak(ms, done) {
  const d = state.botDraft;
  const run = botCalRun;
  d.calSpeaking = true;
  render();
  setTimeout(() => {
    if (run !== botCalRun || !state.botDraft || !state.botDraft.calActive) return;
    state.botDraft.calSpeaking = false;
    render();
    scrollBotLog();
    if (done) done();
  }, ms);
}

// A scripted call, like Ask my twin: the twin greets, a beat later Olga asks, the twin answers, then End call unlocks.
function botCalScript() {
  const d = state.botDraft;
  const run = ++botCalRun;
  const live = () => run === botCalRun && state.botDraft === d && d.calActive;
  botCalSpeak(2600, () => {
    setTimeout(() => {
      if (!live()) return;
      const q = BOT_STARTERS[0];
      d.calMsgs.push({ who: "you", text: q });
      render();
      setTimeout(() => {
        if (!live()) return;
        d.calMsgs.push({ who: "twin", text: botCalReply(q) });
        botCalSpeak(3800, () => {
          if (!live()) return;
          d.calReady = true;
          render();
        });
      }, 1100);
    }, 2000);
  });
}

function scrollBotLog() {
  const log = document.getElementById("bot-talk-log");
  if (log) log.scrollTop = log.scrollHeight;
}

// The call card rises from the bottom to the middle of the page while the page behind it blurs, and sinks back on close.
function botCalToggle(open, after) {
  const d = state.botDraft;
  if (!d) return;
  if (open) {
    d.calOpen = true;
    actions["bot-cal-start"]();
    return;
  }
  d.calOpen = false;
  state.botWhy = null;
  clearTimeout(d.calReasonTimer);
  d.calActive = false; d.calReady = false; d.calStage = null; d.calTagsShown = false; d.calMsgs = []; d.calSpeaking = false; botCalRun++;
  clearInterval(botClockTimer);
  // Calibrating an existing twin goes back to Twin Studio, not to Bot details.
  if (state.botCalibrateId) {
    state.botCalibrateId = "";
    state.botCreate = false;
    if (state.botCalibrateReturn) { state.nav = state.botCalibrateReturn; state.botCalibrateReturn = ""; }
    render();
    if (after) after("calibrate");
    return;
  }
  render();
  if (after) after();
}

// A readable stand-in until the real title arrives (or if it can't be fetched).
function botLinkFallback(url) {
  const host = url.hostname.replace(/^www\./, "");
  if (/(^|\.)youtube\.com$|^youtu\.be$/.test(host)) return "YouTube video";
  if (/(^|\.)vimeo\.com$/.test(host)) return "Vimeo video";
  if (/(^|\.)zoom\.us$/.test(host)) return "Zoom recording";
  if (/(^|\.)drive\.google\.com$/.test(host)) return "Google Drive video";
  return host;
}

// YouTube and Vimeo publish a title for any public link through oEmbed.
function botFetchTitle(url) {
  const host = url.hostname.replace(/^www\./, "");
  let endpoint = "";
  if (/(^|\.)youtube\.com$|^youtu\.be$/.test(host)) endpoint = "https://www.youtube.com/oembed?format=json&url=";
  else if (/(^|\.)vimeo\.com$/.test(host)) endpoint = "https://vimeo.com/api/oembed.json?url=";
  if (!endpoint || typeof fetch !== "function") return Promise.resolve("");
  const ctl = typeof AbortController === "function" ? new AbortController() : null;
  const timer = setTimeout(() => { if (ctl) ctl.abort(); }, 5000);
  return fetch(endpoint + encodeURIComponent(url.href), ctl ? { signal: ctl.signal } : undefined)
    .then((res) => (res.ok ? res.json() : null))
    .then((data) => (data && typeof data.title === "string" ? data.title.trim() : ""))
    .catch(() => "")
    .then((title) => { clearTimeout(timer); return title; });
}

function botAddRecordingLink() {
  const d = state.botDraft;
  if (!d) return;
  let raw = (d.recUrl || "").trim();
  if (!raw) { toast("Paste a link to your recording first."); return; }
  if (!/^[a-z][a-z0-9+.-]*:\/\//i.test(raw)) raw = "https://" + raw;
  let url;
  try { url = new URL(raw); } catch (err) { url = null; }
  if (!url || !/^https?:$/.test(url.protocol) || !url.hostname.includes(".")) { toast("That doesn’t look like a link."); return; }
  const item = { name: botLinkFallback(url), url: url.href, fresh: d.procStarted };
  if (!d.recordings.some((entry) => entry.url === item.url)) d.recordings.push(item);
  d.recUrl = "";
  state.afterFocus = "bot-rec-url";
  render();
  botFetchTitle(url).then((title) => {
    if (!title || state.botDraft !== d || !d.recordings.includes(item)) return;
    item.name = title;
    render();
  });
}

// Send in the Twin Studio ask box (Bot): skip the upload step. The pasted link becomes the course
// recording, attached documents become the materials, and processing starts on Bot details.
function startBotFromTwin(text = state.twinAsk) {
  let raw = text.trim();
  let url = null;
  if (raw) {
    if (!/^[a-z][a-z0-9+.-]*:\/\//i.test(raw)) raw = "https://" + raw;
    try { url = new URL(raw); } catch (err) { url = null; }
    if (url && (!/^https?:$/.test(url.protocol) || !url.hostname.includes("."))) url = null;
  }
  const d = freshBotDraft();
  const item = url ? { name: botLinkFallback(url), url: url.href } : { name: "Course session recording" };
  d.recordings = [item];
  d.materials = state.twinAttachments.map((name) => ({ name }));
  state.botEditId = "";
  state.botCreate = true;
  state.botDraft = d;
  state.botStep = 2;
  state.nav = "setup";
  state.studioTab = "bots";
  state.roleMenuId = "";
  state.twinAsk = "";
  state.composer = "";
  state.twinAttachments = [];
  render();
  const scroller = document.querySelector(".create-scroll");
  if (scroller) scroller.scrollTop = 0;
  botStartProcessing();
  if (url) {
    botFetchTitle(url).then((title) => {
      if (!title || state.botDraft !== d || !d.recordings.includes(item)) return;
      item.name = title;
    });
  }
}

function botAddFiles(kind, fileList) {
  const d = state.botDraft;
  if (!d) return;
  const list = kind === "rec" ? d.recordings : d.materials;
  Array.from(fileList || []).forEach((file) => {
    if (!list.some((item) => item.name === file.name)) list.push({ name: file.name, fresh: d.procStarted });
  });
  render();
}

function pageRoleCreate() {
  const draft = state.roleDraft || freshRoleDraft();
  const step = state.roleStep;
  const stepPos = roleStepPos(step);
  const title = ROLE_STEPS[stepPos][1];
  return `
    <div class="page page--create">
      <header class="create-bar">
        <button class="create-bar-back" type="button" data-action="role-exit">${icon("back")} Build roleplay</button>
        <button class="icon-btn" type="button" data-action="role-help" aria-label="Help" title="Help">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2l0 -3"/><path d="M15 15a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2l0 -3"/><path d="M4 15v-3a8 8 0 0 1 16 0v3"/></svg>
        </button>
      </header>
      <div class="create-scroll">
        <div class="create-column${step === 2 ? " create-column--wide" : ""}">
          ${rolePlan(draft, title)}
        </div>
      </div>
      <footer class="create-foot">
        <div class="create-actions">
          <button class="btn btn--ghost" type="button" data-action="role-back">${stepPos === 0 ? "Cancel" : "Back"}</button>
          <div class="create-actions-end">
            <button class="btn btn--secondary" type="button" data-action="role-try">${sparklesIcon()} Try roleplay</button>
            <button class="btn btn--primary" type="button" data-action="role-create">${roleCheckIcon()} ${state.roleEditId ? "Save roleplay" : "Create and publish"}</button>
          </div>
        </div>
      </footer>
    </div>
  `;
}

function roleCardTitle(title) {
  return `<h1 class="page-title role-card-title">${esc(title)}</h1>`;
}

function roleAutoTitle(draft) {
  const line = ((draft.scenario || "").split("\n").map((l) => l.trim()).find(Boolean) || "").replace(/\.$/, "");
  if (line) return line.length > 60 ? line.slice(0, 57).trimEnd() + "…" : line;
  const picked = ROLE_TRAITS.find((item) => item.id === draft.trait);
  return picked ? picked.label : "";
}

function roleRubricField(draft) {
  syncRubric(draft);
  const rubric = draft.rubric || (draft.rubric = roleRubricFor("sales"));
  const total = rubric.reduce((sum, item) => sum + (Number(item.points) || 0), 0);
  const full = rubric.length >= 8;
  return `
        <h2 class="role-label">Scoring rubric</h2>
        <ol class="role-goals role-rubric">
          ${rubric.map((item, i) => `
            <li>
              <span>${esc(item.name)}</span>
              <span class="role-rubric-pts tabular">${esc(String(item.points))} pts</span>
              <button class="btn btn--ghost btn--sm" type="button" data-action="role-rubric-remove" data-id="${i}">Remove</button>
            </li>
          `).join("")}
        </ol>
        <label class="sr" for="role-rubric-name">Score name</label>
        <div class="role-goal-add role-rubric-add">
          <input class="input" id="role-rubric-name" data-role-field="rubricName" placeholder="Example: Handles the price objection" value="${esc(draft.rubricName || "")}" autocomplete="off" ${full ? "disabled" : ""}>
          <label class="sr" for="role-rubric-points">Points</label>
          <input class="input role-rubric-points-input" id="role-rubric-points" data-role-field="rubricPoints" type="number" min="1" max="100" inputmode="numeric" placeholder="Points" value="${esc(String(draft.rubricPoints || ""))}" ${full ? "disabled" : ""}>
          <button class="btn btn--secondary" type="button" data-action="role-rubric-add" ${full ? "disabled" : ""}>
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3.5v9M3.5 8h9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            Add score
          </button>
        </div>
        <p class="hint hint-below">Set for ${esc(((ROLE_RUBRICS[draft.rubricType] || ROLE_RUBRICS.sales).label).toLowerCase())}. Agents are scored out of ${total} points across these. Eight at most.</p>
  `;
}

function roleGoalsField(draft) {
  const full = draft.goals.length >= 5;
  return `
        <h2 class="role-label">Learner goals</h2>
        <details class="role-tips">
          <summary>Tips to create good learner goals</summary>
          <ol>
            <li>Tie each goal to a call the agent already loses.</li>
            <li>Make it something you can hear on the recording.</li>
            <li>One behaviour, not a personality trait.</li>
            <li>Hard enough to practise, not so hard they freeze.</li>
          </ol>
        </details>
        ${draft.goals.length ? `
          <ol class="role-goals">
            ${draft.goals.map((goal, i) => `
              <li>
                <span>${esc(goal)}</span>
                <button class="btn btn--ghost btn--sm" type="button" data-action="role-goal-remove" data-id="${i}">Remove</button>
              </li>
            `).join("")}
          </ol>
        ` : ""}
        <label class="sr" for="role-goal">Learner goals</label>
        <div class="role-goal-add">
          <input class="input" id="role-goal" data-role-field="goalDraft" placeholder="Example: Hold the price objection without offering a discount" value="${esc(draft.goalDraft)}" ${full ? "disabled" : ""}>
          <button class="btn btn--secondary" type="button" data-action="role-goal-add" ${full ? "disabled" : ""}>
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3.5v9M3.5 8h9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            Add goal
          </button>
        </div>
        <p class="hint hint-below">Agents are scored on these. Five at most.</p>
  `;
}

function rolePlan(draft, title) {
  // Editing an existing roleplay skips the TeeTee prompt and opens straight on its details.
  return `
    ${state.roleEditId ? "" : `
    <article class="card card--flat">
      <div class="card-body role-card role-card--tee">
        ${teeCard(true)}
      </div>
    </article>`}
    <article class="card">
      <div class="card-body role-card role-card--details">
        ${roleManualSection(draft)}
      </div>
    </article>
  `;
}

function roleManualSection(draft) {
  const hasDetail = !!(draft.scenario || draft.learnerRole || draft.goals.length || draft.goalDraft);
  const open = state.roleManual === null ? hasDetail : state.roleManual;
  return `
    <section class="role-manual${open ? " is-open" : ""}">
      <button class="role-manual-head" type="button" data-action="role-manual-toggle" aria-expanded="${open}" aria-controls="role-manual-body">
        <span class="role-manual-text">
          <span class="role-manual-title" id="role-manual-title">${esc((draft.title || "").trim() || "New roleplay")}</span>
          <span class="role-manual-sub">Persona, scenario, learner role and goals</span>
        </span>
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4.5 6.5 8 10l3.5-3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      ${open ? `<div class="role-manual-body" id="role-manual-body">${roleManualFields(draft)}</div>` : ""}
    </section>
  `;
}

// A row of persona photos to pick who the learner speaks with.
function rolePersonaPicker(draft) {
  const list = rpsPersonas(RPS_CATS[0].id, RPS_OWN_INDUSTRY);
  return `
        <h2 class="role-label">Pick a persona</h2>
        <div class="rpa-people" role="group" aria-label="Persona">
          ${list.map((p) => {
            const on = (p.look || p.id) === draft.look;
            return `
          <div class="rpa-person" role="button" tabindex="0" data-action="role-pick-persona" data-id="${esc(p.id)}" aria-pressed="${on}" aria-label="Pick ${esc(p.name)}">
            <span class="rpa-photo"><img src="${esc(p.src)}" alt="">${on ? `<span class="rpa-tick" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5 6.5 11.5 12.5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>` : ""}</span>
            <span class="rpa-name-row">
              <span class="rpa-name">${esc(p.name.split(" ")[0])}</span>
              <button class="rpa-edit" type="button" data-action="role-persona-settings" data-id="${esc(p.id)}" aria-label="Edit ${esc(p.name)}" title="Edit persona">${menuIcon("edit")}</button>
            </span>
            <span class="rpa-sub">${esc(p.role)}</span>
          </div>`;
          }).join("")}
        </div>`;
}

function roleManualFields(draft) {
  return `
        <h2 class="role-label"><label for="role-name">Roleplay name</label></h2>
        <input class="input" id="role-name" data-role-field="title" autocomplete="off" placeholder="Example: The wait-and-see investor" value="${esc(draft.title || "")}">
        ${rolePersonaPicker(draft)}
        <div class="role-label-row">
          <h2 class="role-label">Scenario</h2>
          <button class="role-examples-toggle" type="button" data-action="role-generate-scenario">
            ${sparklesIcon()} Generate from recent activity
          </button>
        </div>
        <label class="sr" for="role-scenario">Scenario</label>
        <textarea class="input" id="role-scenario" data-role-field="scenario" rows="8" placeholder="Example: You are an off-plan buyer who wants to wait for prices to drop.">${esc(draft.scenario)}</textarea>
        <h2 class="role-label">What’s really going on</h2>
        <label class="sr" for="role-hidden">What’s really going on</label>
        <textarea class="input" id="role-hidden" data-role-field="hidden" rows="4" placeholder="Example: You are not scared of the market. You are scared of making a mistake with your family’s savings.">${esc(draft.hidden)}</textarea>
        <p class="hint hint-below">Hidden from the agent. The persona only reveals it if the agent earns it.</p>
        <h2 class="role-label">Learner role</h2>
        <label class="sr" for="role-learner">Learner role</label>
        <input class="input" id="role-learner" data-role-field="learnerRole" placeholder="Example: Off-plan agent on a first call" value="${esc(draft.learnerRole)}">
        ${roleGoalsField(draft)}
        <h2 class="role-label">How the call can end</h2>
        <label class="role-sublabel" for="role-end-agree">Agrees when</label>
        <textarea class="input" id="role-end-agree" data-role-field="endAgree" rows="2">${esc(draft.endAgree)}</textarea>
        <label class="role-sublabel" for="role-end-decline">Declines when</label>
        <textarea class="input" id="role-end-decline" data-role-field="endDecline" rows="2">${esc(draft.endDecline)}</textarea>
        <p class="hint hint-below">The best outcome is a booked meeting or a dated follow-up, never a purchase.</p>
        ${roleRubricField(draft)}
  `;
}

// A short editable list (up to six lines) for the persona's reactions.
function roleListField(draft, key, label, placeholder) {
  const items = draft[key];
  const full = items.length >= 6;
  return `
    <div class="rpa-list">
      <p class="rpa-list-label">${esc(label)}</p>
      <ul class="rpa-list-items">
        ${items.map((text, i) => `
          <li>
            <span>${esc(text)}</span>
            <button class="btn btn--ghost btn--sm" type="button" data-action="role-list-remove" data-key="${key}" data-id="${i}" aria-label="Remove: ${esc(text)}">Remove</button>
          </li>
        `).join("")}
      </ul>
      <div class="role-goal-add">
        <label class="sr" for="role-list-${key}">${esc(label)}</label>
        <input class="input" id="role-list-${key}" data-role-field="${key}Draft" placeholder="${esc(placeholder)}" value="${esc(draft[key + "Draft"] || "")}" ${full ? "disabled" : ""}>
        <button class="btn btn--secondary" type="button" data-action="role-list-add" data-key="${key}" ${full ? "disabled" : ""}>
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3.5v9M3.5 8h9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          Add
        </button>
      </div>
    </div>`;
}

// Applies a persona's character to the roleplay draft: who they are, how they behave, how they talk.
function applyRolePersona(personaId) {
  const draft = state.roleDraft;
  const p = rpsPersonas().find((item) => item.id === personaId);
  if (!draft || !p) return;
  const pre = rpsPresetOf(p);
  draft.look = p.look || p.id;
  draft.name = p.name;
  draft.sub = p.note || "";
  const behaviourIds = (pre.behaviours && pre.behaviours.length ? pre.behaviours : (p.behaviours || []).map((label) => (ROLE_TRAITS.find((t) => t.label === label) || {}).id).filter(Boolean));
  if (behaviourIds.length) draft.trait = behaviourIds[0];
  if (pre.difficulty) draft.difficulty = pre.difficulty;
  if (pre.talk) draft.talk = pre.talk;
  state.roleLookPick = draft.look;
  syncRoleOpening();
  syncRubric(draft);
}

// One confirm dialog for every destructive action: askConfirm() opens it, "Remove" runs the action.
let confirmRun = null;

function askConfirm({ title, sub, label, run }) {
  state.roleMenuId = "";
  state.confirm = { title, sub, label };
  confirmRun = run;
  render();
}

// Share on a bot card: the learner distribution link with a copy button.
const SHARE_TWIN = { id: "olga-twin", title: "Olga’s twin", twin: true };
function botShareLink(bot) {
  return bot.twin ? "https://trainertwin.app/t/olga" : `https://trainertwin.app/b/${bot.id}`;
}

function botShareDialog() {
  const bot = state.botShare === SHARE_TWIN.id ? SHARE_TWIN : TWIN_BOTS.find((item) => item.id === state.botShare);
  if (!bot) return "";
  const link = botShareLink(bot);
  const copyIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666"/><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"/></svg>`;
  const checkIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5l10 -10"/></svg>`;
  return `
    <dialog class="issue-dialog confirm-dialog share-dialog" id="share-dialog" aria-labelledby="share-title">
      <div class="confirm-card">
        <span class="confirm-tile" aria-hidden="true">
          <span class="confirm-tile-in">
            <svg viewBox="0 0 16 16" fill="none"><circle cx="11.25" cy="3.75" r="1.5" stroke="currentColor" stroke-width="1.5"/><circle cx="4.75" cy="8" r="1.5" stroke="currentColor" stroke-width="1.5"/><circle cx="11.25" cy="12.25" r="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M6.1 7.2 9.9 4.7M6.1 8.8l3.8 2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </span>
        </span>
        <button class="btn btn--ghost btn--icon btn--sm confirm-close" type="button" data-action="share-bot-close" aria-label="Close">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        </button>
        <div class="confirm-copy">
          <h2 class="confirm-title" id="share-title">Share ${esc(bot.title)}</h2>
          <p class="confirm-sub">${bot.twin ? "Send this link to your learners so they can talk to your twin." : "Send this link to your learners so they can ask the bot."}</p>
        </div>
        <div class="field role-field share-field">
          <label for="share-link">Distribution link</label>
          <div class="bot-link">
            <div class="bot-link-field"><input class="input" id="share-link" readonly value="${esc(link)}"></div>
            <button class="btn btn--secondary bot-copy${state.botShareCopied ? " is-copied" : ""}" type="button" data-action="share-bot-copy" data-link="${esc(link)}">
              ${state.botShareCopied ? `${checkIcon} Copied` : `${copyIcon} Copy link`}
            </button>
          </div>
        </div>
      </div>
    </dialog>
  `;
}

function mountBotShareDialog() {
  const dlg = document.getElementById("share-dialog");
  if (!dlg) return;
  if (typeof dlg.showModal === "function" && !dlg.open) dlg.showModal();
  dlg.addEventListener("cancel", (ev) => {
    ev.preventDefault();
    actions["share-bot-close"]();
  });
  dlg.addEventListener("click", (ev) => {
    if (ev.target === dlg) actions["share-bot-close"]();
  });
}

function closeConfirm() {
  state.confirm = null;
  confirmRun = null;
  render();
}

function confirmDialog() {
  const c = state.confirm;
  return `
    <dialog class="issue-dialog confirm-dialog" id="confirm-dialog" aria-labelledby="confirm-title" aria-describedby="confirm-sub">
      <div class="confirm-card">
        <span class="confirm-tile" aria-hidden="true">
          <span class="confirm-tile-in">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12"/><path d="M9 7v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/></svg>
          </span>
        </span>
        <button class="btn btn--ghost btn--icon btn--sm confirm-close" type="button" data-action="confirm-cancel" aria-label="Close">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        </button>
        <div class="confirm-copy">
          <h2 class="confirm-title" id="confirm-title">${esc(c.title)}</h2>
          <p class="confirm-sub" id="confirm-sub">${esc(c.sub)}</p>
        </div>
        <div class="confirm-actions">
          <button class="btn btn--secondary" type="button" data-action="confirm-cancel">Cancel</button>
          <button class="btn btn--danger" type="button" data-action="confirm-yes">${esc(c.label)}</button>
        </div>
      </div>
    </dialog>
  `;
}

function mountConfirmDialog() {
  const dlg = document.getElementById("confirm-dialog");
  if (!dlg) return;
  if (typeof dlg.showModal === "function" && !dlg.open) dlg.showModal();
  dlg.addEventListener("cancel", (ev) => {
    ev.preventDefault();
    closeConfirm();
  });
  dlg.addEventListener("click", (ev) => {
    if (ev.target === dlg) closeConfirm();
  });
}

function roleAvatarDialog() {
  const pick = state.roleLookPick;
  return `
    <dialog class="issue-dialog role-avatar-dialog" id="role-avatar-dialog" aria-labelledby="role-avatar-title">
      <div class="issue-card role-avatar-card">
        <div class="role-avatar-head">
          <h2 id="role-avatar-title">Select persona</h2>
          <button class="btn btn--ghost btn--icon btn--sm" type="button" data-action="role-avatar-cancel" aria-label="Close">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </button>
        </div>
        <div class="role-personas" role="radiogroup" aria-label="Persona">
          ${PERSONAS.map((item) => `
            <button class="role-persona${item.id === pick ? " is-selected" : ""}" type="button" role="radio" aria-checked="${item.id === pick}" data-action="role-look" data-id="${item.id}">
              <img src="${item.src}" alt="">
              <span class="role-persona-text">
                <span class="role-persona-name">${esc(item.name)} <span class="role-ai">AI</span></span>
                <span class="role-persona-title">${esc(item.title)}</span>
              </span>
              <span class="role-dot" aria-hidden="true"></span>
            </button>
          `).join("")}
        </div>
        <div class="role-avatar-foot">
          <button class="btn btn--ghost" type="button" data-action="role-avatar-cancel">Cancel</button>
          <button class="btn btn--strong" type="button" data-action="role-avatar-save">Save</button>
        </div>
      </div>
    </dialog>
  `;
}

function mountRoleAvatar() {
  const dlg = document.getElementById("role-avatar-dialog");
  if (!dlg) return;
  if (typeof dlg.showModal === "function" && !dlg.open) dlg.showModal();
  dlg.addEventListener("cancel", (ev) => {
    ev.preventDefault();
    state.roleAvatarOpen = false;
    render();
  });
  dlg.addEventListener("click", (ev) => {
    if (ev.target === dlg) {
      state.roleAvatarOpen = false;
      render();
    }
  });
}

function playQuote(task) {
  const line = (task.preview && task.preview[0]) || "";
  const idx = line.indexOf(": ");
  if (idx > 0 && idx < 24) return { who: line.slice(0, idx), text: line.slice(idx + 2) };
  return null;
}

const LEARNER_FACES = ["../media/learner-1.png", "../media/learner-2.png", "../media/learner-3.png", "../media/learner-4.png"];

function roleLearnerAvatars(task, index) {
  const names = roleHistory(task).map((session) => session.learner);
  const shown = names.slice(0, LEARNER_FACES.length).map((name, i) => ({
    name,
    src: LEARNER_FACES[(i + index) % LEARNER_FACES.length]
  }));
  return { shown, extra: names.length - shown.length };
}

function roleDraftMenu(task) {
  return `
    <div class="menu rp-row-menu" role="menu" aria-label="Actions for ${esc(task.title)}" hidden>
      <button type="button" role="menuitem" data-action="role-row-test" data-id="${esc(task.id)}">${menuIcon("play")}<span>Try as learner</span></button>
      <button type="button" role="menuitem" data-action="role-publish" data-id="${esc(task.id)}">${menuIcon("send")}<span>Publish</span></button>
      <div class="menu-rule" role="separator"></div>
      <button type="button" role="menuitem" class="is-danger" data-action="role-draft-remove" data-id="${esc(task.id)}">${menuIcon("trash")}<span>Remove</span></button>
    </div>
  `;
}

function roleCardMenu(task, withShare) {
  return `
    <div class="menu rp-row-menu" role="menu" aria-label="Actions for ${esc(task.title)}" hidden>
      <button type="button" role="menuitem" data-action="role-configure" data-id="${esc(task.id)}">${menuIcon("edit")}<span>Configure</span></button>
      ${withShare ? `<button type="button" role="menuitem" data-action="copy-link" data-link="https://trainertwin.com/olga/${esc(task.id)}">${menuIcon("share")}<span>Share</span></button>` : ""}
      <button type="button" role="menuitem" data-action="role-row-test" data-id="${esc(task.id)}">${menuIcon("play")}<span>Try as learner</span></button>
    </div>
  `;
}

function roleCard(task, index, forceStatus, withQuote, withShare, draftFooter) {
  const status = forceStatus || (task.pre ? "published" : "draft");
  const quote = withQuote ? playQuote(task) : null;
  const [statusClass, statusLabel] = { published: ["is-published", "Published"], paused: ["is-neutral", "Paused"], draft: ["is-draft", "Draft"] }[status];
  // Published and draft cards carry no tag; only Paused is called out.
  const statusBadge = task.kindLabel ? `<span class="rp-status is-neutral">${esc(task.kindLabel)}</span>` : status === "published" || status === "draft" ? "" : `<span class="rp-status ${statusClass}">${statusLabel}</span>`;
  const learners = !draftFooter && task.sessions !== 0 ? roleLearnerAvatars(task, index) : null;
  const moreButton = `
          <button class="btn btn--ghost btn--icon btn--sm rp-row-more" type="button" id="role-menu-${esc(task.id)}" data-action="role-row-menu" data-id="${esc(task.id)}" aria-label="Actions for ${esc(task.title)}" aria-haspopup="menu" aria-expanded="${state.roleMenuId === task.id}">
            <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="3.25" r="1.15" fill="currentColor"/><circle cx="8" cy="8" r="1.15" fill="currentColor"/><circle cx="8" cy="12.75" r="1.15" fill="currentColor"/></svg>
          </button>`;
  // A published or paused card opens its detail screen; a draft card opens the configure screen.
  const isDraft = status === "draft" || !!draftFooter;
  const cardAction = isDraft ? "role-configure" : (sharedRowById(task.id) ? "role-open" : "");
  return `
    <article class="rp-card${cardAction ? " is-clickable" : ""}${task.flag ? " is-flagged" : ""}"${cardAction ? ` data-action="${cardAction}" data-id="${esc(task.id)}" tabindex="0" aria-label="${isDraft ? "Configure" : "Open"} ${esc(task.title)}"` : ""}>
      <span class="rp-art rp-art--${index % 10}" aria-hidden="true">
        ${quote ? `<span class="rp-quote"><span class="rp-who">${esc(quote.who)}</span><span class="rp-quote-bubble${task.clientFace ? " has-face" : ""}">${task.clientFace ? `<img class="rp-quote-face" src="${esc(task.clientFace)}" alt="">` : ""}<span class="rp-quote-text">${task.clientName ? `<span class="rp-quote-name">${esc(task.clientName)}</span>` : ""}<span>“${esc(quote.text)}”</span></span></span></span>` : ""}
        ${statusBadge}
        ${task.flag ? flagBadge(task.flag) : ""}
      </span>
      <span class="rp-body">
        <span class="rp-title">${esc(task.title)}</span>
        <span class="rp-copy">${esc(task.blurb)}</span>
        ${task.created ? `<span class="rp-created">${esc(task.created)}</span>` : ""}
        ${task.needs && !dotOn(task, "a") ? `<span class="rp-copy">${esc(task.needsCopy)}</span>` : ""}
      </span>
      <span class="rp-actions">
        ${draftFooter ? `
          <button class="btn btn--secondary btn--sm" type="button" data-action="role-configure" data-id="${esc(task.id)}">${sparklesIcon()} Configure</button>
        ` : learners ? `
          <span class="rp-learners" aria-label="Learners who tried this roleplay">
            ${learners.shown.map((learner) => `<img class="rp-learner-avatar" src="${esc(learner.src)}" alt="" title="${esc(learner.name)}">`).join("")}
            ${learners.extra > 0 ? `<span class="rp-learner-avatar rp-learner-avatar--more">+${learners.extra}</span>` : ""}
          </span>
        ` : ""}${moreButton}
      </span>
    </article>
  `;
}

function pageSettings() {
  const type = TYPES[state.coachingType];
  return `
    <div class="page">
      <p class="overline">Settings</p>
      <h1 class="page-title">Olga Sinenko</h1>
      <p class="lede">${esc(type.banner)}</p>
      <article class="card type-banner" style="margin-top:24px">
        <p class="overline">Coaching type</p>
        <div class="badges" style="margin-top:12px">${type.tags.map((tag) => `<span class="badge">${esc(tag)}</span>`).join("")}</div>
      </article>
      <p class="overline settings-group">Fast follow</p>
      <div class="fast-follow">
        <button class="card fast-follow-card" type="button" data-action="nav" data-id="home">
          <span class="fast-follow-ico" aria-hidden="true">${icon("home")}</span>
          <span class="fast-follow-name">Home</span>
        </button>
        <button class="card fast-follow-card" type="button" data-action="nav" data-id="videos">
          <span class="fast-follow-ico" aria-hidden="true">${icon("video")}</span>
          <span class="fast-follow-name">Gen video</span>
        </button>
      </div>
      <div class="settings-know">${knowledgeCard()}</div>
    </div>
  `;
}

function setupHeader(current, title, subtitle) {
  const steps = [
    [1, "Find you"],
    [2, "Knowledge &amp; training style"],
    [3, "Twin presence"]
  ];
  return `
    ${title ? `<h1 class="find-title">${esc(title)}</h1>` : ""}
    ${subtitle ? `<p class="find-subtitle">${esc(subtitle)}</p>` : ""}
    <ol class="setup-steps" aria-label="Setup">
      ${steps.map(([n, label]) => `
        <li class="${current === n ? "is-current" : ""}">
          <button class="step-hit" type="button" data-action="setup-step" data-step="${n}" ${current === n ? 'aria-current="step"' : ""}>
            <span class="n">${n}</span> ${label}
          </button>
        </li>
      `).join("")}
    </ol>
  `;
}

function setupShell(current, inner, wide, cardClass, title, subtitle, after) {
  return `
    <div class="page page--find${wide ? " is-scroll" : ""}">
      <div class="find-stack${wide ? " is-wide" : ""}">
        ${setupHeader(current, title, subtitle)}
        <div class="setup-card${cardClass ? " " + cardClass : ""}">${inner}</div>
        ${after || ""}
      </div>
    </div>
  `;
}

function pageFind() {
  const kind = linkKind();
  const invalid = kind === "invalid";
  const hint = invalid ? "Try a profile link instead." : "Any profile link works when there’s no website.";
  return setupShell(1, `
    <h1 class="page-title">Where can we find you?</h1>
    <div class="field">
      <label for="link">Profile link</label>
      <input class="input" id="link" name="link" type="url" inputmode="url" autocomplete="off" placeholder="Website, LinkedIn, YouTube, or any profile" value="${esc(state.link)}" aria-invalid="${invalid}" aria-describedby="link-hint" data-state="${kind}">
      <p class="${invalid ? "error" : "hint"}" id="link-hint"${invalid ? ' role="alert"' : ""}>${hint}</p>
    </div>
    <div class="actions">
      ${state.searching ? latticeLoader("find") : `<button class="btn btn--strong" id="continue" type="button" data-action="continue">Continue</button>`}
    </div>
  `, true, [state.findShineDone ? "" : "is-shine", state.linkAttention ? "is-highlight" : ""].filter(Boolean).join(" "), "Setup your Twin", "Train your twin with your knowledge and coaching style.");
}

function pageKnowledge() {
  const n = tickedProfiles().length;
  const body = state.knowledgeStarted ? knowledgeProgress() : `
    <div class="know-head">
      <h1 class="page-title">Your knowledges from your public URLs</h1>
      <button class="btn btn--secondary btn--sm" type="button" data-action="open-add-knowledge">
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3.5v9M3.5 8h9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        Add Knowledge
      </button>
    </div>
    <p class="know-section-sub">Website, LinkedIn, YouTube, or any other public profile you teach from.</p>
    <div class="grid-profiles">
      ${state.profiles.filter((p) => p.found && p.ticked).map(profileCard).join("")}
    </div>
    ${removedSection()}
    <div class="section-divider" role="separator"></div>
    <div class="know-head know-section-title">
      <h2 class="page-title">Upload your training materials</h2>
      <label class="btn btn--secondary btn--sm" for="know-upload">
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3.5v6.5M5.5 6.5 8 3.5l2.5 3M3.5 12.5h9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Upload
      </label>
    </div>
    <p class="know-section-sub">Video, document, audio, or any other file you teach from.</p>
    ${knowledgeUpload()}
    <div class="section-divider" role="separator"></div>
    <h2 class="page-title know-section-title">Connect your sources</h2>
    <p class="know-section-sub">Google Drive, Notion, or another place your training already lives.</p>
    ${sourceConnects()}
  `;
  return setupShell(2, `
    ${body}
    ${state.knowledgeStarted ? "" : `
      <div class="sticky-actions actions know-actions">
        <p class="know-note">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 1.75 12.75 3.6v3.9c0 2.9-1.9 4.85-4.75 6.05C5.15 12.35 3.25 10.4 3.25 7.5V3.6L8 1.75Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
          <span>Your data is safe with us! We will not use your data to train our model</span>
        </p>
        <button class="btn btn--strong know-build-btn" type="button" data-action="build-knowledge" ${n ? "" : "disabled"}>${state.accountReady ? "Continue to build my knowledge" : "Build my knowledge"}</button>
      </div>
    `}
  `, true, "", "Setup your Twin", "Train your twin with your knowledge and coaching style.");
}

function removedProfiles() {
  return state.profiles.filter((p) => p.found && !p.ticked);
}

function removedSection() {
  const rows = removedProfiles();
  if (!rows.length) return "";
  const open = !!state.removedOpen;
  return `
    <div class="removed-block">
      <button class="line-dismissed" type="button" data-action="toggle-removed" aria-expanded="${open}" ${open ? 'aria-controls="removed-list"' : ""}>
        <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6 4.5 10.5 8 6 11.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Removed <span class="tabular">(${rows.length})</span>
      </button>
      ${open ? `<div class="removed-list" id="removed-list">${rows.map(removedRow).join("")}</div>` : ""}
    </div>
  `;
}

function removedRow(p) {
  return `
    <article class="card removed-card">
      <div class="card-head">
        <img class="profile-avatar" src="${profileAvatar(p)}" alt="">
        <div class="head-copy">
          <h2 class="card-title">${esc(p.platform)}</h2>
          <p class="card-sub">${esc(p.handle)}</p>
        </div>
        <button class="btn btn--secondary btn--sm" type="button" data-action="restore-profile" data-id="${p.id}">Retrieve</button>
      </div>
    </article>
  `;
}

function knowledgeLines() {
  const groups = GROUPS.filter((g) => g.id !== "whiteboard");
  const allDone = state.knowledgeGroupStep >= groups.length;
  const lines = [];
  groups.forEach((g, idx) => {
    const items = allSamples().filter((s) => s.group === g.id).slice(0, 1);
    const isDone = allDone || idx < state.knowledgeGroupStep;
    const isActive = !allDone && idx === state.knowledgeGroupStep;
    const visible = isDone ? items : isActive ? items.slice(0, state.knowledgeGroupSub + 1) : [];
    visible.forEach((item) => lines.push(item));
  });
  return lines;
}

function parseEvidence(line) {
  const split = line.lastIndexOf(": ");
  const head = split > 0 ? line.slice(0, split) : line;
  const body = split > 0 ? line.slice(split + 2) : "";
  const dot = head.indexOf(" · ");
  return {
    source: dot > 0 ? head.slice(0, dot) : head,
    title: dot > 0 ? head.slice(dot + 3) : "",
    body
  };
}

function evidenceDetails(lines) {
  return `
    <ul class="seen-details">
      ${(lines || []).map((line) => {
        const item = parseEvidence(line);
        return `
          <li class="seen-detail">
            <span class="seen-source">${esc(item.source)}</span>
            <span class="seen-copy">
              ${item.title ? `<b>${esc(item.title)}</b>` : ""}
              ${item.body ? `<span>${esc(item.body)}</span>` : ""}
            </span>
          </li>
        `;
      }).join("")}
    </ul>
  `;
}

function lineCard(sample) {
  const confirmed = state.lineStatus[sample.id] === "confirmed";
  const open = state.lineOpen === sample.id;
  const check = `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 8.5 6.5 11.5 12.5 5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const aside = confirmed
    ? `<span class="line-confirmed">${check} Confirmed</span>`
    : `<div class="line-actions">
        <button class="btn btn--secondary btn--sm" type="button" data-action="confirm-line" data-id="${sample.id}">${check} Confirm</button>
        <button class="btn btn--secondary btn--sm" type="button" data-action="reject-line" data-id="${sample.id}">Reject</button>
      </div>`;
  return `
    <article class="line-card${confirmed ? " is-confirmed" : ""}">
      <div class="line-top">
        <h3 class="line-title">${esc(sample.title)}</h3>
        ${aside}
      </div>
      <button class="seen-pill${open ? " is-open" : ""}" type="button" data-action="toggle-line" data-id="${sample.id}" aria-expanded="${open}">
        Seen in <span class="tabular">${sample.seen || 1}</span> places
        <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 6.5 8 10.5 12 6.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      ${open ? evidenceDetails(sample.evidence) : ""}
    </article>
  `;
}

function twinBuildItems() {
  const groups = GROUPS.filter((g) => g.id !== "whiteboard");
  const allDone = state.knowledgeGroupStep >= groups.length;
  const items = groups.map((g, idx) => {
    const sample = allSamples().filter((s) => s.group === g.id)[0];
    if (!sample) return null;
    const done = allDone || idx < state.knowledgeGroupStep;
    const active = !allDone && idx === state.knowledgeGroupStep;
    if (done && state.lineStatus[sample.id] !== "rejected") state.lineStatus[sample.id] = "confirmed";
    return {
      id: sample.id,
      title: sample.title,
      source: sample.source,
      evidence: sample.evidence,
      phase: done ? "done" : active ? "active" : "wait"
    };
  }).filter(Boolean);
  items.push({
    id: "training-style",
    title: "Training style",
    source: "Samples you keep",
    phase: state.styleBuilt ? "done" : "wait",
    evidence: ["Teaching style · Samples you keep: How you explain an idea, hold a long session, and answer a question you didn’t plan for."]
  });
  return items;
}

function latticeLoader(key) {
  const cells = [0, 1, 2, 5, 4, 3, 6, 7, 8];
  const delay = 90;
  const run = cells.map((unit) => (
    `<span class="lattice-loader__cell" style="animation-delay:${unit * delay}ms"></span>`
  )).join("");
  return `
    <span class="lattice-loader" role="status" data-status="working" data-shape="square" data-key="${esc(key)}">
      <span class="lattice-loader__grid" aria-hidden="true">
        <span class="lattice-loader__layer lattice-loader__run">${run}</span>
      </span>
      <span class="lattice-loader__label" aria-hidden="true"><span class="lattice-loader__text" data-active>Thinking</span></span>
      <span class="lattice-loader__timer tabular" aria-hidden="true">0.0s</span>
      <span class="lattice-loader__sr">Thinking, in progress</span>
    </span>
  `;
}

let latticeTimer = 0;
let latticeKey = "";
let latticeStarted = 0;

function mountLatticeLoader() {
  clearInterval(latticeTimer);
  latticeTimer = 0;
  const row = document.querySelector(".lattice-loader");
  const timer = row && row.querySelector(".lattice-loader__timer");
  if (!row || !timer) {
    latticeKey = "";
    return;
  }
  const key = row.dataset.key || "";
  if (key !== latticeKey) {
    latticeKey = key;
    latticeStarted = performance.now();
  }
  const paint = () => {
    const ds = Math.floor((performance.now() - latticeStarted) / 100);
    timer.textContent = ds < 600
      ? (ds / 10).toFixed(1) + "s"
      : Math.floor(ds / 600) + "m " + ((ds % 600) / 10).toFixed(1) + "s";
  };
  paint();
  latticeTimer = setInterval(paint, 100);
}

function buildRow(item) {
  const open = state.lineOpen === item.id;
  const check = `<span class="build-check is-done"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 8.5 6.5 11.5 12.5 5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>`;
  const aside = item.phase === "active" ? latticeLoader(item.id) : item.phase === "done" ? check : "";
  return `
    <article class="build-row${item.phase === "done" ? " is-done" : ""}${item.phase === "active" ? " is-active" : ""}${open ? " is-open" : ""}">
      <button class="build-row-hit" type="button" data-action="toggle-line" data-id="${esc(item.id)}" aria-expanded="${open}">
        <span class="build-copy">
          <span class="build-title">${esc(item.title)}</span>
          <span class="build-sub">${esc(item.source)}</span>
        </span>
        ${aside}
        <svg class="build-chevron" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 6.5 8 10.5 12 6.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      ${open ? evidenceDetails(item.evidence) : ""}
    </article>
  `;
}

function knowledgeProgress() {
  const groups = GROUPS.filter((g) => g.id !== "whiteboard");
  const allDone = state.knowledgeGroupStep >= groups.length;
  const items = twinBuildItems();
  const cardsDone = items.filter((item) => item.id !== "training-style" && item.phase === "done").length;
  const creditSteps = [100, 250, 350, 400, 500];
  const offered = 10000;
  const used = creditSteps[Math.min(cardsDone, creditSteps.length - 1)];
  const pct = Math.round((used / offered) * 100);
  return `
    <section class="credit-card">
      <div class="credit-top">
        <div>
          <h1 class="review-title">Credit offered</h1>
          <p class="know-section-sub">Knowledge and training style build the complete twin.</p>
        </div>
        <p class="credit-used tabular">Used ${used}/10000</p>
      </div>
      <div class="credit-bar" role="progressbar" aria-valuemin="0" aria-valuemax="${offered}" aria-valuenow="${used}" aria-label="Knowledge added from your materials">
        <span style="width:${pct}%"></span>
      </div>
    </section>
    <div class="line-list">
      ${items.map(buildRow).join("")}
    </div>
    <div class="progress-footer">
      <p class="hint" style="margin:0">${allDone ? "Knowledge from your materials is in." : "Your twin gets sharper with every profile it reads."}</p>
      ${allDone
        ? `<button class="btn btn--strong" type="button" data-action="to-hello">Continue to Twin Presence</button>`
        : `<button class="btn btn--strong" type="button" data-action="nav" data-id="home">Go to home</button>`}
    </div>
  `;
}

function missedInner() {
  return `
    <label class="label" for="missed">Missed one?</label>
    <div class="edit-row">
      <input class="input" id="missed" value="${esc(state.missed)}" placeholder="Another public link" aria-label="Another public link">
      <button class="btn btn--primary btn--sm" type="button" data-action="add-missed">Add</button>
    </div>
    <p class="hint hint-below" style="margin-top:8px">Paste any other link: podcast, Substack, course page.</p>
    <p class="permission">Public pages from ticked profiles only. Nothing is posted for you.</p>
  `;
}

function fileKind(name) {
  const ext = String(name).split(".").pop().toLowerCase();
  if (["mp4", "mov", "webm", "mkv"].includes(ext)) return "Video";
  if (["mp3", "wav", "m4a", "aac"].includes(ext)) return "Audio";
  if (["png", "jpg", "jpeg", "gif", "webp"].includes(ext)) return "Image";
  if (["ppt", "pptx", "key"].includes(ext)) return "Presentation";
  if (["pdf", "doc", "docx", "txt", "md", "pages"].includes(ext)) return "Document";
  return "File";
}

function knowledgeFileCard(name) {
  return `
    <article class="card">
      <div class="card-head">
        <span class="file-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none"><path d="M7 3.5h7l5 5V20.5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M14 3.5V9h5.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
        </span>
        <div class="head-copy">
          <div class="head-copy-top">
            <h2 class="card-title">${esc(name)}</h2>
            <div class="head-copy-end">
              <button class="profile-remove" type="button" data-action="remove-knowledge-file" data-id="${esc(name)}" aria-label="Remove ${esc(name)}">
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
              </button>
            </div>
          </div>
          <p class="card-sub">${esc(fileKind(name))}</p>
        </div>
      </div>
    </article>
  `;
}

function knowledgeUpload() {
  const files = state.knowledgeFiles || [];
  return `
    <input id="know-upload" class="sr" type="file" multiple accept="video/*,audio/*,image/*,.pdf,.doc,.docx,.ppt,.pptx,.key,.pages,.txt,.md" aria-label="Upload a video, document, or other file">
    ${files.length ? `<div class="grid-profiles know-file-grid">${files.map(knowledgeFileCard).join("")}</div>` : ""}
  `;
}

function addCard() {
  return `
    <button class="card card--add" type="button" data-action="open-add-knowledge">
      <span class="add-glyph" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></span>
      <span class="card-title" style="font-size:14px">Add knowledge</span>
    </button>
  `;
}

function addKnowledgeDialog() {
  return `
    <dialog class="auth-dialog add-dialog" id="add-knowledge-dialog" aria-labelledby="add-knowledge-title">
      <div class="auth-card add-card">
        <button class="btn btn--ghost btn--icon btn--sm auth-close" type="button" data-action="close-add-knowledge" aria-label="Close">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.5"/></svg>
        </button>
        <h2 class="issue-title" id="add-knowledge-title">Add another source</h2>
        <p class="add-sub">Got a podcast, newsletter, or course page?<br>Paste the link and we’ll pull it in.</p>
        <div class="edit-row">
          <input class="input" id="missed" value="${esc(state.missed)}" placeholder="Another public link" aria-label="Another public link">
          <button class="btn btn--strong btn--sm" type="button" data-action="add-missed">Add</button>
        </div>
        <p class="permission">Public pages from ticked profiles only. Nothing is posted for you.</p>
      </div>
    </dialog>
  `;
}

function closeAddKnowledge() {
  state.addKnowledgeOpen = false;
  render();
}

function mountFindShine() {
  const card = document.querySelector(".setup-card.is-shine");
  if (!card) return;
  let laps = 0;
  const finish = (ev) => {
    if (ev.animationName !== "find-border-shine") return;
    laps += 1;
    if (laps < 3) return;
    state.findShineDone = true;
    card.classList.remove("is-shine");
  };
  card.addEventListener("animationiteration", finish);
  card.addEventListener("animationend", finish);
}

function voiceDialog() {
  return `
    <dialog class="issue-dialog" id="voice-dialog" aria-labelledby="voice-dialog-title">
      <div class="issue-card voice-card">
        <button class="btn btn--ghost btn--icon btn--sm issue-close" type="button" data-action="close-voices" aria-label="Close">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.5"/></svg>
        </button>
        <h2 class="issue-title" id="voice-dialog-title">Available voices</h2>
        <div class="voice-list">
          ${LIBRARY_VOICES.map((voice) => `
            <div class="voice-row${state.presenceLibrary === voice.id ? " is-selected" : ""}">
              <div class="voice-row-copy">
                <b>${esc(voice.label)}</b>
              </div>
              <div class="voice-row-actions">
                <button class="btn btn--ghost btn--sm" type="button" data-action="listen-library" data-id="${voice.id}">
                  <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 6.5h2L7.5 4v8L4.5 9.5h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M10 6.2a2.4 2.4 0 0 1 0 3.6M11.8 4.6a4.4 4.4 0 0 1 0 6.8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                  Listen
                </button>
                <button class="btn btn--secondary btn--sm" type="button" data-action="pick-library" data-id="${voice.id}">Select</button>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </dialog>
  `;
}

const UPSELL_TOPICS = ["Cold calling", "Off-plan buyer qualification", "Objection handling", "Listings and landlords"];

function knowledgeUpsellDialog() {
  return `
    <dialog class="issue-dialog upsell-dialog" id="knowledge-upsell-dialog" aria-labelledby="upsell-title">
      <div class="issue-card upsell-card">
        <button class="btn btn--ghost btn--icon btn--sm issue-close" type="button" data-action="close-knowledge-upsell" aria-label="Close">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.5"/></svg>
        </button>
        <span class="upsell-icon" aria-hidden="true">${sparklesIcon()}</span>
        <h2 class="issue-title upsell-title" id="upsell-title">Your knowledge is being extracted.</h2>
        <p class="upsell-sub">It will take a few minutes to extract all your training styles! We built a few ready-to-use roleplays for your topics. Explore them meanwhile.</p>
        <span class="upsell-topics-label">Topics</span>
        <div class="upsell-topics">
          ${UPSELL_TOPICS.map((t) => `<span class="flow-topic-chip">${esc(t)}</span>`).join("")}
        </div>
        <div class="upsell-actions">
          <button class="btn btn--strong" type="button" data-action="knowledge-upsell-explore">Explore Roleplay</button>
          <button class="btn btn--secondary" type="button" data-action="knowledge-upsell-wait">No, I’ll wait</button>
        </div>
        <div class="upsell-note">
          <span class="upsell-note-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"/><path d="M9 17v1a3 3 0 0 0 6 0v-1"/><path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727"/><path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727"/></svg>
          </span>
          <p>We’ll notify you once your twin is ready!</p>
        </div>
      </div>
    </dialog>
  `;
}

function mountKnowledgeUpsellDialog() {
  const dlg = document.getElementById("knowledge-upsell-dialog");
  if (!dlg) return;
  if (typeof dlg.showModal === "function" && !dlg.open) dlg.showModal();
  dlg.addEventListener("cancel", (ev) => {
    ev.preventDefault();
    actions["close-knowledge-upsell"]();
  });
}

function mountVoiceDialog() {
  const dlg = document.getElementById("voice-dialog");
  if (!dlg) return;
  if (typeof dlg.showModal === "function" && !dlg.open) dlg.showModal();
  dlg.addEventListener("cancel", (ev) => {
    ev.preventDefault();
    state.voiceDialog = false;
    render();
  });
  dlg.addEventListener("click", (ev) => {
    if (ev.target === dlg) {
      state.voiceDialog = false;
      render();
    }
  });
}

function mountAddKnowledge() {
  const dlg = document.getElementById("add-knowledge-dialog");
  if (!dlg) return;
  if (typeof dlg.showModal === "function" && !dlg.open) dlg.showModal();
  dlg.addEventListener("cancel", (ev) => {
    ev.preventDefault();
    closeAddKnowledge();
  });
  dlg.addEventListener("click", (ev) => {
    if (ev.target === dlg) closeAddKnowledge();
  });
}

function sourceMark(kind) {
  const drive = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 10l-6 10l-3 -5l6 -10l3 5"/><path d="M9 15h12l-3 5h-12"/><path d="M15 15l-6 -10h6l6 10l-6 0"/></svg>`;
  const notion = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 17.5v-6.5h.5l4 6h.5v-6.5"/><path d="M19.077 20.071l-11.53 .887a1 1 0 0 1 -.876 -.397l-2.471 -3.294a1 1 0 0 1 -.2 -.6v-10.741a1 1 0 0 1 .923 -.997l11.389 -.876a2 2 0 0 1 1.262 .33l1.535 1.023a2 2 0 0 1 .891 1.664v12.004a1 1 0 0 1 -.923 .997"/><path d="M4.5 5.5l2.5 2.5"/><path d="M20 7l-13 1v12.5"/></svg>`;
  return `<span class="source-ico" aria-hidden="true">${kind === "drive" ? drive : notion}</span>`;
}

function sourceConnects() {
  const connectIcon = `<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3.5v9M3.5 8h9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;
  const drive = state.drive
    ? ""
    : `<article class="card source-card">
        <div class="card-body">
          <div class="source-row">
            <h3 class="card-title">${sourceMark("drive")}Google Drive</h3>
            <button class="btn btn--secondary btn--sm" type="button" data-action="connect-drive">${connectIcon}Connect</button>
          </div>
        </div>
      </article>`;
  const notion = state.notion
    ? ""
    : `<article class="card source-card">
        <div class="card-body">
          <div class="source-row">
            <h3 class="card-title">${sourceMark("notion")}Notion</h3>
            <button class="btn btn--secondary btn--sm" type="button" data-action="connect-notion">${connectIcon}${state.notionOpen ? "Save link" : "Connect"}</button>
          </div>
          ${state.notionOpen ? `<input class="input" id="notion" value="${esc(state.notionLink)}" placeholder="Public Notion link" aria-label="Public Notion link">` : ""}
        </div>
      </article>`;
  const done = state.drive && state.notion
    ? `<p class="hint sources-done">Google Drive and Notion are connected.</p>`
    : "";
  const extra = state.addKnowledge ? `<div class="source-add">${missedInner()}</div>` : "";
  return `<div class="sources-grid">${done}${drive}${notion}${extra}</div>`;
}

function metaPills(meta) {
  const parts = String(meta || "").split(" · ").map((part) => part.trim()).filter(Boolean);
  if (!parts.length) return "";
  return `<div class="stat-pills">${parts.map((part) => `<span class="stat-pill tabular">${esc(part)}</span>`).join("")}</div>`;
}

function profileAvatar(p) {
  const sources = {
    web: `https://www.google.com/s2/favicons?sz=64&domain=${encodeURIComponent(p.handle || "example.com")}`,
    li: "https://i.pravatar.cc/64?img=32",
    yt: "https://picsum.photos/seed/olga-youtube/64",
    ig: "https://i.pravatar.cc/64?img=47",
    tg: "https://i.pravatar.cc/64?img=11"
  };
  return sources[p.id] || "https://i.pravatar.cc/64";
}

function profileCard(p) {
  const badge = p.status === "reading"
    ? `<span class="badge badge--info">Reading</span>`
    : p.status === "read"
      ? `<span class="badge badge--success">Read</span>`
      : !p.ticked
        ? `<span class="badge">Left out</span>`
        : "";
  const meta = p.status === "read" ? p.readMeta : p.meta;
  const trailing = badge || (p.status === "read" ? "" : metaPills(meta));
  return `
    <article class="card">
      <div class="card-head">
        <img class="profile-avatar" src="${profileAvatar(p)}" alt="">
        <div class="head-copy">
          <div class="head-copy-top">
            <h2 class="card-title">${esc(p.platform)}</h2>
            <div class="head-copy-end">
              ${trailing}
              <button class="profile-remove" type="button" data-action="remove-profile" data-id="${p.id}" aria-label="Remove ${esc(p.platform)}">
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
              </button>
            </div>
          </div>
          <p class="card-sub">${esc(p.handle)}</p>
        </div>
      </div>
    </article>
  `;
}

function preview(p) {
  if (p.id === "web") {
    return `<div class="mock"><div class="chrome"><i></i><i></i><i></i><em>olgasiliveitup.com</em></div><div class="mock-pad"><p class="mock-h">Become Dubai’s Top 1% Real Estate Closer</p><p class="mock-s">Not motivation. Two mechanical processes.</p></div></div>`;
  }
  if (p.id === "li") {
    return `<div class="mock"><div class="banner"></div><div class="who-row"><span class="mono">OS</span><div><p class="mock-h" style="font-size:13px">Live It Up · Real Estate Training Academy</p><p class="mock-meta">Dubai, UAE</p></div></div></div>`;
  }
  if (p.id === "yt") {
    return `<div class="mock"><div class="mock-pad"><p class="mock-h" style="font-size:13px">Olga Sinenko Dubai Real Estate Sales Coach</p></div><div class="tiles3"><div class="tile"><span>Cold calling</span></div><div class="tile"><span>Off-plan</span></div><div class="tile"><span>Objections</span></div></div></div>`;
  }
  if (p.id === "ig") {
    return `<div class="mock"><div class="mock-pad"><p class="mock-h" style="font-size:13px">${esc(p.handle)}</p></div><div class="grid6">${Array.from({ length: 6 }, () => `<div class="cell"></div>`).join("")}</div></div>`;
  }
  if (p.id === "tg") {
    return `<div class="mock"><div class="mock-pad"><p class="mock-h" style="font-size:13px">Olga Sinenko. Sales Influence Coach</p></div><div class="bubbles"><div class="bubble">The line to use when they say they’ll wait.</div><div class="bubble">One action before your next call.</div></div></div>`;
  }
  return `<div class="mock"><div class="mock-pad"><p class="mock-h" style="font-size:13px">${esc(p.handle || p.platform)}</p><p class="mock-s">Public page</p></div></div>`;
}

function pageStyle() {
  const n = keptSamples().length;
  return `
    <div class="page">
      <div class="setup-page-header">${setupHeader(3, "Setup your Twin", "Train your twin with your knowledge and coaching style.")}</div>
      <p class="overline">Teaching style</p>
      <h1 class="page-title">What still sounds like you?</h1>
      <p class="lede">Samples come only from the profiles you ticked. Keep what represents you today. Anything older than three years stays out unless you keep it.</p>
      ${GROUPS.map(groupBlock).join("")}
      <div class="sticky-actions actions">
        ${state.styleStarted
          ? `<p class="status-line">${state.styleBuilt ? "Teaching style is in." : "Patterns are landing while the samples are read."}</p><button class="btn btn--strong" type="button" data-action="to-hello">Next</button>`
          : `<button class="btn btn--primary" type="button" data-action="build-style" ${n ? "" : "disabled"}>Build my teaching style · <span class="tabular">${n}</span></button>`}
      </div>
    </div>
  `;
}

function groupBlock(g) {
  const items = allSamples().filter((s) => s.group === g.id && sampleVisible(s));
  return `
    <section class="group">
      <div class="group-head">
        <h2 class="group-title">${esc(g.title)}</h2>
        <p>${esc(g.learn)}</p>
      </div>
      ${items.length ? `<div class="sample-grid">${items.map(sampleTile).join("")}</div>` : emptyGroup()}
    </section>
  `;
}

function emptyGroup() {
  return `
    <div class="empty-block">
      <h3>No whiteboard videos found</h3>
      <p class="hint" style="margin:0">A recording you upload is kept with the other samples.</p>
      <button class="btn btn--secondary" type="button" data-action="pick-upload" ${state.styleStarted ? "disabled" : ""}>Upload a recording</button>
      <input id="upload-wb" type="file" accept="video/*,audio/*" class="sr" aria-label="Upload a recording">
    </div>
  `;
}

function sampleTile(s) {
  const badge = s.status === "watching"
    ? `<span class="badge badge--info">Watching</span>`
    : s.status === "read"
      ? `<span class="badge badge--success">Read</span>`
      : s.older
        ? `<span class="badge badge--caution">Older than 3 years</span>`
        : "";
  return `
    <article class="card">
      <div class="card-body">
        <div class="thumb">${badge}<span class="play" aria-hidden="true"></span></div>
        <h3 class="task-title" style="margin-top:12px">${esc(s.title)}</h3>
        <p class="sample-meta tabular">${esc(s.source)} · ${esc(s.duration)} · ${esc(s.age)}</p>
        <label class="keep-row">
          <span class="tick"><input class="check" type="checkbox" data-change="keep" data-id="${s.id}" ${s.kept ? "checked" : ""} ${state.styleStarted ? "disabled" : ""}></span>
          ${s.kept ? "Kept" : "Left out"}
        </label>
      </div>
    </article>
  `;
}

const YT_LOOKS = [
  { id: "yt1", label: "Walkthrough", src: "../media/yt-frame-1.png" },
  { id: "yt2", label: "Masterclass", src: "../media/yt-frame-2.png" },
  { id: "yt3", label: "Roleplay", src: "../media/yt-frame-3.png" }
];

const CHARACTER_LOOKS = [
  { id: "comic", label: "Comic", src: "../media/char-comic.png" },
  { id: "3d", label: "3D", src: "../media/char-3d.png" },
  { id: "avatar", label: "Avatar", src: "../media/char-avatar.png" }
];

const LIBRARY_VOICES = [
  { id: "coaching", label: "Our coaching voice" },
  { id: "patient", label: "Your patient voice" },
  { id: "energetic", label: "Your Energetic voice" },
  { id: "stage", label: "Your on-Stage voice" },
  { id: "webinar", label: "Your Webinar voice" }
];

function presenceSrc() {
  if (state.presenceLook === "upload" && state.presenceUpload) return state.presenceUpload;
  const all = YT_LOOKS.concat(CHARACTER_LOOKS);
  const found = all.find((item) => item.id === state.presenceLook);
  return found ? found.src : YT_LOOKS[0].src;
}

function lookButton(item) {
  const on = state.presenceLook === item.id;
  return `
    <button class="look-tile${on ? " is-selected" : ""}" type="button" data-action="pick-look" data-id="${item.id}" aria-pressed="${on}" aria-label="${esc(item.label)}">
      <img src="${item.src}" alt="">
      <span>${esc(item.label)}</span>
    </button>
  `;
}

function pageHello() {
  if (state.callLive) {
    return `
      <div class="page page--find page--hello is-scroll">
        <canvas class="auth-confetti" aria-hidden="true"></canvas>
        <div class="find-stack is-wide">
          <h1 class="find-title">Congratulations! Your Twin is ready!</h1>
          <p class="find-subtitle">Say hello to your twin and interact with it!</p>
          ${pageCall()}
        </div>
      </div>
    `;
  }
  const chosenVoice = state.presenceVoice === "library"
    ? LIBRARY_VOICES.find((voice) => voice.id === state.presenceLibrary)
    : null;
  const libraryNote = chosenVoice ? chosenVoice.label : "Pick a voice we already have.";
  return setupShell(3, `
    <h1 class="page-title">You built your twin! Now it just needs your voice and avatar.</h1>
    <section class="presence-block">
      <div class="avatar-strip">
        <div class="avatar-intro">
          <h2 class="presence-heading">Avatar</h2>
          <p class="hint">From your videos, or a character</p>
          <label class="btn btn--secondary" for="presence-upload">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 9l5-5 5 5M12 4v12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Upload
          </label>
          <input id="presence-upload" class="sr" type="file" accept="image/*" aria-label="Upload an image">
        </div>
        <div class="avatar-row">
          ${YT_LOOKS.map((item) => lookButton(item)).join("")}
          ${CHARACTER_LOOKS.map((item) => lookButton(item)).join("")}
          ${state.presenceUpload ? lookButton({ id: "upload", label: "Yours", src: state.presenceUpload }) : ""}
        </div>
      </div>
    </section>
    <section class="presence-block">
      <h2 class="presence-heading">Voice</h2>
      <div class="voice-picks">
        <div class="voice-pick">
          <span class="voice-ico" aria-hidden="true"><svg viewBox="0 0 16 16"><path d="M3 6.5v3M6.25 4.5v7M9.5 3v10M12.75 5.5v5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></span>
          <span class="voice-copy">
            <b>Voice from library</b>
            <p>${libraryNote}</p>
          </span>
          <button class="btn btn--secondary" type="button" data-action="open-voices">Choose your voice modulation</button>
        </div>
      </div>
    </section>
    <div class="actions">
      <button class="btn btn--strong" type="button" data-action="presence-next">Meet my twin</button>
    </div>
  `, true, "", "Setup your Twin", "Train your twin with your knowledge and coaching style.");
}

let refineJob = { raf: 0, timers: [] };
let twinRevealDone = false;

function stopRefine() {
  cancelAnimationFrame(refineJob.raf);
  refineJob.raf = 0;
  refineJob.timers.forEach((id) => clearTimeout(id));
  refineJob.timers = [];
}

function mountRefineFrame() {
  stopRefine();
  const frame = document.querySelector(".refine-frame");
  if (!frame) return;
  const video = frame.querySelector("video");
  const canvas = frame.querySelector(".refine-frame__mosaic");
  const chip = frame.querySelector(".refine-frame__chip");
  const label = frame.querySelector(".refine-frame__label");
  const mark = frame.querySelector(".refine-frame__mark");
  const statusText = frame.querySelector(".refine-frame__sr");
  if (!video || !canvas) return;

  const STAGES = {
    queued: { blur: 4, sat: 0.6, scale: 1.04, opacity: 0.55 },
    generating: { blur: 1.5, sat: 0.8, scale: 1.02, opacity: 0.85 },
    refining: { blur: 0.5, sat: 0.95, scale: 1.005, opacity: 1 },
    complete: { blur: 0, sat: 1, scale: 1, opacity: 1 }
  };
  const TARGET = { queued: 0, generating: 0.5, refining: 0.875, complete: 1 };
  const LABELS = { queued: "Queued", generating: "Generating", refining: "Refining", complete: "Ready" };
  const LEVELS = [48, 32, 20, 12, 8, 5, 3, 2, 1];
  const EDGE = 28;
  const STRIPS = 14;
  const stageDuration = 400;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const sim = { p: 0, last: 0, key: "", w: 0, h: 0, levels: [], glint: null, sent: false, status: "queued" };
  const check = `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 8.2 6.4 11.2 12.5 4.8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const spin = `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 2.5a5.5 5.5 0 1 1-4.6 2.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`;

  const playIntro = () => {
    twinRevealDone = true;
    video.controls = false;
    video.loop = true;
    video.currentTime = 0;
    const started = video.play();
    if (started && started.catch) started.catch(() => {});
  };

  const showReady = () => {
    frame.dataset.resolved = "";
    if (chip) {
      refineJob.timers.push(setTimeout(() => {
        chip.hidden = true;
      }, 1200));
    }
    playIntro();
    mountTwinHello();
  };

  if (twinRevealDone) {
    frame.dataset.status = "complete";
    frame.dataset.mosaic = "";
    frame.dataset.resolved = "";
    delete frame.dataset.active;
    delete frame.dataset.sweep;
    if (chip) chip.hidden = true;
    playIntro();
    enableFrameTilt(frame);
    return;
  }

  const paintStage = (status) => {
    const stage = STAGES[status] || STAGES.generating;
    const mosaic = frame.hasAttribute("data-mosaic");
    frame.style.setProperty("--rf-blur", `${mosaic ? 0 : stage.blur}px`);
    frame.style.setProperty("--rf-sat", stage.sat);
    frame.style.setProperty("--rf-scale", mosaic ? 1 : stage.scale);
    frame.style.setProperty("--rf-opacity", stage.opacity);
  };

  const setStatus = (status) => {
    sim.status = status;
    frame.dataset.status = status;
    const active = status !== "complete";
    if (active) {
      frame.dataset.active = "";
      frame.dataset.sweep = "";
    } else {
      delete frame.dataset.active;
      delete frame.dataset.sweep;
    }
    frame.setAttribute("aria-label", LABELS[status]);
    frame.setAttribute("aria-busy", active ? "true" : "false");
    if (label) label.textContent = LABELS[status];
    if (statusText) statusText.textContent = LABELS[status];
    if (mark) {
      mark.dataset.kind = status === "complete" ? "complete" : "spin";
      mark.innerHTML = status === "complete" ? check : spin;
    }
    paintStage(status);
    wake();
  };

  const build = () => {
    const rect = canvas.getBoundingClientRect();
    if (rect.width < 2 || rect.height < 2) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const W = Math.max(1, Math.round(rect.width * dpr));
    const H = Math.max(1, Math.round(rect.height * dpr));
    const key = `${video.currentSrc}|${W}x${H}`;
    if (sim.key === key) return;
    const iw = video.videoWidth;
    const ih = video.videoHeight;
    if (!iw || !ih) return;
    sim.key = key;
    sim.w = W;
    sim.h = H;
    canvas.width = W;
    canvas.height = H;
    const cover = Math.max(W / iw, H / ih);
    const sw = W / cover;
    const sh = H / cover;
    const sx = (iw - sw) / 2;
    const sy = (ih - sh) / 2;
    const glint = canvas.getContext("2d");
    sim.glint = glint ? glint.createLinearGradient(0, 0, W, 0) : null;
    if (sim.glint) {
      [[0, 0], [0.08, 0.1], [0.2, 0.7], [0.32, 1], [0.68, 1], [0.8, 0.7], [0.92, 0.1], [1, 0]].forEach(([at, a]) => {
        sim.glint.addColorStop(at, `rgba(255, 255, 255, ${a})`);
      });
    }
    sim.levels = LEVELS.map((block) => {
      const b = block === 1 ? 1 : Math.max(2, Math.round(block * dpr));
      const full = document.createElement("canvas");
      full.width = W;
      full.height = H;
      const fc = full.getContext("2d");
      if (!fc) return full;
      if (b === 1) {
        fc.imageSmoothingEnabled = true;
        fc.imageSmoothingQuality = "high";
        fc.drawImage(video, sx, sy, sw, sh, 0, 0, W, H);
        return full;
      }
      const small = document.createElement("canvas");
      small.width = Math.max(1, Math.round(W / b));
      small.height = Math.max(1, Math.round(H / b));
      const sc = small.getContext("2d");
      if (sc) {
        sc.imageSmoothingEnabled = true;
        sc.imageSmoothingQuality = "high";
        sc.drawImage(video, sx, sy, sw, sh, 0, 0, small.width, small.height);
      }
      fc.imageSmoothingEnabled = false;
      fc.drawImage(small, 0, 0, W, H);
      return full;
    });
  };

  const tick = (now) => {
    const dt = Math.min(0.05, sim.last ? (now - sim.last) / 1000 : 0.016);
    sim.last = now;
    build();
    const n = Math.max(0, sim.levels.length - 1);
    const target = TARGET[sim.status] ?? sim.p;
    const rate = reduce || !n ? 1e9 : 1 / (n * (stageDuration / 1000));
    const step = rate * dt;
    if (target < sim.p) sim.p = target;
    else if (target - sim.p <= step) sim.p = target;
    else sim.p += step;
    const ctx = canvas.getContext("2d");
    if (ctx && n && sim.levels.length) {
      const L = sim.p * n;
      const i = Math.min(n, Math.floor(L + 1e-6));
      const frac = L - i;
      ctx.globalAlpha = 1;
      ctx.drawImage(sim.levels[i], 0, 0);
      if (i < n && frac > 0) {
        const edge = EDGE * Math.min(2, window.devicePixelRatio || 1);
        const front = frac * (sim.h + edge) - edge / 2;
        const top = Math.max(0, Math.floor(front - edge / 2));
        if (top > 0) ctx.drawImage(sim.levels[i + 1], 0, 0, sim.w, top, 0, 0, sim.w, top);
        const sh = edge / STRIPS;
        for (let k = 0; k < STRIPS; k += 1) {
          const y = front - edge / 2 + k * sh;
          if (y + sh <= 0 || y >= sim.h) continue;
          const t = 1 - (k + 0.5) / STRIPS;
          ctx.globalAlpha = t * t * (3 - 2 * t);
          const y0 = Math.max(0, y);
          const h0 = Math.min(sim.h, y + sh) - y0;
          if (h0 > 0) ctx.drawImage(sim.levels[i + 1], 0, y0, sim.w, h0, 0, y0, sim.w, h0);
        }
        ctx.globalAlpha = 1;
        if (!reduce && sim.glint && front > 0 && front < sim.h) {
          const dpr = Math.min(2, window.devicePixelRatio || 1);
          ctx.fillStyle = sim.glint;
          ctx.globalAlpha = 0.12;
          ctx.fillRect(0, front - 2 * dpr, sim.w, 4 * dpr);
          ctx.globalAlpha = 0.3;
          ctx.fillRect(0, front - dpr, sim.w, 2 * dpr);
          ctx.globalAlpha = 1;
        }
      }
    }
    const done = sim.p >= 1 && sim.status === "complete";
    if (done && !sim.sent) {
      sim.sent = true;
      showReady();
    }
    const keep = (!reduce && sim.status !== "complete") || Math.abs(target - sim.p) > 0.0005;
    refineJob.raf = keep ? requestAnimationFrame(tick) : 0;
    if (!keep) sim.last = 0;
  };

  const wake = () => {
    if (!refineJob.raf) refineJob.raf = requestAnimationFrame(tick);
  };

  let started = false;
  const begin = () => {
    if (started) return;
    started = true;
    frame.dataset.mosaic = "";
    paintStage(sim.status);
    const holds = [500, 1700, 1300];
    const order = ["queued", "generating", "refining", "complete"];
    let step = 0;
    const advance = () => {
      setStatus(order[step]);
      if (reduce) {
        sim.p = 1;
        showReady();
        return;
      }
      step += 1;
      if (step < order.length) refineJob.timers.push(setTimeout(advance, holds[step - 1] || 400));
    };
    advance();
  };

  const prime = () => {
    if (!video.videoWidth) return;
    const start = () => begin();
    const at = Math.min(0.12, (video.duration || 1) / 80);
    if (Math.abs(video.currentTime - at) < 0.02) start();
    else {
      video.addEventListener("seeked", start, { once: true });
      try { video.currentTime = at; } catch (err) { start(); }
    }
    refineJob.timers.push(setTimeout(start, 700));
  };

  if (video.readyState >= 2) prime();
  else video.addEventListener("loadeddata", prime, { once: true });
}

function pageCall() {
  const type = TYPES[state.coachingType];
  return `
    <div class="call-identity">
      <div class="refine-frame" role="img" aria-label="Queued" aria-busy="true" data-status="queued" data-active="" data-sweep="">
        <div class="refine-frame__media" aria-hidden="true">
          <div class="refine-frame__print">
            <video src="../media/twin-intro.mp4?v=2" playsinline muted preload="auto"></video>
          </div>
          <canvas class="refine-frame__mosaic"></canvas>
        </div>
        <div class="refine-frame__sweep" aria-hidden="true"></div>
        <div class="refine-frame__chip" aria-hidden="true">
          <span class="refine-frame__mark" data-kind="spin"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 2.5a5.5 5.5 0 1 1-4.6 2.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></span>
          <span class="refine-frame__label">Queued</span>
        </div>
        <span class="refine-frame__sr" role="status">Queued</span>
        <div class="refine-frame__info">
          <h1 class="refine-frame__name">Olga’s twin</h1>
          <p class="refine-frame__role">${esc(type.label)}</p>
        </div>
      </div>
      <div class="call-actions">
        <button class="btn btn--strong" type="button" data-action="talk-open">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 3.8h10a1 1 0 0 1 1 1V9.6a1 1 0 0 1-1 1H7.4L4.4 13V10.6H3a1 1 0 0 1-1-1V4.8a1 1 0 0 1 1-1Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>
          Ask my twin
        </button>
        <button class="btn btn--secondary" type="button" data-action="share-twin">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="11.25" cy="3.75" r="1.5" stroke="currentColor" stroke-width="1.5"/><circle cx="4.75" cy="8" r="1.5" stroke="currentColor" stroke-width="1.5"/><circle cx="11.25" cy="12.25" r="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M6.1 7.2 9.9 4.7M6.1 8.8l3.8 2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          Share
        </button>
        <button class="btn btn--secondary" type="button" data-action="go-studio">
          ${icon("setup")}
          Twin studio
        </button>
      </div>
    </div>
  `;
}

function pageCelebrate() {
  return setupShell(3, `
    <div class="celebrate">
      <canvas class="auth-confetti celebrate-confetti" aria-hidden="true"></canvas>
      <div class="celebrate-art" aria-hidden="true">
        <span class="orb orb-a"></span>
        <span class="orb orb-b"></span>
        <span class="orb orb-c"></span>
        <span class="orb orb-d"></span>
        <svg class="celebrate-wave" viewBox="0 0 140 48">
          <path d="M8 24h8M24 12v24M36 6v36M48 16v16M60 4v40M72 14v20M84 8v32M96 16v16M108 10v28M120 18v12" fill="none" stroke="white" stroke-width="4" stroke-linecap="round"/>
        </svg>
      </div>
      <h1 class="page-title">Congratulations</h1>
      <p class="lede">You have successfully built and review your Twin.</p>
      <p class="celebrate-ask">Are we ready to build a roleplay?</p>
      <p class="hint">We have few suggestions for you.</p>
      <div class="actions is-center">
        <button class="btn btn--strong" type="button" data-action="go-roleplays">Go to Roleplays</button>
      </div>
    </div>
  `, false, "", "Setup your Twin", "Train your twin with your knowledge and coaching style.");
}

function reviewBlock() {
  return `
    <p class="overline">Captured</p>
    <ul class="q-list">
      ${QUESTIONS.map((item) => `<li><b>${esc(item.source)}.</b> ${esc(item.q)}</li>`).join("")}
    </ul>
    <p class="hint" style="margin-top:16px">No score. It gets better as you add avatar modes.</p>
    <div class="actions">
      <button class="btn btn--strong" type="button" data-action="to-tasks">Continue</button>
      <button class="btn btn--secondary" type="button" data-action="rerecord">Re-record</button>
    </div>
  `;
}

function pageTasks() {
  const type = TYPES[state.coachingType];
  const n = state.selected.size;
  return `
    <div class="page">
      <div class="setup-page-header">${setupHeader(3, "Setup your Twin", "Train your twin with your knowledge and coaching style.")}</div>
      <p class="overline">Pick tasks</p>
      <h1 class="page-title">What should your twin take on?</h1>
      <article class="card type-banner" style="margin-top:24px">
        <p class="overline">Coaching type</p>
        <p>${esc(type.banner)}</p>
        <div class="type-row">
          <div class="badges">${type.tags.map((t) => `<span class="badge">${esc(t)}</span>`).join("")}</div>
          <button class="link" type="button" data-action="toggle-type" aria-expanded="${state.typeMenu}">Not right? Change</button>
          ${state.typeMenu ? typeMenu() : ""}
        </div>
      </article>
      ${tierBlock("live")}
      ${tierBlock("content")}
      ${tierBlock("growth")}
      <div class="sticky-actions actions">
        <button class="btn btn--primary" type="button" data-action="save-tasks" ${n ? "" : "disabled"}>Save <span class="tabular">${n}</span> tasks &amp; go to home</button>
      </div>
    </div>
  `;
}

function typeMenu() {
  return `
    <div class="menu" role="menu">
      ${Object.entries(TYPES).map(([id, t]) => `
        <button type="button" role="menuitem" data-action="set-type" data-id="${id}" aria-current="${id === state.coachingType}">
          ${esc(t.label)}
          ${id === state.coachingType ? "<span aria-hidden=\"true\">✓</span>" : ""}
        </button>
      `).join("")}
    </div>
  `;
}

function tierBlock(tier) {
  const tasks = visibleTasks(tier);
  const hidden = tasksFor(tier).length - tasks.length;
  return `
    <section class="tier">
      <div class="tier-head">
        <h2 class="group-title">${TIER_LABEL[tier]}</h2>
        ${hidden > 0 ? `<button class="btn btn--ghost btn--sm" type="button" data-action="show-more" data-tier="${tier}">Show more</button>` : ""}
      </div>
      <div class="task-grid">${tasks.map(taskCard).join("")}</div>
    </section>
  `;
}

function taskCard(task, opts) {
  const on = state.selected.has(task.id);
  const flipped = state.flipped === task.id;
  const dots = ["k", "s", "a"].map((key) => `<span class="dot ${dotOn(task, key) ? "dot--on" : ""}"></span>`).join("");
  const face = flipped
    ? `<div>${(task.preview || []).map(previewLine).join("")}</div>`
    : `<div>
        <h3 class="task-title">${esc(task.title)}</h3>
        <p class="task-copy">${esc(task.blurb)}</p>
        ${task.needs && !dotOn(task, "a") ? `<p class="needs">${esc(task.needsCopy)}</p>` : ""}
        <div class="ready"><span class="dots" aria-hidden="true">${dots}</span><span>Knowledge · Style · Avatar</span></div>
      </div>`;
  return `
    <article class="card ${on ? "card--selected" : ""}">
      <div class="card-body">${face}</div>
      <div class="card-foot">
        <label class="keep-row" style="margin:0;flex:1">
          <span class="tick"><input class="check" type="checkbox" data-change="select-task" data-id="${task.id}" ${on ? "checked" : ""}></span>
          Use this
        </label>
        <button class="btn btn--ghost btn--sm" type="button" data-action="flip" data-id="${task.id}">${flipped ? "Back" : "Preview"}</button>
        ${opts && opts.open ? `<button class="btn btn--strong btn--sm" type="button" data-action="open-task" data-id="${task.id}">Open</button>` : ""}
      </div>
    </article>
  `;
}

function previewLine(line) {
  const idx = line.indexOf(": ");
  if (idx > 0 && idx < 24) {
    return `<p class="preview-line"><b>${esc(line.slice(0, idx))}</b> ${esc(line.slice(idx + 2))}</p>`;
  }
  return `<p class="preview-line">${esc(line)}</p>`;
}

function gateIllustrationHome() {
  return `
    <svg class="gate-illustration" viewBox="0 0 220 128" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="212" height="120" rx="12" fill="white" fill-opacity="0.95"/>
      <circle cx="18" cy="18" r="3" fill="#E4E4E4"/>
      <circle cx="28" cy="18" r="3" fill="#E4E4E4"/>
      <circle cx="38" cy="18" r="3" fill="#E4E4E4"/>
      <rect x="16" y="34" width="60" height="9" rx="4.5" fill="#C4C4C4"/>
      <rect x="16" y="49" width="90" height="6" rx="3" fill="#E9E9E9"/>
      <rect x="16" y="60" width="70" height="6" rx="3" fill="#E9E9E9"/>
      <rect x="150" y="34" width="54" height="22" rx="11" fill="#C4C4C4"/>
      <rect x="16" y="80" width="66" height="34" rx="8" fill="#F7F7F7"/>
      <rect x="92" y="80" width="66" height="34" rx="8" fill="#F7F7F7"/>
      <rect x="168" y="80" width="36" height="34" rx="8" fill="#F0F0F0"/>
      <rect x="24" y="88" width="40" height="5" rx="2.5" fill="#D4D4D4"/>
      <rect x="24" y="98" width="28" height="5" rx="2.5" fill="#E4E4E4"/>
      <rect x="100" y="88" width="40" height="5" rx="2.5" fill="#D4D4D4"/>
      <rect x="100" y="98" width="28" height="5" rx="2.5" fill="#E4E4E4"/>
    </svg>
  `;
}

function gateIllustrationAnalytics() {
  return `
    <svg class="gate-illustration" viewBox="0 0 220 128" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="212" height="120" rx="12" fill="white" fill-opacity="0.95"/>
      <circle cx="18" cy="18" r="3" fill="#E4E4E4"/>
      <circle cx="28" cy="18" r="3" fill="#E4E4E4"/>
      <circle cx="38" cy="18" r="3" fill="#E4E4E4"/>
      <rect x="16" y="32" width="56" height="9" rx="4.5" fill="#C4C4C4"/>
      <rect x="150" y="30" width="22" height="13" rx="6.5" fill="#F0F0F0"/>
      <rect x="178" y="30" width="26" height="13" rx="6.5" fill="#C4C4C4"/>
      <rect x="16" y="54" width="58" height="56" rx="8" fill="#F7F7F7"/>
      <rect x="81" y="54" width="58" height="56" rx="8" fill="#F7F7F7"/>
      <rect x="146" y="54" width="58" height="56" rx="8" fill="#F7F7F7"/>
      <rect x="24" y="64" width="30" height="8" rx="4" fill="#C4C4C4"/>
      <rect x="89" y="64" width="30" height="8" rx="4" fill="#C4C4C4"/>
      <rect x="154" y="64" width="30" height="8" rx="4" fill="#C4C4C4"/>
      <path d="M26 98 L34 90 L41 96 L50 82 L58 88" stroke="#1A6739" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M91 92 L99 98 L106 88 L115 94 L123 84" stroke="#CE2C33" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M156 96 L164 86 L171 92 L180 80 L188 90" stroke="#1A6739" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
}

function gateIllustrationRoleplay() {
  return `
    <svg class="gate-illustration" viewBox="0 0 220 128" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="212" height="120" rx="12" fill="white" fill-opacity="0.95"/>
      <circle cx="18" cy="18" r="3" fill="#E4E4E4"/>
      <circle cx="28" cy="18" r="3" fill="#E4E4E4"/>
      <circle cx="38" cy="18" r="3" fill="#E4E4E4"/>
      <rect x="16" y="32" width="68" height="9" rx="4.5" fill="#C4C4C4"/>
      <rect x="16" y="50" width="188" height="24" rx="12" fill="#F7F7F7"/>
      <rect x="28" y="59" width="70" height="6" rx="3" fill="#D4D4D4"/>
      <rect x="160" y="54" width="36" height="16" rx="8" fill="#C4C4C4"/>
      <rect x="16" y="86" width="86" height="30" rx="8" fill="#F0F0F0"/>
      <rect x="110" y="86" width="86" height="30" rx="8" fill="#F7F7F7"/>
      <rect x="24" y="94" width="40" height="5" rx="2.5" fill="#C4C4C4"/>
      <rect x="24" y="103" width="60" height="5" rx="2.5" fill="#DCDCDC"/>
      <rect x="118" y="94" width="40" height="5" rx="2.5" fill="#B8B8B8"/>
      <rect x="118" y="103" width="60" height="5" rx="2.5" fill="#D4D4D4"/>
    </svg>
  `;
}

const GATE_COPY = {
  home: {
    title: "See your Home dashboard come to life",
    sub: "Your twin's activity, quick asks, and recommended roleplays all show up here once it's built.",
    illustration: gateIllustrationHome
  },
  analytics: {
    title: "Track how your twin performs",
    sub: "Calls, completions, and learner trends appear here once your twin is built.",
    illustration: gateIllustrationAnalytics
  },
  roleplay: {
    title: "Practice calls your twin can run",
    sub: "Create and launch roleplays with your twin once it's built.",
    illustration: gateIllustrationRoleplay
  }
};

function pageGate() {
  const titles = { home: "Home", analytics: "Analytics", roleplay: "Roleplay" };
  const nav = activeNav() in GATE_COPY ? activeNav() : "home";
  const copy = GATE_COPY[nav];
  return `
    <div class="page page--gate">
      ${screenTitle(titles[nav] || "Home")}
      <div class="find-stack gate-stack">
        <div class="gate-card">
          <div class="gate-hero" aria-hidden="true">
            ${copy.illustration()}
          </div>
          <div class="gate-body">
            <h2 class="card-title gate-title">${esc(copy.title)}</h2>
            <p class="card-sub" style="margin-top:8px">${esc(copy.sub)}</p>
            <div class="gate-actions">
              <button class="btn btn--strong" type="button" data-action="gate-build">Build my Twin</button>
              <button class="btn btn--secondary" type="button" data-action="gate-signup">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function dayGreeting() {
  const hour = new Date().getHours();
  const part = hour < 12 ? "morning" : hour < 17 ? "afternoon" : "evening";
  return "Good " + part + ", Olga!";
}

function askMode() {
  return TWIN_ASK_MODES.find((item) => item.id === state.askMode) || TWIN_ASK_MODES[1];
}

function askModeIcon(id) {
  if (id === "one") {
    return `<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="5.5" cy="5.2" r="1.6" fill="none" stroke="currentColor" stroke-width="1.3"/><circle cx="11" cy="5.8" r="1.25" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M2.4 12.4c.5-1.8 1.7-2.6 3.1-2.6s2.6.8 3.1 2.6M9.2 9.8c1.1-.15 2.2.35 2.8 1.7" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`;
  }
  if (id === "video") {
    return `<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="1.75" y="4.25" width="8.5" height="7.5" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M10.25 6.4 14 4.6v6.8l-3.75-1.8V6.4Z" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>`;
  }
  if (id === "report") {
    return `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13.25V9M7.5 13.25v-7M12 13.25V5.5" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`;
  }
  return `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 3.75h7.1c.9 0 1.65.75 1.65 1.65v3.1c0 .9-.75 1.65-1.65 1.65H6.1L3.4 12.6V3.75Z" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>`;
}

const ASK_TOPICS = [
  { id: "live", label: "Live practice", prompt: "Run a live practice call with a buyer who wants to wait for prices to drop." },
  { id: "linkedin", label: "LinkedIn post in your voice", prompt: "Write a LinkedIn post in my voice." },
  { id: "split", label: "Commission-split answers for your Q&A twin", prompt: "Draft commission-split answers for my Q&A twin." },
  { id: "carousel", label: "Carousel on off-plan hesitation", prompt: "Make a carousel on off-plan hesitation." }
];

// "+" in My conversations: a fresh chat opens on the same hero as Twin Studio.
function pageAskTwin() {
  return `
    <div class="page page--library page--twin-profile page--ask">
      <header class="lib-head">
        <h1 class="lib-title"><span class="lib-mark">${icon("conversations")}</span>New chat</h1>
      </header>
      ${twinHero()}
    </div>
  `;
}

// Reels shown on Home: three cuts from the uploaded short (it plays on hover, muted).
const HOME_REELS = [
  // Only the first card has its video so far; the other two use a still for reference until theirs arrive.
  { id: "reel-dip", title: "Three replies to “I’ll wait for the dip”", start: 4, length: 15, poster: "reel-1.jpg", video: true },
  { id: "reel-fee", title: "What to say when a seller asks for one percent", length: 15, image: "yt-frame-2.png" },
  { id: "reel-cold", title: "The 40-second rule on a cold call", length: 15, image: "yt-frame-3.png" }
];

function reelCard(reel) {
  const done = !!state.reelsPublished[reel.id];
  return `
    <article class="reel-card">
      <div class="reel-media"${reel.video ? ` data-reel-start="${reel.start}" data-reel-length="${reel.length}"` : ""}>
        ${reel.video
          ? `<video class="reel-video" src="../media/reel.mp4" poster="../media/${reel.poster}" muted loop playsinline preload="metadata" aria-hidden="true"></video>`
          : `<img class="reel-video" src="../media/${reel.image}" alt="">`}
        <span class="reel-time"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6 4.5v7l6-3.5-6-3.5Z" fill="currentColor"/></svg>0:${String(reel.length).padStart(2, "0")}</span>
        <div class="reel-body">
          <h3 class="reel-title">${esc(reel.title)}</h3>
          <div class="reel-actions">
            ${done
              ? `<span class="reel-done"><svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m3.5 8.5 3 3 6-7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg> Published</span>`
              : `<button class="btn btn--strong btn--sm" type="button" data-action="reel-publish" data-id="${reel.id}">Publish</button>`}
            <button class="btn btn--secondary btn--sm" type="button" data-action="open-task" data-id="avatar-video">Review</button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function pageGenVideos() {
  const reels = state.customReels.concat(HOME_REELS);
  return `
    <div class="page page--library page--twin-profile page--videos">
      <div class="lib-head">
        <h1 class="lib-title"><span class="lib-mark">${icon("video")}</span>Gen videos</h1>
        <div class="lib-tools">
          <button class="btn btn--strong btn--sm" type="button" data-action="videos-create">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3.5v9M3.5 8h9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            Create video
          </button>
        </div>
      </div>
      <article class="twin-hero">
        <div class="twin-hero-top">
          <video class="twin-hero-avatar" src="../media/twin-listening.mp4" autoplay muted loop playsinline preload="auto" aria-hidden="true"></video>
          <div class="twin-hero-copy">
            <div class="twin-hero-name"><h2>Let’s make a video</h2></div>
            <p><b class="twin-hero-prompt">Tell me what the video should be about!</b></p>
          </div>
        </div>
        <form class="home-ask twin-hero-ask" id="videos-ask-form">
          <label class="sr" for="videos-ask">Describe your video</label>
          <div class="twin-ask-field">
            <textarea class="home-ask-input" id="videos-ask" rows="1" placeholder="Describe a video, like “Three replies to ‘I’ll wait for the dip’”">${esc(state.videosAsk)}</textarea>
          </div>
          <div class="twin-hero-ask-row twin-hero-ask-row--end">
            <button class="btn btn--strong home-ask-submit" type="submit" aria-label="Create video">
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 13V3M4 7l4-4 4 4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
          </div>
        </form>
      </article>
      <div class="twin-bots-head">
        <h2 class="page-title">Your videos</h2>
        <p class="home-meta">${reels.length} shorts · made from your videos</p>
      </div>
      <div class="home-reels">
        ${reels.map(reelCard).join("")}
      </div>
    </div>
  `;
}

// Usage credit: what your learners used this month across your twins and roleplays.
const USAGE = {
  credit: { used: 1420, total: 2000, resets: "Nov 1" },
  learners: 38,
  items: [
    { id: "voice-min", label: "Voice minutes", unit: "min", twin: 1940, role: 1920 },
    { id: "voice-conv", label: "Voice conversations", unit: "", twin: 238, role: 174 },
    { id: "video-conv", label: "Video conversations", unit: "", twin: 71, role: 55 }
  ]
};

function usageCard() {
  const fmt = (n) => n.toLocaleString("en-US");
  const c = USAGE.credit;
  const pct = Math.round((c.used / c.total) * 100);
  return `
    <section class="card usage-card" aria-label="Usage credit">
      <div class="usage-head">
        <div>
          <h2 class="usage-title">Usage credit</h2>
          <p class="usage-sub">Conversations from ${USAGE.learners} learners across your twins and roleplays this month.</p>
        </div>
        <p class="usage-reset">Resets ${esc(c.resets)}</p>
      </div>
      <div class="usage-credit">
        <p class="usage-left"><b class="tabular">${fmt(c.total - c.used)}</b> credits left</p>
        <div class="usage-meter" role="img" aria-label="${pct}% of credits used"><span style="width:${pct}%"></span></div>
        <p class="usage-meta tabular">${fmt(c.used)} of ${fmt(c.total)} used</p>
      </div>
      <div class="usage-stats">
        ${USAGE.items.map((item) => {
          const total = item.twin + item.role;
          const twinPct = Math.round((item.twin / total) * 100);
          return `
            <article class="usage-stat">
              <p class="overline">${esc(item.label)}</p>
              <p class="usage-value tabular">${fmt(total)}${item.unit ? `<span class="usage-unit"> ${item.unit}</span>` : ""}</p>
              <div class="usage-split" role="img" aria-label="Twin ${twinPct}%, roleplay ${100 - twinPct}%"><span style="width:${twinPct}%"></span></div>
              <p class="usage-legend tabular"><span class="usage-dot usage-dot--twin" aria-hidden="true"></span>Twin ${fmt(item.twin)}<span class="usage-dot usage-dot--role" aria-hidden="true"></span>Roleplay ${fmt(item.role)}</p>
            </article>`;
        }).join("")}
      </div>
    </section>
  `;
}

// Usage credit and the items that need Olga. They now live on the Settings screen.
function homeBody() {
  // Action needed: any roleplay or twin that wants Olga. A red flag means a learner reported an issue.
  const everyPlay = liveTasks();
  const draft = everyPlay.find((task) => !task.pre);
  const playRow = (id) => sharedRowById(id);
  const twin = (id) => twinBots().find((bot) => bot.id === id);
  const items = [];
  if (playRow("wait-and-see")) items.push({ kind: "play", task: Object.assign(sharedCardTask(playRow("wait-and-see")), { flag: "Issue reported" }) });
  if (twin("objection-handling")) items.push({ kind: "twin", bot: Object.assign({}, twin("objection-handling"), { flag: "2 issues reported" }) });
  if (draft) items.push({ kind: "draft", task: draft });
  const flagged = items.filter((item) => (item.task || item.bot).flag).length;
  const meta = items.length + (items.length === 1 ? " item" : " items") + (flagged ? " · " + flagged + " flagged" : "");
  // One row per item: photo, title, what it is, then either a red flag or Configure.
  const row = (item) => {
    const x = item.task || item.bot;
    const face = item.kind === "twin" ? presenceSrc() : item.kind === "draft" ? roleLookSrc(draftFromTask(x).look) : (x.clientFace || PERSONAS[0].src);
    const action = item.kind === "twin" ? "twin-bot-open" : item.kind === "draft" ? "role-configure" : "role-open";
    const kind = item.kind === "twin" ? "Twin" : item.kind === "draft" ? "Draft roleplay" : "Roleplay";
    return `
      <li class="act-row${x.flag ? " is-flagged" : ""}">
        <button class="act-main" type="button" data-action="${action}" data-id="${esc(x.id)}">
          <img class="act-face" src="${esc(face)}" alt="">
          <span class="act-text">
            <span class="act-title">${esc(x.title)}</span>
            <span class="act-sub"><b>${esc(kind)}</b> · ${esc(x.blurb)}</span>
          </span>
        </button>
        ${x.flag ? flagBadge(x.flag) : item.kind === "draft" ? `<button class="btn btn--secondary btn--sm" type="button" data-action="role-configure" data-id="${esc(x.id)}">${sparklesIcon()} Configure</button>` : ""}
        <button class="btn btn--ghost btn--icon btn--sm rp-row-more" type="button" id="role-menu-${esc(x.id)}" data-action="role-row-menu" data-id="${esc(x.id)}" aria-label="Actions for ${esc(x.title)}" aria-haspopup="menu" aria-expanded="${state.roleMenuId === x.id}">
          <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="3.25" r="1.15" fill="currentColor"/><circle cx="8" cy="8" r="1.15" fill="currentColor"/><circle cx="8" cy="12.75" r="1.15" fill="currentColor"/></svg>
        </button>
      </li>`;
  };
  const idOf = (item) => (item.task || item.bot).id;
  const openItem = items.find((item) => idOf(item) === state.roleMenuId);
  const menu = !openItem ? "" : openItem.kind === "twin" ? twinBotMenu(openItem.bot) : openItem.kind === "draft" ? roleDraftMenu(openItem.task) : roleCardMenu(openItem.task, false);
  return `
      ${usageCard()}
      <section class="home-section">
        <div class="home-section-head">
          <h2 class="group-title">Your action needed</h2>
          <p class="home-meta">${esc(meta)}</p>
        </div>
        <ul class="act-list">
          ${items.map(row).join("")}
        </ul>
      </section>
      ${menu}
  `;
}

function pageHomeReady() {
  return `
    <div class="page page--home">
      <header class="lib-head">
        <h1 class="lib-title"><span class="lib-mark">${icon("home")}</span>${esc(dayGreeting())}</h1>
      </header>
      ${homeBody()}
    </div>
  `;
}

function pageHome() {
  if (state.accountReady || state.twinReady) return pageHomeReady();
  const suggested = state.suggestions.filter((s) => !state.dismissed.has(s.id) && !state.pinned.some((p) => p.id === s.id));
  return `
    <div class="page page--stage page--nav">
      ${screenTitle("Home")}
      <div class="stage">
        <h1 class="stage-title">What should your twin do today?</h1>
        <form class="ask-pill" id="ask-form">
          <label class="sr" for="composer">What should your twin do today?</label>
          <input class="ask-pill-input" id="composer" value="${esc(state.composer)}" placeholder="Describe a task for your twin" autocomplete="off">
          <button class="ask-pill-send" type="submit" aria-label="Ask">
            <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 12.5V3.5M4.5 7 8 3.5 11.5 7" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </form>
        <p class="stage-note">Ask in your own words. It becomes a task on this page.</p>
      </div>
      ${suggested.length ? `
        <section class="tier">
          <h2 class="group-title">Suggested</h2>
          <div class="task-grid" style="margin-top:12px">
            ${suggested.map(suggestionCard).join("")}
          </div>
        </section>
      ` : ""}
      ${homeTier("live")}
      ${homeTier("content")}
      ${homeTier("growth")}
      ${state.asks.length ? `
        <section class="tier">
          <h2 class="group-title">From your asks</h2>
          <div class="row-scroll" style="margin-top:12px">
            ${state.asks.map(homeTile).join("")}
          </div>
        </section>
      ` : ""}
    </div>
  `;
}

function suggestionCard(s) {
  return `
    <article class="card">
      <div class="card-body">
        <span class="badge">${esc(TIER_LABEL[s.tier] || s.tier)}</span>
        <h3 class="task-title" style="margin-top:8px">${esc(s.title)}</h3>
        <p class="reason">${esc(s.reason)}</p>
      </div>
      <div class="card-foot">
        <button class="btn btn--ghost btn--sm" type="button" data-action="dismiss" data-id="${s.id}">Dismiss</button>
        <button class="btn btn--secondary btn--sm" type="button" data-action="pin" data-id="${s.id}">Pin</button>
      </div>
    </article>
  `;
}

function homeTier(tier) {
  const chosen = tasksFor(tier).filter((t) => state.selected.has(t.id)).map((t) => ({ ...t, tier }));
  const extra = state.pinned.filter((t) => t.tier === tier);
  const tiles = chosen.concat(extra);
  if (!tiles.length) return "";
  return `
    <section class="tier">
      <h2 class="group-title">${TIER_LABEL[tier]}</h2>
      <div class="row-scroll" style="margin-top:12px">
        ${tiles.map(homeTile).join("")}
      </div>
    </section>
  `;
}

function homeTile(task) {
  return `
    <div class="task-tile">
      <article class="card">
        <button class="tile-hit" type="button" data-action="open-task" data-id="${task.id}">
          <span class="badge">${esc(task.tier === "ask" ? "Your ask" : (TIER_LABEL[task.tier] || "Task"))}</span>
          <span class="task-title">${esc(task.title)}</span>
        </button>
      </article>
    </div>
  `;
}

function pageRun() {
  const model = runModel();
  if (!model) return pageHome();
  return `
    <div class="page page--run">
      <header class="lib-head">
        <h1 class="lib-title">
          <button class="lib-mark lib-mark--button" type="button" data-action="go-home" aria-label="Back to roleplay">${icon("back")}</button>
          ${esc(model.title)}
        </h1>
      </header>
      <p class="overline" style="margin-bottom:var(--tt-space-6)">First run</p>
      <p class="ai-mark">AI twin of Olga Sinenko</p>
      <div class="run-grid" style="margin-top:24px">
        <section class="card">
          <div class="setup-fields">
            ${model.fields.map(fieldBlock).join("")}
          </div>
          <div class="card-foot">
            <button class="btn btn--secondary" type="button" data-action="edit-rules">Edit rules</button>
            <button class="btn btn--strong" type="button" data-action="copy-link" data-link="${esc(model.share)}">Copy practice link</button>
          </div>
        </section>
        <section class="card">
          <div class="transcript" id="transcript">${transcriptHTML(model)}</div>
        </section>
      </div>
    </div>
  `;
}

function fieldBlock(f) {
  const value = state.runFields[f.key] != null ? state.runFields[f.key] : f.value;
  const control = f.select
    ? `<select class="input" id="field-${f.key}" data-field="${f.key}">
        <option ${value.startsWith("Easy") ? "selected" : ""}>Easy · the buyer objects once</option>
        <option ${value.startsWith("Medium") ? "selected" : ""}>Medium · the buyer objects twice</option>
        <option ${value.startsWith("Hard") ? "selected" : ""}>Hard · the buyer holds the objection</option>
      </select>`
    : value.length > 42
      ? `<textarea class="input" id="field-${f.key}" data-field="${f.key}" rows="2">${esc(value)}</textarea>`
      : `<input class="input" id="field-${f.key}" data-field="${f.key}" value="${esc(value)}">`;
  return `
    <div class="field" style="margin-top:0">
      <div class="tag-row">
        <label for="field-${f.key}">${esc(f.label)}</label>
        ${f.tag ? `<button class="link" type="button" data-action="open-source" data-source="${esc(f.tag)}" style="font-size:12px">${esc(f.tag)}</button>` : ""}
      </div>
      ${control}
    </div>
  `;
}

const DEMO_CHECKPOINT = 4;

// Each roleplay plays its own client. These two follow the roleplay prompts.
const DEMO_SCRIPTS = {
  "wait-and-see": [
    { who: "twin", text: "The market has basically stopped. I’ll wait for prices to hit the bottom, then I’ll buy." },
    { who: "student", text: "That’s fair. What’s making you want to wait, besides the news?" },
    { who: "twin", text: "I keep hearing negative news about Dubai. I’d rather wait until things calm down." },
    { who: "student", text: "Understood. What made you start looking in the first place?" },
    { who: "twin", text: "Inflation and taxes at home are eating into my savings. I want something that grows." },
    { who: "student", text: "Would it help to see real sales and rental data, with no pressure to buy?" }
  ],
  "options-collector": [
    { who: "twin", text: "Can you just send me some options?" },
    { who: "student", text: "Happy to help. You probably have plenty of brochures already. Do you really want more?" },
    { who: "twin", text: "Ha, fair. My WhatsApp is full of them." },
    { who: "student", text: "What are you hoping this investment does for you over the next few years?" },
    { who: "twin", text: "Honestly, build something for the future. My salary alone won’t give my family security." },
    { who: "student", text: "Could we do a short Zoom to compare the offers you already have?" }
  ]
};

// Who the learner is talking to: the roleplay's own client, with their photo.
function demoPersona(taskId) {
  if (taskId === "role-draft") {
    const d = state.roleDraft || freshRoleDraft();
    return { name: d.name || "Client", face: roleLookSrc(d.look) };
  }
  const shared = sharedRowById(taskId);
  if (shared) return { name: shared.clientName || shared.client || "Client", face: shared.clientFace || PERSONAS[0].src };
  const task = taskById(taskId);
  if (task) {
    const d = draftFromTask(task);
    return { name: d.name || "Client", face: roleLookSrc(d.look) };
  }
  return { name: "Client", face: PERSONAS[0].src };
}

function demoModel(taskId) {
  const model = demoModelBase(taskId);
  if (!model.persona) model.persona = demoPersona(taskId);
  return model;
}

// A twin's practice call: the learner asks, Olga's twin answers from the twin's own Q&A.
function demoTwinModel(taskId) {
  const bot = taskId === TWIN_ALL.id ? TWIN_ALL : twinBots().find((item) => item.id === taskId);
  if (!bot) return null;
  const qa = botQA(bot);
  const lines = [{ who: "twin", text: BOT_GREETING }];
  qa.slice(0, 3).forEach(([q, a], i) => {
    lines.push({ who: "student", text: q });
    if (i < 2) lines.push({ who: "twin", text: a });
  });
  return { title: bot.title, lead: "Olga’s twin", lines, isTwin: true, persona: { name: "Olga’s twin", face: presenceSrc() } };
}

function demoModelBase(taskId) {
  const twinModel = demoTwinModel(taskId);
  if (twinModel) return twinModel;
  if (DEMO_SCRIPTS[taskId]) {
    const row = sharedRowById(taskId);
    return { title: row ? row.title : "Practice call", lead: "Client · AI", lines: DEMO_SCRIPTS[taskId] };
  }
  if (taskId === "role-draft") {
    const draft = state.roleDraft || freshRoleDraft();
    const opening = (draft.opening || "").trim() || roleOpeningLine(draft);
    const scene = ((draft.scenario || "").split("\n").map((line) => line.trim()).find(Boolean) || "I want to wait before I decide.").replace(/\s+/g, " ");
    const title = (draft.title || "").trim() || roleAutoTitle(draft) || "Try roleplay";
    return {
      title,
      lead: "Lead · AI",
      lines: [
        { who: "twin", text: opening, source: "This roleplay" },
        { who: "student", text: "Can you say a bit more about what’s holding you back?" },
        { who: "twin", text: scene, source: "This scenario" },
        { who: "student", text: "If we look at that together, what would make this call worth your time?" },
        { who: "twin", text: "Show me. I’m listening, but I’m not deciding today.", source: "This roleplay" },
        { who: "student", text: "I’ll keep it to one number, then you can tell me if it’s worth another look." }
      ]
    };
  }
  if (taskId === "objection") {
    return {
      title: "Objection-handling roleplay",
      lead: "Off-plan lead · AI",
      lines: [
        { who: "twin", text: "Honestly, I think prices drop next year. Why would I buy off-plan now?", source: "Off-plan objections, explained · 02:10" },
        { who: "student", text: "Fair question. What would you do with the money while you wait?" },
        { who: "twin", text: "Keep it in the bank. At least it’s safe there.", source: "Objection roleplay session · 07:15" },
        { who: "student", text: "If you wait a year, you pay another year of rent and lose today’s payment plan. Can I show you both numbers side by side?" },
        { who: "twin", text: "Go on, then. Show me.", source: "Hesitant buyer roleplay · 0:42" },
        { who: "student", text: "Here’s the payment plan next to a year of rent. Which one feels heavier to you?" }
      ]
    };
  }
  const task = taskById(taskId);
  const shared = sharedRowById(taskId);
  return {
    title: task ? task.title : (shared ? shared.title : "Practice call"),
    lead: "Lead · AI",
    lines: [
      { who: "twin", text: "Who gave you my number? I’m not selling.", source: "Cold-calling walkthrough · 03:40" },
      { who: "student", text: "Fair — I’ll be quick. Two owners on your street sold above asking last month." },
      { who: "twin", text: "I’m not interested. Take me off your list.", source: "Cold-calling walkthrough · 06:12" },
      { who: "student", text: "Understood. Can I text you the two comps, no calls after?" },
      { who: "twin", text: "…Fine. Text them.", source: "Live Q&A with agents · 40:10" },
      { who: "student", text: "Sent. I’ll follow up in two weeks, not before." }
    ]
  };
}

function demoVote(vote) {
  const up = vote === "up";
  return `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="${up ? "M7 11v9H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h3zm0 0 4.2-6.3A1.5 1.5 0 0 1 14 5.6V9h4.2a2 2 0 0 1 2 2.3l-1 6.5a2 2 0 0 1-2 1.7H7" : "M7 13V4H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h3zm0 0 4.2 6.3A1.5 1.5 0 0 0 14 18.4V15h4.2a2 2 0 0 0 2-2.3l-1-6.5a2 2 0 0 0-2-1.7H7"}" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`;
}

function demoLine(line, index, persona) {
  const twin = line.who === "twin";
  if (!twin) {
    const label = line.who === "you" ? "You" : "Student";
    return `
      <div class="demo-line is-lead">
        <p class="demo-who">${esc(label)}</p>
        <div class="demo-bubble">${esc(line.text)}</div>
      </div>
    `;
  }
  const mark = state.demoMarks[index] || "";
  return `
    <div class="demo-line is-twin">
      <p class="demo-who">${esc(persona ? persona.name : "Client")}</p>
      <div class="demo-bubble">${esc(line.text)}</div>
      <div class="demo-votes">
        <button class="demo-vote${mark === "up" ? " is-on" : ""}" type="button" data-action="demo-vote" data-id="${index}" data-vote="up" aria-label="Thumbs up" aria-pressed="${mark === "up"}">${demoVote("up")}</button>
        <button class="demo-vote${mark === "down" ? " is-on" : ""}" type="button" data-action="demo-vote" data-id="${index}" data-vote="down" aria-label="Thumbs down" aria-pressed="${mark === "down"}">${demoVote("down")}</button>
      </div>
    </div>
  `;
}

function startDemoReveal() {
  clearInterval(demoTimer);
  demoTimer = setInterval(() => {
    if (!state.demoTaskId || state.demoPromptOpen || state.demoEnded) return;
    const model = demoModel(state.demoTaskId);
    if (state.demoReveal >= model.lines.length) {
      clearInterval(demoTimer);
      return;
    }
    if (state.demoReveal === DEMO_CHECKPOINT && !state.demoPromptSeen) {
      state.demoPromptOpen = true;
      state.demoPromptSeen = true;
      render();
      return;
    }
    state.demoReveal += 1;
    render();
  }, 1800);
}

function demoShareScreen() {
  const nodes = [
    { id: "n1", label: "Buyer inquiry" },
    { id: "n2", label: "Payment plan shown" },
    { id: "n3", label: "Objection handled" },
    { id: "n4", label: "Booking confirmed" }
  ];
  return `
    <div class="demo-share">
      <div class="demo-share-toolbar">
        <button class="demo-share-icon" type="button" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
        </button>
        <div class="demo-share-tools">
          <button type="button" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><rect x="6" y="10" width="12" height="9" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M9 10V7a3 3 0 0 1 6 0v3" stroke="currentColor" stroke-width="1.6"/></svg></button>
          <button type="button" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="m6 3 4 16 3-6 6-3-13-7Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg></button>
          <button type="button" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" stroke-width="1.6"/></svg></button>
          <button type="button" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.6"/></svg></button>
        </div>
        <button class="demo-share-lib" type="button" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.6"/><rect x="13" y="4" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.6"/><rect x="4" y="13" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.6"/><rect x="13" y="13" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.6"/></svg>
          Library
        </button>
      </div>
      <p class="demo-share-prompt">Walk through how you’d structure the payment plan for a hesitant buyer.</p>
      <div class="demo-share-canvas">
        <div class="demo-flow">
          ${nodes.map((n, i) => `${i ? `<span class="demo-flow-arrow" aria-hidden="true">→</span>` : ""}<span class="demo-flow-node">${esc(n.label)}</span>`).join("")}
        </div>
      </div>
    </div>
  `;
}

function pageTwinDemo() {
  const model = demoModel(state.demoTaskId);
  if (state.demoEnded) return demoFeedbackScreen(model);
  const visible = model.lines.slice(0, state.demoReveal);
  const selfLabel = state.demoInteractive ? "Olga" : "Student";
  const selfInitial = state.demoInteractive ? "O" : "A";
  const selfColorClass = state.demoInteractive ? "demo-self-avatar--olga" : "demo-self-avatar--student";
  return `
    <div class="demo-room">
      <header class="demo-top">
        <div class="demo-brand">${logo(20)}<span class="wordmark">TrainerTwin</span></div>
        <p class="demo-title">${esc(model.title)}</p>
        <div class="demo-top-end">
          <button class="demo-pill-btn" type="button" data-action="open-demo-issue">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 22V3m0 1c4-4 8 4 12 0v10c-4 4-8-4-12 0" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Report an issue
          </button>
        </div>
      </header>
      <div class="demo-body">
        <div class="demo-stage">
          ${state.demoScreenShare ? "" : `<canvas class="demo-aurora" aria-hidden="true"></canvas>`}
          ${state.demoScreenShare ? demoShareScreen() : `
            <div class="demo-avatar-wrap">
              <div class="demo-avatar" aria-hidden="true"><img src="${esc(model.persona.face)}" alt=""></div>
              <p class="demo-speaking"><span class="live-dot" aria-hidden="true"></span> Speaking</p>
            </div>
            <p class="demo-speaker-name">${esc(model.persona.name)}</p>
          `}
          ${state.demoScreenShare ? `
            <div class="demo-pip-stack">
              <div class="demo-self demo-self--stacked demo-self--twin">
                <img class="demo-self-photo" src="${esc(model.persona.face)}" alt="">
                <span class="demo-self-label">${esc(model.persona.name)}</span>
              </div>
              <div class="demo-self demo-self--stacked">
                <span class="demo-self-avatar ${selfColorClass}">${esc(selfInitial)}</span>
                <span class="demo-self-label">${esc(selfLabel)}</span>
                <span class="demo-self-mic" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none"><path d="m2 2 20 20M10 6h4a2 2 0 0 1 2 2v2.5l5-3V16l-5-3v1M16 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </span>
              </div>
            </div>
          ` : `
            <div class="demo-self">
              <span class="demo-self-avatar ${selfColorClass}">${esc(selfInitial)}</span>
              <span class="demo-self-label">${esc(selfLabel)}</span>
              <span class="demo-self-mic" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none"><path d="m2 2 20 20M10 6h4a2 2 0 0 1 2 2v2.5l5-3V16l-5-3v1M16 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
            </div>
          `}
        </div>
        <aside class="demo-chat${state.demoChatOpen ? "" : " is-hidden"}">
          <div class="demo-chat-head">
            <h2 class="demo-chat-title">Chat</h2>
            <button class="demo-chat-close" type="button" data-action="toggle-demo-chat" aria-label="Close chat">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
            </button>
          </div>
          <div class="demo-chat-body" id="demo-lines">
            ${visible.map((line, i) => demoLine(line, i, model.persona)).join("")}
            ${state.demoExtra.map((line, i) => demoLine(line, DEMO_CHECKPOINT + i, model.persona)).join("")}
          </div>
          <div class="demo-chat-input-row">
            <input class="demo-chat-input" id="demo-message" placeholder="Message the trainer…" value="${esc(state.demoDraft)}" autocomplete="off">
            <button class="demo-send" type="button" data-action="demo-send" aria-label="Send">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 19V5m-6 6 6-6 6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
          </div>
        </aside>
      </div>
      <div class="demo-controls">
        <p class="demo-timer">${fmtClock(state.demoSeconds)}</p>
        <div class="demo-cluster">
          <button class="demo-ctrl is-off" type="button" aria-label="Camera" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none"><path d="m2 2 20 20M10 6h4a2 2 0 0 1 2 2v2.5l5-3V16l-5-3v1M16 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <button class="demo-ctrl" type="button" aria-label="Microphone" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none"><rect x="9" y="3" width="6" height="11" rx="3" stroke="currentColor" stroke-width="1.6"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
          </button>
          <button class="demo-ctrl${state.demoScreenShare ? " is-active" : ""}" type="button" data-action="toggle-demo-share" aria-label="Share screen">
            <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M8 21h8M12 17v4M9 12l3-3 3 3M12 9v5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <button class="demo-ctrl${state.demoChatOpen ? " is-active" : ""}" type="button" data-action="toggle-demo-chat" aria-label="Toggle chat">
            <svg viewBox="0 0 24 24" fill="none"><path d="M8 9h8M8 13h6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-5l-5 3v-3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
        <button class="demo-end" type="button" data-action="end-demo">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 2 2 22" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          End
        </button>
      </div>
      ${state.demoPromptOpen ? `
        <div class="demo-prompt-layer">
          <div class="demo-prompt" role="dialog" aria-labelledby="demo-prompt-title">
            <h2 id="demo-prompt-title">Do you want to continue as ${model.isTwin ? "the twin" : "the client"}?</h2>
            <p>${model.isTwin ? "Answer as the twin yourself, or let the call keep going." : "Play the client yourself, or let the call keep going."}</p>
            <div class="demo-prompt-actions">
              <button class="btn btn--strong" type="button" data-action="demo-accept">Yes, I’ll be ${model.isTwin ? "the twin" : "the client"}</button>
              <button class="btn btn--secondary" type="button" data-action="demo-decline">No, keep going</button>
            </div>
          </div>
        </div>
      ` : ""}
      ${demoIssuePopup()}
    </div>
  `;
}

// Each call works on its own copy of the script, so "Feels off" can add the twin's follow-up turns to it.
function talkScript(t) { return (t && t.script) || TALK_SCRIPT; }
const TALK_SCRIPT = [
  { who: "twin", text: "Hi Olga! I’m your twin. I’ve learnt how you handle objections, cold calls and listing conversations. Ask me anything and I’ll answer the way you would." },
  { who: "olga", text: "Okay. A buyer tells me prices will drop next year. What do I say?" },
  { who: "twin", text: "I’d ask what they’ll do with the money while they wait. Then I’d put a year of rent next to today’s payment plan, so waiting becomes a number, not an opinion." },
  { who: "olga", text: "And if a seller wants me to cut my fee to one percent?" },
  { who: "twin", text: "I wouldn’t cut it. I’d name the work: photography, viewings, negotiation and paperwork. Then I’d ask which part they’d like me to skip." },
  { who: "olga", text: "What about a landlord who wants to hang up on a cold call?" },
  { who: "twin", text: "Stay brief. Say who you are, why you’re calling, and offer to text two comparable sales. Then let them go." }
];

let talkTimer = 0;

// Tilted-card hover effect (after React Bits TiltedCard): the twin card leans
// toward the pointer and eases back, on a spring-like lerp.
const TALK_TILT = { amplitude: 10, scale: 1.04, rx: 0, ry: 0, s: 1, trx: 0, tr: 0, ts: 1, raf: 0, last: 0 };

function talkTiltApply() {
  const card = document.querySelector(".talk-card");
  if (card) card.style.transform = `perspective(800px) rotateX(${TALK_TILT.rx.toFixed(2)}deg) rotateY(${TALK_TILT.ry.toFixed(2)}deg) scale(${TALK_TILT.s.toFixed(3)})`;
}

function talkTiltStep(now) {
  const dt = Math.min(now - (TALK_TILT.last || now - 16), 100);
  TALK_TILT.last = now;
  const k = 1 - Math.exp(-dt / 110);
  TALK_TILT.rx += (TALK_TILT.trx - TALK_TILT.rx) * k;
  TALK_TILT.ry += (TALK_TILT.tr - TALK_TILT.ry) * k;
  TALK_TILT.s += (TALK_TILT.ts - TALK_TILT.s) * k;
  talkTiltApply();
  const rest = Math.abs(TALK_TILT.trx - TALK_TILT.rx) < 0.01 && Math.abs(TALK_TILT.tr - TALK_TILT.ry) < 0.01 && Math.abs(TALK_TILT.ts - TALK_TILT.s) < 0.001;
  TALK_TILT.raf = rest || !state.talkOpen ? 0 : requestAnimationFrame(talkTiltStep);
  if (!TALK_TILT.raf) TALK_TILT.last = 0;
}

function talkTiltTo(trx, tr, ts) {
  TALK_TILT.trx = trx;
  TALK_TILT.tr = tr;
  TALK_TILT.ts = ts;
  if (!TALK_TILT.raf) TALK_TILT.raf = requestAnimationFrame(talkTiltStep);
}

document.addEventListener("mousemove", (e) => {
  if (!state.talkOpen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const card = document.querySelector(".talk-card");
  if (!card) return;
  const r = card.getBoundingClientRect();
  const inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
  if (!inside) {
    if (TALK_TILT.ts !== 1 || TALK_TILT.trx || TALK_TILT.tr) talkTiltTo(0, 0, 1);
    return;
  }
  const dx = (e.clientX - r.left - r.width / 2) / (r.width / 2);
  const dy = (e.clientY - r.top - r.height / 2) / (r.height / 2);
  talkTiltTo(-dy * TALK_TILT.amplitude, dx * TALK_TILT.amplitude, TALK_TILT.scale);
});

function talkClock(t) {
  const sec = Math.floor((performance.now() - t.startedAt) / 1000);
  return Math.floor(sec / 60) + ":" + String(sec % 60).padStart(2, "0");
}

let talkClockTimer = 0;

// Confetti lives outside #shell so it keeps falling when the call moves on to
// Olga's turn and the screen re-renders right after "Feels like me".
// A small burst from the calibration row once a call has been finished.
function botConfettiBurst() {
  const row = document.querySelector(".bot-cal-foot [data-action=\"bot-cal-open\"]");
  if (!row || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const r = row.getBoundingClientRect();
  const layer = document.createElement("div");
  layer.className = "talk-confetti-layer bot-confetti-layer";
  layer.setAttribute("aria-hidden", "true");
  layer.style.left = r.left + r.width / 2 - 150 + "px";
  layer.style.top = r.top + r.height / 2 - 100 + "px";
  layer.innerHTML = '<canvas class="talk-confetti"></canvas>';
  document.body.appendChild(layer);
  mountConfetti(".bot-confetti-layer .talk-confetti", { count: 28, tokens: ["--tt-orange-500", "--tt-orange-300", "--tt-orange-100", "--tt-neutral-25"], persist: true });
  setTimeout(() => layer.remove(), 4300);
}

function talkConfettiBurst(btn) {
  const row = btn.closest(".talk-feedback");
  if (!row) return;
  const r = row.getBoundingClientRect();
  const layer = document.createElement("div");
  layer.className = "talk-confetti-layer";
  layer.setAttribute("aria-hidden", "true");
  layer.style.left = r.left + r.width / 2 - 150 + "px";
  layer.style.top = r.top + r.height / 2 - 50 + "px";
  layer.innerHTML = '<canvas class="talk-confetti"></canvas>';
  document.body.appendChild(layer);
  mountConfetti(".talk-confetti-layer .talk-confetti", { count: 36, tokens: ["--tt-orange-500", "--tt-orange-300", "--tt-orange-100", "--tt-neutral-25"], persist: true });
  setTimeout(() => layer.remove(), 4300);
}

// Voices for the call: the twin and Olga each get their own browser speech
// voice (different voice + pitch) so you can tell them apart.
let talkVoicePair = null;

function talkVoices() {
  if (talkVoicePair) return talkVoicePair;
  if (!("speechSynthesis" in window)) return null;
  const all = speechSynthesis.getVoices().filter((v) => /^en/i.test(v.lang));
  if (!all.length) return null; // voices load late; try again on the next line
  const female = all.filter((v) => /samantha|karen|moira|tessa|victoria|zira|aria|jenny|fiona|serena|female/i.test(v.name));
  const twin = female[0] || all[0];
  const olga = female.find((v) => v !== twin) || all.find((v) => v !== twin) || twin;
  talkVoicePair = { twin, olga };
  return talkVoicePair;
}

// Browsers load their voice list lazily; ask early so the first line already has its voice.
if ("speechSynthesis" in window) {
  speechSynthesis.getVoices();
  speechSynthesis.addEventListener("voiceschanged", () => { talkVoicePair = null; });
}

function talkSpeak(who, text) {
  if (!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  const pair = talkVoices();
  if (pair) u.voice = who === "twin" ? pair.twin : pair.olga;
  u.lang = "en-US";
  u.rate = 1.08;
  u.pitch = who === "twin" ? 1.1 : 0.9;
  speechSynthesis.speak(u);
}

function talkSpeechStop() {
  if ("speechSynthesis" in window) speechSynthesis.cancel();
}

function talkMicIcon(off) {
  return `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 15a4 4 0 0 0 4-4V6a4 4 0 0 0-8 0v5a4 4 0 0 0 4 4Z" fill="currentColor"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>${off ? `<path d="m3 3 18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>` : ""}</svg>`;
}

function talkPick(mark) {
  if (!mark) return "";
  return `<p class="talk-pick">${demoVote(mark === "like" ? "up" : "down")} ${mark === "like" ? "Feels like me" : "Feels off"}</p>`;
}

function talkLogBubbles(t) {
  return talkScript(t).slice(0, t.idx + 1).map((turn, i) => {
    const words = turn.text.split(" ");
    const twin = turn.who === "twin";
    const text = i < t.idx ? turn.text : words.slice(0, t.shown).join(" ");
    if (!text) return "";
    return `
      <div class="demo-line ${twin ? "is-twin" : "is-lead"}">
        <p class="demo-who">${twin ? "Olga’s twin" : "Olga"}</p>
        <div class="demo-bubble" data-talk-turn="${i}">${esc(text)}</div>
        ${twin ? talkPick(t.marks[i]) : ""}
      </div>
    `;
  }).join("");
}

// The call thread under the twin card: the twin's lines as grey bubbles, Olga's
// turns as white bordered bubbles, rating buttons under the latest twin bubble.
function talkThread(t) {
  // Only the latest two messages stay on screen; the full record is in the history panel.
  const first = Math.max(0, t.idx - 1);
  return talkScript(t).slice(first, t.idx + 1).map((turn, n) => {
    const i = first + n;
    const current = i === t.idx;
    const words = turn.text.split(" ");
    const done = !current || t.shown >= words.length;
    if (turn.who !== "twin") {
      const said = current ? words.slice(0, t.shown).join(" ") : turn.text;
      return `<div class="talk-msg is-olga"><div class="talk-bubble talk-bubble--olga" data-talk-turn="${i}">${esc(said)}</div></div>`;
    }
    const text = current ? words.slice(0, t.shown).join(" ") : turn.text;
    const mark = t.marks[i];
    // The "speaking" tag fades out once, right after the twin finishes the line.
    let status = "";
    if (current) {
      let cls = "";
      if (done) {
        cls = t.fadePlayed === i ? " is-idle" : " is-fading";
        t.fadePlayed = i;
      }
      status = `<p class="talk-status${cls}"><span class="talk-live-dot" aria-hidden="true"></span> Olga’s twin speaking</p>`;
    }
    const feedback = mark
      ? `<span class="talk-mark">${demoVote(mark === "like" ? "up" : "down")} ${mark === "like" ? "Feels like me" : "Feels off"}</span>`
      : done && !turn.kind
        ? `
          <button class="btn btn--secondary btn--sm" type="button" data-action="talk-like" data-id="${i}">${demoVote("up")} Feels like me</button>
          <button class="btn btn--secondary btn--sm" type="button" data-action="talk-off" data-id="${i}">${demoVote("down")} Feels off</button>
        `
        : "";
    return `
      <div class="talk-msg is-twin">
        ${status}
        <div class="talk-bubble-row">
          <div class="talk-bubble${turn.kind === "ask" ? " talk-bubble--ask" : ""}" data-talk-turn="${i}">${esc(text)}</div>
          ${done && !turn.kind ? `<button class="talk-why" type="button" data-action="talk-why-open" data-id="${i}" aria-label="Why did the twin say this?" title="Why this answer?">${botWhyIcon()}</button>` : ""}
        </div>
        <div class="talk-feedback${current ? " is-active" : ""}">${feedback}</div>
      </div>
    `;
  }).join("");
}

function talkHistory(t) {
  return `
    <aside class="talk-history${t.logOpen ? "" : " is-hidden"}" aria-label="Conversation history">
      <div class="demo-chat-head">
        <h2 class="demo-chat-title">Conversation</h2>
        <button class="demo-chat-close" type="button" data-action="talk-log" aria-label="Close conversation">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
        </button>
      </div>
      <div class="demo-chat-body" id="talk-log">${talkLogBubbles(t)}</div>
    </aside>
  `;
}

// The screen after End call: a quiet recap with the way back in or out.
function pageTwinTalkEnded(t) {
  const rated = Object.values(t.marks || {});
  const like = rated.filter((m) => m === "like").length;
  const off = rated.filter((m) => m === "off").length;
  const accuracy = like + off ? Math.round((like / (like + off)) * 100) + "%" : "—";
  const metric = (label, value, note) => `
    <article class="an-stat">
      <p class="overline">${esc(label)}</p>
      <p class="an-value tabular">${esc(value)}</p>
      <p class="an-note">${esc(note)}</p>
    </article>
  `;
  return `
    <div class="page page--talk talk-page talk-ended">
      ${t.celebrate ? `<canvas class="auth-confetti talk-end-confetti" aria-hidden="true"></canvas>` : ""}
      <header class="create-bar">
        <button class="create-bar-back" type="button" data-action="talk-close">${icon("back")} Talk to my twin</button>
      </header>
      <div class="talk-end-body">
        <span class="talk-end-label">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 2 2 22" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          Call ended
        </span>
        <div class="talk-end-photo"><video src="../media/twin-listening.mp4" autoplay muted loop playsinline preload="auto" aria-hidden="true"></video></div>
        <h2 class="talk-end-name">Olga’s twin</h2>
        <p class="talk-end-time">Time spoke <span class="tabular">${esc(t.duration)}</span></p>
        <button class="talk-end-link" type="button" data-action="talk-log">View transcript <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        <div class="cal-metrics talk-end-metrics">
          ${metric("Feels like me", String(like), like === 1 ? "response" : "responses")}
          ${metric("Feels off", String(off), off === 1 ? "response" : "responses")}
          ${metric("Response accuracy", accuracy, "Rated “Feels like me”")}
        </div>
        <div class="talk-end-actions">
          <button class="btn btn--strong" type="button" data-action="talk-open">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>
            Speak again
          </button>
          <button class="btn btn--secondary" type="button" data-action="go-studio">
            ${sparklesIcon()}
            Go to Twin studio
          </button>
        </div>
      </div>
      ${talkHistory(t)}
    </div>
  `;
}

function pageTwinTalk() {
  const t = state.talk;
  if (t.ended) return pageTwinTalkEnded(t);
  const turn = talkScript(t)[t.idx];
  const done = t.shown >= turn.text.split(" ").length;
  const twinSpeaking = turn.who === "twin" && !done;
  // The twin's card plays a speaking clip while it talks and a listening clip otherwise.
  // A re-render keeps the same clip playing from where it was instead of restarting it.
  const videoSrc = twinSpeaking ? "../media/twin-speaking.mp4" : "../media/twin-listening.mp4";
  const prevVideo = document.querySelector(".talk-card video");
  t.videoResume = prevVideo && prevVideo.getAttribute("src") === videoSrc ? prevVideo.currentTime : 0;
  return `
    <div class="page page--talk talk-page">
      <header class="create-bar">
        <button class="create-bar-back" type="button" data-action="talk-close">${icon("back")} Talk to my twin</button>
      </header>
      <div class="talk-body">
        <div class="talk-stage">
          <section class="talk-col" aria-label="Olga’s twin">
            <div class="talk-card${twinSpeaking ? " is-speaking" : ""}">
              <video class="talk-video" src="${videoSrc}" autoplay muted loop playsinline preload="auto" aria-hidden="true"></video>
              ${twinSpeaking ? `<span class="talk-glow" aria-hidden="true"></span>` : ""}
              <span class="talk-name">Olga’s twin</span>
              <span class="talk-clock" aria-label="Call duration">${talkClock(t)}</span>
            </div>
            <div class="talk-thread" aria-live="polite">${talkThread(t)}</div>
          </section>
        </div>
      </div>
      ${talkHistory(t)}
      <div class="talk-controls">
        <div class="demo-cluster">
          <button class="demo-ctrl${t.muted ? " is-off" : ""}" type="button" data-action="talk-mute" aria-pressed="${t.muted}" aria-label="${t.muted ? "Unmute" : "Mute"}" title="${t.muted ? "Unmute" : "Mute"}">${talkMicIcon(t.muted)}</button>
          <button class="demo-ctrl${t.logOpen ? " is-active" : ""}" type="button" data-action="talk-log" aria-pressed="${t.logOpen}" aria-label="View conversation" title="View conversation">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M18 3.5H6A3.5 3.5 0 0 0 2.5 7v8A3.5 3.5 0 0 0 6 18.5h1.5v3.2a.4.4 0 0 0 .62.33L13 18.5h5a3.5 3.5 0 0 0 3.5-3.5V7A3.5 3.5 0 0 0 18 3.5Z" fill="currentColor"/><path d="M7.5 9h9M7.5 13h6" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round"/></svg>
          </button>
        </div>
        <button class="demo-end demo-end--icon" type="button" data-action="talk-end" aria-label="End call" title="End call">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08a.99.99 0 0 1-.29-.7c0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28a11.27 11.27 0 0 0-2.67-1.85.996.996 0 0 1-.56-.9v-3.1C15.15 9.25 13.6 9 12 9Z" fill="currentColor"/></svg>
        </button>
      </div>
      ${demoIssuePopup()}
      ${talkWhyPopup(t)}
      ${t.confirmEnd ? talkEndConfirm() : ""}
    </div>
  `;
}

function talkEndConfirm() {
  return `
    <dialog class="issue-dialog upsell-dialog" id="talk-end-dialog" aria-labelledby="talk-end-title">
      <div class="issue-card upsell-card">
        <h2 class="issue-title upsell-title" id="talk-end-title">Do you want to end the conversation?</h2>
        <div class="upsell-actions talk-confirm-actions">
          <button class="btn btn--secondary" type="button" data-action="talk-end-yes">Yes, end the call</button>
          <button class="btn btn--strong" type="button" data-action="talk-end-no">No, I’ll continue</button>
        </div>
      </div>
    </dialog>
  `;
}

function mountTwinTalk() {
  clearTimeout(talkTimer);
  talkTimer = 0;
  const t = state.talk;
  if (!state.talkOpen || !t) return;
  const log = document.getElementById("talk-log");
  if (log) log.scrollTop = log.scrollHeight;
  if (t.ended) {
    const endClip = document.querySelector(".talk-end-photo video");
    if (endClip) {
      endClip.muted = true;
      endClip.play().catch(() => {});
    }
    if (t.celebrate) {
      t.celebrate = false;
      mountConfetti(".talk-end-confetti", { persist: true });
    }
    return;
  }
  const confirmDlg = document.getElementById("talk-end-dialog");
  if (confirmDlg) {
    if (typeof confirmDlg.showModal === "function" && !confirmDlg.open) confirmDlg.showModal();
    confirmDlg.addEventListener("cancel", (ev) => {
      ev.preventDefault();
      actions["talk-end-no"]();
    });
  }
  talkTiltApply();
  const clip = document.querySelector(".talk-card video");
  if (clip) {
    clip.muted = true;
    if (t.videoResume) {
      try { clip.currentTime = t.videoResume; } catch (err) { /* not seekable yet */ }
      t.videoResume = 0;
    }
    clip.play().catch(() => {});
  }
  // mountTwinTalk also runs on every transcript word, so start the clock only once.
  if (!talkClockTimer) {
    talkClockTimer = setInterval(() => {
      const el = document.querySelector(".talk-clock");
      if (!el || !state.talkOpen || !state.talk) {
        clearInterval(talkClockTimer);
        talkClockTimer = 0;
        return;
      }
      el.textContent = talkClock(state.talk);
    }, 1000);
  }
  if (state.demoIssueOpen || t.confirmEnd || (state.botWhy && state.botWhy.scope === "talk")) {
    if ("speechSynthesis" in window) speechSynthesis.pause();
    return;
  }
  if ("speechSynthesis" in window && speechSynthesis.paused) speechSynthesis.resume();
  const turn = talkScript(t)[t.idx];
  const words = turn.text.split(" ");
  if (t.shown === 0 && t.spokenIdx !== t.idx) {
    t.spokenIdx = t.idx;
    talkSpeak(turn.who, turn.text);
  }
  if (t.shown < words.length) {
    talkTimer = setTimeout(() => {
      t.shown += 1;
      const text = words.slice(0, t.shown).join(" ");
      document.querySelectorAll('[data-talk-turn="' + t.idx + '"]').forEach((el) => { el.textContent = text; });
      if (t.shown >= words.length) {
        t.doneAt = performance.now();
        render();
      } else mountTwinTalk();
    }, 320); // about the pace of the spoken line
    return;
  }
  const next = t.idx + 1;
  if (next >= talkScript(t).length) return;
  const advance = () => {
    if (talkScript(t)[next].who === "olga" && t.muted) {
      talkTimer = setTimeout(advance, 500);
      return;
    }
    // Let the voice finish its sentence before the next speaker starts.
    if ("speechSynthesis" in window && speechSynthesis.speaking && performance.now() - (t.doneAt || 0) < 12000) {
      talkTimer = setTimeout(advance, 200);
      return;
    }
    t.idx = next;
    t.shown = 0;
    render();
  };
  // After a rating the call moves on quickly so Olga can speak: right after
  // "Feels like me", or once the "Feels off" popup closes.
  const mark = t.marks[t.idx];
  const wait = turn.who !== "twin" ? 1500 : turn.kind === "ask" ? 8000 : mark === "off" ? 700 : mark === "like" ? 700 : 2000;
  talkTimer = setTimeout(advance, wait);
}

function demoIssueReasons() {
  return [
    ["pronunciation", "Wrong pronunciation"],
    ["other", "Other"],
    ["robotic", "Sounds robotic"],
    ["unlike", "Doesn't sound like me"],
    ["flat", "Flat or no emotion"],
    ["accent", "Wrong accent"],
    ["pacing", "Pacing feels off"]
  ];
}

function demoIssuePopup() {
  if (!state.demoIssueOpen) return "";
  return `
    <div class="demo-prompt-layer demo-issue-layer">
      <div class="demo-feedback-card" role="dialog" aria-labelledby="demo-issue-title">
        <h2 class="card-title" id="demo-issue-title">What could be better?</h2>
        <p class="card-sub">Choose all that apply</p>
        <div class="demo-feedback-reasons">
          ${demoIssueReasons().map(([id, label]) => `<button class="btn btn--sm btn--secondary" type="button" data-action="demo-issue-reason" data-id="${id}" aria-pressed="${state.demoIssueReasons.includes(id)}">${label}</button>`).join("")}
        </div>
        <div class="field" style="margin-top:var(--tt-space-4)">
          <label class="sr" for="demo-issue-text">Anything else you would like to share?</label>
          <textarea class="input" id="demo-issue-text" rows="4" placeholder="Anything else you would like to share?">${esc(state.demoIssueText)}</textarea>
        </div>
        <div class="demo-feedback-foot">
          <button class="btn btn--ghost" type="button" data-action="close-demo-issue">Skip</button>
          <button class="btn btn--strong" type="button" data-action="submit-demo-issue">Submit</button>
        </div>
      </div>
    </div>
  `;
}

function demoFeedbackScreen() {
  const ratings = [
    ["great", "Sounds great"],
    ["enough", "Good enough"],
    ["off", "Not quite right"]
  ];
  const reasons = [
    ["pronunciation", "Wrong pronunciation"],
    ["other", "Other"],
    ["robotic", "Sounds robotic"],
    ["unlike", "Doesn't sound like me"],
    ["flat", "Flat or no emotion"],
    ["accent", "Wrong accent"],
    ["pacing", "Pacing feels off"]
  ];
  const followUp = state.demoFeedback === "enough" || state.demoFeedback === "off";
  return `
    <div class="demo-room demo-room--feedback">
      <div class="demo-feedback-card">
        <h2 class="card-title">How does your Twin voice sound?</h2>
        <p class="card-sub">This helps us improve voice cloning.</p>
        <div class="demo-feedback-options">
          ${ratings.map(([id, label]) => `<button class="btn ${state.demoFeedback === id ? "btn--strong" : "btn--secondary"}" type="button" data-action="demo-feedback-rate" data-id="${id}" aria-pressed="${state.demoFeedback === id}">${label}</button>`).join("")}
        </div>
        ${followUp ? `
          <p class="demo-feedback-ask">What could be better?</p>
          <p class="demo-feedback-hint">Choose all that apply</p>
          <div class="demo-feedback-reasons">
            ${reasons.map(([id, label]) => `<button class="btn btn--sm ${state.demoFeedbackReasons.includes(id) ? "btn--strong" : "btn--secondary"}" type="button" data-action="demo-feedback-reason" data-id="${id}" aria-pressed="${state.demoFeedbackReasons.includes(id)}">${label}</button>`).join("")}
          </div>
          <div class="field" style="margin-top:var(--tt-space-4)">
            <label class="sr" for="demo-feedback-text">Anything else you would like to share?</label>
            <textarea class="input" id="demo-feedback-text" rows="4" placeholder="Anything else you would like to share?">${esc(state.demoFeedbackText)}</textarea>
          </div>
        ` : ""}
        <div class="demo-feedback-foot">
          <button class="btn btn--ghost" type="button" data-action="close-demo">Skip</button>
          <button class="btn btn--strong" type="button" data-action="demo-feedback-submit" ${state.demoFeedback ? "" : "disabled"}>Submit</button>
        </div>
      </div>
    </div>
  `;
}

function runModel() {
  const task = taskById(state.runId);
  if (!task) return null;
  if (task.id === "objection") {
    return {
      title: "Objection-handling roleplay",
      share: "https://trainertwin.com/olga/objection-practice",
      fields: [
        { key: "scenario", label: "Scenario", tag: "Knowledge", value: "Off-plan buyer who wants to wait for prices to drop" },
        { key: "buyer", label: "Buyer", tag: "Knowledge", value: "Overseas investor, AED 2M budget, first purchase in Dubai" },
        { key: "rules", label: "Your rules", tag: "Style", value: "Play the buyer first · Show the exact line after each turn · End with one action for today" },
        { key: "face", label: "Face and voice", tag: "Avatar", value: "Conversational mode", selectFace: true },
        { key: "difficulty", label: "Difficulty", tag: "", value: "Medium · the buyer objects twice", select: true }
      ],
      lines: [
        { who: "Buyer", text: "Honestly, I think prices drop next year. Why would I buy off-plan now?" },
        { who: "Agent", text: "Fair question. What would you do with the money while you wait?" },
        { who: "Buyer", text: "Keep it in the bank. At least it’s safe there." },
        { who: "Note", text: "Good. You asked instead of arguing. Now put the cost of waiting next to the payment plan, in dirhams." },
        { who: "Agent", text: "If you wait a year, you pay another year of rent and lose today’s payment plan. Can I show you both numbers side by side?" },
        { who: "Buyer", text: "Go on, then. Show me." },
        { who: "Action", text: "Use the side-by-side line on your next two calls." }
      ]
    };
  }
  const lines = (task.preview || [task.blurb]).map((line) => {
    const idx = line.indexOf(": ");
    if (idx > 0 && idx < 24) return { who: line.slice(0, idx), text: line.slice(idx + 2) };
    return { who: "Output", text: line };
  });
  return {
    title: task.title,
    share: "https://trainertwin.com/olga/" + task.id,
    fields: [
      { key: "brief", label: "Brief", tag: "Knowledge", value: task.blurb || task.title },
      { key: "rules", label: "Your rules", tag: "Style", value: "Play the buyer first · Show the exact line after each turn · End with one action for today" },
      { key: "face", label: "Face and voice", tag: "Avatar", value: faceLabel() }
    ],
    lines
  };
}

function faceLabel() {
  if (state.avatar.modes.stage && state.runId === "avatar-video") return "Stage energy";
  return "Conversational mode";
}

function transcriptHTML(model) {
  const lines = (model || runModel()).lines.slice(0, state.reveal);
  const body = lines.map((line) => {
    if (line.who === "Note") return `<div class="alert"><b>Coach note</b><p>${esc(line.text)}</p></div>`;
    if (line.who === "Action") return `<div class="action-note"><b>Today’s action</b><p>${esc(line.text)}</p></div>`;
    return `<div class="turn"><span class="who">${esc(line.who)}</span><p>${esc(line.text)}</p></div>`;
  }).join("");
  const share = (model || runModel()).share.replace(/^https:\/\//, "");
  return body + (state.reveal >= (model || runModel()).lines.length ? `<p class="share">${esc(share)}</p>` : "");
}

function pills() {
  const items = [
    ["knowledge", "Knowledge", knowledgeNeeds()],
    ["style", "Style", 0],
    ["avatar", "Avatar", avatarNeeds()]
  ];
  return `
    <div class="pills" aria-label="Your twin">
      ${items.map(([id, label, n]) => `
        <button class="pill" type="button" data-action="open-drawer" data-id="${id}" aria-expanded="${state.drawer === id}">
          ${label}
          ${n ? `<span class="badge badge--caution badge--count tabular">${n}</span>` : ""}
        </button>
      `).join("")}
    </div>
  `;
}

function conversationHistory() {
  return [
    { id: "demo", title: "Roleplay creation", unread: true },
    { id: "bot-setup", title: "1:1 bot setup" },
    { id: "report", title: "Report analysis for roleplay sessions" },
    { id: "knowledge-review", title: "Knowledge review" }
  ];
}

function drawer() {
  const titles = { knowledge: "Knowledge", style: "Coaching style", avatar: "Avatar" };
  const subs = { knowledge: "What you know", style: "How you teach", avatar: "How you look and sound" };
  return `
    <button class="scrim" type="button" data-action="close-drawer" aria-label="Close panel"></button>
    <aside class="drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title">
      <div class="drawer-head">
        <div>
          <h2 class="card-title" id="drawer-title">${titles[state.drawer]}</h2>
          <p class="card-sub">${subs[state.drawer]}</p>
        </div>
        <button class="btn btn--ghost btn--icon btn--sm" id="drawer-close" type="button" data-action="close-drawer" aria-label="Close">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.5"/></svg>
        </button>
      </div>
      <div class="drawer-body">
        ${state.drawer === "knowledge" ? drawerKnowledge() : ""}
        ${state.drawer === "style" ? drawerStyle() : ""}
        ${state.drawer === "avatar" ? avatarBody() : ""}
      </div>
    </aside>
  `;
}

function drawerKnowledge() {
  const log = state.knowledgeLog.length
    ? `<ul class="log">${state.knowledgeLog.join("")}</ul>`
    : `<p class="quiet">Nothing read yet.</p>`;
  return log + asksBlock(true);
}

function drawerStyle() {
  if (!state.patternsShown) return `<p class="quiet">No patterns yet.</p>`;
  const openAll = PATTERNS.slice(0, state.patternsShown).map((p) => `
    <div style="margin-bottom:16px">
      <h3 class="task-title">${esc(p.title)}</h3>
      <p class="card-sub tabular">Seen in ${p.seen} places</p>
      <ul class="evidence">${p.evidence.map((e) => `<li>${esc(e)}</li>`).join("")}</ul>
    </div>
  `).join("");
  return openAll + `
    <div class="delivery">
      <span>Pace: Brisk, short sentences</span>
      <span>Energy: Rises at the close</span>
      <span>Signature line: “Stop hoping. Start closing.”</span>
    </div>
  `;
}

function authEye(open) {
  return open
    ? `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2 2.5 14 13.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M6.2 6.4A2 2 0 0 0 9.6 9.8M3.2 5.2C2.1 6.2 1.5 8 1.5 8S3.8 11.5 8 11.5c.8 0 1.5-.2 2.1-.4M6.1 4.7A6.4 6.4 0 0 1 8 4.5C12.2 4.5 14.5 8 14.5 8a11 11 0 0 1-1.6 2.1" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`
    : `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M1.5 8S3.8 4.5 8 4.5 14.5 8 14.5 8 12.2 11.5 8 11.5 1.5 8 1.5 8Z" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="8" cy="8" r="1.75" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>`;
}

function authPassField(id, label, value, open) {
  const which = id === "auth-confirm" ? "confirm" : "password";
  return `
    <div class="auth-field">
      <label class="label" for="${id}">${label}</label>
      <div class="auth-pass">
        <input class="input auth-input" id="${id}" type="${open ? "text" : "password"}" value="${esc(value)}" autocomplete="new-password" ${id === "auth-password" ? 'aria-describedby="auth-error"' : ""}>
        <button class="auth-eye" type="button" data-action="toggle-auth-password" data-which="${which}" aria-label="${open ? "Hide password" : "Show password"}">${authEye(open)}</button>
      </div>
    </div>
  `;
}

function authDialog() {
  if (state.auth === "verify") {
    const to = state.authVia === "google"
      ? "your Google inbox"
      : esc(state.authEmail.trim());
    return `
      <dialog class="auth-dialog" id="auth-dialog" aria-labelledby="auth-title">
        <div class="auth-card">
          <canvas class="auth-confetti" aria-hidden="true"></canvas>
          <button class="btn btn--ghost btn--icon btn--sm auth-close" type="button" data-action="close-auth" aria-label="Close">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.5"/></svg>
          </button>
          <div class="auth-copy">
            <h2 class="auth-title" id="auth-title">Check your email</h2>
            <p class="auth-sub">We sent a verification link to ${to}. Open it and confirm your account. That’s what lets us start building your twin.</p>
            <button class="btn btn--strong auth-submit" id="auth-verified" type="button" data-action="confirm-email">I’ve verified</button>
          </div>
        </div>
      </dialog>
    `;
  }
  return `
    <dialog class="auth-dialog auth-dialog--split" id="auth-dialog" aria-labelledby="auth-title">
      <div class="auth-card auth-card--split">
        <button class="btn btn--ghost btn--icon btn--sm auth-close" type="button" data-action="close-auth" aria-label="Close">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.5"/></svg>
        </button>
        <form class="auth-form-panel" id="auth-form">
          <h2 class="auth-title" id="auth-title">Welcome to build your Twin</h2>
          <p class="auth-sub">Sign up with your email.</p>
          <button class="btn btn--secondary auth-google" type="button" data-action="signup-google">
            <svg viewBox="0 0 48 48" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
            Sign up with Google
          </button>
          <div class="auth-or" role="separator"><span>or</span></div>
          <div class="auth-field">
            <label class="label" for="auth-email">Email</label>
            <input class="input auth-input" id="auth-email" type="email" value="${esc(state.authEmail)}" placeholder="m@example.com" autocomplete="email" aria-describedby="auth-error">
          </div>
          ${authPassField("auth-password", "Password", state.authPassword, state.authShowPassword)}
          ${authPassField("auth-confirm", "Confirm password", state.authConfirm, state.authShowConfirm)}
          <p class="error auth-error" id="auth-error" ${state.authError ? "" : "hidden"}>${esc(state.authError)}</p>
          <button class="btn btn--secondary auth-submit" type="submit">Sign up</button>
        </form>
        <div class="auth-illustration-panel">
          <div class="auth-side">
            <div class="auth-brand">${logo(22)}<span class="wordmark">TrainerTwin</span></div>
            <img class="auth-meet" src="../media/meet-my-twin.jpg?v=2" alt="">
            <p class="auth-side-copy">A twin built from how you teach.<br>It practices and answers in your voice.</p>
          </div>
        </div>
      </div>
    </dialog>
  `;
}

function closeAuth() {
  state.auth = null;
  state.authError = "";
  render();
}

function signupSubmit() {
  const emailEl = document.getElementById("auth-email");
  const passEl = document.getElementById("auth-password");
  const confirmEl = document.getElementById("auth-confirm");
  if (emailEl) state.authEmail = emailEl.value;
  if (passEl) state.authPassword = passEl.value;
  if (confirmEl) state.authConfirm = confirmEl.value;
  const email = state.authEmail.trim();
  const password = state.authPassword;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    state.authError = "Enter a valid email address.";
    state.afterFocus = "auth-email";
    render();
    return;
  }
  if (password.length < 8) {
    state.authError = "Use at least 8 characters.";
    state.afterFocus = "auth-password";
    render();
    return;
  }
  if (password !== state.authConfirm) {
    state.authError = "Those passwords don’t match.";
    state.afterFocus = "auth-confirm";
    render();
    return;
  }
  state.authVia = "email";
  state.auth = "verify";
  state.authError = "";
  state.afterFocus = "auth-verified";
  render();
}

const VP_LOOP = 4.8;
const VP_SYLLABLES = [
  [0.1, 0.16, 0.9],
  [0.3, 0.12, 0.7],
  [0.5, 0.2, 1],
  [0.95, 0.14, 0.8],
  [1.15, 0.1, 0.6],
  [1.3, 0.22, 0.95],
  [1.9, 0.16, 0.85],
  [2.12, 0.12, 0.7],
  [2.3, 0.18, 0.9],
  [2.55, 0.1, 0.5],
  [3.05, 0.24, 1],
  [3.4, 0.12, 0.75],
  [3.6, 0.16, 0.9]
];

function voicePillLevel(t) {
  const u = t % VP_LOOP;
  let a = 0.06;
  for (const [s, d, p] of VP_SYLLABLES) {
    const x = (u - s) / d;
    if (x >= 0 && x <= 1) a = Math.max(a, p * 0.5 * (1 - Math.cos(2 * Math.PI * x)));
  }
  return a * (0.7 + 0.3 * Math.abs(Math.sin(2 * Math.PI * 7.1 * u)));
}

function drawVoiceWave(st, canvas, level, color) {
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const rect = canvas.getBoundingClientRect();
  const w = Math.max(1, Math.round(rect.width * dpr));
  const h = Math.max(1, Math.round(rect.height * dpr));
  if (canvas.width !== w || canvas.height !== h) {
    canvas.width = w;
    canvas.height = h;
  }
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  st.acc = Math.max(st.acc, level);
  st.tick = (st.tick + 1) % 4;
  if (st.tick === 0) {
    st.hist.push(st.acc);
    st.acc = 0;
    if (st.hist.length > 80) st.hist.shift();
  }
  const bw = 2 * dpr;
  const step = 3 * dpr;
  const shift = (st.tick / 4) * step;
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = color;
  for (let i = 0; i < st.hist.length; i++) {
    const v = st.hist[st.hist.length - 1 - i];
    const x = w - (i + 1) * step - shift;
    if (x + bw < 0) break;
    const barH = Math.max(bw, (0.1 + 0.9 * v) * h);
    const t = Math.min(1, Math.max(0, (x + bw / 2) / (w * 0.55)));
    const fade = t * t * (3 - 2 * t);
    ctx.globalAlpha = (0.35 + 0.65 * v) * fade;
    if (ctx.roundRect) {
      ctx.beginPath();
      ctx.roundRect(x, (h - barH) / 2, bw, barH, bw / 2);
      ctx.fill();
    } else {
      ctx.fillRect(x, (h - barH) / 2, bw, barH);
    }
  }
  ctx.globalAlpha = 1;
}

const voicePillStarts = {};
const voicePillCleanups = {};

function mountVoicePills() {
  document.querySelectorAll(".voice-pill").forEach((btn) => {
    const targetId = btn.dataset.target;
    const actionName = btn.dataset.vpAction;
    if (voicePillCleanups[targetId]) {
      voicePillCleanups[targetId]();
      delete voicePillCleanups[targetId];
    }
    voicePillCleanups[targetId] = wireVoicePill(btn, targetId, actionName);
  });
}

function wireVoicePill(btn, targetId, actionName) {
  const canvas = btn.querySelector(".voice-pill__wave");
  const timeEl = btn.querySelector(".voice-pill__time");
  const st = { hist: [], tick: 0, acc: 0, raf: 0, downAt: 0, ownPress: false };
  const HOLD_AFTER = 300;
  const liveColor = getComputedStyle(document.documentElement).getPropertyValue("--tt-live").trim() || "#CE2C33";

  const isListening = () => state.listening && state.listeningTarget === targetId;

  const paint = (now) => {
    if (!document.body.contains(btn) || !isListening()) {
      st.raf = 0;
      return;
    }
    const startedAt = voicePillStarts[targetId] || now;
    if (timeEl) {
      const ms = now - startedAt;
      const s = Math.floor(ms / 1000);
      timeEl.textContent = Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
    }
    drawVoiceWave(st, canvas, voicePillLevel(now / 1000), liveColor);
    st.raf = requestAnimationFrame(paint);
  };

  if (isListening()) {
    if (!voicePillStarts[targetId]) voicePillStarts[targetId] = performance.now();
    st.raf = requestAnimationFrame(paint);
  }

  const onPointerDown = (e) => {
    if (e.button !== 0 || btn.disabled) return;
    st.downAt = performance.now();
    st.ownPress = !isListening();
    btn.dataset.pressed = "";
    if (st.ownPress) {
      voicePillStarts[targetId] = performance.now();
      startListening(targetId);
    }
  };
  const onPointerUp = () => {
    delete btn.dataset.pressed;
    const held = performance.now() - st.downAt;
    if (st.ownPress) {
      if (held >= HOLD_AFTER && state.listening) stopListening();
    } else if (state.listening) {
      stopListening();
    }
  };
  const onClick = (e) => {
    if (e.detail !== 0) return;
    if (state.listening && state.listeningTarget === targetId) stopListening();
    else startListening(targetId);
  };
  const onKeyDown = (e) => {
    if (e.key === "Escape" && isListening()) stopListening();
  };

  btn.addEventListener("pointerdown", onPointerDown);
  btn.addEventListener("pointerup", onPointerUp);
  btn.addEventListener("pointercancel", onPointerUp);
  btn.addEventListener("click", onClick);
  btn.addEventListener("keydown", onKeyDown);

  return () => {
    if (st.raf) cancelAnimationFrame(st.raf);
    if (!isListening()) delete voicePillStarts[targetId];
  };
}

let teeWavesCleanup = null;

function mountTeeWaves() {
  if (teeWavesCleanup) {
    teeWavesCleanup();
    teeWavesCleanup = null;
  }
  const canvas = document.querySelector(".tee-waves");
  if (!canvas) return;
  const gl = canvas.getContext("webgl2", { alpha: true, antialias: false, premultipliedAlpha: true });
  if (!gl) return;
  gl.clearColor(0, 0, 0, 0);

  const vertexSrc = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;
  const fragmentSrc = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform float uSpeed;
uniform float uAmplitude;
uniform float uWaveScale;
uniform float uWaveRatio;
uniform float uSwell;
uniform float uTurbulence;
uniform float uTilt;
uniform float uZoom;
uniform float uHeight;
uniform float uFogDepth;
uniform float uSteps;
uniform float uBrightness;
uniform float uOpacity;
uniform float uGrain;
uniform float uGrainIntensity;
uniform vec3 uHorizonColor;
uniform vec3 uWaveColor;
uniform vec3 uCrestColor;
out vec4 fragColor;

const float MAX_DIST = 20000.0;

float hash21(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float plasma(vec3 r, vec2 freq, vec4 tc) {
  float mx = r.x + tc.x;
  mx += uSwell * sin((r.y + mx) / 20.0 + tc.y);
  float my = r.y - tc.z;
  my += uTurbulence * cos(r.x / 23.0 + tc.w);
  return r.z - (sin(mx * freq.x) * uAmplitude + sin(my * freq.y) * uAmplitude + uHeight);
}

float raymarch(vec3 pos, vec3 dir, vec2 freq, vec4 tc) {
  float dist = 0.0;
  for (int i = 0; i < 128; i++) {
    if (float(i) >= uSteps) break;
    float dscene = plasma(pos + dist * dir, freq, tc);
    if (abs(dscene) < 0.1) break;
    dist += 0.9 * dscene;
    if (!(abs(dist) < MAX_DIST)) return MAX_DIST;
  }
  return dist;
}

void main() {
  float T = iTime * uSpeed;
  vec2 freq = vec2(uWaveScale / 7.0, (uWaveScale * uWaveRatio) / 3.0);
  vec4 tc = vec4(T / 0.130, T / 0.810, T / 0.200, T / 0.710);
  float c, s;
  float vfov = (3.14159 / 2.3) / max(uZoom, 0.05);
  vec3 cam = vec3(0.0, 0.0, 30.0);
  vec2 uv = (gl_FragCoord.xy / iResolution.xy) - 0.5;
  uv.x *= iResolution.x / iResolution.y;
  uv.y *= -1.0;

  vec3 dir = vec3(0.0, 0.0, -1.0);
  float ulen = length(uv);
  float xrot = vfov * ulen;
  c = cos(xrot); s = sin(xrot);
  dir = mat3(1.0, 0.0, 0.0, 0.0, c, -s, 0.0, s, c) * dir;
  vec2 nuv = ulen > 1e-5 ? uv / ulen : vec2(1.0, 0.0);
  c = nuv.x; s = nuv.y;
  dir = mat3(c, -s, 0.0, s, c, 0.0, 0.0, 0.0, 1.0) * dir;
  c = cos(uTilt); s = sin(uTilt);
  dir = mat3(c, 0.0, s, 0.0, 1.0, 0.0, -s, 0.0, c) * dir;

  float dist = raymarch(cam, dir, freq, tc);
  vec3 pos = cam + dist * dir;

  float t = clamp(uFogDepth / max(dist, 0.001), 0.0, 1.0);
  vec3 body = mix(uWaveColor, uCrestColor, clamp(pos.z * 0.08 + 0.5, 0.0, 1.0));
  vec3 col = mix(uHorizonColor, body, t);
  col *= uBrightness;
  col = clamp(col, 0.0, 1.0);

  float alpha = clamp(t, 0.0, 1.0) * uOpacity;
  if (uGrain > 0.5) {
    float g = hash21(gl_FragCoord.xy + mod(iTime, 64.0) * 11.0);
    alpha += (g - 0.5) * uGrainIntensity;
  }
  alpha = clamp(alpha, 0.0, 1.0);
  fragColor = vec4(col * alpha, alpha);
}
`;

  const compile = (type, src) => {
    const sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    return sh;
  };
  const program = gl.createProgram();
  gl.attachShader(program, compile(gl.VERTEX_SHADER, vertexSrc));
  gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragmentSrc));
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
  gl.useProgram(program);

  const posBuf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const posLoc = gl.getAttribLocation(program, "position");
  gl.enableVertexAttribArray(posLoc);
  gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

  const u = {};
  ["iResolution", "iTime", "uSpeed", "uAmplitude", "uWaveScale", "uWaveRatio", "uSwell", "uTurbulence", "uTilt", "uZoom", "uHeight", "uFogDepth", "uSteps", "uBrightness", "uOpacity", "uGrain", "uGrainIntensity", "uHorizonColor", "uWaveColor", "uCrestColor"].forEach((name) => {
    u[name] = gl.getUniformLocation(program, name);
  });

  const hexToRgb = (hex) => {
    const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return m ? [parseInt(m[1], 16) / 255, parseInt(m[2], 16) / 255, parseInt(m[3], 16) / 255] : [1, 1, 1];
  };
  const horizon = hexToRgb("#F7F7F7");
  gl.uniform3f(u.uHorizonColor, horizon[0], horizon[1], horizon[2]);
  const tintStops = ["#FFFFFF", "#FFF4EC", "#FFE3D1", "#F0F0F0"].map(hexToRgb);
  const tintAt = (phase) => {
    const n = tintStops.length;
    const p = ((phase % n) + n) % n;
    const i = Math.floor(p);
    const j = (i + 1) % n;
    const f = p - i;
    const a = tintStops[i];
    const b = tintStops[j];
    return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f];
  };
  const tintCycleMs = 18000;
  gl.uniform1f(u.uSpeed, 0.3);
  gl.uniform1f(u.uAmplitude, 1.6);
  gl.uniform1f(u.uWaveScale, 0.6);
  gl.uniform1f(u.uWaveRatio, 0.9);
  gl.uniform1f(u.uSwell, 35);
  gl.uniform1f(u.uTurbulence, 20);
  gl.uniform1f(u.uTilt, 1.11);
  gl.uniform1f(u.uZoom, 1.0);
  gl.uniform1f(u.uHeight, 5.5);
  gl.uniform1f(u.uFogDepth, 40);
  gl.uniform1f(u.uSteps, 70.0);
  gl.uniform1f(u.uBrightness, 1.0);
  gl.uniform1f(u.uOpacity, 1.0);
  gl.uniform1f(u.uGrain, 0.0);
  gl.uniform1f(u.uGrainIntensity, 0.0);

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const setSize = () => {
    const rect = canvas.getBoundingClientRect();
    const w = Math.max(1, Math.floor(rect.width * dpr));
    const h = Math.max(1, Math.floor(rect.height * dpr));
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
      gl.viewport(0, 0, w, h);
      gl.uniform2f(u.iResolution, w, h);
    }
  };
  const ro = new ResizeObserver(setSize);
  ro.observe(canvas);
  setSize();

  const t0 = performance.now();
  let raf = 0;
  const loop = (t) => {
    if (!document.body.contains(canvas)) {
      ro.disconnect();
      return;
    }
    gl.uniform1f(u.iTime, (t - t0) * 0.001);
    const cyclePhase = ((t - t0) / tintCycleMs) * tintStops.length;
    const wave = tintAt(cyclePhase);
    const crest = tintAt(cyclePhase + tintStops.length / 2);
    gl.uniform3f(u.uWaveColor, wave[0], wave[1], wave[2]);
    gl.uniform3f(u.uCrestColor, crest[0], crest[1], crest[2]);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    raf = requestAnimationFrame(loop);
  };
  raf = requestAnimationFrame(loop);
  teeWavesCleanup = () => {
    cancelAnimationFrame(raf);
    ro.disconnect();
  };
}

const TWIN_ASK_PREFIX = "I’m your twin with expertise in ";
const TWIN_BOT_PLACEHOLDER = "Post your course session link here to build your twins";
let twinAskTimer = 0;
const twinAskType = { topic: 0, chars: 0, erasing: false };

function twinAskTopicText() {
  const topic = TWIN_TOPICS[twinAskType.topic % TWIN_TOPICS.length];
  return topic.slice(0, twinAskType.chars);
}

function mountTwinAsk() {
  clearTimeout(twinAskTimer);
  twinAskTimer = 0;
  const input = document.getElementById("twin-ask");
  const topicEl = document.querySelector(".twin-ask-topic");
  if (!input || !topicEl) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    topicEl.textContent = TWIN_TOPICS[twinAskType.topic % TWIN_TOPICS.length];
    return;
  }
  const step = () => {
    if (!document.body.contains(topicEl)) return;
    const topic = TWIN_TOPICS[twinAskType.topic % TWIN_TOPICS.length];
    let delay;
    if (!twinAskType.erasing) {
      if (twinAskType.chars < topic.length) {
        twinAskType.chars += 1;
        delay = 55;
      } else {
        twinAskType.erasing = true;
        delay = 1800;
      }
    } else if (twinAskType.chars > 0) {
      twinAskType.chars -= 1;
      delay = 26;
    } else {
      twinAskType.topic = (twinAskType.topic + 1) % TWIN_TOPICS.length;
      twinAskType.erasing = false;
      delay = 320;
    }
    topicEl.textContent = twinAskTopicText();
    twinAskTimer = setTimeout(step, delay);
  };
  twinAskTimer = setTimeout(step, 500);
}

let auroraCleanup = null;

function mountAurora() {
  if (auroraCleanup) {
    auroraCleanup();
    auroraCleanup = null;
  }
  const canvas = document.querySelector(".demo-aurora");
  if (!canvas) return;
  const gl = canvas.getContext("webgl2", { alpha: true, antialias: true, premultipliedAlpha: true });
  if (!gl) return;
  gl.clearColor(0, 0, 0, 0);

  const vertexSrc = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;
  const fragmentSrc = `#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;

out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);

  vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
      0.5 - vec3(
          dot(x0, x0),
          dot(x12.xy, x12.xy),
          dot(x12.zw, x12.zw)
      ),
      0.0
  );
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

struct ColorStop {
  vec3 color;
  float position;
};

#define COLOR_RAMP(colors, factor, finalColor) {              \
  int index = 0;                                            \
  for (int i = 0; i < 2; i++) {                               \
     ColorStop currentColor = colors[i];                    \
     bool isInBetween = currentColor.position <= factor;    \
     index = int(mix(float(index), float(i), float(isInBetween))); \
  }                                                         \
  ColorStop currentColor = colors[index];                   \
  ColorStop nextColor = colors[index + 1];                  \
  float range = nextColor.position - currentColor.position; \
  float lerpFactor = (factor - currentColor.position) / range; \
  finalColor = mix(currentColor.color, nextColor.color, lerpFactor); \
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;

  ColorStop colors[3];
  colors[0] = ColorStop(uColorStops[0], 0.0);
  colors[1] = ColorStop(uColorStops[1], 0.5);
  colors[2] = ColorStop(uColorStops[2], 1.0);

  vec3 rampColor;
  COLOR_RAMP(colors, uv.x, rampColor);

  float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
  height = exp(height);
  height = ((1.0 - uv.y) * 2.0 - height + 0.2);
  float intensity = 0.6 * height;

  float midPoint = 0.20;
  float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);

  vec3 auroraColor = rampColor;

  fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
}
`;

  const compile = (type, src) => {
    const sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    return sh;
  };
  const program = gl.createProgram();
  gl.attachShader(program, compile(gl.VERTEX_SHADER, vertexSrc));
  gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragmentSrc));
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
  gl.useProgram(program);

  const posBuf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const posLoc = gl.getAttribLocation(program, "position");
  gl.enableVertexAttribArray(posLoc);
  gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

  const u = {};
  ["uTime", "uAmplitude", "uColorStops", "uResolution", "uBlend"].forEach((name) => {
    u[name] = gl.getUniformLocation(program, name);
  });

  const hexToRgb = (hex) => {
    const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return m ? [parseInt(m[1], 16) / 255, parseInt(m[2], 16) / 255, parseInt(m[3], 16) / 255] : [1, 1, 1];
  };
  // Light and multicolour, straight from the design tokens: peach, blue and green borders.
  const tokenHex = (name, fallback) => {
    const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    return /^#[0-9a-f]{6}$/i.test(v) ? v : fallback;
  };
  const colorStops = [
    tokenHex("--tt-primary-badge-border", "#FFD0B2"),
    tokenHex("--tt-info-border", "#8FB6F5"),
    tokenHex("--tt-success-border", "#7FD1A0")
  ].map(hexToRgb);
  gl.uniform3fv(u.uColorStops, new Float32Array(colorStops.flat()));
  gl.uniform1f(u.uAmplitude, 0.8);
  gl.uniform1f(u.uBlend, 1.4);

  const speed = 0.6;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const setSize = () => {
    const rect = canvas.getBoundingClientRect();
    const w = Math.max(1, Math.floor(rect.width * dpr));
    const h = Math.max(1, Math.floor(rect.height * dpr));
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
      gl.viewport(0, 0, w, h);
      gl.uniform2f(u.uResolution, w, h);
    }
  };
  const ro = new ResizeObserver(setSize);
  ro.observe(canvas);
  setSize();

  const t0 = performance.now();
  let raf = 0;
  const loop = (t) => {
    if (!document.body.contains(canvas)) {
      ro.disconnect();
      return;
    }
    gl.uniform1f(u.uTime, (t - t0) * 0.001 * speed);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    raf = requestAnimationFrame(loop);
  };
  raf = requestAnimationFrame(loop);
  auroraCleanup = () => {
    cancelAnimationFrame(raf);
    ro.disconnect();
  };
}

let confettiFrame = 0;

function mountAuth() {
  const dlg = document.getElementById("auth-dialog");
  if (!dlg) {
    if (confettiFrame) cancelAnimationFrame(confettiFrame);
    confettiFrame = 0;
    return;
  }
  if (typeof dlg.showModal === "function" && !dlg.open) dlg.showModal();
  dlg.addEventListener("cancel", (ev) => {
    ev.preventDefault();
    closeAuth();
  });
  dlg.addEventListener("click", (ev) => {
    if (ev.target === dlg) closeAuth();
  });
  if (state.auth === "verify") mountConfetti();
}

function mountConfetti(selector, opts) {
  const o = opts || {};
  // persist: own frame handle, so a re-render (mountAuth) cannot cancel the burst.
  const ref = o.persist ? { f: 0 } : { get f() { return confettiFrame; }, set f(v) { confettiFrame = v; } };
  if (ref.f) cancelAnimationFrame(ref.f);
  ref.f = 0;
  const canvas = document.querySelector(selector || ".auth-confetti");
  if (!canvas) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const parent = canvas.parentElement;
  const rect = parent.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.max(1, rect.width * dpr);
  canvas.height = Math.max(1, rect.height * dpr);
  const ctx = canvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  if (reduced) return;
  const styles = getComputedStyle(document.documentElement);
  const colors = (o.tokens || ["--tt-primary", "--tt-text-primary", "--tt-success", "--tt-caution", "--tt-info"])
    .map((name) => styles.getPropertyValue(name).trim())
    .filter(Boolean);
  const pieces = Array.from({ length: o.count || 90 }, () => ({
    x: rect.width * (0.04 + Math.random() * 0.92),
    y: rect.height * Math.random() * 0.35 - 24,
    w: 6 + Math.random() * 6,
    h: 9 + Math.random() * 7,
    vx: -2.2 + Math.random() * 4.4,
    vy: 1.2 + Math.random() * 2.6,
    rot: Math.random() * Math.PI,
    vr: -0.2 + Math.random() * 0.4,
    color: colors[Math.floor(Math.random() * colors.length)]
  }));
  const start = performance.now();
  const tick = (now) => {
    if (!document.body.contains(canvas)) {
      ref.f = 0;
      return;
    }
    const t = now - start;
    ctx.clearRect(0, 0, rect.width, rect.height);
    const fade = t > 3200 ? Math.max(0, 1 - (t - 3200) / 900) : 1;
    pieces.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.04;
      p.rot += p.vr;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = fade;
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    if (t < 4100) ref.f = requestAnimationFrame(tick);
    else {
      ctx.clearRect(0, 0, rect.width, rect.height);
      ref.f = 0;
    }
  };
  ref.f = requestAnimationFrame(tick);
}

let twinHelloConfetti = false;
let twinHelloTimer = 0;

function mountTwinHello() {
  if (!state.callLive || twinHelloConfetti) return;
  if (!document.querySelector(".page--hello .auth-confetti")) return;
  const frame = document.querySelector(".refine-frame");
  if (frame && !frame.hasAttribute("data-resolved")) return;
  twinHelloConfetti = true;
  clearTimeout(twinHelloTimer);
  twinHelloTimer = setTimeout(() => {
    twinHelloTimer = 0;
    if (!state.callLive) return;
    mountConfetti();
    if (frame) enableFrameTilt(frame);
  }, 400);
}

function enableFrameTilt(frame) {
  if (!frame || frame.dataset.tiltReady) return;
  frame.dataset.tiltReady = "";
  const amplitude = 10;
  const damp = 0.12;
  let targetX = 0;
  let targetY = 0;
  let curX = 0;
  let curY = 0;
  let hovering = false;
  let raf = 0;
  const tick = () => {
    curX += (targetX - curX) * damp;
    curY += (targetY - curY) * damp;
    const scale = hovering ? 1.04 : 1;
    frame.style.transform = `rotateX(${curX.toFixed(2)}deg) rotateY(${curY.toFixed(2)}deg) scale(${scale})`;
    const settled = !hovering && Math.abs(curX) < 0.02 && Math.abs(curY) < 0.02;
    if (settled) {
      frame.style.transform = "";
      raf = 0;
      return;
    }
    raf = requestAnimationFrame(tick);
  };
  const ensureLoop = () => {
    if (!raf) raf = requestAnimationFrame(tick);
  };
  frame.addEventListener("mousemove", (e) => {
    const rect = frame.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    targetY = (offsetX / (rect.width / 2)) * amplitude;
    targetX = (offsetY / (rect.height / 2)) * -amplitude;
    ensureLoop();
  });
  frame.addEventListener("mouseenter", () => {
    hovering = true;
    ensureLoop();
  });
  frame.addEventListener("mouseleave", () => {
    hovering = false;
    targetX = 0;
    targetY = 0;
    ensureLoop();
  });
}

function leaveCall() {
  twinRevealDone = false;
  twinHelloConfetti = false;
  clearTimeout(twinHelloTimer);
  twinHelloTimer = 0;
  state.callLive = false;
  state.callCelebrate = false;
}

function mountCelebrate() {
  if (!state.callCelebrate) return;
  mountConfetti();
}

function mountStudioFlow() {
  if ((activeNav() !== "setup" && activeNav() !== "knowledge") || !state.twinReady || studioCentered) return;
  const canvas = document.querySelector(".flow-canvas");
  const nodes = document.querySelectorAll(".flow-node");
  const last = nodes[nodes.length - 1];
  if (!canvas || !last) return;
  studioCentered = true;
  canvas.scrollLeft = Math.max(0, last.offsetLeft + last.offsetWidth / 2 - canvas.clientWidth / 2);
}

function startGroupProgress() {
  if (state.knowledgeGroupStep >= 0) return;
  const groups = GROUPS.filter((g) => g.id !== "whiteboard");
  state.knowledgeGroupStep = 0;
  state.knowledgeGroupSub = 0;
  const tick = () => {
    if (state.knowledgeGroupSub === 0) {
      state.knowledgeGroupSub = 1;
      render();
      groupTimer = setTimeout(tick, 1000);
    } else {
      state.knowledgeGroupStep += 1;
      state.knowledgeGroupSub = 0;
      if (state.knowledgeGroupStep === 1 && !state.knowledgeUpsellShown) {
        state.knowledgeUpsellShown = true;
        state.knowledgeUpsellOpen = true;
      }
      render();
      if (state.knowledgeGroupStep < groups.length) groupTimer = setTimeout(tick, 1000);
    }
  };
  groupTimer = setTimeout(tick, 1000);
}

let teeteeProgressTimer = 0;
let readyToastTimer = 0;

function startTeeteeProgress() {
  clearTimeout(teeteeProgressTimer);
  const total = twinBuildItems().filter((i) => i.id !== "training-style").length;
  state.teeteeProgressStep = 0;
  state.teeteeProgressDone = 0;
  const tick = () => {
    state.teeteeProgressDone += 1;
    if (state.teeteeProgressDone < total) {
      state.teeteeProgressStep = state.teeteeProgressDone;
      render();
      teeteeProgressTimer = setTimeout(tick, 3000);
    } else {
      render();
      mountConfetti(".teetee-confetti");
      setTimeout(() => mountConfetti(".teetee-confetti"), 1400);
      showKnowledgeReadyToast();
    }
  };
  teeteeProgressTimer = setTimeout(tick, 3000);
}

function showKnowledgeReadyToast() {
  clearTimeout(readyToastTimer);
  state.knowledgeReadyToast = true;
  render();
  readyToastTimer = setTimeout(() => {
    state.knowledgeReadyToast = false;
    render();
  }, 6000);
}

function startKnowledgeRead() {
  if (state.knowledgeStarted) return;
  state.knowledgeStarted = true;
  startGroupProgress();
  const queue = tickedProfiles();
  state.profiles.forEach((p) => { if (p.found && !p.ticked) p.status = "leftout"; });
  let i = 0;
  const step = () => {
    if (i > 0) {
      queue[i - 1].status = "read";
      state.knowledgeLog.push(`<li><b>${esc(queue[i - 1].platform)}</b><span class="tabular">${esc(queue[i - 1].readMeta)}</span></li>`);
      state.knowledgeNow = "";
    }
    if (i >= queue.length) {
      state.knowledgeBuilt = true;
      state.knowledgeNow = "";
      render();
      return;
    }
    queue[i].status = "reading";
    state.knowledgeNow = "Reading " + queue[i].platform + "…";
    render();
    i += 1;
    knowledgeTimer = setTimeout(step, 900);
  };
  step();
}

function startStyleRead() {
  if (state.styleStarted) return;
  state.styleStarted = true;
  const queue = keptSamples();
  let i = 0;
  const step = () => {
    if (i > 0) {
      queue[i - 1].status = "read";
      if (queue[i - 1].id === "master") state.stageOffer = true;
      state.patternsShown = Math.min(PATTERNS.length, i);
    }
    if (i >= queue.length) {
      state.styleBuilt = true;
      state.patternsShown = Math.min(PATTERNS.length, queue.length);
      render();
      return;
    }
    queue[i].status = "watching";
    render();
    i += 1;
    styleTimer = setTimeout(step, 800);
  };
  step();
}

function startReveal() {
  clearInterval(revealTimer);
  const model = runModel();
  if (!model) return;
  state.reveal = 1;
  render();
  revealTimer = setInterval(() => {
    const current = runModel();
    if (!current || state.step !== 7) {
      clearInterval(revealTimer);
      return;
    }
    if (state.reveal >= current.lines.length) {
      clearInterval(revealTimer);
      const box = document.getElementById("transcript");
      if (box) box.innerHTML = transcriptHTML(current);
      return;
    }
    state.reveal += 1;
    const box = document.getElementById("transcript");
    if (box) box.innerHTML = transcriptHTML(current);
  }, 280);
}

function validLink(value) {
  const s = value.trim();
  return /^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(\/\S*)?$/i.test(s) || /^@[\w.]{2,}$/.test(s);
}

let botShareTimer = 0;
const actions = {
  "logout"() {
    leaveCall();
    haltVoice();
    botProcRun++;
    botLinkRun++;
    botCalRun++;
    const keep = { theme: state.theme, railCollapsed: state.railCollapsed };
    Object.keys(state).forEach((key) => delete state[key]);
    Object.assign(state, structuredClone(INITIAL_STATE), keep);
    window.scrollTo(0, 0);
    render();
    scheduleTeeteeNudge();
  },
  "setup-step"(el) {
    leaveCall();
    const n = Number(el.dataset.step);
    state.nav = "setup";
    if (n === 1) state.step = 1;
    else if (n === 2) state.step = 2;
    else state.step = 4;
    render();
  },
  "toggle-theme"() {
    state.theme = state.theme === "dark" ? "light" : "dark";
    try { localStorage.setItem("tt-theme", state.theme); } catch (err) { /* private mode */ }
    state.afterFocus = "theme-switch";
    render();
  },
  "toggle-rail-collapse"() {
    toggleRailAnimated();
  },
  "gate-build"() {
    state.nav = "setup";
    state.step = 1;
    render();
  },
  "gate-signup"() {
    state.auth = "signup";
    state.authError = "";
    state.authPendingAction = null;
    state.afterFocus = "auth-email";
    render();
  },
  "toggle-rail"(el) {
    const id = el.dataset.id;
    state.railOpen = state.railOpen === id ? null : id;
    state.afterFocus = "rail-" + id;
    render();
  },
  continue() {
    state.linkBlurred = true;
    if (state.searching) return;
    if (linkKind() !== "valid") {
      state.linkAttention = true;
      state.afterFocus = "link";
      render();
      return;
    }
    state.linkAttention = false;
    state.searching = true;
    render();
    setTimeout(() => {
      state.searching = false;
      state.step = 2;
      render();
    }, 4000);
  },
  tick(el) {
    const p = state.profiles.find((item) => item.id === el.dataset.id);
    if (!p || state.knowledgeStarted) return;
    p.ticked = el.checked;
    p.status = p.ticked ? "idle" : "leftout";
    render();
  },
  "remove-profile"(el) {
    const p = state.profiles.find((item) => item.id === el.dataset.id);
    if (!p || state.knowledgeStarted || !p.ticked) return;
    p.ticked = false;
    p.status = "leftout";
    render();
  },
  "remove-knowledge-file"(el) {
    const name = el.dataset.id;
    state.knowledgeFiles = (state.knowledgeFiles || []).filter((item) => item !== name);
    render();
  },
  "restore-profile"(el) {
    const p = state.profiles.find((item) => item.id === el.dataset.id);
    if (!p || state.knowledgeStarted) return;
    p.ticked = true;
    p.status = "idle";
    if (!removedProfiles().length) state.removedOpen = false;
    render();
  },
  "toggle-removed"() {
    state.removedOpen = !state.removedOpen;
    render();
  },
  "edit-profile"(el) {
    state.editing = el.dataset.id;
    const p = state.profiles.find((item) => item.id === el.dataset.id);
    state.editDraft = p ? p.handle : "";
    state.afterFocus = "edit-draft";
    render();
  },
  "save-edit"(el) {
    const p = state.profiles.find((item) => item.id === el.dataset.id);
    if (p && state.editDraft.trim()) p.handle = state.editDraft.trim();
    state.editing = null;
    render();
  },
  "cancel-edit"() {
    state.editing = null;
    render();
  },
  "add-x"() {
    state.xAdding = true;
    state.xError = false;
    state.afterFocus = "x-draft";
    render();
  },
  "save-x"() {
    if (!validLink(state.xDraft)) {
      state.xError = true;
      render();
      return;
    }
    const p = state.profiles.find((item) => item.id === "x");
    p.found = true;
    p.ticked = true;
    p.handle = state.xDraft.trim();
    p.meta = "Link added";
    state.xAdding = false;
    render();
  },
  "add-knowledge"() {
    state.addKnowledge = !state.addKnowledge;
    if (state.addKnowledge) state.afterFocus = "missed";
    render();
  },
  "open-add-knowledge"() {
    state.addKnowledgeOpen = true;
    state.afterFocus = "missed";
    render();
  },
  "close-add-knowledge"() {
    closeAddKnowledge();
  },
  "add-missed"() {
    if (!validLink(state.missed)) {
      toast("Try a profile link instead.");
      return;
    }
    state.profiles.push({
      id: "extra-" + state.profiles.length,
      platform: "Link",
      handle: state.missed.trim(),
      meta: "Pasted link",
      readMeta: "Public page",
      found: true,
      ticked: true,
      status: "idle"
    });
    state.missed = "";
    state.addKnowledgeOpen = false;
    render();
  },
  "build-knowledge"() {
    if (!tickedProfiles().length) return;
    if (!state.accountReady) {
      state.auth = "signup";
      state.authError = "";
      state.authPendingAction = "build-knowledge";
      state.afterFocus = "auth-email";
      render();
      return;
    }
    startKnowledgeRead();
  },
  "signup-google"() {
    state.authVia = "google";
    state.authError = "";
    state.auth = "verify";
    state.afterFocus = "auth-verified";
    render();
  },
  "toggle-auth-password"(el) {
    if (el.dataset.which === "confirm") state.authShowConfirm = !state.authShowConfirm;
    else state.authShowPassword = !state.authShowPassword;
    state.afterFocus = el.dataset.which === "confirm" ? "auth-confirm" : "auth-password";
    render();
  },
  "close-auth"() {
    closeAuth();
  },
  "confirm-email"() {
    state.accountReady = true;
    state.auth = null;
    state.authError = "";
    const pending = state.authPendingAction;
    state.authPendingAction = null;
    if (pending === "connect-drive") {
      state.drive = true;
      toast("Google Drive connected.");
    } else if (pending === "connect-notion") {
      state.notionOpen = true;
      state.afterFocus = "notion";
      render();
    } else {
      render();
    }
  },
  "to-style"() {
    state.step = 3;
    render();
  },
  keep(el) {
    const s = allSamples().find((item) => item.id === el.dataset.id);
    if (!s || state.styleStarted) return;
    s.kept = el.checked;
    render();
  },
  "pick-upload"() {
    const input = document.getElementById("upload-wb");
    if (input) input.click();
  },
  "build-style"() {
    if (!keptSamples().length) return;
    startStyleRead();
  },
  "to-hello"() {
    if (state.step === 2 && state.knowledgeStarted) {
      const pending = knowledgeLines().some((line) => state.lineStatus[line.id] !== "confirmed" && state.lineStatus[line.id] !== "rejected");
      if (pending) return;
    }
    state.step = 4;
    state.nav = "setup";
    render();
  },
  "confirm-line"(el) {
    state.lineStatus[el.dataset.id] = "confirmed";
    if (state.lineEditing === el.dataset.id) state.lineEditing = null;
    render();
  },
  "reject-line"(el) {
    state.lineStatus[el.dataset.id] = "rejected";
    if (state.lineEditing === el.dataset.id) state.lineEditing = null;
    render();
  },
  "restore-line"(el) {
    delete state.lineStatus[el.dataset.id];
    render();
  },
  "edit-line"(el) {
    const sample = allSamples().find((item) => item.id === el.dataset.id);
    if (!sample) return;
    state.lineEditing = sample.id;
    state.lineDraft = sample.title;
    state.afterFocus = "line-draft";
    render();
  },
  "save-line"(el) {
    const sample = allSamples().find((item) => item.id === el.dataset.id);
    const draft = document.getElementById("line-draft");
    if (draft) state.lineDraft = draft.value;
    if (sample && state.lineDraft.trim()) sample.title = state.lineDraft.trim();
    state.lineEditing = null;
    render();
  },
  "toggle-line"(el) {
    state.lineOpen = state.lineOpen === el.dataset.id ? null : el.dataset.id;
    render();
  },
  "toggle-dismissed"() {
    state.dismissedOpen = !state.dismissedOpen;
    render();
  },
  "pick-look"(el) {
    state.presenceLook = el.dataset.id;
    render();
  },
  "pick-voice"(el) {
    state.presenceVoice = el.dataset.id;
    render();
  },
  "pick-library"(el) {
    state.presenceLibrary = el.dataset.id;
    state.presenceVoice = "library";
    state.voiceDialog = false;
    render();
  },
  "listen-library"(el) {
    const voice = LIBRARY_VOICES.find((item) => item.id === el.dataset.id);
    if (!voice || !window.speechSynthesis) return;
    const speak = () => {
      const all = window.speechSynthesis.getVoices();
      const pick = all.find((item) => item.lang && item.lang.startsWith("en"));
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance("If you wait a year, you pay another year of rent and lose today’s payment plan.");
      utter.lang = "en-GB";
      if (pick) utter.voice = pick;
      window.speechSynthesis.speak(utter);
    };
    if (window.speechSynthesis.getVoices().length) speak();
    else window.speechSynthesis.addEventListener("voiceschanged", speak, { once: true });
  },
  "open-voices"() {
    state.voiceDialog = true;
    render();
  },
  "close-voices"() {
    state.voiceDialog = false;
    render();
  },
  "close-knowledge-upsell"() {
    state.knowledgeUpsellOpen = false;
    render();
  },
  "knowledge-upsell-wait"() {
    state.knowledgeUpsellOpen = false;
    render();
  },
  "knowledge-upsell-explore"() {
    state.knowledgeUpsellOpen = false;
    state.knowledgeExploring = true;
    state.teeteeBubble = true;
    state.nav = "roleplay";
    startTeeteeProgress();
    render();
  },
  "knowledge-ready-open"() {
    clearTimeout(readyToastTimer);
    state.knowledgeReadyToast = false;
    state.nav = "setup";
    state.step = 2;
    state.setupStep = 2;
    render();
  },
  "knowledge-ready-dismiss"() {
    clearTimeout(readyToastTimer);
    state.knowledgeReadyToast = false;
    render();
  },
  "presence-next"() {
    if (state.presencePhase !== "choose") return;
    state.presencePhase = "ready";
    state.callLive = true;
    state.callMode = "voice";
    render();
  },
  "call-mode"(el) {
    state.callMode = el.dataset.id === "video" ? "video" : "voice";
    render();
  },
  "call-chat"() {
    toast("Chat coming soon");
  },
  "end-call"() {
    leaveCall();
    state.callCelebrate = true;
    state.nav = "setup";
    state.step = 4;
    render();
  },
  "studio-focus"(el) {
    state.studioFocus = el.dataset.id;
    render();
  },
  "studio-view-editor"() {
    state.studioView = "editor";
    render();
  },
  "studio-view-profile"() {
    state.studioView = "profile";
    if (state.nav === "knowledge") state.nav = "setup";
    render();
  },
  "studio-zoom"(el) {
    const next = state.studioZoom + (el.dataset.id === "in" ? 0.1 : -0.1);
    state.studioZoom = Math.min(1.2, Math.max(0.7, Math.round(next * 10) / 10));
    render();
  },
  "open-studio-knowledge"() {
    state.studioDialog = "knowledge";
    state.studioFocus = "knowledge";
    render();
  },
  "open-studio-style"() {
    state.studioStyleDraft = studioStyleList().slice();
    state.studioStyleEditLine = null;
    state.studioDialog = "style";
    state.studioFocus = "style";
    render();
  },
  "studio-style-edit-line"(el) {
    state.studioStyleEditLine = Number(el.dataset.id);
    render();
  },
  "studio-style-confirm-line"() {
    state.studioStyleEditLine = null;
    render();
  },
  "studio-style-reject-line"() {
    state.studioStyleEditLine = null;
    render();
  },
  "open-studio-presence"() {
    state.studioSnap = {
      look: state.presenceLook,
      voice: state.presenceVoice,
      library: state.presenceLibrary
    };
    state.studioDialog = "presence";
    state.studioFocus = "presence";
    render();
  },
  "share-twin"() {
    const link = "https://trainertwin.com/olga";
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(link).catch(() => {});
      }
    } catch (err) { /* clipboard can be blocked */ }
    toast("Link copied.");
  },
  "create-bot"() {
    state.botEditId = "";
    state.botCreate = true;
    state.botStep = 1;
    state.botDraft = freshBotDraft();
    render();
    const scroller = document.querySelector(".bot-main");
    if (scroller) scroller.scrollTop = 0;
  },
  "twin-attach-remove"(el) {
    state.twinAttachments.splice(Number(el.dataset.id), 1);
    render();
  },
  "bot-exit"() {
    state.botCreate = false;
    state.botEditId = "";
    state.demoIssueOpen = false;
    render();
  },
  "bot-go"(el) {
    const n = Number(el.dataset.id);
    if (n === 2 && !(state.botDraft && state.botDraft.procStarted)) return;
    if (n >= 1 && n <= BOT_TABS.length) state.botStep = n;
    if (n === 2) botFinishReveal(state.botDraft);
    render();
  },
  "bot-next"() {
    const d = state.botDraft;
    if (!d) return;
    if (state.botStep === 2) return;
    state.botStep = 2;
    render();
    botStartProcessing();
  },
  "bot-copy-link"(el) {
    const d = state.botDraft;
    if (!d || !d.linkRevealed) return;
    const link = el.dataset.link;
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(link).catch(() => {});
    d.linkCopied = true;
    render();
    clearTimeout(botCopyTimer);
    botCopyTimer = setTimeout(() => {
      d.linkCopied = false;
      if (state.botDraft === d && state.botStep === 2) render();
    }, 2000);
  },
  "bot-back"() {
    if (state.botStep <= 1) {
      state.botCreate = false;
    } else {
      state.botStep -= 1;
    }
    render();
  },
  "bot-create"() {
    const d = state.botDraft || freshBotDraft();
    state.customBots.unshift({
      id: "custom-bot-" + Date.now(),
      label: "Post-class",
      title: d.name.trim() || "Untitled bot",
      blurb: (d.description || "").trim() || "A bot made from a course.",
      who: "Learners",
      quote: BOT_STARTERS[0],
      sessions: 0
    });
    state.botCreate = false;
    state.studioTab = "bots";
    toast("Bot created.");
  },
  "bot-rec-add"() {
    botAddRecordingLink();
  },
  "bot-file-remove"(el) {
    const d = state.botDraft;
    if (!d) return;
    (el.dataset.kind === "rec" ? d.recordings : d.materials).splice(Number(el.dataset.id), 1);
    render();
  },
  "bot-cal-open"() {
    if (state.botDraft && state.botDraft.procDone) botCalToggle(true);
  },
  "bot-cal-close"() {
    botCalToggle(false);
  },
  "bot-cal-start"() {
    const d = state.botDraft;
    if (!d) return;
    d.calOpen = true;
    d.calActive = true;
    d.calReady = false;
    d.calStage = null;
    d.calTagsShown = false;
    clearTimeout(d.calReasonTimer);
    d.calMsgs = [{ who: "twin", text: BOT_GREETING }];
    d.calMarks = {};
    d.calInput = "";
    d.calStartAt = Date.now();
    render();
    botCalScript();
    clearInterval(botClockTimer);
    botClockTimer = setInterval(() => {
      const live = state.botDraft;
      const el = document.querySelector(".bot-call-page .talk-clock");
      if (!live || !live.calActive) { clearInterval(botClockTimer); return; }
      if (el) el.textContent = botClock(live);
    }, 1000);
  },
  "bot-cal-reason"(el) {
    botCalReasonPicked(BOT_OFF_TAGS[Number(el.dataset.id)] || BOT_OFF_SPOKEN);
  },
  "bot-why-open"(el) {
    whyOpen("bot", Number(el.dataset.id));
  },
  "bot-why-more"() {
    if (!state.botWhy) return;
    state.botWhy.shown += BOT_WHY_STEP;
    render();
  },
  "bot-why-toggle"(el) {
    whyToggle(Number(el.dataset.id));
  },
  "talk-why-toggle"(el) {
    whyToggle(Number(el.dataset.id));
  },
  "talk-why-open"(el) {
    whyOpen("talk", Number(el.dataset.id));
  },
  "talk-why-more"() {
    if (!state.botWhy) return;
    state.botWhy.shown += BOT_WHY_STEP;
    render();
  },
  "talk-why-close"() {
    whyClose();
  },
  "bot-why-close"() {
    whyClose();
  },
  "bot-cal-mute"() {
    const d = state.botDraft;
    if (!d) return;
    d.calMuted = !d.calMuted;
    render();
  },
  "bot-cal-like"(el) {
    const d = state.botDraft;
    if (!d) return;
    d.calMarks[el.dataset.id] = "like";
    talkConfettiBurst(el);
    render();
  },
  "bot-cal-off"(el) {
    const d = state.botDraft;
    if (!d || !d.calReady || d.calStage) return;
    d.calMarks[el.dataset.id] = "off";
    render();
    botCalOffFlow();
  },
  "bot-cal-end"() {
    const d = state.botDraft;
    if (!d || !d.calActive || !d.calReady) return;
    d.calDone += 1;
    botCalToggle(false, (mode) => {
      if (mode === "calibrate") { toast("Calibration saved. Your twin will use it."); return; }
      botConfettiBurst();
      if (d.calDone === 1) toast("Learner link unlocked.");
      // Back on Bot details the link is made right under the description and the CTA becomes Done.
      if (d.linkRevealed) { render(); return; }
      botLinkStart();
    });
  },
  "open-twin-bot"(el) {
    const bot = TWIN_BOTS.find((item) => item.id === el.dataset.id);
    toast(bot ? `Opening “${bot.title}”…` : "Opening bot…");
  },
  "twin-bot-check"(el) {
    const bot = TWIN_BOTS.find((item) => item.id === el.dataset.id);
    state.roleMenuId = "";
    toast(bot ? `Checking “${bot.title}”…` : "Checking bot…");
  },
  "role-calibrate"(el) {
    const row = taskById(el.dataset.id) || sharedRowById(el.dataset.id);
    state.roleMenuId = "";
    if (!row) return;
    // The same full-screen calibration call, opened from a roleplay; End call returns to where you were.
    const d = freshBotDraft();
    Object.assign(d, { name: row.title, description: row.blurb || "", recordings: [{ name: "Roleplay scenario", done: true }], procStarted: true, procDone: true, procPct: 100, revealStep: 5 });
    state.botDraft = d;
    state.botEditId = "";
    state.botCalibrateId = row.id;
    state.botCalibrateReturn = state.nav || "home";
    state.botCreate = true;
    state.botStep = 2;
    state.nav = "setup";
    render();
    botCalToggle(true);
  },
  "rp-setting"(el) {
    state.rpSettings[el.dataset.key] = el.value;
  },
  "rp-setting-pick"(el) {
    state.rpSettings[el.dataset.key] = el.dataset.id;
    render();
  },
  "rp-setting-toggle"(el) {
    state.rpSettings[el.dataset.key] = !state.rpSettings[el.dataset.key];
    render();
  },
  "rps-cat"(el) {
    state.rpsCat = el.dataset.id;
    render();
  },
  "rps-ind"(el) {
    if (el.dataset.cat) state.rpsCat = el.dataset.cat;
    state.rpsInd[state.rpsCat] = el.dataset.id;
    render();
  },
  "rps-draft-cat"(el) {
    const d = state.rpsDraft;
    d.category = el.dataset.id;
    d.industry = RPS_INDUSTRIES[d.category][0];
    applyRpsPreset(d, d.look);
    render();
  },
  "rps-draft-ind"(el) {
    const d = state.rpsDraft;
    d.industry = el.value;
    applyRpsPreset(d, d.look);
    render();
  },
  "rps-persona-view"(el) {
    state.rpsDetailId = el.dataset.id;
    render();
    const scroller = document.querySelector(".main");
    if (scroller) scroller.scrollTop = 0;
  },
  "rps-persona-back"() {
    state.rpsDetailId = "";
    render();
  },
  "rps-role-create"(el) {
    const p = rpsPersonas().find((item) => item.id === el.dataset.id);
    if (!p) return;
    const pre = rpsPresetOf(p);
    const draft = freshRoleDraft();
    draft.look = p.look || p.id;
    draft.name = p.name;
    draft.sub = p.note || "";
    if ((pre.behaviours || []).length) draft.trait = pre.behaviours[0];
    if (pre.difficulty) draft.difficulty = pre.difficulty;
    if (pre.talk) draft.talk = pre.talk;
    state.roleDraft = draft;
    state.roleLookPick = draft.look;
    state.roleCreate = true;
    state.roleManual = null;
    state.roleStep = ROLE_STEPS[0][0];
    state.roleAvatarOpen = false;
    state.roleEditId = "";
    state.roleAsk = "";
    state.rpsDetailId = "";
    state.nav = "roleplay";
    render();
    const scroller = document.querySelector(".main");
    if (scroller) scroller.scrollTop = 0;
  },
  "rps-persona-new"() {
    state.rpsEditId = "";
    state.rpsDraft = {
      category: "sales", industry: RPS_OWN_INDUSTRY,
      name: "", role: "Buyer", look: PERSONAS[0].id, behaviours: [], difficulty: "medium", opening: "Friendly", talk: "",
      age: "", city: "", background: "", formality: "Neutral", length: "Short", interrupts: "Sometimes", pauses: true, fillers: false, phrases: [], phraseDraft: "",
      voice: RPS_VOICES[1].id, pace: "Normal", files: [],
      sources: state.rpKnow.map((k) => Object.assign({}, k))
    };
    applyRpsPreset(state.rpsDraft, PERSONAS[0].id);
    state.rpKnowDraft = "";
    state.rpsStep = 1;
    state.rpsCreate = true;
    state.afterFocus = "rps-name";
    render();
    const scroller = document.querySelector(".main");
    if (scroller) scroller.scrollTop = 0;
  },
  "rps-persona-edit"(el) {
    const p = rpsPersonas().find((item) => item.id === el.dataset.id);
    if (!p) return;
    const pre = rpsPresetOf(p);
    const look = p.look || (PERSONAS.find((item) => item.src === p.src) || PERSONAS[0]).id;
    const behaviourIds = (pre.behaviours && pre.behaviours.length ? pre.behaviours : (p.behaviours || []).map((label) => (ROLE_TRAITS.find((t) => t.label === label) || {}).id).filter(Boolean)).slice();
    state.rpsDraft = {
      category: p.category, industry: p.industry,
      name: p.name, role: p.role, look, behaviours: behaviourIds, difficulty: pre.difficulty || "medium", opening: pre.opening || "Friendly", talk: pre.talk || p.note || "",
      age: pre.age || "", city: pre.city || "", background: pre.background || "", formality: pre.formality || "Neutral", length: pre.length || "Short", interrupts: pre.interrupts || "Sometimes",
      pauses: !!pre.pauses, fillers: !!pre.fillers, phrases: (pre.phrases || []).slice(), phraseDraft: "",
      voice: p.voice || RPS_VOICES[1].id, pace: pre.pace || "Normal", files: [],
      sources: state.rpKnow.map((k) => Object.assign({}, k))
    };
    state.rpsEditId = p.id;
    state.rpKnowDraft = "";
    state.rpsStep = 1;
    state.rpsCreate = true;
    state.rpsDetailId = "";
    render();
    const scroller = document.querySelector(".main");
    if (scroller) scroller.scrollTop = 0;
  },
  "rps-persona-cancel"() {
    if (state.rpsReturn === "tab") {
      state.rpsReturn = "";
      state.nav = "rpsettings";
      try { window.close(); } catch (err) { /* stays open */ }
    }
    if (state.rpsReturn) { state.nav = state.rpsReturn; state.rpsReturn = ""; }
    state.rpsEditId = "";
    state.rpsCreate = false;
    state.rpsDraft = null;
    render();
  },
  "rps-step"(el) {
    state.rpsStep = Number(el.dataset.id);
    render();
  },
  "rps-next"() {
    state.rpsStep = Math.min(RPS_STEPS.length, state.rpsStep + 1);
    render();
  },
  "rps-back"() {
    if (state.rpsStep === 1) { actions["rps-persona-cancel"](); return; }
    state.rpsStep -= 1;
    render();
  },
  "rps-persona-photo"(el) {
    applyRpsPreset(state.rpsDraft, el.dataset.id);
    render();
  },
  "rps-persona-trait"(el) {
    const list = state.rpsDraft.behaviours;
    const id = el.dataset.id;
    if (list.includes(id)) state.rpsDraft.behaviours = list.filter((x) => x !== id);
    else if (list.length < 3) list.push(id);
    else toast("Pick up to three behaviours.");
    render();
  },
  "rps-pick"(el) {
    state.rpsDraft[el.dataset.key] = el.dataset.id;
    render();
  },
  "rps-toggle"(el) {
    state.rpsDraft[el.dataset.key] = !state.rpsDraft[el.dataset.key];
    render();
  },
  "rps-phrase-add"() {
    const d = state.rpsDraft;
    const next = (d.phraseDraft || "").trim();
    if (!d || !next || d.phrases.length >= 4) return;
    d.phrases.push(next);
    d.phraseDraft = "";
    state.afterFocus = "rps-phrase";
    render();
  },
  "rps-phrase-remove"(el) {
    state.rpsDraft.phrases.splice(Number(el.dataset.id), 1);
    render();
  },
  "rps-persona-diff"(el) {
    state.rpsDraft.difficulty = el.dataset.id;
    render();
  },
  "rps-persona-open"(el) {
    state.rpsDraft.opening = el.dataset.id;
    render();
  },
  "rps-persona-save"() {
    const d = state.rpsDraft;
    if (!d) return;
    if (!d.name.trim()) { state.rpsStep = 1; render(); toast("Add a name first."); return; }
    if (!d.behaviours.length) { state.rpsStep = 1; render(); toast("Pick at least one behaviour."); return; }
    const photo = PERSONAS.find((item) => item.id === d.look) || PERSONAS[0];
    const on = d.sources.filter((k) => k.on).length;
    const parts = [];
    if (on) parts.push(on + (on === 1 ? " source" : " sources"));
    if (d.files.length) parts.push(d.files.length + (d.files.length === 1 ? " file" : " files"));
    const persona = {
      id: state.rpsEditId || "custom-" + Date.now(),
      category: d.category,
      industry: d.industry,
      name: d.name.trim(),
      role: d.role,
      src: photo.src,
      behaviours: d.behaviours.map((id) => (ROLE_TRAITS.find((t) => t.id === id) || { label: id }).label),
      meta: [d.age.trim(), d.city.trim()].filter(Boolean).join(", "),
      speaking: [d.formality, d.length + " answers", d.interrupts === "Never" ? "" : "Interrupts " + d.interrupts.toLowerCase(), d.fillers ? "Uses fillers" : "", d.pauses ? "Pauses to think" : ""].filter(Boolean),
      voice: d.voice,
      knowledge: parts.join(" · "),
      note: d.talk.trim(),
      look: d.look,
      preset: { age: d.age.trim(), city: d.city.trim(), background: d.background.trim(), behaviours: d.behaviours.slice(), difficulty: d.difficulty, opening: d.opening, formality: d.formality, length: d.length, interrupts: d.interrupts, phrases: d.phrases.slice(), talk: d.talk.trim() }
    };
    const editing = state.rpsEditId;
    if (editing && state.rpPersonas.some((item) => item.id === editing)) state.rpPersonas = state.rpPersonas.map((item) => (item.id === editing ? persona : item));
    else if (editing) state.rpOverrides[editing] = persona;
    else state.rpPersonas.push(persona);
    state.rpsEditId = "";
    savePersonaStore();
    if (state.rpsReturn === "tab") {
      state.rpsReturn = "";
      state.rpsCreate = false;
      state.rpsDraft = null;
      state.nav = "rpsettings";
      render();
      toast("Persona updated. You can close this tab.");
      setTimeout(() => { try { window.close(); } catch (err) { /* stays open */ } }, 900);
      return;
    }
    if (state.rpsReturn) { state.nav = state.rpsReturn; state.rpsReturn = ""; if (state.roleDraft && (persona.look || persona.id) === state.roleDraft.look) { state.rpsCat = d.category; state.rpsInd[d.category] = d.industry; state.rpsCreate = false; state.rpsDraft = null; applyRolePersona(persona.id); render(); toast("Persona updated."); return; } }
    state.rpsCat = d.category;
    state.rpsInd[d.category] = d.industry;
    state.rpsCreate = false;
    state.rpsDraft = null;
    render();
    toast(editing ? "Persona updated." : "Persona saved.");
  },
  "rps-persona-default"(el) {
    const p = rpsPersonas().find((item) => item.id === el.dataset.id);
    state.rpDefaults[p ? p.category : state.rpsCat] = el.dataset.id;
    toast(p ? p.name + " is now the default persona." : "Default persona updated.");
  },
  "rps-voice-pick"(el) {
    state.rpsDraft.voice = el.dataset.id;
    render();
  },
  "rps-pace"(el) {
    state.rpsDraft.pace = el.dataset.id;
    render();
  },
  "rps-voice-play"(el) {
    playVoiceSample(el.dataset.id);
  },
  "rps-upload"(el) {
    const d = state.rpsDraft;
    if (!d) return;
    Array.from(el.files || []).forEach((file) => { if (!d.files.includes(file.name)) d.files.push(file.name); });
    el.value = "";
    render();
  },
  "rps-file-remove"(el) {
    state.rpsDraft.files.splice(Number(el.dataset.id), 1);
    render();
  },
  "rps-know-toggle"(el) {
    const k = state.rpsDraft.sources.find((item) => item.id === el.dataset.id);
    if (k) k.on = !k.on;
    render();
  },
  "rps-know-add"() {
    const value = state.rpKnowDraft.trim();
    if (!value || !state.rpsDraft) return;
    let name = value;
    try { name = new URL(/^https?:/i.test(value) ? value : "https://" + value).hostname.replace(/^www\./, ""); } catch (err) { /* keep the raw text */ }
    state.rpsDraft.sources.push({ id: "k-" + Date.now(), name, meta: "Added just now", on: true });
    state.rpKnowDraft = "";
    state.afterFocus = "rps-know-new";
    render();
  },
  "twin-bot-calibrate"(el) {
    const bot = twinBots().find((item) => item.id === el.dataset.id);
    state.roleMenuId = "";
    if (!bot) return;
    // Calibrate opens the twin's calibration overview first; "Calibrate now" there starts the call.
    state.calOverviewId = bot.id;
    state.calibId = "";
    state.botDetailId = "";
    state.nav = "setup";
    render();
    const scroller = document.querySelector(".main");
    if (scroller) scroller.scrollTop = 0;
  },
  "cal-overview-back"() {
    state.calOverviewId = "";
    render();
  },
  "cal-now"(el) {
    const bot = twinBots().find((item) => item.id === el.dataset.id);
    if (!bot) return;
    // Opens the full-screen calibration call for this twin, the same one used when a twin is created.
    const d = freshBotDraft();
    Object.assign(d, { name: bot.title, description: bot.blurb, recordings: [{ name: "Course material", done: true }], procStarted: true, procDone: true, procPct: 100, revealStep: 5 });
    state.botDraft = d;
    state.botEditId = "";
    state.botCalibrateId = bot.id;
    state.botCalibrateReturn = "";
    state.botCreate = true;
    state.botStep = 2;
    state.nav = "setup";
    render();
    botCalToggle(true);
  },
  "twin-bot-share"(el) {
    state.roleMenuId = "";
    state.botShare = el.dataset.id;
    state.botShareCopied = false;
    render();
  },
  "share-bot-copy"(el) {
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(el.dataset.link).catch(() => {});
    state.botShareCopied = true;
    render();
    clearTimeout(botShareTimer);
    botShareTimer = setTimeout(() => {
      state.botShareCopied = false;
      if (state.botShare) render();
    }, 2000);
  },
  "share-bot-close"() {
    clearTimeout(botShareTimer);
    state.botShare = "";
    state.botShareCopied = false;
    render();
  },
  "twin-persona-open"() {
    state.roleMenuId = "";
    state.twinPersonaOpen = true;
    render();
    const scroller = document.querySelector(".main");
    if (scroller) scroller.scrollTop = 0;
  },
  "twin-create-roleplay"() {
    state.twinPersonaOpen = false;
    state.nav = "roleplay";
    actions["role-new"]();
  },
  "twin-persona-back"() {
    state.twinPersonaOpen = false;
    render();
  },
  "twin-brain-open"() {
    state.roleMenuId = "";
    actions.nav({ dataset: { id: "knowledge" } });
  },
  "twin-bot-edit"(el) {
    const bot = el.dataset.id === TWIN_ALL.id ? TWIN_ALL : twinBots().find((item) => item.id === el.dataset.id);
    state.roleMenuId = "";
    if (!bot) return;
    // Edit opens the course page with what this twin already learnt from, plus room to add more.
    const course = BOT_COURSE[bot.id] || { rec: [], mat: [] };
    const d = freshBotDraft();
    d.recordings = course.rec.map((name) => ({ name, done: true }));
    d.materials = course.mat.map((name) => ({ name, done: true }));
    d.name = bot.title;
    d.description = bot.blurb;
    const saved = state.botSettings[bot.id] || {};
    d.screenshare = saved.screenshare !== false;
    d.upload = saved.upload !== false;
    d.allKnowledge = saved.allKnowledge !== false;
    state.botDraft = d;
    state.botEditId = bot.id;
    state.botStep = 1;
    state.botCreate = true;
    state.nav = "setup";
    render();
    const scroller = document.querySelector(".create-scroll");
    if (scroller) scroller.scrollTop = 0;
  },
  "bot-know-open"() {
    state.knowOpen = true;
    render();
  },
  "bot-know-close"() {
    state.knowOpen = false;
    render();
  },
  "bot-know-toggle"(el) {
    const d = state.botDraft;
    if (!d) return;
    const off = d.knowOff || (d.knowOff = []);
    const id = el.dataset.id;
    const at = off.indexOf(id);
    if (at >= 0) off.splice(at, 1);
    else off.push(id);
    render();
  },
  "bot-setting-toggle"(el) {
    const d = state.botDraft;
    if (!d) return;
    const key = el.dataset.key;
    d[key] = d[key] === false;
    render();
  },
  "bot-edit-save"() {
    const d = state.botDraft;
    const added = d ? d.recordings.filter((f) => !f.done).length + d.materials.filter((f) => !f.done).length : 0;
    if (d && state.botEditId) state.botSettings[state.botEditId] = { screenshare: d.screenshare !== false, upload: d.upload !== false, allKnowledge: d.allKnowledge !== false };
    state.botCreate = false;
    state.botEditId = "";
    render();
    toast(added ? `Saved. TrainerTwin is reading ${added} new ${added === 1 ? "item" : "items"}.` : "Changes saved.");
  },
  "twin-bot-remove"(el) {
    const id = el.dataset.id;
    const bot = TWIN_BOTS.find((item) => item.id === id);
    askConfirm({
      title: `Remove “${bot ? bot.title : "this bot"}”?`,
      sub: "It will stop answering and disappear from your twin’s bots.",
      label: "Remove",
      run: () => {
        if (!state.botsRemoved.includes(id)) state.botsRemoved.push(id);
        if (state.botDetailId === id) { state.botDetailId = ""; state.botChatId = ""; }
        toast("Bot removed.");
      }
    });
  },
  "twin-info-toggle"() {
    state.twinInfoOpen = !state.twinInfoOpen;
    render();
  },
  "ask-type-toggle"(el) {
    const scope = el.dataset.scope;
    state.askMenu = state.askMenu === scope ? "" : scope;
    render();
  },
  "ask-type-pick"(el) {
    const scope = el.dataset.scope;
    const id = el.dataset.id;
    if (scope === "home") state.askMode = id;
    else if (scope === "tee") state.teeAskMode = id;
    else state.twinAskMode = id;
    state.askMenu = "";
    render();
    const btn = document.querySelector('[data-action="ask-type-toggle"][data-scope="' + scope + '"]');
    if (btn) btn.focus();
  },
  "twin-ask-submit"() {
    const text = state.twinAsk.trim();
    // Bot: the pasted link (and any attached documents) go straight into the Create bot flow, at Bot details.
    if (twinAskMode().id === "bot") {
      startBotFromTwin();
      return;
    }
    if (!text) return;
    toast(`Building a ${twinAskMode().label.toLowerCase()} from that…`);
    state.twinAsk = "";
    render();
  },
  "talk-open"() {
    state.talkOpen = true;
    TALK_TILT.rx = TALK_TILT.ry = TALK_TILT.trx = TALK_TILT.tr = 0;
    TALK_TILT.s = TALK_TILT.ts = 1;
    state.talk = { startedAt: performance.now(), idx: 0, shown: 0, marks: {}, muted: false, logOpen: false, script: TALK_SCRIPT.map((turn, i) => ({ ...turn, key: i })) };
    state.demoIssueOpen = false;
    render();
  },
  "talk-close"() {
    clearTimeout(talkTimer);
    talkTimer = 0;
    talkSpeechStop();
    TALK_TILT.rx = TALK_TILT.ry = TALK_TILT.trx = TALK_TILT.tr = 0;
    TALK_TILT.s = TALK_TILT.ts = 1;
    state.talkOpen = false;
    state.talk = null;
    state.demoIssueOpen = false;
    render();
  },
  "talk-end"() {
    state.talk.confirmEnd = true;
    render();
  },
  "talk-end-no"() {
    state.talk.confirmEnd = false;
    render();
  },
  "talk-end-yes"() {
    const t = state.talk;
    clearTimeout(talkTimer);
    talkTimer = 0;
    talkSpeechStop();
    t.confirmEnd = false;
    t.ended = true;
    // The first test call during setup ends on a celebration.
    if (!state.firstCallDone && !state.twinReady) t.celebrate = true;
    state.firstCallDone = true;
    t.duration = talkClock(t);
    t.logOpen = false;
    state.demoIssueOpen = false;
    render();
  },
  "talk-mute"() {
    state.talk.muted = !state.talk.muted;
    render();
  },
  "talk-log"() {
    state.talk.logOpen = !state.talk.logOpen;
    render();
  },
  "talk-like"(el) {
    state.talk.marks[el.dataset.id] = "like";
    talkConfettiBurst(el);
    render();
  },
  "talk-reason"(el) {
    const t = state.talk;
    const cur = t && talkScript(t)[t.idx];
    if (!cur || cur.kind !== "ask") return;
    // Olga's reply becomes the tag she tapped, and the call moves straight on.
    const next = talkScript(t)[t.idx + 1];
    if (next) next.text = BOT_OFF_TAGS[Number(el.dataset.id)] || next.text;
    clearTimeout(talkTimer);
    talkSpeechStop();
    t.idx += 1;
    t.shown = 0;
    render();
  },
  "talk-off"(el) {
    const t = state.talk;
    const id = Number(el.dataset.id);
    if (t.marks[id]) return;
    t.marks[id] = "off";
    // The twin asks why, Olga answers, the twin offers another try and gives it, all inside the call.
    const marked = talkScript(t)[id];
    const revised = TALK_REVISED[marked.key] || TALK_REVISED_FALLBACK;
    t.script.splice(t.idx + 1, 0,
      { who: "twin", kind: "ask", text: BOT_OFF_QUESTION },
      { who: "olga", text: BOT_OFF_SPOKEN },
      { who: "twin", kind: "ack", text: BOT_OFF_ACK },
      { who: "olga", text: BOT_RETRY_YES },
      { who: "twin", text: revised, key: "r" + marked.key }
    );
    render();
  },
  "studio-voice"(el) {
    const id = el.dataset.id;
    if (id === "yours") state.presenceVoice = "yours";
    else {
      state.presenceVoice = "library";
      state.presenceLibrary = id;
    }
    render();
  },
  "close-studio"() {
    if (state.studioDialog === "presence" && state.studioSnap) {
      state.presenceLook = state.studioSnap.look;
      state.presenceVoice = state.studioSnap.voice;
      state.presenceLibrary = state.studioSnap.library;
    }
    state.studioDialog = null;
    state.studioSnap = null;
    state.studioStyleEditLine = null;
    render();
  },
  "save-studio-style"() {
    const next = state.studioStyleDraft.map((line) => line.trim()).filter(Boolean);
    state.studioStyles = next.length ? next : PATTERNS.map((item) => item.title);
    state.studioSnap = null;
    const lead = state.studioStyles[0];
    studioRefresh("Updated. She now teaches from: " + lead);
  },
  "save-studio-presence"() {
    state.studioSnap = null;
    const voice = studioVoiceCopy();
    studioRefresh("Updated. Face is " + studioLook().label + ", voice is " + voice.title + ".");
  },
  "go-studio"() {
    leaveCall();
    state.calibId = "";
    state.calOverviewId = "";
    state.twinReady = true;
    state.nav = "setup";
    state.studioView = "profile";
    render();
  },
  "go-roleplays"() {
    state.callCelebrate = false;
    state.twinReady = true;
    state.roleFilter = "draft";
    state.nav = "roleplay";
    render();
  },
  "role-publish"(el) {
    const task = taskById(el.dataset.id);
    state.roleMenuId = "";
    if (!task) {
      render();
      return;
    }
    task.pre = true;
    state.sharedRemoved = state.sharedRemoved.filter((id) => id !== task.id);
    if (!sharedRowById(task.id)) state.publishedExtra.push(publishedRowFromTask(task));
    toast(`“${task.title}” is published.`);
  },
  "role-draft-remove"(el) {
    const id = el.dataset.id;
    const task = taskById(id);
    askConfirm({
      title: `Remove “${task ? task.title : "this roleplay"}”?`,
      sub: "It will be removed from your unpublished roleplays.",
      label: "Remove",
      run: () => {
        if (!state.draftsRemoved.includes(id)) state.draftsRemoved.push(id);
        toast("Removed from unpublished.");
      }
    });
  },
  "role-view"(el) {
    state.roleView = el.dataset.id === "card" ? "card" : "list";
    state.roleMenuId = "";
    render();
  },
  "role-filter"(el) {
    state.roleFilter = el.dataset.id;
    state.roleMenuId = "";
    render();
  },
  "role-open"(el) {
    state.nav = "roleplay";
    state.roleDetailId = el.dataset.id;
    state.roleMenuId = "";
    state.roleChatId = "";
    render();
  },
  "twin-bot-open"(el) {
    state.botDetailFrom = state.nav === "doubt" ? "doubt" : "";
    state.nav = "setup";
    state.botDetailId = el.dataset.id;
    state.botDetailTab = "learners";
    state.botChatId = "";
    state.roleMenuId = "";
    render();
  },
  "bot-detail-back"() {
    if (state.botDetailFrom) state.nav = state.botDetailFrom;
    state.botDetailFrom = "";
    state.botDetailId = "";
    state.botChatId = "";
    render();
  },
  "bot-detail-tab"(el) {
    state.botDetailTab = el.dataset.id;
    state.botChatId = "";
    render();
  },
  "twin-session-open"(el) {
    state.twinSessionBot = el.dataset.bot;
    state.twinSessionId = el.dataset.id;
    render();
    const scroller = document.querySelector(".main");
    if (scroller) scroller.scrollTop = 0;
  },
  "twin-rate"(el) {
    if (el.dataset.v === "like") {
      state.twinRatings[el.dataset.key] = { v: "like", reasons: [], note: "" };
      toast("Noted. This one feels like Olga.");
    } else {
      state.twinOff = { key: el.dataset.key, text: el.dataset.text || "", reasons: [], note: "" };
    }
    render();
  },
  "twin-rate-clear"(el) {
    delete state.twinRatings[el.dataset.key];
    render();
  },
  "twin-off-reason"(el) {
    const o = state.twinOff;
    if (!o) return;
    const id = el.dataset.id;
    o.reasons = o.reasons.includes(id) ? o.reasons.filter((x) => x !== id) : o.reasons.concat(id);
    render();
  },
  "twin-off-submit"() {
    const o = state.twinOff;
    if (!o) return;
    if (!o.reasons.length && !o.note.trim()) { toast("Pick a reason first."); return; }
    state.twinRatings[o.key] = { v: "off", reasons: o.reasons.slice(), note: o.note.trim() };
    state.twinOff = null;
    render();
    toast("Thanks. Olga’s twin will learn from this.");
  },
  "twin-off-cancel"() {
    state.twinOff = null;
    render();
  },
  "sessions-open"(el) {
    state.sessionsView = el.dataset.id === "qna" ? "qna" : "role";
    render();
    const scroller = document.querySelector(".main");
    if (scroller) scroller.scrollTop = 0;
  },
  "sessions-close"() {
    state.sessionsView = "";
    render();
  },
  "ts-filter"(el) {
    state.twinSessFilter[el.dataset.key] = el.value;
    render();
  },
  "twin-session-back"() {
    state.twinSessionId = "";
    render();
  },
  "bot-chat"(el) {
    state.botChatId = el.dataset.id;
    render();
  },
  "bot-chat-back"() {
    state.botChatId = "";
    render();
  },
  "role-detail-back"() {
    state.roleDetailId = "";
    state.roleChatId = "";
    render();
  },
  "session-open"(el) {
    state.sessionReportRole = el.dataset.role;
    state.sessionReportId = el.dataset.id;
    render();
    const scroller = document.querySelector(".main");
    if (scroller) scroller.scrollTop = 0;
  },
  "session-report-back"() {
    state.sessionReportId = "";
    render();
  },
  "role-chat"(el) {
    state.roleChatId = el.dataset.id;
    render();
  },
  "role-chat-back"() {
    state.roleChatId = "";
    render();
  },
  "role-row-menu"(el) {
    const id = el.dataset.id;
    state.roleMenuId = state.roleMenuId === id ? "" : id;
    state.roleMenuFocus = !!state.roleMenuId;
    render();
  },
  "role-row-pause"(el) {
    const row = sharedRowById(el.dataset.id);
    if (!row) return;
    const pausing = sharedStatus(row) !== "paused";
    state.sharedStatus[row.id] = pausing ? "paused" : "active";
    state.roleMenuId = "";
    toast(pausing ? "Paused." : "Active again.");
  },
  "role-row-remove"(el) {
    const id = el.dataset.id;
    const row = sharedRowById(id);
    askConfirm({
      title: `${el.textContent.trim() === "Delete" ? "Delete" : "Remove"} “${row ? row.title : "this roleplay"}”?`,
      sub: "It will be removed from your published roleplays, and learners can no longer practise on it.",
      label: el.textContent.trim() === "Delete" ? "Delete" : "Remove",
      run: () => {
        if (!state.sharedRemoved.includes(id)) state.sharedRemoved.push(id);
        if (state.roleDetailId === id) state.roleDetailId = "";
        toast("Removed from published.");
      }
    });
  },
  "confirm-yes"() {
    const run = confirmRun;
    state.confirm = null;
    confirmRun = null;
    if (run) run();
    else render();
  },
  "confirm-cancel"() {
    closeConfirm();
  },
  "role-row-test"(el) {
    state.roleMenuId = "";
    actions["open-demo"](el);
  },
  "role-new"() {
    state.roleCreate = true;
    state.roleManual = null;
    state.roleStep = ROLE_STEPS[0][0];
    state.roleAvatarOpen = false;
    state.roleEditId = "";
    state.roleAsk = "";
    state.roleDraft = freshRoleDraft();
    state.roleLookPick = state.roleDraft.look;
    state.afterFocus = "tee-ask";
    render();
  },
  "role-configure"(el) {
    const task = taskById(el.dataset.id) || sharedRowById(el.dataset.id);
    const draft = draftFromTask(task);
    state.roleCreate = true;
    state.roleManual = true;
    state.roleStep = ROLE_STEPS[0][0];
    state.roleAvatarOpen = false;
    state.nav = "roleplay";
    state.roleEditId = task ? task.id : "";
    state.roleDraft = draft;
    state.roleAsk = askFromTask(task, draft);
    state.roleLookPick = draft.look;
    state.roleMenuId = "";
    render();
  },
  "open-teetee"() {
    if (!state.teeteeThread.length) {
      state.teeteeThread = [
        { who: "tee", text: "How are you feeling today?" },
        { who: "tee", text: "You could build a video with your twin today!" }
      ];
    }
    state.teeteeOpen = true;
    state.afterFocus = "tee-chat-input";
    render();
  },
  "close-teetee"() {
    haltVoice();
    state.teeteeOpen = false;
    render();
  },
  "close-teetee-bubble"() {
    state.teeteeBubble = false;
    render();
  },
  "tee-mode"(el) {
    const next = el.dataset.id === "talk" ? "talk" : "chat";
    if (state.teeteeMode === next) return;
    haltVoice();
    state.teeteeMode = next;
    state.teeteeDraft = "";
    render();
  },
  "tee-chat-mic"() {
    if (state.listening) stopListening();
    else startListening("tee-chat-input");
  },
  "tee-talk"() {
    if (state.listening) stopListening();
    else {
      state.teeteeDraft = "";
      startListening("tee-talk");
    }
  },
  "tee-chat-chip"(el) {
    const chip = TEE_CHIPS.find((item) => item.id === el.dataset.id);
    if (!chip) return;
    state.teeteeDraft = chip.text;
    actions["tee-chat-send"]();
  },
  "tee-chat-send"() {
    const text = (state.teeteeDraft || "").trim();
    if (!text) {
      state.afterFocus = "tee-chat-input";
      return;
    }
    state.teeteeThread.push({ who: "you", text });
    state.teeteeThread.push({ who: "tee", text: teeChatReply(text) });
    state.teeteeDraft = "";
    state.afterFocus = "tee-chat-input";
    render();
  },
  "role-exit"() {
    state.roleCreate = false;
    state.roleAvatarOpen = false;
    state.roleEditId = "";
    state.roleAsk = "";
    render();
  },
  "tee-suggest"(el) {
    const text = (TEE_SUGGESTIONS[Number(el.dataset.id)] || {}).text || "";
    state.roleAsk = text;
    state.afterFocus = "tee-ask";
    render();
    const box = document.getElementById("tee-ask");
    if (box) {
      box.style.height = "auto";
      box.style.height = box.scrollHeight + "px";
    }
  },
  "tee-ask"() {
    const prompt = (state.roleAsk || "").trim();
    if (!prompt) {
      toast("Tell me the scenario first.");
      state.afterFocus = "tee-ask";
      render();
      return;
    }
    if (!state.roleCreate) {
      state.roleCreate = true;
      state.roleStep = 1;
      state.roleAvatarOpen = false;
      state.roleEditId = "";
      state.roleDraft = freshRoleDraft();
      state.roleLookPick = state.roleDraft.look;
    }
    if (!state.roleDraft) state.roleDraft = freshRoleDraft();
    const draft = state.roleDraft;
    draft.asked = true;
    syncRubric(draft);
    draft.scenario = "";
    draft.learnerRole = "";
    draft.goals = [];
    draft.goalDraft = "";
    state.roleStep = 1;
    state.roleManual = true;
    render();
    const plan = teePlan(prompt);
    setTimeout(() => teeTypeFill(plan), 450);
  },
  "role-help"() {
    toast("Plan the scene, set your twin, then try the roleplay before you save.");
  },
  "role-back"() {
    const pos = roleStepPos(state.roleStep);
    if (pos <= 0) {
      state.roleCreate = false;
      state.roleAsk = "";
      render();
      return;
    }
    state.roleStep = ROLE_STEPS[pos - 1][0];
    if (state.roleStep === 2) prefillRoleAgent();
    render();
  },
  "role-next"() {
    const pos = roleStepPos(state.roleStep);
    if (pos < ROLE_STEPS.length - 1) state.roleStep = ROLE_STEPS[pos + 1][0];
    if (state.roleStep === 2) prefillRoleAgent();
    render();
  },
  "role-go"(el) {
    const n = Number(el.dataset.id);
    if (roleStepPos(n) >= 0) state.roleStep = n;
    if (state.roleStep === 2) prefillRoleAgent();
    render();
  },
  "role-trait"(el) {
    if (!state.roleDraft) return;
    state.roleDraft.trait = state.roleDraft.trait === el.dataset.id ? "" : el.dataset.id;
    render();
  },
  "role-generate"() {
    syncRoleOpening();
    state.afterFocus = "role-opening";
    render();
  },
  "role-generate-scenario"() {
    if (!state.roleDraft) return;
    const pool = ROLE_EXAMPLES.filter((item) => item.text !== state.roleDraft.scenario);
    const item = (pool.length ? pool : ROLE_EXAMPLES)[Math.floor(Math.random() * (pool.length ? pool.length : ROLE_EXAMPLES.length))];
    state.roleDraft.scenario = item.text;
    state.afterFocus = "role-scenario";
    render();
    const field = document.getElementById("role-scenario");
    if (field) {
      field.style.height = "auto";
      field.style.height = Math.min(field.scrollHeight, 150) + "px";
    }
  },
  "role-goal-add"() {
    if (!state.roleDraft) return;
    const next = state.roleDraft.goalDraft.trim();
    if (!next || state.roleDraft.goals.length >= 5) return;
    state.roleDraft.goals.push(next);
    state.roleDraft.goalDraft = "";
    state.afterFocus = "role-goal";
    render();
  },
  "role-rubric-add"() {
    const d = state.roleDraft;
    if (!d) return;
    const rubric = d.rubric || (d.rubric = roleRubricFor("sales"));
    d.rubricEdited = true;
    const name = (d.rubricName || "").trim();
    if (!name) { state.afterFocus = "role-rubric-name"; toast("Name the score first."); render(); return; }
    if (rubric.length >= 8) return;
    const points = Math.min(100, Math.max(1, Math.round(Number(d.rubricPoints) || 10)));
    rubric.push({ name, points });
    d.rubricName = "";
    d.rubricPoints = "";
    state.afterFocus = "role-rubric-name";
    render();
  },
  "role-rubric-remove"(el) {
    const d = state.roleDraft;
    if (!d || !d.rubric) return;
    d.rubric.splice(Number(el.dataset.id), 1);
    d.rubricEdited = true;
    render();
  },
  "role-goal-remove"(el) {
    if (!state.roleDraft) return;
    state.roleDraft.goals.splice(Number(el.dataset.id), 1);
    render();
  },
  "role-persona"(el) {
    const persona = PERSONAS.find((item) => item.id === el.dataset.id);
    if (!state.roleDraft || !persona) return;
    state.roleDraft.look = persona.id;
    state.roleDraft.name = persona.name;
    state.roleDraft.sub = "";
    render();
  },
  "role-pick-persona"(el) {
    applyRolePersona(el.dataset.id);
    render();
  },
  "role-persona-settings"(el) {
    // The persona editor opens in its own tab so the roleplay being built stays where it is.
    window.open(location.pathname + "?editPersona=" + encodeURIComponent(el.dataset.id), "_blank");
  },
  "role-difficulty"(el) {
    if (!state.roleDraft) return;
    state.roleDraft.difficulty = el.dataset.id;
    render();
  },
  "role-list-add"(el) {
    const d = state.roleDraft;
    const key = el && el.dataset.key;
    if (!d || !d[key]) return;
    const next = (d[key + "Draft"] || "").trim();
    if (!next || d[key].length >= 6) return;
    d[key].push(next);
    d[key + "Draft"] = "";
    state.afterFocus = "role-list-" + key;
    render();
  },
  "role-list-remove"(el) {
    const d = state.roleDraft;
    const key = el && el.dataset.key;
    if (!d || !d[key]) return;
    d[key].splice(Number(el.dataset.id), 1);
    render();
  },
  "role-avatar-open"() {
    state.roleLookPick = state.roleDraft ? state.roleDraft.look : PERSONAS[0].id;
    state.roleAvatarOpen = true;
    render();
  },
  "role-look"(el) {
    state.roleLookPick = el.dataset.id;
    render();
  },
  "role-avatar-save"() {
    const persona = PERSONAS.find((item) => item.id === state.roleLookPick);
    if (state.roleDraft && persona) {
      state.roleDraft.look = persona.id;
      state.roleDraft.name = persona.name;
    }
    state.roleAvatarOpen = false;
    render();
  },
  "role-avatar-cancel"() {
    state.roleAvatarOpen = false;
    render();
  },
  "role-voice"() {
    toast(`${(state.roleDraft && state.roleDraft.name) || "The persona"}’s voice plays in the practice call.`);
  },
  "role-try"() {
    ensureRoleAgent();
    actions["open-demo"]({ dataset: { id: "role-draft" } });
  },
  "role-create"() {
    ensureRoleAgent();
    const draft = state.roleDraft || freshRoleDraft();
    const title = draft.title.trim() || roleAutoTitle(draft) || "New roleplay";
    const blurb = (draft.scenario.trim().split("\n").find(Boolean) || "A new practice scene.").slice(0, 140);
    const preview = draft.opening.trim() ? ["Buyer: " + draft.opening.trim()] : [];
    const existing = state.roleEditId ? (taskById(state.roleEditId) || sharedRowById(state.roleEditId)) : null;
    let message;
    let createdId = "";
    if (existing) {
      existing.title = title;
      if (sharedRowById(existing.id) === existing) {
        // A published roleplay keeps its card blurb; its scenario and quote follow the edit.
        existing.scenario = draft.scenario.trim() || existing.scenario;
        if (draft.opening.trim()) existing.quote = draft.opening.trim();
      } else {
        existing.blurb = blurb;
      }
      existing.preview = preview.length ? preview : existing.preview || [];
      existing.roleDraft = cloneRoleDraft(draft);
      existing.roleAsk = state.roleAsk;
      message = "Roleplay updated.";
    } else {
      createdId = "custom-" + Date.now();
      state.customRoles.unshift({
        id: createdId,
        title,
        blurb,
        pre: false,
        preview,
        roleDraft: cloneRoleDraft(draft),
        roleAsk: state.roleAsk
      });
    }
    state.roleCreate = false;
    state.roleAvatarOpen = false;
    state.roleEditId = "";
    state.roleAsk = "";
    // Create and publish: a new roleplay goes straight to the published list.
    if (createdId) { actions["role-publish"]({ dataset: { id: createdId } }); return; }
    toast(message);
  },
  "analytics-topic"(el) {
    const topic = ANALYTICS_TOPICS.find((item) => item.id === el.dataset.id);
    if (!topic) return;
    state.analyticsAsk = "";
    state.analyticsAnswer = { q: topic.label, a: topic.answer };
    render();
  },
  "analytics-ask"() {
    const q = state.analyticsAsk.trim();
    if (!q) return;
    state.analyticsAnswer = { q, a: analyticsReply(q) };
    state.analyticsAsk = "";
    render();
    // Bring the answer (it sits in the card at the top) into view.
    const scroller = document.querySelector(".main");
    if (scroller) scroller.scrollTop = 0;
    window.scrollTo(0, 0);
  },
  "analytics-review"() {
    toast("Opening the replies to review…");
  },
  "ask-mic"() {
    if (state.listening) stopListening();
    else startListening("composer");
  },
  "twin-mic"() {
    if (state.listening) stopListening();
    else startListening("twin-ask");
  },
  "tee-mic"() {
    if (state.listening) stopListening();
    else startListening("tee-ask");
  },
  "ask-topic"(el) {
    const topic = ASK_TOPICS.find((item) => item.id === el.dataset.id);
    if (!topic) return;
    if (state.askTopic === topic.id) {
      state.askTopic = "";
      state.composer = "";
    } else {
      state.askTopic = topic.id;
      state.composer = topic.prompt;
    }
    state.afterFocus = "composer";
    render();
  },
  "toggle-pattern"(el) {
    state.openPattern = state.openPattern === el.dataset.id ? null : el.dataset.id;
    render();
  },
  "use-stage"() {
    state.avatar.modes.stage = true;
    toast("Stage energy is ready, from the masterclass you kept.");
  },
  "record-mode"(el) {
    state.modeRecording = el.dataset.mode;
    state.modeSeconds = 0;
    clearInterval(modeTimer);
    render();
    modeTimer = setInterval(() => {
      state.modeSeconds += 1;
      const node = document.getElementById("mode-timer");
      if (node) node.textContent = fmt(state.modeSeconds);
    }, 1000);
  },
  "use-mode"(el) {
    state.avatar.modes[el.dataset.mode] = true;
    state.modeRecording = null;
    clearInterval(modeTimer);
    toast("Avatar mode saved.");
  },
  "upload-mode"(el) {
    state.avatar.modes[el.dataset.mode] = true;
    toast("Recording added to this mode.");
  },
  "start-answer"() {
    state.avatar.phase = "capturing";
    state.avatar.seconds = 0;
    clearInterval(recTimer);
    render();
    recTimer = setInterval(() => {
      state.avatar.seconds += 1;
      const node = document.getElementById("rec-time");
      if (node) node.textContent = fmt(state.avatar.seconds);
    }, 1000);
  },
  "next-q"() {
    state.avatar.question = Math.min(2, state.avatar.question + 1);
    render();
  },
  "finish-hello"() {
    clearInterval(recTimer);
    state.avatar.phase = "review";
    state.avatar.modes.conversational = true;
    render();
  },
  rerecord() {
    clearInterval(recTimer);
    state.avatar.phase = "waiting";
    state.avatar.question = 0;
    state.avatar.seconds = 0;
    state.avatar.modes.conversational = false;
    render();
  },
  "to-tasks"() {
    state.step = 5;
    render();
  },
  "toggle-type"() {
    state.typeMenu = !state.typeMenu;
    render();
  },
  "set-type"(el) {
    const next = el.dataset.id;
    liveTasks().forEach((t) => state.selected.delete(t.id));
    state.coachingType = next;
    state.typeMenu = false;
    state.showMore.live = false;
    state.flipped = null;
    liveTasks().forEach((t) => { if (t.pre) state.selected.add(t.id); });
    render();
  },
  "show-more"(el) {
    state.showMore[el.dataset.tier] = true;
    render();
  },
  flip(el) {
    state.flipped = state.flipped === el.dataset.id ? null : el.dataset.id;
    render();
  },
  "select-task"(el) {
    if (el.checked) state.selected.add(el.dataset.id);
    else state.selected.delete(el.dataset.id);
    render();
  },
  "save-tasks"() {
    if (!state.selected.size) return;
    state.step = 6;
    state.nav = "home";
    state.flipped = null;
    render();
  },
  "focus-ask"() {
    state.afterFocus = "composer";
    render();
  },
  ask() {
    // Bot: the pasted link and attached documents go straight into Create bot, at Bot details.
    if (askMode().id === "bot") {
      startBotFromTwin(state.composer);
      return;
    }
    const text = state.composer.trim();
    if (!text) return;
    let title = text;
    if (/60-second avatar video/i.test(text) && /mentorship/i.test(text)) {
      title = "60-second avatar video: next mentorship intake";
    } else if (text.length > 72) {
      title = text.slice(0, 69) + "…";
    }
    state.asks.unshift({
      id: "ask-" + Date.now(),
      tier: "ask",
      title,
      blurb: text,
      preview: [text],
      mode: askMode().id
    });
    state.composer = "";
    render();
  },
  pin(el) {
    const card = state.suggestions.find((s) => s.id === el.dataset.id);
    if (!card) return;
    state.pinned.push(card);
    state.selected.add(card.id);
    render();
  },
  dismiss(el) {
    state.dismissed.add(el.dataset.id);
    render();
  },
  "open-task"(el) {
    state.runId = el.dataset.id;
    state.runFields = {};
    state.step = 7;
    state.nav = isLiveTask(el.dataset.id) ? "roleplay" : "home";
    state.drawer = null;
    startReveal();
  },
  "open-demo"(el) {
    state.demoTaskId = el.dataset.id;
    state.demoReveal = 0;
    state.demoPromptOpen = false;
    state.demoPromptSeen = false;
    state.demoInteractive = false;
    state.demoEnded = false;
    state.demoFeedback = null;
    state.demoFeedbackReasons = [];
    state.demoFeedbackText = "";
    state.demoSeconds = 0;
    state.demoChatOpen = true;
    state.demoDraft = "";
    state.demoExtra = [];
    state.demoMarks = {};
    state.demoScreenShare = false;
    state.demoIssueOpen = false;
    state.demoIssueReasons = [];
    state.demoIssueText = "";
    render();
    startDemoReveal();
    clearInterval(demoClockTimer);
    demoClockTimer = setInterval(() => {
      state.demoSeconds += 1;
      const clock = document.querySelector(".demo-timer");
      if (clock) clock.textContent = fmtClock(state.demoSeconds);
    }, 1000);
  },
  "toggle-demo-chat"() {
    state.demoChatOpen = !state.demoChatOpen;
    render();
  },
  "toggle-demo-share"() {
    state.demoScreenShare = !state.demoScreenShare;
    render();
  },
  "demo-vote"(el) {
    const id = el.dataset.id;
    const vote = el.dataset.vote;
    state.demoMarks[id] = state.demoMarks[id] === vote ? "" : vote;
    render();
  },
  "demo-send"() {
    const value = state.demoDraft.trim();
    if (!value) return;
    state.demoExtra.push({ who: state.demoInteractive ? "you" : "student", text: value });
    state.demoDraft = "";
    render();
  },
  "demo-accept"() {
    state.demoInteractive = true;
    state.demoPromptOpen = false;
    state.demoReveal += 1;
    render();
    startDemoReveal();
  },
  "demo-decline"() {
    state.demoPromptOpen = false;
    state.demoReveal += 1;
    render();
    startDemoReveal();
  },
  "open-demo-issue"() {
    state.demoIssueOpen = true;
    state.demoIssueReasons = [];
    state.demoIssueText = "";
    render();
  },
  "demo-issue-reason"(el) {
    const id = el.dataset.id;
    state.demoIssueReasons = state.demoIssueReasons.includes(id)
      ? state.demoIssueReasons.filter((item) => item !== id)
      : state.demoIssueReasons.concat(id);
    render();
  },
  "close-demo-issue"() {
    state.demoIssueOpen = false;
    render();
  },
  "submit-demo-issue"() {
    state.demoIssueOpen = false;
    toast("Thanks — we’ll look at that.");
  },
  "end-demo"() {
    clearInterval(demoTimer);
    clearInterval(demoClockTimer);
    state.demoEnded = true;
    state.demoIssueOpen = false;
    render();
  },
  "demo-feedback-rate"(el) {
    state.demoFeedback = el.dataset.id;
    if (state.demoFeedback === "great") state.demoFeedbackReasons = [];
    render();
  },
  "demo-feedback-reason"(el) {
    const id = el.dataset.id;
    state.demoFeedbackReasons = state.demoFeedbackReasons.includes(id)
      ? state.demoFeedbackReasons.filter((item) => item !== id)
      : state.demoFeedbackReasons.concat(id);
    render();
  },
  "demo-feedback-submit"() {
    toast("Thanks — feedback sent.");
    state.demoTaskId = null;
    if (!state.roleCreate) state.nav = "home";
    render();
  },
  "close-demo"() {
    clearInterval(demoTimer);
    clearInterval(demoClockTimer);
    state.demoIssueOpen = false;
    state.demoTaskId = null;
    if (!state.roleCreate) state.nav = "home";
    render();
  },
  "go-home"() {
    clearInterval(revealTimer);
    state.step = 6;
    state.nav = "home";
    state.drawer = null;
    render();
  },
  "studio-tab"(el) {
    state.studioTab = el.dataset.id === "calibrations" ? "calibrations" : "bots";
    state.roleMenuId = "";
    render();
  },
  "calib-open"(el) {
    state.calibId = el.dataset.id;
    render();
    const scroller = document.querySelector(".main");
    if (scroller) scroller.scrollTop = 0;
  },
  "role-manual-toggle"() {
    const draft = state.roleDraft || {};
    const hasDetail = !!(draft.scenario || draft.learnerRole || (draft.goals && draft.goals.length) || draft.goalDraft);
    const open = state.roleManual === null ? hasDetail : state.roleManual;
    state.roleManual = !open;
    render();
  },
  "videos-create"() {
    state.afterFocus = "videos-ask";
    render();
  },
  "reel-publish"(el) {
    state.reelsPublished[el.dataset.id] = true;
    toast("Published to your page.");
  },
  "calib-rate"(el) {
    state.calibRatings[state.calibId + ":" + el.dataset.id] = el.dataset.v === "off" ? "off" : "like";
    render();
  },
  "calib-back"() {
    state.calibId = "";
    render();
  },
  nav(el) {
    leaveCall();
    state.sessionsView = "";
    state.twinPersonaOpen = false;
    state.calibId = "";
    state.sessionReportId = "";
    state.twinSessionId = "";
    state.rpsDetailId = "";
    state.calOverviewId = "";
    const nextNav = el.dataset.id;
    if (nextNav === "roleplay") { state.roleFilter = "published"; state.roleDetailId = ""; }
    state.nav = nextNav;
    state.botCreate = false;
    state.botDetailId = "";
    state.botChatId = "";
    if (state.nav !== "roleplay") {
      state.roleCreate = false;
      state.roleAsk = "";
    }
    if (state.nav !== "setup" && state.nav !== "knowledge") studioCentered = false;
    if (state.nav === "setup") state.studioView = "profile";
    if (state.nav === "knowledge") state.studioView = "editor";
    if (state.nav !== "roleplay" && state.nav !== "home" && state.step === 7) state.step = 6;
    if (state.nav === "home" && state.step === 7) state.step = 6;
    if (state.nav === "roleplay" && state.step === 7 && !isLiveTask(state.runId)) state.step = 6;
    render();
  },
  "copy-link"(el) {
    const link = el.dataset.link;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(link).catch(() => {});
    }
    state.roleMenuId = "";
    toast("Practice link copied.");
  },
  "edit-rules"() {
    state.railOpen = "knowledge";
    state.afterFocus = "rail-knowledge";
    render();
  },
  "open-source"(el) {
    const map = { Knowledge: "knowledge", Style: "knowledge", Avatar: "avatar" };
    state.railOpen = map[el.dataset.source] || "knowledge";
    state.afterFocus = "rail-" + state.railOpen;
    render();
  },
  "open-drawer"(el) {
    state.drawer = state.drawer === el.dataset.id ? null : el.dataset.id;
    if (state.drawer) state.afterFocus = "drawer-close";
    render();
  },
  "close-drawer"() {
    state.drawer = null;
    render();
  },
  "open-conversation"(el) {
    const id = el.dataset.id || "";
    state.calibId = "";
    if (RAIL_THREADS.some((thread) => thread.id === id)) {
      state.drawer = null;
      state.calibId = id;
    } else if (id === "tee") {
      state.drawer = null;
      state.teeteeOpen = true;
      state.afterFocus = "tee-chat-input";
    } else if (id.startsWith("ask-")) {
      state.drawer = null;
      state.nav = "home";
      state.step = Math.max(state.step, 6);
    } else if (id.startsWith("role-")) {
      state.drawer = null;
      state.nav = "roleplay";
      state.roleFilter = "draft";
    }
    render();
  },
  "new-chat"() {
    state.calibId = "";
    state.drawer = null;
    state.nav = "ask";
    state.twinAsk = "";
    state.afterFocus = "twin-ask";
    render();
  },
  "connect-drive"() {
    if (!state.accountReady) {
      state.auth = "signup";
      state.authError = "";
      state.authPendingAction = "connect-drive";
      state.afterFocus = "auth-email";
      render();
      return;
    }
    state.drive = true;
    toast("Google Drive connected.");
  },
  "connect-notion"() {
    if (!state.accountReady) {
      state.auth = "signup";
      state.authError = "";
      state.authPendingAction = "connect-notion";
      state.afterFocus = "auth-email";
      render();
      return;
    }
    if (!state.notionOpen) {
      state.notionOpen = true;
      state.afterFocus = "notion";
      render();
      return;
    }
    const value = state.notionLink.trim();
    if (value && !validLink(value)) {
      toast("Try a profile link instead.");
      return;
    }
    state.notion = true;
    toast(value ? "Notion page saved." : "Notion connected.");
  }
};

document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-action]");
  if (state.roleMenuId) {
    const keep = el && (el.dataset.action === "role-row-menu" || el.closest(".rp-row-menu"));
    if (!keep) {
      state.roleMenuId = "";
      if (!el || el.disabled) {
        render();
        return;
      }
    }
  }
  if (state.twinInfoOpen && !e.target.closest(".twin-hero-name")) {
    state.twinInfoOpen = false;
    render();
    if (!el || el.disabled) return;
  }
  if (state.askMenu && !e.target.closest(".twin-hero-ask-type")) {
    state.askMenu = "";
    render();
    if (!el || el.disabled) return;
  }
  if (!el || el.disabled) return;
  const act = el.dataset.action;
  if (state.talkOpen && !/^(talk-|demo-issue|close-demo-issue|submit-demo-issue)/.test(act)) {
    clearTimeout(talkTimer);
    talkSpeechStop();
    state.talkOpen = false;
    state.talk = null;
    state.demoIssueOpen = false;
  }
  const fn = actions[act];
  if (fn) fn(el, e);
});

document.addEventListener("change", (e) => {
  const t = e.target;
  if (t.dataset.change && actions[t.dataset.change]) actions[t.dataset.change](t);
  if ((t.id === "twin-attach-input" || t.id === "home-attach-input") && t.files && t.files.length) {
    const names = Array.from(t.files).map((file) => file.name);
    state.twinAttachments = state.twinAttachments.concat(names.filter((name) => !state.twinAttachments.includes(name)));
    state.afterFocus = t.id === "home-attach-input" ? "composer" : "twin-ask";
    render();
    return;
  }
  if ((t.id === "bot-rec-upload" || t.id === "bot-mat-upload") && t.files && t.files.length) {
    botAddFiles(t.id === "bot-rec-upload" ? "rec" : "mat", t.files);
    return;
  }
  if (t.id === "know-upload" && t.files && t.files.length) {
    const names = Array.from(t.files).map((file) => file.name);
    state.knowledgeFiles = state.knowledgeFiles.concat(names.filter((name) => !state.knowledgeFiles.includes(name)));
    render();
  }
  if (t.id === "presence-upload" && t.files && t.files[0]) {
    const file = t.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      state.presenceUpload = String(reader.result || "");
      state.presenceLook = "upload";
      render();
    };
    reader.readAsDataURL(file);
  }
  if (t.id === "upload-wb" && t.files && t.files[0]) {
    state.uploads.push({
      id: "upload-" + Date.now(),
      group: "whiteboard",
      title: t.files[0].name.replace(/\.[^.]+$/, ""),
      source: "Upload",
      duration: "Recording",
      age: "just now",
      older: false,
      kept: true,
      status: "idle"
    });
    render();
  }
  if (t.dataset.field) state.runFields[t.dataset.field] = t.value;
});

document.addEventListener("input", (e) => {
  const t = e.target;
  if (t.id === "link") state.link = t.value;
  else if (t.id === "missed") state.missed = t.value;
  else if (t.id === "twin-ask") {
    state.twinAsk = t.value;
    const ghost = document.querySelector(".twin-ask-ghost");
    if (ghost) ghost.hidden = !!t.value;
    if (t.tagName === "TEXTAREA") {
      t.style.height = "auto";
      t.style.height = t.scrollHeight + "px";
    }
  }
  else if (t.id === "videos-ask") {
    state.videosAsk = t.value;
    t.style.height = "auto";
    t.style.height = t.scrollHeight + "px";
  }
  else if (t.id === "an-ask" || t.id === "an-ask-float") {
    state.analyticsAsk = t.value;
    t.style.height = "auto";
    t.style.height = t.scrollHeight + "px";
    // The floating copy and the one in the card share one draft.
    document.querySelectorAll("#an-ask, #an-ask-float").forEach((el) => { if (el !== t) el.value = t.value; });
  }
  else if (t.id === "composer") {
    state.composer = t.value;
    if (t.tagName === "TEXTAREA") {
      t.style.height = "auto";
      t.style.height = t.scrollHeight + "px";
    }
    const topic = ASK_TOPICS.find((item) => item.id === state.askTopic);
    if (topic && t.value !== topic.prompt) {
      state.askTopic = "";
      document.querySelectorAll(".home-topic").forEach((btn) => btn.setAttribute("aria-pressed", "false"));
    }
  }
  else if (t.id === "role-search") {
    state.roleQuery = t.value;
    render();
  }
  else if (t.id === "conversation-search") {
    state.conversationQuery = t.value;
    render();
  }
  else if (t.id === "edit-draft") state.editDraft = t.value;
  else if (t.id === "x-draft") { state.xDraft = t.value; state.xError = false; }
  else if (t.id === "notion") state.notionLink = t.value;
  else if (t.id === "line-draft") state.lineDraft = t.value;
  else if (t.id === "auth-email") state.authEmail = t.value;
  else if (t.id === "auth-password") state.authPassword = t.value;
  else if (t.id === "auth-confirm") state.authConfirm = t.value;
  else if (t.id === "demo-feedback-text") state.demoFeedbackText = t.value;
  else if (t.id === "demo-issue-text") state.demoIssueText = t.value;
  else if (t.id === "tee-ask") {
    state.roleAsk = t.value;
    if (t.tagName === "TEXTAREA") {
      t.style.height = "auto";
      t.style.height = t.scrollHeight + "px";
    }
  }
  else if (t.id === "tee-chat-input") state.teeteeDraft = t.value;
  else if (t.dataset.botField && state.botDraft) {
    state.botDraft[t.dataset.botField] = t.value;
  }
  else if (t.dataset.twinOffNote && state.twinOff) {
    state.twinOff.note = t.value;
  } else if (t.dataset.rpsField && state.rpsDraft) {
    state.rpsDraft[t.dataset.rpsField] = t.value;

  } else if (t.dataset.rpsKnow) {
    state.rpKnowDraft = t.value;
  } else if (t.dataset.roleField && state.roleDraft) {
    state.roleDraft[t.dataset.roleField] = t.value;
    if (t.id === "role-name") {
      const head = document.getElementById("role-manual-title");
      if (head) head.textContent = t.value.trim() || "New roleplay";
    }
    if (t.id === "role-scenario") {
      t.style.height = "auto";
      t.style.height = Math.min(t.scrollHeight, 150) + "px";
    }
  }
  else if (t.dataset.styleLine != null) state.studioStyleDraft[Number(t.dataset.styleLine)] = t.value;
  else if (t.id === "demo-message") state.demoDraft = t.value;
  else if (t.dataset.field) state.runFields[t.dataset.field] = t.value;
  if (t.id === "link") {
    const kind = linkKind();
    if (kind === "valid") state.linkAttention = false;
    const card = document.querySelector(".setup-card");
    if (card) card.classList.toggle("is-highlight", state.linkAttention);
    const hint = document.getElementById("link-hint");
    if (hint && kind !== "invalid") {
      hint.className = "hint";
      hint.removeAttribute("role");
      hint.textContent = "Any profile link works when there’s no website.";
      t.setAttribute("aria-invalid", "false");
    }
  }
});

document.addEventListener("focusout", (e) => {
  if (e.target.id === "link") {
    state.link = e.target.value;
    state.linkBlurred = true;
    if (linkKind() === "invalid") render();
  }
});

document.addEventListener("submit", (e) => {
  if (e.target.id === "rps-persona-form") {
    e.preventDefault();
    actions["rps-persona-save"]();
    return;
  }
  if (e.target.id === "ask-form") {
    e.preventDefault();
    actions.ask();
  }
  if (e.target.id === "videos-ask-form") {
    e.preventDefault();
    const text = state.videosAsk.trim();
    if (!text) return;
    const title = text.length > 64 ? text.slice(0, 61) + "…" : text;
    state.customReels.unshift({ id: "reel-new-" + Date.now(), title, length: 15, image: "yt-frame-1.png" });
    state.videosAsk = "";
    render();
    return;
  }
  if (e.target.id === "analytics-ask-form" || e.target.id === "analytics-float-form") {
    e.preventDefault();
    actions["analytics-ask"]();
  }
  if (e.target.id === "bot-rec-form") {
    e.preventDefault();
    botAddRecordingLink();
    return;
  }
  if (e.target.id === "tee-ask-form") {
    e.preventDefault();
    actions["tee-ask"]();
  }
  if (e.target.id === "twin-ask-form") {
    e.preventDefault();
    actions["twin-ask-submit"]();
  }
  if (e.target.id === "auth-form") {
    e.preventDefault();
    signupSubmit();
  }
});

// Reel cards play (muted) while hovered and rewind when the pointer leaves.
function reelPlay(media) {
  const video = media.querySelector("video");
  if (!video) return;
  const start = Number(media.dataset.reelStart) || 0;
  const end = start + (Number(media.dataset.reelLength) || 15);
  const go = () => {
    try { video.currentTime = start; } catch (err) { /* not seekable yet */ }
    video.muted = true;
    video.play().catch(() => {});
  };
  video.ontimeupdate = () => { if (video.currentTime >= end) video.currentTime = start; };
  if (video.readyState >= 1) go();
  else video.addEventListener("loadedmetadata", go, { once: true });
}

function reelStop(media) {
  const video = media.querySelector("video");
  if (!video) return;
  video.ontimeupdate = null;
  video.pause();
  try { video.currentTime = Number(media.dataset.reelStart) || 0; } catch (err) { /* ignore */ }
}

document.addEventListener("mouseover", (e) => {
  const media = e.target.closest && e.target.closest(".reel-media");
  if (media && !media.contains(e.relatedTarget)) reelPlay(media);
});

document.addEventListener("mouseout", (e) => {
  const media = e.target.closest && e.target.closest(".reel-media");
  if (media && !media.contains(e.relatedTarget)) reelStop(media);
});

document.addEventListener("scroll", () => {
  if (state.roleMenuId) placeRoleMenu();
  hideRoleTip();
  hideRailTip();
}, true);

document.addEventListener("mouseover", (e) => {
  const railHost = railTipHost(e.target);
  if (railHost) {
    showRailTip(railHost);
    return;
  }
  const host = roleTipHost(e.target);
  if (host) showRoleTip(host);
});

document.addEventListener("mouseout", (e) => {
  const railHost = railTipHost(e.target);
  if (railHost && railTipHost(e.relatedTarget) !== railHost) hideRailTip();
  const host = roleTipHost(e.target);
  if (!host || roleTipHost(e.relatedTarget) === host) return;
  hideRoleTip();
});

document.addEventListener("focusin", (e) => {
  const railHost = railTipHost(e.target);
  if (railHost) {
    showRailTip(railHost);
    return;
  }
  const host = roleTipHost(e.target);
  if (host) showRoleTip(host);
});

document.addEventListener("focusout", (e) => {
  const railHost = railTipHost(e.target);
  if (railHost && railTipHost(e.relatedTarget) !== railHost) hideRailTip();
  const host = roleTipHost(e.target);
  if (!host || roleTipHost(e.relatedTarget) === host) return;
  hideRoleTip();
});

document.addEventListener("keydown", (e) => {
  if (state.roleMenuId && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
    const items = Array.from(document.querySelectorAll(".rp-row-menu [role='menuitem']"));
    if (!items.length) return;
    const index = items.indexOf(document.activeElement);
    const next = e.key === "ArrowDown"
      ? items[(index + 1) % items.length]
      : items[(index - 1 + items.length) % items.length];
    e.preventDefault();
    if (next) next.focus();
    return;
  }
  if (e.key === "Escape" && state.twinInfoOpen) {
    state.twinInfoOpen = false;
    state.afterFocus = "twin-info-btn";
    render();
    return;
  }
  if (e.key === "Escape" && state.botWhy) {
    whyClose();
    return;
  }
  if (e.key === "Escape" && state.talkOpen) {
    if (state.talk && state.talk.confirmEnd) state.talk.confirmEnd = false;
    else if (state.demoIssueOpen) state.demoIssueOpen = false;
    else if (state.talk && state.talk.logOpen) state.talk.logOpen = false;
    else return;
    render();
    return;
  }
  if (e.key === "Escape" && state.roleMenuId) {
    const back = "role-menu-" + state.roleMenuId;
    state.roleMenuId = "";
    state.afterFocus = back;
    render();
    return;
  }
  if (e.key === "Escape" && state.roleChatId && !state.demoTaskId) {
    state.roleChatId = "";
    render();
    return;
  }
  if (e.key === "Escape" && state.botDetailId && !state.roleMenuId && !state.botShare && !state.confirm) {
    state.botDetailId = "";
    state.botChatId = "";
    render();
    return;
  }
  if ((e.key === "Enter" || e.key === " ") && e.target && e.target.getAttribute && e.target.getAttribute("role") === "button" && e.target.dataset.action === "role-pick-persona") {
    e.preventDefault();
    actions["role-pick-persona"](e.target);
    return;
  }
  if (e.key === "Enter" && e.target && e.target.dataset.action === "twin-bot-open") {
    e.preventDefault();
    actions["twin-bot-open"](e.target);
    return;
  }
  if (e.key === "Escape" && state.roleDetailId && !state.demoTaskId && !state.roleMenuId) {
    state.roleDetailId = "";
    render();
    return;
  }
  if (e.key === "Enter" && e.target && e.target.dataset.action === "role-open") {
    e.preventDefault();
    actions["role-open"](e.target);
    return;
  }
  if (e.key === "Enter" && e.target && e.target.classList.contains("rps-person") && e.target.dataset.action === "rps-persona-view") {
    e.preventDefault();
    actions["rps-persona-view"](e.target);
    return;
  }
  if (e.key === "Enter" && e.target && e.target.classList.contains("rp-card") && e.target.dataset.action === "role-configure") {
    e.preventDefault();
    actions["role-configure"](e.target);
    return;
  }
  if (e.key === "Escape" && state.auth) return;
  if (e.key === "Escape" && state.addKnowledgeOpen) return;
  if (e.key === "Escape" && state.drawer) {
    state.drawer = null;
    render();
  }
  if (e.key === "Enter" && e.target && e.target.id === "tee-chat-input") {
    e.preventDefault();
    actions["tee-chat-send"]();
  }
  if (e.key === "Enter" && !e.shiftKey && e.target && e.target.id === "tee-ask") {
    e.preventDefault();
    actions["tee-ask"]();
  }
  if (e.key === "Enter" && e.target && /^role-list-(guarded|opens)$/.test(e.target.id || "")) {
    e.preventDefault();
    actions["role-list-add"]({ dataset: { key: e.target.id.replace("role-list-", "") } });
  }
  if (e.key === "Enter" && e.target && e.target.id === "rps-phrase") {
    e.preventDefault();
    actions["rps-phrase-add"]();
  }
  if (e.key === "Enter" && e.target && e.target.id === "rps-know-new") {
    e.preventDefault();
    actions["rps-know-add"]();
  }
  if (e.key === "Enter" && e.target && e.target.id === "role-goal") {
    e.preventDefault();
    actions["role-goal-add"]();
  }
  if (e.key === "Enter" && e.target && e.target.id === "demo-message") {
    e.preventDefault();
    actions["demo-send"]();
  }
  if (e.key === "Enter" && !e.shiftKey && e.target && e.target.id === "composer" && e.target.tagName === "TEXTAREA") {
    e.preventDefault();
    actions.ask();
  }
});

seedSelection();
// What a fresh visit looks like, so Log out can take you back to the first onboarding screen.
const INITIAL_STATE = structuredClone(state);
// TeeTee and its hello bubble appear 4 seconds after the page opens.
let teeteeNudgeTimer = 0;
function scheduleTeeteeNudge() {
  clearTimeout(teeteeNudgeTimer);
  teeteeNudgeTimer = setTimeout(() => {
    state.teeteeShown = true;
    const el = document.querySelector(".teetee-nudge");
    if (el) el.classList.remove("is-pending");
  }, 4000);
}
// The prototype opens (and reopens on refresh) already signed in, on Twin Studio. Log out goes back to INITIAL_STATE.
Object.assign(state, { accountReady: true, twinReady: true, authEmail: "olga@olgasiliveitup.com", step: 6, nav: "setup", studioView: "profile" });
// Personas edited in any tab are kept in localStorage so the tab that opened the editor can pick them up.
const PERSONA_STORE = "tt-v4-personas";
function loadPersonaStore() {
  try {
    const saved = JSON.parse(localStorage.getItem(PERSONA_STORE) || "null");
    if (!saved) return false;
    state.rpPersonas = saved.rpPersonas || [];
    state.rpOverrides = saved.rpOverrides || {};
    return true;
  } catch (err) { return false; }
}
function savePersonaStore() {
  try { localStorage.setItem(PERSONA_STORE, JSON.stringify({ rpPersonas: state.rpPersonas, rpOverrides: state.rpOverrides })); } catch (err) { /* private mode */ }
}
loadPersonaStore();
window.addEventListener("storage", (e) => {
  if (e.key !== PERSONA_STORE) return;
  loadPersonaStore();
  if (state.roleCreate && state.roleDraft && state.roleDraft.look) applyRolePersona(state.roleDraft.look);
  render();
});
// ?editPersona=<id> opens the persona editor on its own, for the tab the Edit icon opens.
(function openPersonaEditorFromUrl() {
  let id = "";
  try { id = new URLSearchParams(location.search).get("editPersona") || ""; } catch (err) { /* ignore */ }
  if (!id || !rpsPersonas().some((item) => item.id === id)) return;
  state.nav = "rpsettings";
  state.rpsReturn = "tab";
  actions["rps-persona-edit"]({ dataset: { id } });
})();
render();
scheduleTeeteeNudge();

// Dropping files on a course upload zone.
document.addEventListener("dragover", (e) => {
  if (e.target.closest && e.target.closest(".bot-drop")) {
    e.preventDefault();
    e.target.closest(".bot-drop").classList.add("is-over");
  }
});
document.addEventListener("dragleave", (e) => {
  const zone = e.target.closest && e.target.closest(".bot-drop");
  if (zone) zone.classList.remove("is-over");
});
document.addEventListener("drop", (e) => {
  const zone = e.target.closest && e.target.closest(".bot-drop");
  if (!zone) return;
  e.preventDefault();
  zone.classList.remove("is-over");
  botAddFiles(zone.dataset.drop, e.dataTransfer && e.dataTransfer.files);
});
