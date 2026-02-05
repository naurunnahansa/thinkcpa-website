const steps = [
  {
    number: '01',
    title: 'SIGN UP',
    description: 'Create your account in seconds and get started right away.',
  },
  {
    number: '02',
    title: 'DIAGNOSTIC',
    description: 'Take a quick assessment. We\'ll find your knowledge gaps.',
  },
  {
    number: '03',
    title: 'STUDY',
    description: 'Follow your personalized plan. AI adapts as you learn.',
  },
  {
    number: '04',
    title: 'PASS',
    description: 'Walk into the exam confident. Walk out certified.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 bg-white border-t">
      <div className="container">
        {/* Header */}
        <div className="mb-20">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
            The Process
          </p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[0.85]">
            HOW IT WORKS.
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Large step number */}
              <p className="font-display text-8xl lg:text-9xl font-black text-primary/10 leading-none mb-4">
                {step.number}
              </p>

              {/* Title */}
              <h3 className="text-2xl font-black text-foreground mb-3">{step.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-border -translate-x-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
