'use client';

import React from 'react';
import Link from 'next/link';
import {
  Award,
  Calendar,
  Download,
  FileCheck2,
  FileText,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import ResultChecker from '@/components/examinations/ResultChecker';

interface DateSheet {
  id: string;
  title: string;
  program: string;
  publishedDate: string;
  examStartDate: string;
  fileSize: string;
}

const DATE_SHEETS: DateSheet[] = [
  {
    id: 'ds-1',
    title: 'Date Sheet for BS Semester Terminal Examinations (Autumn 2026)',
    program: 'BS All Disciplines (Regular & Affiliated Colleges)',
    publishedDate: 'November 01, 2026',
    examStartDate: 'November 25, 2026',
    fileSize: '540 KB',
  },
  {
    id: 'ds-2',
    title: 'Revised Date Sheet for BA/BSc Annual Examinations 2026',
    program: 'BA / BSc / B.Com Annual Candidates',
    publishedDate: 'October 28, 2026',
    examStartDate: 'November 18, 2026',
    fileSize: '620 KB',
  },
  {
    id: 'ds-3',
    title: 'Schedule for MA/MSc Final Year Composite Annual Examination',
    program: 'Postgraduate Annual Programs',
    publishedDate: 'October 20, 2026',
    examStartDate: 'December 05, 2026',
    fileSize: '480 KB',
  },
  {
    id: 'ds-4',
    title: 'Date Sheet for B.Ed (1.5 & 2.5 Years) Terminal Examinations',
    program: 'Institute of Education & Research',
    publishedDate: 'October 15, 2026',
    examStartDate: 'November 30, 2026',
    fileSize: '390 KB',
  },
];

export default function ExaminationsPage() {
  return (
    <div className="py-10 bg-neutral-light min-h-[85vh]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-10">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-neutral-textMuted">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-primary font-semibold">Examinations & Results</span>
        </nav>

        {/* Hero Banner with Quick Notice Bar */}
        <div className="bg-gradient-to-br from-[#073620] via-[#0A4D2E] to-[#0F172A] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-dropdown relative overflow-hidden border border-emerald-900/40">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-secondary/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-secondary-light border border-white/15">
              <Award className="w-3.5 h-3.5 text-secondary" />
              <span>Controller of Examinations Directorate</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-extrabold tracking-tight leading-tight">
              Examination Wing & Results Portal
            </h1>

            <p className="text-sm sm:text-base text-white/85 leading-relaxed">
              Verify terminal semester and annual degree results, download authorized examination date sheets,
              and apply for official Detailed Marks Certificates (DMCs) and migration certificates.
            </p>

            {/* Quick Notice Banner */}
            <div className="pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 bg-black/40 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-xs">
                <span className="px-2.5 py-0.5 rounded-md bg-secondary text-primary font-bold text-[11px] uppercase tracking-wider shrink-0 self-start sm:self-auto">
                  Exam Alert
                </span>
                <span className="text-white/90">
                  Submission of Examination Admission Forms & Fee for BA/BSc Annual Exam 2026 is open without late fee until November 15, 2026.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Result Lookup Demo Widget */}
        <ResultChecker />

        {/* Date Sheets & Schedules Section */}
        <section className="bg-white rounded-3xl border border-neutral-border p-6 sm:p-8 lg:p-10 shadow-soft">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-neutral-slate">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                Official Time Tables
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-neutral-dark mt-1">
                Current Examination Date Sheets
              </h2>
            </div>
            <Link
              href="/downloads"
              className="text-xs font-semibold text-primary hover:text-secondary-dark flex items-center gap-1 transition-colors"
            >
              <span>Download Archive</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="divide-y divide-neutral-slate">
            {DATE_SHEETS.map((ds) => (
              <div
                key={ds.id}
                className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-neutral-light/50 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-primary-muted text-primary">
                      {ds.program}
                    </span>
                    <span className="text-[11px] text-neutral-textMuted">
                      Starts: <strong className="text-neutral-dark">{ds.examStartDate}</strong>
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-neutral-dark">
                    {ds.title}
                  </h3>
                  <p className="text-xs text-neutral-textMuted">
                    Published: {ds.publishedDate} • PDF Document ({ds.fileSize})
                  </p>
                </div>

                <div className="shrink-0">
                  <a
                    href="/downloads"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary hover:bg-secondary-dark text-primary font-bold text-xs shadow-soft transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Schedule</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Examination Services Quick Links */}
        <section className="bg-white rounded-3xl border border-neutral-border p-6 sm:p-8 lg:p-10 shadow-soft">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Student Records & Certifications
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-neutral-dark mt-1">
              Examination Services & Applications
            </h2>
            <p className="text-xs sm:text-sm text-neutral-textMuted mt-1">
              Download authorized proformas and apply for verification, certificates, and record corrections.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: 'Duplicate DMC / Degree',
                desc: 'Apply for duplicate academic transcript, marks sheet, or degree diploma certificate.',
                icon: FileCheck2,
              },
              {
                title: 'Degree in Absentia',
                desc: 'Request issuance of official university degree certificate in absentia or urgent basis.',
                icon: Award,
              },
              {
                title: 'Migration Certificate (NOC)',
                desc: 'Proforma for inter-university transfer and college migration clearance certificates.',
                icon: FileText,
              },
              {
                title: 'Re-checking of Answer Books',
                desc: 'Procedure and application form for formal re-totaling of terminal examination scripts.',
                icon: ShieldCheck,
              },
            ].map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-neutral-light border border-neutral-border hover:border-primary/40 hover:shadow-card transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-primary-muted text-primary flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif font-bold text-sm text-neutral-dark mb-1">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-neutral-textMuted leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-neutral-slate">
                    <Link
                      href="/downloads"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-secondary-dark transition-colors"
                    >
                      <span>Download Form</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

