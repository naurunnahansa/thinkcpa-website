import type { Metadata } from 'next'
import Header from '@/components/landing/Header'
import Footer from '@/components/landing/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Think CPA, operated by AethrLabs, LLC.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 md:py-28">
        <div className="container px-6 md:px-8 max-w-3xl">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">Legal</p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-foreground leading-[0.9] mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mb-12">Last updated: February 24, 2026</p>

          <div className="prose prose-neutral max-w-none space-y-8 text-foreground/80 text-sm leading-relaxed">
            <section>
              <h2 className="text-lg font-black text-foreground mb-3">1. Introduction</h2>
              <p>
                This Privacy Policy describes how AethrLabs, LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a Delaware limited liability company, collects, uses, and shares information in connection with the Think CPA platform (&quot;Service&quot;) available at thinkcpa.us and platform.thinkcpa.us.
              </p>
              <p className="mt-3">
                Think CPA is not affiliated with, endorsed by, or sponsored by the IRS, Treasury Department, AICPA, NASBA, or any state board of accountancy.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black text-foreground mb-3">2. Information We Collect</h2>
              <p className="font-semibold text-foreground">Account Information</p>
              <p>When you create an account, we collect your name, email address, and authentication credentials (managed by our authentication provider, Clerk).</p>

              <p className="font-semibold text-foreground mt-4">Usage Data</p>
              <p>We automatically collect information about how you use the Service, including pages visited, quiz scores, study progress, time spent on lessons, and feature interactions.</p>

              <p className="font-semibold text-foreground mt-4">Payment Information</p>
              <p>Payment processing is handled by Stripe. We do not store your full credit card number. We receive transaction confirmations and subscription status from Stripe.</p>

              <p className="font-semibold text-foreground mt-4">AI Interaction Data</p>
              <p>When you use our AI tutor, we collect the content of your conversations to provide and improve the tutoring experience. These conversations are processed by third-party AI providers (Google Gemini).</p>

              <p className="font-semibold text-foreground mt-4">Device and Technical Data</p>
              <p>We collect IP address, browser type, device type, operating system, and referral URLs through Vercel Analytics.</p>
            </section>

            <section>
              <h2 className="text-lg font-black text-foreground mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide, maintain, and improve the Service</li>
                <li>Personalize your study experience and adaptive learning paths</li>
                <li>Process payments and manage subscriptions</li>
                <li>Send transactional emails (account confirmation, password resets, subscription updates)</li>
                <li>Analyze usage patterns to improve our platform</li>
                <li>Respond to support requests</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-black text-foreground mb-3">4. Information Sharing</h2>
              <p>We do not sell your personal information. We share information with:</p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li><strong>Service Providers:</strong> Clerk (authentication), Stripe (payments), Neon (database hosting), Vercel (hosting and analytics), Google (AI services), Upstash (rate limiting)</li>
                <li><strong>Legal Requirements:</strong> When required by law, subpoena, or government request</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-black text-foreground mb-3">5. Data Retention</h2>
              <p>We retain your account data for as long as your account is active. If you delete your account, we will delete or anonymize your personal data within 30 days, except where we are required to retain it for legal or compliance purposes.</p>
            </section>

            <section>
              <h2 className="text-lg font-black text-foreground mb-3">6. Data Security</h2>
              <p>We implement industry-standard security measures including encryption in transit (TLS), encrypted database connections, and secure authentication through Clerk. However, no method of electronic transmission or storage is 100% secure.</p>
            </section>

            <section>
              <h2 className="text-lg font-black text-foreground mb-3">7. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict processing of your data</li>
                <li>Data portability</li>
              </ul>
              <p className="mt-3">To exercise these rights, contact us at hello@aethrlabs.ai.</p>
            </section>

            <section>
              <h2 className="text-lg font-black text-foreground mb-3">8. Cookies and Tracking</h2>
              <p>We use essential cookies for authentication and session management. We use Vercel Analytics for privacy-friendly usage analytics (no personal data is collected by the analytics tool). We do not use advertising cookies or trackers.</p>
            </section>

            <section>
              <h2 className="text-lg font-black text-foreground mb-3">9. Children&apos;s Privacy</h2>
              <p>The Service is not directed to individuals under the age of 16. We do not knowingly collect personal information from children under 16. If we become aware that we have collected data from a child under 16, we will delete it promptly.</p>
            </section>

            <section>
              <h2 className="text-lg font-black text-foreground mb-3">10. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on this page and updating the &quot;Last updated&quot; date.</p>
            </section>

            <section>
              <h2 className="text-lg font-black text-foreground mb-3">11. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, contact us at:</p>
              <div className="mt-3">
                <p className="font-semibold text-foreground">AethrLabs, LLC</p>
                <p>131 Continental Dr, Suite 305, Newark, DE 19713</p>
                <p>Email: hello@aethrlabs.ai</p>
                <p>Phone: (302) 407-0915</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
