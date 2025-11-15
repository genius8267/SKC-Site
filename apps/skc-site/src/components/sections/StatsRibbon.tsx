'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { companyStats } from '@/data/homepage';

export function StatsRibbon() {
  const { ref, isInView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section ref={ref} className="py-24 relative">
      <div className="section-shell">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="glass-card p-8 text-center group cursor-default"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.1,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -8,
                borderColor: 'rgba(224, 5, 41, 0.3)',
                boxShadow: '0 20px 60px rgba(224, 5, 41, 0.2)',
              }}
            >
              <div className="text-sm text-text-secondary uppercase tracking-wider mb-3">
                {stat.label}
              </div>
              <motion.div
                className="text-4xl md:text-5xl font-light mb-2"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{
                  delay: i * 0.1 + 0.3,
                  duration: 1,
                  type: 'spring',
                  stiffness: 100,
                }}
              >
                {stat.value}
              </motion.div>
              {stat.note && (
                <div className="text-xs text-text-tertiary">{stat.note}</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
