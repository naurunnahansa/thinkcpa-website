import { Brain, Target, MessageCircle, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI-Powered',
    subtitle: 'Personalized study plans',
    description: 'Adapts to how you learn.',
    color: 'bg-secondary',
  },
  {
    icon: Target,
    title: 'Adaptive',
    subtitle: 'Smart practice',
    description: 'Questions adjust to your level.',
    color: 'bg-accent',
  },
  {
    icon: MessageCircle,
    title: '24/7 Tutor',
    subtitle: 'Always available',
    description: 'Get help anytime you need it.',
    color: 'bg-secondary',
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    subtitle: 'Track everything',
    description: 'Know exactly when you\'re ready.',
    color: 'bg-accent',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-primary">
      <div className="container">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary-foreground/60 mb-4">
            The Platform
          </p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-[0.85]">
            STUDY SMARTER.
            <br />
            PASS FASTER.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={`rounded p-8 ${feature.color}`}
              >
                <Icon className="h-8 w-8 text-foreground mb-6" />
                <p className="text-xs font-bold tracking-[0.15em] uppercase text-foreground/60 mb-2">
                  {feature.subtitle}
                </p>
                <h3 className="text-2xl font-black text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-foreground/70">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
