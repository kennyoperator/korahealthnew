import { User } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

const people = [
  {
    name: '[Your Name]',
    title: 'Co-Founder',
    quote: '"We saw too many Filipinos risking their health with unverified sellers. Kora exists to offer a legitimate, physician-led alternative."',
  },
  {
    name: 'James [Last Name]',
    title: 'Co-Founder',
    quote: '"Access to metabolic health treatment shouldn\'t require navigating a broken, unregulated market. We\'re building the right way."',
  },
  {
    name: 'Dr. [Name]',
    title: 'Medical Director · PRC License #[000000]',
    quote: '"Every Kora patient is individually evaluated. I personally oversee clinical protocols to ensure safety and appropriate prescribing."',
  },
]

export default function TeamSection() {
  return (
    <section
      id="team"
      className="py-16 md:py-28"
      style={{ backgroundColor: 'var(--kora-bg)' }}
    >
      <div className="max-w-[1120px] mx-auto px-6 md:px-8">
        <ScrollReveal>
          <h2
            className="font-serif text-center"
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              lineHeight: 1.15,
              color: 'var(--kora-text-primary)',
            }}
          >
            Real People. Real Accountability.
          </h2>
          <p
            className="text-center max-w-2xl mx-auto mt-4 leading-relaxed"
            style={{ color: 'var(--kora-text-body)' }}
          >
            We put our names behind Kora Health because you should know exactly who is responsible for your care.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {people.map((person, i) => (
            <ScrollReveal key={person.name} delay={i * 80}>
              <div className="text-center">
                {/* Circular photo placeholder */}
                <div className="flex flex-col items-center">
                  <div
                    className="flex items-center justify-center rounded-full mx-auto"
                    style={{
                      width: 96,
                      height: 96,
                      backgroundColor: 'var(--kora-surface-alt)',
                      border: '2px solid var(--kora-border)',
                    }}
                    aria-label={`Photo placeholder for ${person.name}`}
                  >
                    <User size={32} strokeWidth={1.75} style={{ color: 'var(--kora-text-muted)' }} />
                  </div>
                  <p
                    className="text-[11px] italic mt-1"
                    style={{ color: 'var(--kora-text-muted)' }}
                  >
                    Photo placeholder
                  </p>
                </div>

                <p
                  className="text-lg font-medium mt-4"
                  style={{ color: 'var(--kora-text-primary)' }}
                >
                  {person.name}
                </p>
                <p
                  className="text-sm mt-0.5"
                  style={{ color: 'var(--kora-text-muted)' }}
                >
                  {person.title}
                </p>
                <p
                  className="text-sm italic mt-3 leading-relaxed max-w-xs mx-auto"
                  style={{ color: 'var(--kora-text-body)' }}
                >
                  {person.quote}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Credential bar */}
        <ScrollReveal delay={240}>
          <div className="flex justify-center mt-10">
            <div
              className="inline-flex items-center rounded-full text-[13px] font-medium"
              style={{
                backgroundColor: 'var(--kora-brand-subtle)',
                color: 'var(--kora-brand)',
                padding: '8px 20px',
              }}
            >
              Registered Philippine Business &nbsp;·&nbsp; SEC/DTI: [Registration #] &nbsp;·&nbsp; All Physicians PRC-Licensed
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
