import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { PageLayout } from '@/components/layout/PageLayout';
import { PageHero } from '@/components/sections/PageHero';
import { ContentSection } from '@/components/sections/ContentSection';
import { CTASection } from '@/components/sections/CTASection';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.creation.overview.meta' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function CreationOverviewPage({ params }: PageProps) {
  const { locale } = await params;
  const t = useTranslations('pages.creation.overview');
  const prefix = (href: string) => (href.startsWith('/') ? `/${locale}${href}` : href);

  const heroStats = t.raw('hero.stats') as { label: string; value: string }[];
  const heroActions = (t.raw('hero.actions') as { label: string; href: string }[]).map((action) => ({
    ...action,
    href: prefix(action.href),
  }));

  const platforms = t.raw('platforms') as {
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; description: string; icon?: string; badge?: string }[];
  };

  const roadmap = t.raw('roadmap') as {
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
        eyebrow={platforms.eyebrow}
        title={platforms.title}
        description={platforms.description}
        items={platforms.items}
      />
      <ContentSection
        eyebrow={roadmap.eyebrow}
        title={roadmap.title}
        description={roadmap.description}
        items={roadmap.items}
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
