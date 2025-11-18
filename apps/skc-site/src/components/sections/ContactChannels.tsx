import { useTranslations } from 'next-intl';
import type { ContactChannel } from '@/data/communication';

interface ContactChannelsProps {
  namespace: string;
  channels: ContactChannel[];
}

export function ContactChannels({ namespace, channels }: ContactChannelsProps) {
  const t = useTranslations(namespace);

  return (
    <section className="section-shell">
      <div className="max-w-2xl mb-10">
        <p className="text-xs uppercase tracking-[0.4em] text-text-tertiary mb-3">
          {t('eyebrow')}
        </p>
        <h2 className="text-3xl font-light text-white mb-3">{t('title')}</h2>
        <p className="text-base text-text-secondary">{t('description')}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {channels.map((channel) => (
          <div key={channel.id} className="glass-card p-5 flex items-start gap-4">
            <div className="text-3xl" aria-hidden>
              {channel.icon}
            </div>
            <div>
              <p className="text-lg font-medium">
                {t(`items.${channel.id}.title`)}
              </p>
              <p className="text-sm text-text-secondary">
                {t(`items.${channel.id}.description`)}
              </p>
              {channel.href ? (
                <a
                  href={channel.href}
                  className="text-sm text-accent-primary hover:underline mt-2 inline-flex items-center gap-1"
                >
                  {channel.type === 'email' && '✉️'}
                  {channel.type === 'phone' && '☎️'}
                  {channel.type === 'form' && '↗'}
                  {t('cta')}
                </a>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
