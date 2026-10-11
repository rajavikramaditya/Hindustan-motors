import ApperIcon from '@/components/ApperIcon'
import { SERVICES } from '@/lib/siteData'

export default function ServicesSection() {
  return (
    <section id="services" className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-secondary-foreground">
            <ApperIcon name="Sparkles" className="h-4 w-4" />
            हमारी सुविधाएं
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
            गाड़ी खरीदने से लेकर सर्विस तक, हर कदम पर साथ
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow duration-fast hover:shadow-md"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <ApperIcon name={service.icon} className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-heading text-base font-bold text-foreground">{service.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
