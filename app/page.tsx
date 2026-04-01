import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileStickyBar from '@/components/layout/MobileStickyBar'
import Hero from '@/components/sections/Hero'
import WhatIsRetatrutide from '@/components/sections/WhatIsRetatrutide'
import ProductSection from '@/components/sections/ProductSection'
import HowItWorks from '@/components/sections/HowItWorks'
import WhyKora from '@/components/sections/WhyKora'
import PatientResults from '@/components/sections/PatientResults'
import ComingSoon from '@/components/sections/ComingSoon'
import TeamSection from '@/components/sections/TeamSection'
import FAQSection from '@/components/sections/FAQSection'
import FinalCTA from '@/components/sections/FinalCTA'

export default function HomePage() {
  return (
    <main className="pb-20 md:pb-0">
      <Header />
      <Hero />
      <WhatIsRetatrutide />
      <ProductSection />
      <HowItWorks />
      <WhyKora />
      <PatientResults />
      <ComingSoon />
      <TeamSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <MobileStickyBar />
    </main>
  )
}
