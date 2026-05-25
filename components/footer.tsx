import Link from "next/link"
import { Logo } from "@/components/logo"

const navigation = {
  intelligence: [
    { name: "Overview", href: "/intelligence" },
    { name: "Capital Tracker", href: "/intelligence/capital-tracker" },
    { name: "Publications", href: "/knowledge-hub" },
  ],
  platform: [
    { name: "Events", href: "/events" },
    { name: "Case Studies", href: "/stories" },
    { name: "Community", href: "/community" },
    { name: "Forums", href: "/forums" },
  ],
  organisation: [
    { name: "About Agforum", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Use", href: "/terms" },
    { name: "Accessibility", href: "/accessibility" },
  ],
}

const socials = [
  { name: "LinkedIn", href: "#", icon: LinkedInIcon },
  { name: "X", href: "#", icon: XIcon },
  { name: "YouTube", href: "#", icon: YouTubeIcon },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container-wide py-14 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/10">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2L3 7v6l7 5 7-5V7l-7-5z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <path d="M10 6v8M7 8.5v5M13 8.5v5" stroke="#d4a017" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="font-heading text-base font-bold text-background">Agforum</span>
            </div>
            <p className="text-sm leading-relaxed text-background/50 max-w-xs mb-6">
              Institutional intelligence and convening for the organisations shaping Africa's agrifood future.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex h-8 w-8 items-center justify-center rounded-md bg-background/5 hover:bg-background/10 transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Intelligence */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-background/40 mb-4">Intelligence</h4>
            <ul className="space-y-2.5">
              {navigation.intelligence.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-background/60 hover:text-background transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-background/40 mb-4">Platform</h4>
            <ul className="space-y-2.5">
              {navigation.platform.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-background/60 hover:text-background transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Organisation */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-background/40 mb-4">Organisation</h4>
            <ul className="space-y-2.5">
              {navigation.organisation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-background/60 hover:text-background transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-xs text-background/40">
          <p>&copy; {new Date().getFullYear()} Ag Forum Africa. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {navigation.legal.map((item) => (
              <Link key={item.name} href={item.href} className="hover:text-background/60 transition-colors">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}
