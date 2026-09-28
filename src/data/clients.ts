export type PastClient = {
  id: string;
  /** Public name. Null until the organization has agreed to be named. */
  name: string | null;
  /** Path under /public, e.g. "/clients/acme.svg". */
  logo: string | null;
  href: string | null;
};

// TODO: Replace each slot with a confirmed client. Add a logo file under public/clients
// and set name, logo, and href. Do not invent organizations.
export const pastClients: PastClient[] = [
  { id: "client-1", name: null, logo: null, href: null },
  { id: "client-2", name: null, logo: null, href: null },
  { id: "client-3", name: null, logo: null, href: null },
  { id: "client-4", name: null, logo: null, href: null },
  { id: "client-5", name: null, logo: null, href: null },
  { id: "client-6", name: null, logo: null, href: null },
];
