"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { NewsletterSignup } from "@/components/newsletter-signup"

export function FooterNewsletter() {
  const pathname = usePathname()

  if (pathname === "/") {
    return (
      <p className="text-sm text-muted">
        <Link href="#updates" className="text-field hover:text-forest transition-colors">
          Subscribe to quarterly notes →
        </Link>
      </p>
    )
  }

  return <NewsletterSignup />
}
