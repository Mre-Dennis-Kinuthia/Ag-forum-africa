import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { ArrowLeft, Clock, Eye, Heart, Share2, Bookmark, MessageSquare } from "lucide-react"

const story = {
  id: 1,
  title: "From 2 Acres to 50: A Kenyan Farmer's Journey",
  category: "Scaling",
  author: "Grace Wanjiku",
  authorAvatar: "GW",
  authorRole: "Farmer & Entrepreneur",
  authorBio:
    "Grace Wanjiku is a pioneering farmer and entrepreneur from rural Kenya who has transformed her small farm into a thriving agribusiness. She is passionate about sharing knowledge and empowering other smallholder farmers.",
  publishedDate: "March 1, 2024",
  readTime: "8 min read",
  views: 3421,
  likes: 287,
  image: "/kenyan-farmer-success-story.jpg",
  tags: ["scaling", "organic-farming", "kenya", "success"],
  content: `
Grace Wanjiku's story is one of determination, community support, and the transformative power of knowledge sharing. What started as a modest 2-acre farm in rural Kenya has grown into a 50-acre agribusiness employing 30 people and serving as a model for sustainable farming in the region.

## The Beginning

In 2018, Grace inherited 2 acres of land from her parents. With limited resources and traditional farming knowledge, she struggled to make the farm profitable. "I was barely breaking even," Grace recalls. "I knew there had to be a better way, but I didn't know where to start."

## Discovery and Learning

Everything changed when Grace discovered Ag Forum Africa through a local agricultural extension officer. "I started reading the forums every evening after work in the fields," she says. "I learned about crop rotation, organic pest control, and modern farming techniques I had never heard of before."

Through the platform's Knowledge Hub, Grace accessed guides on:
- Organic farming certification
- Crop diversification strategies
- Water conservation techniques
- Market access and value chain development

## Implementing Change

Armed with new knowledge, Grace began transforming her farm:

**Year 1 (2019):** She implemented crop rotation and companion planting, reducing pest pressure by 60% without chemical pesticides. Her yields increased by 40%.

**Year 2 (2020):** Grace obtained organic certification and connected with premium buyers through contacts made on the platform. Her income doubled.

**Year 3 (2021):** With increased profits, she leased an additional 10 acres and hired her first three employees. She also installed a drip irrigation system based on recommendations from the community.

**Year 4 (2022):** Grace expanded to 30 acres and began mentoring other farmers in her region, sharing the knowledge she had gained.

**Year 5 (2023):** Her operation reached 50 acres with 30 employees. She established a processing facility to add value to her produce.

## The Impact

Today, Grace's farm produces organic vegetables, fruits, and herbs for both local and export markets. But the impact extends far beyond her own success:

- **Employment:** 30 full-time jobs created in a rural area with limited opportunities
- **Knowledge Transfer:** Over 200 farmers trained through workshops Grace organizes
- **Community Development:** Profits reinvested in local schools and healthcare facilities
- **Environmental Impact:** 50 acres managed using sustainable, organic practices

## Lessons Learned

Grace shares key insights from her journey:

1. **Start Small, Think Big:** "Don't be afraid to start with what you have. Focus on doing it well, and growth will follow."

2. **Invest in Learning:** "The knowledge I gained from the community was more valuable than any financial investment. Education is the foundation of success."

3. **Build Relationships:** "The connections I made through the platform opened doors I didn't even know existed. Network actively and genuinely."

4. **Give Back:** "Success means nothing if you don't help others along the way. Mentoring other farmers has been the most rewarding part of my journey."

5. **Embrace Technology:** "Modern farming techniques and technology aren't just for large commercial farms. Smallholders can benefit tremendously."

## Looking Forward

Grace's vision extends beyond her own farm. She's working with local government and NGOs to establish a farmer training center that will serve her entire region. "I want every farmer to have access to the knowledge and support that transformed my life," she says.

Her story demonstrates that with the right knowledge, community support, and determination, smallholder farmers can achieve remarkable success while maintaining sustainable practices and contributing to their communities.

## Connect with Grace

Grace is active on Ag Forum Africa, regularly sharing updates and answering questions from other farmers. She also hosts quarterly workshops at her farm for anyone interested in learning about organic farming and agribusiness development.

*This story is part of our ongoing series highlighting the real impact of knowledge sharing and community support in African agriculture.*
  `,
}

const relatedStories = [
  {
    id: 2,
    title: "Solar-Powered Irrigation Transforms Nigerian Village",
    category: "Technology",
    image: "/solar-irrigation-nigeria-story.jpg",
  },
  {
    id: 3,
    title: "Youth Cooperative Revitalizes Cocoa Production",
    category: "Youth",
    image: "/youth-cocoa-cooperative-ghana.jpg",
  },
]

export default function StoryDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted py-6 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/stories" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4" />
            Back to Stories
          </Link>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <Badge variant="outline" className="mb-4">
            {story.category}
          </Badge>
          <h1 className="text-4xl font-bold mb-4 text-balance">{story.title}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <span>{story.publishedDate}</span>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{story.readTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{story.views} views</span>
            </div>
          </div>

          {/* Author Info */}
          <div className="flex items-center justify-between p-4 bg-muted rounded-lg mb-6">
            <div className="flex items-center gap-3">
              <Avatar className="w-12 h-12">
                <AvatarFallback className="bg-primary text-primary-foreground">{story.authorAvatar}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{story.author}</p>
                <p className="text-sm text-muted-foreground">{story.authorRole}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="gap-2">
                <Heart className="w-4 h-4" />
                {story.likes}
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Bookmark className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="aspect-video relative overflow-hidden rounded-lg bg-muted mb-8">
          <img src={story.image || "/placeholder.svg"} alt={story.title} className="w-full h-full object-cover" />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div className="whitespace-pre-wrap leading-relaxed text-foreground">{story.content}</div>
        </div>

        {/* Tags */}
        <div className="flex items-center gap-2 mb-8 flex-wrap">
          <span className="text-sm font-medium text-muted-foreground">Tags:</span>
          {story.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Author Bio */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>About the Author</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-4">
              <Avatar className="w-16 h-16">
                <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                  {story.authorAvatar}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-lg mb-1">{story.author}</h4>
                <p className="text-sm text-muted-foreground mb-3">{story.authorRole}</p>
                <p className="text-sm text-foreground leading-relaxed mb-4">{story.authorBio}</p>
                <Button variant="outline" size="sm" className="bg-transparent">
                  View Profile
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Engagement Actions */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="outline" className="gap-2 bg-transparent">
                  <Heart className="w-4 h-4" />
                  Like ({story.likes})
                </Button>
                <Button variant="outline" className="gap-2 bg-transparent">
                  <MessageSquare className="w-4 h-4" />
                  Comment
                </Button>
                <Button variant="outline" className="gap-2 bg-transparent">
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
              </div>
              <Button variant="outline" className="gap-2 bg-transparent">
                <Bookmark className="w-4 h-4" />
                Save
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Related Stories */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Related Stories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedStories.map((related) => (
              <Link key={related.id} href={`/stories/${related.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={related.image || "/placeholder.svg"}
                      alt={related.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <Badge variant="outline" className="w-fit mb-2">
                      {related.category}
                    </Badge>
                    <CardTitle className="text-lg leading-tight text-balance">{related.title}</CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
