import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { Search, MessageSquare, Users, ArrowLeft, TrendingUp, Clock } from "lucide-react"

const topics = [
  {
    id: 1,
    title: "Best practices for organic pest control in tropical climates",
    author: "Amara Okafor",
    avatar: "AO",
    replies: 47,
    views: 1203,
    lastActivity: "2 hours ago",
    lastAuthor: "John Doe",
    isTrending: true,
    tags: ["organic", "pest-control", "tropical"],
  },
  {
    id: 2,
    title: "Dealing with fall armyworm in maize crops",
    author: "Peter Mwangi",
    avatar: "PM",
    replies: 23,
    views: 567,
    lastActivity: "5 hours ago",
    lastAuthor: "Sarah K",
    isTrending: false,
    tags: ["maize", "pests", "armyworm"],
  },
  {
    id: 3,
    title: "Integrated pest management strategies for smallholder farms",
    author: "Grace Wanjiku",
    avatar: "GW",
    replies: 31,
    views: 892,
    lastActivity: "1 day ago",
    lastAuthor: "David M",
    isTrending: true,
    tags: ["IPM", "smallholder", "strategy"],
  },
  {
    id: 4,
    title: "Natural fungicides for tomato blight prevention",
    author: "Ibrahim Yusuf",
    avatar: "IY",
    replies: 18,
    views: 445,
    lastActivity: "2 days ago",
    lastAuthor: "Mary A",
    isTrending: false,
    tags: ["tomatoes", "fungicides", "blight"],
  },
]

export default function CategoryPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/forums"
            className="inline-flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Forums
          </Link>
          <h1 className="text-3xl font-bold mb-2">Crop Management</h1>
          <p className="text-primary-foreground/90">
            Discuss planting, harvesting, pest control, and crop optimization
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input placeholder="Search in this category..." className="pl-10" />
          </div>
          <Select defaultValue="recent">
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="replies">Most Replies</SelectItem>
              <SelectItem value="views">Most Views</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-primary hover:bg-primary/90">New Topic</Button>
        </div>

        {/* Topics List */}
        <div className="space-y-3">
          {topics.map((topic) => (
            <Card key={topic.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-primary text-primary-foreground">{topic.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      {topic.isTrending && (
                        <Badge className="bg-secondary text-secondary-foreground">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </Badge>
                      )}
                      {topic.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link href={`/forums/topic/${topic.id}`}>
                      <h3 className="font-semibold text-lg hover:text-primary transition-colors mb-1 text-balance">
                        {topic.title}
                      </h3>
                    </Link>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
                      <span>Started by {topic.author}</span>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="w-4 h-4" />
                        <span>{topic.replies} replies</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{topic.views} views</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>
                        Last reply by {topic.lastAuthor} {topic.lastActivity}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <Button variant="outline" disabled>
            Previous
          </Button>
          <Button variant="outline" className="bg-primary text-primary-foreground">
            1
          </Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">Next</Button>
        </div>
      </div>
    </div>
  )
}
