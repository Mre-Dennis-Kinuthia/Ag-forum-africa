import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">Ag Forum Africa</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Connecting agricultural stakeholders across Africa to exchange knowledge and drive innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/intelligence" className="hover:text-secondary transition-colors">
                  Intelligence
                </Link>
              </li>
              <li>
                <Link href="/knowledge-hub" className="hover:text-secondary transition-colors">
                  Research Library
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-secondary transition-colors">
                  Convening
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/community" className="hover:text-secondary transition-colors">
                  Members
                </Link>
              </li>
              <li>
                <Link href="/stories" className="hover:text-secondary transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/guidelines" className="hover:text-secondary transition-colors">
                  Community Guidelines
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-3 mb-4">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
            <a
              href="mailto:info@agforumafrica.org"
              className="text-sm hover:text-secondary transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              info@agforumafrica.org
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} Ag Forum Africa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
