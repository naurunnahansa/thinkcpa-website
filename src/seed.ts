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

  // Seed Blog Posts
  const existingPosts = await payload.find({ collection: 'blog', limit: 1 })
  if (existingPosts.docs.length === 0) {
    const blogPosts = [
      {
        title: 'How to Pass FAR on Your First Attempt',
        slug: 'how-to-pass-far-first-attempt',
        excerpt: 'The Financial Accounting and Reporting (FAR) section is often considered the most challenging CPA exam section. Here are proven strategies to help you pass on your first try.',
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [{ type: 'text', text: 'The FAR section of the CPA exam covers a vast amount of material, from financial statement preparation to governmental accounting. With a pass rate hovering around 45%, it\'s crucial to approach this exam with a solid strategy.' }],
              },
              {
                type: 'heading',
                tag: 'h2',
                children: [{ type: 'text', text: '1. Create a Study Schedule' }],
              },
              {
                type: 'paragraph',
                children: [{ type: 'text', text: 'Dedicate 100-150 hours over 6-8 weeks. Break down topics by weight: Financial Statements (25-35%), Select Transactions (20-30%), State & Local Governments (5-15%), and Select Financial Statement Accounts (30-40%).' }],
              },
              {
                type: 'heading',
                tag: 'h2',
                children: [{ type: 'text', text: '2. Focus on High-Weight Topics' }],
              },
              {
                type: 'paragraph',
                children: [{ type: 'text', text: 'Prioritize revenue recognition, leases, bonds, and consolidations. These topics appear frequently and carry significant weight on the exam.' }],
              },
              {
                type: 'heading',
                tag: 'h2',
                children: [{ type: 'text', text: '3. Practice Task-Based Simulations' }],
              },
              {
                type: 'paragraph',
                children: [{ type: 'text', text: 'Don\'t just focus on MCQs. TBS questions make up 50% of your score. Practice with realistic simulations using Think CPA\'s adaptive practice exams.' }],
              },
              {
                type: 'heading',
                tag: 'h2',
                children: [{ type: 'text', text: 'Final Thoughts' }],
              },
              {
                type: 'paragraph',
                children: [{ type: 'text', text: 'Consistency is key. Study every day, track your progress, and use AI-powered tools to identify your weak areas. With the right approach, you can join the thousands who pass FAR on their first attempt.' }],
              },
            ],
          },
        },
        author: 'Sarah Mitchell, CPA',
        category: 'exam-strategy',
        publishedAt: new Date('2025-01-15').toISOString(),
        status: 'published',
      },
      {
        title: '5 Time Management Tips for Busy CPA Candidates',
        slug: 'time-management-tips-cpa-candidates',
        excerpt: 'Balancing work, life, and CPA exam preparation is challenging. These five time management strategies will help you study effectively without burning out.',
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [{ type: 'text', text: 'Most CPA candidates are working professionals juggling multiple responsibilities. The key to success isn\'t studying more—it\'s studying smarter.' }],
              },
              {
                type: 'heading',
                tag: 'h2',
                children: [{ type: 'text', text: '1. Use the Pomodoro Technique' }],
              },
              {
                type: 'paragraph',
                children: [{ type: 'text', text: 'Study in focused 25-minute blocks followed by 5-minute breaks. After four pomodoros, take a longer 15-30 minute break. This keeps your mind fresh and retention high.' }],
              },
              {
                type: 'heading',
                tag: 'h2',
                children: [{ type: 'text', text: '2. Study During Your Peak Hours' }],
              },
              {
                type: 'paragraph',
                children: [{ type: 'text', text: 'Identify when you\'re most alert—early morning, lunch break, or evening—and protect that time for your most challenging study material.' }],
              },
              {
                type: 'heading',
                tag: 'h2',
                children: [{ type: 'text', text: '3. Leverage Mobile Study Tools' }],
              },
              {
                type: 'paragraph',
                children: [{ type: 'text', text: 'Turn commute time and waiting rooms into study sessions. Think CPA\'s mobile app lets you review flashcards and practice MCQs anywhere.' }],
              },
              {
                type: 'heading',
                tag: 'h2',
                children: [{ type: 'text', text: '4. Set Weekly Goals, Not Daily' }],
              },
              {
                type: 'paragraph',
                children: [{ type: 'text', text: 'Life happens. Weekly goals give you flexibility to adjust while still making consistent progress toward your exam date.' }],
              },
              {
                type: 'heading',
                tag: 'h2',
                children: [{ type: 'text', text: '5. Take One Day Off Per Week' }],
              },
              {
                type: 'paragraph',
                children: [{ type: 'text', text: 'Rest is not optional—it\'s essential. Your brain consolidates learning during downtime. Schedule one complete rest day to prevent burnout.' }],
              },
            ],
          },
        },
        author: 'Think CPA Team',
        category: 'study-tips',
        publishedAt: new Date('2025-01-22').toISOString(),
        status: 'published',
      },
      {
        title: 'From Zero to CPA: How Maria Passed All 4 Sections in 6 Months',
        slug: 'success-story-maria-all-sections-6-months',
        excerpt: 'Maria Rodriguez shares her journey from accounting graduate to licensed CPA in just 6 months, and the strategies that made it possible.',
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [{ type: 'text', text: '"I never thought I could pass all four sections in six months while working full-time," Maria says. "But with the right tools and strategy, it\'s absolutely possible."' }],
              },
              {
                type: 'heading',
                tag: 'h2',
                children: [{ type: 'text', text: 'The Challenge' }],
              },
              {
                type: 'paragraph',
                children: [{ type: 'text', text: 'Maria graduated with her Master\'s in Accounting in May 2024 and started at a Big 4 firm that September. She needed to pass all four sections before busy season hit in January.' }],
              },
              {
                type: 'heading',
                tag: 'h2',
                children: [{ type: 'text', text: 'The Strategy' }],
              },
              {
                type: 'paragraph',
                children: [{ type: 'text', text: 'Maria used Think CPA\'s AI-powered study plans to create an aggressive but realistic schedule. "The AI identified my weak areas immediately," she explains. "Instead of spending equal time on everything, I focused where I needed the most help."' }],
              },
              {
                type: 'heading',
                tag: 'h2',
                children: [{ type: 'text', text: 'The Results' }],
              },
              {
                type: 'paragraph',
                children: [{ type: 'text', text: 'FAR: 81 | AUD: 78 | REG: 84 | TCP: 79. Maria passed all four sections on her first attempt, finishing just two weeks before busy season began.' }],
              },
              {
                type: 'heading',
                tag: 'h2',
                children: [{ type: 'text', text: 'Her Advice' }],
              },
              {
                type: 'paragraph',
                children: [{ type: 'text', text: '"Trust the process and trust the data. The AI knew when I was ready better than I did. And don\'t skip the 24/7 tutor—I asked questions at 2 AM more times than I\'d like to admit!"' }],
              },
            ],
          },
        },
        author: 'Think CPA Team',
        category: 'success-stories',
        publishedAt: new Date('2025-01-29').toISOString(),
        status: 'published',
      },
    ]

    for (const post of blogPosts) {
      await payload.create({
        collection: 'blog',
        data: post,
      })
    }
    console.log('Created Blog Posts')
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
