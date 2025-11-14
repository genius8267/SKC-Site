'use client';

import { motion } from "framer-motion";
import { canvasSteps } from "@/data/sections";
import { SectionHeading } from "@/components/primitives/section-heading";
import { DocumentDropzone } from "./DocumentDropzone";
import { useInView } from "@/hooks/useInView";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function AgentCanvasSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section className="py-24" id="agent-canvas">
      <div className="section-shell space-y-12">
        <SectionHeading
          eyebrow="Agent Canvas"
          title="The fastest way to build, govern, and scale enterprise AI agents."
          description="Ground agents in your brand standards, compliance rules, and workflows so every interaction is consistent and on-policy."
        />
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="glass-card p-6">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/40">
              <span>Workflow</span>
              <span>Insights 1 of 28</span>
            </div>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={containerVariants}
              className="mt-6 grid gap-4"
            >
              {canvasSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={itemVariants}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors hover:bg-white/[0.06] hover:border-white/20"
                >
                  <div className="pill flex h-10 w-10 items-center justify-center bg-white/10 text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/40">
                      <span>{step.helper}</span>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                    <p className="mt-1 text-sm text-white/70">{step.summary}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="space-y-6">
            <DocumentDropzone />
            <div className="glass-card p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">
                Built-in Copilot
              </p>
              <p className="mt-3 text-2xl font-semibold">
                AI helps you build your ideal support agent.
              </p>
              <p className="mt-3 text-sm text-white/70">
                Choose an agent type and upload documents so Giga understands
                your brand, policies, and workflows.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <button className="rounded-full border border-white/20 px-4 py-2 text-white/80 hover:border-white/60">
                  Chat
                </button>
                <button className="rounded-full border border-white/20 px-4 py-2 text-white/80 hover:border-white/60">
                  Voice
                </button>
                <button className="rounded-full border border-white/20 px-4 py-2 text-white/80 hover:border-white/60">
                  Multi-modal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
