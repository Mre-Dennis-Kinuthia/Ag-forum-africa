import { PageHero } from "@/components/page-hero"
import { ComingSoon } from "@/components/coming-soon"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Forums" }

export default function ForumsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Convening"
        title="Forums and roundtables."
        description="Roundtables on value chains, climate, and policy — for the institutions shaping African agrifood."
      />
      <ComingSoon
        title="Not available yet"
        description="Forum and convening features are in development. Register your interest and we'll notify you when sessions open."
      />
    </div>
  )
}
