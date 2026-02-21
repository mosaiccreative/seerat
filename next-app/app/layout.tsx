import type { Metadata } from "next";
import { Playfair_Display, Crimson_Pro, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { JsonLd } from "@/components/seo/JsonLd";
import { structuredData } from "@/data/structured-data";

// Optimized font loading - reduced weights for performance
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600"],  // Reduced from 4 to 2 weights
  style: ["normal", "italic"],
  display: "swap",
});

const crimson = Crimson_Pro({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "600"],  // Reduced from 4 to 2 weights
  style: ["normal"],  // Removed italic (rarely used)
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],  // Reduced from 3 to 2 weights
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://surinderseerat.com"),
  title: {
    default: "Surinder Singh Seerat — Award-Winning Punjabi Poet & Author",
    template: "%s | Surinder Seerat",
  },
  description:
    "Discover the literary world of Surinder Singh Seerat, award-winning Punjabi ghazal master with 13 published books spanning 45 years of poetry, novels, and scholarship.",
  authors: [{ name: "Surinder Singh Seerat" }],
  keywords: [
    "Surinder Singh Seerat",
    "Punjabi poetry",
    "Punjabi poet",
    "ghazal",
    "Punjabi literature",
    "Punjabi ghazal",
    "Kirchan",
    "Chhallan",
    "Tishnagi",
    "Punjabi author",
    "contemporary Punjabi poetry",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://surinderseerat.com",
  },
  openGraph: {
    type: "website",
    url: "https://surinderseerat.com/",
    siteName: "Surinder Singh Seerat",
    title: "Surinder Singh Seerat — Award-Winning Punjabi Poet & Author",
    description:
      "Discover the literary world of Surinder Singh Seerat, award-winning Punjabi ghazal master with 13 published books spanning 45 years of poetry, novels, and scholarship.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Surinder Singh Seerat - The Physicist. The Writer. The Poet. - Bookshelf with award-winning Punjabi poetry collections",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@SurinderSeerat",
    creator: "@SurinderSeerat",
    title: "Surinder Singh Seerat — Award-Winning Punjabi Poet & Author",
    description:
      "Discover the literary world of Surinder Singh Seerat, award-winning Punjabi ghazal master with 13 published books spanning 45 years.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  other: {
    "theme-color": "#0a0a0b",
    "google-site-verification": "30sdJBmcmVv0BBECaNyDouKgJNeEYXUl7VpyIPVGapM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <JsonLd data={structuredData} />
      </head>
      <body
        className={`${playfair.variable} ${crimson.variable} ${inter.variable}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
