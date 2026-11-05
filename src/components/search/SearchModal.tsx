'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, BookOpen, FileText, Bell, ExternalLink, ArrowRight, Newspaper } from 'lucide-react';
import Link from 'next/link';
import Fuse from 'fuse.js';
import { NOTICES } from '@/data/notices';
import { DOWNLOADS } from '@/data/downloads';
import { DEPARTMENTS } from '@/data/departments';
import { INITIAL_NEWS } from '@/data/news';

interface SearchItem {
  id: string;
  title: string;
  description?: string;
  category: 'Notice' | 'Download' | 'Department' | 'News';
  subCategory?: string;
  href: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Prepare unified searchable dataset
  const searchDataset: SearchItem[] = useMemo(() => {
    const list: SearchItem[] = [];

    // Departments
    DEPARTMENTS.forEach((dept) => {
      list.push({
        id: `dept-${dept.slug}`,
        title: dept.name,
        description: `${dept.faculty} • Degrees: ${dept.degreesOffered.join(', ')}`,
        category: 'Department',
        subCategory: dept.faculty,
        href: `/departments/${dept.slug}`,
      });
    });

    // Notices
    NOTICES.forEach((notice) => {
      list.push({
        id: `notice-${notice.id}`,
        title: notice.title,
        description: `${notice.category} • ${notice.date} • ${notice.department || 'General'}`,
        category: 'Notice',
        subCategory: notice.category,
        href: notice.href,
      });
    });

    // Downloads
    DOWNLOADS.forEach((dl) => {
      list.push({
        id: `dl-${dl.id}`,
        title: dl.title,
        description: `Format: ${dl.fileType} (${dl.size}) • Downloads: ${dl.downloadCount.toLocaleString()}`,
        category: 'Download',
        subCategory: dl.category,
        href: dl.downloadUrl,
      });
    });

    // News Articles
    INITIAL_NEWS.forEach((news) => {
      list.push({
        id: `news-${news.id}`,
        title: news.title,
        description: `${news.category} • ${news.publishedAt} • ${news.summary.slice(0, 75)}...`,
        category: 'News',
        subCategory: news.category,
        href: `/news/${news.slug}`,
      });
    });

    return list;
  }, []);

  const fuse = useMemo(() => {
    return new Fuse(searchDataset, {
      keys: ['title', 'description', 'subCategory', 'category'],
      threshold: 0.35,
      ignoreLocation: true,
    });
  }, [searchDataset]);

  const results = useMemo(() => {
    if (!query.trim()) {
      return searchDataset.slice(0, 6); // default suggestions
    }
    return fuse.search(query).map((res) => res.item);
  }, [query, fuse, searchDataset]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // will be triggered from global listener
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-neutral-dark/60 backdrop-blur-sm transition-opacity"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -16 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-dropdown border border-neutral-border overflow-hidden z-10"
          >
            {/* Input Header */}
            <div className="flex items-center px-4 py-3.5 border-b border-neutral-slate bg-neutral-light/50">
              <Search className="w-5 h-5 text-primary ml-1 mr-3 flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search programs, notices, forms, departments... (e.g. computer, merit, DMC)"
                className="w-full bg-transparent text-sm sm:text-base text-neutral-dark placeholder:text-neutral-textMuted focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 rounded-md text-neutral-textMuted hover:text-neutral-dark mr-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <kbd className="hidden sm:inline-block px-2 py-0.5 text-[11px] font-semibold text-neutral-textMuted bg-neutral-slate rounded border border-neutral-border">
                ESC
              </kbd>
            </div>

            {/* Results Area */}
            <div className="max-h-[60vh] overflow-y-auto p-3 space-y-1.5 divide-y divide-neutral-slate/60">
              <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-textMuted">
                {query.trim() ? `Search Results (${results.length})` : 'Popular Quick Access'}
              </div>

              {results.length === 0 ? (
                <div className="py-12 text-center text-sm text-neutral-textMuted">
                  No matching records found for <span className="font-semibold text-neutral-dark">"{query}"</span>.
                  <p className="mt-1 text-xs">Try searching for keywords like "Admissions", "DMC", "Physics", or "Tender".</p>
                </div>
              ) : (
                results.map((item) => {
                  const getIcon = () => {
                    switch (item.category) {
                      case 'Department':
                        return <BookOpen className="w-4 h-4 text-primary" />;
                      case 'Download':
                        return <FileText className="w-4 h-4 text-secondary-dark" />;
                      case 'Notice':
                        return <Bell className="w-4 h-4 text-emerald-600" />;
                      case 'News':
                        return <Newspaper className="w-4 h-4 text-purple-600" />;
                    }
                  };

                  const getBadgeColor = () => {
                    switch (item.category) {
                      case 'Department':
                        return 'bg-emerald-50 text-emerald-800 border-emerald-200';
                      case 'Download':
                        return 'bg-amber-50 text-amber-900 border-amber-200';
                      case 'Notice':
                        return 'bg-blue-50 text-blue-800 border-blue-200';
                      case 'News':
                        return 'bg-purple-50 text-purple-900 border-purple-200';
                    }
                  };

                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={onClose}
                      className="group flex items-start gap-3 p-3 rounded-xl hover:bg-neutral-slate/70 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-neutral-light border border-neutral-border/60 group-hover:border-primary/30 transition-colors mt-0.5">
                        {getIcon()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span
                            className={`inline-block px-2 py-0.5 text-[10px] font-semibold rounded-full border ${getBadgeColor()}`}
                          >
                            {item.category}
                          </span>
                          {item.subCategory && (
                            <span className="text-[11px] text-neutral-textMuted truncate">
                              • {item.subCategory}
                            </span>
                          )}
                        </div>
                        <h4 className="text-sm font-medium text-neutral-dark group-hover:text-primary transition-colors truncate">
                          {item.title}
                        </h4>
                        {item.description && (
                          <p className="text-xs text-neutral-textMuted line-clamp-1 mt-0.5">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <ArrowRight className="w-4 h-4 text-neutral-textMuted/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all self-center ml-2 flex-shrink-0" />
                    </Link>
                  );
                })
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2.5 bg-neutral-light border-t border-neutral-slate text-[11px] text-neutral-textMuted flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Image src="/images/icon.png" alt="University of Swat" width={16} height={16} className="inline-block object-contain" />
                <span>University of Swat Fast Search Engine</span>
              </span>
              <span className="flex items-center gap-2">
                <span>Navigate</span>
                <kbd className="px-1.5 py-0.5 bg-white border border-neutral-border rounded text-[10px]">↑</kbd>
                <kbd className="px-1.5 py-0.5 bg-white border border-neutral-border rounded text-[10px]">↓</kbd>
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

