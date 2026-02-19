import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@midday/ui/cn";
import "@midday/ui/globals.css";
import { Provider as Analytics } from "@midday/events/client";
import type { Metadata } from "next";
import { Hedvig_Letters_Sans, Hedvig_Letters_Serif } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import type { ReactElement } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { appConfig, baseUrl } from "@/config/app";

const hedvigSans = Hedvig_Letters_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "optional",
  variable: "--font-hedvig-sans",
  preload: true,
  adjustFontFallback: true,
  fallback: ["system-ui", "arial"],
});

const hedvigSerif = Hedvig_Letters_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "optional",
  variable: "--font-hedvig-serif",
  preload: true,
  adjustFontFallback: true,
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const ogImage = appConfig.cdn
  ? `${appConfig.cdn}/opengraph-image-v1.jpg`
  : `${baseUrl}/opengraph-image.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${appConfig.tagline} | ${appConfig.name}`,
    template: `%s | ${appConfig.name}`,
  },
  description: appConfig.description,
  openGraph: {
    title: `${appConfig.tagline} | ${appConfig.name}`,
    description: appConfig.description,
    url: baseUrl,
    siteName: appConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      { url: ogImage, width: 800, height: 600 },
      { url: ogImage, width: 1800, height: 1600 },
    ],
  },
  twitter: {
    title: `${appConfig.tagline} | ${appConfig.name}`,
    description: appConfig.description,
    images: [
      { url: ogImage, width: 800, height: 600 },
      { url: ogImage, width: 1800, height: 1600 },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)" },
    { media: "(prefers-color-scheme: dark)" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: appConfig.name,
  url: baseUrl,
  logo: appConfig.cdn ? `${appConfig.cdn}/logo.png` : `${baseUrl}/logo.png`,
  sameAs: [
    appConfig.social.twitter,
    appConfig.social.github,
    appConfig.social.linkedin,
  ].filter(Boolean),
  description: appConfig.description,
};

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          {appConfig.cdn && (
            <>
              <link rel="preconnect" href={appConfig.cdn} />
              <link rel="dns-prefetch" href={appConfig.cdn} />
            </>
          )}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
            }}
          />
        </head>
        <body
          className={cn(
            `${hedvigSans.variable} ${hedvigSerif.variable} font-sans`,
            "bg-background overflow-x-hidden font-sans antialiased",
          )}
        >
          <NuqsAdapter>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              <main className="container mx-auto px-4 overflow-hidden md:overflow-visible">
                {children}
              </main>
              <Footer />
              <Analytics />
            </ThemeProvider>
          </NuqsAdapter>
        </body>
      </html>
    </ClerkProvider>
  );
}
