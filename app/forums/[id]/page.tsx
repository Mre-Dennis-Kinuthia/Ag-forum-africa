import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Users, Video, Share2, Bookmark, Download, CheckCircle2 } from "lucide-react"

const event = {
  id: 1,
  title: "Climate-Smart Agriculture in East Africa",
  description:
    "Join leading agricultural experts, researchers, and practitioners for an in-depth discussion on climate-smart agriculture practices specifically tailored for East African farming conditions. This comprehensive session will cover adaptive farming techniques, selection and cultivation of drought-resistant crop varieties, water conservation strategies, and building long-term climate resilience in agricultural systems.",
  date: "March 15, 2024",
  time: "14:00 GMT",
  endTime: "16:00 GMT",
  duration: "2 hours",
  format: "Virtual",
  category: "Climate",
  participants: 156,
  maxParticipants: 500,
  image: "/climate-smart-agriculture-event.jpg",
  organizer: "African Climate Research Institute",
  speakers: [
    {
      name: "Dr. Amara Okafor",
      title: "Climate Scientist & Agricultural Expert",
      avatar: "AO",
      bio: "Leading researcher in climate adaptation strategies for African agriculture with 20+ years of experience.",
    },
    {
      name: "Prof. John Kamau",
      title: "Sustainable Agriculture Specialist",
      avatar: "JK",
      bio: "Professor of Agricultural Sciences focusing on drought-resistant crops and water management.",
    },
  ],
  agenda: [
    { time: "14:00 - 14:15", topic: "Welcome and Introduction", speaker: "Moderator" },
    {
      time: "14:15 - 14:45",
      topic: "Climate Patterns and Agricultural Impact in East Africa",
      speaker: "Dr. Amara Okafor",
    },
    { time: "14:45 - 15:15", topic: "Drought-Resistant Crop Varieties and Cultivation", speaker: "Prof. John Kamau" },
    { time: "15:15 - 15:45", topic: "Water Conservation and Management Strategies", speaker: "Dr. Amara Okafor" },
    { time: "15:45 - 16:00", topic: "Q&A and Discussion", speaker: "All Speakers" },
  ],
  learningOutcomes: [
    "Understand climate change impacts on East African agriculture",
    "Learn to select and cultivate drought-resistant crop varieties",
    "Implement effective water conservation techniques",
    "Develop climate resilience strategies for your farm",
    "Connect with experts and peers facing similar challenges",
  ],
  requirements: ["Stable internet connection", "Zoom application (link will be sent after registration)"],
}

export default function EventDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted py-6 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/forums"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Forums
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Event Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <Badge variant="outline">{event.category}</Badge>
                <Badge variant="secondary" className="gap-1">
                  <Video className="w-3 h-3" />
                  {event.format}
                </Badge>
              </div>
              <h1 className="text-3xl font-bold mb-4 text-balance">{event.title}</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>
                    {event.participants} / {event.maxParticipants} registered
                  </span>
                </div>
                <span>Organized by {event.organizer}</span>
              </div>
            </div>

            {/* Event Image */}
            <div className="aspect-video relative overflow-hidden rounded-lg bg-muted mb-6">
              <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
            </div>

            {/* Description */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>About this forum</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">{event.description}</p>
              </CardContent>
            </Card>

            {/* Speakers */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Featured Speakers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {event.speakers.map((speaker, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <Avatar className="w-16 h-16">
                        <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                          {speaker.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-lg">{speaker.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{speaker.title}</p>
                        <p className="text-sm text-foreground leading-relaxed">{speaker.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Agenda */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Agenda</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {event.agenda.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="text-sm font-medium text-muted-foreground w-32 flex-shrink-0">{item.time}</div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium mb-1">{item.topic}</h4>
                        <p className="text-sm text-muted-foreground">{item.speaker}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Learning Outcomes */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>What You'll Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {event.learningOutcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {event.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                      <span className="text-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              {/* Event Details Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Forum details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">{event.date}</div>
                      <div className="text-sm text-muted-foreground">
                        {event.time} - {event.endTime}
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Duration</div>
                      <div className="text-sm text-muted-foreground">{event.duration}</div>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-3">
                    <Video className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Format</div>
                      <div className="text-sm text-muted-foreground">{event.format} Event</div>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Participants</div>
                      <div className="text-sm text-muted-foreground">
                        {event.participants} registered, {event.maxParticipants - event.participants} spots left
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Registration Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Join this forum</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization (Optional)</Label>
                    <Input id="organization" placeholder="Your organization" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="questions">Questions for Speakers (Optional)</Label>
                    <Textarea id="questions" placeholder="Any questions you'd like addressed?" className="min-h-20" />
                  </div>
                  <div className="flex items-start gap-2">
                    <Checkbox id="updates" />
                    <Label htmlFor="updates" className="text-sm leading-relaxed cursor-pointer">
                      Send me updates about this forum and upcoming sessions
                    </Label>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                    Register Now (Free)
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1 bg-transparent" size="sm">
                      <Bookmark className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent" size="sm">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Add to Calendar */}
              <Card>
                <CardContent className="p-4">
                  <Button variant="outline" className="w-full bg-transparent gap-2">
                    <Download className="w-4 h-4" />
                    Add to Calendar
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
