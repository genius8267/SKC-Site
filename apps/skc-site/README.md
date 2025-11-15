# SKC Corporate Website - Next.js

Modern corporate website for SKC built with Next.js 16, Framer Motion, and Tailwind CSS.

## 🎨 Design Philosophy

**"Corporate Glassmorphism"** - Merging SKC's professional corporate identity with modern glassmorphism effects:

- **SKC brand colors** (#E00529 red, #E67525 orange)
- **Giga-site animations** (Framer Motion scroll effects)
- **Dark glassmorphism** background with gradient blobs
- **Premium interactions** (hover effects, smooth transitions)

## 🚀 Tech Stack

- **Next.js 16.0.3** - App Router with React Server Components
- **React 19.2.0** - Latest React with RSC
- **TypeScript** - Strict type safety
- **Framer Motion 12.23.24** - Premium animations
- **Tailwind CSS v4** - Utility-first styling
- **Vitest** - Unit & component testing

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Homepage (composes all sections)
│   └── globals.css         # Design system + Tailwind
├── components/
│   ├── layout/
│   │   ├── SiteHeader.tsx  # Fixed header with nav
│   │   └── SiteFooter.tsx  # Footer with links
│   └── sections/
│       ├── Hero.tsx        # Hero with animated blobs
│       ├── StatsRibbon.tsx # Company stats (4 cards)
│       ├── ProductsSection.tsx  # 3 product categories
│       └── NewsSection.tsx      # Latest news (3 articles)
├── data/
│   └── homepage.ts         # TypeScript data exports
└── hooks/
    └── useInView.ts        # IntersectionObserver hook
```

## 🎯 Features

### ✅ Implemented (Homepage Proof-of-Concept)

- **Animated Hero** - Gradient blobs, scroll indicator
- **Stats Ribbon** - 4 animated stat cards (1976, 2,910 employees, etc.)
- **Product Showcase** - 3 categories (Battery, Semiconductor, Eco-friendly)
- **News Section** - 3 latest articles with category pills
- **Fixed Header** - Glassmorphism on scroll
- **Footer** - Multi-column navigation
- **Scroll Animations** - All sections fade in on scroll
- **Hover Effects** - Cards lift, borders glow
- **Responsive** - Mobile, tablet, desktop

### 🔮 Planned Features

- Multi-page routing (56+ pages)
- Search functionality
- News filtering by category
- Contact form
- Image optimization
- SEO metadata per page
- Analytics integration
- Performance optimization

## 🛠️ Development

### Install Dependencies

```bash
cd apps/skc-site
pnpm install
```

### Run Development Server

```bash
pnpm dev
```

Visit http://localhost:3002

### Build for Production

```bash
pnpm build
pnpm start
```

### Run Tests

```bash
pnpm test
pnpm test:coverage
```

### Type Check

```bash
pnpm typecheck
```

## 🎨 Design System

### Colors

```css
--skc-red: #e00529           /* Primary brand */
--skc-orange: #e67525         /* Secondary brand */
--accent-primary: #0099ff     /* Links, CTAs */
--accent-secondary: #66ffe4   /* Highlights */
--foreground: #f9f9f9         /* Text */
--text-secondary: #8f9ba8     /* Muted text */
--background: #0a0b0f         /* Dark base */
```

### Typography

```css
--font-size-xs: 0.75rem      /* 12px */
--font-size-sm: 0.875rem     /* 14px */
--font-size-base: 1rem       /* 16px */
--font-size-lg: 1.125rem     /* 18px */
--font-size-xl: 1.25rem      /* 20px */
--font-size-2xl: 1.5rem      /* 24px */
--font-size-3xl: 1.875rem    /* 30px */
--font-size-4xl: 2.25rem     /* 36px */
--font-size-5xl: 3rem        /* 48px */
--font-size-6xl: 3.75rem     /* 60px */
```

### Spacing

4px increments: `--space-1` (4px) through `--space-32` (128px)

### Components

```css
.glass-card            /* Glassmorphism card */
.pill                  /* Pill-shaped badge */
.section-shell         /* Max-width container */
.text-gradient-skc     /* SKC brand gradient */
```

## 🧩 Shadcn MCP + ElevenLabs Registry

We use the Shadcn CLI (via MCP) as the component workbench so new UI building blocks always align with the design system and the static `SK Website Test` reference.

- `components.json` now exposes both the default `@shadcn` registry and the ElevenLabs registry (`@elevenlabs-ui`) so MCP tooling can fetch either design language.
- Run `pnpm dlx shadcn@latest view @elevenlabs-ui` from `apps/skc-site` to browse the catalog that mirrors our SKC layout motifs (hero clusters, glass cards, split sections, etc.).
- Add components with the registry flag, for example:

  ```bash
  pnpm dlx shadcn@latest add hero-split --registry @elevenlabs-ui
  pnpm dlx shadcn@latest add stats-grid --registry @elevenlabs-ui
  ```

- Replace the component slugs above with whichever entries you discovered while running the `view` command.
- Imported files should stay under `src/components/ui` so they can be composed inside the existing `Hero`, `StatsRibbon`, and `ProductsSection` sections without breaking locale-aware routing.
- `src/components/ui` already contains SKC-flavored wrappers (`SkcHeroPanel`, `SkcStatsGrid`, `SkcProductShowcase`, `SkcNewsList`) that were modeled after the ElevenLabs registry blueprints and the static “SK Website Test” prototype—reuse these when assembling new pages.
- If MCP is not available, you can still inspect the ElevenLabs blueprints manually with `pnpm dlx shadcn@latest view @elevenlabs-ui`.

After pulling a component, map its tokens to the CSS custom properties defined above (e.g., set accent and surface colors to `var(--skc-red)` / `var(--glass)` and use the spacing scales from the SK Website Test docs). This keeps parity between the static HTML prototype and the dynamic Next.js experience.

## 📊 Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 95+ |
| First Contentful Paint | < 1.5s |
| Time to Interactive | < 3s |
| Cumulative Layout Shift | < 0.1 |

## 🔄 Migration from Express/EJS

This Next.js version replaces the Express + EJS prototype with:

✅ Better performance (static generation, image optimization)
✅ Type safety (TypeScript throughout)
✅ Modern animations (Framer Motion)
✅ Better DX (hot reload, error overlay)
✅ Scalability (file-based routing, RSC)

## 📝 Next Steps

1. **Multi-page routing** - Add all 56+ pages
2. **Content management** - Connect to CMS or database
3. **Testing** - Write tests for all components
4. **SEO** - Add metadata, sitemap, robots.txt
5. **Analytics** - Google Analytics or similar
6. **Deployment** - Vercel or custom hosting

## 🎯 Deployment

### Vercel (Recommended)

```bash
pnpm build
vercel --prod
```

### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile
COPY . .
RUN pnpm build
EXPOSE 3002
CMD ["pnpm", "start"]
```

## 📄 License

Proprietary - SKC Corporation

---

**Built with ❤️ using Next.js 16 + Framer Motion**
