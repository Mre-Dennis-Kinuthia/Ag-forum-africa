import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart3 } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero — deliberately asymmetric, editorial feel */}
      <section className="relative isolate overflow-hidden bg-brand-navy min-h-[85vh] flex items-end">
        <Image
          src="/african-farmland-aerial-view-green-fields.jpg"
          alt="Aerial view of farmland in East Africa"
          fill
          priority
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-brand-navy/40" />

        <div className="relative container-wide pb-16 lg:pb-20 pt-32">
          <h1 className="text-[2.5rem] sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight max-w-3xl">
            Intelligence for African Agriculture
          </h1>
          <p className="text-lg sm:text-xl text-white/60 mt-6 max-w-xl leading-relaxed">
            Research, data, and convening for the institutions shaping the continent's agrifood systems.
          </p>
          <div className="flex gap-3 mt-10">
            <Button size="lg" asChild className="bg-white text-brand-navy hover:bg-white/90 font-medium h-12 px-7">
              <Link href="/intelligence">
                Explore intelligence
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="link" asChild className="text-white/70 hover:text-white h-12 px-4">
              <Link href="/knowledge-hub">Browse research</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Numbers strip — compact, no section labels */}
      <div className="bg-card border-b border-border">
        <div className="container-wide py-8 grid grid-cols-2 md:grid-cols-4 gap-y-6">
          {[
            ["$12B+", "in capital tracked across the continent"],
            ["320+", "institutions in our monitoring network"],
            ["86", "policy briefs published to date"],
            ["48", "countries covered"],
          ].map(([value, label]) => (
            <div key={value}>
              <div className="text-2xl font-bold tracking-tight">{value}</div>
              <div className="text-[13px] text-muted-foreground mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured briefings — mixed layout, no identical cards */}
      <section className="container-wide py-16 lg:py-20">
        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-12 lg:gap-20">
          <div>
            <h2 className="text-2xl font-bold mb-3">Featured briefings</h2>
            <p className="text-muted-foreground text-[15px] leading-relaxed mb-8">
              Our editorial team curates research at the intersection of capital, policy, and agricultural systems.
              These are the publications getting the most attention from institutional readers right now.
            </p>
            <Button variant="outline" size="sm" asChild>
              <Link href="/intelligence">All intelligence</Link>
            </Button>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Capital Flows into African Agrifood Systems",
                meta: "Q1 2024 · Quarterly Update",
                tag: "Capital Intelligence",
                href: "/intelligence/capital-tracker",
              },
              {
                title: "Regulatory Horizon Scan: Priority Markets",
                meta: "Updated weekly",
                tag: "Policy & Regulation",
                href: "/knowledge-hub",
              },
              {
                title: "Value Chain Spotlight: Horticulture & High-Value Crops",
                meta: "Annual Outlook · 2024 Edition",
                tag: "Market Intelligence",
                href: "/knowledge-hub",
              },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group flex items-baseline justify-between gap-4 py-4 border-b border-border last:border-0 hover:border-brand-navy/20 transition-colors"
              >
                <div>
                  <span className="text-xs text-muted-foreground">{item.tag}</span>
                  <h3 className="text-[15px] font-medium mt-0.5 group-hover:text-brand-navy transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap flex-shrink-0">{item.meta}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Updates + Data — two-column with different visual weight */}
      <section className="bg-muted/40 border-y border-border">
        <div className="container-wide py-16 lg:py-20 grid lg:grid-cols-[1fr,380px] gap-12 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Recent updates</h2>
            <div className="divide-y divide-border">
              {[
                { title: "Kenya announces new blended finance window for climate-smart agriculture", tag: "Policy & Capital", date: "22 May 2026" },
                { title: "West African agritech fund closes first USD 150M vehicle", tag: "Capital Markets", date: "18 May 2026" },
                { title: "New traceability standard adopted for horticulture exports", tag: "Trade & Standards", date: "12 May 2026" },
                { title: "Youth employment incentives extended in key value chains", tag: "Labour & Inclusion", date: "8 May 2026" },
              ].map((item, i) => (
                <Link key={i} href={`/forums/topic/${i}`} className="group block py-4 first:pt-0">
                  <p className="text-[15px] font-medium leading-snug group-hover:text-brand-navy transition-colors">
                    {item.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1.5">
                    {item.tag} · {item.date}
                  </p>
                </Link>
              ))}
            </div>
            <Link href="/forums" className="inline-block text-sm font-medium text-brand-navy hover:underline mt-6">
              View all updates
            </Link>
          </div>

          {/* Capital tracker preview */}
          <div className="lg:border-l lg:border-border lg:pl-12">
            <div className="flex items-center gap-2 mb-1">
              <BarChart3 className="h-4 w-4 text-brand-teal" />
              <span className="text-xs font-medium text-muted-foreground">Capital Tracker · Q1 2024</span>
            </div>
            <h3 className="font-semibold mb-5">Regional capital flows</h3>
            <div className="space-y-3 mb-5">
              {[
                { region: "West Africa", value: 3.4 },
                { region: "East Africa", value: 2.8 },
                { region: "Southern Africa", value: 2.1 },
                { region: "Central Africa", value: 1.2 },
                { region: "North Africa", value: 1.0 },
              ].map((item) => (
                <div key={item.region}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">{item.region}</span>
                    <span className="tabular-nums">${item.value}B</span>
                  </div>
                  <div className="h-1.5 bg-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-navy rounded-full"
                      style={{ width: `${(item.value / 3.6) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <Link href="/intelligence/capital-tracker" className="text-sm font-medium text-brand-navy hover:underline">
              Open full dashboard →
            </Link>
          </div>
        </div>
      </section>

      {/* Case studies — larger first item, smaller grid for rest */}
      <section className="container-wide py-16 lg:py-20">
        <h2 className="text-2xl font-bold mb-2">Case studies</h2>
        <p className="text-muted-foreground mb-8 max-w-lg">
          Evidence of how capital, policy, and operators work together to shift outcomes on the ground.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Lead story — larger */}
          <Link href="/stories/0" className="group relative aspect-[4/3] rounded-xl overflow-hidden md:row-span-2">
            <Image
              src="/kenyan-farmer-in-field-success.jpg"
              alt="Kenyan farmer in irrigated field"
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm text-xs mb-3">
                Capital & Infrastructure
              </Badge>
              <h3 className="text-xl lg:text-2xl font-bold text-white leading-snug mb-2">
                Sovereign–DFI partnership unlocks irrigation investment in arid counties
              </h3>
              <p className="text-sm text-white/70 line-clamp-2 max-w-md">
                Structured blended finance, backed by policy reform, enabled large-scale irrigation with measurable livelihood gains.
              </p>
            </div>
          </Link>

          {/* Smaller stories */}
          <Link href="/stories/1" className="group relative aspect-[16/9] rounded-xl overflow-hidden">
            <Image
              src="/solar-irrigation-system-africa.jpg"
              alt="Solar-powered cold chain facility"
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="text-xs text-white/60">Resilience & Trade</span>
              <h3 className="text-base font-semibold text-white leading-snug mt-1">
                Solar-powered cold chain expansion improves export reliability
              </h3>
            </div>
          </Link>

          <Link href="/stories/2" className="group relative aspect-[16/9] rounded-xl overflow-hidden">
            <Image
              src="/young-african-farmers-cocoa-harvest.jpg"
              alt="Young farmers harvesting cocoa"
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="text-xs text-white/60">Inclusion & Productivity</span>
              <h3 className="text-base font-semibold text-white leading-snug mt-1">
                Youth-led cooperatives professionalise cocoa production
              </h3>
            </div>
          </Link>
        </div>

        <div className="mt-6">
          <Link href="/stories" className="text-sm font-medium text-brand-navy hover:underline">
            All case studies →
          </Link>
        </div>
      </section>

      {/* Newsletter — stripped back, not centered */}
      <section className="bg-brand-navy">
        <div className="container-wide py-14 lg:py-16 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">The Agforum Briefing</h2>
            <p className="text-white/50 text-[15px]">
              A weekly digest of capital flows, policy shifts, and market signals across African agriculture.
            </p>
          </div>
          <div className="flex gap-3 max-w-md lg:ml-auto">
            <input
              type="email"
              placeholder="you@institution.org"
              className="flex-1 h-11 rounded-md border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/30"
            />
            <Button className="bg-white text-brand-navy hover:bg-white/90 font-medium h-11 px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
