import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { PageLayout } from '@/components/layout/PageLayout';
import { PageHero } from '@/components/sections/PageHero';
import { MediaResourceGrid } from '@/components/sections/MediaResourceGrid';
import { mediaAssets } from '@/data/communication';

type PageProps = { params: { locale: string } };

export async function generateMetadata({ params: { locale } }: PageProps) {
  const t = await getTranslations({ locale, namespace: 'pages.communication.media.meta' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function MediaLibraryPage({ params }: PageProps) {
  const t = useTranslations('pages.communication.media');

  return (
    <PageLayout>
      <PageHero
        eyebrow={t('hero.eyebrow')}
        title={t('hero.title')}
        description={t('hero.description')}
      />
      <MediaResourceGrid namespace="pages.communication.media.resources" assets={mediaAssets} />
    </PageLayout>
  );
}
