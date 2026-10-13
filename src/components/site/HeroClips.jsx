import { useEffect, useRef, useState } from 'react'
import ApperIcon from '@/components/ApperIcon'
import { Link } from '@/lib/router'
import { HERO_CLIPS } from '@/lib/siteData'

const HOLD_MS = 450 // pause on the finished shot before the next clip fades in
const FADE_MS = 350

// Plays the hero clips back to back. All clips stay mounted (so the next one is
// already loaded) and cross-fade. The clip edges are feathered into the hero
// background (which takes the colour of the current clip) so there is no visible box.
export default function HeroClips({ onClipChange }) {
  const [index, setIndex] = useState(0)
  const refs = useRef([])
  const reduced = useRef(
    typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    if (reduced.current) return undefined
    const video = refs.current[index]
    if (!video) return undefined
    let timer
    const advance = () => {
      timer = setTimeout(() => setIndex((i) => (i + 1) % HERO_CLIPS.length), HOLD_MS)
    }
    video.currentTime = 0
    video.addEventListener('ended', advance, { once: true })
    video.play().catch(() => {}) // autoplay blocked: keep the poster
    return () => {
      clearTimeout(timer)
      video.removeEventListener('ended', advance)
    }
  }, [index])

  const clip = HERO_CLIPS[index]

  useEffect(() => {
    onClipChange?.(HERO_CLIPS[index])
  }, [index, onClipChange])
  const feather = {
    WebkitMaskImage:
      'linear-gradient(to right, transparent, #000 16%, #000 84%, transparent), linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)',
    maskImage:
      'linear-gradient(to right, transparent, #000 16%, #000 84%, transparent), linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)',
    WebkitMaskComposite: 'source-in',
    maskComposite: 'intersect',
  }

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="relative aspect-square w-full" style={feather}>
        {HERO_CLIPS.map((c, i) => (
          <video
            key={c.src}
            ref={(el) => (refs.current[i] = el)}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ opacity: i === index ? 1 : 0, transition: `opacity ${FADE_MS}ms ease` }}
            poster={c.poster}
            muted
            playsInline
            preload="auto"
            aria-hidden={i !== index}
          >
            <source src={c.src} type="video/mp4" />
            <source src={c.src.replace(/\.mp4$/, '.webm')} type="video/webm" />
          </video>
        ))}
      </div>
      <Link
        to={clip.to}
        className="absolute inset-x-6 bottom-2 flex items-center justify-between rounded-xl bg-black/60 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur"
      >
        <span>{clip.name}</span>
        <span className="inline-flex items-center gap-1 text-chart-3">
          डिटेल देखें <ApperIcon name="ArrowRight" className="h-4 w-4" />
        </span>
      </Link>
    </div>
  )
}
