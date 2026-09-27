export type StatIcon = "handshake" | "users" | "briefcase" | "graduation" | "school";

export type Stat = {
  id: string;
  /** Display value. Use a number with an optional suffix, e.g. "48+", to enable the counter. */
  value: string;
  label: string;
  icon: StatIcon;
};

// TODO: Replace each value with a verified Penn chapter statistic before publishing.
export const stats: Stat[] = [
  { id: "projects", value: "XX+", label: "Projects completed", icon: "briefcase" },
  { id: "clients", value: "XX+", label: "Clients served", icon: "handshake" },
  { id: "consultants", value: "XX+", label: "Consultants", icon: "users" },
  { id: "alumni", value: "XX+", label: "Alumni", icon: "graduation" },
  { id: "schools", value: "X", label: "Penn schools represented", icon: "school" },
];

export const statsNote =
  "Figures are placeholders and will be replaced with verified chapter numbers.";
