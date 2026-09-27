import Link from "next/link";
import { navItems, site } from "@/data/site";
import { Container } from "@/components/Container";
import { Wordmark } from "@/components/Wordmark";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-paper">
      <Container className="grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Wordmark inverse />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/75">
            {site.name}
          </p>
          <p className="mt-4 text-sm text-paper/75">{site.location}</p>
        </div>

        <nav className="md:col-span-3" aria-label="Footer">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/55">Navigate</p>
          <ul className="mt-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-paper hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/55">Contact</p>
          {site.email ? (
            <a href={`mailto:${site.email}`} className="mt-4 block text-sm text-paper hover:underline">
              {site.email}
            </a>
          ) : (
            <p className="mt-4 text-sm text-paper/75">Email forthcoming</p>
          )}
          <ul className="mt-4 space-y-2">
            <li>
              <SocialLink href={site.social.linkedin} label="LinkedIn" />
            </li>
            <li>
              <SocialLink href={site.social.instagram} label="Instagram" />
            </li>
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-paper/75">
            Part of the global{" "}
            <a
              href={site.globalNetworkUrl}
              className="text-paper underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              180 Degrees Consulting
            </a>{" "}
            network.
          </p>
        </div>
      </Container>

      <div className="border-t border-paper/15">
        <Container className="flex flex-col gap-3 py-6 text-xs leading-relaxed text-paper/60 md:flex-row md:items-start md:justify-between">
          <p>© {year} {site.name}.</p>
          <p className="max-w-xl">
            180DC Penn is a student-run chapter. Engagements are pro bono and educational. An inquiry does not by itself create a client relationship.
          </p>
        </Container>
      </div>
    </footer>
  );
}

function SocialLink({ href, label }: { href: string | null; label: string }) {
  if (!href) {
    return <span className="text-sm text-paper/55">{label} — link forthcoming</span>;
  }

  return (
    <a href={href} className="text-sm text-paper hover:underline" target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}
