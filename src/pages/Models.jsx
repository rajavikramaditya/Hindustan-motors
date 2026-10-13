import { useState } from 'react'
import ModelCard from '@/components/site/ModelCard'
import PageHero from '@/components/site/PageHero'
import { LINEUP_IMAGE, MODELS } from '@/lib/siteData'

const FILTERS = ['सभी', 'Badshah', 'M-Power']

export default function Models() {
  const [filter, setFilter] = useState('सभी')
  const list = MODELS.filter((m) => filter === 'सभी' || m.brand === filter)

  return (
    <>
      <PageHero
        eyebrow="हमारे मॉडल्स"
        title="Badshah व M-Power e-Rickshaw की पूरी रेंज"
        subtitle="स्टेनलेस स्टील से लेकर फुल-फीचर्ड मॉडल तक — अपने रूट और बजट के हिसाब से चुनें। हर मॉडल पर फाइनेंस, RTO व फ्री सर्विस।"
      />
      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-3xl border border-border shadow-md">
            <img src={LINEUP_IMAGE} alt="Badshah e-Rickshaw लाइनअप" className="h-full w-full object-cover" />
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${
                  filter === f
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-card text-foreground hover:bg-muted'
                }`}
              >
                {f}
              </button>
            ))}
            <span className="ml-auto text-sm text-muted-foreground">{list.length} मॉडल</span>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((model) => (
              <ModelCard key={model.slug} model={model} />
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            *कीमत व स्पेसिफिकेशन के लिए अपने नज़दीकी शोरूम पर कॉल/WhatsApp करें।
          </p>
        </div>
      </section>
    </>
  )
}
