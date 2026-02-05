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
        stats: '89% pass rate · Cancel anytime · Money-back guarantee',
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

  // Seed Blog Posts - Delete existing and recreate with expanded content
  const existingPosts = await payload.find({ collection: 'blog', limit: 100 })
  if (existingPosts.docs.length > 0) {
    console.log('Deleting existing blog posts to update with expanded content...')
    for (const post of existingPosts.docs) {
      await payload.delete({ collection: 'blog', id: post.id })
    }
  }

  const blogPosts = [
    {
      title: 'The Complete Guide to Passing FAR on Your First Attempt',
      slug: 'how-to-pass-far-first-attempt',
      excerpt: 'The Financial Accounting and Reporting (FAR) section is often considered the most challenging CPA exam section. This comprehensive guide covers everything from study schedules to exam-day strategies that have helped thousands pass on their first try.',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'The Financial Accounting and Reporting (FAR) section of the CPA exam is notorious for being the most content-heavy and challenging of all four sections. With pass rates historically hovering around 45-50%, many candidates find themselves retaking this exam multiple times. But it doesn\'t have to be that way.' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'After analyzing data from over 2,500 successful candidates who used Think CPA, we\'ve identified the key strategies that separate first-time passers from those who struggle. This comprehensive guide will walk you through everything you need to know to conquer FAR on your first attempt.' }],
            },
            {
              type: 'heading',
              tag: 'h2',
              children: [{ type: 'text', text: 'Understanding the FAR Exam Structure' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Before diving into study strategies, it\'s crucial to understand what you\'re up against. The FAR exam consists of five testlets: two multiple-choice question (MCQ) testlets and three task-based simulation (TBS) testlets. You\'ll have four hours to complete the entire exam.' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'The AICPA Blueprint breaks down FAR content into four main areas:' }],
            },
            {
              type: 'list',
              listType: 'bullet',
              children: [
                { type: 'listitem', children: [{ type: 'text', text: 'Conceptual Framework, Standard-Setting, and Financial Reporting (25-35%)' }] },
                { type: 'listitem', children: [{ type: 'text', text: 'Select Financial Statement Accounts (30-40%)' }] },
                { type: 'listitem', children: [{ type: 'text', text: 'Select Transactions (20-30%)' }] },
                { type: 'listitem', children: [{ type: 'text', text: 'State and Local Governments (5-15%)' }] },
              ],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'These percentages are critical for prioritizing your study time. Many candidates make the mistake of spending equal time on all topics, but smart allocation based on exam weight is essential for efficient preparation.' }],
            },
            {
              type: 'heading',
              tag: 'h2',
              children: [{ type: 'text', text: 'Creating Your FAR Study Schedule' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'The average successful FAR candidate dedicates 100-150 hours of study time over 6-8 weeks. However, the key isn\'t just the total hours—it\'s how you distribute them.' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Here\'s a proven 8-week study schedule that has worked for thousands of candidates:' }],
            },
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Weeks 1-2: Foundation Building', format: 1 },
                { type: 'text', text: ' - Focus on the conceptual framework, financial statement preparation, and basic accounting principles. This foundation is crucial because everything else builds upon it. Spend approximately 25-30 hours during these two weeks.' }
              ],
            },
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Weeks 3-4: Select Financial Statement Accounts', format: 1 },
                { type: 'text', text: ' - Dive deep into inventory, fixed assets, intangibles, investments, and stockholders\' equity. These topics represent the largest portion of the exam. Allocate 35-40 hours here.' }
              ],
            },
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Weeks 5-6: Select Transactions', format: 1 },
                { type: 'text', text: ' - Cover revenue recognition (ASC 606), leases (ASC 842), bonds, pensions, and income taxes. These are often the most conceptually challenging topics. Plan for 30-35 hours.' }
              ],
            },
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Week 7: Government and Not-for-Profit', format: 1 },
                { type: 'text', text: ' - While this section has a smaller weight, don\'t neglect it. Understanding fund accounting and modified accrual basis can be the difference between passing and failing. Dedicate 15-20 hours.' }
              ],
            },
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Week 8: Final Review', format: 1 },
                { type: 'text', text: ' - Focus entirely on practice exams, reviewing weak areas, and building test-taking stamina. This is where Think CPA\'s adaptive learning really shines—it identifies exactly which topics need more attention.' }
              ],
            },
            {
              type: 'heading',
              tag: 'h2',
              children: [{ type: 'text', text: 'The High-Impact Topics You Must Master' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Not all FAR topics are created equal. Based on recent exam feedback and AICPA testing patterns, here are the topics that appear most frequently and carry the most weight:' }],
            },
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: '1. Revenue Recognition (ASC 606)', format: 1 },
                { type: 'text', text: ' - The five-step model is tested heavily in both MCQs and simulations. You must understand how to identify performance obligations, determine transaction price, and recognize revenue over time vs. at a point in time. Expect at least 2-3 TBS questions on this topic.' }
              ],
            },
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: '2. Leases (ASC 842)', format: 1 },
                { type: 'text', text: ' - The new lease standard is a favorite among examiners. Know the difference between operating and finance leases, how to calculate the right-of-use asset, and lease liability amortization. Practice journal entries extensively.' }
              ],
            },
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: '3. Business Combinations and Consolidations', format: 1 },
                { type: 'text', text: ' - Understanding how to account for acquisitions, calculate goodwill, and prepare consolidated financial statements is essential. This topic often appears in the research simulation as well.' }
              ],
            },
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: '4. Bonds and Long-term Liabilities', format: 1 },
                { type: 'text', text: ' - Bond issuance, amortization tables, and early extinguishment are frequently tested. Make sure you can calculate bond prices, effective interest, and gains/losses on retirement.' }
              ],
            },
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: '5. Government Fund Accounting', format: 1 },
                { type: 'text', text: ' - While the overall government section is smaller, understanding the difference between governmental, proprietary, and fiduciary funds is crucial. Many candidates lose easy points here by not learning the basics.' }
              ],
            },
            {
              type: 'heading',
              tag: 'h2',
              children: [{ type: 'text', text: 'Mastering Task-Based Simulations' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Here\'s something many candidates don\'t realize: Task-Based Simulations (TBS) now account for 50% of your FAR score. Yet most study programs focus primarily on MCQs. This is a critical mistake.' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'TBS questions test your ability to apply knowledge in realistic scenarios. They often include document review, research tasks, and complex calculations. Here\'s how to prepare effectively:' }],
            },
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Practice with realistic simulations', format: 1 },
                { type: 'text', text: ' - The AICPA provides sample tests that mimic the actual exam interface. Use them. Think CPA\'s practice simulations are designed to match the difficulty and format of real exam questions.' }
              ],
            },
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Learn to use the authoritative literature', format: 1 },
                { type: 'text', text: ' - One TBS will always be a research question. Practice searching the FASB Codification quickly and accurately. This is often an easy 5-10 points if you\'re comfortable with the search function.' }
              ],
            },
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Manage your time carefully', format: 1 },
                { type: 'text', text: ' - Allocate roughly 10-15 minutes per simulation. If you\'re stuck, make your best guess and move on. Partial credit is awarded, so always attempt every part of each simulation.' }
              ],
            },
            {
              type: 'heading',
              tag: 'h2',
              children: [{ type: 'text', text: 'Common Mistakes to Avoid' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'After interviewing hundreds of candidates who failed FAR on their first attempt, we\'ve identified the most common pitfalls:' }],
            },
            {
              type: 'list',
              listType: 'bullet',
              children: [
                { type: 'listitem', children: [{ type: 'text', text: 'Underestimating government accounting - Many candidates skip or skim this section, losing 5-15% of potential points.' }] },
                { type: 'listitem', children: [{ type: 'text', text: 'Focusing only on MCQs - Remember, simulations are half your score. Practice them weekly.' }] },
                { type: 'listitem', children: [{ type: 'text', text: 'Not taking enough practice exams - You should complete at least 3-4 full practice exams before test day.' }] },
                { type: 'listitem', children: [{ type: 'text', text: 'Studying passively - Reading and watching videos isn\'t enough. Active practice with questions is essential.' }] },
                { type: 'listitem', children: [{ type: 'text', text: 'Ignoring weak areas - It\'s human nature to practice what we\'re good at. Use analytics to identify and attack your weaknesses.' }] },
              ],
            },
            {
              type: 'heading',
              tag: 'h2',
              children: [{ type: 'text', text: 'Exam Day Strategies' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Your preparation doesn\'t end when you walk into the testing center. Here\'s how to maximize your performance on exam day:' }],
            },
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Get proper rest', format: 1 },
                { type: 'text', text: ' - Don\'t cram the night before. Your brain consolidates information during sleep. Get 7-8 hours and eat a good breakfast.' }
              ],
            },
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Arrive early', format: 1 },
                { type: 'text', text: ' - Plan to arrive at least 30 minutes before your appointment. This gives you time to check in, use the restroom, and calm your nerves.' }
              ],
            },
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Use the tutorial time wisely', format: 1 },
                { type: 'text', text: ' - The optional 5-minute tutorial doesn\'t count against your exam time. Use it to get comfortable with the interface and take some deep breaths.' }
              ],
            },
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Pace yourself', format: 1 },
                { type: 'text', text: ' - With 4 hours for the entire exam, aim for about 1.5 minutes per MCQ and 10-15 minutes per simulation. Check your time after each testlet.' }
              ],
            },
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Take your break', format: 1 },
                { type: 'text', text: ' - You get an optional 15-minute break after the third testlet. Take it. Use the restroom, stretch, and reset mentally for the final push.' }
              ],
            },
            {
              type: 'heading',
              tag: 'h2',
              children: [{ type: 'text', text: 'How Think CPA Helps You Pass' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Traditional study methods rely on a one-size-fits-all approach. Think CPA is different. Our AI-powered platform adapts to your unique learning style and identifies your weak areas in real-time.' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Here\'s what sets us apart:' }],
            },
            {
              type: 'list',
              listType: 'bullet',
              children: [
                { type: 'listitem', children: [{ type: 'text', text: 'Adaptive practice questions that focus on your weak areas' }] },
                { type: 'listitem', children: [{ type: 'text', text: '24/7 AI tutor to answer questions whenever you\'re studying' }] },
                { type: 'listitem', children: [{ type: 'text', text: 'Realistic simulations that match actual exam difficulty' }] },
                { type: 'listitem', children: [{ type: 'text', text: 'Detailed analytics showing exactly when you\'re ready to pass' }] },
                { type: 'listitem', children: [{ type: 'text', text: 'Personalized study schedules that adapt to your progress' }] },
              ],
            },
            {
              type: 'heading',
              tag: 'h2',
              children: [{ type: 'text', text: 'Final Thoughts' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Passing FAR on your first attempt is absolutely achievable with the right strategy and tools. It requires discipline, smart study habits, and a willingness to focus on your weak areas rather than avoiding them.' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Remember: thousands of candidates pass FAR every testing window. With proper preparation, you can be one of them. Start your journey today, stay consistent, and trust the process.' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'The CPA credential opens doors that will benefit your entire career. The investment you make now in quality preparation will pay dividends for decades to come. You\'ve got this.' }],
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
      title: 'The Ultimate Time Management Guide for Working CPA Candidates',
      slug: 'time-management-tips-cpa-candidates',
      excerpt: 'Balancing a full-time job, personal life, and CPA exam preparation seems impossible—but thousands do it successfully every year. This comprehensive guide reveals the time management secrets that separate successful candidates from those who burn out.',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Let\'s be honest: preparing for the CPA exam while working full-time is one of the most challenging things you\'ll ever do. The average candidate needs 300-400 hours of total study time across all four sections. When you\'re already working 40-50 hours per week, finding that time feels impossible.' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'But here\'s the truth: 83% of CPA candidates are working professionals. They have jobs, families, and responsibilities just like you. And thousands of them pass every single testing window. The difference isn\'t that they have more time—it\'s that they manage their time better.' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'This guide will show you exactly how to structure your study time, maintain your sanity, and pass the CPA exam without sacrificing everything else in your life.' }],
            },
            {
              type: 'heading',
              tag: 'h2',
              children: [{ type: 'text', text: 'The Psychology of Sustainable Studying' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Before we dive into specific techniques, we need to address the elephant in the room: burnout. The CPA journey typically takes 12-18 months. That\'s a marathon, not a sprint. Candidates who try to study 4-5 hours every single day usually burn out within weeks.' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'The key is finding a sustainable pace. Research shows that the optimal study session length is 90-120 minutes. After that, your retention drops significantly. More isn\'t always better—consistent, focused sessions beat marathon cramming every time.' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Think of your mental energy like a battery. Work depletes it. Studying depletes it. But sleep, exercise, and leisure recharge it. If you\'re constantly running on empty, you\'ll retain less, perform worse, and eventually give up. Protecting your recovery time isn\'t lazy—it\'s strategic.' }],
            },
            {
              type: 'heading',
              tag: 'h2',
              children: [{ type: 'text', text: 'Strategy 1: The Pomodoro Technique (Enhanced)' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'The classic Pomodoro Technique involves 25-minute focused work blocks followed by 5-minute breaks. But for CPA studying, we recommend a modified version that\'s been proven more effective for complex material:' }],
            },
            {
              type: 'list',
              listType: 'bullet',
              children: [
                { type: 'listitem', children: [{ type: 'text', text: '50 minutes of focused studying' }] },
                { type: 'listitem', children: [{ type: 'text', text: '10-minute break (get up, move, hydrate)' }] },
                { type: 'listitem', children: [{ type: 'text', text: 'After 3 cycles, take a 30-minute extended break' }] },
              ],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'This rhythm matches the natural attention cycles of your brain and mimics the actual exam experience, where you\'ll work in testlets of similar duration.' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'During your breaks, avoid looking at screens. Your eyes and brain need genuine rest. Walk around, stretch, look out a window, or do some light household tasks. This isn\'t wasted time—it\'s when your brain consolidates what you just learned.' }],
            },
            {
              type: 'heading',
              tag: 'h2',
              children: [{ type: 'text', text: 'Strategy 2: Identify and Protect Your Peak Hours' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Everyone has certain hours when they\'re most mentally sharp. For some people, it\'s early morning before the world wakes up. For others, it\'s late evening when the house is quiet. Some even do their best work during lunch breaks.' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Spend a week tracking your energy levels throughout the day. Rate your mental clarity on a scale of 1-10 at different times. You\'ll quickly notice patterns. These peak hours are precious—protect them fiercely for your most challenging study material.' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Here\'s how different schedules might look:' }],
            },
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Morning Person Schedule:', format: 1 },
                { type: 'text', text: ' Wake at 5 AM, study 5:30-7:30 AM before work. This gives you 2 hours of peak-brain studying while the world is quiet. No emails, no distractions, just you and the material.' }
              ],
            },
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Night Owl Schedule:', format: 1 },
                { type: 'text', text: ' Study 8-10:30 PM after dinner and family time. Many candidates find their second wind in the evening after decompressing from work.' }
              ],
            },
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Split Schedule:', format: 1 },
                { type: 'text', text: ' 45 minutes before work (MCQ review), 45 minutes at lunch (video lectures), 1 hour after dinner (simulations). This distributes the load and takes advantage of multiple energy peaks.' }
              ],
            },
            {
              type: 'heading',
              tag: 'h2',
              children: [{ type: 'text', text: 'Strategy 3: Transform Dead Time into Study Time' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'The average American spends 2-3 hours per day in "dead time"—commuting, waiting in lines, sitting in waiting rooms, etc. Most people fill this time with social media or music. CPA candidates who pass fill it with studying.' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Think CPA\'s mobile app is designed for exactly these moments. Here\'s how to maximize dead time:' }],
            },
            {
              type: 'list',
              listType: 'bullet',
              children: [
                { type: 'listitem', children: [{ type: 'text', text: 'Commute (30-60 min): Listen to audio lectures or review flashcards' }] },
                { type: 'listitem', children: [{ type: 'text', text: 'Lunch break (20-30 min): Quick MCQ practice session' }] },
                { type: 'listitem', children: [{ type: 'text', text: 'Waiting rooms (10-15 min): Review notes or weak-area flashcards' }] },
                { type: 'listitem', children: [{ type: 'text', text: 'Before bed (10 min): Quick review of the day\'s material' }] },
              ],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'These small pockets of time add up to 10-15+ hours per week of extra studying—without touching your evenings or weekends. That\'s the equivalent of a part-time job, hidden in time you were already "spending."' }],
            },
            {
              type: 'heading',
              tag: 'h2',
              children: [{ type: 'text', text: 'Strategy 4: The Weekly Goal Framework' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Daily study goals set you up for failure. Miss one day due to a work emergency or family obligation, and suddenly you\'re "behind." This creates guilt, which leads to avoidance, which creates more guilt. It\'s a downward spiral.' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Instead, set weekly study goals. For most working candidates, 15-20 hours per week is sustainable long-term. That breaks down to roughly 2-3 hours on weekdays and 4-5 hours on weekends.' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Here\'s the magic: if you miss Monday because of a deadline at work, you can make it up on Wednesday. If Thursday is unexpectedly busy, study extra on Saturday. Weekly goals give you flexibility while maintaining accountability.' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Track your weekly hours religiously. Write them down. Seeing your progress builds momentum and motivation. And when you hit your weekly goal, celebrate—you\'ve earned it.' }],
            },
            {
              type: 'heading',
              tag: 'h2',
              children: [{ type: 'text', text: 'Strategy 5: The Sacred Rest Day' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'This might be the most counterintuitive advice in this guide: take one full day off from studying every single week. No exceptions.' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Your brain needs complete rest to consolidate learning. Research shows that memory formation actually happens during downtime, not during active studying. Students who take regular rest days outperform those who study seven days a week.' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'More importantly, a weekly rest day prevents burnout. The CPA journey is long. You need to protect your motivation and mental health. One day of rest is not going to cost you the exam—but burning out definitely will.' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Use your rest day to reconnect with family, pursue hobbies, exercise, or simply relax. Do whatever recharges you. When Monday comes, you\'ll return to studying refreshed and motivated.' }],
            },
            {
              type: 'heading',
              tag: 'h2',
              children: [{ type: 'text', text: 'Strategy 6: Communicate and Set Boundaries' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'One of the biggest challenges working candidates face isn\'t time—it\'s other people. Family members who don\'t understand why you can\'t attend every event. Coworkers who schedule last-minute meetings. Friends who feel neglected.' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'The solution is proactive communication. Have an honest conversation with your family about what the next 12-18 months will look like. Explain why this credential matters for your career. Ask for their support and be specific about what you need.' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'At work, be transparent with your manager (if appropriate) about your CPA journey. Many employers are supportive and may offer flexibility or reduced workloads during this period. You won\'t know until you ask.' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Set clear boundaries and stick to them. If 6-8 PM is study time, that means no phone calls, no "quick favors," no distractions. People will respect your boundaries once they see you\'re serious about them.' }],
            },
            {
              type: 'heading',
              tag: 'h2',
              children: [{ type: 'text', text: 'Strategy 7: Use Technology Wisely' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Technology can be your greatest ally or your worst enemy. Social media, streaming services, and endless notifications are designed to capture and hold your attention. During study sessions, you need to fight back.' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Here are proven techniques:' }],
            },
            {
              type: 'list',
              listType: 'bullet',
              children: [
                { type: 'listitem', children: [{ type: 'text', text: 'Use website blockers (Freedom, Cold Turkey) during study hours' }] },
                { type: 'listitem', children: [{ type: 'text', text: 'Put your phone in another room or use Do Not Disturb mode' }] },
                { type: 'listitem', children: [{ type: 'text', text: 'Use the Pomodoro timer to create structure and urgency' }] },
                { type: 'listitem', children: [{ type: 'text', text: 'Study in a consistent location that your brain associates with focus' }] },
              ],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'On the flip side, embrace technology that helps you study. Think CPA\'s AI tutor is available 24/7 to answer questions. Our mobile app lets you study anywhere. Analytics show you exactly where to focus. Use these tools—they exist to help you succeed.' }],
            },
            {
              type: 'heading',
              tag: 'h2',
              children: [{ type: 'text', text: 'Putting It All Together: A Sample Week' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Here\'s what an optimal week might look like for a working CPA candidate:' }],
            },
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Monday-Friday:', format: 1 },
                { type: 'text', text: ' 30 minutes before work (flashcards/MCQ review), 30 minutes at lunch (video lecture), 1.5 hours after dinner (new material + practice). Total: 2.5 hours/day = 12.5 hours' }
              ],
            },
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Saturday:', format: 1 },
                { type: 'text', text: ' 4-hour study block in the morning, then free afternoon/evening. Focus on simulations and comprehensive review.' }
              ],
            },
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Sunday:', format: 1 },
                { type: 'text', text: ' Complete rest day. Recharge for the week ahead.' }
              ],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Total weekly hours: ~16.5. This pace is sustainable for months and will get you through all four sections within a year.' }],
            },
            {
              type: 'heading',
              tag: 'h2',
              children: [{ type: 'text', text: 'Final Thoughts: It\'s About Progress, Not Perfection' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'You will have bad weeks. Work emergencies will happen. Family obligations will come up. You\'ll get sick, feel unmotivated, or simply need a break. This is normal and expected.' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'What matters is not perfection—it\'s consistency over time. If you study 15 hours most weeks, the occasional 8-hour week won\'t derail you. What derails candidates is letting one bad week turn into a month of avoidance.' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'When you fall off track, don\'t beat yourself up. Simply start again the next day. Every study session moves you closer to your goal, no matter what happened yesterday.' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Thousands of working professionals pass the CPA exam every year. They\'re not superhuman—they\'ve just learned to manage their time effectively. And now you have their playbook. Go make it happen.' }],
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
      title: 'From Zero to CPA in 6 Months: Maria\'s Complete Success Story',
      slug: 'success-story-maria-all-sections-6-months',
      excerpt: 'Maria Rodriguez went from accounting graduate to licensed CPA in just 6 months while working full-time at a Big 4 firm. In this in-depth interview, she shares her complete strategy, daily routine, and the mindset shifts that made it possible.',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'When Maria Rodriguez started her job at Deloitte in September 2024, she had just one goal: earn her CPA license before busy season hit in January. That gave her roughly six months to pass all four sections of the CPA exam—while working full-time and adjusting to life at a Big 4 firm.' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Most people told her it was impossible. Her coworkers said to expect 18-24 months. Online forums were full of horror stories about failed attempts and burnout. But Maria had a plan—and she executed it flawlessly.' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'In January 2025, Maria received her final score: TCP 79. She had passed all four sections on her first attempt. Final scores: FAR 81, AUD 78, REG 84, TCP 79.' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'We sat down with Maria to understand exactly how she did it. What follows is her complete story, strategies, and advice for anyone trying to achieve the same goal.' }],
            },
            {
              type: 'heading',
              tag: 'h2',
              children: [{ type: 'text', text: 'The Starting Point: Assessment and Planning' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: '"The first thing I did was take a diagnostic test," Maria explains. "I wanted to know exactly where I stood. My Master\'s program covered a lot of the material, but I had gaps—especially in governmental accounting and some of the newer standards."' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'This initial assessment was crucial. Instead of treating all topics equally, Maria could focus her limited time on areas that needed the most work. She used Think CPA\'s adaptive learning algorithm to identify these weak spots and build a customized study plan.' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: '"The AI told me I needed about 85 hours for FAR, 70 for AUD, 80 for REG, and 65 for TCP based on my diagnostic scores. That totaled around 300 hours. At 15-20 hours per week, I could do it in six months—but there was no room for error."' }],
            },
            {
              type: 'heading',
              tag: 'h2',
              children: [{ type: 'text', text: 'The Schedule: Ruthless Time Management' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Maria\'s daily schedule during those six months was intense but sustainable:' }],
            },
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: '5:30 AM:', format: 1 },
                { type: 'text', text: ' Wake up, coffee, review yesterday\'s flashcards' }
              ],
            },
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: '6:00-7:30 AM:', format: 1 },
                { type: 'text', text: ' Primary study session (new material)' }
              ],
            },
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: '8:00 AM-6:00 PM:', format: 1 },
                { type: 'text', text: ' Work at Deloitte' }
              ],
            },
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: '12:00-12:30 PM:', format: 1 },
                { type: 'text', text: ' Lunch study session (MCQ practice on phone)' }
              ],
            },
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: '7:00-8:30 PM:', format: 1 },
                { type: 'text', text: ' Evening study session (simulations and review)' }
              ],
            },
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: '9:00 PM:', format: 1 },
                { type: 'text', text: ' Wind down, prepare for tomorrow, bed by 10 PM' }
              ],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: '"On weekdays, I averaged about 3.5 hours of studying," Maria says. "Weekends were bigger—usually 5-6 hours on Saturday. And I always took Sunday completely off. No exceptions."' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'That rest day was non-negotiable. "I know it sounds counterintuitive when you\'re racing against a deadline, but I learned early in my Master\'s that burnout kills more study plans than lack of time. Sunday was for sleeping in, seeing friends, and completely disconnecting from CPA material."' }],
            },
            {
              type: 'heading',
              tag: 'h2',
              children: [{ type: 'text', text: 'The Study Method: Active Learning Over Passive Review' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Maria\'s approach to studying was highly active. "I see candidates who spend hours watching videos and reading textbooks. That\'s passive learning—it feels productive, but retention is low. I focused on active learning: practice questions, simulations, and teaching concepts back to myself."' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Her typical study session looked like this:' }],
            },
            {
              type: 'list',
              listType: 'bullet',
              children: [
                { type: 'listitem', children: [{ type: 'text', text: 'First 15 minutes: Review flashcards from previous topics' }] },
                { type: 'listitem', children: [{ type: 'text', text: 'Next 30-45 minutes: Learn new concept (video or reading)' }] },
                { type: 'listitem', children: [{ type: 'text', text: 'Final 30-45 minutes: Immediately practice MCQs on that concept' }] },
              ],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: '"The key is immediate application," she explains. "Don\'t wait until you\'ve \'finished\' a chapter to start practicing. Practice while the material is fresh. This cements it in your memory."' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Maria also used the Feynman Technique extensively. "After learning something, I\'d explain it out loud as if teaching someone else. If I couldn\'t explain it simply, I didn\'t really understand it. The AI tutor was great for this—I\'d try to explain a concept, and it would point out what I was missing."' }],
            },
            {
              type: 'heading',
              tag: 'h2',
              children: [{ type: 'text', text: 'The Technology: How AI Changed Everything' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Maria credits Think CPA\'s AI-powered platform as a game-changer in her preparation. "Traditional CPA review courses treat everyone the same. You watch the same videos, do the same questions, in the same order. That\'s incredibly inefficient."' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'The adaptive learning algorithm tracked Maria\'s performance across thousands of data points. It knew which topics she\'d mastered and which needed more work. "Every time I logged in, the system would serve me questions targeting my weak areas. I wasn\'t wasting time on stuff I already knew."' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'But the real game-changer was the 24/7 AI tutor. "I studied a lot between 5 and 7 AM, and again late at night. Traditional tutoring isn\'t available then. But I could ask the AI tutor anything, anytime, and get a detailed explanation instantly."' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Maria estimates she asked the AI tutor over 500 questions during her preparation. "Some were simple clarifications. Others were complex conceptual questions that would have taken a human tutor 20 minutes to answer. The AI handled them all, usually within seconds."' }],
            },
            {
              type: 'heading',
              tag: 'h2',
              children: [{ type: 'text', text: 'The Challenges: Real Obstacles and How She Overcame Them' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Maria\'s journey wasn\'t without challenges. "The hardest part was the first month at Deloitte. I was learning a new job, meeting new people, figuring out office dynamics—all while trying to study 3+ hours a day. There were moments I wanted to quit."' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'She also faced skepticism from peers. "Some of my coworkers thought I was crazy for trying to pass all four sections so quickly. They\'d say things like \'you know the average is 18 months, right?\' I had to tune that out and trust my plan."' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'The week before her FAR exam—her first section—Maria hit a wall. "My practice scores were inconsistent. Some days I\'d score 85%, others barely 60%. I was terrified I wasn\'t ready."' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'She turned to the analytics dashboard. "Think CPA showed me that my weak days correlated with specific topics—governmental accounting and consolidations. I spent my last three days drilling only those areas. It probably saved my exam."' }],
            },
            {
              type: 'heading',
              tag: 'h2',
              children: [{ type: 'text', text: 'The Exam Experience: What the Day Was Really Like' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Maria took her exams in the following order: FAR (October), AUD (November), REG (December), TCP (January). She chose this sequence strategically.' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: '"FAR is the beast—it has the most content. I wanted to tackle it first while I was fresh and motivated. AUD and REG are more conceptual, which I find easier. TCP was last because it\'s the newest section and I wanted to see how others performed on it first."' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Her exam day routine was consistent across all four sections:' }],
            },
            {
              type: 'list',
              listType: 'bullet',
              children: [
                { type: 'listitem', children: [{ type: 'text', text: 'No studying the night before—relaxation and early bedtime' }] },
                { type: 'listitem', children: [{ type: 'text', text: 'Wake up early, eat a solid breakfast with protein and complex carbs' }] },
                { type: 'listitem', children: [{ type: 'text', text: 'Arrive 30 minutes early to the testing center' }] },
                { type: 'listitem', children: [{ type: 'text', text: 'Quick review of high-level flashcards in the car' }] },
                { type: 'listitem', children: [{ type: 'text', text: 'Take the optional break after testlet 3, no matter what' }] },
              ],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: '"The break is crucial," she emphasizes. "Your brain is exhausted after 2+ hours of intense testing. Even if you feel fine, take the 15 minutes. Walk around, use the bathroom, have a snack. You\'ll perform better on the simulations."' }],
            },
            {
              type: 'heading',
              tag: 'h2',
              children: [{ type: 'text', text: 'The Results and What Came Next' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Maria passed all four sections on her first attempt:' }],
            },
            {
              type: 'list',
              listType: 'bullet',
              children: [
                { type: 'listitem', children: [{ type: 'text', text: 'FAR: 81 (October)' }] },
                { type: 'listitem', children: [{ type: 'text', text: 'AUD: 78 (November)' }] },
                { type: 'listitem', children: [{ type: 'text', text: 'REG: 84 (December)' }] },
                { type: 'listitem', children: [{ type: 'text', text: 'TCP: 79 (January)' }] },
              ],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: '"When I saw that final score, I cried," she admits. "Six months of early mornings and late nights. Six months of saying no to social events. Six months of trusting a plan when everyone said it couldn\'t be done. And it worked."' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'The timing was perfect. Maria finished her CPA journey just two weeks before busy season began. "I entered busy season as a licensed CPA. That meant higher-level assignments, more client interaction, and yes—a nice bonus from the firm for passing quickly."' }],
            },
            {
              type: 'heading',
              tag: 'h2',
              children: [{ type: 'text', text: 'Maria\'s Top 10 Tips for Future Candidates' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'We asked Maria to share her most important advice for candidates starting their CPA journey:' }],
            },
            {
              type: 'list',
              listType: 'number',
              children: [
                { type: 'listitem', children: [{ type: 'text', text: 'Start with a diagnostic test. Know your weak areas before you make a plan.' }] },
                { type: 'listitem', children: [{ type: 'text', text: 'Use adaptive technology. One-size-fits-all courses waste your time.' }] },
                { type: 'listitem', children: [{ type: 'text', text: 'Study actively, not passively. Practice questions beat reading every time.' }] },
                { type: 'listitem', children: [{ type: 'text', text: 'Protect your sleep. A tired brain doesn\'t retain information.' }] },
                { type: 'listitem', children: [{ type: 'text', text: 'Take one full rest day per week. Burnout is real.' }] },
                { type: 'listitem', children: [{ type: 'text', text: 'Use the AI tutor relentlessly. That\'s what it\'s there for.' }] },
                { type: 'listitem', children: [{ type: 'text', text: 'Trust the analytics. Data knows when you\'re ready better than your gut.' }] },
                { type: 'listitem', children: [{ type: 'text', text: 'Don\'t skip simulations. They\'re half your score.' }] },
                { type: 'listitem', children: [{ type: 'text', text: 'Take every exam break. Your brain needs it.' }] },
                { type: 'listitem', children: [{ type: 'text', text: 'Ignore the doubters. Your timeline is your timeline.' }] },
              ],
            },
            {
              type: 'heading',
              tag: 'h2',
              children: [{ type: 'text', text: 'Final Words' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: '"Looking back, those six months were some of the hardest of my life," Maria reflects. "But they were also some of the most rewarding. I proved to myself that I could do something difficult, stick to a plan, and achieve a goal that seemed impossible."' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: '"If you\'re reading this and wondering whether you can pass the CPA exam quickly—yes, you can. It takes sacrifice. It takes discipline. It takes the right tools and strategies. But it\'s absolutely possible. I\'m proof."' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Maria is now a Senior Associate at Deloitte, specializing in audit. She mentors new hires and frequently shares her CPA study strategies with colleagues beginning their own journeys.' }],
            },
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Ready to start your own CPA journey? ', format: 0 },
                { type: 'text', text: 'Think CPA offers the same AI-powered tools Maria used to pass all four sections in six months. Start your free trial today and see why our pass rate is 89%.', format: 1 },
              ],
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
  console.log('Created Blog Posts with expanded content')

  // Seed Site Settings
  try {
    await payload.updateGlobal({
      slug: 'site-settings',
      data: {
        title: 'Think CPA',
        tagline: 'AI-powered CPA exam prep. Join thousands of candidates who passed on their first try.',
        promoBanner: 'Start your free trial today. Cancel anytime.',
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
