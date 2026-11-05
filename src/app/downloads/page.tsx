'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Download, FileText, Search, Filter, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { DOWNLOADS, DownloadCategory } from '@/data/downloads';

const CATEGORIES: ('All' | DownloadCategory)[] = [
  'All',
  'Examination',
  'Registration',
  'DMC/Degree',
  'Affiliation',
  'Scholarship',
];

export default function DownloadsPage() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | DownloadCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = DOWNLOADS.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    const matchesQuery =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="py-12 bg-neutral-light min-h-[80vh]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Header Breadcrumbs */}
        <div className="mb-6 flex items-center gap-2 text-xs text-neutral-textMuted">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-primary font-semibold">Downloads & Examination Forms</span>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-border shadow-soft mb-8">
          <div className="max-w-3xl">
            <span className="px-3 py-1 rounded-md bg-primary-muted text-primary text-xs font-bold uppercase tracking-wider">
              Official University Repository
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-dark mt-2">
              Examination & Administrative Downloads
            </h1>
            <p className="text-sm text-neutral-textMuted mt-2 leading-relaxed">
              Download verified application forms, DMC request templates, degree in absentia proformas,
              migration NOC guidelines, and institutional affiliation checklists.
            </p>
          </div>

          {/* Search & Category Filter */}
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-neutral-textMuted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search download title or type..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-border bg-neutral-light text-sm focus:outline-none focus:border-primary"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  type="button"
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${selectedCategory === cat
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

        {/* Downloads Table / Cards */}
        <div className="bg-white rounded-3xl border border-neutral-border overflow-hidden shadow-soft">
          <div className="p-4 sm:p-6 border-b border-neutral-slate flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-neutral-textMuted">
              Showing {filtered.length} Documents
            </span>
            <span className="text-xs text-neutral-textMuted">Official Formats: PDF & DOCX</span>
          </div>

          <div className="divide-y divide-neutral-slate">
            {filtered.length === 0 ? (
              <div className="py-16 text-center text-sm text-neutral-textMuted">
                No matching download items found for your search criteria.
              </div>
            ) : (
              filtered.map((item) => (
                <div
                  key={item.id}
                  className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-neutral-light/60 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary-muted text-primary shrink-0">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-secondary/20 text-secondary-dark">
                          {item.category}
                        </span>
                        <span className="text-[11px] text-neutral-textMuted">
                          Updated: {item.lastUpdated}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-semibold text-neutral-dark">
                        {item.title}
                      </h3>
                      <p className="text-xs text-neutral-textMuted mt-0.5">
                        Format: <span className="font-semibold">{item.fileType}</span> • File Size: {item.size} • Total Downloads: {item.downloadCount.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-3">
                    <a
                      href={item.downloadUrl}
                      target={item.downloadUrl.startsWith('http') ? '_blank' : undefined}
                      rel={item.downloadUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                      download={!item.downloadUrl.startsWith('http')}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary hover:bg-secondary-dark text-primary font-bold text-xs shadow-soft transition-all"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download {item.fileType}</span>
                    </a>
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

