import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://djm-tech.dev"),
  title: "DJM Tech — Blog, Projects, and Experiments",
  description: "Exploring Next.js, Rust, serverless, and data — sharing insights, tutorials, and experiments on djm-tech.dev.",
  alternates: {
    canonical: "https://djm-tech.dev",
  },
  openGraph: {
    title: "DJM Tech — Blog, Projects, and Experiments",
    description: "Exploring Next.js, Rust, serverless, and data — sharing insights, tutorials, and experiments on djm-tech.dev.",
    url: "https://djm-tech.dev",
    siteName: "DJM Tech",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@djmartin2019",  // ← replace!
    creator: "@djmartin2019",
    title: "DJM Tech — Blog, Projects, and Experiments",
    description: "Exploring Next.js, Rust, serverless, and data — sharing insights, tutorials, and experiments on djm-tech.dev.",
    images: ["/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-16x16.png",
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
};

export const viewport = {
  themeColor: "#ffffff",
  colorScheme: "light dark",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}


