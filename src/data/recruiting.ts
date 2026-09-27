export type RecruitingEvent = {
  id: string;
  title: string;
  /** Null displays “Coming Soon”. Use a human-readable date once it is set, e.g. "September 12, 2026". */
  date: string | null;
  description: string;
};

export type RecruitingResource = {
  id: string;
  title: string;
  description: string;
  /** Null displays “Coming soon” and is not a link. */
  href: string | null;
};

export type Trait = {
  title: string;
  description: string;
};

export type MemberBenefit = {
  title: string;
  description: string;
};

// TODO: Replace null dates with confirmed recruiting dates. Do not estimate.
export const recruitingEvents: RecruitingEvent[] = [
  {
    id: "info-session",
    title: "Information Session",
    date: null,
    description:
      "An introduction to the chapter, the work, and how recruiting will run.",
  },
  {
    id: "coffee-chats",
    title: "Coffee Chats",
    date: null,
    description:
      "Short conversations with members about projects, training, and the community.",
  },
  {
    id: "deadline",
    title: "Application Deadline",
    date: null,
    description: "Applications close at the posted time.",
  },
  {
    id: "first-round",
    title: "First Round Interviews",
    date: null,
    description:
      "A conversation about how you think through an unfamiliar problem.",
  },
  {
    id: "final-round",
    title: "Final Round Interviews",
    date: null,
    description: "A deeper conversation with chapter leadership.",
  },
  {
    id: "decisions",
    title: "Decisions",
    date: null,
    description: "Applicants are notified of the outcome.",
  },
];

export const recruitingResources: RecruitingResource[] = [
  {
    id: "resume",
    title: "Resume Guide",
    description:
      "How to present experience clearly, including work that is not consulting.",
    // TODO: Link a PDF or page when the guide exists.
    href: null,
  },
  {
    id: "case",
    title: "Case Interview Guide",
    description:
      "What a case conversation is asking for, and how to practice without memorizing a script.",
    href: null,
  },
  {
    id: "coffee",
    title: "Coffee Chat Guide",
    description: "How to prepare for a conversation with a member.",
    href: null,
  },
  {
    id: "faq",
    title: "FAQ",
    description: "Answers to common questions about joining the chapter.",
    href: "/join#faq",
  },
];

export const memberBenefits: MemberBenefit[] = [
  {
    title: "Real client experience",
    description: "Work directly on real organizational challenges.",
  },
  {
    title: "Professional development",
    description:
      "Build skills in casing, research, analysis, presentations, and client communication.",
  },
  {
    title: "Mentorship",
    description: "Learn from experienced members and alumni.",
  },
  {
    title: "Community",
    description: "Join students across Penn who care about meaningful work.",
  },
];

export const traits: Trait[] = [
  {
    title: "Analytical thinking",
    description:
      "You can break a messy question into parts and say what would change your mind.",
  },
  {
    title: "Curiosity",
    description:
      "You ask about the organization before you reach for a framework.",
  },
  {
    title: "Communication",
    description:
      "You can explain a finding to someone who was not in the room.",
  },
  {
    title: "Collaboration",
    description:
      "You improve other people’s work, and you let them improve yours.",
  },
  {
    title: "Initiative",
    description: "You move the work forward when the next step is not obvious.",
  },
  {
    title: "Commitment to impact",
    description:
      "You care whether a recommendation is useful to the people the organization serves.",
  },
];
