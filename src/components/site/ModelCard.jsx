import ApperIcon from '@/components/ApperIcon'
import { Button } from '@/components/ui/button'
import { Link } from '@/lib/router'
import { modelWhatsApp } from '@/lib/siteData'

export default function ModelCard({ model }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-normal hover:-translate-y-1 hover:shadow-lg">
      <Link to={`/models/${model.slug}`} className="relative block aspect-[4/3] w-full overflow-hidden bg-muted">
        <img
          src={model.img}
          alt={`${model.name} e-Rickshaw`}
          className="h-full w-full object-cover transition-transform duration-slow group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-primary-foreground shadow-sm">
          {model.brand}
        </span>
        {model.video && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/70 px-2.5 py-1 text-[11px] font-semibold text-white">
            <ApperIcon name="Play" className="h-3 w-3" /> वीडियो
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        {model.tag && (
          <span className="w-fit rounded-full bg-chart-3/20 px-2.5 py-0.5 text-[11px] font-bold text-foreground">
            {model.tag}
          </span>
        )}
        <h3 className="mt-2 font-heading text-xl font-bold text-foreground">{model.nameHi}</h3>
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{model.name}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{model.desc}</p>
        <ul className="mt-4 space-y-1.5">
          {model.points.map((point) => (
            <li key={point} className="flex items-center gap-2 text-sm text-foreground">
              <ApperIcon name="CheckCircle2" className="h-4 w-4 shrink-0 text-accent" />
              {point}
            </li>
          ))}
        </ul>
        <div className="mt-5 grid grid-cols-2 gap-2">
          <Link to={`/models/${model.slug}`}>
            <Button variant="outline" className="w-full gap-1.5 border-primary/30 font-semibold text-primary">
              पूरी जानकारी
            </Button>
          </Link>
          <a href={modelWhatsApp(model)} target="_blank" rel="noreferrer">
            <Button className="w-full gap-1.5 bg-accent font-semibold text-accent-foreground hover:bg-accent/90">
              <ApperIcon name="MessageCircle" className="h-4 w-4" />
              पूछें
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
