"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const included = [
  "Fully custom design for your shop",
  "Mobile, tablet & desktop responsive",
  "WhatsApp order integration",
  "Product gallery & inquiry form",
  "SEO setup & fast loading",
  "Hosting support included",
];

export function Pricing() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <SectionHeading eyebrow="Pricing" title="Simple, honest pricing" />

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-14 overflow-hidden rounded-[2rem] border border-ink/10 bg-white p-8 shadow-lifted sm:p-12"
        >
          <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

          <div className="relative flex flex-col items-center gap-8 text-center lg:flex-row lg:items-start lg:justify-between lg:text-left">
            <div>
              <span className="inline-flex rounded-full bg-accent-light px-4 py-1.5 text-xs font-semibold text-accent">
                Starting From
              </span>
              <div className="mt-4 flex items-end justify-center gap-1 lg:justify-start">
                <span className="font-display text-5xl font-bold text-ink sm:text-6xl">₹9,999</span>
                <span className="mb-1.5 text-ink/50">one-time</span>
              </div>
              <p className="mt-3 max-w-sm text-sm text-ink/55 sm:text-base">
                Final pricing depends on your chosen concept, pages, and features —
                shared upfront with no surprises.
              </p>

              <div className="mt-8">
                <Button href="#lead-form" variant="primary">
                  Request Free Demo
                </Button>
              </div>
            </div>

            <ul className="flex w-full max-w-sm flex-col gap-3 rounded-2xl bg-mist p-6 text-left">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink/75">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-accent" strokeWidth={3} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
