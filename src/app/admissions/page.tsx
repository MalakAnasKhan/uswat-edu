'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ExternalLink,
  ChevronDown,
  ArrowRight,
  FileCheck2,
  Calendar,
  CheckCircle2,
  Download,
  AlertCircle,
  HelpCircle,
  UserPlus,
  FileEdit,
  UploadCloud,
  Printer,
  Table,
  BadgeAlert,
} from 'lucide-react';

type AdmissionsTab = 'workflow' | 'eligibility' | 'fees' | 'merit';

interface FeeRow {
  faculty: string;
  admissionFee: string;
  tuitionFee: string;
  labLibraryFee: string;
  totalFirstSemester: string;
  subsequentSemesters: string;
}

const FEE_DATA: FeeRow[] = [
  {
    faculty: 'Faculty of Chemical Sciences',
    admissionFee: 'PKR 8,500',
    tuitionFee: 'PKR 28,000',
    labLibraryFee: 'PKR 6,500',
    totalFirstSemester: 'PKR 43,000',
    subsequentSemesters: 'PKR 34,500',
  },
  {
    faculty: 'Faculty of Physical & Numerical Sciences (CS & IT / SE)',
    admissionFee: 'PKR 9,000',
    tuitionFee: 'PKR 32,000',
    labLibraryFee: 'PKR 7,000',
    totalFirstSemester: 'PKR 48,000',
    subsequentSemesters: 'PKR 39,000',
  },
  {
    faculty: 'Faculty of Physical & Numerical Sciences (Math / Physics)',
    admissionFee: 'PKR 8,000',
    tuitionFee: 'PKR 26,000',
    labLibraryFee: 'PKR 5,000',
    totalFirstSemester: 'PKR 39,000',
    subsequentSemesters: 'PKR 31,000',
  },
  {
    faculty: 'Faculty of Management & Social Sciences (BBA / Law)',
    admissionFee: 'PKR 8,500',
    tuitionFee: 'PKR 30,000',
    labLibraryFee: 'PKR 4,500',
    totalFirstSemester: 'PKR 43,000',
    subsequentSemesters: 'PKR 34,500',
  },
  {
    faculty: 'Faculty of Life Sciences (Microbiology / Biotech / Env)',
    admissionFee: 'PKR 8,500',
    tuitionFee: 'PKR 29,000',
    labLibraryFee: 'PKR 6,500',
    totalFirstSemester: 'PKR 44,000',
    subsequentSemesters: 'PKR 35,500',
  },
];

