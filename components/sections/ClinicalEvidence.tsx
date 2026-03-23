import ScrollReveal from '@/components/ui/ScrollReveal'

export default function ClinicalEvidence() {
  return (
    <section
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
            Backed by Clinical Research
          </h2>
        </ScrollReveal>

        {/* Stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mt-8">
          <ScrollReveal delay={80}>
            <div
              className="rounded-2xl p-8 text-center"
              style={{
                backgroundColor: 'var(--kora-surface)',
                border: '1px solid var(--kora-border-light)',
              }}
            >
              <p
                className="font-serif"
                style={{ fontSize: '3rem', lineHeight: 1, color: 'var(--kora-brand)' }}
              >
                21%
              </p>
              <p
                className="text-sm mt-2 leading-relaxed"
                style={{ color: 'var(--kora-text-body)' }}
              >
                Average body weight lost at the highest approved dose in 72-week clinical trials.
              </p>
              <p
                className="text-xs mt-1"
                style={{ color: 'var(--kora-text-muted)' }}
              >
                Published Phase 3 trial data
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <div
              className="rounded-2xl p-8 text-center"
              style={{
                backgroundColor: 'var(--kora-surface)',
                border: '1px solid var(--kora-border-light)',
              }}
            >
              <p
                className="font-serif"
                style={{ fontSize: '1.875rem', lineHeight: 1, color: 'var(--kora-brand)' }}
              >
                Dual-Action
              </p>
              <p
                className="text-sm mt-2 leading-relaxed"
                style={{ color: 'var(--kora-text-body)' }}
              >
                Tirzepatide targets both GLP-1 and GIP receptors — improving appetite regulation, blood sugar, and metabolic function.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Explanatory paragraph */}
        <ScrollReveal delay={240}>
          <p
            className="max-w-2xl mx-auto mt-10 text-center leading-relaxed text-[15px]"
            style={{ color: 'var(--kora-text-body)' }}
          >
            Tirzepatide is a GLP-1/GIP receptor agonist approved by the US FDA and Philippine FDA for weight management and type 2 diabetes. It reduces appetite, increases fullness, and improves metabolic function. The Kora program is designed for adults with a BMI of 27 or higher who are ready for physician-supervised treatment.
          </p>
        </ScrollReveal>

        {/* Disclaimer */}
        <ScrollReveal delay={300}>
          <p
            className="max-w-2xl mx-auto mt-6 pt-4 text-xs text-center leading-relaxed"
            style={{
              borderTop: '1px solid var(--kora-border-light)',
              color: 'var(--kora-text-muted)',
            }}
          >
            Individual results vary. All treatments require physician evaluation and prescription. Kora Health does not guarantee specific outcomes. Clinical data referenced from published peer-reviewed trials.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
