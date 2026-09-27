export type ServiceIcon = "compass" | "workflow" | "megaphone" | "chart";

export type Service = {
  id: string;
  title: string;
  icon: ServiceIcon;
  summary: string;
  offerings: string[];
  details: string[];
};

export const services: Service[] = [
  {
    id: "strategy",
    title: "Strategy",
    icon: "compass",
    summary:
      "Help an organization decide where to focus, whom to serve, and how to grow without losing the mission.",
    offerings: [
      "Growth strategy",
      "Market research",
      "Competitive analysis",
      "Market entry",
    ],
    details: [
      "Growth strategy and program prioritization",
      "Market and landscape research",
      "Competitive and peer analysis",
      "Market entry and expansion choices",
      "Stakeholder mapping",
    ],
  },
  {
    id: "operations",
    title: "Operations",
    icon: "workflow",
    summary:
      "Make the work of the organization easier to run, staff, and improve.",
    offerings: [
      "Process improvement",
      "Organizational design",
      "Program optimization",
    ],
    details: [
      "Process improvement",
      "Organizational design",
      "Program design and optimization",
      "Operating model choices",
      "Implementation planning",
    ],
  },
  {
    id: "marketing",
    title: "Marketing",
    icon: "megaphone",
    summary:
      "Clarify who the work is for and how the organization should reach them.",
    offerings: [
      "Brand strategy",
      "Customer and user research",
      "Go-to-market strategy",
    ],
    details: [
      "Brand and messaging strategy",
      "Customer, user, and beneficiary research",
      "Go-to-market strategy",
      "Channel and outreach planning",
      "Value proposition refinement",
    ],
  },
  {
    id: "data",
    title: "Data & Analytics",
    icon: "chart",
    summary:
      "Turn scattered information into a basis for a decision.",
    offerings: [
      "Data analysis",
      "Impact measurement",
      "Financial modeling",
      "Decision support",
    ],
    details: [
      "Data analysis and synthesis",
      "Impact measurement",
      "Financial modeling",
      "Dashboard and metric design",
      "Decision support",
    ],
  },
];
