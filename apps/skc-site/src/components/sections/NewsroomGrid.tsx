import { format } from 'date-fns';
import { useTranslations } from 'next-intl';
import type { NewsItemMeta } from '@/data/communication';

interface NewsroomGridProps {
  namespace: string;
  items: NewsItemMeta[];
}

export function NewsroomGrid({ namespace, items }: NewsroomGridProps) {
  const t = useTranslations(namespace);

  return (
    <section className="section-shell">
      <div className="flex flex-col gap-4 mb-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-text-tertiary">
            {t('eyebrow')}
          </p>
          <h2 className="text-3xl font-light text-white">{t('title')}</h2>
          <p className="text-base text-text-secondary">{t('description')}</p>
        </div>
        <div className="flex gap-3">
          <button className="pill bg-white/5 text-xs">{t('filters.press')}</button>
          <button className="pill bg-white/5 text-xs">{t('filters.esg')}</button>
          <button className="pill bg-white/5 text-xs">{t('filters.innovation')}</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {items.map((item) => (
          <article key={item.id} className="glass-card p-6 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-text-tertiary uppercase tracking-[0.3em]">
              <span>{format(new Date(item.date), 'MMM dd, yyyy')}</span>
              <span>{t(`filters.${item.category}`)}</span>
            </div>
            <h3 className="text-xl font-medium">
              {t(`items.${item.id}.title`)}
            </h3>
            <p className="text-sm text-text-secondary flex-1">
              {t(`items.${item.id}.summary`)}
            </p>
            <a
              href={t(`items.${item.id}.href`)}
              className="text-sm text-accent-primary hover:underline"
            >
              {t('cta')}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
