'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.thinkcpa.us'

export default function Hero() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `${APP_URL}/sign-up?email=${encodeURIComponent(email)}`
  }

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            {/* Kicker */}
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-6">
              AI-Powered CPA Exam Prep
            </p>

            {/* Main Headline */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-foreground leading-[0.9] tracking-tight mb-6">
              Pass the CPA.
              <br />
              <span className="text-primary">First try.</span>
            </h1>

            {/* Subhead */}
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-4 max-w-lg">
              Join 2,500+ candidates using AI to master FAR, AUD, REG, and TCP.
            </p>

            {/* Small detail text */}
            <p className="text-xs text-muted-foreground/60 uppercase tracking-wider mb-10">
              89% pass rate · No credit card required · Cancel anytime
            </p>

            {/* Email signup */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-14 px-5 rounded border border-border bg-white text-foreground text-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
              <Button
                type="submit"
                size="lg"
                className="h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-bold"
              >
                Get started
              </Button>
            </form>
          </div>

          {/* Right Side - Image */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/5] max-w-lg mx-auto rounded overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=1000&fit=crop"
                alt="Professional accountant working"
                fill
                className="object-cover grayscale"
              />
              {/* Magazine-style caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-xs text-white/60 uppercase tracking-wider mb-1">Featured</p>
                <p className="text-white font-bold">Smart study plans that adapt to you</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
