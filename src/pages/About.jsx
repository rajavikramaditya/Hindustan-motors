import AboutSection from '@/components/site/AboutSection'
import ImageBanner from '@/components/site/ImageBanner'
import PageHero from '@/components/site/PageHero'
import ServicesSection from '@/components/site/ServicesSection'
import { Button } from '@/components/ui/button'
import ApperIcon from '@/components/ApperIcon'
import { Link } from '@/lib/router'
import { COMPANY } from '@/lib/siteData'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="भरोसे से बनी पहचान"
        subtitle={`${COMPANY.legalName} — बुंदेलखंड में Badshah व M-Power e-Rickshaw के अधिकृत डीलर।`}
      />
      <AboutSection />
      <ServicesSection />
      <ImageBanner>
        <div className="max-w-xl text-white">
          <span className="inline-flex rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-chart-3">About Us</span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold sm:text-4xl">एक ही शोरूम पर Badshah की पूरी रेंज</h2>
          <p className="mt-3 text-white/85">पैसेंजर से लेकर लोडर तक — हर मॉडल की लाइव डेमो अपने नज़दीकी शोरूम पर देखें।</p>
          <Link to="/models" className="mt-6 inline-block">
            <Button size="lg" className="gap-2 bg-chart-3 font-bold text-primary hover:bg-chart-3/90">
              सभी मॉडल देखें <ApperIcon name="ArrowRight" className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </ImageBanner>
    </>
  )
}
