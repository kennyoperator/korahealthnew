'use client'

import { useEffect, useState } from 'react'

export default function MobileStickyBar() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const formSection = document.getElementById('qualify')
    if (!formSection) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting)
      },
      { threshold: 0.1 }
    )
    observer.observe(formSection)
    return () => observer.disconnect()
  }, [])

  const scrollToForm = () => {
    document.getElementById('qualify')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-4 py-3 transition-all duration-300"
      style={{
        backgroundColor: '#fff',
        borderTop: '1px solid var(--kora-border)',
        boxShadow: '0 -4px 12px rgba(0,0,0,0.06)',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
      }}
      aria-hidden={!visible}
    >
      <button
        onClick={scrollToForm}
        className="w-full inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        style={{
          backgroundColor: 'var(--kora-brand)',
          color: '#fff',
          padding: '14px 24px',
          fontSize: '15px',
          boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
        }}
      >
        Book Free Consultation
      </button>
    </div>
  )
}
