export interface NewsItemMeta {
  id: string;
  date: string;
  category: 'press' | 'esg' | 'innovation';
}

export interface MediaAsset {
  id: string;
  category: 'report' | 'video' | 'image';
  icon: string;
  href: string;
}

export interface ContactChannel {
  id: string;
  icon: string;
  href?: string;
  type: 'email' | 'phone' | 'form' | 'office';
}

export const featuredNews: NewsItemMeta[] = [
  { id: 'q3-results', date: '2025-11-05', category: 'press' },
  { id: 'merger-announcement', date: '2025-10-16', category: 'innovation' },
  { id: 'limex-launch', date: '2025-09-20', category: 'esg' },
  { id: 'ga4-rollout', date: '2025-08-11', category: 'press' },
];

export const mediaAssets: MediaAsset[] = [
  { id: 'annual-report', category: 'report', icon: '📄', href: '/downloads/skc-annual-report.pdf' },
  { id: 'sustainability-brief', category: 'report', icon: '🌿', href: '/downloads/skc-esg-brief.pdf' },
  { id: 'brand-assets', category: 'image', icon: '🎨', href: '/downloads/skc-brand-assets.zip' },
  { id: 'factory-tour', category: 'video', icon: '🎥', href: 'https://youtube.com' },
];

export const contactChannels: ContactChannel[] = [
  { id: 'press', icon: '📰', type: 'email', href: 'mailto:press@skc.com' },
  { id: 'investor', icon: '💼', type: 'email', href: 'mailto:ir@skc.com' },
  { id: 'hq', icon: '📍', type: 'office' },
  { id: 'hotline', icon: '☎️', type: 'phone', href: 'tel:+82220001000' },
  { id: 'contactForm', icon: '✉️', type: 'form', href: '/communication/contact' },
];
