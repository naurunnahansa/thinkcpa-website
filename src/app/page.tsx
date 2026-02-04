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
      <Header siteSettings={siteSettings as any} />
      <main>
        <Hero data={hero as any} />
        <Features data={features as any} />
        <MagazineSection />
        <HowItWorks />
        <Pricing data={pricingPlans as any} />
      </main>
      <Footer siteSettings={siteSettings as any} />
    </div>
  )
}
