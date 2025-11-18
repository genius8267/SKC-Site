import type { Metadata } from "next";
import { Inter, Fragment_Mono } from "next/font/google";
import { ElevenLabsProvider } from "@/components/providers/ElevenLabsProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const fragmentMono = Fragment_Mono({
  variable: "--font-fragment-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://intunelabs.ai"),
  title: {
    default: "Intune Labs | AI agents for enterprise support",
    template: "%s | Intune Labs",
  },
  description:
    "Intune Labs builds AI agents for enterprises that manage complex workflows, deploy rapidly, and deliver human-like support at scale.",
  keywords: [
    "AI agents",
    "enterprise support",
    "customer service AI",
    "voice AI",
    "chat AI",
    "agent automation",
    "workflow automation",
    "enterprise AI",
  ],
  authors: [{ name: "Intune Labs" }],
  creator: "Intune Labs",
  publisher: "Intune Labs",
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
    url: "https://intunelabs.ai",
    title: "Intune Labs | AI agents for enterprise support",
    description:
      "AI that talks like a human and handles millions of calls with on-policy precision.",
    siteName: "Intune Labs",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Intune Labs - AI agents for enterprise support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Intune Labs | AI agents for enterprise support",
    description:
      "Deploy AI agents that handle complex workflows, faster than manual build-outs.",
    images: ["/og-image.png"],
    creator: "@intunelabs",
  },
  alternates: {
    canonical: "https://intunelabs.ai",
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
              name: "Intune Labs",
              url: "https://intunelabs.ai",
              description:
                "AI agents for enterprise support that handle complex workflows at scale",
              sameAs: ["https://twitter.com/intunelabs", "https://linkedin.com/company/intunelabs"],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${fragmentMono.variable} antialiased`}
      >
        {children}
        <ElevenLabsProvider />
      </body>
    </html>
  );
}
