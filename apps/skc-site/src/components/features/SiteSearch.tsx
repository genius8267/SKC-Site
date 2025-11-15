'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Fuse from 'fuse.js';
import { searchIndex, type SearchItem } from '@/data/searchIndex';

const fuseOptions = {
  keys: [
    { name: 'title', weight: 0.4 },
    { name: 'description', weight: 0.3 },
    { name: 'keywords', weight: 0.3 },
  ],
  threshold: 0.3,
  includeScore: true,
};

const categoryColors = {
  page: 'rgba(0, 153, 255, 0.2)',
  product: 'rgba(224, 5, 41, 0.2)',
  news: 'rgba(102, 255, 228, 0.2)',
  company: 'rgba(230, 117, 37, 0.2)',
};

const categoryLabels = {
  page: 'Page',
  product: 'Product',
  news: 'News',
  company: 'Company',
};

interface SiteSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SiteSearch({ isOpen, onClose }: SiteSearchProps) {
  const [query, setQuery] = useState('');
  const fuse = useMemo(() => new Fuse(searchIndex, fuseOptions), []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return fuse.search(query).slice(0, 8);
  }, [query, fuse]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  // Clear query when closing
  useEffect(() => {
    if (!isOpen) setQuery('');
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4">
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Search panel */}
        <motion.div
          className="relative w-full max-w-2xl glass-card"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          {/* Search input */}
          <div className="p-4 border-b border-white/10">
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary text-xl">
                🔍
              </span>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search SKC..."
                autoFocus
                className="w-full bg-transparent border-none outline-none pl-12 pr-4 py-3 text-lg text-foreground placeholder:text-text-tertiary"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-foreground transition-colors"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-y-auto">
            <AnimatePresence mode="popLayout">
              {results.length > 0 ? (
                results.map(({ item, score }, index) => (
                  <motion.a
                    key={item.id}
                    href={item.url}
                    onClick={onClose}
                    className="block px-4 py-3 hover:bg-white/5 border-b border-white/5 last:border-0 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className="pill text-xs px-2 py-1 flex-shrink-0"
                        style={{ backgroundColor: categoryColors[item.category] }}
                      >
                        {categoryLabels[item.category]}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-foreground mb-1">
                          {item.title}
                        </div>
                        <div className="text-xs text-text-secondary line-clamp-2">
                          {item.description}
                        </div>
                      </div>
                      {score !== undefined && (
                        <div className="text-xs text-text-tertiary flex-shrink-0">
                          {Math.round((1 - score) * 100)}%
                        </div>
                      )}
                    </div>
                  </motion.a>
                ))
              ) : query.trim() ? (
                <motion.div
                  className="px-4 py-8 text-center text-text-secondary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  No results found for &quot;{query}&quot;
                </motion.div>
              ) : (
                <motion.div
                  className="px-4 py-8 text-center text-text-tertiary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="text-4xl mb-2">🔍</div>
                  <div className="text-sm">
                    Search for products, news, pages, or companies
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="px-4 py-3 border-t border-white/5 flex items-center justify-between text-xs text-text-tertiary">
            <div className="flex items-center gap-4">
              <kbd className="px-2 py-1 bg-white/5 rounded">↵</kbd>
              <span>to select</span>
              <kbd className="px-2 py-1 bg-white/5 rounded">ESC</kbd>
              <span>to close</span>
            </div>
            <div>{results.length} results</div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
