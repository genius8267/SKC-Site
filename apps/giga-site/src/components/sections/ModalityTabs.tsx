'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { modalities, type Modality } from "@/data/sections";

const contentVariants = {
  initial: { opacity: 0, x: 20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    }
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: {
      duration: 0.3,
    }
  },
};

export function ModalityTabs() {
  const [active, setActive] = useState<Modality["id"]>("chat");
  const current = modalities.find((mod) => mod.id === active) ?? modalities[0];

  return (
    <section className="py-24">
      <div className="section-shell glass-card grid gap-8 px-6 py-10 lg:grid-cols-[0.5fr_1fr]">
        <div className="space-y-4">
          <p className="pill bg-white/5 text-white/70">Modalities</p>
          <h3 className="text-3xl font-semibold">
            Choose an agent type and upload documents so your agent understands
            your brand, policies, and workflows.
          </h3>
          <div className="flex flex-col gap-3">
            {modalities.map((modality) => (
              <button
                key={modality.id}
                className={`flex items-center justify-between rounded-full border px-5 py-3 text-sm transition-all duration-300 ${
                  modality.id === active
                    ? "border-white/80 bg-white text-black shadow-lg"
                    : "border-white/15 text-white/60 hover:border-white/60 hover:bg-white/5"
                }`}
                onClick={() => setActive(modality.id)}
                type="button"
              >
                <span className="font-semibold uppercase tracking-[0.2em]">
                  {modality.label}
                </span>
                <span className={modality.id === active ? "opacity-100" : "opacity-70"}>
                  {modality.latency}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                {current.label}
              </p>
              <h4 className="mt-3 text-2xl font-semibold">{current.headline}</h4>
              <p className="mt-3 text-sm text-white/70">{current.description}</p>
              <ul className="mt-6 grid gap-3 text-sm text-white/80">
                {current.highlights.map((highlight, index) => (
                  <motion.li
                    key={highlight}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        delay: 0.1 + index * 0.1,
                        duration: 0.4,
                      }
                    }}
                    className="flex items-start gap-2"
                  >
                    <span className="mt-1 size-1.5 rounded-full bg-emerald-300" />
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
