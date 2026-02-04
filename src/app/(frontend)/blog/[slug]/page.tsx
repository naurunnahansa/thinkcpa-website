import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Header from '@/components/landing/Header'
import Footer from '@/components/landing/Footer'
import { getBlogPost, getBlogPosts, getSiteSettings, getMediaUrl } from '@/lib/payload'
import { RichText } from '@/components/RichText'

export const dynamic = 'force-dynamic'
export const revalidate = 60

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = await getBlogPost(slug).catch(() => null)

  if (!post) {
    return {
      title: 'Post Not Found | Think CPA',
    }
  }

  return {
    title: `${post.title} | Think CPA Blog`,
    description: post.excerpt || `Read ${post.title} on the Think CPA blog.`,
  }
}

export async function generateStaticParams() {
  const posts = await getBlogPosts().catch(() => [])
  return posts.map((post: any) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const [post, siteSettings] = await Promise.all([
    getBlogPost(slug).catch(() => null),
    getSiteSettings().catch(() => null),
  ])

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header siteSettings={siteSettings as any} />
      <main>
        {/* Hero Section */}
        <section className="bg-primary py-16">
          <div className="container max-w-4xl">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground mb-6"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>

            {post.category && (
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-accent mb-4">
                {post.category.replace('-', ' ')}
              </p>
            )}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-[0.9] mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-primary-foreground/70">
              <span>{post.author || 'Think CPA Team'}</span>
              {post.publishedAt && (
                <>
                  <span>-</span>
                  <span>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Featured Image */}
        {post.featuredImage && (
          <section className="relative">
            <div className="container max-w-4xl -mt-8">
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={getMediaUrl(post.featuredImage) || '/placeholder.jpg'}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </section>
        )}

        {/* Content */}
        <section className="py-16">
          <div className="container max-w-3xl">
            <article className="prose prose-lg max-w-none">
              <RichText content={post.content} />
            </article>
          </div>
        </section>

        {/* Back to Blog CTA */}
        <section className="pb-20">
          <div className="container max-w-3xl">
            <div className="border-t pt-8">
              <Link
                href="/blog"
                className="inline-flex items-center text-primary font-semibold hover:text-primary/80"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to all articles
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer siteSettings={siteSettings as any} />
    </div>
  )
}
