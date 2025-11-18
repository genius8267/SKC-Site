'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const languages = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'ko', label: '한국어', flag: '🇰🇷' },
] as const;

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0];

  const switchLanguage = (newLocale: string) => {
    // Remove current locale from pathname
    const pathnameWithoutLocale = pathname.replace(`/${locale}`, '') || '/';

    // Add new locale to pathname
    const newPathname = newLocale === 'en'
      ? pathnameWithoutLocale
      : `/${newLocale}${pathnameWithoutLocale}`;

    router.push(newPathname);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="glass-card px-4 py-2 text-sm font-medium hover:border-skc-red/40 transition-all flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <span>{currentLanguage.flag}</span>
        <span className="hidden md:inline">{currentLanguage.label}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          ▼
        </motion.span>
      </motion.button>

      {/* Dropdown menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full right-0 mt-2 glass-card min-w-[160px] z-50"
          >
            {languages.map((lang) => (
              <motion.button
                key={lang.code}
                onClick={() => switchLanguage(lang.code)}
                className={`w-full px-4 py-3 text-sm font-medium text-left flex items-center gap-3 transition-colors ${
                  lang.code === locale
                    ? 'text-skc-red'
                    : 'text-text-secondary hover:text-foreground'
                }`}
                whileHover={{ x: 4 }}
              >
                <span className="text-xl">{lang.flag}</span>
                <span>{lang.label}</span>
                {lang.code === locale && (
                  <span className="ml-auto text-skc-red">✓</span>
                )}
              </motion.button>
            ))}
          </motion.div>
        </>
      )}
    </div>
  );
}

export function LanguageSwitcherCompact() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0];
  const otherLanguage = languages.find((lang) => lang.code !== locale) || languages[1];

  const switchLanguage = () => {
    const pathnameWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    const newPathname = otherLanguage.code === 'en'
      ? pathnameWithoutLocale
      : `/${otherLanguage.code}${pathnameWithoutLocale}`;

    router.push(newPathname);
  };

  return (
    <motion.button
      onClick={switchLanguage}
      className="glass-card px-3 py-2 text-sm font-medium hover:border-skc-red/40 transition-all"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      title={`Switch to ${otherLanguage.label}`}
    >
      <span className="text-lg">{otherLanguage.flag}</span>
    </motion.button>
  );
}
