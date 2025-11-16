import { useTranslations } from 'next-intl';
import type { MediaAsset } from '@/data/communication';

interface MediaResourceGridProps {
  namespace: string;
  assets: MediaAsset[];
}

export function MediaResourceGrid({ namespace, assets }: MediaResourceGridProps) {
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {assets.map((asset) => (
          <div key={asset.id} className="glass-card p-6 flex items-start gap-4">
            <div className="text-3xl" aria-hidden>
              {asset.icon}
            </div>
            <div className="flex-1">
              <p className="text-lg font-medium">
                {t(`items.${asset.id}.title`)}
              </p>
              <p className="text-sm text-text-secondary">
                {t(`items.${asset.id}.description`)}
              </p>
              <a
                href={asset.href}
                className="text-sm text-accent-primary hover:underline mt-2 inline-flex items-center gap-2"
              >
                {t('download')}
                <span aria-hidden>↘</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
