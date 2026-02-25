import type { MetadataRoute } from "next";

const siteUrl = "https://admin.peercheck.africa";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: "admin.peercheck.africa",
  };
}
