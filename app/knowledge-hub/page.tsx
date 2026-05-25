import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Search, FileText, Download, ArrowUpRight } from "lucide-react"

const resources = [
  {
    id: 1,
    title: "Climate-Smart Agriculture in Sub-Saharan Africa",
    description:
      "Comprehensive manual covering drought-resistant crops, water conservation, and adaptive farming techniques for changing climate conditions.",
    type: "Technical Guide",
    category: "Climate",
    pages: 156,
    downloads: 2847,
    institution: "African Climate Research Institute",
    published: "January 2024",
    tier: "Public",
    featured: true,
  },
  {
    id: 2,
    title: "Organic Pest Management — Applied Series",
    description:
      "12-part video series demonstrating natural pest control methods, companion planting, and integrated pest management strategies.",
    type: "Applied Learning",
    category: "Crop Management",
    pages: null,
    downloads: null,
    views: 15234,
    institution: "Independent Expert",
    published: "February 2024",
    tier: "Member",
    featured: true,
  },
  {
    id: 3,
    title: "Financial Planning for Small-Scale Farmers",
    description:
      "Practical workbook with templates for budgeting, record-keeping, and accessing agricultural loans and grants.",
    type: "Policy Toolkit",
    category: "Agribusiness",
    pages: 48,
    downloads: 1923,
    institution: "Pan-African Agribusiness Network",
    published: "December 2023",
    tier: "Public",
    featured: false,
  },
  {
    id: 4,
    title: "Introduction to Precision Agriculture Technologies",
    description:
      "Overview of IoT sensors, drones, and data analytics tools for modern farming, with case studies from across Africa.",
    type: "Research Report",
    category: "AgriTech",
    pages: 89,
    downloads: 3421,
    institution: "African AgriTech Consortium",
    published: "November 2023",
    tier: "Institutional",
    featured: true,
  },
  {
    id: 5,
    title: "Sustainable Livestock Management Practices",
    description:
      "Best practices for animal health, breeding, pasture management, and sustainable livestock production systems.",
    type: "Technical Guide",
    category: "Livestock",
    pages: 124,
    downloads: 1654,
    institution: "East African Livestock Institute",
    published: "October 2023",
    tier: "Public",
    featured: false,
  },
  {
    id: 6,
    title: "Water Harvesting and Irrigation Techniques",
    description: "Practical guide to rainwater harvesting, drip irrigation, and efficient water use in agriculture.",
    type: "Technical Guide",
    category: "Water Management",
    pages: 72,
    downloads: 2156,
    institution: "Water for Agriculture Initiative",
    published: "September 2023",
    tier: "Member",
    featured: false,
  },
]

const categories = [
  { name: "All Publications", value: "all", count: 487 },
  { name: "Capital & Finance", value: "capital", count: 72 },
  { name: "Policy & Regulation", value: "policy", count: 96 },
  { name: "Market Intelligence", value: "market", count: 118 },
  { name: "Climate & Resilience", value: "climate", count: 89 },
  { name: "Technology & Innovation", value: "tech", count: 78 },
]

function ResourceCard({ resource }: { resource: typeof resources[number] }) {
  const tierColors: Record<string, string> = {
    Public: "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-400",
    Member: "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-400",
    Institutional: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-400",
  }

  return (
    <Link href={`/knowledge-hub/resource/${resource.id}`} className="group block">
      <Card className="h-full border-border/60 hover:border-border hover:shadow-sm transition-all duration-200">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <Badge variant="outline" className="text-xs font-normal">{resource.type}</Badge>
            <span className={`inline-flex items-center text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full ${tierColors[resource.tier]}`}>
              {resource.tier}
            </span>
          </div>
          <CardTitle className="text-base leading-snug group-hover:text-brand-navy transition-colors">
            {resource.title}
          </CardTitle>
          <CardDescription className="text-sm line-clamp-2 mt-1">{resource.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{resource.institution}</span>
            <div className="flex items-center gap-3">
              {resource.pages && (
                <span className="flex items-center gap-1">
                  <FileText className="h-3 w-3" />
                  {resource.pages}p
                </span>
              )}
              {resource.downloads && (
                <span className="flex items-center gap-1">
                  <Download className="h-3 w-3" />
                  {resource.downloads.toLocaleString()}
                </span>
              )}
            </div>
          </div>
          <div className="text-xs text-muted-foreground/60 mt-1.5">{resource.published}</div>
        </CardContent>
      </Card>
    </Link>
  )
}

export default function KnowledgeHubPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border bg-card">
        <div className="container-wide py-14 lg:py-16">
          <div className="max-w-2xl">
            <Badge variant="outline" className="uppercase tracking-[0.15em] text-xs mb-4">
              Research Library
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Publications & Briefings</h1>
            <p className="text-muted-foreground text-[15px] leading-relaxed prose-readable">
              Institutional-grade publications at the intersection of capital, policy, and agricultural systems across
              Africa.
            </p>
          </div>
        </div>
      </section>

      <div className="container-wide section-padding">
        {/* Search and Filters */}
        <div className="mb-10">
          <div className="relative mb-4 max-w-xl">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search publications, authors, or institutions..." className="pl-10 h-11" />
          </div>
          <div className="flex flex-wrap gap-3">
            <Select defaultValue="all">
              <SelectTrigger className="w-40 h-9 text-sm">
                <SelectValue placeholder="Document type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="brief">Policy briefs</SelectItem>
                <SelectItem value="report">Research reports</SelectItem>
                <SelectItem value="toolkit">Toolkits</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-40 h-9 text-sm">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Themes</SelectItem>
                <SelectItem value="capital">Capital & Finance</SelectItem>
                <SelectItem value="policy">Policy & Regulation</SelectItem>
                <SelectItem value="market">Market Intelligence</SelectItem>
                <SelectItem value="climate">Climate & Resilience</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="recent">
              <SelectTrigger className="w-40 h-9 text-sm">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Most recent</SelectItem>
                <SelectItem value="popular">Most read</SelectItem>
                <SelectItem value="downloads">Most downloaded</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Featured */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-1">Featured publications</h2>
          <p className="text-sm text-muted-foreground mb-5">
            Selected work most relevant to current capital and policy questions.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {resources.filter((r) => r.featured).map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>

        {/* All Publications */}
        <div>
          <h2 className="text-xl font-semibold mb-5">Browse all publications</h2>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full justify-start overflow-x-auto flex-wrap h-auto gap-1 bg-transparent p-0 mb-6">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.value}
                  value={cat.value}
                  className="rounded-full px-4 py-1.5 text-sm data-[state=active]:bg-foreground data-[state=active]:text-background"
                >
                  {cat.name}
                  <span className="ml-1.5 text-xs opacity-50">{cat.count}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value="all" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {resources.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
