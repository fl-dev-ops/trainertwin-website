/**
 * Copy for /TrainerTwin_home_v3/invite_trainer, taken from
 * https://www.trainertwin.com/invite — wording kept as on that page.
 */

export const INVITE_HERO = {
  eyebrow: "Startup program",
  title: "Increase Your Reach. Preserve Your Training Style",
  lead: "TrainerTwin is built on a patent-pending approach to modelling a trainer’s instructional method, domain expertise and learner context. Together, we can create an AI TrainerTwin that reflects how you train while keeping your IP intact.",
  experiencesIntro:
    "Your TrainerTwin can support learners across three connected experiences:",
  experiences: [
    "Learn with your TrainerTwin shaped by your teaching approach,",
    "Practice with your TrainerTwin through guided exercises, adaptive challenges",
    "Get assessed with your TrainerTwin using your rubrics and feedback principles.",
  ],
} as const;

export const INVITE_LAYERS = {
  eyebrow: "How it works",
  title: "Built on Four Intelligence Layers",
  lead: "Your training is defined by your judgement, expertise and the way you help each learner move forward. TrainerTwin brings these elements together to create a learning experience that reflects how you teach - not just what you teach",
  items: [
    {
      title: "Instructional Policy Model",
      body: "Trainer-specific teaching and decision patterns",
    },
    {
      title: "Domain Knowledge and Competency Model",
      body: "Subject knowledge, examples and evaluation standards",
    },
    {
      title: "Learner State and Personalisation Model",
      body: "Goals, history, proficiency and evolving needs",
    },
    {
      title: "Multimodal Interaction Layer",
      body: "Voice, video, avatar, facial expressions and trainer-specific communication behavior",
    },
  ],
} as const;

export const INVITE_PRIVACY = {
  eyebrow: "Trust",
  title: "Data Protection by Design",
  body: "Trainer and learner data is handled with privacy, security and purpose limitation at its core. We collect and use data only to create, personalize and improve the TrainerTwin experience with appropriate access controls and retention practices. Trainers and learners remain informed about how their data is used.",
} as const;

export const INVITE_EVOLVE = {
  eyebrow: "Always current",
  title: "You evolve. So does your Twin.",
  body: "You don’t stop learning and growing as a trainer. Your teaching methods, insights and standards evolve too. Your TrainerTwin can evolve with you, so your learners continue to benefit with your latest and sharpest thinking. Update and refine as your expertise grows. Think Delphi, for Trainers. Think HeyGen, for Trainers. But built pedagogy-first: not just a digital representation of you, but an AI learning experience shaped by the way you teach.",
} as const;

export const INVITE_TEAM = {
  eyebrow: "People",
  title: "The team.",
  lead: "Ex-Freshworks Director of Product. Ex-PayPal AI Director. Second-time founders. We've shipped products at scale, built AI systems, and spent years understanding how people learn.",
  members: [
    {
      name: "Shanmuga (Shyam) Anandaraman",
      role: "CEO, Ex Freshworks",
    },
    {
      name: "Harini Shekar",
      role: "Co-Founder & AI Director, Ex Paypal",
    },
    {
      name: "Dharshini Jenefer",
      role: "Head of Partnerships",
    },
    {
      name: "Catherine Nivedha",
      role: "Learning Sciences & Pedagogy",
    },
    {
      name: "Bhuvan T",
      role: "Founding Designer, Ex Freshworks",
    },
    {
      name: "Surya Umapathy",
      role: "Founding Engineer, Ex Freshworks",
    },
    {
      name: "Mohammed Hasan",
      role: "Founding Engineer, Ex Freshworks",
    },
  ],
} as const;

export const INVITE_FOUNDING = {
  eyebrow: "Equity program",
  title: "Become a Founding Trainer",
  lead: "Inspired by the 2-sigma challenge – the idea that personalised tutoring can significantly improve learning outcomes – we believe AI can help make personalised guidance accessible to more learners",
  equity:
    "We want to explore this possibility with early-adopter trainers who believe in the vision and want to help shape it. Eligible founding trainers receive equity participation, subject to mutually agreed terms.",
  domains:
    "Today we are starting with Tech Trainers. If this resonates with you as a fitness coach, sales coach or trainer in any other domain, reach out to us. The domain may change but the opportunity to extend your teaching remains the same",
  points: [
    "Work closely with our team as a design partner",
    "Co-build and test TrainerTwin with your learners",
    "Shape the product before its wider release",
    "Receive equity participation, subject to mutually agreed terms",
  ],
  close:
    "If this resonates with you - and you want to help define what trainer-led AI learning should be - we'd love to talk.",
} as const;
