import type { Metadata } from "next";
import { ApplyAction } from "@/components/ApplyAction";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Hero } from "@/components/Hero";
import { RecruitingTimeline } from "@/components/RecruitingTimeline";
import { SectionHeading } from "@/components/SectionHeading";
import { faqs } from "@/data/faqs";
import {
  memberBenefits,
  recruitingEvents,
  recruitingResources,
  traits,
} from "@/data/recruiting";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata: Metadata = pageMetadata(
  "Join Us",
  "Apply to 180 Degrees Consulting at Penn. Students interested in consulting, problem solving, social impact, and collaborative work are welcome.",
  "/join",
);

export default function JoinPage() {
  return (
    <>
      <Hero
        eyebrow="Join us"
        title="Build skills. Create impact. Find your community."
        lede="180DC Penn welcomes Penn students who are interested in consulting, problem solving, social impact, and collaborative work. Eligibility rules will be posted here once the chapter confirms them."
      />

      <section>
        <Container className="py-20 md:py-28">
          <SectionHeading eyebrow="Why 180DC Penn" title="The work, and the people around it." />
          <ol className="mt-14 grid gap-px bg-rule sm:grid-cols-2">
            {memberBenefits.map((benefit, index) => (
              <li key={benefit.title} className="bg-paper p-8 md:p-10">
                <p className="font-serif text-sm text-cobalt">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 font-serif text-3xl tracking-tight text-ink">{benefit.title}</h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted">{benefit.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-y border-rule bg-white">
        <Container className="py-20 md:py-28">
          <SectionHeading eyebrow="Recruiting timeline" title="The path, once dates are set.">
            Dates below read “Coming Soon” until the chapter publishes them. Nothing on this timeline is an estimate.
          </SectionHeading>
          <div className="mt-12">
            <RecruitingTimeline events={recruitingEvents} />
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-20 md:py-28">
          <SectionHeading eyebrow="What we look for" title="Traits, not a single résumé.">
            Applicants can come from many academic backgrounds. The chapter is looking for how you think and how you work with other people.
          </SectionHeading>
          <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {traits.map((trait) => (
              <li key={trait.title} className="border-t border-rule pt-5">
                <h3 className="font-serif text-2xl text-ink">{trait.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{trait.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-rule bg-white">
        <Container className="py-20 md:py-28">
          <SectionHeading eyebrow="Recruitment resources" title="Read before you apply." />
          <ul className="mt-12 grid gap-px bg-rule md:grid-cols-2">
            {recruitingResources.map((resource) => (
              <li key={resource.id} className="bg-white">
                {resource.href ? (
                  <Link href={resource.href} className="block h-full p-8 hover:bg-paper">
                    <ResourceBody title={resource.title} description={resource.description} status="Read" />
                  </Link>
                ) : (
                  <div className="h-full p-8">
                    <ResourceBody title={resource.title} description={resource.description} status="Coming soon" />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="faq" className="scroll-mt-28">
        <Container className="py-20 md:py-28">
          <SectionHeading eyebrow="FAQ" title="Questions, answered plainly." />
          <div className="mt-10">
            <FAQAccordion faqs={faqs} />
          </div>
        </Container>
      </section>

      <CTASection
        id="apply"
        title="Ready to make an impact?"
        description="When recruiting opens, the application will be linked from this button. Until then, it stays closed rather than pointing nowhere."
        actions={<ApplyAction variant="inverse" />}
      />
    </>
  );
}

function ResourceBody({
  title,
  description,
  status,
}: {
  title: string;
  description: string;
  status: string;
}) {
  return (
    <>
      <h3 className="font-serif text-2xl text-ink">{title}</h3>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{description}</p>
      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-navy">{status}</p>
    </>
  );
}
