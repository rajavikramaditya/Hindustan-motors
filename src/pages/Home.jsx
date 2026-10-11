import Header from '@/components/site/Header'
import Hero from '@/components/site/Hero'
import AboutSection from '@/components/site/AboutSection'
import ModelsSection from '@/components/site/ModelsSection'
import ServicesSection from '@/components/site/ServicesSection'
import BranchesSection from '@/components/site/BranchesSection'
import DealerCTA from '@/components/site/DealerCTA'
import ContactSection from '@/components/site/ContactSection'
import Footer from '@/components/site/Footer'
import WhatsAppFab from '@/components/site/WhatsAppFab'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ModelsSection />
        <ServicesSection />
        <BranchesSection />
        <DealerCTA />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  )
}
