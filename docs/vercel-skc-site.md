# SKC Site & Giga Site — Vercel Deployment Guide

This document captures the exact Vercel configuration required for the two public properties in the monorepo.

## 1. Prerequisites

- `pnpm install` has been executed at the repo root.
- `NEXT_PUBLIC_GA_ID` (GA4 Measurement ID) is provisioned.
- `NEXT_PUBLIC_SITE_URL` points to the production hostname (e.g. `https://skc.vercel.app`).
- Optional: `NODE_OPTIONS=--max_old_space_size=4096` if builds hit memory ceilings.

## 2. Project Mapping

| Vercel Project | Git Directory | Build Command | Install Command | Output |
| -------------- | ------------- | ------------- | --------------- | ------ |
| `skc-site`     | `apps/skc-site` | `pnpm --filter @intune-labs/skc-site build` | `pnpm install --frozen-lockfile` | `.next` |
| `giga-site`    | `apps/giga-site` | `pnpm --filter giga-site build` | `pnpm install --frozen-lockfile` | `.next` |

> In the Vercel dashboard, set the “Root Directory” to the values above so the correct workspace is built.

## 3. Environment Variables

Set the following variables for *Preview* and *Production* environments:

| Name | Example | Description |
| ---- | ------- | ----------- |
| `NEXT_PUBLIC_GA_ID` | `G-1234567890` | Enables analytics once a visitor consents. Leave blank to disable GA. |
| `NEXT_PUBLIC_SITE_URL` | `https://skc.vercel.app` | Used by `sitemap.ts` and SEO metadata for canonical URLs. |
| `NODE_ENV` | `production` | Automatically set by Vercel during production builds. |

For local development, copy these into `.env.local` inside `apps/skc-site` (never commit).

## 4. Analytics & Consent

Analytics only loads after the `cookie-consent` banner records acceptance. Verify the following after deploying:

1. Visit `https://<preview-url>/en` → decline cookies → confirm GA network requests do **not** fire.
2. Accept cookies → check DevTools for `www.googletagmanager.com` requests and GA events.
3. The banner can be reopened by clearing the `cookie-consent` cookie.

## 5. Security Headers / CSP

The app ships with `Content-Security-Policy`, `Referrer-Policy`, `X-Frame-Options`, `X-Content-Type-Options`, and `Permissions-Policy` headers directly from `next.config.ts`. No additional Vercel settings are required, but if you add third-party scripts update the CSP `script-src`, `connect-src`, and `img-src` directives accordingly.

## 6. Deployment Verification Checklist

1. **Builds** – confirm `pnpm --filter @intune-labs/skc-site build` succeeds locally.
2. **Preview URLs** – validate `/en`, `/ko`, `corporation/*`, `creation/*`, `communication/*`, `career/*`.
3. **Nitro features** – dark mode, consent banner, search modal, accessibility controls.
4. **Analytics** – opt-in flow triggers GA events (or remains silent when declined).
5. **SEO files** – `https://<domain>/robots.txt` and `https://<domain>/sitemap.xml` resolve.
6. **Giga site** – run through the same list under its own preview domain.

## 7. Rollback

Because each site has its own Vercel project, failed deployments can be rolled back independently by selecting “Promote previous deployment” inside the respective project.
