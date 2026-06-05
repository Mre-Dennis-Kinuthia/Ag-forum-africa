import Link from "next/link"
import Image from "next/image"
import { GrainGradient } from "@/components/grain-gradient"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { agImages } from "@/lib/ag-images"

const audiences = [
  "Ministries & regulators",
  "DFIs & investors",
  "Cooperatives & aggregators",
  "Agribusiness operators",
]

const availableNow = [
  { label: "Mission & approach", detail: "Who we serve and how we work", href: "/about" },
  { label: "Early access enquiries", detail: "Partnership and pilot conversations", href: "/contact" },
  { label: "Intelligence notes", detail: "Quarterly agrifood updates by email", href: "#updates" },
]

const comingLater = [
  { title: "Research briefs", status: "Planned", desc: "Sourced analysis on value chains, trade, and climate." },
  { title: "Forums & convening", status: "In development", desc: "Curated sessions for institutions shaping policy and capital." },
  { title: "Intelligence tools", status: "Planned", desc: "Monitoring for markets, land use, and investment flows." },
]

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

          <p className="text-base sm:text-lg text-loam/55 mt-6 sm:mt-8 max-w-xl leading-relaxed">
            Evidence, research, and convening for ministries, DFIs, cooperatives, and agrifood operators
            — from soil to markets across the continent.
          </p>

          <p className="text-sm text-loam/40 mt-4 max-w-lg leading-relaxed">
            Built in Nairobi. Nothing is publicly live yet — we&apos;re shaping the first capabilities with a small group of institutional partners.
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

      <section className="border-b border-soil/10 bg-loam py-10 sm:py-14">
        <div className="container-wide">
          <p className="text-eyebrow text-soil mb-4">Who we serve</p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {audiences.map((audience) => (
              <span
                key={audience}
                className="text-xs sm:text-sm px-3 py-2 border border-field/20 text-muted bg-wheat/20"
              >
                {audience}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 lg:py-24 border-b border-soil/10">
        <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="text-eyebrow text-field mb-3">Available now</p>
            <h2 className="heading-h2 text-xl sm:text-2xl mb-6">What you can engage with today</h2>
            <ul className="space-y-4">
              {availableNow.map((item) => (
                <li key={item.label} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 border-b border-soil/10 pb-4 last:border-0 last:pb-0">
                  <div>
                    <p className="text-sm text-forest font-medium">{item.label}</p>
                    <p className="text-xs text-muted mt-0.5">{item.detail}</p>
                  </div>
                  <Link
                    href={item.href}
                    className="text-xs text-field hover:text-forest transition-colors shrink-0"
                  >
                    {item.href.startsWith("#") ? "Subscribe below" : "Learn more →"}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-eyebrow text-soil mb-3">Coming later</p>
            <h2 className="heading-h2 text-xl sm:text-2xl mb-6">Capabilities in development</h2>
            <ul className="space-y-5">
              {comingLater.map((item) => (
                <li key={item.title} className="border-l-2 border-soil/15 pl-4">
                  <div className="flex items-baseline justify-between gap-3 mb-1">
                    <p className="text-sm text-forest">{item.title}</p>
                    <span className="text-eyebrow text-soil/70 shrink-0">{item.status}</span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <GrainGradient variant="soft" className="py-14 sm:py-20 lg:py-32">
        <div className="container-wide">
          <p className="text-eyebrow text-soil mb-3 sm:mb-4">What we&apos;re building</p>
          <h2 className="heading-h2 mb-4 sm:mb-5 max-w-xl">Capabilities for the agrifood sector</h2>
          <p className="text-sm text-muted max-w-md mb-10 sm:mb-16 leading-relaxed">
            Three pillars — convening, research, and intelligence — designed for institutions that need depth, not noise.
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

      <section id="updates" className="scroll-mt-20">
      <GrainGradient variant="earth" className="py-14 sm:py-20 lg:py-24">
        <div className="container-wide grid lg:grid-cols-[1fr,1.1fr] gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-eyebrow text-soil mb-3">Updates</p>
            <h2 className="heading-h2 text-xl sm:text-2xl mb-4">Quarterly agrifood intelligence notes</h2>
            <p className="text-sm text-muted leading-relaxed max-w-md">
              Field-level context, policy signals, and sector developments — written for institutional readers. No product pitches.
            </p>
            <p className="text-sm text-muted mt-6">
              Prefer a conversation?{" "}
              <Link href="/contact" className="text-field hover:text-forest transition-colors">
                Get in touch →
              </Link>
            </p>
          </div>
          <NewsletterSignup />
        </div>
      </GrainGradient>
      </section>
    </div>
  )
}
