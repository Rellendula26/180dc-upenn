import Link from "next/link";
import type { Project } from "@/data/projects";
import { MediaFrame } from "@/components/MediaFrame";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article>
      <Link href={`/work#${project.id}`} className="group block">
        <MediaFrame
          src={project.image}
          alt={
            project.image
              ? `Photograph related to the ${project.client} engagement.`
              : `Placeholder image for a ${project.sector.toLowerCase()} project.`
          }
          label="Project image to be added"
          variant="project"
          className="aspect-[5/4] motion-safe:transition-transform motion-safe:duration-700 group-hover:scale-[1.02]"
          sizes="(min-width: 1024px) 30vw, 100vw"
        />
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-cobalt">
          {project.sector}
          <span className="text-muted"> · Illustrative placeholder</span>
        </p>
        <h3 className="mt-2 font-serif text-2xl tracking-tight text-ink group-hover:underline group-hover:decoration-penn group-hover:underline-offset-4">
          {project.client}
        </h3>
        <p className="mt-2 text-sm font-medium text-navy">{project.workType}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.challenge}</p>
        <p className="mt-4 text-sm leading-relaxed text-ink">
          <span className="font-semibold">Outcome. </span>
          {project.outcome}
        </p>
      </Link>
    </article>
  );
}
