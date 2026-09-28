import type { TeamMember } from "@/data/team";
import { MediaFrame } from "@/components/MediaFrame";
import { cn } from "@/lib/cn";

export function TeamMemberCard({
  member,
  featured = false,
}: {
  member: TeamMember;
  featured?: boolean;
}) {
  return (
    <article className="group">
      <div className={cn("overflow-hidden", featured ? "aspect-[4/5]" : "aspect-[4/5]")}>
        <MediaFrame
          src={member.photo}
          alt={
            member.photo
              ? `Portrait of ${member.name}, ${member.position}.`
              : `Portrait placeholder for the ${member.position} role.`
          }
          label="Portrait to be added"
          variant="portrait"
          className="h-full motion-safe:transition-transform motion-safe:duration-700 group-hover:scale-[1.03]"
          sizes={featured ? "(min-width: 1024px) 30vw, 50vw" : "(min-width: 1024px) 22vw, 50vw"}
        />
      </div>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-cobalt">
        {member.position}
      </p>
      <h3
        className={cn(
          "mt-1 font-serif text-2xl tracking-tight",
          member.placeholder ? "text-muted italic" : "text-ink",
        )}
      >
        {member.name}
      </h3>
      {member.group === "alumni" ? (
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {[member.currentRole, member.currentOrganization].filter(Boolean).join(" · ")}
        </p>
      ) : (
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {member.school}
          <span aria-hidden> · </span>
          {member.major}
        </p>
      )}
      <p className="text-sm text-muted">{member.classYear}</p>
      {member.linkedin ? (
        <a
          href={member.linkedin}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-navy underline-offset-4 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
          <span className="sr-only"> profile for {member.name}</span>
        </a>
      ) : null}
    </article>
  );
}
