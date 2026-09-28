"use client";

import { useState } from "react";
import {
  teamFilters,
  teamGroupMeta,
  teamGroupOrder,
  type TeamGroup,
  type TeamMember,
} from "@/data/team";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { cn } from "@/lib/cn";

export function TeamDirectory({ members }: { members: TeamMember[] }) {
  const [filter, setFilter] = useState<TeamGroup | "all">("all");
  const visibleGroups = teamGroupOrder.filter((group) => filter === "all" || filter === group);

  return (
    <div>
      <div role="toolbar" aria-label="Filter by role" className="flex flex-wrap gap-2">
        {teamFilters.map((item) => {
          const selected = filter === item.id;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(item.id)}
              className={cn(
                "h-10 px-4 text-sm font-semibold transition-colors",
                selected
                  ? "bg-navy text-paper"
                  : "text-ink ring-1 ring-inset ring-rule hover:ring-ink",
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {visibleGroups.map((group) => {
        const people = members.filter((member) => member.group === group);
        if (people.length === 0) return null;
        const meta = teamGroupMeta[group];

        return (
          <section
            key={group}
            id={group === "alumni" ? "alumni" : undefined}
            className="mt-16 scroll-mt-32"
            aria-labelledby={`group-${group}`}
          >
            <h2 id={`group-${group}`} className="font-serif text-3xl tracking-tight text-ink md:text-4xl">
              {meta.title}
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">{meta.description}</p>
            <ul
              className={cn(
                "mt-10 grid gap-x-8 gap-y-12",
                group === "executive" ? "sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-2 lg:grid-cols-4",
              )}
            >
              {people.map((member) => (
                <li key={member.id}>
                  <TeamMemberCard member={member} featured={group === "executive"} />
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
