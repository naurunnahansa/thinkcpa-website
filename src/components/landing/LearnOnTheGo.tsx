'use client'

import Image from 'next/image'
import { useRef } from 'react'
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
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const amount = 280
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  return (
    <section className="py-16 md:py-28 bg-secondary border-t">
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

          {/* Navigation arrows - desktop only */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded border border-border bg-white hover:bg-accent transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded border border-border bg-white hover:bg-accent transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal scroll of phone screens */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 md:px-8 pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Left spacer for container alignment */}
        <div className="shrink-0 w-0 md:w-[calc((100vw-1280px)/2+1rem)] lg:w-[calc((100vw-1280px)/2+1rem)]" />

        {screens.map((screen) => (
          <div
            key={screen.src}
            className="shrink-0 snap-start w-[220px] sm:w-[240px] md:w-[260px]"
          >
            <div className="rounded-2xl border border-border bg-white overflow-hidden shadow-sm">
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

        {/* Right spacer */}
        <div className="shrink-0 w-6 md:w-[calc((100vw-1280px)/2+1rem)]" />
      </div>
    </section>
  )
}
