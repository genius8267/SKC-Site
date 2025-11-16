import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { PageLayout } from '@/components/layout/PageLayout';
import { PageHero } from '@/components/sections/PageHero';
import { ESGMetrics } from '@/components/sections/ESGMetrics';
import { CTASection } from '@/components/sections/CTASection';
import { esgMetrics, esgInitiatives } from '@/data/corporation';

type PageProps = { params: { locale: string } };

export async function generateMetadata({ params: { locale } }: PageProps) {
  const t = await getTranslations({ locale, namespace: 'pages.corporation.esg.meta' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function ESGPage({ params }: PageProps) {
  const t = useTranslations('pages.corporation.esg');
  const prefix = (href: string) => (href.startsWith('/') ? `/${params.locale}${href}` : href);

  const heroStats = t.raw('hero.stats') as { label: string; value: string }[];
  const heroActions = (t.raw('hero.actions') as { label: string; href: string }[]).map((action) => ({
    ...action,
    href: prefix(action.href),
  }));

  const cta = t.raw('cta') as {
    eyebrow: string;
    title: string;
    description: string;
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };

  return (
    <PageLayout>
      <PageHero
        eyebrow={t('hero.eyebrow')}
        title={t('hero.title')}
        description={t('hero.description')}
        stats={heroStats}
        actions={heroActions}
      />
      <ESGMetrics namespace="pages.corporation.esg" metrics={esgMetrics} initiatives={esgInitiatives} />
      <CTASection
        eyebrow={cta.eyebrow}
        title={cta.title}
        description={cta.description}
        primaryAction={{ ...cta.primary, href: prefix(cta.primary.href) }}
        secondaryAction={{ ...cta.secondary, href: prefix(cta.secondary.href) }}
      />
    </PageLayout>
  );
}
