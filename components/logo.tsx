import Link from "next/link"

export function Logo({ showWordmark = true }: { showWordmark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div
        className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background"
        aria-hidden="true"
      >
        <div className="flex h-6 w-6 items-center justify-between">
          <span className="h-full w-[3px] rounded-sm bg-primary" />
          <span className="h-full w-[3px] rounded-sm bg-secondary" />
          <span className="h-full w-[3px] rounded-sm bg-accent" />
        </div>
      </div>
      {showWordmark && (
        <div className="flex flex-col leading-tight">
          <span className="font-heading text-lg font-semibold tracking-tight text-primary">Agforum</span>
          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground hidden sm:block">
            African Agriculture Intelligence
          </span>
        </div>
      )}
    </Link>
  )
}

