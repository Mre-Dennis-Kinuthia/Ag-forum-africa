import Link from "next/link"
import { GrainGradient } from "@/components/grain-gradient"

export function Footer() {
  return (
    <GrainGradient variant="dark" className="border-t border-field/10">
      <div className="container-wide py-10 sm:py-14 lg:py-16 pb-[calc(1rem+env(safe-area-inset-bottom))]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-start">
          <div>
            <span className="font-mono text-sm tracking-tight text-loam block mb-3">
              AG<span className="text-field">/</span>forum
            </span>
            <p className="text-sm text-loam/45 leading-relaxed max-w-xs">
              Institutional intelligence for African agriculture — from soil to markets.
            </p>
          </div>

          <div className="md:text-right">
            <p className="text-eyebrow text-harvest/60 mb-4">Connect</p>
            <nav className="flex flex-wrap gap-x-5 gap-y-2 md:flex-col md:gap-2.5 text-sm text-loam/55 md:items-end">
              <Link href="/about" className="hover:text-loam transition-colors">About</Link>
              <Link href="/contact" className="hover:text-loam transition-colors">Contact</Link>
              <a href="mailto:info@agforumafrica.org" className="hover:text-loam transition-colors">
                info@agforumafrica.org
              </a>
            </nav>
          </div>
        </div>
      </div>

      <div className="border-t border-field/10">
        <div className="container-wide flex flex-col sm:flex-row justify-between gap-2 py-5 text-xs text-loam/30">
          <p>&copy; {new Date().getFullYear()} Ag Forum Africa</p>
          <p className="text-eyebrow text-harvest/50">Agrifood · In development</p>
        </div>
      </div>
    </GrainGradient>
  )
}
