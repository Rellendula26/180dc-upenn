export type Project = {
  id: string;
  /** Placeholder client label. Replace with a confirmed organization name. */
  client: string;
  sector: string;
  workType: string;
  challenge: string;
  approach: string;
  recommendation: string;
  /** Short line used on project previews. */
  outcome: string;
  /** Longer result used on the case study. Keep unverified results out. */
  impact: string;
  /** Path under /public, or null until a real photograph or logo exists. */
  image: string | null;
  featured: boolean;
};

// TODO: Replace these illustrative cases with confirmed Penn engagements.
// Do not publish a client name, result, or quotation without permission.
export const projects: Project[] = [
  {
    id: "education",
    client: "Education organization",
    sector: "Education",
    workType: "Strategy",
    challenge:
      "Decide which programs to grow, which to hold, and how to describe that choice to the people the organization serves.",
    approach:
      "Staff interviews, a scan of peer programs, and a structured comparison of where the organization is best placed to help.",
    recommendation:
      "A short list of program priorities, with the evidence and the tradeoffs behind each one.",
    outcome: "A priority the organization could act on with its current capacity.",
    impact:
      "Results will be reported here after a completed engagement. This case is an illustrative placeholder, not a Penn client.",
    image: null,
    featured: true,
  },
  {
    id: "healthcare",
    client: "Healthcare organization",
    sector: "Healthcare",
    workType: "Operations",
    challenge:
      "A care-focused organization is spending too much staff time on a process that should be simpler for the people using it.",
    approach:
      "Map the current process, separate necessary steps from habitual ones, and test a simpler path against the organization’s constraints.",
    recommendation:
      "A revised process, the roles required to run it, and a practical sequence for putting it in place.",
    outcome: "A clearer operating process and a plan for adopting it.",
    impact:
      "Results will be reported here after a completed engagement. This case is an illustrative placeholder, not a Penn client.",
    image: null,
    featured: true,
  },
  {
    id: "economic-development",
    client: "Economic development organization",
    sector: "Economic Development",
    workType: "Data & Analytics",
    challenge:
      "Leaders need a clearer picture of which efforts are reaching people, and which claims they can stand behind.",
    approach:
      "Assemble the data the organization already has, identify the gaps, and define a small set of measures tied to decisions.",
    recommendation:
      "An impact measurement approach the staff can maintain, plus the decisions those measures should inform.",
    outcome: "A measurement approach sized to the organization, not a dashboard no one will use.",
    impact:
      "Results will be reported here after a completed engagement. This case is an illustrative placeholder, not a Penn client.",
    image: null,
    featured: true,
  },
];

/** Sectors the chapter is prepared to discuss. Not a list of past clients. */
export const sectors = [
  "Education",
  "Healthcare",
  "Economic Development",
  "Sustainability",
  "Technology",
  "Community Development",
] as const;

export const featuredProjects = projects.filter((project) => project.featured);
