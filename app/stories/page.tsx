import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { PageHero } from "@/components/page-hero"
import Link from "next/link"
import Image from "next/image"
import { Search, Clock, Eye } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Case Studies" }

const stories = [
  { id: 1, title: "From 2 Acres to 50: A Kenyan Farmer's Journey", excerpt: "Community knowledge sharing and modern farming techniques helped Grace Wanjiku scale her small farm into a thriving agribusiness.", category: "Scaling", author: "Grace Wanjiku", avatar: "GW", date: "1 Mar 2024", readTime: "8 min", views: 3421, image: "/kenyan-farmer-in-field-success.jpg", featured: true },
  { id: 2, title: "Solar-Powered Irrigation Transforms Nigerian Village", excerpt: "A tech solution brings year-round farming to a drought-prone region, changing lives for 200+ families.", category: "Technology", author: "Ibrahim Yusuf", avatar: "IY", date: "28 Feb 2024", readTime: "6 min", views: 2847, image: "/solar-irrigation-system-africa.jpg", featured: true },
  { id: 3, title: "Youth Cooperative Revitalises Cocoa Production", excerpt: "Young farmers in Ghana use modern techniques to triple cocoa yields and attract international buyers.", category: "Youth", author: "Ama Boateng", avatar: "AB", date: "25 Feb 2024", readTime: "7 min", views: 2156, image: "/young-african-farmers-cocoa-harvest.jpg", featured: true },
  { id: 4, title: "Mobile App Connects Farmers Directly to Urban Markets", excerpt: "Developer creates platform linking smallholder farmers with restaurants and retailers.", category: "Innovation", author: "Thabo Ndlovu", avatar: "TN", date: "20 Feb 2024", readTime: "5 min", views: 1923, image: "/placeholder.jpg", featured: false },
  { id: 5, title: "Women's Collective Breaks Barriers in Livestock Farming", excerpt: "Female farmers in Tanzania challenge traditional norms and build a successful dairy cooperative.", category: "Women in Ag", author: "Fatima Mwangi", avatar: "FM", date: "15 Feb 2024", readTime: "9 min", views: 2634, image: "/placeholder.jpg", featured: false },
  { id: 6, title: "Climate-Smart Techniques Save Farm from Drought", excerpt: "Ethiopian farmer implements water conservation and drought-resistant crops, surviving severe drought.", category: "Climate", author: "Alemayehu Tadesse", avatar: "AT", date: "10 Feb 2024", readTime: "6 min", views: 1876, image: "/placeholder.jpg", featured: false },
]

export default function StoriesPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Evidence"
        title="Case studies."
        description="How capital, policy, and operators collaborate to shift outcomes across African agriculture."
      />

      <div className="container-wide py-10 lg:py-16">
        <div className="relative max-w-sm mb-10">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search case studies..." className="pl-9 h-10" />
        </div>

        {/* Featured — image grid */}
        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {stories.filter((s) => s.featured).map((story) => (
            <Link key={story.id} href={`/stories/${story.id}`} className="group">
              <div className="aspect-[3/2] relative rounded-lg overflow-hidden mb-3">
                <Image src={story.image} alt={story.title} fill className="object-cover group-hover:scale-[1.02] transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs text-white/80">{story.category}</span>
              </div>
              <h3 className="font-medium text-[15px] leading-snug group-hover:text-brand-navy transition-colors">{story.title}</h3>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{story.excerpt}</p>
              <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                <span>{story.author}</span>
                <span>·</span>
                <span>{story.readTime}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Rest — simple list */}
        <h2 className="text-lg font-semibold mb-4">All case studies</h2>
        <div className="divide-y divide-border">
          {stories.map((story) => (
            <Link key={story.id} href={`/stories/${story.id}`} className="group flex items-start gap-4 py-5">
              <div className="w-16 h-16 rounded-md overflow-hidden relative flex-shrink-0 bg-muted">
                <Image src={story.image} alt="" fill className="object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[15px] font-medium group-hover:text-brand-navy transition-colors leading-snug">{story.title}</h3>
                <p className="text-sm text-muted-foreground mt-0.5 line-clamp-1">{story.excerpt}</p>
                <div className="flex items-center gap-2 mt-1.5 text-xs text-muted-foreground">
                  <span>{story.author}</span>
                  <span>·</span>
                  <span>{story.date}</span>
                  <span>·</span>
                  <span>{story.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
