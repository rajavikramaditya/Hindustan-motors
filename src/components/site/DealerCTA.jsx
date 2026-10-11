import ApperIcon from '@/components/ApperIcon'
import { Button } from '@/components/ui/button'
import { COMPANY, buildWhatsAppLink } from '@/lib/siteData'

export default function DealerCTA() {
  return (
    <section className="bg-background py-4 sm:py-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-5 rounded-3xl bg-gradient-to-r from-accent to-secondary-foreground/90 px-6 py-10 text-center text-accent-foreground shadow-md sm:flex-row sm:justify-between sm:text-left">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold">
              <ApperIcon name="Store" className="h-4 w-4" />
              बिज़नेस अवसर
            </span>
            <h3 className="mt-3 font-heading text-2xl font-extrabold sm:text-3xl">
              अपने क्षेत्र में डीलर पॉइंट खोलना चाहते हैं?
            </h3>
            <p className="mt-2 max-w-xl text-sm font-medium text-accent-foreground/90">
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
            <Button size="lg" className="gap-2 bg-white font-bold text-accent hover:bg-white/90">
              <ApperIcon name="MessageCircle" className="h-5 w-5" />
              डीलर बनें
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
