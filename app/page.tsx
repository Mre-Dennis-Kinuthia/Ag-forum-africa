import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight, BarChart3, FileText, Calendar, Users, TrendingUp } from "lucide-react"

const featuredBriefings = [
  {
    title: "Capital Flows into African Agrifood Systems",
    period: "Q1 2024 · Quarterly Update",
    category: "Capital Intelligence",
    href: "/intelligence/capital-tracker",
  },
  {
    title: "Regulatory Horizon Scan: Priority Markets",
    period: "Updated Weekly",
    category: "Policy & Regulation",
    href: "/knowledge-hub",
  },
  {
    title: "Value Chain Spotlight: Horticulture & High-Value Crops",
    period: "Annual Outlook · 2024 Edition",
    category: "Market Intelligence",
    href: "/knowledge-hub",
  },
]

const latestUpdates = [
  {
    title: "Kenya announces new blended finance window for climate-smart agriculture",
    category: "Policy & Capital",
    date: "22 May 2026",
    href: "/forums/topic/0",
  },
  {
    title: "West African agritech fund closes first USD 150M vehicle",
    category: "Capital Markets",
    date: "18 May 2026",
    href: "/forums/topic/1",
  },
  {
    title: "New traceability standard adopted for horticulture exports",
    category: "Trade & Standards",
    date: "12 May 2026",
    href: "/forums/topic/2",
  },
  {
    title: "Youth employment incentives extended in key value chains",
    category: "Labour & Inclusion",
    date: "8 May 2026",
    href: "/forums/topic/3",
  },
]

const caseStudies = [
  {
    title: "Sovereign–DFI partnership unlocks irrigation investment in arid counties",
    excerpt:
      "Structured blended finance, backed by policy reform, enabled large-scale irrigation with measurable livelihood gains.",
    image: "/kenyan-farmer-in-field-success.jpg",
    category: "Capital & Infrastructure",
    href: "/stories/0",
  },
  {
    title: "Solar-powered cold chain expansion improves export reliability",
    excerpt:
      "Targeted investment anchored in data on post-harvest loss and export volatility improved resilience in key value chains.",
    image: "/solar-irrigation-system-africa.jpg",
    category: "Resilience & Trade",
    href: "/stories/1",
  },
  {
    title: "Youth-led cooperatives professionalise cocoa production",
    excerpt:
      "Programmatic support and tailored financing help youth cooperatives adopt higher-value practices and governance.",
    image: "/young-african-farmers-cocoa-harvest.jpg",
    category: "Inclusion & Productivity",
    href: "/stories/2",
  },
]

