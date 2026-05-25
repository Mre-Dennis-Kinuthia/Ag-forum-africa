import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Search, Calendar, MapPin, Users, Video, Clock, Play } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Events" }

const upcoming = [
  { id: 1, title: "Climate-Smart Agriculture in East Africa", date: "15 Mar", month: "Mar", day: "15", time: "14:00 GMT", duration: "2h", format: "Virtual", category: "Climate", registered: 156, max: 500, featured: true },
  { id: 2, title: "Digital Payment Solutions for Smallholder Farmers", date: "18 Mar", month: "Mar", day: "18", time: "10:00 GMT", duration: "1.5h", format: "Virtual", category: "FinTech", registered: 203, max: 300, featured: true },
  { id: 3, title: "Sustainable Irrigation Techniques Workshop", date: "22 Mar", month: "Mar", day: "22", time: "15:30 GMT", duration: "3h", format: "Hybrid", category: "Water", registered: 89, max: 150, location: "Nairobi", featured: false },
  { id: 4, title: "AgriTech Startup Pitch Competition", date: "25 Mar", month: "Mar", day: "25", time: "13:00 GMT", duration: "4h", format: "Virtual", category: "AgriTech", registered: 342, max: 1000, featured: false },
  { id: 5, title: "Organic Certification and Market Access", date: "28 Mar", month: "Mar", day: "28", time: "11:00 GMT", duration: "2h", format: "Virtual", category: "Agribusiness", registered: 124, max: 400, featured: false },
  { id: 6, title: "Youth in Agriculture Summit 2024", date: "5–7 Apr", month: "Apr", day: "5", time: "09:00 GMT", duration: "3 days", format: "In-Person", category: "Youth", registered: 456, max: 800, location: "Accra", featured: false },
]

const past = [
  { id: 7, title: "Precision Agriculture Technologies Webinar", date: "28 Feb 2024", category: "AgriTech", attendees: 487, recording: true },
  { id: 8, title: "Livestock Management Best Practices", date: "15 Feb 2024", category: "Livestock", attendees: 234, recording: true },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border bg-card">
        <div className="container-wide py-12 lg:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Events</h1>
          <p className="text-muted-foreground max-w-lg">
            Roundtables, workshops, and conferences connecting agricultural stakeholders across Africa.
          </p>
        </div>
      </section>

      <div className="container-wide py-10 lg:py-16">
        <div className="flex gap-3 mb-8">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search events..." className="pl-9 h-10" />
          </div>
        </div>

        <Tabs defaultValue="upcoming">
          <TabsList className="bg-transparent p-0 gap-4 mb-8 border-b border-border rounded-none h-auto pb-0">
            <TabsTrigger value="upcoming" className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:shadow-none px-0 pb-3">Upcoming</TabsTrigger>
            <TabsTrigger value="past" className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:shadow-none px-0 pb-3">Past</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">
            <div className="divide-y divide-border">
              {upcoming.map((e) => (
                <Link key={e.id} href={`/events/${e.id}`} className="group flex items-start gap-4 py-5">
                  <div className="flex-shrink-0 w-12 text-center">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground block">{e.month}</span>
                    <span className="text-xl font-bold leading-tight block">{e.day}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[15px] font-medium group-hover:text-brand-navy transition-colors leading-snug">
                      {e.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-1.5 text-xs text-muted-foreground flex-wrap">
                      <span>{e.time} · {e.duration}</span>
                      <span className="flex items-center gap-1">
                        {e.format === "Virtual" ? <Video className="w-3 h-3" /> : <MapPin className="w-3 h-3" />}
                        {e.format}{e.location ? ` · ${e.location}` : ""}
                      </span>
                      <span>{e.registered}/{e.max} registered</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs font-normal flex-shrink-0 hidden sm:inline-flex">{e.category}</Badge>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past">
            <div className="divide-y divide-border">
              {past.map((e) => (
                <div key={e.id} className="flex items-center justify-between gap-4 py-5">
                  <div>
                    <h3 className="text-[15px] font-medium">{e.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {e.date} · {e.attendees} attendees
                      {e.recording && <> · <span className="text-brand-navy dark:text-brand-teal">Recording available</span></>}
                    </p>
                  </div>
                  {e.recording && (
                    <Button variant="outline" size="sm" className="text-xs h-8 gap-1.5 flex-shrink-0">
                      <Play className="w-3 h-3" /> Watch
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
