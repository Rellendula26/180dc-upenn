import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export function InspirationBanner({
  actions,
}: {
  actions: React.ReactNode;
}) {
  return (
    <section className="relative flex min-h-[26rem] items-center justify-center overflow-hidden text-white md:min-h-[32rem]">
      <Image
        src="/images/locust-2024.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover grayscale contrast-75"
      />
      <div className="absolute inset-0 bg-black/55" />
      <Reveal className="relative z-10 px-6 py-20 text-center">
        <h2 className="text-[2rem] font-light uppercase leading-[1.15] tracking-[0.02em] sm:text-5xl md:text-6xl">
          <span className="block">
            Creative <span className="font-semibold text-brand">Ideas.</span>
          </span>
          <span className="block">
            Practical <span className="font-semibold text-brand">Solutions.</span>
          </span>
          <span className="block">
            Lasting <span className="font-semibold text-brand">Change.</span>
          </span>
        </h2>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">{actions}</div>
      </Reveal>
    </section>
  );
}
