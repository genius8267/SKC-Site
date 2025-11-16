import { useTranslations } from 'next-intl';
import type { ProductSpec } from '@/data/creation';

interface TechnicalSpecsProps {
  namespace: string;
  specs: ProductSpec[];
}

export function TechnicalSpecs({ namespace, specs }: TechnicalSpecsProps) {
  const t = useTranslations(namespace);

  return (
    <section className="section-shell">
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-text-tertiary">
              {t('eyebrow')}
            </p>
            <h3 className="text-2xl font-light text-white">{t('title')}</h3>
          </div>
          <span className="pill bg-white/10 text-xs">{t('standards')}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {specs.map((spec) => (
            <div key={spec.id} className="bg-white/5 rounded-xl p-4">
              <p className="text-sm text-text-tertiary uppercase tracking-[0.3em]">
                {t(`items.${spec.id}.label`)}
              </p>
              <div className="text-2xl font-medium text-white mt-1">
                {spec.value}
              </div>
              <p className="text-xs text-text-secondary">
                {t(`items.${spec.id}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
