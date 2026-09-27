import Image from "next/image";
import { cn } from "@/lib/cn";

export function Wordmark({
  inverse = false,
  className,
}: {
  inverse?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={inverse ? "/brand/logo-white.png" : "/brand/logo.png"}
      alt="180 Degrees"
      width={284}
      height={287}
      className={cn("h-20 w-auto lg:h-24", className)}
    />
  );
}
