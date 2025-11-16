import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { PageLayout } from '@/components/layout/PageLayout';
import { PageHero } from '@/components/sections/PageHero';
import { ContentSection } from '@/components/sections/ContentSection';
import { CTASection } from '@/components/sections/CTASection';
import { corporationHighlights } from '@/data/corporation';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.corporation.overview.meta' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function CorporationOverviewPage({ params }: PageProps) {
  const { locale } = await params;
  const t = useTranslations('pages.corporation.overview');
  const prefix = (href: string) => (href.startsWith('/') ? `/${locale}${href}` : href);

  const heroStats = t.raw('hero.stats') as { label: string; value: string; note?: string }[];
  const heroActions = (t.raw('hero.actions') as { label: string; href: string; variant?: 'primary' | 'ghost' }[]).map(
    (action) => ({
      ...action,
      href: prefix(action.href),
    })
  );
  const heroHighlights = corporationHighlights.map((highlight) => ({
    icon: highlight.icon,
    title: t(`hero.highlights.${highlight.id}.title`),
    description: t(`hero.highlights.${highlight.id}.description`),
  }));

  const storySection = t.raw('story') as {
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; description: string; icon?: string; badge?: string }[];
  };

  const capabilitySection = t.raw('capabilities') as {
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
        highlights={heroHighlights}
      />

      <ContentSection
        eyebrow={storySection.eyebrow}
        title={storySection.title}
        description={storySection.description}
        items={storySection.items}
      />

      <ContentSection
        eyebrow={capabilitySection.eyebrow}
        title={capabilitySection.title}
        description={capabilitySection.description}
        items={capabilitySection.items}
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
