import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Edit, Trash2, Eye, Users, MapPin, CalendarIcon } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AdminEventsPage() {
  const events = [
    {
      id: 1,
      title: "Climate-Smart Agriculture Summit 2024",
      type: "Conference",
      format: "Hybrid",
      date: "Apr 15, 2024",
      location: "Nairobi, Kenya",
      attendees: 234,
      capacity: 500,
      status: "upcoming",
    },
    {
      id: 2,
      title: "Digital Payment Solutions for Farmers",
      type: "Webinar",
      format: "Virtual",
      date: "Apr 8, 2024",
      location: "Online",
      attendees: 156,
      capacity: 200,
      status: "upcoming",
    },
    {
      id: 3,
      title: "Sustainable Irrigation Workshop",
      type: "Workshop",
      format: "In-Person",
      date: "Apr 5, 2024",
      location: "Accra, Ghana",
      attendees: 45,
      capacity: 50,
      status: "upcoming",
    },
    {
      id: 4,
      title: "AgriTech Startup Pitch Day",
      type: "Networking",
      format: "In-Person",
      date: "Mar 20, 2024",
      location: "Lagos, Nigeria",
      attendees: 89,
      capacity: 100,
      status: "completed",
    },
    {
      id: 5,
      title: "Organic Certification Masterclass",
      type: "Masterclass",
      format: "Virtual",
      date: "Mar 15, 2024",
      location: "Online",
      attendees: 178,
      capacity: 150,
      status: "completed",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-heading text-3xl font-bold text-foreground">Event Management</h1>
              <p className="text-muted-foreground mt-1">Create and manage platform events</p>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create New Event
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <CardTitle>All Events</CardTitle>
                <CardDescription>Manage upcoming and past events</CardDescription>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1 sm:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search events..." className="pl-9" />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-full sm:w-40">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="conference">Conference</SelectItem>
                    <SelectItem value="webinar">Webinar</SelectItem>
                    <SelectItem value="workshop">Workshop</SelectItem>
                    <SelectItem value="masterclass">Masterclass</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-full sm:w-40">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="upcoming">Upcoming</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {events.map((event) => (
                <div key={event.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline">{event.type}</Badge>
                      <Badge variant="secondary">{event.format}</Badge>
                      {event.status === "upcoming" ? (
                        <Badge className="bg-green-600">Upcoming</Badge>
                      ) : (
                        <Badge variant="outline">Completed</Badge>
                      )}
                    </div>
                    <h4 className="font-medium text-foreground mb-1">{event.title}</h4>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <CalendarIcon className="h-3 w-3" />
                        {event.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {event.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {event.attendees}/{event.capacity} attendees
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="text-destructive bg-transparent">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
