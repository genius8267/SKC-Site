'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Cookies from 'js-cookie';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = Cookies.get('cookie-consent');
    if (!hasConsented) {
      // Show banner after 1 second delay
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set('cookie-consent', 'accepted', { expires: 365 });
    setShowBanner(false);

    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('cookie-consent', { detail: { status: 'accepted' } })
      );
    }

    // Initialize analytics if user consents
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
      });
    }
  };

  const declineCookies = () => {
    Cookies.set('cookie-consent', 'declined', { expires: 30 });
    setShowBanner(false);

    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('cookie-consent', { detail: { status: 'declined' } })
      );
    }
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className="section-shell">
            <div className="glass-card p-6 md:flex items-center justify-between gap-6">
              <div className="flex-1 mb-4 md:mb-0">
                <h3 className="font-medium mb-2">We use cookies</h3>
                <p className="text-sm text-text-secondary">
                  We use cookies to enhance your experience, analyze site traffic, and for marketing purposes.
                  By clicking "Accept", you consent to our use of cookies.{' '}
                  <a href="/privacy" className="text-accent-primary hover:underline">
                    Privacy Policy
                  </a>
                </p>
              </div>

              <div className="flex gap-3">
                <motion.button
                  onClick={declineCookies}
                  className="px-6 py-2 glass-card text-sm font-medium rounded-lg hover:border-white/20 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Decline
                </motion.button>
                <motion.button
                  onClick={acceptCookies}
                  className="px-6 py-2 bg-gradient-skc text-white text-sm font-medium rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Accept
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
