import ApperIcon from '@/components/ApperIcon'
import { Link } from '@/lib/router'
import { MODELS } from '@/lib/siteData'

const OFFERS = [
  { icon: 'Tags', title: '₹34,999 से डाउन पेमेंट', sub: 'Affordable EMI पर E-Rickshaw' },
  { icon: 'Percent', title: '₹50,000 एक्सचेंज ऑफर*', sub: 'शर्तों के साथ, शोरूम पर जानें' },
  { icon: 'Wrench', title: '3 महीने फ्री सर्विस', sub: 'ऑयल सहित' },
  { icon: 'ShieldCheck', title: '1 महीने की गारंटी', sub: 'हर गाड़ी पर' },
  { icon: 'FileCheck2', title: 'आसान RTO रजिस्ट्रेशन', sub: 'पूरी प्रक्रिया हमारी टीम करती है' },
  { icon: 'Store', title: `Badshah के ${MODELS.length} मॉडल`, sub: 'बुंदेलखंड में 11 शोरूम' },
]

export default function OffersSection() {
  return (
    <section id="offers" className="bg-background py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-foreground sm:text-3xl">
          Hindustan Motors पर क्या मिलता है
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {OFFERS.map((o) => (
            <div key={o.title} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <ApperIcon name={o.icon} className="h-5 w-5" />
              </span>
              <div>
                <p className="font-heading text-base font-bold leading-tight text-foreground">{o.title}</p>
                <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">{o.sub}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          *एक्सचेंज ऑफर शर्तों के साथ लागू है। पूरी शर्तें व पात्रता अपने नज़दीकी शोरूम पर जानें।{' '}
          <Link to="/#contact" className="font-semibold text-primary underline">शोरूम से संपर्क करें</Link>
        </p>
      </div>
    </section>
  )
}
