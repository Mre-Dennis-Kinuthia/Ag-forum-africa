import { PageHero } from "@/components/page-hero"
import { ComingSoon } from "@/components/coming-soon"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Intelligence" }

export default function IntelligencePage() {
  return (
    <div>
      <PageHero
        eyebrow="Intelligence"
        title="Structured intelligence for institutional decision-makers."
        description="Capital, policy, and market monitoring across African agrifood systems."
      />
      <ComingSoon
        title="Not available yet"
        description="Intelligence products are in development. Register your interest to hear when the first briefings and data tools launch."
      />
    </div>
  )
}
