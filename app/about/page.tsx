import Link from "next/link"
import Image from "next/image"
import { PageHero } from "@/components/page-hero"
import { GrainGradient } from "@/components/grain-gradient"
import { agImages } from "@/lib/ag-images"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "Agforum is building institutional intelligence infrastructure for African agriculture.",
}

const principles = [
  { num: "01", text: "Evidence over opinion — every output grounded in field data, cited sources, and transparent methodology." },
  { num: "02", text: "Institutional rigour — built for ministries, DFIs, and operators who need depth on agrifood systems." },
  { num: "03", text: "Africa-led — analysis anchored in local value chains, climates, and policy context." },
]

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="01 About"
        title="Intelligence for the institutions that feed Africa."
        description="We serve the ministries, DFIs, cooperatives, and agribusinesses shaping production, trade, and policy across the continent."
      />

      <section className="container-wide py-12 sm:py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
        <div className="max-w-xl order-last lg:order-none">
          <p className="text-eyebrow text-soil mb-5">Where we are</p>
          <div className="space-y-5 text-sm text-muted leading-relaxed">
            <p>
              Agforum is in early development. We are building intelligence, research, and convening
              infrastructure for African agrifood — from cereals and horticulture to livestock and climate resilience.
            </p>
            <p>
              Nothing is publicly available yet. We are working with a small group of partners across
              the sector to shape the first capabilities before a broader launch.
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/3] overflow-hidden order-first lg:order-none">
          <Image
            src={agImages.farmerField}
            alt="Farmer working in an agricultural field"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/30 to-transparent" />
          <div className="grain-noise absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" aria-hidden="true" />
        </div>
      </section>

      <GrainGradient variant="soft" className="border-y border-soil/10">
        <div className="container-wide py-16 lg:py-24">
          <p className="text-eyebrow text-soil mb-5">Principles</p>
          <h2 className="heading-h2 mb-12">How we work</h2>
          <div className="grid gap-px bg-soil/15 max-w-3xl">
            {principles.map((p) => (
              <div key={p.num} className="bg-loam/80 p-5 sm:p-7 lg:p-8 flex gap-4 sm:gap-6">
                <span className="section-number pt-0.5">{p.num}</span>
                <p className="text-sm text-muted leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </GrainGradient>

      <GrainGradient variant="dark" className="py-14 lg:py-16">
        <div className="container-wide flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-eyebrow text-harvest/70 mb-2">Contact</p>
            <p className="text-sm text-loam/50">Partnership or early access enquiries</p>
          </div>
          <Link href="/contact" className="btn-pill-white flex-shrink-0 w-full sm:w-auto justify-center">
            Get in Touch
          </Link>
        </div>
      </GrainGradient>
    </div>
  )
}
