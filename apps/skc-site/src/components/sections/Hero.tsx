'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { products, affiliates } from '@/data/homepage';

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
        <motion.h1
          className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8"
          variants={itemVariants}
        >
          Global <span className="text-gradient-skc font-medium">ESG</span> material
          <br />
          solutions company
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-12"
          variants={itemVariants}
        >
          Technology Transformation by SKC Changes the World
        </motion.p>

        {/* Product categories */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          variants={itemVariants}
        >
          {products.map((product) => (
            <motion.a
              key={product.title}
              href={product.href}
              className="glass-card px-8 py-6 group cursor-pointer"
              whileHover={{ scale: 1.05, borderColor: 'rgba(224, 5, 41, 0.4)' }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-4xl mb-3">{product.icon}</div>
              <div className="text-lg font-medium">{product.title}</div>
              <div className="text-sm text-text-secondary mt-1 group-hover:text-foreground transition-colors">
                Learn more →
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Affiliates */}
        <motion.div variants={itemVariants}>
          <div className="text-sm text-text-tertiary mb-4 uppercase tracking-wider">Our Companies</div>
          <div className="flex flex-wrap justify-center gap-6">
            {affiliates.map((affiliate) => (
              <motion.a
                key={affiliate.name}
                href={affiliate.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-primary transition-colors text-sm"
                whileHover={{ scale: 1.1 }}
              >
                {affiliate.name}
              </motion.a>
            ))}
          </div>
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
