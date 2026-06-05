import Link from "next/link"
import { GrainGradient } from "@/components/grain-gradient"
import { FooterNewsletter } from "@/components/footer-newsletter"

export function Footer() {
  return (
    <GrainGradient variant="earth" className="border-t border-soil/12">
      <div className="container-wide py-10 sm:py-14 lg:py-16 pb-[calc(1rem+env(safe-area-inset-bottom))]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr,1fr,1.2fr] gap-10 lg:gap-12 items-start">
          <div>
            <span className="font-mono text-sm tracking-tight text-forest block mb-3">
              AG<span className="text-field">/</span>forum
            </span>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Institutional intelligence for African agriculture — from soil to markets.
            </p>
          </div>

          <div>
            <p className="text-eyebrow text-soil mb-4">Connect</p>
            <nav className="flex flex-col gap-2.5 text-sm text-muted">
              <Link href="/about" className="hover:text-forest transition-colors w-fit">About</Link>
              <Link href="/contact" className="hover:text-forest transition-colors w-fit">Contact</Link>
              <a href="mailto:info@agforumafrica.org" className="hover:text-forest transition-colors break-all">
                info@agforumafrica.org
              </a>
            </nav>
          </div>

          <div>
            <p className="text-eyebrow text-soil mb-4">Updates</p>
            <FooterNewsletter />
          </div>
        </div>
      </div>

      <div className="border-t border-soil/10">
        <div className="container-wide flex flex-col sm:flex-row justify-between gap-2 py-5 text-xs text-soil/50">
          <p>&copy; {new Date().getFullYear()} Ag Forum Africa</p>
          <p className="text-eyebrow text-field/70">Agrifood · In development</p>
        </div>
      </div>
    </GrainGradient>
  )
}
