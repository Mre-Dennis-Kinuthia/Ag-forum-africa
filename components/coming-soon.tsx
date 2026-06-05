import Link from "next/link"
import { GrainGradient } from "@/components/grain-gradient"

interface ComingSoonProps {
  title: string
  description: string
}

export function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <GrainGradient variant="soft">
      <div className="container-wide py-16 sm:py-24 lg:py-32 max-w-lg">
        <p className="text-eyebrow text-clay mb-5">Coming soon</p>
        <h2 className="heading-h2 mb-5">{title}</h2>
        <p className="text-sm text-muted leading-relaxed mb-10">{description}</p>
        <Link href="/contact" className="btn-pill-dark w-full sm:w-auto justify-center">
          Register interest
        </Link>
      </div>
    </GrainGradient>
  )
}
