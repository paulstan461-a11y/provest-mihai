"use client"

import { useState } from "react"
import { useFormSync } from "formsync"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Loader2, Shield, Timer, BadgeCheck } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { AnimatedSection } from "@/components/animated-section"
import {
  businessAddressLine,
  countyCityExamples,
  coverageCountiesSentence,
  email,
  formsyncFormId,
  phoneDisplay,
  phoneE164,
} from "@/lib/site-config"

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    value: phoneDisplay,
    href: `tel:${phoneE164}`,
    description: "Luni - Vineri: 07:00 - 18:00",
  },
  {
    icon: Mail,
    title: "Email",
    value: email,
    href: `mailto:${email}`,
    description: "Răspundem în 24h",
  },
  {
    icon: MapPin,
    title: "Locație",
    value: businessAddressLine,
    href: "#",
    description: `Deservim ${coverageCountiesSentence}`,
  },
  {
    icon: Clock,
    title: "Program",
    value: "Luni - Vineri",
    href: "#",
    description: "07:00 - 18:00",
  },
]

/** Short trust points above the fold to support form conversion. */
const trustPoints = [
  { icon: Shield, text: "Evaluare gratuită la fața locului" },
  { icon: Timer, text: "Răspuns în maxim 24 de ore" },
  { icon: BadgeCheck, text: "Fără obligații — doar ofertă clară" },
]

