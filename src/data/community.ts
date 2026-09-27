export type CommunityPhoto = {
  id: string;
  alt: string;
  label: string;
  variant: "community" | "meeting" | "campus";
  /** Path under /public once a real photograph exists. */
  src: string | null;
  className?: string;
};

// TODO: Replace each src with a chapter photograph and rewrite the alt text to describe it.
export const communityPhotos: CommunityPhoto[] = [
  {
    id: "gathering",
    alt: "Placeholder for a photograph of an 180DC Penn chapter gathering.",
    label: "Chapter gathering",
    variant: "community",
    src: null,
    className: "col-span-2 aspect-[16/10] md:col-span-4 md:row-span-2 md:aspect-auto md:h-full",
  },
  {
    id: "workshop",
    alt: "Placeholder for a photograph of an 180DC Penn workshop or speaker event.",
    label: "Workshop",
    variant: "meeting",
    src: null,
    className: "aspect-[4/3] md:col-span-2",
  },
  {
    id: "social",
    alt: "Placeholder for a photograph of an 180DC Penn social.",
    label: "Social",
    variant: "campus",
    src: null,
    className: "aspect-[4/3] md:col-span-2",
  },
];
