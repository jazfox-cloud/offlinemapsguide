import { guides } from "@/data/guides";
import { site } from "@/data/site";

const staticPages = [
  "/",
  "/guides/",
  "/apps/",
  "/about/",
  "/contact/",
  "/methodology/",
  "/editorial-policy/",
  "/privacy/",
  "/terms/"
];

export async function GET() {
  const urls = [
    ...staticPages,
    ...guides.map((guide) => `/guides/${guide.slug}/`)
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `  <url>
    <loc>${new URL(path, site.url).toString()}</loc>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
