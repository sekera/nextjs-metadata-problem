import { MetadataRoute } from 'next';


export default async function robots(): Promise<MetadataRoute.Robots> {

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/terms/','/privacy/','/diagnostics/','/share/'],
    },
    sitemap: `https://www.example.com/sitemap.xml`,
  }
}