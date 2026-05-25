import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, BarChart3, Scale, TrendingUp, Lock } from "lucide-react"

const briefings = [
  {
    title: "Capital flows into African agrifood systems — Q1 2024",
    tag: "Capital Intelligence",
    summary: "Overview of committed and announced capital across key value chains, instruments, and geographies.",
    href: "/intelligence/capital-tracker",
  },
  {
    title: "Regulatory horizon scan — priority markets",
    tag: "Policy & Regulation",
    summary: "Forward-looking view of regulatory changes with potential impact on investment and operating risk.",
    href: "/knowledge-hub",
  },
  {
    title: "Market map: growth segments in horticulture",
    tag: "Market Intelligence",
    summary: "Structured map of emerging opportunity spaces in horticulture, with indicative capital needs.",
    href: "/knowledge-hub",
  },
]

const dashboards = [
  {
    title: "Capital Tracker",
    description: "Committed and announced capital by country, value chain, and instrument.",
    href: "/intelligence/capital-tracker",
    icon: BarChart3,
    ready: true,
  },
  {
    title: "Regulatory Tracker",
    description: "Upcoming and recent policy changes across priority markets.",
    href: "#",
    icon: Scale,
    ready: false,
  },
  {
    title: "Market Signals",
    description: "Selected indicators on trade, prices, and climate-related risk.",
    href: "#",
    icon: TrendingUp,
    ready: false,
  },
]

export default function IntelligencePage() {
  return (
    <div className="bg-background">
      {/* Header */}
      <section className="border-b border-border bg-card">
        <div className="container-wide py-14 lg:py-16">
          <div className="max-w-2xl">
            <Badge variant="outline" className="uppercase tracking-[0.15em] text-xs mb-4">
              Intelligence
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Institutional intelligence for African agriculture
            </h1>
            <p className="text-muted-foreground text-[15px] leading-relaxed prose-readable">
              A structured view of capital flows, regulatory change, and market dynamics across African agriculture —
              designed for DFIs, sovereign funds, policymakers, and operators.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-wide grid gap-12 lg:grid-cols-[1.2fr,1fr]">
          {/* Briefings */}
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-1">Featured briefings</h2>
              <p className="text-sm text-muted-foreground">
                Editorially curated documents combining data, policy analysis, and implications for capital allocation.
              </p>
            </div>

            <div className="space-y-3">
              {briefings.map((item, i) => (
                <Link key={i} href={item.href} className="group block">
                  <Card className="border-border/60 hover:border-border hover:shadow-sm transition-all duration-200">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <Badge variant="outline" className="text-xs font-normal">{item.tag}</Badge>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <CardTitle className="text-base sm:text-lg leading-snug group-hover:text-brand-navy transition-colors">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.summary}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Dashboards */}
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-1">Key dashboards</h2>
              <p className="text-sm text-muted-foreground">
                High-level views over curated datasets, designed for scanability with drill-down inside each module.
              </p>
            </div>

            <div className="space-y-3">
              {dashboards.map((item, i) => {
                const Wrapper = item.ready ? Link : "div"
                const wrapperProps = item.ready ? { href: item.href } : {}
                return (
                  <Wrapper key={i} {...(wrapperProps as any)} className={`block group ${!item.ready ? "opacity-50" : ""}`}>
                    <Card className={`h-full transition-all duration-200 ${item.ready ? "border-border/60 hover:border-border hover:shadow-sm" : "border-dashed border-border/40"}`}>
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-muted">
                            <item.icon className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-base group-hover:text-brand-navy transition-colors">{item.title}</CardTitle>
                          </div>
                          {!item.ready && <Lock className="h-3.5 w-3.5 text-muted-foreground" />}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                        {!item.ready && (
                          <p className="text-xs text-muted-foreground/60 mt-3 italic">Coming soon — data layer in development.</p>
                        )}
                      </CardContent>
                    </Card>
                  </Wrapper>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
