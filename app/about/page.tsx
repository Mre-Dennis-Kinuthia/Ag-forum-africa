import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "Ag Forum Africa is a pan-African institutional intelligence and convening platform for agriculture.",
}

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-card">
        <div className="container-wide py-12 lg:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">About Agforum</h1>
          <p className="text-muted-foreground max-w-lg">
            Institutional intelligence and convening for the organisations shaping Africa's agrifood future.
          </p>
        </div>
      </section>

      {/* Mission — long-form, editorial */}
      <section className="container-wide py-14 lg:py-20 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <h2 className="text-xl font-semibold mb-4">Our mission</h2>
          <div className="space-y-4 text-[15px] text-muted-foreground leading-relaxed">
            <p>
              Africa's agricultural systems represent one of the largest opportunities for sustainable development and
              climate-resilient growth. Yet institutional decision-makers — DFIs, sovereign funds, regulators, and
              operators — often lack the structured, timely intelligence they need to allocate capital, design policy,
              or enter markets with confidence.
            </p>
            <p>
              Agforum exists to close that gap. We produce curated research, maintain live data products, and convene
              the people who matter — so that decisions about African agriculture are informed by evidence, not guesswork.
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted">
          <Image
            src="/african-farmland-aerial-view-green-fields.jpg"
            alt="Aerial view of farmland"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Principles — no cards, just text */}
      <section className="bg-muted/40 border-y border-border">
        <div className="container-wide py-14 lg:py-20">
          <h2 className="text-xl font-semibold mb-8">Principles</h2>
          <div className="grid sm:grid-cols-2 gap-x-16 gap-y-8">
            {[
              { title: "Evidence over opinion", desc: "Every insight is grounded in structured data, cited sources, and transparent methodology." },
              { title: "Institutional rigour", desc: "Research and briefings are built to the standard expected by DFIs, sovereign funds, and policymakers." },
              { title: "Africa-led perspective", desc: "Analysis is anchored in African context — led by African researchers, for African decision-makers." },
              { title: "Open where possible", desc: "Core intelligence is openly accessible. Premium data products serve institutional users who need depth." },
            ].map((v) => (
              <div key={v.title}>
                <h3 className="font-medium mb-1">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container-wide py-14 lg:py-20">
        <h2 className="text-xl font-semibold mb-8">Leadership</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Dr. Amara Okafor", role: "Director of Research", prev: "Previously IFPRI, African Development Bank" },
            { name: "Kwame Mensah", role: "Head of Data & Intelligence", prev: "Previously Briter Bridges, Dalberg" },
            { name: "Fatima Hassan", role: "Head of Policy", prev: "Previously African Union Commission, FAO" },
            { name: "Thabo Ndlovu", role: "Head of Convening", prev: "Previously AGRA, TechnoServe" },
          ].map((p) => (
            <div key={p.name}>
              <div className="aspect-square rounded-lg bg-muted mb-3" />
              <h3 className="font-medium text-[15px]">{p.name}</h3>
              <p className="text-sm text-muted-foreground">{p.role}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{p.prev}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA — left-aligned, not centered */}
      <section className="border-t border-border bg-muted/40">
        <div className="container-wide py-12 lg:py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold mb-1">Work with us</h2>
            <p className="text-sm text-muted-foreground">Interested in intelligence products, research collaboration, or partnerships?</p>
          </div>
          <Button asChild className="bg-brand-navy text-white h-9 px-5 text-sm flex-shrink-0">
            <Link href="/contact">Get in touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
