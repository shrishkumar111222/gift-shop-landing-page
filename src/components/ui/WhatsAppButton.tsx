"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { WHATSAPP_LINK } from "@/lib/constants";

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [pulseKey, setPulseKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setPulseKey((k) => k + 1), 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lifted"
      aria-label="Chat on WhatsApp"
    >
      <motion.span
        key={pulseKey}
        className="absolute inset-0 rounded-full bg-[#25D366]"
        initial={{ opacity: 0.6, scale: 1 }}
        animate={{ opacity: 0, scale: 1.9 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      />
      <motion.div whileHover={{ scale: 1.1, rotate: -6 }} whileTap={{ scale: 0.92 }}>
        <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white">
          <path d="M16.004 3C9.373 3 4 8.373 4 15.004c0 2.65.86 5.1 2.316 7.09L4.8 27.2l5.24-1.47a11.94 11.94 0 0 0 5.964 1.6h.004c6.63 0 12.003-5.373 12.003-12.004C28.01 8.373 22.634 3 16.004 3Zm7.06 17.1c-.297.837-1.47 1.564-2.407 1.766-.64.137-1.475.246-4.29-.92-3.6-1.5-5.92-5.146-6.1-5.386-.176-.24-1.46-1.94-1.46-3.7 0-1.76.92-2.626 1.245-2.986.326-.36.71-.45.947-.45.238 0 .476.002.683.013.22.01.514-.084.804.612.297.71 1.01 2.457 1.096 2.636.088.18.147.39.03.63-.117.24-.176.39-.35.6-.176.21-.37.47-.53.63-.176.176-.36.367-.155.72.207.35.918 1.514 1.972 2.452 1.354 1.207 2.497 1.583 2.85 1.76.353.176.56.147.766-.09.207-.235.883-1.03 1.12-1.383.234-.353.47-.294.79-.176.323.117 2.05.966 2.402 1.142.353.176.588.264.674.412.088.148.088.856-.208 1.693Z" />
        </svg>
      </motion.div>
      {showTooltip && (
        <motion.span
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          className="absolute right-full mr-3 whitespace-nowrap rounded-full bg-ink px-3.5 py-2 text-xs font-medium text-white shadow-soft"
        >
          Chat on WhatsApp
        </motion.span>
      )}
    </motion.a>
  );
}
