import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Countdown from './Countdown'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.thinkcpa.us'

export default function MagazineSection() {
  return (
    <>
      {/* Section 1 - CPA Coach */}
      <section className="py-28 bg-white border-t">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Kicker */}
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
                24/7 Agentic CPA Coach
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
                Stuck on a concept at 2am? Your CPA Coach is always ready.
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
                  Try it free
                </Button>
              </a>
            </div>

            <div className="relative rounded-lg overflow-hidden border border-border">
              <Image
                src="/product/lesson-sidebar.png"
                alt="ThinkCPA CPA Coach sidebar helping explain GAAP concepts"
                width={1456}
                height={816}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Adaptive Learning */}
      <section className="py-28 bg-accent">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative rounded-lg overflow-hidden border border-border">
              <Image
                src="/product/quizzes.png"
                alt="ThinkCPA quiz performance dashboard with score trends"
                width={1456}
                height={816}
                className="w-full h-auto"
              />
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
                Your CPA Coach tracks your progress and adapts in real-time.
              </p>

              {/* Detail text */}
              <p className="text-sm text-foreground/70 mb-8 max-w-md">
                Struggling with REG? You&apos;ll see more of it. Crushing FAR? Move on faster.
                Every minute of study time is optimized for maximum impact.
              </p>

              {/* Stats */}
              <div className="flex gap-12 mb-8">
                <div>
                  <p className="text-4xl font-black text-foreground">95%</p>
                  <p className="text-xs text-foreground/60 uppercase tracking-wider">Off right now</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-foreground">$5</p>
                  <p className="text-xs text-foreground/60 uppercase tracking-wider">/month</p>
                </div>
              </div>

              <a href={`${APP_URL}/sign-up`}>
                <Button className="bg-foreground hover:bg-foreground/90 text-white px-10 py-6 text-base font-bold">
                  Start learning
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Score Release Sale with Countdown */}
      <section className="py-28 bg-primary">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              {/* Kicker */}
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary-foreground/60 mb-4">
                Score Release Sale
              </p>

              {/* Main Headline - Extra large */}
              <h2 className="font-display text-7xl md:text-8xl lg:text-[10rem] font-black text-primary-foreground leading-[0.8] mb-8">
                95%
                <br />
                <span className="text-5xl md:text-6xl lg:text-7xl">OFF.</span>
              </h2>

              {/* Subhead */}
              <p className="text-2xl md:text-3xl text-primary-foreground/90 leading-snug mb-6 max-w-2xl">
                Stop paying $2,000+ to pass one section. This is everything you need for the price of a coffee.
              </p>

              {/* Detail */}
              <p className="text-sm text-primary-foreground/60 mb-8 max-w-xl">
                Podcast lessons. MCQs. Task-based simulations. Full course access.
                No contracts. No catch. Deal won&apos;t last.
              </p>

              {/* Countdown */}
              <div className="mb-10">
                <p className="text-xs font-bold tracking-[0.15em] uppercase text-primary-foreground/50 mb-3">
                  Sale ends in
                </p>
                <Countdown className="text-primary-foreground" />
              </div>

              <a href={`${APP_URL}/sign-up`}>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 text-base font-bold">
                  Lock in $5/month
                </Button>
              </a>
            </div>

            <div className="relative rounded-lg overflow-hidden border border-white/20">
              <Image
                src="/product/mcq.png"
                alt="ThinkCPA multiple choice question on weighted average shares"
                width={1456}
                height={816}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Podcast */}
      <section className="py-28 bg-accent">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative rounded-lg overflow-hidden border border-border">
              <Image
                src="/product/lesson.png"
                alt="ThinkCPA course lesson on GAAP and Financial Reporting Framework"
                width={1456}
                height={816}
                className="w-full h-auto"
              />
            </div>

            <div className="order-1 lg:order-2">
              {/* Kicker */}
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-foreground/60 mb-4">
                New: Audio Learning
              </p>

              {/* Main Headline */}
              <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-black text-foreground leading-[0.85] mb-6">
                FAR.
                <br />
                <span className="text-primary">AS A PODCAST.</span>
              </h2>

              {/* Subhead */}
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-4 max-w-md">
                Turn your commute into study time. Listen to all of FAR while you drive, work out, or do dishes.
              </p>

              {/* Detail text */}
              <p className="text-sm text-foreground/70 mb-8 max-w-md">
                Every topic, every concept, explained in audio format. It&apos;s like having a CPA review course in your ears. Pause, rewind, repeat until it sticks.
              </p>

              {/* Stats */}
              <div className="flex gap-12 mb-8">
                <div>
                  <p className="text-4xl font-black text-foreground">50+</p>
                  <p className="text-xs text-foreground/60 uppercase tracking-wider">Hours of audio</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-foreground">All</p>
                  <p className="text-xs text-foreground/60 uppercase tracking-wider">FAR topics covered</p>
                </div>
              </div>

              <a href={`${APP_URL}/sign-up`}>
                <Button className="bg-foreground hover:bg-foreground/90 text-white px-10 py-6 text-base font-bold">
                  Start listening
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - No Judgment */}
      <section className="py-28 bg-white border-t">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Kicker */}
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
                No Stupid Questions
              </p>

              {/* Main Headline */}
              <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-black text-foreground leading-[0.85] mb-6">
                ASK YOUR
                <br />
                <span className="text-primary">&quot;DUMB&quot;</span>
                <br />
                QUESTIONS.
              </h2>

              {/* Subhead */}
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-4 max-w-md">
                Your CPA Coach won&apos;t judge you. Ever.
              </p>

              {/* Detail text */}
              <p className="text-sm text-muted-foreground mb-8 max-w-md">
                Ask the same question 47 times. It won&apos;t sigh. It won&apos;t give you that look.
                It&apos;ll just explain it again, differently, until it clicks.
                That&apos;s literally what it&apos;s there for.
              </p>

              {/* Fun stats */}
              <div className="flex gap-8 mb-8">
                <div>
                  <p className="text-3xl font-black text-foreground">0</p>
                  <p className="text-xs text-muted-foreground/60 uppercase tracking-wider">Judgment</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-foreground">24/7</p>
                  <p className="text-xs text-muted-foreground/60 uppercase tracking-wider">Available</p>
                </div>
              </div>

              <a href={`${APP_URL}/sign-up`}>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-base font-bold">
                  Ask away
                </Button>
              </a>
            </div>

            <div className="relative rounded-lg overflow-hidden border border-border">
              <Image
                src="/product/simulation.png"
                alt="ThinkCPA task-based simulation with calculator and research tools"
                width={1456}
                height={816}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - Quote / Pull quote section */}
      <section className="py-32 bg-white border-t">
        <div className="container">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-8">
              What They&apos;re Saying
            </p>
            <blockquote className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8">
              &quot;I&apos;ve spent more on a coffee that made me sad.
              <span className="text-primary"> This $5 made me a CPA.&quot;</span>
            </blockquote>
            <p className="text-lg text-muted-foreground">
              Lock in $5/month before the sale ends
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
