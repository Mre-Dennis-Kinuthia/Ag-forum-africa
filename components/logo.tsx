import Link from "next/link"

export function Logo({ showWordmark = true, className }: { showWordmark?: boolean; className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className ?? ""}`}>
      {showWordmark && (
        <span className="font-heading text-lg font-bold tracking-tight text-foreground">
          Agforum<span className="text-brand-gold">.</span>
        </span>
      )}
    </Link>
  )
}
