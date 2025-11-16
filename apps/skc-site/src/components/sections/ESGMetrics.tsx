import { useTranslations } from 'next-intl';
import type { ESGMetric, ESGInitiative } from '@/data/corporation';

interface ESGMetricsProps {
  namespace: string;
  metrics: ESGMetric[];
  initiatives: ESGInitiative[];
}

export function ESGMetrics({ namespace, metrics, initiatives }: ESGMetricsProps) {
  const t = useTranslations(namespace);

  return (
    <section className="section-shell">
      <div className="max-w-3xl mb-12">
        <p className="text-xs uppercase tracking-[0.4em] text-text-tertiary mb-3">
          {t('eyebrow')}
        </p>
        <h2 className="text-3xl font-light text-white mb-3">{t('title')}</h2>
        <p className="text-base text-text-secondary">{t('description')}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
        {metrics.map((metric) => (
          <div key={metric.id} className="glass-card p-5 flex flex-col gap-2">
            <div className="text-3xl font-light text-white">{metric.value}</div>
            {metric.unit ? (
              <div className="text-xs text-text-tertiary">{metric.unit}</div>
            ) : null}
            <div className="text-sm text-text-secondary">
              {t(`metrics.${metric.id}.label`)}
            </div>
            <p className="text-xs text-text-tertiary">
              {t(`metrics.${metric.id}.description`)}
            </p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {initiatives.map((initiative) => (
          <div key={initiative.id} className="glass-card p-6 flex gap-4">
            <div className="text-3xl" aria-hidden>
              {initiative.icon}
            </div>
            <div>
              <p className="text-lg font-medium">
                {t(`initiatives.${initiative.id}.title`)}
              </p>
              <p className="text-sm text-text-secondary">
                {t(`initiatives.${initiative.id}.description`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
