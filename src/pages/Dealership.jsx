import ApperIcon from '@/components/ApperIcon'
import { Button } from '@/components/ui/button'
import PageHero from '@/components/site/PageHero'
import { COMPANY, buildCallLink, buildWhatsAppLink } from '@/lib/siteData'

const PERKS = [
  { icon: 'Percent', title: 'फाइनेंस सपोर्ट', desc: 'ग्राहकों के लिए आसान फाइनेंस व Affordable EMI की व्यवस्था।' },
  { icon: 'FileCheck2', title: 'RTO रजिस्ट्रेशन', desc: 'रजिस्ट्रेशन की पूरी प्रक्रिया में हमारी टीम का साथ।' },
  { icon: 'Wrench', title: 'सर्विस बैकअप', desc: 'फ्री सर्विस व गारंटी — ग्राहक का भरोसा आपके साथ।' },
  { icon: 'Bike', title: 'Badshah की पूरी रेंज', desc: '6 मॉडल्स — पैसेंजर से लोडर तक, हर ज़रूरत के लिए।' },
]

export default function Dealership() {
  const msg = 'नमस्ते, मुझे अपने क्षेत्र में हिंदुस्तान मोटर्स का डीलर पॉइंट खोलना है। कृपया जानकारी दें।'
  return (
    <>
      <PageHero
        eyebrow="बिज़नेस अवसर"
        title="अपना डीलर पॉइंट खोलें"
        subtitle="बुंदेलखंड में 11 शोरूम का भरोसा — अब अपने क्षेत्र में खुद का e-Rickshaw शोरूम शुरू करें।"
      />
      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-5 sm:grid-cols-2">
            {PERKS.map((p) => (
              <div key={p.title} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <ApperIcon name={p.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-heading text-base font-bold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={buildWhatsAppLink(COMPANY.customerCareNumber, msg)} target="_blank" rel="noreferrer">
              <Button size="lg" className="gap-2 bg-accent font-semibold text-accent-foreground hover:bg-accent/90">
                <ApperIcon name="MessageCircle" className="h-5 w-5" /> WhatsApp पर बात करें
              </Button>
            </a>
            <a href={buildCallLink(COMPANY.customerCareNumber)}>
              <Button size="lg" variant="outline" className="gap-2 border-primary/30 font-semibold text-primary">
                <ApperIcon name="Phone" className="h-5 w-5" /> {COMPANY.customerCareNumber}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
