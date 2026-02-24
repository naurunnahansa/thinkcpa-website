import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react'

const PHONE = '+13024070915'
const PHONE_DISPLAY = '+1 (302) 407-0915'
const EMAIL = 'hello@aethrlabs.ai'

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-28 bg-white border-t">
      <div className="container px-6 md:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
            Get in Touch
          </p>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[0.85]">
            CONTACT US.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-3xl">
          {/* Call */}
          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-4 p-6 rounded border border-border hover:border-primary/30 transition-colors"
          >
            <Phone className="w-6 h-6 text-primary shrink-0" />
            <div>
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-foreground/50 mb-1">Call</p>
              <p className="text-sm font-semibold text-foreground">{PHONE_DISPLAY}</p>
            </div>
          </a>

          {/* SMS */}
          <a
            href={`sms:${PHONE}`}
            className="flex items-center gap-4 p-6 rounded border border-border hover:border-primary/30 transition-colors"
          >
            <MessageCircle className="w-6 h-6 text-primary shrink-0" />
            <div>
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-foreground/50 mb-1">Text</p>
              <p className="text-sm font-semibold text-foreground">{PHONE_DISPLAY}</p>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-4 p-6 rounded border border-border hover:border-primary/30 transition-colors"
          >
            <Mail className="w-6 h-6 text-primary shrink-0" />
            <div>
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-foreground/50 mb-1">Email</p>
              <p className="text-sm font-semibold text-foreground">{EMAIL}</p>
            </div>
          </a>
        </div>

        {/* Company details */}
        <div className="mt-12 pt-8 border-t border-border max-w-4xl">
          <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-12 text-sm text-muted-foreground">
            <div>
              <p className="font-semibold text-foreground">AethrLabs, LLC</p>
              <p>Delaware LLC · EIN 32-0838997</p>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <p>131 Continental Dr, Suite 305<br />Newark, DE 19713, US</p>
            </div>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Managed by{' '}
            <a
              href="https://aethrlabs.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground hover:text-primary transition-colors underline underline-offset-2"
            >
              aethrlabs.ai
            </a>
          </p>
          <p className="mt-3 text-xs text-muted-foreground/60">
            Not affiliated with the IRS or Treasury Department.
          </p>
        </div>
      </div>
    </section>
  )
}
