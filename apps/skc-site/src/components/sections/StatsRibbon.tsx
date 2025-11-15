'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { companyStats } from '@/data/homepage';
import { SkcStatsGrid } from '@/components/ui/skc-stats-grid';

export function StatsRibbon() {
  const { ref, isInView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section ref={ref} className="py-24 relative">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <SkcStatsGrid
            eyebrow="Corporation"
            title="Corporation"
            description="Key data points that define SKC as a global ESG innovator."
            stats={companyStats}
          />
        </motion.div>
      </div>
    </section>
  );
}
