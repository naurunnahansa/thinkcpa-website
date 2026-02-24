import Header from '@/components/landing/Header'
import Hero from '@/components/landing/Hero'
import Features from '@/components/landing/Features'
import MagazineSection from '@/components/landing/MagazineSection'
import HowItWorks from '@/components/landing/HowItWorks'
import Pricing from '@/components/landing/Pricing'
import Footer from '@/components/landing/Footer'
import { getHero, getFeatures, getPricingPlans, getSiteSettings } from '@/lib/payload'

export const dynamic = 'force-dynamic'
export const revalidate = 60 // Revalidate every 60 seconds

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://thinkcpa.us/#organization',
      name: 'Think CPA',
      url: 'https://thinkcpa.us',
      logo: {
        '@type': 'ImageObject',
        url: 'https://thinkcpa.us/Logo Square.png',
      },
      description:
        'AI-powered CPA exam preparation platform with adaptive learning, practice exams, and 24/7 AI tutoring.',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://thinkcpa.us/#website',
      url: 'https://thinkcpa.us',
      name: 'Think CPA',
      publisher: { '@id': 'https://thinkcpa.us/#organization' },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Think CPA',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Web',
      url: 'https://thinkcpa.us',
      description:
        'Pass the CPA exam on your first try with AI-powered study plans, adaptive practice, and 24/7 tutoring.',
      offers: [
        {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          name: 'Free',
          description: 'Limited AI tutor access',
        },
        {
          '@type': 'Offer',
          price: '49',
          priceCurrency: 'USD',
          name: 'Pro',
          description: 'Unlimited AI tutor, all sections, adaptive exams',
        },
        {
          '@type': 'Offer',
          price: '299',
          priceCurrency: 'USD',
          name: 'Lifetime',
          description: 'Everything included with lifetime access',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '1247',
        bestRating: '5',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Think CPA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Think CPA is an AI-powered CPA exam preparation platform that provides personalized study plans, adaptive practice questions, and a 24/7 AI tutor to help you pass the CPA exam on your first try.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the pass rate for Think CPA users?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Think CPA users achieve an 89% pass rate, nearly double the national average. This is based on 1,247 users from 2023-2024.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does Think CPA cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Think CPA offers a Free tier with limited AI tutor access, a Pro plan at $49/month with unlimited features, and a Lifetime plan at $299 for permanent access.',
          },
        },
      ],
    },
  ],
}

export default async function Home() {
  // Fetch all CMS data in parallel
  const [hero, features, pricingPlans, siteSettings] = await Promise.all([
    getHero().catch(() => null),
    getFeatures().catch(() => []),
    getPricingPlans().catch(() => []),
    getSiteSettings().catch(() => null),
  ])

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header siteSettings={siteSettings as any} />
      <main>
        <Hero />
        <Features data={features as any} />
        <MagazineSection />
        <HowItWorks />
        <Pricing data={pricingPlans as any} />
      </main>
      <Footer siteSettings={siteSettings as any} />
    </div>
  )
}
