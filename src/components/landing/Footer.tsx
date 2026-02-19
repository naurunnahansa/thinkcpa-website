import Image from 'next/image'
import Link from 'next/link'
import { getMediaUrl } from '@/lib/media'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://platform.thinkcpa.us'

// Default settings
const defaults = {
  tagline: 'Agentic CPA exam prep. Be an early adopter and help us build something great.',
  copyright: 'Think CPA',
}

interface FooterProps {
  siteSettings?: {
    logo?: any
    tagline?: string
    copyright?: string
  } | null
}

export default function Footer({ siteSettings }: FooterProps) {
  const logoUrl = getMediaUrl(siteSettings?.logo) || '/Logo Rectangle.png'
  const tagline = siteSettings?.tagline || defaults.tagline
  const copyright = siteSettings?.copyright || defaults.copyright
  return (
    <footer className="py-20 bg-foreground text-white">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <Image
                src={logoUrl}
                alt="Think CPA"
                width={140}
                height={46}
                className="object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-white/60 max-w-sm leading-relaxed">
              {tagline}
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-4">
              Platform
            </p>
            <div className="flex flex-col gap-3">
              <a href="#features" className="text-white/70 hover:text-white transition-colors font-medium">
                Features
              </a>
              <a href="#how-it-works" className="text-white/70 hover:text-white transition-colors font-medium">
                How It Works
              </a>
              <a href="#pricing" className="text-white/70 hover:text-white transition-colors font-medium">
                Pricing
              </a>
            </div>
          </div>

          {/* Account */}
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-4">
              Account
            </p>
            <div className="flex flex-col gap-3">
              <a href={`${APP_URL}/sign-in`} className="text-white/70 hover:text-white transition-colors font-medium">
                Log in
              </a>
              <a href={`${APP_URL}/sign-up`} className="text-white/70 hover:text-white transition-colors font-medium">
                Sign up
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40 uppercase tracking-wider">
            &copy; {new Date().getFullYear()} {copyright}. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Made for future CPAs.
          </p>
        </div>
      </div>
    </footer>
  )
}
