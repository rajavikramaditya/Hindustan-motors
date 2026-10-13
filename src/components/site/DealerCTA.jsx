import ApperIcon from '@/components/ApperIcon'
import { Button } from '@/components/ui/button'
import { ABOUT_IMAGE, COMPANY, buildWhatsAppLink } from '@/lib/siteData'

export default function DealerCTA() {
  return (
    <section className="bg-background py-4 sm:py-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative isolate flex flex-col items-center gap-5 overflow-hidden rounded-3xl bg-sidebar px-6 py-12 text-center text-white shadow-md sm:flex-row sm:justify-between sm:px-10 sm:py-16 sm:text-left">
          <img
            src={ABOUT_IMAGE}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/60 to-black/25" />
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold">
              <ApperIcon name="Store" className="h-4 w-4" />
              बिज़नेस अवसर
            </span>
            <h3 className="mt-3 font-heading text-2xl font-extrabold sm:text-3xl">
              अपने क्षेत्र में डीलर पॉइंट खोलना चाहते हैं?
            </h3>
            <p className="mt-2 max-w-xl text-sm font-medium text-white/90">
              फाइनेंस और RTO रजिस्ट्रेशन सपोर्ट के साथ हमारे साथ जुड़ें — हम आपके शोरूम की शुरुआत में पूरी
              मदद करते हैं।
            </p>
          </div>
          <a
            href={buildWhatsAppLink(
              COMPANY.customerCareNumber,
              'नमस्ते, मुझे अपने क्षेत्र में हिंदुस्तान मोटर्स का डीलर पॉइंट खोलना है। कृपया जानकारी दें।'
            )}
            target="_blank"
            rel="noreferrer"
            className="shrink-0"
          >
            <Button size="lg" className="gap-2 bg-chart-3 font-bold text-primary hover:bg-chart-3/90">
              <ApperIcon name="MessageCircle" className="h-5 w-5" />
              डीलर बनें
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
