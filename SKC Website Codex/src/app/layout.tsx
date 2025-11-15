import type { Metadata } from "next";
import {
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.skc.kr"),
  title: {
    default: "SKC Materials | ESG Material Solutions",
    template: "%s | SKC Materials",
  },
  description:
    "SKC Materials pioneers ESG-focused material innovations across secondary batteries, semiconductors, and eco-friendly chemistry.",
  keywords: [
    "SKC",
    "materials",
    "semiconductor",
    "secondary battery",
    "ESG manufacturing",
    "SKC Nexilis",
  ],
  authors: [{ name: "SKC Materials Design System Study" }],
  creator: "SKC Materials",
  publisher: "SKC Materials",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.skc.kr",
    title: "SKC Materials | ESG Material Solutions",
    description:
      "Global ESG material solutions company delivering copper foil, glass substrates, and eco-friendly chemistry breakthroughs.",
    siteName: "SKC Materials",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SKC Materials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SKC Materials | ESG Material Solutions",
    description:
      "Technology transformation by SKC changes the world across batteries, semiconductors, and eco-materials.",
    images: ["/og-image.png"],
    creator: "@skc",
  },
  alternates: {
    canonical: "https://www.skc.kr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SKC Materials",
              url: "https://www.skc.kr",
              description:
                "Global ESG material solutions company building the future of secondary batteries, semiconductors, and eco-friendly chemistry.",
              sameAs: [
                "https://www.youtube.com/@skc_global",
                "https://www.linkedin.com/company/skc",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${plexSans.variable} ${plexMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
