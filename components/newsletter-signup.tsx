"use client"

import { useState } from "react"

interface NewsletterSignupProps {
  variant?: "light" | "dark"
  className?: string
}

export function NewsletterSignup({ variant = "light", className = "" }: NewsletterSignupProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    setMessage("")

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()

      if (!res.ok) {
        setStatus("error")
        setMessage(data.error ?? "Something went wrong. Please try again.")
        return
      }

      setStatus("success")
      setMessage("You're on the list.")
      setEmail("")
    } catch {
      setStatus("error")
      setMessage("Something went wrong. Please try again.")
    }
  }

  const isDark = variant === "dark"

  if (status === "success") {
    return (
      <div className={className}>
        <p className={`text-xs ${isDark ? "text-loam/60" : "text-muted"}`}>{message}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-2 ${className}`}>
      <div className={`newsletter-form ${isDark ? "newsletter-form--dark" : ""}`}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          required
          autoComplete="email"
          disabled={status === "loading"}
          className="newsletter-input"
          aria-label="Email address"
        />
        <button type="submit" disabled={status === "loading"} className="newsletter-submit">
          {status === "loading" ? "…" : "Join"}
        </button>
      </div>
      {status === "error" && (
        <p className={`text-[0.6875rem] ${isDark ? "text-harvest/80" : "text-soil"}`} role="alert">
          {message}
        </p>
      )}
      <p className={`text-[0.6875rem] leading-relaxed ${isDark ? "text-loam/30" : "text-soil/50"}`}>
        Quarterly notes. No spam.
      </p>
    </form>
  )
}
