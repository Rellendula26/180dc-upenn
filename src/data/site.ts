/**
 * Chapter-wide settings.
 * Update links, the public email, and the application URL here.
 * Leave a value null until it is real — the UI will show a forthcoming state
 * instead of linking nowhere.
 */

export const site = {
  name: "180 Degrees Consulting at the University of Pennsylvania",
  shortName: "180DC Penn",
  title: "180 Degrees Consulting at Penn | University of Pennsylvania",
  description:
    "180 Degrees Consulting at the University of Pennsylvania provides pro bono consulting services to mission-driven organizations while giving Penn students hands-on consulting experience.",
  // TODO: Replace with the production domain before launch.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  location: "Philadelphia, Pennsylvania",
  // TODO: Replace with the chapter contact email.
  email: null as string | null,
  // TODO: Replace with the live application URL (Form, Slate, or other).
  // Null renders “Applications Coming Soon” instead of a dead link.
  applicationUrl: null as string | null,
  tagline: "Creative Ideas. Practical Solutions. Lasting Change.",
  // Light brand context. Ranking language is a shorthand; it is not a sourced citation on the page.
  whartonNote: "Wharton · #1 business school in the world",
  globalNetworkUrl: "https://180dc.org",
  /**
   * Full-bleed homepage photograph.
   * TODO: Replace with a 180DC Penn chapter photo. Drop the file in public/images
   * and point this path at it.
   */
  heroImage: "/images/hero.jpg",
  heroCredit: "Locust Walk, University of Pennsylvania. Photo: Teutonia25, CC BY-SA 4.0.",
  social: {
    // TODO: Replace with the chapter LinkedIn URL.
    linkedin: null as string | null,
    // TODO: Replace with the chapter Instagram URL.
    instagram: null as string | null,
  },
} as const;

export const routes = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Our Team" },
  { href: "/work", label: "Our Work" },
  { href: "/join", label: "Join Us" },
  { href: "/contact", label: "Contact" },
] as const;

export const navItems = routes.filter((route) => route.href !== "/");

/**
 * Client inquiry delivery.
 * Set `endpoint` to a Formspree, Supabase, or similar URL to start receiving
 * submissions. While it is null, the form explains that it is not yet connected.
 */
export const inquiryForm = {
  // TODO: Connect a form backend, e.g. "https://formspree.io/f/xxxxxxxx".
  endpoint: null as string | null,
  method: "POST" as const,
};
