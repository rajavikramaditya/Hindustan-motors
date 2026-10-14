import Hero from '@/components/site/Hero'
import AboutSection from '@/components/site/AboutSection'
import OffersSection from '@/components/site/OffersSection'
import ModelsSection from '@/components/site/ModelsSection'
import ServicesSection from '@/components/site/ServicesSection'
import BranchesSection from '@/components/site/BranchesSection'
import DealerCTA from '@/components/site/DealerCTA'
import ContactSection from '@/components/site/ContactSection'

export default function Home() {
  return (
    <>
      <Hero />
      <OffersSection />
      <ModelsSection />
      <AboutSection />
      <ServicesSection />
      <BranchesSection />
      <DealerCTA />
      <ContactSection />
    </>
  )
}
