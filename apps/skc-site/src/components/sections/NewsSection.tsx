'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { latestNews } from '@/data/homepage';

const categoryColors = {
  battery: 'rgba(0, 153, 255, 0.2)',
  semiconductor: 'rgba(224, 5, 41, 0.2)',
  'eco-friendly': 'rgba(102, 255, 228, 0.2)',
  esg: 'rgba(230, 117, 37, 0.2)',
};

export function NewsSection() {
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
            <span className="text-gradient-skc">C</span>ommunication
          </h2>
          <p className="text-xl text-text-secondary">Latest updates from SKC</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestNews.map((article, i) => (
            <motion.a
              key={article.id}
              href={`/communication/news/${article.id}`}
              className="glass-card p-6 group cursor-pointer block"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.15,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -8,
                borderColor: 'rgba(224, 5, 41, 0.3)',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="pill text-xs px-3 py-1"
                  style={{ backgroundColor: categoryColors[article.category] }}
                >
                  {article.category}
                </span>
                <span className="text-xs text-text-tertiary">{article.date}</span>
              </div>
              <h3 className="text-lg font-medium mb-2 group-hover:text-skc-red transition-colors line-clamp-2">
                {article.title}
              </h3>
              <div className="flex items-center text-accent-primary text-sm group-hover:gap-2 gap-1 transition-all mt-4">
                <span>Read more</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.a
            href="/communication/newsroom"
            className="glass-card inline-block px-8 py-4 text-accent-primary hover:text-foreground hover:border-skc-red/40 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View all news →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
