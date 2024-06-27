import { MetadataRoute } from "next";
import SitemapItem from "./sitemap-item";

const defaultSitemap: SitemapItem[] = [
  {
    url: "/"
  },
  {
    url: "/about/"
  },
  {
    url: "/press-kit/"
  },
  {
    url: "/see-also/"
  },
  {
    url: "/help/"
  }];

export default function buildSitemap( ): MetadataRoute.Sitemap {


  return defaultSitemap.map(x => { return { url: new URL(x.url, "https://www.example.com/").toString() } });


}


