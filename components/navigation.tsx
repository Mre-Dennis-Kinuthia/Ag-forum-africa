"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"
import Link from "next/link"

const navItems = [
  { num: "01", label: "Intelligence", href: "/intelligence" },
  { num: "02", label: "Research", href: "/knowledge-hub" },
  { num: "03", label: "Events", href: "/events" },
  { num: "04", label: "Convening", href: "/community" },
  { num: "05", label: "About", href: "/about" },
]

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-sov-off-white/95 backdrop-blur-md border-b border-black/5">
      <div className="container-wide">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Location badge */}
          <div className="hidden sm:flex items-center gap-2 text-eyebrow text-sov-mud">
            <span>Africa</span>
            <span className="text-black/20">·</span>
            <span>EAT</span>
          </div>

          {/* Center logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Logo />
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-4 ml-auto">
            <Link href="/contact" className="hidden lg:inline-flex btn-pill-dark text-xs px-5 py-2">
              Get in Touch
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span className="hidden sm:inline text-eyebrow">{menuOpen ? "Close" : "Menu"}</span>
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-screen menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 top-14 lg:top-16 z-40 bg-sov-off-white overflow-y-auto">
          <div className="container-wide py-12 lg:py-20">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-baseline gap-6 py-4 border-b border-black/5 hover:border-sov-teal/30 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="section-number w-8">{item.num}</span>
                  <span className="heading-h2 text-3xl lg:text-5xl group-hover:text-sov-teal transition-colors">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>

            <div className="mt-12 pt-8 border-t border-black/5 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-pill-dark" onClick={() => setMenuOpen(false)}>
                Get in Touch
              </Link>
              <Link href="/login" className="btn-pill-outline" onClick={() => setMenuOpen(false)}>
                Sign in
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
