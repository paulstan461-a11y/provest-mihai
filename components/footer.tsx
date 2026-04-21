import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import {
  businessAddressLine,
  coverageCounties,
  email,
  phoneDisplay,
  phoneE164,
} from "@/lib/site-config";

const services = [
  { name: "Reparații Acoperișuri", href: "/reparatii-acoperisuri" },
  { name: "Montaj Acoperișuri", href: "/montaj-acoperisuri" },
  { name: "Dulgherie", href: "/dulgherie" },
  { name: "Mansardări", href: "/mansardari" },
  { name: "Lucrări", href: "/lucrari" },
  { name: "Contact", href: "/contact" },
];

const zones = [...coverageCounties];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="font-serif text-xl font-bold text-primary-foreground">
                  AV
                </span>
              </div>
              <span className="font-serif text-xl font-bold">Acopvest</span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Experiență de peste 10 ani în montaj și reparații acoperișuri.
              Calitate garantată și prețuri corecte pentru toate proiectele
              dumneavoastră.
            </p>
            <div className="flex gap-3 pt-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary-foreground">
                <span className="text-sm font-bold">10+</span>
              </div>
              <div>
                <p className="text-sm font-semibold">Ani Experiență</p>
                <p className="text-xs text-secondary-foreground/70">
                  În domeniu
                </p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold">Servicii</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-secondary-foreground/80 transition-colors hover:text-primary"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage Area */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold">
              Zone Acoperite
            </h3>
            <ul className="space-y-2">
              {zones.map((zone) => (
                <li
                  key={zone}
                  className="flex items-center gap-2 text-sm text-secondary-foreground/80"
                >
                  <MapPin className="h-3 w-3 text-primary" />
                  {zone}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${phoneE164}`}
                  className="flex items-center gap-2 text-sm text-secondary-foreground/80 transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  {phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 text-sm text-secondary-foreground/80 transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4" />
                  {email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-secondary-foreground/80">
                <MapPin className="h-4 w-4" />
                {businessAddressLine}
              </li>
              <li className="flex items-center gap-2 text-sm text-secondary-foreground/80">
                <Clock className="h-4 w-4" />
                Disponibili 24/7
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-secondary-foreground/70">
              © {new Date().getFullYear()} Acopvest. Toate drepturile rezervate.
            </p>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="text-sm text-secondary-foreground/70 transition-colors hover:text-primary"
              >
                Termeni și Condiții
              </Link>
              <Link
                href="/contact"
                className="text-sm text-secondary-foreground/70 transition-colors hover:text-primary"
              >
                Politica de Confidențialitate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
