import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { PageLayout } from '@/components/layout/PageLayout';
import { PageHero } from '@/components/sections/PageHero';
import { ContactChannels } from '@/components/sections/ContactChannels';
import { CTASection } from '@/components/sections/CTASection';
import { ContactForm } from '@/components/features/ContactForm';
import { contactChannels } from '@/data/communication';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.communication.contact.meta' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  const t = useTranslations('pages.communication.contact');
  const prefix = (href: string) => (href.startsWith('/') ? `/${locale}${href}` : href);

  const cta = t.raw('cta') as {
    eyebrow: string;
    title: string;
    description: string;
    primary: { label: string; href: string };
  };

  return (
    <PageLayout>
      <PageHero
        eyebrow={t('hero.eyebrow')}
        title={t('hero.title')}
        description={t('hero.description')}
        stats={t.raw('hero.stats') as { label: string; value: string }[]}
      />
      <ContactChannels namespace="pages.communication.contact.channels" channels={contactChannels} />
      <section className="section-shell grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-card p-6 lg:col-start-2">
          <h2 className="text-2xl font-light mb-2">{t('form.title')}</h2>
          <p className="text-sm text-text-secondary mb-6">{t('form.description')}</p>
          <ContactForm />
        </div>
      </section>
      <CTASection
        eyebrow={cta.eyebrow}
        title={cta.title}
        description={cta.description}
        primaryAction={{ ...cta.primary, href: prefix(cta.primary.href) }}
      />
    </PageLayout>
  );
}
