import type { Metadata } from "next"
import type { ReactNode } from "react"
import { coverageCountiesSentence } from "@/lib/site-config"

/** SEO for client-only contact page (metadata must live in a Server Component). */
export const metadata: Metadata = {
  title: "Contact | Acopvest — Ofertă Montaj și Reparații Acoperiș",
  description: `Contactează Acopvest pentru ofertă gratuită: montaj acoperiș, reparații, dulgherie, mansardări în ${coverageCountiesSentence}.`,
}

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children
}
