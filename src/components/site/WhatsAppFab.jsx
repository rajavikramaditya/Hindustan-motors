import ApperIcon from '@/components/ApperIcon'
import { COMPANY, buildWhatsAppLink } from '@/lib/siteData'

export default function WhatsAppFab({ hideOnMobile = false }) {
  return (
    <a
      href={buildWhatsAppLink(
        COMPANY.customerCareNumber,
        'नमस्ते, मुझे हिंदुस्तान मोटर्स ई-रिक्शा के बारे में जानकारी चाहिए।'
      )}
      target="_blank"
      rel="noreferrer"
      className={`${hideOnMobile ? 'max-md:hidden ' : ''}fixed bottom-5 right-5 z-tooltip flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform duration-fast hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:bottom-8 sm:right-8`}
      aria-label="WhatsApp पर संपर्क करें"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
      <ApperIcon name="MessageCircle" className="relative h-7 w-7" />
    </a>
  )
}
