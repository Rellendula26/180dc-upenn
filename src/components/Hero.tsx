import { Container } from "@/components/Container";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

export function Hero({
  eyebrow,
  title,
  lede,
  actions,
  media,
  align = "page",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: string;
  actions?: React.ReactNode;
  media?: React.ReactNode;
  align?: "home" | "page";
}) {
  if (align === "home") {
    return (
      <section className="relative flex min-h-svh items-center justify-center overflow-hidden bg-[#102006] text-white">
        {media}
        <div className="pointer-events-none absolute inset-0 bg-black/45" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/60" />
        <div className="hero-in pointer-events-none relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 pt-28 pb-32 text-center">
          <p className="flex items-center gap-4 text-xs font-medium tracking-[0.42em] sm:text-sm">
            <span className="h-px w-8 bg-white/80 sm:w-12" aria-hidden />
            PENN
            <span className="h-px w-8 bg-white/80 sm:w-12" aria-hidden />
          </p>
          <h1 className="mt-5 max-w-4xl text-[2.1rem] font-medium uppercase leading-[1.05] tracking-[0.02em] sm:text-6xl md:text-7xl">
            {title}
          </h1>
          {lede ? (
            <p className="mt-5 text-xs font-medium uppercase tracking-[0.22em] sm:text-sm md:text-base">
              {lede}
            </p>
          ) : null}
          <p className="mt-3 text-[0.62rem] font-normal uppercase tracking-[0.28em] text-white/55">
            {site.whartonNote}
          </p>
          {actions ? (
            <div className="pointer-events-auto mt-10 flex flex-col items-center gap-4 sm:flex-row">{actions}</div>
          ) : null}
        </div>
        <p className="pointer-events-none absolute inset-x-6 bottom-8 z-10 text-center text-base font-light tracking-wide sm:bottom-10 sm:text-2xl">
          {site.tagline}
        </p>
      </section>
    );
  }

  return (
    <section className="border-b border-rule bg-white">
      <Container className="py-16 md:py-20">
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h1
          className={cn(
            "max-w-4xl text-4xl font-normal uppercase leading-[1.1] tracking-[0.04em] text-ink md:text-5xl",
            eyebrow && "mt-3",
          )}
        >
          {title}
        </h1>
        {lede ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{lede}</p>
        ) : null}
        {actions ? <div className="mt-8 flex flex-col gap-3 sm:flex-row">{actions}</div> : null}
        {media ? <div className="mt-12">{media}</div> : null}
      </Container>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand">{children}</p>
  );
}

