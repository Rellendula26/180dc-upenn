import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CaseStudy } from "@/components/CaseStudy";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { PartnerStrip } from "@/components/PartnerStrip";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import {
  engagementDetails,
  engagementStructure,
  engagementTimeline,
} from "@/data/process";
import { projects, sectors } from "@/data/projects";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Our Work",
  "180DC Penn works with mission-driven organizations on strategy, operations, marketing, and data and analytics.",
  "/work",
);

export default function WorkPage() {
  return (
    <>
      <Hero
        eyebrow="Our work"
        title="Your mission. Our strategy."
        lede="180DC Penn works with mission-driven organizations to tackle strategic and operational challenges through research, analysis, and actionable recommendations."
        actions={<ButtonLink href="/contact#inquiry">Work With 180DC Penn</ButtonLink>}
      />

      <section>
        <Container className="py-20 md:py-28">
          <SectionHeading eyebrow="Services" title="What a team can take on.">
            Engagements are scoped to a question the organization can act on in a semester, not to a standing retainer.
          </SectionHeading>
          <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} detailed />
            ))}
          </div>
          <ul className="mt-16 flex flex-wrap gap-x-6 gap-y-3 border-t border-rule pt-8" aria-label="Sectors">
            {sectors.map((sector) => (
              <li key={sector} className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">
                {sector}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-y border-rule bg-white">
        <Container className="grid gap-16 py-20 md:py-28 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Engagement structure" title="A client, a leader, a team.">
              A typical engagement runs for a semester. Team size and meeting cadence will be confirmed by the chapter before an engagement begins.
            </SectionHeading>
            <ol className="mt-12">
              {engagementStructure.map((item, index) => (
                <li key={item.role} className="relative border-l border-rule pb-10 pl-8 last:pb-0">
                  <span className="absolute top-1.5 -left-[5px] size-2.5 bg-penn" aria-hidden />
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cobalt">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-serif text-3xl text-ink">{item.role}</h3>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-muted">{item.description}</p>
                </li>
              ))}
            </ol>
          </div>
          <dl className="grid content-start gap-8 lg:pt-28">
            {engagementDetails.map((detail) => (
              <div key={detail.label} className="border-t border-rule pt-5">
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-cobalt">
                  {detail.label}
                </dt>
                <dd className="mt-3 font-serif text-2xl leading-snug text-ink">{detail.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section>
        <Container className="py-20 md:py-28">
          <SectionHeading eyebrow="Project timeline" title="Twelve weeks, in outline.">
            This schedule is a template. Confirm it against the chapter’s calendar before sharing it with a client.
          </SectionHeading>
          <div className="mt-14">
            <ProcessTimeline steps={engagementTimeline} />
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-20 md:py-8">
          <SectionHeading eyebrow="Case studies" title="Illustrative engagements.">
            Replace each case with a confirmed project. Do not publish a client name or a result that has not been verified.
          </SectionHeading>
          <div className="mt-8">
            {projects.map((project) => (
              <CaseStudy key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <PartnerStrip />

      <CTASection
        title="Have a challenge worth solving?"
        description="Tell us the problem. If it fits a semester-long student engagement, we will follow up."
        actions={
          <ButtonLink href="/contact#inquiry" variant="inverse">
            Work With 180DC Penn
          </ButtonLink>
        }
      />
    </>
  );
}
