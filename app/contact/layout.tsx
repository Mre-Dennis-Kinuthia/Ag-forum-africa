import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description: "Register interest or enquire about early access to Agforum's institutional intelligence platform.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Agforum",
    description: "Register interest or enquire about early access to Agforum's institutional intelligence platform.",
    url: "/contact",
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
