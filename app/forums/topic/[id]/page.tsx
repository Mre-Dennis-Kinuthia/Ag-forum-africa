import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { ArrowLeft, ThumbsUp, MessageSquare, Share2, Flag, MoreVertical, Award, CheckCircle2 } from "lucide-react"

const topic = {
  id: 1,
  title: "Best practices for organic pest control in tropical climates",
  author: "Amara Okafor",
  avatar: "AO",
  authorRole: "Expert Farmer",
  authorBadge: "Top Contributor",
  createdAt: "March 10, 2024",
  category: "Crop Management",
  tags: ["organic", "pest-control", "tropical"],
  views: 1203,
  replies: 47,
  content: `I've been farming organically in Nigeria for over 15 years, and I've learned that pest control in tropical climates requires a multi-faceted approach. Here are some strategies that have worked well for me:

**1. Companion Planting**
Intercropping with pest-repelling plants like marigolds, basil, and neem has significantly reduced pest pressure on my main crops. The strong scents confuse and deter many common pests.

**2. Neem-Based Solutions**
Neem oil spray (mixed at 2% concentration) applied weekly has been my go-to for controlling aphids, whiteflies, and mites. It's readily available and affordable across Africa.

**3. Biological Control**
Encouraging natural predators like ladybugs and lacewings has created a balanced ecosystem. I maintain flowering plants around my fields to attract these beneficial insects.

**4. Cultural Practices**
- Crop rotation every season
- Proper spacing to improve air circulation
- Regular removal of infected plant material
- Mulching to suppress soil-borne pests

What methods have worked for you? I'm particularly interested in hearing about solutions for fall armyworm, which has been challenging lately.`,
}

const replies = [
  {
    id: 1,
    author: "Kwame Mensah",
    avatar: "KM",
    authorRole: "Agritech Specialist",
    createdAt: "March 10, 2024",
    likes: 23,
    isAccepted: false,
    content: `Excellent overview, Amara! I'd add that timing is crucial for organic pest control. In my experience working with farmers across Ghana, applying treatments early in the morning or late evening when beneficial insects are less active helps preserve the ecosystem balance.

For fall armyworm specifically, I've seen success with:
- Pheromone traps for monitoring and mass trapping
- Bacillus thuringiensis (Bt) applications during early larval stages
- Push-pull technology using Desmodium and Napier grass`,
  },
  {
    id: 2,
    author: "Grace Wanjiku",
    avatar: "GW",
    authorRole: "Organic Farmer",
    createdAt: "March 11, 2024",
    likes: 15,
    isAccepted: true,
    content: `This is incredibly helpful! I've been struggling with whiteflies on my tomatoes in Kenya. After reading your post, I tried the neem oil spray at 2% concentration, and I'm already seeing improvement after just one week.

One thing I'd add: I've found that mixing neem oil with a small amount of liquid soap (as an emulsifier) helps it stick better to the leaves, especially during our rainy season.`,
  },
  {
    id: 3,
    author: "Ibrahim Yusuf",
    avatar: "IY",
    authorRole: "Member",
    createdAt: "March 12, 2024",
    likes: 8,
    isAccepted: false,
    content: `Thank you for sharing this knowledge! I'm a young farmer just starting out in organic methods. Where do you source your neem oil? I'm in Northern Nigeria and having trouble finding quality organic inputs.`,
  },
]

export default function TopicPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted py-6 border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/forums/category/crop-management"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Crop Management
          </Link>
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <Badge variant="outline">{topic.category}</Badge>
            {topic.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-3xl font-bold mb-2 text-balance">{topic.title}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>{topic.views} views</span>
            <span>{topic.replies} replies</span>
            <span>Posted {topic.createdAt}</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Original Post */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center gap-2">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-primary text-primary-foreground">{topic.avatar}</AvatarFallback>
                </Avatar>
                <Badge variant="secondary" className="text-xs">
                  <Award className="w-3 h-3 mr-1" />
                  {topic.authorBadge}
                </Badge>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">{topic.author}</h3>
                    <p className="text-sm text-muted-foreground">{topic.authorRole}</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
                <div className="prose prose-sm max-w-none mt-4">
                  <div className="whitespace-pre-wrap text-foreground leading-relaxed">{topic.content}</div>
                </div>
                <div className="flex items-center gap-4 mt-6 pt-4 border-t border-border">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <ThumbsUp className="w-4 h-4" />
                    Helpful
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Share2 className="w-4 h-4" />
                    Share
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Flag className="w-4 h-4" />
                    Report
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Replies */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">{topic.replies} Replies</h2>
          <div className="space-y-4">
            {replies.map((reply) => (
              <Card key={reply.id} className={reply.isAccepted ? "border-2 border-primary" : ""}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-primary text-primary-foreground">{reply.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold">{reply.author}</h4>
                            {reply.isAccepted && (
                              <Badge className="bg-primary text-primary-foreground">
                                <CheckCircle2 className="w-3 h-3 mr-1" />
                                Accepted Answer
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{reply.authorRole}</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="prose prose-sm max-w-none mt-3">
                        <p className="text-foreground leading-relaxed whitespace-pre-wrap">{reply.content}</p>
                      </div>
                      <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                        <Button variant="ghost" size="sm" className="gap-2 h-8">
                          <ThumbsUp className="w-4 h-4" />
                          {reply.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-2 h-8">
                          <MessageSquare className="w-4 h-4" />
                          Reply
                        </Button>
                        <span>{reply.createdAt}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Reply Form */}
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-4">Add Your Reply</h3>
            <Textarea
              placeholder="Share your thoughts, experiences, or ask follow-up questions..."
              className="min-h-32 mb-4"
            />
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Be respectful and constructive in your responses</p>
              <Button className="bg-primary hover:bg-primary/90">Post Reply</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
