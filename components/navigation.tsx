"use client"

import { useState } from "react"
import {
  Menu,
  X,
  Search,
  ChevronDown,
  BarChart3,
  FileText,
  TrendingUp,
  BookOpen,
  Video,
  Briefcase,
  Sun,
  Moon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import Link from "next/link"
import { useTheme } from "next-themes"

const intelligenceLinks = [
  { href: "/intelligence", label: "Overview", description: "Capital, policy, and market intelligence", icon: BarChart3 },
  { href: "/intelligence/capital-tracker", label: "Capital Tracker", description: "Committed and announced capital flows", icon: TrendingUp },
]

const researchLinks = [
  { href: "/knowledge-hub", label: "Publications", description: "Policy briefs, reports, and toolkits", icon: FileText },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden lg:block bg-brand-navy text-white/80">
        <div className="container-wide flex items-center justify-between h-8 text-xs">
          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Sun className="h-3 w-3 dark:hidden" />
              <Moon className="h-3 w-3 hidden dark:block" />
              <span className="dark:hidden">Dark</span>
              <span className="hidden dark:inline">Light</span>
            </button>
            <Link href="/login" className="hover:text-white transition-colors">Sign In</Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-card/95 backdrop-blur-md border-b border-border">
        <div className="container-wide flex items-center justify-between h-16 lg:h-[4.25rem]">
          <Logo />

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Intelligence dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("intelligence")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href="/intelligence"
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-md transition-colors"
              >
                Intelligence
                <ChevronDown className="h-3.5 w-3.5 opacity-50" />
              </Link>
              {openDropdown === "intelligence" && (
                <div className="absolute top-full left-0 pt-1 w-72">
                  <div className="bg-card rounded-lg border border-border shadow-lg p-2">
                    {intelligenceLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-start gap-3 p-3 rounded-md hover:bg-muted transition-colors"
                      >
                        <item.icon className="h-4 w-4 mt-0.5 text-muted-foreground" />
                        <div>
                          <div className="text-sm font-medium text-foreground">{item.label}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{item.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Research dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("research")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href="/knowledge-hub"
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-md transition-colors"
              >
                Research
                <ChevronDown className="h-3.5 w-3.5 opacity-50" />
              </Link>
              {openDropdown === "research" && (
                <div className="absolute top-full left-0 pt-1 w-72">
                  <div className="bg-card rounded-lg border border-border shadow-lg p-2">
                    {researchLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-start gap-3 p-3 rounded-md hover:bg-muted transition-colors"
                      >
                        <item.icon className="h-4 w-4 mt-0.5 text-muted-foreground" />
                        <div>
                          <div className="text-sm font-medium text-foreground">{item.label}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{item.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/events"
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-md transition-colors"
            >
              Events
            </Link>
            <Link
              href="/stories"
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-md transition-colors"
            >
              Case Studies
            </Link>
            <Link
              href="/community"
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-md transition-colors"
            >
              Community
            </Link>
          </div>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Search className="h-4.5 w-4.5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button asChild size="sm" className="bg-brand-navy hover:bg-brand-navy/90 text-white rounded-full px-5">
              <Link href="/register">Request Access</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <Search className="h-4.5 w-4.5" />
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[4rem] bottom-0 z-40 bg-card border-t border-border overflow-y-auto">
          <div className="px-4 py-6 space-y-1">
            <p className="px-3 pb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Intelligence</p>
            {intelligenceLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-muted transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <item.icon className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            ))}

            <div className="pt-3">
              <p className="px-3 pb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Research</p>
              {researchLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-muted transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              ))}
            </div>

            <div className="pt-3 space-y-1">
              <p className="px-3 pb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">More</p>
              <Link href="/events" className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-sm font-medium">Events</span>
              </Link>
              <Link href="/stories" className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-sm font-medium">Case Studies</span>
              </Link>
              <Link href="/community" className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-sm font-medium">Community</span>
              </Link>
              <Link href="/about" className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-sm font-medium">About</span>
              </Link>
              <Link href="/contact" className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-sm font-medium">Contact</span>
              </Link>
            </div>

            <div className="pt-6 space-y-2 border-t border-border mt-4">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
              <Button className="w-full bg-brand-navy hover:bg-brand-navy/90 text-white" asChild>
                <Link href="/register">Request Access</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
