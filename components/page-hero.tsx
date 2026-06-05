import Link from "next/link"
import { GrainGradient } from "@/components/grain-gradient"

interface PageHeroProps {
  eyebrow?: string
  title: string
  description?: string
  cta?: { label: string; href: string }
  dark?: boolean
  image?: string
  imageAlt?: string
}

export function PageHero({ eyebrow, title, description, cta, dark = false, image, imageAlt }: PageHeroProps) {
  if (dark) {
    return (
      <GrainGradient variant="dark" image={image} imageAlt={imageAlt} className="border-b border-white/[0.06]">
        <div className="container-wide py-10 sm:py-14 lg:py-20">
          {eyebrow && <p className="text-eyebrow text-harvest/70 mb-3 sm:mb-4">{eyebrow}</p>}
          <h1 className="heading-h1 max-w-2xl text-loam">{title}</h1>
          {description && (
            <p className="mt-3 sm:mt-4 text-sm sm:text-base max-w-lg leading-relaxed text-loam/55">{description}</p>
          )}
          {cta && (
            <Link href={cta.href} className="mt-6 sm:mt-7 inline-flex btn-pill-white w-full sm:w-auto justify-center">
              {cta.label}
            </Link>
          )}
        </div>
      </GrainGradient>
    )
  }

  return (
    <GrainGradient variant="soft" className="border-b border-soil/10">
      <div className="container-wide py-10 sm:py-14 lg:py-20">
        {eyebrow && <p className="text-eyebrow text-soil mb-3 sm:mb-4">{eyebrow}</p>}
        <h1 className="heading-h1 max-w-2xl text-forest">{title}</h1>
        {description && (
          <p className="mt-3 sm:mt-4 text-sm sm:text-base max-w-lg leading-relaxed text-muted">{description}</p>
        )}
        {cta && (
          <Link href={cta.href} className="mt-6 sm:mt-7 inline-flex btn-pill-dark w-full sm:w-auto justify-center">
            {cta.label}
          </Link>
        )}
      </div>
    </GrainGradient>
  )
}
