export type Audience = {
  id: string;
  title: string;
  body: string;
  href: string;
  link: string;
  image: string;
  imageAlt: string;
  /** Photo on the right, copy on the left. */
  reverse?: boolean;
  /** Scroll-in flip, used on the first band the way the Michigan page does. */
  flip?: boolean;
};

export const whatWeDo = {
  title: "What we do",
  body: "We provide socially conscious organizations with pro bono consulting. A Penn team takes one challenge, researches it, and develops a practical recommendation the organization can use.",
  href: "/contact",
  link: "Request Our Services",
  image: "/images/hero.jpg",
  imageAlt: "",
} as const;

// Campus photographs stand in until the chapter has its own. They are not pictures of Penn members.
export const audiences: Audience[] = [
  {
    id: "clients",
    title: "For clients",
    body: "Work with students at the University of Pennsylvania on a challenge your organization is facing. Engagements are pro bono. A team researches the problem and leaves you with recommendations you can act on.",
    href: "/contact",
    link: "Request Our Services",
    image: "/images/college-hall.jpg",
    imageAlt: "College Hall at the University of Pennsylvania.",
    flip: true,
  },
  {
    id: "analysts",
    title: "For analysts",
    body: "Gain hands-on experience with nonprofits and social enterprises. Work in a small team, make lasting connections with other Penn students, and learn how a recommendation gets built.",
    href: "/team",
    link: "Meet the team",
    image: "/images/locust-2024.jpg",
    imageAlt: "Students walking along Locust Walk at the University of Pennsylvania.",
    reverse: true,
  },
  {
    id: "students",
    title: "For students",
    body: "The chapter welcomes Penn students across schools, majors, and years. Prior consulting experience is not a published requirement. Read how recruiting works, and apply when the application opens.",
    href: "/join#apply",
    link: "Apply to 180DC",
    image: "/images/hero.jpg",
    imageAlt: "Locust Walk at the University of Pennsylvania, looking toward the Wharton School.",
  },
];
