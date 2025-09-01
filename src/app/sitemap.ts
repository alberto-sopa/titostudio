import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://tito.studio";

  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: "weekly", // ✅ usa un literal permitido
      priority: 1,
    },
    {
      url: `${base}/contacto`,
      lastModified: new Date(),
      changeFrequency: "monthly", // ✅
      priority: 0.7,
    },
  ];
}
