import type { MetadataRoute } from 'next'
import { getBlogPosts } from '@/lib/payload'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://thinkcpa.us'

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ]

  // Dynamic blog posts
  let blogPages: MetadataRoute.Sitemap = []
  try {
    const posts = await getBlogPosts()
    blogPages = posts.map((post: any) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  } catch {
    // CMS unavailable, return static pages only
  }

  return [...staticPages, ...blogPages]
}
