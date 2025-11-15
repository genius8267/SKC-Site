## Giga Site

A marketing microsite inspired by giga.ai showcasing enterprise AI agent capabilities. Built with Next.js (App Router), Tailwind CSS v4, and Framer Motion within the Intune Labs pnpm/Turbo monorepo.

### Key sections
- Hero + stat ribbon with Series A badge & KPI card
- Feature grid highlighting customization & policy tooling
- Agent Canvas builder with drag-and-drop training doc uploader
- Modality tabs (chat/voice/multi-modal) and Smart Insights dashboards
- Voice experience highlight, customer spotlight, CTA banner, and governance-focused footer

### Scripts

```bash
# Run locally with Turbo (preferred)
pnpm dev --filter giga-site

# Production build
pnpm build --filter giga-site

# Lint and typecheck
pnpm lint --filter giga-site
pnpm typecheck --filter giga-site

# Run Vitest suite (happy-path + failure-mode)
pnpm test --filter giga-site
```

### Testing philosophy
- `Hero.test.tsx` ensures the primary CTA renders (happy path)
- `DocumentDropzone.test.ts` validates file restrictions and error messaging (failure mode)
- Extend with component-level tests when adding new sections or policies

### Deployment
`pnpm build --filter giga-site` emits the optimized `.next` output consumed by Turbo. For Vercel, point the project to `apps/giga-site` and set `PNPM_HOME` along with `TURBO_TOKEN` if leveraging remote caching.

### Security & content
- No secrets live in code; runtime config flows through environment variables when wiring APIs.
- Document uploads are mocked locally—replace with signed URLs + storage service for production.
