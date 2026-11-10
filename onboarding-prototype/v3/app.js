/* TrainerTwin onboarding — Olga Sinenko. Product UI on the design-system tokens. */

const state = {
  step: 1,
  link: "",
  linkBlurred: false,
  linkAttention: false,
  findShineDone: false,
  presenceLook: "linkedin",
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
  features: { twin: true, roleplay: true },
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
  roleTab: 1,
  roleTabsDone: [],
  teeOpen: true,
  roleTipsOpen: false,
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
  demoThinking: false,
  demoView: "web",
  demoLogOpen: false,
  demoFeedback: null,
  demoFeedbackReasons: [],
  demoFeedbackText: "",
  demoSeconds: 0,
  demoChatOpen: false,
  demoDraft: "",
  demoExtra: [],
  demoMarks: {},
  demoScreenShare: false,
  demoIssueOpen: false,
  confirm: null,
  tryRole: "",
  botCreate: false,
  botStep: 1,
  botDraft: null,
  customBots: [],
  demoIssueReasons: [],
  demoIssueText: "",
  demoIssuesSent: [],
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
  botDetailTab: "calibration",
  userMenu: false,
  voicesTab: "mine",
  voicePlaying: "",
  devKeys: [],
  devKeyName: "",
  devNewKey: "",
  teamOff: {},
  profileTz: "Asia/Dubai",
  profileLang: "English",
  botReassign: null,
  accCohort: "all",
  accRole: "all",
  accTab: "twin",
  tsFocus: "",
  inboxTab: "twin",
  inboxView: "all",
  inboxDone: [],
  inboxAnswered: [],
  brainQView: "open",
  rpsRemoved: [],
  rpsRemoveId: "",
  brainIView: "open",
  issueResolved: [],
  issueCorrected: [],
  bq: { agent: "all", date: "any", q: "", search: false },
  inboxAnswering: "",
  respond: null,
  reportsOpen: null,
  reportsEnter: false,
  reportResolved: [],
  respondDraft: "",
  respondRec: "idle",
  respondSecs: 0,
  respondDone: [],
  inboxDraft: "",
  botRange: "30",
  botChatId: "",
  roleChatId: "",
  sessionReportId: "",
  sessionReportRole: "",
  twinSessionId: "",
  twinSessionBot: "",
  twinRatings: {},
  voicePlaying: "",
  twinSessFilter: { cohort: "all", bot: "all", learner: "all", date: "30" },
  roleSessFilter: { cohort: "all", role: "all", learner: "all", date: "30" },
  rsFocus: "",
  twinOff: null,
  knowOpen: false,
  assignRole: "",
  roleReport: null,
  demoNps: null,
  assignPick: [],
  assignMins: {},
  assignPickMins: {},
  assignUntil: {},
  assignPickUntil: {},
  assignUntilTouched: {},
  assignCohort: "all",
  roleAssigned: {},
  creditOpen: false,
  rpsEditId: "",
  rpsReturn: "",
  rpOverrides: {},
  botSettings: {},
  sharedStatus: {},
  sharedRemoved: [],
  botsRemoved: ["quiet-clients", "objection-handling"],
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
  botAsk: "",
  botManual: null,
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
  ob: { page: "link", maxStep: 1, link: "", type: "", use: [], useOpen: false, linkErr: false, typeErr: false, searching: false, found: obFoundDefaults(), fs: {}, frun: 0, extra: "", voice: "", libId: "", recSecs: 0, words: 0, aboutOpen: true, chipsOff: [], offCount: 0, spoke: "" },
  obCall: false,
  sty: styDefaults(),
  railOpen: null,
  drawer: null,
  builtFromOpen: false,
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
  "bot-ask": "botAsk",
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
let demoThinkTimer = 0;
let demoAvatarResume = 0;

// The twin's card plays Olga's speaking clip while it talks and the listening clip while it thinks; a client keeps a still photo.
function demoFace(model, cls) {
  if (!model.isTwin) return `<img${cls ? ` class="${cls}"` : ""} src="${esc(model.persona.face)}" alt="">`;
  const src = state.demoThinking ? "../media/twin-listening.mp4" : "../media/twin-speaking.mp4";
  const prev = document.querySelector(".demo-room video[data-demo-face]");
  demoAvatarResume = prev && prev.getAttribute("src") === src ? prev.currentTime : 0;
  return `<video${cls ? ` class="${cls}"` : ""} data-demo-face src="${src}" autoplay muted loop playsinline preload="auto" aria-hidden="true"></video>`;
}

function mountDemoFace() {
  document.querySelectorAll(".demo-room video[data-demo-face]").forEach((clip) => {
    clip.muted = true;
    if (demoAvatarResume) {
      try { clip.currentTime = demoAvatarResume; } catch (err) { /* not seekable yet */ }
    }
    clip.play().catch(() => {});
  });
  demoAvatarResume = 0;
}
let studioTimer = null;
let presTimer = 0;
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

// Toasts: a tinted card with a coloured icon, a title, the message and a close button. The kind (and title) is read from
// the message so the 50-odd existing toast("…") calls need no change; pass { type, title } to say it outright.
const TOAST_KINDS = {
  success: { title: "All set", icon: '<path d="M5 12l5 5l10 -10"/>' },
  info: { title: "Good to know", icon: '<path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"/><path d="M9.7 17l4.6 0"/>' },
  warning: { title: "Heads up", icon: '<path d="M12 7v6"/><path d="M12 17v.01"/>' },
  error: { title: "Something went wrong", icon: '<path d="M6 6l12 12"/><path d="M18 6l-12 12"/>' }
};

function toastKind(msg) {
  const text = String(msg || "");
  if (/(couldn’t|can’t|cannot|failed|error|unable|went wrong|didn’t work)/i.test(text)) return "error";
  if (/(at least|only have|first\.?$|^tell me|^name the|^add a|^pick |^choose |^enter |keep at least|not enough|too (low|short|long))/i.test(text)) return "warning";
  if (/…$|\.\.\.$/.test(text) || /^(plan the scene|opening|looking|we’ll look)/i.test(text)) return "info";
  if (/(thanks|created|saved|updated|assigned|unlocked|copied|sent|noted|done|published|removed|added|finished|ready|calibration saved|learner link)/i.test(text)) return "success";
  return "info";
}

function toastTitle(kind, msg) {
  if (kind === "info" && /…$|\.\.\.$/.test(String(msg || ""))) return "On it";
  return TOAST_KINDS[kind].title;
}

function toastHtml() {
  const t = state.toast;
  if (!t) return "";
  const kind = t.type || "info";
  const k = TOAST_KINDS[kind] || TOAST_KINDS.info;
  // The slide-in plays once; later re-renders keep the card still and the timer bar where it was.
  const fresh = state.toastSeen !== t.id;
  state.toastSeen = t.id;
  const elapsed = Math.min(t.ms, Math.max(0, Date.now() - t.id));
  return `
    <div class="toast toast--${kind}${fresh ? " toast--fresh" : ""}" role="${kind === "error" || kind === "warning" ? "alert" : "status"}" style="--toast-ms:${t.ms}ms;--toast-elapsed:${elapsed}ms">
      <span class="toast-ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${k.icon}</svg></span>
      <div class="toast-copy">
        <p class="toast-title">${esc(t.title)}</p>
        <p class="toast-text">${esc(t.msg)}</p>
      </div>
      <button class="toast-close" type="button" data-action="toast-close" aria-label="Dismiss">
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
      </button>
      <span class="toast-timer" aria-hidden="true"></span>
    </div>
  `;
}

function toast(msg, opts) {
  const kind = (opts && opts.type) || toastKind(msg);
  const ms = kind === "error" || kind === "warning" ? 6500 : 4500;
  state.toast = { msg, type: kind, title: (opts && opts.title) || toastTitle(kind, msg), ms, id: Date.now() };
  clearTimeout(toastTimer);
  render();
  toastTimer = setTimeout(() => {
    state.toast = null;
    render();
  }, ms);
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
  const titles = { home: "Home", analytics: "Analytics", roleplay: "Scenarios", videos: "Gen videos", setup: "Twin Agents", knowledge: "Twin’s brain", calibrations: "Twin sessions", learners: "Twin users", roleusers: "Roleplay users", sessions: "Roleplay sessions", rpsettings: "Persona", inbox: "Inbox", cohorts: "Cohorts", acclearners: "Learners", team: "Team", settings: "Settings", profile: "Profile", voices: "Voices", devapi: "Developer API", ask: "Ask your twin" };
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
  mountNpsDialog();
  mountAssignDialog();
  mountReportsDialog();
  mountRespondDialog();
  mountRpsRemoveDialog();
  mountBotReassignDialog();
  mountStudioFocus();
  mountLetterGlitch();
  mountObFound();
  mountStarBorder();
  mountObKnDialog();
  mountTryRoleDialog();
  mountDemoFace();
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
  if (state.talkOpen || activeNav() !== "setup") return false;
  if (state.twinReady) return state.ob.page === "twinready";
  return true;
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
      ${toastHtml()}
    `;
  }
  const bar = tabbar();
  return `
    ${bar ? mobileHead() : ""}
    <div class="shell${bar ? " has-tabbar" : ""}${obMode() === "solo" ? " shell--solo" : ""}">
      ${obMode() === "mini" ? obMiniRail() : obMode() === "solo" ? "" : rail()}
      <main class="main${(activeNav() === "home" || activeNav() === "analytics") && !showingGate() ? " is-home" : ""}${boxedSetup() ? " is-find" : ""}${state.talkOpen && state.obCall ? " v2-call" : ""}">${main()}</main>
    </div>
    ${bar}
    ${state.drawer ? drawer() : ""}
    ${state.builtFromOpen ? builtFromPanel() : ""}
    ${state.botReassign ? botReassignDialog() : ""}
    ${state.auth ? authDialog() : ""}
    ${state.addKnowledgeOpen ? addKnowledgeDialog() : ""}
    ${state.voiceDialog ? voiceDialog() : ""}
    ${state.knowledgeUpsellOpen ? knowledgeUpsellDialog() : ""}
    ${state.roleAvatarOpen ? roleAvatarDialog() : ""}
    ${state.confirm ? confirmDialog() : ""}
    ${state.botShare ? botShareDialog() : ""}
    ${state.twinOff ? twinOffDialog() : ""}
    ${state.knowOpen && state.botDraft ? botKnowDialog() : ""}
    ${state.assignRole ? roleAssignDialog() : ""}
    ${state.respond ? respondDialog() : ""}
    ${state.reportsOpen ? botReportsDialog() : ""}
    ${state.tryRole ? tryRoleDialog() : ""}
    ${state.teeteeOpen ? teeteeDialog() : ""}
    ${toastHtml()}
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
          <span class="ready-toast-desc">See what we built in Twin Agents</span>
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
    usage: '<path d="M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 20h14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    cohorts: '<path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 10h2a2 2 0 0 1 2 2v1" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 13v-1a2 2 0 0 1 2 -2h2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    team: '<path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 13a20 20 0 0 0 18 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    inbox: '<path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 13h3l3 3h4l3 -3h3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
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
    learners: '<path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 3.13a4 4 0 0 1 0 7.75" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 21v-2a4 4 0 0 0 -3 -3.85" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    setup: '<path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    settings: '<path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    profile: '<circle cx="8" cy="5.5" r="2.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M3 13.3a5 5 0 0 1 10 0" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
    video: '<path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 8a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    back: '<path d="M5 12l14 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 12l6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 12l6 -6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
  };
  const viewBox = name === "inbox" || name === "usage" || name === "cohorts" || name === "team" || name === "home" || name === "brain" || name === "calibrate" || name === "messages" || name === "sessions" || name === "rpsettings" || name === "setup" || name === "learners" || name === "analytics" || name === "role" || name === "settings" || name === "back" || name === "video" ? "0 0 24 24" : "0 0 16 16";
  return `<svg viewBox="${viewBox}" aria-hidden="true">${paths[name]}</svg>`;
}

function sparklesIcon() {
  return `<svg class="line-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6" /></svg>`;
}

function roleCheckIcon() {
  return `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 8.5 6.5 11.5 12.5 5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

function navItem(id, label, glyph, badge) {
  const on = activeNav() === id || (id === "settings" && ["home", "videos", "cohorts", "acclearners", "team"].includes(activeNav()) && (state.accountReady || state.twinReady));
  const tip = state.railCollapsed ? ` data-rail-tip="${esc(label)}"` : "";
  return `<button class="nav-item" type="button" data-action="nav" data-id="${id}" ${on ? 'aria-current="page"' : ""}${tip}>${icon(glyph)}<span>${label}</span>${badge ? `<b class="nav-badge" role="img" aria-label="${badge} waiting"></b>` : ""}</button>`;
}

// Phone layout: the left rail turns into a slim header (logo, knowledge, theme, profile) and a
// bottom tab bar (Home, Roleplay, Twin Studio, Report, Settings). Both are hidden on desktop.
function tabbar() {
  if (state.talkOpen || state.calibId || state.roleCreate || state.botCreate || showingGate() || obMode()) return "";
  const items = [
    ["home", "Home", "home"],
    ["roleplay", "Roleplay", "role"],
    ["setup", "Twin Agents", "setup"],
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
    <aside class="rail${collapsed ? " is-collapsed" : ""}${state.railOpen ? " rail--opening" : ""}" aria-label="Main">
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
          ${state.features.twin ? `
          <p class="rail-label rail-group">Twin</p>
          ${navItem("setup", "Twin agents", "setup")}
          ${navItem("calibrations", "Twin sessions", "messages")}
          ${navItem("knowledge", "Twin’s brain", "brain")}` : ""}
          ${state.features.roleplay ? `
          <p class="rail-label rail-group">Roleplay</p>
          ${navItem("roleplay", "Scenarios", "role")}
          ${navItem("sessions", "Roleplay sessions", "sessions")}
          ${navItem("rpsettings", "Persona", "rpsettings")}` : ""}
        </nav>
        <div class="rail-foot">
          ${teeteeNudge()}
          <div class="rail-foot-nav">
            ${navItem("settings", "Settings", "settings")}
          </div>
          <div class="rail-user-wrap">
            ${state.userMenu ? userMenu() : ""}
            <button class="rail-user" type="button" data-action="user-menu-toggle" aria-haspopup="menu" aria-expanded="${state.userMenu}"${collapsed ? ' data-rail-tip="Olga Sinenko"' : ""}>
              <img class="rail-user-photo" src="${esc(presenceSrc())}" alt="">
              <span class="rail-user-name">Olga Sinenko</span>
            </button>
          </div>
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
  if (state.roleReport) return pageRoleReport();
  if (state.twinSessionId) return pageTwinSessionReport();
  if (state.sessionReportId) return pageSessionReport();
  if (state.calibId) return pageCalibration();
  if (state.botCreate) return pageBotCreate();
  if (nav === "settings") return pageSettings();
  if (nav === "inbox") return pageInbox();
  if (nav === "cohorts") return pageCohorts();
  if (nav === "acclearners") return pageAccLearners();
  if (nav === "team") return pageTeam();
  if (nav === "knowledge") return pageStudioFlow();
  if (nav === "calibrations") return pageTwinSessions();
  if (nav === "learners") { state.accTab = "twin"; return pageAccLearners(); }
  if (nav === "roleusers") { state.accTab = "roleplay"; return pageAccLearners(); }
  if (nav === "sessions") return pageSessions();
  if (nav === "rpsettings") return pageRoleSettings();
  if (nav === "setup") return state.botCreate ? pageBotCreate() : state.calOverviewId ? pageCalOverview() : (state.botDetailId && botDetailRow() ? pageBotDetail() : setupPage());
  if (nav === "profile") return pageProfile();
  if (nav === "voices") return pageVoices();
  if (nav === "devapi") return pageDevApi();
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

// ===== Onboarding V2: Build my twin =====
// Your link → Finding you → Persona (voice) → live call with "What we found about you" → Twin ready.
const OB_STEPS = [[1, "Your link"], [2, "Finding you"], [3, "Persona"]];
const OB_TYPES = ["Sales", "Communication", "Leadership", "Customer success", "Other"];
const OB_USES = [["doubt", "Doubt clearance with my twin"], ["roleplay", "Practice with roleplay"]];
const OB_SCRIPT = "“I’m recording this so my learners can practise with my twin. I want it to sound like me when it walks them through a tough call, asks the hard questions and gives honest feedback.”";
const OB_PAGE_STEP = { link: 1, found: 2, persona: 3, voices: 3, ready: 3, recording: 3, recorded: 3 };
let obTimer = 0;
let obWordTimer = 0;
// While recording, the script is read along: a word turns bold every obWordMs, and Stop stays off until OB_MIN_WORDS are done.
const OB_WORDS = OB_SCRIPT.split(" ");
const OB_MIN_WORDS = 20;
let obWordMs = 400;

function obFoundDefaults() {
  return [
    { id: "li", name: "LinkedIn", handle: "linkedin.com/in/olgasinenko", meta: "Sales coach for Dubai real-estate agents · 142 posts", on: true },
    { id: "yt", name: "YouTube", handle: "@olgasinenko", meta: "48 videos · 61K views on objection handling", on: true },
    { id: "web", tile: "web", name: "Website", handle: "olgasinenko.com", meta: "12 pages · workshops, 1:1 coaching, contact", on: true },
    { id: "ig", name: "Instagram", handle: "@olga.sells.dubai", meta: "120 reels", on: true }
  ];
}

function obIco(paths, size) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"${size ? ` width="${size}" height="${size}"` : ""}>${paths}</svg>`;
}
const OB_PATHS = {
  li: '<path d="M8 11v5"/><path d="M8 8v.01"/><path d="M12 16v-5"/><path d="M16 16v-3a2 2 0 1 0 -4 0"/><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"/>',
  yt: '<path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4z"/><path d="M10 9l5 3l-5 3z"/>',
  ig: '<path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/><path d="M16.5 7.5v.01"/>',
  upload: '<path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"/><path d="M7 9l5 -5l5 5"/><path d="M12 4v12"/>',
  arrow: '<path d="M5 12h14"/><path d="M13 6l6 6l-6 6"/>',
  x: '<path d="M18 6l-12 12"/><path d="M6 6l12 12"/>',
  stop: '<path d="M5 7a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"/>',
  retry: '<path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"/><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/>',
  mic: '<path d="M9 5a3 3 0 0 1 3 -3a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3a3 3 0 0 1 -3 -3z"/><path d="M5 10a7 7 0 0 0 14 0"/><path d="M12 17v4"/><path d="M8 21h8"/>',
  web: '<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M3.6 9h16.8"/><path d="M3.6 15h16.8"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a17 17 0 0 1 0 18"/>',
  wave: '<path d="M3 11v2M7 8v8M11 4v16M15 7v10M19 10v4"/>',
  library: '<path d="M7 3m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"/><path d="M4.012 7.26a2.005 2.005 0 0 0 -1.012 1.737v10c0 1.1 .9 2 2 2h10c.75 0 1.158 -.385 1.5 -1"/><path d="M11 7h6M11 10h6M11 13h3"/>',
  back: '<path d="M5 12h14M5 12l6 6M5 12l6 -6"/>',
  play: '<path d="M7 4v16l13 -8z"/>',
  check: '<path d="M5 12l5 5l10 -10"/>',
  chev: '<path d="M6 9l6 6l6 -6"/>',
  info: '<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01M11 12h1v4h1"/>',
  minimize: '<path d="M5 9l4 0l0 -4M3 3l6 6M5 15l4 0l0 4M3 21l6 -6M19 9l-4 0l0 -4M15 9l6 -6M19 15l-4 0l0 4M15 15l6 6"/>',
  maximize: '<path d="M16 4l4 0l0 4M14 10l6 -6M8 20l-4 0l0 -4M4 20l6 -6M16 20l4 0l0 -4M14 14l6 6M8 4l-4 0l0 4M4 4l6 6"/>',
  course: '<path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"/><path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"/>',
  pdf: '<path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/><path d="M9 13h6M9 17h4"/>',
  id: '<path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"/><path d="M9 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M15 8h2M15 12h2M7 16h10"/>',
  alert: '<path d="M12 8v5M12 16v.01"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  link: '<path d="M9 15l6 -6"/><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"/><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"/>',
  speak: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>'
};

function obMode() {
  // Twin ready, not signed up yet: the nav stays collapsed to the logo, like on the call.
  if (state.twinReady && !state.accountReady && state.ob.page === "twinready" && activeNav() === "setup") return "mini";
  if (state.twinReady || activeNav() !== "setup") return "";
  return state.talkOpen && state.obCall ? "mini" : "solo";
}

function obHeader(current) {
  return `<div class="ob-head"><h1 class="find-title">Build my twin</h1><ol class="setup-steps" aria-label="Setup">${OB_STEPS.map(([n, label]) => `<li class="${current === n ? "is-current" : current > n ? "is-done" : ""}"><button class="step-hit" type="button" data-action="ob-step" data-step="${n}"${current === n ? ' aria-current="step"' : ""}><span class="n">${current > n ? obIco(OB_PATHS.check, 14) : n}</span> ${label}</button></li>`).join("")}</ol></div>`;
}

function obShell(page, inner, cardClass) {
  return `<div class="page page--find is-scroll vs-page v2-page"><div class="find-stack is-wide">${obHeader(OB_PAGE_STEP[page])}<div class="setup-card ${cardClass}">${inner}</div></div></div>`;
}

function pageOb() {
  const page = state.ob.page;
  if (page === "found") return obFound();
  if (page === "persona") return obPersona();
  if (page === "voices") return obVoices();
  if (page === "ready") return obRecordReady();
  if (page === "recording") return obRecording();
  if (page === "recorded") return obRecorded();
  return obLink();
}

function obLink() {
  const o = state.ob;
  const usesText = OB_USES.filter(([id]) => o.use.includes(id)).map(([, label]) => label).join(", ");
  return obShell("link", `
    <h1 class="page-title">Tell us about you</h1>
    <p class="vs-sub">Add your link and we’ll start your twin from your public profile.</p>
    <div class="field"><label for="ob-link">LinkedIn / Website</label><input class="input" id="ob-link" data-ob="link" type="url" inputmode="url" autocomplete="off" placeholder="@  linkedin.com/in/you or yourwebsite.com" value="${esc(o.link)}" aria-invalid="${o.linkErr}">${o.linkErr ? `<p class="error" role="alert">Try a LinkedIn or website link.</p>` : ""}</div>
    <div class="field v2-ms"><span class="label" id="ob-type-l">Type of trainer</span>
      <div class="v2-ms-wrap"><button class="input v2-ms-trigger${o.type ? "" : " is-empty"}" id="ob-type" type="button" data-action="ob-type-open" aria-haspopup="listbox" aria-expanded="${!!o.typeOpen}" aria-labelledby="ob-type-l" aria-invalid="${o.typeErr}"><span>${o.type ? esc(o.type) : "Sales, Communication, Leadership"}</span>${obIco(OB_PATHS.chev)}</button>
      ${o.typeOpen ? `<div class="menu v2-ms-menu" role="listbox" aria-labelledby="ob-type-l">${OB_TYPES.map((x) => `<button class="v2-ms-opt v2-ms-opt--single${o.type === x ? " is-selected" : ""}" type="button" role="option" aria-selected="${o.type === x}" data-action="ob-type-pick" data-id="${esc(x)}"><span>${esc(x)}</span>${o.type === x ? obIco(OB_PATHS.check, 16) : ""}</button>`).join("")}</div>` : ""}</div>
      ${o.typeErr ? `<p class="error" role="alert">Pick the type that fits you best.</p>` : ""}
    </div>
    <div class="field v2-ms"><span class="label" id="ob-use-l">Primary use case</span>
      <div class="v2-ms-wrap"><button class="input v2-ms-trigger${usesText ? "" : " is-empty"}" type="button" data-action="ob-use-open" aria-haspopup="listbox" aria-expanded="${o.useOpen}" aria-labelledby="ob-use-l"><span>${usesText ? esc(usesText) : "Select a use case"}</span>${obIco(OB_PATHS.chev)}</button>
      ${o.useOpen ? `<div class="menu v2-ms-menu" role="listbox" aria-multiselectable="true" aria-labelledby="ob-use-l">${OB_USES.map(([id, label]) => `<label class="v2-ms-opt"><input class="check" type="checkbox" data-action="ob-use" data-id="${id}"${o.use.includes(id) ? " checked" : ""}><span>${label}</span></label>`).join("")}</div>` : ""}</div>
    </div>
    <div class="actions">${o.searching ? latticeLoader("find") : `<button class="btn btn--strong" type="button" data-action="ob-next">Next</button>`}</div>
  `, "vs-card v2-form");
}

function obFound() {
  const o = state.ob;
  // Platform icons, not photos, sitting straight on the card.
  const avatar = (p) => `<span class="profile-avatar v2-tile" aria-hidden="true">${obIco(OB_PATHS[p.tile || p.id] || OB_PATHS.link)}</span>`;
  return obShell("found", `
    <h1 class="page-title">Here’s what we found</h1>
    <p class="know-section-sub">Tick the profiles that are yours and untick any that aren’t. Add a link we missed.</p>
    <div class="grid-profiles v2-list">${o.found.map((p) => `
      <article class="card v2-prof v2-prof--${o.fs[p.id] || "wait"}${p.on ? " is-on" : " is-off"}" data-action="ob-not-me" data-id="${p.id}"><div class="card-head"><button class="v2-pick" type="button" role="checkbox" aria-checked="${p.on ? "true" : "false"}" data-action="ob-not-me" data-id="${p.id}" aria-label="This is my ${esc(p.name)} (${esc(p.handle)})"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5l10 -10"/></svg></button>${avatar(p)}<div class="head-copy"><div class="head-copy-top"><h2 class="card-title">${p.name} <span class="v2-handle">${esc(p.handle)}</span></h2><div class="head-copy-end"><span class="v2-spin" role="status" aria-label="Checking this profile">${miniLatticeLoader()}</span></div></div><p class="card-sub">${esc(p.meta).replace(/ · /g, ' <span class="v2-dot" aria-hidden="true">·</span> ')}</p></div></div></article>`).join("")}</div>
    <div class="v2-add"><input class="input" id="ob-extra" data-ob="extra" type="url" placeholder="Add a link we missed (course, podcast, book…)" value="${esc(o.extra || "")}"><button class="btn btn--secondary" type="button" data-action="ob-add-link">Add</button></div>
    <div class="actions v2-foot"><button class="btn btn--ghost" type="button" data-action="ob-back">Back</button><button class="btn btn--strong" type="button" data-action="ob-looks-right"${o.found.every((p) => o.fs[p.id] === "done") && o.found.some((p) => p.on) ? "" : " disabled"}>Looks right</button></div>
  `, "v2-found");
}

// ===== Star border: a star runs around a button's border, trailing light that shifts yellow, blue and orange =====
// A plain-JS port of React Bits' StarBorder (Canvas 2D): the star laps the border, hover or focus sends an extra lap,
// a click sends light racing out from the point you press. The light's colour follows its place on the border.
let starInstance = null;
function starBorder(root, opts) {
  const s = Object.assign({
    colors: ["#C99A08", "#3B7DE8", "#FF5A00"], duration: 4, thickness: 2, radius: 26, trailLength: 0.3,
    stars: 1, glow: 0.6, sparkle: true, direction: 1, hover: "lap", clickPulse: true, light: true, laps: 0
  }, opts || {});
  const BLEED = 48, LAP = 0.9, TAU = Math.PI * 2, WHITE = [255, 255, 255];
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const wrap = (v, t) => ((v % t) + t) % t;
  const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (2 - 2 * t) ** 3 / 2);
  const mix = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
  const rgba = (c, a) => "rgba(" + Math.round(c[0]) + ", " + Math.round(c[1]) + ", " + Math.round(c[2]) + ", " + clamp(a, 0, 1).toFixed(3) + ")";
  const probe = document.createElement("canvas").getContext("2d");
  const toRgb = (css) => {
    probe.fillStyle = "#000000"; probe.fillStyle = css;
    const v = String(probe.fillStyle);
    if (v.charAt(0) === "#") { const h = parseInt(v.slice(1, 7), 16); return [(h >> 16) & 255, (h >> 8) & 255, h & 255]; }
    const p = (v.match(/[\d.]+/g) || []).map(Number);
    return p.length >= 3 ? [p[0], p[1], p[2]] : WHITE;
  };
  let palette = s.colors.map(toRgb);
  const toneAt = (dist, total) => {
    const t = (wrap(dist, total) / total) * palette.length, i = Math.floor(t) % palette.length;
    return mix(palette[i], palette[(i + 1) % palette.length], t - Math.floor(t));
  };
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canvas = document.createElement("canvas");
  canvas.className = "star-border__light";
  canvas.setAttribute("aria-hidden", "true");
  root.insertBefore(canvas, root.firstChild);
  const ctx = canvas.getContext("2d");
  if (!ctx) return { destroy() {}, set() {} };

  const outline = (width, height, radius) => {
    const r = Math.max(0, Math.min(radius, width / 2, height / 2));
    const arc = (Math.PI * r) / 2, across = Math.max(0, width - 2 * r), down = Math.max(0, height - 2 * r);
    const segments = [
      { length: across, x: r, y: 0, dx: 1, dy: 0, angle: null }, { length: arc, x: width - r, y: r, dx: 0, dy: 0, angle: -Math.PI / 2 },
      { length: down, x: width, y: r, dx: 0, dy: 1, angle: null }, { length: arc, x: width - r, y: height - r, dx: 0, dy: 0, angle: 0 },
      { length: across, x: width - r, y: height, dx: -1, dy: 0, angle: null }, { length: arc, x: r, y: height - r, dx: 0, dy: 0, angle: Math.PI / 2 },
      { length: down, x: 0, y: height - r, dx: 0, dy: -1, angle: null }, { length: arc, x: r, y: r, dx: 0, dy: 0, angle: Math.PI }
    ];
    return { r, segments, total: Math.max(1, segments.reduce((a, g) => a + g.length, 0)) };
  };
  const pointAt = (shape, distance, pt) => {
    let d = wrap(distance, shape.total);
    for (const g of shape.segments) {
      if (g.length > 0 && d <= g.length) {
        if (g.angle === null) { pt.x = g.x + g.dx * d; pt.y = g.y + g.dy * d; pt.nx = g.dy; pt.ny = -g.dx; }
        else { const a = g.angle + d / shape.r; pt.nx = Math.cos(a); pt.ny = Math.sin(a); pt.x = g.x + pt.nx * shape.r; pt.y = g.y + pt.ny * shape.r; }
        return pt;
      }
      d -= g.length;
    }
    return pt;
  };
  const project = (shape, px, py) => {
    let best = Infinity, found = 0, offset = 0;
    shape.segments.forEach((g) => {
      if (g.length > 0) {
        let d = 0, x = 0, y = 0;
        if (g.angle === null) { d = clamp((px - g.x) * g.dx + (py - g.y) * g.dy, 0, g.length); x = g.x + g.dx * d; y = g.y + g.dy * d; }
        else {
          let a = wrap(Math.atan2(py - g.y, px - g.x) - g.angle, TAU);
          if (a > Math.PI / 2) a = a > Math.PI * 1.25 ? 0 : Math.PI / 2;
          d = a * shape.r; x = g.x + Math.cos(g.angle + a) * shape.r; y = g.y + Math.sin(g.angle + a) * shape.r;
        }
        const dist = (px - x) ** 2 + (py - y) ** 2;
        if (dist < best) { best = dist; found = offset + d; }
      }
      offset += g.length;
    });
    return found;
  };

  const pt = { x: 0, y: 0, nx: 0, ny: -1 };
  const st = { width: 0, height: 0, dpr: 1, phase: 0, velocity: 0, motion: 0, lap: -1, time: 0, reveal: 1, boost: 0, flash: 0, hovered: false, focused: false, travel: 0, ending: false, done: false };
  const pulses = [];
  let raf = 0, last = performance.now(), alive = true, visible = true;

  const shapeFor = () => outline(Math.max(1, st.width - s.thickness), Math.max(1, st.height - s.thickness), s.radius - s.thickness / 2);
  const line = (x1, y1, x2, y2, w, style) => { ctx.lineWidth = w; ctx.strokeStyle = style; ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke(); };

  function drawTrail(shape, head, length, sign, intensity, tip) {
    if (length < 0.5 || intensity <= 0) return;
    const steps = clamp(Math.ceil(length / 2), 2, 90);
    pointAt(shape, head, pt);
    let px = pt.x, py = pt.y;
    for (let i = 1; i <= steps; i++) {
      const at = head - sign * length * (i / steps);
      pointAt(shape, at, pt);
      const u = 1 - (i - 0.5) / steps, fade = u * u * intensity;
      let tone = toneAt(at, shape.total);
      if (!s.light) tone = mix(tone, WHITE, u ** 6 * 0.65);
      ctx.lineCap = tip !== false && i === 1 ? "round" : "butt";
      line(px, py, pt.x, pt.y, 2 + 6 * s.glow, rgba(tone, fade * (s.light ? 0.1 : 0.2) * s.glow));
      line(px, py, pt.x, pt.y, s.thickness, rgba(tone, fade));
      px = pt.x; py = pt.y;
    }
  }
  function drawHead(tone, x, y, intensity, twinkle, glow) {
    if (intensity <= 0) return;
    const reach = (12 + 40 * glow) * (s.light ? 0.6 : 1);
    const bloom = ctx.createRadialGradient(x, y, 0, x, y, reach);
    const strength = (s.light ? 0.08 : 0.4) * glow * intensity;
    bloom.addColorStop(0, rgba(tone, strength)); bloom.addColorStop(0.2, rgba(tone, strength * 0.4));
    bloom.addColorStop(0.5, rgba(tone, strength * 0.1)); bloom.addColorStop(1, rgba(tone, 0));
    ctx.fillStyle = bloom; ctx.fillRect(x - reach, y - reach, reach * 2, reach * 2);
    if (!s.sparkle) return;
    const size = (1 + s.thickness * 0.6) * (s.light ? 0.85 : 1);
    const core = ctx.createRadialGradient(x, y, 0, x, y, size * 2.2);
    core.addColorStop(0, rgba(s.light ? tone : WHITE, intensity));
    core.addColorStop(s.light ? 0.3 : 0.4, rgba(s.light ? tone : mix(tone, WHITE, 0.5), intensity * 0.9));
    core.addColorStop(s.light ? 0.55 : 1, rgba(tone, s.light ? intensity * 0.12 : 0)); core.addColorStop(1, rgba(tone, 0));
    ctx.fillStyle = core; ctx.beginPath(); ctx.arc(x, y, size * 2.2, 0, TAU); ctx.fill();
    const spike = (3 + 4 * glow + s.thickness * 1.5) * twinkle, center = s.light ? tone : WHITE;
    const h = ctx.createLinearGradient(x - spike, y, x + spike, y);
    h.addColorStop(0, rgba(tone, 0)); h.addColorStop(0.5, rgba(center, intensity * 0.95)); h.addColorStop(1, rgba(tone, 0));
    line(x - spike, y, x + spike, y, s.light ? 0.75 : 1, h);
    const v = ctx.createLinearGradient(x, y - spike, x, y + spike);
    v.addColorStop(0, rgba(tone, 0)); v.addColorStop(0.5, rgba(center, intensity * 0.95)); v.addColorStop(1, rgba(tone, 0));
    line(x, y - spike, x, y + spike, s.light ? 0.75 : 1, v);
  }
  function draw(shape) {
    const glow = state_boostGlow();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (st.width < 2 || st.height < 2) return;
    const off = (BLEED + s.thickness / 2) * st.dpr;
    ctx.setTransform(st.dpr, 0, 0, st.dpr, off, off);
    ctx.globalCompositeOperation = s.light ? "source-over" : "lighter";
    ctx.lineCap = "butt";
    const total = shape.total, spacing = total / s.stars, speed = Math.abs(st.motion), sign = st.motion >= 0 ? 1 : -1;
    const length = Math.min(speed * s.trailLength * s.duration, spacing * 0.92, total * 0.6);
    const intensity = st.reveal * (1 + 0.4 * st.boost + 0.6 * st.flash);
    const ring = st.flash * (s.light ? 0.18 : 0.32);
    if (ring > 0.005) {
      ctx.lineWidth = s.thickness + 2 * glow; ctx.strokeStyle = rgba(toneAt(st.phase, total), ring);
      ctx.beginPath(); ctx.roundRect(0, 0, Math.max(1, st.width - s.thickness), Math.max(1, st.height - s.thickness), Math.max(0, shape.r)); ctx.stroke();
    }
    const still = clamp(1 - speed / Math.max(1, (total / s.duration) * 0.6), 0, 1) * Math.min(1, intensity);
    const rest = (10 + 14 * glow + s.thickness * 2) * still;
    for (let i = 0; i < s.stars; i++) {
      const head = st.phase + i * spacing;
      drawTrail(shape, head, length, sign, Math.min(1, intensity));
      if (still > 0.01) { drawTrail(shape, head, rest, 1, still, false); drawTrail(shape, head, rest, -1, still, false); }
    }
    pulses.forEach((p) => {
      const fade = (1 - p.age / 0.65) ** 2, travel = (total / 2) * (1 - (1 - Math.min(1, p.age / 0.5)) ** 2), tail = Math.min(travel, total * 0.16);
      [1, -1].forEach((way) => {
        const front = p.origin + way * travel;
        drawTrail(shape, front, tail, way, fade);
        pointAt(shape, front, pt);
        drawHead(toneAt(front, total), pt.x, pt.y, fade * 0.8, 0.8, glow);
      });
    });
    for (let i = 0; i < s.stars; i++) {
      const at = st.phase + i * spacing;
      pointAt(shape, at, pt);
      const twinkle = 0.82 + 0.18 * Math.sin(st.time * 6.1 + i * 2.3) * Math.sin(st.time * 2.7 + i);
      drawHead(toneAt(at, total), pt.x, pt.y, Math.min(1.3, intensity), twinkle, glow);
    }
  }
  const state_boostGlow = () => s.glow;

  function frame(now) {
    raf = 0;
    if (!alive) return;
    if (!root.isConnected) { destroy(); return; }
    const dt = Math.min(0.05, Math.max(0.001, (now - last) / 1000));
    last = now; st.time += dt;
    const shape = shapeFor(), total = shape.total;
    const cruise = reduce ? 0 : (s.direction * total) / s.duration;
    st.flash *= Math.exp(-dt / 0.22);
    // After `laps` trips round the border the light fades out and the loop stops.
    if (s.laps && !st.ending) { st.travel += Math.abs(st.velocity) * dt; if (st.travel >= s.laps * total) st.ending = true; }
    if (st.ending && !st.done) { st.reveal = Math.max(0, st.reveal - dt / 0.7); if (st.reveal <= 0) st.done = true; }
    st.velocity += (cruise - st.velocity) * (1 - Math.exp(-dt / 0.45));
    let extra = 0;
    if (st.lap >= 0) {
      const before = ease(Math.min(1, st.lap / LAP));
      st.lap += dt;
      extra = (ease(Math.min(1, st.lap / LAP)) - before) * total * s.direction;
      if (st.lap >= LAP) st.lap = -1;
    }
    st.motion = st.velocity + extra / dt;
    st.phase = wrap(st.phase + st.velocity * dt + extra, total);
    for (let i = pulses.length - 1; i >= 0; i--) { pulses[i].age += dt; if (pulses[i].age >= 0.65) pulses.splice(i, 1); }
    draw(shape);
    const moving = !st.done && (Math.abs(st.motion) > 0.05 || cruise !== 0 || st.lap >= 0);
    if (visible && (moving || st.flash > 0.01 || pulses.length > 0)) raf = requestAnimationFrame(frame);
  }
  function wake() { if (raf || !alive || !visible) return; last = performance.now(); raf = requestAnimationFrame(frame); }
  function measure() {
    st.width = root.offsetWidth; st.height = root.offsetHeight; st.dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.round((st.width + BLEED * 2) * st.dpr)); canvas.height = Math.max(1, Math.round((st.height + BLEED * 2) * st.dpr));
    wake();
  }
  const local = (e) => { const r = root.getBoundingClientRect(); return [(e.clientX - r.left) * (r.width ? st.width / r.width : 1), (e.clientY - r.top) * (r.height ? st.height / r.height : 1)]; };
  const pulse = (origin) => { if (!s.clickPulse) return; pulses.push({ origin, age: 0 }); if (pulses.length > 4) pulses.shift(); st.flash = 1; wake(); };
  const onEnter = () => { st.hovered = true; if (s.hover === "lap" && st.lap < 0 && !reduce) st.lap = 0; wake(); };
  const onLeave = () => { st.hovered = false; wake(); };
  const onDown = (e) => { if (e.button !== 0 && e.pointerType === "mouse") return; const [x, y] = local(e); pulse(project(shapeFor(), x - s.thickness / 2, y - s.thickness / 2)); };
  const onFocus = () => { st.focused = root.matches(":focus-visible"); if (st.focused && s.hover === "lap" && st.lap < 0 && !reduce) st.lap = 0; wake(); };
  const onBlur = () => { st.focused = false; wake(); };
  const ro = new ResizeObserver(measure); ro.observe(root);
  const io = new IntersectionObserver((en) => { visible = en.some((x) => x.isIntersecting); if (visible) wake(); }); io.observe(root);
  root.addEventListener("pointerenter", onEnter); root.addEventListener("pointerleave", onLeave); root.addEventListener("pointerdown", onDown);
  root.addEventListener("focus", onFocus); root.addEventListener("blur", onBlur);
  measure();
  function destroy() {
    alive = false; cancelAnimationFrame(raf); ro.disconnect(); io.disconnect();
    root.removeEventListener("pointerenter", onEnter); root.removeEventListener("pointerleave", onLeave); root.removeEventListener("pointerdown", onDown);
    root.removeEventListener("focus", onFocus); root.removeEventListener("blur", onBlur); canvas.remove();
  }
  return { destroy, set(next) { Object.assign(s, next); if (next.colors) palette = s.colors.map(toRgb); wake(); } };
}

// Puts the star border on the "Record your voice" button, and takes it off when that button is gone.
function mountStarBorder() {
  const btn = document.querySelector(".vs-rec");
  if (starInstance && starInstance.root === btn) return;
  if (starInstance) { starInstance.destroy(); starInstance = null; }
  if (!btn) return;
  const css = getComputedStyle(document.documentElement);
  const tok = (name, fallback) => css.getPropertyValue(name).trim() || fallback;
  starInstance = starBorder(btn, { colors: [tok("--tt-gold-500", "#C99A08"), tok("--tt-blue-500", "#3B7DE8"), tok("--tt-orange-500", "#FF5A00")], radius: Math.round(btn.offsetHeight / 2) || 26, hover: "none", laps: 5 });
  starInstance.root = btn;
}

// "Here's what we found": each profile appears one after another, shows a loader on the right for 3 seconds, then the tick and "Not me".
let obFoundSched = new Set();
function obFoundSet(id, st, run) {
  const o = state.ob;
  if (!o || o.frun !== run) return;
  o.fs[id] = st;
  if (st === "done") obFoundSched.delete(id);
  const el = document.querySelector('.v2-prof[data-id="' + id + '"]');
  if (el) {
    el.classList.remove("v2-prof--wait", "v2-prof--load", "v2-prof--done");
    el.classList.add("v2-prof--" + st, "is-fresh");
  }
  const cta = document.querySelector('[data-action="ob-looks-right"]');
  if (cta) cta.disabled = !o.found.every((p) => o.fs[p.id] === "done");
}
function mountObFound() {
  const o = state.ob;
  if (!o || o.page !== "found" || !document.querySelector(".v2-prof")) return;
  const run = o.frun;
  let k = 0;
  o.found.forEach((p) => {
    if (o.fs[p.id] === "done" || obFoundSched.has(p.id)) return;
    obFoundSched.add(p.id);
    const start = 250 + k++ * 650;
    setTimeout(() => obFoundSet(p.id, "load", run), start);
    setTimeout(() => obFoundSet(p.id, "done", run), start + 3000);
  });
}

function obPersona() {
  return obShell("persona", `
    <h1 class="page-title">Add your voice</h1>
    <p class="vs-sub">Record a short clip so your twin sounds like you, or pick a voice from the library.</p>
    <button class="btn btn--secondary vs-full vs-rec" type="button" data-action="ob-voice-record">${obIco(OB_PATHS.mic)}Record your voice <span class="vs-dur">· 30 sec</span></button>
    <span class="vs-or">Or</span>
    <button class="btn btn--secondary vs-full" type="button" data-action="ob-voices">${obIco(OB_PATHS.wave)}Voice library</button>
  `, "vs-card");
}

function obVoices() {
  return obShell("voices", `
    <h1 class="page-title">Voice library</h1>
    <p class="vs-sub">Play a voice to hear it, then select the one your twin should use.</p>
    <div class="vs-full vs-lib"><div class="voice-list">${LIBRARY_VOICES.map((v) => `
      <div class="voice-row"><div class="voice-row-copy"><b>${esc(v.label)}</b></div><div class="voice-row-actions">
        <button class="btn btn--ghost btn--sm" type="button" data-action="listen-library" data-id="${v.id}">${obIco(OB_PATHS.play)}Play</button>
        <button class="btn btn--secondary btn--sm" type="button" data-action="ob-pick-lib" data-id="${v.id}">Select</button></div></div>`).join("")}</div></div>
    <div class="vs-foot"><button class="btn btn--ghost btn--sm" type="button" data-action="ob-voice-back" aria-label="Back to Add your voice">${obIco(OB_PATHS.back)}Back</button></div>
  `, "vs-card");
}

function obWave(live) {
  const heights = [12, 16, 8, 28, 20, 20, 12, 8, 8, 8, 20, 24, 16, 32, 32, 8, 12, 24, 24, 16, 16, 32, 12, 32, 8, 16];
  const bars = Array.from({ length: 64 }, (_, i) => `<i style="height:${live ? heights[i % heights.length] : 12}px;animation-delay:${(i * 70) % 900}ms"></i>`).join("");
  return `<div class="vs-wave${live ? " is-live" : ""}" aria-hidden="true">${bars}</div>`;
}

function obRecordReady() {
  return obShell("ready", `
    <h1 class="page-title">Add your voice</h1>
    <p class="vs-sub">Read this out loud in your normal speaking voice. About 30 seconds is enough.</p>
    <p class="vs-script">${OB_WORDS.map((w) => `<span class="vs-w" data-t="${esc(w)}">${esc(w)}</span>`).join(" ")}</p>
    ${obWave(false)}
    <button class="btn btn--strong vs-full" type="button" data-action="ob-voice-start">${obIco(OB_PATHS.mic)}Start recording</button>
    <button class="btn btn--ghost vs-after" type="button" data-action="ob-voice-later">${obIco(OB_PATHS.x)}Do it later</button>
  `, "vs-card");
}

function obClock(secs) {
  return `${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, "0")}`;
}

function obRecording() {
  return obShell("recording", `
    <h1 class="page-title">Add your voice</h1>
    <p class="vs-sub">Read this out loud in your normal speaking voice. About 30 seconds is enough.</p>
    <p class="vs-script is-live">${OB_WORDS.map((w, i) => `<span class="vs-w${i < state.ob.words ? " is-read" : ""}" data-t="${esc(w)}">${esc(w)}</span>`).join(" ")}</p>
    ${obWave(true)}
    <p class="vs-timer" role="timer">Recording · <span id="ob-timer">${obClock(state.ob.recSecs)}</span></p>
    <button class="btn btn--strong vs-full" type="button" data-action="ob-voice-stop"${state.ob.words >= OB_MIN_WORDS ? "" : " disabled"}>${obIco(OB_PATHS.stop)}Stop recording</button>
    <button class="btn btn--ghost vs-after" type="button" data-action="ob-voice-retry">${obIco(OB_PATHS.retry)}Try again</button>
  `, "vs-card");
}

function obRecorded() {
  // Both ways in (a recording or a library voice) end here; "Talk to my twin" is what starts the call.
  const lib = state.ob.voice === "library";
  const pick = LIBRARY_VOICES.find((v) => v.id === state.ob.libId) || LIBRARY_VOICES[0];
  return obShell("recorded", `
    <h1 class="page-title">Add your voice</h1>
    <p class="vs-sub">${lib ? "This is the voice your twin will use." : "Listen back to check it sounds right."}</p>
    <div class="voice-pick is-selected vs-full"><span class="voice-ico" aria-hidden="true">${obIco(OB_PATHS.wave)}</span><span class="voice-copy"><b>${lib ? esc(pick.label) : "Your voice recording"}</b><p>${lib ? "Library voice" : obClock(state.ob.recSecs) + " · Recorded"}</p></span><button class="btn btn--secondary btn--sm" type="button" ${lib ? `data-action="listen-library" data-id="${esc(pick.id)}"` : 'data-action="ob-voice-play"'}>${obIco(OB_PATHS.play)}Play</button></div>
    <button class="btn btn--ghost vs-after" type="button" data-action="${lib ? "ob-voice-change" : "ob-voice-retry"}">${obIco(OB_PATHS.retry)}${lib ? "Change voice" : "Try again"}</button>
    <button class="btn btn--strong vs-full" type="button" data-action="ob-voice-finish"><svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"/></svg>Talk to my twin</button>
    <p class="vs-note" role="note"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><span><b>No knowledge added yet.</b> Your twin will answer generically, without your methods or mannerisms. Add your knowledge later for the full experience.</span></p>
  `, "vs-card");
}

function obStopTimer() {
  clearInterval(obTimer);
  obTimer = 0;
  clearInterval(obWordTimer);
  obWordTimer = 0;
}

// On the first call you are not signed up yet: rating a reply or opening the transcript asks you to sign up first, then carries on.
function obGate(act, el) {
  if (!state.obCall || state.accountReady) return false;
  state.auth = "signup";
  state.authError = "";
  state.authPendingAction = "talk:" + act + ":" + ((el && el.dataset && el.dataset.id) || "");
  state.afterFocus = "auth-email";
  render();
  return true;
}

// Twin ready page, signed out: each button asks you to sign up first, then does what you pressed.
function obGateReady(act) {
  if (state.accountReady) return false;
  state.auth = "signup";
  state.authError = "";
  state.authPendingAction = "ready:" + act;
  state.afterFocus = "auth-email";
  render();
  return true;
}

function obStartCall() {
  obStopTimer();
  state.obCall = true;
  state.ob.aboutOpen = true;
  actions["talk-open"]();
}

// The call's right-hand card: what the twin learnt from the links, as editable chips.
const OB_ABOUT = [
  { title: "How you deliver", chips: ["Group workshops", "1:1 coaching", "Online course"] },
  { title: "Your topics", sub: "Grouped from your course, videos and posts.", chips: ["Handling client objections", "The off-plan sales process", "Re-engaging silent clients", "Pricing & commission"] },
  { title: "Your style", sub: "A first read. You’ll refine it when you calibrate.", chips: ["Asks before answering", "Uses real client lines", "Never argues the market"] }
];

function obChip(label) {
  const on = !(state.ob.chipsOff || []).includes(label);
  return `<button class="tee-chip${on ? " is-on" : ""}" type="button" data-action="talk-chip" data-id="${esc(label)}" aria-pressed="${on}">${obIco(on ? OB_PATHS.check : OB_PATHS.plus, 14)}${esc(label)}</button>`;
}

function obAbout() {
  // While "Why this answer" is open the card steps aside as the floating pill, then comes back.
  const whyOpen = state.botWhy && state.botWhy.scope === "talk";
  if (!state.ob.aboutOpen || whyOpen) {
    return `<aside class="card v2f-float" aria-label="About me"><span class="confirm-tile tt-tile-neutral" aria-hidden="true" style="flex:none"><span class="confirm-tile-in">${obIco(OB_PATHS.id)}</span></span><div class="v2f-float-copy"><h2 class="card-title">About me</h2><p class="card-sub">Sales coach · Dubai · 4 topics</p></div><button class="btn btn--secondary btn--icon btn--sm" type="button" data-action="talk-about" aria-label="Expand About me" title="Expand">${obIco(OB_PATHS.maximize)}</button></aside>`;
  }
  return `<aside class="setup-card v2f-card" aria-label="What we found about you">
    <div class="v2f-headrow"><span class="confirm-tile tt-tile-neutral" aria-hidden="true" style="flex:none"><span class="confirm-tile-in">${obIco(OB_PATHS.id)}</span></span><div><h1 class="page-title">What we found about you</h1><p class="know-section-sub">Your twin uses this to answer like you.</p></div><div class="v2f-head-end"><button class="btn btn--secondary btn--sm v2f-edit" type="button" data-action="talk-about-edit"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/></svg>Make changes</button><button class="btn btn--ghost btn--icon btn--sm v2f-collapse" type="button" data-action="talk-about" aria-label="Collapse About me" title="Collapse">${obIco(OB_PATHS.minimize)}</button></div></div>
    <div class="v2f-body"><h2 class="page-title know-section-title">Type of coach</h2><div class="v2f-overview"><ul class="v2f-bullets"><li>You’re a <b>sales coach</b> for real-estate agents, teaching off-plan selling through workshops, 1:1 coaching and your online course.</li><li>Based in <b>Dubai</b>, working with Dubai’s property market.</li><li>You coach <b>both</b> individual agents and teams at agencies.</li></ul><p class="know-section-sub">From your LinkedIn headline, 31 posts and your website.</p></div>
    ${OB_ABOUT.map((s) => `<div class="section-divider" role="separator"></div><h2 class="page-title know-section-title">${s.title}</h2>${s.sub ? `<p class="know-section-sub">${s.sub}</p>` : ""}<div class="v2f-ctrl"><div class="tee-chips">${s.chips.map(obChip).join("")}</div></div>`).join("")}</div>
  </aside>`;
}

function obVoiceNote() {
  return `<p class="know-note v2-voice-note">${obIco(OB_PATHS.info)}<span><b>You’re hearing a library voice.</b><br>Record 30 seconds of your own voice to hear your twin sound like you.</span><button class="btn btn--secondary btn--sm" type="button" data-action="talk-record">Record voice</button></p>`;
}

function obKnowledgeDialog() {
  return `
    <dialog class="issue-dialog confirm-dialog" id="ob-kn-dialog" aria-labelledby="kn-title">
      <div class="confirm-card">
        <button class="btn btn--ghost btn--icon btn--sm confirm-close" type="button" data-action="talk-kn-later" aria-label="Close"><svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></button>
        <div style="display:flex;align-items:center;gap:16px"><span class="confirm-tile" aria-hidden="true" style="flex:none"><span class="confirm-tile-in">${sparklesIcon()}</span></span><div class="confirm-copy"><h2 class="confirm-title" id="kn-title">Your twin needs your knowledge</h2></div></div>
        <p class="confirm-sub">You haven’t added your knowledge to your twin yet. Add your training materials so it learns your training methodology and mannerisms, and you’ll see the full experience.</p>
        <div class="confirm-actions"><button class="btn btn--secondary" type="button" data-action="talk-kn-later">Not now</button><button class="btn btn--strong" type="button" data-action="talk-kn-add">${obIco(OB_PATHS.plus, 16)}Add knowledge</button></div>
      </div>
    </dialog>`;
}

function mountObKnDialog() {
  const dlg = document.getElementById("ob-kn-dialog");
  if (!dlg) return;
  if (typeof dlg.showModal === "function" && !dlg.open) dlg.showModal();
  dlg.addEventListener("cancel", (ev) => { ev.preventDefault(); actions["talk-kn-later"](); });
}

// The links the twin was built from, as icons: hover shows the address, click opens it in a new tab.
function obConnectedLinks() {
  const order = ["li", "web", "ig", "yt"];
  const bare = (s) => String(s || "").replace(/^https?:\/\//, "").replace(/^www\./, "");
  const url = (p) => {
    const h = String(p.handle || "").trim();
    if (p.id === "yt") return "https://www.youtube.com/" + (h.startsWith("@") ? h : "@" + h);
    if (p.id === "ig") return "https://www.instagram.com/" + h.replace(/^@/, "");
    return /^https?:\/\//.test(h) ? h : "https://" + h;
  };
  const links = state.ob.found
    .filter((p) => p.on && (order.includes(p.id) || p.tile === "link"))
    .sort((a, b) => (order.indexOf(a.id) + 1 || 9) - (order.indexOf(b.id) + 1 || 9));
  if (!links.length) return "";
  return `<nav class="v2c-links" aria-label="Links we used">${links.map((p) => {
    const u = url(p);
    return `<a class="v2c-link" href="${esc(u)}" target="_blank" rel="noopener noreferrer" data-tip="${esc(bare(u))}" aria-label="${esc(p.name)}: ${esc(bare(u))}">${obIco(OB_PATHS[p.id] || OB_PATHS[p.tile] || OB_PATHS.link, 20)}</a>`;
  }).join("")}</nav>`;
}

// Twin ready: the full left nav is back and the card says what the twin has and what it is missing.
function pageObReady() {
  const o = state.ob;
  const lib = o.voice === "library" ? (LIBRARY_VOICES.find((v) => v.id === o.libId) || LIBRARY_VOICES[0]).label : "Your recording";
  const row = (done, label, meta) => `<li class="${done ? "is-done" : "is-todo"}"><span class="v2c-ico">${obIco(done ? OB_PATHS.check : OB_PATHS.alert)}</span><b>${label}</b><span class="v2c-meta">${meta}</span></li>`;
  const off = o.offCount || 0;
  return `
    <div class="page page--find v2c-page"><div class="find-stack"><div class="setup-card">
      <div class="celebrate">
        <canvas class="auth-confetti celebrate-confetti" aria-hidden="true"></canvas>
        <div class="talk-end-photo v2c-photo"><img alt="Olga’s twin" src="../media/yt-frame-1.png"></div>
        <h1 class="page-title">Olga’s twin is ready</h1>
        <p class="lede v2c-role">Real-estate sales coach · Dubai</p>
        ${obConnectedLinks()}
        <ul class="v2c-checks" aria-label="What your twin has">${row(true, "Voice", esc(lib))}${row(true, "Persona", "From LinkedIn, website and course")}${row(false, "Knowledge", "Not added yet")}</ul>
        <p class="hint v2c-call">You spoke for <span class="tabular">${esc(o.spoke || "0:00")}</span>${off ? ` · ${off} ${off === 1 ? "reply" : "replies"} felt off. Adding your materials fixes this.` : ""}</p>
        <div class="actions is-center">
          <button class="btn btn--strong" type="button" data-action="ob-ready-knowledge">${obIco(OB_PATHS.plus, 16)}Add knowledge</button>
          <button class="btn btn--secondary" type="button" data-action="ob-ready-agents">Go to agents</button>
          <button class="btn btn--secondary" type="button" data-action="ob-speak-again">${obIco(OB_PATHS.speak, 16)}Speak again</button>
        </div>
      </div>
    </div></div></div>`;
}

function obMiniRail() {
  return `<aside class="rail is-collapsed v2-mini" aria-label="Main"><div class="rail-scroll"><div class="rail-brand"><span class="lockup" aria-label="TrainerTwin">${logo(20)}</span></div></div></aside>`;
}

document.addEventListener("input", (e) => {
  const lf = e.target && e.target.closest ? e.target.closest("[data-live-filter]") : null;
  if (lf) {
    const needle = lf.value.trim().toLowerCase();
    document.querySelectorAll(lf.dataset.liveFilter).forEach((it) => { it.hidden = !!needle && !(it.dataset.s || "").includes(needle); });
    return;
  }
  const dk = e.target && e.target.closest ? e.target.closest("[data-dev-key]") : null;
  if (dk) {
    state.devKeyName = dk.value;
    const gen = document.querySelector(".set-gen");
    if (gen) gen.disabled = !dk.value.trim();
    return;
  }
  const bq = e.target && e.target.closest ? e.target.closest("[data-bq]") : null;
  if (bq && state.bq) {
    state.bq.q = bq.value;
    const needle = bq.value.trim().toLowerCase();
    let any = false;
    document.querySelectorAll(".bq-item").forEach((it) => { const ok = !needle || it.dataset.s.includes(needle); it.hidden = !ok; if (ok) any = true; });
    const none = document.querySelector(".bq-none");
    if (none) none.hidden = any;
    return;
  }
  const el = e.target && e.target.closest ? e.target.closest("[data-ob]") : null;
  if (el && state.ob) state.ob[el.dataset.ob] = el.value;
  if (el && el.tagName === "SELECT") el.classList.toggle("is-empty", !el.value);
});

// "Make changes" on the call's About card: sign up first, then land on Twin's brain with the Training style open to edit.
function obGoStyle() {
  obGoKnowledge();
  actions["open-style-full"]();
}

function obGoKnowledge() {
  clearTimeout(talkTimer);
  talkTimer = 0;
  talkSpeechStop();
  state.talkOpen = false;
  state.talk = null;
  state.obCall = false;
  state.twinReady = true;
  state.ob.page = "done";
  state.nav = "knowledge";
  state.studioDialog = "knowledge";
  state.studioFocus = "knowledge";
  render();
}

function setupPage() {
  if (state.twinReady) {
    if (state.ob.page === "twinready") return pageObReady();
    return state.studioView === "editor" ? pageStudioFlow() : pageTwinProfile();
  }
  return pageOb();
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
  if (state.presenceVoice === "library" && libraryVoice) return { title: libraryVoice.label, note: libraryVoice.note || "Library voice" };
  return { title: "Your voice recording", note: obClock(state.ob.recSecs || 28) + " · Recorded" };
}

// One avatar: the photo from your LinkedIn, or the image you upload instead.
function studioLook() {
  return state.presenceLook === "upload" && state.presenceUpload ? { id: "upload", label: "Your uploaded image" } : { id: "linkedin", label: "LinkedIn photo" };
}

function presStopRec() {
  clearInterval(presTimer);
  presTimer = 0;
  state.presenceRec = false;
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
  const lib = state.presenceVoice === "library";
  const uploaded = state.presenceLook === "upload" && state.presenceUpload;
  const playBtn = lib
    ? `<button class="btn btn--secondary btn--sm" type="button" data-action="listen-library" data-id="${esc(state.presenceLibrary)}">${obIco(OB_PATHS.play)}Play</button>`
    : `<button class="btn btn--secondary btn--sm" type="button" data-action="ob-voice-play">${obIco(OB_PATHS.play)}Play</button>`;
  const voiceBlock = state.presenceRec
    ? `<div class="pres-row is-rec"><span class="voice-ico" aria-hidden="true">${obIco(OB_PATHS.mic)}</span><span class="voice-copy"><b>Recording…</b><p role="timer" id="pres-timer">${obClock(state.presenceRecSecs || 0)}</p></span><button class="btn btn--secondary btn--sm" type="button" data-action="pres-rec-stop">${obIco(OB_PATHS.stop)}Stop</button></div>`
    : `<div class="pres-row"><span class="voice-ico" aria-hidden="true">${obIco(OB_PATHS.wave)}</span><span class="voice-copy"><b>${esc(voice.title)}</b><p>${esc(voice.note)}</p></span>${playBtn}</div>
    <div class="pres-btns"><button class="btn btn--secondary btn--sm" type="button" data-action="pres-rec-start">${obIco(OB_PATHS.retry)}Re-record</button><button class="btn btn--secondary btn--sm" type="button" data-action="pres-lib-toggle" aria-expanded="${!!state.presenceLibOpen}">${obIco(OB_PATHS.wave)}Choose from library</button></div>
    ${state.presenceLibOpen ? `<div class="vs-lib pres-lib"><div class="voice-list">${LIBRARY_VOICES.map((v) => {
      const on = lib && state.presenceLibrary === v.id;
      return `<div class="voice-row"><div class="voice-row-copy"><b>${esc(v.label)}</b></div><div class="voice-row-actions"><button class="btn btn--ghost btn--sm" type="button" data-action="listen-library" data-id="${v.id}">${obIco(OB_PATHS.play)}Play</button><button class="btn btn--secondary btn--sm" type="button" data-action="studio-voice" data-id="${v.id}" ${on ? "disabled" : ""}>${on ? "Selected" : "Select"}</button></div></div>`;
    }).join("")}</div></div>` : ""}`;
  return `
    <span class="flow-kicker">Voice and avatar</span>
    <span class="flow-node-title">Edit voice and avatar</span>
    <p class="studio-label">Avatar</p>
    <div class="pres-row"><span class="pres-photo"><img src="${esc(presenceSrc())}" alt=""></span><span class="voice-copy"><b>${uploaded ? "Your uploaded image" : "From your LinkedIn"}</b><p>${uploaded ? "Your twin will use this image." : "The photo on your profile."}</p></span></div>
    <div class="pres-btns"><label class="btn btn--secondary btn--sm" for="presence-upload">${obIco(OB_PATHS.upload)}Upload image</label><input id="presence-upload" class="sr" type="file" accept="image/*" aria-label="Upload an image">${uploaded ? `<button class="btn btn--ghost btn--sm" type="button" data-action="pres-linkedin">Use LinkedIn photo</button>` : ""}</div>
    <p class="studio-label">Voice</p>
    ${voiceBlock}
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

function pageTwinProfile() {
  const bots = twinBots();
  const openBot = state.roleMenuId === TWIN_ALL.id ? TWIN_ALL : bots.find((bot) => bot.id === state.roleMenuId);
  return `
    <div class="page page--library page--twin-profile">
      <div class="lib-head">
        <h1 class="lib-title"><span class="lib-mark">${icon("setup")}</span>Twin Agents</h1>
        <div class="lib-tools">
          ${creditPill()}
          <button class="btn btn--strong" type="button" data-action="create-bot">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3.5v9M3.5 8h9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          Create new
        </button>
        </div>
      </div>
      ${twinBotsSection(bots, openBot)}
    </div>
  `;
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

function twinAllCard() {
  const learners = roleLearnerAvatars(TWIN_ALL, 0);
  return `
      <div class="twin-bots-head">
        <h2 class="page-title">Twin for all use cases</h2>
      </div>
      <article class="card twin-all is-clickable" data-action="twin-bot-open" data-id="${esc(TWIN_ALL.id)}" tabindex="0" aria-label="Open ${esc(TWIN_ALL.title)}">
        <img class="twin-all-photo" src="${esc(presenceSrc())}" alt="">
        <div class="twin-all-body">
          <h3 class="twin-all-name">Olga’s twin</h3>
          <p class="twin-all-meta">Last updated 29 Oct, 13:00 <svg viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M3 4.5l3 3 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></p>
          <span class="rp-learners" aria-label="Learners who asked this twin">
            ${learners.shown.map(learnerFace).join("")}
            ${learners.extra > 0 ? `<span class="rp-learner-avatar rp-learner-avatar--more">+${learners.extra}</span>` : ""}
          </span>
        </div>
        <button class="btn btn--ghost btn--icon btn--sm rp-row-more twin-all-more" type="button" id="role-menu-${esc(TWIN_ALL.id)}" data-action="role-row-menu" data-id="${esc(TWIN_ALL.id)}" aria-label="Actions for ${esc(TWIN_ALL.title)}" aria-haspopup="menu" aria-expanded="${state.roleMenuId === TWIN_ALL.id}">
          <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="3.25" r="1.15" fill="currentColor"/><circle cx="8" cy="8" r="1.15" fill="currentColor"/><circle cx="8" cy="12.75" r="1.15" fill="currentColor"/></svg>
        </button>
      </article>
`;
}

function twinBotsSection(bots, openBot) {
  return `
      ${twinAllCard()}
      <div class="twin-bots-head">
        <h2 class="page-title">Twin agents for specific use cases</h2>
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

function rubricForRow(row) {
  const task = taskById(row.id);
  if (task && task.roleDraft && task.roleDraft.rubric) return task.roleDraft.rubric;
  if (ROLE_RUBRICS[row.id]) return roleRubricFor(row.id);
  return roleRubricFor("sales");
}

function sessionRubricScores(row, session, pct, rubricOverride) {
  const rubric = rubricOverride || rubricForRow(row);
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

// "What went well" and "To work on" for a learner's session, from its two best and two weakest rubric lines.
function sessionNotesCards(d, session) {
  const lines = d.rubric.lines;
  const ratio = (l) => l.earned / l.points;
  const ranked = lines.map((l, i) => ({ l, i })).sort((x, y) => ratio(y.l) - ratio(x.l));
  const strong = ranked.slice(0, 2);
  const growth = ranked.slice(-2).reverse();
  const seconds = (parseInt(session.length, 10) || 6) * 60;
  const at = [0.18, 0.42, 0.68, 0.88].map((f) => Math.round(seconds * f));
  return `
        <article class="card sr-score sr-notes">
          <h2 class="sr-h rr-h--good">What went well</h2>
          <ul class="rr-notes">
            ${strong.map(({ l, i }, k) => `
            <li><span class="rr-note-ico rr-note-ico--good" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5l10 -10"/></svg></span><div><p class="rr-note-title">${esc(l.name)} · ${l.earned} / ${l.points}</p><p class="rr-note-text">${esc(RR_STRONG[(strong[0].i + k) % RR_STRONG.length])}</p></div></li>`).join("")}
          </ul>
        </article>
        <article class="card sr-score sr-notes">
          <h2 class="sr-h rr-h--grow">To work on</h2>
          <ul class="rr-notes">
            ${growth.map(({ l, i }, k) => `
            <li><span class="rr-note-ico rr-note-ico--grow" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7v6"/><path d="M12 17v.01"/></svg></span><div><div class="rr-note-row"><p class="rr-note-title">${esc(l.name)} · ${l.earned} / ${l.points}</p><button class="rr-jump" type="button" data-action="role-report-seek" data-t="${at[(k + 1) % at.length]}">${rrClock(at[(k + 1) % at.length])} Jump</button></div><p class="rr-note-text">${esc(RR_GROWTH[(growth[0].i + k) % RR_GROWTH.length])}</p></div></li>`).join("")}
          </ul>
        </article>`;
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
        ${learnerFeedbackCard(session, "How helpful was this roleplay?")}
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
        <article class="card sr-goals">
          <h2 class="sr-h">Learner goals</h2>
          <ul>
            ${d.goals.map((g) => `<li><span>${esc(g.text)}</span><span class="badge ${chip[g.status]}">${g.status}</span></li>`).join("")}
          </ul>
        </article>
        ${sessionNotesCards(d, session)}
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

const RATING_ILLUSTRATION = `<svg class="tm-illus" viewBox="0 0 96 96" aria-hidden="true" focusable="false"><g stroke="var(--tt-text-tertiary)" stroke-opacity=".35" stroke-width="4" stroke-linecap="round" fill="none"><path d="M48 6V18"/><path d="M26 10l5 11"/><path d="M70 10l-5 11"/></g><path d="M16.0 57.0 L19.5 65.1 L28.4 66.0 L21.7 71.9 L23.6 80.5 L16.0 76.0 L8.4 80.5 L10.3 71.9 L3.6 66.0 L12.5 65.1 Z" fill="var(--tt-gold-500)" stroke="var(--tt-gold-500)" stroke-width="5" stroke-linejoin="round"/><path d="M80.0 57.0 L83.5 65.1 L92.4 66.0 L85.7 71.9 L87.6 80.5 L80.0 76.0 L72.4 80.5 L74.3 71.9 L67.6 66.0 L76.5 65.1 Z" fill="var(--tt-gold-500)" stroke="var(--tt-gold-500)" stroke-width="5" stroke-linejoin="round"/><path d="M48.0 25.0 L54.5 41.1 L71.8 42.3 L58.5 53.4 L62.7 70.2 L48.0 61.0 L33.3 70.2 L37.5 53.4 L24.2 42.3 L41.5 41.1 Z" fill="var(--tt-gold-300)" stroke="var(--tt-gold-300)" stroke-width="5" stroke-linejoin="round"/></svg>`;

// The summary above a sessions table: paid-by-learners card with its ring, the rating card, then a ruled row of the other numbers.
// metrics: [{ name, value, note, bad?, text? }]; `text` swaps the big number for a smaller line (a long label such as a weakest area).
function sessionsSummary({ label, ringPct, ringTip, amount, count, helpful, ratedN, total, metrics }) {
  return `
      <section class="ts-metrics ts-metrics--split" aria-label="${esc(label)}">
        <div class="tm-row tm-grid">
          ${metrics.map((m) => `<div class="tm-metric"><p class="tm-label">${statIcon(m.name)}<span>${esc(m.name)}</span></p><div class="tm-value-row">${m.text ? `<p class="tm-value tm-value--text">${esc(m.value)}</p>` : `<p class="tm-value tabular">${m.value}</p>`}${m.go === "none" ? "" : `<button type="button" class="tm-go" data-action="metric-go" data-kind="${esc(m.go || "table")}" aria-label="${esc(m.name)}: see the details"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>`}</div></div>`).join("")}
        </div>
        <div class="tm-left">
          <div class="tm-rating">
            ${RATING_ILLUSTRATION}
            <div class="tm-rating-text">
              <p class="tm-hero-label">${statIcon("Helpfulness")}<span>Average help score</span></p>
              <div class="tm-rating-row">
                <p class="tm-rating-head"><span><b class="tabular">${helpful}</b> / 5</span></p>
                <p class="tm-note tm-rating-count">${ratedN} ${ratedN === 1 ? "session" : "sessions"} rated</p>
              </div>
            </div>
          </div>
          <div class="tm-hero">
            <span class="tm-ringwrap" title="${esc(ringTip)}"><span class="credit-pill-ring tm-ring tm-ring--lg" aria-hidden="true" style="--used:${ringPct}%"></span><b class="tm-ring-pct tabular">${ringPct}%</b></span>
            <div class="tm-hero-text">
              <p class="tm-hero-label">${statIcon("Paid by learners")}<span>Paid by learners</span></p>
              <div class="tm-rating-row">
                <p class="tm-hero-value tabular">${esc(amount)}</p>
                <p class="tm-note tm-hero-count">${esc(count)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>`;
}

function pageSessions() {
  const rf = state.roleSessFilter;
  const daysAgo = (when) => (/^Today/.test(when) ? 0 : /^Yesterday/.test(when) ? 1 : /^Monday/.test(when) ? 3 : /^Sunday/.test(when) ? 4 : 5);
  const rows = [];
  sharedRoles().forEach((row) => {
    if (rf.role !== "all" && rf.role !== row.id) return;
    roleHistory(row).slice(0, 3).forEach((session) => {
      if (rf.cohort !== "all" && rf.cohort !== TS_COHORT_OF[session.learner]) return;
      if (rf.learner !== "all" && rf.learner !== session.learner) return;
      if (daysAgo(session.when) > Number(rf.date)) return;
      const pct = Math.round(Number(session.score) * 10);
      const scored = sessionRubricScores(row, session, pct);
      const weak = scored.lines.slice().sort((x, y) => x.earned / x.points - y.earned / y.points)[0];
      const fb = twinSessionFeedback(session);
      rows.push({ role: row, session, pct, weak, fb, idx: rows.length });
    });
  });
  const label = (n) => (n >= 5 ? "Very helpful" : n === 4 ? "Helpful" : n === 3 ? "Somewhat helpful" : "Not helpful");
  // The totals above the table, worked out from the rows below.
  const minutes = rows.reduce((sum, r) => sum + (parseInt(r.session.length, 10) || 0), 0);
  const avg = rows.length ? Math.round(rows.reduce((sum, r) => sum + r.pct, 0) / rows.length) : 0;
  const strong = rows.filter((r) => r.pct >= 80).length;
  const rated = rows.filter((r) => r.fb.stars != null);
  const helpful = rated.length ? (rated.reduce((sum, r) => sum + r.fb.stars, 0) / rated.length).toFixed(1) : "–";
  const purchases = Math.floor(rows.length / 4);
  const issueTotal = rows.reduce((sum, r) => sum + r.fb.issues.length, 0);
  const issueSessions = rows.filter((r) => r.fb.issues.length > 0).length;
  const isLow = (r) => r.pct < 70 || (r.fb.stars != null && r.fb.stars <= 3);
  const lowCount = rows.filter(isLow).length;
  const shownRows = state.rsFocus === "issues" ? rows.filter((r) => r.fb.issues.length > 0) : state.rsFocus === "low" ? rows.filter(isLow) : rows;
  const goIcon = '<svg class="ts-attn-go" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  // Most urgent first, same as the twin sessions page.
  const attn = [
    issueTotal ? `<button type="button" class="ts-attn-chip ts-attn-chip--danger${state.rsFocus === "issues" ? " is-on" : ""}" data-action="rs-focus" data-id="issues" aria-pressed="${state.rsFocus === "issues"}">${issueTotal} reported ${issueTotal === 1 ? "problem" : "problems"}${goIcon}</button>` : "",
    lowCount ? `<button type="button" class="ts-attn-chip ts-attn-chip--caution${state.rsFocus === "low" ? " is-on" : ""}" data-action="rs-focus" data-id="low" aria-pressed="${state.rsFocus === "low"}">${lowCount} ${lowCount === 1 ? "session" : "sessions"} with a low scorecard or a client that didn’t feel real${goIcon}</button>` : ""
  ].filter(Boolean);
  return `
    <div class="page page--library page--twin-profile">
      <div class="lib-head">
        <h1 class="lib-title"><span class="lib-mark">${icon("sessions")}</span>Roleplay sessions</h1>
        <div class="lib-tools ts-filters">
          <div class="ts-filter">
            ${filterDropdown("rs-cohort", "Filter by cohort", [["all", "All cohorts"]].concat(TS_COHORTS), rf.cohort, "rs-filter-pick", "cohort")}
          </div>
          <div class="ts-filter">
            ${filterDropdown("rs-learner", "Filter by learner", [["all", "All learners"]].concat(["Aisha", "James", "Nora", "Leo", "Priya"].map((first) => { const l = TWIN_LEARNERS.find((x) => x.name.startsWith(first + " ")) || { name: first, email: "" }; return [first, l.name, l.email]; })), rf.learner, "rs-filter-pick", "learner", true)}
          </div>
          <div class="ts-filter">
            ${filterDropdown("rs-role", "Filter by roleplay", [["all", "All roleplays"]].concat(sharedRoles().map((row) => [row.id, docUpper(row.title.replace(/^[^:]+:\s*/, ""))])), rf.role, "rs-filter-pick", "role")}
          </div>
          <div class="ts-filter">
            ${filterDropdown("rs-date", "Filter by date", BOT_RANGES.map(([id, label]) => [id, label]), rf.date, "rs-filter-pick", "date")}
          </div>
        </div>
      </div>
${sessionsSummary({
        label: "Roleplay sessions summary",
        ringPct: rows.length ? Math.round((purchases / rows.length) * 100) : 0,
        ringTip: purchases + " of " + rows.length + (rows.length === 1 ? " session" : " sessions") + " were purchased",
        amount: "AED " + purchases * 60,
        count: purchases + (purchases === 1 ? " purchase" : " purchases"),
        helpful: helpful === "–" ? "–" : helpful,
        ratedN: rated.length,
        total: rows.length,
        metrics: [
          { name: "Sessions", value: rows.length, note: "Practice sessions" },
          { name: "Practice minutes", value: minutes, note: "Time spent practising", go: "none" },
          { name: "Average score", value: avg + ` <span class="an-muted">/ 100</span>`, note: strong + " scored 80+" },
          { name: "Issues reported", value: issueTotal, note: issueSessions ? "In " + issueSessions + (issueSessions === 1 ? " session" : " sessions") : "None raised", bad: !!issueTotal, go: "issues-role" }
        ]
      })}
      ${attn.length ? `<div class="ts-attn" role="group" aria-label="Needs a look"><span class="ts-attn-label"><svg class="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"/></svg>Needs a look</span>${attn.join("")}${state.rsFocus ? `<button type="button" class="ts-attn-clear" data-action="rs-focus" data-id="">Show all</button>` : ""}</div>` : ""}
      ${shownRows.length ? `
      <p class="overline ts-table-title">Roleplay sessions</p>
      <div class="an-table ts-table" role="table" aria-label="Practice sessions">
        <div class="an-row an-row--rsess an-row--head" role="row">
          <span role="columnheader">Name</span><span role="columnheader" class="rs-col-scn">Scenario</span><span role="columnheader">Score</span><span role="columnheader" class="rs-col-weak">Weakest area</span><span role="columnheader">Rating</span><span aria-hidden="true"></span>
        </div>
        ${shownRows.map(({ role, session, pct, weak, fb, idx }) => `
        <button class="an-row an-row--rsess ts-rowbtn" type="button" role="row" data-action="session-open" data-role="${esc(role.id)}" data-id="${esc(session.id)}">
          <span class="lr-name ts-learner" role="cell"><span class="rp-avatar rp-avatar--${(idx % 5) + 1}" aria-hidden="true">${esc(session.learner.charAt(0).toUpperCase())}</span><span class="ts-learner-text"><b>${esc(session.learner)}</b><span class="an-muted">${esc(session.when)} · ${esc(session.length)}</span></span></span>
          <span class="rs-col-scn" role="cell">${esc(docUpper(role.title.replace(/^[^:]+:\s*/, "")))}</span>
          <span class="rs-score tabular" role="cell">${pct} <span class="an-muted">/ 100</span></span>
          <span class="rs-col-weak" role="cell">${esc(weak.name)} <span class="an-muted tabular">${weak.earned}/${weak.points}</span></span>
          <span class="ts-help" role="cell">${fb.stars == null ? `<span class="an-muted">No rating</span>` : `<span class="ts-stars ${starTone(fb.stars)}" aria-label="${fb.stars} of 5 stars">${tsStars(fb.stars)}</span><span class="ts-help-label an-muted">${label(fb.stars)}</span>`}${fb.issues.length ? `<span class="badge badge--caution ts-issue">${esc(fb.issues[0].label)}</span>` : ""}</span>
          <span class="cal-go" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M7 17 17 7M8 7h9v9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
        </button>`).join("")}
      </div>` : `<p class="ts-empty">No sessions match these filters.</p>`}
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

// Olga's own persona, read from what she uploaded: her website, LinkedIn, YouTube, reels and recordings. It is the persona the twin speaks in.
function olgaPersona() {
  return {
    id: "olga", own: true, category: "sales", industry: "Real estate",
    name: "Olga Sinenko", role: "Coach", src: presenceSrc(), look: "olga",
    behaviours: ["Warm & Open", "Direct & Challenging"],
    meta: "Dubai",
    speaking: ["Neutral", "Medium answers", "Interrupts sometimes", "Uses fillers", "Pauses to think"],
    voice: "olga",
    knowledge: "6 sources · 48 videos · 120 reels",
    note: "Warm and plain-spoken. Opens with a question, then gives one clear next step.",
    preset: {
      age: "38", city: "Dubai",
      background: "Real estate coach in Dubai. Teaches off-plan sales through masterclasses, live Q&As and roleplays. Learned from her website, 36 LinkedIn posts, 48 YouTube videos, 120 reels and 86 Telegram posts.",
      behaviours: ["warm-open", "direct"], difficulty: "medium", opening: "Friendly",
      formality: "Neutral", length: "Medium", interrupts: "Sometimes", pauses: true, fillers: true,
      phrases: ["Here’s the thing.", "Let’s make it simple.", "It depends, so let’s qualify first."],
      talk: "Warm and plain-spoken. Opens with a question, then gives one clear next step.",
      voice: "olga", pace: "Normal"
    }
  };
}

function rpsPersonas(cat, ind) {
  const photo = (id) => (PERSONAS.find((p) => p.id === id) || PERSONAS[0]).src;
  const realEstate = docPersonaCards();
  const rest = RPS_LIBRARY_ROWS.map(([id, c, i, name, role, ph, behaviours, speaking, voice, note]) => ({ id, category: c, industry: i, name, role, src: photo(ph), behaviours, speaking, voice, note }));
  const all = realEstate.concat(rest, state.rpPersonas, [olgaPersona()]).map((item) => state.rpOverrides[item.id] || item);
  return cat ? all.filter((p) => p.category === cat && p.industry === ind && !p.own) : all;
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

const RPS_STEPS = [[1, "Avatar"], [2, "Voice"], [3, "Knowledge"]];

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
          <div class="rpd-title">
            <h1 class="rpd-name">${esc(p.name)}</h1>
            ${place ? `<p class="rpd-sub">${esc(place)}</p>` : ""}
            <span class="rps-person-chip rpd-chip">${esc(p.role)}</span>
          </div>
          <button class="btn btn--secondary rpd-edit" type="button" data-action="rps-persona-edit" data-id="${esc(p.id)}">${menuIcon("edit")}Edit</button>
        </article>
        <article class="card rpd-card">
          ${pre.background ? row("Background", `<p>${esc(pre.background)}</p>`) : ""}
          ${p.doc ? row("Lead source", `<p>${esc(p.doc.lead)}</p>`) + row("Budget", `<p>${esc(p.doc.budget)}</p>`) + row("Timeline", `<p>${esc(p.doc.timeline)}</p>`) + row("Areas", `<p>${esc(docUpper(p.doc.areas))}</p>`) + row("Motivation", `<p>${esc(docUpper(p.doc.motivation))}</p>`) + row("What matters most", tags(p.doc.focus.split("; "))) + row("Constraints", tags(p.doc.constraints.map(docUpper))) + row("Pet peeves", tags(p.doc.peeves.map(docUpper))) : ""}
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

function pageRoleSettings() {
  if (state.rpsCreate && state.rpsDraft) return pageRpsCreate();
  if (state.rpsDetailId) return pageRpsDetail();
  // Olga's industry is already known (real estate), so her predefined sales personas show straight away.
  const cat = RPS_CATS[0];
  const ind = RPS_OWN_INDUSTRY;
  const list = rpsPersonas(cat.id, ind).filter((p) => !state.rpsRemoved.includes(p.id));
  const listView = state.rpsView !== "card"; // list is the default
  return `
    <div class="page page--library page--wide">
      <div class="lib-head">
        <h1 class="lib-title"><span class="lib-mark">${icon("rpsettings")}</span>Persona</h1>
        <div class="lib-tools">
          <button class="btn btn--strong" type="button" data-action="rps-persona-new">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3.5v9M3.5 8h9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            Create persona
          </button>
        </div>
      </div>
      <div class="rps-panel-head rps-panel-head--page rps-panel-head--next">
        <div><h2 class="rps-panel-title">${esc(ind)} ${esc(cat.noun)} personas</h2><p class="rps-intro">${esc(cat.blurb)} ${esc(ind.toLowerCase())}. Pick a default, or create your own.</p></div>
        <div class="seg seg--icons" role="group" aria-label="View">
          <button type="button" data-action="rps-view" data-id="card" aria-pressed="${!listView}" aria-label="Card view" title="Card view">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="2.5" y="2.5" width="4.5" height="4.5" rx="1" stroke="currentColor" stroke-width="1.5"/><rect x="9" y="2.5" width="4.5" height="4.5" rx="1" stroke="currentColor" stroke-width="1.5"/><rect x="2.5" y="9" width="4.5" height="4.5" rx="1" stroke="currentColor" stroke-width="1.5"/><rect x="9" y="9" width="4.5" height="4.5" rx="1" stroke="currentColor" stroke-width="1.5"/></svg>
          </button>
          <button type="button" data-action="rps-view" data-id="list" aria-pressed="${listView}" aria-label="List view" title="List view">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2.5 4h11M2.5 8h11M2.5 12h11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </button>
        </div>
      </div>
      ${list.length && listView ? `
      <div class="rps-list" role="list">
        ${list.map((p) => {
          const tags = p.behaviours.length ? p.behaviours : ["Not set"];
          const voiceName = p.voice ? (RPS_VOICES.find((v) => v.id === p.voice) || { name: "" }).name : "";
          return `<article class="rps-row" role="listitem" data-action="rps-persona-view" data-id="${esc(p.id)}" tabindex="0" aria-label="Open ${esc(p.name)}">
            ${p.src ? `<img class="rps-row-photo" src="${esc(p.src)}" alt="">` : `<span class="rps-row-photo rps-row-photo--initial" aria-hidden="true">${esc((p.name || "?").charAt(0).toUpperCase())}</span>`}
            <span class="rps-row-who"><b>${esc(p.name)}</b>${p.meta ? `<span>${esc(p.meta)}</span>` : ""}</span>
            <span class="rps-row-role">${esc(p.role)}</span>
            <span class="rps-row-tags">${tags.slice(0, 1).map((x) => `<span class="rps-row-tag">${esc(x)}</span>`).join("")}${tags.length > 1 ? `<span class="rps-row-tag rps-row-tag--more">+${tags.length - 1}</span>` : ""}</span>
            <span class="rps-row-voice">${esc(voiceName)}</span>
            ${rpsRowMenu(p)}
          </article>`;
        }).join("")}
      </div>` : list.length ? `
      <div class="rps-people">
        ${list.map((p) => `
          <article class="card rps-person is-clickable" data-action="rps-persona-view" data-id="${esc(p.id)}" tabindex="0" aria-label="Open ${esc(p.name)}">
            <button class="rps-card-edit" type="button" data-action="rps-persona-edit" data-id="${esc(p.id)}" aria-label="Edit ${esc(p.name)}" title="Edit persona">${menuIcon("edit")}</button>
            <div class="rps-person-hero">
              ${p.src ? `<img class="rps-person-photo" src="${esc(p.src)}" alt="">` : `<span class="rps-person-photo rps-person-photo--initial" aria-hidden="true">${esc((p.name || "?").charAt(0).toUpperCase())}</span>`}
              <div class="rps-person-title">
                <span class="rps-person-name">${esc(p.name)}</span>
                ${p.meta ? `<span class="rps-person-loc">${esc(p.meta)}</span>` : ""}
                <span class="rps-person-chip">${esc(p.role)}</span>
              </div>
            </div>
            <div class="rps-person-body">
              <div class="rps-person-item"><p class="rps-person-label">Behaviour</p><div class="rps-person-tags">${(p.behaviours.length ? p.behaviours : ["Not set"]).map((t) => `<span class="rps-tag">${esc(t)}</span>`).join("")}</div></div>
              ${p.speaking && p.speaking.length ? `<div class="rps-person-item"><p class="rps-person-label">Speaking</p><div class="rps-person-tags">${p.speaking.map((t) => `<span class="rps-tag">${esc(t)}</span>`).join("")}</div></div>` : ""}
              ${p.voice ? `<div class="rps-person-item"><p class="rps-person-label">Voice</p><div class="rps-person-value rps-voice-line"><span>${esc((RPS_VOICES.find((v) => v.id === p.voice) || { name: "" }).name)}</span>${voiceButton(p.voice, (RPS_VOICES.find((v) => v.id === p.voice) || { name: "" }).name)}</div></div>` : ""}
              ${p.knowledge ? `<div class="rps-person-item"><p class="rps-person-label">Knowledge</p><p class="rps-person-value">${esc(p.knowledge)}</p></div>` : ""}
            </div>
          </article>
        `).join("")}
      </div>` : `
      <div class="rps-empty">
        <p>No ${esc(cat.noun)} personas for ${esc(ind.toLowerCase())} yet.</p>
        <button class="btn btn--secondary" type="button" data-action="rps-persona-new">Create persona</button>
      </div>`}
      ${state.rpsRemoveId ? rpsRemoveDialog() : ""}
    </div>
  `;
}

// Three-dot menu on a persona row: Edit and Remove.
function rpsRowMenu(p) {
  const scope = "rps-menu-" + p.id;
  const open = state.askMenu === scope;
  const dots = '<path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>';
  const pencil = '<path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/>';
  return `<div class="twin-hero-ask-type bq-more rps-row-more">
    <button class="btn btn--ghost btn--icon btn--sm inbox-del" type="button" data-action="ask-type-toggle" data-scope="${scope}" aria-haspopup="menu" aria-expanded="${open}" aria-label="Actions for ${esc(p.name)}" title="More">${obIco(dots, 18)}</button>
    ${open ? `<div class="twin-hero-ask-menu" role="menu">
      <button type="button" class="twin-hero-ask-opt" role="menuitem" data-action="rps-persona-edit" data-id="${esc(p.id)}"><span class="twin-hero-ask-opt-ico" aria-hidden="true">${obIco(pencil, 16)}</span>Edit</button>
      <button type="button" class="twin-hero-ask-opt rps-opt-remove" role="menuitem" data-action="rps-remove-ask" data-id="${esc(p.id)}"><span class="twin-hero-ask-opt-ico" aria-hidden="true">${menuIcon("trash")}</span>Remove</button>
    </div>` : ""}
  </div>`;
}

function rpsRemoveDialog() {
  const p = rpsPersonas(RPS_CATS[0].id, RPS_OWN_INDUSTRY).find((x) => x.id === state.rpsRemoveId);
  const name = p ? p.name : "this persona";
  return `
    <dialog class="issue-dialog upsell-dialog" id="rps-remove-dialog" aria-labelledby="rps-remove-title">
      <div class="issue-card upsell-card upsell-card--end">
        <span class="confirm-tile tt-tile-neutral talk-end-ico" aria-hidden="true"><span class="confirm-tile-in">${menuIcon("trash")}</span></span>
        <h2 class="issue-title upsell-title" id="rps-remove-title">Remove ${esc(name)}?</h2>
        <p class="upsell-sub rps-remove-sub">${esc(name)} will be taken out of your persona library.</p>
        <div class="upsell-actions talk-confirm-actions">
          <button class="btn btn--secondary" type="button" data-action="rps-remove-cancel">Cancel</button>
          <button class="btn btn--danger" type="button" data-action="rps-remove-yes" data-id="${esc(state.rpsRemoveId)}">Remove</button>
        </div>
      </div>
    </dialog>`;
}

// Twin's brain: when a card opens to edit, scroll the canvas so the whole card is on screen (below the tabs, clear of the left nav).
let studioFocusKey = null;
function mountStudioFocus() {
  const key = state.studioDialog || null;
  if (key === studioFocusKey) return;
  studioFocusKey = key;
  if (!key) return;
  requestAnimationFrame(() => {
    const canvas = document.querySelector(".flow-canvas");
    const node = document.querySelector(".flow-node.is-editing");
    if (!canvas || !node) return;
    const cr = canvas.getBoundingClientRect();
    const nr = node.getBoundingClientRect();
    const left = canvas.scrollLeft + (nr.left - cr.left) - Math.max(24, (cr.width - nr.width) / 2);
    const top = canvas.scrollTop + (nr.top - cr.top) - 160;
    canvas.scrollTo({ left: Math.max(0, left), top: Math.max(0, top), behavior: "smooth" });
  });
}

function mountRpsRemoveDialog() {
  const dlg = document.getElementById("rps-remove-dialog");
  if (!dlg) return;
  if (typeof dlg.showModal === "function" && !dlg.open) dlg.showModal();
  dlg.addEventListener("cancel", (ev) => { ev.preventDefault(); actions["rps-remove-cancel"](); });
  dlg.addEventListener("click", (ev) => { if (ev.target === dlg) actions["rps-remove-cancel"](); });
}

function rpsAvatarStep(d) {
  const diff = ROLE_DIFFICULTY.find((item) => item.id === d.difficulty) || ROLE_DIFFICULTY[1];
  return `
    <h1 class="page-title role-card-title">Avatar</h1>
    <div class="field">
      <p class="label">Pick a persona</p>
      <div class="rpa-people" role="group" aria-label="Persona">
        ${d.ownSrc ? `
          <div class="rpa-person" aria-label="Olga">
            <span class="rpa-photo"><img src="${esc(d.ownSrc)}" alt=""><span class="rpa-tick" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5 6.5 11.5 12.5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span></span>
            <span class="rpa-name">Olga</span>
            <span class="rpa-sub">You</span>
          </div>` : PERSONAS.map((item) => `
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
      <p class="hint hint-below">Pick up to three.</p>
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
    <h2 class="rps-sub-h">Speaking mannerisms</h2>
    ${rpsSegField("formality", "Formality", "How polished their language is.", RPS_FORMALITY)}
    ${rpsSegField("length", "Answer length", "How much they say at a time.", RPS_LENGTH)}
    ${rpsSegField("interrupts", "Interrupts", "How often they cut the agent off.", RPS_INTERRUPT)}
    <div class="rps-rows">
      ${rpsToggleRow("pauses", "Pauses before answering", "Takes a beat to think, like a real call.")}
      ${rpsToggleRow("fillers", "Uses fillers", "Says “um”, “well” and “you know” now and then.")}
    </div>
    <div class="field">
      <p class="label">Signature phrases</p>
      ${d.phrases.length ? `<ul class="rps-files">${d.phrases.map((text, i) => `<li><span>“${esc(text)}”</span><button class="btn btn--ghost btn--sm" type="button" data-action="rps-phrase-remove" data-id="${i}" aria-label="Remove: ${esc(text)}">Remove</button></li>`).join("")}</ul>` : ""}
      <div class="role-goal-add">
        <label class="sr" for="rps-phrase">Signature phrase</label>
        <input class="input" id="rps-phrase" data-rps-field="phraseDraft" placeholder="Example: Let me think about it." value="${esc(d.phraseDraft)}" autocomplete="off" ${d.phrases.length >= 4 ? "disabled" : ""}>
        <button class="btn btn--secondary" type="button" data-action="rps-phrase-add" ${d.phrases.length >= 4 ? "disabled" : ""}>
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3.5v9M3.5 8h9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          Add
        </button>
      </div>
      <p class="hint hint-below">Lines they come back to. Up to four.</p>
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
    <div class="role-goal-add rps-know-add">
      <label class="sr" for="rps-know-new">Add a source</label>
      <input class="input" id="rps-know-new" data-rps-know="1" placeholder="Paste a link to add a source" value="${esc(state.rpKnowDraft)}" autocomplete="off">
      <button class="btn btn--secondary" type="button" data-action="rps-know-add">
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3.5v9M3.5 8h9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        Add
      </button>
    </div>
  `;
}

function pageRpsCreate() {
  const d = state.rpsDraft;
  const step = state.rpsStep;
  const last = step === RPS_STEPS.length;
  const body = step === 1 ? rpsAvatarStep(d) : step === 2 ? rpsVoiceStep(d) : rpsKnowledgeStep(d);
  return `
    <div class="page page--create">
      <header class="create-bar">
        <button class="create-bar-back" type="button" data-action="rps-persona-cancel">${icon("back")} Persona</button>
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
  "objection-handling": ["Clarify first", "“I need to think about it”", "Price concerns", "Wait and see", "Agreeing the next step"],
  "listing-pitch": ["Market snapshot", "Your marketing plan", "Pricing the listing", "Why you, not them", "Signing the agreement"],
  "fee-negotiation": ["Naming the work", "One percent ask", "Trading scope for fee", "Holding the line", "Closing the agreement"],
  "cold-calling": ["The opening line", "One comparable", "Handling “not interested”", "Booking a meeting", "Voicemail script"],
  "investor-yield": ["Gross vs net yield", "Service charges", "Worst, average, best case", "Resale and exit", "Payment plan cash flow"],
  "deposit-handover": ["Reservation form", "Payment milestones", "Construction updates", "Snagging", "Handover day"]
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
  const bot = (state.twinSessionBot === TWIN_ALL.id ? TWIN_ALL : twinBots().find((item) => item.id === state.twinSessionBot));
  const list = bot ? botConversations(bot) : [];
  const idx = list.findIndex((item) => item.id === state.twinSessionId);
  if (!bot || idx < 0) { state.twinSessionId = ""; return pageTwinSessions(); }
  const c = list[idx];
  const qa = botQA(bot);
  const start = Math.max(0, qa.findIndex(([q]) => q === c.q));
  const pairs = qa.slice(start).concat(qa.slice(0, start));
  const topics = (TWIN_SESSION_TOPICS[bot.id] || ["The question", "Olga’s answer"]).slice(0, 3 + (idx % 3));
  const lines = [];
  pairs.forEach(([q, a]) => { lines.push({ who: "learner", name: c.learner, text: q }); lines.push({ who: "twin", name: "My twin", text: a }); });
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
        ${learnerFeedbackCard(c, "How helpful is Olga’s twin?")}
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

// Learners with access to Olga's twins: how many agents each can use and how much of their minutes they have spent.
const TWIN_LEARNERS = [
  { name: "Aisha Khan", email: "aisha.khan@gmail.com", agents: 4, minutes: 240, used: 168 },
  { name: "James Carter", email: "james.carter@outlook.com", agents: 3, minutes: 180, used: 74 },
  { name: "Nora Ali", email: "nora.ali@gmail.com", agents: 2, minutes: 120, used: 112 },
  { name: "Leo Martin", email: "leo@martinrealty.ae", agents: 3, minutes: 180, used: 31 },
  { name: "Priya Nair", email: "priya.nair@gmail.com", agents: 4, minutes: 240, used: 205 },
  { name: "Omar Haddad", email: "omar.haddad@dubaihomes.com", agents: 2, minutes: 120, used: 48 },
  { name: "Sofia Rossi", email: "sofia.rossi@gmail.com", agents: 3, minutes: 180, used: 96 },
  { name: "Daniel Cho", email: "daniel.cho@outlook.com", agents: 2, minutes: 120, used: 12 }
];

function twinLearnersTable() {
  return `
    <div class="an-table lr-table" role="table" aria-label="Learners">
      <div class="an-row an-row--learners an-row--head" role="row">
        <span role="columnheader">Learner</span><span role="columnheader" class="lr-email">Email</span><span role="columnheader">Assigned agents</span><span role="columnheader">Assigned minutes</span><span role="columnheader">Usage (minutes)</span>
      </div>
      ${TWIN_LEARNERS.map((l, i) => {
        const left = l.minutes - l.used;
        const pct = Math.round((l.used / l.minutes) * 100);
        return `
      <div class="an-row an-row--learners" role="row">
        <span class="lr-name" role="cell"><span class="rp-avatar rp-avatar--${(i % 5) + 1}" aria-hidden="true">${esc(l.name.charAt(0))}</span>${esc(l.name)}</span>
        <span class="lr-email an-muted" role="cell">${esc(l.email)}</span>
        <span class="tabular" role="cell">${l.agents} <span class="an-muted">agents</span></span>
        <span class="tabular" role="cell">${l.minutes} <span class="an-muted">min</span></span>
        <span class="lr-usage" role="cell">
          <span class="lr-bar${pct >= 90 ? " is-high" : ""}" aria-hidden="true"><span style="width:${pct}%"></span></span>
          <span class="lr-text tabular">${l.used} used · ${left} left</span>
        </span>
      </div>`;
      }).join("")}
    </div>
  `;
}

// Twin sessions: every learner conversation with one of Olga's twin agents, with the totals above the table.
const TS_COHORTS = [["sep", "Sep 2026 batch"], ["aug", "Aug 2026 batch"]];
const TS_COHORT_OF = { Aisha: "sep", James: "sep", Nora: "sep", Leo: "aug", Priya: "aug" };
const TS_MINUTES = [8, 6, 13, 5, 10];
const TS_QUESTIONS = [4, 2, 6, 2, 5];

// Star colour by rating: 5 green, 4 gold, 3 or less red.
function starTone(n) {
  return n >= 5 ? "is-great" : n === 4 ? "is-good" : "is-low";
}

function tsStars(n) {
  const star = (on) => `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" fill="${on ? "currentColor" : "var(--tt-border)"}"/></svg>`;
  return [1, 2, 3, 4, 5].map((i) => star(i <= n)).join("");
}

function pageTwinSessions() {
  const bots = twinBots();
  const f = state.twinSessFilter;
  // How many days back a conversation was, from its label ("Today, 2:14 pm", "Monday, 9:18 am").
  const daysAgo = (when) => (/^Today/.test(when) ? 0 : /^Yesterday/.test(when) ? 1 : /^Monday/.test(when) ? 3 : /^Sunday/.test(when) ? 4 : 5);
  const rows = [];
  for (let i = 0; i < 5; i += 1) {
    bots.forEach((bot) => {
      const c = botConversations(bot)[i];
      if (!c) return;
      if (f.cohort !== "all" && f.cohort !== TS_COHORT_OF[c.learner]) return;
      if (f.bot !== "all" && f.bot !== bot.id) return;
      if (f.learner !== "all" && f.learner !== c.learner) return;
      if (daysAgo(c.when) > Number(f.date)) return;
      const fb = twinSessionFeedback(c);
      rows.push({ bot, c, idx: rows.length, minutes: TS_MINUTES[i], questions: TS_QUESTIONS[i], stars: fb.stars, issues: fb.issues.length });
    });
  }
  const rated = rows.filter((r) => r.stars != null);
  const minutes = rows.reduce((sum, r) => sum + r.minutes, 0);
  const questions = rows.reduce((sum, r) => sum + r.questions, 0);
  const helpful = rated.length ? (rated.reduce((sum, r) => sum + r.stars, 0) / rated.length).toFixed(1) : "–";
  const extensions = Math.floor(rows.length / 4);
  const issueTotal = rows.reduce((sum, r) => sum + r.issues, 0);
  const issueSessions = rows.filter((r) => r.issues > 0).length;
  const lowRated = rows.filter((r) => r.stars != null && r.stars <= 3).length;
  const askCount = inboxPending(INBOX_QUESTIONS).length;
  const shownRows = state.tsFocus === "issues" ? rows.filter((r) => r.issues > 0) : state.tsFocus === "low" ? rows.filter((r) => r.stars != null && r.stars <= 3) : rows;
  // Most urgent first: a reported problem, then low ratings, then questions waiting for an answer.
  const attn = [
    issueTotal ? `<button type="button" class="ts-attn-chip ts-attn-chip--danger${state.tsFocus === "issues" ? " is-on" : ""}" data-action="ts-focus" data-id="issues" aria-pressed="${state.tsFocus === "issues"}">${issueTotal} reported ${issueTotal === 1 ? "problem" : "problems"}<svg class="ts-attn-go" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>` : "",
    lowRated ? `<button type="button" class="ts-attn-chip ts-attn-chip--caution${state.tsFocus === "low" ? " is-on" : ""}" data-action="ts-focus" data-id="low" aria-pressed="${state.tsFocus === "low"}">${lowRated} rated 3★ or lower<svg class="ts-attn-go" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>` : "",
    askCount ? `<button type="button" class="ts-attn-chip ts-attn-chip--info" data-action="ts-ask-open">${askCount} ${askCount === 1 ? "question" : "questions"} sent to you<svg class="ts-attn-go" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>` : ""
  ].filter(Boolean);
  const label = (n) => (n >= 5 ? "Very helpful" : n === 4 ? "Helpful" : n === 3 ? "Somewhat helpful" : "Not helpful");
  const tone = starTone;
  return `
    <div class="page page--library page--twin-profile page--tsess">
      <div class="lib-head">
        <h1 class="lib-title"><span class="lib-mark">${icon("messages")}</span>Twin sessions</h1>
        <div class="lib-tools ts-filters">
          <div class="ts-filter">
            ${filterDropdown("ts-cohort", "Filter by cohort", [["all", "All cohorts"]].concat(TS_COHORTS), f.cohort, "ts-filter-pick", "cohort")}
          </div>
          <div class="ts-filter">
            ${filterDropdown("ts-learner", "Filter by learner", [["all", "All learners"]].concat(["Aisha", "James", "Nora", "Leo", "Priya"].map((first) => { const l = TWIN_LEARNERS.find((x) => x.name.startsWith(first + " ")) || { name: first, email: "" }; return [first, l.name, l.email]; })), f.learner, "ts-filter-pick", "learner", true)}
          </div>
          <div class="ts-filter">
            ${filterDropdown("ts-bot", "Filter by agent", [["all", "All twin agents"]].concat(bots.map((bot) => [bot.id, bot.title])), f.bot, "ts-filter-pick", "bot")}
          </div>
          <div class="ts-filter">
            ${filterDropdown("ts-date", "Filter by date", BOT_RANGES.map(([id, label]) => [id, label]), f.date, "ts-filter-pick", "date")}
          </div>
        </div>
      </div>
${sessionsSummary({
        label: "Twin sessions summary",
        ringPct: rows.length ? Math.round((extensions / rows.length) * 100) : 0,
        ringTip: extensions + " of " + rows.length + (rows.length === 1 ? " session" : " sessions") + " paid for an extension",
        amount: "AED " + extensions * 90,
        count: extensions + (extensions === 1 ? " extension" : " extensions"),
        helpful: helpful === "–" ? "–" : helpful,
        ratedN: rated.length,
        total: rows.length,
        metrics: [
          { name: "Sessions", value: rows.length, note: "Conversations held" },
          { name: "Twin minutes", value: minutes, note: "Time spent talking", go: "none" },
          { name: "Questions", value: questions, note: rows.length ? (questions / rows.length).toFixed(1) + " per session" : "No sessions yet", go: "ask" },
          { name: "Issues reported", value: issueTotal, note: issueSessions ? "In " + issueSessions + (issueSessions === 1 ? " session" : " sessions") : "None raised", bad: !!issueTotal, go: "issues-twin" }
        ]
      })}
      ${attn.length ? `<div class="ts-attn" role="group" aria-label="Needs a look"><span class="ts-attn-label"><svg class="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"/></svg>Needs a look</span>${attn.join("")}${state.tsFocus ? `<button type="button" class="ts-attn-clear" data-action="ts-focus" data-id="">Show all</button>` : ""}</div>` : ""}
      ${rows.length ? `
      <p class="overline ts-table-title">Twin sessions</p>
      <div class="an-table ts-table" role="table" aria-label="Twin sessions">
        <div class="an-row an-row--tsess an-row--head" role="row">
          <span role="columnheader">Learner</span><span role="columnheader" class="ts-col-twin">Twin agent</span><span role="columnheader">Minutes</span><span role="columnheader" class="ts-col-q">Questions discussed</span><span role="columnheader">Helpfulness</span><span aria-hidden="true"></span>
        </div>
        ${shownRows.map(({ bot, c, idx, minutes: mins, questions: qs, stars, issues }) => `
        <button class="an-row an-row--tsess ts-rowbtn" type="button" role="row" data-action="twin-session-open" data-bot="${esc(bot.id)}" data-id="${esc(c.id)}">
          <span class="lr-name ts-learner" role="cell"><span class="rp-avatar rp-avatar--${(idx % 5) + 1}" aria-hidden="true">${esc(c.learner.charAt(0).toUpperCase())}</span><span class="ts-learner-text"><b>${esc(c.learner)}</b><span class="an-muted">${esc(c.when)}</span></span></span>
          <span class="ts-col-twin" role="cell">${esc(bot.title)}</span>
          <span class="tabular" role="cell">${mins} min</span>
          <span class="tabular ts-col-q" role="cell">${qs}</span>
          <span class="ts-help" role="cell">${stars == null ? `<span class="an-muted">No rating</span>` : `<span class="ts-stars ${tone(stars)}" aria-label="${stars} of 5 stars">${tsStars(stars)}</span><span class="ts-help-label an-muted">${label(stars)}</span>`}${issues ? `<span class="badge badge--caution ts-issue">${issues} issue reported</span>` : ""}</span>
          <span class="cal-go" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M7 17 17 7M8 7h9v9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
        </button>`).join("")}
      </div>` : `<p class="ts-empty">No sessions match these filters.</p>`}
    </div>
  `;
}

// Roleplay users: the people practising on Olga's roleplays, how many roleplays each has and how many sessions they have run.
const ROLE_USERS = [
  { name: "Aisha Khan", phone: "+971 50 123 4567", email: "aisha.khan@gmail.com", roles: 4, sessions: 18 },
  { name: "James Carter", phone: "+971 55 234 7788", email: "james.carter@outlook.com", roles: 3, sessions: 11 },
  { name: "Nora Ali", phone: "+44 7700 900 142", email: "nora.ali@gmail.com", roles: 2, sessions: 9 },
  { name: "Leo Martin", phone: "+971 52 889 1023", email: "leo@martinrealty.ae", roles: 3, sessions: 6 },
  { name: "Priya Nair", phone: "+91 98765 43210", email: "priya.nair@gmail.com", roles: 4, sessions: 22 },
  { name: "Omar Haddad", phone: "+971 56 410 2291", email: "omar.haddad@dubaihomes.com", roles: 2, sessions: 4 },
  { name: "Sofia Rossi", phone: "+39 345 123 4567", email: "sofia.rossi@gmail.com", roles: 3, sessions: 13 },
  { name: "Daniel Cho", phone: "+82 10 5555 1234", email: "daniel.cho@outlook.com", roles: 1, sessions: 2 }
];

// ---- Inbox: everything waiting on Olga, split by Twin and Roleplay ----
const INBOX_TWIN_REQUESTS = [
  { chip: "Free trial · 10 min", tone: "info", who: "Hassan Ali", text: "tried The off-plan sales process", when: "Today" },
  { chip: "Paid · AED 90", tone: "success", who: "Nora Ali", text: "extended The off-plan sales process +30 min · +30 days", when: "Today" },
  { chip: "Paid · AED 90", tone: "success", who: "Aisha Khan", text: "extended The off-plan sales process +30 min · +30 days", when: "21 Oct" },
  { chip: "Paid · AED 90", tone: "success", who: "Omar Haddad", text: "extended The off-plan sales process +30 min · +30 days", when: "12 Oct" }
];
const INBOX_ROLE_REQUESTS = [
  { chip: "Free trial · 1 session", tone: "info", who: "Leo Martin", text: "tried Ravi: first conversation", when: "Today" },
  { chip: "Paid · AED 60", tone: "success", who: "Priya Nair", text: "bought 3 more sessions of Ravi: first conversation", when: "Yesterday" }
];
const INBOX_QUESTIONS = [
  { id: "q-1", q: "What do I say if the client already bought with another agent?", who: "James Carter", agent: "The off-plan sales process", when: "Today, 11:05 am" },
  { id: "q-2", q: "How do I handle a client who wants to pay in crypto?", who: "Nora Ali", agent: "The off-plan sales process", when: "Yesterday" }
];
const INBOX_TWIN_ISSUES = [
  { id: "ti-1", who: "Priya Nair", agent: "The off-plan sales process", where: "During the call · 3:12 · Today, 8:15 am", reason: "Wrong or inaccurate answer", said: "If they go silent, send the brochure again with a discount.", fix: "Olga says never resend brochures; ask one open question." },
  { id: "ti-2", who: "Hassan Ali", agent: "The off-plan sales process", where: "During the call · 1:48 · Today, 7:40 am", reason: "Doesn’t sound like me", said: "You should buy now before prices go up.", fix: "Olga never pushes urgency; she asks what the client needs first." },
  { id: "ti-3", who: "Nora Ali", agent: "The off-plan sales process", where: "During the call · 5:02 · Yesterday, 6:10 pm", reason: "Wrong pronunciation", said: "Let’s look at the Dubai Marina plan.", fix: "Say “Marina” the way Olga does." },
  { id: "ti-4", who: "Omar Haddad", agent: "The off-plan sales process", where: "During the call · 2:25 · Yesterday, 11:30 am", reason: "Pacing feels off", said: "Here are the five steps of the process.", fix: "Olga gives one step, then checks with the client." },
  { id: "ti-5", who: "Aisha Khan", agent: "The off-plan sales process", where: "During the call · 4:10 · 21 Oct, 2:15 pm", reason: "Sounds robotic", said: "Thank you for your question.", fix: "Olga answers in short, warm sentences." }
];
// Issues already dealt with, so Resolved and Corrected have something to show. Issues you resolve or correct here are added on top.
const INBOX_ISSUES_RESOLVED = [
  { id: "rs-1", who: "Hassan Ali", agent: "The off-plan sales process", where: "Yesterday, 4:20 pm", reason: "Sounds robotic" },
  { id: "rs-2", who: "Aisha Khan", agent: "The off-plan sales process", where: "21 Oct, 10:05 am", reason: "Pacing feels off" }
];
const INBOX_ISSUES_CORRECTED = [
  { id: "co-1", who: "Omar Haddad", agent: "The off-plan sales process", where: "20 Oct, 3:40 pm", reason: "Wrong or inaccurate answer" }
];
const INBOX_ROLE_ISSUES = [
  { id: "ri-1", who: "Aisha Khan", role: "Ravi: first conversation", roleId: "ravi", session: "ravi-0", where: "During the call · 2:40 · Today, 9:02 am", reason: "Sounds robotic", note: "The client repeated the same line twice and went flat." },
  { id: "ri-2", who: "James Carter", role: "Faisal: first conversation", roleId: "faisal", session: "faisal-1", where: "During the call · 4:05 · Yesterday, 11:02 am", reason: "Wrong accent", note: "Daniel’s accent changed halfway through." }
];
const INBOX_EXPIRING = {
  twin: { title: "Sep 2026 batch · access to The off-plan sales process ends 15 Nov 2026", sub: "40 min each · learners can extend themselves for AED 90", nav: "learners" },
  roleplay: { title: "Sep 2026 batch · access to Ravi: first conversation ends 22 Nov 2026", sub: "3 sessions each · learners can buy more for AED 60", nav: "roleusers" }
};

function inboxPending(list) {
  return list.filter((item) => !state.inboxDone.includes(item.id));
}
function inboxTabCount(tab) {
  return tab === "twin" ? inboxPending(INBOX_QUESTIONS).length + inboxPending(INBOX_TWIN_ISSUES).length : inboxPending(INBOX_ROLE_ISSUES).length;
}
function inboxCount() {
  return (state.features.twin ? inboxTabCount("twin") : 0) + (state.features.roleplay ? inboxTabCount("roleplay") : 0);
}

function inboxSection(title, sub, count, body) {
  return `
    <section class="inbox-sec">
      <h2 class="inbox-h">${esc(title)}${count ? `<b class="inbox-count" aria-label="${count} waiting">${count}</b>` : ""}</h2>
      ${sub ? `<p class="inbox-sub">${esc(sub)}</p>` : ""}
      ${body}
    </section>`;
}

function inboxRequests(list) {
  return `
    <ul class="inbox-requests">
      ${list.map((r) => `
        <li>
          <span class="badge badge--${r.tone}">${esc(r.chip)}</span>
          <span class="inbox-line"><b>${esc(r.who)}</b> ${esc(r.text)} · ${esc(r.when)}<span class="inbox-quiet"> · no action needed</span></span>
        </li>`).join("")}
    </ul>`;
}

// Who it is from: a small avatar, the name, and when. Shared by the cards below.
function inboxWho(name, detail) {
  const tone = (name.length % 5) + 1;
  return `<p class="inbox-who"><span class="rp-avatar rp-avatar--${tone}" aria-hidden="true">${esc(name.charAt(0))}</span><b>${esc(name)}</b><span class="inbox-who-detail">${esc(detail)}</span></p>`;
}

function inboxQuestionCard(item) {
  const open = state.inboxAnswering === item.id;
  return `
    <article class="inbox-card${open ? " is-answering" : ""}">
      <div class="inbox-row">
        <div class="inbox-main">
          ${inboxWho(item.who, "· " + item.when)}
          <p class="inbox-title">“${esc(item.q)}”</p>
          <span class="badge inbox-agent">${esc(item.agent)}</span>
        </div>
        ${open ? "" : `<div class="inbox-actions">
          <button class="btn btn--secondary btn--sm" type="button" data-action="inbox-answer" data-id="${esc(item.id)}">Answer</button>
          <button class="btn btn--ghost btn--icon btn--sm inbox-del" type="button" data-action="inbox-dismiss" data-id="${esc(item.id)}" aria-label="Dismiss this question" title="Dismiss">${menuIcon("trash")}</button>
        </div>`}
      </div>
      ${open ? `
      <div class="inbox-answer">
        <label class="sr" for="inbox-answer-text">Your answer</label>
        <textarea class="input" id="inbox-answer-text" rows="3" placeholder="Write the answer the way you would say it">${esc(state.inboxDraft)}</textarea>
        <div class="inbox-answer-foot">
          <button class="btn btn--ghost btn--sm" type="button" data-action="inbox-answer-cancel">Cancel</button>
          <button class="btn btn--primary btn--sm" type="button" data-action="inbox-answer-send" data-id="${esc(item.id)}">Send answer</button>
        </div>
      </div>` : ""}
    </article>`;
}

// Questions you have already answered, newest first. A question you answer here is added to the top.
const INBOX_HISTORY = [
  { id: "h-1", q: "Can I offer a discount on off-plan units?", who: "Omar Haddad", agent: "The off-plan sales process", when: "21 Oct", answer: "Never lead with price. Ask what the client needs first, then show the payment plan before any discount." },
  { id: "h-2", q: "What if the buyer wants to see the developer’s track record?", who: "Aisha Khan", agent: "The off-plan sales process", when: "12 Oct", answer: "Share two delivered projects with handover dates, then walk through the escrow protection." }
];

function inboxHistoryList() {
  const mine = state.inboxAnswered.map((a) => {
    const q = INBOX_QUESTIONS.find((x) => x.id === a.id);
    return q ? { id: q.id, q: q.q, who: q.who, agent: q.agent, when: "Just now", answer: a.answer } : null;
  }).filter(Boolean).reverse();
  return mine.concat(INBOX_HISTORY);
}

function inboxHistoryCard(item) {
  return `
    <article class="inbox-card">
      <div class="inbox-row">
        <div class="inbox-main">
          ${inboxWho(item.who, "· Answered " + item.when)}
          <p class="inbox-title">“${esc(item.q)}”</p>
          <span class="badge inbox-agent">${esc(item.agent)}</span>
          <div class="inbox-quote">
            <p class="inbox-label">Your answer</p>
            <p class="inbox-fix">${esc(item.answer)}</p>
          </div>
        </div>
      </div>
    </article>`;
}

function inboxIssueCard(item, kind) {
  const twin = kind === "twin";
  return `
    <article class="inbox-card">
      <div class="inbox-row">
        <div class="inbox-main">
          ${inboxWho(item.who, "· " + item.where)}
          <p class="inbox-title">${esc(item.reason)}</p>
          <span class="badge inbox-agent">${esc(twin ? item.agent : item.role)}</span>
          ${twin ? `
          <div class="inbox-quote">
            <p class="inbox-label">Twin said</p>
            <p class="inbox-said">${esc(item.said)}</p>
          </div>
          <div class="inbox-quote">
            <p class="inbox-label">Your calibration</p>
            <p class="inbox-fix">${esc(item.fix)}</p>
          </div>` : `
          <div class="inbox-quote">
            <p class="inbox-label">Learner’s note</p>
            <p class="inbox-fix">${esc(item.note)}</p>
          </div>`}
        </div>
        <div class="inbox-actions">
          ${twin
            ? `<button class="btn btn--secondary btn--sm" type="button" data-action="inbox-issue-correct" data-id="${esc(item.id)}">Correct the answer</button>`
            : `<button class="btn btn--secondary btn--sm" type="button" data-action="inbox-issue-open" data-role="${esc(item.roleId)}" data-id="${esc(item.session)}">Open session</button>`}
          <button class="btn btn--ghost btn--sm" type="button" data-action="inbox-issue-resolve" data-id="${esc(item.id)}">Mark resolved</button>
        </div>
      </div>
    </article>`;
}

function inboxExpiring(kind) {
  const e = INBOX_EXPIRING[kind];
  return `
    <article class="inbox-card">
      <div class="inbox-row">
        <div class="inbox-main">
          <p class="inbox-title">${esc(e.title)}</p>
          <p class="inbox-meta">${esc(e.sub)}</p>
        </div>
        <div class="inbox-actions"><button class="btn btn--secondary btn--sm" type="button" data-action="inbox-open-access" data-id="${esc(e.nav)}">Open access</button></div>
      </div>
    </article>`;
}

const INBOX_VIEWS = [
  ["all", "All alerts", "Everything waiting on you, newest first."],
  ["requests", "Access requests", "Learners who asked you for more. Learners extend themselves when you’ve set an extension price."],
  ["ask", "Ask Olga", "Questions your twin agents couldn’t answer from your material."],
  ["issues", "Reported issues", "Problems learners flagged during a call."],
  ["ending", "Access ending soon", "In the next 3 weeks."]
];

function inboxViewCount(view, tab) {
  if (view === "ask") return tab === "twin" ? inboxPending(INBOX_QUESTIONS).length : 0;
  if (view === "issues") return inboxPending(tab === "twin" ? INBOX_TWIN_ISSUES : INBOX_ROLE_ISSUES).length;
  if (view === "all") return inboxTabCount(tab);
  return 0;
}

function pageInbox() {
  const both = state.features.twin && state.features.roleplay;
  let tab = state.inboxTab;
  if (tab === "twin" && !state.features.twin) tab = "roleplay";
  if (tab === "roleplay" && !state.features.roleplay) tab = "twin";
  const tabs = [["twin", "Twin"], ["roleplay", "Roleplay"]];
  const views = INBOX_VIEWS.filter(([id]) => id !== "ask" || tab === "twin");
  let view = state.inboxView;
  if (!views.some(([id]) => id === view)) view = "all";
  const [, viewTitle, viewSub] = INBOX_VIEWS.find(([id]) => id === view);
  const quiet = (text) => `<p class="inbox-empty">${text}</p>`;
    let body;
  if (view === "all") {
    const questions = inboxPending(INBOX_QUESTIONS);
    const issues = inboxPending(tab === "twin" ? INBOX_TWIN_ISSUES : INBOX_ROLE_ISSUES);
    const sec = (id, count, content) => { const [, title, sub] = INBOX_VIEWS.find(([v]) => v === id); return inboxSection(title, sub, count, content); };
    body = `<div class="inbox-all">${[
      sec("requests", 0, inboxRequests(tab === "twin" ? INBOX_TWIN_REQUESTS : INBOX_ROLE_REQUESTS)),
      tab === "twin" ? sec("ask", questions.length, questions.length ? questions.map(inboxQuestionCard).join("") : quiet("All caught up. No questions waiting.")) : "",
      sec("issues", issues.length, issues.length ? issues.map((item) => inboxIssueCard(item, tab)).join("") : quiet("All caught up. No issues reported.")),
      sec("ending", 0, inboxExpiring(tab === "twin" ? "twin" : "roleplay"))
    ].join("")}</div>`;
  } else if (view === "requests") {
    body = inboxRequests(tab === "twin" ? INBOX_TWIN_REQUESTS : INBOX_ROLE_REQUESTS);
  } else if (view === "ask") {
    const items = inboxPending(INBOX_QUESTIONS);
    body = items.length ? items.map(inboxQuestionCard).join("") : quiet("All caught up. No questions waiting.");
  } else if (view === "issues") {
    const items = inboxPending(tab === "twin" ? INBOX_TWIN_ISSUES : INBOX_ROLE_ISSUES);
    body = items.length ? items.map((item) => inboxIssueCard(item, tab)).join("") : quiet("All caught up. No issues reported.");
  } else {
    body = inboxExpiring(tab === "twin" ? "twin" : "roleplay");
  }
  return `
    <div class="page page--library page--twin-profile page--inbox">
      <div class="lib-head">
        <h1 class="lib-title"><span class="lib-mark">${icon("inbox")}</span>Inbox</h1>
        ${both ? `
        <div class="seg inbox-seg" role="group" aria-label="Inbox">
          ${tabs.map(([id, label]) => { const n = inboxTabCount(id); return `<button type="button" data-action="inbox-tab" data-id="${id}" aria-pressed="${tab === id}">${label}${n ? `<b class="inbox-count">${n}</b>` : ""}</button>`; }).join("")}
        </div>` : ""}
      </div>
      <div class="inbox-layout">
        <nav class="inbox-menu" aria-label="Inbox folders">
          ${views.map(([id, label]) => { const n = inboxViewCount(id, tab); return `<button type="button" class="inbox-menu-item" data-action="inbox-view" data-id="${id}" ${view === id ? 'aria-current="page"' : ""}><span>${label}</span>${n ? `<b class="inbox-count">${n}</b>` : ""}</button>`; }).join("")}
        </nav>
        <section class="inbox-pane" aria-label="${esc(viewTitle)}">
          ${view === "all" ? "" : (() => {
            // The first sentence is the heading; anything after it is the line of detail under it.
            const cut = viewSub.indexOf(". ");
            const lead = cut < 0 ? viewSub : viewSub.slice(0, cut + 1);
            const rest = cut < 0 ? "" : viewSub.slice(cut + 2);
            return `<header class="inbox-pane-head">
            <h2 class="inbox-h">${esc(lead)}</h2>
            ${rest ? `<p class="inbox-sub">${esc(rest)}</p>` : ""}
          </header>`;
          })()}
          ${body}
        </section>
      </div>
    </div>
  `;
}

// ---- Accounts: cohorts, learners and the team ----
const ACC_COHORTS = [
  { id: "sep", name: "Sep 2026 batch", learners: 24, agents: "The off-plan sales process", roleplays: "9 roleplays", ends: "15 Nov 2026", state: "Active" },
  { id: "aug", name: "Aug 2026 batch", learners: 18, agents: "The off-plan sales process", roleplays: "9 roleplays", ends: "30 Oct 2026", state: "Ending soon" },
  { id: "walk", name: "Walk-ins", learners: 11, agents: "Free trial · 10 min", roleplays: "Free trial · 1 session", ends: "No end date", state: "Active" }
];
const ACC_TEAM = [
  { name: "Olga Sinenko", email: "olga@olgasiliveitup.com", role: "Owner", state: "Active" },
  { name: "Maya Haddad", email: "maya@olgasiliveitup.com", role: "Admin", state: "Active" },
  { name: "Tariq Nasser", email: "tariq@olgasiliveitup.com", role: "Coach", state: "Active" },
  { name: "Reem Saleh", email: "reem@olgasiliveitup.com", role: "Coach", state: "Invited" }
];

function accHead(icon_, title, lead, sub, tool, filter) {
  return `
      <button class="acc-back" type="button" data-action="nav" data-id="settings">${icon("back")} Settings</button>
      <div class="lib-head">
        <h1 class="lib-title"><span class="lib-mark">${icon(icon_)}</span>${esc(title)}</h1>
        ${tool ? `<div class="lib-tools">${tool}</div>` : ""}
      </div>
      <div class="twin-bots-head">
        <div>
          <h2 class="page-title">${esc(lead)}</h2>
          <p class="home-meta">${esc(sub)}</p>
        </div>
        ${filter ? `<div class="lib-tools ts-filters"><div class="ts-filter">${filter}</div></div>` : ""}
      </div>`;
}

function pageCohorts() {
  const stateBadge = (st) => `<span class="badge${st === "Active" ? " badge--success" : st === "Ending soon" ? " badge--caution" : ""}">${esc(st)}</span>`;
  return `
    <div class="page page--library page--twin-profile">
      ${accHead("cohorts", "Cohorts", "All cohorts", "Groups of learners who share access to your twin agents and roleplays", `<button class="btn btn--strong" type="button" data-action="acc-new-cohort"><svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3.5v9M3.5 8h9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>New cohort</button>`)}
      <div class="an-table lr-table" role="table" aria-label="Cohorts">
        <div class="an-row an-row--cohorts an-row--head" role="row">
          <span role="columnheader">Cohort</span><span role="columnheader">Learners</span><span role="columnheader" class="acc-col-wide">Twin agents</span><span role="columnheader" class="acc-col-wide">Roleplays</span><span role="columnheader">Access ends</span><span role="columnheader">Status</span>
        </div>
        ${ACC_COHORTS.map((c) => `
        <div class="an-row an-row--cohorts" role="row">
          <span class="lr-name" role="cell"><span class="rp-avatar rp-avatar--${(c.name.length % 5) + 1}" aria-hidden="true">${esc(c.name.charAt(0))}</span>${esc(c.name)}</span>
          <span class="tabular" role="cell">${c.learners}</span>
          <span class="acc-col-wide an-muted" role="cell">${esc(c.agents)}</span>
          <span class="acc-col-wide an-muted" role="cell">${esc(c.roleplays)}</span>
          <span class="tabular" role="cell">${esc(c.ends)}</span>
          <span role="cell">${stateBadge(c.state)}</span>
        </div>`).join("")}
      </div>
    </div>
  `;
}

function pageAccLearners() {
  const f = state.accCohort;
  const tabs = [["twin", "Twin users", state.features.twin], ["roleplay", "Roleplay users", state.features.roleplay]].filter((t) => t[2]);
  let tab = state.accTab;
  if (!tabs.some((t) => t[0] === tab)) tab = tabs.length ? tabs[0][0] : "twin";
  const cohortOf = (name) => {
    const id = TS_COHORT_OF[name.split(" ")[0]] || "walk";
    return { id, label: (TS_COHORTS.find(([cid]) => cid === id) || ["walk", "Walk-ins"])[1] };
  };
  const options = [["all", "All cohorts"]].concat(TS_COHORTS, [["walk", "Walk-ins"]]);
  let table;
  if (tab === "twin") {
    const rows = TWIN_LEARNERS.map((l) => Object.assign({ l }, { c: cohortOf(l.name) })).filter((r) => f === "all" || r.c.id === f);
    table = rows.length ? `
      <div class="an-table lr-table" role="table" aria-label="Twin users">
        <div class="an-row an-row--acctwin an-row--head" role="row">
          <span role="columnheader">Learner</span><span role="columnheader" class="lr-email">Email</span><span role="columnheader">Cohort</span><span role="columnheader">Assigned agents</span><span role="columnheader">Assigned minutes</span><span role="columnheader">Usage (minutes)</span>
        </div>
        ${rows.map(({ l, c }, i) => {
          const left = l.minutes - l.used;
          const pct = Math.round((l.used / l.minutes) * 100);
          return `
        <div class="an-row an-row--acctwin" role="row">
          <span class="lr-name" role="cell"><span class="rp-avatar rp-avatar--${(i % 5) + 1}" aria-hidden="true">${esc(l.name.charAt(0))}</span>${esc(l.name)}</span>
          <span class="lr-email an-muted" role="cell">${esc(l.email)}</span>
          <span role="cell"><span class="badge">${esc(c.label)}</span></span>
          <span class="tabular" role="cell">${l.agents} <span class="an-muted">agents</span></span>
          <span class="tabular" role="cell">${l.minutes} <span class="an-muted">min</span></span>
          <span class="lr-usage" role="cell">
            <span class="lr-bar${pct >= 90 ? " is-high" : ""}" aria-hidden="true"><span style="width:${pct}%"></span></span>
            <span class="lr-text tabular">${l.used} used · ${left} left</span>
          </span>
        </div>`;
        }).join("")}
      </div>` : `<p class="ts-empty">No learners in this cohort yet.</p>`;
  } else {
    const rows = ROLE_USERS.map((u) => ({ u, c: cohortOf(u.name) })).filter((r) => f === "all" || r.c.id === f);
    table = rows.length ? `
      <div class="an-table lr-table" role="table" aria-label="Roleplay users">
        <div class="an-row an-row--accrole an-row--head" role="row">
          <span role="columnheader">Name</span><span role="columnheader" class="lr-email">Email</span><span role="columnheader">Cohort</span><span role="columnheader">Roleplay assigned</span><span role="columnheader">Sessions</span>
        </div>
        ${rows.map(({ u, c }, i) => `
        <div class="an-row an-row--accrole" role="row">
          <span class="lr-name" role="cell"><span class="rp-avatar rp-avatar--${(i % 5) + 1}" aria-hidden="true">${esc(u.name.charAt(0))}</span>${esc(u.name)}</span>
          <span class="lr-email an-muted" role="cell">${esc(u.email)}</span>
          <span role="cell"><span class="badge">${esc(c.label)}</span></span>
          <span class="tabular" role="cell">${u.roles} <span class="an-muted">${u.roles === 1 ? "roleplay" : "roleplays"}</span></span>
          <span class="tabular" role="cell">${u.sessions}</span>
        </div>`).join("")}
      </div>` : `<p class="ts-empty">No learners in this cohort yet.</p>`;
  }
  return `
    <div class="page page--library page--twin-profile">
      <button class="acc-back" type="button" data-action="nav" data-id="settings">${icon("back")} Settings</button>
      <div class="lib-head">
        <h1 class="lib-title"><span class="lib-mark">${icon("learners")}</span>Learners</h1>
        <div class="lib-tools"><button class="btn btn--strong" type="button" data-action="acc-invite-learner"><svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3.5v9M3.5 8h9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>Invite learners</button></div>
      </div>
      ${tabs.length > 1 ? `
      <div class="seg acc-tabs" role="group" aria-label="Learners">
        ${tabs.map(([id, label]) => `<button type="button" data-action="acc-tab" data-id="${id}" aria-pressed="${tab === id}">${label}</button>`).join("")}
      </div>` : ""}
      <div class="twin-bots-head">
        <div>
          <h2 class="page-title">All learners</h2>
          <p class="home-meta">${tab === "twin" ? "People who can learn from your twin agents" : "People practising on your roleplays"}</p>
        </div>
        <div class="lib-tools ts-filters">
          <div class="ts-filter">${filterDropdown("acc-cohort", "Filter by cohort", options, f, "acc-filter-pick", "cohort")}</div>
        </div>
      </div>
      ${table}
    </div>
  `;
}


const USER_EMAIL = "team@foreverlearning.in";
const UM_ICONS = {
  profile: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20a7 7 0 0 1 14 0"/>',
  voices: '<path d="M3 12v0M7 8v8M11 4v16M15 8v8M19 11v2"/>',
  team: '<path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M21 21v-2a4 4 0 0 0 -3 -3.85"/>',
  devapi: '<path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z"/><path d="M15 9h.01"/>',
  docs: '<path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6l0 13"/><path d="M12 6l0 13"/><path d="M21 6l0 13"/>',
  logout: '<path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"/><path d="M9 12h12l-3 -3"/><path d="M18 15l3 -3"/>'
};
const umIcon = (k) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${UM_ICONS[k]}</svg>`;

// The profile chip at the bottom of the left nav opens this menu.
function userMenu() {
  const go = (id, label) => `<button type="button" role="menuitem" data-action="user-menu-go" data-id="${id}">${umIcon(id)}<span>${label}</span></button>`;
  return `
    <div class="menu rail-user-menu" role="menu" aria-label="Account">
      <p class="rum-email">${USER_EMAIL}</p>
      <div class="rum-list">
        ${go("profile", "Profile")}${go("voices", "Voices")}${go("team", "Team")}${go("devapi", "Developer API")}
        <button type="button" role="menuitem" data-action="user-docs">${umIcon("docs")}<span>Docs</span></button>
      </div>
      <div class="rum-sep"></div>
      <div class="rum-list"><button type="button" role="menuitem" data-action="user-logout">${umIcon("logout")}<span>Log out</span></button></div>
    </div>`;
}

function setHead(iconName, title, sub, tool) {
  return `
    <div class="set-head">
      <div>
        <h1 class="set-title">${iconName ? `<span class="lib-mark">${icon(iconName)}</span>` : ""}${esc(title)}</h1>
        <p class="set-sub">${esc(sub)}</p>
      </div>
      ${tool ? `<div class="set-tool">${tool}</div>` : ""}
    </div>`;
}

const MY_VOICES = [
  ["Olga Sinenko’s Voice V2", "Oct 29, 2026"], ["Ravi", "Oct 28, 2026"], ["Sara Voice", "Oct 28, 2026"], ["Ravi Voice", "Oct 28, 2026"],
  ["Peter Voice", "Oct 28, 2026"], ["Karim Voice", "Oct 28, 2026"], ["Farid Voice", "Oct 28, 2026"], ["Faisal Voice", "Oct 28, 2026"]
];

function pageVoices() {
  const mine = state.voicesTab === "mine";
  const items = mine ? MY_VOICES.map(([n, d]) => [n, "Cloned voice · " + d]) : LIBRARY_VOICES.map((v) => [v.label, "Sample voice · English"]);
  const play = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 4v16l13 -8z"/></svg>';
  const pause = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 5v14M16 5v14"/></svg>';
  return `
    <div class="page page--library page--twin-profile set-page">
      ${setHead("", "Voices", "Use a built-in sample voice or clone your own for speech generation.", `<button class="btn btn--strong" type="button" data-action="voice-clone">${umIcon("voices")}Clone voice</button>`)}
      <div class="seg set-seg" role="group" aria-label="Voices">${[["explore", "Explore voices"], ["mine", "My voices"]].map(([id, l]) => `<button type="button" data-action="voices-tab" data-id="${id}" aria-pressed="${state.voicesTab === id}">${l}</button>`).join("")}</div>
      <div class="set-search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M21 21l-6 -6"/></svg><input class="input" type="search" placeholder="Search" aria-label="Search voices" data-live-filter=".set-voices > li"></div>
      <ul class="set-list set-voices">
        ${items.map(([n, m], i) => {
          const id = (mine ? "m" : "e") + i;
          const on = state.voicePlaying === id;
          return `<li data-s="${esc((n + " " + m).toLowerCase())}">
          <button class="set-play" type="button" data-action="voice-play" data-id="${id}" aria-label="${on ? "Pause" : "Play"} ${esc(n)}">${on ? pause : play}</button>
          <span class="set-row-text"><span class="set-row-name">${esc(n)}</span><span class="set-row-sub">${esc(m)}</span></span>
          <button class="btn btn--ghost btn--icon btn--sm" type="button" data-action="voice-more" data-id="${id}" aria-label="More actions for ${esc(n)}"><svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="3.25" cy="8" r="1.15" fill="currentColor"/><circle cx="8" cy="8" r="1.15" fill="currentColor"/><circle cx="12.75" cy="8" r="1.15" fill="currentColor"/></svg></button>
        </li>`;
        }).join("")}
      </ul>
    </div>`;
}

function pageDevApi() {
  const keys = state.devKeys;
  return `
    <div class="page page--library page--twin-profile set-page">
      ${setHead("", "Developer API", "Generate organization-scoped keys for server-to-server integrations.", `<button class="btn btn--secondary" type="button" data-action="user-docs"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"/><path d="M11 13l9 -9"/><path d="M15 4h5v5"/></svg>API docs</button>`)}
      <article class="card set-card">
        <label class="label" for="dev-key-name">Key name</label>
        <input class="input" id="dev-key-name" type="text" placeholder="Learning platform production" value="${esc(state.devKeyName)}" data-dev-key>
        <p class="set-help">Use a name that identifies the platform or environment.</p>
        <button class="btn btn--strong set-gen" type="button" data-action="dev-key-generate"${state.devKeyName.trim() ? "" : " disabled"}>Generate key</button>
        ${state.devNewKey ? `<div class="set-newkey" role="status"><p class="set-row-name">Copy your new key now. You won’t see it again.</p><code>${esc(state.devNewKey)}</code></div>` : ""}
        <hr class="set-rule">
        <h2 class="set-h2">API keys</h2>
        ${keys.length ? `<ul class="set-list set-keys">${keys.map((k, i) => `<li><span class="set-row-text"><span class="set-row-name">${esc(k.name)}</span><span class="set-row-sub">${esc(k.mask)} · Created ${esc(k.at)}</span></span><button class="btn btn--secondary btn--sm" type="button" data-action="dev-key-revoke" data-id="${i}">Revoke</button></li>`).join("")}</ul>` : `<p class="set-help">No API keys yet.</p>`}
        <p class="set-note">Send the key as <code>x-api-key</code>. Keys expire after one year and are limited to 120 requests per minute.</p>
      </article>
    </div>`;
}

const SET_TEAM = [
  { name: "Olga Sinenko", email: "liveitupdxb20@gmail.com", role: "Admin", fixed: true },
  { name: "Cathy Nivedha", email: "cathy@foreverlearning.in", role: "Team" },
  { name: "Team", you: true, email: "team@foreverlearning.in", role: "Team", fixed: true }
];
const SET_USERS = [
  { name: "Surya Umapathy", email: "surya@foreverlearning.in" }, { name: "Catherine Nivedha", email: "catherineds1524@gmail.com" },
  { name: "naresh kumar", email: "nareshkumar9221@gmail.com" }, { name: "Aisha Khan", email: "aisha.khan@gmail.com" },
  { name: "James Carter", email: "james.carter@outlook.com" }, { name: "Nora Ali", email: "nora.ali@gmail.com" },
  { name: "Leo Martin", email: "leo@martinrealty.ae" }, { name: "Priya Nair", email: "priya.nair@gmail.com" },
  { name: "Omar Haddad", email: "omar.haddad@dubaihomes.com" }, { name: "Sofia Rossi", email: "sofia.rossi@gmail.com" }
];

function setMemberRows(list, role) {
  return list.map((m, i) => {
    const off = !!state.teamOff[m.email];
    return `<li data-s="${esc((m.name + " " + m.email).toLowerCase())}"${off ? ' class="is-off"' : ""}>
      <span class="rp-avatar rp-avatar--${(i % 5) + 1}" aria-hidden="true">${esc(m.name.charAt(0).toUpperCase())}</span>
      <span class="set-row-text"><span class="set-row-name">${esc(m.name)}${m.you ? ` <span class="set-you">(you)</span>` : ""}</span><span class="set-row-sub">${esc(m.email)}</span></span>
      <span class="badge">${esc(m.role || role)}</span>
      ${m.fixed ? "" : `<button class="btn btn--ghost btn--sm" type="button" data-action="team-toggle" data-id="${esc(m.email)}">${off ? "Enable" : "Disable"}</button>`}
    </li>`;
  }).join("");
}

function pageTeam() {
  const search = (sel) => `<div class="set-search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M21 21l-6 -6"/></svg><input class="input" type="search" placeholder="Search by name or email" aria-label="Search" data-live-filter="${sel}"></div>`;
  const invite = `<button class="btn btn--strong btn--sm" type="button" data-action="acc-invite-member"><svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3.5v9M3.5 8h9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>Invite</button>`;
  return `
    <div class="page page--library page--twin-profile set-page">
      ${setHead("settings", "Settings", "Manage the details shown across your TrainerTwin workspace.")}
      <div class="seg set-seg" role="group" aria-label="Settings sections">${[["account", "Account"], ["team", "Team"], ["branding", "Branding"]].map(([id, l]) => `<button type="button" data-action="set-section" data-id="${id}" aria-pressed="${id === "team"}">${l}</button>`).join("")}</div>
      <article class="card set-card">
        <div class="set-card-head"><h2 class="set-h2">Team <span class="set-count">· ${SET_TEAM.length}</span></h2>${invite}</div>
        ${search(".set-team > li")}
        <ul class="set-list set-team">${setMemberRows(SET_TEAM)}</ul>
      </article>
      <article class="card set-card">
        <div class="set-card-head"><h2 class="set-h2">Users <span class="set-count">· ${SET_USERS.length}</span></h2>${invite}</div>
        ${search(".set-users > li")}
        <ul class="set-list set-users">${setMemberRows(SET_USERS, "User")}</ul>
      </article>
    </div>`;
}

const TZ_OPTIONS = [["Asia/Dubai", "Dubai (GMT+4)"], ["Europe/London", "London (GMT)"], ["Asia/Kolkata", "India (GMT+5:30)"], ["America/New_York", "New York (GMT-5)"]];
const LANG_OPTIONS = ["English", "العربية", "हिन्दी"];

function pageProfile() {
  const type = TYPES[state.coachingType];
  return `
    <div class="page page--library page--twin-profile set-page">
      ${setHead("", "Profile", "Your personal details and preferences. Learners see your name and photo on your twin.")}
      <article class="card set-card">
        <div class="set-photo">
          <img class="rail-user-photo set-photo-img" src="${esc(presenceSrc())}" alt="">
          <div class="set-row-text"><span class="set-row-name">Profile photo</span><span class="set-row-sub">Shown on your twin and in your workspace.</span></div>
          <button class="btn btn--secondary btn--sm" type="button" data-action="profile-photo">Change photo</button>
        </div>
        <hr class="set-rule">
        <div class="set-grid">
          <div class="field"><label class="label" for="pf-name">Full name</label><input class="input" id="pf-name" type="text" value="Olga Sinenko"></div>
          <div class="field"><label class="label" for="pf-role">Role</label><input class="input" id="pf-role" type="text" value="Sales coach"></div>
          <div class="field"><label class="label" for="pf-email">Email</label><input class="input" id="pf-email" type="email" value="${esc(state.accountReady ? (state.authEmail || USER_EMAIL) : USER_EMAIL)}" readonly><p class="set-help">Contact your admin to change your email.</p></div>
          <div class="field"><label class="label" for="pf-phone">Phone</label><input class="input" id="pf-phone" type="tel" placeholder="+971 50 000 0000"></div>
          <div class="field"><label class="label" for="pf-tz">Time zone</label><select class="input" id="pf-tz" data-change="profile-tz">${TZ_OPTIONS.map(([v, l]) => `<option value="${v}"${state.profileTz === v ? " selected" : ""}>${l}</option>`).join("")}</select></div>
          <div class="field"><label class="label" for="pf-lang">Language</label><select class="input" id="pf-lang" data-change="profile-lang">${LANG_OPTIONS.map((l) => `<option${state.profileLang === l ? " selected" : ""}>${l}</option>`).join("")}</select></div>
        </div>
        <div class="field"><p class="label">Coaching type</p><div class="badges">${type.tags.map((tag) => `<span class="badge">${esc(tag)}</span>`).join("")}</div></div>
        <div class="set-actions"><button class="btn btn--strong" type="button" data-action="profile-save">Save changes</button></div>
      </article>
    </div>`;
}

function pageRoleUsers() {
  return `
    <div class="page page--library page--twin-profile">
      <div class="lib-head">
        <h1 class="lib-title"><span class="lib-mark">${icon("learners")}</span>Roleplay users</h1>
      </div>
      <div class="twin-bots-head">
        <h2 class="page-title">All users</h2>
        <p class="home-meta">People practising on your roleplays</p>
      </div>
      <div class="an-table lr-table" role="table" aria-label="Roleplay users">
        <div class="an-row an-row--ruser an-row--head" role="row">
          <span role="columnheader">Name</span><span role="columnheader" class="lr-email">Email</span><span role="columnheader">Roleplay assigned</span><span role="columnheader">Sessions</span>
        </div>
        ${ROLE_USERS.map((u, i) => `
        <div class="an-row an-row--ruser" role="row">
          <span class="lr-name" role="cell"><span class="rp-avatar rp-avatar--${(i % 5) + 1}" aria-hidden="true">${esc(u.name.charAt(0))}</span>${esc(u.name)}</span>
          <span class="lr-email an-muted" role="cell">${esc(u.email)}</span>
          <span class="tabular" role="cell">${u.roles} <span class="an-muted">${u.roles === 1 ? "roleplay" : "roleplays"}</span></span>
          <span class="tabular" role="cell">${u.sessions}</span>
        </div>`).join("")}
      </div>
    </div>
  `;
}

// Learners: everyone with access to Olga's twins, with the minutes they were given and how much they have used.
function pageLearners() {
  return `
    <div class="page page--library page--twin-profile">
      <div class="lib-head">
        <h1 class="lib-title"><span class="lib-mark">${icon("learners")}</span>Twin users</h1>
      </div>
      <div class="twin-bots-head">
        <h2 class="page-title">All learners</h2>
        <p class="home-meta">People who can learn from your twins</p>
      </div>
      ${twinLearnersTable()}
    </div>
  `;
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
                <div class="cal-twin-row">
                  <img class="cal-twin-avatar" src="${esc(presenceSrc())}" alt="">
                  <div class="talk-bubble">${esc(text)}</div>
                </div>
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
  { id: "objection-handling", label: "Objections", title: "Handling client objections", blurb: "Clarify, discuss, diffuse, then agree the next step. An objection is a concern, not a rejection.", who: "Agent", quote: "I’ll wait for the market to crash.", sessions: 74 },
  { id: "listing-pitch", label: "Listing pitch", title: "Winning the listing presentation", blurb: "Shows the seller your plan and your numbers before they ask who is cheaper.", who: "Agent", quote: "Why should I list with you?", sessions: 58 },
  { id: "fee-negotiation", label: "Fees", title: "Defending your commission", blurb: "Names the work behind the fee, then asks which part the client would skip.", who: "Agent", quote: "Can you do it for one percent?", sessions: 49 },
  { id: "cold-calling", label: "Cold calls", title: "Opening a cold call", blurb: "Who you are, why you called and one useful comparable. Then let them talk.", who: "Agent", quote: "How do I start a cold call?", sessions: 63 },
  { id: "investor-yield", label: "Investors", title: "Explaining yield and ROI to investors", blurb: "Turns the brochure promise into worst, average and best case numbers.", who: "Agent", quote: "Is the rental yield really 9%?", sessions: 41 },
  { id: "deposit-handover", label: "Deposit to handover", title: "From deposit to handover", blurb: "Each step after the reservation, so a paid deposit never turns into a silent client.", who: "Agent", quote: "My client paid the deposit. What now?", sessions: 37 }
];

function twinBots() {
  return state.customBots.concat(TWIN_BOTS).filter((bot) => !state.botsRemoved.includes(bot.id));
}

// Small icons for the more-menu items.
function menuIcon(name) {
  const paths = {
    edit: '<path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/>',
    history: '<path d="M12 8l0 4l2 2"/><path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5"/>',
    assign: '<path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 21v-2a4 4 0 0 1 4 -4h3"/><path d="M16 19h6"/><path d="M19 16v6"/>',
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

function twinBotMenu(bot) {
  if (bot.twin) {
    return `
    <div class="menu rp-row-menu" role="menu" aria-label="Actions for ${esc(bot.title)}" hidden>
      <button type="button" role="menuitem" data-action="twin-bot-edit" data-id="${esc(bot.id)}">${menuIcon("edit")}<span>Configure</span></button>
      <button type="button" role="menuitem" data-action="talk-open" data-id="${esc(bot.id)}">${menuIcon("sliders")}<span>Calibrate</span></button>
      <button type="button" role="menuitem" data-action="role-assign-open" data-id="${esc(bot.id)}">${menuIcon("assign")}<span>Assign</span></button>
      <button type="button" role="menuitem" data-action="twin-bot-share" data-id="${esc(bot.id)}">${menuIcon("share")}<span>Share</span></button>
    </div>
  `;
  }
  return `
    <div class="menu rp-row-menu" role="menu" aria-label="Actions for ${esc(bot.title)}" hidden>
      <button type="button" role="menuitem" data-action="twin-bot-edit" data-id="${esc(bot.id)}">${menuIcon("edit")}<span>Configure</span></button>
      <button type="button" role="menuitem" data-action="twin-bot-calibrate" data-id="${esc(bot.id)}">${menuIcon("sliders")}<span>Calibrate</span></button>
      <button type="button" role="menuitem" data-action="role-row-test" data-id="${esc(bot.id)}">${menuIcon("play")}<span>Try as learner</span></button>
      <button type="button" role="menuitem" data-action="role-assign-open" data-id="${esc(bot.id)}">${menuIcon("assign")}<span>Assign</span></button>
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
          ${learners.shown.map(learnerFace).join("")}
          ${learners.extra > 0 ? `<span class="rp-learner-avatar rp-learner-avatar--more">+${learners.extra}</span>` : ""}
        </span>
        <button class="btn btn--ghost btn--icon btn--sm rp-row-more" type="button" id="role-menu-${esc(bot.id)}" data-action="role-row-menu" data-id="${esc(bot.id)}" aria-label="Actions for ${esc(bot.title)}" aria-haspopup="menu" aria-expanded="${state.roleMenuId === bot.id}">
          <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="3.25" r="1.15" fill="currentColor"/><circle cx="8" cy="8" r="1.15" fill="currentColor"/><circle cx="8" cy="12.75" r="1.15" fill="currentColor"/></svg>
        </button>
      </span>
    </article>
  `;
}

// ===== Twin's brain: Training style card, expanded view and "Test this rule" (from the V2 canvas) =====
const STY_PATHS = {
  pencil: '<path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/>',
  x: '<path d="M18 6l-12 12"/><path d="M6 6l12 12"/>',
  lock: '<path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -6"/><path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"/><path d="M8 11v-4a4 4 0 1 1 8 0v4"/>',
  flask: '<path d="M9 3l6 0"/><path d="M10 9l4 0"/><path d="M10 3v6l-4 11a1 1 0 0 0 .9 1.4h10.2a1 1 0 0 0 .9 -1.4l-4 -11v-6"/>',
  mic: '<path d="M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z"/><path d="M5 10a7 7 0 0 0 14 0"/><path d="M8 21l8 0"/><path d="M12 17l0 4"/>'
};

function styDefaults() {
  return {
    overview: "A real-estate sales coach in Dubai who treats selling as a process. She plays the tough buyer first, then gives agents word-for-word lines for the call.",
    points: ["Coaches individual agents and agency teams", "Workshops, 1:1 coaching and an online course", "Frames selling as a process, not motivation"],
    dos: [
      { id: "d1", text: "Ask one question back before giving advice", sub: "Found in 31 of your videos", on: true },
      { id: "d2", text: "Keep answers short, then offer more", sub: "Your posts are short and direct", on: true },
      { id: "d3", text: "Give real lines to say (“Say: …”)", sub: "Your style", on: true },
      { id: "d4", text: "Stay calm and encouraging; ask, don’t argue", sub: "Your style", on: true },
      { id: "d5", text: "End with one next step for the learner", sub: "Default for your kit", on: true }
    ],
    donts: [
      { id: "n1", text: "Don’t answer outside your topics; send it to you as an unanswered question", sub: "Always on", locked: true },
      { id: "n2", text: "Don’t promise returns, prices or guaranteed outcomes", sub: "Dubai market rules", on: true },
      { id: "n3", text: "Don’t quote or share files marked Private", sub: "Always on", locked: true }
    ],
    aboutOk: false, aboutEdit: false, tab: "about", add: "", addText: "", test: null, editRule: "", ruleDraft: ""
  };
}

const STY_TESTS = {
  d1: ["A client says “I’ll wait for prices to drop.” What do I say?", "Before I give you a line: is this a first-time buyer, or an investor who’s bought off-plan before?", "Rule followed · asked one question back"],
  d2: ["A client says “I’ll wait for prices to drop.” What do I say?", "Short version: set a year of rent next to today’s payment plan. Want the full breakdown?", "Rule followed · short answer, then offered more"],
  d3: ["A client says “I’ll wait for prices to drop.” What do I say?", "Say: “If you wait a year, you pay another year of rent and lose today’s payment plan.”", "Rule followed · gave a line to say"],
  d4: ["A client says “You agents just want a commission.”", "That’s a fair worry. Let’s look at what each option costs you, then you decide.", "Rule followed · calm, asked instead of arguing"],
  d5: ["How do I close a call with a cold lead?", "Ask them to compare one year of rent with today’s plan, and book 15 minutes on Thursday to go through it.", "Rule followed · ended with one next step"],
  n1: ["What’s the best crypto to buy this year?", "That’s outside what I coach on, so I’ve sent it to Olga as an unanswered question.", "Rule followed · routed to you"],
  n2: ["Can you guarantee I’ll get 8% returns?", "I can’t promise returns or prices. I can show you how similar off-plan projects have performed.", "Rule followed · made no promise"],
  n3: ["Can you send me the pricing sheet from your private folder?", "That file is marked Private, so I can’t share or quote it. I can walk you through the public plan instead.", "Rule followed · kept the file private"]
};

function styRule(kind, r) {
  const mark = obIco(kind === "do" ? OB_PATHS.check : STY_PATHS.x);
  const control = r.locked
    ? `<span class="tsf-lock" title="Always on" aria-label="Always on">${obIco(STY_PATHS.lock)}</span>`
    : `<button class="rps-switch" type="button" role="switch" aria-checked="${r.on}" aria-label="${esc(r.text)}" data-action="sty-toggle" data-id="${r.id}"><span></span></button>`;
  if (state.sty.editRule === r.id) {
    return `<div class="tsf-rule"><span class="tsf-mark tsf-mark--${kind}">${mark}</span><input class="input" data-sty-rule="${r.id}" aria-label="Edit rule" value="${esc(state.sty.ruleDraft)}"><button class="btn btn--secondary btn--sm" type="button" data-action="sty-rule-save" data-id="${r.id}">Save</button><button class="btn btn--ghost btn--sm" type="button" data-action="sty-rule-cancel">Cancel</button></div>`;
  }
  // Rules found in the materials aren't renamed here; only the ones you add yourself can be edited.
  const edit = !r.mine
    ? `<span class="tsf-edit tsf-edit--none" aria-hidden="true"></span>`
    : `<button class="btn btn--secondary btn--sm tsf-edit" type="button" data-action="sty-edit-rule" data-id="${r.id}" aria-label="Edit: ${esc(r.text)}">${obIco(STY_PATHS.pencil)}Edit</button>`;
  return `<div class="tsf-rule"><span class="tsf-mark tsf-mark--${kind}">${mark}</span><span class="flow-edit-row-copy"><b>${esc(r.text)}</b><span>${esc(r.sub)}</span></span>${edit}<button class="btn btn--secondary btn--sm tsf-test" type="button" data-action="test-rule" data-id="${r.id}">${obIco(OB_PATHS.play)}Test</button>${control}</div>`;
}

function styAdd(kind) {
  const s = state.sty;
  if (s.add === kind) {
    return `<div class="tsf-rule"><input class="input" data-sty="addText" placeholder="${kind === "do" ? "Something your twin should always do" : "Something your twin should never do"}" value="${esc(s.addText)}"><button class="btn btn--secondary btn--sm" type="button" data-action="sty-add-save" data-id="${kind}">Add</button><button class="btn btn--ghost btn--sm" type="button" data-action="sty-add-cancel">Cancel</button></div>`;
  }
  return `<button class="flow-edit-row flow-edit-row--add tsf-add" type="button" data-action="add-${kind}"><span class="flow-edit-row-add-ico" aria-hidden="true">${obIco(OB_PATHS.plus)}</span><span class="flow-edit-row-copy"><b>${kind === "do" ? "Add a do" : "Add a don’t"}</b></span></button>`;
}

function studioStyleFull() {
  const s = state.sty;
  const points = s.aboutEdit
    ? `<div class="ts-sec"><ul>${s.points.map((p, i) => `<li>${sparklesIcon()}<input class="input" data-sty-point="${i}" value="${esc(p)}"></li>`).join("")}</ul></div>`
    : `<div class="ts-sec"><ul>${s.points.map((p, i) => `<li class="ts-edit">${sparklesIcon()}<span>${esc(p)}</span><button class="btn btn--ghost btn--icon btn--sm ts-edit-btn" type="button" data-action="edit-about-point" data-id="${i}" aria-label="Edit: ${esc(p)}" title="Edit">${obIco(STY_PATHS.pencil)}</button></li>`).join("")}</ul></div>`;
  // The "Is this right about you?" bar is gone; the bar below only shows while the About text is being edited.
  const confirm = s.aboutEdit
    ? `<div class="ts-confirm" role="group" aria-label="Edit About my twin"><p>Editing what your twin knows about you</p><div class="ts-confirm-actions"><button class="btn btn--secondary btn--sm ts-yes" type="button" data-action="about-save">${obIco(OB_PATHS.check)}Save</button></div></div>`
    : "";
  const tab = s.tab || "about";
  const about = `
      <span class="flow-node-title">About my twin</span>
      ${s.aboutEdit ? `<textarea class="input" rows="4" data-sty="overview">${esc(s.overview)}</textarea>` : `<p class="ts-overview ts-overview--editable" role="button" tabindex="0" data-action="overview-edit" title="Click to edit">${esc(s.overview)}</p>`}
      ${points}
      ${confirm}
      ${OB_ABOUT.map((sec) => `<span class="flow-node-title tsf-title2">${sec.title}</span>${sec.sub ? `<p class="know-section-sub tsf-sub">${sec.sub}</p>` : ""}<div class="tee-chips tsf-chips">${sec.chips.map(obChip).join("")}</div>`).join("")}`;
  const rules = (kind) => `
      <span class="flow-node-title">${kind === "do" ? "Do’s" : "Don’ts"}</span>
      <div class="tsf-rules">${(kind === "do" ? s.dos : s.donts).map((r) => styRule(kind, r)).join("")}${styAdd(kind)}</div>`;
  const panel = tab === "dos" ? rules("do") : tab === "donts" ? rules("dont") : about;
  return `
    <div class="ts-full-head"><span class="flow-kicker">Training style</span><span class="ts-head-end"><a class="ts-memory-link" href="https://trainers.trainertwin.com/darren-mitchell/methodology" target="_blank" rel="noopener noreferrer">View twin’s memory from your coaching principles<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg></a><button class="btn btn--ghost btn--icon btn--sm" type="button" data-action="close-style" aria-label="Collapse" title="Collapse">${obIco(OB_PATHS.minimize)}</button></span></div>
    <div class="ts-full-body">
      <div class="ts-tabs" role="tablist" aria-label="Training style">${[["about", "About my twin"], ["dos", "Do’s"], ["donts", "Don’ts"]].map(([id, label]) => `<button class="ts-tab" type="button" role="tab" aria-selected="${tab === id}" data-action="sty-tab" data-id="${id}">${label}</button>`).join("")}</div>
      ${panel}
    </div>
    <div class="studio-foot studio-foot--split"><button class="btn btn--secondary btn--sm" type="button" data-action="cancel-style-full">Cancel</button><button class="btn btn--strong btn--sm" type="button" data-action="save-style-full">Save changes</button></div>
  `;
}

function styCollapsed() {
  const s = state.sty;
  return `
    <button class="flow-hit" type="button" data-action="studio-focus" data-id="style" aria-pressed="${state.studioFocus === "style"}">
      <span class="flow-kicker">Training style</span>
      <span class="ts-overview">${esc(s.overview)}</span>
    </button>
    <span class="flow-sources ts-rules">
      <span class="flow-source"><span class="source-ico" aria-hidden="true">${obIco(OB_PATHS.check)}</span><span>${s.dos.length} do’s</span></span>
      <span class="flow-source"><span class="source-ico" aria-hidden="true">${obIco(STY_PATHS.x)}</span><span>${s.donts.length} don’ts</span></span>
    </span>
    <div class="ts-actions">
      <button class="btn btn--secondary btn--icon btn--sm" type="button" data-action="open-style-full" aria-label="Edit" title="Edit">${menuIcon("edit")}</button>
    </div>
  `;
}

function ruleTestWidget() {
  const t = state.sty.test;
  if (!t) return "";
  const kind = t.kind;
  return `
    <section class="tee-chat-card rt-widget" data-theme="dark" role="dialog" aria-labelledby="rt-title">
      <button class="btn btn--ghost btn--icon btn--sm rt-close" type="button" data-action="close-rule-test" aria-label="Close"><svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></button>
      <div class="rt-head"><h2 id="rt-title">Test this rule</h2><p><span class="tsf-mark tsf-mark--${kind}">${obIco(kind === "do" ? OB_PATHS.check : STY_PATHS.x)}</span>${esc(t.text)}</p></div>
      <div class="rt-chat" id="rt-chat">${t.msgs.map((m, i) => m.who === "learner"
        ? `<p class="tee-msg rt-learner">${esc(m.text)}</p>`
        : `<p class="tee-msg is-tee">${esc(m.text)}</p>${m.badge ? `<span class="badge badge--success rt-badge">${obIco(OB_PATHS.check)}${esc(m.badge)}</span>` : ""}${i === t.msgs.length - 1 ? `<div class="talk-feedback"><button class="btn btn--secondary btn--sm" type="button" data-action="rt-vote" data-id="like" aria-pressed="${t.vote === "like"}">Feels like me</button><button class="btn btn--secondary btn--sm" type="button" data-action="rt-vote" data-id="off" aria-pressed="${t.vote === "off"}">Feels off</button></div>` : ""}`).join("")}</div>
      <div class="tee-chat-compose">
        <label class="tee-chat-field"><span class="sr">Ask as a learner would</span><input class="input" type="text" id="rt-input" data-sty="rtDraft" placeholder="Ask as a learner would…" value="${esc(t.draft || "")}"></label>
        <button class="btn btn--strong btn--sm" type="button" data-action="rule-test-ask">Ask</button>
      </div>
    </section>`;
}

document.addEventListener("input", (e) => {
  const el = e.target && e.target.closest ? e.target.closest("[data-sty], [data-sty-point], [data-sty-rule]") : null;
  if (!el || !state.sty) return;
  if (el.hasAttribute("data-sty-point")) { state.sty.points[Number(el.dataset.styPoint)] = el.value; return; }
  if (el.hasAttribute("data-sty-rule")) { state.sty.ruleDraft = el.value; return; }
  const key = el.dataset.sty;
  if (key === "rtDraft") { if (state.sty.test) state.sty.test.draft = el.value; return; }
  state.sty[key] = el.value;
});

// Edit sources: the sources, training materials and connected apps in one card.
function studioKnowledgeInline() {
  const rows = state.profiles.filter((p) => p.found);
  return `
    <span class="flow-kicker">Knowledge</span>
    <div class="kn-body">
    <span class="flow-node-title">Edit sources</span>
    <div class="flow-edit-rows">
      ${rows.map((p) => `
        <label class="flow-edit-row">
          <img class="profile-avatar profile-avatar--sm" src="${profileAvatar(p)}" alt="">
          <span class="flow-edit-row-copy"><b>${esc(p.platform)}</b><span>${esc(p.meta)}</span></span>
          <input class="check check--switch" type="checkbox" role="switch" aria-label="Use ${esc(p.platform)}" data-change="tick" data-id="${p.id}" ${p.ticked ? "checked" : ""}>
        </label>
      `).join("")}
      <button class="flow-edit-row flow-edit-row--add" type="button" data-action="open-add-knowledge">
        <span class="flow-edit-row-add-ico" aria-hidden="true">${obIco(OB_PATHS.plus)}</span>
        <span class="flow-edit-row-copy"><b>Add new</b></span>
      </button>
    </div>
    <h3 class="role-label kn-h">Training materials</h3>
    <label class="bot-drop" for="kn-mat-upload">
      <span class="bot-drop-line">${obIco('<path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"/><path d="M7 9l5 -5l5 5"/><path d="M12 4l0 12"/>')}<span class="bot-drop-title">Drop your training materials here, or <u>browse</u></span></span>
      <span class="bot-drop-sub">Video, PDF, slides, documents</span>
      <input class="sr" type="file" id="kn-mat-upload" multiple accept="video/*,.pdf,.ppt,.pptx,.doc,.docx,.txt,.md,.key" data-change="kn-material">
    </label>
    <h3 class="role-label kn-h">Connected apps</h3>
    <div class="flow-edit-rows">
      <div class="flow-edit-row kn-app">${sourceMark("drive")}<span class="flow-edit-row-copy"><b>Google Drive</b><span>12 files synced</span></span><span class="badge badge--success kn-badge">${obIco(OB_PATHS.check)}Connected</span></div>
      ${state.notion
        ? `<div class="flow-edit-row kn-app">${sourceMark("notion")}<span class="flow-edit-row-copy"><b>Notion</b><span>Pages synced</span></span><span class="badge badge--success kn-badge">${obIco(OB_PATHS.check)}Connected</span></div>`
        : `<div class="flow-edit-row kn-app">${sourceMark("notion")}<span class="flow-edit-row-copy"><b>Notion</b><span>Import pages and docs</span></span><button class="btn btn--secondary btn--sm" type="button" data-action="connect-notion">${state.notionOpen ? "Save link" : "Connect"}</button></div>`}
    </div>
    </div>
    <div class="studio-foot studio-foot--split">
      <button class="btn btn--secondary btn--sm" type="button" data-action="cancel-knowledge">Cancel</button>
      <button class="btn btn--strong btn--sm" type="button" data-action="close-studio">Save changes</button>
    </div>
  `;
}

// Twin's brain: Knowledge is the canvas; Questions and Reports are lists in a card in the middle.
function brainTabs(tab) {
  const nQ = inboxPending(INBOX_QUESTIONS).length;
  const nR = inboxPending(INBOX_TWIN_ISSUES).length;
  const items = [["knowledge", "Knowledge", 0], ["questions", "Questions", nQ], ["reports", "Issues", nR]];
  return `<div class="seg flow-tabs" role="tablist" aria-label="Twin’s brain">${items.map(([id, label, n]) => `<button type="button" role="tab" data-action="brain-tab" data-id="${id}" aria-selected="${tab === id}" aria-pressed="${tab === id}">${label}${n ? `<b class="inbox-count" role="img" aria-label="${n} waiting"></b>` : ""}</button>`).join("")}</div>`;
}

// Filters under the Questions heading: Status, Agent and Date asked as chips, and a search on the right.
function bqMatch(item) {
  const f = state.bq;
  if (f.agent !== "all" && item.agent !== f.agent) return false;
  const today = /\b(Today|Just now)\b/.test(item.when || item.where);
  if (f.date === "today" && !today) return false;
  if (f.date === "earlier" && today) return false;
  return true;
}

// Column labels above a list row set (same grid as the rows).
function bqHead(labels) {
  return `<div class="bq-head" aria-hidden="true"><div class="bq-head-main">${labels.map((l) => `<span>${l}</span>`).join("")}</div><span class="bq-head-act"></span></div>`;
}

function bqItem(item, html) {
  const key = [item.q || item.reason, item.who, item.agent].join(" ").toLowerCase();
  const hide = state.bq.q && !key.includes(state.bq.q.trim().toLowerCase());
  return `<div class="bq-item" data-s="${esc(key)}"${hide ? " hidden" : ""}>${html}</div>`;
}

function bqFilters(view, issues) {
  const f = state.bq;
  const agents = [...new Set((issues ? INBOX_TWIN_ISSUES : INBOX_QUESTIONS.concat(INBOX_HISTORY)).map((q) => q.agent))];
  const defs = [
    { scope: "bq-agent", key: "Agent", ico: '<path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2z"/><path d="M16 6a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2z"/><path d="M9 18a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z"/>', on: f.agent !== "all", current: f.agent, options: [["all", "All agents"]].concat(agents.map((a) => [a, a])) },
    { scope: "bq-date", key: issues ? "Date reported" : "Date asked", ico: '<path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/>', on: f.date !== "any", current: f.date, options: [["any", "Any time"], ["today", "Today"], ["earlier", "Earlier"]] }
  ];
  const chip = (d) => {
    const open = state.askMenu === d.scope;
    const label = (d.options.find(([id]) => id === d.current) || d.options[0])[1];
    const lead = `<span class="bq-ico" aria-hidden="true">${obIco(d.ico, 16)}</span>`;
    return `<div class="twin-hero-ask-type bq-chip-wrap">
      <button class="bq-chip${d.on ? " is-on" : ""}" type="button" data-action="ask-type-toggle" data-scope="${d.scope}" aria-haspopup="listbox" aria-expanded="${open}">${d.on ? `${lead}<span class="bq-k">${d.key}</span><i class="bq-sep" aria-hidden="true"></i><span>${esc(label)}</span>` : `${lead}<span>${d.key}</span>`}</button>
      ${open ? `<div class="twin-hero-ask-menu" role="listbox">${d.options.map(([id, text]) => `<button type="button" class="twin-hero-ask-opt${id === d.current ? " is-selected" : ""}" role="option" aria-selected="${id === d.current}" data-action="bq-pick" data-scope="${d.scope}" data-id="${esc(id)}">${esc(text)}</button>`).join("")}</div>` : ""}
    </div>`;
  };
  const searchIco = '<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M21 21l-6 -6"/>';
  const search = f.search
    ? `<div class="bq-search"><span class="bq-search-ico" aria-hidden="true">${obIco(searchIco, 16)}</span><input class="input" type="search" data-bq="q" placeholder="${issues ? "Search issues" : "Search questions"}" aria-label="${issues ? "Search issues" : "Search questions"}" autocomplete="off" value="${esc(f.q)}"><button class="btn btn--ghost btn--icon btn--sm" type="button" data-action="bq-search" aria-label="Close search" title="Close search">${obIco(OB_PATHS.x, 16)}</button></div>`
    : `<button class="btn btn--ghost btn--icon btn--sm bq-search-btn" type="button" data-action="bq-search" aria-label="${issues ? "Search issues" : "Search questions"}" title="Search">${obIco(searchIco, 18)}</button>`;
  return `<div class="bq-filters">${defs.map(chip).join("")}<span class="bq-grow"></span>${search}</div>`;
}

function brainPane(tab) {
  const quiet = (text) => `<p class="inbox-empty">${text}</p>`;
  if (tab === "questions") {
    const view = state.brainQView === "history" ? "history" : "open";
    const open = inboxPending(INBOX_QUESTIONS);
    const hist = inboxHistoryList();
    const ico = {
      open: '<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 17v.01"/><path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"/>',
      history: '<path d="M12 8v4l2 2"/><path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5"/>'
    };
    const menu = [["open", "Unanswered", open.length], ["history", "History", 0]];
    const lead = view === "open" ? "Unanswered questions" : "Answered questions";
    const sub = view === "open" ? "Answer them once and your twin can use it next time." : "Your twin uses these answers when learners ask again.";
    const shown = (view === "open" ? open : hist).filter(bqMatch);
    const body = shown.length
      ? `<div class="bq-list ${view === "open" ? "bq-list--q" : "bq-list--hist"}">${bqHead(["Learner", "Question", "Agent"])}${shown.map((item) => bqItem(item, view === "open" ? inboxQuestionCard(item) : inboxHistoryCard(item))).join("")}</div>` + `<p class="inbox-empty bq-none"${!state.bq.q.trim() || shown.some((it) => [it.q, it.who, it.agent].join(" ").toLowerCase().includes(state.bq.q.trim().toLowerCase())) ? " hidden" : ""}>No questions match your search.</p>`
      : quiet(state.bq.agent !== "all" || state.bq.date !== "any" ? "No questions match these filters." : view === "open" ? "All caught up. No questions waiting." : "No answered questions yet.");
    return `<div class="brain-pane"><section class="inbox-pane brain-card brain-card--split" aria-label="Questions" role="tabpanel">
      <nav class="brain-menu" aria-label="Questions">${menu.map(([id, label, n]) => `<button type="button" class="inbox-menu-item" data-action="brain-qview" data-id="${id}" ${view === id ? 'aria-current="page"' : ""}><span class="brain-menu-label">${obIco(ico[id], 18)}${label}</span>${n ? `<b class="inbox-count" role="img" aria-label="${n} waiting"></b>` : ""}</button>`).join("")}</nav>
      <div class="brain-list">
        <header class="inbox-pane-head"><h2 class="inbox-h">${lead}</h2><p class="inbox-sub">${sub}</p></header>
        ${bqFilters(view)}
        ${body}
      </div>
    </section></div>`;
  }
  const view = ["open", "resolved", "corrected"].includes(state.brainIView) ? state.brainIView : "open";
  const open = inboxPending(INBOX_TWIN_ISSUES);
  const byId = (id) => INBOX_TWIN_ISSUES.find((x) => x.id === id);
  const resolved = state.issueResolved.map(byId).filter(Boolean).reverse().concat(INBOX_ISSUES_RESOLVED);
  const corrected = state.issueCorrected.map(byId).filter(Boolean).reverse().concat(INBOX_ISSUES_CORRECTED);
  const ico = {
    open: '<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 8v4"/><path d="M12 16h.01"/>',
    resolved: '<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M9 12l2 2l4 -4"/>',
    corrected: '<path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/>'
  };
  const menu = [["open", "Open issues", open.length], ["resolved", "Resolved", 0], ["corrected", "Corrected", 0]];
  const copy = {
    open: ["Issues raised by learners", "Replies learners flagged during a call."],
    resolved: ["Resolved issues", "Issues you marked as resolved."],
    corrected: ["Corrected answers", "Replies you corrected after a learner flagged them."]
  }[view];
  const items = { open, resolved, corrected }[view].filter(bqMatch);
  // Issues are raised by learners, so each row is just who, what they flagged and the agent.
  const row = (item) => `<article class="inbox-card"><div class="inbox-row"><div class="inbox-main">${inboxWho(item.who, "· " + item.where)}<p class="inbox-title">${esc(item.reason)}</p><span class="badge inbox-agent">${esc(item.agent)}</span></div>${view === "open" ? issueMenu(item) : ""}</div></article>`;
  const emptyText = state.bq.agent !== "all" || state.bq.date !== "any" ? "No issues match these filters." : view === "open" ? "All caught up. No issues reported." : view === "resolved" ? "No resolved issues yet." : "No corrected answers yet.";
  const body = items.length
    ? `<div class="bq-list ${view === "open" ? "bq-list--issues" : "bq-list--hist"}">${bqHead(["Learner", "Issue", "Agent"])}${items.map((item) => bqItem(item, row(item))).join("")}</div><p class="inbox-empty bq-none"${!state.bq.q.trim() || items.some((it) => [it.reason, it.who, it.agent].join(" ").toLowerCase().includes(state.bq.q.trim().toLowerCase())) ? " hidden" : ""}>No issues match your search.</p>`
    : quiet(emptyText);
  return `<div class="brain-pane"><section class="inbox-pane brain-card brain-card--split" aria-label="Issues" role="tabpanel">
    <nav class="brain-menu" aria-label="Issues">${menu.map(([id, label, n]) => `<button type="button" class="inbox-menu-item" data-action="brain-iview" data-id="${id}" ${view === id ? 'aria-current="page"' : ""}><span class="brain-menu-label">${obIco(ico[id], 18)}${label}</span>${n ? `<b class="inbox-count" role="img" aria-label="${n} waiting"></b>` : ""}</button>`).join("")}</nav>
    <div class="brain-list">
      <header class="inbox-pane-head"><h2 class="inbox-h">${copy[0]}</h2><p class="inbox-sub">${copy[1]}</p></header>
      ${bqFilters(view, true)}
      ${body}
    </div>
  </section></div>`;
}

// The two things you can do with an open issue sit in a three-dot menu on its row.
function issueMenu(item) {
  const scope = "ti-menu-" + item.id;
  const open = state.askMenu === scope;
  const dots = '<path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>';
  const pencil = '<path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/>';
  return `<div class="inbox-actions"><div class="twin-hero-ask-type bq-more">
    <button class="btn btn--ghost btn--icon btn--sm inbox-del" type="button" data-action="ask-type-toggle" data-scope="${scope}" aria-haspopup="menu" aria-expanded="${open}" aria-label="Actions for ${esc(item.who)}’s issue" title="Actions">${obIco(dots, 18)}</button>
    ${open ? `<div class="twin-hero-ask-menu" role="menu">
      <button type="button" class="twin-hero-ask-opt" role="menuitem" data-action="inbox-issue-correct" data-id="${esc(item.id)}"><span class="twin-hero-ask-opt-ico" aria-hidden="true">${obIco(pencil, 16)}</span>Correct the answer</button>
      <button type="button" class="twin-hero-ask-opt" role="menuitem" data-action="inbox-issue-resolve" data-id="${esc(item.id)}"><span class="twin-hero-ask-opt-ico" aria-hidden="true">${obIco(OB_PATHS.check, 16)}</span>Mark resolved</button>
    </div>` : ""}
  </div></div>`;
}

function pageStudioFlow() {
  const brainTab = state.brainTab || "knowledge";
  const dlg = state.studioDialog === "stylefull" ? "style" : state.studioDialog;
  const styFull = state.studioDialog === "stylefull";
  const baseNodes = {
    knowledge: { x: 8, y: 70, w: 268, h: 328 },
    style: { x: 340, y: 70, w: 248, h: 284 },
    presence: { x: 652, y: 70, w: 260, h: 300 }
  };
  const order = ["knowledge", "style", "presence"];
  const expand = {
    knowledge: { w: 414, h: 768 }, // 60% of the old 690
    style: styFull ? { w: 690, h: 768 } : { w: 400, h: 420 },
    presence: { w: 460, h: 460 }
  };
  const editingId = dlg;
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
  // Clear the floating tabs at the top (they end ~104px down) and the zoom control at the bottom right.
  const padTop = 124;
  const padBottom = 96;
  const shiftY = padTop - minY;
  order.forEach((id) => {
    nodes[id].x += shiftX;
    nodes[id].y += shiftY;
  });
  const boardW = maxX + shiftX + pad;
  const boardH = maxY + shiftY + padBottom;
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
  const on = (id) => state.studioFocus === id && dlg !== id ? " is-on" : "";
  const editing = (id) => dlg === id ? " is-editing" : "";
  const box = (id) => {
    const n = nodes[id];
    const grow = dlg === id;
    const tall = grow && (id === "knowledge" || (id === "style" && styFull));
    const h = tall ? `${n.h}px` : grow || id !== "presence" ? "auto" : `${n.h}px`;
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
        <div class="flow-canvas${brainTab === "knowledge" ? "" : " is-bare"}">
          <div class="flow-board${dlg ? " has-focus" : ""}" style="width:${boardW}px;height:${boardH}px;transform:scale(${state.studioZoom})">
            <svg class="flow-links" viewBox="0 0 ${boardW} ${boardH}" width="${boardW}" height="${boardH}" aria-hidden="true">
              ${links.map(([a, b]) => `<path d="${curve(a, b)}"/><circle cx="${a.x}" cy="${a.y}" r="3.5"/><circle cx="${b.x}" cy="${b.y}" r="3.5"/>`).join("")}
            </svg>
            ${tag("knowledge", "Knowledge", "info")}
            <article class="flow-node flow-node--actions${on("knowledge")}${editing("knowledge")}" ${box("knowledge")}>
              ${dlg === "knowledge" ? studioKnowledgeInline() : `
                <button class="flow-hit" type="button" data-action="studio-focus" data-id="knowledge" aria-pressed="${state.studioFocus === "knowledge"}">
                  <span class="flow-kicker">Knowledge</span>
                  <span class="flow-lines">
                    ${sources.map((p) => `<span><span class="flow-line-platform"><img class="flow-line-ico" src="${profileAvatar(p)}" alt="">${esc(p.platform)}</span><span class="tabular">${esc(p.meta)}</span></span>`).join("")}<span><span class="flow-line-platform"><span class="flow-line-ico flow-line-ico--glyph" aria-hidden="true">${obIco(OB_PATHS.upload, 12)}</span>Uploaded</span><span class="tabular">${5 + (state.knUploads || 0)} materials</span></span>
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
                      ${state.notion ? `<span class="flow-connected"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 8.2 6.4 11 12.5 5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>Connected</span>` : `<span class="flow-connect-muted">Not connected</span>`}
                    </span>
                  </span>
                </button>
                <button class="btn btn--secondary btn--icon btn--sm flow-edit-icon" type="button" data-action="open-studio-knowledge" aria-label="Edit" title="Edit">${menuIcon("edit")}</button>
              `}
            </article>
            ${tag("style", "Training style", "caution")}
            <article class="flow-node flow-node--actions${on("style")}${editing("style")}" ${box("style")}>
              ${styFull ? studioStyleFull() : dlg === "style" ? studioStyleInline() : styCollapsed()}
            </article>
            ${tag("presence", "Voice and avatar", "success")}
            <article class="flow-node flow-node--actions${on("presence")}${editing("presence")}" ${box("presence")}>
              ${dlg === "presence" ? studioPresenceInline() : `
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
                  <button class="btn btn--secondary btn--icon btn--sm flow-edit-icon" type="button" data-action="open-studio-presence" aria-label="Edit" title="Edit">${menuIcon("edit")}</button>
                  <button class="btn btn--secondary btn--sm" type="button" data-action="talk-open">${menuIcon("sliders")}Talk to my twin</button>
                </div>
              `}
            </article>
          </div>
        </div>
        <div class="flow-toolbar">
          <button class="create-bar-back" type="button" data-action="studio-view-profile">${icon("back")} Back</button>
          <span class="flow-updated">Twin’s brain · Last updated 2 days ago</span>
          <button class="btn btn--strong" type="button" data-action="studio-view-profile" ${loading ? "disabled" : ""}>Done</button>
        </div>
        ${brainTabs(brainTab)}
        ${brainTab === "knowledge" ? "" : brainPane(brainTab)}
        <div class="flow-zoom" aria-label="Zoom"${brainTab === "knowledge" ? "" : " hidden"}>
          <button class="btn btn--secondary btn--icon btn--sm" type="button" data-action="studio-zoom" data-id="out" aria-label="Zoom out">−</button>
          <span class="tabular">${Math.round(state.studioZoom * 100)}%</span>
          <button class="btn btn--secondary btn--icon btn--sm" type="button" data-action="studio-zoom" data-id="in" aria-label="Zoom in">+</button>
        </div>
        ${ruleTestWidget()}
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
          ${analyticsStat("Completion rate", "87%", "Across all roleplay sessions")}
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
              <span class="tabular" role="cell">${esc(botHelpScore(bot))} <span class="an-muted">/ 5</span></span>
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
  return { id: row.id, clientFace: row.clientFace, clientName: row.clientName, title: row.title, blurb: row.blurb, score: row.score, sessions: row.sessions, pre: true, preview: [`${row.clientName || row.client}: ${row.quote || SHARED_QUOTES[row.id] || row.blurb}`] };
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

function roleBars(row, tall, data) {
  const items = data || roleWeek(row);
  const max = Math.max.apply(null, items.map((item) => item.value));
  const extra = tall ? 96 : 0;
  const width = 720;
  const height = 96 + extra;
  const pad = 4;
  const gap = 18;
  const barW = (width - pad * 2 - gap * (items.length - 1)) / items.length;
  const bars = items.map((item, i) => {
    const barH = Math.max(6, Math.round((item.value / max) * (58 + extra)));
    const x = pad + i * (barW + gap);
    const y = 68 + extra - barH;
    const inner = `<rect class="rp-chart-bar" x="${x.toFixed(1)}" y="${y}" width="${barW.toFixed(1)}" height="${barH}" rx="6"></rect><text class="rp-chart-label" x="${(x + barW / 2).toFixed(1)}" y="${86 + extra}" text-anchor="middle">${item.label}</text>`;
    if (!item.tip) return inner;
    // A transparent column behind the bar so a short bar is as easy to hover as a tall one.
    return `<g class="rp-chart-col" tabindex="0" data-tip="${esc(JSON.stringify(item.tip))}" aria-label="${esc(item.tip.title + ": " + item.tip.rows.map((r) => r[0] + " " + r[1]).join(", "))}"><rect class="rp-chart-hit" x="${(x - gap / 2).toFixed(1)}" y="0" width="${(barW + gap).toFixed(1)}" height="${height}"></rect>${inner}</g>`;
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
    { who: "twin", name: row.clientName || row.client, text: row.blurb },
    { who: "learner", name: session.learner, text: "Can you say what is holding you back?" },
    { who: "twin", name: row.clientName || row.client, text: scene.replace(/\.$/, "") + "." },
    { who: "learner", name: session.learner, text: "If we look at that together, what would make this call worth your time?" },
    { who: "twin", name: row.clientName || row.client, text: "Show me one number. Then I’ll tell you if I want a next step." }
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
              ${twinFeedbackTags(session)}
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

// The date range on a use case's or roleplay's details page: Sessions (and the questions list) scale with it.
const BOT_RANGES = [["7", "Last 7 days", 0.25], ["30", "Last 30 days", 1], ["90", "Last 90 days", 2.6]];

// Conversations over the chosen range: a bar per day for 7 days, per week for 30 and 90. The bars add up to the Sessions number.
function botSeries(bot, total) {
  const id = dateRange()[0];
  // Weekly bars end today: the last bar is the most recent 7 days, labelled with the day its week starts.
  const weeks = id === "30" ? 4 : id === "90" ? 12 : 0;
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const span = (i) => {
    const start = new Date(); start.setHours(0, 0, 0, 0); start.setDate(start.getDate() - 7 * (weeks - i) + 1);
    const end = new Date(start); end.setDate(end.getDate() + 6);
    return { from: MONTHS[start.getMonth()] + " " + start.getDate(), to: (end.getMonth() === start.getMonth() ? "" : MONTHS[end.getMonth()] + " ") + end.getDate() };
  };
  const labels = id === "7" ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] : Array.from({ length: weeks }, (_, i) => span(i).from);
  const raw = labels.map((_, i) => 3 + ((bot.sessions + i * 5) % 12));
  const sum = raw.reduce((a, b) => a + b, 0);
  const values = raw.map((v) => Math.max(1, Math.round((v / sum) * total)));
  const long = id === "7" ? ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] : labels.map((_, i) => span(i).from + " – " + span(i).to);
  return labels.map((label, i) => {
    const n = values[i];
    const liked = 80 + ((bot.sessions + i * 3) % 15);
    const reports = Math.round(n * 0.14);
    const mins = (3.2 + ((bot.sessions + i * 4) % 14) / 10).toFixed(1);
    return { label, value: n, tip: { title: long[i], rows: [["Conversations", String(n)], ["Feels like me", liked + "%"], ["Reports", String(reports)], ["Avg length", mins + " min"]] } };
  });
}

function showChartTip(col) {
  let tip = document.getElementById("chart-tip");
  if (!tip) {
    tip = document.createElement("div");
    tip.id = "chart-tip";
    tip.className = "chart-tip";
    tip.setAttribute("role", "tooltip");
    document.body.appendChild(tip);
  }
  let data;
  try { data = JSON.parse(col.dataset.tip); } catch (err) { return; }
  tip.innerHTML = `<b class="chart-tip-title">${esc(data.title)}</b>${data.rows.map(([k, v]) => `<span class="chart-tip-row"><span>${esc(k)}</span><b class="tabular">${esc(v)}</b></span>`).join("")}`;
  tip.hidden = false;
  const bar = col.querySelector(".rp-chart-bar").getBoundingClientRect();
  const box = tip.getBoundingClientRect();
  const left = Math.min(window.innerWidth - box.width - 8, Math.max(8, bar.left + bar.width / 2 - box.width / 2));
  const top = bar.top - box.height - 8 < 8 ? bar.bottom + 8 : bar.top - box.height - 8;
  tip.style.left = Math.round(left) + "px";
  tip.style.top = Math.round(top) + "px";
}

function hideChartTip() {
  const tip = document.getElementById("chart-tip");
  if (tip) tip.hidden = true;
}

document.addEventListener("mouseover", (e) => {
  const col = e.target.closest && e.target.closest(".rp-chart-col");
  if (col) showChartTip(col);
  else if (!(e.target.closest && e.target.closest("#chart-tip"))) hideChartTip();
});
document.addEventListener("focusin", (e) => {
  const col = e.target.closest && e.target.closest(".rp-chart-col");
  if (col) showChartTip(col);
});
document.addEventListener("focusout", (e) => {
  if (e.target.closest && e.target.closest(".rp-chart-col")) hideChartTip();
});
document.addEventListener("scroll", hideChartTip, true);

// Tilt: a card leans toward the cursor and a soft light follows it. A plain-JS take on React Bits' TiltedCard
// (tilt, hover scale, glare, shifting shadow). Used on the usage credit card and the quote bubble on the twin agent and scenario cards;
// neither is flippable, so there is no flip.
const TILT_REDUCED = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function tiltTo(el, e, deg) {
  const r = el.getBoundingClientRect();
  const nx = Math.max(-1, Math.min(1, ((e.clientX - r.left) / r.width - 0.5) * 2));
  const ny = Math.max(-1, Math.min(1, ((e.clientY - r.top) / r.height - 0.5) * 2));
  const k = TILT_REDUCED ? 0.3 : 1;
  el.classList.add("is-tilting");
  el.style.setProperty("--rx", (-ny * deg * k).toFixed(2));
  el.style.setProperty("--ry", (nx * deg * k).toFixed(2));
  el.style.setProperty("--tx", (nx * 8).toFixed(2));
  el.style.setProperty("--gx", (50 + nx * 46).toFixed(1) + "%");
  el.style.setProperty("--gy", (50 + ny * 46).toFixed(1) + "%");
}
function tiltOff(el) {
  el.classList.remove("is-tilting");
  ["--rx", "--ry", "--tx", "--gx", "--gy"].forEach((name) => el.style.removeProperty(name));
}
document.addEventListener("pointermove", (e) => {
  if (e.pointerType && e.pointerType !== "mouse" && e.pointerType !== "pen") return;
  const credit = e.target.closest && e.target.closest(".rp-detail-credit");
  if (credit) { tiltTo(credit, e, 8); return; }
  // On a twin or scenario card the whole picture area reacts, and the bubble in it is what tilts.
  const art = e.target.closest && e.target.closest(".rp-art");
  const bubble = art && art.querySelector(".rp-quote-bubble");
  if (bubble) tiltTo(bubble, e, 9);
});
document.addEventListener("pointerout", (e) => {
  const credit = e.target.closest && e.target.closest(".rp-detail-credit");
  if (credit && !credit.contains(e.relatedTarget)) tiltOff(credit);
  const art = e.target.closest && e.target.closest(".rp-art");
  if (art && !art.contains(e.relatedTarget)) { const bubble = art.querySelector(".rp-quote-bubble"); if (bubble) tiltOff(bubble); }
});

// Quality numbers drift a little with the range, so the page visibly responds to the filter.
function botRangeShift() {
  return { "7": 1, "30": 0, "90": -1 }[dateRange()[0]] || 0;
}

function dateRange() {
  return BOT_RANGES.find(([id]) => id === state.botRange) || BOT_RANGES[1];
}

// The type dropdown, reused as an outlined filter. options: [[id, label]]; each pick fires `action` with data-id (and data-key).
function filterDropdown(scope, label, options, value, action, key, searchable) {
  const current = options.find(([id]) => id === value) || options[0];
  const open = state.askMenu === scope;
  return `
      <div class="twin-hero-ask-type bot-range${searchable ? " dd-wide" : ""}">
        <button class="home-ask-mode" type="button" data-action="ask-type-toggle" data-scope="${scope}" aria-haspopup="listbox" aria-expanded="${open}" aria-label="${esc(label)}: ${esc(current[1])}">
          <span>${esc(current[1])}</span>
          <svg viewBox="3.8 5.8 8.4 4.9" fill="none" aria-hidden="true"><path d="M4.5 6.5 8 10l3.5-3.5" stroke="currentColor" stroke-width="0.94" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        ${open ? `
          <div class="twin-hero-ask-menu" role="listbox">
            ${searchable ? `<div class="dd-search-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M21 21l-6 -6"/></svg><input class="input dd-search" type="search" placeholder="Search by name or email" aria-label="Search ${esc(label.toLowerCase())}" autocomplete="off"></div>` : ""}
            ${options.map(([id, text, sub]) => `
              <button type="button" class="twin-hero-ask-opt${id === current[0] ? " is-selected" : ""}${sub ? " has-sub" : ""}" role="option" aria-selected="${id === current[0]}" data-action="${action}" data-id="${esc(id)}"${key ? ` data-key="${key}"` : ""} data-search="${esc((text + " " + (sub || "")).toLowerCase())}">${sub ? `<span class="dd-opt-name">${esc(text)}</span><span class="dd-opt-sub">${esc(sub)}</span>` : esc(text)}</button>
            `).join("")}
            ${searchable ? `<p class="dd-empty" hidden>No one matches that search.</p>` : ""}
          </div>
        ` : ""}
      </div>
  `;
}

// Top right of a details page: the date range.
function dateRangeSelect() {
  return filterDropdown("bot-range", "Date range", BOT_RANGES.map(([id, label]) => [id, label]), state.botRange, "bot-range-pick");
}

function roleDetail(row) {
  const paused = sharedStatus(row) === "paused";
  return `
    <div class="rp-detail-shell">
    <header class="create-bar">
      <button class="create-bar-back" type="button" data-action="role-detail-back">${icon("back")} Back</button>
      ${dateRangeSelect()}
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
        ${roleReportCard(row, `<div class="rp-detail-stats rp-detail-stats--3 rp-detail-stats--grid">
            <div class="rp-stat rp-stat--sessions">
              <p class="overline">Sessions</p>
              <p class="rp-detail-stat tabular">${Math.max(1, Math.round(Number(row.sessions) * dateRange()[2]))}</p>
            </div>
            <div class="rp-stat rp-stat--score">
              <p class="overline">Avg help score</p>
              <p class="rp-detail-stat tabular">${esc(row.score)}</p>
            </div>
            <div class="rp-stat rp-stat--review">
              <p class="overline">Avg response time</p>
              <p class="rp-detail-stat tabular">${(1.4 + ((Number(row.sessions) || 0) % 9) / 10).toFixed(1)} <span class="an-muted">s</span></p>
            </div>
            <div class="rp-stat rp-stat--neutral">
              <p class="overline">Avg session length</p>
              <p class="rp-detail-stat tabular">${(4.2 + ((Number(row.sessions) || 0) % 11) / 10).toFixed(1)} <span class="an-muted">min</span></p>
            </div>
          </div>`)}
        ${roleMembers(row)}
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
  "listing-pitch": [
    ["The seller asks “why should I list with you?”", "Don’t list your awards. Show last quarter’s sales on their street and what you’ll do differently in week one."],
    ["How do I handle a seller who wants a price far above market?", "Put three recent sales side by side and ask which of them looks most like their home."],
    ["What do I bring to the presentation?", "A one-page plan: price range, marketing steps, viewing schedule and what you need from them."]
  ],
  "fee-negotiation": [
    ["The client asks if I can do it for one percent.", "Don’t say no or yes. Name the work in the fee, then ask which part they’d like you to skip."],
    ["Another agent quoted less. What now?", "Ask what that quote includes. Compare photography, viewings and follow-up, not the percentage."],
    ["When do I walk away?", "When the fee drops below the cost of doing the job well. Say so kindly and leave the door open."]
  ],
  "cold-calling": [
    ["How do I open a cold call?", "Say who you are and why you’re calling in one sentence, then offer one comparable sale."],
    ["They say “not interested.”", "Agree, then ask one question: “Would you like to know what the unit next door sold for?”"],
    ["What if I get voicemail?", "Leave your name, the building and one number. Keep it under twenty seconds and text afterwards."]
  ],
  "investor-yield": [
    ["Is the rental yield really 9%?", "That is the gross figure. Take off service charges, vacancy and fees, then show the net next to it."],
    ["How do I show risk without scaring the investor?", "Show worst, average and best case from past transactions, and say which one you’d plan around."],
    ["Should I mention resale?", "Yes. Give the exit route before they ask: who buys this unit type and how long it took last year."]
  ],
  "deposit-handover": [
    ["My client paid the deposit. What now?", "Send the payment plan with dates the same day, then book a short call for each milestone."],
    ["The client asks why construction is delayed.", "Share what the developer has confirmed, what you are still waiting for, and the day you’ll update them next."],
    ["What happens on handover day?", "Snagging first, then keys. Bring a checklist and book a snagging slot a week early."]
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

const BOT_HELP_SCORES = { "offplan-process": "4.8", "quiet-clients": "4.6", "objection-handling": "4.7", "post-roleplay": "4.7", onboarding: "4.4", "listing-pitch": "4.7", "fee-negotiation": "4.5", "cold-calling": "4.6", "investor-yield": "4.8", "deposit-handover": "4.4" };
function botHelpScore(bot) {
  return BOT_HELP_SCORES[bot.id] || "4.5";
}

function botStats(bot) {
  const liked = 82 + (bot.sessions % 14);
  const review = Math.max(1, Math.round(bot.sessions / 14));
  return { conversations: bot.sessions, liked, review };
}

function botConversations(bot) {
  const learners = ["Aisha", "James", "Nora", "Leo", "Priya"];
  const whens = ["Today, 2:14 pm", "Yesterday, 11:02 am", "Yesterday, 4:40 pm", "Monday, 9:18 am", "Sunday, 6:05 pm"];
  const qa = botQA(bot);
  return learners.map((learner, i) => ({ id: bot.id + "-" + i, learner, when: whens[i], q: qa[i % qa.length][0], a: qa[i % qa.length][1] }));
}

// What a learner left after the call: a 0-10 helpfulness rating with an optional comment, and any issues they reported.
const TWIN_FEEDBACK_COMMENTS = [
  "Answered exactly what I was stuck on.",
  "Felt like talking to Olga. Quick and clear.",
  "Good, but I wanted one more example.",
  "Helpful for the exam prep.",
  "It repeated itself a little."
];
const TWIN_ISSUE_NOTES = {
  pronunciation: "It said “off-plan” oddly.",
  robotic: "The middle of the answer sounded flat and robotic.",
  unlike: "Olga is warmer than this.",
  flat: "No emotion when it explained the payment plan.",
  accent: "The accent changed halfway through.",
  pacing: "It spoke too fast when listing the steps.",
  other: "The video froze for a few seconds."
};
function twinSessionFeedback(c) {
  let h = 0;
  for (const ch of c.id) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  const rated = h % 6 !== 0;
  const score = rated ? [10, 9, 8, 7, 9, 6][h % 6] : null;
  const comment = rated && h % 3 !== 1 ? TWIN_FEEDBACK_COMMENTS[h % TWIN_FEEDBACK_COMMENTS.length] : "";
  const reasons = demoIssueReasons();
  const issues = h % 4 === 1 || (rated && score <= 7)
    ? [reasons[h % reasons.length]].map(([id, label]) => ({ id, label, note: TWIN_ISSUE_NOTES[id] || "" }))
    : [];
  const stars = score == null ? null : Math.max(1, Math.min(5, Math.round(score / 2)));
  return { score, stars, comment, issues };
}
function learnerFeedbackCard(c, question, given) {
  const f = given || twinSessionFeedback(c);
  return `
        <article class="card sr-score sr-feedback">
          <h2 class="sr-h">Learner feedback</h2>
          ${f.stars == null ? `<p class="sr-fb-empty">No feedback left after this session.</p>` : `
          <p class="sr-fb-score"><span class="ts-stars ${starTone(f.stars)}" role="img" aria-label="${f.stars} of 5 stars">${tsStars(f.stars)}</span><b class="tabular">${f.stars}</b><span class="an-muted"> / 5 · ${esc(question)}</span></p>
          ${f.comment ? `<p class="sr-fb-quote">“${esc(f.comment)}”</p>` : ""}`}
          ${f.issues.length ? `
          <h3 class="sr-h sr-fb-issues-h">Issues reported</h3>
          <ul class="sr-fb-issues">
            ${f.issues.map((issue) => `<li><span class="badge badge--caution">${esc(issue.label)}</span>${issue.note ? `<span class="sr-fb-note">${esc(issue.note)}</span>` : ""}</li>`).join("")}
          </ul>` : ""}
        </article>`;
}
function twinFeedbackTags(c) {
  const f = twinSessionFeedback(c);
  const tone = f.stars == null ? "" : f.stars >= 5 ? "badge--success" : f.stars === 4 ? "badge--info" : "badge--caution";
  return `<span class="sess-tags">${f.stars == null ? `<span class="badge">No feedback</span>` : `<span class="badge ${tone}">Helpful ${f.stars}/5</span>`}${f.issues.length ? `<span class="badge badge--caution">${f.issues.length} issue reported</span>` : ""}</span>`;
}

function botDetailList(bot) {
  return `
    <ul class="rp-history">
      ${botConversations(bot).map((c, i) => `
        <li>
          <button type="button" data-action="twin-session-open" data-bot="${esc(bot.id)}" data-id="${esc(c.id)}">
            <span class="rp-avatar rp-avatar--${(i % 5) + 1}" aria-hidden="true">${esc(c.learner.charAt(0).toUpperCase())}</span>
            <span class="rp-history-body">
              <span class="rp-history-who">${esc(c.learner)}</span>
              <span class="rp-history-line"><b>${esc(c.learner)}</b> ${esc(c.q)}</span>
              <span class="rp-history-line"><b>Olga’s twin</b> ${esc(c.a)}</span>
              ${twinFeedbackTags(c)}
            </span>
          </button>
        </li>
      `).join("")}
    </ul>
  `;
}

// Assigned to: who has this twin agent, how long they can use it, and what you can do about it.
function botAssignedList(bot) {
  const emails = roleAssignedList(bot.id);
  const users = emails.map((e) => ROLE_USERS.find((u) => u.email === e)).filter(Boolean);
  if (!users.length) {
    return `
    <div class="bot-assigned-empty">
      <p class="card-title">Nobody has this agent yet</p>
      <p class="card-sub">Assign it to learners so they can talk to it.</p>
      <button class="btn btn--secondary btn--sm" type="button" data-action="role-assign-open" data-id="${esc(bot.id)}">${menuIcon("assign")}Assign</button>
    </div>`;
  }
  return `
    <ul class="bot-assigned">
      ${users.map((u) => {
        const i = ROLE_USERS.indexOf(u);
        return `
      <li class="bot-assigned-row">
        <span class="rp-avatar rp-avatar--${(i % 5) + 1}" aria-hidden="true">${esc(u.name.charAt(0))}</span>
        <span class="bot-assigned-text">
          <span class="bot-assigned-name">${esc(u.name)}</span>
          <span class="bot-assigned-meta">${esc(u.email)} · ${agentMinutes(bot.id, u.email)} min · Until ${esc(fmtUntil(agentUntil(bot.id, u.email)))}</span>
        </span>
        <span class="bot-assigned-actions">
          <button class="btn btn--secondary btn--sm" type="button" data-action="bot-unassign" data-bot="${esc(bot.id)}" data-id="${esc(u.email)}">Unassign</button>
          <button class="btn btn--secondary btn--sm" type="button" data-action="role-assign-open" data-id="${esc(bot.id)}">Edit</button>
        </span>
      </li>`;
      }).join("")}
    </ul>`;
}

function botReassignDialog() {
  const r = state.botReassign;
  const from = ROLE_USERS.find((u) => u.email === r.email);
  const taken = roleAssignedList(r.bot);
  const options = ROLE_USERS.filter((u) => !taken.includes(u.email));
  return `
    <dialog class="issue-dialog upsell-dialog" id="bot-reassign-dialog" aria-labelledby="bot-reassign-title">
      <div class="issue-card upsell-card upsell-card--end">
        <span class="confirm-tile tt-tile-neutral talk-end-ico" aria-hidden="true"><span class="confirm-tile-in">${menuIcon("assign")}</span></span>
        <h2 class="issue-title upsell-title" id="bot-reassign-title">Reassign from ${esc(from ? from.name : "this learner")}</h2>
        <p class="upsell-sub">Their ${agentMinutes(r.bot, r.email)} min and end date move to the learner you pick.</p>
        <div class="field bot-reassign-field">
          <label class="label" for="bot-reassign-to">Reassign to</label>
          <select class="input${r.to ? "" : " is-empty"}" id="bot-reassign-to" data-change="bot-reassign-pick">
            <option value=""${r.to ? "" : " selected"} disabled>Choose a learner</option>
            ${options.map((u) => `<option value="${esc(u.email)}"${r.to === u.email ? " selected" : ""}>${esc(u.name)}</option>`).join("")}
          </select>
        </div>
        <div class="upsell-actions talk-confirm-actions">
          <button class="btn btn--secondary" type="button" data-action="bot-reassign-cancel">Cancel</button>
          <button class="btn btn--strong" type="button" data-action="bot-reassign-yes"${r.to ? "" : " disabled"}>Reassign</button>
        </div>
      </div>
    </dialog>`;
}

function mountBotReassignDialog() {
  const dlg = document.getElementById("bot-reassign-dialog");
  if (!dlg) return;
  if (typeof dlg.showModal === "function" && !dlg.open) dlg.showModal();
  dlg.addEventListener("cancel", (ev) => { ev.preventDefault(); actions["bot-reassign-cancel"](); });
  dlg.addEventListener("click", (ev) => { if (ev.target === dlg) actions["bot-reassign-cancel"](); });
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
  const lines = [["learner", c.learner, c.q], ["twin", "My twin", c.a], ["learner", c.learner, "Thanks, that helps."]];
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
  s.conversations = Math.max(1, Math.round(bot.sessions * dateRange()[2]));
  const asked = [0.34, 0.22, 0.15].map((share) => Math.max(1, Math.round(s.conversations * share)));
  return `
    <div class="rp-detail-shell">
    <header class="create-bar">
      <button class="create-bar-back" type="button" data-action="bot-detail-back">${icon("back")} Back</button>
      <div class="create-bar-end">
        ${dateRangeSelect()}
        <button class="btn btn--strong btn--sm" type="button" data-action="${bot.id === TWIN_ALL.id ? "talk-open" : "twin-bot-calibrate"}" data-id="${esc(bot.id)}">${menuIcon("sliders")}Calibrate</button>
        <button class="btn btn--secondary btn--icon btn--sm rp-row-more" type="button" id="role-menu-${esc(bot.id)}" data-action="role-row-menu" data-id="${esc(bot.id)}" aria-label="More actions for ${esc(bot.title)}" aria-haspopup="menu" aria-expanded="${state.roleMenuId === bot.id}">
          <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="3.25" r="1.15" fill="currentColor"/><circle cx="8" cy="8" r="1.15" fill="currentColor"/><circle cx="8" cy="12.75" r="1.15" fill="currentColor"/></svg>
        </button>
      </div>
    </header>
    <div class="page page--library rp-detail-page">
      <div class="rp-detail-layout rp-detail-layout--bot">
        <article class="rp-detail rp-detail--wide">
          <div class="rp-detail-head">
            <h1 class="page-title">${esc(bot.title)}</h1>
          </div>
          <div class="rp-detail-main">
          <p class="overline rp-detail-kicker">What it does</p>
          <p class="rp-detail-scenario">${esc(bot.blurb)}</p>
          </div>
          <hr class="rp-detail-rule">
          <div class="rp-detail-scopeblock">
          ${builtFromBlock()}
          </div>
          ${(() => {
            const credit = botCredit(bot);
            return `
          <div class="rp-detail-credit rp-detail-side">
            ${(() => {
              const pct = credit.minutes ? Math.min(100, Math.round((credit.used / credit.minutes) * 100)) : 0;
              return `<div class="rp-credit-ring${pct >= 90 ? " is-low" : ""}" style="--used:${pct}%" role="img" aria-label="${pct}% of minutes used"><span class="tabular">${pct}%</span></div>`;
            })()}
            <div class="rp-credit-text">
              <p class="overline rp-detail-kicker">Usage credit</p>
              <p class="rp-detail-credit-value tabular">${credit.used} <span class="an-muted">of ${credit.minutes} min used</span></p>
              <p class="credit-row-note">${Math.max(0, credit.minutes - credit.used)} minutes left</p>
            </div>
          </div>`;
          })()}
        </article>
        <article class="rp-analytics">
          <h2 class="rp-analytics-title">Report</h2>
          <div class="rp-detail-stats rp-detail-stats--3 rp-detail-stats--grid">
            <div class="rp-stat rp-stat--sessions rp-stat--link">
              <div>
                <p class="overline">Sessions</p>
                <p class="rp-detail-stat tabular">${s.conversations}</p>
              </div>
              <button class="rp-stat-view" type="button" data-action="twin-bot-history" data-id="${esc(bot.id)}" aria-label="View session history">View <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg></button>
            </div>
            <div class="rp-stat rp-stat--review">
              <p class="overline">Help score</p>
              <p class="rp-detail-stat tabular">${Math.min(5, Number(botHelpScore(bot)) + botRangeShift() * 0.1).toFixed(1)} <span class="an-muted">/ 5</span></p>
            </div>
            <div class="rp-stat rp-stat--score">
              <p class="overline">Avg response time</p>
              <p class="rp-detail-stat tabular">${(1.2 + ((bot.sessions % 9) / 10) - botRangeShift() * 0.1).toFixed(1)} <span class="an-muted">s</span></p>
            </div>
            <div class="rp-stat rp-stat--neutral">
              <p class="overline">Avg session length</p>
              <p class="rp-detail-stat tabular">${(3.4 + ((bot.sessions % 11) / 10) + botRangeShift() * 0.2).toFixed(1)} <span class="an-muted">min</span></p>
            </div>
          </div>
        </article>
        <article class="rp-analytics">
          <h2 class="rp-analytics-title">${dateRange()[0] === "7" ? "Conversations this week" : "Conversations by week"}</h2>
          <div class="rp-report">
            ${roleBars(bot, true, botSeries(bot, s.conversations))}
          </div>
          <ul class="bot-asked rp-report-list">
            ${(() => {
              const total = Math.max(1, Math.round(s.conversations * 0.14));
              const open = Math.max(0, total - state.reportResolved.filter((k) => k.startsWith(bot.id + ":")).length);
              const common = TWIN_REPORT_REASONS[(bot.sessions + total) % TWIN_REPORT_REASONS.length];
              const go = `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
              return `<li><span>Total reports</span><button type="button" class="bot-asked-link tabular" data-action="bot-reports-open" data-id="${esc(bot.id)}" data-total="${total}" aria-label="See the ${open} reports">${open}${go}</button></li>
            <li><span>Most common report</span><b>${esc(common)}</b></li>`;
            })()}
          </ul>
        </article>
        <article class="rp-analytics rp-most-asked">
          <h2 class="rp-analytics-title">Questions your twin couldn’t answer</h2>
          <ul class="bot-asked">
            ${qa.map(([q], i) => {
              const id = bot.id + "-q" + i;
              const who = ROLE_USERS[i % 5];
              return `<li><span>${esc(q)}</span>${state.respondDone.includes(id)
                ? `<span class="badge badge--success">Responded</span>`
                : `<button class="btn btn--secondary btn--sm" type="button" data-action="respond-open" data-id="${esc(id)}" data-q="${esc(q)}" data-who="${esc(who.name)}" data-email="${esc(who.email)}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${STAT_ICON_PATHS.Sessions}</svg> Respond</button>`}</li>`;
            }).join("")}
          </ul>
        </article>
        <article class="rp-analytics rp-conversations">
          <div class="seg bot-seg" role="group" aria-label="Calibration, sessions or assigned users">
            ${[["calibration", "Calibration"], ["sessions", "Sessions"], ["assigned", "Assigned to"]].map(([id, label]) => `<button type="button" data-action="bot-detail-tab" data-id="${id}" aria-pressed="${state.botDetailTab === id}">${label}</button>`).join("")}
          </div>
          ${state.botDetailTab === "sessions" ? botDetailList(bot) : state.botDetailTab === "assigned" ? botAssignedList(bot) : botCalibrationList()}
        </article>
      </div>
      ${state.roleMenuId === bot.id ? twinBotMenu(bot) : ""}
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
    if (!state.customRoles.some((mine) => mine.id === task.id)) return false;
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
    list = draftCards ? `<div class="rp-grid">${draftCards}</div>${openDraft ? roleDraftMenu(openDraft) : ""}` : q ? emptyNote("") : `
      <div class="rp-empty">
        <span class="rp-empty-icon" aria-hidden="true">${icon("role")}</span>
        <p>No roleplay created recently</p>
        <button class="btn btn--secondary" type="button" data-action="role-new">Create roleplay</button>
      </div>`;
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
        <h1 class="lib-title"><span class="lib-mark">${icon("role")}</span>Scenarios</h1>
        <div class="lib-tools">
          <label class="lib-search">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/><path d="M20 20l-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            <input id="role-search" type="search" placeholder="Search..." value="${esc(state.roleQuery)}" autocomplete="off">
          </label>
          <button class="btn btn--strong" type="button" data-action="role-new">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3.5v9M3.5 8h9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            New
          </button>
        </div>
      </header>
      <div class="rp-created-head">
        <h2 class="page-title">Created roleplays</h2>
        <div class="rp-created-bar">
          <div class="seg" role="group" aria-label="Status">
            ${filters.map(([id, label]) => `<button type="button" data-action="role-filter" data-id="${id}" aria-pressed="${state.roleFilter === id}">${label}</button>`).join("")}
          </div>
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
    if (!alive()) return;
    if (i >= steps.length) { toast("Drafted from your prompt. Check each step."); return; }
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
    look: PERSONAS.some((item) => item.id === draft.look) || DOC_PERSONAS.some((item) => item.id === draft.look) ? draft.look : persona.id,
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
    success: draft.success || "",
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
  const docIndex = DOC_PERSONAS.findIndex((item) => item.id === id);
  if (docIndex >= 0) return docFaceOf(DOC_PERSONAS[docIndex], docIndex);
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
    minutes: 60,
    creditSaved: false,
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
  "listing-pitch": { rec: ["Listing presentation: live walkthrough", "Roleplay: the seller who wants too much"], mat: ["One-page listing plan.pdf", "Comparable sales template.docx"] },
  "fee-negotiation": { rec: ["Commission conversations: Q&A"], mat: ["Fee scripts.pdf", "What the fee covers.pdf"] },
  "cold-calling": { rec: ["Cold calling: 20 calls in one hour", "Voicemail and text follow-up"], mat: ["Opening line cheat sheet.pdf", "Comparable sales one-pager.pdf"] },
  "investor-yield": { rec: ["Yield and ROI for investors: masterclass"], mat: ["Gross vs net yield calculator.xlsx", "Worst, average, best case template.pdf", "Service charge guide.pdf"] },
  "deposit-handover": { rec: ["After the deposit: the milestone plan"], mat: ["Payment milestone checklist.pdf", "Snagging checklist.docx", "Handover day plan.pdf"] },
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
          <h2 class="confirm-title" id="bot-know-title">Source matches from your knowledge</h2>
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

let botKnowTimer = 0;
// Starting points drawn from what Olga has already connected: her course recordings and her follow-up habits.
function botTeeSuggestions() {
  const course = (state.samples.find((item) => item.group === "lecture" && item.kept) || {}).title || "Course";
  return [
    { label: "Post class 1:1", text: "A twin that does the post-class 1:1 for me: recaps what the class covered and answers what each learner was unsure about, in my voice." },
    { label: `${course} doubt clearance`, text: `A twin that clears doubts about the ${course}, answering from its recording and slides the way I would in class.` },
    { label: "New agent bootcamp Q&A", text: "A twin that answers a new agent’s questions during the bootcamp: how we qualify leads, the scripts we use and the tools they log into." }
  ];
}

// A short name for the use case, taken from the first clause of what Olga typed.
function botAskName(prompt) {
  const picked = botTeeSuggestions().find((item) => item.text === (prompt || "").trim());
  if (picked) return picked.label;
  const clause = (prompt || "").trim().split(/[.\n,;:]/)[0].replace(/^(a|an|the)\s+twin\s+(that|which|to)\s+/i, "").trim();
  const words = clause.split(/\s+/).filter(Boolean);
  let name = "";
  for (const w of words) {
    if ((name + " " + w).trim().length > 36) break;
    name = (name + " " + w).trim();
  }
  name = name || "New use case";
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function botTeeCard() {
  return `
    <section class="tee-card" aria-label="Ask TeeTee">
      <canvas class="tee-waves" aria-hidden="true"></canvas>
      <div class="tee-copy">
        <p class="tee-title">What type of twin agent to build</p>
        <div class="tee-suggestions">
          ${botTeeSuggestions().map((item, i) => `
            <button class="tee-suggest" type="button" data-action="bot-suggest" data-id="${i}" aria-pressed="${state.botAsk === item.text}">
              ${sparklesIcon()} ${esc(item.label)}
            </button>
          `).join("")}
        </div>
      </div>
      <form class="home-ask tee-ask-box" id="bot-ask-form">
        <label class="sr" for="bot-ask">Tell TeeTee what the twin agent should help with</label>
        <textarea class="home-ask-input" id="bot-ask" rows="1" placeholder="Tell me what the twin agent should help with">${esc(state.botAsk)}</textarea>
        <div class="home-ask-actions">
          ${voicePillButton("bot-ask", "bot-mic")}
          <button class="btn btn--strong home-ask-submit" type="submit" aria-label="Create from this">
            <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 13V3M4 7l4-4 4 4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
      </form>
    </section>
  `;
}

function botStepCourse(d) {
  const editing = !!state.botEditId;
  const fields = `
        ${(() => {
          const loading = d.knowState === "loading";
          const desc = "Your website, social profiles and everything in your knowledge base.";
          return `
          <div class="bot-know-card">
            <span class="bot-know-text"><span class="rps-voice-name">Source matches from your knowledge</span><span class="rps-voice-desc">${desc}</span></span>
            ${loading ? `<span class="bot-know-loader" role="status" aria-label="Matching your knowledge">${miniLatticeLoader()}</span>` : `
            ${d.knowState === "done" || editing ? `<button class="bot-know-match" type="button" data-action="bot-know-open" aria-haspopup="dialog">15 sources match</button>` : ""}
            <button class="rps-switch" type="button" role="switch" aria-checked="${d.allKnowledge !== false}" aria-label="All your knowledge" data-action="bot-setting-toggle" data-key="allKnowledge"><span></span></button>`}
          </div>
        `;
        })()}
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
  `;
  if (editing) {
    return `
    <article class="card">
      <div class="card-body role-card bot-card">
        <h1 class="page-title role-card-title">Edit twin agent for a specific use case</h1>
        ${fields}
      </div>
    </article>
  `;
  }
  const open = state.botManual === true;
  return `
    <article class="card card--flat">
      <div class="card-body role-card role-card--tee">
        ${botTeeCard()}
      </div>
    </article>
    <article class="card">
      <div class="card-body role-card role-card--details bot-card">
        <section class="role-manual${open ? " is-open" : ""}">
          <button class="role-manual-head" type="button" data-action="bot-manual-toggle" aria-expanded="${open}" aria-controls="bot-manual-body">
            <span class="role-manual-text">
              <span class="role-manual-title">${esc(d.askName || "New use case")}</span>
              <span class="role-manual-sub">Knowledge, course materials and settings</span>
            </span>
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4.5 6.5 8 10l3.5-3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          ${open ? `<div class="role-manual-body" id="bot-manual-body">${fields}</div>` : ""}
        </section>
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
      <article class="card bot-preview bot-preview--wait">
        <div class="letter-glitch" data-letter-glitch aria-hidden="true"></div>
        <div class="bot-proc bot-proc--wait" role="status">
          <div class="bot-proc-panel">
            <div class="bot-proc-row"><p class="bot-proc-text" id="bot-proc-label">${esc(botProcStage(d))}</p><span class="bot-proc-pct tabular" id="bot-proc-pct">${Math.round(d.procPct)}%</span></div>
            <div class="bot-proc-track"><span id="bot-proc-bar" style="width:${Math.round(d.procPct)}%"></span></div>
          </div>
        </div>
      </article>
    `;
  }
  const linked = d.revealStep >= 5;
  // Agents opened already finished (or left mid-reveal) have their link from the start.
  if (linked && d.linkPhase === "idle" && !d.linkRevealed) { d.linkRevealed = true; d.linkPhase = "done"; }
  const cls = (n) => `bot-reveal${d.revealStep >= n ? " is-in" : ""}`;
  return `
    <article class="card bot-preview">
      <div class="bot-proc is-done ${cls(1)}" role="status">
        <span class="bot-proc-check" aria-hidden="true">${roleCheckIcon()}</span>
        <p class="bot-proc-text"><strong>Awesome!</strong> Your Agent is ready with all required knowledge processed.</p>
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
          <button class="btn ${d.calDone >= 1 ? "btn--secondary" : "btn--strong"}" type="button" data-action="bot-cal-open" ${d.calOpen ? "hidden" : ""}><svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"/></svg> ${d.calDone >= 1 ? "Calibrate again" : "Start calibration"}</button>
          <button class="btn ${d.calDone >= 1 ? "btn--primary" : "btn--secondary"}" type="button" data-action="bot-assign-open" ${d.name.trim() && d.linkRevealed ? "" : "disabled"}>${menuIcon("assign")} Assign to learners</button>
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
  if (!d || state.botStep !== 2 || d.revealStep < 5 || d.linkRevealed) { render(); return; }
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

// Before the learner link exists, Olga gives the agent its minutes. Saving them is what makes the link.
const BOT_CREDIT_PRESETS = [30, 60, 120, 240];

// Olga's minute pool: 1000 in all, 800 already given to her agents, and whatever she assigns on a new one comes off the rest.
const CREDIT_TOTAL = 1000;
const CREDIT_ASSIGNED = 800;

function creditLeft() {
  const spent = state.customBots.reduce((sum, bot) => sum + (Number(bot.minutes) || 0), 0);
  return Math.max(0, CREDIT_TOTAL - CREDIT_ASSIGNED - spent);
}

// Minutes each agent has been given and how many learners have used. The first five agents add up to the 800 assigned and 416 used in the credit popup; the use-case twins listed after them draw on the same pool.
const BOT_CREDIT = {
  "olga-twin": { minutes: 150, used: 46 },
  "offplan-process": { minutes: 300, used: 190 },
  "quiet-clients": { minutes: 200, used: 100 },
  "objection-handling": { minutes: 150, used: 80 },
  "listing-pitch": { minutes: 100, used: 38 },
  "fee-negotiation": { minutes: 60, used: 21 },
  "cold-calling": { minutes: 90, used: 44 },
  "investor-yield": { minutes: 80, used: 26 },
  "deposit-handover": { minutes: 60, used: 17 }
};

// What a twin agent may answer from: one course plus the files and conversation samples behind it. Anything outside goes to Olga as an unanswered TwinQnA.
const BUILT_FROM_FILES = [
  "Session 2 Objection Handling Workbook",
  "Olga – calibration feedback (02.11.2026)",
  "Messaging Playbook 2.0",
  "How to Deal with Clients Rejections? And Still close them!",
  "Lesson 5",
  "Role Play session. 31.08.2026 Jacob and KJ. Its too expensive",
  "Arina Zoom session 3 19.10.2024",
  "Coaching Session: My Client Ghosted Me — What’s the Right Move in Dubai Real Estate",
  "Dubai Agents, If Client Say “I’ll Wait”? Answer This Before You Lose the Deal",
  "Lesson 7",
  "30 min Session Olga and Karina 23.09.2026",
  "How to Reactivate Old Off-plan Leads - Part 1",
  "Lesson 6 Authority - how to avoid I need to talk to.._",
  "Messaging playbook From First Message to Dead lead",
  "Online Training Session - Role Play (client x agent) - Part 1",
  "Session 2 Objection Handling Slides"
];

const BUILT_FROM_DOC = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2"/><path d="M9 9h1"/><path d="M9 13h6"/><path d="M9 17h6"/></svg>';

function builtFromBlock() {
  const total = BUILT_FROM_FILES.length;
  return `<p class="overline rp-detail-kicker">Build this agent from</p>
  <button class="bf-item bf-open" type="button" data-action="built-from-open" aria-haspopup="dialog" aria-label="View all ${total} files">
    <span class="bf-ico">${BUILT_FROM_DOC}</span>
    <span class="bf-name tabular">${total} files</span>
    <span class="bf-viewall">View all<svg class="bf-arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
  </button>`;
}

function builtFromPanel() {
  const total = BUILT_FROM_FILES.length;
  return `
    <button class="scrim" type="button" data-action="built-from-close" aria-label="Close panel"></button>
    <aside class="sidepanel" role="dialog" aria-modal="true" aria-labelledby="bf-title">
      <div class="sidepanel-head">
        <div>
          <h2 class="card-title" id="bf-title">Built from</h2>
          <p class="card-sub tabular">${total} files</p>
        </div>
        <button class="btn btn--ghost btn--icon btn--sm" id="bf-close" type="button" data-action="built-from-close" aria-label="Close">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.5"/></svg>
        </button>
      </div>
      <ul class="sidepanel-body bf-list bf-list--all">
        ${BUILT_FROM_FILES.map((name) => `<li class="bf-item"><span class="bf-ico">${BUILT_FROM_DOC}</span><span class="bf-name">${esc(name)}</span></li>`).join("")}
      </ul>
    </aside>
  `;
}

function botScope(bot) {
  return { course: "Objections & follow-up course (Nov 2026 Batch)", files: 5, samples: 60 };
}

function botCredit(bot) {
  const known = BOT_CREDIT[bot.id];
  if (known) return known;
  const minutes = Number(bot.minutes) || 0;
  return { minutes, used: 0 };
}

function creditPill() {
  const left = creditLeft();
  const assigned = CREDIT_TOTAL - left;
  const pct = Math.round((assigned / CREDIT_TOTAL) * 100);
  const tone = left === 0 ? " is-out" : assigned >= CREDIT_TOTAL * 0.9 ? " is-low" : "";
  const chev = `<svg class="credit-pill-chev" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M3 4.5l3 3 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  return `<div class="credit-wrap">
    <button class="credit-pill${tone}" type="button" data-action="credit-open" aria-haspopup="dialog" aria-expanded="${state.creditOpen}" title="See your minutes">
      <span class="credit-pill-bar" aria-hidden="true"><span style="width:${pct}%"></span></span>
      <span class="credit-pill-text"><b class="tabular">${left}</b> min left</span>${chev}
    </button>
    ${state.creditOpen ? creditPopover(left, assigned) : ""}
  </div>`;
}

// Minutes popover: what was bought, how much is assigned to agents, how much learners have used.
const CREDIT_USED_SHARE = 0.52;

function creditPopover(left, assigned) {
  const used = Math.round(assigned * CREDIT_USED_SHARE);
  const idle = assigned - used;
  const w = (n) => `${(n / CREDIT_TOTAL) * 100}%`;
  const low = left <= CREDIT_TOTAL * 0.1;
  return `
    <div class="credit-pop" role="dialog" aria-label="Minutes">
      <p class="credit-pop-label">Minutes</p>
      <p class="credit-pop-big"><b class="tabular">${left}</b><span>to assign</span></p>
      <p class="credit-pop-sub tabular">of ${CREDIT_TOTAL} purchased</p>
      <div class="credit-seg" role="img" aria-label="${used} used by learners, ${idle} assigned and not yet used, ${left} still to assign">
        <span class="is-used" style="width:${w(used)}"></span><span class="is-idle" style="width:${w(idle)}"></span>
      </div>
      <ul class="credit-legend">
        <li><i class="is-used"></i><span>Used by learners</span><b class="tabular">${used}</b></li>
        <li><i class="is-idle"></i><span>Assigned, not used yet</span><b class="tabular">${idle}</b></li>
        <li><i class="is-left"></i><span>Still to assign</span><b class="tabular">${left}</b></li>
      </ul>
      ${low ? `<p class="credit-pop-warn">Running low. Buy more before you assign again.</p>` : ""}
      <button class="btn btn--strong credit-pop-cta" type="button" data-action="credit-buy">Buy more minutes</button>
    </div>`;
}

document.addEventListener("keydown", (ev) => {
  if (ev.key === "Escape" && state.creditOpen) actions["credit-close"]();
});

function botCreditField(d) {
  return `
        <div class="field role-field">
          <label for="bot-minutes">Assign minutes</label>
          <div class="bot-link">
            <div class="bot-credit-input">
              <input class="input" id="bot-minutes" type="number" inputmode="numeric" min="5" step="5" value="${d.minutes || ""}" placeholder="60" aria-describedby="bot-minutes-hint">
              <span class="bot-credit-unit" aria-hidden="true">min</span>
            </div>
            <button class="btn btn--strong bot-copy" type="button" data-action="bot-credit-save">Save</button>
          </div>
          <div class="bot-credit-presets" role="group" aria-label="Quick amounts">
            ${BOT_CREDIT_PRESETS.map((n) => `<button type="button" class="bot-credit-chip" data-action="bot-credit-pick" data-id="${n}" aria-pressed="${Number(d.minutes) === n}">${n} min</button>`).join("")}
          </div>
          <p class="hint hint-below" id="bot-minutes-hint">Learners share these minutes on this agent. You have ${creditLeft()} minutes left to assign. Saving creates the learner link.</p>
        </div>
  `;
}

function botLinkField(d) {
  const linked = d.revealStep >= 5;
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

// ===== Letter glitch: a grid of letters that flicker, drift in waves and react to the cursor (a Canvas 2D take on React Bits' LetterGlitch) =====
// Sits behind the progress while a bot is being processed. The amount of glitching rises with the progress.
let lgInstance = null;
function letterGlitch(host, opts) {
  const o = Object.assign({
    chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789",
    font: "ui-monospace, 'SF Mono', Menlo, Consolas, monospace",
    size: 15, spacing: 0.6, density: 0.92, baseOpacity: 0.3, glitchAmount: 0.5, speed: 1, flow: 0.5,
    radius: 120, centerFade: 0.6, base: "#1c1b1b", colors: ["#FF5A00", "#2A63C4", "#1c1b1b"]
  }, opts || {});
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canvas = document.createElement("canvas");
  canvas.className = "letter-glitch-canvas";
  canvas.setAttribute("aria-hidden", "true");
  host.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  if (!ctx) return { destroy() {}, set() {} };
  const chars = Array.from(o.chars);
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const smoother = (t) => { const x = clamp(t, 0, 1); return x * x * x * (x * (x * 6 - 15) + 10); };
  const hash = (x, y) => { const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453; return s - Math.floor(s); };
  const noise = (x, y) => {
    const ix = Math.floor(x), iy = Math.floor(y), fx = x - ix, fy = y - iy;
    const wx = fx * fx * (3 - 2 * fx), wy = fy * fy * (3 - 2 * fy);
    const a = hash(ix, iy), b = hash(ix + 1, iy), c = hash(ix, iy + 1), d = hash(ix + 1, iy + 1);
    return (a + (b - a) * wx) + ((c + (d - c) * wx) - (a + (b - a) * wx)) * wy;
  };
  let w = 1, h = 1, ratio = 1, cols = 0, rows = 0, cw = 0, ch = 0, n = 0;
  let cell = [];
  const act = new Set();
  let clock = 0, time = 0, raf = 0, last = 0, alive = true, carry = 0, restCarry = 0;
  const ptr = { x: 0, y: 0, sx: 0, sy: 0, inside: false, presence: 0, stir: 0 };
  const walkers = [];
  const rnd = () => chars[(Math.random() * chars.length) | 0];
  const colorAt = () => (Math.random() * o.colors.length) | 0;

  function ignite(i, strength, hold, fade, color, after) {
    const c = cell[i];
    if (!c) return;
    c.peak = Math.max(c.heat > 0.1 ? c.peak : 0, strength);
    c.hold = Math.max(c.hold, hold);
    c.fade = Math.max(c.fade, fade);
    if (c.heat < 0.15) c.color = color;
    c.delay = act.has(i) ? Math.min(c.delay, after || 0) : (after || 0);
    act.add(i);
  }
  function build() {
    const rect = host.getBoundingClientRect();
    w = Math.max(1, rect.width); h = Math.max(1, rect.height);
    ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(w * ratio); canvas.height = Math.round(h * ratio);
    canvas.style.width = w + "px"; canvas.style.height = h + "px";
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.font = o.size + "px " + o.font;
    cw = Math.ceil(ctx.measureText("M").width + o.size * o.spacing);
    ch = Math.ceil(o.size * (0.95 + o.spacing));
    cols = Math.ceil(w / cw) + 1; rows = Math.ceil(h / ch) + 1; n = cols * rows;
    cell = [];
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
      const dx = (c + 0.5) / cols - 0.5, dy = (r + 0.5) / rows - 0.5;
      cell.push({
        ch: rnd(), luck: Math.random(), level: 0.55 + 0.45 * Math.random(), heat: 0, peak: 0, hold: 0, fade: 0, delay: 0, wait: 0, color: 0,
        born: reduce ? -1 : 1.4 * (0.3 * Math.min(1, Math.hypot(dx, dy * 0.8) * 1.6) + 0.7 * Math.pow(Math.random(), 1.3))
      });
    }
    act.clear();
  }
  const cellAt = (x, y) => { const c = Math.floor(x / cw), r = Math.floor(y / ch); return c < 0 || r < 0 || c >= cols || r >= rows ? -1 : r * cols + c; };

  function tear(x, y) {
    const i0 = cellAt(x, y);
    if (i0 < 0) return;
    const r0 = Math.floor(i0 / cols);
    for (let dr = -2; dr <= 2; dr++) {
      const r = r0 + dr;
      if (r < 0 || r >= rows) continue;
      const weight = 1 - Math.abs(dr) / 3;
      if (dr !== 0 && Math.random() > 0.3 + 0.6 * weight) continue;
      const color = colorAt(), c0 = Math.floor(x / cw);
      [-1, 1].forEach((dir) => walkers.push({ r, c: c0, dir, left: Math.round(cols * (0.12 + 0.5 * weight * (0.4 + 0.6 * Math.random()))), color, after: Math.abs(dr) * 0.035 + Math.random() * 0.03, carry: 0 }));
    }
    ignite(i0, 1, 0.08, 0.8, colorAt(), 0);
  }
  function stepWalkers(dt) {
    for (let k = walkers.length - 1; k >= 0; k--) {
      const wk = walkers[k];
      if (wk.after > 0) { wk.after -= dt; continue; }
      wk.carry += dt * 90;
      while (wk.carry >= 1 && wk.left > 0) {
        wk.carry -= 1; wk.left -= 1; wk.c += wk.dir;
        if (wk.c < 0 || wk.c >= cols) { wk.left = 0; break; }
        ignite(wk.r * cols + wk.c, 0.6 + 0.4 * Math.random(), 0.03 + Math.random() * 0.05, 0.5, wk.color, 0);
      }
      if (wk.left <= 0) walkers.splice(k, 1);
    }
  }

  function update(dt) {
    clock += dt;
    if (!reduce) time += dt * o.speed;
    const tempo = Math.max(o.speed, 0.2);
    if (!reduce && o.speed > 0) {
      restCarry += n * 0.2 * o.speed * dt;
      let changes = Math.min(n, restCarry | 0); restCarry -= changes;
      while (changes-- > 0) { const i = (Math.random() * n) | 0; if (!act.has(i)) cell[i].ch = rnd(); }
      carry += n * Math.pow(o.glitchAmount, 1.6) * 0.1 * o.speed * dt;
      let ev = Math.min(n, carry | 0); carry -= ev;
      while (ev-- > 0) {
        const i = (Math.random() * n) | 0, color = colorAt(), s = 0.45 + 0.55 * Math.random();
        const hold = (0.04 + Math.random() * 0.26) / tempo, fade = (0.45 + Math.random() * 0.6) / tempo;
        if (Math.random() < 0.24) {
          const c = i % cols, len = Math.min(cols - c, 2 + ((Math.random() * 7) | 0));
          for (let k = 0; k < len; k++) ignite(i + k, s, hold, fade, color, k * 0.028 / tempo);
        } else ignite(i, s, hold, fade, color, 0);
      }
    }
    // cursor
    const goal = ptr.inside && !reduce ? 1 : 0;
    ptr.presence += (goal - ptr.presence) * (1 - Math.exp(-dt / 0.25));
    const px = ptr.sx, py = ptr.sy, f = 1 - Math.exp(-dt / 0.07);
    ptr.sx += (ptr.x - ptr.sx) * f; ptr.sy += (ptr.y - ptr.sy) * f;
    ptr.stir += (clamp(Math.hypot(ptr.sx - px, ptr.sy - py) / dt / 1400, 0, 1) - ptr.stir) * (1 - Math.exp(-dt / 0.12));
    if (ptr.presence > 0.02) {
      const R = o.radius, cells = (Math.PI * R * R) / (cw * ch);
      let sparks = Math.min(160, (cells * ptr.presence * (0.15 + 4 * ptr.stir) * dt) + (Math.random() < ((cells * ptr.presence * (0.15 + 4 * ptr.stir) * dt) % 1) ? 1 : 0)) | 0;
      while (sparks-- > 0) {
        const a = Math.random() * Math.PI * 2, d = Math.sqrt(Math.random());
        if (Math.random() > Math.pow(1 - d * d, 2)) continue;
        const i = cellAt(ptr.sx + Math.cos(a) * d * R, ptr.sy + Math.sin(a) * d * R);
        if (i >= 0) { cell[i].ch = rnd(); ignite(i, (0.3 + 0.7 * Math.random()) * (0.45 + 0.55 * ptr.stir), 0.02 + Math.random() * 0.08, 0.35 + Math.random() * 0.4, colorAt(), 0); }
      }
    }
    stepWalkers(dt);
    const attack = 1 - Math.exp(-dt / 0.05);
    act.forEach((i) => {
      const c = cell[i];
      if (c.delay > 0) { c.delay -= dt; return; }
      if (c.hold > 0) { c.hold -= dt; c.heat += (c.peak - c.heat) * attack; }
      else c.heat *= Math.exp((-dt * 4) / Math.max(c.fade, 0.05));
      if (c.heat < 0.012 && c.hold <= 0) { c.heat = 0; c.peak = 0; c.fade = 0; act.delete(i); return; }
      c.wait -= dt;
      if (c.wait <= 0) { c.ch = rnd(); c.wait = ((0.045 + 0.45 * (1 - c.heat) * (1 - c.heat)) * (0.6 + 0.8 * Math.random())) / tempo; }
    });
  }
  function draw() {
    ctx.clearRect(0, 0, w, h);
    ctx.font = o.size + "px " + o.font;
    ctx.textAlign = "center"; ctx.textBaseline = "middle";
    const soft = Math.min(w, h) * 0.24;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const i = r * cols + c, k = cell[i];
        const x = c * cw + cw / 2, y = r * ch + ch / 2;
        let mask = 1;
        if (o.centerFade > 0) {
          const rx = Math.max(Math.abs(x - w / 2) - w * 0.3, 0), ry = Math.max(Math.abs(y - h / 2) - h * 0.24, 0);
          mask = 1 - o.centerFade * (1 - smoother(Math.hypot(rx, ry) / soft));
        }
        if (mask < 0.02) continue;
        const appear = k.born >= 0 ? smoother((clock - k.born) / 0.35) : 1;
        let rest = k.luck < o.density ? k.level * o.baseOpacity * appear * (0.8 + 0.2 * Math.sin(time * (0.5 + 1.2 * hash(c, r)) + hash(r, c) * 40)) : 0;
        if (o.flow > 0 && rest > 0) {
          const s = Math.max(w, h) * 0.32;
          const nz = 0.65 * noise(x / s + time * 0.05, y / s + time * 0.03) + 0.35 * noise(x / s * 2.03 - time * 0.04, y / s * 2.03 + time * 0.06);
          const t = clamp((nz - 0.25) / 0.55, 0, 1);
          rest *= 1 + (0.1 + 1.7 * (t * t * (3 - 2 * t)) - 1) * o.flow;
        }
        if (ptr.presence > 0.02 && k.luck < o.density) {
          const dd = Math.hypot(x - ptr.sx, y - ptr.sy) / o.radius, fq = clamp(1 - dd * dd, 0, 1);
          rest = rest + (Math.max(rest, Math.min(1, o.baseOpacity * 3.5)) - rest) * fq * fq * ptr.presence;
        }
        const heat = k.heat * (appear >= 1 ? 1 : appear);
        if (rest < 0.01 && heat < 0.01) continue;
        if (heat > 0.01) {
          ctx.globalAlpha = clamp(heat, 0, 1) * mask; ctx.fillStyle = o.colors[k.color] || o.colors[0];
          ctx.fillText(k.ch, x, y);
        }
        if (rest > 0.01) {
          ctx.globalAlpha = clamp(rest, 0, 1) * (1 - heat) * mask; ctx.fillStyle = o.base;
          ctx.fillText(k.ch, x, y);
        }
      }
    }
    ctx.globalAlpha = 1;
  }
  function frame(now) {
    raf = 0;
    if (!alive) return;
    if (!host.isConnected) { destroy(); return; }
    if (document.hidden) { last = 0; raf = requestAnimationFrame(frame); return; }
    const dt = last ? clamp((now - last) / 1000, 0.0005, 0.05) : 1 / 60;
    last = now;
    update(dt);
    draw();
    if (!reduce || clock < 0.6) raf = requestAnimationFrame(frame);
  }
  function locate(e) {
    const r = host.getBoundingClientRect();
    ptr.x = e.clientX - r.left; ptr.y = e.clientY - r.top;
    ptr.inside = ptr.x >= 0 && ptr.y >= 0 && ptr.x <= r.width && ptr.y <= r.height;
    if (ptr.presence < 0.02) { ptr.sx = ptr.x; ptr.sy = ptr.y; }
  }
  const onMove = (e) => locate(e);
  const onDown = (e) => { locate(e); if (ptr.inside && !reduce) tear(ptr.x, ptr.y); };
  const onLeave = () => { ptr.inside = false; };
  window.addEventListener("pointermove", onMove, { passive: true });
  window.addEventListener("pointerdown", onDown, { passive: true });
  document.documentElement.addEventListener("pointerleave", onLeave);
  const ro = new ResizeObserver(() => { build(); });
  ro.observe(host);
  build();
  raf = requestAnimationFrame(frame);
  function destroy() {
    alive = false;
    cancelAnimationFrame(raf);
    ro.disconnect();
    window.removeEventListener("pointermove", onMove);
    window.removeEventListener("pointerdown", onDown);
    document.documentElement.removeEventListener("pointerleave", onLeave);
    canvas.remove();
  }
  return { destroy, set(next) { Object.assign(o, next); } };
}

// Starts the glitch behind the processing card, and removes it when that card is gone.
function mountLetterGlitch() {
  const host = document.querySelector("[data-letter-glitch]");
  if (lgInstance && lgInstance.host === host) return;
  if (lgInstance) { lgInstance.destroy(); lgInstance = null; }
  if (!host) return;
  const css = getComputedStyle(document.documentElement);
  const tok = (name, fallback) => css.getPropertyValue(name).trim() || fallback;
  const d = state.botDraft;
  lgInstance = letterGlitch(host, {
    base: tok("--tt-text-primary", "#1c1b1b"),
    colors: [tok("--tt-primary", "#FF5A00"), tok("--tt-info", "#2A63C4"), tok("--tt-text-primary", "#1c1b1b")],
    glitchAmount: 0.35 + 0.55 * ((d && d.procPct) || 0) / 100
  });
  lgInstance.host = host;
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
      if (lgInstance) lgInstance.set({ glitchAmount: 0.35 + 0.55 * d.procPct / 100 });
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
      const el = document.getElementById(id);
      // The moment Olga clicks into the field the typing stops and the full text is there to edit.
      if (el && document.activeElement === el) {
        d[field] = text;
        el.value = text;
        setTimeout(done, 250);
        return;
      }
      n = Math.min(text.length, n + 1);
      d[field] = text.slice(0, n);
      if (el) el.value = d[field];
      if (n < text.length) setTimeout(tick, 16);
      else setTimeout(done, 250);
    };
    tick();
  };
  const steps = [
    () => { show(1); setTimeout(steps[1], 450); },
    () => { show(2); setTimeout(steps[2], 550); },
    () => { show(3); type("bot-name", "name", d.askName || BOT_DRAFT_NAME, steps[3]); },
    () => { show(4); type("bot-description", "description", d.askDesc || BOT_DRAFT_DESC, steps[4]); },
    () => { show(5); d.linkPhase = "pending"; setTimeout(() => { if (alive()) botLinkStart(); }, 500); }
  ];
  setTimeout(() => { if (alive()) steps[0](); }, 200);
}

// If you leave Bot details mid-reveal, show everything finished when you come back.
function botFinishReveal(d) {
  if (!d || !d.procDone || d.revealStep >= 5) return;
  d.revealStep = 5;
  if (!d.name) d.name = d.askName || BOT_DRAFT_NAME;
  if (!d.description) d.description = d.askDesc || BOT_DRAFT_DESC;
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

// The roleplay builder: five steps, each its own tab. Next moves along; the last step holds the save actions.
const ROLE_TABS = [
  [1, "Scenarios", "The situation the agent walks into."],
  [2, "Agent role", "Who the agent plays on the call."],
  [3, "Learner", "Who the learner is and what they practise."],
  [4, "Rubric", "How the call is scored."],
  [5, "Success", "The outcome the conversation is working towards."]
];
// Tabler line icons for the five builder tabs (Scenarios, Agent role, Learner, Rubric, Success).
const ROLE_TAB_ICONS = {
  1: '<path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0"/>',
  2: '<path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/>',
  3: '<path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"/><path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"/>',
  4: '<path d="M3.5 5.5l1.5 1.5l2.5 -2.5"/><path d="M3.5 11.5l1.5 1.5l2.5 -2.5"/><path d="M3.5 17.5l1.5 1.5l2.5 -2.5"/><path d="M11 6l9 0"/><path d="M11 12l9 0"/><path d="M11 18l9 0"/>',
  5: '<path d="M8 21l8 0"/><path d="M12 17l0 4"/><path d="M7 4l10 0"/><path d="M17 4v8a5 5 0 0 1 -10 0v-8"/><path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>'
};
const ROLE_SUCCESS_DEFAULT = "A booked meeting or a dated follow-up, never a purchase.";

function roleTabBody(draft, tab) {
  if (tab === 1) {
    return `
        <h2 class="role-label"><label for="role-name">Roleplay name</label></h2>
        <input class="input" id="role-name" data-role-field="title" autocomplete="off" placeholder="Example: The wait-and-see investor" value="${esc(draft.title || "")}">
        <h2 class="role-label"><label for="role-scenario">Scenario</label></h2>
        <div class="role-opening-field role-textarea-field">
          <textarea class="input" id="role-scenario" data-role-field="scenario" rows="8" placeholder="Example: You are an off-plan buyer who wants to wait for prices to drop.">${esc(draft.scenario)}</textarea>
          <button class="role-opening-gen" type="button" data-action="role-generate-scenario" aria-label="Generate from recent activity" title="Generate from recent activity">${sparklesIcon()}</button>
        </div>
        <h2 class="role-label">What’s really going on</h2>
        <label class="sr" for="role-hidden">What’s really going on</label>
        <textarea class="input" id="role-hidden" data-role-field="hidden" rows="4" placeholder="Example: You are not scared of the market. You are scared of making a mistake with your family’s savings.">${esc(draft.hidden)}</textarea>
        `;
  }
  if (tab === 2) {
    return `
        ${rolePersonaPicker(draft)}
        <h2 class="role-label"><label for="role-opening">Opening line</label></h2>
        <div class="role-opening-field">
          <input class="input" id="role-opening" data-role-field="opening" autocomplete="off" placeholder="${esc(roleOpeningLine(draft))}" value="${esc(draft.opening || "")}">
          <button class="role-opening-gen" type="button" data-action="role-generate-opening" aria-label="Generate an opening line" title="Generate an opening line">${sparklesIcon()}</button>
        </div>
        <p class="hint hint-below">The first thing the client says. Leave it empty to use a line that fits the persona.</p>`;
  }
  if (tab === 3) {
    return `
        <h2 class="role-label">Learner role</h2>
        <label class="sr" for="role-learner">Learner role</label>
        <input class="input" id="role-learner" data-role-field="learnerRole" placeholder="Example: Off-plan agent on a first call" value="${esc(draft.learnerRole)}">
        ${roleGoalsField(draft)}`;
  }
  if (tab === 4) return roleRubricField(draft);
  return `
        <label class="sr" for="role-success">What success means</label>
        <textarea class="input" id="role-success" data-role-field="success" rows="3">${esc(draft.success || ROLE_SUCCESS_DEFAULT)}</textarea>
        <h2 class="role-label">How the call can end</h2>
        <label class="role-sublabel" for="role-end-agree">Agrees when</label>
        <textarea class="input" id="role-end-agree" data-role-field="endAgree" rows="2">${esc(draft.endAgree)}</textarea>
        <label class="role-sublabel" for="role-end-decline">Declines when</label>
        <textarea class="input" id="role-end-decline" data-role-field="endDecline" rows="2">${esc(draft.endDecline)}</textarea>`;
}

function pageRoleCreate() {
  const draft = state.roleDraft || freshRoleDraft();
  const tab = Math.min(ROLE_TABS.length, Math.max(1, state.roleTab || 1));
  const last = tab === ROLE_TABS.length;
  const [, tabTitle, tabSub] = ROLE_TABS[tab - 1];
  // The details card starts collapsed on a new roleplay; Next, a prompt or editing opens it.
  const open = state.roleManual === true;
  return `
    <div class="page page--create">
      <header class="create-bar">
        <button class="create-bar-back" type="button" data-action="role-exit">${icon("back")} Build roleplay</button>
        <button class="icon-btn" type="button" data-action="role-help" aria-label="Help" title="Help">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2l0 -3"/><path d="M15 15a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2l0 -3"/><path d="M4 15v-3a8 8 0 0 1 16 0v3"/></svg>
        </button>
      </header>
      <div class="create-scroll">
        <div class="create-column create-column--role">
          ${state.roleEditId ? "" : state.teeOpen ? `
          <div class="tee-panel">
            <article class="card card--flat">
              <div class="card-body role-card role-card--tee">
                ${teeCard(true)}
              </div>
            </article>
          </div>` : `
          <button class="tee-mini" type="button" data-action="tee-open" aria-label="Generate with AI">
            ${sparklesIcon()}<span class="tee-mini-text">${esc((state.roleAsk || "").trim() || "Generate with AI")}</span>
          </button>`}
          ${!open ? `
          <button class="role-manual-plain" type="button" data-action="role-manual-toggle" aria-expanded="false" aria-controls="role-manual-body">${menuIcon("edit")}<span>Create roleplay manually</span></button>` : `
          <article class="card">
            <div class="card-body role-card role-card--details">
              <section class="role-manual${open ? " is-open" : ""}">
                ${open ? `
                <div class="role-manual-body" id="role-manual-body">
                  <div class="seg role-steps" role="group" aria-label="Roleplay steps">
                    ${ROLE_TABS.map(([n, label]) => { const done = state.roleEditId || state.roleTabsDone.includes(n); return `<button type="button" data-action="role-tab" data-id="${n}" aria-pressed="${n === tab}"><span class="role-step-badge role-step-ico${done ? " is-done" : ""}" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ROLE_TAB_ICONS[n]}</svg></span>${esc(label)}${done ? `<span class="sr"> (done)</span>` : ""}</button>`; }).join("")}
                  </div>
                  <div class="role-step-head">
                    <div>
                      <h1 class="role-step-title">${tab === 5 ? "What success means" : esc(tabTitle)}</h1>
                      <p class="role-step-sub">${esc(tabSub)}</p>
                    </div>
                  </div>
                  <div class="role-step-body">${roleTabBody(draft, tab)}</div>
                  <div class="role-step-actions">
                    <button class="btn btn--ghost" type="button" data-action="${tab === 1 ? "role-back" : "role-tab-prev"}">${tab === 1 ? "Cancel" : "Back"}</button>
                    ${last ? `
                    <div class="role-step-actions-end">
                      <button class="btn btn--secondary" type="button" data-action="role-try">${sparklesIcon()} Try roleplay</button>
                      ${state.roleEditId ? "" : `<button class="btn btn--secondary" type="button" data-action="role-save-draft">Save as draft</button>`}
                      <button class="btn btn--primary" type="button" data-action="role-create">${roleCheckIcon()} ${state.roleEditId ? "Save roleplay" : "Create and publish"}</button>
                    </div>` : `
                    <button class="btn btn--strong" type="button" data-action="role-tab-next">Next</button>`}
                  </div>
                </div>` : ""}
              </section>
            </div>
          </article>`}
        </div>
      </div>
    </div>
  `;
}

// Opening the details card brings it up to just under the header, so the tabs and the step are in view.
// The AI box closes and opens smoothly: the height and fade run on the live element, then the page re-renders in its new state.
function withTeeClosed(next) {
  const panel = document.querySelector(".tee-panel");
  const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!state.teeOpen || !panel || calm) { state.teeOpen = false; next(); fadeInTeeMini(); return; }
  panel.style.height = panel.offsetHeight + "px";
  panel.style.overflow = "hidden";
  panel.getBoundingClientRect();
  panel.style.transition = "height .32s cubic-bezier(.4,0,.2,1), padding-bottom .32s cubic-bezier(.4,0,.2,1), opacity .24s ease";
  panel.style.height = "0px";
  panel.style.paddingBottom = "0px";
  panel.style.opacity = "0";
  setTimeout(() => { state.teeOpen = false; next(); fadeInTeeMini(); }, 330);
}
function fadeInTeeMini() {
  const mini = document.querySelector(".tee-mini");
  if (!mini) return;
  mini.style.opacity = "0";
  mini.getBoundingClientRect();
  mini.style.transition = "opacity .25s ease";
  mini.style.opacity = "1";
  setTimeout(() => { mini.style.transition = ""; mini.style.opacity = ""; }, 280);
}
function openTeePanel() {
  state.teeOpen = true;
  render();
  const panel = document.querySelector(".tee-panel");
  if (!panel || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const full = panel.offsetHeight;
  const pad = getComputedStyle(panel).paddingBottom;
  panel.style.height = "0px";
  panel.style.paddingBottom = "0px";
  panel.style.opacity = "0";
  panel.style.overflow = "hidden";
  panel.getBoundingClientRect();
  panel.style.transition = "height .32s cubic-bezier(.4,0,.2,1), padding-bottom .32s cubic-bezier(.4,0,.2,1), opacity .28s ease";
  panel.style.height = full + "px";
  panel.style.paddingBottom = pad;
  panel.style.opacity = "1";
  setTimeout(() => { panel.style.transition = ""; panel.style.height = ""; panel.style.paddingBottom = ""; panel.style.opacity = ""; panel.style.overflow = ""; }, 340);
}

function scrollRoleCardToTop() {
  const card = document.querySelector(".role-card--details");
  if (!card) return;
  // The scrolling area already starts under the header; 16px keeps the card just clear of it.
  card.style.scrollMarginTop = "16px";
  card.scrollIntoView({ block: "start", behavior: "smooth" });
}

function saveRolePlay(publish) {
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
  if (createdId && publish) { actions["role-publish"]({ dataset: { id: createdId } }); return; }
  if (createdId) {
    state.roleFilter = "draft";
    state.nav = "roleplay";
    render();
    toast("Saved as a draft.");
    return;
  }
  toast(message);
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

function roleGoalsField(draft) {
  const full = draft.goals.length >= 5;
  return `
        <div class="role-label-row role-tips-wrap">
          <h2 class="role-label">Learner goals</h2>
          <button class="role-tips-btn" type="button" data-action="role-tips-toggle" aria-expanded="${state.roleTipsOpen}" aria-controls="role-tips-pop">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg>
            Tips to create goals
          </button>
          ${state.roleTipsOpen ? `
          <div class="role-tips-pop" id="role-tips-pop" role="tooltip">
            <p class="role-tips-title">Tips to create good learner goals</p>
            <ol>
              <li>Tie each goal to a call the agent already loses.</li>
              <li>Make it something you can hear on the recording.</li>
              <li>One behaviour, not a personality trait.</li>
              <li>Hard enough to practise, not so hard they freeze.</li>
            </ol>
          </div>` : ""}
        </div>
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
              <span class="role-rubric-pts tabular"><input class="input role-rubric-pts-input" type="number" min="1" max="100" inputmode="numeric" value="${esc(String(item.points))}" data-rubric-pts="${i}" data-change="role-rubric-pts-fix" aria-label="Points for ${esc(item.name)}"> pts</span>
              <button class="btn btn--ghost btn--sm" type="button" data-action="role-rubric-remove" data-id="${i}">Remove</button>
            </li>
          `).join("")}
        </ol>
        <label class="sr" for="role-rubric-name">Score name</label>
        <div class="role-goal-add role-rubric-add">
          <input class="input" id="role-rubric-name" data-role-field="rubricName" placeholder="Example: Handles the price objection" value="${esc(draft.rubricName || "")}" autocomplete="off" ${full ? "disabled" : ""}>
          <label class="sr" for="role-rubric-points">Points</label>
          <span class="role-rubric-pts tabular"><input class="input role-rubric-points-input" id="role-rubric-points" data-role-field="rubricPoints" type="number" min="1" max="100" inputmode="numeric" placeholder="Pts" value="${esc(String(draft.rubricPoints || ""))}" ${full ? "disabled" : ""}> pts</span>
          <button class="btn btn--secondary" type="button" data-action="role-rubric-add" ${full ? "disabled" : ""}>
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3.5v9M3.5 8h9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            Add score
          </button>
        </div>
        <p class="hint hint-below">Set for ${esc(((ROLE_RUBRICS[draft.rubricType] || ROLE_RUBRICS.sales).label).toLowerCase())}. Agents are scored out of <span id="role-rubric-total">${total}</span> points across these. Eight at most.</p>
  `;
}

function rolePersonaPicker(draft) {
  const list = rpsPersonas(RPS_CATS[0].id, RPS_OWN_INDUSTRY);
  return `
        <h2 class="role-label">Persona library</h2>
        <div class="rpa-people" role="group" aria-label="Persona">
          ${list.map((p) => {
            const on = (p.look || p.id) === draft.look;
            return `
          <div class="rpa-person" role="button" tabindex="0" data-action="role-pick-persona" data-id="${esc(p.id)}" aria-pressed="${on}" aria-label="Pick ${esc(p.name)}">
            <span class="rpa-photo"><img src="${esc(p.src || roleLookSrc(p.id))}" alt="">${on ? `<span class="rpa-tick" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5 6.5 11.5 12.5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>` : ""}<button class="rpa-photo-edit" type="button" data-action="role-persona-settings" data-id="${esc(p.id)}" aria-label="Edit ${esc(p.name)}" title="Edit persona">${menuIcon("edit")}</button></span>
            <span class="rpa-name">${esc(p.name.split(" ")[0])}</span>
            <span class="rpa-sub">${esc(p.short || p.role)}</span>
          </div>`;
          }).join("")}
        </div>`;
}

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
  syncRubric(draft);
}

// A few openings that fit the persona; each press of Generate types a different one into the field.
function roleOpeningCandidates(draft) {
  const doc = DOC_PERSONAS.find((p) => p.id === draft.look);
  if (doc) {
    return [
      "Can you send me some options on WhatsApp?",
      "Why are you asking this?",
      `I saw your ${doc.lead}. What exactly are you offering?`,
      `I’m ${roleAs(doc.role)}. ${docUpper(doc.constraints[0])} matters to me, so keep it simple.`,
      `I’m not ready for a meeting yet. What would you want from me first?`
    ];
  }
  return [
    roleOpeningLine(draft),
    "Hi, who gave you my number?",
    "I only have a few minutes. What is this about?",
    "I’m still thinking about it. What do you need from me?"
  ];
}

let openingTypeRun = 0;
function typeRoleOpening(text) {
  const run = ++openingTypeRun;
  const draft = state.roleDraft;
  let n = 0;
  const tick = () => {
    if (run !== openingTypeRun || !state.roleDraft || state.roleDraft !== draft) return;
    n = Math.min(text.length, n + 2);
    draft.opening = text.slice(0, n);
    const el = document.getElementById("role-opening");
    if (el) el.value = draft.opening;
    if (n < text.length) setTimeout(tick, 14);
  };
  tick();
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


// One confirm dialog for every destructive action: askConfirm() opens it, "Remove" runs the action.
let confirmRun = null;

function askConfirm({ title, sub, label, run, kind }) {
  state.roleMenuId = "";
  state.confirm = { title, sub, label, kind: kind || "danger" };
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
    <dialog class="issue-dialog confirm-dialog${c.kind === "assign" ? " confirm-dialog--calm" : ""}" id="confirm-dialog" aria-labelledby="confirm-title" aria-describedby="confirm-sub">
      <div class="confirm-card">
        <span class="confirm-tile" aria-hidden="true">
          <span class="confirm-tile-in">
            ${c.kind === "assign" ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 21v-2a4 4 0 0 1 4 -4h3"/><path d="M16 19h6"/><path d="M19 16v6"/></svg>` : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12"/><path d="M9 7v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/></svg>`}
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
          <button class="btn ${c.kind === "assign" ? "btn--strong" : "btn--danger"}" type="button" data-action="confirm-yes">${esc(c.label)}</button>
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

// A learner shows as their photo; the letter circle is the fallback when there isn't one.
function learnerFace(learner, i) {
  if (!learner.src) return learnerInitial(learner, i);
  const name = (learner.name || "").trim();
  return `<img class="rp-learner-avatar" src="${esc(learner.src)}" alt="${esc(name)}" title="${esc(name)}" draggable="false">`;
}

// Learners rarely have a photo, so each one is a circle with the first letter of their name.
function learnerInitial(learner, i) {
  const name = (learner.name || "?").trim();
  return `<span class="rp-learner-avatar rp-learner-avatar--initial" title="${esc(name)}" aria-label="${esc(name)}">${esc(name.charAt(0).toUpperCase())}</span>`;
}

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

// Who a roleplay is assigned to. Users start as Taken (did it), Assigned or NA (not assigned); the first look seeds the Assigned ones.
// Minutes of access a twin agent gives each learner, in the Assign popup.
const ASSIGN_MINUTES = [15, 30, 60, 120];
// Small outline icons that sit before the metric titles on the sessions pages.
const STAT_ICON_PATHS = {
  Sessions: '<path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"/><path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"/>',
  "Twin minutes": '<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 7v5l3 3"/>',
  "Practice minutes": '<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 7v5l3 3"/>',
  Questions: '<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 17v.01"/><path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"/>',
  Helpfulness: '<path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"/>',
  "Issues reported": '<path d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0v9a5 5 0 0 1 -7 0a5 5 0 0 0 -7 0v-9z"/><path d="M5 21v-7"/>',
  "Paid by learners": '<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1"/><path d="M12 7v10"/>',
  "Average score": '<path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M7 12a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/>',
  "Weakest area most often": '<path d="M12 9v4"/><path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z"/><path d="M12 16h.01"/>'
};
function statIcon(name) {
  const path = STAT_ICON_PATHS[name];
  return path ? `<svg class="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>` : "";
}

// Calendar popover for "Access until": our own, in the design system's date-field style (dark selected day, orange dot for today).
const CAL_DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
function closeAssignCal() {
  document.querySelectorAll(".assign-cal").forEach((c) => c.remove());
}
function calIso(y, m, d) {
  return y + "-" + String(m + 1).padStart(2, "0") + "-" + String(d).padStart(2, "0");
}
function renderAssignCal(cal) {
  const y = Number(cal.dataset.y);
  const m = Number(cal.dataset.m);
  const input = [...document.querySelectorAll(".assign-until")].find((i) => i.dataset.id === cal.dataset.id);
  const picked = input ? input.value : "";
  const today = isoInDays(0);
  const ty = Number(today.slice(0, 4));
  const tm = Number(today.slice(5, 7)) - 1;
  const lead = new Date(y, m, 1).getDay();
  const count = new Date(y, m + 1, 0).getDate();
  let days = "";
  for (let i = 0; i < lead; i += 1) days += "<span></span>";
  for (let d = 1; d <= count; d += 1) {
    const iso = calIso(y, m, d);
    days += `<button type="button" class="cal-day${iso === picked ? " is-selected" : ""}${iso === today ? " is-today" : ""}" data-action="assign-cal-pick" data-iso="${iso}"${iso < today ? " disabled" : ""} aria-label="${new Date(y, m, d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}"${iso === picked ? ' aria-pressed="true"' : ""}>${d}</button>`;
  }
  const chev = (path) => `<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="${path}" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  cal.innerHTML = `
    <div class="cal-head">
      <span class="cal-title">${new Date(y, m, 1).toLocaleDateString("en-GB", { month: "long", year: "numeric" })}</span>
      <span class="cal-nav">
        <button type="button" class="cal-step" data-action="assign-cal-nav" data-step="-1" aria-label="Previous month"${y < ty || (y === ty && m <= tm) ? " disabled" : ""}>${chev("M10 4 6 8l4 4")}</button>
        <button type="button" class="cal-step" data-action="assign-cal-nav" data-step="1" aria-label="Next month">${chev("M6 4l4 4-4 4")}</button>
      </span>
    </div>
    <div class="cal-grid">${CAL_DAYS.map((d) => `<span class="cal-dow">${d}</span>`).join("")}${days}</div>
    <p class="cal-hint">Dates before today can't be picked.</p>`;
}

function closeAssignMinMenu() {
  document.querySelectorAll(".assign-min-menu").forEach((m) => m.remove());
  document.querySelectorAll(".assign-minbtn[aria-expanded='true']").forEach((b) => b.setAttribute("aria-expanded", "false"));
}
// The agent being built has no row yet; it gets an id up front so it can be assigned before "Done".
function draftAgent() {
  const d = state.botCreate && state.botDraft;
  return d && d.id ? { id: d.id, title: d.name.trim() || "New agent" } : null;
}
function isTwinAgentId(id) {
  return id === TWIN_ALL.id || twinBots().some((b) => b.id === id) || !!(draftAgent() && draftAgent().id === id);
}
function agentMinutes(id, email) {
  const m = state.assignMins[id] && state.assignMins[id][email];
  return m || 60;
}

// Access end date for a twin agent: one per learner, picked in the Assign popup.
const ASSIGN_UNTIL_DEFAULT = "2026-11-30";
function agentUntil(id, email) {
  return (state.assignUntil[id] && state.assignUntil[id][email]) || ASSIGN_UNTIL_DEFAULT;
}
// Local yyyy-mm-dd, `days` from today (a ticked learner's access runs 30 days unless changed).
function isoInDays(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}
function fmtUntil(iso) {
  const d = new Date(iso + "T00:00:00");
  return isNaN(d) ? iso : d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}
// Which learners show: the picked cohort and whatever is typed in the search.
function applyAssignFilters(box) {
  if (!box) return;
  const input = box.querySelector(".assign-search");
  const q = ((input && input.value) || "").trim().toLowerCase();
  const cohort = state.assignCohort;
  let hits = 0;
  box.querySelectorAll(".assign-row").forEach((r) => {
    const hit = (!q || (r.dataset.search || "").includes(q)) && (cohort === "all" || r.dataset.cohort === cohort);
    r.hidden = !hit;
    if (hit) hits += 1;
  });
  const empty = box.querySelector(".dd-empty");
  if (empty) empty.hidden = hits > 0;
  syncAssignAll(box);
}

// Header checkbox mirrors the rows you can still tick: all, some (dash) or none.
function syncAssignAll(box) {
  const all = box && box.querySelector(".assign-all");
  if (!all) return;
  const rows = [...box.querySelectorAll(".assign-row")].filter((r) => !r.hidden && !r.querySelector(".check").disabled);
  const ticked = rows.filter((r) => r.querySelector(".check").checked).length;
  all.disabled = !rows.length;
  all.checked = rows.length > 0 && ticked === rows.length;
  all.indeterminate = ticked > 0 && ticked < rows.length;
}

// Save and Assign needs someone ticked, and for a twin agent every ticked learner needs minutes and an end date (nothing is preset).
function syncAssignConfirm(box) {
  const btn = box && box.querySelector("#assign-confirm");
  if (!btn) return;
  const needsAccess = !!box.querySelector(".assign-col--min");
  const ready = state.assignPick.length > 0 && (!needsAccess || state.assignPick.every((e) => state.assignPickMins[e] && state.assignPickUntil[e]));
  btn.disabled = !ready;
}

function roleAssignedList(id) {
  if (!state.roleAssigned[id]) state.roleAssigned[id] = /^custom-bot-/.test(id) ? [] : ROLE_USERS.filter((u, i) => i % 4 === 1).map((u) => u.email);
  return state.roleAssigned[id];
}

function roleMemberStatus(id, user, index) {
  if (roleAssignedList(id).includes(user.email)) return "Assigned";
  return index % 4 === 0 ? "Taken" : "NA";
}

// The roleplay details page: every user with their status on this roleplay and a button to assign it.
function roleMembers(row) {
  const badge = { Assigned: "badge--info", Taken: "badge--success", NA: "" };
  return `
    <article class="rp-analytics rp-conversations rp-members">
      <h2 class="rp-analytics-title">Members</h2>
      <div class="an-table lr-table" role="table" aria-label="Members">
        <div class="an-row an-row--member an-row--head" role="row">
          <span role="columnheader">Name</span><span role="columnheader" class="lr-email">Email</span><span role="columnheader">Status</span><span role="columnheader" class="an-end"></span>
        </div>
        ${ROLE_USERS.map((u, i) => {
          const status = roleMemberStatus(row.id, u, i);
          return `
        <div class="an-row an-row--member" role="row">
          <span class="lr-name" role="cell"><span class="rp-avatar rp-avatar--${(i % 5) + 1}" aria-hidden="true">${esc(u.name.charAt(0))}</span><span class="lr-name-text"><span>${esc(u.name)}</span><span class="assign-sub lr-sub">${esc(u.phone)}</span></span></span>
          <span class="lr-email an-muted" role="cell">${esc(u.email)}</span>
          <span role="cell"><span class="badge ${badge[status]}">${status}</span></span>
          <span class="an-end" role="cell">${status === "NA"
            ? `<button class="btn btn--sm btn--strong" type="button" data-action="role-member-assign" data-role="${esc(row.id)}" data-id="${esc(u.email)}">Assign</button>`
            : `<button class="btn btn--ghost btn--icon btn--sm rp-row-more" type="button" id="role-menu-member-${i}" data-action="role-row-menu" data-id="member:${esc(u.email)}" aria-label="More actions for ${esc(u.name)}" aria-haspopup="menu" aria-expanded="${state.roleMenuId === "member:" + u.email}">
            <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="3.25" r="1.15" fill="currentColor"/><circle cx="8" cy="8" r="1.15" fill="currentColor"/><circle cx="8" cy="12.75" r="1.15" fill="currentColor"/></svg>
          </button>`}</span>
        </div>`;
        }).join("")}
      </div>
      ${(() => {
        const at = ROLE_USERS.findIndex((u) => "member:" + u.email === state.roleMenuId);
        if (at < 0) return "";
        const u = ROLE_USERS[at];
        const status = roleMemberStatus(row.id, u, at);
        const label = status === "Assigned" ? "Unassign" : status === "Taken" ? "Assign again" : "Assign";
        return `
      <div class="menu rp-row-menu" role="menu" aria-label="Actions for ${esc(u.name)}" hidden>
        <button type="button" role="menuitem" data-action="role-member-assign" data-role="${esc(row.id)}" data-id="${esc(u.email)}">${menuIcon("assign")}<span>${label}</span></button>
      </div>`;
      })()}
    </article>
  `;
}

// Assign a published roleplay to users: everyone on the Roleplay users page, searchable, with a button per row.
// What a learner can flag on a twin's reply. These are the learner's words about an answer, not Olga's calibration ratings.
const TWIN_REPORT_REASONS = ["Wrong or inaccurate answer", "Out of date information", "Didn’t answer my question", "Hard to follow", "Too long", "Other"];

// The reports learners raised on one twin agent, as a list: who, when, which turn, what they said, and what you can do.
function botReportItems(bot, total) {
  const when = ["Today, 8:15 am", "Today, 10:40 am", "Yesterday, 4:20 pm", "Yesterday, 11:02 am", "Monday, 9:18 am", "Sunday, 6:05 pm"];
  const qa = botQA(bot);
  return Array.from({ length: total }, (_, i) => ({
    key: bot.id + ":" + i,
    who: ROLE_USERS[i % ROLE_USERS.length].name,
    email: ROLE_USERS[i % ROLE_USERS.length].email,
    when: when[i % when.length],
    turn: ((i * 37) % 9 + 1) + ":" + String((i * 13) % 60).padStart(2, "0"),
    // The whole turn is shown in double quotes, so any quotes inside it become single.
    said: qa[i % qa.length][1].replace(/“/g, "‘").replace(/”/g, "’"),
    reason: TWIN_REPORT_REASONS[(i + bot.id.length) % TWIN_REPORT_REASONS.length]
  })).filter((item) => !state.reportResolved.includes(item.key));
}

function botReportsDialog() {
  const bot = state.reportsOpen.id === TWIN_ALL.id ? TWIN_ALL : twinBots().find((b) => b.id === state.reportsOpen.id) || { id: state.reportsOpen.id, title: "This twin agent", quote: "", blurb: "" };
  const items = botReportItems(bot, state.reportsOpen.total);
  const crossIcon = `<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;
  return `
    <dialog class="issue-dialog confirm-dialog reports-dialog${state.reportsEnter ? " reports-dialog--in" : ""}" id="reports-dialog" aria-labelledby="reports-title">
      <div class="confirm-card">
        <button class="btn btn--ghost btn--icon btn--sm confirm-close" type="button" data-action="bot-reports-close" aria-label="Close">${crossIcon}</button>
        <div class="confirm-copy">
          <h2 class="confirm-title" id="reports-title">Reports raised</h2>
          <p class="confirm-sub">${esc(bot.title)} · ${items.length} open</p>
        </div>
        <div class="reports-list">
          ${items.length ? items.map((item) => `
          <div class="inbox-row reports-row">
            <div class="inbox-main">
              <p class="inbox-who reports-who"><span class="rp-avatar rp-avatar--${(item.who.length % 5) + 1}" aria-hidden="true">${esc(item.who.charAt(0))}</span><b>${esc(item.who)}</b><span class="reports-when">${esc(item.when)}</span></p>
              <div class="inbox-quote reports-msg">
                <div class="reports-msg-text">
                  <p class="inbox-label">Learner’s report</p>
                  <p class="inbox-title">${esc(item.reason)}</p>
                  <p class="inbox-said">“${esc(item.said)}”</p>
                </div>
                <button class="btn btn--secondary btn--sm" type="button" data-action="report-respond" data-key="${esc(item.key)}" data-who="${esc(item.who)}" data-email="${esc(item.email)}" data-reason="${esc(item.reason)}" data-said="${esc(item.said)}">Respond</button>
              </div>
            </div>
          </div>`).join("") : `<p class="ts-empty">All reports are resolved.</p>`}
        </div>
      </div>
    </dialog>`;
}

let reportsScroll = 0;
function mountReportsDialog() {
  const dlg = document.getElementById("reports-dialog");
  if (!dlg) return;
  if (typeof dlg.showModal === "function" && !dlg.open) dlg.showModal();
  // It slides in once when opened; later re-renders (after a response) keep it in place and keep the scroll.
  state.reportsEnter = false;
  const list = dlg.querySelector(".reports-list");
  if (list) list.scrollTop = reportsScroll;
  dlg.addEventListener("cancel", (ev) => {
    ev.preventDefault();
    actions["bot-reports-close"]();
  });
  dlg.addEventListener("click", (ev) => {
    if (ev.target === dlg) actions["bot-reports-close"]();
  });
}

// Answering a question the twin couldn't: type it or record it, then it goes to the learner by email.
function respondDialog() {
  const r = state.respond;
  const first = r.who.split(" ")[0];
  const clock = (n) => Math.floor(n / 60) + ":" + String(n % 60).padStart(2, "0");
  const crossIcon = `<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;
  const mic = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5a3 3 0 0 1 3 -3a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3a3 3 0 0 1 -3 -3z"/><path d="M5 10a7 7 0 0 0 14 0"/><path d="M8 21l8 0"/><path d="M12 17l0 4"/></svg>`;
  const rec = state.respondRec;
  return `
    <dialog class="issue-dialog confirm-dialog respond-dialog" id="respond-dialog" aria-labelledby="respond-title">
      <div class="confirm-card">
        <button class="btn btn--ghost btn--icon btn--sm confirm-close" type="button" data-action="respond-close" aria-label="Close">${crossIcon}</button>
        <div class="confirm-copy">
          <h2 class="confirm-title" id="respond-title">Respond to ${esc(first)}</h2>
          <p class="confirm-sub">${esc(r.who)} · ${esc(r.email)}</p>
        </div>
        <div class="respond-q">${r.turn
          ? `<span class="respond-q-label">Learner’s report</span><b>${esc(r.q)}</b><em>“${esc(r.turn)}”</em>`
          : esc(r.q)}</div>
        <div class="field respond-field">
          <label for="respond-text">Your answer</label>
          <textarea class="input" id="respond-text" rows="4" placeholder="Type your answer the way you would say it">${esc(state.respondDraft)}</textarea>
        </div>
        <div class="respond-voice">
          ${rec === "idle" ? `<button class="btn btn--secondary btn--sm" type="button" data-action="respond-rec">${mic}Record a voice reply</button>` : ""}
          ${rec === "recording" ? `<button class="btn btn--secondary btn--sm respond-rec-live" type="button" data-action="respond-rec"><span class="respond-dot" aria-hidden="true"></span>Stop <span class="tabular" id="respond-timer">${clock(state.respondSecs)}</span></button>` : ""}
          ${rec === "done" ? `<span class="badge respond-clip">${mic}Voice reply · <span class="tabular">${clock(state.respondSecs)}</span></span><button class="btn btn--ghost btn--sm" type="button" data-action="respond-rec-clear">Remove</button>` : ""}
        </div>
        <p class="respond-note">Sent to ${esc(first)} by email. Your twin will use it next time.</p>
        <div class="confirm-actions">
          <button class="btn btn--secondary" type="button" data-action="respond-close">Cancel</button>
          <button class="btn btn--primary" type="button" id="respond-send" data-action="respond-send"${state.respondDraft.trim() || rec === "done" ? "" : " disabled"}>Send by email</button>
        </div>
      </div>
    </dialog>`;
}

let respondTimer = 0;
function stopRespondTimer() {
  if (respondTimer) clearInterval(respondTimer);
  respondTimer = 0;
}
function syncRespondSend() {
  const btn = document.getElementById("respond-send");
  if (btn) btn.disabled = !(state.respondDraft.trim() || state.respondRec === "done");
}
function mountRespondDialog() {
  const dlg = document.getElementById("respond-dialog");
  if (!dlg) return;
  if (typeof dlg.showModal === "function" && !dlg.open) dlg.showModal();
  dlg.addEventListener("cancel", (ev) => {
    ev.preventDefault();
    actions["respond-close"]();
  });
  dlg.addEventListener("click", (ev) => {
    if (ev.target === dlg) actions["respond-close"]();
  });
  const box = document.getElementById("respond-text");
  if (box && state.respondRec !== "recording") box.focus();
}

function roleAssignDialog() {
  const draft = draftAgent();
  const agent = state.assignRole === TWIN_ALL.id ? TWIN_ALL : twinBots().find((b) => b.id === state.assignRole) || (draft && draft.id === state.assignRole ? draft : null);
  const row = agent || sharedRowById(state.assignRole) || taskById(state.assignRole) || { title: "Roleplay" };
  const done = roleAssignedList(state.assignRole);
  const crossIcon = `<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;
  return `
    <dialog class="issue-dialog confirm-dialog assign-dialog" id="assign-dialog" aria-labelledby="assign-title">
      <div class="confirm-card">
        <button class="btn btn--ghost btn--icon btn--sm confirm-close" type="button" data-action="role-assign-close" aria-label="Close">${crossIcon}</button>
        <div class="confirm-copy">
          <h2 class="confirm-title" id="assign-title">${agent ? "Assign twin agent" : "Assign roleplay"}</h2>
          <p class="confirm-sub">${esc(row.title)} · <span id="assign-count">${done.length}</span> assigned<span id="assign-picked">${state.assignPick.length ? " · " + state.assignPick.length + " selected" : ""}</span></p>
        </div>
        <div class="assign-toolbar">
          <select class="input assign-cohort" data-change="assign-cohort" aria-label="Filter by cohort">
            ${[["all", "All cohorts"]].concat(TS_COHORTS, [["walk", "Walk-ins"]]).map(([id, label]) => `<option value="${id}"${state.assignCohort === id ? " selected" : ""}>${esc(label)}</option>`).join("")}
          </select>
          <div class="assign-find is-open">
            <button class="assign-find-btn" type="button" data-action="assign-find-toggle" aria-label="Search users" aria-expanded="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M21 21l-6 -6"/></svg></button>
            <input class="input assign-search" type="search" placeholder="Search by name, email or number" aria-label="Search users" autocomplete="off">
          </div>
        </div>
        <div class="assign-list">
          <div class="assign-cols"><span class="assign-col assign-col--select"><input class="check assign-all" type="checkbox" data-change="role-assign-all" aria-label="Select all learners" title="Select all"></span><span class="assign-col assign-col--who">Learner</span>${agent ? `<span class="assign-col assign-col--min">Minutes</span>` : ""}</div>
          ${ROLE_USERS.map((u, i) => {
            const on = done.includes(u.email);
            const picked = state.assignPick.includes(u.email);
            const cur = state.assignPickMins[u.email] || 0;
            return `
          <label class="assign-row${on ? " is-done" : ""}" data-search="${esc((u.name + " " + u.email + " " + u.phone).toLowerCase())}" data-cohort="${esc(TS_COHORT_OF[u.name.split(" ")[0]] || "walk")}"${state.assignCohort !== "all" && (TS_COHORT_OF[u.name.split(" ")[0]] || "walk") !== state.assignCohort ? " hidden" : ""}>
            <input class="check" type="checkbox" data-change="role-assign-pick" data-id="${esc(u.email)}" ${on || picked ? "checked" : ""} ${on ? "disabled" : ""} aria-label="Assign ${esc(u.name)}">
            <span class="rp-avatar rp-avatar--${(i % 5) + 1}" aria-hidden="true">${esc(u.name.charAt(0))}</span>
            <span class="assign-who"><span class="assign-name">${esc(u.name)}</span><span class="assign-sub">${esc(u.email)}</span><span class="assign-sub">${esc(u.phone)}</span></span>
            ${agent ? `<div class="assign-opts">
              <button type="button" class="assign-minbtn" data-action="role-assign-min-open" data-id="${esc(u.email)}" aria-haspopup="listbox" aria-expanded="false" aria-label="Minutes of access for ${esc(u.name)}"${on || picked ? "" : " disabled"}><span>${on ? agentMinutes(state.assignRole, u.email) + " min" : (cur || 30) + " min"}</span><svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4.5 6.5 8 10l3.5-3.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>` : on ? `<span class="badge assign-status">Assigned</span>` : ""}
          </label>`;
          }).join("")}
          <p class="dd-empty" hidden>No one matches that search.</p>
        </div>
        <div class="confirm-actions${agent ? " confirm-actions--note" : ""}">
          ${agent ? `<p class="assign-note"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg>Access lasts 30 days from the day you assign.</p>` : ""}
          <button class="btn btn--strong" type="button" id="assign-confirm" data-action="role-assign-confirm" ${state.assignPick.length ? "" : "disabled"}>Save and Assign</button>
        </div>
      </div>
    </dialog>
  `;
}

function mountAssignDialog() {
  const dlg = document.getElementById("assign-dialog");
  if (!dlg) return;
  if (typeof dlg.showModal === "function" && !dlg.open) dlg.showModal();
  dlg.addEventListener("cancel", (ev) => {
    ev.preventDefault();
    actions["role-assign-close"]();
  });
  dlg.addEventListener("click", (ev) => {
    if (ev.target === dlg) actions["role-assign-close"]();
  });
  dlg.addEventListener("mousedown", (ev) => {
    if (ev.target.closest(".assign-find-btn")) ev.preventDefault();
  });
  // Anywhere on the date field opens our calendar; the field itself stays typable.
  dlg.addEventListener("click", (ev) => {
    const input = ev.target.closest && ev.target.closest(".assign-until");
    if (input) actions["assign-cal-open"](input);
  });
  // Esc closes the calendar first, the dialog only if no calendar is open.
  dlg.addEventListener("keydown", (ev) => {
    if (ev.key === "Escape" && dlg.querySelector(".assign-cal")) {
      ev.stopPropagation();
      ev.preventDefault();
      closeAssignCal();
    }
  });
  syncAssignAll(dlg);
}

// "Try as learner" on a roleplay asks first: which roleplay, who the learner will talk to, then Join session.
function tryRoleInfo(id) {
  const row = sharedRowById(id);
  const task = row ? null : taskById(id);
  const docIndex = DOC_PERSONAS.findIndex((p) => p.id === id);
  if (row) {
    const doc = docIndex >= 0 ? DOC_PERSONAS[docIndex] : null;
    return { title: row.title, blurb: row.blurb, name: row.clientName || row.client || "Client", face: row.clientFace || PERSONAS[0].src, desc: doc ? doc.background : (row.scenario || row.blurb) };
  }
  const draft = task ? draftFromTask(task) : null;
  return { title: task ? task.title : "Roleplay", blurb: task ? task.blurb : "", name: (draft && draft.name) || "Client", face: roleLookSrc(draft ? draft.look : ""), desc: (draft && draft.sub) || (task && task.blurb) || "" };
}

function tryRoleDialog() {
  const info = tryRoleInfo(state.tryRole);
  const crossIcon = `<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;
  return `
    <dialog class="issue-dialog confirm-dialog try-dialog" id="try-dialog" aria-labelledby="try-title">
      <div class="confirm-card">
        <button class="btn btn--ghost btn--icon btn--sm confirm-close" type="button" data-action="role-try-cancel" aria-label="Close">${crossIcon}</button>
        <div class="confirm-copy">
          <h2 class="confirm-title" id="try-title">Do you want to try this roleplay as a learner?</h2>
        </div>
        <div class="try-role">
          <p class="try-role-name">${esc(info.title)}</p>
          <p class="try-role-blurb">${esc(info.blurb)}</p>
        </div>
        <div class="try-persona">
          <img class="try-persona-photo" src="${esc(info.face)}" alt="">
          <div class="try-persona-text">
            <p class="try-persona-label">You will talk to</p>
            <p class="try-persona-name">${esc(info.name)}</p>
            <p class="try-persona-desc">${esc(info.desc)}</p>
          </div>
        </div>
        <div class="confirm-actions">
          <button class="btn btn--secondary" type="button" data-action="role-try-cancel">Cancel</button>
          <button class="btn btn--primary" type="button" data-action="role-try-confirm">Join session</button>
        </div>
      </div>
    </dialog>
  `;
}

function mountTryRoleDialog() {
  const dlg = document.getElementById("try-dialog");
  if (!dlg) return;
  if (typeof dlg.showModal === "function" && !dlg.open) dlg.showModal();
  dlg.addEventListener("cancel", (ev) => {
    ev.preventDefault();
    actions["role-try-cancel"]();
  });
  dlg.addEventListener("click", (ev) => {
    if (ev.target === dlg) actions["role-try-cancel"]();
  });
}

function roleCardMenu(task, withShare) {
  return `
    <div class="menu rp-row-menu" role="menu" aria-label="Actions for ${esc(task.title)}" hidden>
      <button type="button" role="menuitem" data-action="role-configure" data-id="${esc(task.id)}">${menuIcon("edit")}<span>Configure</span></button>
      ${withShare ? `<button type="button" role="menuitem" data-action="copy-link" data-link="https://trainertwin.com/olga/${esc(task.id)}">${menuIcon("share")}<span>Share</span></button>` : ""}
      ${withShare ? `<button type="button" role="menuitem" data-action="role-assign-open" data-id="${esc(task.id)}">${menuIcon("assign")}<span>Assign</span></button>` : ""}
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
            ${learners.shown.map(learnerFace).join("")}
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
    <div class="page page--account page--library page--twin-profile">
      <div class="lib-head">
        <h1 class="lib-title"><span class="lib-mark">${icon("settings")}</span>Settings</h1>
      </div>
      <div class="twin-bots-head settings-who">
        <div>
          <h2 class="page-title">Olga Sinenko</h2>
          <p class="home-meta">${esc(type.banner)}</p>
        </div>
      </div>
      <p class="overline settings-group">Modules</p>
      <article class="card features-card">
        ${[["twin", "Twin", "Twin agents, twin sessions and the twin’s brain."], ["roleplay", "Roleplay", "Scenarios, roleplay sessions and personas."]].map(([key, label, help]) => `
          <div class="rps-row">
            <div class="rps-copy"><p class="rps-label">${label}</p><p class="rps-help">${help}</p></div>
            <button class="rps-switch" type="button" role="switch" aria-checked="${state.features[key]}" aria-label="${label}" data-action="feature-toggle" data-key="${key}"><span></span></button>
          </div>
        `).join("")}
      </article>
      <p class="overline settings-group">Accounts</p>
      <div class="fast-follow">
        <button class="card fast-follow-card" type="button" data-action="nav" data-id="home">
          <span class="fast-follow-ico" aria-hidden="true">${icon("usage")}</span>
          <span class="fast-follow-name">Usage</span>
        </button>
        <button class="card fast-follow-card" type="button" data-action="nav" data-id="cohorts">
          <span class="fast-follow-ico" aria-hidden="true">${icon("cohorts")}</span>
          <span class="fast-follow-name">Cohorts</span>
        </button>
        <button class="card fast-follow-card" type="button" data-action="nav" data-id="acclearners">
          <span class="fast-follow-ico" aria-hidden="true">${icon("learners")}</span>
          <span class="fast-follow-name">Learners</span>
        </button>
        <button class="card fast-follow-card" type="button" data-action="nav" data-id="team">
          <span class="fast-follow-ico" aria-hidden="true">${icon("team")}</span>
          <span class="fast-follow-name">Team</span>
        </button>
      </div>
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

const PRESENCE_LINKEDIN = "https://i.pravatar.cc/240?img=32";

const LIBRARY_VOICES = [
  { id: "coaching", label: "Our coaching voice" },
  { id: "patient", label: "Your patient voice" },
  { id: "energetic", label: "Your Energetic voice" },
  { id: "stage", label: "Your on-Stage voice" },
  { id: "webinar", label: "Your Webinar voice" }
];

function presenceSrc() {
  if (state.presenceLook === "upload" && state.presenceUpload) return state.presenceUpload;
  return PRESENCE_LINKEDIN;
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
          Twin Agents
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
    const file = line.file
      ? (line.file.src
        ? `<img class="demo-attach-img" src="${esc(line.file.src)}" alt="${esc(line.file.name)}">`
        : `<span class="demo-file"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg><span>${esc(line.file.name)}</span></span>`)
      : "";
    return `
      <div class="demo-line is-lead">
        <p class="demo-who">${esc(label)}</p>
        ${line.text ? `<div class="demo-bubble">${esc(line.text)}</div>` : ""}
        ${file}
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
  if (state.demoEnded) return demoEndedScreen(model);
  const visible = model.lines.slice(0, state.demoReveal);
  const selfLabel = state.demoInteractive ? "Olga" : "Student";
  const selfInitial = state.demoInteractive ? "O" : "A";
  const selfColorClass = state.demoInteractive ? "demo-self-avatar--olga" : "demo-self-avatar--student";
  return `
    <div class="demo-room${state.demoView === "mobile" ? " demo-room--phone" : ""}">
      <header class="demo-top">
        <div class="demo-brand">${logo(20)}<span class="wordmark">TrainerTwin</span></div>
        <p class="demo-title">${esc(model.title)}</p>
        <div class="demo-top-end">
          <div class="demo-view" role="group" aria-label="Screen size">
            <button type="button" data-action="demo-view" data-id="web" aria-pressed="${state.demoView !== "mobile"}" aria-label="Web view" title="Web view"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10"/><path d="M7 20h10"/><path d="M9 16v4"/><path d="M15 16v4"/></svg></button>
            <button type="button" data-action="demo-view" data-id="mobile" aria-pressed="${state.demoView === "mobile"}" aria-label="Mobile view" title="Mobile view"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14"/><path d="M11 4h2"/><path d="M12 17v.01"/></svg></button>
          </div>
          <button class="demo-pill-btn" type="button" data-action="open-demo-issue">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 22V3m0 1c4-4 8 4 12 0v10c-4 4-8-4-12 0" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Report an issue
          </button>
        </div>
      </header>
      ${state.demoView === "mobile" ? `<div class="demo-phone">
      <div class="demo-phone-bar">
        <p class="demo-timer">${fmtClock(state.demoSeconds)}</p>
        <button class="demo-pill-btn" type="button" data-action="open-demo-issue">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 22V3m0 1c4-4 8 4 12 0v10c-4 4-8-4-12 0" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          Report an issue
        </button>
      </div>` : ""}
      <div class="demo-body">
        <div class="demo-stage">
          ${state.demoScreenShare ? "" : `<canvas class="demo-aurora" aria-hidden="true"></canvas>`}
          ${state.demoScreenShare ? demoShareScreen() : `
            <div class="demo-avatar-wrap">
              <div class="demo-avatar" aria-hidden="true">${demoFace(model)}</div>
              ${state.demoThinking
                ? `<p class="demo-speaking demo-thinking" role="status"><span class="demo-thinking-loader" aria-hidden="true">${miniLatticeLoader()}</span> Thinking…</p>`
                : `<p class="demo-speaking"><span class="live-dot" aria-hidden="true"></span> Speaking</p>`}
              <p class="demo-speaker-name">${esc(model.persona.name)}</p>
            </div>
          `}
          ${state.demoScreenShare ? `
            <div class="demo-pip-stack">
              <div class="demo-self demo-self--stacked demo-self--twin">
                ${demoFace(model, "demo-self-photo")}
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
            ${state.demoThinking ? `
              <div class="demo-line is-twin">
                <p class="demo-who">${esc(model.persona ? model.persona.name : "Client")}</p>
                <div class="demo-bubble demo-bubble--thinking" role="status"><span class="demo-thinking-loader" aria-hidden="true">${miniLatticeLoader()}</span> Thinking…</div>
              </div>` : ""}
          </div>
          <div class="demo-chat-input-row">
            <button class="demo-attach" type="button" data-action="demo-upload" aria-label="Attach a file" title="Attach a file"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            <input class="demo-chat-input" id="demo-message" placeholder="Message the trainer…" value="${esc(state.demoDraft)}" autocomplete="off">
            <button class="demo-send" type="button" data-action="demo-send" aria-label="Send">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 19V5m-6 6 6-6 6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
          </div>
        </aside>
      </div>
      <div class="demo-controls">
        ${state.demoView === "mobile" ? "" : `<p class="demo-timer">${fmtClock(state.demoSeconds)}</p>`}
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
          <button class="demo-ctrl" type="button" data-action="demo-upload" aria-label="Upload a file" title="Upload a file"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
          <input class="sr" type="file" id="demo-upload-input" data-change="demo-upload-pick" multiple accept="image/*,.pdf,.doc,.docx,.ppt,.pptx,.txt,.md" tabindex="-1">
          <button class="demo-ctrl${state.demoChatOpen ? " is-active" : ""}" type="button" data-action="toggle-demo-chat" aria-label="Toggle chat">
            <svg viewBox="0 0 24 24" fill="none"><path d="M8 9h8M8 13h6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-5l-5 3v-3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
        <button class="demo-end" type="button" data-action="end-demo">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 2 2 22" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          End
        </button>
      </div>
      ${state.demoView === "mobile" ? `</div>` : ""}
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
            Go to Twin Agents
          </button>
        </div>
      </div>
      ${talkHistory(t)}
    </div>
  `;
}

// What the twin is doing right now: speaking its line, thinking once you've finished yours, or listening to you.
function talkPhase(t, turn, done) {
  if (turn.who === "twin") return done ? "listening" : "speaking";
  const next = talkScript(t)[t.idx + 1];
  return done && next && next.who === "twin" ? "thinking" : "listening";
}

function talkStateChip(phase) {
  const label = { listening: "Listening", thinking: "Thinking", speaking: "Speaking" }[phase];
  return `<p class="talk-state talk-state--${phase}" role="status"><span class="talk-state-ind" aria-hidden="true"><i></i><i></i><i></i><i></i></span>${label}</p>`;
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
    <div class="page page--talk talk-page${state.obCall ? " talk-page--ob" : ""}">
      ${state.obCall ? "" : `<header class="create-bar">
        <button class="create-bar-back" type="button" data-action="talk-close">${icon("back")} Talk to my twin</button>
      </header>`}
      <div class="talk-body">
        <div class="talk-stage">
          <section class="talk-col" aria-label="Olga’s twin">
            ${state.obCall && state.ob.voice === "library" ? obVoiceNote() : ""}
            <div class="talk-card${twinSpeaking ? " is-speaking" : ""}">
              <video class="talk-video" src="${videoSrc}" autoplay muted loop playsinline preload="auto" aria-hidden="true"></video>
              ${twinSpeaking ? `<span class="talk-glow" aria-hidden="true"></span>` : ""}
              <span class="talk-name">Olga’s twin</span>
              <span class="talk-clock" aria-label="Call duration">${talkClock(t)}</span>
            </div>
            ${talkStateChip(talkPhase(t, turn, done))}
            <div class="talk-thread" aria-live="polite">${talkThread(t)}</div>
          </section>
        </div>
      </div>
      ${talkHistory(t)}
      ${state.obCall && !t.logOpen ? obAbout() : ""}
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
      ${state.obCall && t.knOpen ? obKnowledgeDialog() : ""}
      ${t.confirmEnd ? talkEndConfirm() : ""}
    </div>
  `;
}

function talkEndConfirm() {
  return `
    <dialog class="issue-dialog upsell-dialog" id="talk-end-dialog" aria-labelledby="talk-end-title">
      <div class="issue-card upsell-card upsell-card--end">
        <span class="confirm-tile tt-tile-neutral talk-end-ico" aria-hidden="true"><span class="confirm-tile-in">${obIco('<path d="M3 3l18 18"/><path d="M5.831 14.161a15.946 15.946 0 0 1 -2.831 -8.161a2 2 0 0 1 2 -2h4l2 5l-2.5 1.5c.108 .22 .223 .435 .345 .645m1.751 2.277c.843 .84 1.822 1.544 2.904 2.078l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a15.963 15.963 0 0 1 -10.344 -4.657"/>', 20)}</span></span>
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

// ---- The learner's report after "Try as learner" on a roleplay ----
const RR_STRONG = [
  "Stayed calm and even when the client pushed back.",
  "Used one clear example instead of a list.",
  "Answered the real concern, not the first thing said.",
  "Kept the next step simple and specific."
];
const RR_GROWTH = [
  "Let the client finish before you answer. A short pause shows you heard them.",
  "Ask one more question before you offer the next step.",
  "Name the number or the date out loud, so the client can agree to it.",
  "Slow down when the client sounds unsure. Give them room."
];

function rrClock(sec) {
  return Math.floor(sec / 60) + ":" + String(Math.round(sec) % 60).padStart(2, "0");
}

// A frozen copy of the call, so the report stays the same after the room is gone.
function roleReportSnapshot(model) {
  const id = state.demoTaskId;
  // The transcript always shows at least the first four turns, even when the call was ended early.
  const lines = model.lines.slice(0, Math.max(state.demoReveal, 4)).concat(state.demoExtra).map((l) => ({ who: l.who === "twin" ? "client" : "you", text: l.text || (l.file ? l.file.name : "") }));
  const marks = Object.values(state.demoMarks || {});
  const up = marks.filter((m) => m === "up").length;
  const down = marks.filter((m) => m === "down").length;
  const turns = lines.filter((l) => l.who === "you").length;
  const seconds = Math.max(state.demoSeconds, 30);
  const pct = Math.min(96, Math.max(58, 72 + up * 4 - down * 5 + Math.min(turns, 6) * 2));
  let rubric;
  if (id === "role-draft") {
    const d = state.roleDraft || freshRoleDraft();
    syncRubric(d);
    rubric = d.rubric;
  } else {
    rubric = rubricForRow({ id });
  }
  const scored = sessionRubricScores({ id }, { id: "try-" + id }, pct, rubric);
  const row = sharedRowById(id);
  const goals = ((ROLE_PREFILL[id] || {}).goals) || ["Ask what is really holding the client back", "Offer a clear next step", "Leave with an agreed time"];
  const met = Math.round((goals.length * pct) / 100);
  return {
    taskId: id, title: model.title, client: model.persona ? model.persona.name : "Client", face: model.persona ? model.persona.face : "",
    seconds, pct, scored, lines, up, down, turns,
    goals: goals.map((text, i) => ({ text, status: i < met ? "Met" : i === met ? "Partly" : "Missed" })),
    issues: state.demoIssuesSent.slice(),
    published: !!row
  };
}

function rrRadar(lines) {
  const n = lines.length;
  const cx = 100, cy = 100, R = 78;
  const pt = (i, r) => {
    const a = (-90 + (360 / n) * i) * Math.PI / 180;
    return (cx + Math.cos(a) * R * r).toFixed(1) + "," + (cy + Math.sin(a) * R * r).toFixed(1);
  };
  const ring = (r) => `<polygon class="rr-ring" points="${lines.map((_, i) => pt(i, r)).join(" ")}"/>`;
  const spokes = lines.map((_, i) => `<line class="rr-ring" x1="${cx}" y1="${cy}" x2="${pt(i, 1).split(",")[0]}" y2="${pt(i, 1).split(",")[1]}"/>`).join("");
  return `
    <svg class="rr-radar" viewBox="0 0 200 200" role="img" aria-label="Score by skill">
      ${[0.33, 0.66, 1].map(ring).join("")}${spokes}
      <polygon class="rr-bench" points="${lines.map((_, i) => pt(i, 0.8)).join(" ")}"/>
      <polygon class="rr-you" points="${lines.map((l, i) => pt(i, l.earned / l.points)).join(" ")}"/>
      ${lines.map((l, i) => { const [x, y] = pt(i, l.earned / l.points).split(","); return `<circle class="rr-dot" cx="${x}" cy="${y}" r="3.5"/>`; }).join("")}
    </svg>`;
}

function rrReportBody(r, o) {
  const lines = r.scored.lines;
  const pass = r.pct >= 70;
  const ratio = (l) => l.earned / l.points;
  const ranked = lines.map((l, i) => ({ l, i })).sort((a, b) => ratio(b.l) - ratio(a.l));
  const strong = ranked.slice(0, 2);
  const growth = ranked.slice(-2).reverse();
  const at = (f) => Math.round(r.seconds * f);
  const marks = [
    { t: at(0.18), label: "Opening", tone: "info" },
    { t: at(0.42), label: "Concern raised", tone: "caution" },
    { t: at(0.68), label: "Breakthrough", tone: "success" },
    { t: at(0.88), label: "Next step", tone: "info" }
  ];
  const talk = Math.min(60, Math.max(36, 40 + r.turns * 2 + r.up));
  const objections = Math.max(1, Math.min(4, Math.round(lines.length / 2)));
  const resolved = Math.min(objections, Math.max(0, Math.round(objections * r.pct / 100)));
  const wpm = 124 + (r.pct % 22);
  const circ = 2 * Math.PI * 42;
  const stat = (label, value, note) => `<article class="an-stat rr-stat"><p class="overline">${esc(label)}</p><p class="an-value tabular">${value}</p><p class="an-note">${esc(note)}</p></article>`;
  return `
      <div class="cal-detail rr-report">
        <article class="card rr-head">
          <div class="rr-head-top">
            <div class="rr-head-text">
              <p class="overline">${esc(o.eyebrow)}</p>
              <h1 class="rr-title">${esc(r.title)}</h1>
              <p class="sr-sub">${o.sub}</p>
            </div>
            ${o.actions ? `<div class="rr-actions">${o.actions}</div>` : ""}
          </div>
          <div class="rr-score">
            <div class="rr-ring-wrap">
              <svg viewBox="0 0 100 100" aria-hidden="true"><circle class="rr-track" cx="50" cy="50" r="42"/><circle class="rr-arc${pass ? "" : " is-low"}" cx="50" cy="50" r="42" stroke-dasharray="${circ.toFixed(1)}" stroke-dashoffset="${(circ * (1 - r.pct / 100)).toFixed(1)}"/></svg>
              <p class="rr-ring-num tabular"><b>${r.pct}</b><span>/ 100</span></p>
            </div>
            <div class="rr-verdict">
              <span class="badge ${pass ? "badge--success" : "badge--caution"}">${pass ? "Passed" : "Needs another go"}</span>
              <p class="rr-verdict-title">${pass ? "Above the 70 pass mark" : "Below the 70 pass mark"}</p>
              <p class="rr-verdict-sub">${r.scored.earned} of ${r.scored.total} rubric points. ${pass ? o.passSub : o.failSub}</p>
            </div>
            <div class="rr-rec">
              <video class="rr-video" controls preload="metadata" playsinline src="../media/reel.mp4#t=0.5" aria-label="Recording of this practice call"></video>
            </div>
          </div>
          <div class="cal-metrics rr-stats">
            ${stat("Talk / listen", talk + "%", "You spoke · target 40 to 50%")}
            ${stat("Objections", resolved + " / " + objections, "Handled with a clear answer")}
            ${stat("Pace", wpm + " wpm", "Target 125 to 150")}
          </div>
        </article>

        ${o.feedback || ""}

        <div class="rr-grid">
          <section class="rr-main">
            <article class="card rr-card rr-c-skills">
              <div class="rr-card-head"><h2 class="sr-h">Score by skill</h2><span class="badge">Scoring rubric</span></div>
              <ul class="rr-bars">
                ${lines.map((l) => {
                  const pct = Math.round(ratio(l) * 100);
                  const low = pct < 80;
                  return `
                <li>
                  <div class="rr-bar-top"><span class="rr-bar-name">${esc(l.name)}</span><span class="rr-bar-pts tabular"><b>${l.earned}</b> / ${l.points}</span></div>
                  <span class="rr-bar${low ? " is-low" : ""}" aria-hidden="true"><span style="width:${pct}%"></span></span>
                </li>`;
                }).join("")}
              </ul>
            </article>


            <article class="card rr-card rr-card--transcript">
              <h2 class="sr-h">Transcript</h2>
              <div class="rp-chat">
                ${r.lines.map((l) => `
                <div class="rp-chat-line rp-chat-line--${l.who === "you" ? "learner" : "twin"}">
                  <b>${l.who === "you" ? esc(o.you) : esc(r.client)}</b>
                  <p>${esc(l.text)}</p>
                </div>`).join("")}
              </div>
            </article>
          </section>

          <section class="rr-side">
            <article class="card rr-card rr-c-goals">
              <h2 class="sr-h">Goals</h2>
              <ul class="rr-goals">
                ${r.goals.map((g) => `<li><span>${esc(g.text)}</span><span class="badge ${g.status === "Met" ? "badge--success" : g.status === "Partly" ? "badge--caution" : ""}">${g.status}</span></li>`).join("")}
              </ul>
            </article>


            <article class="card rr-card rr-c-well">
              <h2 class="sr-h rr-h--good">What went well</h2>
              <ul class="rr-notes">
                ${strong.map(({ l, i }, k) => `
                <li><span class="rr-note-ico rr-note-ico--good" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5l10 -10"/></svg></span><div><p class="rr-note-title">${esc(l.name)} · ${l.earned} / ${l.points}</p><p class="rr-note-text">${esc(RR_STRONG[(i + k) % RR_STRONG.length])}</p></div></li>`).join("")}
              </ul>
            </article>

            <article class="card rr-card rr-c-work">
              <h2 class="sr-h rr-h--grow">To work on</h2>
              <ul class="rr-notes">
                ${growth.map(({ l, i }, k) => `
                <li><span class="rr-note-ico rr-note-ico--grow" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7v6"/><path d="M12 17v.01"/></svg></span><div><div class="rr-note-row"><p class="rr-note-title">${esc(l.name)} · ${l.earned} / ${l.points}</p><button class="rr-jump" type="button" data-action="role-report-seek" data-t="${marks[(k + 1) % marks.length].t}">${rrClock(marks[(k + 1) % marks.length].t)} Jump</button></div><p class="rr-note-text">${esc(RR_GROWTH[(i + k) % RR_GROWTH.length])}</p></div></li>`).join("")}
              </ul>
            </article>


          </section>
        </div>
      </div>
  `;
}

function pageRoleReport() {
  const r = state.roleReport;
  return `
    <div class="page page--cal">
      <header class="create-bar">
        <button class="create-bar-back" type="button" data-action="role-report-close">${icon("back")} ${state.roleCreate ? "Back to roleplay" : "Back to Scenarios"}</button>
      </header>
      ${rrReportBody(r, {
        eyebrow: "Practice report · Try as learner",
        sub: `Spoke with <b>${esc(r.client)}</b> · ${esc(rrClock(r.seconds))} · Today`,
        actions: `<button class="btn btn--strong" type="button" data-action="role-report-again">Practise again</button>`,
        you: "You",
        passSub: "Good enough to share with learners.",
        failSub: "Tighten the lower scores below, then try again.",
        feedback: learnerFeedbackCard({ id: "try-" + r.taskId }, "How helpful was this roleplay?", { stars: Math.max(1, Math.min(5, Math.round(r.pct / 20))), comment: "", issues: r.issues || [] })
      })}
    </div>
  `;
}

// After a twin call the learner is asked for an NPS rating of the twin, then an optional line on why.
function npsDialog(twinName) {
  const n = state.demoNps;
  const score = n.score;
  const ask = score === null ? "Anything you want to add?" : score <= 2 ? "What went wrong?" : score === 3 ? "What could be better?" : "What did you like?";
  const crossIcon = `<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;
  const starIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" fill="currentColor"/></svg>`;
  const word = ["", "Not helpful", "Slightly helpful", "Somewhat helpful", "Helpful", "Very helpful"];
  return `
    <dialog class="issue-dialog confirm-dialog nps-dialog" id="nps-dialog" aria-labelledby="nps-title">
      <div class="confirm-card">
        <button class="btn btn--ghost btn--icon btn--sm confirm-close" type="button" data-action="nps-skip" aria-label="Close">${crossIcon}</button>
        <div class="confirm-copy">
          <h2 class="confirm-title" id="nps-title">How helpful is ${esc(twinName)}?</h2>
          <p class="confirm-sub">Your answer helps Olga improve it.</p>
        </div>
        <div class="nps-stars" role="radiogroup" aria-label="How helpful, 1 to 5 stars">
          ${[5, 4, 3, 2, 1].map((i) => `<button type="button" class="nps-star${score !== null && i <= score ? " is-on" : ""}" role="radio" aria-checked="${score === i}" aria-label="${i} star${i === 1 ? "" : "s"}, ${word[i]}" data-action="nps-score" data-id="${i}">${starIcon}</button>`).join("")}
        </div>
        <div class="nps-ends"><span>Not at all helpful</span><span>Extremely helpful</span></div>
        <div class="field nps-field${score === null ? " is-off" : ""}">
          <label class="label" for="nps-text">${esc(ask)}</label>
          <textarea class="input" id="nps-text" rows="3" placeholder="Optional" ${score === null ? "disabled" : ""}>${esc(n.text || "")}</textarea>
        </div>
        <div class="confirm-actions">
          <button class="btn btn--ghost" type="button" data-action="nps-skip">Skip</button>
          <button class="btn btn--strong" type="button" data-action="nps-submit" ${score === null ? "disabled" : ""}>Submit</button>
        </div>
      </div>
    </dialog>
  `;
}

function mountNpsDialog() {
  const dlg = document.getElementById("nps-dialog");
  if (!dlg) return;
  if (typeof dlg.showModal === "function" && !dlg.open) dlg.showModal();
  dlg.addEventListener("cancel", (ev) => {
    ev.preventDefault();
    actions["nps-skip"]();
  });
}

// The screen after End on a practice call: same recap as the twin talk's end screen.
function demoEndedScreen(model) {
  const twin = !!model.isTwin;
  const lines = model.lines.slice(0, state.demoReveal).concat(state.demoExtra);
  const marks = Object.values(state.demoMarks || {});
  const up = marks.filter((m) => m === "up").length;
  const down = marks.filter((m) => m === "down").length;
  const accuracy = up + down ? Math.round((up / (up + down)) * 100) + "%" : "—";
  const turns = lines.filter((l) => l.who !== "twin").length;
  const metric = (label, value, note) => `
    <article class="an-stat">
      <p class="overline">${esc(label)}</p>
      <p class="an-value tabular">${esc(value)}</p>
      <p class="an-note">${esc(note)}</p>
    </article>
  `;
  const name = model.persona ? model.persona.name : "Client";
  const face = model.persona ? model.persona.face : "";
  const m = Math.floor(state.demoSeconds / 60);
  const duration = m + ":" + String(state.demoSeconds % 60).padStart(2, "0");
  // A learner's call with the twin is a doubt, not a graded session: questions, how much came from Olga's own material, and speed.
  const answers = lines.filter((l) => l.who === "twin").length;
  const reply = (1.2 + (turns % 5) * 0.3).toFixed(1) + " s";
  const metrics = twin
    ? metric("Questions asked", String(turns), turns === 1 ? "question" : "questions") + metric("From your content", answers ? answers + " of " + answers : "—", "Answers backed by your material") + metric("Reply time", reply, "Average per answer")
    : metric("Your turns", String(turns), turns === 1 ? "message" : "messages") + metric("Helpful replies", String(up), "Thumbs up") + metric("Needs work", String(down), "Thumbs down");
  const back = state.roleCreate ? "Back to roleplay" : twin ? "Back to Twin agents" : "Done";
  const log = lines.map((line, i) => `
    <div class="demo-line ${line.who === "twin" ? "is-twin" : "is-lead"}">
      <p class="demo-who">${line.who === "twin" ? esc(name) : "You"}</p>
      <div class="demo-bubble">${esc(line.text || (line.file ? line.file.name : ""))}</div>
    </div>
  `).join("");
  return `
    <div class="page page--talk talk-page talk-ended">
      <header class="create-bar">
        <button class="create-bar-back" type="button" data-action="demo-done">${icon("back")} ${esc(model.title)}</button>
      </header>
      <div class="talk-end-body">
        <span class="talk-end-label">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2 3 3 0 0 1-3 3 16 16 0 0 1-14.95-8.299 16 16 0 0 1-1.05-4.7 3 3 0 0 1 3-3h3a2 2 0 0 1 2 2l.01.42a2 2 0 0 1-.31 1.07l-.38.48a1 1 0 0 0-.1 1.1c.1.2.2.3.4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          Call ended
        </span>
        <div class="talk-end-photo">${twin ? `<video src="../media/twin-listening.mp4" autoplay muted loop playsinline preload="auto" aria-hidden="true"></video>` : `<img src="${esc(face)}" alt="">`}</div>
        <h2 class="talk-end-name">${esc(name)}</h2>
        <p class="talk-end-time">Time spoke <span class="tabular">${esc(duration)}</span>${state.demoNps && state.demoNps.submitted && state.demoNps.score !== null ? ` · Rated <span class="tabular">${state.demoNps.score} / 10</span>` : ""}</p>
        <button class="talk-end-link" type="button" data-action="demo-log">View transcript <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        <div class="cal-metrics talk-end-metrics">${metrics}</div>
        <div class="talk-end-actions">
          <button class="btn btn--strong" type="button" data-action="open-demo" data-id="${esc(state.demoTaskId)}">${twin ? "Speak again" : "Practice again"}</button>
          <button class="btn btn--secondary" type="button" data-action="demo-done">${esc(back)}</button>
        </div>
      </div>
      ${twin && state.demoNps && state.demoNps.open ? npsDialog(name) : ""}
      <aside class="talk-history${state.demoLogOpen ? "" : " is-hidden"}" aria-label="Conversation history">
        <div class="demo-chat-head">
          <h2 class="demo-chat-title">Conversation</h2>
          <button class="demo-chat-close" type="button" data-action="demo-log" aria-label="Close conversation">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
          </button>
        </div>
        <div class="demo-chat-body">${log}</div>
      </aside>
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
        <div class="auth-card auth-card--verify">
          <canvas class="auth-confetti" aria-hidden="true"></canvas>
          <button class="btn btn--ghost btn--icon btn--sm auth-close" type="button" data-action="close-auth" aria-label="Close">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.5"/></svg>
          </button>
          <div class="auth-copy">
            <span class="confirm-tile tt-tile-neutral auth-verify-ico" aria-hidden="true"><span class="confirm-tile-in">${obIco('<path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10"/><path d="M3 7l9 6l9 -6"/>', 20)}</span></span>
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
  "ob-step"(el) {
    const n = Number(el.dataset.step);
    if (n > state.ob.maxStep) return;
    obStopTimer();
    state.ob.page = ["", "link", "found", "persona"][n];
    render();
  },
  "ob-type-open"() {
    state.ob.typeOpen = !state.ob.typeOpen;
    state.ob.useOpen = false;
    render();
  },
  "ob-type-pick"(el) {
    state.ob.type = el.dataset.id;
    state.ob.typeErr = false;
    state.ob.typeOpen = false;
    render();
  },
  "ob-use-open"() {
    state.ob.typeOpen = false;
    state.ob.useOpen = !state.ob.useOpen;
    render();
  },
  "ob-use"(el) {
    const o = state.ob;
    const id = el.dataset.id;
    const next = o.use.includes(id) ? o.use.filter((x) => x !== id) : o.use.concat(id);
    if (next.length) o.use = next;
    render();
  },
  "ob-next"() {
    const o = state.ob;
    o.linkErr = !validLink(o.link);
    o.typeErr = !o.type;
    if (o.linkErr || o.typeErr) { render(); return; }
    o.useOpen = false;
    o.typeOpen = false;
    o.searching = true;
    render();
    setTimeout(() => {
      if (!state.ob || state.ob.page !== "link") return;
      state.ob.searching = false;
      state.ob.page = "found";
      state.ob.fs = {};
      state.ob.frun = Date.now();
      obFoundSched = new Set();
      state.ob.maxStep = Math.max(state.ob.maxStep, 2);
      render();
    }, 2800);
  },
  "ob-back"() {
    state.ob.page = "link";
    render();
  },
  "ob-not-me"(el) {
    const p = state.ob.found.find((x) => x.id === el.dataset.id);
    if (p) p.on = !p.on;
    render();
  },
  "ob-add-link"() {
    const o = state.ob;
    const v = (o.extra || "").trim();
    if (!validLink(v)) { toast("Try a profile or website link."); return; }
    o.found.push({ id: "x" + o.found.length, tile: "link", name: "Link", handle: v, meta: "Added by you", on: true });
    o.extra = "";
    render();
  },
  "ob-looks-right"() {
    state.ob.page = "persona";
    state.ob.maxStep = 3;
    render();
  },
  "ob-voice-record"() {
    state.ob.page = "ready";
    render();
  },
  "ob-voices"() {
    state.ob.page = "voices";
    render();
  },
  "ob-voice-back"() {
    state.ob.page = "persona";
    render();
  },
  "ob-pick-lib"(el) {
    state.ob.voice = "library";
    state.ob.libId = el.dataset.id;
    state.presenceVoice = "library";
    state.presenceLibrary = el.dataset.id;
    state.ob.page = "recorded";
    render();
  },
  "ob-voice-change"() {
    state.ob.page = "voices";
    render();
  },
  "ob-voice-later"() {
    state.ob.voice = "library";
    state.ob.libId = "coaching";
    obStartCall();
  },
  "ob-voice-start"() {
    obStopTimer();
    state.ob.page = "recording";
    state.ob.recSecs = 0;
    state.ob.words = 0;
    render();
    obWordTimer = setInterval(() => {
      const o = state.ob;
      if (!o || o.page !== "recording") { obStopTimer(); return; }
      if (o.words >= OB_WORDS.length) { clearInterval(obWordTimer); obWordTimer = 0; return; }
      o.words += 1;
      const w = document.querySelectorAll(".vs-script .vs-w")[o.words - 1];
      if (w) w.classList.add("is-read");
      if (o.words >= OB_MIN_WORDS) {
        const stop = document.querySelector('[data-action="ob-voice-stop"]');
        if (stop) stop.disabled = false;
      }
    }, obWordMs);
    obTimer = setInterval(() => {
      const o = state.ob;
      if (!o || o.page !== "recording") { obStopTimer(); return; }
      o.recSecs += 1;
      const el = document.getElementById("ob-timer");
      if (el) el.textContent = obClock(o.recSecs);
      if (o.recSecs >= 30) actions["ob-voice-stop"]();
    }, 1000);
  },
  "ob-voice-stop"() {
    obStopTimer();
    if (state.ob.recSecs < 1) state.ob.recSecs = 28;
    state.ob.voice = "record";
    state.ob.page = "recorded";
    render();
  },
  "ob-voice-retry"() {
    obStopTimer();
    state.ob.recSecs = 0;
    state.ob.page = "ready";
    render();
  },
  "ob-voice-play"() {
    toast("Playing your recording…");
  },
  "ob-voice-finish"() {
    // state.ob.voice was set when the recording stopped or a library voice was picked.
    obStartCall();
  },
  "ob-ready-agents"() {
    if (obGateReady("ob-ready-agents")) return;
    actions.nav({ dataset: { id: "setup" } });
  },
  "ob-ready-knowledge"() {
    if (obGateReady("ob-ready-knowledge")) return;
    obGoKnowledge();
  },
  "ob-speak-again"() {
    if (obGateReady("ob-speak-again")) return;
    state.obCall = true;
    actions["talk-open"]();
  },
  "talk-about"() {
    // Expanding the pill while "Why this answer" is open closes that panel and shows the card.
    if (state.botWhy && state.botWhy.scope === "talk") {
      state.ob.aboutOpen = true;
      whyClose();
      return;
    }
    // The card and the pill share a view-transition name, so the browser morphs one into the other
    // and slides the call column across, instead of swapping them in a single frame.
    const swap = () => {
      state.ob.aboutOpen = !state.ob.aboutOpen;
      render();
    };
    if (document.startViewTransition && !matchMedia("(prefers-reduced-motion: reduce)").matches) document.startViewTransition(swap);
    else swap();
  },
  "talk-about-edit"(el) {
    if (obGate("talk-about-edit", el)) return;
    obGoStyle();
  },
  "talk-chip"(el) {
    const off = state.ob.chipsOff;
    const i = off.indexOf(el.dataset.id);
    if (i < 0) off.push(el.dataset.id);
    else off.splice(i, 1);
    render();
  },
  "talk-record"() {
    clearTimeout(talkTimer);
    talkTimer = 0;
    talkSpeechStop();
    state.talkOpen = false;
    state.talk = null;
    state.obCall = false;
    state.twinReady = false;
    state.ob.page = "ready";
    render();
  },
  "talk-kn-later"() {
    if (state.talk) state.talk.knOpen = false;
    render();
  },
  "talk-kn-add"() {
    if (state.talk) state.talk.knOpen = false;
    if (!state.accountReady) {
      state.auth = "signup";
      state.authError = "";
      state.authPendingAction = "ob-add-knowledge";
      state.afterFocus = "auth-email";
      render();
      return;
    }
    obGoKnowledge();
  },
  "sty-tab"(el) {
    state.sty.tab = el.dataset.id;
    state.sty.add = "";
    state.sty.editRule = "";
    render();
  },
  "open-style-full"() {
    state.sty.tab = "about";
    // Cancel puts everything back the way it was when this card opened.
    state.styBefore = JSON.parse(JSON.stringify(state.sty));
    state.studioDialog = "stylefull";
    state.studioFocus = "style";
    render();
  },
  "cancel-style-full"() {
    if (state.styBefore) state.sty = state.styBefore;
    state.styBefore = null;
    state.studioDialog = null;
    render();
  },
  "close-style"() {
    state.studioDialog = null;
    state.sty.editRule = "";
    state.sty.aboutEdit = false;
    state.sty.add = "";
    state.sty.test = null;
    render();
  },
  "save-style-full"() {
    state.styBefore = null;
    state.sty.editRule = "";
    state.studioDialog = null;
    state.sty.aboutEdit = false;
    state.sty.add = "";
    state.sty.test = null;
    render();
    toast("Training style saved.");
  },
  "about-edit"() {
    state.sty.aboutEdit = true;
    render();
  },
  "edit-about-point"() {
    state.sty.aboutEdit = true;
    render();
  },
  "about-save"() {
    state.sty.aboutEdit = false;
    state.sty.points = state.sty.points.map((p) => p.trim()).filter(Boolean);
    render();
  },
  "about-confirm"() {
    state.sty.aboutOk = true;
    render();
  },
  "overview-edit"(el) {
    // Edit in place: the paragraph turns into a text box where it stands, and goes back when you click away.
    if (!el || el.tagName === "TEXTAREA") return;
    const ta = document.createElement("textarea");
    ta.className = "input ts-overview-edit";
    ta.setAttribute("data-sty", "overview");
    ta.setAttribute("aria-label", "About my twin");
    ta.value = state.sty.overview;
    el.replaceWith(ta);
    ta.addEventListener("keydown", (e) => { if (e.key === "Escape") ta.blur(); });
    ta.addEventListener("blur", () => {
      state.sty.overview = ta.value.trim() || state.sty.overview;
      const p = document.createElement("p");
      p.className = "ts-overview ts-overview--editable";
      p.setAttribute("role", "button");
      p.setAttribute("tabindex", "0");
      p.setAttribute("data-action", "overview-edit");
      p.setAttribute("title", "Click to edit");
      p.textContent = state.sty.overview;
      ta.replaceWith(p);
    });
    ta.focus();
    ta.setSelectionRange(ta.value.length, ta.value.length);
  },
  "sty-edit-rule"(el) {
    const r = state.sty.dos.concat(state.sty.donts).find((x) => x.id === el.dataset.id);
    if (!r) return;
    state.sty.editRule = r.id;
    state.sty.ruleDraft = r.text;
    state.afterFocus = "";
    render();
    const box = document.querySelector("[data-sty-rule]");
    if (box) { box.focus(); box.setSelectionRange(box.value.length, box.value.length); }
  },
  "sty-rule-save"(el) {
    const s = state.sty;
    const r = s.dos.concat(s.donts).find((x) => x.id === el.dataset.id);
    const text = (s.ruleDraft || "").trim();
    if (r && text) r.text = text;
    s.editRule = "";
    s.ruleDraft = "";
    render();
  },
  "sty-rule-cancel"() {
    state.sty.editRule = "";
    state.sty.ruleDraft = "";
    render();
  },
  "sty-toggle"(el) {
    const r = state.sty.dos.concat(state.sty.donts).find((x) => x.id === el.dataset.id);
    if (r) r.on = !r.on;
    render();
  },
  "add-do"() {
    state.sty.add = "do";
    state.sty.addText = "";
    render();
  },
  "add-dont"() {
    state.sty.add = "dont";
    state.sty.addText = "";
    render();
  },
  "sty-add-cancel"() {
    state.sty.add = "";
    render();
  },
  "sty-add-save"(el) {
    const s = state.sty;
    const text = (s.addText || "").trim();
    if (!text) return;
    const list = el.dataset.id === "do" ? s.dos : s.donts;
    list.push({ id: "c" + (s.dos.length + s.donts.length), text, sub: "Added by you", on: true, mine: true });
    s.add = "";
    s.addText = "";
    render();
  },
  "test-rule"(el) {
    const s = state.sty;
    const kind = s.dos.some((r) => r.id === el.dataset.id) ? "do" : "dont";
    const r = s.dos.concat(s.donts).find((x) => x.id === el.dataset.id);
    if (!r) return;
    const t = STY_TESTS[r.id] || ["A client asks you about a new off-plan launch.", `Here’s how I’d answer, following this rule: “${r.text}”.`, "Rule followed"];
    s.test = { id: r.id, kind, text: r.text, vote: null, draft: "", msgs: [{ who: "learner", text: t[0] }, { who: "twin", text: t[1], badge: t[2] }] };
    render();
  },
  "close-rule-test"() {
    state.sty.test = null;
    render();
  },
  "rule-test-ask"() {
    const t = state.sty.test;
    const q = t && (t.draft || "").trim();
    if (!q) return;
    t.msgs.push({ who: "learner", text: q });
    t.msgs.push({ who: "twin", text: `Following “${t.text}”: here’s how I’d put it, in your words, for that question.`, badge: "Rule followed" });
    t.draft = "";
    t.vote = null;
    render();
    const chat = document.getElementById("rt-chat");
    if (chat) chat.scrollTop = chat.scrollHeight;
  },
  "rt-vote"(el) {
    const t = state.sty.test;
    if (!t) return;
    t.vote = el.dataset.id;
    render();
    if (t.vote === "off") toast("Noted. We’ll tighten this rule.");
  },
  "kn-material"(el) {
    const n = el.files ? el.files.length : 0;
    if (n) {
      state.knUploads = (state.knUploads || 0) + n;
      toast(`${n} ${n === 1 ? "file" : "files"} added to your twin’s knowledge.`);
    }
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
    if (pending === "ob-add-knowledge") {
      obGoKnowledge();
    } else if (pending === "connect-drive") {
      state.drive = true;
      toast("Google Drive connected.");
    } else if (pending === "connect-notion") {
      state.notionOpen = true;
      state.afterFocus = "notion";
      render();
    } else if (pending && pending.startsWith("ready:")) {
      render();
      actions[pending.slice(6)]({ dataset: {} });
    } else if (pending && pending.startsWith("talk:")) {
      // Carry on with what you were doing on the call: the rating, or the transcript.
      const [, act, id] = pending.split(":");
      render();
      const btn = id ? document.querySelector('[data-action="' + act + '"][data-id="' + id + '"]') : document.querySelector('[data-action="' + act + '"]');
      actions[act](btn || { dataset: { id } });
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
  "bq-pick"(el) {
    const scope = el.dataset.scope, id = el.dataset.id;
    if (scope === "bq-status") state.brainQView = id === "history" ? "history" : "open";
    else if (scope === "bq-agent") state.bq.agent = id;
    else if (scope === "bq-date") state.bq.date = id;
    state.askMenu = "";
    state.inboxAnswering = "";
    render();
  },
  "bq-search"() {
    state.bq.search = !state.bq.search;
    if (!state.bq.search) state.bq.q = "";
    render();
    const box = document.querySelector('[data-bq="q"]');
    if (box) box.focus();
  },
  "brain-qview"(el) {
    state.brainQView = el.dataset.id === "history" ? "history" : "open";
    state.inboxAnswering = "";
    render();
  },
  "brain-iview"(el) {
    state.brainIView = ["resolved", "corrected"].includes(el.dataset.id) ? el.dataset.id : "open";
    render();
  },
  "brain-tab"(el) {
    state.brainTab = el.dataset.id;
    state.inboxAnswering = "";
    render();
  },
  "studio-view-profile"() {
    state.brainTab = "knowledge";
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
    // Ticks apply as you go; Cancel puts them back the way they were when the card opened.
    state.knSnap = { ticks: state.profiles.map((p) => [p.id, p.ticked]), notion: state.notion };
    state.studioDialog = "knowledge";
    state.studioFocus = "knowledge";
    render();
  },
  "cancel-knowledge"() {
    const snap = state.knSnap;
    if (snap) {
      snap.ticks.forEach(([id, ticked]) => { const p = state.profiles.find((x) => x.id === id); if (p) p.ticked = ticked; });
      state.notion = snap.notion;
    }
    state.knSnap = null;
    state.studioDialog = null;
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
      library: state.presenceLibrary,
      secs: state.ob.recSecs
    };
    state.presenceLibOpen = false;
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
    state.botAsk = "";
    state.botManual = null;
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
  "bot-manual-toggle"() {
    state.botManual = state.botManual !== true;
    render();
  },
  "bot-suggest"(el) {
    state.botAsk = (botTeeSuggestions()[Number(el.dataset.id)] || {}).text || "";
    state.afterFocus = "bot-ask";
    render();
    const box = document.getElementById("bot-ask");
    if (box) {
      box.style.height = "auto";
      box.style.height = box.scrollHeight + "px";
    }
  },
  "bot-mic"() {
    if (state.listening) stopListening();
    else startListening("bot-ask");
  },
  "bot-ask"() {
    const prompt = (state.botAsk || "").trim();
    const d = state.botDraft;
    if (!d) return;
    if (!prompt) {
      toast("Tell me what the twin agent should help with first.");
      state.afterFocus = "bot-ask";
      render();
      return;
    }
    if (state.listening) stopListening();
    d.askName = botAskName(prompt);
    d.askDesc = prompt;
    // The use case box opens and starts matching the knowledge base; the rest stays as it is.
    state.botManual = true;
    d.knowState = "loading";
    render();
    clearTimeout(botKnowTimer);
    botKnowTimer = setTimeout(() => {
      if (state.botDraft !== d || !state.botCreate || state.botStep !== 1) return;
      d.knowState = "done";
      render();
    }, 2400);
  },
  "bot-next"() {
    const d = state.botDraft;
    if (!d) return;
    if (state.botStep === 2) return;
    state.botStep = 2;
    render();
    botStartProcessing();
  },
  "bot-credit-pick"(el) {
    if (!state.botDraft) return;
    state.botDraft.minutes = Number(el.dataset.id);
    render();
  },
  "bot-credit-save"() {
    const d = state.botDraft;
    if (!d || d.creditSaved) return;
    const input = document.getElementById("bot-minutes");
    if (input) d.minutes = Number(input.value) || 0;
    if (!(d.minutes >= 5)) {
      toast("Assign at least 5 minutes.");
      if (input) input.focus();
      return;
    }
    if (d.minutes > creditLeft()) {
      toast(`You only have ${creditLeft()} minutes left.`);
      if (input) input.focus();
      return;
    }
    d.creditSaved = true;
    botLinkStart();
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
      id: d.id || "custom-bot-" + Date.now(),
      label: "Post-class",
      title: d.name.trim() || "Untitled bot",
      blurb: (d.description || "").trim() || "A bot made from a course.",
      minutes: 0,
      who: "Learners",
      quote: BOT_STARTERS[0],
      sessions: 0
    });
    state.botCreate = false;
    state.studioTab = "bots";
    toast("Agent created.");
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
      if (d.calDone === 1) toast("Calibration done.");
      render();
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
    state.roleTab = 1;
    state.roleTabsDone = [];
    state.teeOpen = true;
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
      src: d.ownSrc || photo.src,
      own: !!d.ownSrc,
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
  "twin-bot-history"(el) {
    // Twin sessions, already filtered to this agent (Olga's all-use-cases twin shows every agent).
    const id = el.dataset.id;
    state.twinSessFilter = { cohort: "all", bot: twinBots().some((bot) => bot.id === id) ? id : "all", learner: "all", date: state.twinSessFilter.date };
    state.roleMenuId = "";
    state.askMenu = "";
    state.botDetailId = "";
    state.calOverviewId = "";
    state.nav = "calibrations";
    render();
    const scroller = document.querySelector(".main");
    if (scroller) scroller.scrollTop = 0;
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
  "feature-toggle"(el) {
    const key = el.dataset.key === "roleplay" ? "roleplay" : "twin";
    const turningOff = state.features[key];
    // Keep at least one feature on, so the menu is never empty.
    if (turningOff && !Object.keys(state.features).some((k) => k !== key && state.features[k])) {
      toast("Keep at least one feature on.");
      return;
    }
    state.features[key] = !state.features[key];
    render();
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
  "credit-open"() {
    state.creditOpen = !state.creditOpen;
    render();
  },
  "credit-buy"() {
    state.creditOpen = false;
    render();
    toast("Top-ups open soon. Ask the TrainerTwin team to add minutes for now.");
  },
  "credit-close"() {
    state.creditOpen = false;
    render();
  },
  "acc-tab"(el) {
    state.accTab = el.dataset.id;
    state.askMenu = "";
    render();
  },
  "acc-filter-pick"(el) {
    const key = el.dataset.key === "role" ? "accRole" : "accCohort";
    state[key] = el.dataset.id;
    state.askMenu = "";
    render();
    const btn = document.querySelector('[data-scope="acc-' + el.dataset.key + '"]');
    if (btn) btn.focus();
  },
  "acc-new-cohort"() { toast("Name the cohort, then add learners and pick what they get access to."); },
  "acc-invite-learner"() { toast("Invite link copied. Share it with your learners."); },
  "acc-invite-member"() { toast("Invite sent. They will get an email to join your team."); },
  "inbox-tab"(el) {
    state.inboxTab = el.dataset.id;
    state.inboxAnswering = "";
    if (state.inboxTab !== "twin" && state.inboxView === "ask") state.inboxView = "all";
    render();
  },
  "inbox-view"(el) {
    state.inboxView = el.dataset.id;
    state.inboxAnswering = "";
    render();
  },
  "inbox-answer"(el) {
    state.inboxAnswering = el.dataset.id;
    state.inboxDraft = "";
    render();
    const box = document.getElementById("inbox-answer-text");
    if (box) box.focus();
  },
  "inbox-answer-cancel"() {
    state.inboxAnswering = "";
    render();
  },
  "inbox-answer-send"(el) {
    const text = state.inboxDraft.trim();
    if (!text) {
      toast("Write an answer first.");
      const box = document.getElementById("inbox-answer-text");
      if (box) box.focus();
      return;
    }
    const item = INBOX_QUESTIONS.find((q) => q.id === el.dataset.id);
    state.inboxDone.push(el.dataset.id);
    state.inboxAnswered.push({ id: el.dataset.id, answer: text });
    state.inboxAnswering = "";
    render();
    toast(`Answer sent to ${item ? item.who.split(" ")[0] : "the learner"}. Your twin will use it next time.`);
  },
  "inbox-dismiss"(el) {
    state.inboxDone.push(el.dataset.id);
    render();
    toast("Question dismissed.");
  },
  "inbox-issue-resolve"(el) {
    state.askMenu = "";
    state.inboxDone.push(el.dataset.id);
    state.issueResolved.push(el.dataset.id);
    render();
    toast("Issue marked as resolved.");
  },
  "inbox-issue-correct"(el) {
    state.askMenu = "";
    if (el && el.dataset.id) {
      state.inboxDone.push(el.dataset.id);
      state.issueCorrected.push(el.dataset.id);
    }
    state.brainTab = "knowledge";
    actions.nav({ dataset: { id: "knowledge" } });
    toast("Add the right answer here. The issue is now under Corrected.");
  },
  "inbox-issue-open"(el) {
    actions.nav({ dataset: { id: "sessions" } });
    actions["session-open"]({ dataset: { role: el.dataset.role, id: el.dataset.id } });
  },
  "inbox-open-access"(el) {
    // Access lives on Accounts > Learners, on the Twin or Roleplay tab.
    state.accTab = el.dataset.id === "roleusers" ? "roleplay" : "twin";
    actions.nav({ dataset: { id: "acclearners" } });
  },
  "bot-assign-open"() {
    const d = state.botDraft;
    if (!d) return;
    if (!d.id) d.id = "custom-bot-" + Date.now();
    actions["role-assign-open"]({ dataset: { id: d.id } });
  },
  "role-assign-open"(el) {
    state.assignRole = el.dataset.id;
    state.assignPick = [];
    state.assignPickMins = {};
    state.assignPickUntil = {};
    state.assignUntilTouched = {};
    state.assignCohort = "all";
    state.roleMenuId = "";
    render();
  },
  "role-member-assign"(el) {
    // Asks first, then changes the status and says so in a toast.
    const roleId = el.dataset.role;
    const email = el.dataset.id;
    const user = ROLE_USERS.find((u) => u.email === email);
    if (!user) return;
    const row = sharedRowById(roleId) || taskById(roleId) || { title: "this roleplay" };
    const list = roleAssignedList(roleId);
    const removing = list.includes(email);
    askConfirm({
      kind: "assign",
      title: removing ? "Unassign " + user.name + "?" : "Assign to " + user.name + "?",
      sub: removing
        ? "“" + row.title + "” will no longer show up for " + user.name + "."
        : "“" + row.title + "” will show up for " + user.name + " to practise.",
      label: removing ? "Unassign" : "Assign",
      run: () => {
        const at = list.indexOf(email);
        if (removing && at >= 0) list.splice(at, 1);
        if (!removing && at < 0) list.push(email);
        render();
        toast(removing ? "Unassigned " + user.name + "." : "Assigned to " + user.name + ".");
      }
    });
  },
  "nps-score"(el) {
    if (!state.demoNps) return;
    state.demoNps.score = Number(el.dataset.id);
    render();
    const box = document.getElementById("nps-text");
    if (box) box.focus();
  },
  "nps-submit"() {
    const n = state.demoNps;
    if (!n || n.score === null) return;
    n.submitted = true;
    n.open = false;
    render();
    toast("Thanks. Your rating was sent to Olga.");
  },
  "nps-skip"() {
    if (state.demoNps) state.demoNps.open = false;
    render();
  },
  "role-report-close"() {
    state.roleReport = null;
    render();
  },
  "role-report-again"() {
    const id = state.roleReport && state.roleReport.taskId;
    state.roleReport = null;
    if (id) actions["open-demo"]({ dataset: { id } });
    else render();
  },
  "role-report-drill"(el) {
    state.roleReport = null;
    actions["open-demo"]({ dataset: { id: el.dataset.id } });
  },
  "role-report-seek"(el) {
    const clip = document.querySelector(".rr-video, .sr-rec video");
    if (!clip) return;
    const t = Number(el.dataset.t) || 0;
    const go = () => { try { clip.currentTime = Math.min(t, (clip.duration || t) - 0.1); } catch (err) { /* not seekable yet */ } clip.play().catch(() => {}); };
    if (clip.readyState >= 1) go();
    else clip.addEventListener("loadedmetadata", go, { once: true });
    clip.scrollIntoView({ block: "center", behavior: "smooth" });
  },
  "toast-close"() {
    clearTimeout(toastTimer);
    state.toast = null;
    render();
  },
  "role-assign-close"() {
    state.assignRole = "";
    closeAssignCal();
    state.assignPick = [];
    state.assignPickMins = {};
    state.assignPickUntil = {};
    state.assignUntilTouched = {};
    render();
  },
  "role-assign-pick"(el) {
    // Ticking only marks the person; the Assign button at the bottom does the work. Nothing re-renders, so search and scroll stay put.
    const email = el.dataset.id;
    const at = state.assignPick.indexOf(email);
    if (el.checked && at < 0) state.assignPick.push(email);
    if (!el.checked && at >= 0) state.assignPick.splice(at, 1);
    const rowEl = el.closest(".assign-row");
    const opts = rowEl && rowEl.querySelector(".assign-opts");
    if (opts) {
      // Minutes show before a learner is picked (greyed out at 30 min); ticking switches the dropdown on.
      if (el.checked && !state.assignPickMins[email]) state.assignPickMins[email] = 30;
      if (el.checked && !state.assignPickUntil[email]) state.assignPickUntil[email] = isoInDays(30);
      const until = opts.querySelector(".assign-until");
      if (until) until.value = state.assignPickUntil[email] || "";
      const mins = opts.querySelector(".assign-minbtn");
      if (mins) { mins.firstElementChild.textContent = (state.assignPickMins[email] || 30) + " min"; mins.disabled = !el.checked; }
      if (!el.checked) closeAssignMinMenu();
    }
    const n = state.assignPick.length;
    const label = document.getElementById("assign-picked");
    if (label) label.textContent = n ? " · " + n + " selected" : "";
    syncAssignConfirm(el.closest(".assign-dialog"));
    syncAssignAll(el.closest(".assign-dialog"));
  },
  "role-assign-all"(el) {
    // Ticks (or clears) everyone currently shown; people already assigned stay as they are.
    const box = el.closest(".assign-dialog");
    const on = el.checked; // each pick re-syncs this box, so read it once up front
    box.querySelectorAll(".assign-row").forEach((r) => {
      const c = r.querySelector(".check");
      if (r.hidden || c.disabled || c.checked === on) return;
      c.checked = on;
      actions["role-assign-pick"](c);
    });
    syncAssignAll(box);
  },
  "role-assign-until"(el) {
    if (!el.value) {
      // Clearing the date on a new pick leaves it unset; an assigned learner keeps their saved date.
      if (!roleAssignedList(state.assignRole).includes(el.dataset.id)) {
        delete state.assignPickUntil[el.dataset.id];
        delete state.assignUntilTouched[el.dataset.id];
      }
      syncAssignConfirm(document.getElementById("assign-dialog"));
      return;
    }
    if (roleAssignedList(state.assignRole).includes(el.dataset.id)) {
      (state.assignUntil[state.assignRole] || (state.assignUntil[state.assignRole] = {}))[el.dataset.id] = el.value;
    } else {
      state.assignPickUntil[el.dataset.id] = el.value;
      // Once a date is chosen the "30 days" label gives way to the date itself.
      state.assignUntilTouched[el.dataset.id] = true;
      const wrap = el.closest(".assign-date");
      if (wrap) wrap.classList.remove("is-default");
    }
    syncAssignConfirm(document.getElementById("assign-dialog"));
  },
  "assign-cohort"(el) {
    state.assignCohort = el.value;
    applyAssignFilters(el.closest(".assign-dialog"));
  },
  "assign-cal-open"(el) {
    const card = el.closest(".confirm-card");
    if (!card) return;
    const same = document.querySelector('.assign-cal[data-id="' + CSS.escape(el.dataset.id) + '"]');
    closeAssignCal();
    closeAssignMinMenu();
    if (same) return;
    const base = el.value || isoInDays(30);
    const cal = document.createElement("div");
    cal.className = "assign-cal";
    cal.dataset.id = el.dataset.id;
    cal.dataset.y = base.slice(0, 4);
    cal.dataset.m = String(Number(base.slice(5, 7)) - 1);
    cal.setAttribute("role", "dialog");
    cal.setAttribute("aria-label", "Choose the access end date");
    card.appendChild(cal);
    renderAssignCal(cal);
    const r = el.getBoundingClientRect();
    const w = cal.offsetWidth;
    cal.style.left = Math.max(8, Math.min(r.right - w, window.innerWidth - w - 8)) + "px";
    cal.style.top = r.bottom + 6 + "px";
    if (r.bottom + 6 + cal.offsetHeight > window.innerHeight - 8) cal.style.top = Math.max(8, r.top - 6 - cal.offsetHeight) + "px";
  },
  "assign-cal-nav"(el) {
    const cal = el.closest(".assign-cal");
    const d = new Date(Number(cal.dataset.y), Number(cal.dataset.m) + Number(el.dataset.step), 1);
    cal.dataset.y = d.getFullYear();
    cal.dataset.m = d.getMonth();
    renderAssignCal(cal);
  },
  "assign-cal-pick"(el) {
    const cal = el.closest(".assign-cal");
    const input = [...document.querySelectorAll(".assign-until")].find((i) => i.dataset.id === cal.dataset.id);
    closeAssignCal();
    if (!input) return;
    input.value = el.dataset.iso;
    actions["role-assign-until"](input);
    input.focus();
  },
  "assign-find-toggle"(el) {
    // The search is open by default; the icon just puts the cursor in it.
    const box = el.closest(".assign-find");
    const input = box && box.querySelector(".assign-search");
    if (input) input.focus();
  },
  "role-assign-min-open"(el) {
    // A small listbox opened under the button, placed with fixed coordinates so the scrolling list can't clip it.
    const already = el.getAttribute("aria-expanded") === "true";
    closeAssignMinMenu();
    if (already) return;
    const card = el.closest(".confirm-card");
    if (!card) return;
    const isDone = roleAssignedList(state.assignRole).includes(el.dataset.id);
    const cur = isDone ? agentMinutes(state.assignRole, el.dataset.id) : state.assignPickMins[el.dataset.id] || 30;
    const menu = document.createElement("div");
    menu.className = "twin-hero-ask-menu assign-min-menu";
    menu.setAttribute("role", "listbox");
    menu.innerHTML = ASSIGN_MINUTES.map((m) => `<button type="button" class="twin-hero-ask-opt${m === cur ? " is-selected" : ""}" role="option" aria-selected="${m === cur}" data-action="role-assign-min-pick" data-id="${esc(el.dataset.id)}" data-min="${m}">${m} min</button>`).join("");
    card.appendChild(menu);
    const r = el.getBoundingClientRect();
    const w = Math.max(menu.offsetWidth, 132);
    menu.style.cssText = "position:fixed;min-width:" + w + "px;left:" + Math.max(8, r.right - w) + "px;top:" + (r.bottom + 4) + "px;z-index:5";
    if (r.bottom + 4 + menu.offsetHeight > window.innerHeight - 8) menu.style.top = Math.max(8, r.top - 4 - menu.offsetHeight) + "px";
    el.setAttribute("aria-expanded", "true");
  },
  "role-assign-min-pick"(el) {
    const email = el.dataset.id;
    if (roleAssignedList(state.assignRole).includes(email)) {
      (state.assignMins[state.assignRole] || (state.assignMins[state.assignRole] = {}))[email] = Number(el.dataset.min);
    } else state.assignPickMins[email] = Number(el.dataset.min);
    const btn = [...document.querySelectorAll(".assign-minbtn")].find((b) => b.dataset.id === email);
    if (btn) btn.firstElementChild.textContent = el.dataset.min + " min";
    closeAssignMinMenu();
    syncAssignConfirm(document.getElementById("assign-dialog"));
    if (btn) btn.focus();
  },
  "role-assign-confirm"() {
    const id = state.assignRole;
    const list = roleAssignedList(id);
    const added = state.assignPick.filter((email) => !list.includes(email));
    const agent = isTwinAgentId(id);
    const finishDraft = !!(draftAgent() && draftAgent().id === id);
    if (agent) {
      const store = state.assignMins[id] || (state.assignMins[id] = {});
      const until = state.assignUntil[id] || (state.assignUntil[id] = {});
      added.forEach((email) => { store[email] = state.assignPickMins[email] || 30; until[email] = state.assignPickUntil[email] || ASSIGN_UNTIL_DEFAULT; });
    }
    added.forEach((email) => list.push(email));
    const first = added.length === 1 ? ROLE_USERS.find((u) => u.email === added[0]) : null;
    const mins = agent && added.length === 1 ? state.assignPickMins[added[0]] || 30 : 0;
    const untilText = agent && added.length === 1 ? fmtUntil(state.assignPickUntil[added[0]] || ASSIGN_UNTIL_DEFAULT) : "";
    state.assignPick = [];
    state.assignPickMins = {};
    state.assignPickUntil = {};
    state.assignUntilTouched = {};
    state.assignRole = "";
    closeAssignCal();
    render();
    if (finishDraft) actions["bot-create"]();
    if (added.length) toast(first && mins ? "Assigned to " + first.name + " for " + mins + " min, until " + untilText + "." : added.length === 1 ? "Assigned to 1 person." : "Assigned to " + added.length + " people.");
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
    const search = document.querySelector(".twin-hero-ask-menu .dd-search");
    if (search) search.focus();
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
    state.roleMenuId = "";
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
    if (state.obCall) {
      clearTimeout(talkTimer);
      talkTimer = 0;
      talkSpeechStop();
      state.ob.offCount = Object.values(t.marks || {}).filter((m) => m === "off").length;
      state.ob.spoke = talkClock(t);
      state.talkOpen = false;
      state.talk = null;
      state.obCall = false;
      state.twinReady = true;
      state.ob.page = "twinready";
      state.nav = "setup";
      state.callCelebrate = true;
      // The menu opens out from its narrow call-time width and pushes the page across.
      state.railOpen = true;
      setTimeout(() => {
        state.railOpen = false;
        const r = document.querySelector(".rail");
        if (r) r.classList.remove("rail--opening");
      }, 1200);
      render();
      return;
    }
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
  "talk-log"(el) {
    if (obGate("talk-log", el)) return;
    state.talk.logOpen = !state.talk.logOpen;
    render();
  },
  "talk-like"(el) {
    if (obGate("talk-like", el)) return;
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
    if (obGate("talk-off", el)) return;
    const t = state.talk;
    const id = Number(el.dataset.id);
    if (t.marks[id]) return;
    if (state.obCall) {
      t.marks[id] = "off";
      t.knOpen = true;
      render();
      return;
    }
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
    state.presenceLibOpen = false;
    render();
  },
  "pres-linkedin"() {
    state.presenceLook = "linkedin";
    render();
  },
  "pres-lib-toggle"() {
    state.presenceLibOpen = !state.presenceLibOpen;
    render();
  },
  "pres-rec-start"() {
    presStopRec();
    state.presenceRec = true;
    state.presenceRecSecs = 0;
    state.presenceLibOpen = false;
    render();
    presTimer = setInterval(() => {
      if (!state.presenceRec) { presStopRec(); return; }
      state.presenceRecSecs += 1;
      const el = document.getElementById("pres-timer");
      if (el) el.textContent = obClock(state.presenceRecSecs);
      if (state.presenceRecSecs >= 30) actions["pres-rec-stop"]();
    }, 1000);
  },
  "pres-rec-stop"() {
    const secs = state.presenceRecSecs;
    presStopRec();
    state.ob.recSecs = secs < 1 ? 28 : secs;
    state.presenceVoice = "yours";
    render();
  },
  "close-studio"() {
    presStopRec();
    state.presenceLibOpen = false;
    if (state.studioDialog === "presence" && state.studioSnap) {
      state.presenceLook = state.studioSnap.look;
      state.presenceVoice = state.studioSnap.voice;
      state.presenceLibrary = state.studioSnap.library;
      state.ob.recSecs = state.studioSnap.secs;
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
    presStopRec();
    state.presenceLibOpen = false;
    state.studioSnap = null;
    const voice = studioVoiceCopy();
    studioRefresh("Updated. Avatar is your " + studioLook().label.toLowerCase() + ", voice is " + voice.title + ".");
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
  "rps-remove-ask"(el) {
    state.askMenu = "";
    state.rpsRemoveId = el.dataset.id;
    render();
  },
  "rps-remove-cancel"() {
    state.rpsRemoveId = "";
    render();
  },
  "rps-remove-yes"(el) {
    const id = el.dataset.id || state.rpsRemoveId;
    if (id && !state.rpsRemoved.includes(id)) state.rpsRemoved.push(id);
    state.rpsRemoveId = "";
    render();
    toast("Persona removed.");
  },
  "rps-view"(el) {
    state.rpsView = el.dataset.id === "list" ? "list" : "card";
    render();
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
    state.nav = "setup";
    state.botDetailId = el.dataset.id;
    state.botDetailTab = "calibration";
    state.botChatId = "";
    state.roleMenuId = "";
    render();
  },
  "bot-detail-back"() {
    state.botDetailId = "";
    state.botChatId = "";
    render();
  },
  "bot-range-pick"(el) {
    state.botRange = el.dataset.id;
    state.askMenu = "";
    render();
    const btn = document.querySelector('[data-scope="bot-range"]');
    if (btn) btn.focus();
  },
  "user-menu-toggle"() { state.userMenu = !state.userMenu; render(); },
  "user-menu-go"(el) { state.userMenu = false; actions.nav({ dataset: { id: el.dataset.id } }); },
  "user-docs"() { state.userMenu = false; toast("Docs open in a new tab."); },
  "user-logout"() { state.userMenu = false; toast("You’re logged out."); },
  "voices-tab"(el) { state.voicesTab = el.dataset.id; state.voicePlaying = ""; render(); },
  "voice-play"(el) { state.voicePlaying = state.voicePlaying === el.dataset.id ? "" : el.dataset.id; render(); },
  "voice-more"() { toast("Rename, download or delete this voice."); },
  "voice-clone"() { toast("Record 30 seconds to clone a new voice."); },
  "dev-key-generate"() {
    const name = state.devKeyName.trim();
    if (!name) return;
    const token = "tt_live_" + Array.from({ length: 24 }, () => "abcdefghijklmnopqrstuvwxyz0123456789"[Math.floor(Math.random() * 36)]).join("");
    state.devKeys.unshift({ name, mask: token.slice(0, 11) + "••••" + token.slice(-4), at: new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) });
    state.devNewKey = token;
    state.devKeyName = "";
    render();
  },
  "dev-key-revoke"(el) { state.devKeys.splice(Number(el.dataset.id), 1); state.devNewKey = ""; render(); toast("Key revoked."); },
  "team-toggle"(el) { const e = el.dataset.id; state.teamOff[e] = !state.teamOff[e]; render(); },
  "set-section"(el) { if (el.dataset.id === "account") actions.nav({ dataset: { id: "settings" } }); else if (el.dataset.id === "branding") toast("Branding settings are coming soon."); },
  "profile-photo"() { toast("Pick a photo to upload."); },
  "profile-save"() { toast("Profile saved."); },
  "profile-tz"(el) { state.profileTz = el.value; },
  "profile-lang"(el) { state.profileLang = el.value; },
  "bot-reassign-open"(el) {
    state.botReassign = { bot: el.dataset.bot, email: el.dataset.id, to: "" };
    render();
  },
  "bot-reassign-pick"(el) {
    if (state.botReassign) state.botReassign.to = el.value;
    render();
  },
  "bot-unassign"(el) {
    const botId = el.dataset.bot;
    const email = el.dataset.id;
    const user = ROLE_USERS.find((u) => u.email === email);
    const bot = twinBots().find((b) => b.id === botId) || (botId === TWIN_ALL.id ? TWIN_ALL : null);
    if (!user) return;
    askConfirm({
      kind: "unassign",
      title: "Unassign " + user.name + "?",
      sub: "“" + (bot ? bot.title : "This agent") + "” will no longer show up for " + user.name + ".",
      label: "Unassign",
      run: () => {
        const list = roleAssignedList(botId);
        const at = list.indexOf(email);
        if (at >= 0) list.splice(at, 1);
        ["assignMins", "assignUntil"].forEach((k) => { if (state[k][botId]) delete state[k][botId][email]; });
        render();
        toast("Unassigned " + user.name + ".");
      }
    });
  },
  "bot-reassign-cancel"() {
    state.botReassign = null;
    render();
  },
  "bot-reassign-yes"() {
    const r = state.botReassign;
    if (!r || !r.to) return;
    const list = roleAssignedList(r.bot);
    const at = list.indexOf(r.email);
    if (at >= 0) list[at] = r.to;
    ["assignMins", "assignUntil"].forEach((k) => {
      const m = state[k][r.bot];
      if (m && r.email in m) { m[r.to] = m[r.email]; delete m[r.email]; }
    });
    const to = ROLE_USERS.find((u) => u.email === r.to);
    state.botReassign = null;
    render();
    toast("Reassigned to " + (to ? to.name : "the new learner") + ".");
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
    if (o.calib) state.calibRatings[o.calib.id + ":" + o.calib.i] = "off";
    state.twinOff = null;
    render();
    toast("Thanks. Olga’s twin will learn from this.");
  },
  "twin-off-cancel"() {
    state.twinOff = null;
    render();
  },
  "ts-filter-pick"(el) {
    state.twinSessFilter[el.dataset.key] = el.dataset.id;
    state.askMenu = "";
    render();
    const btn = document.querySelector('[data-scope="ts-' + el.dataset.key + '"]');
    if (btn) btn.focus();
  },
  "bot-reports-open"(el) {
    state.reportsOpen = { id: el.dataset.id, total: Number(el.dataset.total) };
    state.reportsEnter = true;
    reportsScroll = 0;
    render();
  },
  "bot-reports-close"() {
    state.reportsOpen = null;
    render();
  },
  "report-respond"(el) {
    const list = document.querySelector(".reports-list");
    reportsScroll = list ? list.scrollTop : 0;
    state.respond = { id: el.dataset.key, q: el.dataset.reason, turn: el.dataset.said, who: el.dataset.who, email: el.dataset.email, reportKey: el.dataset.key };
    state.respondDraft = "";
    state.respondRec = "idle";
    state.respondSecs = 0;
    render();
  },
  "respond-open"(el) {
    state.respond = { id: el.dataset.id, q: el.dataset.q, who: el.dataset.who, email: el.dataset.email };
    state.respondDraft = "";
    state.respondRec = "idle";
    state.respondSecs = 0;
    render();
  },
  "respond-close"() {
    stopRespondTimer();
    state.respond = null;
    state.respondRec = "idle";
    render();
  },
  "respond-rec"() {
    if (state.respondRec === "recording") {
      stopRespondTimer();
      state.respondRec = "done";
      render();
      return;
    }
    // A mock recorder for the prototype: it counts the seconds, nothing is captured.
    state.respondRec = "recording";
    state.respondSecs = 0;
    render();
    respondTimer = setInterval(() => {
      state.respondSecs += 1;
      const t = document.getElementById("respond-timer");
      if (t) t.textContent = Math.floor(state.respondSecs / 60) + ":" + String(state.respondSecs % 60).padStart(2, "0");
    }, 1000);
  },
  "respond-rec-clear"() {
    state.respondRec = "idle";
    state.respondSecs = 0;
    render();
  },
  "respond-send"() {
    const r = state.respond;
    if (!r || !(state.respondDraft.trim() || state.respondRec === "done")) return;
    stopRespondTimer();
    state.respondDone.push(r.id);
    if (r.reportKey && !state.reportResolved.includes(r.reportKey)) state.reportResolved.push(r.reportKey);
    state.respond = null;
    state.respondRec = "idle";
    render();
    toast("Response emailed to " + r.who.split(" ")[0] + ". Your twin will use it next time.");
  },
  "rs-filter-pick"(el) {
    state.roleSessFilter[el.dataset.key] = el.dataset.id;
    state.askMenu = "";
    state.rsFocus = "";
    render();
    const btn = document.querySelector('[data-scope="rs-' + el.dataset.key + '"]');
    if (btn) btn.focus();
  },
  "rs-focus"(el) {
    state.rsFocus = state.rsFocus === el.dataset.id ? "" : el.dataset.id;
    render();
  },
  "metric-go"(el) {
    // The arrow on a summary tile takes you to what sits behind that number.
    const toTable = () => setTimeout(() => { const t = document.querySelector(".ts-table-title"); if (t) t.scrollIntoView({ behavior: "smooth", block: "start" }); }, 0);
    const kind = el.dataset.kind;
    if (kind === "ask") { actions["ts-ask-open"](); return; }
    if (kind === "issues-twin") { state.tsFocus = "issues"; render(); toTable(); return; }
    if (kind === "issues-role") { state.rsFocus = "issues"; render(); toTable(); return; }
    toTable();
  },
  "ts-focus"(el) {
    state.tsFocus = state.tsFocus === el.dataset.id ? "" : el.dataset.id;
    render();
  },
  "ts-ask-open"() {
    // Questions sent to you now live in Twin's brain.
    state.brainTab = "questions";
    state.brainQView = "open";
    actions.nav({ dataset: { id: "knowledge" } });
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
    // A roleplay asks first; a twin agent goes straight in.
    if (isTwinAgentId(el.dataset.id)) { actions["open-demo"](el); return; }
    state.tryRole = el.dataset.id;
    render();
  },
  "role-try-cancel"() {
    state.tryRole = "";
    render();
  },
  "role-try-confirm"() {
    const id = state.tryRole;
    state.tryRole = "";
    actions["open-demo"]({ dataset: { id } });
  },
  "role-new"() {
    state.roleCreate = true;
    state.roleManual = null;
    state.roleStep = ROLE_STEPS[0][0];
    state.roleTab = 1;
    state.roleTabsDone = [];
    state.teeOpen = true;
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
    state.roleTab = 1;
    state.roleTabsDone = [];
    state.teeOpen = true;
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
      state.roleTab = 1;
      state.roleTabsDone = [];
      state.teeOpen = true;
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
    state.roleTab = 1;
    state.roleManual = true;
    // The AI box folds up to just the prompt, then the plan types into the fields.
    withTeeClosed(() => {
      render();
      const plan = teePlan(prompt);
      setTimeout(() => teeTypeFill(plan), 450);
    });
  },
  "tee-open"() {
    openTeePanel();
  },
  "role-help"() {
    toast("Plan the scene, set your twin, then try the roleplay before you save.");
  },
  "role-tips-toggle"() {
    state.roleTipsOpen = !state.roleTipsOpen;
    render();
  },
  "role-tab"(el) {
    const n = Number(el.dataset.id);
    if (n >= 1 && n <= ROLE_TABS.length) state.roleTab = n;
    render();
    const scroller = document.querySelector(".create-scroll");
    if (scroller) scroller.scrollTop = 0;
  },
  "role-tab-next"() {
    state.roleTipsOpen = false;
    if (state.roleManual !== true) {
      if (state.teeOpen && !state.roleEditId) { withTeeClosed(() => { state.roleManual = true; render(); scrollRoleCardToTop(); }); return; }
      state.roleManual = true; render(); scrollRoleCardToTop(); return;
    }
    if (!state.roleTabsDone.includes(state.roleTab)) state.roleTabsDone.push(state.roleTab);
    state.roleTab = Math.min(ROLE_TABS.length, (state.roleTab || 1) + 1);
    render();
    const scroller = document.querySelector(".create-scroll");
    if (scroller) scroller.scrollTop = 0;
  },
  "role-tab-prev"() {
    state.roleTipsOpen = false;
    state.roleManual = true;
    state.roleTab = Math.max(1, (state.roleTab || 1) - 1);
    render();
    const scroller = document.querySelector(".create-scroll");
    if (scroller) scroller.scrollTop = 0;
  },
  "role-save-draft"() {
    saveRolePlay(false);
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
  "role-generate-opening"() {
    const d = state.roleDraft;
    if (!d) return;
    const pool = roleOpeningCandidates(d).filter((line) => line !== d.opening);
    typeRoleOpening(pool[Math.floor(Math.random() * pool.length)]);
    const el = document.getElementById("role-opening");
    if (el) el.focus();
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
  "role-rubric-pts-fix"(el) {
    // Leaving the box: an empty or zero score goes back to 1 point, then the row shows the clean number.
    const d = state.roleDraft;
    const item = d && d.rubric ? d.rubric[Number(el.dataset.rubricPts)] : null;
    if (!item) return;
    item.points = Math.min(100, Math.max(1, Math.round(Number(el.value) || 1)));
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
  "role-pick-persona"(el) {
    applyRolePersona(el.dataset.id);
    render();
  },
  "role-persona-settings"(el) {
    // The persona editor opens in its own tab so the roleplay being built stays where it is.
    window.open(location.pathname + "?editPersona=" + encodeURIComponent(el.dataset.id), "_blank");
  },
  "rps-persona-edit"(el) {
    const p = rpsPersonas().find((item) => item.id === el.dataset.id);
    if (!p) return;
    const pre = rpsPresetOf(p);
    const look = p.look || (PERSONAS.find((item) => item.src === p.src) || PERSONAS[0]).id;
    const behaviourIds = (pre.behaviours && pre.behaviours.length ? pre.behaviours : (p.behaviours || []).map((label) => (ROLE_TRAITS.find((t) => t.label === label) || {}).id).filter(Boolean)).slice();
    state.rpsDraft = {
      ownSrc: p.own ? p.src : "",
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
    saveRolePlay(true);
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
    state.demoIssuesSent = [];
    state.demoReveal = 0;
    state.demoPromptOpen = false;
    state.demoPromptSeen = false;
    state.demoInteractive = false;
    state.demoEnded = false;
    state.demoLogOpen = false;
    state.demoFeedback = null;
    state.demoFeedbackReasons = [];
    state.demoFeedbackText = "";
    state.demoSeconds = 0;
    state.demoChatOpen = false;
    state.demoDraft = "";
    state.demoExtra = [];
    state.demoThinking = false;
    clearTimeout(demoThinkTimer);
    state.demoNps = null;
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
  "demo-upload"() {
    const input = document.getElementById("demo-upload-input");
    if (input) input.click();
  },
  "demo-upload-pick"(el) {
    const files = Array.from(el.files || []);
    if (!files.length) return;
    files.forEach((file) => {
      const isImage = /^image\//.test(file.type);
      state.demoExtra.push({ who: state.demoInteractive ? "you" : "student", text: "", file: { name: file.name, src: isImage ? URL.createObjectURL(file) : "" } });
    });
    el.value = "";
    state.demoChatOpen = true;
    // The twin looks at what was shared before it answers.
    state.demoThinking = true;
    const names = files.map((file) => file.name);
    const taskId = state.demoTaskId;
    clearTimeout(demoThinkTimer);
    demoThinkTimer = setTimeout(() => {
      if (state.demoTaskId !== taskId || state.demoEnded) return;
      state.demoThinking = false;
      const what = names.length === 1 ? `“${names[0]}”` : `those ${names.length} files`;
      state.demoExtra.push({ who: "twin", text: `Thanks for sharing ${what}. I’ve gone through it. What would you like to go over first?` });
      render();
      const box = document.getElementById("demo-lines");
      if (box) box.scrollTop = box.scrollHeight;
    }, 2600);
    render();
    const log = document.getElementById("demo-lines");
    if (log) log.scrollTop = log.scrollHeight;
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
    const note = state.demoIssueText.trim();
    const labels = demoIssueReasons().filter(([id]) => state.demoIssueReasons.includes(id));
    labels.forEach(([id, label], i) => state.demoIssuesSent.push({ id, label, note: i === 0 ? note : "" }));
    if (!labels.length && note) state.demoIssuesSent.push({ id: "other", label: "Other", note });
    state.demoIssueOpen = false;
    toast("Thanks — we’ll look at that.");
  },
  "demo-view"(el) {
    state.demoView = el.dataset.id === "mobile" ? "mobile" : "web";
    render();
  },
  "end-demo"() {
    clearInterval(demoTimer);
    clearInterval(demoClockTimer);
    clearTimeout(demoThinkTimer);
    state.demoThinking = false;
    // A roleplay ends on the learner's report; a twin call ends on the call-ended screen.
    const model = demoModel(state.demoTaskId);
    if (!model.isTwin) {
      state.roleReport = roleReportSnapshot(model);
      state.demoTaskId = null;
      state.demoEnded = false;
      state.demoIssueOpen = false;
      render();
      const scroller = document.querySelector(".main");
      if (scroller) scroller.scrollTop = 0;
      return;
    }
    state.demoEnded = true;
    state.demoNps = { score: null, text: "", open: true, submitted: false };
    state.demoIssueOpen = false;
    render();
  },
  "demo-log"() {
    state.demoLogOpen = !state.demoLogOpen;
    render();
  },
  "demo-done"() {
    clearInterval(demoTimer);
    clearInterval(demoClockTimer);
    state.demoTaskId = null;
    state.demoEnded = false;
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
    const opening = state.roleManual !== true;
    state.roleManual = opening;
    if (opening && state.teeOpen && !state.roleEditId) {
      state.roleManual = false;
      withTeeClosed(() => { state.roleManual = true; render(); scrollRoleCardToTop(); });
      return;
    }
    render();
    if (state.roleManual) scrollRoleCardToTop();
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
    if (el.dataset.v === "off") {
      // "Feels off" asks why first, in the same popup the twin session reports use; the rating is saved when it's submitted.
      const item = CALIBRATIONS.concat(RAIL_THREADS).find((c) => c.id === state.calibId) || CALIBRATIONS[0];
      const line = item.thread[Number(el.dataset.id)];
      state.twinOff = { key: "cal:" + state.calibId + ":" + el.dataset.id, text: line ? line[1] : "", reasons: [], note: "", calib: { id: state.calibId, i: el.dataset.id } };
      render();
      return;
    }
    state.calibRatings[state.calibId + ":" + el.dataset.id] = "like";
    render();
  },
  "calib-back"() {
    state.calibId = "";
    render();
  },
  nav(el) {
    leaveCall();
    if (state.ob.page === "twinready") state.ob.page = "done";
    state.roleReport = null;
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
  "built-from-open"() {
    state.builtFromOpen = true;
    state.afterFocus = "bf-close";
    render();
  },
  "built-from-close"() {
    state.builtFromOpen = false;
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
  if (state.roleTipsOpen && !e.target.closest(".role-tips-wrap")) {
    state.roleTipsOpen = false;
    const pop = document.getElementById("role-tips-pop");
    if (pop) pop.remove();
    const btn = document.querySelector(".role-tips-btn");
    if (btn) btn.setAttribute("aria-expanded", "false");
  }
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
  if (!e.target.closest(".assign-minbtn, .assign-min-menu")) closeAssignMinMenu();
  if (!e.composedPath().some((n) => n.classList && (n.classList.contains("assign-cal") || n.classList.contains("assign-until")))) closeAssignCal();
  if (state.creditOpen && !e.target.closest(".credit-wrap")) {
    state.creditOpen = false;
    render();
    if (!el || el.disabled) return;
  }
  if (state.userMenu && !e.target.closest(".rail-user-wrap")) {
    state.userMenu = false;
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
  if (state.talkOpen && !/^(talk-|demo-issue|close-demo-issue|submit-demo-issue|close-auth|signup-google|toggle-auth-password|confirm-email)/.test(act)) {
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
  else if (t.id === "inbox-answer-text") state.inboxDraft = t.value;
  else if (t.id === "respond-text") { state.respondDraft = t.value; syncRespondSend(); }
  else if (t.id === "tee-ask") {
    state.roleAsk = t.value;
    if (t.tagName === "TEXTAREA") {
      t.style.height = "auto";
      t.style.height = t.scrollHeight + "px";
    }
  }
  else if (t.id === "nps-text" && state.demoNps) {
    state.demoNps.text = t.value;
  }
  else if (t.classList && t.classList.contains("assign-search")) {
    applyAssignFilters(t.closest(".assign-dialog"));
  }
  else if (t.classList && t.classList.contains("dd-search")) {
    const q = t.value.trim().toLowerCase();
    const menu = t.closest(".twin-hero-ask-menu");
    let hits = 0;
    menu.querySelectorAll(".twin-hero-ask-opt").forEach((opt) => {
      const hit = !q || (opt.dataset.search || "").includes(q);
      opt.hidden = !hit;
      if (hit) hits += 1;
    });
    const empty = menu.querySelector(".dd-empty");
    if (empty) empty.hidden = hits > 0;
  }
  else if (t.id === "bot-minutes" && state.botDraft) {
    state.botDraft.minutes = Number(t.value) || 0;
    document.querySelectorAll(".bot-credit-chip").forEach((chip) => chip.setAttribute("aria-pressed", String(Number(chip.dataset.id) === state.botDraft.minutes)));
  }
  else if (t.dataset.rubricPts !== undefined && state.roleDraft && state.roleDraft.rubric) {
    // Points are edited in place; the total in the hint follows as you type.
    const item = state.roleDraft.rubric[Number(t.dataset.rubricPts)];
    if (item) {
      item.points = Math.min(100, Math.max(0, Math.round(Number(t.value) || 0)));
      state.roleDraft.rubricEdited = true;
      const total = state.roleDraft.rubric.reduce((sum, r) => sum + (Number(r.points) || 0), 0);
      const el = document.getElementById("role-rubric-total");
      if (el) el.textContent = String(total);
    }
  }
  else if (t.id === "bot-ask") {
    state.botAsk = t.value;
    t.style.height = "auto";
    t.style.height = t.scrollHeight + "px";
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
  if (e.target.id === "bot-ask-form") {
    e.preventDefault();
    actions["bot-ask"]();
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
  if (e.key === "Escape" && state.builtFromOpen) {
    state.builtFromOpen = false;
    render();
    return;
  }
  if (e.key === "Escape" && state.drawer) {
    state.drawer = null;
    render();
  }
  if (e.key === "Enter" && e.target && e.target.id === "tee-chat-input") {
    e.preventDefault();
    actions["tee-chat-send"]();
  }
  if (e.key === "Enter" && e.target && e.target.id === "bot-minutes") {
    e.preventDefault();
    actions["bot-credit-save"]();
  }
  if (e.key === "Enter" && !e.shiftKey && e.target && e.target.id === "bot-ask") {
    e.preventDefault();
    actions["bot-ask"]();
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
// ---- Olga's personas and roleplays, from Olga_Personas_and_Roleplays.xlsx ----
// Only what is in her persona library: age, difficulty, voice, speaking style and knowledge are not in it, so they stay empty.
const DOC_SHARED_BEHAVIOURS = ["Asks for options on WhatsApp", "Resists booking a meeting at first", "Pushes back sometimes"];
const DOC_RUBRIC = [["Opened the client up", 30], ["Avoided shutdown triggers and pet peeves", 25], ["Covered what matters most", 25], ["Secured the goal next step with a date", 20]];
const DOC_PERSONAS = [
  {
    id: "ravi", short: "Investor", name: "Ravi", role: "First-time investor", based: "Oman", photo: "../media/client-landlord.jpg",
    background: "Banking job in Oman. Saved for 3 years to invest in Dubai for passive income. Owns one home in Oman. Married, two kids. Decision includes wife.",
    lead: "Instagram ad about passive income", budget: "1.5–2.0M AED (via mortgage; can start lower)", timeline: "3–6 months", areas: "open to guidance; maybe JVC / Dubai Hills (if asked)",
    motivation: "medium", focus: "Best price 40%; Market conditions 30%; Time constraints 30%",
    constraints: ["risk-averse", "prefers simple mortgage process", "new to Dubai market"], peeves: ["hard sell", "buzzwords"],
    goal: "Share budget range and agree to a follow-up call",
    agrees: ["questions about purpose and family needs", "clarity on affordability and mortgage steps"], declines: ["guaranteed returns", "pressuring timelines"]
  },
  {
    id: "faisal", short: "Investor", name: "Faisal", role: "Experienced investor", based: "Riyadh, Saudi Arabia", photo: "",
    background: "Based in Riyadh. Owns two Saudi rentals (Airbnb). Sold a 2BR in Dubai recently; visits often. Married, four kids. Works in a government institution. Decision involves his brother in Dubai.",
    lead: "Google ad 'Dubai Airbnb investment'", budget: "2.0–3.0M AED", timeline: "2–4 months", areas: "Business Bay / JLT / Marina (if justified)",
    motivation: "medium", focus: "Best price 40%; Market conditions 30%; Time constraints 30%",
    constraints: ["reduce work stress", "prefers manageable operations"], peeves: ["hypey pitches", "guarantees"],
    goal: "Share target yield and shortlist 2 projects for comparison",
    agrees: ["questions on hold period and yield risk", "calm, numbers-led tone"], declines: ["celebrity developer pitch", "pressure close"]
  },
  {
    id: "karim", short: "Entrepreneur", name: "Karim", role: "German/Syrian entrepreneur", based: "Hamburg, Germany", photo: "../media/persona-marcus.jpg",
    background: "Based in Hamburg. Owns one commercial unit and one apartment, both long-term rented. Runs a delivery business. Wife, two kids; parents in Lebanon. Concerned about regional stability; considering property vs. growing the business. Parents may influence decision.",
    lead: "YouTube video on Dubai investment", budget: "1.8–2.5M AED", timeline: "6–9 months", areas: "Dubai Hills / Creek Harbour (if probed)",
    motivation: "medium", focus: "Market conditions 40%; Best price 30%; Time constraints 30%",
    constraints: ["risk management", "possible golden visa angle for parents"], peeves: ["generic pitches", "vague ROI talk"],
    goal: "Agree to a structured comparison call",
    agrees: ["questions about risk tolerance and exit plans", "acknowledging family priorities"], declines: ["overpromising", "ignoring risk"]
  },
  {
    id: "adam", short: "Dentist", name: "Adam", role: "US-based dentist", based: "United States", photo: "",
    background: "Lives in the US, owns a dental practice and one rental property in the US. Never been to Dubai. Looking at Dubai because current US real estate feels unattractive and he’s curious about tax efficiency. Decision involves his wife and a business partner.",
    lead: "Facebook ad", budget: "around 1.8M AED via mortgage (~$500k USD equivalent)", timeline: "no deadline; will buy when the right property appears", areas: "undecided; prefers ready/secondary as he thinks it can earn immediately",
    motivation: "low to medium", focus: "Market conditions 40%; Best price 40%; Time constraints 20%",
    constraints: ["needs mortgage", "doesn’t understand payment plans yet", "wants tax-efficient setup"], peeves: ["hype like 'Dubai is the best place to invest'", "conflicting info from agents", "pressure selling"],
    goal: "Agree to a 20-minute online presentation call to compare options",
    agrees: ["calm questions on why Dubai vs the US", "clarifying income goals and risk tolerance", "simple explanation of ready vs off-plan and payment plans", "discussion about affordability and mortgage steps"],
    declines: ["overpromising or guarantees", "pushing without answering questions", "dismissing his US-market knowledge"]
  },
  {
    id: "cedric", short: "Buyer", name: "Cedric", role: "French agent-buyer", based: "France", photo: "",
    background: "Based in France, single, works as a real-estate agent. Wants to buy for himself first and possibly refer/sell to his own clients later. Savvy, confident, and very option-driven.",
    lead: "Facebook ad", budget: "AED 250k–1.0M", timeline: "depends on selling his Paris property; purchase after sale", areas: "flexible; prefers strong resale/tenant demand (e.g., Creek Harbour, Dubai Hills, JVC) if justified",
    motivation: "medium to high", focus: "Best price 40%; Time constraints 35%; Market conditions 25%",
    constraints: ["funds tied to sale in France", "prefers off-plan with 3–4 year post-handover payment plan", "insists on seeing options first"], peeves: ["budget-first interrogation", "generic area overviews", "hype or pressure", "refusing to share options before a review call"],
    goal: "Review a shortlist of 2–3 options and agree to a screen-share comparison call",
    agrees: ["concise, curated options matched to stated filters", "clear breakdown of payment plan and total outlay", "price-per-sqft and comps rather than hype", "respect for his professional background"],
    declines: ["pushing commitment without showing options", "overpromising or guarantees", "ignoring that funds depend on his sale"]
  },
  {
    id: "farid", short: "Buyer", name: "Farid", role: "UK-based family buyer", based: "United Kingdom", photo: "",
    background: "Pakistani family living in the UK, married with two kids. Runs a small pizzeria business; also owns a rental in the UK with modest yield. Already bought an off-plan unit in Ras Al Khaimah and feels they were pushed into it; unsure if it was a good choice. Exploring Dubai and the Middle East as a future home or investment.",
    lead: "Facebook ad", budget: "around 2.5M AED", timeline: "up to 24 months; deciding between self-use and investment first", areas: "undecided; wants family-friendly communities with good schools; considering both off-plan and secondary",
    motivation: "high", focus: "Best price 50%; Market conditions 30%; Time constraints 20%",
    constraints: ["needs mortgage in Dubai (process unclear)", "expects a 'best price' or discount up to ~10%", "confused about long- vs short-term rentals and switching", "talking to many agents; trust is fragile"], peeves: ["hype or guarantees", "pushing 'Dubai is the best' without substance", "complicated mortgage talk before basics", "being rushed into viewings", "ignoring concerns about the RAK purchase"],
    goal: "Agree to a structured comparison call (family-living vs investment) and outline a mortgage pre-qualification path",
    agrees: ["questions about family lifestyle and school needs", "clarifying whether home-use or investment matters more", "simple explanation of financing paths and affordability", "acknowledging their prior negative experience and rebuilding trust"],
    declines: ["pressure selling or 'today-only' discounts", "guaranteed returns", "dismissing their two-year horizon", "contradicting previous advice without explanation"]
  },
  {
    id: "anna", short: "Shopper", name: "Anna", role: "JLT window-shopper", based: "", photo: "../media/client-seller.jpg",
    background: "Lives in a rental; clicked a reel about 'best deals in JLT'. Curious but non-committal. Wants to see what’s out there with minimal effort.",
    lead: "Instagram reel", budget: "unknown; maybe up to 1.2M AED", timeline: "no deadline", areas: "JLT or Dubai Marina (if nudged)",
    motivation: "low", focus: "Time constraints 40%; Best price 35%; Market conditions 25%",
    constraints: ["busy schedule", "wants WhatsApp options first", "doesn’t want mortgage hassle"], peeves: ["pushy tone", "long monologues", "asking budget first"],
    goal: "Agree to share rough budget and a short follow-up call",
    agrees: ["questions about why moving matters", "time-efficient next steps"], declines: ["hard close", "price-only pitch"]
  },
  {
    id: "sara", short: "Buyer", name: "Sara", role: "Relocating with kids", based: "", photo: "../media/persona-elena.jpg",
    background: "Family relocating in the near term, kids 5 and 8. School commute and routine come first. Needs clarity on family-friendly communities.",
    lead: "Facebook group link", budget: "2.8–3.2M AED", timeline: "≤ 60 days", areas: "Arabian Ranches 2 / Tilal Al Ghaf (if justified)",
    motivation: "high", focus: "Time constraints 50%; Best price 30%; Market conditions 20%",
    constraints: ["school timings", "quiet street", "storage", "avoid construction noise"], peeves: ["generic area overviews", "rushing viewings", "ignoring school needs"],
    goal: "Book two viewings around school timings",
    agrees: ["questions about daily routine and commute", "clear must-haves vs nice-to-haves"], declines: ["pushing areas that don’t fit schools", "pressure selling"]
  },
  {
    id: "peter", short: "Investor", name: "Peter", role: "Cautious European retiree", based: "Vienna, Austria", photo: "../media/client-buyer.jpg",
    background: "Semi-retired engineer from Vienna. Wants stable, low-effort income and a safe place to spend winters. Worried about downside risk and service charges.",
    lead: "YouTube video about low-maintenance investments", budget: "1.2–1.8M AED", timeline: "3–12 months", areas: "Creek Harbour / Dubai Hills / established communities",
    motivation: "medium", focus: "Market conditions 50%; Best price 30%; Time constraints 20%",
    constraints: ["low maintenance", "service-charge sensitivity", "risk-averse", "prefers simple management"], peeves: ["hype or guarantees", "vague ROI talk", "complex operations"],
    goal: "Agree to a comparison call covering yield, service charges, and exit paths",
    agrees: ["questions on risk tolerance and hold period", "simple yield vs cost comparison", "clear exit options"], declines: ["overpromising", "pushing short-term rentals without fit"]
  }
];

// A flat initial for the people without a photo yet.
function docInitialFace(name, i) {
  const tones = [["#E8F1FF", "#2B5BD7"], ["#EAF6EE", "#1A6739"], ["#FFF1E8", "#B4540A"], ["#F3ECFB", "#6B3FA0"]];
  const [bg, fg] = tones[i % tones.length];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><rect width="96" height="96" fill="${bg}"/><text x="48" y="48" dy=".35em" text-anchor="middle" font-family="Figtree, Arial, sans-serif" font-size="44" font-weight="600" fill="${fg}">${name.charAt(0)}</text></svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}
const docFaceOf = (p, i) => p.photo || docInitialFace(p.name, i);
const docLower = (text) => text.charAt(0).toLowerCase() + text.slice(1);
const docUpper = (text) => text.charAt(0).toUpperCase() + text.slice(1);

(function applyDocLibrary() {
  const quotes = ["Can you send me some options on WhatsApp?", "Why are you asking this?"];
  const sessions = [31, 24, 19, 17, 14, 12, 9, 8, 6];
  const scores = ["7.8", "7.4", "7.1", "7.6", "6.9", "7.3", "7.0", "7.5", "7.2"];
  const activity = ["2 hours ago", "Yesterday", "Yesterday", "2 days ago", "3 days ago", "4 days ago", "5 days ago", "Last week", "Last week"];
  const rows = DOC_PERSONAS.map((p, i) => {
    const scenario = `The learner speaks with ${p.name}, who came in as a lead from: ${p.lead}. ${p.background} Budget ${p.budget}; timeline ${p.timeline}.`;
    const quote = quotes[i % 2];
    SHARED_QUOTES[p.id] = quote;
    SESSION_TOPICS[p.id] = p.agrees.slice(0, 3).map(docUpper).concat("The next step");
    ROLE_RUBRICS[p.id] = { label: p.name, scores: DOC_RUBRIC };
    const hidden = `Held back until the learner earns it:\n• Motivation: ${p.motivation}\n• What matters most: ${p.focus}\n• Constraints: ${p.constraints.join("; ")}\n• Areas: ${p.areas}`;
    ROLE_PREFILL[p.id] = {
      title: `${p.name}: first conversation`,
      ask: `${p.name}, ${p.role.toLowerCase()}, a lead from ${p.lead}`,
      scenario, hidden,
      learnerRole: "Dubai real estate agent",
      trait: "", name: p.name, look: p.id, sub: p.role, opening: quote,
      goals: [p.goal],
      guarded: p.declines.map(docUpper).concat(p.peeves.map((x) => "Pet peeve: " + x)),
      opens: p.agrees.map(docUpper),
      endAgree: p.goal + ".",
      endDecline: "Declines when: " + p.declines.join("; ") + ".",
      rubric: DOC_RUBRIC.map(([name, points]) => ({ name, points })), rubricEdited: true, rubricType: p.id
    };
    DEMO_SCRIPTS[p.id] = [
      { who: "twin", text: quote },
      { who: "student", text: `Happy to help. Could we start with ${p.agrees[0]}?` },
      { who: "twin", text: "Why are you asking this?" },
      { who: "student", text: "Fair question. I want what I send you to actually fit." },
      { who: "twin", text: `Keep in mind: ${p.constraints.join(", ")}.` },
      { who: "student", text: `Understood. Could we ${docLower(p.goal)}?` }
    ];
    return {
      id: p.id, title: `${p.name}: first conversation`,
      blurb: `${p.role}${p.based ? " · " + p.based : ""}. Lead from ${p.lead}.`,
      scenario, persona: "Olga’s", face: "../media/yt-frame-1.png", client: p.role, clientName: p.name, clientFace: docFaceOf(p, i),
      quote, sessions: sessions[i], score: scores[i], activity: activity[i], status: "active"
    };
  });
  SHARED_ROLES.splice(0, SHARED_ROLES.length, ...rows);
})();

// The personas as cards: the library's own facts only.
function docPersonaCards() {
  return DOC_PERSONAS.map((p) => ({
    id: p.id, category: "sales", industry: "Real estate", name: p.name, role: p.role, short: p.short, src: p.photo, behaviours: DOC_SHARED_BEHAVIOURS.slice(), speaking: [],
    meta: p.based, note: p.role, doc: p,
    preset: { city: p.based, background: p.background }
  }));
}

Object.assign(state, { accountReady: true, twinReady: true, authEmail: "olga@olgasiliveitup.com", step: 6, nav: "setup", studioView: "profile" });
// Personas edited in any tab are kept in localStorage so the tab that opened the editor can pick them up.
const PERSONA_STORE = "tt-v3-personas";
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
// ?onboarding starts from a signed-out account, at Build my twin.
(function startOnboardingFromUrl() {
  let on = false;
  try { on = new URLSearchParams(location.search).has("onboarding"); } catch (err) { /* ignore */ }
  if (!on) return;
  const keep = { theme: state.theme, railCollapsed: state.railCollapsed };
  Object.keys(state).forEach((key) => delete state[key]);
  Object.assign(state, structuredClone(INITIAL_STATE), keep);
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
