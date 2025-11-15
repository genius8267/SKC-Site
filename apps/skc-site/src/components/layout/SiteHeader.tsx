'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { SiteSearch } from '@/components/features/SiteSearch';
import { ThemeToggleCompact } from '@/components/advanced/ThemeToggle';
import { LanguageSwitcherCompact } from '@/components/advanced/LanguageSwitcher';

const navItems = [
  { label: 'Corporation', href: '/corporation/intro/company' },
  { label: 'Creation', href: '/creation/battery' },
  { label: 'Communication', href: '/communication/newsroom' },
  { label: 'Career', href: '/career/jobs' },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut for search (Cmd+K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(4, 7, 18, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
      }}
    >
      <div className="section-shell">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="/"
            className="text-2xl font-light"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-gradient-skc font-medium">SKC</span>
          </motion.a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-text-secondary hover:text-foreground transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-skc group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          {/* Language & Theme Toggle */}
          <div className="flex items-center gap-2">
            <LanguageSwitcherCompact />
            <ThemeToggleCompact />
          </div>

          {/* Search */}
          <motion.button
            onClick={() => setSearchOpen(true)}
            className="glass-card px-4 py-2 text-sm font-medium hover:border-skc-red/40 transition-all flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>🔍</span>
            <span className="hidden md:inline">Search</span>
            <kbd className="hidden lg:inline text-xs text-text-tertiary">⌘K</kbd>
          </motion.button>

          {/* CTA */}
          <motion.a
            href="/contact"
            className="glass-card px-6 py-2 text-sm font-medium hover:border-skc-red/40 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Us
          </motion.a>
        </div>
      </div>

      {/* Search modal */}
      <SiteSearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </motion.header>
  );
}
