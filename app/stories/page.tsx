import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import Image from "next/image"
import { Search, Clock, Eye, ArrowUpRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Case Studies",
}

const stories = [
  {
    id: 1,
    title: "From 2 Acres to 50: A Kenyan Farmer's Journey",
    excerpt: "Community knowledge sharing and modern farming techniques helped Grace Wanjiku scale her small farm into a thriving agribusiness.",
    category: "Scaling",
    author: "Grace Wanjiku",
    authorAvatar: "GW",
    authorRole: "Farmer & Entrepreneur",
    publishedDate: "March 1, 2024",
    readTime: "8 min",
    views: 3421,
    image: "/kenyan-farmer-in-field-success.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Solar-Powered Irrigation Transforms Nigerian Village",
    excerpt: "A tech solution brings year-round farming to a drought-prone region, changing lives for 200+ families.",
    category: "Technology",
    author: "Ibrahim Yusuf",
    authorAvatar: "IY",
    authorRole: "Community Leader",
    publishedDate: "February 28, 2024",
    readTime: "6 min",
    views: 2847,
    image: "/solar-irrigation-system-africa.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "Youth Cooperative Revitalises Cocoa Production",
    excerpt: "Young farmers in Ghana use modern techniques to triple cocoa yields and attract international buyers.",
    category: "Youth",
    author: "Ama Boateng",
    authorAvatar: "AB",
    authorRole: "Cooperative Leader",
    publishedDate: "February 25, 2024",
    readTime: "7 min",
    views: 2156,
    image: "/young-african-farmers-cocoa-harvest.jpg",
    featured: true,
  },
  {
    id: 4,
    title: "Mobile App Connects Farmers Directly to Urban Markets",
    excerpt: "Developer creates platform linking smallholder farmers with restaurants and retailers, eliminating middlemen.",
    category: "Innovation",
    author: "Thabo Ndlovu",
    authorAvatar: "TN",
    authorRole: "AgriTech Developer",
    publishedDate: "February 20, 2024",
    readTime: "5 min",
    views: 1923,
    image: "/placeholder.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "Women's Collective Breaks Barriers in Livestock Farming",
    excerpt: "Female farmers in Tanzania challenge traditional norms and build a successful dairy cooperative.",
    category: "Women in Ag",
    author: "Fatima Mwangi",
    authorAvatar: "FM",
    authorRole: "Cooperative Founder",
    publishedDate: "February 15, 2024",
    readTime: "9 min",
    views: 2634,
    image: "/placeholder.jpg",
    featured: false,
  },
  {
    id: 6,
    title: "Climate-Smart Techniques Save Farm from Drought",
    excerpt: "Ethiopian farmer implements water conservation and drought-resistant crops, surviving severe drought.",
    category: "Climate",
    author: "Alemayehu Tadesse",
    authorAvatar: "AT",
    authorRole: "Climate-Smart Farmer",
    publishedDate: "February 10, 2024",
    readTime: "6 min",
    views: 1876,
    image: "/placeholder.jpg",
    featured: false,
  },
]

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border bg-card">
        <div className="container-wide py-14 lg:py-16">
          <div className="max-w-2xl">
            <Badge variant="outline" className="uppercase tracking-[0.15em] text-xs mb-4">
              Evidence
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Case Studies & Impact</h1>
            <p className="text-muted-foreground text-[15px] leading-relaxed prose-readable">
              Real stories of how capital, policy, and operators collaborate to shift outcomes on the ground across African agriculture.
            </p>
          </div>
        </div>
      </section>

      <div className="container-wide section-padding">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search case studies..." className="pl-10 h-10" />
          </div>
          <div className="flex gap-3">
            <Select defaultValue="all">
              <SelectTrigger className="w-36 h-10 text-sm"><SelectValue placeholder="Category" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="scaling">Scaling</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="youth">Youth</SelectItem>
                <SelectItem value="innovation">Innovation</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="recent">
              <SelectTrigger className="w-36 h-10 text-sm"><SelectValue placeholder="Sort" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Most recent</SelectItem>
                <SelectItem value="popular">Most read</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Featured */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-5">Featured</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {stories.filter((s) => s.featured).map((story) => (
              <Link key={story.id} href={`/stories/${story.id}`} className="group">
                <Card className="overflow-hidden h-full border-border/60 hover:border-border hover:shadow-sm transition-all duration-200">
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <Badge className="absolute bottom-3 left-3 bg-white/90 text-foreground text-xs backdrop-blur-sm">
                      {story.category}
                    </Badge>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base leading-snug group-hover:text-brand-navy transition-colors">
                      {story.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{story.excerpt}</p>
                    <div className="flex items-center gap-2">
                      <Avatar className="w-6 h-6">
                        <AvatarFallback className="bg-muted text-muted-foreground text-[10px]">{story.authorAvatar}</AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-muted-foreground">{story.author}</span>
                      <span className="text-xs text-muted-foreground/50 ml-auto">{story.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* All stories */}
        <div>
          <h2 className="text-xl font-semibold mb-5">All case studies</h2>
          <div className="space-y-3">
            {stories.map((story) => (
              <Link key={story.id} href={`/stories/${story.id}`} className="group block">
                <Card className="border-border/60 hover:border-border hover:shadow-sm transition-all duration-200">
                  <CardContent className="py-4 px-5">
                    <div className="flex items-start gap-4">
                      <div className="w-20 h-20 rounded-lg overflow-hidden relative flex-shrink-0 bg-muted">
                        <Image src={story.image} alt="" fill className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                          <Badge variant="outline" className="text-xs font-normal">{story.category}</Badge>
                        </div>
                        <h3 className="font-semibold text-[15px] group-hover:text-brand-navy transition-colors mb-1">
                          {story.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-1 mb-1.5">{story.excerpt}</p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span>{story.author}</span>
                          <span className="text-border">·</span>
                          <span>{story.publishedDate}</span>
                          <span className="text-border">·</span>
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{story.readTime}</span>
                          <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{story.views.toLocaleString()}</span>
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
      </div>
    </div>
  )
}
