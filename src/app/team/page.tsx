import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { TeamDirectory } from "@/components/TeamDirectory";
import { teamMembers } from "@/data/team";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Our Team",
  "Meet the executive board, project leaders, consultants, and alumni of 180 Degrees Consulting at the University of Pennsylvania.",
  "/team",
);

export default function TeamPage() {
  return (
    <>
      <Hero
        eyebrow="Our team"
        title="Meet the people behind 180DC Penn."
        lede="Roles are listed so the structure of the chapter is clear. Names, schools, majors, class years, photographs, and LinkedIn profiles are added as each roster is confirmed. Alumni live in the same directory."
      />
      <section>
        <Container className="py-16 md:py-24">
          <TeamDirectory members={teamMembers} />
        </Container>
      </section>
    </>
  );
}
