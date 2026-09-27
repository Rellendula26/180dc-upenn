export const values = [
  {
    id: "impact",
    title: "Impact",
    description:
      "We take on work that helps a mission-driven organization serve people better. A polished deck is not the point.",
  },
  {
    id: "curiosity",
    title: "Curiosity",
    description:
      "We learn the organization before we advise it. The first answer is usually a better question.",
  },
  {
    id: "collaboration",
    title: "Collaboration",
    description:
      "The useful recommendation is built by a team that argues carefully and then stands behind the work.",
  },
  {
    id: "excellence",
    title: "Excellence",
    description:
      "Student work should still be work a serious organization can use. We hold it to that standard.",
  },
] as const;

export const pennSchools = [
  {
    name: "Wharton",
    contribution: "Markets, organizations, and how a decision gets made.",
  },
  {
    name: "Penn Engineering",
    contribution: "Systems, quantitative reasoning, and operational detail.",
  },
  {
    name: "College of Arts & Sciences",
    contribution: "Research, policy, writing, and the habit of questioning a frame.",
  },
  {
    name: "Nursing",
    contribution: "Health systems, care delivery, and the realities of community work.",
  },
] as const;

export const networkRegions = [
  "North America",
  "Latin America",
  "Europe",
  "Africa",
  "Middle East",
  "Asia-Pacific",
] as const;

// TODO: Replace with the current president. Do not publish a name that has not been confirmed.
export const president = {
  name: "Name to be added",
  role: "President",
  classYear: "Class year to be added",
  major: "Major to be added",
  school: "School to be added",
  linkedin: null as string | null,
  photo: null as string | null,
  letter: [
    "This note is a placeholder for a letter from the president of 180DC Penn.",
    "Replace it with a short letter in the president’s own voice: why the chapter exists, what a client should expect from an engagement, and what a student should expect from a semester on a team.",
  ],
};
