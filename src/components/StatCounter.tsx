"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { Briefcase, GraduationCap, Handshake, School, Users, type LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { StatIcon } from "@/data/stats";
import { cn } from "@/lib/cn";

const icons: Record<StatIcon, LucideIcon> = {
  handshake: Handshake,
  users: Users,
  briefcase: Briefcase,
  graduation: GraduationCap,
  school: School,
};

function parseStat(value: string) {
  const match = /^(\D*?)(\d+)(.*)$/.exec(value);
  if (!match) return null;
  return {
    prefix: match[1],
    number: Number(match[2]),
    suffix: match[3],
  };
}

export function StatCounter({
  value,
  label,
  icon,
  tone = "dark",
}: {
  value: string;
  label: string;
  icon?: StatIcon;
  tone?: "dark" | "light";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });
  const reduce = useReducedMotion();
  const parsed = parseStat(value);
  const [display, setDisplay] = useState<number | null>(null);

  useEffect(() => {
    const parsedValue = parseStat(value);
    if (!parsedValue || !inView || reduce) return;

    const controls = animate(0, parsedValue.number, {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop();
  }, [inView, reduce, value]);

  const figure = parsed
    ? `${parsed.prefix}${reduce ? parsed.number : (display ?? parsed.number)}${parsed.suffix}`
    : value;

  const Icon = icon ? icons[icon] : null;
  const light = tone === "light";

  return (
    <div ref={ref}>
      {Icon ? (
        <Icon className={cn("mb-3 h-8 w-8", light ? "text-white" : "text-brand")} strokeWidth={1.5} />
      ) : null}
      <p className={cn("text-4xl font-light tracking-tight md:text-5xl", light ? "text-white" : "text-ink")}>
        {figure}
      </p>
      <p
        className={cn(
          "mt-2 max-w-[12rem] text-xs font-medium uppercase tracking-[0.14em]",
          light ? "text-white/80" : "text-brand",
        )}
      >
        {label}
      </p>
    </div>
  );
}
