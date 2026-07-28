"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { PointerEvent } from "react";
import { Gift, Search, ShoppingBag, Star } from "lucide-react";

export function BrowserMockup() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-60, 60], [10, -10]), { stiffness: 120, damping: 16 });
  const rotateY = useSpring(useTransform(x, [-60, 60], [-10, 10]), { stiffness: 120, damping: 16 });

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handlePointerLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div
      className="relative mx-auto w-full max-w-lg [perspective:1400px]"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="relative animate-float"
      >
        {/* glow */}
        <div className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-accent/20 blur-3xl" />

        {/* browser chrome */}
        <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-lifted">
          <div className="flex items-center gap-2 border-b border-ink/5 bg-mist px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <div className="ml-3 flex flex-1 items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[11px] text-ink/40">
              <Search className="h-3 w-3" />
              yourgiftshop.com
            </div>
          </div>

          {/* page content */}
          <div className="bg-white p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 font-display text-sm font-bold text-ink">
                <Gift className="h-4 w-4 text-accent" /> Wonder&nbsp;Gifts
              </div>
              <div className="hidden gap-3 text-[10px] text-ink/50 sm:flex">
                <span>Shop</span>
                <span>About</span>
                <span>Contact</span>
              </div>
              <ShoppingBag className="h-4 w-4 text-ink/60" />
            </div>

            <div className="mt-4 grid grid-cols-5 gap-3 rounded-xl bg-gradient-to-br from-accent-light to-mist p-4">
              <div className="col-span-3 flex flex-col justify-center gap-2">
                <p className="font-display text-sm font-bold leading-tight text-ink">
                  Gifts that feel personal.
                </p>
                <span className="w-fit rounded-full bg-accent px-3 py-1 text-[9px] font-semibold text-white">
                  Shop Collection
                </span>
              </div>
              <div className="col-span-2 flex items-center justify-center">
                <div className="h-16 w-16 rotate-6 rounded-xl bg-white shadow-soft" />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2.5">
              {[0, 1, 2].map((i) => (
                <div key={i} className="rounded-lg border border-ink/5 p-2">
                  <div className="aspect-square w-full rounded-md bg-mist" />
                  <div className="mt-1.5 h-1.5 w-4/5 rounded-full bg-ink/10" />
                  <div className="mt-1 flex items-center gap-0.5">
                    {[0, 1, 2].map((s) => (
                      <Star key={s} className="h-2 w-2 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* floating badge cards */}
        <motion.div
          className="absolute -left-10 top-10 hidden rounded-xl border border-ink/10 bg-white px-3 py-2 shadow-lifted sm:block"
          style={{ transform: "translateZ(60px)" }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <p className="text-[10px] font-semibold text-ink/70">New Order 🎁</p>
          <p className="font-display text-xs font-bold text-accent">+₹1,499</p>
        </motion.div>

        <motion.div
          className="absolute -right-8 bottom-10 hidden rounded-xl border border-ink/10 bg-white px-3 py-2 shadow-lifted sm:block"
          style={{ transform: "translateZ(80px)" }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <p className="text-[10px] font-semibold text-ink/70">Live on Mobile</p>
          <div className="mt-1 h-1.5 w-16 rounded-full bg-mist">
            <div className="h-1.5 w-3/4 rounded-full bg-accent" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
