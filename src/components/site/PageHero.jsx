export default function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sidebar via-sidebar to-primary text-primary-foreground">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-chart-3/20 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        {eyebrow && (
          <span className="inline-flex rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-chart-3">{eyebrow}</span>
        )}
        <h1 className="mt-4 font-heading text-4xl font-extrabold leading-tight sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-lg text-primary-foreground/80">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}
