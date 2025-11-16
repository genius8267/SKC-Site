import { useTranslations } from 'next-intl';
import type { LeadershipProfile } from '@/data/corporation';

interface LeadershipGridProps {
  namespace: string;
  leaders: LeadershipProfile[];
}

export function LeadershipGrid({ namespace, leaders }: LeadershipGridProps) {
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {leaders
          .sort((a, b) => a.order - b.order)
          .map((leader) => (
            <div key={leader.id} className="glass-card p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-2xl">
                  {leader.avatar ?? '👤'}
                </div>
                <div>
                  <p className="text-lg font-medium">
                    {t(`members.${leader.id}.name`)}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {t(`members.${leader.id}.role`)}
                  </p>
                  <p className="text-xs text-text-tertiary mt-1">
                    {t(`members.${leader.id}.tenure`)}
                  </p>
                </div>
              </div>
              <p className="text-sm text-text-secondary">
                {t(`members.${leader.id}.bio`)}
              </p>
              <div className="flex flex-wrap gap-2">
                {leader.focusKeys.map((focus) => (
                  <span key={focus} className="pill bg-white/10 text-xs">
                    {t(`focus.${focus}`)}
                  </span>
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
