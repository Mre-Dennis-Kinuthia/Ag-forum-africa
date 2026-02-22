import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Edit, Trash2, Eye, Download } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AdminResourcesPage() {
  const resources = [
    {
      id: 1,
      title: "Climate-Smart Agriculture: A Comprehensive Guide",
      type: "Guide",
      category: "Climate & Environment",
      author: "Dr. Kwame Osei",
      date: "Mar 15, 2024",
      downloads: 1247,
      status: "published",
    },
    {
      id: 2,
      title: "Organic Pest Management Techniques",
      type: "Video",
      category: "Crop Management",
      author: "Sarah Okonkwo",
      date: "Mar 10, 2024",
      downloads: 892,
      status: "published",
    },
    {
      id: 3,
      title: "Financial Planning for Small-Scale Farmers",
      type: "Workbook",
      category: "Finance & Markets",
      author: "John Kamau",
      date: "Mar 8, 2024",
      downloads: 654,
      status: "draft",
    },
    {
      id: 4,
      title: "Introduction to Precision Agriculture",
      type: "Course",
      category: "Technology & Innovation",
      author: "Amina Hassan",
      date: "Mar 5, 2024",
      downloads: 1523,
      status: "published",
    },
    {
      id: 5,
      title: "Sustainable Livestock Management",
      type: "Guide",
      category: "Livestock",
      author: "David Mensah",
      date: "Mar 1, 2024",
      downloads: 743,
      status: "published",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-heading text-3xl font-bold text-foreground">Resource Management</h1>
              <p className="text-muted-foreground mt-1">Manage knowledge hub resources</p>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add New Resource
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <CardTitle>All Resources</CardTitle>
                <CardDescription>Manage and organize learning materials</CardDescription>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1 sm:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search resources..." className="pl-9" />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-full sm:w-40">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="guide">Guides</SelectItem>
                    <SelectItem value="video">Videos</SelectItem>
                    <SelectItem value="course">Courses</SelectItem>
                    <SelectItem value="workbook">Workbooks</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-full sm:w-40">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {resources.map((resource) => (
                <div
                  key={resource.id}
                  className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline">{resource.type}</Badge>
                      <Badge variant="secondary">{resource.category}</Badge>
                      {resource.status === "draft" ? (
                        <Badge variant="outline">Draft</Badge>
                      ) : (
                        <Badge className="bg-green-600">Published</Badge>
                      )}
                    </div>
                    <h4 className="font-medium text-foreground mb-1">{resource.title}</h4>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>by {resource.author}</span>
                      <span>•</span>
                      <span>{resource.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Download className="h-3 w-3" />
                        {resource.downloads} downloads
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="text-destructive bg-transparent">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
