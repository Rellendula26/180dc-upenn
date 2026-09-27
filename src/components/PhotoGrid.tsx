import type { CommunityPhoto } from "@/data/community";
import { MediaFrame } from "@/components/MediaFrame";

export function PhotoGrid({ photos }: { photos: CommunityPhoto[] }) {
  return (
    <ul className="grid grid-cols-2 gap-3 md:grid-cols-6 md:grid-rows-2 md:gap-4">
      {photos.map((photo) => (
        <li key={photo.id} className={photo.className}>
          <MediaFrame
            src={photo.src}
            alt={photo.alt}
            label={photo.label}
            variant={photo.variant}
            className="h-full min-h-40"
            sizes="(min-width: 768px) 40vw, 50vw"
          />
        </li>
      ))}
    </ul>
  );
}
