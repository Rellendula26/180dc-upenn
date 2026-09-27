import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  children,
  id,
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  id?: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.18em]",
            tone === "light" ? "text-paper/70" : "text-cobalt",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={cn(
          "w-fit border-b pb-2 text-3xl font-normal uppercase tracking-[0.06em] md:text-4xl",
          eyebrow ? "mt-3" : undefined,
          tone === "light" ? "border-white/40 text-paper" : "border-ink text-ink",
        )}
      >
        {title}
      </h2>
      {children ? (
        <div
          className={cn(
            "mt-5 text-lg leading-relaxed",
            tone === "light" ? "text-paper/80" : "text-muted",
          )}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
