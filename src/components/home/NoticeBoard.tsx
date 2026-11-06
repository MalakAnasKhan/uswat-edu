'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Bell,
  ArrowRight,
  ExternalLink,
  Download,
  AlertCircle,
  Calendar,
  Building,
} from 'lucide-react';
import { NOTICES, Notice } from '@/data/notices';

type TabKey = 'All' | 'Admissions' | 'Examinations' | 'Tenders';

export default function NoticeBoard() {
  const [activeTab, setActiveTab] = useState<TabKey>('All');

  const filteredNotices = NOTICES.filter((item) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Admissions') return item.category === 'Admissions';
    if (activeTab === 'Examinations') return item.category === 'Examination';
    if (activeTab === 'Tenders') return item.category === 'Tender';
    return true;
  });

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-neutral-slate overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Section Header with Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-wider mb-1">
              <Bell className="w-4 h-4 text-secondary" />
              <span>Official University Board</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-neutral-dark tracking-tight">
              Announcements & Circulars
            </h2>
            <p className="text-sm text-neutral-textMuted mt-1">
              Stay up-to-date with current university schedules, examination entries, and tender notices.
            </p>
          </div>

          {/* Tab Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-neutral-slate border border-neutral-border/70 self-start md:self-auto">
            {(['All', 'Admissions', 'Examinations', 'Tenders'] as TabKey[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                type="button"
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${activeTab === tab
                    ? 'bg-primary text-white shadow-soft'
                    : 'text-neutral-charcoal hover:text-primary hover:bg-white/60'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Notices Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotices.slice(0, 6).map((notice) => {
            const isTender = notice.category === 'Tender';
            const isExam = notice.category === 'Examination';
            const isAdm = notice.category === 'Admissions';

            const badgeStyles = isAdm
              ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
              : isExam
                ? 'bg-amber-50 text-amber-900 border-amber-200'
                : isTender
                  ? 'bg-blue-50 text-blue-900 border-blue-200'
                  : 'bg-neutral-slate text-neutral-dark border-neutral-border';

            return (
              <div
                key={notice.id}
                className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-neutral-light/70 border border-neutral-border hover:border-primary/40 hover:bg-white hover:shadow-card transition-all duration-300"
              >
                <div>
                  {/* Card Meta Bar */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${badgeStyles}`}
                      >
                        {notice.category}
                      </span>
                      {notice.isUrgent && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse" />
                          Urgent
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1 text-[11px] text-neutral-textMuted font-medium">
                      <Calendar className="w-3.5 h-3.5 text-neutral-textMuted/70" />
                      <span>{notice.date}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-semibold text-neutral-dark group-hover:text-primary transition-colors line-clamp-3 leading-snug">
                    <Link
                      href={notice.href}
                      target={notice.href.startsWith('http') ? '_blank' : undefined}
                      rel={notice.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {notice.title}
                    </Link>
                  </h3>
                </div>

                {/* Footer Section with Issuing Department & Link */}
                <div className="mt-5 pt-3.5 border-t border-neutral-slate flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-[11px] text-neutral-textMuted truncate max-w-[170px]">
                    <Building className="w-3 h-3 text-secondary shrink-0" />
                    <span className="truncate">{notice.department || 'Registrar Office'}</span>
                  </div>

                  <Link
                    href={notice.href}
                    target={notice.href.startsWith('http') ? '_blank' : undefined}
                    rel={notice.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-secondary-dark transition-colors shrink-0"
                  >
                    <span>View Notice</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Board Footer */}
        <div className="mt-10 sm:mt-12 text-center pt-6 border-t border-neutral-slate">
          <Link
            href="/notices"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-slate hover:bg-primary hover:text-white text-neutral-dark font-semibold text-xs sm:text-sm transition-all shadow-sm"
          >
            <span>View All Notifications & Archives</span>
            <ArrowRight className="w-4 h-4 text-secondary" />
          </Link>
        </div>
      </div>
    </section>
  );
}

