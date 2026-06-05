"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"
import Link from "next/link"

const navItems = [
  { num: "01", label: "About", href: "/about" },
  { num: "02", label: "Contact", href: "/contact" },
]

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false)
    }
    if (menuOpen) window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-50 bg-loam/90 backdrop-blur-xl border-b border-soil/10 pt-[env(safe-area-inset-top)]">
      <div className="container-wide">
        {/* Mobile */}
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

        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] items-center h-16 gap-4">
          <div className="flex items-center gap-2 text-eyebrow text-soil">
            <span className="text-field">Agrifood</span>
            <span className="text-soil/30">·</span>
            <span>Africa</span>
          </div>

          <Logo className="justify-self-center" />

          <div className="flex items-center gap-3 justify-self-end">
            <Link
              href="/about"
              className={`text-sm transition-colors ${
                pathname === "/about" ? "text-forest" : "text-muted hover:text-forest"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`btn-nav-lean ${pathname === "/contact" ? "border-field/40 bg-field/5 text-field" : ""}`}
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>

      {menuOpen && (
        <>
          <button
            type="button"
            className="md:hidden fixed inset-0 top-14 z-30 bg-forest/20 backdrop-blur-[2px]"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <div className="md:hidden fixed inset-x-0 top-14 z-40 bg-loam/98 backdrop-blur-xl overflow-y-auto overscroll-contain max-h-[calc(100dvh-3.5rem)] pb-[env(safe-area-inset-bottom)] animate-menu-in">
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
                  className="btn-nav-lean w-full min-h-[2.75rem] text-[0.6875rem] justify-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}
