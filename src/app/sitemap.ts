import { MetadataRoute } from 'next';
import { DEPARTMENTS } from '@/data/departments';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://uswat.edu.pk';
  const lastModified = new Date();

  // Core static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about/vc-message`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/admissions`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/departments`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/examinations`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/research`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/downloads`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/notices`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ];

  // Dynamic department routes
  const departmentRoutes: MetadataRoute.Sitemap = DEPARTMENTS.map((dept) => ({
    url: `${baseUrl}/departments/${dept.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Auxiliary academic & examination routes
  const subRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/about/vision-mission`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/about/governance`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/about/campuses`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/about/affiliated-colleges`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/examinations/results`, lastModified, changeFrequency: 'daily', priority: 0.85 },
    { url: `${baseUrl}/examinations/date-sheets`, lastModified, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/oric/journals`, lastModified, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/oric/centers`, lastModified, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/oric/publications`, lastModified, changeFrequency: 'monthly', priority: 0.75 },
  ];

  return [...staticRoutes, ...departmentRoutes, ...subRoutes];
}

