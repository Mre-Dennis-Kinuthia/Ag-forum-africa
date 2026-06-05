"use client"

import { useState } from "react"
import { PageHero } from "@/components/page-hero"
import { Mail } from "lucide-react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="overflow-x-hidden">
      <PageHero
        eyebrow="02 Contact"
        title="Get in touch."
        description="Early access for ministries, DFIs, cooperatives, and agrifood operators."
      />

      <div className="container-wide py-10 sm:py-14 lg:py-24 flex flex-col lg:grid lg:grid-cols-[1fr,280px] gap-10 lg:gap-20">
        {submitted ? (
          <div className="py-8 sm:py-12">
            <Mail className="h-5 w-5 text-sage mb-5" />
            <h2 className="heading-h2 text-xl mb-2">Message received</h2>
            <p className="text-sm text-muted">We&apos;ll respond within two business days.</p>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="space-y-5 sm:space-y-6 w-full max-w-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-eyebrow text-soil">Full name</label>
                <input id="name" required autoComplete="name" className="field-input" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-eyebrow text-soil">Email</label>
                <input id="email" type="email" required autoComplete="email" className="field-input" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="org" className="text-eyebrow text-soil">Organisation</label>
                <input id="org" autoComplete="organization" className="field-input" />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-eyebrow text-soil">Subject</label>
                <select id="subject" className="field-input">
                  <option value="">Select</option>
                  <option value="early-access">Early access</option>
                  <option value="partnership">Partnership</option>
                  <option value="research">Research collaboration</option>
                  <option value="press">Press</option>
                  <option value="general">General enquiry</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-eyebrow text-soil">Message</label>
              <textarea id="message" required rows={5} className="field-input resize-none min-h-[8rem]" />
            </div>
            <button type="submit" className="btn-pill-dark w-full sm:w-auto justify-center">
              Send message
            </button>
          </form>
        )}

        <aside className="text-sm space-y-5 sm:space-y-6 lg:pt-1 border-t border-soil/10 lg:border-0 pt-8 lg:pt-1">
          <div>
            <p className="text-eyebrow text-soil mb-2">Email</p>
            <a href="mailto:info@agforumafrica.org" className="text-muted hover:text-sage transition-colors break-all">
              info@agforumafrica.org
            </a>
          </div>
          <div>
            <p className="text-eyebrow text-soil mb-2">Location</p>
            <p className="text-muted">Nairobi, Kenya</p>
          </div>
          <div>
            <p className="text-eyebrow text-soil mb-2">Response time</p>
            <p className="text-muted">Within 2 business days</p>
          </div>
        </aside>
      </div>
    </div>
  )
}
