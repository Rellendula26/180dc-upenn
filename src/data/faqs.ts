export type Faq = {
  id: string;
  question: string;
  answer: string;
};

// TODO: Replace answers that say a policy has not been published, once the chapter decides.
export const faqs: Faq[] = [
  {
    id: "experience",
    question: "Do I need consulting experience?",
    answer:
      "No. Prior consulting experience is not required. The chapter looks for careful thinking, curiosity, and a willingness to learn a structured way of working. Any additional expectations will be posted before recruiting opens.",
  },
  {
    id: "majors",
    question: "What majors can apply?",
    answer:
      "Students from many academic backgrounds can apply. A team is stronger when it combines different ways of thinking. Major is not a gate.",
  },
  {
    id: "time",
    question: "What is the time commitment?",
    answer:
      "The weekly time commitment has not been published yet. It will be shared at the information session and on this page before applications open.",
  },
  {
    id: "interviews",
    question: "What does the interview process look like?",
    answer:
      "The planned sequence is an application, a first-round interview, and a final-round interview. Formats and timing will be posted when recruiting dates are set.",
  },
  {
    id: "reapply",
    question: "Can I reapply?",
    answer:
      "A reapplication policy has not been published. Check this page, or contact the chapter, before the next cycle.",
  },
  {
    id: "projects",
    question: "What kind of projects do consultants work on?",
    answer:
      "Consultants work on real problems for mission-driven organizations — strategy, operations, marketing, and data and analytics. Specific clients are confirmed each semester.",
  },
];
