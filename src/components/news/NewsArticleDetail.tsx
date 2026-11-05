'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Calendar,
  User,
  ArrowLeft,
  Share2,
  Bookmark,
  Sparkles,
  Newspaper,
  ChevronRight,
  Printer,
  CheckCircle2,
} from 'lucide-react';
import { useNewsArticles } from '@/lib/newsStore';
import { INITIAL_NEWS, NewsArticle } from '@/data/news';

interface NewsArticleDetailProps {
  initialArticle?: NewsArticle;
  slug: string;
}

export default function NewsArticleDetail({ initialArticle, slug }: NewsArticleDetailProps) {
  const { articles } = useNewsArticles();

  // Find article from client store (which includes admin additions) or fallback to server initial
  const article = articles.find((a) => a.slug === slug) || initialArticle || INITIAL_NEWS.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center bg-neutral-light">
        <Newspaper className="w-16 h-16 text-neutral-textMuted/40 mb-4" />
        <h2 className="text-2xl font-serif font-bold text-neutral-dark">Story Not Found</h2>
        <p className="text-sm text-neutral-textMuted mt-2 max-w-md">
          The requested news update may have been updated, relocated, or unpublished by the Media Directorate.
        </p>
        <Link
          href="/news"
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-bold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to News Hub</span>
        </Link>
      </div>
    );
  }

  // Related articles (excluding current)
  const related = articles.filter((a) => a.id !== article.id).slice(0, 3);

  const handleShare = () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share({
        title: article.title,
        text: article.summary,
        url: window.location.href,
      }).catch(() => {});
    } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <article className="min-h-screen bg-neutral-light pb-20">
      {/* Article Header & Breadcrumbs */}
      <div className="bg-[#073620] text-white pt-10 pb-16 border-b border-emerald-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-white/70 mb-6">
            <Link href="/" className="hover:text-secondary-light transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <Link href="/news" className="hover:text-secondary-light transition-colors">
              News & Updates
            </Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-secondary truncate max-w-[200px]">{article.category}</span>
          </div>

          {/* Category & Featured Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-secondary text-primary font-bold text-xs">
              {article.category}
            </span>
            {article.isFeatured && (
              <span className="px-2.5 py-1 rounded-full bg-white/15 text-white text-xs font-medium backdrop-blur-md flex items-center gap-1 border border-white/20">
                <Sparkles className="w-3.5 h-3.5 text-secondary" />
                <span>Featured Update</span>
              </span>
            )}
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold tracking-tight leading-snug sm:leading-snug">
            {article.title}
          </h1>

          {/* Meta Info Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-6 border-t border-white/15 text-xs text-white/80">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-secondary" />
                <span>{article.publishedAt}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-secondary" />
                <span>{article.author}</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                type="button"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-colors"
                title="Share article link"
              >
                <Share2 className="w-3.5 h-3.5 text-secondary" />
                <span>Share</span>
              </button>
              <button
                onClick={handlePrint}
                type="button"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-colors"
                title="Print press release"
              >
                <Printer className="w-3.5 h-3.5 text-secondary" />
                <span>Print</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Story Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-border shadow-soft space-y-8">
          {/* Main Article Visual / Picture */}
          {article.imageUrl && (
            <div className="space-y-2">
              <div className="relative w-full h-72 sm:h-96 md:h-[450px] rounded-2xl overflow-hidden bg-neutral-slate">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-cover"
                  priority
                />
              </div>
              {article.imageCaption && (
                <p className="text-xs text-neutral-textMuted italic text-center px-4">
                  {article.imageCaption}
                </p>
              )}
            </div>
          )}

          {/* Lead Summary Callout */}
          <div className="p-5 rounded-2xl bg-neutral-light border-l-4 border-secondary text-sm sm:text-base font-medium text-neutral-charcoal leading-relaxed">
            {article.summary}
          </div>

          {/* Multi-Paragraph Story Body */}
          <div className="prose prose-neutral max-w-none text-sm sm:text-base leading-relaxed text-neutral-charcoal space-y-5">
            {article.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="pt-6 border-t border-neutral-slate flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-neutral-textMuted">Tags:</span>
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-neutral-slate text-neutral-charcoal text-xs font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Official Sign-off Box */}
          <div className="p-4 sm:p-6 rounded-2xl bg-primary-muted/40 border border-primary/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">
                UoS
              </div>
              <div>
                <h4 className="text-xs font-bold text-primary uppercase tracking-wider">
                  Official Communication
                </h4>
                <p className="text-xs text-neutral-charcoal mt-0.5">
                  Published by the Directorate of Media and Public Relations, University of Swat.
                </p>
              </div>
            </div>

            <Link
              href="/news"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary-dark transition-colors shrink-0"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Updates</span>
            </Link>
          </div>
        </div>

        {/* Related News Showcase */}
        {related.length > 0 && (
          <div className="mt-12 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-serif font-bold text-xl text-neutral-dark">
                More Recent Stories
              </h3>
              <Link
                href="/news"
                className="text-xs font-bold text-primary hover:text-secondary-dark transition-colors"
              >
                View News Hub →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/news/${item.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-neutral-border hover:border-primary/40 hover:shadow-soft transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative w-full h-40 overflow-hidden bg-neutral-slate">
                      <Image
                        src={item.imageUrl || '/images/Main Gate.jpg'}
                        alt={item.title}
                        fill
                        sizes="300px"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-secondary text-primary font-bold text-[10px]">
                        {item.category}
                      </span>
                    </div>

                    <div className="p-4">
                      <span className="text-[10px] text-neutral-textMuted block mb-1">
                        {item.publishedAt}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-neutral-dark group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                        {item.title}
                      </h4>
                    </div>
                  </div>

                  <div className="px-4 pb-4 pt-1 flex items-center text-xs font-semibold text-secondary-dark group-hover:text-primary transition-colors">
                    <span>Read Article</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

