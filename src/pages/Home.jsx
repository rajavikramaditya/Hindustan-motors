import Hero from '@/components/site/Hero'
import LineupBanner from '@/components/site/LineupBanner'
import AboutSection from '@/components/site/AboutSection'
import ModelsSection from '@/components/site/ModelsSection'
import ServicesSection from '@/components/site/ServicesSection'
import BranchesSection from '@/components/site/BranchesSection'
import DealerCTA from '@/components/site/DealerCTA'
import ContactSection from '@/components/site/ContactSection'

export default function Home() {
  return (
    <>
      <Hero />
      <ModelsSection />
      <LineupBanner />
      <AboutSection />
      <ServicesSection />
      <BranchesSection />
      <DealerCTA />
      <ContactSection />
    </>
  )
}
