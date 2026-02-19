/**
 * app.ts — Central App Configuration
 *
 * Change NEXT_PUBLIC_APP_NAME and NEXT_PUBLIC_APP_URL in your .env.local
 * to rebrand the entire application in one place.
 *
 * URL resolution priority:
 *   1. NEXT_PUBLIC_APP_URL (explicit override — use for custom domains)
 *   2. VERCEL_URL (automatically set by Vercel in production)
 *   3. http://localhost:3000 (local fallback)
 */

export const appConfig = {
  /** Displayed app name throughout the UI */
  name: process.env.NEXT_PUBLIC_APP_NAME ?? "Lujo",

  /** Short tagline used in meta descriptions */
  tagline:
    process.env.NEXT_PUBLIC_APP_TAGLINE ??
    "Run your business finances without manual work",

  /** Full description for SEO / OG tags */
  description:
    process.env.NEXT_PUBLIC_APP_DESCRIPTION ??
    "Lujo gives you one place for transactions, receipts, invoices and everything around your business finances without manual work.",

  /** Canonical URL (no trailing slash) */
  url:
    process.env.NEXT_PUBLIC_APP_URL ??
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"),

  /** CDN base URL for images / assets (no trailing slash, empty = same origin) */
  cdn: process.env.NEXT_PUBLIC_CDN_URL ?? "",

  /** Contact emails */
  email: {
    support:
      process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "support@lujo.app",
    dmca: process.env.NEXT_PUBLIC_DMCA_EMAIL ?? "dmca@lujo.app",
  },

  /** Social / external links */
  social: {
    twitter:
      process.env.NEXT_PUBLIC_TWITTER_URL ?? "https://x.com/lujoapp",
    github:
      process.env.NEXT_PUBLIC_GITHUB_URL ??
      "https://github.com/johannesludloff",
    linkedin:
      process.env.NEXT_PUBLIC_LINKEDIN_URL ??
      "https://linkedin.com/company/lujo",
  },

  /** Legal entity name used in Terms / Policy pages */
  companyName:
    process.env.NEXT_PUBLIC_COMPANY_NAME ?? "Lujo Labs",
} as const;

/** Convenience re-export for backwards compat (sitemap.ts uses `baseUrl`) */
export const baseUrl = appConfig.url;
