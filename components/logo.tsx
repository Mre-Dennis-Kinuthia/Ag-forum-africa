import Link from "next/link"

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`inline-block ${className ?? ""}`}>
      <span className="font-mono text-sm tracking-tight text-foreground">
        AG<span className="text-sov-mud">/</span>forum
      </span>
    </Link>
  )
}
