import { baseUrl } from "@/config/app";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: `${baseUrl}`,
  };
}
