// Sanity document types for ThinkCPA website

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
}

export interface Hero {
  _id: string
  _type: 'hero'
  kicker?: string
  headline?: string
  headlineAccent?: string
  subheadline?: string
  stats?: string
  ctaText?: string
  image?: SanityImage
  imageCaption?: string
}

export interface Feature {
  _id: string
  _type: 'feature'
  icon?: string
  title?: string
  subtitle?: string
  description?: string
  colorScheme?: 'secondary' | 'accent'
  order?: number
}

export interface Testimonial {
  _id: string
  _type: 'testimonial'
  quote?: string
  author?: string
  role?: string
  image?: SanityImage
  featured?: boolean
}

export interface PricingPlan {
  _id: string
  _type: 'pricingPlan'
  name?: string
  price?: string
  period?: string
  description?: string
  features?: string[]
  ctaText?: string
  ctaUrl?: string
  featured?: boolean
  order?: number
}

export interface SiteSettings {
  _id: string
  _type: 'siteSettings'
  title?: string
  description?: string
  logo?: SanityImage
  appUrl?: string
  promoBanner?: string
  footerTagline?: string
}
