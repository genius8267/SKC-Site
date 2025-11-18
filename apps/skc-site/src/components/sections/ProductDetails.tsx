import { useTranslations } from 'next-intl';
import type { ProductMetric, ProductTechnology } from '@/data/creation';

interface ProductDetailsProps {
  namespace: string;
  metrics: ProductMetric[];
  technologies: ProductTechnology[];
}

export function ProductDetails({ namespace, metrics, technologies }: ProductDetailsProps) {
  const t = useTranslations(namespace);

  return (
    <section className="section-shell">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
        <div className="lg:col-span-2 space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-text-tertiary">
            {t('eyebrow')}
          </p>
          <h2 className="text-3xl font-light text-white">{t('title')}</h2>
          <p className="text-base text-text-secondary leading-relaxed">
            {t('description')}
          </p>
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((metric) => (
              <div key={metric.id} className="glass-card p-4">
                <div className="text-2xl font-light text-white">{metric.value}</div>
                {metric.unit ? (
                  <div className="text-xs text-text-tertiary">{metric.unit}</div>
                ) : null}
                <p className="text-xs text-text-secondary mt-1">
                  {t(`metrics.${metric.id}.label`)}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-3 glass-card p-6 space-y-4">
          <p className="text-sm text-text-tertiary uppercase tracking-[0.3em]">
            {t('technologies.title')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {technologies.map((tech) => (
              <div key={tech.id} className="p-4 rounded-xl bg-white/5">
                <div className="text-3xl" aria-hidden>
                  {tech.icon}
                </div>
                <p className="text-base font-medium mt-2">
                  {t(`technologies.items.${tech.id}.title`)}
                </p>
                <p className="text-sm text-text-secondary">
                  {t(`technologies.items.${tech.id}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
