import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  MessageSquare,
  BookOpen,
  Calendar,
  AlertCircle,
  Activity,
  Eye,
  ThumbsUp,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Users",
      value: "12,847",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      color: "text-primary",
    },
    {
      title: "Active Discussions",
      value: "1,234",
      change: "+8.2%",
      trend: "up",
      icon: MessageSquare,
      color: "text-accent",
    },
    {
      title: "Resources",
      value: "456",
      change: "+15.3%",
      trend: "up",
      icon: BookOpen,
      color: "text-secondary",
    },
    {
      title: "Upcoming Events",
      value: "23",
      change: "-2.1%",
      trend: "down",
      icon: Calendar,
      color: "text-tertiary",
    },
  ]

  const pendingModeration = [
    {
      id: 1,
      type: "Forum Post",
      title: "New irrigation technique discussion",
      author: "John Kamau",
      date: "2 hours ago",
      reports: 0,
    },
    {
      id: 2,
      type: "Comment",
      title: "Reply to: Climate-smart agriculture practices",
      author: "Amina Hassan",
      date: "4 hours ago",
      reports: 2,
    },
    {
      id: 3,
      type: "Story",
      title: "Success with organic farming in Rwanda",
      author: "Pierre Nkurunziza",
      date: "1 day ago",
      reports: 0,
    },
  ]

  const recentActivity = [
    {
      action: "New user registered",
      user: "Sarah Okonkwo",
      time: "5 minutes ago",
    },
    {
      action: "Event published",
      user: "Admin",
      time: "1 hour ago",
    },
    {
      action: "Resource approved",
      user: "Moderator",
      time: "2 hours ago",
    },
    {
      action: "Forum topic created",
      user: "David Mensah",
      time: "3 hours ago",
    },
  ]

  const topContent = [
    {
      title: "Climate-Smart Agriculture Practices",
      type: "Forum",
      views: 2847,
      engagement: 342,
    },
    {
      title: "From Subsistence to Success",
      type: "Story",
      views: 1923,
      engagement: 287,
    },
    {
      title: "Sustainable Irrigation Workshop",
      type: "Event",
      views: 1654,
      engagement: 156,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-heading text-3xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-muted-foreground mt-1">Manage and monitor the Ag Forum Africa platform</p>
            </div>
            <Button>
              <Activity className="mr-2 h-4 w-4" />
              View Full Analytics
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="flex items-center gap-1 mt-1">
                  {stat.trend === "up" ? (
                    <ArrowUpRight className="h-4 w-4 text-green-600" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 text-red-600" />
                  )}
                  <span className={`text-xs ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                    {stat.change}
                  </span>
                  <span className="text-xs text-muted-foreground">from last month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2 mb-8">
          {/* Pending Moderation */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Pending Moderation</CardTitle>
                  <CardDescription>Content awaiting review</CardDescription>
                </div>
                <Badge variant="destructive">{pendingModeration.length}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingModeration.map((item) => (
                  <div key={item.id} className="flex items-start justify-between border-b pb-4 last:border-0 last:pb-0">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline">{item.type}</Badge>
                        {item.reports > 0 && (
                          <Badge variant="destructive" className="gap-1">
                            <AlertCircle className="h-3 w-3" />
                            {item.reports} reports
                          </Badge>
                        )}
                      </div>
                      <h4 className="font-medium text-foreground text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        by {item.author} • {item.date}
                      </p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button size="sm" variant="outline">
                        Review
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="link" className="w-full mt-4">
                View All Pending Items
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest platform actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 border-b pb-4 last:border-0 last:pb-0">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                    <div className="flex-1">
                      <p className="text-sm text-foreground">{activity.action}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {activity.user} • {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="link" className="w-full mt-4">
                View Activity Log
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Top Content */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Top Performing Content</CardTitle>
            <CardDescription>Most viewed and engaged content this week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topContent.map((content, index) => (
                <div key={index} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="secondary">{content.type}</Badge>
                    </div>
                    <h4 className="font-medium text-foreground">{content.title}</h4>
                  </div>
                  <div className="flex items-center gap-6 ml-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Eye className="h-4 w-4" />
                      <span className="text-sm">{content.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <ThumbsUp className="h-4 w-4" />
                      <span className="text-sm">{content.engagement}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Link href="/admin/users">
            <Card className="hover:bg-accent/50 transition-colors cursor-pointer">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Manage Users</CardTitle>
                <CardDescription>View and moderate user accounts</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/admin/content">
            <Card className="hover:bg-accent/50 transition-colors cursor-pointer">
              <CardHeader>
                <MessageSquare className="h-8 w-8 text-accent mb-2" />
                <CardTitle className="text-lg">Content Moderation</CardTitle>
                <CardDescription>Review forums, comments, and posts</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/admin/resources">
            <Card className="hover:bg-accent/50 transition-colors cursor-pointer">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-secondary mb-2" />
                <CardTitle className="text-lg">Manage Resources</CardTitle>
                <CardDescription>Add and edit knowledge hub content</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/admin/events">
            <Card className="hover:bg-accent/50 transition-colors cursor-pointer">
              <CardHeader>
                <Calendar className="h-8 w-8 text-tertiary mb-2" />
                <CardTitle className="text-lg">Manage Events</CardTitle>
                <CardDescription>Create and moderate events</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
