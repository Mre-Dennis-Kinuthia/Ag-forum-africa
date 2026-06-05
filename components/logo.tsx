import Link from "next/link"

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2 shrink-0 ${className ?? ""}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-field flex-shrink-0" aria-hidden="true" />
      <span className="font-mono text-sm tracking-tight text-forest">
        AG<span className="text-field">/</span>forum
      </span>
    </Link>
  )
}
