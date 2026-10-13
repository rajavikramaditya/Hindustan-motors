import ApperIcon from '@/components/ApperIcon'
import { Button } from '@/components/ui/button'
import ModelCard from '@/components/site/ModelCard'
import { Link } from '@/lib/router'
import { MODELS } from '@/lib/siteData'

export default function ModelsSection() {
  const featured = MODELS.filter((m) => m.featured)

  return (
    <section id="models" className="bg-muted/50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-secondary-foreground">
            <ApperIcon name="Bike" className="h-4 w-4" />
            Badshah के 6 मॉडल
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
            हर ज़रूरत के लिए सही e-Rickshaw
          </h2>
          <p className="mt-3 text-muted-foreground">
            Badshah के अधिकृत डीलर — हर मॉडल की लाइव डेमो अपने नज़दीकी शोरूम पर देखें।
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((model) => (
            <ModelCard key={model.slug} model={model} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/models">
            <Button size="lg" className="gap-2 bg-primary font-semibold text-primary-foreground hover:bg-primary/90">
              सभी {MODELS.length} मॉडल देखें
              <ApperIcon name="ArrowRight" className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          *सटीक स्पेसिफिकेशन व कीमत मॉडल के अनुसार अलग हो सकती है — कृपया अपने नज़दीकी शोरूम पर कन्फर्म करें।
        </p>
      </div>
    </section>
  )
}
