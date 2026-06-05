import { PageHero } from "@/components/page-hero"
import { ComingSoon } from "@/components/coming-soon"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Stories" }

export default function StoriesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Stories"
        title="Field narratives and case studies."
        description="Evidence from the ground — how policy, capital, and operators shift outcomes."
      />
      <ComingSoon
        title="Not available yet"
        description="Our case study library is being prepared. Get in touch if you'd like to contribute or receive updates at launch."
      />
    </div>
  )
}
