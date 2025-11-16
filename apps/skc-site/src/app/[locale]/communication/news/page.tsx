import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { PageLayout } from '@/components/layout/PageLayout';
import { PageHero } from '@/components/sections/PageHero';
import { NewsroomGrid } from '@/components/sections/NewsroomGrid';
import { featuredNews } from '@/data/communication';

type PageProps = { params: { locale: string } };

export async function generateMetadata({ params: { locale } }: PageProps) {
  const t = await getTranslations({ locale, namespace: 'pages.communication.news.meta' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function NewsroomPage({ params }: PageProps) {
  const t = useTranslations('pages.communication.news');
  const heroStats = t.raw('hero.stats') as { label: string; value: string }[];

  return (
    <PageLayout>
      <PageHero
        eyebrow={t('hero.eyebrow')}
        title={t('hero.title')}
        description={t('hero.description')}
        stats={heroStats}
      />
      <NewsroomGrid namespace="pages.communication.news.grid" items={featuredNews} />
    </PageLayout>
  );
}
