import { ProductPageBody } from '@/components/pages/ProductPageBody';
import { PageLayout } from '@/components/layout/PageLayout';
import { getTranslations } from 'next-intl/server';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.creation.eco.meta' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function EcoMaterialsPage({ params }: PageProps) {
  const { locale } = await params;
  return (
    <PageLayout>
      <ProductPageBody locale={locale} namespace="pages.creation.eco" productId="eco" />
    </PageLayout>
  );
}
