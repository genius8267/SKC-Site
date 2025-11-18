'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { latestNews } from '@/data/homepage';
import { SkcNewsList } from '@/components/ui/skc-news-list';

export function NewsSection() {
  const { ref, isInView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="py-24 relative">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <SkcNewsList
            eyebrow="Communication"
            title="Communication"
            description="Latest updates from SKC"
            articles={latestNews}
            ctaHref="/communication/newsroom"
          />
        </motion.div>
      </div>
    </section>
  );
}
