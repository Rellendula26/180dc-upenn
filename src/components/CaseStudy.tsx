import type { Project } from "@/data/projects";
import { MediaFrame } from "@/components/MediaFrame";

export function CaseStudy({ project }: { project: Project }) {
  const fields = [
    ["Challenge", project.challenge],
    ["Approach", project.approach],
    ["Recommendation", project.recommendation],
    ["Impact", project.impact],
  ] as const;

  return (
    <article id={project.id} className="scroll-mt-28 grid items-start gap-8 border-t border-rule py-14 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-5">
        <MediaFrame
          src={project.image}
          alt={
            project.image
              ? `Photograph related to the ${project.client} engagement.`
              : `Placeholder image for a ${project.sector.toLowerCase()} case study.`
          }
          label="Client image to be added"
          variant="project"
          className="aspect-[4/3]"
          sizes="(min-width: 1024px) 40vw, 100vw"
        />
      </div>
      <div className="lg:col-span-7">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cobalt">
          {project.sector}
          <span className="text-muted"> · {project.workType}</span>
        </p>
        <h3 className="mt-3 font-serif text-3xl tracking-tight text-ink md:text-4xl">
          {project.client}
        </h3>
        <p className="mt-3 text-sm font-medium uppercase tracking-[0.14em] text-muted">
          Illustrative placeholder — not a published Penn client
        </p>
        <dl className="mt-8 grid gap-6">
          {fields.map(([term, detail]) => (
            <div key={term}>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-navy">
                {term}
              </dt>
              <dd className="mt-2 max-w-xl text-base leading-relaxed text-ink">{detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
