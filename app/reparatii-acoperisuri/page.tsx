import Image from "next/image"
import Link from "next/link"
import { CheckCircle, AlertTriangle, Clock, Shield, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import type { Metadata } from "next"
import {
  coverageCountiesOg,
  coverageCountiesSentence,
  phoneDisplay,
  phoneE164,
} from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Reparații Acoperișuri România | Acopvest — Intervenții Rapide",
  description: `Reparații acoperiș profesionale în ${coverageCountiesSentence}: infiltrații, țiglă deteriorată, jgheaburi. Intervenții rapide, garanție. Sună acum!`,
  keywords: `reparații acoperiș, infiltrații acoperiș, jgheaburi, țiglă metalică, Acopvest, ${coverageCountiesOg}`,
}

const problems = [
  {
    title: "Infiltrații de Apă",
    description: "Identificăm sursa infiltrațiilor și le remediem profesional, protejând structura casei de degradare.",
    icon: "💧",
  },
  {
    title: "Țigle Deteriorate",
    description:
      "Înlocuim țiglele sparte, fissurate sau lipsă cu modele identice sau compatibile pentru aspect uniform.",
    icon: "🔨",
  },
  {
    title: "Jgheaburi și Burlane",
    description: "Reparăm sau înlocuim sistemul pluvial pentru evacuarea corectă a apei de pe acoperiș.",
    icon: "🌧️",
  },
  {
    title: "Coamă și Borduri",
    description: "Refacem coama acoperișului și bordurile pentru o etanșare perfectă la intersecții.",
    icon: "🏠",
  },
  {
    title: "Izolație Deteriorată",
    description: "Reparăm sau înlocuim izolația termică și hidroizolația pentru eficiență energetică maximă.",
    icon: "🧱",
  },
  {
    title: "Șarpantă Afectată",
    description: "Consolidăm sau înlocuim elementele de șarpantă afectate de umezeală sau dăunători.",
    icon: "🪵",
  },
]

const process = [
  {
    step: "1",
    title: "Evaluare Gratuită",
    description: "Venim la fața locului pentru a evalua problema și a identifica soluția optimă.",
  },
  {
    step: "2",
    title: "Ofertă Detaliată",
    description: "Primești o ofertă transparentă cu toate costurile incluse, fără surprize.",
  },
  {
    step: "3",
    title: "Execuție Rapidă",
    description: "Intervenim prompt cu echipe specializate și materiale de calitate.",
  },
  {
    step: "4",
    title: "Garanție",
    description: "Oferim garanție pentru lucrările efectuate și suport post-intervenție.",
  },
]

const urgentSigns = [
  "Pete de umezeală pe tavane sau pereți",
  "Mucegai în zona mansardei sau podului",
  "Țigle vizibil deteriorate sau lipsă",
  "Jgheaburi ruginite sau desprins de clădire",
  "Facturi mari la încălzire (izolație defectă)",
  "Zgomote neobișnuite când bate vântul",
]

export default function ReparatiiAcopersuriPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection animation="slide-in-left" immediate className="space-y-6 rounded-2xl border border-white/10 bg-secondary p-6 text-secondary-foreground lg:p-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                <AlertTriangle className="h-4 w-4" />
                Intervenții Rapide în 24-48h
              </div>
              <h1 className="font-serif text-4xl font-bold leading-tight text-secondary-foreground sm:text-5xl text-balance">
                Reparații <span className="text-primary">Acoperișuri</span> Profesionale
              </h1>
              <p className="text-lg text-secondary-foreground/80 text-pretty">
                Infiltrații? Țigle sparte? Jgheaburi deteriorate? Echipa Acopvest intervine rapid pentru a
                proteja casa ta de intemperii. Oferim diagnostic gratuit și soluții durabile cu garanție.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                  <a href={`tel:${phoneE164}`} className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Sună pentru Urgențe
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Solicită Evaluare Gratuită</Link>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection
              animation="slide-in-right"
              immediate
              className="relative aspect-4/3 w-full overflow-hidden rounded-2xl shadow-2xl"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ProVestAcoperis-Montaj-Tigla-Ceramica-5-cKLVtGu1mhs070U8kCTpBLR2s2WbJv.webp"
                alt="Reparații acoperiș profesionale — Acopvest"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-secondary-foreground lg:text-4xl">Ce Probleme Rezolvăm?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Avem experiență în rezolvarea tuturor tipurilor de probleme ale acoperișurilor
            </p>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem, index) => (
              <AnimatedSection key={problem.title} animation="fade-in-up" delay={index * 100}>
                <Card className="h-full border-white/10 bg-secondary text-secondary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-6">
                    <span className="mb-4 inline-block text-4xl">{problem.icon}</span>
                    <h3 className="mb-2 font-serif text-xl font-semibold">{problem.title}</h3>
                    <p className="text-sm text-secondary-foreground/80">{problem.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection animation="slide-in-left">
              <AlertTriangle className="mb-4 h-12 w-12 text-primary" />
              <h2 className="font-serif text-3xl font-bold text-secondary-foreground lg:text-4xl text-balance">
                Semne că Ai Nevoie de Reparații Urgente
              </h2>
              <p className="mt-4 text-lg text-secondary-foreground/80">
                Nu ignora aceste semne! O intervenție rapidă poate preveni daune majore și costuri mult mai mari.
              </p>
              <ul className="mt-6 space-y-3">
                {urgentSigns.map((sign, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-secondary-foreground">{sign}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection
              animation="slide-in-right"
              delay={200}
              className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-xl"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ProVestAcoperis-Montaj-Tigla-Ceramica-3-GbpVlh8hPbJRAWxesTgRtXJwDpewbw.webp"
                alt="Acoperiș în condiții de iarnă — inspecție și reparații"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-secondary-foreground lg:text-4xl">Cum Lucrăm?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Proces simplu și transparent de la evaluare până la finalizare
            </p>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <AnimatedSection key={item.step} animation="scale-in" delay={index * 100}>
                <div className="relative text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    {item.step}
                  </div>
                  <h3 className="mb-2 font-serif text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  {index < process.length - 1 && (
                    <ArrowRight className="absolute -right-3 top-8 hidden h-6 w-6 text-primary lg:block" />
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            <AnimatedSection animation="fade-in-up">
              <Card className="h-full border-primary/20 bg-primary text-center text-primary-foreground">
                <CardContent className="p-8">
                  <Clock className="mx-auto mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-2 font-serif text-xl font-semibold">Intervenție Rapidă</h3>
                  <p className="text-primary-foreground/90">
                    În cazul urgențelor, intervenim în 24-48 de ore pentru a preveni daune suplimentare.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={100}>
              <Card className="h-full border-primary/20 bg-primary text-center text-primary-foreground">
                <CardContent className="p-8">
                  <Shield className="mx-auto mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-2 font-serif text-xl font-semibold">Garanție Lucrări</h3>
                  <p className="text-primary-foreground/90">
                    Toate lucrările de reparații beneficiază de garanție, pentru liniștea dumneavoastră.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={200}>
              <Card className="h-full border-primary/20 bg-primary text-center text-primary-foreground">
                <CardContent className="p-8">
                  <CheckCircle className="mx-auto mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-2 font-serif text-xl font-semibold">Materiale Certificate</h3>
                  <p className="text-primary-foreground/90">
                    Folosim doar materiale de calitate superioară, certificate și cu garanție de la producător.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold text-primary-foreground lg:text-4xl text-balance">
              Ai Probleme cu Acoperișul?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Nu aștepta până devine mai grav! Sună acum pentru o evaluare gratuită și o soluție rapidă.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <a href={`tel:${phoneE164}`} className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  {phoneDisplay}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <Link href="/contact">Solicită Evaluare Gratuită</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
