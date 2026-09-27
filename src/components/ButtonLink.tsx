import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  primary: "bg-navy text-paper hover:bg-navy-soft",
  secondary:
    "bg-transparent text-ink ring-1 ring-inset ring-ink/25 hover:ring-ink",
  inverse: "bg-paper text-navy hover:bg-white",
  ghost:
    "bg-transparent text-paper ring-1 ring-inset ring-paper/45 hover:bg-paper/10",
} as const;

export type ButtonVariant = keyof typeof variants;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  const classes = cn(
    "inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium tracking-wide transition-colors",
    variants[variant],
    className,
  );

  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
