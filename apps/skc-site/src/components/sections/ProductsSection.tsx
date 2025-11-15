'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { products } from '@/data/homepage';
import { SkcProductShowcase } from '@/components/ui/skc-product-showcase';

export function ProductsSection() {
  const { ref, isInView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="py-24 relative">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <SkcProductShowcase
            title="Creation"
            eyebrow="Creation"
            description="SKC's technologies enhance the value of life with new changes."
            products={products}
          />
        </motion.div>
      </div>
    </section>
  );
}
