'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 glass-card rounded-full flex items-center justify-center">
        <span className="text-xl">🌓</span>
      </div>
    );
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = currentTheme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-16 h-8 glass-card rounded-full p-1 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Track */}
      <motion.div
        className="absolute inset-1 rounded-full"
        animate={{
          backgroundColor: isDark
            ? 'rgba(224, 5, 41, 0.2)'
            : 'rgba(0, 153, 255, 0.2)',
        }}
      />

      {/* Thumb */}
      <motion.div
        className="relative w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center"
        animate={{
          x: isDark ? 24 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        <motion.span
          className="text-sm"
          animate={{
            rotate: isDark ? 0 : 180,
            scale: isDark ? 1 : 1.1,
          }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? '🌙' : '☀️'}
        </motion.span>
      </motion.div>
    </motion.button>
  );
}

// Compact icon-only toggle
export function ThemeToggleCompact() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = currentTheme === 'dark';

  return (
    <motion.button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="glass-card p-2 rounded-lg hover:border-skc-red/40 transition-all"
      whileHover={{ scale: 1.05, rotate: 180 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <span className="text-xl">{isDark ? '🌙' : '☀️'}</span>
    </motion.button>
  );
}
