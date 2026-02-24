import Image from 'next/image'

const screens = [
  { src: '/product/mobile/dashboard.png', alt: 'ThinkCPA dashboard', rotate: '-6deg', top: '0%', left: '0%', z: 2 },
  { src: '/product/mobile/lesson.png', alt: 'FAR F1 lesson', rotate: '4deg', top: '5%', left: '30%', z: 3 },
  { src: '/product/mobile/continue-learning.png', alt: 'Continue learning', rotate: '-3deg', top: '2%', left: '60%', z: 1 },
  { src: '/product/mobile/learning-journey.png', alt: 'Learning journey', rotate: '5deg', top: '45%', left: '5%', z: 4 },
  { src: '/product/mobile/browse-courses.png', alt: 'Browse courses', rotate: '-4deg', top: '40%', left: '35%', z: 5 },
  { src: '/product/mobile/quizzes.png', alt: 'Quizzes dashboard', rotate: '3deg', top: '48%', left: '65%', z: 2 },
]

export default function LearnOnTheGo() {
  return (
    <section className="relative bg-primary border-t overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
        {/* Left - Copy */}
        <div className="flex items-center py-16 md:py-28 px-6 md:px-8 lg:px-16 xl:px-24">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary-foreground/60 mb-4">
              Mobile
            </p>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-[0.85] mb-6">
              LEARN ON
              <br />
              THE GO.
            </h2>
            <p className="text-base sm:text-lg text-primary-foreground/70 max-w-md leading-relaxed">
              Full course access from your phone. Lessons, quizzes, progress tracking, and your AI tutor -- all in your pocket.
            </p>
          </div>
        </div>

        {/* Right - Scattered screenshots collage */}
        <div className="relative min-h-[400px] lg:min-h-0">
          {screens.map((screen) => (
            <div
              key={screen.src}
              className="absolute w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px]"
              style={{
                top: screen.top,
                left: screen.left,
                zIndex: screen.z,
                transform: `rotate(${screen.rotate})`,
              }}
            >
              <div className="rounded-xl border border-white/20 bg-white overflow-hidden shadow-lg">
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
    </section>
  )
}
