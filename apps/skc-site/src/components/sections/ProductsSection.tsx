'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { products } from '@/data/homepage';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function ProductsSection() {
  const { ref, isInView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="py-24 relative">
      <div className="section-shell">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-light mb-4">
            <span className="text-gradient-skc">C</span>reation
          </h2>
          <p className="text-xl text-text-secondary">
            SKC's technologies enhance the value of life with new changes
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {products.map((product) => (
            <motion.a
              key={product.title}
              href={product.href}
              className="glass-card p-8 group cursor-pointer block"
              variants={cardVariants}
              whileHover={{
                y: -12,
                borderColor: 'rgba(224, 5, 41, 0.4)',
                boxShadow: '0 25px 80px rgba(224, 5, 41, 0.15)',
              }}
            >
              <motion.div
                className="text-6xl mb-6"
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.3 }}
              >
                {product.icon}
              </motion.div>
              <h3 className="text-2xl font-medium mb-4 group-hover:text-skc-red transition-colors">
                {product.title}
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                {product.description}
              </p>
              <div className="flex items-center text-accent-primary group-hover:gap-3 gap-2 transition-all">
                <span className="text-sm font-medium">Explore</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
