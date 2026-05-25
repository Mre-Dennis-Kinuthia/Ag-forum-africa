"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="bg-background">
      {/* Header */}
      <section className="border-b border-border bg-card">
        <div className="container-wide py-14 lg:py-16">
          <div className="max-w-2xl">
            <Badge variant="outline" className="uppercase tracking-[0.15em] text-xs mb-4">
              Contact
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Get in touch</h1>
            <p className="text-muted-foreground text-[15px] leading-relaxed">
              Whether you have a question about our intelligence products, want to explore institutional access, or are
              interested in contributing research — we'd like to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide grid lg:grid-cols-[1fr,380px] gap-12 lg:gap-16">
          {/* Form */}
          <div>
            {submitted ? (
              <Card className="border-border/60">
                <CardContent className="py-16 text-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-950 flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-5 w-5 text-green-600" />
                  </div>
                  <h2 className="text-xl font-semibold mb-2">Message received</h2>
                  <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                    Thank you for reaching out. Our team will respond within two business days.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full name</Label>
                    <Input id="name" required placeholder="Jane Wanjiku" className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required placeholder="jane@institution.org" className="h-11" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="org">Organisation</Label>
                    <Input id="org" placeholder="e.g. African Development Bank" className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select>
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="access">Institutional access</SelectItem>
                        <SelectItem value="research">Research collaboration</SelectItem>
                        <SelectItem value="partnership">Partnership inquiry</SelectItem>
                        <SelectItem value="press">Press & media</SelectItem>
                        <SelectItem value="general">General inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" required rows={6} placeholder="How can we help?" className="resize-none" />
                </div>
                <Button type="submit" className="bg-brand-navy hover:bg-brand-navy/90 text-white rounded-full px-8 h-11">
                  Send message
                </Button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border-border/60">
              <CardContent className="pt-6 space-y-5">
                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 mt-0.5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium mb-0.5">Email</p>
                    <a href="mailto:info@agforumafrica.org" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      info@agforumafrica.org
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium mb-0.5">Location</p>
                    <p className="text-sm text-muted-foreground">Nairobi, Kenya</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 mt-0.5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium mb-0.5">Response time</p>
                    <p className="text-sm text-muted-foreground">Within 2 business days</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-muted/50">
              <CardContent className="pt-6">
                <p className="text-sm font-medium mb-2">Institutional access</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  For organisations interested in premium data products, API access, or bespoke research — please mention
                  this in your message and we'll schedule an introductory call.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
