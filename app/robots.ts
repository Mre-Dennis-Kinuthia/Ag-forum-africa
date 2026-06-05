import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin/",
        "/login",
        "/register",
        "/community/",
        "/knowledge-hub/",
        "/intelligence/",
        "/forums/",
        "/events/",
        "/stories/",
      ],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}
