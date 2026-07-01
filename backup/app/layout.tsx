import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://www.vaksastudio.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vaksa Studio — Brand, Digital & Motion Design",
    template: "%s — Vaksa Studio",
  },
  description:
    "Vaksa Studio is an independent creative agency building brand identity, digital experience, and motion for clients who play a long game.",
  keywords: [
    "creative agency",
    "brand identity studio",
    "luxury branding agency",
    "digital design studio",
    "motion design agency",
    "Vaksa Studio",
  ],
  authors: [{ name: "Vaksa Studio" }],
  creator: "Vaksa Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Vaksa Studio",
    title: "Vaksa Studio — Brand, Digital & Motion Design",
    description:
      "An independent creative agency building brand identity, digital experience, and motion for clients who play a long game.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaksa Studio — Brand, Digital & Motion Design",
    description:
      "An independent creative agency building brand identity, digital experience, and motion for clients who play a long game.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vaksa Studio",
  url: siteUrl,
  logo: `${siteUrl}/favicon.svg`,
  description:
    "Independent creative agency specialising in brand identity, digital experience, and motion design.",
  sameAs: [
    "https://www.instagram.com/vaksastudio",
    "https://www.linkedin.com/company/vaksastudio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
