"use client";

import { motion } from "framer-motion";
import { Package, Palette, Target, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pillars = [
  {
    icon: Package,
    title: "Your Products",
    description: "Layouts built around how your gifts and toys actually get browsed and bought.",
  },
  {
    icon: Palette,
    title: "Your Branding",
    description: "Colors, type, and tone that match the store you've spent years building.",
  },
  {
    icon: Users,
    title: "Your Customers",
    description: "Designed for the people who actually walk through your door or scroll your feed.",
  },
  {
    icon: Target,
    title: "Your Goals",
    description: "Whether that's footfall, WhatsApp orders, or online sales — built to convert.",
  },
];

export function WhyCustom() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.06]" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Custom"
          title="Don't settle for templates."
          light
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-center text-base leading-relaxed text-white/60 sm:text-lg"
        >
          Every business is different. Every customer is different. That&apos;s why
          every website we build is designed specifically for your products,
          branding, customers and business goals.
        </motion.p>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-accent/40 hover:bg-white/[0.07]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent transition-transform duration-300 group-hover:scale-110">
                <pillar.icon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-semibold text-white">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-white/55">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
