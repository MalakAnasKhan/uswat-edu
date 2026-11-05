'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Calendar,
  User,
  ArrowRight,
  Sparkles,
  Tag,
  Settings,
  Newspaper,
  ChevronRight,
  TrendingUp,
} from 'lucide-react';
import { useNewsArticles } from '@/lib/newsStore';
import { NewsArticle } from '@/data/news';

const CATEGORIES = ['All', 'Academics', 'Research', 'Campus Life', 'Events', 'Administration'] as const;

export default function LatestNews() {
  const { articles, isLoaded } = useNewsArticles();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filtered = selectedCategory === 'All'
    ? articles
    : articles.filter((a) => a.category === selectedCategory);

  const featured = filtered.find((a) => a.isFeatured) || filtered[0];
  const gridArticles = filtered.filter((a) => a.id !== featured?.id).slice(0, 4);

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-neutral-slate">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-secondary/15 text-secondary-dark text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
                <Newspaper className="w-3.5 h-3.5" />
                <span>Campus Pulse & Media</span>
              </span>
              <span className="text-xs text-neutral-textMuted">• Updated Weekly</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-neutral-dark">
              Latest News & University Updates
            </h2>
            <p className="text-sm text-neutral-textMuted mt-2 max-w-2xl leading-relaxed">
              Timely reports on research breakthroughs, bilateral academic partnerships, student honors, and campus announcements from Charbagh.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/admin/news"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-neutral-light hover:bg-neutral-slate border border-neutral-border text-xs font-semibold text-neutral-charcoal hover:text-primary transition-all shadow-sm"
              title="Post news updates or edit articles"
            >
              <Settings className="w-3.5 h-3.5 text-secondary" />
              <span>Admin Desk</span>
            </Link>
            <Link
              href="/news"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-bold shadow-soft transition-all"
            >
              <span>News Archive</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              type="button"
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-primary text-white shadow-soft'
                  : 'bg-neutral-light text-neutral-charcoal hover:bg-neutral-slate'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured + Grid Showcase */}
        {filtered.length === 0 ? (
          <div className="py-16 text-center bg-neutral-light rounded-3xl border border-neutral-border p-8">
            <Newspaper className="w-10 h-10 text-neutral-textMuted mx-auto mb-3 opacity-40" />
            <h3 className="text-base font-semibold text-neutral-dark">No updates under "{selectedCategory}"</h3>
            <p className="text-xs text-neutral-textMuted mt-1">Check back later or browse other categories.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Main Featured News Card (7 Cols) */}
            {featured && (
              <div className="lg:col-span-7 group">
                <div className="relative rounded-3xl overflow-hidden bg-neutral-light border border-neutral-border hover:border-primary/40 hover:shadow-card transition-all duration-300 flex flex-col h-full">
                  {/* Image container */}
                  <div className="relative w-full h-64 sm:h-80 overflow-hidden bg-neutral-slate">
                    <Image
                      src={featured.imageUrl || '/images/Meeting 2.jpg'}
                      alt={featured.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Category & Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-secondary text-primary font-bold text-xs shadow-md">
                        {featured.category}
                      </span>
                      {featured.isFeatured && (
                        <span className="px-2.5 py-1 rounded-full bg-primary/90 text-white text-[11px] font-semibold backdrop-blur-md flex items-center gap-1 border border-white/20">
                          <Sparkles className="w-3 h-3 text-secondary" />
                          <span>Featured Headline</span>
                        </span>
                      )}
                    </div>

                    {/* Published Date Over Image */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/90 text-xs">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-secondary" />
                        <span>{featured.publishedAt}</span>
                      </span>
                      <span className="text-[11px] text-white/75 bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
                        By {featured.author}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="font-serif font-bold text-xl sm:text-2xl text-neutral-dark group-hover:text-primary transition-colors leading-snug">
                        <Link href={`/news/${featured.slug}`}>
                          {featured.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-neutral-textMuted mt-3 leading-relaxed line-clamp-3">
                        {featured.summary}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-neutral-slate flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {featured.tags?.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white border border-neutral-border text-neutral-charcoal"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/news/${featured.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary-dark transition-colors"
                      >
                        <span>Read Full Story</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Right Side: 4 Smaller Story Cards (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {gridArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/news/${article.slug}`}
                  className="group flex gap-4 p-4 rounded-2xl bg-neutral-light/70 hover:bg-neutral-light border border-neutral-border hover:border-primary/40 transition-all hover:shadow-soft"
                >
                  {/* Thumbnail Picture */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-xl overflow-hidden bg-neutral-slate">
                    <Image
                      src={article.imageUrl || '/images/Main Gate.jpg'}
                      alt={article.title}
                      fill
                      sizes="112px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Text details */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary-muted text-primary">
                          {article.category}
                        </span>
                        <span className="text-[11px] text-neutral-textMuted">
                          {article.publishedAt}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-neutral-dark group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                        {article.title}
                      </h4>
                    </div>

                    <div className="flex items-center gap-1 text-xs font-semibold text-secondary-dark group-hover:text-primary transition-colors mt-2">
                      <span>Full Story</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}

              {gridArticles.length === 0 && (
                <div className="p-6 text-center text-xs text-neutral-textMuted bg-neutral-light rounded-2xl border border-neutral-border">
                  More weekly stories will be published here.
                </div>
              )}
            </div>
          </div>
        )}

        {/* Section Bottom Banner / Links */}
        <div className="mt-12 pt-6 border-t border-neutral-slate flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-neutral-textMuted">
            <TrendingUp className="w-4 h-4 text-secondary" />
            <span>Journalists and media inquiries: contact the Directorate of Media at <strong>media@uswat.edu.pk</strong></span>
          </div>

          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-slate hover:bg-primary hover:text-white text-neutral-dark font-semibold text-xs transition-all shadow-sm group"
          >
            <span>Explore All Press Releases & Media Archives</span>
            <ArrowRight className="w-3.5 h-3.5 text-secondary group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

