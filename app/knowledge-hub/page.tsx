import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Search, FileText, Video, Download, Eye, Star } from "lucide-react"

const resources = [
  {
    id: 1,
    title: "Climate-Smart Agriculture in Sub-Saharan Africa",
    description:
      "Comprehensive manual covering drought-resistant crops, water conservation, and adaptive farming techniques for changing climate conditions.",
    type: "Technical Guide",
    category: "Climate",
    format: "PDF",
    pages: 156,
    downloads: 2847,
    rating: 4.8,
    author: "African Climate Research Institute",
    institution: "African Climate Research Institute",
    published: "January 2024",
    tier: "Public",
    thumbnail: "/climate-smart-agriculture-guide.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Organic Pest Management — Applied Series",
    description:
      "12-part video series demonstrating natural pest control methods, companion planting, and integrated pest management strategies.",
    type: "Applied Learning",
    category: "Crop Management",
    format: "Video",
    duration: "3h 45m",
    views: 15234,
    rating: 4.9,
    author: "Dr. Amara Okafor",
    institution: "Independent Expert",
    published: "February 2024",
    tier: "Member",
    thumbnail: "/organic-pest-management-video.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "Financial Planning for Small-Scale Farmers",
    description:
      "Practical workbook with templates for budgeting, record-keeping, and accessing agricultural loans and grants.",
    type: "Policy Toolkit",
    category: "Agribusiness",
    format: "PDF",
    pages: 48,
    downloads: 1923,
    rating: 4.6,
    author: "Pan-African Agribusiness Network",
    institution: "Pan-African Agribusiness Network",
    published: "December 2023",
    tier: "Public",
    thumbnail: "/financial-planning-workbook.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "Introduction to Precision Agriculture Technologies",
    description:
      "Overview of IoT sensors, drones, and data analytics tools for modern farming, with case studies from across Africa.",
    type: "Research Report",
    category: "AgriTech",
    format: "PDF",
    pages: 89,
    downloads: 3421,
    rating: 4.7,
    author: "African AgriTech Consortium",
    institution: "African AgriTech Consortium",
    published: "November 2023",
    tier: "Institutional",
    thumbnail: "/precision-agriculture-tech.jpg",
    featured: true,
  },
  {
    id: 5,
    title: "Sustainable Livestock Management Practices",
    description:
      "Best practices for animal health, breeding, pasture management, and sustainable livestock production systems.",
    type: "Technical Guide",
    category: "Livestock",
    format: "PDF",
    pages: 124,
    downloads: 1654,
    rating: 4.5,
    author: "East African Livestock Institute",
    institution: "East African Livestock Institute",
    published: "October 2023",
    tier: "Public",
    thumbnail: "/sustainable-livestock-management.jpg",
    featured: false,
  },
  {
    id: 6,
    title: "Water Harvesting and Irrigation Techniques",
    description: "Practical guide to rainwater harvesting, drip irrigation, and efficient water use in agriculture.",
    type: "Technical Guide",
    category: "Water Management",
    format: "PDF",
    pages: 72,
    downloads: 2156,
    rating: 4.8,
    author: "Water for Agriculture Initiative",
    institution: "Water for Agriculture Initiative",
    published: "September 2023",
    tier: "Member",
    thumbnail: "/water-harvesting-irrigation.jpg",
    featured: false,
  },
]

const categories = [
  { name: "All Publications", count: 487 },
  { name: "Capital & Finance", count: 72 },
  { name: "Policy & Regulation", count: 96 },
  { name: "Market Intelligence", count: 118 },
  { name: "Climate & Resilience", count: 89 },
  { name: "Technology & Innovation", count: 78 },
]

export default function KnowledgeHubPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-3">
            Research Library
          </p>
          <h1 className="text-4xl font-bold mb-4">Publications & Briefings</h1>
          <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
            Institutional-grade publications at the intersection of capital, policy, and agricultural systems across
            Africa.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          <div className="flex-1">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input placeholder="Search publications, authors, or institutions..." className="pl-10" />
            </div>
            <div className="flex flex-wrap gap-3">
              <Select defaultValue="all">
                <SelectTrigger className="w-40">
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
                <SelectTrigger className="w-40">
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
              <Select defaultValue="popular">
                <SelectTrigger className="w-40">
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
        </div>

        {/* Featured Publications */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-1">Featured publications</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Selected work most relevant to current capital and policy questions.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources
              .filter((r) => r.featured)
              .map((resource) => (
                <Card key={resource.id} className="hover:shadow-sm transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <Badge variant="outline">{resource.type}</Badge>
                      <Badge variant="secondary">{resource.category}</Badge>
                      <Badge variant="outline" className="ml-auto text-xs">
                        {resource.tier} access
                      </Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight text-balance">{resource.title}</CardTitle>
                    <CardDescription className="text-sm text-pretty line-clamp-3">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                      <span>
                        {resource.institution} • {resource.published}
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <FileText className="w-3 h-3" />
                          <span>{resource.pages} pages</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Download className="w-3 h-3" />
                          <span>{resource.downloads?.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <Link href={`/knowledge-hub/resource/${resource.id}`}>Open publication</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* All Publications */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Browse all publications</h2>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full justify-start overflow-x-auto flex-wrap h-auto">
              {categories.map((cat) => (
                <TabsTrigger key={cat.name} value={cat.name.toLowerCase().replace(" ", "-")}>
                  {cat.name} ({cat.count})
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value="all" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource) => (
                  <Card key={resource.id} className="hover:shadow-sm transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <Badge variant="outline">{resource.type}</Badge>
                        <Badge variant="secondary">{resource.category}</Badge>
                        <Badge variant="outline" className="ml-auto text-xs">
                          {resource.tier} access
                        </Badge>
                      </div>
                      <CardTitle className="text-lg leading-tight text-balance">{resource.title}</CardTitle>
                      <CardDescription className="line-clamp-2 text-pretty">{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col gap-2 text-xs text-muted-foreground mb-3">
                        <span>
                          {resource.author} • {resource.institution}
                        </span>
                        <div className="flex items-center justify-between">
                          <span>{resource.published}</span>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              <FileText className="w-3 h-3" />
                              <span>{resource.pages} pages</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Download className="w-3 h-3" />
                              <span>{resource.downloads?.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full bg-transparent" asChild>
                        <Link href={`/knowledge-hub/resource/${resource.id}`}>Open publication</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
