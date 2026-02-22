import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { ArrowLeft, Download, Share2, Bookmark, Star, FileText, Eye, ThumbsUp, MessageSquare } from "lucide-react"

const resource = {
  id: 1,
  title: "Complete Guide to Climate-Smart Agriculture in Sub-Saharan Africa",
  description:
    "This comprehensive manual provides detailed guidance on implementing climate-smart agricultural practices across Sub-Saharan Africa. It covers drought-resistant crop varieties, water conservation techniques, soil management, and adaptive farming strategies to help farmers build resilience against climate change.",
  type: "Guide",
  category: "Climate",
  format: "PDF",
  pages: 156,
  fileSize: "12.4 MB",
  downloads: 2847,
  views: 8934,
  rating: 4.8,
  reviews: 234,
  author: "African Climate Research Institute",
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

const reviews = [
  {
    id: 1,
    author: "Amara Okafor",
    avatar: "AO",
    rating: 5,
    date: "March 2024",
    comment:
      "Excellent resource! The practical examples and case studies from different African regions make this guide incredibly valuable. I've already implemented several water conservation techniques on my farm.",
  },
  {
    id: 2,
    author: "Kwame Mensah",
    avatar: "KM",
    rating: 5,
    date: "February 2024",
    comment:
      "As an agricultural extension officer, I've been recommending this guide to all the farmers I work with. The section on drought-resistant crops is particularly helpful.",
  },
]

export default function ResourceDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted py-6 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/knowledge-hub"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Knowledge Hub
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Resource Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <Badge variant="outline">{resource.category}</Badge>
                <Badge variant="secondary">{resource.type}</Badge>
                {resource.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="outline" className="bg-muted">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="text-3xl font-bold mb-4 text-balance">{resource.title}</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-secondary text-secondary" />
                  <span className="font-semibold">{resource.rating}</span>
                  <span>({resource.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Download className="w-4 h-4" />
                  <span>{resource.downloads.toLocaleString()} downloads</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{resource.views.toLocaleString()} views</span>
                </div>
              </div>
            </div>

            {/* Thumbnail */}
            <div className="aspect-video relative overflow-hidden rounded-lg bg-muted mb-6">
              <img
                src={resource.thumbnail || "/placeholder.svg"}
                alt={resource.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>About This Resource</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">{resource.description}</p>
              </CardContent>
            </Card>

            {/* Table of Contents */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Table of Contents</CardTitle>
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

            {/* Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Reviews ({resource.reviews})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="pb-4 border-b border-border last:border-0 last:pb-0">
                      <div className="flex items-start gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {review.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold">{review.author}</h4>
                            <div className="flex items-center gap-1">
                              {Array.from({ length: review.rating }).map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{review.date}</p>
                          <p className="text-foreground leading-relaxed">{review.comment}</p>
                          <div className="flex items-center gap-4 mt-3">
                            <Button variant="ghost" size="sm" className="h-8 gap-2">
                              <ThumbsUp className="w-4 h-4" />
                              Helpful
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 gap-2">
                              <MessageSquare className="w-4 h-4" />
                              Reply
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Separator className="my-4" />
                <Button variant="outline" className="w-full bg-transparent">
                  View All Reviews
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              {/* Download Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Access Resource</CardTitle>
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
                  <CardTitle>Resource Details</CardTitle>
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
