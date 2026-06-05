import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageHero } from "@/components/page-hero"
import Link from "next/link"
import { Search, FileText, Download } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Research" }

const resources = [
  { id: 1, title: "Climate-Smart Agriculture in Sub-Saharan Africa", type: "Technical Guide", category: "Climate", pages: 156, downloads: 2847, institution: "African Climate Research Institute", published: "Jan 2024", tier: "Public", featured: true },
  { id: 2, title: "Organic Pest Management — Applied Series", type: "Applied Learning", category: "Crop Management", pages: null, downloads: null, institution: "Independent Expert", published: "Feb 2024", tier: "Member", featured: true },
  { id: 3, title: "Financial Planning for Small-Scale Farmers", type: "Policy Toolkit", category: "Agribusiness", pages: 48, downloads: 1923, institution: "Pan-African Agribusiness Network", published: "Dec 2023", tier: "Public", featured: false },
  { id: 4, title: "Introduction to Precision Agriculture Technologies", type: "Research Report", category: "AgriTech", pages: 89, downloads: 3421, institution: "African AgriTech Consortium", published: "Nov 2023", tier: "Institutional", featured: true },
  { id: 5, title: "Sustainable Livestock Management Practices", type: "Technical Guide", category: "Livestock", pages: 124, downloads: 1654, institution: "East African Livestock Institute", published: "Oct 2023", tier: "Public", featured: false },
  { id: 6, title: "Water Harvesting and Irrigation Techniques", type: "Technical Guide", category: "Water Management", pages: 72, downloads: 2156, institution: "Water for Agriculture Initiative", published: "Sep 2023", tier: "Member", featured: false },
]

const tierStyle: Record<string, string> = {
  Public: "text-green-700 dark:text-green-400",
  Member: "text-blue-700 dark:text-blue-400",
  Institutional: "text-amber-700 dark:text-amber-400",
}

export default function KnowledgeHubPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Resources"
        title="Guides and publications."
        description="Technical guides, toolkits, and learning resources contributed by the community."
      />

      <div className="container-wide py-10 lg:py-16">
        {/* Search */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search publications..." className="pl-9 h-10" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-36 h-10 text-sm"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All types</SelectItem>
              <SelectItem value="brief">Policy briefs</SelectItem>
              <SelectItem value="report">Reports</SelectItem>
              <SelectItem value="toolkit">Toolkits</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="recent">
            <SelectTrigger className="w-36 h-10 text-sm"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Most recent</SelectItem>
              <SelectItem value="popular">Most read</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Publications list — table-like, not cards */}
        <div className="divide-y divide-border">
          {resources.map((r) => (
            <Link key={r.id} href={`/knowledge-hub/resource/${r.id}`} className="group flex items-baseline justify-between gap-4 py-5">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="text-xs text-muted-foreground">{r.type}</span>
                  <span className="text-xs text-muted-foreground">·</span>
                  <span className={`text-xs font-medium ${tierStyle[r.tier]}`}>{r.tier}</span>
                </div>
                <h3 className="text-[15px] font-medium group-hover:text-brand-navy transition-colors leading-snug">{r.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{r.institution} · {r.published}</p>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground flex-shrink-0">
                {r.pages && <span className="hidden sm:flex items-center gap-1"><FileText className="h-3 w-3" />{r.pages}p</span>}
                {r.downloads && <span className="flex items-center gap-1"><Download className="h-3 w-3" />{r.downloads.toLocaleString()}</span>}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
