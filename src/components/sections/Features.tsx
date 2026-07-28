"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  MessageCircle,
  MapPin,
  ClipboardList,
  GalleryHorizontalEnd,
  Quote,
  Search,
  Zap,
  Sparkles,
  Share2,
  LayoutDashboard,
  Server,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const featureList: { title: string; icon: LucideIcon }[] = [
  { title: "Responsive Design", icon: Smartphone },
  { title: "WhatsApp Chat", icon: MessageCircle },
  { title: "Google Maps", icon: MapPin },
  { title: "Inquiry Form", icon: ClipboardList },
  { title: "Product Gallery", icon: GalleryHorizontalEnd },
  { title: "Testimonials", icon: Quote },
  { title: "SEO", icon: Search },
  { title: "Fast Loading", icon: Zap },
  { title: "Animations", icon: Sparkles },
  { title: "Social Media", icon: Share2 },
  { title: "Admin Dashboard Ready", icon: LayoutDashboard },
  { title: "Hosting Support", icon: Server },
];

export function Features() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Features"
          title="Everything your website needs"
          subtitle="Every feature your gift or toy shop needs to turn visitors into customers, built in from day one."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {featureList.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, borderColor: "rgba(37,99,235,0.4)" }}
              className="flex flex-col items-start gap-3 rounded-2xl border border-ink/10 bg-white p-5 shadow-soft transition-shadow duration-300 hover:shadow-lifted sm:p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-light text-accent">
                <feature.icon className="h-5 w-5" />
              </span>
              <p className="font-display text-sm font-semibold leading-snug text-ink sm:text-base">
                {feature.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
