import { MetadataRoute } from 'next'
import additionalSitemap from '../additional-sitemap.json';
import buildSitemap from '@/components/composition/build-sitemap';

 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
   return buildSitemap( );
}