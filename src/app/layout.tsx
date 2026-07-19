import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NavigationScrollManager } from "@/components/layout/NavigationScrollManager";
import { StructuredData } from "@/components/seo/StructuredData";

import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Filia Studio | Digital Systems for Ambitious Companies",
    template: "%s | Filia Studio"
  },
  description: "Filia Studio designs and builds creative websites, mobile apps, web platforms, in-house products, and open source software for ambitious companies.",
  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "UI/UX design",
    "cloud infrastructure",
    "custom software",
    "digital transformation",
    "enterprise solutions",
    "React development",
    "Next.js development",
    "software consulting",
    "IT consulting"
  ],
  authors: [{ name: "Filia Studio" }],
  creator: "Filia Studio",
  publisher: "Filia Studio",
  metadataBase: new URL("https://withfillia.com"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png" }
    ],
    shortcut: "/favicon.ico",
    apple: "/logo.png"
  },
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://withfillia.com",
    siteName: "Filia Studio",
    title: "Filia Studio | Digital Systems for Ambitious Companies",
    description: "Filia Studio designs and builds creative websites, mobile apps, web platforms, in-house products, and open source software.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Filia Studio - Digital Systems for Ambitious Companies"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Filia Studio | Digital Systems for Ambitious Companies",
    description: "Filia Studio designs and builds creative websites, mobile apps, web platforms, in-house products, and open source software.",
    images: ["/og-image.png"],
    creator: "@filiastudio"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased flex min-h-screen flex-col bg-white`}
      >
        <StructuredData />
        <NavigationScrollManager />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
