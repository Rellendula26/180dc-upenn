import type { RecruitingEvent } from "@/data/recruiting";

export function RecruitingTimeline({ events }: { events: RecruitingEvent[] }) {
  return (
    <ol className="border-t border-rule">
      {events.map((event, index) => (
        <li
          key={event.id}
          className="grid gap-2 border-b border-rule py-6 md:grid-cols-12 md:items-baseline md:gap-6"
        >
          <span className="font-serif text-lg text-cobalt md:col-span-1">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-serif text-2xl tracking-tight text-ink md:col-span-4">
            {event.title}
          </h3>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-navy md:col-span-3">
            {event.date ?? "Coming Soon"}
          </p>
          <p className="text-sm leading-relaxed text-muted md:col-span-4">{event.description}</p>
        </li>
      ))}
    </ol>
  );
}
