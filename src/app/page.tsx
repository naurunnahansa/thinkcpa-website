import Header from '@/components/landing/Header'
import Hero from '@/components/landing/Hero'
import Features from '@/components/landing/Features'
import MagazineSection from '@/components/landing/MagazineSection'
import HowItWorks from '@/components/landing/HowItWorks'
import Pricing from '@/components/landing/Pricing'
import Footer from '@/components/landing/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <MagazineSection />
        <HowItWorks />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}
