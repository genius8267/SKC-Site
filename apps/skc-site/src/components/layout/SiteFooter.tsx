'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

const footerNav = {
  product: [
    { id: 'battery', href: '/creation/battery' },
    { id: 'semiconductor', href: '/creation/semiconductor' },
    { id: 'eco', href: '/creation/eco' },
  ],
  company: [
    { id: 'about', href: '/corporation/about' },
    { id: 'history', href: '/corporation/history' },
    { id: 'leadership', href: '/corporation/leadership' },
    { id: 'careers', href: '/career' },
  ],
  resources: [
    { id: 'news', href: '/communication/news' },
    { id: 'investors', href: '/communication/media' },
    { id: 'contact', href: '/communication/contact' },
  ],
} as const;

const socialLinks = [
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UCA2A5A-iKIpYcikeqXJf4ug' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/skc1/' },
];

export function SiteFooter() {
  const t = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer className="relative py-16 border-t border-white/5">
      <div className="section-shell">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-light mb-4 text-gradient-skc">SKC</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              {t('tagline')}
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              {t('products.title')}
            </h4>
            <ul className="space-y-2">
              {footerNav.product.map((link) => (
                <li key={link.href}>
                  <motion.div whileHover={{ x: 4 }}>
                    <Link
                      href={`/${locale}${link.href}`}
                      className="text-sm text-text-secondary hover:text-accent-primary transition-colors"
                    >
                      {t(`products.${link.id}`)}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              {t('company.title')}
            </h4>
            <ul className="space-y-2">
              {footerNav.company.map((link) => (
                <li key={link.href}>
                  <motion.div whileHover={{ x: 4 }}>
                    <Link
                      href={`/${locale}${link.href}`}
                      className="text-sm text-text-secondary hover:text-accent-primary transition-colors"
                    >
                      {t(`company.${link.id}`)}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              {t('resources.title')}
            </h4>
            <ul className="space-y-2">
              {footerNav.resources.map((link) => (
                <li key={link.href}>
                  <motion.div whileHover={{ x: 4 }}>
                    <Link
                      href={`/${locale}${link.href}`}
                      className="text-sm text-text-secondary hover:text-accent-primary transition-colors"
                    >
                      {t(`resources.${link.id}`)}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-text-tertiary">
            {t('copyright', { year: new Date().getFullYear() })}
          </div>

          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary hover:text-accent-primary transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
