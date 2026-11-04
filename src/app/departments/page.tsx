'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BookOpen, GraduationCap, Mail, MapPin, Search, ArrowRight, Award } from 'lucide-react';
import { DEPARTMENTS, FACULTIES } from '@/data/departments';

export default function DepartmentsPage() {
  const [selectedFaculty, setSelectedFaculty] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = DEPARTMENTS.filter((dept) => {
    const matchesFaculty =
      selectedFaculty === 'All' || dept.faculty === selectedFaculty;
    const matchesSearch =
      dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.degreesOffered.some((deg) => deg.toLowerCase().includes(searchQuery.toLowerCase())) ||
      dept.hod.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFaculty && matchesSearch;
  });

  return (
    <div className="py-12 bg-neutral-light min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs text-neutral-textMuted">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-primary font-semibold">Academic Departments</span>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-border shadow-soft mb-8">
          <span className="px-3 py-1 rounded-md bg-primary-muted text-primary text-xs font-bold uppercase tracking-wider">
            Academic Portfolios
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-dark mt-2">
            Faculties & Academic Departments
          </h1>
          <p className="text-sm text-neutral-textMuted mt-2 max-w-3xl leading-relaxed">
            Discover our world-class departments offering accredited BS, MS/MPhil, and PhD programs
            blending rigorous coursework with active research laboratories and local cultural context.
          </p>

          {/* Search & Filters */}
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-neutral-textMuted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search department name or degree (e.g. computer, chemistry, LLB)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-border bg-neutral-light text-sm focus:outline-none focus:border-primary"
              />
            </div>

            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => setSelectedFaculty('All')}
                type="button"
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${selectedFaculty === 'All'
                  ? 'bg-primary text-white shadow-soft'
                  : 'bg-neutral-slate text-neutral-textMuted hover:text-neutral-dark'
                  }`}
              >
                All Faculties
              </button>
              {FACULTIES.map((fac) => (
                <button
                  key={fac}
                  onClick={() => setSelectedFaculty(fac)}
                  type="button"
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${selectedFaculty === fac
                    ? 'bg-primary text-white shadow-soft'
                    : 'bg-neutral-slate text-neutral-textMuted hover:text-neutral-dark'
                    }`}
                >
                  {fac.replace('Faculty of ', '')}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((dept) => (
            <div
              key={dept.slug}
              className="bg-white rounded-3xl border border-neutral-border p-6 shadow-soft hover:shadow-card hover:border-primary/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-primary-muted text-primary">
                    {dept.faculty}
                  </span>
                  {dept.establishedYear && (
                    <span className="text-[11px] text-neutral-textMuted">
                      Est. {dept.establishedYear}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold font-serif text-neutral-dark mb-2">
                  {dept.name}
                </h3>

                <p className="text-xs text-neutral-textMuted line-clamp-3 mb-4 leading-relaxed">
                  {dept.shortDescription}
                </p>

                {/* Degrees Offered Badges */}
                <div className="space-y-1.5 mb-4">
                  <span className="text-[11px] font-bold text-neutral-dark uppercase tracking-wider block">
                    Programs Offered:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {dept.degreesOffered.map((deg) => (
                      <span
                        key={deg}
                        className="text-[10px] font-medium px-2 py-0.5 rounded bg-neutral-slate text-neutral-charcoal border border-neutral-border/60"
                      >
                        {deg}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-slate space-y-3">
                <div className="text-xs text-neutral-textMuted flex items-center justify-between">
                  <span className="font-semibold text-neutral-dark">Head of Dept:</span>
                  <span>{dept.hod}</span>
                </div>
                <div className="text-xs text-neutral-textMuted flex items-center justify-between">
                  <span className="font-semibold text-neutral-dark">Contact:</span>
                  <a
                    href={`mailto:${dept.contactEmail}`}
                    className="text-primary hover:underline font-medium"
                  >
                    {dept.contactEmail}
                  </a>
                </div>
                <div className="pt-1">
                  <Link
                    href={`/departments/${dept.slug}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-neutral-slate hover:bg-primary hover:text-white transition-all text-xs font-semibold text-neutral-dark"
                  >
                    <span>View Department Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

