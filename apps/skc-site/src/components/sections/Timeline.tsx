import { useTranslations } from 'next-intl';
import type { TimelineMilestone } from '@/data/corporation';

interface TimelineProps {
  namespace: string;
  milestones: TimelineMilestone[];
}

export function Timeline({ namespace, milestones }: TimelineProps) {
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

      <div className="relative pl-6 border-l border-white/10 space-y-10">
        {milestones.map((milestone) => (
          <div key={milestone.id} className="relative">
            <div className="absolute -left-[38px] top-1 w-6 h-6 rounded-full bg-gradient-skc text-center text-sm flex items-center justify-center">
              {milestone.icon}
            </div>
            <div className="ml-4 glass-card p-6">
              <span className="text-xs uppercase tracking-[0.3em] text-text-tertiary">
                {milestone.year}
              </span>
              <h3 className="text-xl font-medium text-white mt-2 mb-2">
                {t(`items.${milestone.id}.title`)}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {t(`items.${milestone.id}.description`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
