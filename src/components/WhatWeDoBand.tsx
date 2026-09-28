import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Reveal";
import { whatWeDo } from "@/data/audiences";

export function WhatWeDoBand() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <Image
        src={whatWeDo.image}
        alt={whatWeDo.imageAlt}
        fill
        sizes="100vw"
        className="ken-burns object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto flex min-h-[32rem] max-w-7xl items-center px-5 py-16 lg:px-8">
        <Reveal variant="slide" className="ml-auto w-full max-w-xl">
          <div className="bg-navy/80 px-7 py-9 sm:px-10 sm:py-11 md:rounded-l-2xl">
            <h2 className="w-fit border-b border-white/45 pb-2 text-3xl font-normal uppercase tracking-[0.06em] md:text-4xl">
              {whatWeDo.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/85">{whatWeDo.body}</p>
            <div className="mt-8">
              <ButtonLink href={whatWeDo.href} variant="inverse">
                {whatWeDo.link}
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
