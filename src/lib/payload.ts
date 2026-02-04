import { getPayload } from 'payload'
import config from '@payload-config'

export async function getPayloadClient() {
  return getPayload({ config })
}

// Fetch hero content
export async function getHero() {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'hero',
    limit: 1,
  })
  return docs[0] || null
}

// Fetch features
export async function getFeatures() {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'features',
    sort: 'order',
  })
  return docs
}

// Fetch testimonials
export async function getTestimonials() {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'testimonials',
  })
  return docs
}

// Fetch pricing plans
export async function getPricingPlans() {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'pricing-plans',
    sort: 'order',
  })
  return docs
}

// Fetch site settings
export async function getSiteSettings() {
  const payload = await getPayloadClient()
  const settings = await payload.findGlobal({
    slug: 'site-settings',
  })
  return settings
}

// Fetch blog posts
export async function getBlogPosts(limit?: number) {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'blog',
    where: {
      status: { equals: 'published' },
    },
    sort: '-publishedAt',
    limit: limit || 100,
  })
  return docs
}

// Fetch single blog post by slug
export async function getBlogPost(slug: string) {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'blog',
    where: {
      slug: { equals: slug },
      status: { equals: 'published' },
    },
    limit: 1,
  })
  return docs[0] || null
}

// Re-export media utility for convenience
export { getMediaUrl } from './media'
