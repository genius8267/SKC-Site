import { ProductPageBody } from '@/components/pages/ProductPageBody';
import { PageLayout } from '@/components/layout/PageLayout';
import { getTranslations } from 'next-intl/server';

type PageProps = { params: { locale: string } };

export async function generateMetadata({ params: { locale } }: PageProps) {
  const t = await getTranslations({ locale, namespace: 'pages.creation.semiconductor.meta' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function SemiconductorMaterialsPage({ params }: PageProps) {
  return (
    <PageLayout>
      <ProductPageBody locale={params.locale} namespace="pages.creation.semiconductor" productId="semiconductor" />
    </PageLayout>
  );
}
