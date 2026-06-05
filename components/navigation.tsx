"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"
import Link from "next/link"

const navItems = [
  { num: "01", label: "About", href: "/about" },
  { num: "02", label: "Contact", href: "/contact" },
]

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-50 bg-loam/90 backdrop-blur-xl border-b border-soil/10 pt-[env(safe-area-inset-top)]">
      <div className="container-wide">
        {/* Mobile header */}
        <div className="flex md:hidden items-center justify-between h-14">
          <Logo />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="touch-target flex items-center justify-center text-forest -mr-2"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Desktop header */}
        <div className="hidden md:flex items-center justify-between h-16">
          <div className="flex items-center gap-2 text-eyebrow text-soil w-36">
            <span className="text-field">Agrifood</span>
            <span className="text-soil/30">·</span>
            <span>Africa</span>
          </div>

          <Logo />

          <div className="flex items-center gap-1 w-36 justify-end">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm text-muted hover:text-forest transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="ml-2 btn-pill-dark text-xs px-4 py-2">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-14 z-40 bg-loam/98 backdrop-blur-xl overflow-y-auto overscroll-contain pb-[env(safe-area-inset-bottom)]">
          <div className="container-wide py-10">
            <nav className="grid gap-0">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-baseline gap-4 py-5 border-b border-soil/10 active:bg-wheat/30 -mx-4 px-4"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="section-number w-7">{item.num}</span>
                  <span className="heading-h2 text-2xl sm:text-3xl group-active:text-field transition-colors">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>
            <div className="mt-10 pt-6 border-t border-soil/10">
              <Link
                href="/contact"
                className="btn-pill-dark w-full justify-center"
                onClick={() => setMenuOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
