import { site } from "@/data/site";
import { ButtonLink, type ButtonVariant } from "@/components/ButtonLink";
import { cn } from "@/lib/cn";

const disabledStyles: Record<ButtonVariant, string> = {
  primary: "bg-navy text-paper",
  secondary: "text-ink ring-1 ring-inset ring-ink/25",
  inverse: "bg-paper text-navy",
  ghost: "text-paper ring-1 ring-inset ring-paper/45",
};

export function ApplyAction({
  variant = "primary",
  className,
}: {
  variant?: ButtonVariant;
  className?: string;
}) {
  if (!site.applicationUrl) {
    return (
      <button
        type="button"
        disabled
        className={cn(
          "inline-flex h-11 cursor-not-allowed items-center justify-center rounded-full px-6 text-sm font-medium tracking-wide opacity-80",
          disabledStyles[variant],
          className,
        )}
      >
        Applications Coming Soon
      </button>
    );
  }

  return (
    <ButtonLink href={site.applicationUrl} variant={variant} className={className}>
      Apply to 180DC Penn
    </ButtonLink>
  );
}
