import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/landing/Header'
import Footer from '@/components/landing/Footer'
import { getBlogPosts, getSiteSettings, getMediaUrl } from '@/lib/payload'

export const dynamic = 'force-dynamic'
export const revalidate = 60

export const metadata = {
  title: 'Blog | Think CPA',
  description: 'CPA exam tips, study strategies, and success stories to help you pass the CPA exam.',
}

export default async function BlogPage() {
  const [posts, siteSettings] = await Promise.all([
    getBlogPosts().catch(() => []),
    getSiteSettings().catch(() => null),
  ])

  return (
    <div className="min-h-screen bg-white">
      <Header siteSettings={siteSettings as any} />
      <main>
        {/* Hero Section */}
        <section className="bg-primary py-20">
          <div className="container">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary-foreground/60 mb-4">
              Resources
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-[0.85] mb-6">
              CPA EXAM BLOG
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed max-w-2xl">
              Expert tips, study strategies, and insights to help you conquer the CPA exam.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-secondary">
          <div className="container">
            {posts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-foreground/60">No blog posts yet. Check back soon!</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post: any) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    {/* Featured Image */}
                    {post.featuredImage && (
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={getMediaUrl(post.featuredImage) || '/placeholder.jpg'}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    {!post.featuredImage && (
                      <div className="aspect-[16/9] bg-primary/10 flex items-center justify-center">
                        <span className="text-primary/40 font-display text-4xl font-black">CPA</span>
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6">
                      {post.category && (
                        <p className="text-xs font-bold tracking-[0.15em] uppercase text-primary mb-2">
                          {post.category.replace('-', ' ')}
                        </p>
                      )}
                      <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                      )}
                      <div className="flex items-center justify-between text-xs text-foreground/50">
                        <span>{post.author || 'Think CPA Team'}</span>
                        {post.publishedAt && (
                          <span>
                            {new Date(post.publishedAt).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer siteSettings={siteSettings as any} />
    </div>
  )
}
