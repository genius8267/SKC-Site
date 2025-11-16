import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { PageLayout } from '@/components/layout/PageLayout';
import { PageHero } from '@/components/sections/PageHero';
import { JobListings } from '@/components/sections/JobListings';
import { jobListings } from '@/data/career';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.career.openings.meta' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function OpeningsPage({ params }: PageProps) {
  const { locale } = await params;
  const t = useTranslations('pages.career.openings');

  return (
    <PageLayout>
      <PageHero
        eyebrow={t('hero.eyebrow')}
        title={t('hero.title')}
        description={t('hero.description')}
      />
      <JobListings namespace="pages.career.openings" jobs={jobListings} />
    </PageLayout>
  );
}
