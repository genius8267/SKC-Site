import type { Metadata } from "next";
import { Inter, Fragment_Mono } from "next/font/google";
<<<<<<< HEAD
import { ElevenLabsProvider } from "@/components/providers/ElevenLabsProvider";
=======
>>>>>>> db85ad47a1502018f5973120911d75786935b0d4
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
<<<<<<< HEAD
  metadataBase: new URL("https://intunelabs.ai"),
  title: {
    default: "Intune Labs | AI agents for enterprise support",
    template: "%s | Intune Labs",
  },
  description:
    "Intune Labs builds AI agents for enterprises that manage complex workflows, deploy rapidly, and deliver human-like support at scale.",
=======
  metadataBase: new URL("https://giga.ai"),
  title: {
    default: "Giga | AI agents for enterprise support",
    template: "%s | Giga",
  },
  description:
    "Giga builds AI agents for enterprises that manage complex workflows, deploy rapidly, and deliver human-like support at scale.",
>>>>>>> db85ad47a1502018f5973120911d75786935b0d4
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
<<<<<<< HEAD
  authors: [{ name: "Intune Labs" }],
  creator: "Intune Labs",
  publisher: "Intune Labs",
=======
  authors: [{ name: "Giga" }],
  creator: "Giga",
  publisher: "Giga",
>>>>>>> db85ad47a1502018f5973120911d75786935b0d4
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
<<<<<<< HEAD
    url: "https://intunelabs.ai",
    title: "Intune Labs | AI agents for enterprise support",
    description:
      "AI that talks like a human and handles millions of calls with on-policy precision.",
    siteName: "Intune Labs",
=======
    url: "https://giga.ai",
    title: "Giga | AI agents for enterprise support",
    description:
      "AI that talks like a human and handles millions of calls with on-policy precision.",
    siteName: "Giga",
>>>>>>> db85ad47a1502018f5973120911d75786935b0d4
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
<<<<<<< HEAD
        alt: "Intune Labs - AI agents for enterprise support",
=======
        alt: "Giga - AI agents for enterprise support",
>>>>>>> db85ad47a1502018f5973120911d75786935b0d4
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
<<<<<<< HEAD
    title: "Intune Labs | AI agents for enterprise support",
    description:
      "Deploy AI agents that handle complex workflows, faster than manual build-outs.",
    images: ["/og-image.png"],
    creator: "@intunelabs",
  },
  alternates: {
    canonical: "https://intunelabs.ai",
=======
    title: "Giga | AI agents for enterprise support",
    description:
      "Deploy AI agents that handle complex workflows, faster than manual build-outs.",
    images: ["/og-image.png"],
    creator: "@giga",
  },
  alternates: {
    canonical: "https://giga.ai",
>>>>>>> db85ad47a1502018f5973120911d75786935b0d4
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
<<<<<<< HEAD
              name: "Intune Labs",
              url: "https://intunelabs.ai",
              description:
                "AI agents for enterprise support that handle complex workflows at scale",
              sameAs: ["https://twitter.com/intunelabs", "https://linkedin.com/company/intunelabs"],
=======
              name: "Giga",
              url: "https://giga.ai",
              description:
                "AI agents for enterprise support that handle complex workflows at scale",
              sameAs: ["https://twitter.com/giga", "https://linkedin.com/company/giga"],
>>>>>>> db85ad47a1502018f5973120911d75786935b0d4
            }),
          }}
        />
      </head>
      <body
<<<<<<< HEAD
        className={`${inter.variable} ${fragmentMono.variable} antialiased`}
      >
        {children}
        <ElevenLabsProvider />
=======
        className={`${inter.variable} ${fragmentMono.variable} antialiased bg-black text-white`}
      >
        {children}
>>>>>>> db85ad47a1502018f5973120911d75786935b0d4
      </body>
    </html>
  );
}
