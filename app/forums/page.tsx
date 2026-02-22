import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"
import { Search, MessageSquare, Users, Pin } from "lucide-react"

const categories = [
  {
    id: "crop-management",
    name: "Crop Management",
    description: "Discuss planting, harvesting, pest control, and crop optimization",
    topics: 342,
    posts: 2847,
    icon: "🌾",
    color: "bg-green-100 text-green-700",
  },
  {
    id: "livestock",
    name: "Livestock & Poultry",
    description: "Animal husbandry, breeding, health, and management practices",
    topics: 198,
    posts: 1653,
    icon: "🐄",
    color: "bg-amber-100 text-amber-700",
  },
  {
    id: "agritech",
    name: "AgriTech & Innovation",
    description: "Technology solutions, IoT, drones, and digital tools for farming",
    topics: 267,
    posts: 2134,
    icon: "💡",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: "agribusiness",
    name: "Agribusiness & Finance",
    description: "Business models, funding, market access, and financial planning",
    topics: 423,
    posts: 3521,
    icon: "💼",
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: "climate",
    name: "Climate & Sustainability",
    description: "Climate-smart agriculture, conservation, and environmental practices",
    topics: 156,
    posts: 1289,
    icon: "🌍",
    color: "bg-teal-100 text-teal-700",
  },
  {
    id: "policy",
    name: "Policy & Advocacy",
    description: "Agricultural policies, regulations, and advocacy initiatives",
    topics: 89,
    posts: 743,
    icon: "📋",
    color: "bg-red-100 text-red-700",
  },
]

const featuredTopics = [
  {
    id: 1,
    title: "Best practices for organic pest control in tropical climates",
    author: "Amara Okafor",
    avatar: "AO",
    category: "Crop Management",
    replies: 47,
    views: 1203,
    isPinned: true,
    lastActivity: "2 hours ago",
  },
  {
    id: 2,
    title: "Securing funding for agritech startups in West Africa",
    author: "Kwame Mensah",
    avatar: "KM",
    category: "Agribusiness",
    replies: 89,
    views: 2456,
    isPinned: true,
    lastActivity: "4 hours ago",
  },
  {
    id: 3,
    title: "Implementing blockchain for supply chain transparency",
    author: "Fatima Hassan",
    avatar: "FH",
    category: "AgriTech",
    replies: 34,
    views: 987,
    isPinned: false,
    lastActivity: "1 day ago",
  },
]

export default function ForumsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Community Forums</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl text-pretty">
            Connect with agricultural experts and peers across Africa. Share knowledge, ask questions, and collaborate
            on solutions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input placeholder="Search discussions..." className="pl-10" />
          </div>
          <Button className="bg-primary hover:bg-primary/90">Start New Discussion</Button>
        </div>

        {/* Featured/Pinned Topics */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Featured Discussions</h2>
          <div className="space-y-3">
            {featuredTopics.map((topic) => (
              <Card key={topic.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-primary text-primary-foreground">{topic.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        {topic.isPinned && (
                          <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                            <Pin className="w-3 h-3 mr-1" />
                            Pinned
                          </Badge>
                        )}
                        <Badge variant="outline">{topic.category}</Badge>
                      </div>
                      <Link href={`/forums/topic/${topic.id}`}>
                        <h3 className="font-semibold text-lg hover:text-primary transition-colors mb-1 text-balance">
                          {topic.title}
                        </h3>
                      </Link>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
                        <span>by {topic.author}</span>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="w-4 h-4" />
                          <span>{topic.replies} replies</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{topic.views} views</span>
                        </div>
                        <span>Last activity {topic.lastActivity}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Browse by Category</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {categories.map((category) => (
              <Link key={category.id} href={`/forums/category/${category.id}`}>
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center text-2xl`}
                      >
                        {category.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-xl mb-1">{category.name}</CardTitle>
                        <CardDescription className="text-pretty">{category.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MessageSquare className="w-4 h-4" />
                        <span>{category.topics} topics</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{category.posts} posts</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
