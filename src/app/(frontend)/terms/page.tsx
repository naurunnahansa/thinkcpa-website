import type { Metadata } from 'next'
import Header from '@/components/landing/Header'
import Footer from '@/components/landing/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Think CPA, operated by AethrLabs, LLC.',
  alternates: { canonical: '/terms' },
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 md:py-28">
        <div className="container px-6 md:px-8 max-w-3xl">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">Legal</p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-foreground leading-[0.9] mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground mb-12">Last updated: February 24, 2026</p>

          <div className="prose prose-neutral max-w-none space-y-8 text-foreground/80 text-sm leading-relaxed">
            <section>
              <h2 className="text-lg font-black text-foreground mb-3">1. Agreement to Terms</h2>
              <p>
                By accessing or using the Think CPA platform (&quot;Service&quot;) operated by AethrLabs, LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a Delaware limited liability company, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black text-foreground mb-3">2. Description of Service</h2>
              <p>
                Think CPA is an online CPA exam preparation platform that provides study materials, practice questions, AI-powered tutoring, and progress tracking tools. The Service is available at thinkcpa.us and platform.thinkcpa.us.
              </p>
              <p className="mt-3 font-semibold text-foreground">
                Think CPA is not affiliated with, endorsed by, or sponsored by the IRS, U.S. Treasury Department, AICPA, NASBA, or any state board of accountancy.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black text-foreground mb-3">3. Account Registration</h2>
              <p>To use the Service, you must create an account. You agree to:</p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Promptly update any changes to your information</li>
                <li>Accept responsibility for all activity under your account</li>
              </ul>
              <p className="mt-3">You must be at least 16 years old to use the Service.</p>
            </section>

            <section>
              <h2 className="text-lg font-black text-foreground mb-3">4. Subscriptions and Payments</h2>
              <p>
                Think CPA offers free and paid subscription plans. Paid subscriptions are billed on a recurring basis (monthly or as specified at checkout) through Stripe.
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li><strong>Billing:</strong> Your subscription will automatically renew at the end of each billing period unless you cancel before the renewal date.</li>
                <li><strong>Cancellation:</strong> You may cancel your subscription at any time through your account settings. Cancellation takes effect at the end of the current billing period. No partial refunds are issued for unused time within a billing period.</li>
                <li><strong>Price Changes:</strong> We may change subscription prices with 30 days notice. Existing subscribers will be notified before any price increase takes effect.</li>
                <li><strong>Promotional Pricing:</strong> Sale prices and promotional offers are time-limited and subject to the terms stated at the time of purchase.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-black text-foreground mb-3">5. Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Share your account with others or allow multiple users to access a single account</li>
                <li>Copy, distribute, or reproduce course materials, questions, or content from the Service</li>
                <li>Use automated tools, bots, or scrapers to access or extract content</li>
                <li>Reverse engineer or attempt to extract source code from the platform</li>
                <li>Use the Service for any unlawful purpose</li>
                <li>Interfere with or disrupt the Service or its infrastructure</li>
                <li>Attempt to gain unauthorized access to other users&apos; accounts</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-black text-foreground mb-3">6. Intellectual Property</h2>
              <p>
                All content on the Service, including but not limited to lessons, questions, simulations, graphics, and software, is the property of AethrLabs, LLC or its licensors and is protected by copyright and intellectual property laws.
              </p>
              <p className="mt-3">
                Your subscription grants you a limited, non-exclusive, non-transferable license to access and use the content for personal, non-commercial CPA exam preparation purposes only.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black text-foreground mb-3">7. AI Tutor</h2>
              <p>
                The AI tutor feature uses artificial intelligence to provide study assistance. While we strive for accuracy, AI-generated responses may contain errors. The AI tutor is a supplementary study tool and should not be your sole source of exam preparation.
              </p>
              <p className="mt-3">
                We are not responsible for any errors in AI-generated content or any consequences of relying on AI-generated advice.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black text-foreground mb-3">8. No Guarantee of Results</h2>
              <p>
                Think CPA is a study tool designed to help you prepare for the CPA exam. We do not guarantee that you will pass the CPA exam or achieve any specific score. Exam results depend on many factors including individual effort, prior knowledge, and exam conditions.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black text-foreground mb-3">9. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, AethrLabs, LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising out of or related to your use of the Service.
              </p>
              <p className="mt-3">
                Our total liability for any claims arising from or related to these Terms or the Service shall not exceed the amount you paid us in the 12 months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black text-foreground mb-3">10. Disclaimer of Warranties</h2>
              <p>
                The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black text-foreground mb-3">11. Termination</h2>
              <p>
                We may suspend or terminate your access to the Service at any time for violation of these Terms or for any other reason at our discretion. Upon termination, your right to use the Service ceases immediately. Sections that by their nature should survive termination will survive.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black text-foreground mb-3">12. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the State of Delaware, without regard to conflict of law principles. Any disputes arising from these Terms or the Service shall be resolved in the courts of the State of Delaware.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black text-foreground mb-3">13. Changes to Terms</h2>
              <p>
                We may update these Terms from time to time. We will notify you of material changes by posting the updated terms on this page and updating the &quot;Last updated&quot; date. Continued use of the Service after changes constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black text-foreground mb-3">14. Contact Us</h2>
              <p>If you have questions about these Terms, contact us at:</p>
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
