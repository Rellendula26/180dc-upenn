import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { audiences } from "@/data/audiences";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";

export function AudienceRows() {
  return (
    <section className="bg-white" aria-label="Who the chapter is for">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-5 py-16 md:gap-20 md:py-24 lg:px-8">
        {audiences.map((item) => (
          <article
            key={item.id}
            className="grid items-center gap-8 md:grid-cols-2 md:gap-0"
          >
            <Reveal
              variant={item.flip ? "flip" : "rise"}
              className={cn("relative z-0", item.reverse ? "md:order-2 md:-ml-16" : "md:-mr-16")}
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                width={1200}
                height={800}
                className="h-72 w-full object-cover sm:h-80 md:h-[22rem]"
              />
            </Reveal>
            <Reveal
              delay={140}
              className={cn("relative z-10", item.reverse ? "md:order-1" : undefined)}
            >
              <div className="relative overflow-hidden bg-[#f7f9f6] px-7 py-9 sm:px-10 sm:py-12">
                {item.id === "analysts" ? (
                  <Image
                    src="/brand/logo.png"
                    alt=""
                    width={284}
                    height={287}
                    className="pointer-events-none absolute -right-6 -bottom-10 w-40 opacity-[0.12]"
                  />
                ) : null}
                <h2 className="text-3xl font-medium uppercase tracking-[0.04em] text-ink md:text-4xl">
                  {item.title}
                </h2>
                <p className="relative mt-4 max-w-md text-base leading-relaxed text-ink/80">{item.body}</p>
                <Link
                  href={item.href}
                  className="group relative mt-7 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-navy"
                >
                  {item.link}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </Reveal>
          </article>
        ))}
      </div>
    </section>
  );
}
