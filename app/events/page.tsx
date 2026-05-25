import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Search, Calendar, MapPin, Users, Video, Clock, ArrowUpRight, Play } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Events",
}

const upcomingEvents = [
  {
    id: 1,
    title: "Climate-Smart Agriculture in East Africa",
    description: "Adaptive farming techniques, drought-resistant crops, and climate resilience strategies for East African farmers.",
    date: "March 15, 2024",
    time: "14:00 GMT",
    duration: "2 hours",
    format: "Virtual",
    category: "Climate",
    participants: 156,
    maxParticipants: 500,
    speakers: ["Dr. Amara Okafor", "Prof. John Kamau"],
    featured: true,
  },
  {
    id: 2,
    title: "Digital Payment Solutions for Smallholder Farmers",
    description: "Mobile money, digital wallets, and fintech innovations making financial services accessible to rural communities.",
    date: "March 18, 2024",
    time: "10:00 GMT",
    duration: "1.5 hours",
    format: "Virtual",
    category: "FinTech",
    participants: 203,
    maxParticipants: 300,
    speakers: ["Fatima Hassan", "Kwame Mensah"],
    featured: true,
  },
  {
    id: 3,
    title: "Sustainable Irrigation Techniques Workshop",
    description: "Hands-on workshop covering drip irrigation, rainwater harvesting, and efficient water management.",
    date: "March 22, 2024",
    time: "15:30 GMT",
    duration: "3 hours",
    format: "Hybrid",
    location: "Nairobi, Kenya",
    category: "Water Management",
    participants: 89,
    maxParticipants: 150,
    speakers: ["Grace Wanjiku", "Ibrahim Yusuf"],
    featured: false,
  },
  {
    id: 4,
    title: "AgriTech Startup Pitch Competition",
    description: "Innovative agritech startups pitch solutions to investors and industry leaders.",
    date: "March 25, 2024",
    time: "13:00 GMT",
    duration: "4 hours",
    format: "Virtual",
    category: "AgriTech",
    participants: 342,
    maxParticipants: 1000,
    speakers: ["Panel of Investors"],
    featured: true,
  },
  {
    id: 5,
    title: "Organic Certification and Market Access",
    description: "Organic certification processes, standards, and strategies for accessing premium markets.",
    date: "March 28, 2024",
    time: "11:00 GMT",
    duration: "2 hours",
    format: "Virtual",
    category: "Agribusiness",
    participants: 124,
    maxParticipants: 400,
    speakers: ["Dr. Peter Mwangi", "Sarah Ochieng"],
    featured: false,
  },
  {
    id: 6,
    title: "Youth in Agriculture Summit 2024",
    description: "Three-day summit bringing together young farmers, entrepreneurs, and policymakers.",
    date: "April 5-7, 2024",
    time: "09:00 GMT",
    duration: "3 days",
    format: "In-Person",
    location: "Accra, Ghana",
    category: "Youth",
    participants: 456,
    maxParticipants: 800,
    speakers: ["Multiple Speakers"],
    featured: true,
  },
]

const pastEvents = [
  {
    id: 7,
    title: "Precision Agriculture Technologies Webinar",
    date: "February 28, 2024",
    format: "Virtual",
    category: "AgriTech",
    attendees: 487,
    recording: true,
  },
  {
    id: 8,
    title: "Livestock Management Best Practices",
    date: "February 15, 2024",
    format: "Virtual",
    category: "Livestock",
    attendees: 234,
    recording: true,
  },
]

