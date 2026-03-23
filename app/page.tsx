import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileStickyBar from '@/components/layout/MobileStickyBar'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import HowItWorks from '@/components/sections/HowItWorks'
import WhyKora from '@/components/sections/WhyKora'
import TeamSection from '@/components/sections/TeamSection'
import ProgramOverview from '@/components/sections/ProgramOverview'
import ClinicalEvidence from '@/components/sections/ClinicalEvidence'
import QualificationSection from '@/components/sections/QualificationSection'
import FAQSection from '@/components/sections/FAQSection'
import FinalCTA from '@/components/sections/FinalCTA'

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustBar />
      <HowItWorks />
      <WhyKora />
      <TeamSection />
      <ProgramOverview />
      <ClinicalEvidence />
      <QualificationSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <MobileStickyBar />
    </main>
  )
}
