import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { PageLayout } from '@/components/layout/PageLayout';
import { PageHero } from '@/components/sections/PageHero';
import { ContentSection } from '@/components/sections/ContentSection';
import { CTASection } from '@/components/sections/CTASection';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.corporation.about.meta' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function CorporationAboutPage({ params }: PageProps) {
  const { locale } = await params;
  const t = useTranslations('pages.corporation.about');
  const prefix = (href: string) => (href.startsWith('/') ? `/${locale}${href}` : href);

  const heroStats = t.raw('hero.stats') as { label: string; value: string }[];
  const heroActions = (t.raw('hero.actions') as { label: string; href: string }[]).map((action) => ({
    ...action,
    href: prefix(action.href),
  }));

  const missionSection = t.raw('mission') as {
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; description: string; icon?: string }[];
  };

  const labsSection = t.raw('labs') as {
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; description: string; icon?: string }[];
  };

  const globalSection = t.raw('global') as {
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; description: string; icon?: string }[];
  };

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
      <ContentSection
        eyebrow={missionSection.eyebrow}
        title={missionSection.title}
        description={missionSection.description}
        items={missionSection.items}
      />
      <ContentSection
        eyebrow={labsSection.eyebrow}
        title={labsSection.title}
        description={labsSection.description}
        items={labsSection.items}
      />
      <ContentSection
        eyebrow={globalSection.eyebrow}
        title={globalSection.title}
        description={globalSection.description}
        items={globalSection.items}
      />
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
