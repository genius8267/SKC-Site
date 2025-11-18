import { useTranslations } from 'next-intl';
import type { ProductApplication } from '@/data/creation';

interface ApplicationsGridProps {
  namespace: string;
  applications: ProductApplication[];
}

export function ApplicationsGrid({ namespace, applications }: ApplicationsGridProps) {
  const t = useTranslations(namespace);

  return (
    <section className="section-shell">
      <div className="max-w-2xl mb-8">
        <p className="text-xs uppercase tracking-[0.4em] text-text-tertiary">
          {t('eyebrow')}
        </p>
        <h3 className="text-3xl font-light text-white">{t('title')}</h3>
        <p className="text-base text-text-secondary">{t('description')}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {applications.map((application) => (
          <div key={application.id} className="glass-card p-5 space-y-3">
            <div className="text-3xl" aria-hidden>
              {application.icon}
            </div>
            <p className="text-lg font-medium">
              {t(`items.${application.id}.title`)}
            </p>
            <p className="text-sm text-text-secondary">
              {t(`items.${application.id}.description`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
