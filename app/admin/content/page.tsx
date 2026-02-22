import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Check, X, Eye, AlertCircle } from "lucide-react"

export default function AdminContentPage() {
  const pendingPosts = [
    {
      id: 1,
      type: "Forum Post",
      title: "New irrigation technique for small-scale farmers",
      author: "John Kamau",
      date: "2 hours ago",
      reports: 0,
      excerpt: "I've been experimenting with a new drip irrigation system that uses recycled materials...",
    },
    {
      id: 2,
      type: "Comment",
      title: "Reply to: Climate-smart agriculture practices",
      author: "Amina Hassan",
      date: "4 hours ago",
      reports: 2,
      excerpt: "This is completely wrong. The data you're citing is outdated and misleading...",
    },
    {
      id: 3,
      type: "Story",
      title: "Success with organic farming in Rwanda",
      author: "Pierre Nkurunziza",
      date: "1 day ago",
      reports: 0,
      excerpt: "After three years of transitioning to organic methods, our cooperative has seen...",
    },
  ]

  const reportedContent = [
    {
      id: 1,
      type: "Comment",
      title: "Inappropriate language in discussion",
      author: "Anonymous User",
      reports: 5,
      date: "1 hour ago",
      reason: "Offensive language",
    },
    {
      id: 2,
      type: "Forum Post",
      title: "Spam: Buy cheap fertilizers here",
      author: "Spam Account",
      reports: 12,
      date: "3 hours ago",
      reason: "Spam/Advertisement",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <h1 className="font-heading text-3xl font-bold text-foreground">Content Moderation</h1>
          <p className="text-muted-foreground mt-1">Review and moderate platform content</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList>
            <TabsTrigger value="pending">
              Pending Review
              <Badge variant="secondary" className="ml-2">
                {pendingPosts.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="reported">
              Reported Content
              <Badge variant="destructive" className="ml-2">
                {reportedContent.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="approved">Approved</TabsTrigger>
            <TabsTrigger value="rejected">Rejected</TabsTrigger>
          </TabsList>

          <TabsContent value="pending">
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle>Pending Review</CardTitle>
                    <CardDescription>Content awaiting moderation approval</CardDescription>
                  </div>
                  <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search content..." className="pl-9" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {pendingPosts.map((post) => (
                    <div key={post.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{post.type}</Badge>
                          {post.reports > 0 && (
                            <Badge variant="destructive" className="gap-1">
                              <AlertCircle className="h-3 w-3" />
                              {post.reports} reports
                            </Badge>
                          )}
                        </div>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{post.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">by {post.author}</p>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="mr-2 h-4 w-4" />
                            View Full
                          </Button>
                          <Button size="sm" variant="outline" className="text-destructive bg-transparent">
                            <X className="mr-2 h-4 w-4" />
                            Reject
                          </Button>
                          <Button size="sm">
                            <Check className="mr-2 h-4 w-4" />
                            Approve
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reported">
            <Card>
              <CardHeader>
                <CardTitle>Reported Content</CardTitle>
                <CardDescription>Content flagged by community members</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {reportedContent.map((item) => (
                    <div key={item.id} className="border border-destructive/50 rounded-lg p-4 bg-destructive/5">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{item.type}</Badge>
                          <Badge variant="destructive" className="gap-1">
                            <AlertCircle className="h-3 w-3" />
                            {item.reports} reports
                          </Badge>
                          <Badge variant="secondary">{item.reason}</Badge>
                        </div>
                        <span className="text-xs text-muted-foreground">{item.date}</span>
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">by {item.author}</p>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="mr-2 h-4 w-4" />
                            Review
                          </Button>
                          <Button size="sm" variant="destructive">
                            <X className="mr-2 h-4 w-4" />
                            Remove
                          </Button>
                          <Button size="sm" variant="outline">
                            Dismiss Reports
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="approved">
            <Card>
              <CardHeader>
                <CardTitle>Approved Content</CardTitle>
                <CardDescription>Recently approved content</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground py-8">No approved content to display</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rejected">
            <Card>
              <CardHeader>
                <CardTitle>Rejected Content</CardTitle>
                <CardDescription>Content that was rejected during moderation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground py-8">No rejected content to display</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
