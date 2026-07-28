"use client";

import { motion } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Ripple = { id: number; x: number; y: number };

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  target?: string;
  rel?: string;
  fullWidth?: boolean;
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  type = "button",
  target,
  rel,
  fullWidth,
}: ButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  function fireRipple(e: MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples((r) => [...r, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    setTimeout(() => setRipples((r) => r.filter((ripple) => ripple.id !== id)), 650);
    onClick?.();
  }

  const base = cn(
    "relative isolate overflow-hidden inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold font-display tracking-tight transition-all duration-300 select-none",
    fullWidth && "w-full",
    variant === "primary" &&
      "bg-ink text-white shadow-soft hover:bg-accent hover:shadow-accent hover:-translate-y-0.5 active:translate-y-0",
    variant === "secondary" &&
      "bg-white text-ink border border-ink/10 hover:border-accent/40 hover:text-accent hover:-translate-y-0.5 active:translate-y-0",
    className
  );

  const rippleNodes = ripples.map((r) => (
    <span
      key={r.id}
      className="pointer-events-none absolute rounded-full bg-white/40 mix-blend-overlay"
      style={{
        left: r.x,
        top: r.y,
        width: 10,
        height: 10,
        transform: "translate(-50%, -50%)",
        animation: "ripple-expand 650ms ease-out forwards",
      }}
    />
  ));

  const content = (
    <>
      {children}
      {rippleNodes}
      <style jsx>{`
        @keyframes ripple-expand {
          from {
            opacity: 0.55;
            width: 10px;
            height: 10px;
          }
          to {
            opacity: 0;
            width: 340px;
            height: 340px;
          }
        }
      `}</style>
    </>
  );

  const motionProps = {
    whileTap: { scale: 0.97 },
  };

  if (href) {
    return (
      <motion.a href={href} target={target} rel={rel} onClick={fireRipple} className={base} {...motionProps}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} onClick={fireRipple} className={base} {...motionProps}>
      {content}
    </motion.button>
  );
}
