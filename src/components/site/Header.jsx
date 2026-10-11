import { useState } from 'react'
import ApperIcon from '@/components/ApperIcon'
import { Button } from '@/components/ui/button'
import logoIcon from '@/assets/logoIcon'
import { COMPANY, buildCallLink, buildWhatsAppLink } from '@/lib/siteData'

const NAV_LINKS = [
  { href: '#about', label: 'हमारे बारे में' },
  { href: '#models', label: 'मॉडल्स' },
  { href: '#services', label: 'सुविधाएं' },
  { href: '#branches', label: 'शोरूम' },
  { href: '#contact', label: 'संपर्क करें' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-sticky border-b border-border bg-card/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logoIcon}
            alt="Hindustan Motors logo"
            className="h-11 w-11 rounded-xl object-contain"
          />
          <span className="leading-tight">
            <span className="block font-heading text-lg font-extrabold text-foreground sm:text-xl">
              हिंदुस्तान मोटर्स
            </span>
            <span className="hidden text-xs font-medium text-muted-foreground sm:block">
              आपका भरोसेमंद ई-रिक्शा डीलर
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a href={buildCallLink(COMPANY.customerCareNumber)}>
            <Button
              variant="outline"
              className="gap-2 border-primary/30 font-semibold text-primary hover:bg-primary/5"
            >
              <ApperIcon name="Phone" className="h-4 w-4" />
              कॉल करें
            </Button>
          </a>
          <a
            href={buildWhatsAppLink(
              COMPANY.customerCareNumber,
              'नमस्ते, मुझे हिंदुस्तान मोटर्स ई-रिक्शा के बारे में जानकारी चाहिए।'
            )}
            target="_blank"
            rel="noreferrer"
          >
            <Button className="gap-2 bg-accent font-semibold text-accent-foreground hover:bg-accent/90">
              <ApperIcon name="MessageCircle" className="h-4 w-4" />
              WhatsApp करें
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

      {menuOpen && (
        <div className="border-t border-border bg-card px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-2 py-2 text-sm font-semibold text-foreground/85 hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex gap-2">
            <a href={buildCallLink(COMPANY.customerCareNumber)} className="flex-1">
              <Button variant="outline" className="w-full gap-2 border-primary/30 font-semibold text-primary">
                <ApperIcon name="Phone" className="h-4 w-4" />
                कॉल करें
              </Button>
            </a>
            <a
              href={buildWhatsAppLink(
                COMPANY.customerCareNumber,
                'नमस्ते, मुझे हिंदुस्तान मोटर्स ई-रिक्शा के बारे में जानकारी चाहिए।'
              )}
              target="_blank"
              rel="noreferrer"
              className="flex-1"
            >
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
