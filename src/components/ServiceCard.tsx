import { ChartColumn, Compass, Megaphone, Workflow, type LucideIcon } from "lucide-react";
import type { Service, ServiceIcon } from "@/data/services";

const icons: Record<ServiceIcon, LucideIcon> = {
  compass: Compass,
  workflow: Workflow,
  megaphone: Megaphone,
  chart: ChartColumn,
};

export function ServiceCard({
  service,
  detailed = false,
}: {
  service: Service;
  detailed?: boolean;
}) {
  const Icon = icons[service.icon];
  const items = detailed ? service.details : service.offerings;

  return (
    <article className="border-t border-rule pt-6">
      <Icon className="size-5 text-navy" aria-hidden />
      <h3 className="mt-5 font-serif text-2xl tracking-tight text-ink">{service.title}</h3>
      {detailed ? (
        <p className="mt-3 text-base leading-relaxed text-muted">{service.summary}</p>
      ) : null}
      <ul className="mt-4 space-y-2 text-[0.95rem] leading-relaxed text-muted">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
