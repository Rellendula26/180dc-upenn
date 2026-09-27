import { partners } from "@/data/partners";
import { Container } from "@/components/Container";

export function PartnerStrip() {
  if (partners.length === 0) return null;

  return (
    <section className="border-t border-rule" aria-label="Partners">
      <Container className="py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cobalt">Partners</p>
        <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
          {partners.map((partner) => (
            <li key={partner.name} className="text-sm font-semibold uppercase tracking-[0.14em] text-ink">
              {partner.href ? (
                <a href={partner.href} className="hover:underline" target="_blank" rel="noopener noreferrer">
                  {partner.name}
                </a>
              ) : (
                partner.name
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
