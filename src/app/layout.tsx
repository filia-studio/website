import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StructuredData } from "@/components/seo/StructuredData";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Filia Studio | Building the Future of Software",
    template: "%s | Filia Studio"
  },
  description: "Filia Studio transforms complex challenges into elegant digital solutions. We engineer reliable systems designed for growth. Expert software development, web & mobile apps, UI/UX design, and cloud infrastructure.",
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
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://withfillia.com",
    siteName: "Filia Studio",
    title: "Filia Studio | Building the Future of Software",
    description: "Filia Studio transforms complex challenges into elegant digital solutions. We engineer reliable systems designed for growth.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Filia Studio - Building the Future of Software"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Filia Studio | Building the Future of Software",
    description: "Filia Studio transforms complex challenges into elegant digital solutions. We engineer reliable systems designed for growth.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col bg-white`}
      >
        <StructuredData />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
