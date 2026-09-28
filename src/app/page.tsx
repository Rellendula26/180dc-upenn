import type { Metadata } from "next";
import Image from "next/image";
import { AudienceRows } from "@/components/AudienceRows";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { InspirationBanner } from "@/components/InspirationBanner";
import { PastClients } from "@/components/PastClients";
import { PhotoGrid } from "@/components/PhotoGrid";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { StatCounter } from "@/components/StatCounter";
import { TextLink } from "@/components/TextLink";
import { WhatWeDoBand } from "@/components/WhatWeDoBand";
import { communityPhotos } from "@/data/community";
import { projectProcess } from "@/data/process";
import { featuredProjects } from "@/data/projects";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { stats, statsNote } from "@/data/stats";

export const metadata: Metadata = {
  title: { absolute: site.title },
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero
        align="home"
        title="180 Degrees Consulting"
        lede="World's largest student consultancy"
        actions={
          <>
            <ButtonLink href="/contact" variant="inverse" className="min-w-40 px-8">
              Request Our Services
            </ButtonLink>
            <ButtonLink href="/join#apply" variant="ghost">
              Apply Today
            </ButtonLink>
          </>
        }
        media={<HeroSlideshow />}
      />

      <section className="bg-white">
        <Container className="grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading title="Who we are">
              <span className="text-ink">
                180 Degrees Consulting is the world&apos;s largest consultancy for{" "}
                <strong className="font-semibold text-brand">nonprofits</strong> and{" "}
                <strong className="font-semibold text-brand">social enterprises</strong>.
              </span>{" "}
              At the Penn branch, students work with mission-driven organizations on the challenges
              that decide whether their work can grow. Members share a goal of consulting work that
              is demanding, useful, and tied to{" "}
              <strong className="font-semibold text-brand">social impact</strong>.
            </SectionHeading>
            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted">{site.whartonNote}</p>
          </Reveal>
          <Reveal delay={120}>
            <Image
              src="/images/college-hall.jpg"
              alt="College Hall at the University of Pennsylvania."
              width={1200}
              height={900}
              className="h-72 w-full object-cover sm:h-96"
            />
          </Reveal>
        </Container>
      </section>

      <WhatWeDoBand />

      <section className="bg-white">
        <Container className="py-20 md:py-28">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading eyebrow="Services" title="Four ways we help." />
            <TextLink href="/work">Explore our work</TextLink>
          </div>
          <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Reveal key={service.id} delay={index * 90}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <PastClients />

      <section className="relative overflow-hidden bg-navy text-white" aria-label="Chapter statistics">
        <Image
          src="/images/locust-2024.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <Container className="relative z-10 py-16 md:py-20">
          <SectionHeading tone="light" eyebrow="Impact" title="By the numbers." />
          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
            {stats.map((stat, index) => (
              <Reveal key={stat.id} delay={index * 80}>
                <StatCounter value={stat.value} label={stat.label} icon={stat.icon} tone="light" />
              </Reveal>
            ))}
          </div>
          <p className="mt-8 max-w-xl text-sm text-white/70">{statsNote}</p>
        </Container>
      </section>

      <section className="border-b border-rule bg-paper">
        <Container className="py-20 md:py-28">
          <SectionHeading
            eyebrow="How projects work"
            title="A semester, with a clear arc."
          >
            Every engagement follows the same discipline, so the client always knows what stage the work is in.
          </SectionHeading>
          <Reveal className="mt-14">
            <ProcessTimeline steps={projectProcess} />
          </Reveal>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-20 md:py-28">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading eyebrow="Selected work" title="The shape of a project.">
              These cases show the kind of problem a team takes on. They are placeholders until confirmed Penn engagements can be published.
            </SectionHeading>
            <TextLink href="/work">View our work</TextLink>
          </div>
          <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.id} delay={index * 90}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <AudienceRows />

      <section className="border-t border-rule bg-paper">
        <Container className="grid items-center gap-12 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="The chapter" title="More than a project team.">
              Mentorship, friendships, professional development, alumni connections, speaker events, workshops, and socials sit alongside the client work. Students collaborate across Penn schools, then stay in touch after the semester ends.
            </SectionHeading>
          </div>
          <Reveal className="lg:col-span-7" delay={120}>
            <PhotoGrid photos={communityPhotos} />
          </Reveal>
        </Container>
      </section>

      <InspirationBanner
        actions={
          <>
            <ButtonLink href="/contact" variant="inverse">
              Request Our Services
            </ButtonLink>
            <ButtonLink href="/join#apply" variant="ghost">
              Apply Today
            </ButtonLink>
          </>
        }
      />
    </>
  );
}
