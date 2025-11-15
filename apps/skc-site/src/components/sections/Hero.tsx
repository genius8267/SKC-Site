'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { products, affiliates } from '@/data/homepage';
import { SkcHeroPanel } from '@/components/ui/skc-hero-panel';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function Hero() {
  const { ref, isInView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden">
      {/* Animated gradient blobs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-skc-red/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="section-shell relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants}>
          <SkcHeroPanel
            eyebrow="Global ESG material solutions company"
            title="Global ESG material solutions company"
            subtitle="Technology Transformation by SKC Changes the World"
            highlight="ESG"
            categories={products}
            partners={affiliates}
          />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          variants={itemVariants}
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="text-text-tertiary text-xs uppercase tracking-wider mb-2">Scroll Down</div>
          <div className="text-2xl">↓</div>
        </motion.div>
      </motion.div>
    </section>
  );
}
