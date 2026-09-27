import Link from "next/link";

export function TextLink({
  href,
  children,
  inverse = false,
}: {
  href: string;
  children: React.ReactNode;
  inverse?: boolean;
}) {
  const className = inverse
    ? "text-sm font-semibold text-paper underline decoration-paper/40 underline-offset-4 hover:decoration-paper"
    : "text-sm font-semibold text-navy underline decoration-penn/30 underline-offset-4 hover:decoration-penn";

  if (href.startsWith("http")) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
