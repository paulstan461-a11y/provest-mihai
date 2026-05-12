import type React from "react";
import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Source_Serif_4 } from "next/font/google";

import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AppToaster } from "@/components/app-toaster";
import { JsonLd } from "@/components/json-ld";
import { FloatingContactCta } from "@/components/floating-contact-cta";
import {
  coverageCountiesOg,
  coverageCountiesSentence,
  defaultSiteKeywords,
  siteUrl,
} from "@/lib/site-config";

// Limit font weights to those used in Tailwind (performance / smaller CSS).
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "600", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:
    "Provest Acoperis | Acoperișuri România — Montaj, Reparații, Mansardări",
  description: `Montaj acoperiș, reparații acoperiș și țiglă metalică în ${coverageCountiesSentence}. Dulgherie și mansardări. Bază în Satu Mare. 10+ ani experiență, 2000+ clienți. Ofertă gratuită.`,
  keywords: defaultSiteKeywords,
  openGraph: {
    title: "Provest Acoperis | Acoperișuri profesionale în România",
    description: `Montaj și reparații acoperiș cu garanție. Acoperim ${coverageCountiesOg}.`,
    type: "website",
    locale: "ro_RO",
    url: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport = {
  // Keep browser chrome aligned with the brand accent.
  themeColor: "#D72626",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <head>
        {/* Google Ads: beforeInteractive injects into head early (matches Google’s placement guidance). */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18108989386"
          strategy="beforeInteractive"
        />
        <Script id="google-ads-gtag" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18108989386');
            // Phone conversion config (forwarding / call reporting) — keep immediately after base config.
            gtag('config', 'AW-18108989386/OrmSCKPzoqccEMr_hLtD', {
              'phone_conversion_number': '0756811640'
            });
          `}
        </Script>
        <Script id="google-ads-phone-click-tracking" strategy="beforeInteractive">
          {`
            // One delegated listener: fire conversion on tel: clicks only (not on page load).
            if (!window.__provestPhoneConversionListener) {
              window.__provestPhoneConversionListener = true;
              document.addEventListener('click', function(event) {
                var target = event.target;
                if (!target || typeof target.closest !== 'function') return;
                var phoneLink = target.closest('a[href^="tel:"]');
                if (!phoneLink || typeof window.gtag !== 'function') return;
                window.gtag('event', 'conversion', {
                  'send_to': 'AW-18108989386/OrmSCKPzoqccEMr_hLtD'
                });
              }, { passive: true });
            }
          `}
        </Script>
      </head>
      <body
        className={`${sourceSerif.variable} ${inter.variable} font-sans antialiased`}
      >
        <JsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContactCta />
        <AppToaster />
        <Analytics />
      </body>
    </html>
  );
}
