import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import {
  coverageCountiesOg,
  coverageCountiesSentence,
  phoneDisplay,
  phoneE164,
} from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Lucrări Acoperișuri | Acopvest — Portofoliu Montaj și Reparații",
  description: `Galerie foto cu lucrări Acopvest: montaj acoperiș, țiglă metalică, dulgherie, izolație și reparații în ${coverageCountiesSentence}.`,
  keywords: `lucrări acoperiș, portofoliu acoperișuri, galerie montaj acoperiș, țiglă metalică, izolație acoperiș, dulgherie, Acopvest, ${coverageCountiesOg}`,
  alternates: { canonical: "/lucrari" },
};

type Photo = { src: string; alt: string };

type ProjectGroup = {
  id: string;
  title: string;
  description: string;
  photos: Photo[];
  /** Controls grid columns on large screens for visual balance. */
  columns?: "two" | "three" | "four";
};

/**
 * Project portfolio grouped by requested sets first, then by type (izolație, dulgherie, diverse).
 * File paths assume `public/lucrari/<file>` and rely on next/image for responsive delivery.
 */
const projectGroups: ProjectGroup[] = [
  {
    id: "frumix",
    title: "Acoperisuri",
    description:
      "Montaj acoperiș complet cu țiglă metalică — detaliu la coamă și streașină.",
    columns: "three",
    photos: [
      { src: "/lucrari/acopfrumix.jpeg", alt: "Acoperiș Frumix — imagine 1" },
      { src: "/lucrari/acopfrumix0.jpeg", alt: "Acoperiș Frumix — imagine 2" },
      { src: "/lucrari/acopfrumix2.jpeg", alt: "Acoperiș Frumix — imagine 3" },
    ],
  },
  {
    id: "mare",
    title: "Proiect complet",
    description:
      "Acoperiș amplu în două ape — montaj țiglă, sistem pluvial și accesorii.",
    columns: "three",
    photos: [
      { src: "/lucrari/acopmare1.jpeg", alt: "Acoperiș Casă Mare — imagine 1" },
      {
        src: "/lucrari/acopmare12.jpeg",
        alt: "Acoperiș Casă Mare — imagine 2",
      },
      {
        src: "/lucrari/acopmare13.jpeg",
        alt: "Acoperiș Casă Mare — imagine 3",
      },
    ],
  },
  {
    id: "Lucrare Dulgherie +",
    title: "Sistem complet",
    description: "Montaj acoperiș cu țiglă metalică pe construcție nouă.",
    columns: "two",
    photos: [
      { src: "/lucrari/acop91.jpeg", alt: "Proiect Acoperiș 9 — imagine 1" },
      { src: "/lucrari/acop92.jpeg", alt: "Proiect Acoperiș 9 — imagine 2" },
    ],
  },
  {
    id: "built",
    title: "Lucrare Dulgherie + Acoperis",
    description: "Finalizare lucrare — structură lemn și învelitoare metalică.",
    columns: "two",
    photos: [
      {
        src: "/lucrari/acopbuilt1.jpeg",
        alt: "Acoperiș construit — imagine 1",
      },
      {
        src: "/lucrari/acopbuilt2.jpeg",
        alt: "Acoperiș construit — imagine 2",
      },
    ],
  },
  {
    id: "izolatie",
    title: "Izolație Acoperiș",
    description:
      "Lucrări de izolație termică și hidroizolație pentru mansarde și poduri.",
    columns: "four",
    photos: [
      { src: "/lucrari/izolatie1.jpeg", alt: "Izolație acoperiș — imagine 1" },
      { src: "/lucrari/izolatie2.jpeg", alt: "Izolație acoperiș — imagine 2" },
      { src: "/lucrari/izolatie3.jpeg", alt: "Izolație acoperiș — imagine 3" },
      { src: "/lucrari/izolatie4.jpeg", alt: "Izolație acoperiș — imagine 4" },
    ],
  },
  {
    id: "dulgherie",
    title: "Dulgherie și Șarpantă",
    description:
      "Structuri de lemn pentru acoperiș — șarpante, căpriori, grinzi.",
    columns: "two",
    photos: [
      {
        src: "/lucrari/dulgherie1.jpeg",
        alt: "Dulgherie șarpantă — imagine 1",
      },
      {
        src: "/lucrari/dulgherie2.jpeg",
        alt: "Dulgherie șarpantă — imagine 2",
      },
    ],
  },
  {
    id: "diverse",
    title: "Alte Lucrări",
    description:
      "Selecție din intervențiile recente — montaje și reparații diverse.",
    columns: "four",
    photos: [
      { src: "/lucrari/acopdragu.jpeg", alt: "Lucrare acoperiș — Dragu" },
      {
        src: "/lucrari/acoperisfrumix21.jpeg",
        alt: "Acoperiș Frumix — detaliu 21",
      },
      {
        src: "/lucrari/tiglacasa1.jpeg",
        alt: "Țiglă casă — lucrare finalizată",
      },
      {
        src: "/lucrari/WhatsApp Image 2026-04-09 at 2.45.55 PM.jpeg",
        alt: "Lucrare acoperiș — fotografie din șantier",
      },
    ],
  },
];

