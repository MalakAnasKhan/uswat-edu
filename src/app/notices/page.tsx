'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Bell, Search, Calendar, Building, ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { NOTICES, NoticeCategory } from '@/data/notices';

const CATEGORIES: ('All' | NoticeCategory)[] = ['All', 'Admissions', 'Examination', 'Tender', 'General'];

export default function NoticesPage() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | NoticeCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = NOTICES.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.department && item.department.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 bg-neutral-light min-h-[80vh]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs text-neutral-textMuted">
          <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            Home
          </Link>
          <span>/</span>
          <span className="text-primary font-semibold">Official Notifications & Circulars</span>
        </div>

        {/* Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-border shadow-soft mb-8">
          <span className="px-3 py-1 rounded-md bg-primary-muted text-primary text-xs font-bold uppercase tracking-wider">
            University Gazette
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-dark mt-2">
            Announcements, Circulars & Tenders
          </h1>
          <p className="text-sm text-neutral-textMuted mt-2 max-w-3xl leading-relaxed">
            All official press releases, merit lists, examination schedules, tender procurement notices,
            and administrative notifications published by the University of Swat.
          </p>

          {/* Search & Filter */}
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-neutral-textMuted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search notification title or issuing office..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-border bg-neutral-light text-sm focus:outline-none focus:border-primary"
              />
            </div>

            <div className="flex flex-wrap gap-1.5">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  type="button"
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-primary text-white shadow-soft'
                      : 'bg-neutral-slate text-neutral-textMuted hover:text-neutral-dark'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Notices List */}
        <div className="bg-white rounded-3xl border border-neutral-border overflow-hidden shadow-soft">
          <div className="p-4 sm:p-6 border-b border-neutral-slate flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-neutral-textMuted">
              Showing {filtered.length} Notifications
            </span>
          </div>

          <div className="divide-y divide-neutral-slate">
            {filtered.length === 0 ? (
              <div className="py-16 text-center text-sm text-neutral-textMuted">
                No matching notifications found.
              </div>
            ) : (
              filtered.map((item) => (
                <div
                  key={item.id}
                  className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-neutral-light/60 transition-colors"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary-muted text-primary">
                        {item.category}
                      </span>
                      {item.isUrgent && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-800">
                          Urgent
                        </span>
                      )}
                      <span className="text-[11px] text-neutral-textMuted">{item.date}</span>
                    </div>

                    <h3 className="text-base font-semibold text-neutral-dark">
                      {item.title}
                    </h3>

                    {item.department && (
                      <p className="text-xs text-neutral-textMuted flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-secondary" />
                        <span>{item.department}</span>
                      </p>
                    )}
                  </div>

                  <div className="shrink-0">
                    <Link
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-slate hover:bg-primary hover:text-white text-xs font-semibold text-neutral-dark transition-all"
                    >
                      <span>Read Notice</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

