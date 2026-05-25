import type React from "react"
import type { Metadata } from "next"
import { Inter, Source_Serif_4 } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Agforum — Intelligence for African Agriculture",
    template: "%s | Agforum",
  },
  description:
    "Data, research, and convening for the institutions shaping Africa's agrifood future. Serving DFIs, sovereign funds, policymakers, and operators.",
  metadataBase: new URL("https://agforumafrica.org"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Agforum",
    title: "Agforum — Intelligence for African Agriculture",
    description:
      "Data, research, and convening for the institutions shaping Africa's agrifood future.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agforum — Intelligence for African Agriculture",
    description:
      "Data, research, and convening for the institutions shaping Africa's agrifood future.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
