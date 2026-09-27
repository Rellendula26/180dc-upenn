export type Partner = {
  name: string;
  href?: string;
  /** Path under /public. */
  logo?: string;
};

// TODO: Add organizations only after they have agreed to be named.
// An empty list hides the partner strip. Do not add logos as decoration.
export const partners: Partner[] = [];
