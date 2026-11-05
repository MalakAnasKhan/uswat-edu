import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { INITIAL_NEWS } from '@/data/news';
import NewsArticleDetail from '@/components/news/NewsArticleDetail';

export function generateStaticParams() {
  return INITIAL_NEWS.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = INITIAL_NEWS.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: 'University News Story',
    };
  }

  return {
    title: `${article.title} | University of Swat News`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      images: article.imageUrl ? [article.imageUrl] : ['/images/Main Gate.jpg'],
    },
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const initialArticle = INITIAL_NEWS.find((a) => a.slug === slug);

  return <NewsArticleDetail initialArticle={initialArticle} slug={slug} />;
}