export default function AdmissionsPage() {
  const [activeTab, setActiveTab] = useState<AdmissionsTab>('workflow');
  const [expandedAccordion, setExpandedAccordion] = useState<string | null>('bs');

  const toggleAccordion = (id: string) => {
    setExpandedAccordion(expandedAccordion === id ? null : id);
  };

  return (
    <div className="py-10 bg-neutral-light min-h-[85vh]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Breadcrumb Navigation */}
        <nav className="mb-6 flex items-center space-x-2 text-xs text-neutral-textMuted">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-primary font-semibold">Admissions Directorate</span>
        </nav>

        {/* Hero Banner */}
        <div className="bg-gradient-to-br from-[#073620] via-[#0A4D2E] to-[#0F172A] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-dropdown relative overflow-hidden mb-10 border border-emerald-900/40">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-secondary/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-primary font-bold text-xs uppercase tracking-wider animate-pulse">
                <Sparkles className="w-3.5 h-3.5" />
                Admissions Open
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-white/90 border border-white/15">
                Session: Fall 2026 / Spring 2027
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-extrabold tracking-tight leading-tight">
              Begin Your Academic Journey in Swat
            </h1>

            <p className="text-sm sm:text-base text-white/85 leading-relaxed">
              Explore diverse undergraduate and postgraduate programs across four specialized faculties.
              Apply easily through our centralized digital Student Information System (CMS).
            </p>

            {/* Key Dates Badge & CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="https://cms1.uswat.edu.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-secondary hover:bg-secondary-dark text-primary font-bold text-sm shadow-dropdown transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Apply Online Now</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <Link
                href="/downloads"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 backdrop-blur-md transition-all"
              >
                <Download className="w-4 h-4 text-secondary" />
                <span>Download Prospectus 2026-27</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Interactive Nav Tabs */}
        <div className="flex items-center space-x-2 border-b border-neutral-border bg-white rounded-2xl p-1.5 shadow-soft mb-8 overflow-x-auto">
          {[
            { id: 'workflow', label: '1. Step-by-Step How to Apply' },
            { id: 'eligibility', label: '2. Eligibility Criteria' },
            { id: 'fees', label: '3. Fee Structure' },
            { id: 'merit', label: '4. Merit Lists & Schedules' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as AdmissionsTab)}
              type="button"
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-primary text-white shadow-soft'
                  : 'text-neutral-textMuted hover:text-neutral-dark hover:bg-neutral-slate'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: HOW TO APPLY */}
        {activeTab === 'workflow' && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                Streamlined Online Admission Process
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-dark mt-1">
                4 Easy Steps to Complete Your Application
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: 'Create Account',
                  icon: UserPlus,
                  desc: 'Visit cms1.uswat.edu.pk and register your applicant profile using your CNIC or B-Form and an active mobile number.',
                },
                {
                  step: '02',
                  title: 'Fill Application Details',
                  icon: FileEdit,
                  desc: 'Enter your personal information, address, and academic qualifications (Matric/Inter/Bachelor) and pick your degree preferences.',
                },
                {
                  step: '03',
                  title: 'Upload Bank Challan',
                  icon: UploadCloud,
                  desc: 'Download the system-generated application fee challan (PKR 1,500), deposit at any HBL/NBP branch, and upload the stamped receipt.',
                },
                {
                  step: '04',
                  title: 'Submit & Print Form',
                  icon: Printer,
                  desc: 'Preview all entered records, submit your application before the deadline, and print the confirmation voucher for admission interviews.',
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.step}
                    className="p-6 rounded-3xl bg-white border border-neutral-border shadow-soft hover:shadow-card hover:border-primary/40 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl font-serif font-extrabold text-secondary/40">
                          {item.step}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-primary-muted text-primary flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                      <h3 className="font-serif font-bold text-base text-neutral-dark mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-neutral-textMuted leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-neutral-slate">
                      <span className="text-[11px] font-semibold text-primary">
                        Step {item.step} of 4
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-6 rounded-3xl bg-[#073620] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-dropdown">
              <div>
                <h3 className="font-serif font-bold text-lg text-secondary">
                  Ready to submit your application?
                </h3>
                <p className="text-xs text-white/80 mt-1">
                  Applications for Fall 2026 are actively being accepted on the central admissions server.
                </p>
              </div>
              <a
                href="https://cms1.uswat.edu.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-secondary hover:bg-secondary-dark text-primary font-bold text-xs uppercase tracking-wider shrink-0 transition-all"
              >
                Go to Online Registration Portal
              </a>
            </div>
          </div>
        )}

        {/* TAB 2: ELIGIBILITY CRITERIA */}
        {activeTab === 'eligibility' && (
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="text-center max-w-xl mx-auto mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                HEC Recognized Standards
              </span>
              <h2 className="text-2xl font-serif font-bold text-neutral-dark mt-1">
                Program Eligibility Requirements
              </h2>
            </div>

            {/* Accordion 1: Undergraduate (BS) */}
            <div className="border border-neutral-border rounded-2xl bg-white overflow-hidden shadow-soft">
              <button
                onClick={() => toggleAccordion('bs')}
                type="button"
                className="w-full flex items-center justify-between p-5 text-left font-serif font-bold text-base text-neutral-dark hover:bg-neutral-light transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-primary flex items-center justify-center font-sans text-xs">
                    BS
                  </div>
                  <span>Undergraduate Programs (BS 4-Year / LLB 5-Year)</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-neutral-textMuted transition-transform duration-200 ${
                    expandedAccordion === 'bs' ? 'rotate-180 text-primary' : ''
                  }`}
                />
              </button>

              {expandedAccordion === 'bs' && (
                <div className="p-5 border-t border-neutral-slate bg-neutral-light/50 space-y-3 text-xs text-neutral-charcoal leading-relaxed">
                  <p>
                    <strong>General Criteria: </strong> Candidates must have passed Higher Secondary
                    School Certificate (HSSC / Intermediate) or equivalent with at least{' '}
                    <strong className="text-primary">45% to 50% marks</strong> from a recognized Board
                    of Intermediate & Secondary Education.
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong>BS Computer Science & Software Engineering: </strong> Intermediate with
                      Mathematics or Pre-Engineering with minimum 50% marks.
                    </li>
                    <li>
                      <strong>BS Chemistry / Microbiology / Biotechnology: </strong> F.Sc. Pre-Medical
                      with minimum 50% marks.
                    </li>
                    <li>
                      <strong>LLB (5-Year): </strong> Minimum 50% marks in Intermediate + Law Admission
                      Test (LAT) conducted by HEC passed with at least 50% score.
                    </li>
                    <li>
                      <strong>BBA (Hons) / BS Economics / Tourism: </strong> FA/F.Sc./I.Com with minimum
                      45% marks.
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Accordion 2: Graduate (MS / MPhil) */}
            <div className="border border-neutral-border rounded-2xl bg-white overflow-hidden shadow-soft">
              <button
                onClick={() => toggleAccordion('ms')}
                type="button"
                className="w-full flex items-center justify-between p-5 text-left font-serif font-bold text-base text-neutral-dark hover:bg-neutral-light transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center font-sans text-xs">
                    MS
                  </div>
                  <span>Graduate Programs (MS / MPhil 2-Year)</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-neutral-textMuted transition-transform duration-200 ${
                    expandedAccordion === 'ms' ? 'rotate-180 text-primary' : ''
                  }`}
                />
              </button>

              {expandedAccordion === 'ms' && (
                <div className="p-5 border-t border-neutral-slate bg-neutral-light/50 space-y-3 text-xs text-neutral-charcoal leading-relaxed">
                  <p>
                    <strong>General Criteria: </strong> 16 years of education (BS 4-Year or traditional
                    MA/MSc) in the relevant field of study from an HEC recognized university.
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Minimum CGPA of <strong>2.50 out of 4.00</strong> under semester system, or 50% marks
                      in annual system.
                    </li>
                    <li>
                      Pass University Entry Test / GAT General conducted by NTS/UoS with minimum 50% marks.
                    </li>
                    <li>
                      Departmental academic interview and verification of degrees and transcripts.
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Accordion 3: Doctoral (PhD) */}
            <div className="border border-neutral-border rounded-2xl bg-white overflow-hidden shadow-soft">
              <button
                onClick={() => toggleAccordion('phd')}
                type="button"
                className="w-full flex items-center justify-between p-5 text-left font-serif font-bold text-base text-neutral-dark hover:bg-neutral-light transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center font-sans text-xs">
                    PhD
                  </div>
                  <span>Doctoral Programs (PhD 3-5 Years)</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-neutral-textMuted transition-transform duration-200 ${
                    expandedAccordion === 'phd' ? 'rotate-180 text-primary' : ''
                  }`}
                />
              </button>

              {expandedAccordion === 'phd' && (
                <div className="p-5 border-t border-neutral-slate bg-neutral-light/50 space-y-3 text-xs text-neutral-charcoal leading-relaxed">
                  <p>
                    <strong>General Criteria: </strong> 18 years of education (MS / MPhil with thesis)
                    in the relevant discipline from an HEC recognized university.
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Minimum CGPA of <strong>3.00 out of 4.00</strong> under semester system, or First
                      Division in annual system.
                    </li>
                    <li>
                      GRE Subject / GAT Subject or University Subject Test with minimum 60% cumulative score.
                    </li>
                    <li>
                      Submission of a formal research statement of intent and viva examination with the
                      Departmental Graduate Committee (DGC).
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 3: FEE STRUCTURE */}
        {activeTab === 'fees' && (
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                Transparent Fee Schedules
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-dark mt-1">
                Semester Fee Structure (Academic Session 2026-27)
              </h2>
              <p className="text-xs sm:text-sm text-neutral-textMuted mt-1">
                Subsidized public sector tuition approved by the University Syndicate & Finance Committee.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-neutral-border shadow-soft overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-primary text-white font-serif">
                      <th className="p-4 font-semibold">Faculty / Discipline</th>
                      <th className="p-4 font-semibold">Admission / Reg Fee</th>
                      <th className="p-4 font-semibold">Semester Tuition</th>
                      <th className="p-4 font-semibold">Lab & Library</th>
                      <th className="p-4 font-semibold text-secondary">1st Semester Total</th>
                      <th className="p-4 font-semibold">Subsequent Semesters</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-slate">
                    {FEE_DATA.map((row, i) => (
                      <tr key={i} className="hover:bg-neutral-light transition-colors">
                        <td className="p-4 font-medium text-neutral-dark">{row.faculty}</td>
                        <td className="p-4 text-neutral-textMuted">{row.admissionFee}</td>
                        <td className="p-4 text-neutral-textMuted">{row.tuitionFee}</td>
                        <td className="p-4 text-neutral-textMuted">{row.labLibraryFee}</td>
                        <td className="p-4 font-bold text-primary bg-primary-muted/30">
                          {row.totalFirstSemester}
                        </td>
                        <td className="p-4 text-neutral-charcoal font-semibold">
                          {row.subsequentSemesters}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-neutral-light border-t border-neutral-slate text-[11px] text-neutral-textMuted flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <span>
                  * Hostel Accommodation charges (PKR 14,000 / semester) are optional and subject to merit allocation.
                </span>
                <Link
                  href="/downloads"
                  className="font-semibold text-primary hover:underline flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5 text-secondary" />
                  <span>Download Full Fee Schedule PDF</span>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: MERIT LISTS & SCHEDULE */}
        {activeTab === 'merit' && (
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                Fall 2026 Timelines
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-dark mt-1">
                Admissions Calendar & Merit Rosters
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Important Dates */}
              <div className="bg-white rounded-3xl p-6 border border-neutral-border shadow-soft space-y-4">
                <h3 className="font-serif font-bold text-base text-neutral-dark flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-secondary" />
                  <span>Important Admission Dates</span>
                </h3>
                <div className="divide-y divide-neutral-slate text-xs space-y-2">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-neutral-charcoal font-medium">
                      Last Date for Online Submission:
                    </span>
                    <span className="font-bold text-rose-600">November 20, 2026</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-neutral-charcoal font-medium">
                      ETEA / University Entry Test:
                    </span>
                    <span className="font-bold text-neutral-dark">November 24, 2026</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-neutral-charcoal font-medium">
                      Provisional Merit List Display:
                    </span>
                    <span className="font-bold text-neutral-dark">November 28, 2026</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-neutral-charcoal font-medium">
                      1st Final Merit List & Interviews:
                    </span>
                    <span className="font-bold text-primary">December 02, 2026</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-neutral-charcoal font-medium">Commencement of Classes:</span>
                    <span className="font-bold text-secondary-dark">December 15, 2026</span>
                  </div>
                </div>
              </div>

              {/* Published Merit Lists */}
              <div className="bg-white rounded-3xl p-6 border border-neutral-border shadow-soft space-y-4">
                <h3 className="font-serif font-bold text-base text-neutral-dark flex items-center gap-2">
                  <FileCheck2 className="w-5 h-5 text-secondary" />
                  <span>Live Merit Lists</span>
                </h3>
                <div className="space-y-2.5">
                  {[
                    {
                      dept: 'BS Computer Science & Software Engineering',
                      date: 'Nov 02, 2026',
                      quota: 'Open Merit List 1',
                    },
                    {
                      dept: 'BS Chemistry & Chemical Sciences',
                      date: 'Nov 02, 2026',
                      quota: 'Open Merit List 1',
                    },
                    {
                      dept: 'LLB (5 Years Integrated)',
                      date: 'Oct 30, 2026',
                      quota: 'LAT Verified Merit List',
                    },
                    {
                      dept: 'BBA (Hons) & Management Sciences',
                      date: 'Oct 28, 2026',
                      quota: 'Open Merit List 1',
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-neutral-light border border-neutral-border/70 flex items-center justify-between gap-2"
                    >
                      <div>
                        <h4 className="text-xs font-bold text-neutral-dark">{item.dept}</h4>
                        <p className="text-[10px] text-neutral-textMuted">
                          {item.quota} • Released: {item.date}
                        </p>
                      </div>
                      <a
                        href="/downloads"
                        className="p-2 rounded-xl bg-white border border-neutral-border text-primary hover:bg-secondary hover:text-primary transition-colors shrink-0"
                        title="Download PDF"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

