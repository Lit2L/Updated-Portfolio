import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const URL = process.env.NEXT_PUBLIC_URL || 'https://larryly.com'

  return [
    {
      url: `${URL}`,
      lastModified: new Date(),
    },
    {
      url: `${URL}/side-projects`,
      lastModified: new Date(),
    },
    {
      url: `${URL}/project/louvair`,
      lastModified: new Date(),
    },
    {
      url: `${URL}/project/hippodocs`,
      lastModified: new Date(),
    },
    {
      url: `${URL}/project/iyamswimcoach`,
      lastModified: new Date(),
    },
  ]
}
