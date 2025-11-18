import { useTranslations } from 'next-intl';
import type { CultureValue, TalentProgram } from '@/data/career';

interface CultureValuesProps {
  namespace: string;
  values: CultureValue[];
  programs: TalentProgram[];
}

export function CultureValues({ namespace, values, programs }: CultureValuesProps) {
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {values.map((value) => (
          <div key={value.id} className="glass-card p-5 flex gap-4">
            <div className="text-3xl" aria-hidden>
              {value.icon}
            </div>
            <div>
              <p className="text-lg font-medium">
                {t(`values.${value.id}.title`)}
              </p>
              <p className="text-sm text-text-secondary">
                {t(`values.${value.id}.description`)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="glass-card p-6">
        <p className="text-sm text-text-tertiary uppercase tracking-[0.3em] mb-4">
          {t('programs.title')}
        </p>
        <div className="flex flex-wrap gap-3">
          {programs.map((program) => (
            <span key={program.id} className="pill bg-white/10 text-sm">
              <span className="mr-2" aria-hidden>
                {program.icon}
              </span>
              {t(`programs.items.${program.id}`)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
