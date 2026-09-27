import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { MediaFrame } from "@/components/MediaFrame";
import { SectionHeading } from "@/components/SectionHeading";
import { TextLink } from "@/components/TextLink";
import { networkRegions, pennSchools, president, values } from "@/data/about";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "About",
  "180 Degrees Consulting at Penn is a student consultancy for mission-driven organizations, and part of an international network of university chapters.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About"
        title="A consultancy, based at Penn."
        lede="180DC Penn exists to put careful student work in service of organizations that are trying to do something useful in the world."
      />

      <section>
        <Container className="grid gap-10 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Our mission" title="Useful work for organizations that need it." />
          </div>
          <div className="max-w-xl space-y-5 text-lg leading-relaxed text-muted lg:col-span-7">
            <p>
              180 Degrees Consulting was founded so that talented students could help nonprofits and social enterprises with the strategic and operational problems that determine whether their work can last.
            </p>
            <p>
              At Penn, that purpose is local and specific. A team learns an organization in Philadelphia or beyond, stays with one question for a semester, and leaves behind a recommendation the client can actually use.
            </p>
            <p>
              The chapter is also a place to learn the craft: how to frame a problem, how to separate evidence from preference, and how to speak plainly to the person who has to implement the answer.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-y border-rule bg-white">
        <Container className="py-20 md:py-28">
          <SectionHeading eyebrow="The 180DC network" title="One chapter in a wider practice.">
            180 Degrees Consulting is an international network of university-based consulting organizations. Branches recruit students to advise nonprofits, social enterprises, and other mission-driven organizations. Penn is the Philadelphia chapter.
          </SectionHeading>
          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-4" aria-label="Regions where 180 Degrees Consulting operates">
            {networkRegions.map((region) => (
              <li key={region} className="font-serif text-2xl text-ink/35 md:text-3xl">
                {region}
              </li>
            ))}
          </ul>
          <p className="mt-8 font-serif text-2xl text-ink md:text-3xl">Philadelphia</p>
          <p className="mt-8">
            <TextLink href={site.globalNetworkUrl}>180dc.org</TextLink>
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-20 md:py-28">
          <SectionHeading eyebrow="Why Penn" title="Different training, one team.">
            Penn students do not arrive with a single way of seeing a problem. That is the advantage. A consulting team here can hold a market question, a systems question, and a human question at the same time.
          </SectionHeading>
          <ul className="mt-14 divide-y divide-rule border-y border-rule">
            {pennSchools.map((school) => (
              <li key={school.name} className="grid gap-2 py-6 md:grid-cols-12 md:items-baseline">
                <h3 className="font-serif text-2xl text-ink md:col-span-5">{school.name}</h3>
                <p className="text-base leading-relaxed text-muted md:col-span-7">{school.contribution}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">
            These schools illustrate the range of training a team can draw on. They are not a claim about current membership or formal partnerships.
          </p>
        </Container>
      </section>

      <section className="bg-navy text-paper">
        <Container className="py-20 md:py-28">
          <SectionHeading tone="light" eyebrow="Our values" title="How the work is judged." />
          <ol className="mt-14 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <li key={value.id} className="border-t border-paper/20 pt-6">
                <p className="font-serif text-sm text-paper/50">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 font-serif text-3xl">{value.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-paper/75">{value.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section>
        <Container className="grid items-start gap-12 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cobalt">President’s note</p>
            <div className="mt-6 max-w-xs">
              <MediaFrame
                src={president.photo}
                alt={
                  president.photo
                    ? `Portrait of ${president.name}, president of 180DC Penn.`
                    : "Portrait placeholder for the president of 180DC Penn."
                }
                label="President photo"
                variant="portrait"
                className="aspect-[3/4]"
                sizes="320px"
              />
            </div>
            <p className="mt-5 font-serif text-2xl text-ink">{president.name}</p>
            <p className="mt-1 text-sm text-muted">
              {president.role}
              <span aria-hidden> · </span>
              {president.classYear}
            </p>
            <p className="text-sm text-muted">
              {president.major}
              <span aria-hidden> · </span>
              {president.school}
            </p>
            {president.linkedin ? (
              <p className="mt-3">
                <TextLink href={president.linkedin}>LinkedIn</TextLink>
              </p>
            ) : null}
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              Placeholder — replace with the current president’s letter
            </p>
            <div className="mt-6 space-y-5 font-serif text-2xl leading-snug text-ink">
              {president.letter.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
