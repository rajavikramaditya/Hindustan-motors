import AboutSection from '@/components/site/AboutSection'
import ServicesSection from '@/components/site/ServicesSection'
import { ABOUT_IMAGE } from '@/lib/siteData'

export default function About() {
  return (
    <>
      <h1 className="sr-only">हमारे बारे में — Hindustan Motors</h1>
      <img src={ABOUT_IMAGE} alt="Badshah e-Rickshaw लाइनअप — About Us" className="block w-full" />
      <AboutSection />
      <ServicesSection />
    </>
  )
}
