"use client"

import { Toaster } from "sonner"

/**
 * Global toast host for FormSync callbacks and other client notifications.
 * Uses `sonner` directly so a ThemeProvider is not required.
 */
export function AppToaster() {
  return <Toaster richColors position="top-center" closeButton duration={5000} />
}
