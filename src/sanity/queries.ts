import { groq } from 'next-sanity'

export const heroQuery = groq`*[_type == "hero"][0] {
  kicker,
  headline,
  headlineAccent,
  subheadline,
  stats,
  ctaText,
  image,
  imageCaption
}`

export const featuresQuery = groq`*[_type == "feature"] | order(order asc) {
  _id,
  icon,
  title,
  subtitle,
  description,
  colorScheme
}`

export const testimonialsQuery = groq`*[_type == "testimonial"] {
  _id,
  quote,
  author,
  role,
  image,
  featured
}`

export const pricingQuery = groq`*[_type == "pricingPlan"] | order(order asc) {
  _id,
  name,
  price,
  period,
  description,
  features,
  ctaText,
  ctaUrl,
  featured
}`

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0] {
  title,
  description,
  logo,
  appUrl,
  promoBanner,
  footerTagline
}`
