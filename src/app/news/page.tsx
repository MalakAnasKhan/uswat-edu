'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Search,
  Calendar,
  User,
  ArrowRight,
  Sparkles,
  Newspaper,
  Tag,
  Settings,
  Mail,
  Phone,
  Filter,
} from 'lucide-react';
import { useNewsArticles } from '@/lib/newsStore';

const CATEGORIES = ['All', 'Academics', 'Research', 'Campus Life', 'Events', 'Administration'] as const;

export default function NewsHubPage() {
  const { articles, isLoaded } = useNewsArticles();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        selectedCategory === 'All' || article.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.summary.toLowerCase().includes(q) ||
        article.tags?.some((t) => t.toLowerCase().includes(q)) ||
        article.author.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [articles, searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-neutral-light pb-20">
      {/* Hero Header */}
      <div className="bg-[#073620] text-white py-14 sm:py-16 border-b border-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary-light text-xs font-bold mb-3 border border-secondary/30">
                <Newspaper className="w-3.5 h-3.5" />
                <span>Directorate of Media & Publications</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold tracking-tight">
                News, Press Releases & Stories
              </h1>
              <p className="text-sm sm:text-base text-white/80 mt-2 max-w-2xl leading-relaxed">
                Stay updated with the latest happenings, academic events, administrative circulars, and student achievements at the University of Swat.
              </p>
            </div>

            {/* Admin Desk Link Button */}
            <div className="shrink-0 flex items-center gap-3">
              <Link
                href="/admin/news"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-secondary hover:bg-secondary-dark text-primary font-bold text-xs sm:text-sm shadow-dropdown transition-all transform hover:-translate-y-0.5"
              >
                <Settings className="w-4 h-4 text-primary" />
                <span>Admin Post Manager</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Controls Card (Search + Filter) */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-neutral-border shadow-soft space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-neutral-textMuted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search updates by title, keyword, or author..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-border bg-neutral-light text-sm focus:outline-none focus:border-primary"
              />
            </div>

            {/* Showing Count */}
            <div className="text-xs font-semibold text-neutral-textMuted px-2">
              Showing {filteredArticles.length} of {articles.length} Stories
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-neutral-slate">
            <span className="text-xs font-bold text-neutral-textMuted mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              <span>Category:</span>
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                type="button"
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary text-white shadow-soft'
                    : 'bg-neutral-slate text-neutral-charcoal hover:bg-neutral-border/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* News Cards Grid */}
        <div className="mt-8">
          {filteredArticles.length === 0 ? (
            <div className="bg-white rounded-3xl border border-neutral-border p-12 text-center space-y-3">
              <Newspaper className="w-12 h-12 text-neutral-textMuted/40 mx-auto" />
              <h3 className="text-lg font-bold text-neutral-dark">No updates match your criteria</h3>
              <p className="text-xs text-neutral-textMuted max-w-sm mx-auto">
                Try searching for another keyword or clear the category filters to browse all university stories.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-2 px-4 py-2 rounded-xl bg-primary text-white text-xs font-semibold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className="group bg-white rounded-3xl overflow-hidden border border-neutral-border hover:border-primary/40 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Card Image */}
                    <div className="relative w-full h-52 overflow-hidden bg-neutral-slate">
                      <Image
                        src={article.imageUrl || '/images/Meeting 2.jpg'}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-secondary text-primary font-bold text-[10px] shadow-sm">
                          {article.category}
                        </span>
                        {article.isFeatured && (
                          <span className="px-2 py-0.5 rounded-full bg-primary text-white text-[10px] font-semibold flex items-center gap-1 shadow-sm">
                            <Sparkles className="w-2.5 h-2.5 text-secondary" />
                            <span>Featured</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between text-[11px] text-neutral-textMuted mb-2.5">
                        <span className="flex items-center gap-1.5 font-medium">
                          <Calendar className="w-3.5 h-3.5 text-secondary" />
                          <span>{article.publishedAt}</span>
                        </span>
                        <span className="truncate max-w-[140px] text-right">
                          {article.author}
                        </span>
                      </div>

                      <h3 className="font-serif font-bold text-base sm:text-lg text-neutral-dark group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                        <Link href={`/news/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h3>

                      <p className="text-xs text-neutral-textMuted mt-2.5 line-clamp-3 leading-relaxed">
                        {article.summary}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 pb-6 pt-2 border-t border-neutral-slate flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {article.tags?.slice(0, 2).map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-medium px-2 py-0.5 rounded bg-neutral-light text-neutral-charcoal"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/news/${article.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:text-secondary-dark transition-colors"
                    >
                      <span>Read Story</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Media Contact Card */}
        <div className="mt-14 bg-gradient-to-r from-primary to-[#06331e] rounded-3xl p-6 sm:p-10 text-white shadow-soft">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                Press & Media Relations
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold">
                Covering the University of Swat?
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                For official media press kits, interview requests with the Vice Chancellor, high-resolution campus photography, or broadcast permissions, get in touch with our Media Relations Wing.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="mailto:media@uswat.edu.pk"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-secondary hover:bg-secondary-dark text-primary font-bold text-xs shadow-soft transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>media@uswat.edu.pk</span>
              </a>
              <a
                href="tel:+929469240446"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all"
              >
                <Phone className="w-4 h-4 text-secondary-light" />
                <span>+92 946 9240446</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

