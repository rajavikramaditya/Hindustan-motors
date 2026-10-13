import ApperIcon from '@/components/ApperIcon'
import { Button } from '@/components/ui/button'
import { Link } from '@/lib/router'
import { COMPANY, HERO_VIDEO, buildWhatsAppLink } from '@/lib/siteData'

const STATS = [
  { icon: 'Store', label: '11 शोरूम', sub: 'बुंदेलखंड क्षेत्र में' },
  { icon: 'Award', label: '2 प्रमुख ब्रांड', sub: 'Badshah व M-Power' },
  { icon: 'Wrench', label: '3 महीने फ्री सर्विस', sub: 'ऑयल सहित' },
  { icon: 'ShieldCheck', label: '1 महीने की गारंटी', sub: 'हर गाड़ी पर' },
]

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-sidebar via-sidebar to-primary text-primary-foreground"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
        <svg width="100%" height="100%" preserveAspectRatio="none">
          <defs>
            <pattern id="route-dots" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#route-dots)" />
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold">
            <ApperIcon name="BadgeCheck" className="h-4 w-4 text-chart-3" />
            GST रजिस्टर्ड बिज़नेस · Hindustan Motors Company
          </span>

          <h1 className="mt-5 font-heading text-4xl font-extrabold leading-tight sm:text-5xl">
            हिंदुस्तान मोटर्स
            <span className="block text-chart-3">ई-रिक्शा</span>
          </h1>
          <p className="mt-3 max-w-xl text-lg font-medium text-primary-foreground/85">
            हर सफर में भरोसा — बुंदेलखंड के 11 शहरों में आपका सबसे भरोसेमंद e-Rickshaw डीलर। फाइनेंस, RTO
            रजिस्ट्रेशन और फ्री सर्विस — सब एक ही जगह।
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl bg-white/10 px-5 py-4">
            <ApperIcon name="Tags" className="h-6 w-6 text-chart-3" />
            <span className="font-heading text-2xl font-extrabold text-chart-3">₹34,999</span>
            <span className="text-sm font-semibold text-primary-foreground/90">से डाउन पेमेंट शुरू</span>
            <span className="mx-1 hidden h-5 w-px bg-white/30 sm:block" />
            <span className="rounded-full bg-chart-3 px-3 py-1 text-xs font-extrabold text-primary">
              0% ब्याज दर पर EMI
            </span>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={buildWhatsAppLink(
                COMPANY.customerCareNumber,
                'नमस्ते, मुझे हिंदुस्तान मोटर्स ई-रिक्शा के बारे में जानकारी चाहिए।'
              )}
              target="_blank"
              rel="noreferrer"
            >
              <Button
                size="lg"
                className="gap-2 bg-accent font-semibold text-accent-foreground shadow-md hover:bg-accent/90"
              >
                <ApperIcon name="MessageCircle" className="h-5 w-5" />
                WhatsApp पर पूछें
              </Button>
            </a>
            <Link to="/models">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-white/40 bg-white/5 font-semibold text-primary-foreground hover:bg-white/15"
              >
                <ApperIcon name="Bike" className="h-5 w-5" />
                सभी मॉडल देखें
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-chart-3/40 to-primary/40 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/20 bg-black shadow-lg">
            <video
              className="aspect-square w-full object-cover"
              src={HERO_VIDEO.src}
              poster={HERO_VIDEO.poster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <Link
              to="/models/smart"
              className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-xl bg-black/65 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur"
            >
              <span>Badshah Smart SS</span>
              <span className="inline-flex items-center gap-1 text-chart-3">
                डिटेल देखें <ApperIcon name="ArrowRight" className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10 bg-black/20">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-5 sm:px-6 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-3 rounded-xl bg-white/5 p-3"
            >
              <ApperIcon name={stat.icon} className="h-6 w-6 text-chart-3" />
              <div>
                <p className="font-heading text-sm font-bold leading-tight sm:text-base">{stat.label}</p>
                <p className="text-xs text-primary-foreground/75">{stat.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
