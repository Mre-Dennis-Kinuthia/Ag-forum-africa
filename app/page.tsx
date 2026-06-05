import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero — layered dark sections like Sovereign AI */}
      <section className="bg-sov-navy text-sov-white-rock">
        <div className="container-wide pt-20 lg:pt-28 pb-16 lg:pb-24">
          <p className="text-sm text-sov-white-rock/50 max-w-md mb-12 leading-relaxed">
            A continent-scale intelligence platform just entered the field.
            If you&apos;re shaping African agriculture, Agforum wants to serve you.
          </p>
          <h1 className="heading-display text-[clamp(3rem,8vw,7rem)] text-sov-white-rock max-w-4xl">
            The rigour of research.
            <br />
            The reach of a network.
          </h1>
          <p className="text-lg text-sov-white-rock/50 mt-8 max-w-lg leading-relaxed">
            Africa&apos;s institutional platform for agrifood intelligence, research, and convening.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link href="/intelligence" className="btn-pill-white">
              Read our mission
            </Link>
            <Link href="/contact" className="btn-pill-dark">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Tagline + stats */}
      <section className="bg-sov-navy text-sov-white-rock border-t border-white/10">
        <div className="container-wide py-16 lg:py-24">
          <h2 className="heading-h2 text-sov-white-rock max-w-2xl mb-16 lg:mb-20">
            Backing Africa&apos;s agrifood leaders to invest here, grow here, and win everywhere.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {[
              { value: "$12B+", label: "Capital Tracked", sub: "Across the continent" },
              { value: "48", label: "Countries", sub: "Full coverage" },
              { value: "320+", label: "Institutions", sub: "In our network" },
              { value: "86", label: "Policy Briefs", sub: "Published to date" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="heading-display text-4xl lg:text-5xl text-sov-white-rock mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-sov-white-rock/80">{stat.label}</div>
                <div className="text-xs text-sov-white-rock/40 mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we bring — numbered offerings */}
      <section className="bg-sov-off-white py-20 lg:py-32">
        <div className="container-wide">
          <p className="text-eyebrow text-sov-mud mb-4">What we bring</p>
          <h2 className="heading-h2 mb-16 lg:mb-20 max-w-xl">
            Africa is your unfair advantage
          </h2>

          <div className="grid md:grid-cols-2 gap-px bg-black/10">
            {[
              {
                num: "01",
                tag: "Capital Intelligence",
                title: "Data",
                desc: "Live capital flows, deal tracking, and market signals across 48 African markets. Built for DFIs, sovereign funds, and institutional investors.",
                href: "/intelligence/capital-tracker",
              },
              {
                num: "02",
                tag: "Policy & Regulation",
                title: "Research",
                desc: "Curated policy briefs, regulatory horizon scans, and market intelligence grounded in African context and institutional rigour.",
                href: "/knowledge-hub",
              },
              {
                num: "03",
                tag: "Global Talent",
                title: "Convening",
                desc: "Events, forums, and a community network connecting the policymakers, investors, and operators shaping agrifood systems.",
                href: "/community",
              },
              {
                num: "04",
                tag: "Grants · Partnerships · Data",
                title: "Strategic Assets",
                desc: "Access curated datasets, partnership opportunities, and institutional resources designed to accelerate decision-making.",
                href: "/events",
              },
            ].map((item) => (
              <Link
                key={item.num}
                href={item.href}
                className="group bg-sov-off-white p-8 lg:p-12 hover:bg-sov-white-rock transition-colors"
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="section-number">{item.num}</span>
                  <span className="text-eyebrow text-sov-mud">{item.tag}</span>
                </div>
                <h3 className="heading-h2 text-2xl lg:text-3xl mb-4 group-hover:text-sov-teal transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-sov-text-secondary leading-relaxed" style={{ color: "var(--sov-text-secondary)" }}>
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mission — dark section with large stats */}
      <section className="bg-sov-navy text-sov-white-rock py-20 lg:py-32">
        <div className="container-wide">
          <p className="text-eyebrow text-sov-mud mb-4">Our mission</p>
          <h2 className="heading-h2 text-sov-white-rock mb-6 max-w-2xl">
            Africa is building the future of agrifood
          </h2>
          <p className="text-sov-white-rock/50 max-w-xl mb-16 leading-relaxed">
            The talent is here. The capital is arriving. Now it has the intelligence infrastructure to match.
          </p>

          <div className="grid sm:grid-cols-3 gap-12 lg:gap-16 mb-16">
            {[
              { value: "$12B+", label: "Capital tracked across African agrifood" },
              { value: "3rd", label: "Largest agrifood opportunity globally" },
              { value: "60%", label: "Of uncultivated arable land worldwide" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="heading-display text-5xl lg:text-6xl text-sov-teal mb-3">
                  {stat.value}
                </div>
                <p className="text-sm text-sov-white-rock/50 leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>

          <Link href="/about" className="btn-pill-white">
            Read the full mission
          </Link>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-sov-off-white py-20 lg:py-28 border-y border-black/5">
        <div className="container-wide max-w-3xl">
          <blockquote className="heading-h2 text-2xl lg:text-3xl leading-snug">
            &ldquo;Agforum is exactly what our ecosystem needs — structured intelligence that lets institutional
            capital move with confidence across African agriculture.&rdquo;
          </blockquote>
          <footer className="mt-8">
            <p className="font-medium text-sm">Dr. Amara Okafor</p>
            <p className="text-xs text-sov-mud mt-0.5">Director of Research, Agforum</p>
          </footer>
        </div>
      </section>

      {/* Timeline — built here */}
      <section className="bg-sov-off-white py-20 lg:py-32">
        <div className="container-wide">
          <p className="text-eyebrow text-sov-mud mb-4">From soil to systems</p>
          <h2 className="heading-h2 mb-16 lg:mb-20 max-w-xl">
            Africa has always fed the world. Now it leads how the world feeds itself.
          </h2>

          <div className="space-y-0">
            {[
              { year: "1960s", title: "Green Revolution foundations", desc: "African nations begin building agricultural research institutions and extension systems." },
              { year: "2003", title: "Comprehensive Africa Agriculture Development Programme", desc: "AU launches CAADP — committing nations to 10% agricultural budget allocation." },
              { year: "2014", title: "Malabo Declaration", desc: "African heads of state commit to ending hunger and doubling productivity by 2025." },
              { year: "2021", title: "African Continental Free Trade Area", desc: "AfCFTA creates the world's largest free trade area, transforming agrifood markets." },
              { year: "Today", title: "The institutional intelligence era", desc: "48 countries. $12B+ in tracked capital. The ecosystem is here." },
            ].map((item, i) => (
              <div
                key={item.year}
                className="grid sm:grid-cols-[120px,1fr] gap-6 py-8 border-t border-black/10 group hover:bg-sov-white-rock/50 -mx-5 px-5 sm:-mx-8 sm:px-8 transition-colors"
              >
                <div>
                  <span className="text-eyebrow text-sov-teal">built here</span>
                  <p className="font-mono text-sm text-sov-mud mt-1">{item.year}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">{item.title}</h3>
                  <p className="text-sm text-sov-text-secondary leading-relaxed" style={{ color: "var(--sov-text-secondary)" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured briefings */}
      <section className="bg-sov-white-rock py-20 lg:py-28">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1fr,1.4fr] gap-12 lg:gap-20">
            <div>
              <p className="text-eyebrow text-sov-mud mb-4">Latest intelligence</p>
              <h2 className="heading-h2 mb-4">Featured briefings</h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--sov-text-secondary)" }}>
                Curated research at the intersection of capital, policy, and agricultural systems.
              </p>
              <Link href="/intelligence" className="btn-pill-outline text-xs">
                All intelligence
              </Link>
            </div>

            <div className="space-y-0">
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
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex items-baseline justify-between gap-4 py-5 border-b border-black/10 last:border-0 hover:border-sov-teal/30 transition-colors"
                >
                  <div>
                    <span className="text-eyebrow text-sov-mud">{item.tag}</span>
                    <h3 className="text-base font-medium mt-1 group-hover:text-sov-teal transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-xs text-sov-mud whitespace-nowrap flex-shrink-0">{item.meta}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-20 lg:py-28">
        <div className="container-wide">
          <p className="text-eyebrow text-sov-mud mb-4">Evidence</p>
          <h2 className="heading-h2 mb-12">Case studies</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/stories/0" className="group relative aspect-[4/3] overflow-hidden md:row-span-2">
              <Image
                src="/kenyan-farmer-in-field-success.jpg"
                alt="Kenyan farmer in irrigated field"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sov-navy/90 via-sov-navy/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <span className="text-eyebrow text-sov-teal">Capital & Infrastructure</span>
                <h3 className="heading-h2 text-xl lg:text-2xl text-sov-white-rock leading-snug mt-3 mb-2">
                  Sovereign–DFI partnership unlocks irrigation investment in arid counties
                </h3>
                <p className="text-sm text-sov-white-rock/60 line-clamp-2 max-w-md">
                  Structured blended finance, backed by policy reform, enabled large-scale irrigation with measurable livelihood gains.
                </p>
              </div>
            </Link>

            {[
              {
                href: "/stories/1",
                image: "/solar-irrigation-system-africa.jpg",
                alt: "Solar-powered cold chain facility",
                tag: "Resilience & Trade",
                title: "Solar-powered cold chain expansion improves export reliability",
              },
              {
                href: "/stories/2",
                image: "/young-african-farmers-cocoa-harvest.jpg",
                alt: "Young farmers harvesting cocoa",
                tag: "Inclusion & Productivity",
                title: "Youth-led cooperatives professionalise cocoa production",
              },
            ].map((story) => (
              <Link key={story.href} href={story.href} className="group relative aspect-[16/9] overflow-hidden">
                <Image src={story.image} alt={story.alt} fill className="object-cover group-hover:scale-[1.02] transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-sov-navy/90 via-sov-navy/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-eyebrow text-sov-teal">{story.tag}</span>
                  <h3 className="text-base font-medium text-sov-white-rock leading-snug mt-2">
                    {story.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          <Link href="/stories" className="inline-block mt-8 text-sm font-medium hover:text-sov-teal transition-colors">
            All case studies →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sov-navy text-sov-white-rock py-20 lg:py-28">
        <div className="container-wide text-center">
          <p className="text-eyebrow text-sov-mud mb-6">Contact</p>
          <h2 className="heading-h2 text-sov-white-rock mb-6">Ready to engage?</h2>
          <p className="text-sov-white-rock/50 max-w-md mx-auto mb-10 leading-relaxed">
            Whether you&apos;re an investor, policymaker, or operator — we want to hear from you.
          </p>
          <Link href="/contact" className="btn-pill-dark bg-sov-white-rock text-sov-navy hover:bg-sov-white-rock/90">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
