import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Countdown from './Countdown'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.thinkcpa.us'

export default function MagazineSection() {
  return (
    <>
      {/* Section 1 - CPA Coach */}
      <section className="grid lg:grid-cols-2 border-t">
        <div className="flex items-center py-12 lg:py-28 px-6 md:px-8 lg:px-16 xl:px-24 bg-white">
          <div className="max-w-xl">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
              24/7 Agentic CPA Coach
            </p>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-foreground leading-[0.85] mb-6">
              ASK
              <br />
              ANYTHING.
              <br />
              <span className="text-primary">ANYTIME.</span>
            </h2>
            <p className="text-base sm:text-xl md:text-2xl text-foreground/80 leading-relaxed mb-4 max-w-md">
              Stuck on a concept at 2am? Your CPA Coach is always ready.
            </p>
            <p className="text-sm text-muted-foreground mb-6 md:mb-8 max-w-md">
              Get instant explanations in plain English, not textbook jargon.
              Ask follow-up questions. Learn at your own pace.
            </p>
            <p className="text-xs text-muted-foreground/60 uppercase tracking-wider mb-6 md:mb-8">
              Avg. response time: 2 seconds · Unlimited questions
            </p>
            <a href={`${APP_URL}/sign-up`}>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 md:px-10 py-5 md:py-6 text-base font-bold">
                Try it free
              </Button>
            </a>
          </div>
        </div>
        <div className="relative min-h-[250px] md:min-h-[350px] lg:min-h-0 bg-secondary border-t lg:border-t-0 lg:border-l">
          <Image
            src="/product/overview.png"
            alt="ThinkCPA course overview with evaluations and CPA Coach"
            fill
            className="object-cover object-left-top"
          />
        </div>
      </section>

      {/* Section 2 - Adaptive Learning */}
      <section className="grid lg:grid-cols-2 border-t">
        <div className="relative min-h-[250px] md:min-h-[350px] lg:min-h-0 bg-secondary border-b lg:border-b-0 lg:border-r order-2 lg:order-1">
          <Image
            src="/product/quizzes.png"
            alt="ThinkCPA quiz performance dashboard with score trends"
            fill
            className="object-cover object-left-top"
          />
        </div>
        <div className="flex items-center py-12 lg:py-28 px-6 md:px-8 lg:px-16 xl:px-24 bg-accent order-1 lg:order-2">
          <div className="max-w-xl">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-foreground/60 mb-4">
              Adaptive Practice
            </p>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-foreground leading-[0.85] mb-6">
              IT LEARNS
              <br />
              HOW YOU
              <br />
              LEARN.
            </h2>
            <p className="text-base sm:text-xl md:text-2xl text-foreground/80 leading-relaxed mb-4 max-w-md">
              Your CPA Coach tracks your progress and adapts in real-time.
            </p>
            <p className="text-sm text-foreground/70 mb-6 md:mb-8 max-w-md">
              Struggling with REG? You&apos;ll see more of it. Crushing FAR? Move on faster.
              Every minute of study time is optimized for maximum impact.
            </p>
            <div className="flex gap-8 md:gap-12 mb-6 md:mb-8">
              <div>
                <p className="text-3xl md:text-4xl font-black text-foreground">95%</p>
                <p className="text-xs text-foreground/60 uppercase tracking-wider">Off right now</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-black text-foreground">$5</p>
                <p className="text-xs text-foreground/60 uppercase tracking-wider">/month</p>
              </div>
            </div>
            <a href={`${APP_URL}/sign-up`}>
              <Button className="bg-foreground hover:bg-foreground/90 text-white px-8 md:px-10 py-5 md:py-6 text-base font-bold">
                Start learning
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Section 3 - Score Release Sale with Countdown */}
      <section className="grid lg:grid-cols-2 border-t">
        <div className="flex items-center py-12 lg:py-28 px-6 md:px-8 lg:px-16 xl:px-24 bg-primary">
          <div className="max-w-xl">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary-foreground/60 mb-4">
              Score Release Sale
            </p>
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black text-primary-foreground leading-[0.8] mb-6 md:mb-8">
              95%
              <br />
              <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl">OFF.</span>
            </h2>
            <p className="text-lg sm:text-2xl md:text-3xl text-primary-foreground/90 leading-snug mb-4 md:mb-6 max-w-2xl">
              Stop paying $2,000+ to pass one section. <span className="line-through text-primary-foreground/50">$100/month</span>{' '}
              <span className="text-accent font-black">$5/month</span>. Everything you need for the price of a coffee.
            </p>
            <p className="text-sm text-primary-foreground/60 mb-6 md:mb-8 max-w-xl">
              Podcast lessons. MCQs. Task-based simulations. Full course access.
              No contracts. No catch. Sale ends Friday.
            </p>
            <div className="mb-8 md:mb-10">
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-primary-foreground/50 mb-3">
                Sale ends Friday
              </p>
              <Countdown className="text-primary-foreground" />
            </div>
            <a href={`${APP_URL}/sign-up`}>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 md:px-10 py-5 md:py-6 text-base font-bold">
                Lock in $5/month
              </Button>
            </a>
          </div>
        </div>
        <div className="relative min-h-[250px] md:min-h-[350px] lg:min-h-0 bg-secondary border-t lg:border-t-0 lg:border-l">
          <Image
            src="/product/mcq.png"
            alt="ThinkCPA multiple choice question on weighted average shares"
            fill
            className="object-cover object-left-top"
          />
        </div>
      </section>

      {/* Section 4 - Podcast */}
      <section className="grid lg:grid-cols-2 border-t">
        <div className="relative min-h-[250px] md:min-h-[350px] lg:min-h-0 bg-secondary border-b lg:border-b-0 lg:border-r order-2 lg:order-1">
          <Image
            src="/product/courses.png"
            alt="ThinkCPA course catalog with FAR review modules"
            fill
            className="object-cover object-left-top"
          />
        </div>
        <div className="flex items-center py-12 lg:py-28 px-6 md:px-8 lg:px-16 xl:px-24 bg-accent order-1 lg:order-2">
          <div className="max-w-xl">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-foreground/60 mb-4">
              New: Audio Learning
            </p>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-foreground leading-[0.85] mb-6">
              FAR.
              <br />
              <span className="text-primary">AS A PODCAST.</span>
            </h2>
            <p className="text-base sm:text-xl md:text-2xl text-foreground/80 leading-relaxed mb-4 max-w-md">
              Turn your commute into study time. Listen to all of FAR while you drive, work out, or do dishes.
            </p>
            <p className="text-sm text-foreground/70 mb-6 md:mb-8 max-w-md">
              Every topic, every concept, explained in audio format. It&apos;s like having a CPA review course in your ears. Pause, rewind, repeat until it sticks.
            </p>
            <div className="flex gap-8 md:gap-12 mb-6 md:mb-8">
              <div>
                <p className="text-3xl md:text-4xl font-black text-foreground">50+</p>
                <p className="text-xs text-foreground/60 uppercase tracking-wider">Hours of audio</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-black text-foreground">All</p>
                <p className="text-xs text-foreground/60 uppercase tracking-wider">FAR topics covered</p>
              </div>
            </div>
            <a href={`${APP_URL}/sign-up`}>
              <Button className="bg-foreground hover:bg-foreground/90 text-white px-8 md:px-10 py-5 md:py-6 text-base font-bold">
                Start listening
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Section 5 - No Judgment */}
      <section className="grid lg:grid-cols-2 border-t">
        <div className="flex items-center py-12 lg:py-28 px-6 md:px-8 lg:px-16 xl:px-24 bg-white">
          <div className="max-w-xl">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
              No Stupid Questions
            </p>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-foreground leading-[0.85] mb-6">
              ASK YOUR
              <br />
              <span className="text-primary">&quot;DUMB&quot;</span>
              <br />
              QUESTIONS.
            </h2>
            <p className="text-base sm:text-xl md:text-2xl text-foreground/80 leading-relaxed mb-4 max-w-md">
              Your CPA Coach won&apos;t judge you. Ever.
            </p>
            <p className="text-sm text-muted-foreground mb-6 md:mb-8 max-w-md">
              Ask the same question 47 times. It won&apos;t sigh. It won&apos;t give you that look.
              It&apos;ll just explain it again, differently, until it clicks.
              That&apos;s literally what it&apos;s there for.
            </p>
            <div className="flex gap-6 md:gap-8 mb-6 md:mb-8">
              <div>
                <p className="text-2xl md:text-3xl font-black text-foreground">0</p>
                <p className="text-xs text-muted-foreground/60 uppercase tracking-wider">Judgment</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-black text-foreground">24/7</p>
                <p className="text-xs text-muted-foreground/60 uppercase tracking-wider">Available</p>
              </div>
            </div>
            <a href={`${APP_URL}/sign-up`}>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 md:px-10 py-5 md:py-6 text-base font-bold">
                Ask away
              </Button>
            </a>
          </div>
        </div>
        <div className="relative min-h-[250px] md:min-h-[350px] lg:min-h-0 bg-secondary border-t lg:border-t-0 lg:border-l">
          <Image
            src="/product/simulation.png"
            alt="ThinkCPA task-based simulation with calculator and research tools"
            fill
            className="object-cover object-left-top"
          />
        </div>
      </section>

      {/* Section 6 - Quote */}
      <section className="py-16 md:py-32 bg-white border-t">
        <div className="container px-6 md:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-6 md:mb-8">
              What They&apos;re Saying
            </p>
            <blockquote className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 md:mb-8">
              &quot;I&apos;ve spent more on a coffee that made me sad.
              <span className="text-primary"> This $5 made me a CPA.&quot;</span>
            </blockquote>
            <p className="text-base md:text-lg text-muted-foreground">
              Lock in $5/month before the sale ends
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
