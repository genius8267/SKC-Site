import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { PageLayout } from '@/components/layout/PageLayout';
import { PageHero } from '@/components/sections/PageHero';
import { BenefitsGrid } from '@/components/sections/BenefitsGrid';
import { benefits } from '@/data/career';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.career.benefits.meta' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function BenefitsPage({ params }: PageProps) {
  const { locale } = await params;
  const t = useTranslations('pages.career.benefits');

  return (
    <PageLayout>
      <PageHero
        eyebrow={t('hero.eyebrow')}
        title={t('hero.title')}
        description={t('hero.description')}
        stats={t.raw('hero.stats') as { label: string; value: string }[]}
      />
      <BenefitsGrid namespace="pages.career.benefits" benefits={benefits} />
    </PageLayout>
  );
}
