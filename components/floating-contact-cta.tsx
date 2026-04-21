"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, X, MessageCircle } from "lucide-react"
import { phoneDisplay, phoneE164, whatsappDefaultMessage, whatsappNumber } from "@/lib/site-config"

/**
 * Floating, single-toggle Call + WhatsApp CTA anchored bottom-right.
 * - Toggle button opens two themed action circles
 * - data-* attributes prepared for Google Ads conversion tracking
 * - Closes on outside click / ESC to preserve UX on mobile
 */
export function FloatingContactCta() {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!isOpen) return

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      if (!containerRef.current) return
      if (!containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false)
    }

    window.addEventListener("mousedown", onPointerDown)
    window.addEventListener("touchstart", onPointerDown, { passive: true })
    window.addEventListener("keydown", onKey)
    return () => {
      window.removeEventListener("mousedown", onPointerDown)
      window.removeEventListener("touchstart", onPointerDown)
      window.removeEventListener("keydown", onKey)
    }
  }, [isOpen])

  const waHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappDefaultMessage)}`

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-x-0 bottom-4 z-60 flex justify-end px-4 sm:bottom-6 sm:px-6"
      aria-live="polite"
    >
      <div className="pointer-events-auto relative flex flex-col items-end gap-3">
        {/* Expanded actions */}
        <div
          className={`flex flex-col items-end gap-3 transition-all duration-200 ${
            isOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none translate-y-2 opacity-0"
          }`}
          aria-hidden={!isOpen}
        >
          {/* WhatsApp */}
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp ${phoneDisplay}`}
            data-cta="whatsapp"
            data-phone={phoneE164}
            className="group flex items-center gap-3"
            onClick={() => setIsOpen(false)}
          >
            <span className="hidden rounded-full border border-white/10 bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground shadow-md sm:inline-block">
              WhatsApp
            </span>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-1 ring-black/10 transition-transform duration-150 group-hover:scale-105 group-active:scale-95">
              <MessageCircle className="h-6 w-6" aria-hidden />
            </span>
          </a>

          {/* Instant Call */}
          <a
            href={`tel:${phoneE164}`}
            aria-label={`Sună acum ${phoneDisplay}`}
            data-cta="call"
            data-phone={phoneE164}
            className="group flex items-center gap-3"
            onClick={() => setIsOpen(false)}
          >
            <span className="hidden rounded-full border border-white/10 bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground shadow-md sm:inline-block">
              Sună acum
            </span>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg ring-1 ring-black/10 transition-transform duration-150 group-hover:scale-105 group-active:scale-95">
              <Phone className="h-5 w-5" aria-hidden />
            </span>
          </a>
        </div>

        {/* Main toggle */}
        <button
          type="button"
          aria-label={isOpen ? "Închide contactele rapide" : "Deschide contactele rapide"}
          aria-expanded={isOpen}
          aria-controls="floating-contact-actions"
          onClick={() => setIsOpen((v) => !v)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl ring-2 ring-white/10 transition-all duration-200 hover:scale-105 hover:shadow-2xl active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
        >
          <span className="sr-only">Contact rapid</span>
          {isOpen ? (
            <X className="h-6 w-6" aria-hidden />
          ) : (
            <Phone className="h-6 w-6" aria-hidden />
          )}
        </button>
      </div>
    </div>
  )
}
