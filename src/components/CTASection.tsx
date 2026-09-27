import { Container } from "@/components/Container";

export function CTASection({
  id,
  eyebrow,
  title,
  description,
  actions,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  actions: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 bg-navy text-paper">
      <Container className="py-20 md:py-28">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/70">{eyebrow}</p>
        ) : null}
        <h2 className="max-w-4xl text-3xl font-light uppercase leading-tight tracking-[0.04em] md:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/80">{description}</p>
        ) : null}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{actions}</div>
      </Container>
    </section>
  );
}
