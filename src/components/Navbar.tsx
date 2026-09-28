"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { navItems } from "@/data/site";
import { Wordmark } from "@/components/Wordmark";
import { cn } from "@/lib/cn";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openPath, setOpenPath] = useState(pathname);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();

  if (pathname !== openPath) {
    setOpenPath(pathname);
    setOpen(false);
  }

  const onHome = pathname === "/";
  const overlay = onHome && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
          overlay ? "bg-transparent" : "border-b border-black/10 bg-white",
        )}
      >
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-4 px-5 lg:h-28 lg:px-8">
          <Link href="/" className="shrink-0" aria-label="180 Degrees Consulting at Penn, home">
            <Wordmark inverse={overlay} />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {navItems.map((item) => {
              const current = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className={cn(
                    "text-[0.72rem] font-medium uppercase tracking-[0.16em] hover:opacity-70",
                    overlay ? "text-white" : "text-ink",
                    current && "underline decoration-brand decoration-2 underline-offset-8",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/join#apply"
              className={cn(
                "inline-flex h-9 items-center rounded-full px-4 text-[0.72rem] font-medium uppercase tracking-[0.14em] transition-colors",
                overlay
                  ? "border border-white/70 text-white hover:bg-white hover:text-ink"
                  : "text-ink ring-1 ring-inset ring-ink/20 hover:ring-ink",
              )}
            >
              Apply
            </Link>
            <Link
              href="/contact"
              className={cn(
                "inline-flex h-9 items-center rounded-full px-4 text-[0.72rem] font-medium uppercase tracking-[0.14em] transition-colors",
                overlay
                  ? "bg-white text-ink hover:bg-white/90"
                  : "bg-brand text-white hover:bg-[#5d8a14]",
              )}
            >
              Request Services
            </Link>
          </nav>

          <button
            type="button"
            className={cn(
              "inline-flex size-11 items-center justify-center lg:hidden",
              overlay ? "text-white" : "text-ink",
            )}
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>

        {open ? (
          <nav id={menuId} aria-label="Mobile" className="border-t border-black/10 bg-white px-6 py-4 lg:hidden">
            <ul className="flex flex-col">
              {navItems.map((item) => {
                const current = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={current ? "page" : undefined}
                      className={cn(
                        "block border-b border-rule py-4 text-sm font-medium uppercase tracking-[0.16em] text-ink",
                        current && "text-brand",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li className="flex flex-col items-start gap-3 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center rounded-full bg-brand px-5 text-sm font-medium uppercase tracking-[0.14em] text-white"
                >
                  Request Services
                </Link>
                <Link
                  href="/join#apply"
                  className="inline-flex h-11 items-center rounded-full px-5 text-sm font-medium uppercase tracking-[0.14em] text-ink ring-1 ring-inset ring-ink/20"
                >
                  Apply
                </Link>
              </li>
            </ul>
          </nav>
        ) : null}
      </header>
      {onHome ? null : <div className="h-24 lg:h-28" aria-hidden />}
    </>
  );
}
