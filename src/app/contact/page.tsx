import type { Metadata } from "next";
import { ClientInquiryForm } from "@/components/ClientInquiryForm";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { TextLink } from "@/components/TextLink";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Work With Us",
  "Start a client inquiry with 180 Degrees Consulting at the University of Pennsylvania, or find where to send a general question.",
  "/contact",
);

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Let’s solve something meaningful."
        lede="Two ways in. Organizations with a problem to scope, and students or anyone else with a question about the chapter."
      />

      <section className="grid border-b border-rule lg:grid-cols-2">
        <div className="border-b border-rule px-6 py-14 sm:px-10 lg:border-r lg:border-b-0 lg:px-16 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cobalt">Organizations</p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight text-ink">Interested in becoming a client?</h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
            Use the inquiry form. Describe the challenge in the language you would use with your own board. A fit is a question a student team can meaningfully move in a semester.
          </p>
          <p className="mt-6">
            <TextLink href="#inquiry">Go to the form</TextLink>
          </p>
        </div>
        <div className="px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cobalt">Students and general inquiries</p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight text-ink">Questions about 180DC Penn?</h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
            Recruiting questions are answered on the Join page. For anything else, write to the chapter once a public email is confirmed.
          </p>
          <p className="mt-6 text-base text-ink">
            {site.email ? (
              <a href={`mailto:${site.email}`} className="font-semibold text-navy underline decoration-penn/40 underline-offset-4">
                {site.email}
              </a>
            ) : (
              <span>Email forthcoming</span>
            )}
          </p>
          <p className="mt-4">
            <TextLink href="/join#faq">Read the recruiting FAQ</TextLink>
          </p>
        </div>
      </section>

      <section id="inquiry" className="scroll-mt-28">
        <Container className="grid gap-12 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-4xl tracking-tight text-ink">Client inquiry</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              The form is ready to connect to Formspree, Supabase, or another endpoint. Until that connection exists, it will not pretend to send your note.
            </p>
          </div>
          <div className="lg:col-span-8">
            <ClientInquiryForm />
          </div>
        </Container>
      </section>
    </>
  );
}
