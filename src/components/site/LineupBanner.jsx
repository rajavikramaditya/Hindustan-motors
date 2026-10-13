import { Link } from '@/lib/router'
import { ABOUT_IMAGE } from '@/lib/siteData'

// Full-width group photo between the models and about sections.
export default function LineupBanner() {
  return (
    <section className="relative bg-sidebar">
      <img src={ABOUT_IMAGE} alt="Badshah e-Rickshaw की पूरी रेंज" className="block w-full" loading="lazy" />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-16 sm:px-6 sm:pb-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-3">
          <p className="font-heading text-lg font-extrabold text-white sm:text-2xl">एक ही शोरूम पर Badshah की पूरी रेंज</p>
          <Link to="/models" className="rounded-full bg-chart-3 px-4 py-2 text-sm font-bold text-primary">सभी मॉडल देखें →</Link>
        </div>
      </div>
    </section>
  )
}
