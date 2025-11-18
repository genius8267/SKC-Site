import { useTranslations } from 'next-intl';
import type { BenefitItem } from '@/data/career';

interface BenefitsGridProps {
  namespace: string;
  benefits: BenefitItem[];
}

export function BenefitsGrid({ namespace, benefits }: BenefitsGridProps) {
  const t = useTranslations(namespace);

  return (
    <section className="section-shell">
      <div className="max-w-3xl mb-10">
        <p className="text-xs uppercase tracking-[0.4em] text-text-tertiary mb-3">
          {t('eyebrow')}
        </p>
        <h2 className="text-3xl font-light text-white mb-3">{t('title')}</h2>
        <p className="text-base text-text-secondary">{t('description')}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {benefits.map((benefit) => (
          <div key={benefit.id} className="glass-card p-5 space-y-2">
            <div className="text-3xl" aria-hidden>
              {benefit.icon}
            </div>
            <p className="text-lg font-medium">
              {t(`items.${benefit.id}.title`)}
            </p>
            <p className="text-sm text-text-secondary">
              {t(`items.${benefit.id}.description`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
