import ModelCard from '@/components/site/ModelCard'
import PageHero from '@/components/site/PageHero'
import { LINEUP_IMAGE, MODELS } from '@/lib/siteData'

export default function Models() {
  const list = MODELS

  return (
    <>
      <PageHero
        eyebrow="हमारे मॉडल्स"
        title="Badshah e-Rickshaw की पूरी रेंज"
        subtitle="पैसेंजर से लेकर लोडर तक — अपने रूट और काम के हिसाब से चुनें। हर मॉडल पर फाइनेंस, RTO व फ्री सर्विस।"
      />
      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-3xl border border-border shadow-md">
            <img src={LINEUP_IMAGE} alt="Badshah e-Rickshaw लाइनअप" className="h-full w-full object-cover" />
          </div>

          <p className="mt-8 text-sm text-muted-foreground">{list.length} मॉडल</p>

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
