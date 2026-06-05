import Link from "next/link"

interface PageHeroProps {
  eyebrow?: string
  title: string
  description?: string
  cta?: { label: string; href: string }
  dark?: boolean
}

export function PageHero({ eyebrow, title, description, cta, dark = false }: PageHeroProps) {
  return (
    <section className={dark ? "bg-sov-navy text-sov-white-rock" : "bg-sov-off-white border-b border-black/5"}>
      <div className="container-wide py-16 lg:py-24">
        {eyebrow && (
          <p className="text-eyebrow text-sov-mud mb-6">{eyebrow}</p>
        )}
        <h1 className={`heading-h1 max-w-3xl ${dark ? "text-sov-white-rock" : ""}`}>
          {title}
        </h1>
        {description && (
          <p className={`mt-5 text-lg max-w-xl leading-relaxed ${dark ? "text-sov-white-rock/60" : "text-sov-text-secondary"}`}
            style={{ color: dark ? undefined : "var(--sov-text-secondary)" }}
          >
            {description}
          </p>
        )}
        {cta && (
          <Link href={cta.href} className={`mt-8 inline-flex ${dark ? "btn-pill-white" : "btn-pill-dark"}`}>
            {cta.label}
          </Link>
        )}
      </div>
    </section>
  )
}
