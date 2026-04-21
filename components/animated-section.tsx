"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fade-in-up" | "fade-in" | "slide-in-left" | "slide-in-right" | "scale-in"
  delay?: number
  /** When true, skip intersection observer and opacity-0 so above-the-fold LCP can paint immediately. */
  immediate?: boolean
}

export function AnimatedSection({
  children,
  className,
  animation = "fade-in-up",
  delay = 0,
  immediate = false,
}: AnimatedSectionProps) {
  // Above-the-fold hero: render without hiding content (better LCP / FCP).
  if (immediate) {
    return <div className={className}>{children}</div>
  }

  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const animationClass = {
    "fade-in-up": "animate-fade-in-up",
    "fade-in": "animate-fade-in",
    "slide-in-left": "animate-slide-in-left",
    "slide-in-right": "animate-slide-in-right",
    "scale-in": "animate-scale-in",
  }[animation]

  return (
    <div
      ref={ref}
      className={cn(className, isVisible ? animationClass : "opacity-0")}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
