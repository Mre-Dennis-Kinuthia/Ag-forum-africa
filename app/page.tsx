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

const startHere = [
  {
    num: "01",
    title: "Read our mission",
    forWho: "Evaluating whether Agforum fits your work",
    detail: "Who we serve, our principles, and where we are in development.",
    cta: "About Agforum",
    href: "/about",
  },
  {
    num: "02",
    title: "Register your interest",
    forWho: "Ministries, DFIs, cooperatives & operators",
    detail: "Join the early-access conversation — partnerships, pilots, and launch planning.",
    cta: "Contact us",
    href: "/contact",
  },
  {
    num: "03",
    title: "Subscribe to updates",
    forWho: "Anyone following African agrifood",
    detail: "Quarterly intelligence notes on policy, markets, and sector signals — by email only.",
    cta: "Subscribe",
    href: "#updates",
  },
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

      <section className="py-14 sm:py-20 lg:py-24 border-b border-soil/10 bg-wheat/15">
        <div className="container-wide">
          <div className="max-w-2xl mb-10 sm:mb-14">
            <p className="text-eyebrow text-soil mb-3">Pre-launch</p>
            <h2 className="heading-h2 text-xl sm:text-2xl lg:text-3xl mb-4">
              The platform isn&apos;t live yet — here&apos;s how to engage
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              Agforum is in development with a small group of institutional partners.
              Until the full platform launches, these are the three ways to connect with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-soil/12">
            {startHere.map((item) => (
              <div key={item.num} className="bg-loam p-6 sm:p-8 flex flex-col">
                <span className="section-number mb-5">{item.num}</span>
                <h3 className="heading-h2 text-lg sm:text-xl mb-2">{item.title}</h3>
                <p className="text-eyebrow text-field mb-3">{item.forWho}</p>
                <p className="text-sm text-muted leading-relaxed flex-1">{item.detail}</p>
                <Link
                  href={item.href}
                  className="btn-nav-lean mt-6 w-fit"
                >
                  {item.cta}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-xs text-soil/55 mt-8 sm:mt-10 leading-relaxed max-w-xl">
            Full platform capabilities — research briefs, forums, and intelligence tools — are listed below.
            They will open to partners first, then more broadly.{" "}
            <Link href="#capabilities" className="text-field hover:text-forest transition-colors">
              See the roadmap ↓
            </Link>
          </p>
        </div>
      </section>

      <section id="capabilities" className="scroll-mt-20">
      <GrainGradient variant="soft" className="py-14 sm:py-20 lg:py-32">
        <div className="container-wide">
          <p className="text-eyebrow text-soil mb-3 sm:mb-4">Roadmap</p>
          <h2 className="heading-h2 mb-4 sm:mb-5 max-w-xl">What we&apos;re building toward</h2>
          <p className="text-sm text-muted max-w-lg mb-10 sm:mb-16 leading-relaxed">
            Three capabilities for institutions that need depth on African agrifood — none are publicly available yet.
            Status reflects where each sits in our development with partners.
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
      </section>

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
