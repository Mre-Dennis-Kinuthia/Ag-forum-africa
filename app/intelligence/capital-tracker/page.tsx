import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { Card, CardContent } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from "@/components/ui/chart"
import { DashboardShell } from "@/components/intelligence/dashboard-shell"

const data = [
  { region: "West Africa", committed: 3.4, announced: 1.2 },
  { region: "East Africa", committed: 2.8, announced: 1.5 },
  { region: "Southern Africa", committed: 2.1, announced: 0.9 },
  { region: "Central Africa", committed: 1.2, announced: 0.6 },
  { region: "North Africa", committed: 1.0, announced: 0.4 },
]

const chartConfig = {
  committed: {
    label: "Committed capital",
    color: "hsl(var(--primary))",
  },
  announced: {
    label: "Announced pipeline",
    color: "hsl(var(--accent))",
  },
} satisfies ChartConfig

export default function CapitalTrackerDashboardPage() {
  return (
    <DashboardShell
      title="Capital flows into African agrifood systems"
      description="Indicative view of committed and announced capital across African regions. Values shown are mock figures for design and layout purposes."
      asOf="Q1 2024"
      geography="Africa – regional overview"
      sources="Selected DFIs, sovereign funds, and impact investors"
      tier="Institutional"
    >
      <div className="grid gap-4 lg:grid-cols-[2fr,1fr]">
        <ChartContainer config={chartConfig} className="h-72">
          <ResponsiveContainer>
            <BarChart data={data} margin={{ left: -16, right: 8 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="region" tickLine={false} axisLine={false} />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickFormatter={(v) => `${v.toFixed(1)}B`}
                width={40}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
              <Bar dataKey="committed" fill="var(--color-committed)" radius={[3, 3, 0, 0]} />
              <Bar dataKey="announced" fill="var(--color-announced)" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>

        <Card>
          <CardContent className="space-y-3 pt-4 text-xs text-muted-foreground">
            <p>
              This view focuses on indicative allocations into agrifood systems. It is not a comprehensive record of all
              capital commitments in African agriculture.
            </p>
            <p>
              Regional groupings follow AU classifications. Values shown are rounded to the nearest hundred million and
              should be interpreted directionally, not as audited figures.
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}

