import type { Metadata } from 'next'
import Header from '@/components/landing/Header'
import Footer from '@/components/landing/Footer'

export const metadata: Metadata = {
  title: 'Help Center',
  description: 'Get answers to common questions about Think CPA, your account, subscriptions, and CPA exam prep.',
  alternates: { canonical: '/help' },
}

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://platform.thinkcpa.us'

const sections = [
  {
    title: 'Getting Started',
    faqs: [
      {
        q: 'How do I create an account?',
        a: 'Visit platform.thinkcpa.us and click "Sign up." You can register with your email or Google account. Once signed up, you\'ll be guided through a quick onboarding to personalize your study plan.',
      },
      {
        q: 'What CPA exam sections do you cover?',
        a: 'We currently cover FAR (Financial Accounting and Reporting) with full course content including lessons, MCQs, and task-based simulations. Additional sections (AUD, REG, BEC) are coming soon.',
      },
      {
        q: 'Do I need any prerequisites?',
        a: 'No prerequisites are required. Think CPA is designed for all levels, from first-time candidates to those retaking the exam. The adaptive system meets you where you are.',
      },
    ],
  },
  {
    title: 'Subscriptions and Billing',
    faqs: [
      {
        q: 'How much does Think CPA cost?',
        a: 'We offer a Free tier with limited access, and a Pro plan that includes full course content, unlimited AI tutoring, adaptive quizzes, and progress analytics. Check our pricing page for current rates and promotions.',
      },
      {
        q: 'How do I cancel my subscription?',
        a: 'You can cancel anytime from your account settings on the platform. Your access continues until the end of your current billing period. No partial refunds are issued for unused time.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit and debit cards through Stripe, our secure payment processor. We do not store your card details directly.',
      },
      {
        q: 'Can I get a refund?',
        a: 'We offer refunds on a case-by-case basis within 7 days of purchase. Contact us at hello@aethrlabs.ai with your request.',
      },
    ],
  },
  {
    title: 'Using the Platform',
    faqs: [
      {
        q: 'What is the AI CPA Coach?',
        a: 'Your AI CPA Coach is a 24/7 tutor built into the platform. It can answer questions about accounting concepts, explain quiz answers, help you work through problems, and adapt to your learning style.',
      },
      {
        q: 'How do adaptive quizzes work?',
        a: 'Our quizzes adjust difficulty based on your performance. As you answer questions, the system identifies your strengths and weaknesses and focuses on areas where you need the most practice.',
      },
      {
        q: 'Can I study on my phone?',
        a: 'Yes. Think CPA is fully responsive and works on any device. Access lessons, quizzes, and your AI tutor from your phone or tablet browser at platform.thinkcpa.us.',
      },
      {
        q: 'What are task-based simulations (TBS)?',
        a: 'TBS are practice exercises that mimic the format of the actual CPA exam. They test your ability to apply knowledge in realistic scenarios, including research tasks, journal entries, and document analysis.',
      },
      {
        q: 'How is FAR as a Podcast different from lessons?',
        a: 'FAR as a Podcast delivers the same course content in audio format so you can study while commuting, exercising, or on the go. It covers all the same topics as the written lessons.',
      },
    ],
  },
  {
    title: 'Account and Technical',
    faqs: [
      {
        q: 'I forgot my password. How do I reset it?',
        a: 'Click "Log in" and then "Forgot password" on the sign-in page. Enter your email and you\'ll receive a reset link.',
      },
      {
        q: 'How do I delete my account?',
        a: 'Contact us at hello@aethrlabs.ai and we\'ll process your account deletion within 30 days. All personal data will be removed per our Privacy Policy.',
      },
      {
        q: 'Is my data secure?',
        a: 'Yes. We use encryption in transit (TLS), secure authentication through Clerk, and encrypted database connections. Payment processing is handled by Stripe. See our Privacy Policy for full details.',
      },
    ],
  },
]

export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 md:py-28">
        <div className="container px-6 md:px-8 max-w-3xl">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">Support</p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-foreground leading-[0.9] mb-4">
            Help Center
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-12">
            Find answers to common questions. Need more help? Reach out at{' '}
            <a href="mailto:hello@aethrlabs.ai" className="font-semibold text-foreground hover:text-primary transition-colors underline underline-offset-2">
              hello@aethrlabs.ai
            </a>{' '}
            or call{' '}
            <a href="tel:+13024070915" className="font-semibold text-foreground hover:text-primary transition-colors underline underline-offset-2">
              +1 (302) 407-0915
            </a>.
          </p>

          <div className="space-y-16">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-black text-foreground mb-6 pb-3 border-b border-border">
                  {section.title}
                </h2>
                <div className="space-y-6">
                  {section.faqs.map((faq) => (
                    <div key={faq.q}>
                      <h3 className="text-sm font-bold text-foreground mb-2">{faq.q}</h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Still need help */}
          <div className="mt-16 p-8 rounded border border-border bg-secondary">
            <h2 className="text-lg font-black text-foreground mb-2">Still need help?</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Our team is here to help you succeed. Get in touch and we will get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:hello@aethrlabs.ai"
                className="inline-flex items-center justify-center h-11 px-6 rounded bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                Email us
              </a>
              <a
                href="tel:+13024070915"
                className="inline-flex items-center justify-center h-11 px-6 rounded border border-border bg-white text-foreground text-sm font-semibold hover:bg-accent transition-colors"
              >
                Call +1 (302) 407-0915
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
