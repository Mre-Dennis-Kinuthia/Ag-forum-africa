import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { ArrowLeft, Download, Share2, Bookmark, FileText } from "lucide-react"

const resource = {
  id: 1,
  title: "Complete Guide to Climate-Smart Agriculture in Sub-Saharan Africa",
  description:
    "This comprehensive manual provides detailed guidance on implementing climate-smart agricultural practices across Sub-Saharan Africa. It covers drought-resistant crop varieties, water conservation techniques, soil management, and adaptive farming strategies to help farmers build resilience against climate change.",
  type: "Technical Guide",
  category: "Climate & Resilience",
  format: "PDF",
  pages: 156,
  fileSize: "12.4 MB",
  downloads: 2847,
  views: 8934,
  author: "African Climate Research Institute",
  institution: "African Climate Research Institute",
  publishedDate: "January 2024",
  lastUpdated: "February 2024",
  language: "English",
  thumbnail: "/climate-smart-agriculture-guide.jpg",
  tags: ["climate-change", "drought-resistant", "water-conservation", "soil-management", "adaptation"],
  tableOfContents: [
    "Introduction to Climate-Smart Agriculture",
    "Understanding Climate Patterns in Sub-Saharan Africa",
    "Drought-Resistant Crop Varieties",
    "Water Conservation and Harvesting Techniques",
    "Soil Health and Management",
    "Integrated Pest Management in Changing Climates",
    "Agroforestry and Carbon Sequestration",
    "Climate Risk Assessment and Planning",
    "Case Studies from Across Africa",
    "Resources and Further Reading",
  ],
  tier: "Public",
  relatedResources: [
    {
      id: 2,
      title: "Water Harvesting and Irrigation Techniques",
      category: "Water Management",
      type: "Guide",
    },
    {
      id: 3,
      title: "Drought-Resistant Crop Varieties Database",
      category: "Climate",
      type: "Database",
    },
  ],
}

export default function ResourceDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card py-6 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/knowledge-hub"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Research Library
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Publication Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <Badge variant="outline">{resource.type}</Badge>
                <Badge variant="secondary">{resource.category}</Badge>
                <Badge variant="outline" className="text-xs">
                  {resource.tier} access
                </Badge>
              </div>
              <h1 className="text-3xl font-bold mb-3 text-balance">{resource.title}</h1>
              <div className="space-y-1 text-sm text-muted-foreground mb-4">
                <p>
                  {resource.author} • {resource.institution}
                </p>
                <p>
                  Published {resource.publishedDate} • Last updated {resource.lastUpdated} • {resource.language}
                </p>
                <p>
                  {resource.pages} pages • {resource.fileSize} • {resource.downloads.toLocaleString()} downloads
                </p>
              </div>
            </div>

            {/* Executive summary & structure */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Executive summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">{resource.description}</p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Table of contents</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-2">
                  {resource.tableOfContents.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-muted-foreground font-mono text-sm">{index + 1}.</span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Methodology & sources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  This publication synthesises evidence from African climate datasets, peer-reviewed literature, and
                  programmatic experience across multiple countries. It should be read alongside the accompanying data
                  notes where available.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Geographic scope: Sub-Saharan Africa</li>
                  <li>Time horizon: most recent 5–10 years of available data</li>
                  <li>Sources: institutional reports, national statistics, and research partners</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              {/* Download Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Access publication</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Bookmark className="w-4 h-4 mr-2" />
                    Save for Later
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </CardContent>
              </Card>

              {/* Resource Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Publication details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Format</span>
                    <span className="font-medium">{resource.format}</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Pages</span>
                    <span className="font-medium">{resource.pages}</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">File Size</span>
                    <span className="font-medium">{resource.fileSize}</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Language</span>
                    <span className="font-medium">{resource.language}</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Published</span>
                    <span className="font-medium">{resource.publishedDate}</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Last Updated</span>
                    <span className="font-medium">{resource.lastUpdated}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Author */}
              <Card>
                <CardHeader>
                  <CardTitle>Author</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium mb-2">{resource.author}</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    Leading research organization focused on climate adaptation in African agriculture
                  </p>
                  <Button variant="outline" className="w-full bg-transparent" size="sm">
                    View Profile
                  </Button>
                </CardContent>
              </Card>

              {/* Related Resources */}
              <Card>
                <CardHeader>
                  <CardTitle>Related Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {resource.relatedResources.map((related) => (
                    <Link key={related.id} href={`/knowledge-hub/resource/${related.id}`}>
                      <div className="p-3 rounded-lg border border-border hover:bg-muted transition-colors">
                        <div className="flex items-center gap-2 mb-1">
                          <FileText className="w-4 h-4 text-muted-foreground" />
                          <Badge variant="outline" className="text-xs">
                            {related.type}
                          </Badge>
                        </div>
                        <h4 className="text-sm font-medium leading-tight text-balance">{related.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{related.category}</p>
                      </div>
                    </Link>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
