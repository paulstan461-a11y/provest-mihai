import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Clock,
  Users,
  Star,
  CheckCircle,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";
import {
  businessLocality,
  coverageCounties,
  coverageCountiesSentence,
  phoneDisplay,
  phoneE164,
} from "@/lib/site-config";

const services = [
  {
    title: "Reparații Acoperișuri",
    description:
      "Identificăm și reparăm rapid orice problemă la acoperiș: infiltrații, țigle sparte, jgheaburi deteriorate.",
    href: "/reparatii-acoperisuri",
    icon: "🔧",
  },
  {
    title: "Montaj Acoperișuri",
    description:
      "Montăm acoperișuri noi cu țiglă metalică de calitate superioară, cu garanție și materiale certificate.",
    href: "/montaj-acoperisuri",
    icon: "🏠",
  },
  {
    title: "Dulgherie",
    description:
      "Construim și reparăm structuri din lemn: șarpante, grinzi, căpriori - toate la standarde înalte.",
    href: "/dulgherie",
    icon: "🪵",
  },
  {
    title: "Mansardări",
    description:
      "Transformăm podul casei într-un spațiu locuibil modern, eficient termic și estetic plăcut.",
    href: "/mansardari",
    icon: "🏗️",
  },
];

const stats = [
  { value: "10+", label: "Ani Experiență", icon: Clock },
  { value: "2000+", label: "Clienți Mulțumiți", icon: Users },
  { value: "100%", label: "Garanție Lucrări", icon: Shield },
  { value: "5", label: "Județe Acoperite", icon: Star },
];

const benefits = [
  "Echipă profesionistă cu experiență dovedită",
  "Materiale de calitate superioară, certificate",
  "Garanție extinsă pentru toate lucrările",
  "Prețuri transparente, fără costuri ascunse",
  "Consultanță gratuită și evaluare la fața locului",
  "Program flexibil, adaptabil nevoilor clientului",
];

/** Hero image (LCP): remote blob; dimensions stabilize layout. */
const heroImageSrc =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-6vuLqn5RviUNYJsDCNhOJtKCq50GMF.webp";
const secondaryImageSrc =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13-MGZSoW9nnDbjkjn0POb7GvT4534pfo.webp";

export default function HomePage() {
  return (
    <>
      {/* Hero: immediate sections so LCP image is not hidden behind opacity-0. */}
      <section className="relative overflow-hidden bg-secondary py-16 lg:py-24">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-5" />
        <div className="container relative mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection
              animation="slide-in-left"
              immediate
              className="space-y-6 rounded-2xl border border-white/10 bg-secondary p-6 text-secondary-foreground lg:p-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                <Shield className="h-4 w-4" />
                Peste 10 ani — montaj acoperiș și țiglă metalică
              </div>
              <h1 className="font-serif text-4xl font-bold leading-tight text-secondary-foreground sm:text-5xl lg:text-6xl text-balance">
                Acoperișuri de <span className="text-primary">Încredere</span>{" "}
                pentru Casa Ta
              </h1>
              <p className="text-lg text-secondary-foreground/80 lg:text-xl text-pretty">
                Echipa Provest Acoperis din {businessLocality} — specialiști în
                montaj acoperiș, reparații acoperiș, dulgherie și mansardări.
                Peste 2000 de clienți mulțumiți; lucrăm în{" "}
                {coverageCountiesSentence}.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  asChild
                  className="bg-primary hover:bg-primary/90"
                >
                  <a
                    href={`tel:${phoneE164}`}
                    data-cta="hero-call"
                    data-phone={phoneE164}
                    className="flex items-center gap-2"
                  >
                    <Phone className="h-5 w-5" />
                    Sună Instant
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact" className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Cere Ofertă
                  </Link>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection
              animation="slide-in-right"
              immediate
              delay={0}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-2xl bg-linear-to-br from-primary/20 to-accent/20 blur-2xl" />
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={heroImageSrc}
                  alt="Montaj profesional acoperiș cu țiglă metalică — Provest Acoperis"
                  width={1200}
                  height={900}
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-card p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">2000+</p>
                    <p className="text-sm text-muted-foreground">
                      Clienți Mulțumiți
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-primary/20 bg-primary py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <AnimatedSection
                key={stat.label}
                animation="fade-in-up"
                delay={index * 100}
              >
                <div className="text-center">
                  <stat.icon className="mx-auto mb-3 h-8 w-8 text-primary-foreground" />
                  <p className="font-serif text-3xl font-bold text-primary-foreground lg:text-4xl">
                    {stat.value}
                  </p>
                  <p className="text-sm text-primary-foreground/85">
                    {stat.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl text-balance">
              Serviciile Noastre
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Montaj acoperiș, reparații acoperiș și întreținere — soluții
              complete pentru locuința ta.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <AnimatedSection
                key={service.title}
                animation="scale-in"
                delay={index * 100}
              >
                <Card className="group h-full border-white/10 bg-secondary text-secondary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="flex h-full flex-col p-6">
                    <span className="mb-4 text-4xl">{service.icon}</span>
                    <h3 className="mb-2 font-serif text-xl font-semibold">
                      {service.title}
                    </h3>
                    <p className="mb-4 flex-1 text-sm text-secondary-foreground/80">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                    >
                      Află mai multe
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection animation="slide-in-left">
              <div className="relative mx-auto aspect-3/4 w-full max-w-md overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={secondaryImageSrc}
                  alt="Echipa Provest Acoperis la montaj acoperiș"
                  width={900}
                  height={1200}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right" delay={200}>
              <h2 className="font-serif text-3xl font-bold text-secondary-foreground lg:text-4xl text-balance">
                De Ce Să Alegi Provest Acoperis?
              </h2>
              <p className="mt-4 text-lg text-secondary-foreground/80">
                Peste 10 ani în construcții și acoperișuri — partener de
                încredere pentru montaj țiglă metalică și reparații în{" "}
                {coverageCountiesSentence}.
              </p>
              <ul className="mt-6 space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-secondary-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/contact">Solicită Ofertă Gratuită</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Coverage Area Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl">
              Zone de Acoperire
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Servicii de acoperiș și țiglă metalică în{" "}
              {coverageCountiesSentence}
            </p>
          </AnimatedSection>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {coverageCounties.map((city, index) => (
              <AnimatedSection
                key={city}
                animation="fade-in-up"
                delay={index * 100}
              >
                <Card className="border-white/10 bg-secondary text-center text-secondary-foreground transition-all duration-300 hover:border-primary hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-xl">📍</span>
                    </div>
                    <h3 className="font-serif text-lg font-semibold">{city}</h3>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold text-primary-foreground lg:text-4xl text-balance">
              Ai Nevoie de un Acoperiș Nou sau de Reparații?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Contactează-ne pentru evaluare gratuită la fața locului și ofertă
              personalizată.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact" className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Solicită Ofertă Gratuită
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <a
                  href={`tel:${phoneE164}`}
                  className="flex items-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  {phoneDisplay}
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
