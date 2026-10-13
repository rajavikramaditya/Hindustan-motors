import { ABOUT_IMAGE } from '@/lib/siteData'

// Full-width banner that uses the group photo as its background.
export default function ImageBanner({ children, className = '' }) {
  return (
    <section className={`relative isolate overflow-hidden bg-sidebar ${className}`}>
      <img
        src={ABOUT_IMAGE}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        loading="lazy"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">{children}</div>
    </section>
  )
}
