"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

const navigation = [
  { name: "Acasă", href: "/" },
  { name: "Reparații Acoperișuri", href: "/reparatii-acoperisuri" },
  { name: "Montaj Acoperișuri", href: "/montaj-acoperisuri" },
  { name: "Dulgherie", href: "/dulgherie" },
  { name: "Mansardări", href: "/mansardari" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="font-serif text-xl font-bold text-primary-foreground">AV</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-xl font-bold text-foreground">Acopvest</span>
              <p className="text-xs text-muted-foreground">Acoperișuri de Încredere</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+40756811640"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              <span>0756 811 640</span>
            </a>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/contact" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Solicită Ofertă
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Deschide meniul</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80">
              <SheetTitle className="sr-only">Meniu de navigare</SheetTitle>
              <div className="flex flex-col gap-4 pt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-md px-3 py-2 text-lg font-medium text-foreground transition-colors hover:bg-secondary"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-4 border-t border-border pt-4">
                  <a
                    href="tel:+40756811640"
                    className="flex items-center gap-2 px-3 py-2 text-lg font-medium text-primary"
                  >
                    <Phone className="h-5 w-5" />
                    0756 811 640
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
