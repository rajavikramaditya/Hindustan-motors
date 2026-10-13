import { useState } from 'react'
import ApperIcon from '@/components/ApperIcon'
import { Button } from '@/components/ui/button'
import ModelCard from '@/components/site/ModelCard'
import PageHero from '@/components/site/PageHero'
import { Link } from '@/lib/router'
import { COMPANY, MODELS, SERVICES, buildCallLink, getModel, modelWhatsApp } from '@/lib/siteData'

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

  const others = MODELS.filter((m) => m.slug !== model.slug).slice(0, 3)

  return (
    <>
      <PageHero eyebrow={`${model.brand} · ${model.tag ?? 'e-Rickshaw'}`} title={model.nameHi} subtitle={model.name} />

      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div className="self-start overflow-hidden rounded-3xl border border-border bg-card shadow-md">
            {model.video ? (
              <video
                className="aspect-square w-full object-cover"
                src={model.video}
                poster={model.img}
                autoPlay
                muted
                loop
                playsInline
                controls
              />
            ) : (
              <img
                src={model.gallery?.[active] ?? model.img}
                alt={model.name}
                className="aspect-square w-full bg-muted object-contain"
              />
            )}
            {!model.video && model.gallery?.length > 1 && (
              <div className="flex gap-2 border-t border-border bg-card p-3">
                {model.gallery.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setActive(i)}
                    className={`h-16 w-16 overflow-hidden rounded-lg border-2 ${i === active ? 'border-primary' : 'border-border'}`}
                    aria-label={`फोटो ${i + 1}`}
                  >
                    <img src={src} alt="" className="h-full w-full object-cover" />
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

            <h2 className="mt-6 font-heading text-xl font-bold">मुख्य फीचर्स</h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {model.features.map((f) => (
                <li key={f} className="flex items-start gap-2 rounded-xl border border-border bg-card p-3 text-sm">
                  <ApperIcon name="CheckCircle2" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {f}
                </li>
              ))}
            </ul>

            {model.colors.length > 0 && (
              <p className="mt-4 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">उपलब्ध कलर:</span> {model.colors.join(', ')}
              </p>
            )}

            <div className="mt-5 rounded-2xl bg-secondary p-4 text-sm text-secondary-foreground">
              <p className="font-heading text-base font-bold">₹34,999 से डाउन पेमेंट · 0% ब्याज पर EMI</p>
              <p className="mt-1">कीमत व ऑफर के लिए शोरूम पर संपर्क करें।</p>
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

      <section className="bg-muted/50 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-extrabold">हर गाड़ी के साथ</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.slice(0, 4).map((s) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-4">
                <ApperIcon name={s.icon} className="h-5 w-5 text-accent" />
                <p className="mt-2 font-heading font-bold">{s.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-12 font-heading text-2xl font-extrabold">और मॉडल्स देखें</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((m) => (
              <ModelCard key={m.slug} model={m} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
