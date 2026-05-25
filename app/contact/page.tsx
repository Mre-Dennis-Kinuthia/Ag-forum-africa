"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail } from "lucide-react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="bg-background">
      <section className="border-b border-border bg-card">
        <div className="container-wide py-12 lg:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Contact</h1>
          <p className="text-muted-foreground max-w-lg">
            Questions about intelligence products, institutional access, or research collaboration.
          </p>
        </div>
      </section>

      <div className="container-wide py-10 lg:py-16 grid lg:grid-cols-[1fr,320px] gap-12 lg:gap-20">
        {submitted ? (
          <div className="py-16">
            <Mail className="h-6 w-6 text-muted-foreground mb-4" />
            <h2 className="text-xl font-semibold mb-2">Message received</h2>
            <p className="text-sm text-muted-foreground">We'll respond within two business days.</p>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="space-y-5 max-w-lg">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-sm">Full name</Label>
                <Input id="name" required className="h-10" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-sm">Email</Label>
                <Input id="email" type="email" required className="h-10" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <Label htmlFor="org" className="text-sm">Organisation</Label>
                <Input id="org" className="h-10" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="subject" className="text-sm">Subject</Label>
                <Select>
                  <SelectTrigger className="h-10"><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="access">Institutional access</SelectItem>
                    <SelectItem value="research">Research collaboration</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                    <SelectItem value="press">Press</SelectItem>
                    <SelectItem value="general">General</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="message" className="text-sm">Message</Label>
              <Textarea id="message" required rows={5} className="resize-none" />
            </div>
            <Button type="submit" className="bg-brand-navy text-white h-10 px-6">
              Send message
            </Button>
          </form>
        )}

        <div className="text-sm text-muted-foreground space-y-4 lg:pt-2">
          <div>
            <p className="font-medium text-foreground mb-0.5">Email</p>
            <a href="mailto:info@agforumafrica.org" className="hover:text-foreground transition-colors">info@agforumafrica.org</a>
          </div>
          <div>
            <p className="font-medium text-foreground mb-0.5">Location</p>
            <p>Nairobi, Kenya</p>
          </div>
          <div>
            <p className="font-medium text-foreground mb-0.5">Response time</p>
            <p>Within 2 business days</p>
          </div>
          <div className="pt-2 border-t border-border">
            <p className="text-xs">
              For institutional access or API inquiries, mention this in your message and we'll schedule an introductory call.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
