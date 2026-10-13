import { useState } from 'react'
import ApperIcon from '@/components/ApperIcon'
import { Button } from '@/components/ui/button'
import PageHero from '@/components/site/PageHero'
import { Link } from '@/lib/router'
import { COMPANY, MODELS, buildCallLink, getModel, modelWhatsApp } from '@/lib/siteData'

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

  const others = MODELS.filter((m) => m.slug !== model.slug)
  const gallery = model.gallery?.length ? model.gallery : [model.img]
  const slides = model.video ? [null, ...gallery] : gallery
  const showVideo = model.video && active === 0

  return (
    <div>
      <PageHero compact eyebrow={`Badshah · ${model.tag ?? 'e-Rickshaw'}`} title={model.nameHi} subtitle={model.name} />

      <section className="bg-background py-8 sm:py-10">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,26rem)_1fr]">
          <div className="self-start overflow-hidden rounded-2xl border border-border bg-card shadow-md">
            {showVideo ? (
              <video className="aspect-square w-full object-cover" src={model.video} poster={gallery[0]} autoPlay muted loop playsInline controls />
            ) : (
              <img src={slides[active]} alt={`${model.name} e-Rickshaw`} className="aspect-square w-full bg-muted object-contain" />
            )}
            {slides.length > 1 && (
              <div className="flex gap-2 overflow-x-auto border-t border-border p-2">
                {slides.map((src, i) => (
                  <button
                    key={src ?? 'video'}
                    type="button"
                    onClick={() => setActive(i)}
                    className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-md border-2 ${i === active ? 'border-primary' : 'border-border'}`}
                    aria-label={src ? `फोटो ${i + 1}` : 'वीडियो देखें'}
                  >
                    <img src={src ?? gallery[0]} alt="" className="h-full w-full object-cover" />
                    {!src && (
                      <span className="absolute inset-0 flex items-center justify-center bg-black/45 text-white">
                        <ApperIcon name="Play" className="h-4 w-4" />
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
            <p className="mt-2 text-base text-foreground/90">{model.desc}</p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {model.highlights.map((h) => (
                <span key={h} className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                  {h}
                </span>
              ))}
            </div>

            {model.colors?.length > 0 && (
              <div className="mt-4">
                <p className="text-xs font-semibold text-muted-foreground">उपलब्ध कलर</p>
                <div className="mt-1.5 flex flex-wrap gap-2">
                  {model.colors.map((c) => (
                    <span key={c.name} title={c.name} className="flex items-center gap-1.5 rounded-full border border-border bg-card py-1 pl-1 pr-2.5 text-[11px] font-medium">
                      <span className="h-4 w-4 rounded-full ring-1 ring-black/10" style={{ background: c.hex }} />
                      {c.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {model.specs?.length > 0 && (
              <dl className="mt-4 overflow-hidden rounded-xl border border-border bg-card text-sm">
                {model.specs.map(([label, value], i) => (
                  <div key={label} className={`grid grid-cols-[8.5rem_1fr] gap-2 px-3 py-1.5 ${i % 2 ? 'bg-muted/50' : ''}`}>
                    <dt className="text-muted-foreground">{label}</dt>
                    <dd className="font-semibold text-foreground">{value}</dd>
                  </div>
                ))}
              </dl>
            )}

            {model.accessories?.length > 0 && (
              <div className="mt-4">
                <p className="text-xs font-semibold text-muted-foreground">साथ में मिलता है</p>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {model.accessories.map((a) => (
                    <span key={a} className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-2.5 py-1 text-xs font-medium">
                      <ApperIcon name="CheckCircle2" className="h-3 w-3 text-accent" />
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <p className="mt-4 text-sm font-semibold text-foreground">
              ₹34,999 से डाउन पेमेंट · Affordable EMI · <span className="text-muted-foreground">कीमत शोरूम पर</span>
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              <a href={modelWhatsApp(model)} target="_blank" rel="noreferrer">
                <Button className="gap-2 bg-accent font-semibold text-accent-foreground hover:bg-accent/90">
                  <ApperIcon name="MessageCircle" className="h-4 w-4" />
                  WhatsApp पर पूछें
                </Button>
              </a>
              <a href={buildCallLink(COMPANY.customerCareNumber)}>
                <Button variant="outline" className="gap-2 border-primary/30 font-semibold text-primary">
                  <ApperIcon name="Phone" className="h-4 w-4" />
                  कॉल करें
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-heading text-lg font-extrabold">और मॉडल्स</h2>
          <div className="mt-3 flex gap-3 overflow-x-auto pb-2">
            {others.map((m) => (
              <Link
                key={m.slug}
                to={`/models/${m.slug}`}
                className="w-36 shrink-0 overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
              >
                <img src={m.img} alt="" className="aspect-square w-full object-cover" loading="lazy" />
                <p className="truncate px-2 py-1.5 text-center text-sm font-bold">{m.nameHi}</p>
              </Link>
            ))}
          </div>
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
