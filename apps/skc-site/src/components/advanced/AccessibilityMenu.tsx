'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FontSize = 'default' | 'large' | 'xlarge';
type Contrast = 'default' | 'high';

export function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState<FontSize>('default');
  const [contrast, setContrast] = useState<Contrast>('default');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Load saved preferences
    const savedFontSize = localStorage.getItem('fontSize') as FontSize;
    const savedContrast = localStorage.getItem('contrast') as Contrast;
    const savedMotion = localStorage.getItem('reducedMotion') === 'true';

    if (savedFontSize) setFontSize(savedFontSize);
    if (savedContrast) setContrast(savedContrast);
    if (savedMotion) setReducedMotion(savedMotion);

    applySettings(savedFontSize || 'default', savedContrast || 'default', savedMotion);
  }, []);

  const applySettings = (size: FontSize, cont: Contrast, motion: boolean) => {
    const root = document.documentElement;

    // Font size
    root.classList.remove('font-default', 'font-large', 'font-xlarge');
    root.classList.add(`font-${size}`);

    // Contrast
    root.classList.remove('contrast-default', 'contrast-high');
    root.classList.add(`contrast-${cont}`);

    // Reduced motion
    if (motion) {
      root.style.setProperty('--transition-base', '0ms');
      root.style.setProperty('--transition-slow', '0ms');
    } else {
      root.style.removeProperty('--transition-base');
      root.style.removeProperty('--transition-slow');
    }
  };

  const handleFontSize = (size: FontSize) => {
    setFontSize(size);
    localStorage.setItem('fontSize', size);
    applySettings(size, contrast, reducedMotion);
  };

  const handleContrast = (cont: Contrast) => {
    setContrast(cont);
    localStorage.setItem('contrast', cont);
    applySettings(fontSize, cont, reducedMotion);
  };

  const handleReducedMotion = (enabled: boolean) => {
    setReducedMotion(enabled);
    localStorage.setItem('reducedMotion', enabled.toString());
    applySettings(fontSize, contrast, enabled);
  };

  const resetSettings = () => {
    setFontSize('default');
    setContrast('default');
    setReducedMotion(false);
    localStorage.removeItem('fontSize');
    localStorage.removeItem('contrast');
    localStorage.removeItem('reducedMotion');
    applySettings('default', 'default', false);
  };

  return (
    <>
      {/* Floating accessibility button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-8 z-40 w-12 h-12 glass-card rounded-full flex items-center justify-center hover:border-skc-red/40 transition-all shadow-lg"
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Accessibility menu"
      >
        <span className="text-xl">♿</span>
      </motion.button>

      {/* Accessibility menu panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-40 right-8 z-40 w-80 glass-card p-6 shadow-xl"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium">Accessibility</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-text-tertiary hover:text-foreground transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              {/* Font Size */}
              <div>
                <label className="text-sm font-medium mb-2 block">Font Size</label>
                <div className="flex gap-2">
                  {(['default', 'large', 'xlarge'] as FontSize[]).map((size) => (
                    <button
                      key={size}
                      onClick={() => handleFontSize(size)}
                      className={`flex-1 px-3 py-2 text-sm rounded-lg transition-all ${
                        fontSize === size
                          ? 'bg-gradient-skc text-white'
                          : 'glass-card hover:border-white/20'
                      }`}
                    >
                      {size === 'default' ? 'A' : size === 'large' ? 'A+' : 'A++'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contrast */}
              <div>
                <label className="text-sm font-medium mb-2 block">Contrast</label>
                <div className="flex gap-2">
                  {(['default', 'high'] as Contrast[]).map((cont) => (
                    <button
                      key={cont}
                      onClick={() => handleContrast(cont)}
                      className={`flex-1 px-3 py-2 text-sm rounded-lg transition-all ${
                        contrast === cont
                          ? 'bg-gradient-skc text-white'
                          : 'glass-card hover:border-white/20'
                      }`}
                    >
                      {cont === 'default' ? 'Normal' : 'High'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Reduced Motion */}
              <div>
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm font-medium">Reduce Motion</span>
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={reducedMotion}
                      onChange={(e) => handleReducedMotion(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-white/10 rounded-full peer-checked:bg-skc-red/30 transition-colors" />
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5" />
                  </div>
                </label>
              </div>

              {/* Reset button */}
              <button
                onClick={resetSettings}
                className="w-full px-4 py-2 text-sm text-text-secondary hover:text-foreground glass-card hover:border-white/20 rounded-lg transition-all"
              >
                Reset to Defaults
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
