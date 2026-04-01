'use client'

import Image from 'next/image'
import { ShoppingCart, FileText, Package } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import CTAButton from '@/components/ui/CTAButton'

const steps = [
  {
    number: 1,
    icon: ShoppingCart,
    title: 'Select Your Plan',
    description: 'Choose your dosage and subscription frequency. Free nationwide delivery.',
    image: '/img-vial-person.png',
    imageAlt: 'Retatrutide treatment plans',
  },
  {
    number: 2,
    icon: FileText,
    title: 'Complete Health Profile',
    description: 'Fill out a quick medical form. Our physician will review within 24 hours.',
    image: '/doctor-christina.png',
    imageAlt: 'Dr. Christina Lavilla - Kora Health physician',
  },
  {
    number: 3,
    icon: Package,
    title: 'Receive & Start',
    description: 'Your Retatrutide ships in 2–5 days. Begin your transformation with ongoing physician support.',
    image: '/img-ongoing-support.png',
    imageAlt: 'Patient receiving ongoing care support',
  },
]

export default function HowItWorks() {
  const scrollToProduct = () => {
    document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="how-it-works"
      className="py-16 md:py-28"
      style={{ backgroundColor: 'var(--kora-bg)' }}
    >
      <div className="max-w-[1120px] mx-auto px-6 md:px-8">
        <ScrollReveal>
          <h2
            className="font-sans font-bold text-center"
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              lineHeight: 1.15,
              color: 'var(--kora-text-primary)',
            }}
          >
            How Kora Works
          </h2>
        </ScrollReveal>

        {/* Steps grid */}
        <div className="mt-12 relative">
          {/* Desktop connector line */}
          <div
            className="hidden md:block absolute top-[28px] left-[calc(12.5%+14px)] right-[calc(12.5%+14px)] h-px border-t border-dashed"
            style={{ borderColor: 'var(--kora-border)' }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <ScrollReveal key={step.number} delay={i * 150}>
                  {/* Mobile: left border connector */}
                  <div className="md:hidden flex gap-5">
                    <div className="flex flex-col items-center">
                      <div
                        className="flex items-center justify-center rounded-full text-xs font-medium text-white flex-shrink-0"
                        style={{
                          width: 28,
                          height: 28,
                          backgroundColor: 'var(--kora-brand)',
                          zIndex: 1,
                        }}
                        aria-label={`Step ${step.number}`}
                      >
                        {step.number}
                      </div>
                      {i < steps.length - 1 && (
                        <div
                          className="flex-1 w-px mt-2"
                          style={{ backgroundColor: 'var(--kora-border-light)', minHeight: 32 }}
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    <div className="pb-6">
                      <Icon size={20} strokeWidth={1.75} style={{ color: 'var(--kora-brand)' }} />
                      <p className="font-medium mt-2 text-[15px]" style={{ color: 'var(--kora-text-primary)' }}>
                        {step.title}
                      </p>
                      <p className="text-sm mt-1 leading-relaxed" style={{ color: 'var(--kora-text-body)' }}>
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Desktop: stacked layout */}
                  <div className="hidden md:flex flex-col items-center text-center">
                    <div
                      className="flex items-center justify-center rounded-full text-xs font-medium text-white"
                      style={{
                        width: 28,
                        height: 28,
                        backgroundColor: 'var(--kora-brand)',
                      }}
                      aria-label={`Step ${step.number}`}
                    >
                      {step.number}
                    </div>
                    <Icon size={20} strokeWidth={1.75} className="mt-3" style={{ color: 'var(--kora-brand)' }} />
                    <p className="font-medium mt-2 text-[15px]" style={{ color: 'var(--kora-text-primary)' }}>
                      {step.title}
                    </p>
                    <p className="text-sm mt-1 leading-relaxed" style={{ color: 'var(--kora-text-body)' }}>
                      {step.description}
                    </p>
                    {step.image && (
                      <div className="mt-4">
                        <Image 
                          src={step.image} 
                          alt={step.imageAlt || ''} 
                          width={180} 
                          height={180} 
                          className="rounded-xl mx-auto object-cover" 
                          style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }} 
                        />
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>

        <ScrollReveal delay={320}>
          <div className="flex justify-center mt-10">
            <CTAButton variant="primary" size="md" onClick={scrollToProduct}>
              Shop Retatrutide
            </CTAButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
