import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { PageLayout } from '@/components/layout/PageLayout';
import { PageHero } from '@/components/sections/PageHero';
import { CultureValues } from '@/components/sections/CultureValues';
import { cultureValues, talentPrograms } from '@/data/career';

type PageProps = { params: { locale: string } };

export async function generateMetadata({ params: { locale } }: PageProps) {
  const t = await getTranslations({ locale, namespace: 'pages.career.culture.meta' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function CulturePage({ params }: PageProps) {
  const t = useTranslations('pages.career.culture');
  const heroStats = t.raw('hero.stats') as { label: string; value: string }[];

  return (
    <PageLayout>
      <PageHero
        eyebrow={t('hero.eyebrow')}
        title={t('hero.title')}
        description={t('hero.description')}
        stats={heroStats}
      />
      <CultureValues namespace="pages.career.culture" values={cultureValues} programs={talentPrograms} />
    </PageLayout>
  );
}
