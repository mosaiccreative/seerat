import type { Metadata } from "next";
import { Playfair_Display, Crimson_Pro, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { JsonLd } from "@/components/seo/JsonLd";
import { structuredData } from "@/data/structured-data";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const crimson = Crimson_Pro({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://surinderseerat.com"),
  title: {
    default: "Surinder Singh Seerat — Award-Winning Punjabi Poet & Author",
    template: "%s | Surinder Seerat",
  },
  description:
    "Award-winning Punjabi ghazal master with 8 published books spanning 34 years. Explore poetry collections, the Tishnagi album, and join the literary circle.",
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
  openGraph: {
    type: "website",
    url: "https://surinderseerat.com/",
    siteName: "Surinder Singh Seerat",
    title: "Surinder Seerat | Award-Winning Punjabi Literary Voice",
    description:
      "Award-winning Punjabi ghazal master with 8 published books spanning 34 years. Exploring consciousness, longing, and the immigrant experience through verse.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Surinder Singh Seerat - The Physicist. The Writer. The Poet. - Bookshelf with 8 award-winning Punjabi poetry collections",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Surinder Seerat | Award-Winning Punjabi Literary Voice",
    description:
      "Award-winning Punjabi ghazal master. 8 books, 4 major awards, 34 years of literary excellence.",
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
