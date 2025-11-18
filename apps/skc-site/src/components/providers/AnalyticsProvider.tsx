'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import Cookies from 'js-cookie';

type ConsentStatus = 'accepted' | 'declined' | 'idle';

const CONSENT_COOKIE = 'cookie-consent';

function getInitialConsent(): ConsentStatus {
  if (typeof document === 'undefined') {
    return 'idle';
  }

  const stored = Cookies.get(CONSENT_COOKIE);
  if (stored === 'accepted' || stored === 'declined') {
    return stored;
  }

  return 'idle';
}

export function AnalyticsProvider() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const [consent, setConsent] = useState<ConsentStatus>(() => getInitialConsent());

  useEffect(() => {
    if (!gaId) return;

    const handleUpdate = (event: Event) => {
      const detail = (event as CustomEvent<{ status: ConsentStatus }>).detail;
      if (detail?.status) {
        setConsent(detail.status);
      }
    };

    window.addEventListener('cookie-consent', handleUpdate as EventListener);
    return () => window.removeEventListener('cookie-consent', handleUpdate as EventListener);
  }, [gaId]);

  useEffect(() => {
    if (!gaId) return;
    const stored = getInitialConsent();
    if (stored !== consent) {
      setConsent(stored);
    }
  }, [gaId]);

  if (!gaId || consent !== 'accepted') {
    return null;
  }

  return (
    <>
      <Script id="ga-loader" src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent','update',{ analytics_storage: 'granted' });
gtag('js', new Date());
gtag('config', '${gaId}', { anonymize_ip: true });`,
        }}
      />
    </>
  );
}
