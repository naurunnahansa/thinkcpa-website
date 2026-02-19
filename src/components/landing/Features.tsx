import { Brain, Target, MessageCircle, BarChart3, LucideIcon } from 'lucide-react'

// Icon mapping for CMS (matches Payload select options)
const iconMap: Record<string, LucideIcon> = {
  Brain: Brain,
  Target: Target,
  MessageCircle: MessageCircle,
  BarChart3: BarChart3,
}

// Default features (fallback)
const defaultFeatures = [
  {
    icon: 'Brain',
    title: 'Agentic',
    subtitle: 'Personalized study plans',
    description: 'Adapts to how you learn.',
    colorScheme: 'secondary',
  },
  {
    icon: 'Target',
    title: 'Adaptive',
    subtitle: 'Smart practice',
    description: 'Questions adjust to your level.',
    colorScheme: 'accent',
  },
  {
    icon: 'MessageCircle',
    title: '24/7 Tutor',
    subtitle: 'Always available',
    description: 'Get help anytime you need it.',
    colorScheme: 'secondary',
  },
  {
    icon: 'BarChart3',
    title: 'Analytics',
    subtitle: 'Track everything',
    description: 'Know exactly when you\'re ready.',
    colorScheme: 'accent',
  },
]

interface FeaturesProps {
  data?: Array<{
    icon?: string
    title?: string
    subtitle?: string
    description?: string
    colorScheme?: string
  }> | null
}

export default function Features({ data }: FeaturesProps) {
  const features = data && data.length > 0 ? data : defaultFeatures
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
          {features.map((feature, index) => {
            const iconKey = feature.icon || 'Brain'
            const Icon = iconMap[iconKey] || Brain
            const colorClass = feature.colorScheme === 'accent' ? 'bg-accent' : 'bg-secondary'
            return (
              <div
                key={feature.title || index}
                className={`rounded p-8 ${colorClass}`}
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
