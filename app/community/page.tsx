import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Search, MapPin, Award } from "lucide-react"

const topContributors = [
  {
    id: 1,
    name: "Dr. Amara Okafor",
    avatar: "AO",
    role: "Climate Scientist & Agricultural Expert",
    location: "Lagos, Nigeria",
    expertise: ["Climate", "Organic Farming", "Pest Control"],
    contributions: 342,
    followers: 1247,
    posts: 156,
    reputation: 9850,
    badge: "Expert",
    verified: true,
  },
  {
    id: 2,
    name: "Kwame Mensah",
    avatar: "KM",
    role: "AgriTech Specialist",
    location: "Accra, Ghana",
    expertise: ["AgriTech", "Innovation", "Funding"],
    contributions: 289,
    followers: 987,
    posts: 134,
    reputation: 8420,
    badge: "Top Contributor",
    verified: true,
  },
  {
    id: 3,
    name: "Grace Wanjiku",
    avatar: "GW",
    role: "Farmer & Entrepreneur",
    location: "Nairobi, Kenya",
    expertise: ["Scaling", "Organic Farming", "Business"],
    contributions: 267,
    followers: 1534,
    posts: 98,
    reputation: 7890,
    badge: "Top Contributor",
    verified: true,
  },
]

const members = [
  {
    id: 4,
    name: "Ibrahim Yusuf",
    avatar: "IY",
    role: "Community Leader",
    location: "Kano, Nigeria",
    expertise: ["Irrigation", "Community Development"],
    contributions: 198,
    followers: 654,
    posts: 87,
    reputation: 5670,
    badge: "Active Member",
    verified: false,
  },
  {
    id: 5,
    name: "Fatima Hassan",
    avatar: "FH",
    role: "Blockchain Developer",
    location: "Cairo, Egypt",
    expertise: ["Blockchain", "Supply Chain", "Technology"],
    contributions: 176,
    followers: 543,
    posts: 76,
    reputation: 4980,
    badge: "Active Member",
    verified: false,
  },
  {
    id: 6,
    name: "Thabo Ndlovu",
    avatar: "TN",
    role: "AgriTech Developer",
    location: "Johannesburg, South Africa",
    expertise: ["Mobile Apps", "Market Access", "Technology"],
    contributions: 154,
    followers: 432,
    posts: 65,
    reputation: 4320,
    badge: "Active Member",
    verified: false,
  },
  {
    id: 7,
    name: "Ama Boateng",
    avatar: "AB",
    role: "Cooperative Leader",
    location: "Kumasi, Ghana",
    expertise: ["Youth", "Cocoa", "Cooperatives"],
    contributions: 143,
    followers: 398,
    posts: 59,
    reputation: 3890,
    badge: "Member",
    verified: false,
  },
  {
    id: 8,
    name: "Peter Mwangi",
    avatar: "PM",
    role: "Agricultural Extension Officer",
    location: "Mombasa, Kenya",
    expertise: ["Extension Services", "Training", "Crop Management"],
    contributions: 132,
    followers: 367,
    posts: 54,
    reputation: 3560,
    badge: "Member",
    verified: false,
  },
]

