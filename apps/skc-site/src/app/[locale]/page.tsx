import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Hero } from '@/components/sections/Hero';
import { StatsRibbon } from '@/components/sections/StatsRibbon';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { NewsSection } from '@/components/sections/NewsSection';
import { NewsletterSignup } from '@/components/features/NewsletterSignup';
import { ScrollProgress } from '@/components/advanced/ScrollProgress';
import { BackToTopWithProgress } from '@/components/advanced/BackToTop';
import { CookieConsent } from '@/components/advanced/CookieConsent';
import { AccessibilityMenu } from '@/components/advanced/AccessibilityMenu';

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <main>
        <Hero />
        <StatsRibbon />
        <ProductsSection />
        <NewsSection />

        {/* Newsletter section */}
        <section className="py-24 relative">
          <div className="section-shell flex justify-center">
            <NewsletterSignup />
          </div>
        </section>
      </main>
      <SiteFooter />

      {/* Advanced Features */}
      <BackToTopWithProgress />
      <AccessibilityMenu />
      <CookieConsent />
    </>
  );
}
