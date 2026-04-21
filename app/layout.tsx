import type React from "react"
import type { Metadata } from "next"
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
