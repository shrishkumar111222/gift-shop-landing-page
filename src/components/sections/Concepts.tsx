"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { concepts } from "@/lib/constants";

export function Concepts() {
  return (
    <section id="concepts" className="relative bg-mist py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Concepts"
          title="Explore Website Concepts"
          subtitle="These are sample website concepts. Your final website will be designed specifically for your business."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {concepts.map((concept, index) => (
            <motion.div
              key={concept.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-soft transition-shadow duration-500 hover:shadow-lifted"
            >
              <div className={`relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br ${concept.accent}`}>
                <Image
                  src={concept.image}
                  alt={`${concept.name} website concept preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/5 to-transparent" />
                <div className="absolute inset-x-5 bottom-5 flex items-center justify-between">
                  <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                    Concept {index + 1}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-white/90 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-5 p-7">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink">{concept.name}</h3>
                  <p className="mt-1.5 text-sm text-ink/55">{concept.tagline}</p>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-ink/40">
                    Perfect for
                  </span>
                  <ul className="flex flex-col gap-1.5">
                    {concept.perfectFor.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-ink/70">
                        <Check className="h-3.5 w-3.5 flex-none text-accent" strokeWidth={3} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={concept.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent hover:shadow-accent"
                >
                  View Live Demo
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
