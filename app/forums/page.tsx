import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { PageHero } from "@/components/page-hero"
import Link from "next/link"
import { Search, MessageSquare, Pin } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Forums" }

const categories = [
  { id: "crop-management", name: "Crop Management", topics: 342, icon: "🌾" },
  { id: "livestock", name: "Livestock & Poultry", topics: 198, icon: "🐄" },
  { id: "agritech", name: "AgriTech & Innovation", topics: 267, icon: "💡" },
  { id: "agribusiness", name: "Agribusiness & Finance", topics: 423, icon: "💼" },
  { id: "climate", name: "Climate & Sustainability", topics: 156, icon: "🌍" },
  { id: "policy", name: "Policy & Advocacy", topics: 89, icon: "📋" },
]

const featured = [
  { id: 1, title: "Best practices for organic pest control in tropical climates", author: "Amara Okafor", avatar: "AO", category: "Crop Management", replies: 47, pinned: true, time: "2h ago" },
  { id: 2, title: "Securing funding for agritech startups in West Africa", author: "Kwame Mensah", avatar: "KM", category: "Agribusiness", replies: 89, pinned: true, time: "4h ago" },
  { id: 3, title: "Implementing blockchain for supply chain transparency", author: "Fatima Hassan", avatar: "FH", category: "AgriTech", replies: 34, pinned: false, time: "1d ago" },
]

export default function ForumsPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="04 Convening"
        title="Forums and discussions."
        description="Discussions across crop management, agritech, policy, and more."
      />

      <div className="container-wide py-10 lg:py-16">
        <div className="relative max-w-sm mb-10">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search discussions..." className="pl-9 h-10" />
        </div>

        {/* Featured */}
        <h2 className="text-lg font-semibold mb-4">Pinned</h2>
        <div className="divide-y divide-border mb-12">
          {featured.map((t) => (
            <Link key={t.id} href={`/forums/topic/${t.id}`} className="group flex items-start gap-3 py-4">
              <Avatar className="w-8 h-8 flex-shrink-0 mt-0.5">
                <AvatarFallback className="bg-muted text-muted-foreground text-[11px]">{t.avatar}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  {t.pinned && <Pin className="h-3 w-3 text-muted-foreground" />}
                  <span className="text-xs text-muted-foreground">{t.category}</span>
                </div>
                <h3 className="text-[15px] font-medium group-hover:text-brand-navy transition-colors leading-snug">{t.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {t.author} · {t.replies} replies · {t.time}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Categories */}
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {categories.map((c) => (
            <Link
              key={c.id}
              href={`/forums/category/${c.id}`}
              className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-foreground/15 transition-colors"
            >
              <span className="text-xl">{c.icon}</span>
              <div className="flex-1">
                <h3 className="text-sm font-medium">{c.name}</h3>
                <p className="text-xs text-muted-foreground">{c.topics} topics</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
