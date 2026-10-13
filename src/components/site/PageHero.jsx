export default function PageHero({ eyebrow, title, subtitle, compact = false, children }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sidebar via-sidebar to-primary text-primary-foreground">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-chart-3/20 blur-3xl" />
      <div className={`relative mx-auto max-w-6xl px-4 sm:px-6 ${compact ? 'py-6 sm:py-8' : 'py-12 sm:py-16'}`}>
        {eyebrow && (
          <span className="inline-flex rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-chart-3">{eyebrow}</span>
        )}
        <h1 className={`font-heading font-extrabold leading-tight ${compact ? 'mt-2 text-3xl sm:text-4xl' : 'mt-4 text-4xl sm:text-5xl'}`}>{title}</h1>
        {subtitle && <p className={`max-w-2xl ${compact ? 'mt-1 text-base' : 'mt-3 text-lg'} text-primary-foreground/80`}>{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}
