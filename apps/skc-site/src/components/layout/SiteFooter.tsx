'use client';

import { motion } from 'framer-motion';

const footerNav = {
  product: [
    { label: 'Battery Materials', href: '/creation/battery' },
    { label: 'Semiconductor', href: '/creation/semiconductor' },
    { label: 'Eco-friendly', href: '/creation/eco-friendly' },
  ],
  company: [
    { label: 'About SKC', href: '/corporation/intro/company' },
    { label: 'CEO Message', href: '/corporation/intro/ceo' },
    { label: 'Sustainability', href: '/corporation/sustain/governance' },
    { label: 'Careers', href: '/career/jobs' },
  ],
  resources: [
    { label: 'Newsroom', href: '/communication/newsroom' },
    { label: 'Investor Relations', href: '/communication/ir/investor' },
    { label: 'Contact Us', href: '/contact' },
  ],
};

const socialLinks = [
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UCA2A5A-iKIpYcikeqXJf4ug' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/skc1/' },
];

export function SiteFooter() {
  return (
    <footer className="relative py-16 border-t border-white/5">
      <div className="section-shell">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-light mb-4 text-gradient-skc">SKC</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Global ESG material solutions company
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-2">
              {footerNav.product.map((link) => (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-accent-primary transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              {footerNav.company.map((link) => (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-accent-primary transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerNav.resources.map((link) => (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-accent-primary transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-text-tertiary">
            © {new Date().getFullYear()} SKC Corporation. All rights reserved.
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
