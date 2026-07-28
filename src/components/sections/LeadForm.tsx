"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { businessTypes } from "@/lib/constants";
import { saveLead } from "@/lib/firebase";

const fieldClass =
  "w-full rounded-xl border border-ink/10 bg-white/80 px-4 py-3.5 text-sm text-ink placeholder:text-ink/35 outline-none transition-all duration-200 focus:border-accent focus:ring-4 focus:ring-accent/10";

const labelClass = "text-xs font-semibold uppercase tracking-wider text-ink/45";

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    try {
      const saved = await saveLead(data);
      if (!saved) {
        console.warn("Firebase not configured — lead not saved:", data);
      }
      setSubmitted(true);
    } catch (err) {
      console.error("Lead submission failed:", err);
      setError(
        "Could not send your request. Please try again or message us on WhatsApp."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="lead-form" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent-light/60 via-white to-white" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/10 blur-[130px]" />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get Started"
          title="Request Your Free Demo"
          subtitle="Tell us about your shop and we'll get back to you with a tailored demo within 24 hours."
        />

        <div className="relative mt-14 overflow-hidden rounded-[2rem] shadow-lifted">
          <div className="glass-card relative rounded-[2rem] p-6 sm:p-10">
            {/*
              No `mode="wait"`: it holds the incoming child back until the
              outgoing one finishes exiting, and a stalled exit animation
              leaves the panel frozen on the submitted form forever.
            */}
            <AnimatePresence>
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center gap-4 py-16 text-center"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-accent/10 text-accent"
                  >
                    <CheckCircle2 className="h-10 w-10" />
                  </motion.div>
                  <h3 className="font-display text-2xl font-bold text-ink">Request received!</h3>
                  <p className="max-w-sm text-sm text-ink/60 sm:text-base">
                    Thank you. Our team will reach out on WhatsApp or phone within
                    24 hours with your free demo.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-sm font-semibold text-accent hover:underline"
                  >
                    Submit another request
                  </button>
                </motion.div>
              ) : (
                <form
                  key="form"
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 gap-5 sm:grid-cols-2"
                >
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Business Name</label>
                    <input required name="businessName" className={fieldClass} placeholder="Your business name" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Owner Name</label>
                    <input required name="ownerName" className={fieldClass} placeholder="Your name" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Phone Number</label>
                    <input required type="tel" name="phone" className={fieldClass} placeholder="+91 00000 00000" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>WhatsApp Number</label>
                    <input type="tel" name="whatsapp" className={fieldClass} placeholder="+91 00000 00000" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Email</label>
                    <input required type="email" name="email" className={fieldClass} placeholder="you@example.com" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Business Type</label>
                    <select required name="businessType" defaultValue="" className={fieldClass}>
                      <option value="" disabled>
                        Select type
                      </option>
                      {businessTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>City</label>
                    <input required name="city" className={fieldClass} placeholder="Your city" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Current Website</label>
                    <input name="currentWebsite" className={fieldClass} placeholder="If you have one" />
                  </div>
                  <div className="flex flex-col gap-2 sm:col-span-2">
                    <label className={labelClass}>Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      className={`${fieldClass} resize-none`}
                      placeholder="Tell us about your shop and what you're looking for..."
                    />
                  </div>
                  <div className="sm:col-span-2">
                    {error && (
                      <p className="mb-3 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                        {error}
                      </p>
                    )}
                    <Button type="submit" variant="primary" fullWidth className="py-4 text-base">
                      {submitting ? "Sending..." : "Request Free Demo"}
                    </Button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
