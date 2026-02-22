import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"
import { ArrowRight, Users, BookOpen, Calendar, MessageSquare, TrendingUp, Sprout, Globe } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/african-farmland-aerial-view-green-fields.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight text-balance">
              Cultivating Africa's Agricultural Future Together
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 leading-relaxed text-pretty">
              Join thousands of farmers, agribusiness leaders, technologists, and policymakers exchanging knowledge and
              driving innovation across the continent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90" asChild>
                <Link href="/register">
                  Join the Community
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/forums">Explore Forums</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">15K+</div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">2.5K+</div>
              <div className="text-sm text-muted-foreground">Discussions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Resources</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">48</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Conversations */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Upcoming Conversations</h2>
              <p className="text-muted-foreground">Join live discussions with experts and peers</p>
            </div>
            <Button variant="ghost" asChild className="hidden sm:flex">
              <Link href="/events">
                View All
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Climate-Smart Agriculture in East Africa",
                date: "March 15, 2024",
                time: "14:00 GMT",
                participants: 156,
                category: "Climate",
              },
              {
                title: "Digital Payment Solutions for Smallholder Farmers",
                date: "March 18, 2024",
                time: "10:00 GMT",
                participants: 203,
                category: "FinTech",
              },
              {
                title: "Sustainable Irrigation Techniques",
                date: "March 22, 2024",
                time: "15:30 GMT",
                participants: 89,
                category: "Water Management",
              },
            ].map((event, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="bg-accent text-accent-foreground">
                      {event.category}
                    </Badge>
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-lg leading-tight text-balance">{event.title}</CardTitle>
                  <CardDescription>
                    {event.date} • {event.time}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{event.participants} registered</span>
                    </div>
                    <Button size="sm" variant="outline">
                      Register
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Topics */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Trending Topics</h2>
              <p className="text-muted-foreground">Hot discussions happening now</p>
            </div>
            <Button variant="ghost" asChild className="hidden sm:flex">
              <Link href="/forums">
                Browse Forums
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Best practices for organic pest control in tropical climates",
                author: "Amara Okafor",
                avatar: "AO",
                replies: 47,
                views: 1203,
                category: "Crop Management",
                trending: true,
              },
              {
                title: "Securing funding for agritech startups in West Africa",
                author: "Kwame Mensah",
                avatar: "KM",
                replies: 89,
                views: 2456,
                category: "Agribusiness",
                trending: true,
              },
              {
                title: "Implementing blockchain for supply chain transparency",
                author: "Fatima Hassan",
                avatar: "FH",
                replies: 34,
                views: 987,
                category: "Technology",
                trending: false,
              },
              {
                title: "Policy recommendations for youth engagement in agriculture",
                author: "Thabo Ndlovu",
                avatar: "TN",
                replies: 62,
                views: 1567,
                category: "Policy",
                trending: false,
              },
            ].map((topic, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-primary text-primary-foreground">{topic.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{topic.category}</Badge>
                        {topic.trending && (
                          <Badge className="bg-secondary text-secondary-foreground">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Trending
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-base leading-tight mb-1 text-balance">
                        <Link href={`/forums/topic/${i}`} className="hover:text-primary transition-colors">
                          {topic.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="text-sm">by {topic.author}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MessageSquare className="w-4 h-4" />
                      <span>{topic.replies} replies</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{topic.views.toLocaleString()} views</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Success Stories</h2>
              <p className="text-muted-foreground">Real impact from our community members</p>
            </div>
            <Button variant="ghost" asChild className="hidden sm:flex">
              <Link href="/stories">
                Read More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "From 2 Acres to 50: A Kenyan Farmer's Journey",
                excerpt:
                  "How community knowledge sharing helped scale a small farm into a thriving agribusiness employing 30 people.",
                image: "/kenyan-farmer-in-field-success.jpg",
                author: "Grace Wanjiku",
                category: "Scaling",
              },
              {
                title: "Solar-Powered Irrigation Transforms Nigerian Village",
                excerpt:
                  "A tech solution discovered through forum discussions brings year-round farming to drought-prone region.",
                image: "/solar-irrigation-system-africa.jpg",
                author: "Ibrahim Yusuf",
                category: "Technology",
              },
              {
                title: "Youth Cooperative Revitalizes Cocoa Production",
                excerpt:
                  "Young farmers in Ghana use modern techniques learned from the platform to triple cocoa yields.",
                image: "/young-african-farmers-cocoa-harvest.jpg",
                author: "Ama Boateng",
                category: "Youth",
              },
            ].map((story, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {story.category}
                  </Badge>
                  <CardTitle className="text-lg leading-tight text-balance">{story.title}</CardTitle>
                  <CardDescription className="line-clamp-2 text-pretty">{story.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">by {story.author}</span>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/stories/${i}`}>Read More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Join Ag Forum Africa?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Connect with a vibrant community dedicated to transforming African agriculture through collaboration and
              innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MessageSquare,
                title: "Expert Forums",
                description: "Engage in discussions with agricultural experts and peers across Africa",
              },
              {
                icon: BookOpen,
                title: "Knowledge Hub",
                description: "Access research, guides, and best practices for modern farming",
              },
              {
                icon: Calendar,
                title: "Live Events",
                description: "Join webinars, roundtables, and virtual conferences",
              },
              {
                icon: Globe,
                title: "Pan-African Network",
                description: "Connect with stakeholders from 48+ countries across the continent",
              },
            ].map((feature, i) => (
              <Card key={i} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription className="text-pretty">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sprout className="w-16 h-16 mx-auto mb-6 text-secondary" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Ready to Grow With Us?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 text-pretty">
            Join thousands of agricultural innovators shaping the future of farming in Africa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90" asChild>
              <Link href="/register">Create Free Account</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
