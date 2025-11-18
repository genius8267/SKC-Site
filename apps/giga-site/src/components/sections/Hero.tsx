'use client';

import { motion } from "framer-motion";
import Link from "next/link";
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
=======
>>>>>>> db85ad47a1502018f5973120911d75786935b0d4

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={cardVariants}
<<<<<<< HEAD
        >
          <Card className="relative overflow-hidden border-border bg-white shadow-lg">
            <CardContent className="p-8 md:p-12">
              <motion.div
                variants={containerVariants}
                className="relative flex flex-col gap-10"
              >
                <motion.div
                  variants={itemVariants}
                  className="flex items-center justify-between"
                >
                  <img
                    src="/intune-labs-logo.png"
                    alt="Intune Labs"
                    className="h-16 w-auto md:h-20"
                  />
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap items-center gap-3"
                >
                  <Badge variant="secondary" className="text-foreground">
                    Enterprise AI Solutions
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    Trusted by global operators & enterprise leaders
                  </span>
                </motion.div>

                <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
                  <motion.div variants={itemVariants} className="space-y-8">
                    <div>
                      <h1 className="text-balance text-5xl font-semibold tracking-tight text-foreground md:text-6xl">
                        AI that talks like a human. Handles millions of calls.
                      </h1>
                      <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                        Ship enterprise-ready AI agents that manage complex
                        workflows, deploy faster than manual build-outs, and exceed
                        human benchmarks on empathy, accuracy, and compliance.
                      </p>
                    </div>
                    <motion.div
                      variants={itemVariants}
                      className="flex flex-wrap gap-4"
                    >
                      <Button asChild size="lg" className="uppercase tracking-wider">
                        <Link href="/contact">
                          Talk to us
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="lg" className="uppercase tracking-wider">
                        <Link href="#agent-canvas">
                          Explore Agent Canvas
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                  >
                    <Card className="stats-card p-6">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>Live agent health</span>
                        <span>Updated 2 min ago</span>
                      </div>
                      <div className="mt-8 space-y-6">
                        <div>
                          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                            Resolution accuracy
                          </p>
                          <p className="mt-3 text-5xl font-semibold text-foreground">
                            94.3%
                          </p>
                          <p className="text-sm text-emerald-600">+6.2% vs last week</p>
                        </div>
                        <div className="grid gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center justify-between">
                            <span>Voice calls handled</span>
                            <span className="font-semibold text-foreground">1.6M</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Escalations prevented</span>
                            <span className="font-semibold text-foreground">38,420</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Policy coverage</span>
                            <span className="font-semibold text-foreground">99.1%</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </div>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap items-center gap-6 border-t border-border pt-6 text-sm text-muted-foreground"
                >
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                    Production-grade security controls, SOC2 & GDPR ready
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-sky-500 animate-pulse" />
                    Handles 45+ languages with routing guardrails
                  </div>
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
=======
          className="glass-card relative overflow-hidden px-8 py-12"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
          <motion.div
            variants={containerVariants}
            className="relative flex flex-col gap-10"
          >
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3"
            >
              <span className="pill bg-white/10 text-white/90">
                Giga raises $61M Series A
              </span>
              <span className="text-sm text-white/60">
                Backed by global operators & enterprise leaders
              </span>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
              <motion.div variants={itemVariants} className="space-y-8">
                <div>
                  <h1 className="text-balance text-5xl font-semibold tracking-tight md:text-6xl">
                    AI that talks like a human. Handles millions of calls.
                  </h1>
                  <p className="mt-6 text-lg text-white/75 md:text-xl">
                    Ship enterprise-ready AI agents that manage complex
                    workflows, deploy faster than manual build-outs, and exceed
                    human benchmarks on empathy, accuracy, and compliance.
                  </p>
                </div>
                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap gap-4"
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition-transform hover:scale-105"
                  >
                    Talk to us
                  </Link>
                  <Link
                    href="#agent-canvas"
                    className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/80"
                  >
                    Explore Agent Canvas
                    <svg
                      className="ml-2 size-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M5 12h14M13 5l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span>Live agent health</span>
                  <span>Updated 2 min ago</span>
                </div>
                <div className="mt-8 space-y-6">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-white/50">
                      Resolution accuracy
                    </p>
                    <p className="mt-3 text-5xl font-semibold text-white">
                      94.3%
                    </p>
                    <p className="text-sm text-emerald-200">+6.2% vs last week</p>
                  </div>
                  <div className="grid gap-4 text-sm">
                    <div className="flex items-center justify-between">
                      <span>Voice calls handled</span>
                      <span className="font-semibold text-white">1.6M</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Escalations prevented</span>
                      <span className="font-semibold text-white">38,420</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Policy coverage</span>
                      <span className="font-semibold text-white">99.1%</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 border-t border-white/10 pt-6 text-sm text-white/60"
            >
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-300 animate-pulse" />
                Production-grade security controls, SOC2 & GDPR ready
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-sky-300 animate-pulse" />
                Handles 45+ languages with routing guardrails
              </div>
            </motion.div>
          </motion.div>
>>>>>>> db85ad47a1502018f5973120911d75786935b0d4
        </motion.div>
      </div>
    </section>
  );
}
