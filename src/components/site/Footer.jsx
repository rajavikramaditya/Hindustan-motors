import ApperIcon from '@/components/ApperIcon'
import { COMPANY, buildCallLink, buildWhatsAppLink } from '@/lib/siteData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-sidebar-border bg-sidebar text-sidebar-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sidebar-primary font-heading text-sm font-extrabold text-sidebar-primary-foreground">
                HM
              </span>
              <span className="font-heading text-lg font-extrabold">हिंदुस्तान मोटर्स</span>
            </div>
            <p className="mt-3 text-sm text-sidebar-foreground/75">हर सफर में भरोसा</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {COMPANY.distributorTags.map((tag) => (
                <span key={tag} className="rounded-full border border-sidebar-border px-3 py-1 text-[11px] font-semibold text-sidebar-foreground/80">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wide text-sidebar-foreground/70">
              क्विक लिंक
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#about" className="text-sidebar-foreground/80 hover:text-sidebar-primary">हमारे बारे में</a></li>
              <li><a href="#models" className="text-sidebar-foreground/80 hover:text-sidebar-primary">मॉडल्स</a></li>
              <li><a href="#services" className="text-sidebar-foreground/80 hover:text-sidebar-primary">सुविधाएं</a></li>
              <li><a href="#branches" className="text-sidebar-foreground/80 hover:text-sidebar-primary">शोरूम</a></li>
              <li><a href="#contact" className="text-sidebar-foreground/80 hover:text-sidebar-primary">संपर्क करें</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wide text-sidebar-foreground/70">
              हेड ऑफिस
            </h4>
            <p className="mt-3 flex items-start gap-2 text-sm text-sidebar-foreground/80">
              <ApperIcon name="MapPin" className="mt-0.5 h-4 w-4 shrink-0" />
              {COMPANY.hqAddress}
            </p>
            <p className="mt-2 text-xs text-sidebar-foreground/60">GSTIN: {COMPANY.gstin}</p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wide text-sidebar-foreground/70">
              संपर्क करें
            </h4>
            <a
              href={buildCallLink(COMPANY.customerCareNumber)}
              className="mt-3 flex items-center gap-2 text-sm text-sidebar-foreground/80 hover:text-sidebar-primary"
            >
              <ApperIcon name="Phone" className="h-4 w-4" />
              {COMPANY.customerCareNumber}
            </a>
            <a
              href={buildWhatsAppLink(COMPANY.customerCareNumber, 'नमस्ते, मुझे हिंदुस्तान मोटर्स ई-रिक्शा के बारे में जानकारी चाहिए।')}
              target="_blank"
              rel="noreferrer"
              className="mt-2 flex items-center gap-2 text-sm text-sidebar-foreground/80 hover:text-sidebar-primary"
            >
              <ApperIcon name="MessageCircle" className="h-4 w-4" />
              WhatsApp करें
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-sidebar-border pt-6 text-xs text-sidebar-foreground/60 sm:flex-row">
          <p>© {year} {COMPANY.legalName}. सर्वाधिकार सुरक्षित।</p>
          <p>Website by Orbit Global</p>
        </div>
      </div>
    </footer>
  )
}
