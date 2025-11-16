import { useTranslations } from 'next-intl';
import type { JobListing } from '@/data/career';

interface JobListingsProps {
  namespace: string;
  jobs: JobListing[];
}

export function JobListings({ namespace, jobs }: JobListingsProps) {
  const t = useTranslations(namespace);

  return (
    <section className="section-shell">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-text-tertiary">
            {t('eyebrow')}
          </p>
          <h2 className="text-3xl font-light text-white">{t('title')}</h2>
          <p className="text-base text-text-secondary">{t('description')}</p>
        </div>
        <a
          href="/career/openings"
          className="px-6 py-3 rounded-full border border-white/20 text-sm hover:border-white/50 transition"
        >
          {t('viewAll')}
        </a>
      </div>
      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job.id} className="glass-card p-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg font-medium">
                {t(`items.${job.id}.title`)}
              </p>
              <p className="text-sm text-text-secondary">
                {job.department} · {job.location}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="pill bg-white/10 text-xs uppercase tracking-[0.3em]">
                {t(`commitment.${job.commitment}`)}
              </span>
              <a
                href={t(`items.${job.id}.applyLink`)}
                className="text-sm text-accent-primary hover:underline"
              >
                {t('apply')}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
