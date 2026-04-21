import {
  businessCounty,
  businessLocality,
  businessName,
  coverageLocations,
  coverageLocationsSentence,
  email,
  phoneE164,
  siteUrl,
} from "@/lib/site-config"

/**
 * LocalBusiness-style structured data for search engines (NAP + service area).
 */
export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: businessName,
    url: siteUrl,
    telephone: phoneE164,
    email,
    address: {
      "@type": "PostalAddress",
      addressLocality: businessLocality,
      addressRegion: businessCounty,
      addressCountry: "RO",
    },
    areaServed: coverageLocations.map((city) => ({
      "@type": "City",
      name: city,
    })),
    description: `Montaj și reparații acoperișuri, țiglă metalică, dulgherie și mansardări în ${coverageLocationsSentence}.`,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
