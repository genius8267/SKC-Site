import { useTranslations } from 'next-intl';
import { PageHero } from '@/components/sections/PageHero';
import { ProductDetails } from '@/components/sections/ProductDetails';
import { TechnicalSpecs } from '@/components/sections/TechnicalSpecs';
import { ApplicationsGrid } from '@/components/sections/ApplicationsGrid';
import { CTASection } from '@/components/sections/CTASection';
import {
  applicationAreas,
  productMetrics,
  productTechnologies,
  technicalSpecs,
  type ProductId,
} from '@/data/creation';

interface ProductPageBodyProps {
  locale: string;
  namespace: string;
  productId: ProductId;
}

export function ProductPageBody({ locale, namespace, productId }: ProductPageBodyProps) {
  const t = useTranslations(namespace);
  const prefix = (href: string) => (href.startsWith('/') ? `/${locale}${href}` : href);

  const heroStats = t.raw('hero.stats') as { label: string; value: string; note?: string }[];
  const actions = (t.raw('hero.actions') as { label: string; href: string; variant?: 'primary' | 'ghost' }[]).map(
    (action) => ({
      ...action,
      href: prefix(action.href),
    })
  );
  const heroHighlights = (t.raw('hero.highlights') as { title: string; description: string; icon?: string }[]) ?? [];

  const specs = technicalSpecs[productId];
  const metrics = productMetrics[productId];
  const technologies = productTechnologies[productId];
  const applications = applicationAreas[productId];

  const cta = t.raw('cta') as {
    eyebrow: string;
    title: string;
    description: string;
    primary: { label: string; href: string };
    secondary?: { label: string; href: string };
  };

  return (
    <>
      <PageHero
        eyebrow={t('hero.eyebrow')}
        title={t('hero.title')}
        description={t('hero.description')}
        stats={heroStats}
        actions={actions}
        highlights={heroHighlights}
      />
      <ProductDetails namespace={`${namespace}.details`} metrics={metrics} technologies={productTechnologies[productId]} />
      <TechnicalSpecs namespace={`${namespace}.specs`} specs={specs} />
      <ApplicationsGrid namespace={`${namespace}.applications`} applications={applications} />
      <CTASection
        eyebrow={cta.eyebrow}
        title={cta.title}
        description={cta.description}
        primaryAction={{ ...cta.primary, href: prefix(cta.primary.href) }}
        secondaryAction={cta.secondary ? { ...cta.secondary, href: prefix(cta.secondary.href) } : undefined}
      />
    </>
  );
}
