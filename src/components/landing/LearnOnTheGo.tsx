'use client'

import Image from 'next/image'
import { useEffect, useRef, useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const screens = [
  { src: '/product/mobile/dashboard.png', alt: 'ThinkCPA dashboard with stats and daily overview' },
  { src: '/product/mobile/lesson.png', alt: 'FAR F1 lesson on GAAP hierarchy' },
  { src: '/product/mobile/continue-learning.png', alt: 'Continue learning with course progress' },
  { src: '/product/mobile/learning-journey.png', alt: 'Learning journey chart and quick stats' },
  { src: '/product/mobile/browse-courses.png', alt: 'Browse all CPA exam courses' },
  { src: '/product/mobile/quizzes.png', alt: 'Quiz dashboard with scores and streaks' },
]

export default function LearnOnTheGo() {
  const [active, setActive] = useState(0)
  const paused = useRef(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null)

  const goTo = useCallback((index: number) => {
    setActive((index + screens.length) % screens.length)
  }, [])

  // Auto-advance every 3s
  useEffect(() => {
    const tick = () => {
      if (!paused.current) {
        setActive((prev) => (prev + 1) % screens.length)
      }
      timeoutRef.current = setTimeout(tick, 3000)
    }
    timeoutRef.current = setTimeout(tick, 3000)
    return () => clearTimeout(timeoutRef.current)
  }, [])

  // Pause on hover/touch, resume on leave
  const handlePause = () => { paused.current = true }
  const handleResume = () => { paused.current = false }

  return (
    <section className="py-16 md:py-28 bg-white border-t">
      <div className="container px-6 md:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-12 md:mb-20">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
              Mobile
            </p>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[0.85]">
              LEARN ON THE GO.
            </h2>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => goTo(active - 1)}
              className="p-3 rounded border border-border bg-white hover:bg-accent transition-colors"
              aria-label="Previous screen"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => goTo(active + 1)}
              className="p-3 rounded border border-border bg-white hover:bg-accent transition-colors"
              aria-label="Next screen"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={handlePause}
          onMouseLeave={handleResume}
          onTouchStart={handlePause}
          onTouchEnd={handleResume}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${active * (100 / 3)}%)`,
            }}
          >
            {screens.map((screen) => (
              <div
                key={screen.src}
                className="shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-3"
              >
                <div className="rounded-2xl border border-border bg-white overflow-hidden">
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    width={1206}
                    height={2222}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {screens.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === active ? 'bg-primary' : 'bg-border'
              }`}
              aria-label={`Go to screen ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
