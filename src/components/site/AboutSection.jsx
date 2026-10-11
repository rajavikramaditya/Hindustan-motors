import ApperIcon from '@/components/ApperIcon'
import founderPhoto from '@/assets/founderPhoto'
import { COMPANY } from '@/lib/siteData'

export default function AboutSection() {
  return (
    <section id="about" className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-md">
              <img
                src={founderPhoto}
                alt={`${COMPANY.founderName}, ${COMPANY.founderTitle}, Hindustan Motors`}
                className="h-72 w-full object-cover object-top sm:h-80"
              />
              <div className="p-5">
                <p className="font-heading text-lg font-bold text-foreground">{COMPANY.founderName}</p>
                <p className="text-sm font-medium text-accent">{COMPANY.founderTitle}</p>
              </div>
            </div>
          </div>

          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-secondary-foreground">
              <ApperIcon name="Building2" className="h-4 w-4" />
              हमारे बारे में
            </span>
            <h2 className="mt-4 font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
              भरोसे से बनी पहचान
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">{COMPANY.legalName}</span> बुंदेलखंड क्षेत्र
              (जालौन व झांसी ज़िले) में <span className="font-semibold text-foreground">11 शोरूम</span> के
              साथ e-Rickshaw की खरीद, फाइनेंस, RTO रजिस्ट्रेशन और सर्विस — सब कुछ एक ही छत के नीचे उपलब्ध
              कराने वाला एक GST-रजिस्टर्ड व्यापार है। हम{' '}
              <span className="font-semibold text-foreground">Badshah</span> और{' '}
              <span className="font-semibold text-foreground">M-Power</span> ब्रांड के अधिकृत डीलर व
              डिस्ट्रीब्यूटर हैं।
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <ApperIcon name="UserRound" className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground">{COMPANY.founderName}</p>
                  <p className="text-xs text-muted-foreground">{COMPANY.founderTitle} · झांसी शोरूम</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <ApperIcon name="UserRound" className="mt-0.5 h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm font-semibold text-foreground">{COMPANY.mdName}</p>
                  <p className="text-xs text-muted-foreground">{COMPANY.mdTitle} · उरई शोरूम</p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              {COMPANY.distributorTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
              <span className="rounded-full border border-success-border bg-success-muted px-3 py-1 text-xs font-semibold text-success">
                GSTIN: {COMPANY.gstin}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
