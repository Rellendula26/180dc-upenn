import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <Container className="py-28 md:py-36">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cobalt">404</p>
      <h1 className="mt-4 max-w-xl font-serif text-5xl tracking-tight text-ink">
        This page is not on the map.
      </h1>
      <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
        The link may be out of date. The chapter’s main pages are still here.
      </p>
      <div className="mt-8">
        <ButtonLink href="/">Back to home</ButtonLink>
      </div>
    </Container>
  );
}
