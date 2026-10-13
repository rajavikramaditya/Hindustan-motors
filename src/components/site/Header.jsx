import { useState } from 'react'
import ApperIcon from '@/components/ApperIcon'
import { Button } from '@/components/ui/button'
import Logo from '@/components/site/Logo'
import { Link } from '@/lib/router'
import { COMPANY, buildCallLink, buildWhatsAppLink } from '@/lib/siteData'

const NAV_LINKS = [
  { to: '/', label: 'होम' },
  { to: '/models', label: 'मॉडल्स' },
  { to: '/about', label: 'हमारे बारे में' },
  { to: '/#services', label: 'सुविधाएं' },
  { to: '/#branches', label: 'शोरूम' },
  { to: '/dealership', label: 'डीलर बनें' },
  { to: '/#contact', label: 'संपर्क' },
]

const WA_MSG = 'नमस्ते, मुझे हिंदुस्तान मोटर्स ई-रिक्शा के बारे में जानकारी चाहिए।'

export default function Header({ path }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const isActive = (to) => to === path || (to !== '/' && !to.includes('#') && path.startsWith(to))

  return (
    <header className="sticky top-0 z-sticky bg-card/95 shadow-sm backdrop-blur">
      <div className="bg-gradient-to-r from-sidebar via-primary to-sidebar text-primary-foreground">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-1.5 text-xs font-semibold sm:px-6">
          <span className="truncate">
            <span className="text-chart-3">₹34,999</span> से डाउन पेमेंट · Affordable EMI पर E-Rickshaw
          </span>
          <a href={buildCallLink(COMPANY.customerCareNumber)} className="inline-flex shrink-0 items-center gap-1.5 hover:text-chart-3">
            <ApperIcon name="Phone" className="h-3.5 w-3.5" />
            {COMPANY.customerCareNumber}
          </a>
        </div>
      </div>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3">
          <Logo />
          <span className="leading-tight">
            <span className="block font-heading text-lg font-extrabold text-foreground sm:text-xl">हिंदुस्तान मोटर्स</span>
            <span className="hidden text-xs font-medium text-muted-foreground sm:block">Badshah अधिकृत डीलर</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`border-b-2 py-1 text-sm font-semibold transition-colors hover:text-primary ${
                isActive(link.to) ? 'border-chart-3 text-primary' : 'border-transparent text-foreground/80'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a href={buildCallLink(COMPANY.customerCareNumber)}>
            <Button variant="outline" className="gap-2 border-primary/30 font-semibold text-primary hover:bg-primary/5">
              <ApperIcon name="Phone" className="h-4 w-4" />
              कॉल करें
            </Button>
          </a>
          <a href={buildWhatsAppLink(COMPANY.customerCareNumber, WA_MSG)} target="_blank" rel="noreferrer">
            <Button className="gap-2 bg-accent font-semibold text-accent-foreground hover:bg-accent/90">
              <ApperIcon name="MessageCircle" className="h-4 w-4" />
              WhatsApp
            </Button>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-muted lg:hidden"
          aria-label="मेनू खोलें"
        >
          <ApperIcon name={menuOpen ? 'X' : 'Menu'} className="h-5 w-5" />
        </button>
      </div>

      <div className="h-[3px] bg-gradient-to-r from-chart-3 via-accent to-primary" />

      {menuOpen && (
        <div className="border-t border-border bg-card px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className="rounded-lg px-2 py-2.5 text-sm font-semibold text-foreground/85 hover:bg-muted"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex gap-2">
            <a href={buildCallLink(COMPANY.customerCareNumber)} className="flex-1">
              <Button variant="outline" className="w-full gap-2 border-primary/30 font-semibold text-primary">
                <ApperIcon name="Phone" className="h-4 w-4" />
                कॉल करें
              </Button>
            </a>
            <a href={buildWhatsAppLink(COMPANY.customerCareNumber, WA_MSG)} target="_blank" rel="noreferrer" className="flex-1">
              <Button className="w-full gap-2 bg-accent font-semibold text-accent-foreground hover:bg-accent/90">
                <ApperIcon name="MessageCircle" className="h-4 w-4" />
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
