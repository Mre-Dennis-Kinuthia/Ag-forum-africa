import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { BarChart3, Scale, TrendingUp, Lock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Intelligence" }

export default function IntelligencePage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-card">
        <div className="container-wide py-12 lg:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Intelligence</h1>
          <p className="text-muted-foreground max-w-lg">
            Capital, regulatory, and market intelligence for the institutions operating across African agriculture.
          </p>
        </div>
      </section>

      <section className="container-wide py-14 lg:py-20 grid gap-14 lg:grid-cols-[1.2fr,1fr]">
        {/* Briefings */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Featured briefings</h2>
          <div className="space-y-4">
            {[
              { title: "Capital flows into African agrifood systems — Q1 2024", tag: "Capital Intelligence", summary: "Overview of committed and announced capital across key value chains, instruments, and geographies.", href: "/intelligence/capital-tracker" },
              { title: "Regulatory horizon scan — priority markets", tag: "Policy & Regulation", summary: "Forward-looking view of regulatory changes with potential impact on investment and operating risk.", href: "/knowledge-hub" },
              { title: "Market map: growth segments in horticulture", tag: "Market Intelligence", summary: "Structured map of emerging opportunity spaces in horticulture, with indicative capital needs.", href: "/knowledge-hub" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="group block py-4 border-b border-border last:border-0">
                <span className="text-xs text-muted-foreground">{item.tag}</span>
                <h3 className="text-[15px] font-medium mt-1 mb-1 group-hover:text-brand-navy transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.summary}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Dashboards */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Dashboards</h2>
          <div className="space-y-3">
            {[
              { title: "Capital Tracker", desc: "Committed and announced capital by country, value chain, and instrument.", href: "/intelligence/capital-tracker", icon: BarChart3, ready: true },
              { title: "Regulatory Tracker", desc: "Upcoming and recent policy changes across priority markets.", href: "#", icon: Scale, ready: false },
              { title: "Market Signals", desc: "Selected indicators on trade, prices, and climate-related risk.", href: "#", icon: TrendingUp, ready: false },
            ].map((item, i) => {
              const inner = (
                <Card className={`h-full ${item.ready ? "hover:border-border transition-colors" : "border-dashed opacity-50"}`}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <item.icon className="h-4 w-4 text-muted-foreground" />
                      <CardTitle className="text-[15px]">{item.title}</CardTitle>
                      {!item.ready && <Lock className="h-3 w-3 text-muted-foreground ml-auto" />}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                    {!item.ready && <p className="text-xs text-muted-foreground/50 mt-2 italic">Coming soon</p>}
                  </CardContent>
                </Card>
              )
              return item.ready ? <Link key={i} href={item.href} className="block group">{inner}</Link> : <div key={i}>{inner}</div>
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
