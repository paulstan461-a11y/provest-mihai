import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Phone, ArrowRight, TreePine } from "lucide-react"
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
  title: "Dulgherie Acoperiș | Acopvest — Șarpante și Structuri Lemn",
  description: `Dulgherie și șarpante în ${coverageCountiesSentence}. Căpriori, grinzi, lemn de calitate. Solicită ofertă!`,
  keywords: `dulgherie, șarpantă acoperiș, structură lemn, căpriori, grinzi, Acopvest, ${coverageCountiesOg}`,
}

const services = [
  {
    title: "Construcție Șarpante Noi",
    description:
      "Proiectăm și executăm șarpante complete pentru construcții noi, respectând toate normele tehnice și dorințele clientului.",
    icon: "🏗️",
  },
  {
    title: "Reparații Șarpante",
    description: "Consolidăm și reparăm șarpante existente afectate de umezeală, dăunători sau uzură în timp.",
    icon: "🔧",
  },
  {
    title: "Înlocuire Căpriori",
    description: "Înlocuim căpriorii deteriorați cu piese noi din lemn tratat, asigurând integritatea structurală.",
    icon: "🪵",
  },
  {
    title: "Tratament Lemn",
    description: "Aplicăm tratamente profesionale împotriva ciupercilor, mucegaiului și insectelor xilofage.",
    icon: "🛡️",
  },
  {
    title: "Modificări Structurale",
    description: "Realizăm modificări pentru lucarne, ferestre de mansardă sau schimbări de design.",
    icon: "📐",
  },
  {
    title: "Consultanță Tehnică",
    description: "Oferim evaluări și recomandări pentru starea structurii de lemn a acoperișului tău.",
    icon: "📋",
  },
]

const woodTypes = [
  {
    name: "Brad",
    description: "Lemn ușor și rezistent, ideal pentru majoritatea șarpantelor standard.",
  },
  {
    name: "Molid",
    description: "Excelent raport calitate-preț, foarte utilizat în construcția de acoperișuri.",
  },
  {
    name: "Stejar",
    description: "Durabilitate maximă pentru structuri premium și proiecte pretențioase.",
  },
  {
    name: "Pin",
    description: "Rezistent la umezeală, potrivit pentru zone cu climat mai umed.",
  },
]

const advantages = [
  "Lemn de calitate superioară, uscat și tratat",
  "Meșteri dulgheri cu peste 10 ani experiență",
  "Respectarea normativelor de construcție",
  "Calcul structural precis pentru siguranță maximă",
  "Garanție extinsă pentru toate lucrările",
  "Prețuri competitive și transparente",
]

export default function DulgheriePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection animation="slide-in-left" immediate className="space-y-6 rounded-2xl border border-white/10 bg-secondary p-6 text-secondary-foreground lg:p-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                <TreePine className="h-4 w-4" />
                Meșteșug tradițional pentru acoperișul tău
              </div>
              <h1 className="font-serif text-4xl font-bold leading-tight text-secondary-foreground sm:text-5xl text-balance">
                Servicii de <span className="text-primary">Dulgherie</span> Profesională
              </h1>
              <p className="text-lg text-secondary-foreground/80 text-pretty">
                Șarpante, căpriori și grinzi în {coverageCountiesSentence}. Lemn de calitate, meșteri experimentați,
                tehnici moderne.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/contact" className="flex items-center gap-2">
                    Solicită Ofertă
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={`tel:${phoneE164}`} className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Sună Acum
                  </a>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection
              animation="slide-in-right"
              immediate
              className="relative aspect-4/3 w-full overflow-hidden rounded-2xl shadow-2xl"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-fYGljaXYVF3Jp7yi5N8sob24CvFey6.webp"
                alt="Dulgherie profesională — șarpantă lemn pentru acoperiș"
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

      {/* Services */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-secondary-foreground lg:text-4xl">Servicii de Dulgherie</h2>
            <p className="mt-4 text-lg text-muted-foreground">De la construcții noi la reparații și întreținere</p>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} animation="fade-in-up" delay={index * 100}>
                <Card className="h-full border-white/10 bg-secondary text-secondary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-6">
                    <span className="mb-4 inline-block text-4xl">{service.icon}</span>
                    <h3 className="mb-2 font-serif text-xl font-semibold">{service.title}</h3>
                    <p className="text-sm text-secondary-foreground/80">{service.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Wood Types */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-secondary-foreground lg:text-4xl">Tipuri de Lemn Utilizat</h2>
            <p className="mt-4 text-lg text-secondary-foreground/80">
              Lucrăm doar cu lemn de calitate superioară, uscat corespunzător
            </p>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {woodTypes.map((wood, index) => (
              <AnimatedSection key={wood.name} animation="scale-in" delay={index * 100}>
                <Card className="h-full border-white/10 bg-secondary text-center text-secondary-foreground">
                  <CardContent className="p-6">
                    <TreePine className="mx-auto mb-4 h-12 w-12 text-primary" />
                    <h3 className="mb-2 font-serif text-xl font-semibold">{wood.name}</h3>
                    <p className="text-sm text-secondary-foreground/80">{wood.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection animation="slide-in-left" className="mx-auto max-w-md">
              <div className="relative aspect-3/4 w-full overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-zShBiZKpiKtCvWlom2Ev4vHakbauJQ.webp"
                  alt="Structură lemn acoperiș — dulgherie Acopvest"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right" delay={200}>
              <h2 className="font-serif text-3xl font-bold text-secondary-foreground lg:text-4xl text-balance">
                De Ce Să Alegi Dulgherii Noștri?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Combinăm experiența tradițională cu tehnicile moderne pentru rezultate de excepție.
              </p>
              <ul className="mt-6 space-y-3">
                {advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-secondary-foreground">{advantage}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/contact">Contactează-ne</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold text-primary-foreground lg:text-4xl text-balance">
              Ai Nevoie de Lucrări de Dulgherie?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Contactează-ne pentru o evaluare gratuită și o ofertă personalizată.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Solicită Ofertă Gratuită</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <a href={`tel:${phoneE164}`} className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  {phoneDisplay}
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
