import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center bg-loam">
      <div className="container-wide py-16 sm:py-20">
        <p className="text-eyebrow text-soil mb-4">404</p>
        <h1 className="heading-h2 mb-3">Page not found</h1>
        <p className="text-sm text-muted mb-8 max-w-sm leading-relaxed">
          This page doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="/" className="text-forest hover:text-field transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-muted hover:text-field transition-colors">
            About
          </Link>
          <Link href="/contact" className="btn-nav-lean">
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  )
}
