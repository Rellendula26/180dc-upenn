export type ProcessStep = {
  label: string;
  title: string;
  description: string;
};

export const projectProcess: ProcessStep[] = [
  {
    label: "01",
    title: "Understand",
    description: "Meet the client and define the core challenge.",
  },
  {
    label: "02",
    title: "Research",
    description:
      "Conduct market, organizational, quantitative, and qualitative research.",
  },
  {
    label: "03",
    title: "Analyze",
    description: "Turn research into structured insights.",
  },
  {
    label: "04",
    title: "Recommend",
    description: "Develop practical, evidence-based recommendations.",
  },
  {
    label: "05",
    title: "Deliver",
    description: "Present findings and implementation guidance to the client.",
  },
];

// TODO: Confirm this calendar with the chapter before treating it as policy.
export const engagementTimeline: ProcessStep[] = [
  {
    label: "Week 1–2",
    title: "Problem definition",
    description: "Agree on the question, the constraints, and what a useful answer requires.",
  },
  {
    label: "Week 3–5",
    title: "Research",
    description: "Gather the evidence the question actually depends on.",
  },
  {
    label: "Week 6",
    title: "Midpoint presentation",
    description: "Share early findings and correct course with the client.",
  },
  {
    label: "Week 7–10",
    title: "Analysis and recommendations",
    description: "Turn the evidence into choices the organization can weigh.",
  },
  {
    label: "Week 11–12",
    title: "Final presentation",
    description: "Deliver the recommendation and guidance for putting it to use.",
  },
];

export type EngagementRole = {
  role: string;
  description: string;
};

export const engagementStructure: EngagementRole[] = [
  {
    role: "Client",
    description:
      "Defines the challenge, shares context, and decides what the organization will do with the work.",
  },
  {
    role: "Project Leader",
    description:
      "Guides the team, keeps the question sharp, and is responsible for the quality of the recommendation.",
  },
  {
    role: "Team of Consultants",
    description:
      "Does the research and analysis, and helps build a recommendation the client can use.",
  },
];

// TODO: Replace “To be confirmed” with the chapter’s actual operating model.
export const engagementDetails: Array<{ label: string; value: string }> = [
  { label: "Team size", value: "To be confirmed" },
  { label: "Engagement duration", value: "A semester" },
  { label: "Meeting cadence", value: "To be confirmed" },
  {
    label: "Deliverables",
    value: "Midpoint presentation, final presentation, and written recommendations",
  },
];
