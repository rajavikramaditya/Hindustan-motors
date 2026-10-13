import { cn } from '@/lib/utils'

// HM mark on a clean white badge so it sits naturally on light and dark headers.
export default function Logo({ className }) {
  return (
    <span
      className={cn(
        'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-black/10',
        className
      )}
    >
      <img src="/logo-hm.png" alt="Hindustan Motors logo" className="h-full w-full object-contain" />
    </span>
  )
}
