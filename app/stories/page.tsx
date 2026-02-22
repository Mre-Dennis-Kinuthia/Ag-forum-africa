import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { Search, Clock, Eye, Heart } from "lucide-react"

const stories = [
  {
    id: 1,
    title: "From 2 Acres to 50: A Kenyan Farmer's Journey",
    excerpt:
      "How community knowledge sharing and modern farming techniques helped Grace Wanjiku scale her small farm into a thriving agribusiness employing 30 people.",
    content:
      "Grace Wanjiku started with just 2 acres of land in rural Kenya, struggling to make ends meet. Through the Ag Forum Africa community, she learned about crop rotation, organic farming, and market access strategies that transformed her operation.",
    category: "Scaling",
    author: "Grace Wanjiku",
    authorAvatar: "GW",
    authorRole: "Farmer & Entrepreneur",
    publishedDate: "March 1, 2024",
    readTime: "8 min read",
    views: 3421,
    likes: 287,
    image: "/kenyan-farmer-success-story.jpg",
    featured: true,
    tags: ["scaling", "organic-farming", "kenya", "success"],
  },
  {
    id: 2,
    title: "Solar-Powered Irrigation Transforms Nigerian Village",
    excerpt:
      "A tech solution discovered through forum discussions brings year-round farming to a drought-prone region, changing lives for 200+ families.",
    content:
      "Ibrahim Yusuf's village in Northern Nigeria faced severe water scarcity. After learning about solar irrigation systems through the platform, he organized his community to implement the technology.",
    category: "Technology",
    author: "Ibrahim Yusuf",
    authorAvatar: "IY",
    authorRole: "Community Leader",
    publishedDate: "February 28, 2024",
    readTime: "6 min read",
    views: 2847,
    likes: 234,
    image: "/solar-irrigation-nigeria-story.jpg",
    featured: true,
    tags: ["technology", "irrigation", "nigeria", "community"],
  },
  {
    id: 3,
    title: "Youth Cooperative Revitalizes Cocoa Production",
    excerpt:
      "Young farmers in Ghana use modern techniques learned from the platform to triple cocoa yields and attract international buyers.",
    content:
      "A group of young farmers in Ghana formed a cooperative after connecting through Ag Forum Africa. They implemented precision agriculture techniques and quality control measures.",
    category: "Youth",
    author: "Ama Boateng",
    authorAvatar: "AB",
    authorRole: "Cooperative Leader",
    publishedDate: "February 25, 2024",
    readTime: "7 min read",
    views: 2156,
    likes: 198,
    image: "/youth-cocoa-cooperative-ghana.jpg",
    featured: true,
    tags: ["youth", "cocoa", "ghana", "cooperative"],
  },
  {
    id: 4,
    title: "Mobile App Connects Farmers Directly to Urban Markets",
    excerpt:
      "South African developer creates platform linking smallholder farmers with restaurants and retailers, eliminating middlemen.",
    content:
      "Inspired by discussions in the AgriTech forum, Thabo Ndlovu developed a mobile app that revolutionized how farmers in his region access markets.",
    category: "Innovation",
    author: "Thabo Ndlovu",
    authorAvatar: "TN",
    authorRole: "AgriTech Developer",
    publishedDate: "February 20, 2024",
    readTime: "5 min read",
    views: 1923,
    likes: 167,
    image: "/mobile-market-app-story.jpg",
    featured: false,
    tags: ["agritech", "market-access", "south-africa", "innovation"],
  },
  {
    id: 5,
    title: "Women's Collective Breaks Barriers in Livestock Farming",
    excerpt:
      "Female farmers in Tanzania challenge traditional norms and build successful dairy cooperative through peer support and training.",
    content:
      "A group of women in rural Tanzania formed a dairy cooperative after meeting through the platform's community features.",
    category: "Women in Ag",
    author: "Fatima Mwangi",
    authorAvatar: "FM",
    authorRole: "Cooperative Founder",
    publishedDate: "February 15, 2024",
    readTime: "9 min read",
    views: 2634,
    likes: 312,
    image: "/women-livestock-tanzania.jpg",
    featured: false,
    tags: ["women", "livestock", "tanzania", "cooperative"],
  },
  {
    id: 6,
    title: "Climate-Smart Techniques Save Farm from Drought",
    excerpt:
      "Ethiopian farmer implements water conservation and drought-resistant crops learned from Knowledge Hub, surviving severe drought.",
    content:
      "When drought threatened to destroy his farm, Alemayehu Tadesse turned to the Ag Forum Africa Knowledge Hub for solutions.",
    category: "Climate",
    author: "Alemayehu Tadesse",
    authorAvatar: "AT",
    authorRole: "Climate-Smart Farmer",
    publishedDate: "February 10, 2024",
    readTime: "6 min read",
    views: 1876,
    likes: 145,
    image: "/climate-smart-ethiopia.jpg",
    featured: false,
    tags: ["climate", "drought", "ethiopia", "resilience"],
  },
]

const categories = [
  { name: "All Stories", count: 124 },
  { name: "Scaling", count: 23 },
  { name: "Technology", count: 34 },
  { name: "Youth", count: 18 },
  { name: "Innovation", count: 27 },
  { name: "Women in Ag", count: 15 },
  { name: "Climate", count: 19 },
]

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Success Stories & Insights</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl text-pretty">
            Real stories of transformation, innovation, and impact from agricultural stakeholders across Africa.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input placeholder="Search stories..." className="pl-10" />
          </div>
          <div className="flex flex-wrap gap-3">
            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="scaling">Scaling</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="youth">Youth</SelectItem>
                <SelectItem value="innovation">Innovation</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="recent">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="liked">Most Liked</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Featured Stories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories
              .filter((s) => s.featured)
              .map((story) => (
                <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={story.image || "/placeholder.svg"}
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground">Featured</Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{story.category}</Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight text-balance">
                      <Link href={`/stories/${story.id}`} className="hover:text-primary transition-colors">
                        {story.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="line-clamp-2 text-pretty">{story.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3 mb-4">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                          {story.authorAvatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">{story.author}</p>
                        <p className="text-xs text-muted-foreground">{story.authorRole}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{story.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{story.views}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        <span>{story.likes}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* All Stories */}
        <div>
          <h2 className="text-2xl font-bold mb-6">All Stories</h2>
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.name}
                        className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-muted transition-colors text-left"
                      >
                        <span className="text-sm font-medium">{cat.name}</span>
                        <span className="text-xs text-muted-foreground">{cat.count}</span>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Stories List */}
            <div className="lg:col-span-3 space-y-6">
              {stories.map((story) => (
                <Card key={story.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-64 aspect-video md:aspect-square relative overflow-hidden rounded-lg bg-muted flex-shrink-0">
                        <img
                          src={story.image || "/placeholder.svg"}
                          alt={story.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <Badge variant="outline">{story.category}</Badge>
                          {story.featured && <Badge className="bg-secondary text-secondary-foreground">Featured</Badge>}
                        </div>
                        <Link href={`/stories/${story.id}`}>
                          <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors text-balance">
                            {story.title}
                          </h3>
                        </Link>
                        <p className="text-muted-foreground mb-4 line-clamp-2 text-pretty">{story.excerpt}</p>
                        <div className="flex items-center gap-3 mb-4">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                              {story.authorAvatar}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium">{story.author}</p>
                            <p className="text-xs text-muted-foreground">{story.authorRole}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-4">
                            <span>{story.publishedDate}</span>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{story.readTime}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              <span>{story.views}</span>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" className="gap-2">
                            <Heart className="w-4 h-4" />
                            {story.likes}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
