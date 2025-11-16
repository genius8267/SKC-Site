import type { MetadataRoute } from 'next';
import { locales } from '@/i18n';

const basePath = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://skc.vercel.app';

const routes = [
  '/',
  '/corporation',
  '/corporation/about',
  '/corporation/history',
  '/corporation/leadership',
  '/corporation/esg',
  '/creation',
  '/creation/battery',
  '/creation/semiconductor',
  '/creation/eco',
  '/communication',
  '/communication/news',
  '/communication/media',
  '/communication/contact',
  '/career',
  '/career/culture',
  '/career/benefits',
  '/career/openings',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      const localizedPath = route === '/' ? `/${locale}` : `/${locale}${route}`;
      entries.push({
        url: `${basePath}${localizedPath}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: route === '/' ? 1 : 0.7,
      });
    }
  }

  return entries;
}
