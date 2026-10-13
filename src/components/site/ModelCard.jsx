import ApperIcon from '@/components/ApperIcon'
import { Button } from '@/components/ui/button'
import { Link } from '@/lib/router'
import { modelWhatsApp } from '@/lib/siteData'

export default function ModelCard({ model }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-normal hover:-translate-y-1 hover:shadow-lg">
      <Link to={`/models/${model.slug}`} className="relative block aspect-square w-full overflow-hidden bg-muted">
        <img
          src={model.img}
          alt={`${model.name} e-Rickshaw`}
          className="h-full w-full object-cover transition-transform duration-slow group-hover:scale-105"
          loading="lazy"
        />
        {model.video && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/70 px-2.5 py-1 text-[11px] font-semibold text-white">
            <ApperIcon name="Play" className="h-3 w-3" /> वीडियो
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-heading text-lg font-bold text-foreground">{model.nameHi}</h3>
          {model.tag && <span className="shrink-0 text-[11px] font-semibold text-accent">{model.tag}</span>}
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{model.desc}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {model.highlights.map((h) => (
            <span key={h} className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-semibold text-foreground/80">
              {h}
            </span>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <Link to={`/models/${model.slug}`}>
            <Button variant="outline" size="sm" className="w-full border-primary/30 font-semibold text-primary">
              पूरी जानकारी
            </Button>
          </Link>
          <a href={modelWhatsApp(model)} target="_blank" rel="noreferrer">
            <Button size="sm" className="w-full gap-1.5 bg-accent font-semibold text-accent-foreground hover:bg-accent/90">
              <ApperIcon name="MessageCircle" className="h-4 w-4" />
              पूछें
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
