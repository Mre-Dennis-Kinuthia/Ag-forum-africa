import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import {
  ArrowLeft,
  MapPin,
  Award,
  MessageSquare,
  Users,
  Link2,
  Mail,
  Share2,
  MoreVertical,
  Heart,
  Eye,
} from "lucide-react"

const profile = {
  id: 1,
  name: "Dr. Amara Okafor",
  avatar: "AO",
  role: "Climate Scientist & Agricultural Expert",
  location: "Lagos, Nigeria",
  joinedDate: "January 2022",
  bio: "Climate scientist with over 20 years of experience in agricultural adaptation strategies for African farming systems. Passionate about empowering smallholder farmers with knowledge and tools to build climate resilience. Active researcher, mentor, and community advocate.",
  expertise: ["Climate Change", "Organic Farming", "Pest Control", "Water Management", "Soil Health"],
  contributions: 342,
  followers: 1247,
  following: 234,
  posts: 156,
  reputation: 9850,
  badge: "Expert",
  verified: true,
  website: "www.climateagafrica.org",
  email: "amara.okafor@example.com",
  achievements: [
    { title: "Top Contributor 2023", icon: "🏆" },
    { title: "100+ Helpful Answers", icon: "⭐" },
    { title: "Community Leader", icon: "👑" },
    { title: "Early Adopter", icon: "🚀" },
  ],
}

const recentPosts = [
  {
    id: 1,
    title: "Best practices for organic pest control in tropical climates",
    type: "Discussion",
    category: "Crop Management",
    replies: 47,
    views: 1203,
    likes: 89,
    date: "2 days ago",
  },
  {
    id: 2,
    title: "Climate adaptation strategies for East African farmers",
    type: "Article",
    category: "Climate",
    replies: 23,
    views: 876,
    likes: 67,
    date: "1 week ago",
  },
  {
    id: 3,
    title: "Water conservation techniques for drought-prone regions",
    type: "Discussion",
    category: "Water Management",
    replies: 34,
    views: 654,
    likes: 52,
    date: "2 weeks ago",
  },
]

const followers = [
  { id: 1, name: "Kwame Mensah", avatar: "KM", role: "AgriTech Specialist" },
  { id: 2, name: "Grace Wanjiku", avatar: "GW", role: "Farmer & Entrepreneur" },
  { id: 3, name: "Ibrahim Yusuf", avatar: "IY", role: "Community Leader" },
  { id: 4, name: "Fatima Hassan", avatar: "FH", role: "Blockchain Developer" },
]

export default function ProfilePage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted py-6 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/community"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Community
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              {/* Profile Card */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="w-24 h-24 mb-4">
                      <AvatarFallback className="bg-primary text-primary-foreground text-3xl">
                        {profile.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex items-center gap-2 mb-2">
                      <h2 className="text-2xl font-bold">{profile.name}</h2>
                      {profile.verified && <Award className="w-5 h-5 text-secondary" />}
                    </div>
                    <Badge className="mb-3 bg-secondary text-secondary-foreground">{profile.badge}</Badge>
                    <p className="text-sm text-muted-foreground mb-4">{profile.role}</p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-6">
                      <MapPin className="w-4 h-4" />
                      <span>{profile.location}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 w-full mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{profile.posts}</div>
                        <div className="text-xs text-muted-foreground">Posts</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{profile.followers}</div>
                        <div className="text-xs text-muted-foreground">Followers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{profile.following}</div>
                        <div className="text-xs text-muted-foreground">Following</div>
                      </div>
                    </div>
                    <div className="flex gap-2 w-full">
                      <Button className="flex-1 bg-primary hover:bg-primary/90">
                        <Users className="w-4 h-4 mr-2" />
                        Follow
                      </Button>
                      <Button variant="outline" className="flex-1 bg-transparent">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Message
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Stats Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Community Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Reputation</span>
                    <span className="font-semibold text-primary">{profile.reputation}</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Contributions</span>
                    <span className="font-semibold">{profile.contributions}</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Member Since</span>
                    <span className="font-semibold">{profile.joinedDate}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a
                    href={`https://${profile.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                  >
                    <Link2 className="w-4 h-4" />
                    <span>{profile.website}</span>
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{profile.email}</span>
                  </a>
                  <Button variant="outline" className="w-full bg-transparent gap-2" size="sm">
                    <Share2 className="w-4 h-4" />
                    Share Profile
                  </Button>
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {profile.achievements.map((achievement, index) => (
                      <div key={index} className="flex flex-col items-center p-3 rounded-lg bg-muted text-center">
                        <span className="text-2xl mb-1">{achievement.icon}</span>
                        <span className="text-xs font-medium">{achievement.title}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* About */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed mb-4">{profile.bio}</p>
                <div>
                  <h4 className="font-semibold mb-3">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {profile.expertise.map((exp) => (
                      <Badge key={exp} variant="secondary">
                        {exp}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Activity Tabs */}
            <Tabs defaultValue="posts" className="w-full">
              <TabsList className="w-full justify-start mb-6">
                <TabsTrigger value="posts">Posts ({profile.posts})</TabsTrigger>
                <TabsTrigger value="followers">Followers ({profile.followers})</TabsTrigger>
                <TabsTrigger value="following">Following ({profile.following})</TabsTrigger>
              </TabsList>

              {/* Posts */}
              <TabsContent value="posts">
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <Card key={post.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline">{post.category}</Badge>
                              <Badge variant="secondary">{post.type}</Badge>
                            </div>
                            <Link href={`/forums/topic/${post.id}`}>
                              <h3 className="font-semibold text-lg hover:text-primary transition-colors mb-2 text-balance">
                                {post.title}
                              </h3>
                            </Link>
                          </div>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MessageSquare className="w-4 h-4" />
                            <span>{post.replies} replies</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{post.views} views</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            <span>{post.likes} likes</span>
                          </div>
                          <span className="ml-auto">{post.date}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Followers */}
              <TabsContent value="followers">
                <div className="grid md:grid-cols-2 gap-4">
                  {followers.map((follower) => (
                    <Card key={follower.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-12 h-12">
                            <AvatarFallback className="bg-primary text-primary-foreground">
                              {follower.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <Link href={`/community/profile/${follower.id}`}>
                              <h4 className="font-semibold hover:text-primary transition-colors">{follower.name}</h4>
                            </Link>
                            <p className="text-sm text-muted-foreground">{follower.role}</p>
                          </div>
                          <Button variant="outline" size="sm" className="bg-transparent">
                            Follow
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Following */}
              <TabsContent value="following">
                <div className="grid md:grid-cols-2 gap-4">
                  {followers.map((follower) => (
                    <Card key={follower.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-12 h-12">
                            <AvatarFallback className="bg-primary text-primary-foreground">
                              {follower.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <Link href={`/community/profile/${follower.id}`}>
                              <h4 className="font-semibold hover:text-primary transition-colors">{follower.name}</h4>
                            </Link>
                            <p className="text-sm text-muted-foreground">{follower.role}</p>
                          </div>
                          <Button variant="outline" size="sm" className="bg-transparent">
                            Following
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
      </div>
    </div>
  )
}
