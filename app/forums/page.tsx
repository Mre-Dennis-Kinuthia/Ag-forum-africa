import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"
import { Search, MessageSquare, Users, Pin, ArrowUpRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Community Forums",
}

const categories = [
  { id: "crop-management", name: "Crop Management", description: "Planting, harvesting, pest control, and crop optimisation", topics: 342, posts: 2847, icon: "🌾" },
  { id: "livestock", name: "Livestock & Poultry", description: "Animal husbandry, breeding, health, and management", topics: 198, posts: 1653, icon: "🐄" },
  { id: "agritech", name: "AgriTech & Innovation", description: "Technology solutions, IoT, drones, and digital tools", topics: 267, posts: 2134, icon: "💡" },
  { id: "agribusiness", name: "Agribusiness & Finance", description: "Business models, funding, market access, and planning", topics: 423, posts: 3521, icon: "💼" },
  { id: "climate", name: "Climate & Sustainability", description: "Climate-smart agriculture, conservation, and environment", topics: 156, posts: 1289, icon: "🌍" },
  { id: "policy", name: "Policy & Advocacy", description: "Agricultural policies, regulations, and advocacy", topics: 89, posts: 743, icon: "📋" },
]

const featuredTopics = [
  { id: 1, title: "Best practices for organic pest control in tropical climates", author: "Amara Okafor", avatar: "AO", category: "Crop Management", replies: 47, views: 1203, isPinned: true, lastActivity: "2 hours ago" },
  { id: 2, title: "Securing funding for agritech startups in West Africa", author: "Kwame Mensah", avatar: "KM", category: "Agribusiness", replies: 89, views: 2456, isPinned: true, lastActivity: "4 hours ago" },
  { id: 3, title: "Implementing blockchain for supply chain transparency", author: "Fatima Hassan", avatar: "FH", category: "AgriTech", replies: 34, views: 987, isPinned: false, lastActivity: "1 day ago" },
]

export default function ForumsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border bg-card">
        <div className="container-wide py-14 lg:py-16">
          <div className="flex items-end justify-between gap-4">
            <div className="max-w-2xl">
              <Badge variant="outline" className="uppercase tracking-[0.15em] text-xs mb-4">
                Community
              </Badge>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">Forums</h1>
              <p className="text-muted-foreground text-[15px] leading-relaxed prose-readable">
                Connect with agricultural experts and peers across Africa. Share knowledge, ask questions, and collaborate on solutions.
              </p>
            </div>
            <Button className="hidden sm:inline-flex bg-brand-navy hover:bg-brand-navy/90 text-white rounded-full px-6">
              New Discussion
            </Button>
          </div>
        </div>
      </section>

      <div className="container-wide section-padding">
        {/* Search */}
        <div className="relative max-w-md mb-10">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search discussions..." className="pl-10 h-10" />
        </div>

        {/* Pinned / Featured */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-5">Featured discussions</h2>
          <div className="space-y-3">
            {featuredTopics.map((topic) => (
              <Link key={topic.id} href={`/forums/topic/${topic.id}`} className="group block">
                <Card className="border-border/60 hover:border-border hover:shadow-sm transition-all duration-200">
                  <CardContent className="py-4 px-5">
                    <div className="flex items-start gap-3">
                      <Avatar className="w-9 h-9 flex-shrink-0">
                        <AvatarFallback className="bg-muted text-muted-foreground text-xs">{topic.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                          {topic.isPinned && (
                            <Badge variant="secondary" className="text-xs gap-1"><Pin className="w-3 h-3" />Pinned</Badge>
                          )}
                          <Badge variant="outline" className="text-xs font-normal">{topic.category}</Badge>
                        </div>
                        <h3 className="font-semibold text-[15px] group-hover:text-brand-navy transition-colors mb-1">
                          {topic.title}
                        </h3>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span>{topic.author}</span>
                          <span className="text-border">·</span>
                          <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" />{topic.replies}</span>
                          <span className="flex items-center gap-1"><Users className="w-3 h-3" />{topic.views.toLocaleString()}</span>
                          <span className="text-border">·</span>
                          <span>{topic.lastActivity}</span>
                        </div>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-1 flex-shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-xl font-semibold mb-5">Browse by category</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((category) => (
              <Link key={category.id} href={`/forums/category/${category.id}`} className="group">
                <Card className="h-full border-border/60 hover:border-border hover:shadow-sm transition-all duration-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl" role="img" aria-label={category.name}>{category.icon}</span>
                      <div>
                        <CardTitle className="text-base group-hover:text-brand-navy transition-colors">{category.name}</CardTitle>
                        <CardDescription className="text-sm mt-1">{category.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" />{category.topics} topics</span>
                      <span className="flex items-center gap-1"><Users className="w-3 h-3" />{category.posts.toLocaleString()} posts</span>
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
