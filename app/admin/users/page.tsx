import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MoreVertical, Shield, Ban, Mail } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function AdminUsersPage() {
  const users = [
    {
      id: 1,
      name: "Amina Hassan",
      email: "amina.hassan@email.com",
      role: "Farmer",
      country: "Kenya",
      joined: "Jan 2024",
      posts: 45,
      status: "active",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "John Kamau",
      email: "john.kamau@email.com",
      role: "Agribusiness",
      country: "Kenya",
      joined: "Feb 2024",
      posts: 32,
      status: "active",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Sarah Okonkwo",
      email: "sarah.okonkwo@email.com",
      role: "Technologist",
      country: "Nigeria",
      joined: "Mar 2024",
      posts: 28,
      status: "active",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "David Mensah",
      email: "david.mensah@email.com",
      role: "Policymaker",
      country: "Ghana",
      joined: "Dec 2023",
      posts: 67,
      status: "moderator",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      name: "Grace Mwangi",
      email: "grace.mwangi@email.com",
      role: "Farmer",
      country: "Tanzania",
      joined: "Jan 2024",
      posts: 12,
      status: "suspended",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <h1 className="font-heading text-3xl font-bold text-foreground">User Management</h1>
          <p className="text-muted-foreground mt-1">Manage and moderate platform users</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <CardTitle>All Users</CardTitle>
                <CardDescription>View and manage user accounts</CardDescription>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1 sm:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search users..." className="pl-9" />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-full sm:w-40">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="moderator">Moderator</SelectItem>
                    <SelectItem value="suspended">Suspended</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {users.map((user) => (
                <div key={user.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center gap-4 flex-1">
                    <Avatar>
                      <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                      <AvatarFallback>
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-foreground">{user.name}</h4>
                        {user.status === "moderator" && (
                          <Badge variant="secondary" className="gap-1">
                            <Shield className="h-3 w-3" />
                            Moderator
                          </Badge>
                        )}
                        {user.status === "suspended" && <Badge variant="destructive">Suspended</Badge>}
                      </div>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                      <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                        <span>{user.role}</span>
                        <span>•</span>
                        <span>{user.country}</span>
                        <span>•</span>
                        <span>Joined {user.joined}</span>
                        <span>•</span>
                        <span>{user.posts} posts</span>
                      </div>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Mail className="mr-2 h-4 w-4" />
                        Send Message
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Shield className="mr-2 h-4 w-4" />
                        Make Moderator
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Ban className="mr-2 h-4 w-4" />
                        Suspend User
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