function EventDateBlock({ date }: { date: string }) {
  const parts = date.split(" ")
  const month = parts[0]?.slice(0, 3)
  const day = parts[1]?.replace(",", "")
  return (
    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-muted flex flex-col items-center justify-center">
      <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{month}</span>
      <span className="text-lg font-bold leading-none">{day}</span>
    </div>
  )
}

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border bg-card">
        <div className="container-wide py-14 lg:py-16">
          <div className="max-w-2xl">
            <Badge variant="outline" className="uppercase tracking-[0.15em] text-xs mb-4">
              Convening
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Events & Roundtables</h1>
            <p className="text-muted-foreground text-[15px] leading-relaxed prose-readable">
              Webinars, workshops, and conferences connecting agricultural stakeholders across Africa. Learn from experts and network with peers.
            </p>
          </div>
        </div>
      </section>

      <div className="container-wide section-padding">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search events..." className="pl-10 h-10" />
          </div>
          <div className="flex gap-3">
            <Select defaultValue="all">
              <SelectTrigger className="w-36 h-10 text-sm"><SelectValue placeholder="Format" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Formats</SelectItem>
                <SelectItem value="virtual">Virtual</SelectItem>
                <SelectItem value="in-person">In-Person</SelectItem>
                <SelectItem value="hybrid">Hybrid</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-36 h-10 text-sm"><SelectValue placeholder="Category" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="climate">Climate</SelectItem>
                <SelectItem value="agritech">AgriTech</SelectItem>
                <SelectItem value="business">Agribusiness</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="bg-transparent p-0 gap-1 mb-8">
            <TabsTrigger value="upcoming" className="rounded-full px-4 data-[state=active]:bg-foreground data-[state=active]:text-background">
              Upcoming
            </TabsTrigger>
            <TabsTrigger value="past" className="rounded-full px-4 data-[state=active]:bg-foreground data-[state=active]:text-background">
              Past Events
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">
            {/* Featured */}
            <div className="mb-10">
              <h2 className="text-xl font-semibold mb-5">Featured events</h2>
              <div className="grid md:grid-cols-2 gap-5">
                {upcomingEvents.filter((e) => e.featured).slice(0, 2).map((event) => (
                  <Link key={event.id} href={`/events/${event.id}`} className="group">
                    <Card className="h-full border-border/60 hover:border-border hover:shadow-sm transition-all duration-200">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2 mb-3 flex-wrap">
                          <Badge variant="outline" className="text-xs font-normal">{event.category}</Badge>
                          <Badge variant="secondary" className="gap-1 text-xs">
                            {event.format === "Virtual" ? <Video className="w-3 h-3" /> : <MapPin className="w-3 h-3" />}
                            {event.format}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg leading-snug group-hover:text-brand-navy transition-colors">
                          {event.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-2 text-sm">{event.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-1.5 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{event.date} at {event.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{event.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-3.5 h-3.5" />
                            <span>{event.participants} / {event.maxParticipants} registered</span>
                          </div>
                        </div>
                        <Button className="w-full bg-brand-navy hover:bg-brand-navy/90 text-white">
                          Register
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* All upcoming */}
            <div>
              <h2 className="text-xl font-semibold mb-5">All upcoming events</h2>
              <div className="space-y-3">
                {upcomingEvents.map((event) => (
                  <Link key={event.id} href={`/events/${event.id}`} className="group block">
                    <Card className="border-border/60 hover:border-border hover:shadow-sm transition-all duration-200">
                      <CardContent className="py-4 px-5">
                        <div className="flex items-start gap-4">
                          <EventDateBlock date={event.date} />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                              <Badge variant="outline" className="text-xs font-normal">{event.category}</Badge>
                              <Badge variant="secondary" className="text-xs gap-1">
                                {event.format === "Virtual" ? <Video className="w-3 h-3" /> : <MapPin className="w-3 h-3" />}
                                {event.format}
                              </Badge>
                            </div>
                            <h3 className="font-semibold text-[15px] group-hover:text-brand-navy transition-colors mb-1">
                              {event.title}
                            </h3>
                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                              <span>{event.time} · {event.duration}</span>
                              {event.location && <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{event.location}</span>}
                              <span>{event.participants} registered</span>
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
          </TabsContent>

          <TabsContent value="past">
            <div className="space-y-3">
              {pastEvents.map((event) => (
                <Card key={event.id} className="border-border/60">
                  <CardContent className="py-4 px-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-4">
                        <EventDateBlock date={event.date} />
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <Badge variant="outline" className="text-xs font-normal">{event.category}</Badge>
                            {event.recording && (
                              <Badge variant="secondary" className="text-xs gap-1">
                                <Play className="w-3 h-3" /> Recording
                              </Badge>
                            )}
                          </div>
                          <h3 className="font-semibold text-[15px] mb-1">{event.title}</h3>
                          <p className="text-xs text-muted-foreground">{event.attendees} attendees</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        {event.recording ? "Watch" : "Summary"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
