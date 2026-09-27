import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Reveal";
import { StatCounter } from "@/components/StatCounter";
import { whatWeDo } from "@/data/audiences";
import { stats, statsNote } from "@/data/stats";

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
      <div className="relative z-10 mx-auto flex min-h-[36rem] max-w-7xl flex-col justify-end px-5 py-14 lg:px-8 lg:py-16">
        <Reveal variant="slide" className="ml-auto w-full max-w-xl">
          <div className="bg-navy/80 px-7 py-9 sm:px-10 sm:py-11 md:rounded-l-2xl">
            <h2 className="w-fit border-b border-white/45 pb-2 text-3xl font-normal uppercase tracking-[0.06em] md:text-4xl">
              {whatWeDo.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/85">{whatWeDo.body}</p>
            <div className="mt-8">
              <ButtonLink href={whatWeDo.href} variant="ghost">
                {whatWeDo.link}
              </ButtonLink>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, index) => (
            <Reveal key={stat.id} delay={index * 80}>
              <StatCounter value={stat.value} label={stat.label} icon={stat.icon} tone="light" />
            </Reveal>
          ))}
        </div>
        <p className="mt-8 max-w-xl text-sm text-white/70">{statsNote}</p>
      </div>
    </section>
  );
}
