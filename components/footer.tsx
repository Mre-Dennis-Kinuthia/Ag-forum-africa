import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#0a0f1a] text-white/50 text-sm">
      <div className="container-wide py-12 lg:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
          <div className="col-span-2 md:col-span-1">
            <span className="font-heading text-[15px] font-bold text-white block mb-3">Agforum</span>
            <p className="text-[13px] leading-relaxed max-w-[22ch]">
              Intelligence and convening for Africa's agrifood future.
            </p>
          </div>

          <div>
            <h4 className="text-white/30 text-xs uppercase tracking-wider mb-3">Intelligence</h4>
            <ul className="space-y-2">
              <li><Link href="/intelligence" className="hover:text-white transition-colors">Overview</Link></li>
              <li><Link href="/intelligence/capital-tracker" className="hover:text-white transition-colors">Capital Tracker</Link></li>
              <li><Link href="/knowledge-hub" className="hover:text-white transition-colors">Publications</Link></li>
              <li><Link href="/stories" className="hover:text-white transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white/30 text-xs uppercase tracking-wider mb-3">Platform</h4>
            <ul className="space-y-2">
              <li><Link href="/events" className="hover:text-white transition-colors">Events</Link></li>
              <li><Link href="/forums" className="hover:text-white transition-colors">Forums</Link></li>
              <li><Link href="/community" className="hover:text-white transition-colors">Community</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white/30 text-xs uppercase tracking-wider mb-3">Organisation</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="mailto:info@agforumafrica.org" className="hover:text-white transition-colors">info@agforumafrica.org</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="container-wide flex flex-col sm:flex-row justify-between gap-3 py-5 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} Ag Forum Africa</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white/50">Privacy</Link>
            <Link href="/terms" className="hover:text-white/50">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
