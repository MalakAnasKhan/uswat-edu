'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  Home,
  GraduationCap,
  FileDown,
  Search,
  ArrowRight,
  ExternalLink,
  Phone,
  Compass,
} from 'lucide-react';

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/departments?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center py-16 px-4 sm:px-6 bg-neutral-light">
      <div className="max-w-xl w-full bg-white rounded-3xl p-8 sm:p-12 border border-neutral-border shadow-soft text-center space-y-6">
        {/* Swat Crest Emblem */}
        <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
          <Image
            src="/images/icon.png"
            alt="University of Swat Crest"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* 404 Text Content */}
        <div className="space-y-2">
          <span className="px-3 py-1 rounded-full bg-secondary/15 text-secondary-dark text-xs font-bold uppercase tracking-wider inline-block">
            404 Error • Page Relocated
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold text-neutral-dark">
            Academic Record Not Found
          </h1>
          <p className="text-xs sm:text-sm text-neutral-textMuted max-w-md mx-auto leading-relaxed">
            The university page, notice, or department resource you requested could not be located in the current web directory.
          </p>
        </div>

        {/* Quick Search Input */}
        <form onSubmit={handleSearch} className="max-w-md mx-auto">
          <div className="relative">
            <Search className="w-4 h-4 text-neutral-textMuted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search programs, departments, or notices..."
              className="w-full pl-10 pr-24 py-2.5 rounded-xl border border-neutral-border bg-neutral-light text-xs focus:outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-primary hover:bg-primary-hover text-white text-xs font-semibold transition-colors"
            >
              Search
            </button>
          </div>
        </form>

        {/* One-Click Quick Navigation Buttons */}
        <div className="pt-4 border-t border-neutral-slate grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-soft transition-all"
          >
            <Home className="w-4 h-4 text-secondary" />
            <span>Homepage</span>
          </Link>

          <a
            href="https://cms1.uswat.edu.pk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-secondary hover:bg-secondary-dark text-primary text-xs font-bold shadow-soft transition-all"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Student CMS</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>

          <Link
            href="/downloads"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-neutral-slate hover:bg-neutral-border text-neutral-dark text-xs font-semibold transition-all"
          >
            <FileDown className="w-4 h-4 text-secondary-dark" />
            <span>Downloads</span>
          </Link>
        </div>

        {/* Footer Support Info */}
        <p className="text-[11px] text-neutral-textMuted pt-2">
          Need immediate assistance? Contact IT Support at{' '}
          <a href="mailto:support@uswat.edu.pk" className="text-primary hover:underline font-medium">
            support@uswat.edu.pk
          </a>{' '}
          or call <strong className="text-neutral-dark">+92 946 9240446</strong>.
        </p>
      </div>
    </div>
  );
}

