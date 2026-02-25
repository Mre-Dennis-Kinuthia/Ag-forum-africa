import { ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Tier = "Public" | "Member" | "Institutional"

interface DashboardShellProps {
  title: string
  description?: string
  asOf: string
  sources: string
  geography: string
  tier?: Tier
  children: ReactNode
}

export function DashboardShell({
  title,
  description,
  asOf,
  sources,
  geography,
  tier = "Member",
  children,
}: DashboardShellProps) {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3 flex-wrap text-xs text-muted-foreground">
                <Badge variant="outline" className="uppercase tracking-[0.18em]">
                  Dashboard
                </Badge>
                <span>{geography}</span>
                <span>•</span>
                <span>As of {asOf}</span>
                <span>•</span>
                <span className="font-medium">{sources}</span>
                <Badge variant="outline" className="ml-auto text-[10px] uppercase tracking-[0.16em]">
                  {tier} access
                </Badge>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h1>
              {description && <p className="max-w-2xl text-sm text-muted-foreground text-pretty">{description}</p>}
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 lg:grid-cols-[3fr,2fr]">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-sm font-semibold tracking-tight">Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">{children}</CardContent>
          </Card>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-semibold tracking-tight">Methodology & coverage</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-xs text-muted-foreground">
                <p>
                  This view aggregates committed and announced capital from participating institutions. It is intended as
                  an indicative guide and should be read alongside institution‑level data and disclosures.
                </p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Coverage: selected DFIs, sovereign funds, and impact investors.</li>
                  <li>Instruments: debt, equity, guarantees, and blended finance where reported.</li>
                  <li>Values shown in constant USD; figures rounded.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-semibold tracking-tight">Usage notes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-xs text-muted-foreground">
                <p>
                  For board or investment committee use, pair this dashboard with the latest capital flows publication
                  and underlying institution data extracts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

