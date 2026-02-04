'use client'

import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.thinkcpa.us'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Get started with the basics',
    features: [
      'Limited AI tutor access',
      'Basic study materials',
      'Progress tracking',
      'Community support',
    ],
    cta: 'Start free',
    href: `${APP_URL}/sign-up`,
    featured: false,
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/month',
    description: 'Everything you need to pass',
    features: [
      'Unlimited AI tutor',
      'All 4 CPA sections',
      'Adaptive practice exams',
      'Detailed analytics',
      'Priority support',
      'Study schedule builder',
    ],
    cta: 'Start 7-day trial',
    href: `${APP_URL}/sign-up?plan=pro`,
    featured: true,
  },
  {
    name: 'Lifetime',
    price: '$299',
    period: 'one-time',
    description: 'Best value for serious candidates',
    features: [
      'Everything in Pro',
      'Lifetime access',
      'Future updates included',
      '1-on-1 onboarding call',
      'Pass guarantee',
    ],
    cta: 'Get lifetime access',
    href: `${APP_URL}/sign-up?plan=lifetime`,
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 bg-secondary">
      <div className="container">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-foreground/60 mb-4">
            Investment
          </p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[0.85] mb-6">
            SIMPLE PRICING.
            <br />
            NO SURPRISES.
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-xl">
            Start free. Upgrade when you&apos;re ready to commit.
          </p>
          <p className="text-xs text-foreground/50 uppercase tracking-wider mt-4">
            Cancel anytime · No hidden fees · Money-back guarantee
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg p-8 ${
                plan.featured
                  ? 'bg-primary text-primary-foreground ring-2 ring-primary scale-105'
                  : 'bg-white'
              }`}
            >
              <p className={`text-xs font-bold tracking-[0.15em] uppercase mb-2 ${
                plan.featured ? 'text-primary-foreground/60' : 'text-foreground/60'
              }`}>
                {plan.name}
              </p>
              <div className="mb-4">
                <span className="text-4xl font-black">{plan.price}</span>
                <span className={`text-sm ${plan.featured ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                  {' '}{plan.period}
                </span>
              </div>
              <p className={`text-sm mb-6 ${plan.featured ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className={`h-4 w-4 mt-0.5 flex-shrink-0 ${
                      plan.featured ? 'text-accent' : 'text-primary'
                    }`} />
                    <span className={plan.featured ? 'text-primary-foreground/90' : ''}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a href={plan.href} className="block">
                <Button
                  className={`w-full py-6 font-bold ${
                    plan.featured
                      ? 'bg-accent hover:bg-accent/90 text-accent-foreground'
                      : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                  }`}
                >
                  {plan.cta}
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