const zones = countyCityExamples

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  // FormSync: POST multipart form to https://api.formsync.app/v1/s/{formId} (spam protection built-in).
  const { submit, isLoading } = useFormSync({
    formId: formsyncFormId,
    onSuccess: (res) => {
      toast.success(res.message || "Mesajul a fost trimis cu succes!")
      setIsSubmitted(true)
    },
    onError: (err) => {
      toast.error(err.message || "Nu am putut trimite mesajul. Încearcă din nou sau sună-ne.")
    },
  })

  return (
    <>
      {/* Hero: conversion-focused headline + paths to form and phone */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-secondary p-6 text-center text-secondary-foreground lg:p-8">
            <p className="mb-3 text-sm font-medium uppercase tracking-wide text-primary">Ofertă gratuită acoperiș</p>
            <h1 className="font-serif text-4xl font-bold text-secondary-foreground sm:text-5xl text-balance">
              Cere ofertă pentru montaj sau reparații acoperiș
            </h1>
            <p className="mt-4 text-lg text-secondary-foreground/80 text-pretty">
              Completează formularul de mai jos sau sună-ne direct — revenim rapid cu o estimare, fără costuri
              ascunse.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <a href="#cere-oferta">Completează formularul</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                <a href={`tel:${phoneE164}`} className="inline-flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Sună acum: {phoneDisplay}
                </a>
              </Button>
            </div>
            <ul className="mt-10 flex flex-col gap-3 text-left sm:mx-auto sm:max-w-xl sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
              {trustPoints.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2 text-sm text-secondary-foreground/80">
                  <Icon className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={info.title} animation="fade-in-up" delay={index * 100}>
                <Card className="h-full border-white/10 bg-secondary text-center text-secondary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
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
                    <p className="mt-1 text-sm text-secondary-foreground/80">{info.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Form + coverage: anchor id for deep links and future ads */}
      <section id="cere-oferta" className="scroll-mt-24 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* FormSync-powered form */}
            <AnimatedSection animation="slide-in-left">
              <Card className="border-white/10 bg-secondary text-secondary-foreground shadow-md">
                <CardContent className="p-6 lg:p-8">
                  <h2 className="mb-1 font-serif text-2xl font-bold">Solicită oferta gratuită</h2>
                  <p className="mb-6 text-sm text-secondary-foreground/80">
                    Lasă-ne datele de contact și un scurt mesaj — te contactăm pentru detalii și vizită la fața locului
                    dacă e nevoie.
                  </p>

                  {isSubmitted ? (
                    <div className="flex flex-col items-center py-12 text-center">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
                        <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="mb-2 font-serif text-xl font-semibold">Mesaj trimis cu succes</h3>
                      <p className="max-w-md text-muted-foreground">
                        Mulțumim! Am primit cererea ta și te vom contacta în cel mai scurt timp. Poți și să ne suni
                        direct dacă e urgent.
                      </p>
                      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                          Trimite alt mesaj
                        </Button>
                        <Button asChild>
                          <a href={`tel:${phoneE164}`} className="inline-flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            {phoneDisplay}
                          </a>
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={submit} className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                        <Label htmlFor="name" className="text-secondary-foreground">Nume complet *</Label>
                          <Input id="name" name="name" placeholder="Ion Popescu" autoComplete="name" required className="border-white/25 text-secondary-foreground placeholder:text-secondary-foreground/50" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-secondary-foreground">Telefon *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="0700 000 000"
                            autoComplete="tel"
                            required
                            className="border-white/25 text-secondary-foreground placeholder:text-secondary-foreground/50"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-secondary-foreground">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="email@exemplu.ro"
                          autoComplete="email"
                          className="border-white/25 text-secondary-foreground placeholder:text-secondary-foreground/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location" className="text-secondary-foreground">Localitate / județ</Label>
                        <Input id="location" name="location" placeholder={businessAddressLine} autoComplete="address-level2" className="border-white/25 text-secondary-foreground placeholder:text-secondary-foreground/50" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service" className="text-secondary-foreground">Serviciul dorit</Label>
                        <select
                          id="service"
                          name="service"
                          className="w-full rounded-md border border-white/25 bg-transparent px-3 py-2 text-sm text-secondary-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Selectează serviciul
                          </option>
                          <option value="montaj">Montaj acoperiș nou</option>
                          <option value="reparatii">Reparații acoperiș</option>
                          <option value="dulgherie">Dulgherie / șarpantă</option>
                          <option value="mansardare">Mansardare</option>
                          <option value="altele">Altele</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-secondary-foreground">Mesaj *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Descrie pe scurt proiectul: suprafață, tip acoperiș, urgență…"
                          rows={5}
                          required
                          className="border-white/25 text-secondary-foreground placeholder:text-secondary-foreground/50"
                        />
                      </div>
                      <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden />
                            Se trimite…
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" aria-hidden />
                            Trimite cererea de ofertă
                          </>
                        )}
                      </Button>
                      <p className="text-center text-xs text-secondary-foreground/75">
                        * Câmpuri obligatorii. Datele sunt folosite doar pentru a te contacta în legătură cu cererea ta.
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
                  <h2 className="mb-4 font-serif text-2xl font-bold">Zone deservite</h2>
                  <p className="text-muted-foreground">
                    Oferim montaj acoperiș, reparații acoperiș și țiglă metalică în {coverageCountiesSentence}.
                    Deplasarea pentru evaluare este gratuită în aceste zone.
                  </p>
                </div>

                <div className="space-y-4">
                  {zones.map((zone) => (
                    <Card key={zone.name} className="border-white/10 bg-secondary text-secondary-foreground transition-all duration-300 hover:shadow-md">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                          <div>
                            <h3 className="font-serif font-semibold">{zone.name}</h3>
                            <p className="text-sm text-secondary-foreground/80">{zone.cities}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="border-primary/20 bg-primary text-primary-foreground">
                  <CardContent className="p-6">
                    <h3 className="mb-2 font-serif text-lg font-semibold">Preferi telefonul?</h3>
                    <p className="text-sm text-primary-foreground/90">
                      Sună pentru a programa evaluarea gratuită — răspundem rapid în intervalul de program.
                    </p>
                    <Button asChild className="mt-4 bg-transparent" variant="outline">
                      <a href={`tel:${phoneE164}`} className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        {phoneDisplay}
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <p className="text-xs text-muted-foreground">
                  Formularul este conectat la{" "}
                  <a
                    href="https://formsync.app"
                    className="font-medium text-primary underline-offset-4 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    FormSync
                  </a>{" "}
                  (API:{" "}
                  <code className="rounded bg-muted px-1 py-0.5 text-[11px]">
                    https://api.formsync.app/v1/s/{formsyncFormId}
                  </code>
                  ). Mesajele apar în dashboard-ul tău FormSync.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold text-primary-foreground lg:text-4xl text-balance">
              Pregătit să începem?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Proiect de acoperiș sau urgență? Suntem la un telefon sau un formular distanță.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="#cere-oferta">Înapoi la formular</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <a href={`tel:${phoneE164}`} className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Sună: {phoneDisplay}
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
