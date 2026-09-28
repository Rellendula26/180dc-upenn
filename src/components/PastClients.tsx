import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { pastClients, type PastClient } from "@/data/clients";

export function PastClients() {
  return (
    <section className="border-y border-rule bg-white" aria-labelledby="past-clients">
      <Container className="py-20 md:py-28">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading id="past-clients" eyebrow="Credibility" title="Organizations we've worked with.">
            Client logos go here once an organization has agreed to be named. The marks below are open spaces, not clients.
          </SectionHeading>
          <ButtonLink href="/contact" className="shrink-0">
            Request Our Services
          </ButtonLink>
        </div>
        <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {pastClients.map((client, index) => (
            <li key={client.id}>
              <Reveal delay={index * 60}>
                <ClientMark client={client} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function ClientMark({ client }: { client: PastClient }) {
  const label = client.name ?? "Logo forthcoming";

  const mark = client.logo ? (
    <Image
      src={client.logo}
      alt={client.name ? `${client.name} logo` : ""}
      width={160}
      height={64}
      className="max-h-12 w-auto object-contain"
    />
  ) : (
    <span className="text-center text-[0.65rem] font-medium uppercase tracking-[0.16em] text-muted">
      {label}
    </span>
  );

  const className =
    "flex h-24 items-center justify-center border border-rule bg-paper px-4";

  if (client.href && client.name) {
    return (
      <a href={client.href} className={className} target="_blank" rel="noopener noreferrer">
        {mark}
      </a>
    );
  }

  return <div className={className}>{mark}</div>;
}
