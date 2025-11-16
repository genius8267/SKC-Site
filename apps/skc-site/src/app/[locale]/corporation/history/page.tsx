import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { PageLayout } from '@/components/layout/PageLayout';
import { PageHero } from '@/components/sections/PageHero';
import { Timeline } from '@/components/sections/Timeline';
import { timelineMilestones } from '@/data/corporation';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.corporation.history.meta' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function CorporationHistoryPage({ params }: PageProps) {
  const { locale } = await params;
  const t = useTranslations('pages.corporation.history');
  const heroStats = t.raw('hero.stats') as { label: string; value: string }[];

  return (
    <PageLayout>
      <PageHero
        eyebrow={t('hero.eyebrow')}
        title={t('hero.title')}
        description={t('hero.description')}
        stats={heroStats}
      />
      <Timeline namespace="pages.corporation.history.timeline" milestones={timelineMilestones} />
    </PageLayout>
  );
}
