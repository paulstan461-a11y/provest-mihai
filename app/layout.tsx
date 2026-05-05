import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Inter, Source_Serif_4 } from "next/font/google"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AppToaster } from "@/components/app-toaster"
import { JsonLd } from "@/components/json-ld"
import { FloatingContactCta } from "@/components/floating-contact-cta"
import {
  coverageCountiesOg,
  coverageCountiesSentence,
  defaultSiteKeywords,
  siteUrl,
} from "@/lib/site-config"

// Limit font weights to those used in Tailwind (performance / smaller CSS).
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "600", "700"],
})
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Acopvest | Acoperișuri România — Montaj, Reparații, Mansardări",
  description: `Montaj acoperiș, reparații acoperiș și țiglă metalică în ${coverageCountiesSentence}. Dulgherie și mansardări. Bază în Satu Mare. 10+ ani experiență, 2000+ clienți. Ofertă gratuită.`,
  keywords: defaultSiteKeywords,
  openGraph: {
    title: "Acopvest | Acoperișuri profesionale în România",
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
}

export const viewport = {
  // Keep browser chrome aligned with the brand accent.
  themeColor: "#D72626",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro">
      <body className={`${sourceSerif.variable} ${inter.variable} font-sans antialiased`}>
        {/* Google Ads global site tag: loads after hydration without blocking page rendering. */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-18108989386" strategy="afterInteractive" />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18108989386');
            // Google Ads call tracking config for the configured conversion label.
            gtag('config', 'AW-18108989386/OrmSCKPzoqccEMr_hLtD', {
              'phone_conversion_number': '0756811640'
            });
          `}
        </Script>
        <Script id="google-ads-phone-click-tracking" strategy="afterInteractive">
          {`
            // Register once to avoid duplicate conversion events on re-renders/navigation.
            if (!window.__acopvestPhoneConversionListener) {
              window.__acopvestPhoneConversionListener = true;
              document.addEventListener('click', function(event) {
                var target = event.target;
                if (!target || typeof target.closest !== 'function') return;
                // Delegate to any phone anchor so desktop/mobile variants are both tracked.
                var phoneLink = target.closest('a[href^="tel:"]');
                if (!phoneLink || typeof window.gtag !== 'function') return;
                window.gtag('event', 'conversion', {
                  'send_to': 'AW-18108989386/OrmSCKPzoqccEMr_hLtD'
                });
              }, { passive: true });
            }
          `}
        </Script>
        <JsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContactCta />
        <AppToaster />
        <Analytics />
      </body>
    </html>
  )
}
