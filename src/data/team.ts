export type TeamGroup = "executive" | "project-leader" | "consultant" | "alumni";

export type TeamMember = {
  id: string;
  name: string;
  position: string;
  group: TeamGroup;
  school: string;
  major: string;
  classYear: string;
  linkedin: string | null;
  /** Path under /public, e.g. "/images/team/jane.jpg". Null shows a portrait placeholder. */
  photo: string | null;
  /** Alumni only. Current role after 180DC. */
  currentRole?: string | null;
  /** Alumni only. Current organization. */
  currentOrganization?: string | null;
  placeholder: boolean;
};

export const teamGroupOrder: TeamGroup[] = [
  "executive",
  "project-leader",
  "consultant",
  "alumni",
];

export const teamFilters: Array<{ id: TeamGroup | "all"; label: string }> = [
  { id: "all", label: "All" },
  { id: "executive", label: "Executive Board" },
  { id: "project-leader", label: "Project Leaders" },
  { id: "consultant", label: "Consultants" },
  { id: "alumni", label: "Alumni" },
];

export const teamGroupMeta: Record<
  TeamGroup,
  { title: string; description: string }
> = {
  executive: {
    title: "Executive Board",
    description:
      "Students responsible for the chapter’s direction, client work, operations, external relationships, and membership.",
  },
  "project-leader": {
    title: "Project Leaders",
    description:
      "Students who lead a client engagement and are accountable for the quality of the team’s work.",
  },
  consultant: {
    title: "Consultants",
    description:
      "Students staffed to a project team. Profiles are added as each roster is confirmed.",
  },
  alumni: {
    title: "Alumni",
    description:
      "Former members of the chapter. Names, graduation years, and current roles are added once they are confirmed.",
  },
};

const unannounced = {
  name: "To be announced",
  school: "Penn school",
  major: "Major",
  classYear: "Class year",
  linkedin: null,
  photo: null,
  placeholder: true,
} as const;

// TODO: Replace each placeholder with a confirmed member.
// Add or remove objects in this array. Do not invent names.
export const teamMembers: TeamMember[] = [
  {
    id: "president",
    position: "President",
    group: "executive",
    ...unannounced,
  },
  {
    id: "vp-consulting",
    position: "VP Consulting",
    group: "executive",
    ...unannounced,
  },
  {
    id: "vp-operations",
    position: "VP Operations",
    group: "executive",
    ...unannounced,
  },
  {
    id: "vp-external",
    position: "VP External Relations",
    group: "executive",
    ...unannounced,
  },
  {
    id: "vp-membership",
    position: "VP Membership",
    group: "executive",
    ...unannounced,
  },
  {
    id: "project-leader-1",
    position: "Project Leader",
    group: "project-leader",
    ...unannounced,
  },
  {
    id: "project-leader-2",
    position: "Project Leader",
    group: "project-leader",
    ...unannounced,
  },
  {
    id: "project-leader-3",
    position: "Project Leader",
    group: "project-leader",
    ...unannounced,
  },
  {
    id: "consultant-1",
    position: "Consultant",
    group: "consultant",
    ...unannounced,
  },
  {
    id: "consultant-2",
    position: "Consultant",
    group: "consultant",
    ...unannounced,
  },
  {
    id: "consultant-3",
    position: "Consultant",
    group: "consultant",
    ...unannounced,
  },
  {
    id: "consultant-4",
    position: "Consultant",
    group: "consultant",
    ...unannounced,
  },
  // TODO: Replace each alumnus with a confirmed person. Do not invent names, employers, or years.
  {
    id: "alumnus-1",
    position: "Former 180DC role",
    group: "alumni",
    currentRole: "Current role to be added",
    currentOrganization: null,
    ...unannounced,
    classYear: "Graduation year",
  },
  {
    id: "alumnus-2",
    position: "Former 180DC role",
    group: "alumni",
    currentRole: "Current role to be added",
    currentOrganization: null,
    ...unannounced,
    classYear: "Graduation year",
  },
  {
    id: "alumnus-3",
    position: "Former 180DC role",
    group: "alumni",
    currentRole: "Current role to be added",
    currentOrganization: null,
    ...unannounced,
    classYear: "Graduation year",
  },
  {
    id: "alumnus-4",
    position: "Former 180DC role",
    group: "alumni",
    currentRole: "Current role to be added",
    currentOrganization: null,
    ...unannounced,
    classYear: "Graduation year",
  },
];
