import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center">
      <div className="container-wide py-20">
        <p className="text-sm text-muted-foreground mb-2">404</p>
        <h1 className="text-2xl font-bold mb-2">Page not found</h1>
        <p className="text-muted-foreground mb-6 max-w-sm">
          This page doesn't exist or has been moved.
        </p>
        <div className="flex gap-4 text-sm">
          <Link href="/" className="font-medium text-brand-navy hover:underline">Home</Link>
          <Link href="/intelligence" className="font-medium text-brand-navy hover:underline">Intelligence</Link>
          <Link href="/contact" className="font-medium text-brand-navy hover:underline">Contact</Link>
        </div>
      </div>
    </div>
  )
}
