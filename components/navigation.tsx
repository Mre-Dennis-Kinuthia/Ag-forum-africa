"use client"

import { useState } from "react"
import { Menu, X, Search, ChevronDown, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import Link from "next/link"
import { useTheme } from "next-themes"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden lg:block bg-brand-navy text-white/70 text-[13px]">
        <div className="container-wide flex items-center justify-between h-8">
          <div className="flex items-center gap-5">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <div className="flex items-center gap-5">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:text-white transition-colors"
            >
              <Sun className="h-3.5 w-3.5 dark:hidden" />
              <Moon className="h-3.5 w-3.5 hidden dark:block" />
            </button>
            <Link href="/login" className="hover:text-white transition-colors">Sign in</Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-card/95 backdrop-blur-md border-b border-border">
        <div className="container-wide flex items-center justify-between h-14 lg:h-16">
          <Logo />

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("intelligence")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link href="/intelligence" className="inline-flex items-center gap-1 px-3 py-2 text-sm text-foreground/70 hover:text-foreground transition-colors">
                Intelligence <ChevronDown className="h-3 w-3 opacity-40" />
              </Link>
              {openDropdown === "intelligence" && (
                <div className="absolute top-full left-0 pt-1.5 w-64">
                  <div className="bg-card rounded-lg border border-border shadow-lg py-1.5">
                    <Link href="/intelligence" className="block px-4 py-2 text-sm hover:bg-muted transition-colors">Overview</Link>
                    <Link href="/intelligence/capital-tracker" className="block px-4 py-2 text-sm hover:bg-muted transition-colors">Capital Tracker</Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/knowledge-hub" className="px-3 py-2 text-sm text-foreground/70 hover:text-foreground transition-colors">
              Research
            </Link>
            <Link href="/events" className="px-3 py-2 text-sm text-foreground/70 hover:text-foreground transition-colors">
              Events
            </Link>
            <Link href="/stories" className="px-3 py-2 text-sm text-foreground/70 hover:text-foreground transition-colors">
              Case Studies
            </Link>
            <Link href="/community" className="px-3 py-2 text-sm text-foreground/70 hover:text-foreground transition-colors">
              Community
            </Link>
          </div>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="text-muted-foreground hover:text-foreground transition-colors p-1.5">
              <Search className="h-[18px] w-[18px]" />
            </button>
            <Button asChild size="sm" className="bg-brand-navy hover:bg-brand-navy/90 text-white h-8 px-4 text-[13px]">
              <Link href="/register">Request access</Link>
            </Button>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-1 lg:hidden">
            <button className="p-2 text-muted-foreground"><Search className="h-5 w-5" /></button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2" aria-label="Menu">
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[3.5rem] bottom-0 z-40 bg-card overflow-y-auto">
          <div className="p-5 space-y-1">
            {[
              { href: "/intelligence", label: "Intelligence" },
              { href: "/intelligence/capital-tracker", label: "Capital Tracker" },
              { href: "/knowledge-hub", label: "Research" },
              { href: "/events", label: "Events" },
              { href: "/stories", label: "Case Studies" },
              { href: "/community", label: "Community" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2.5 text-[15px] hover:text-brand-navy transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-5 mt-4 border-t border-border space-y-2">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/login">Sign in</Link>
              </Button>
              <Button className="w-full bg-brand-navy text-white" asChild>
                <Link href="/register">Request access</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
