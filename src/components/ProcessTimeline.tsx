import type { ProcessStep } from "@/data/process";

export function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute top-3 right-0 left-0 hidden h-px bg-rule lg:block"
        aria-hidden
      />
      <ol className="grid gap-10 lg:grid-cols-5 lg:gap-6">
        {steps.map((step) => (
          <li key={step.title} className="relative border-l border-rule pl-6 lg:border-l-0 lg:pl-0">
            <p className="relative z-10 inline-block bg-paper pr-3 font-serif text-lg text-navy lg:bg-paper">
              {step.label}
            </p>
            <h3 className="mt-3 font-serif text-2xl tracking-tight text-ink">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
