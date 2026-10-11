import ApperIcon from '@/components/ApperIcon'
import { Button } from '@/components/ui/button'
import { COMPANY, MODELS, buildWhatsAppLink } from '@/lib/siteData'

export default function ModelsSection() {
  return (
    <section id="models" className="bg-muted/40 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-secondary-foreground">
            <ApperIcon name="Bike" className="h-4 w-4" />
            उपलब्ध मॉडल
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
            हर ज़रूरत के लिए सही e-Rickshaw
          </h2>
          <p className="mt-3 text-muted-foreground">
            Badshah व M-Power ब्रांड के अधिकृत डीलर — हर मॉडल की लाइव डेमो अपने नज़दीकी शोरूम पर देखें।
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MODELS.map((model) => (
            <div
              key={model.key}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow duration-fast hover:shadow-md"
            >
              <div className="relative aspect-[4/3] w-full bg-gradient-to-b from-muted/60 to-muted">
                <img
                  src={model.photo}
                  alt={`${model.name} e-Rickshaw`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-primary-foreground shadow-sm">
                  {model.brand}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ApperIcon name={model.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-3 font-heading text-xl font-bold text-foreground">{model.nameHi}</h3>
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {model.name}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{model.desc}</p>
                <ul className="mt-4 space-y-2">
                  {model.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-foreground">
                      <ApperIcon name="CheckCircle2" className="h-4 w-4 shrink-0 text-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  href={buildWhatsAppLink(
                    COMPANY.customerCareNumber,
                    `नमस्ते, मुझे ${model.nameHi} (${model.name}) के बारे में जानकारी चाहिए।`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5"
                >
                  <Button variant="outline" className="w-full gap-2 border-primary/30 font-semibold text-primary">
                    <ApperIcon name="MessageCircle" className="h-4 w-4" />
                    पूछताछ करें
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          *सटीक स्पेसिफिकेशन व कीमत मॉडल के अनुसार अलग हो सकती है — कृपया अपने नज़दीकी शोरूम पर कन्फर्म करें।
        </p>
      </div>
    </section>
  )
}
