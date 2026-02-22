"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isAdmin = false // Set to true to show admin link

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">AF</span>
            </div>
            <span className="font-bold text-xl text-primary hidden sm:block">Ag Forum Africa</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link href="/forums" className="text-foreground hover:text-primary transition-colors font-medium">
              Forums
            </Link>
            <Link href="/knowledge-hub" className="text-foreground hover:text-primary transition-colors font-medium">
              Knowledge Hub
            </Link>
            <Link href="/events" className="text-foreground hover:text-primary transition-colors font-medium">
              Events
            </Link>
            <Link href="/stories" className="text-foreground hover:text-primary transition-colors font-medium">
              Stories
            </Link>
            <Link href="/community" className="text-foreground hover:text-primary transition-colors font-medium">
              Community
            </Link>
            {isAdmin && (
              <Link
                href="/admin"
                className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-1"
              >
                <Shield className="h-4 w-4" />
                Admin
              </Link>
            )}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/register">Join Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block py-2 text-foreground hover:text-primary font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/forums"
              className="block py-2 text-foreground hover:text-primary font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Forums
            </Link>
            <Link
              href="/knowledge-hub"
              className="block py-2 text-foreground hover:text-primary font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Knowledge Hub
            </Link>
            <Link
              href="/events"
              className="block py-2 text-foreground hover:text-primary font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/stories"
              className="block py-2 text-foreground hover:text-primary font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Stories
            </Link>
            <Link
              href="/community"
              className="block py-2 text-foreground hover:text-primary font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Community
            </Link>
            {isAdmin && (
              <Link
                href="/admin"
                className="block py-2 text-foreground hover:text-primary font-medium flex items-center gap-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Shield className="h-4 w-4" />
                Admin
              </Link>
            )}
            <div className="pt-4 space-y-2 border-t border-border">
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
              <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                <Link href="/register">Join Now</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
