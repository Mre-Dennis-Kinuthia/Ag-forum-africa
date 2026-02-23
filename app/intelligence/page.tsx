import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function IntelligencePage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl space-y-4">
            <Badge variant="outline" className="uppercase tracking-wide text-xs">
              Intelligence
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Institutional intelligence for African agriculture
            </h1>
            <p className="text-muted-foreground text-pretty">
              A structured view of capital flows, regulatory change, and market dynamics across African agriculture,
              designed for DFIs, sovereign funds, policymakers, and operators.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[2fr,1.5fr]">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Featured briefings</h2>
              <p className="text-sm text-muted-foreground">
                Editorially curated documents combining data, policy analysis, and implications for capital allocation.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Capital flows into African agrifood systems — Q1 2024",
                  tag: "Capital Intelligence",
                  summary:
                    "Overview of committed and announced capital across key value chains, instruments, and geographies.",
                },
                {
                  title: "Regulatory horizon scan — priority markets",
                  tag: "Policy & Regulation",
                  summary:
                    "Forward-looking view of regulatory changes with potential impact on investment and operating risk.",
                },
                {
                  title: "Market map: growth segments in horticulture",
                  tag: "Market Intelligence",
                  summary:
                    "Structured map of emerging opportunity spaces in horticulture, with indicative capital needs.",
                },
              ].map((item, i) => (
                <Card key={i} className="hover:shadow-sm transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <Badge variant="outline">{item.tag}</Badge>
                    </div>
                    <CardTitle className="text-base sm:text-lg leading-snug">{item.title}</CardTitle>
                    <CardDescription className="text-sm text-pretty">{item.summary}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/knowledge-hub">Open briefing</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Key dashboards</h2>
              <p className="text-sm text-muted-foreground">
                High-level views over proprietary and curated datasets. Designed for scanability, with drill-down
                available inside each module.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Capital tracker",
                  description: "Committed and announced capital by country, value chain, and instrument.",
                },
                {
                  title: "Regulatory tracker",
                  description: "Upcoming and recent policy changes across priority markets.",
                },
                {
                  title: "Market signals",
                  description: "Selected indicators on trade, prices, and climate-related risk.",
                },
              ].map((item, i) => (
                <Card key={i} className="border-dashed">
                  <CardHeader>
                    <CardTitle className="text-base sm:text-lg">{item.title}</CardTitle>
                    <CardDescription className="text-sm text-pretty">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground">
                      UI placeholder — connect to live datasets when the data layer is ready.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

