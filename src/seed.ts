import { getPayload } from 'payload'
import config from './payload.config'

async function seed() {
  const payload = await getPayload({ config })

  console.log('Seeding database...')

  // Create admin user if not exists
  const existingUsers = await payload.find({ collection: 'users', limit: 1 })
  if (existingUsers.docs.length === 0) {
    await payload.create({
      collection: 'users',
      data: {
        email: 'admin@thinkcpa.us',
        password: 'admin123',
        name: 'Admin',
      },
    })
    console.log('Created admin user: admin@thinkcpa.us / admin123')
  }

  // Seed Hero
  const existingHero = await payload.find({ collection: 'hero', limit: 1 })
  if (existingHero.docs.length === 0) {
    await payload.create({
      collection: 'hero',
      data: {
        kicker: 'AI-Powered CPA Exam Prep',
        headline: 'Pass the CPA.',
        headlineAccent: 'First try.',
        subheadline: 'Join 2,500+ candidates using AI to master FAR, AUD, REG, and TCP.',
        stats: '89% pass rate · No credit card required · Cancel anytime',
        ctaText: 'Get started',
        imageCaption: 'Smart study plans that adapt to you',
      },
    })
    console.log('Created Hero content')
  }

  // Seed Features
  const existingFeatures = await payload.find({ collection: 'features', limit: 1 })
  if (existingFeatures.docs.length === 0) {
    const features = [
      {
        icon: 'Brain',
        title: 'AI-Powered',
        subtitle: 'Personalized study plans',
        description: 'Adapts to how you learn.',
        colorScheme: 'secondary',
        order: 1,
      },
      {
        icon: 'Target',
        title: 'Adaptive',
        subtitle: 'Smart practice',
        description: 'Questions adjust to your level.',
        colorScheme: 'accent',
        order: 2,
      },
      {
        icon: 'MessageCircle',
        title: '24/7 Tutor',
        subtitle: 'Always available',
        description: 'Get help anytime you need it.',
        colorScheme: 'secondary',
        order: 3,
      },
      {
        icon: 'BarChart3',
        title: 'Analytics',
        subtitle: 'Track everything',
        description: "Know exactly when you're ready.",
        colorScheme: 'accent',
        order: 4,
      },
    ]

    for (const feature of features) {
      await payload.create({
        collection: 'features',
        data: feature,
      })
    }
    console.log('Created Features content')
  }

  // Seed Pricing Plans
  const existingPlans = await payload.find({ collection: 'pricing-plans', limit: 1 })
  if (existingPlans.docs.length === 0) {
    const plans = [
      {
        name: 'Free',
        price: '$0',
        period: 'forever',
        description: 'Get started with the basics',
        features: [
          { feature: 'Limited AI tutor access' },
          { feature: 'Basic study materials' },
          { feature: 'Progress tracking' },
          { feature: 'Community support' },
        ],
        ctaText: 'Start free',
        featured: false,
        order: 1,
      },
      {
        name: 'Pro',
        price: '$49',
        period: '/month',
        description: 'Everything you need to pass',
        features: [
          { feature: 'Unlimited AI tutor' },
          { feature: 'All 4 CPA sections' },
          { feature: 'Adaptive practice exams' },
          { feature: 'Detailed analytics' },
          { feature: 'Priority support' },
          { feature: 'Study schedule builder' },
        ],
        ctaText: 'Start 7-day trial',
        featured: true,
        order: 2,
      },
      {
        name: 'Lifetime',
        price: '$299',
        period: 'one-time',
        description: 'Best value for serious candidates',
        features: [
          { feature: 'Everything in Pro' },
          { feature: 'Lifetime access' },
          { feature: 'Future updates included' },
          { feature: '1-on-1 onboarding call' },
          { feature: 'Pass guarantee' },
        ],
        ctaText: 'Get lifetime access',
        featured: false,
        order: 3,
      },
    ]

    for (const plan of plans) {
      await payload.create({
        collection: 'pricing-plans',
        data: plan,
      })
    }
    console.log('Created Pricing Plans content')
  }

  // Seed Site Settings
  try {
    await payload.updateGlobal({
      slug: 'site-settings',
      data: {
        title: 'Think CPA',
        tagline: 'AI-powered CPA exam prep. Join thousands of candidates who passed on their first try.',
        promoBanner: 'Start your free trial today. No credit card required.',
        ctaText: 'Get started',
        copyright: 'Think CPA',
      },
    })
    console.log('Updated Site Settings')
  } catch (e) {
    console.log('Site Settings already configured')
  }

  console.log('Seeding complete!')
  process.exit(0)
}

seed().catch((err) => {
  console.error('Seeding failed:', err)
  process.exit(1)
})
