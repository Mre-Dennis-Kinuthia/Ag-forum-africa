import type React from "react"
import type { Metadata } from "next"
import { Inter, Libre_Caslon_Display, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const libreCaslon = Libre_Caslon_Display({
  subsets: ["latin"],
  variable: "--font-libre",
  weight: ["400"],
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

export const metadata: Metadata = {
  title: {
    default: "Agforum — Institutional Intelligence for African Agriculture",
    template: "%s | Agforum",
  },
  description:
    "Institutional intelligence for the actors shaping Africa's agrifood future. Currently in development.",
  metadataBase: new URL("https://agforumafrica.org"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Agforum",
    title: "Agforum — Institutional Intelligence for African Agriculture",
    description:
      "Institutional intelligence for the actors shaping Africa's agrifood future. Currently in development.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agforum — Institutional Intelligence for African Agriculture",
    description:
      "Institutional intelligence for the actors shaping Africa's agrifood future. Currently in development.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${libreCaslon.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