/** Maps the friendly column key to responsive Tailwind grid classes. */
const columnClasses: Record<NonNullable<ProjectGroup["columns"]>, string> = {
  two: "sm:grid-cols-2",
  three: "sm:grid-cols-2 lg:grid-cols-3",
  four: "sm:grid-cols-2 lg:grid-cols-4",
};

export default function LucrariPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection
            immediate
            className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-secondary p-6 text-center text-secondary-foreground lg:p-8"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-wide text-primary">
              Portofoliu Acopvest
            </p>
            <h1 className="font-serif text-4xl font-bold text-secondary-foreground sm:text-5xl text-balance">
              Lucrări realizate — acoperișuri, dulgherie și izolații
            </h1>
            <p className="mt-4 text-lg text-secondary-foreground/80 text-pretty">
              Selecție din proiectele noastre recente. Fotografiile sunt grupate
              pe proiecte și tipuri de lucrări pentru o privire clară asupra
              calității execuției.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button size="lg" asChild>
                <a
                  href={`tel:${phoneE164}`}
                  data-cta="lucrari-call"
                  data-phone={phoneE164}
                  className="inline-flex items-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Sună Instant: {phoneDisplay}
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2"
                >
                  Cere Ofertă
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Galleries */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16 lg:space-y-20">
            {projectGroups.map((group, groupIndex) => (
              <AnimatedSection
                key={group.id}
                animation="fade-in-up"
                delay={Math.min(groupIndex * 50, 200)}
              >
                <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                      {group.title}
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
                      {group.description}
                    </p>
                  </div>
                  <span className="inline-flex w-fit items-center rounded-full border border-foreground/15 bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-wide text-secondary-foreground">
                    {group.photos.length}{" "}
                    {group.photos.length === 1 ? "imagine" : "imagini"}
                  </span>
                </div>

                <div
                  className={`grid gap-4 ${columnClasses[group.columns ?? "three"]}`}
                >
                  {group.photos.map((photo, index) => (
                    <figure
                      key={photo.src}
                      className="group relative overflow-hidden rounded-xl border border-foreground/10 bg-secondary shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      <div className="relative aspect-4/3 w-full overflow-hidden">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          loading={
                            groupIndex === 0 && index === 0 ? "eager" : "lazy"
                          }
                        />
                      </div>
                      <figcaption className="sr-only">{photo.alt}</figcaption>
                    </figure>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold text-primary-foreground lg:text-4xl text-balance">
              Ți-a plăcut ce ai văzut?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Spune-ne despre proiectul tău — revenim rapid cu o ofertă
              personalizată.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Solicită Ofertă Gratuită</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <a
                  href={`tel:${phoneE164}`}
                  data-cta="lucrari-cta-call"
                  data-phone={phoneE164}
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
