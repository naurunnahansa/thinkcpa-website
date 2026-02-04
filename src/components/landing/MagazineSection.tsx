import Image from 'next/image'
import { Button } from '@/components/ui/button'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.thinkcpa.us'

export default function MagazineSection() {
  return (
    <>
      {/* Section 1 - AI Tutor */}
      <section className="py-28 bg-white border-t">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Kicker */}
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
                24/7 AI Tutor
              </p>

              {/* Main Headline */}
              <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-black text-foreground leading-[0.85] mb-6">
                ASK
                <br />
                ANYTHING.
                <br />
                <span className="text-primary">ANYTIME.</span>
              </h2>

              {/* Subhead */}
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-4 max-w-md">
                Stuck on a concept at 2am? Our AI tutor is always ready.
              </p>

              {/* Detail text */}
              <p className="text-sm text-muted-foreground mb-8 max-w-md">
                Get instant explanations in plain English, not textbook jargon.
                Ask follow-up questions. Learn at your own pace.
              </p>

              {/* Meta info */}
              <p className="text-xs text-muted-foreground/60 uppercase tracking-wider mb-8">
                Avg. response time: 2 seconds · Unlimited questions
              </p>

              <a href={`${APP_URL}/sign-up`}>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-base font-bold">
                  Try it free →
                </Button>
              </a>
            </div>

            <div className="relative aspect-[4/5] rounded overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=1000&fit=crop"
                alt="Student studying with laptop"
                fill
                className="object-cover grayscale"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-xs text-white/60 uppercase tracking-wider mb-1">Real results</p>
                <p className="text-white font-bold text-lg">&quot;It&apos;s like having a tutor on call&quot;</p>
                <p className="text-white/60 text-sm">— Sarah M., passed all 4 sections</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Adaptive Learning */}
      <section className="py-28 bg-accent">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative aspect-[4/5] rounded overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=1000&fit=crop"
                alt="Person studying with notes"
                fill
                className="object-cover grayscale"
              />
              <div className="absolute top-6 left-6 bg-white px-4 py-2">
                <p className="text-xs font-bold uppercase tracking-wider">The Science</p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              {/* Kicker */}
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-foreground/60 mb-4">
                Adaptive Practice
              </p>

              {/* Main Headline */}
              <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-black text-foreground leading-[0.85] mb-6">
                IT LEARNS
                <br />
                HOW YOU
                <br />
                LEARN.
              </h2>

              {/* Subhead */}
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-4 max-w-md">
                Our AI tracks your progress and adapts in real-time.
              </p>

              {/* Detail text */}
              <p className="text-sm text-foreground/70 mb-8 max-w-md">
                Struggling with REG? You&apos;ll see more of it. Crushing FAR? Move on faster.
                Every minute of study time is optimized for maximum impact.
              </p>

              {/* Stats */}
              <div className="flex gap-12 mb-8">
                <div>
                  <p className="text-4xl font-black text-foreground">47%</p>
                  <p className="text-xs text-foreground/60 uppercase tracking-wider">Less study time</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-foreground">2.3x</p>
                  <p className="text-xs text-foreground/60 uppercase tracking-wider">Faster retention</p>
                </div>
              </div>

              <a href={`${APP_URL}/sign-up`}>
                <Button className="bg-foreground hover:bg-foreground/90 text-white px-10 py-6 text-base font-bold">
                  Start learning →
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Pass Rate - Full width editorial */}
      <section className="py-28 bg-primary">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-16 items-end">
            <div className="lg:col-span-3">
              {/* Kicker */}
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary-foreground/60 mb-4">
                The Numbers Don&apos;t Lie
              </p>

              {/* Main Headline - Extra large */}
              <h2 className="font-display text-7xl md:text-8xl lg:text-[10rem] font-black text-primary-foreground leading-[0.8] mb-8">
                89%
                <br />
                <span className="text-5xl md:text-6xl lg:text-7xl">PASS RATE.</span>
              </h2>

              {/* Subhead */}
              <p className="text-2xl md:text-3xl text-primary-foreground/90 leading-snug mb-6 max-w-2xl">
                Nearly double the national average. Our students don&apos;t just pass—they pass with confidence.
              </p>

              {/* Detail */}
              <p className="text-sm text-primary-foreground/60 mb-10 max-w-xl">
                Based on self-reported data from 1,247 Think CPA users who completed
                at least one full section of study material between 2023-2024.
              </p>

              <a href={`${APP_URL}/sign-up`}>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 text-base font-bold">
                  Join them →
                </Button>
              </a>
            </div>

            <div className="lg:col-span-2 relative aspect-[3/4] rounded overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=800&fit=crop"
                alt="Graduates celebrating"
                fill
                className="object-cover grayscale"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white font-bold text-lg">&quot;Finally, I can call myself a CPA&quot;</p>
                <p className="text-white/60 text-sm">— Michael T., Tampa FL</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Quote / Pull quote section */}
      <section className="py-32 bg-white border-t">
        <div className="container">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-8">
              What They&apos;re Saying
            </p>
            <blockquote className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8">
              &quot;After failing REG twice, I switched to Think CPA.
              <span className="text-primary"> Passed with an 82.&quot;</span>
            </blockquote>
            <p className="text-lg text-muted-foreground">
              Jennifer L. · CPA · New York
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
