"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { AnimatedSection } from "@/components/animated-section"

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    value: "0756 811 640",
    href: "tel:+40756811640",
    description: "Luni - Vineri: 07:00 - 18:00",
  },
  {
    icon: Mail,
    title: "Email",
    value: "acopvest@gmail.com",
    href: "mailto:acopvest@gmail.com",
    description: "Răspundem în 24h",
  },
  {
    icon: MapPin,
    title: "Locație",
    value: "Baia Mare, Maramureș",
    href: "#",
    description: "Deservim și județele vecine",
  },
  {
    icon: Clock,
    title: "Program",
    value: "Luni - Vineri",
    href: "#",
    description: "07:00 - 18:00",
  },
]

const zones = [
  { name: "Maramureș", cities: "Baia Mare, Sighetu Marmației, Borșa, Vișeu de Sus" },
  { name: "Satu Mare", cities: "Satu Mare, Carei, Negrești-Oaș" },
  { name: "Bistrița-Năsăud", cities: "Bistrița, Năsăud, Beclean" },
  { name: "Cluj", cities: "Cluj-Napoca, Dej, Turda, Gherla" },
  { name: "Sălaj", cities: "Zalău, Șimleu Silvaniei, Jibou" },
]

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary/50 to-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl text-balance">Contactează-ne</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Ai întrebări sau vrei o ofertă personalizată? Suntem aici să te ajutăm! Completează formularul sau sună-ne
              direct.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={info.title} animation="fade-in-up" delay={index * 100}>
                <Card className="h-full text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-6">
                    <info.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
                    <h3 className="font-serif text-lg font-semibold">{info.title}</h3>
                    {info.href !== "#" ? (
                      <a href={info.href} className="mt-1 block font-medium text-primary hover:underline">
                        {info.value}
                      </a>
                    ) : (
                      <p className="mt-1 font-medium">{info.value}</p>
                    )}
                    <p className="mt-1 text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Coverage */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <AnimatedSection animation="slide-in-left">
              <Card>
                <CardContent className="p-6 lg:p-8">
                  <h2 className="mb-6 font-serif text-2xl font-bold">Trimite-ne un Mesaj</h2>

                  {isSubmitted ? (
                    <div className="flex flex-col items-center py-12 text-center">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="mb-2 font-serif text-xl font-semibold">Mesaj Trimis cu Succes!</h3>
                      <p className="text-muted-foreground">
                        Mulțumim pentru mesaj! Te vom contacta în cel mai scurt timp posibil.
                      </p>
                      <Button className="mt-6" onClick={() => setIsSubmitted(false)}>
                        Trimite Alt Mesaj
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nume Complet *</Label>
                          <Input id="name" name="name" placeholder="Ion Popescu" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefon *</Label>
                          <Input id="phone" name="phone" type="tel" placeholder="0700 000 000" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" placeholder="email@exemplu.ro" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Localitatea</Label>
                        <Input id="location" name="location" placeholder="Baia Mare, Maramureș" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Serviciul Dorit</Label>
                        <select
                          id="service"
                          name="service"
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <option value="">Selectează serviciul</option>
                          <option value="montaj">Montaj Acoperiș Nou</option>
                          <option value="reparatii">Reparații Acoperiș</option>
                          <option value="dulgherie">Dulgherie / Șarpantă</option>
                          <option value="mansardare">Mansardare</option>
                          <option value="altele">Altele</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Mesaj *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Descrieți pe scurt proiectul dumneavoastră..."
                          rows={5}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                        {isSubmitting ? (
                          "Se trimite..."
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Trimite Mesajul
                          </>
                        )}
                      </Button>
                      <p className="text-center text-xs text-muted-foreground">
                        * Câmpuri obligatorii. Datele tale sunt în siguranță și nu vor fi partajate.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Coverage Area */}
            <AnimatedSection animation="slide-in-right" delay={200}>
              <div className="space-y-8">
                <div>
                  <h2 className="mb-4 font-serif text-2xl font-bold">Zone Deservite</h2>
                  <p className="text-muted-foreground">
                    Oferim servicii profesionale de acoperișuri în Maramureș și județele învecinate. Deplasarea pentru
                    evaluare este gratuită în aceste zone.
                  </p>
                </div>

                <div className="space-y-4">
                  {zones.map((zone, index) => (
                    <Card key={zone.name} className="transition-all duration-300 hover:shadow-md">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                          <div>
                            <h3 className="font-serif font-semibold">{zone.name}</h3>
                            <p className="text-sm text-muted-foreground">{zone.cities}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="mb-2 font-serif text-lg font-semibold">Evaluare Gratuită</h3>
                    <p className="text-sm text-muted-foreground">
                      Oferim evaluare și consultanță gratuită la fața locului pentru toate proiectele din zonele noastre
                      de acoperire. Sună acum pentru a programa o vizită!
                    </p>
                    <Button asChild className="mt-4 bg-transparent" variant="outline">
                      <a href="tel:+40756811640" className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        0756 811 640
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold text-primary-foreground lg:text-4xl text-balance">
              Pregătit să Începem?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Nu mai aștepta! Contactează-ne acum pentru o ofertă personalizată și începe proiectul tău de acoperiș cu
              profesioniști de încredere.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+40756811640" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Sună Acum: 0756 811 640
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
