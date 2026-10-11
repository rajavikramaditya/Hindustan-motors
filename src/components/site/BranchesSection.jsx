import ApperIcon from '@/components/ApperIcon'
import { Button } from '@/components/ui/button'
import { BRANCHES, buildCallLink, buildWhatsAppLink, buildMapsLink } from '@/lib/siteData'

export default function BranchesSection() {
  return (
    <section id="branches" className="bg-muted/40 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-secondary-foreground">
            <ApperIcon name="Route" className="h-4 w-4" />
            हमारे 11 शोरूम
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
            आपके शहर में भी हम मौजूद हैं
          </h2>
          <p className="mt-3 text-muted-foreground">
            बुंदेलखंड क्षेत्र के हर शोरूम पर मैनेजर/इंचार्ज से सीधे बात करें — कॉल करें या WhatsApp भेजें।
          </p>
        </div>

        <div className="relative mt-10">
          <div
            aria-hidden="true"
            className="absolute left-4 top-0 hidden h-full w-px bg-border sm:block lg:left-1/2"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BRANCHES.map((branch, index) => (
              <div
                key={branch.town}
                className="relative flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow duration-fast hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-foreground">{branch.town}</h3>
                      <p className="text-xs text-muted-foreground">{branch.inCharge}</p>
                    </div>
                  </div>
                  {branch.isHQ && (
                    <span className="shrink-0 rounded-full border border-success-border bg-success-muted px-2.5 py-1 text-[11px] font-bold text-success">
                      मुख्यालय
                    </span>
                  )}
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {branch.address ?? 'पूरा पता जानने के लिए कॉल या WhatsApp करें'}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <a href={buildCallLink(branch.phone)}>
                    <Button size="sm" variant="outline" className="gap-1.5 border-primary/30 font-semibold text-primary">
                      <ApperIcon name="Phone" className="h-3.5 w-3.5" />
                      कॉल
                    </Button>
                  </a>
                  <a
                    href={buildWhatsAppLink(
                      branch.phone,
                      `नमस्ते, मैं ${branch.town} शोरूम से संपर्क करना चाहता/चाहती हूं।`
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button size="sm" className="gap-1.5 bg-accent font-semibold text-accent-foreground hover:bg-accent/90">
                      <ApperIcon name="MessageCircle" className="h-3.5 w-3.5" />
                      WhatsApp
                    </Button>
                  </a>
                  {branch.address && (
                    <a href={buildMapsLink(branch.address)} target="_blank" rel="noreferrer">
                      <Button size="sm" variant="ghost" className="gap-1.5 font-semibold text-foreground/80">
                        <ApperIcon name="MapPin" className="h-3.5 w-3.5" />
                        दिशा
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
