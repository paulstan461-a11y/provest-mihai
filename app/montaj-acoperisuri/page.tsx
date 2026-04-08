import Link from "next/link"
import { ArrowRight, Phone, Shield, Award, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Montaj Acoperișuri Maramureș | Acopvest - Țiglă Metalică Premium",
  description:
    "Montaj profesional acoperișuri noi cu țiglă metalică în Maramureș. Modele variate: Clasic, Gotic, Balcanic. Garanție extinsă, prețuri competitive. Solicită ofertă gratuită!",
  keywords:
    "montaj acoperis maramures, tigla metalica, acoperis nou, Acopvest, acoperis casa, montaj profesional",
}

const roofTypes = [
  {
    title: "Acoperiș în O Apă",
    description: "Soluție economică pentru anexe, garaje și construcții simple. Montaj rapid și întreținere minimă.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ProVestAcoperis-Montaj-Tabla-Cutata-1-H3rcGhd2OyZ0xaiOFsSAu26zsbi0T2.webp",
  },
  {
    title: "Acoperiș în Două Ape",
    description: "Cel mai popular tip de acoperiș pentru case. Excelent raport calitate-preț și aspect tradițional.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ProVestAcoperis-Montaj-Tabla-Cutata-2-lzdoQDqUCbkF4nU2OWpAEPpg7xOXFR.webp",
  },
  {
    title: "Acoperiș în Patru Ape",
    description: "Design elegant și protecție superioară. Ideal pentru case mai mari și construcții reprezentative.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ProVestAcoperis-Montaj-Tigla-Metalica-3-dcZCbzgX5tg5UvuOf6hHJKAhT3yiQV.webp",
  },
]

const models = [
  "Clasic",
  "Balcanic",
  "Britanic",
  "Dacic",
  "Gotic",
  "Iberic",
  "Romanic",
  "Retro Duo",
  "T8",
  "T18",
  "T35",
  "T45",
  "S18",
  "Tablă Falțuită",
  "Retropanel",
  "Hellenic",
  "Adriatic",
]

const benefits = [
  {
    icon: Shield,
    title: "Durabilitate Excepțională",
    description: "Țigla metalică rezistă 30-50 de ani cu întreținere minimă, fiind imună la mucegai și dăunători.",
  },
  {
    icon: Award,
    title: "Design Versatil",
    description: "Gamă variată de modele și culori pentru a se potrivi perfect cu stilul casei dumneavoastră.",
  },
  {
    icon: Truck,
    title: "Montaj Rapid",
    description: "Greutate redusă și sistem de prindere eficient permit montajul în timp record, fără stres.",
  },
]

const process = [
  {
    step: "1",
    title: "Consultanță",
    description: "Discutăm nevoile tale și oferim recomandări personalizate pentru tipul de acoperiș potrivit.",
  },
  {
    step: "2",
    title: "Măsurători",
    description: "Efectuăm măsurători precise la fața locului pentru calculul exact al materialelor necesare.",
  },
  {
    step: "3",
    title: "Ofertare",
    description: "Primești o ofertă detaliată cu toate materialele, manopera și termenele de execuție.",
  },
  {
    step: "4",
    title: "Execuție",
    description: "Echipa noastră montează acoperișul respectând toate standardele de calitate și siguranță.",
  },
  {
    step: "5",
    title: "Recepție",
    description: "Verificăm împreună lucrarea și îți oferim certificatul de garanție pentru liniștea ta.",
  },
]

export default function MontajAcopersuriPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary/50 to-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection animation="slide-in-left" className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Award className="h-4 w-4" />
                Montaj Profesional cu Garanție
              </div>
              <h1 className="font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl text-balance">
                Montaj <span className="text-primary">Acoperișuri</span> Noi
              </h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Construiești sau renovezi? Echipa Acopvest îți oferă montaj profesional de acoperișuri cu țiglă
                metalică de cea mai bună calitate. Alegem împreună modelul perfect pentru casa ta!
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/contact" className="flex items-center gap-2">
                    Solicită Ofertă Gratuită
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Solicită Consultanță</Link>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right" delay={200}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-lwPuST1UCW4Ul99oMXmUBeC4rIf1AU.webp"
                alt="Montaj acoperiș nou cu țiglă metalică"
                className="rounded-2xl shadow-2xl object-cover aspect-video w-full"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Roof Types */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl">Tipuri de Acoperișuri</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Montăm toate tipurile de acoperișuri, adaptate nevoilor și bugetului tău
            </p>
          </AnimatedSection>

          <div className="grid gap-8 lg:grid-cols-3">
            {roofTypes.map((type, index) => (
              <AnimatedSection key={type.title} animation="fade-in-up" delay={index * 100}>
                <Card className="group h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="overflow-hidden">
                    <img
                      src={type.image || "/placeholder.svg"}
                      alt={type.title}
                      className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-2 font-serif text-xl font-semibold">{type.title}</h3>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Models Available */}
      <section className="bg-secondary/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl">Modele Disponibile</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Oferim o gamă variată de modele de țiglă metalică pentru orice stil arhitectural
            </p>
          </AnimatedSection>

          <AnimatedSection animation="scale-in">
            <div className="flex flex-wrap justify-center gap-3">
              {models.map((model) => (
                <span
                  key={model}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:bg-primary/5"
                >
                  {model}
                </span>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-8 text-center">
            <p className="text-muted-foreground">
              Disponibile în finisaje: <strong>Lucios, Mat, Lucios 8003, Lemn, Grande Mat</strong>
            </p>
            <p className="mt-2 text-muted-foreground">
              Grosimi disponibile: <strong>0.4mm, 0.45mm, 0.5mm, 0.6mm</strong>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl">De Ce Țiglă Metalică?</h2>
            <p className="mt-4 text-lg text-muted-foreground">Avantajele unui acoperiș modern cu țiglă metalică</p>
          </AnimatedSection>

          <div className="grid gap-8 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} animation="fade-in-up" delay={index * 100}>
                <Card className="h-full text-center">
                  <CardContent className="p-8">
                    <benefit.icon className="mx-auto mb-4 h-12 w-12 text-primary" />
                    <h3 className="mb-2 font-serif text-xl font-semibold">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-secondary/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl">Procesul de Montaj</h2>
            <p className="mt-4 text-lg text-muted-foreground">De la idee la acoperiș finalizat, în 5 pași simpli</p>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 bg-border lg:block" />
            <div className="space-y-8">
              {process.map((item, index) => (
                <AnimatedSection
                  key={item.step}
                  animation={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}
                  delay={index * 100}
                >
                  <div className={`flex items-center gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                    <div className={`hidden flex-1 lg:block ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                      <h3 className="font-serif text-xl font-semibold">{item.title}</h3>
                      <p className="mt-2 text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                      {item.step}
                    </div>
                    <div className="flex-1 lg:hidden">
                      <h3 className="font-serif text-xl font-semibold">{item.title}</h3>
                      <p className="mt-2 text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="hidden flex-1 lg:block" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold text-primary-foreground lg:text-4xl text-balance">
              Pregătit pentru un Acoperiș Nou?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Contactează-ne pentru o evaluare gratuită la fața locului și o ofertă personalizată.
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
                <a href="tel:+40756811640" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  0756 811 640
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
