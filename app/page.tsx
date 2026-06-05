import Link from "next/link"
import Image from "next/image"
import { GrainGradient } from "@/components/grain-gradient"
import { agImages } from "@/lib/ag-images"

const planned = [
  {
    num: "01",
    title: "Convening",
    desc: "Forums on policy, value chains, and climate — where ministries, cooperatives, and investors meet.",
    status: "In development",
  },
  {
    num: "02",
    title: "Research",
    desc: "Briefs on horticulture, livestock, inputs, and trade — grounded in African agrifood systems.",
    status: "Planned",
  },
  {
    num: "03",
    title: "Intelligence",
    desc: "Monitoring land use, markets, and capital flows for institutions shaping the sector.",
    status: "Planned",
  },
]

const valueChains = ["Cereals & grains", "Horticulture", "Livestock", "Agri-inputs", "Climate & water", "Trade & logistics"]

export default function HomePage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <GrainGradient
        variant="hero"
        image={agImages.heroFarmland}
        imageAlt="Aerial view of green agricultural fields"
        className="min-h-[100svh] sm:min-h-[85vh] flex items-end"
      >
        <div className="container-wide w-full pb-12 sm:pb-16 lg:pb-28 pt-24 sm:pt-32 lg:pt-40">
          <p className="text-eyebrow text-wheat/50 mb-8 sm:mb-12">Agrifood · In development</p>

          <h1 className="heading-display text-[clamp(2rem,8vw,5.75rem)] text-loam max-w-4xl">
            Institutional intelligence
            <br />
            for African agriculture.
          </h1>

          <p className="text-base sm:text-lg text-loam/55 mt-6 sm:mt-8 max-w-lg leading-relaxed">
            From soil to markets — evidence and convening for the institutions moving capital, policy, and production across the continent.
          </p>

          <div className="btn-stack mt-8 sm:mt-10">
            <Link href="/contact" className="btn-pill-white w-full sm:w-auto justify-center">
              Register interest
            </Link>
            <Link href="/about" className="btn-pill-outline border-loam/25 text-loam/80 hover:bg-loam/10 hover:border-loam/35 w-full sm:w-auto justify-center">
              About the mission
            </Link>
          </div>
        </div>
      </GrainGradient>

      <GrainGradient variant="soft" className="py-14 sm:py-20 lg:py-32">
        <div className="container-wide">
          <p className="text-eyebrow text-soil mb-3 sm:mb-4">What we&apos;re building</p>
          <h2 className="heading-h2 mb-4 sm:mb-5 max-w-xl">Capabilities for the agrifood sector</h2>
          <p className="text-sm text-muted max-w-md mb-10 sm:mb-16 leading-relaxed">
            Agforum is early. Nothing is live yet — we&apos;re building deliberately, from the field up.
          </p>

          <div className="grid md:grid-cols-2 gap-px bg-soil/15">
            {planned.map((item) => (
              <div
                key={item.num}
                className="bg-loam/90 backdrop-blur-sm p-5 sm:p-8 lg:p-10 group hover:bg-wheat/40 transition-colors"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between mb-5 sm:mb-8">
                  <span className="section-number">{item.num}</span>
                  <span className="text-eyebrow text-field">{item.status}</span>
                </div>
                <h3 className="heading-h2 text-xl sm:text-2xl lg:text-3xl mb-2 sm:mb-3 group-hover:text-field transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
            <div className="bg-wheat/30 p-5 sm:p-8 lg:p-10">
              <p className="text-eyebrow text-soil mb-3 sm:mb-4">Value chains</p>
              <div className="flex flex-wrap gap-2">
                {valueChains.map((chain) => (
                  <span
                    key={chain}
                    className="text-xs px-3 py-2 border border-field/20 text-muted bg-loam/60"
                  >
                    {chain}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </GrainGradient>

      <section className="relative min-h-[16rem] sm:min-h-0 sm:aspect-[3/1] overflow-hidden">
        <Image
          src={agImages.goldenFields}
          alt="Golden crop fields at harvest"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-forest/95 via-forest/60 sm:via-forest/40 to-forest/20 sm:to-transparent" />
        <div className="grain-noise absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 flex items-end sm:items-center py-8 sm:py-0">
          <div className="container-wide">
            <p className="text-eyebrow text-harvest mb-2 sm:mb-3">From the field</p>
            <p className="heading-h2 text-loam text-lg sm:text-xl md:text-2xl max-w-md leading-snug">
              60% of the world&apos;s uncultivated arable land is in Africa. The question is how institutions mobilise around it.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 lg:py-28 border-y border-soil/10 bg-loam">
        <div className="container-wide max-w-3xl">
          <p className="text-eyebrow text-soil mb-4 sm:mb-6">Approach</p>
          <blockquote className="heading-h2 text-xl sm:text-2xl lg:text-3xl leading-snug text-forest/90">
            &ldquo;Decisions about African agriculture should be informed by what&apos;s happening on the ground — not guesswork.&rdquo;
          </blockquote>
          <p className="text-sm text-muted mt-5 sm:mt-6 leading-relaxed">
            We are working with a small group of institutional partners to shape the first capabilities before a broader launch.
          </p>
        </div>
      </section>

      <GrainGradient variant="dark" className="py-14 sm:py-20 lg:py-28">
        <div className="container-wide text-center px-2">
          <p className="text-eyebrow text-harvest/70 mb-4 sm:mb-6">Contact</p>
          <h2 className="heading-h2 text-loam mb-4 sm:mb-5">Interested in early access?</h2>
          <p className="text-sm text-loam/45 max-w-md mx-auto mb-8 sm:mb-10 leading-relaxed">
            We&apos;re speaking with ministries, DFIs, and agrifood operators ahead of launch.
          </p>
          <Link href="/contact" className="btn-pill-white w-full sm:w-auto justify-center">
            Get in Touch
          </Link>
        </div>
      </GrainGradient>
    </div>
  )
}
