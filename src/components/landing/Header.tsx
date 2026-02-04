'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { getMediaUrl } from '@/lib/media'

const navigation = [
  { name: 'Features', href: '/#features' },
  { name: 'How It Works', href: '/#how-it-works' },
  { name: 'Pricing', href: '/#pricing' },
  { name: 'Blog', href: '/blog' },
]

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://platform.thinkcpa.us'

// Default settings
const defaults = {
  promoBanner: 'Start your free trial today. No credit card required.',
  ctaText: 'Get started',
}

interface HeaderProps {
  siteSettings?: {
    logo?: any
    promoBanner?: string
    ctaText?: string
  } | null
}

export default function Header({ siteSettings }: HeaderProps) {
  const logoUrl = getMediaUrl(siteSettings?.logo) || '/Logo Rectangle.png'
  const promoBanner = siteSettings?.promoBanner || defaults.promoBanner
  const ctaText = siteSettings?.ctaText || defaults.ctaText
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Main nav */}
      <nav className="flex h-20 items-center px-8 lg:px-16">
        {/* Logo + Nav links together */}
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center">
            <Image
              src={logoUrl}
              alt="Think CPA"
              width={120}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation - near logo */}
          <div className="hidden md:flex md:items-center md:gap-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-semibold text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Desktop Auth */}
        <div className="hidden md:flex md:items-center md:gap-6">
          <a href={`${APP_URL}/sign-in`} className="text-lg font-bold text-foreground hover:text-primary transition-colors">
            Log in
          </a>
          <a href={`${APP_URL}/sign-up`}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold">
              {ctaText}
            </Button>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden rounded p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Promo banner */}
      <div className="bg-secondary/50 py-2 text-center">
        <p className="text-sm text-foreground">
          {promoBanner}
        </p>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="container py-4 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-sm font-medium text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t flex flex-col gap-2">
              <a href={`${APP_URL}/sign-in`}>
                <Button variant="outline" className="w-full">Log in</Button>
              </a>
              <a href={`${APP_URL}/sign-up`}>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">{ctaText}</Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
