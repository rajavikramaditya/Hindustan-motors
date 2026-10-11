import { useState } from 'react'
import { toast } from 'sonner'
import ApperIcon from '@/components/ApperIcon'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { BRANCHES, COMPANY, MODELS, buildWhatsAppLink, buildCallLink } from '@/lib/siteData'

const BRANCH_OPTIONS = ['मुख्य कस्टमर केयर', ...BRANCHES.map((branch) => branch.town)]

function resolveTargetPhone(branchTown) {
  if (!branchTown || branchTown === 'मुख्य कस्टमर केयर') {
    return COMPANY.customerCareNumber
  }
  const match = BRANCHES.find((branch) => branch.town === branchTown)
  return match ? match.phone : COMPANY.customerCareNumber
}

function EmptyFormState({ icon, message }) {
  return (
    <p className="mt-2 flex items-center gap-2 text-xs text-destructive">
      <ApperIcon name={icon} className="h-3.5 w-3.5" />
      {message}
    </p>
  )
}

export default function ContactSection() {
  const [inquiry, setInquiry] = useState({ name: '', phone: '', area: '', model: MODELS[0].nameHi, branch: BRANCH_OPTIONS[0], message: '' })
  const [complaint, setComplaint] = useState({ name: '', phone: '', branch: BRANCH_OPTIONS[0], message: '' })
  const [inquiryError, setInquiryError] = useState('')
  const [complaintError, setComplaintError] = useState('')

  const submitInquiry = (event) => {
    event.preventDefault()
    if (!inquiry.name.trim() || !inquiry.phone.trim()) {
      setInquiryError('कृपया नाम और फ़ोन नंबर भरें।')
      return
    }
    setInquiryError('')
    const lines = [
      'नई पूछताछ — Hindustan Motors वेबसाइट से',
      `नाम: ${inquiry.name}`,
      `फ़ोन: ${inquiry.phone}`,
      inquiry.area ? `क्षेत्र/शहर: ${inquiry.area}` : null,
      `रुचि: ${inquiry.model}`,
      `शोरूम: ${inquiry.branch}`,
      inquiry.message ? `संदेश: ${inquiry.message}` : null,
    ].filter(Boolean)
    const url = buildWhatsAppLink(resolveTargetPhone(inquiry.branch), lines.join('\n'))
    window.open(url, '_blank', 'noreferrer')
    toast.success('WhatsApp खुल रहा है — कृपया वहां मैसेज भेज दें।')
  }

  const submitComplaint = (event) => {
    event.preventDefault()
    if (!complaint.name.trim() || !complaint.phone.trim() || !complaint.message.trim()) {
      setComplaintError('कृपया नाम, फ़ोन नंबर और शिकायत का विवरण भरें।')
      return
    }
    setComplaintError('')
    const lines = [
      'शिकायत — Hindustan Motors वेबसाइट से',
      `नाम: ${complaint.name}`,
      `फ़ोन: ${complaint.phone}`,
      `संबंधित शोरूम: ${complaint.branch}`,
      `विवरण: ${complaint.message}`,
    ]
    const url = buildWhatsAppLink(resolveTargetPhone(complaint.branch), lines.join('\n'))
    window.open(url, '_blank', 'noreferrer')
    toast.success('WhatsApp खुल रहा है — कृपया वहां मैसेज भेज दें।')
  }

  return (
    <section id="contact" className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-secondary-foreground">
            <ApperIcon name="Send" className="h-4 w-4" />
            संपर्क करें
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
            पूछताछ करें या शिकायत दर्ज करें
          </h2>
          <p className="mt-3 text-muted-foreground">
            फॉर्म भरते ही आपका मैसेज सीधे संबंधित शोरूम के WhatsApp पर तैयार होकर खुल जाएगा।
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-8">
          <Tabs defaultValue="inquiry">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="inquiry" className="gap-2">
                <ApperIcon name="MessageSquarePlus" className="h-4 w-4" />
                पूछताछ करें
              </TabsTrigger>
              <TabsTrigger value="complaint" className="gap-2">
                <ApperIcon name="AlertCircle" className="h-4 w-4" />
                शिकायत दर्ज करें
              </TabsTrigger>
            </TabsList>

            <TabsContent value="inquiry" className="mt-6">
              <form onSubmit={submitInquiry} className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="inquiry-name">आपका नाम</Label>
                  <Input
                    id="inquiry-name"
                    value={inquiry.name}
                    onChange={(event) => setInquiry((form) => ({ ...form, name: event.target.value }))}
                    placeholder="जैसे: रामू यादव"
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="inquiry-phone">फ़ोन नंबर</Label>
                  <Input
                    id="inquiry-phone"
                    type="tel"
                    value={inquiry.phone}
                    onChange={(event) => setInquiry((form) => ({ ...form, phone: event.target.value }))}
                    placeholder="10 अंकों का मोबाइल नंबर"
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="inquiry-area">क्षेत्र / शहर</Label>
                  <Input
                    id="inquiry-area"
                    value={inquiry.area}
                    onChange={(event) => setInquiry((form) => ({ ...form, area: event.target.value }))}
                    placeholder="जैसे: उरई"
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="inquiry-model">किस मॉडल में रुचि है?</Label>
                  <Select
                    value={inquiry.model}
                    onValueChange={(value) => setInquiry((form) => ({ ...form, model: value }))}
                  >
                    <SelectTrigger id="inquiry-model" className="mt-1.5">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {MODELS.map((model) => (
                        <SelectItem key={model.key} value={model.nameHi}>
                          {model.nameHi}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="inquiry-branch">कौनसे शोरूम से बात करना चाहते हैं?</Label>
                  <Select
                    value={inquiry.branch}
                    onValueChange={(value) => setInquiry((form) => ({ ...form, branch: value }))}
                  >
                    <SelectTrigger id="inquiry-branch" className="mt-1.5">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {BRANCH_OPTIONS.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="inquiry-message">संदेश (वैकल्पिक)</Label>
                  <Textarea
                    id="inquiry-message"
                    value={inquiry.message}
                    onChange={(event) => setInquiry((form) => ({ ...form, message: event.target.value }))}
                    placeholder="अपनी ज़रूरत बताएं..."
                    className="mt-1.5"
                    rows={3}
                  />
                </div>
                {inquiryError && <div className="sm:col-span-2"><EmptyFormState icon="AlertTriangle" message={inquiryError} /></div>}
                <div className="sm:col-span-2">
                  <Button type="submit" size="lg" className="w-full gap-2 bg-accent font-semibold text-accent-foreground hover:bg-accent/90 sm:w-auto">
                    <ApperIcon name="MessageCircle" className="h-5 w-5" />
                    WhatsApp पर भेजें
                  </Button>
                </div>
              </form>
            </TabsContent>

            <TabsContent value="complaint" className="mt-6">
              <form onSubmit={submitComplaint} className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="complaint-name">आपका नाम</Label>
                  <Input
                    id="complaint-name"
                    value={complaint.name}
                    onChange={(event) => setComplaint((form) => ({ ...form, name: event.target.value }))}
                    placeholder="जैसे: रामू यादव"
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="complaint-phone">फ़ोन नंबर</Label>
                  <Input
                    id="complaint-phone"
                    type="tel"
                    value={complaint.phone}
                    onChange={(event) => setComplaint((form) => ({ ...form, phone: event.target.value }))}
                    placeholder="10 अंकों का मोबाइल नंबर"
                    className="mt-1.5"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="complaint-branch">संबंधित शोरूम</Label>
                  <Select
                    value={complaint.branch}
                    onValueChange={(value) => setComplaint((form) => ({ ...form, branch: value }))}
                  >
                    <SelectTrigger id="complaint-branch" className="mt-1.5">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {BRANCH_OPTIONS.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="complaint-message">शिकायत का विवरण</Label>
                  <Textarea
                    id="complaint-message"
                    value={complaint.message}
                    onChange={(event) => setComplaint((form) => ({ ...form, message: event.target.value }))}
                    placeholder="अपनी समस्या विस्तार से बताएं..."
                    className="mt-1.5"
                    rows={4}
                  />
                </div>
                {complaintError && <div className="sm:col-span-2"><EmptyFormState icon="AlertTriangle" message={complaintError} /></div>}
                <div className="sm:col-span-2">
                  <Button type="submit" size="lg" variant="destructive" className="w-full gap-2 font-semibold sm:w-auto">
                    <ApperIcon name="Send" className="h-5 w-5" />
                    शिकायत भेजें
                  </Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>

          <div className="mt-8 flex flex-col items-center gap-2 border-t border-border pt-6 text-center sm:flex-row sm:justify-center sm:gap-4">
            <ApperIcon name="Headset" className="h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground">
              सीधी बात करना चाहते हैं? कस्टमर केयर:{' '}
              <a href={buildCallLink(COMPANY.customerCareNumber)} className="font-semibold text-primary hover:underline">
                {COMPANY.customerCareNumber}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
