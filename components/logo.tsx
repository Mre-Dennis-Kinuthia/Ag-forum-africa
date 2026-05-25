import Link from "next/link"

export function Logo({ showWordmark = true, className }: { showWordmark?: boolean; className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 group ${className ?? ""}`}>
      <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-brand-navy" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 2L3 7v6l7 5 7-5V7l-7-5z" stroke="#faf9f6" strokeWidth="1.5" fill="none" />
          <path d="M10 6v8M7 8.5v5M13 8.5v5" stroke="#d4a017" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span className="font-heading text-[1.125rem] font-bold tracking-tight text-foreground">
            Agforum
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground mt-0.5 hidden sm:block">
            African Agriculture Intelligence
          </span>
        </div>
      )}
    </Link>
  )
}
