import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { PageLayout } from '@/components/layout/PageLayout';
import { PageHero } from '@/components/sections/PageHero';
import { LeadershipGrid } from '@/components/sections/LeadershipGrid';
import { CTASection } from '@/components/sections/CTASection';
import { leadershipProfiles } from '@/data/corporation';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.corporation.leadership.meta' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function LeadershipPage({ params }: PageProps) {
  const { locale } = await params;
  const t = useTranslations('pages.corporation.leadership');
  const prefix = (href: string) => (href.startsWith('/') ? `/${locale}${href}` : href);

  const heroActions = (t.raw('hero.actions') as { label: string; href: string }[]).map((action) => ({
    ...action,
    href: prefix(action.href),
  }));

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
        actions={heroActions}
      />
      <LeadershipGrid namespace="pages.corporation.leadership" leaders={leadershipProfiles} />
      <CTASection
        eyebrow={cta.eyebrow}
        title={cta.title}
        description={cta.description}
        primaryAction={{ ...cta.primary, href: prefix(cta.primary.href) }}
      />
    </PageLayout>
  );
}
