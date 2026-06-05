import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-sov-navy text-sov-white-rock">
      <div className="container-wide py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="lg:col-span-1">
            <span className="font-mono text-sm tracking-tight text-sov-white-rock block mb-4">
              AG<span className="text-sov-mud">/</span>forum
            </span>
            <p className="text-sm text-sov-white-rock/60 leading-relaxed max-w-xs">
              Africa&apos;s institutional intelligence platform for agrifood systems.
            </p>
          </div>

          <div>
            <h4 className="text-eyebrow text-sov-mud mb-4">Intelligence</h4>
            <ul className="space-y-2.5 text-sm text-sov-white-rock/70">
              <li><Link href="/intelligence" className="hover:text-sov-white-rock transition-colors">Overview</Link></li>
              <li><Link href="/intelligence/capital-tracker" className="hover:text-sov-white-rock transition-colors">Capital Tracker</Link></li>
              <li><Link href="/knowledge-hub" className="hover:text-sov-white-rock transition-colors">Publications</Link></li>
              <li><Link href="/stories" className="hover:text-sov-white-rock transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-eyebrow text-sov-mud mb-4">Platform</h4>
            <ul className="space-y-2.5 text-sm text-sov-white-rock/70">
              <li><Link href="/events" className="hover:text-sov-white-rock transition-colors">Events</Link></li>
              <li><Link href="/forums" className="hover:text-sov-white-rock transition-colors">Forums</Link></li>
              <li><Link href="/community" className="hover:text-sov-white-rock transition-colors">Community</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-eyebrow text-sov-mud mb-4">Connect</h4>
            <ul className="space-y-2.5 text-sm text-sov-white-rock/70">
              <li><Link href="/about" className="hover:text-sov-white-rock transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-sov-white-rock transition-colors">Contact</Link></li>
              <li><a href="mailto:info@agforumafrica.org" className="hover:text-sov-white-rock transition-colors">info@agforumafrica.org</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col sm:flex-row justify-between gap-3 py-6 text-xs text-sov-white-rock/40">
          <p>&copy; {new Date().getFullYear()} Ag Forum Africa</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-sov-white-rock/60 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-sov-white-rock/60 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
