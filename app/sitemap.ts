import type { MetadataRoute } from "next"
import { siteUrl } from "@/lib/site-config"

/**
 * Static routes for search engines (submit URL in Google Search Console).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths: {
    path: string
    changeFrequency: NonNullable<MetadataRoute.Sitemap[0]["changeFrequency"]>
    priority: number
  }[] = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.9 },
    { path: "/montaj-acoperisuri", changeFrequency: "monthly", priority: 0.85 },
    { path: "/reparatii-acoperisuri", changeFrequency: "monthly", priority: 0.85 },
    { path: "/dulgherie", changeFrequency: "monthly", priority: 0.8 },
    { path: "/mansardari", changeFrequency: "monthly", priority: 0.8 },
    { path: "/lucrari", changeFrequency: "monthly", priority: 0.8 },
  ]

  const lastModified = new Date()

  return paths.map(({ path, changeFrequency, priority }) => ({
    url: path === "/" ? siteUrl : `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
