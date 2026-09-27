"use client";

import { Plus } from "lucide-react";
import { useId, useState } from "react";
import type { Faq } from "@/data/faqs";
import { cn } from "@/lib/cn";

export function FAQAccordion({ faqs }: { faqs: Faq[] }) {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <div className="border-t border-rule">
      {faqs.map((faq) => {
        const open = openId === faq.id;
        const panelId = `${baseId}-${faq.id}`;
        const buttonId = `${panelId}-button`;

        return (
          <div key={faq.id} className="border-b border-rule">
            <h3>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? null : faq.id)}
              >
                <span className="font-serif text-xl tracking-tight text-ink md:text-2xl">
                  {faq.question}
                </span>
                <Plus
                  className={cn(
                    "size-5 shrink-0 text-navy motion-safe:transition-transform motion-safe:duration-200",
                    open && "rotate-45",
                  )}
                  aria-hidden
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid motion-safe:transition-[grid-template-rows] motion-safe:duration-300",
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl pb-6 text-base leading-relaxed text-muted">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
