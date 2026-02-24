'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Countdown from './Countdown'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://platform.thinkcpa.us'

export default function Hero() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `${APP_URL}/sign-up?email=${encodeURIComponent(email)}`
  }

  return (
    <section className="min-h-[calc(100vh-5rem)] grid lg:grid-cols-2 border-b">
      {/* Left Content */}
      <div className="flex items-center py-20 md:py-32 px-8 lg:px-16 xl:px-24 bg-white">
        <div className="max-w-xl">
          {/* Kicker */}
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-6">
            Score Release Sale · 95% off · Limited time
          </p>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-foreground leading-[0.9] tracking-tight mb-6">
            Pass the CPA.
            <br />
            <span className="text-primary">First try.</span>
          </h1>

          {/* Subhead */}
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-4">
            ThinkCPA FAR Review Course. $5/month. Podcast lessons. MCQs. Task-based simulations. Full course access.
          </p>

          {/* Small detail text */}
          <p className="text-xs text-muted-foreground/60 uppercase tracking-wider mb-6">
            No contracts · No catch · Deal won't last
          </p>

          {/* Countdown */}
          <div className="mb-8">
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-foreground/50 mb-3">
              Sale ends in
            </p>
            <Countdown />
          </div>

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
              Lock in $5/month
            </Button>
          </form>
        </div>
      </div>

      {/* Right Side - Full height product image */}
      <div className="relative hidden lg:block bg-secondary border-l">
        <Image
          src="/product/lesson-sidebar.png"
          alt="ThinkCPA FAR lesson with AI CPA Coach sidebar"
          fill
          className="object-cover object-left-top"
          priority
        />
      </div>
    </section>
  )
}
