import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "Ag Forum Africa is a pan-African institutional intelligence and convening platform for agriculture.",
}

const values = [
  {
    title: "Evidence over opinion",
    description: "Every insight is grounded in structured data, cited sources, and transparent methodology.",
  },
  {
    title: "Institutional rigour",
    description: "Research and briefings are built to the standard expected by DFIs, sovereign funds, and policymakers.",
  },
  {
    title: "Africa-led perspective",
    description: "Analysis is anchored in African context — led by African researchers, for African decision-makers.",
  },
  {
    title: "Open where possible, gated where necessary",
    description: "Core intelligence is openly accessible. Premium data products serve institutional users who need depth.",
  },
]

const team = [
  { name: "Dr. Amara Okafor", role: "Director of Research", affiliation: "Previously IFPRI, African Development Bank" },
  { name: "Kwame Mensah", role: "Head of Data & Intelligence", affiliation: "Previously Briter Bridges, Dalberg" },
  { name: "Fatima Hassan", role: "Head of Policy", affiliation: "Previously African Union Commission, FAO" },
  { name: "Thabo Ndlovu", role: "Head of Convening", affiliation: "Previously AGRA, TechnoServe" },
]

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Header */}
      <section className="border-b border-border bg-card">
        <div className="container-wide py-14 lg:py-20">
          <div className="max-w-2xl">
            <Badge variant="outline" className="uppercase tracking-[0.15em] text-xs mb-4">
              About
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Intelligence and convening for Africa's agrifood future
            </h1>
            <p className="text-muted-foreground text-[15px] leading-relaxed">
              Ag Forum Africa is a pan-African intelligence platform serving the institutions that shape capital
              allocation, policy, and market development across African agriculture.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-3">Our mission</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-5">
              Making African agriculture investable, governable, and visible
            </h2>
            <div className="space-y-4 text-muted-foreground text-[15px] leading-relaxed">
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
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src="/african-farmland-aerial-view-green-fields.jpg"
              alt="Aerial view of African agricultural landscape"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-3">Principles</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-10">What guides our work</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="border-border/60">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-wide">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-3">Leadership</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-10">Our team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((person) => (
              <div key={person.name}>
                <div className="aspect-square rounded-xl bg-muted mb-4" />
                <h3 className="font-semibold text-[15px]">{person.name}</h3>
                <p className="text-sm text-brand-navy dark:text-brand-teal font-medium">{person.role}</p>
                <p className="text-xs text-muted-foreground mt-1">{person.affiliation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm bg-muted/50 border-t border-border">
        <div className="container-narrow text-center">
          <h2 className="text-xl font-bold mb-3">Work with us</h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
            Whether you're an institution seeking intelligence or a researcher looking to contribute, we'd like to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="bg-brand-navy hover:bg-brand-navy/90 text-white rounded-full px-6">
              <Link href="/contact">
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild className="rounded-full px-6">
              <Link href="/register">Request access</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
