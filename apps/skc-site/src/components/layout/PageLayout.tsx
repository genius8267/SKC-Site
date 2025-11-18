import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { ScrollProgress } from '@/components/advanced/ScrollProgress';
import { BackToTopWithProgress } from '@/components/advanced/BackToTop';
import { AccessibilityMenu } from '@/components/advanced/AccessibilityMenu';
import { CookieConsent } from '@/components/advanced/CookieConsent';

interface PageLayoutProps {
  children: React.ReactNode;
  heading?: React.ReactNode;
  footerSlot?: React.ReactNode;
}

export function PageLayout({ children, heading, footerSlot }: PageLayoutProps) {
  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      {heading}
      <main className="pt-24 pb-16 space-y-24">{children}</main>
      {footerSlot}
      <SiteFooter />
      <BackToTopWithProgress />
      <AccessibilityMenu />
      <CookieConsent />
    </>
  );
}
