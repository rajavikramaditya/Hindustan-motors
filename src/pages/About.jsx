import AboutSection from '@/components/site/AboutSection'
import PageHero from '@/components/site/PageHero'
import ServicesSection from '@/components/site/ServicesSection'
import { COMPANY, LINEUP_IMAGE } from '@/lib/siteData'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="भरोसे से बनी पहचान"
        subtitle={`${COMPANY.legalName} — बुंदेलखंड में Badshah व M-Power e-Rickshaw के अधिकृत डीलर।`}
      />
      <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
        <img src={LINEUP_IMAGE} alt="Badshah e-Rickshaw लाइनअप" className="w-full rounded-3xl border border-border object-cover shadow-md" />
      </div>
      <AboutSection />
      <ServicesSection />
    </>
  )
}
