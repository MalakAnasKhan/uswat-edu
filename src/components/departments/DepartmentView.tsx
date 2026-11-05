'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  GraduationCap,
  Users,
  FileText,
  Mail,
  MapPin,
  Calendar,
  CheckCircle2,
  Download,
  ExternalLink,
  Sparkles,
  Award,
  ArrowRight,
  UserCheck,
} from 'lucide-react';
import { Department } from '@/data/departments';

interface DepartmentViewProps {
  department: Department;
}

type TabType = 'overview' | 'programs' | 'faculty' | 'curriculum';

export default function DepartmentView({ department }: DepartmentViewProps) {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  return (
    <div className="py-10 bg-neutral-light min-h-[85vh]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Breadcrumb Navigation */}
        <nav className="mb-6 flex items-center space-x-2 text-xs text-neutral-textMuted overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-neutral-textMuted">Academics</span>
          <span>/</span>
          <Link href="/departments" className="hover:text-primary transition-colors">
            Departments
          </Link>
          <span>/</span>
          <span className="text-primary font-semibold">{department.name}</span>
        </nav>

        {/* Header Hero Banner */}
        <div className="bg-gradient-to-br from-[#073620] via-[#0A4D2E] to-[#0F172A] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-dropdown relative overflow-hidden mb-8 border border-emerald-900/40">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-secondary/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-secondary-light border border-white/15">
                {department.faculty}
              </span>
              {department.establishedYear && (
                <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-white/80">
                  Established {department.establishedYear}
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-extrabold tracking-tight leading-tight">
              {department.name}
            </h1>

            <p className="text-sm sm:text-base text-white/85 leading-relaxed max-w-3xl">
              {department.shortDescription}
            </p>

            {/* Department Meta Badges */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-white/15 text-xs text-white/90">
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-secondary shrink-0" />
                <span>
                  <strong className="text-white">Head: </strong>
                  {department.hod}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary shrink-0" />
                <a
                  href={`mailto:${department.contactEmail}`}
                  className="hover:underline text-secondary-light truncate"
                >
                  {department.contactEmail}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-secondary shrink-0" />
                <span className="truncate">{department.location || 'Main Campus, Charbagh'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Tab Navigation */}
        <div className="flex items-center space-x-2 border-b border-neutral-border bg-white rounded-2xl p-1.5 shadow-soft mb-8 overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview & Vision', icon: BookOpen },
            { id: 'programs', label: 'Programs Offered', icon: GraduationCap },
            { id: 'faculty', label: 'Faculty Directory', icon: Users },
            { id: 'curriculum', label: 'Curriculum & Studies', icon: FileText },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                type="button"
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${isActive
                    ? 'bg-primary text-white shadow-soft'
                    : 'text-neutral-textMuted hover:text-neutral-dark hover:bg-neutral-slate'
                  }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-secondary' : 'text-neutral-textMuted'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Overview & Vision */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-border shadow-soft space-y-4">
                <div className="inline-block px-3 py-1 rounded-md bg-primary-muted text-primary text-xs font-bold uppercase tracking-wider">
                  Academic Focus & Mission
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-neutral-dark">
                  About the Department
                </h2>
                <p className="text-sm text-neutral-charcoal leading-relaxed">
                  The {department.name} at the University of Swat is dedicated to cultivating rigorous
                  intellectual inquiry, modern skillsets, and leadership in {department.faculty.replace('Faculty of ', '')}.
                  With seasoned faculty, advanced laboratories, and an interactive pedagogy, the department
                  prepares graduates for significant contributions in industry, civil service, academia, and global research.
                </p>

                {department.vision && (
                  <div className="p-5 rounded-2xl bg-neutral-light border border-neutral-border/70 border-l-4 border-l-secondary space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-secondary-dark flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> Department Vision
                    </span>
                    <p className="text-sm text-neutral-dark font-medium italic">
                      "{department.vision}"
                    </p>
                  </div>
                )}
              </div>

              {department.researchFocus && department.researchFocus.length > 0 && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-border shadow-soft">
                  <h3 className="text-lg font-serif font-bold text-neutral-dark mb-4">
                    Key Research Domains & Focus Areas
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {department.researchFocus.map((focus, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-light border border-neutral-border/60"
                      >
                        <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                        <span className="text-xs font-medium text-neutral-dark">{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Information */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-3xl p-6 border border-neutral-border shadow-soft space-y-4">
                <h3 className="font-serif font-bold text-base text-neutral-dark pb-2 border-b border-neutral-slate">
                  Quick Admissions Link
                </h3>
                <p className="text-xs text-neutral-textMuted leading-relaxed">
                  Admissions are currently invited for programs under this department for Fall 2026.
                </p>
                <Link
                  href="/admissions"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-secondary hover:bg-secondary-dark text-primary font-bold text-xs shadow-soft transition-all"
                >
                  <span>Admissions Guidelines</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://cms1.uswat.edu.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold text-xs transition-all"
                >
                  <span>Apply via CMS Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-neutral-border shadow-soft space-y-3">
                <h4 className="font-serif font-bold text-sm text-neutral-dark">Contact Secretariat</h4>
                <div className="space-y-2 text-xs text-neutral-charcoal">
                  <p>
                    <strong>Office: </strong>
                    {department.location || 'Academic Block, Charbagh Campus'}
                  </p>
                  <p>
                    <strong>Email: </strong>
                    <a href={`mailto:${department.contactEmail}`} className="text-primary hover:underline">
                      {department.contactEmail}
                    </a>
                  </p>
                  <p>
                    <strong>Helpline: </strong>
                    +92 946 9240446 (Ext. 112)
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Programs Offered */}
        {activeTab === 'programs' && (
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto mb-4">
              <h2 className="text-2xl font-serif font-bold text-neutral-dark">
                Degrees & Degree Pathways
              </h2>
              <p className="text-xs sm:text-sm text-neutral-textMuted mt-1">
                Curricula accredited by Higher Education Commission (HEC) and relevant statutory bodies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {department.programsDetail?.map((prog, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-neutral-border shadow-soft hover:shadow-card hover:border-primary/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-primary-muted text-primary border border-primary/20">
                        {prog.level}
                      </span>
                      <span className="text-xs font-semibold text-secondary-dark">
                        {prog.creditHours} Credits
                      </span>
                    </div>

                    <h3 className="text-lg font-bold font-serif text-neutral-dark mb-2">
                      {prog.title}
                    </h3>

                    <div className="text-xs text-neutral-textMuted space-y-1.5 mb-4">
                      <div>
                        <strong>Duration: </strong> {prog.duration}
                      </div>
                      <div className="pt-1">
                        <strong>Eligibility: </strong>
                        <p className="text-neutral-charcoal mt-0.5 leading-relaxed bg-neutral-light p-2.5 rounded-xl border border-neutral-border/60">
                          {prog.eligibility}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-slate">
                    <Link
                      href="/admissions"
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-neutral-slate hover:bg-secondary hover:text-primary transition-all text-xs font-semibold text-neutral-dark"
                    >
                      <span>Check Admission Requirements</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )) || (
                  <div className="col-span-full py-12 text-center text-sm text-neutral-textMuted">
                    Details for programs currently in update.
                  </div>
                )}
            </div>
          </div>
        )}

        {/* Tab 3: Faculty Directory */}
        {activeTab === 'faculty' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
              <div>
                <h2 className="text-2xl font-serif font-bold text-neutral-dark">
                  Distinguished Faculty Members
                </h2>
                <p className="text-xs sm:text-sm text-neutral-textMuted mt-1">
                  Professors, researchers, and subject experts holding doctoral degrees from prestigious institutions.
                </p>
              </div>
              <span className="text-xs font-semibold text-neutral-textMuted">
                {department.facultyMembers?.length || 0} Faculty Profiles
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {department.facultyMembers?.map((member, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-neutral-border shadow-soft hover:shadow-card hover:border-secondary transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-primary-muted text-primary flex items-center justify-center font-serif font-bold text-xl mb-4 border border-primary/20">
                      {member.name
                        .replace('Prof. ', '')
                        .replace('Dr. ', '')
                        .replace('Engr. ', '')
                        .charAt(0)}
                    </div>

                    <h3 className="font-serif font-bold text-base text-neutral-dark">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-secondary-dark mt-0.5">
                      {member.designation}
                    </p>
                    <p className="text-[11px] text-neutral-textMuted mt-1.5 leading-snug">
                      {member.qualification}
                    </p>

                    <div className="mt-4 pt-3 border-t border-neutral-slate">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-textMuted block mb-1">
                        Research Interests:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {member.researchInterests.map((interest, i) => (
                          <span
                            key={i}
                            className="text-[9px] font-medium px-2 py-0.5 rounded bg-neutral-slate text-neutral-charcoal"
                          >
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-neutral-slate">
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline font-medium"
                    >
                      <Mail className="w-3.5 h-3.5 text-secondary" />
                      <span className="truncate">{member.email}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Curriculum & Scheme of Studies */}
        {activeTab === 'curriculum' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-border shadow-soft space-y-6">
              <div>
                <span className="px-3 py-1 rounded-md bg-primary-muted text-primary text-xs font-bold uppercase tracking-wider">
                  Academic Framework
                </span>
                <h2 className="text-2xl font-serif font-bold text-neutral-dark mt-2">
                  Scheme of Studies & Syllabus Documents
                </h2>
                <p className="text-sm text-neutral-textMuted mt-1 leading-relaxed">
                  Download official course outlines, semester breakups, credit distribution, and prerequisite guidelines
                  approved by the Academic Council and Board of Studies.
                </p>
              </div>

              <div className="divide-y divide-neutral-slate border border-neutral-slate rounded-2xl overflow-hidden">
                {department.degreesOffered.map((deg, i) => (
                  <div
                    key={i}
                    className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-neutral-light transition-colors"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 rounded-xl bg-primary-muted text-primary">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-neutral-dark">{deg}</h4>
                        <p className="text-xs text-neutral-textMuted">
                          Curriculum approved under HEC Unified Guideline • 2026 Edition
                        </p>
                      </div>
                    </div>

                    <a
                      href="/downloads"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-secondary hover:bg-secondary-dark text-primary font-bold text-xs shadow-soft transition-all shrink-0"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Syllabus (PDF)</span>
                    </a>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-neutral-light border border-neutral-border text-xs text-neutral-textMuted flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span>
                  For course transfers, credit equivalence, and migration syllabus matching, please reach out to the
                  Directorate of Academics at <strong className="text-neutral-dark">academics@uswat.edu.pk</strong>.
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

