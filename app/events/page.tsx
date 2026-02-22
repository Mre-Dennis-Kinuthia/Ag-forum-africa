import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Search, Calendar, MapPin, Users, Video, Clock } from "lucide-react"

const upcomingEvents = [
  {
    id: 1,
    title: "Climate-Smart Agriculture in East Africa",
    description:
      "Join experts discussing adaptive farming techniques, drought-resistant crops, and climate resilience strategies for East African farmers.",
    date: "March 15, 2024",
    time: "14:00 GMT",
    duration: "2 hours",
    format: "Virtual",
    category: "Climate",
    participants: 156,
    maxParticipants: 500,
    speakers: ["Dr. Amara Okafor", "Prof. John Kamau"],
    image: "/climate-smart-agriculture-event.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Digital Payment Solutions for Smallholder Farmers",
    description:
      "Explore mobile money, digital wallets, and fintech innovations making financial services accessible to rural farming communities.",
    date: "March 18, 2024",
    time: "10:00 GMT",
    duration: "1.5 hours",
    format: "Virtual",
    category: "FinTech",
    participants: 203,
    maxParticipants: 300,
    speakers: ["Fatima Hassan", "Kwame Mensah"],
    image: "/digital-payment-solutions-event.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "Sustainable Irrigation Techniques Workshop",
    description:
      "Hands-on workshop covering drip irrigation, rainwater harvesting, and efficient water management for sustainable farming.",
    date: "March 22, 2024",
    time: "15:30 GMT",
    duration: "3 hours",
    format: "Hybrid",
    location: "Nairobi, Kenya",
    category: "Water Management",
    participants: 89,
    maxParticipants: 150,
    speakers: ["Grace Wanjiku", "Ibrahim Yusuf"],
    image: "/sustainable-irrigation-workshop.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "AgriTech Startup Pitch Competition",
    description:
      "Watch innovative agritech startups pitch their solutions to investors and industry leaders. Network with entrepreneurs and investors.",
    date: "March 25, 2024",
    time: "13:00 GMT",
    duration: "4 hours",
    format: "Virtual",
    category: "AgriTech",
    participants: 342,
    maxParticipants: 1000,
    speakers: ["Panel of Investors", "Industry Leaders"],
    image: "/agritech-startup-pitch.jpg",
    featured: true,
  },
  {
    id: 5,
    title: "Organic Certification and Market Access",
    description:
      "Learn about organic certification processes, standards, and strategies for accessing premium markets for organic produce.",
    date: "March 28, 2024",
    time: "11:00 GMT",
    duration: "2 hours",
    format: "Virtual",
    category: "Agribusiness",
    participants: 124,
    maxParticipants: 400,
    speakers: ["Dr. Peter Mwangi", "Sarah Ochieng"],
    image: "/organic-certification-event.jpg",
    featured: false,
  },
  {
    id: 6,
    title: "Youth in Agriculture Summit 2024",
    description:
      "Three-day summit bringing together young farmers, entrepreneurs, and policymakers to discuss youth engagement in agriculture.",
    date: "April 5-7, 2024",
    time: "09:00 GMT",
    duration: "3 days",
    format: "In-Person",
    location: "Accra, Ghana",
    category: "Youth",
    participants: 456,
    maxParticipants: 800,
    speakers: ["Multiple Speakers"],
    image: "/youth-agriculture-summit.jpg",
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

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Events & Roundtables</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl text-pretty">
            Join webinars, workshops, and conferences connecting agricultural stakeholders across Africa. Learn from
            experts and network with peers.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input placeholder="Search events..." className="pl-10" />
          </div>
          <div className="flex flex-wrap gap-3">
            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Formats</SelectItem>
                <SelectItem value="virtual">Virtual</SelectItem>
                <SelectItem value="in-person">In-Person</SelectItem>
                <SelectItem value="hybrid">Hybrid</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="climate">Climate</SelectItem>
                <SelectItem value="agritech">AgriTech</SelectItem>
                <SelectItem value="business">Agribusiness</SelectItem>
                <SelectItem value="fintech">FinTech</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="upcoming">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="this-week">This Week</SelectItem>
                <SelectItem value="this-month">This Month</SelectItem>
                <SelectItem value="past">Past Events</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="w-full justify-start mb-6">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
            <TabsTrigger value="calendar">Calendar View</TabsTrigger>
          </TabsList>

          {/* Upcoming Events */}
          <TabsContent value="upcoming">
            {/* Featured Events */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Featured Events</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {upcomingEvents
                  .filter((e) => e.featured)
                  .slice(0, 2)
                  .map((event) => (
                    <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-video relative overflow-hidden bg-muted">
                        <img
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                        <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground">
                          Featured
                        </Badge>
                      </div>
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <Badge variant="outline">{event.category}</Badge>
                          <Badge variant="secondary" className="gap-1">
                            {event.format === "Virtual" ? (
                              <Video className="w-3 h-3" />
                            ) : (
                              <MapPin className="w-3 h-3" />
                            )}
                            {event.format}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl leading-tight text-balance">{event.title}</CardTitle>
                        <CardDescription className="line-clamp-2 text-pretty">{event.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>
                              {event.date} at {event.time}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{event.duration}</span>
                          </div>
                          {event.location && (
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>{event.location}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span>
                              {event.participants} / {event.maxParticipants} registered
                            </span>
                          </div>
                        </div>
                        <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                          <Link href={`/events/${event.id}`}>View Details & Register</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>

            {/* All Upcoming Events */}
            <div>
              <h2 className="text-2xl font-bold mb-4">All Upcoming Events</h2>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-48 aspect-video md:aspect-square relative overflow-hidden rounded-lg bg-muted flex-shrink-0">
                          <img
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <Badge variant="outline">{event.category}</Badge>
                            <Badge variant="secondary" className="gap-1">
                              {event.format === "Virtual" ? (
                                <Video className="w-3 h-3" />
                              ) : (
                                <MapPin className="w-3 h-3" />
                              )}
                              {event.format}
                            </Badge>
                            {event.featured && (
                              <Badge className="bg-secondary text-secondary-foreground">Featured</Badge>
                            )}
                          </div>
                          <Link href={`/events/${event.id}`}>
                            <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors text-balance">
                              {event.title}
                            </h3>
                          </Link>
                          <p className="text-muted-foreground mb-4 line-clamp-2 text-pretty">{event.description}</p>
                          <div className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>
                                {event.date} at {event.time}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              <span>{event.duration}</span>
                            </div>
                            {event.location && (
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>{event.location}</span>
                              </div>
                            )}
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4" />
                              <span>
                                {event.participants} / {event.maxParticipants} registered
                              </span>
                            </div>
                          </div>
                          <Button asChild>
                            <Link href={`/events/${event.id}`}>Register Now</Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Past Events */}
          <TabsContent value="past">
            <div className="space-y-4">
              {pastEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <Badge variant="outline">{event.category}</Badge>
                          <Badge variant="secondary">{event.format}</Badge>
                          {event.recording && (
                            <Badge className="bg-accent text-accent-foreground">Recording Available</Badge>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span>{event.attendees} attendees</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" className="bg-transparent">
                        {event.recording ? "Watch Recording" : "View Summary"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Calendar View */}
          <TabsContent value="calendar">
            <Card>
              <CardContent className="p-8 text-center">
                <Calendar className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">Calendar View</h3>
                <p className="text-muted-foreground mb-4">
                  Interactive calendar view coming soon. For now, browse events in list view.
                </p>
                <Button variant="outline" className="bg-transparent">
                  Back to List View
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
