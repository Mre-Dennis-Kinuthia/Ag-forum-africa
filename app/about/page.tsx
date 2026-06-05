import Link from "next/link"
import Image from "next/image"
import { PageHero } from "@/components/page-hero"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "Ag Forum Africa is a pan-African institutional intelligence and convening platform for agriculture.",
}

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="05 About"
        title="The team behind Africa's agrifood intelligence."
        description="Institutional intelligence and convening for the organisations shaping Africa's agrifood future."
      />

      <section className="container-wide py-16 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <p className="text-eyebrow text-sov-mud mb-4">Our mission</p>
          <h2 className="heading-h2 mb-6">Evidence over guesswork</h2>
          <div className="space-y-4 text-sm leading-relaxed" style={{ color: "var(--sov-text-secondary)" }}>
            <p>
              Africa&apos;s agricultural systems represent one of the largest opportunities for sustainable development and
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
        <div className="relative aspect-[4/3] overflow-hidden bg-sov-white-rock">
          <Image
            src="/african-farmland-aerial-view-green-fields.jpg"
            alt="Aerial view of farmland"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-sov-white-rock py-16 lg:py-24">
        <div className="container-wide">
          <p className="text-eyebrow text-sov-mud mb-4">Principles</p>
          <h2 className="heading-h2 mb-12">How we work</h2>
          <div className="grid sm:grid-cols-2 gap-px bg-black/10">
            {[
              { num: "01", title: "Evidence over opinion", desc: "Every insight is grounded in structured data, cited sources, and transparent methodology." },
              { num: "02", title: "Institutional rigour", desc: "Research and briefings are built to the standard expected by DFIs, sovereign funds, and policymakers." },
              { num: "03", title: "Africa-led perspective", desc: "Analysis is anchored in African context — led by African researchers, for African decision-makers." },
              { num: "04", title: "Open where possible", desc: "Core intelligence is openly accessible. Premium data products serve institutional users who need depth." },
            ].map((v) => (
              <div key={v.num} className="bg-sov-white-rock p-8 lg:p-10">
                <span className="section-number block mb-4">{v.num}</span>
                <h3 className="text-lg font-medium mb-2">{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--sov-text-secondary)" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-wide py-16 lg:py-24">
        <p className="text-eyebrow text-sov-mud mb-4">Leadership</p>
        <h2 className="heading-h2 mb-12">The team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Dr. Amara Okafor", role: "Director of Research", prev: "Previously IFPRI, African Development Bank" },
            { name: "Kwame Mensah", role: "Head of Data & Intelligence", prev: "Previously Briter Bridges, Dalberg" },
            { name: "Fatima Hassan", role: "Head of Policy", prev: "Previously African Union Commission, FAO" },
            { name: "Thabo Ndlovu", role: "Head of Convening", prev: "Previously AGRA, TechnoServe" },
          ].map((p) => (
            <div key={p.name}>
              <div className="aspect-square bg-sov-white-rock mb-4" />
              <h3 className="font-medium text-sm">{p.name}</h3>
              <p className="text-sm text-sov-mud">{p.role}</p>
              <p className="text-xs mt-0.5" style={{ color: "var(--sov-text-secondary)" }}>{p.prev}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sov-navy text-sov-white-rock py-16 lg:py-20">
        <div className="container-wide flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-eyebrow text-sov-mud mb-3">Contact</p>
            <h2 className="heading-h2 text-sov-white-rock mb-2">Work with us</h2>
            <p className="text-sm text-sov-white-rock/50">Interested in intelligence products, research collaboration, or partnerships?</p>
          </div>
          <Link href="/contact" className="btn-pill-dark bg-sov-white-rock text-sov-navy hover:bg-sov-white-rock/90 flex-shrink-0">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
