/**
 * Central business, coverage, and URL constants for SEO, NAP consistency, and UI.
 * Update locality here if the physical base changes.
 */
export const siteUrl = "https://acopvest.ro"

export const businessName = "Acopvest"

/** Orașe where services are offered (display strings with diacritics). */
export const coverageLocations = [
  "Satu Mare",
  "Cluj",
  "Brașov",
  "Pitești",
  "Oradea",
  "Deva",
] as const

/** Readable list for sentences, e.g. meta descriptions. */
export const coverageLocationsSentence =
  "Satu Mare, Cluj, Brașov, Pitești, Oradea și Deva"

/** Backwards-compatible aliases (previously named by județ). */
export const coverageCounties = coverageLocations
export const coverageCountiesSentence = coverageLocationsSentence

export const businessLocality = "Satu Mare"

export const businessCounty = "Satu Mare"

/** Single line for footer, contact cards, form placeholders. */
export const businessAddressLine = `${businessLocality}`

export const phoneDisplay = "0756 811 640"

export const phoneE164 = "+40756811640"

/** WhatsApp "click to chat" number (digits only, no plus). */
export const whatsappNumber = "40756811640"

/** Pre-filled WhatsApp message (URL-encoded in consumers). */
export const whatsappDefaultMessage =
  "Bună ziua! Aș dori o ofertă pentru acoperiș."

export const email = "acopvest@gmail.com"

/**
 * FormSync form id — submissions POST to `https://api.formsync.app/v1/s/{formId}`.
 * Dashboard: https://formsync.app
 */
export const formsyncFormId = "Bnt7rjU"

/** Contact page: oraș + zone deservite. */
export const countyCityExamples: { name: string; cities: string }[] = [
  { name: "Satu Mare", cities: "Satu Mare, Carei, Negrești-Oaș, Tășnad" },
  { name: "Cluj", cities: "Cluj-Napoca, Turda, Dej, Câmpia Turzii" },
  { name: "Brașov", cities: "Brașov, Făgăraș, Săcele, Codlea" },
  { name: "Pitești", cities: "Pitești, Mioveni, Ștefănești, Topoloveni" },
  { name: "Oradea", cities: "Oradea, Salonta, Marghita, Beiuș" },
  { name: "Deva", cities: "Deva, Hunedoara, Simeria, Orăștie" },
]

/** Default keywords for layout metadata (Romanian roofing + regions). */
export const defaultSiteKeywords = [
  "montaj acoperiș",
  "reparații acoperiș",
  "țiglă metalică",
  "acoperiș România",
  "dulgherie acoperiș",
  "mansardări",
  "Acopvest",
  "Satu Mare",
  "Cluj",
  "Brașov",
  "Pitești",
  "Oradea",
  "Deva",
].join(", ")

/** Open Graph / social: short list of cities. */
export const coverageLocationsOg = "Satu Mare, Cluj, Brașov, Pitești, Oradea, Deva"
export const coverageCountiesOg = coverageLocationsOg