const partners = [
  "African Development Bank",
  "CGIAR",
  "African Union",
  "World Bank",
  "GIZ",
  "USAID",
  "IFAD",
  "Bill & Melinda Gates Foundation",
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden bg-brand-navy">
        <Image
          src="/african-farmland-aerial-view-green-fields.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-20 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/70" />

        <div className="relative container-wide py-20 lg:py-28">
          <div className="max-w-2xl">
            <Badge className="bg-white/10 text-white/90 border-white/20 backdrop-blur-sm mb-6 text-xs font-medium tracking-wide uppercase">
              Institutional Intelligence
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] mb-6">
              Intelligence for
              <br />
              African Agriculture
            </h1>
            <p className="text-lg text-white/75 leading-relaxed mb-10 prose-readable">
              Data, research, and convening for the institutions shaping Africa's agrifood future — serving DFIs,
              sovereign funds, policymakers, and operators.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                asChild
                className="bg-brand-gold hover:bg-brand-gold/90 text-brand-navy font-semibold rounded-full px-7"
              >
                <Link href="/intelligence">
                  Explore Intelligence
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-transparent border-white/30 text-white hover:bg-white/10 rounded-full px-7"
              >
                <Link href="/knowledge-hub">Browse Research</Link>
              </Button>
            </div>
          </div>

          {/* Hero stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10 border-t border-white/10 pt-10">
            {[
              { value: "$12B+", label: "Capital tracked" },
              { value: "320+", label: "Institutions monitored" },
              { value: "86", label: "Policy briefs published" },
              { value: "48", label: "Countries covered" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Intelligence ── */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="flex items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-2">Intelligence</p>
              <h2 className="text-2xl sm:text-3xl font-bold">Featured Briefings</h2>
            </div>
            <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex text-muted-foreground">
              <Link href="/intelligence">
                View all
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-5">
            {featuredBriefings.map((item, i) => (
              <Link key={i} href={item.href} className="group">
                <Card className="h-full border-border/60 hover:border-border transition-all duration-200 hover:shadow-sm">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="text-xs font-normal">
                        {item.category}
                      </Badge>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <CardTitle className="text-base sm:text-lg leading-snug group-hover:text-brand-navy transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.period}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Latest Updates + Data Highlight ── */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1fr,400px] gap-10 lg:gap-14">
            {/* Updates feed */}
            <div>
              <div className="flex items-end justify-between gap-4 mb-8">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-2">Latest</p>
                  <h2 className="text-2xl sm:text-3xl font-bold">Policy & Capital Updates</h2>
                </div>
                <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex text-muted-foreground">
                  <Link href="/forums">
                    All updates
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>

              <div className="space-y-0 divide-y divide-border">
                {latestUpdates.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="group flex items-start justify-between gap-4 py-5 first:pt-0"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-[15px] font-medium text-foreground leading-snug group-hover:text-brand-navy transition-colors mb-1.5">
                        {item.title}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="font-medium">{item.category}</span>
                        <span className="text-border">·</span>
                        <span>{item.date}</span>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 mt-1 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Data highlight */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-2">Data Highlight</p>
              <Card className="border-border/60">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="h-4 w-4 text-brand-teal" />
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Capital Tracker</p>
                  </div>
                  <CardTitle className="text-lg">Capital flows into African agrifood systems</CardTitle>
                  <CardDescription className="text-sm">Q1 2024 · Regional overview</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Simplified bar chart visualization */}
                  <div className="space-y-3 mb-6">
                    {[
                      { region: "West Africa", value: 3.4, max: 4.6 },
                      { region: "East Africa", value: 2.8, max: 4.6 },
                      { region: "Southern Africa", value: 2.1, max: 4.6 },
                      { region: "Central Africa", value: 1.2, max: 4.6 },
                      { region: "North Africa", value: 1.0, max: 4.6 },
                    ].map((item) => (
                      <div key={item.region}>
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-muted-foreground">{item.region}</span>
                          <span className="font-medium">${item.value}B</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-brand-navy rounded-full"
                            style={{ width: `${(item.value / item.max) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link href="/intelligence/capital-tracker">
                      Open full dashboard
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="flex items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-2">Evidence</p>
              <h2 className="text-2xl sm:text-3xl font-bold">Case Studies</h2>
              <p className="text-muted-foreground mt-2 prose-readable">
                How capital, policy, and operators collaborate to shift outcomes on the ground.
              </p>
            </div>
            <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex text-muted-foreground">
              <Link href="/stories">
                All case studies
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((story, i) => (
              <Link key={i} href={story.href} className="group">
                <Card className="overflow-hidden h-full border-border/60 hover:shadow-sm transition-all duration-200">
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <Badge className="absolute bottom-3 left-3 bg-white/90 text-foreground text-xs backdrop-blur-sm">
                      {story.category}
                    </Badge>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base leading-snug group-hover:text-brand-navy transition-colors">
                      {story.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-2">{story.excerpt}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partners / Trust signals ── */}
      <section className="section-padding-sm bg-muted/50 border-y border-border">
        <div className="container-wide">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground text-center mb-8">
            Trusted by institutions shaping African agriculture
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {partners.map((name) => (
              <span
                key={name}
                className="text-sm font-medium text-muted-foreground/60 hover:text-muted-foreground transition-colors"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter / CTA ── */}
      <section className="section-padding bg-brand-navy text-white">
        <div className="container-narrow text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50 mb-4">Stay informed</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Get the Agforum briefing
          </h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            Weekly intelligence on capital flows, policy shifts, and market signals across African agriculture — delivered
            to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="you@institution.org"
              className="flex-1 h-11 rounded-full border border-white/20 bg-white/5 px-5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
            />
            <Button className="bg-brand-gold hover:bg-brand-gold/90 text-brand-navy font-semibold rounded-full px-7 h-11">
              Subscribe
            </Button>
          </div>
          <p className="text-xs text-white/30 mt-4">Free weekly digest. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  )
}
