'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--kora-footer-bg)' }} className="py-12 md:py-16">
      <div className="max-w-[1120px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Column 1 — Brand */}
          <div>
            <div>
              <Image
                src="/logo.png"
                alt="Kora Health"
                width={120}
                height={36}
                className="object-contain brightness-0 invert"
                style={{ height: '36px', width: 'auto' }}
              />
            </div>
            <p className="text-sm mt-2" style={{ color: 'var(--kora-footer-text)' }}>
              The Philippines&apos; physician-led metabolic health platform.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://www.instagram.com/korahealth.ph?igsh=eXl6d3BpMjd0Nmk0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Kora Health on Instagram"
                className="transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
                style={{ color: 'var(--kora-footer-text)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#fff' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--kora-footer-text)' }}
              >
                <Instagram size={18} strokeWidth={1.75} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61578416945979"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Kora Health on Facebook"
                className="transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
                style={{ color: 'var(--kora-footer-text)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#fff' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--kora-footer-text)' }}
              >
                <Facebook size={18} strokeWidth={1.75} />
              </a>
              <a
                href="https://wa.me/639626625935"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message Kora Health on WhatsApp"
                className="transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
                style={{ color: 'var(--kora-footer-text)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#fff' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--kora-footer-text)' }}
              >
                {/* WhatsApp icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </a>
              <a
                href="viber://chat?number=%2B639626625935"
                aria-label="Message Kora Health on Viber"
                className="transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
                style={{ color: 'var(--kora-footer-text)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#fff' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--kora-footer-text)' }}
              >
                {/* Viber icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M11.398 2.012C8.5 2.012 4 3.5 4 9.5c0 2.944.744 5.053 2.102 6.34V18a.5.5 0 0 0 .842.364l2.07-1.887c.76.153 1.56.23 2.384.23 2.9 0 7.398-1.488 7.398-7.488 0-6-4.498-7.207-7.398-7.207zm.002 1.5c2.39 0 5.898 1.013 5.898 5.707 0 4.695-3.508 5.988-5.898 5.988-.81 0-1.59-.09-2.328-.264a.5.5 0 0 0-.39.072l-1.284 1.17v-1.453a.5.5 0 0 0-.189-.39C5.824 13.387 5.5 11.655 5.5 9.5c0-4.694 3.51-5.988 5.9-5.988zm1.148 3.17a.5.5 0 0 0 0 1c.742 0 1.176.23 1.428.498.252.268.374.643.374 1.12 0 .476-.122.85-.374 1.12-.252.267-.686.498-1.428.498a.5.5 0 0 0 0 1c.928 0 1.676-.312 2.148-.82.472-.508.654-1.17.654-1.798 0-.63-.182-1.292-.654-1.8-.472-.508-1.22-.818-2.148-.818zm-2.9.33a.5.5 0 0 0-.476.352c-.27.86-.27 2.766 0 3.626a.5.5 0 1 0 .952-.306c-.218-.676-.218-2.338 0-3.014a.5.5 0 0 0-.476-.658zm1.42 1.17a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Links */}
          <div>
            <p className="text-[11px] uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Quick Links
            </p>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              {[
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Our Team', href: '#team' },
                { label: 'Program', href: '#program' },
                { label: 'FAQs', href: '#faq' },
                { label: 'Journal', href: '/learn' },
                { label: 'Contact Us', href: 'mailto:hello@korahealth.ph' },
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Service', href: '/terms' },
              ].map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm transition-colors duration-200 w-fit focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/50 rounded"
                  style={{ color: 'var(--kora-footer-text)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#fff' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--kora-footer-text)' }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <p className="text-[11px] uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Contact
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:hello@korahealth.ph"
                className="text-sm transition-colors duration-200 w-fit focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/50 rounded"
                style={{ color: 'var(--kora-footer-text)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#fff' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--kora-footer-text)' }}
              >
                hello@korahealth.ph
              </a>
              <a
                href="https://wa.me/639626625935"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-colors duration-200 w-fit focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/50 rounded"
                style={{ color: 'var(--kora-footer-text)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#fff' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--kora-footer-text)' }}
              >
                WhatsApp: +63 962 662 5935
              </a>
              <a
                href="viber://chat?number=%2B639626625935"
                className="text-sm transition-colors duration-200 w-fit focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/50 rounded"
                style={{ color: 'var(--kora-footer-text)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#fff' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--kora-footer-text)' }}
              >
                Viber: +63 962 662 5935
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-8 pt-6 text-center text-xs"
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)' }}
        >
          © 2026 Kora Health. All rights reserved. SEC/DTI Registration: [Placeholder]. This website does not provide medical advice. All treatments require evaluation and prescription by a licensed physician. Kora Health does not guarantee specific treatment outcomes.
        </div>
      </div>
    </footer>
  )
}