const countries = [
  { name: "Nigeria", members: 3421 },
  { name: "Kenya", members: 2847 },
  { name: "Ghana", members: 2156 },
  { name: "South Africa", members: 1923 },
  { name: "Ethiopia", members: 1654 },
  { name: "Tanzania", members: 1432 },
]

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Community</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl text-pretty">
            Connect with 15,000+ agricultural stakeholders across 48 African countries. Share knowledge, collaborate,
            and grow together.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-1">15,234</div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-1">48</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-1">2,547</div>
              <div className="text-sm text-muted-foreground">Discussions</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-1">8,932</div>
              <div className="text-sm text-muted-foreground">Connections Made</div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input placeholder="Search members by name, expertise, or location..." className="pl-10" />
          </div>
          <div className="flex flex-wrap gap-3">
            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Countries</SelectItem>
                <SelectItem value="nigeria">Nigeria</SelectItem>
                <SelectItem value="kenya">Kenya</SelectItem>
                <SelectItem value="ghana">Ghana</SelectItem>
                <SelectItem value="south-africa">South Africa</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Expertise" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Expertise</SelectItem>
                <SelectItem value="climate">Climate</SelectItem>
                <SelectItem value="agritech">AgriTech</SelectItem>
                <SelectItem value="business">Agribusiness</SelectItem>
                <SelectItem value="livestock">Livestock</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="reputation">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="reputation">Top Reputation</SelectItem>
                <SelectItem value="contributions">Most Contributions</SelectItem>
                <SelectItem value="followers">Most Followers</SelectItem>
                <SelectItem value="recent">Recently Joined</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="members" className="w-full">
          <TabsList className="w-full justify-start mb-6">
            <TabsTrigger value="members">All Members</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            <TabsTrigger value="countries">By Country</TabsTrigger>
          </TabsList>

          {/* All Members */}
          <TabsContent value="members">
            {/* Top Contributors */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Top Contributors</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topContributors.map((member) => (
                  <Card key={member.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <Avatar className="w-16 h-16">
                          <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                            {member.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <Link href={`/community/profile/${member.id}`}>
                              <h3 className="font-semibold text-lg hover:text-primary transition-colors">
                                {member.name}
                              </h3>
                            </Link>
                            {member.verified && <Award className="w-4 h-4 text-secondary" />}
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <MapPin className="w-3 h-3" />
                            <span>{member.location}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {member.expertise.map((exp) => (
                          <Badge key={exp} variant="secondary" className="text-xs">
                            {exp}
                          </Badge>
                        ))}
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center text-sm mb-4">
                        <div>
                          <div className="font-semibold text-primary">{member.contributions}</div>
                          <div className="text-xs text-muted-foreground">Posts</div>
                        </div>
                        <div>
                          <div className="font-semibold text-primary">{member.followers}</div>
                          <div className="text-xs text-muted-foreground">Followers</div>
                        </div>
                        <div>
                          <div className="font-semibold text-primary">{member.reputation}</div>
                          <div className="text-xs text-muted-foreground">Reputation</div>
                        </div>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                        <Link href={`/community/profile/${member.id}`}>View Profile</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* All Members */}
            <div>
              <h2 className="text-2xl font-bold mb-4">All Members</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {members.map((member) => (
                  <Card key={member.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex flex-col items-center text-center">
                        <Avatar className="w-16 h-16 mb-3">
                          <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                            {member.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <Link href={`/community/profile/${member.id}`}>
                          <h4 className="font-semibold hover:text-primary transition-colors mb-1">{member.name}</h4>
                        </Link>
                        <p className="text-xs text-muted-foreground mb-2">{member.role}</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                          <MapPin className="w-3 h-3" />
                          <span>{member.location}</span>
                        </div>
                        <div className="flex gap-3 text-xs text-muted-foreground mb-3">
                          <div>
                            <span className="font-semibold text-foreground">{member.posts}</span> posts
                          </div>
                          <div>
                            <span className="font-semibold text-foreground">{member.followers}</span> followers
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          Follow
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Leaderboard */}
          <TabsContent value="leaderboard">
            <Card>
              <CardHeader>
                <CardTitle>Top Contributors This Month</CardTitle>
                <CardDescription>
                  Members ranked by contributions, helpful answers, and community engagement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[...topContributors, ...members.slice(0, 2)].map((member, index) => (
                    <div
                      key={member.id}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors"
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">
                        {index + 1}
                      </div>
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-primary text-primary-foreground">{member.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <Link href={`/community/profile/${member.id}`}>
                          <h4 className="font-semibold hover:text-primary transition-colors">{member.name}</h4>
                        </Link>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-primary">{member.reputation}</div>
                        <div className="text-xs text-muted-foreground">reputation</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">{member.contributions}</div>
                        <div className="text-xs text-muted-foreground">contributions</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* By Country */}
          <TabsContent value="countries">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {countries.map((country) => (
                <Card key={country.name} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{country.name}</span>
                      <Badge variant="secondary">{country.members.toLocaleString()}</Badge>
                    </CardTitle>
                    <CardDescription>Active members from {country.name}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full bg-transparent">
                      View Members
                    </Button>
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
