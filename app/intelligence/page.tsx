import Link from "next/link"
import { BarChart3, Scale, TrendingUp, Lock } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Intelligence" }

export default function IntelligencePage() {
  return (
    <div>
      <PageHero
        eyebrow="01 Intelligence"
        title="Capital, policy, and market intelligence."
        description="Structured intelligence for the institutions operating across African agriculture."
      />

      <section className="container-wide py-16 lg:py-24 grid gap-14 lg:grid-cols-[1.2fr,1fr]">
        <div>
          <p className="text-eyebrow text-sov-mud mb-4">Briefings</p>
          <h2 className="heading-h2 mb-8">Featured briefings</h2>
          <div className="space-y-0">
            {[
              { title: "Capital flows into African agrifood systems — Q1 2024", tag: "Capital Intelligence", summary: "Overview of committed and announced capital across key value chains, instruments, and geographies.", href: "/intelligence/capital-tracker" },
              { title: "Regulatory horizon scan — priority markets", tag: "Policy & Regulation", summary: "Forward-looking view of regulatory changes with potential impact on investment and operating risk.", href: "/knowledge-hub" },
              { title: "Market map: growth segments in horticulture", tag: "Market Intelligence", summary: "Structured map of emerging opportunity spaces in horticulture, with indicative capital needs.", href: "/knowledge-hub" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="group block py-5 border-b border-black/10 last:border-0">
                <span className="text-eyebrow text-sov-mud">{item.tag}</span>
                <h3 className="text-base font-medium mt-1 mb-1 group-hover:text-sov-teal transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--sov-text-secondary)" }}>{item.summary}</p>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-eyebrow text-sov-mud mb-4">Dashboards</p>
          <h2 className="heading-h2 mb-8">Live data</h2>
          <div className="space-y-3">
            {[
              { title: "Capital Tracker", desc: "Committed and announced capital by country, value chain, and instrument.", href: "/intelligence/capital-tracker", icon: BarChart3, ready: true },
              { title: "Regulatory Tracker", desc: "Upcoming and recent policy changes across priority markets.", href: "#", icon: Scale, ready: false },
              { title: "Market Signals", desc: "Selected indicators on trade, prices, and climate-related risk.", href: "#", icon: TrendingUp, ready: false },
            ].map((item, i) => {
              const inner = (
                <div className={`p-6 border border-black/10 ${item.ready ? "hover:border-sov-teal/30 hover:bg-sov-white-rock/50 transition-colors" : "border-dashed opacity-50"}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon className="h-4 w-4 text-sov-mud" />
                    <h3 className="text-sm font-medium">{item.title}</h3>
                    {!item.ready && <Lock className="h-3 w-3 text-sov-mud ml-auto" />}
                  </div>
                  <p className="text-sm" style={{ color: "var(--sov-text-secondary)" }}>{item.desc}</p>
                  {!item.ready && <p className="text-xs text-sov-mud mt-2 italic">Coming soon</p>}
                </div>
              )
              return item.ready ? <Link key={i} href={item.href} className="block">{inner}</Link> : <div key={i}>{inner}</div>
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
