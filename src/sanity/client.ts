import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { apiVersion, dataset, projectId } from './env'
import type { SanityImage } from './types'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false for fresh data in dev
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImage) {
  return builder.image(source)
}
