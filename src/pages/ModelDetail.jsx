import { useState } from 'react'
import ApperIcon from '@/components/ApperIcon'
import { Button } from '@/components/ui/button'
import ModelCard from '@/components/site/ModelCard'
import PageHero from '@/components/site/PageHero'
import { Link } from '@/lib/router'
import { COMPANY, MODELS, SERVICES, buildCallLink, getModel, modelWhatsApp } from '@/lib/siteData'

const STEPS = [
  { icon: 'MessageCircle', title: 'पूछताछ करें', desc: 'WhatsApp या कॉल पर मॉडल, कलर व कीमत की जानकारी लें।' },
  { icon: 'Store', title: 'शोरूम पर डेमो', desc: 'नज़दीकी शोरूम पर गाड़ी देखें और टेस्ट करें।' },
  { icon: 'Percent', title: 'फाइनेंस व बुकिंग', desc: '₹34,999 से डाउन पेमेंट, 0% ब्याज पर EMI के साथ बुकिंग।' },
  { icon: 'FileCheck2', title: 'RTO व डिलीवरी', desc: 'रजिस्ट्रेशन हमारी टीम करती है, गाड़ी सीधे आपके हाथ में।' },
]

export default function ModelDetail({ slug }) {
  const model = getModel(slug)
  const [active, setActive] = useState(0)
  const [lastSlug, setLastSlug] = useState(slug)
  if (slug !== lastSlug) {
    setLastSlug(slug)
    setActive(0)
  }

  if (!model) {
    return (
      <section className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="font-heading text-3xl font-extrabold">मॉडल नहीं मिला</h1>
        <Link to="/models">
          <Button className="mt-6">सभी मॉडल देखें</Button>
        </Link>
      </section>
    )
  }

  const index = MODELS.findIndex((m) => m.slug === model.slug)
  const prev = MODELS[(index - 1 + MODELS.length) % MODELS.length]
  const next = MODELS[(index + 1) % MODELS.length]
  const others = MODELS.filter((m) => m.slug !== model.slug && m.brand === model.brand).slice(0, 3)
  const gallery = model.gallery?.length ? model.gallery : [model.img]
  const hasVideo = Boolean(model.video)
  // The video is the first "slide" when a model has one.
  const showVideo = hasVideo && active === 0
  const slides = hasVideo ? [null, ...gallery] : gallery

  return (
    <div>
      <PageHero eyebrow={`${model.brand} · ${model.tag ?? 'e-Rickshaw'}`} title={model.nameHi} subtitle={model.name} />

      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div className="self-start overflow-hidden rounded-3xl border border-border bg-card shadow-md">
            {showVideo ? (
              <video
                className="aspect-square w-full object-cover"
                src={model.video}
                poster={gallery[0]}
                autoPlay
                muted
                loop
                playsInline
                controls
              />
            ) : (
              <img
                src={slides[active]}
                alt={`${model.name} e-Rickshaw`}
                className="aspect-square w-full bg-muted object-contain"
              />
            )}
            {slides.length > 1 && (
              <div className="flex gap-2 overflow-x-auto border-t border-border bg-card p-3">
                {slides.map((src, i) => (
                  <button
                    key={src ?? 'video'}
                    type="button"
                    onClick={() => setActive(i)}
                    className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 ${i === active ? 'border-primary' : 'border-border'}`}
                    aria-label={src ? `फोटो ${i + 1}` : 'वीडियो देखें'}
                  >
                    <img src={src ?? gallery[0]} alt="" className="h-full w-full object-cover" />
                    {!src && (
                      <span className="absolute inset-0 flex items-center justify-center bg-black/45 text-white">
                        <ApperIcon name="Play" className="h-5 w-5" />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <Link to="/models" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
              <ApperIcon name="ArrowLeft" className="h-4 w-4" /> सभी मॉडल
            </Link>
            <p className="mt-4 text-lg leading-relaxed text-foreground/90">{model.desc}</p>

            <ul className="mt-5 space-y-2">
              {model.points.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <ApperIcon name="CheckCircle2" className="h-4 w-4 shrink-0 text-accent" />
                  {point}
                </li>
              ))}
            </ul>

            {model.colors.length > 0 && (
              <p className="mt-5 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">उपलब्ध कलर:</span> {model.colors.join(' · ')}
              </p>
            )}

            <div className="mt-5 rounded-2xl bg-secondary p-4 text-sm text-secondary-foreground">
              <p className="font-heading text-base font-bold">₹34,999 से डाउन पेमेंट · 0% ब्याज पर EMI</p>
              <p className="mt-1">3 महीने फ्री सर्विस व 1 महीने की फुल गारंटी के साथ। कीमत के लिए शोरूम पर संपर्क करें।</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={modelWhatsApp(model)} target="_blank" rel="noreferrer">
                <Button size="lg" className="gap-2 bg-accent font-semibold text-accent-foreground hover:bg-accent/90">
                  <ApperIcon name="MessageCircle" className="h-5 w-5" />
                  WhatsApp पर कीमत पूछें
                </Button>
              </a>
              <a href={buildCallLink(COMPANY.customerCareNumber)}>
                <Button size="lg" variant="outline" className="gap-2 border-primary/30 font-semibold text-primary">
                  <ApperIcon name="Phone" className="h-5 w-5" />
                  कॉल करें
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-extrabold sm:text-3xl">{model.nameHi} की पूरी जानकारी</h2>

          {model.groups?.length > 0 ? (
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {model.groups.map((g) => (
                <div key={g.title} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <ApperIcon name={g.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="font-heading text-lg font-bold">{g.title}</h3>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {g.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground/90">
                        <ApperIcon name="CheckCircle2" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {(model.features ?? []).map((f) => (
                <li key={f} className="flex items-start gap-2 rounded-xl border border-border bg-card p-3 text-sm">
                  <ApperIcon name="CheckCircle2" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {f}
                </li>
              ))}
            </ul>
          )}

          {model.specs?.length > 0 && (
            <>
              <h2 className="mt-12 font-heading text-2xl font-extrabold sm:text-3xl">स्पेसिफिकेशन</h2>
              <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <dl>
                  {model.specs.map(([label, value], i) => (
                    <div
                      key={label}
                      className={`grid grid-cols-[9rem_1fr] gap-3 px-4 py-3 text-sm sm:grid-cols-[14rem_1fr] sm:px-5 ${i % 2 ? 'bg-muted/50' : ''}`}
                    >
                      <dt className="font-semibold text-muted-foreground">{label}</dt>
                      <dd className="font-medium text-foreground">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                *सटीक स्पेसिफिकेशन, कलर व कीमत की पुष्टि अपने नज़दीकी शोरूम पर करें।
              </p>
            </>
          )}

          <h2 className="mt-12 font-heading text-2xl font-extrabold sm:text-3xl">खरीदना कितना आसान</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <div key={s.title} className="relative rounded-2xl border border-border bg-card p-5 shadow-sm">
                <span className="absolute right-4 top-3 font-heading text-3xl font-extrabold text-muted-foreground/30">{i + 1}</span>
                <ApperIcon name={s.icon} className="h-6 w-6 text-accent" />
                <p className="mt-3 font-heading font-bold">{s.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-12 font-heading text-2xl font-extrabold sm:text-3xl">हर गाड़ी के साथ</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.slice(0, 4).map((s) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-4">
                <ApperIcon name={s.icon} className="h-5 w-5 text-accent" />
                <p className="mt-2 font-heading font-bold">{s.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-stretch justify-between gap-3">
            {[prev, next].map((m, i) => (
              <Link
                key={m.slug}
                to={`/models/${m.slug}`}
                className={`flex flex-1 items-center gap-3 rounded-2xl border border-border bg-card p-3 shadow-sm transition-shadow hover:shadow-md ${i ? 'flex-row-reverse text-right' : ''}`}
              >
                <img src={m.img} alt="" className="h-14 w-14 shrink-0 rounded-lg object-cover" />
                <span className="min-w-0">
                  <span className="block text-xs text-muted-foreground">{i ? 'अगला मॉडल' : 'पिछला मॉडल'}</span>
                  <span className="block truncate font-heading font-bold">{m.nameHi}</span>
                </span>
              </Link>
            ))}
          </div>

          {others.length > 0 && (
            <>
              <h2 className="mt-12 font-heading text-2xl font-extrabold sm:text-3xl">और मॉडल्स देखें</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {others.map((m) => (
                  <ModelCard key={m.slug} model={m} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-sticky flex gap-2 border-t border-border bg-card/95 p-3 backdrop-blur md:hidden">
        <a href={buildCallLink(COMPANY.customerCareNumber)} className="flex-1">
          <Button variant="outline" className="w-full gap-2 border-primary/30 font-semibold text-primary">
            <ApperIcon name="Phone" className="h-4 w-4" /> कॉल
          </Button>
        </a>
        <a href={modelWhatsApp(model)} target="_blank" rel="noreferrer" className="flex-[2]">
          <Button className="w-full gap-2 bg-accent font-semibold text-accent-foreground hover:bg-accent/90">
            <ApperIcon name="MessageCircle" className="h-4 w-4" /> WhatsApp पर पूछें
          </Button>
        </a>
      </div>
    </div>
  )
}
