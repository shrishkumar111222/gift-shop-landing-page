"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BrowserMockup } from "@/components/ui/BrowserMockup";
import { trustBadges } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-light px-4 py-1.5 text-xs font-semibold text-accent"
          >
            For Gift &amp; Toy Shop Owners
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Choose the Perfect Website Design for Your Gift Shop
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 flex max-w-xl flex-col gap-3 text-ink/60"
          >
            <p className="text-lg font-medium text-ink/80 sm:text-xl">
              Your customers decide whether to trust your business in seconds.
            </p>
            <p className="text-base leading-relaxed sm:text-lg">
              Explore three professional website concepts below. Choose the style
              you like, and we&apos;ll build a fully customized website tailored to
              your Gift Shop or Toy Store.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 lg:justify-start"
          >
            {trustBadges.map((badge) => (
              <span key={badge} className="flex items-center gap-1.5 text-sm font-medium text-ink/70">
                <Check className="h-4 w-4 flex-none text-accent" strokeWidth={3} />
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.46 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="#lead-form" variant="primary">
              Request Free Demo
            </Button>
            <Button href="#concepts" variant="secondary">
              View Demo Websites
            </Button>
          </motion.div>
        </div>

        <div className="relative">
          <BrowserMockup />
        </div>
      </div>
    </section>
  );
}
