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
    title: "Complete Guide to Climate-Smart Agriculture in Sub-Saharan Africa",
    description:
      "Comprehensive manual covering drought-resistant crops, water conservation, and adaptive farming techniques for changing climate conditions.",
    type: "Guide",
    category: "Climate",
    format: "PDF",
    pages: 156,
    downloads: 2847,
    rating: 4.8,
    author: "African Climate Research Institute",
    thumbnail: "/climate-smart-agriculture-guide.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Organic Pest Management: Video Series",
    description:
      "12-part video series demonstrating natural pest control methods, companion planting, and integrated pest management strategies.",
    type: "Video",
    category: "Crop Management",
    format: "Video",
    duration: "3h 45m",
    views: 15234,
    rating: 4.9,
    author: "Dr. Amara Okafor",
    thumbnail: "/organic-pest-management-video.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "Financial Planning for Small-Scale Farmers",
    description:
      "Practical workbook with templates for budgeting, record-keeping, and accessing agricultural loans and grants.",
    type: "Workbook",
    category: "Agribusiness",
    format: "PDF",
    pages: 48,
    downloads: 1923,
    rating: 4.6,
    author: "Pan-African Agribusiness Network",
    thumbnail: "/financial-planning-workbook.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "Introduction to Precision Agriculture Technologies",
    description:
      "Overview of IoT sensors, drones, and data analytics tools for modern farming, with case studies from across Africa.",
    type: "Research",
    category: "AgriTech",
    format: "PDF",
    pages: 89,
    downloads: 3421,
    rating: 4.7,
    author: "African AgriTech Consortium",
    thumbnail: "/precision-agriculture-tech.jpg",
    featured: true,
  },
  {
    id: 5,
    title: "Sustainable Livestock Management Practices",
    description:
      "Best practices for animal health, breeding, pasture management, and sustainable livestock production systems.",
    type: "Guide",
    category: "Livestock",
    format: "PDF",
    pages: 124,
    downloads: 1654,
    rating: 4.5,
    author: "East African Livestock Institute",
    thumbnail: "/sustainable-livestock-management.jpg",
    featured: false,
  },
  {
    id: 6,
    title: "Water Harvesting and Irrigation Techniques",
    description: "Practical guide to rainwater harvesting, drip irrigation, and efficient water use in agriculture.",
    type: "Guide",
    category: "Water Management",
    format: "PDF",
    pages: 72,
    downloads: 2156,
    rating: 4.8,
    author: "Water for Agriculture Initiative",
    thumbnail: "/water-harvesting-irrigation.jpg",
    featured: false,
  },
]

const categories = [
  { name: "All Resources", count: 487 },
  { name: "Climate", count: 89 },
  { name: "Crop Management", count: 156 },
  { name: "Agribusiness", count: 124 },
  { name: "AgriTech", count: 78 },
  { name: "Livestock", count: 45 },
  { name: "Water Management", count: 34 },
]

export default function KnowledgeHubPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Knowledge Hub</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl text-pretty">
            Access research papers, guides, videos, and tools to enhance your agricultural practices and business
            operations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          <div className="flex-1">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input placeholder="Search resources, topics, or authors..." className="pl-10" />
            </div>
            <div className="flex flex-wrap gap-3">
              <Select defaultValue="all">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="guide">Guides</SelectItem>
                  <SelectItem value="video">Videos</SelectItem>
                  <SelectItem value="research">Research</SelectItem>
                  <SelectItem value="workbook">Workbooks</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="climate">Climate</SelectItem>
                  <SelectItem value="crop">Crop Management</SelectItem>
                  <SelectItem value="business">Agribusiness</SelectItem>
                  <SelectItem value="tech">AgriTech</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="popular">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="downloads">Most Downloaded</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Featured Resources */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Featured Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources
              .filter((r) => r.featured)
              .map((resource) => (
                <Card key={resource.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative overflow-hidden bg-muted">
                    <img
                      src={resource.thumbnail || "/placeholder.svg"}
                      alt={resource.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground">
                      {resource.type}
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{resource.category}</Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground ml-auto">
                        <Star className="w-4 h-4 fill-secondary text-secondary" />
                        <span>{resource.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight text-balance">{resource.title}</CardTitle>
                    <CardDescription className="line-clamp-2 text-pretty">{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                      {resource.format === "Video" ? (
                        <div className="flex items-center gap-1">
                          <Video className="w-4 h-4" />
                          <span>{resource.duration}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1">
                          <FileText className="w-4 h-4" />
                          <span>{resource.pages} pages</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        {resource.format === "Video" ? (
                          <>
                            <Eye className="w-4 h-4" />
                            <span>{resource.views?.toLocaleString()} views</span>
                          </>
                        ) : (
                          <>
                            <Download className="w-4 h-4" />
                            <span>{resource.downloads?.toLocaleString()}</span>
                          </>
                        )}
                      </div>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                      <Link href={`/knowledge-hub/resource/${resource.id}`}>
                        {resource.format === "Video" ? "Watch Now" : "View Resource"}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* All Resources */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Browse All Resources</h2>
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
                  <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{resource.category}</Badge>
                        <Badge variant="secondary">{resource.type}</Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground ml-auto">
                          <Star className="w-4 h-4 fill-secondary text-secondary" />
                          <span>{resource.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg leading-tight text-balance">{resource.title}</CardTitle>
                      <CardDescription className="line-clamp-2 text-pretty">{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                        <span className="text-xs">by {resource.author}</span>
                        {resource.format === "Video" ? (
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{resource.views?.toLocaleString()}</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1">
                            <Download className="w-4 h-4" />
                            <span>{resource.downloads?.toLocaleString()}</span>
                          </div>
                        )}
                      </div>
                      <Button variant="outline" className="w-full bg-transparent" asChild>
                        <Link href={`/knowledge-hub/resource/${resource.id}`}>View Details</Link>
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
