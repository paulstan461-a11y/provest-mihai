import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

import { Source_Serif_4, Inter, Inter as V0_Font_Inter, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _inter = V0_Font_Inter({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

const sourceSerif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif" })
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Acopvest | Acoperișuri Maramureș - Montaj, Reparații, Mansardări",
  description:
    "Servicii profesionale de acoperișuri în Maramureș și județele vecine. Montaj țiglă metalică, reparații acoperișuri, dulgherie și mansardări. 10+ ani experiență, 2000+ clienți mulțumiți. Solicită ofertă gratuită!",
  keywords:
    "acoperis maramures, montaj acoperis, reparatii acoperis, tigla metalica, dulgherie, mansardari, Acopvest, acoperis baia mare",
  openGraph: {
    title: "Acopvest | Acoperișuri Profesionale în Maramureș",
    description:
      "Montaj și reparații acoperișuri cu garanție. 10+ ani experiență în Maramureș, Satu Mare, Bistrița-Năsăud, Cluj.",
    type: "website",
    locale: "ro_RO",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://acopvest.ro",
  },
    generator: 'v0.app'
}

export const viewport = {
  themeColor: "#8B1E3F",
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
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
