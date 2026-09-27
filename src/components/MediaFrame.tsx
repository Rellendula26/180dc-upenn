import Image from "next/image";
import { cn } from "@/lib/cn";

type Variant = "campus" | "meeting" | "community" | "portrait" | "project";

export function MediaFrame({
  src,
  alt,
  label,
  variant = "campus",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className,
}: {
  src?: string | null;
  alt: string;
  label?: string;
  variant?: Variant;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <figure className={cn("relative h-full w-full overflow-hidden bg-navy", className)}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover motion-safe:animate-drift"
        />
      ) : (
        <Placeholder variant={variant} />
      )}
      {src ? null : (
        <figcaption
          className={cn(
            "pointer-events-none absolute inset-x-0 bottom-0 px-4 py-4 text-[0.68rem] font-semibold uppercase tracking-[0.16em]",
            variant === "portrait"
              ? "text-navy/70"
              : "bg-gradient-to-t from-navy via-navy/55 to-transparent text-paper",
          )}
        >
          {label ?? "Photograph to be added"}
        </figcaption>
      )}
    </figure>
  );
}

function Placeholder({ variant }: { variant: Variant }) {
  if (variant === "portrait") {
    return (
      <div className="flex h-full w-full items-end bg-[#e4dfd6] p-4" aria-hidden>
        <svg viewBox="0 0 200 260" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
          <rect width="200" height="260" fill="#e4dfd6" />
          <circle cx="100" cy="92" r="36" fill="#0c2340" opacity="0.12" />
          <path d="M40 230c8-48 32-72 60-72s52 24 60 72" fill="#0c2340" opacity="0.12" />
        </svg>
      </div>
    );
  }

  if (variant === "meeting") {
    return (
      <svg viewBox="0 0 800 640" className="h-full w-full motion-safe:animate-drift" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <rect width="800" height="640" fill="#16365c" />
        <rect x="80" y="360" width="640" height="8" fill="#f3f0e8" />
        <rect x="140" y="180" width="90" height="120" fill="#f3f0e8" opacity="0.85" />
        <rect x="250" y="140" width="110" height="160" fill="#f3f0e8" opacity="0.55" />
        <rect x="390" y="200" width="80" height="100" fill="#990000" opacity="0.9" />
        <rect x="500" y="160" width="130" height="140" fill="#f3f0e8" opacity="0.35" />
      </svg>
    );
  }

  if (variant === "community") {
    return (
      <svg viewBox="0 0 800 640" className="h-full w-full motion-safe:animate-drift" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <rect width="800" height="640" fill="#0c2340" />
        {[0, 1, 2, 3].map((row) =>
          [0, 1, 2, 3].map((col) => (
            <rect
              key={`${row}-${col}`}
              x={70 + col * 175}
              y={70 + row * 140}
              width="150"
              height="110"
              fill="#f3f0e8"
              opacity={((row + col) % 3) * 0.18 + 0.12}
            />
          )),
        )}
      </svg>
    );
  }

  if (variant === "project") {
    return (
      <svg viewBox="0 0 800 640" className="h-full w-full motion-safe:animate-drift" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <rect width="800" height="640" fill="#102845" />
        <rect x="90" y="420" width="70" height="120" fill="#f3f0e8" opacity="0.35" />
        <rect x="190" y="300" width="70" height="240" fill="#f3f0e8" opacity="0.55" />
        <rect x="290" y="220" width="70" height="320" fill="#f3f0e8" opacity="0.8" />
        <rect x="390" y="260" width="70" height="280" fill="#990000" />
        <rect x="490" y="160" width="70" height="380" fill="#f3f0e8" opacity="0.45" />
        <path d="M90 180h520" stroke="#f3f0e8" strokeOpacity="0.35" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 800 1000" className="h-full w-full motion-safe:animate-drift" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="800" height="1000" fill="#0c2340" />
      <rect x="70" y="250" width="660" height="14" fill="#f3f0e8" />
      {[0, 1, 2, 3, 4, 5, 6].map((column) => (
        <rect
          key={column}
          x={100 + column * 90}
          y={278}
          width="16"
          height="430"
          fill="#f3f0e8"
          opacity="0.9"
        />
      ))}
      <rect x="70" y="708" width="660" height="6" fill="#990000" />
      <rect x="70" y="760" width="220" height="4" fill="#f3f0e8" opacity="0.4" />
    </svg>
  );
}
