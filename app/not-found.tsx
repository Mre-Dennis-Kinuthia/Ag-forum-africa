import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="container-narrow text-center py-20">
        <p className="text-6xl font-bold text-muted-foreground/20 mb-4">404</p>
        <h1 className="text-2xl font-bold mb-3">Page not found</h1>
        <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
          The page you're looking for doesn't exist or has been moved. Try one of the links below.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild variant="outline" className="rounded-full px-6">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>
          </Button>
          <Button asChild className="bg-brand-navy hover:bg-brand-navy/90 text-white rounded-full px-6">
            <Link href="/intelligence">Browse Intelligence</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
