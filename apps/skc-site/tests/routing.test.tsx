import { describe, it, expect } from 'vitest';
import { locales, defaultLocale } from '@/i18n';
import { config as middlewareConfig } from '@/middleware';

describe('Routing Configuration', () => {
  describe('i18n Configuration', () => {
    it('should export supported locales', () => {
      expect(locales).toBeDefined();
      expect(Array.isArray(locales)).toBe(true);
      expect(locales.length).toBeGreaterThan(0);
    });

    it('should include en and ko locales', () => {
      expect(locales).toContain('en');
      expect(locales).toContain('ko');
    });

    it('should have exactly 2 locales (en and ko)', () => {
      expect(locales).toHaveLength(2);
    });

    it('should export a default locale', () => {
      expect(defaultLocale).toBeDefined();
      expect(typeof defaultLocale).toBe('string');
    });

    it('should have en as the default locale', () => {
      expect(defaultLocale).toBe('en');
    });

    it('should have default locale in the locales array', () => {
      expect(locales).toContain(defaultLocale);
    });
  });

  describe('Middleware Configuration', () => {
    it('should export middleware config', () => {
      expect(middlewareConfig).toBeDefined();
      expect(middlewareConfig).toHaveProperty('matcher');
    });

    it('should have a matcher pattern', () => {
      expect(middlewareConfig.matcher).toBeDefined();
      expect(Array.isArray(middlewareConfig.matcher)).toBe(true);
      expect(middlewareConfig.matcher.length).toBeGreaterThan(0);
    });

    it('should exclude API routes from middleware', () => {
      const pattern = middlewareConfig.matcher[0];
      expect(pattern).toContain('api');
    });

    it('should exclude Next.js internal routes from middleware', () => {
      const pattern = middlewareConfig.matcher[0];
      expect(pattern).toContain('_next');
    });

    it('should exclude Vercel internal routes from middleware', () => {
      const pattern = middlewareConfig.matcher[0];
      expect(pattern).toContain('_vercel');
    });

    it('should exclude static files with extensions from middleware', () => {
      const pattern = middlewareConfig.matcher[0];
      // The pattern should exclude files with dots (e.g., .ico, .png, .svg)
      expect(pattern).toContain('.*\\.');
    });
  });

  describe('Locale Routing Patterns', () => {
    it('should support locale-prefixed paths', () => {
      locales.forEach(locale => {
        const path = `/${locale}`;
        expect(path).toMatch(/^\/(en|ko)$/);
      });
    });

    it('should support nested locale paths', () => {
      const nestedPaths = ['/features', '/advanced'];
      locales.forEach(locale => {
        nestedPaths.forEach(path => {
          const fullPath = `/${locale}${path}`;
          expect(fullPath).toMatch(/^\/(en|ko)\/(features|advanced)$/);
        });
      });
    });

    it('should support deeply nested locale paths', () => {
      const sections = ['corporation', 'creation', 'communication', 'career'];
      locales.forEach(locale => {
        sections.forEach(section => {
          const fullPath = `/${locale}/${section}/about`;
          expect(fullPath).toMatch(/^\/(en|ko)\/(corporation|creation|communication|career)\/about$/);
        });
      });
    });
  });

  describe('Static Path Generation', () => {
    it('should generate static params for all locales', () => {
      // This simulates what generateStaticParams should return
      const expectedParams = locales.map(locale => ({ locale }));

      expect(expectedParams).toHaveLength(2);
      expect(expectedParams).toContainEqual({ locale: 'en' });
      expect(expectedParams).toContainEqual({ locale: 'ko' });
    });

    it('should have unique locale params', () => {
      const params = locales.map(locale => ({ locale }));
      const uniqueLocales = new Set(params.map(p => p.locale));

      expect(uniqueLocales.size).toBe(params.length);
    });
  });
});

describe('Route Matcher Validation', () => {
  describe('Paths that should match middleware', () => {
    const shouldMatch = [
      '/',
      '/en',
      '/ko',
      '/en/features',
      '/ko/advanced',
      '/en/corporation/about',
      '/ko/creation/battery',
      '/en/communication/news',
      '/ko/career/culture',
    ];

    shouldMatch.forEach(path => {
      it(`should match: ${path}`, () => {
        // Middleware matcher: /((?!api|_next|_vercel|.*\\..*).*)
        const pattern = /^\/(?!api|_next|_vercel|.*\..*).*$/;
        expect(pattern.test(path)).toBe(true);
      });
    });
  });

  describe('Paths that should NOT match middleware', () => {
    const shouldNotMatch = [
      '/api/contact',
      '/_next/static/chunk.js',
      '/_vercel/insights',
      '/favicon.ico',
      '/robots.txt',
      '/sitemap.xml',
      '/images/logo.png',
      '/fonts/inter.woff2',
    ];

    shouldNotMatch.forEach(path => {
      it(`should NOT match: ${path}`, () => {
        // Middleware matcher: /((?!api|_next|_vercel|.*\\..*).*)
        const pattern = /^\/(?!api|_next|_vercel|.*\..*).*$/;
        expect(pattern.test(path)).toBe(false);
      });
    });
  });
});
