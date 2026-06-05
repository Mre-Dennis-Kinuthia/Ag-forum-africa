import { z } from "zod"

const schema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 })
  }

  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return Response.json(
      { error: parsed.error.errors[0]?.message ?? "Invalid email" },
      { status: 400 },
    )
  }

  const { email } = parsed.data

  if (process.env.NEWSLETTER_WEBHOOK_URL) {
    try {
      await fetch(process.env.NEWSLETTER_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "agforum-newsletter", subscribedAt: new Date().toISOString() }),
      })
    } catch {
      return Response.json({ error: "Unable to subscribe right now. Please try again." }, { status: 503 })
    }
  }

  return Response.json({ ok: true })
}
