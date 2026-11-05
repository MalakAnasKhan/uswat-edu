'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Building2,
  Award,
  BookOpen,
  Users,
  Compass,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Search,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

type AboutTab = 'history' | 'governance' | 'campuses' | 'affiliated';

interface AffiliatedCollege {
  id: string;
  name: string;
  sector: 'Public' | 'Private';
  district: string;
  programsOffered: string[];
  principal: string;
  contact: string;
}

const AFFILIATED_COLLEGES: AffiliatedCollege[] = [
  {
    id: 'gdc-saidu',
    name: 'Government Post Graduate Jahanzeb College, Saidu Sharif',
    sector: 'Public',
    district: 'Swat',
    programsOffered: ['BS Computer Science', 'BS English', 'BS Physics', 'BS Economics'],
    principal: 'Prof. Muhammad Riaz',
    contact: '+92 946 9240120',
  },
  {
    id: 'gdc-matta',
    name: 'Government Degree College, Matta',
    sector: 'Public',
    district: 'Swat',
    programsOffered: ['BS Political Science', 'BS Botany', 'BS Chemistry', 'BA/BSc'],
    principal: 'Prof. Fazal Rabbi',
    contact: '+92 946 792110',
  },
  {
    id: 'gdc-shangla',
    name: 'Government Degree College, Alpuri, Shangla',
    sector: 'Public',
    district: 'Shangla',
    programsOffered: ['BS Urdu', 'BS Islamic Studies', 'BA/BSc Annual'],
    principal: 'Prof. Dr. Zahir Shah',
    contact: '+92 996 850230',
  },
  {
    id: 'gdc-girls-saidu',
    name: 'Government Girls Post Graduate Degree College, Saidu Sharif',
    sector: 'Public',
    district: 'Swat',
    programsOffered: ['BS Zoology', 'BS Home Economics', 'BS Mathematics', 'BS English'],
    principal: 'Prof. Nasreen Akhtar',
    contact: '+92 946 9240135',
  },
  {
    id: 'pvt-swat-law',
    name: 'Swat College of Science & Technology, Mingora',
    sector: 'Private',
    district: 'Swat',
    programsOffered: ['BS Computer Science', 'BBA (Hons)', 'BS Software Engineering'],
    principal: 'Dr. Shahab Khan',
    contact: '+92 946 712044',
  },
  {
    id: 'pvt-frontier',
    name: 'Frontier Law College, Swat Campus',
    sector: 'Private',
    district: 'Swat',
    programsOffered: ['LLB (5 Years Integrated Program)'],
    principal: 'Advocate Jamil Ahmad',
    contact: '+92 946 724890',
  },
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<AboutTab>('history');
  const [collegeSearch, setCollegeSearch] = useState('');
  const [sectorFilter, setSectorFilter] = useState<'All' | 'Public' | 'Private'>('All');

  const filteredColleges = AFFILIATED_COLLEGES.filter((col) => {
    const matchesSector = sectorFilter === 'All' || col.sector === sectorFilter;
    const matchesSearch =
      col.name.toLowerCase().includes(collegeSearch.toLowerCase()) ||
      col.district.toLowerCase().includes(collegeSearch.toLowerCase()) ||
      col.programsOffered.some((p) => p.toLowerCase().includes(collegeSearch.toLowerCase()));
    return matchesSector && matchesSearch;
  });

  return (
    <div className="py-10 bg-neutral-light min-h-[85vh]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-10">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-neutral-textMuted">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-primary font-semibold">About University of Swat</span>
        </nav>

        {/* Hero Header */}
        <div className="bg-gradient-to-br from-[#073620] via-[#0A4D2E] to-[#0F172A] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-dropdown relative overflow-hidden border border-emerald-900/40">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-secondary/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-secondary-light border border-white/15">
              <Building2 className="w-3.5 h-3.5 text-secondary" />
              <span>Chartered under KP Universities Act</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-extrabold tracking-tight leading-tight">
              About the University of Swat
            </h1>

            <p className="text-sm sm:text-base text-white/85 leading-relaxed">
              Established in 2010, the University of Swat stands as a premier seat of higher education
              in Khyber Pakhtunkhwa, promoting intellectual discovery, Gandharan heritage preservation,
              and sustainable regional prosperity.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-white/90">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-secondary" />
                <span>HEC Recognized Public Sector University</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-secondary" />
                <span>Main Campus Charbagh, District Swat, KP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Tab Navigation */}
        <div className="flex items-center space-x-2 border-b border-neutral-border bg-white rounded-2xl p-1.5 shadow-soft overflow-x-auto">
          {[
            { id: 'history', label: 'History, Vision & Mission', icon: BookOpen },
            { id: 'governance', label: 'Governance & Syndicate', icon: Award },
            { id: 'campuses', label: 'Campuses & Facilities', icon: Building2 },
            { id: 'affiliated', label: 'Affiliated Colleges', icon: Users },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as AboutTab)}
                type="button"
                className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  isActive
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

        {/* TAB 1: HISTORY, VISION & MISSION */}
        {activeTab === 'history' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* History Text */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-neutral-border shadow-soft space-y-4">
                <span className="px-3 py-1 rounded-md bg-primary-muted text-primary text-xs font-bold uppercase tracking-wider">
                  Origin & Legislative Act
                </span>
                <h2 className="text-2xl font-serif font-bold text-neutral-dark">
                  Institutional Genesis & Evolution
                </h2>
                <p className="text-sm text-neutral-charcoal leading-relaxed">
                  The University of Swat was formally established by the Government of Khyber Pakhtunkhwa
                  in May 2010 and later promulgated under the Khyber Pakhtunkhwa Universities Act 2012
                  (amended 2016). The university was envisioned in the aftermath of regional crises to serve
                  as an enduring beacon of peaceful illumination, academic empowerment, and modern scientific acumen.
                </p>
                <p className="text-sm text-neutral-charcoal leading-relaxed">
                  From initial makeshift operations, the university has now consolidated into a permanent,
                  purpose-built campus spanning more than 200 Kanals in Charbagh, Swat. The master-planned
                  campus features high-tech laboratories, state-of-the-art computer centers, dedicated hostels,
                  and an expanding fleet of student transit.
                </p>
              </div>

              {/* Campus Visual */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-card border-4 border-white aspect-4/3">
                  <Image
                    src="/images/Main Gate.jpg"
                    alt="University of Swat Main Campus"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="text-[10px] uppercase font-bold text-secondary">Charbagh Complex</span>
                    <h4 className="font-serif font-bold text-sm">Permanent Campus Grounds</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-neutral-border shadow-soft space-y-3 border-l-4 border-l-primary">
                <div className="flex items-center gap-2 text-primary font-serif font-bold text-lg">
                  <Compass className="w-5 h-5 text-secondary" />
                  <h3>Our Vision</h3>
                </div>
                <p className="text-sm text-neutral-charcoal leading-relaxed italic">
                  "To be a globally recognized institution of higher learning, distinguished by transformative
                  scholarship, regional socio-economic impact, ethical citizenship, and the preservation
                  of the Gandharan cultural legacy."
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-neutral-border shadow-soft space-y-3 border-l-4 border-l-secondary">
                <div className="flex items-center gap-2 text-primary font-serif font-bold text-lg">
                  <Sparkles className="w-5 h-5 text-secondary" />
                  <h3>Our Mission</h3>
                </div>
                <p className="text-sm text-neutral-charcoal leading-relaxed">
                  "To impart world-class undergraduate and postgraduate education, foster groundbreaking
                  multidisciplinary research through ORIC, cultivate ethical leadership, and empower the
                  communities of Malakand division and Pakistan."
                </p>
              </div>
            </div>

            {/* Official University Motto Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#073620] to-[#0A4D2E] text-white shadow-soft flex flex-col sm:flex-row items-center justify-between gap-6 border border-emerald-800">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-secondary">
                  Official Institutional Motto
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  "Aspiring for Quality Education with Relevance"
                </h3>
              </div>
              <div className="text-center sm:text-right shrink-0">
                <p className="text-lg sm:text-xl text-secondary-light font-serif font-medium" dir="rtl">
                  "مطابقت کے ساتھ معیاری تعلیم کے لئے خواہشمند"
                </p>
                <span className="text-[11px] text-white/70 block mt-0.5">
                  University of Swat Charter • Khyber Pakhtunkhwa
                </span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: GOVERNANCE & SYNDICATE */}
        {activeTab === 'governance' && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                Statutory Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-dark mt-1">
                University Governance & Leadership
              </h2>
              <p className="text-xs sm:text-sm text-neutral-textMuted mt-1">
                Governed under the provisions of the Khyber Pakhtunkhwa Universities Act with statutory oversight.
              </p>
            </div>

            {/* Statutory Hierarchy Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-3xl bg-white border border-neutral-border shadow-soft text-center space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-primary-muted text-primary mx-auto flex items-center justify-center font-bold">
                  01
                </div>
                <h4 className="font-serif font-bold text-base text-neutral-dark">The Chancellor</h4>
                <p className="text-xs font-semibold text-secondary-dark">Governor of Khyber Pakhtunkhwa</p>
                <p className="text-[11px] text-neutral-textMuted">Supreme Authority & Visitor of the University</p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-neutral-border shadow-soft text-center space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-primary-muted text-primary mx-auto flex items-center justify-center font-bold">
                  02
                </div>
                <h4 className="font-serif font-bold text-base text-neutral-dark">The Pro-Chancellor</h4>
                <p className="text-xs font-semibold text-secondary-dark">Minister for Higher Education KP</p>
                <p className="text-[11px] text-neutral-textMuted">Government Policy & Legislative Oversight</p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-neutral-border shadow-soft text-center space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-secondary/15 text-primary mx-auto flex items-center justify-center font-bold">
                  03
                </div>
                <h4 className="font-serif font-bold text-base text-neutral-dark">The Vice Chancellor</h4>
                <p className="text-xs font-semibold text-secondary-dark">Prof. Dr. Husnul Amin</p>
                <p className="text-[11px] text-neutral-textMuted">Principal Executive & Academic Officer</p>
              </div>
            </div>

            {/* Syndicate & Senate Members */}
            <div className="bg-white rounded-3xl border border-neutral-border p-6 sm:p-8 shadow-soft space-y-6">
              <div className="border-b border-neutral-slate pb-4">
                <h3 className="font-serif font-bold text-lg text-neutral-dark">
                  Statutory Syndicate Council
                </h3>
                <p className="text-xs text-neutral-textMuted mt-0.5">
                  The executive governing body responsible for institutional management, budget, appointments, and statutes.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                {[
                  { role: 'Chairman Syndicate', name: 'Prof. Dr. Husnul Amin (Vice Chancellor)' },
                  { role: 'Member / Secretary', name: 'Dr. Arshad Ali Khan (Registrar)' },
                  { role: 'Member (HEC Nominee)', name: 'Representative of Higher Education Commission' },
                  { role: 'Member (HED KP)', name: 'Secretary, Higher Education Dept. Khyber Pakhtunkhwa' },
                  { role: 'Member (Finance Dept)', name: 'Secretary, Finance Department, Govt. of KP' },
                  { role: 'Elected Faculty Dean', name: 'Prof. Dr. Akhtar Rasheed (Dean Life Sciences)' },
                ].map((m, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-neutral-light border border-neutral-border/70 space-y-1">
                    <span className="text-[10px] font-bold text-secondary-dark uppercase block">{m.role}</span>
                    <span className="font-semibold text-neutral-dark block">{m.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CAMPUSES & FACILITIES */}
        {activeTab === 'campuses' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Main Campus (Charbagh)',
                  status: 'Primary Flagship Campus',
                  specs: '200+ Kanals • Science Complexes • Central Library • Administration Secretariat',
                  location: 'Charbagh, Swat',
                  image: '/images/Main Gate.jpg',
                  lead: 'Central Administration Block, Academic Blocks A, B & C, Central Labs, Boys/Girls Hostels',
                },
                {
                  title: 'Women Campus',
                  status: 'Specialized Center for Women',
                  specs: 'Dedicated Academic Facility • Transport Fleet • Smart Classrooms',
                  location: 'Saidu Sharif / Mingora',
                  image: '/images/Department.jpeg',
                  lead: 'Fostering female higher education enrollment in sciences, arts, and professional studies.',
                },
                {
                  title: 'Shangla Campus',
                  status: 'Outreach Sub-Campus',
                  specs: 'Mountain Higher Education Outreach • Computer Labs • Regional Studies',
                  location: 'Alpuri, District Shangla',
                  image: '/images/Meeting 2.jpg',
                  lead: 'Bringing accredited university degree programs directly to the remote youth of Shangla.',
                },
              ].map((camp, i) => (
                <div
                  key={i}
                  className="rounded-3xl bg-white border border-neutral-border overflow-hidden shadow-soft hover:shadow-card hover:border-primary/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-48 w-full bg-neutral-slate">
                      <Image
                        src={camp.image}
                        alt={camp.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                      <span className="absolute bottom-3 left-4 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-secondary text-primary">
                        {camp.status}
                      </span>
                    </div>

                    <div className="p-6 space-y-2">
                      <h3 className="font-serif font-bold text-base text-neutral-dark">{camp.title}</h3>
                      <p className="text-xs font-medium text-primary flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-secondary" />
                        <span>{camp.location}</span>
                      </p>
                      <p className="text-xs text-neutral-textMuted leading-relaxed pt-1">
                        {camp.specs}
                      </p>
                      <p className="text-xs text-neutral-charcoal pt-2 border-t border-neutral-slate">
                        {camp.lead}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-secondary-dark transition-colors"
                    >
                      <span>Campus Inquiries & Directions</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: AFFILIATED COLLEGES DIRECTORY */}
        {activeTab === 'affiliated' && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl border border-neutral-border p-6 sm:p-8 shadow-soft">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-slate">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                    Affiliation Directorate
                  </span>
                  <h2 className="text-2xl font-serif font-bold text-neutral-dark mt-1">
                    Registered & Affiliated Degree Colleges
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-textMuted mt-0.5">
                    Degree-awarding colleges registered under the statutory affiliation committee of University of Swat.
                  </p>
                </div>

                {/* Filter Pills */}
                <div className="flex items-center gap-2">
                  {(['All', 'Public', 'Private'] as const).map((s) => (
                    <button
                      key={s}
                      onClick={() => setSectorFilter(s)}
                      type="button"
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        sectorFilter === s
                          ? 'bg-primary text-white shadow-soft'
                          : 'bg-neutral-slate text-neutral-textMuted hover:text-neutral-dark'
                      }`}
                    >
                      {s} Sector
                    </button>
                  ))}
                </div>
              </div>

              {/* Search Box */}
              <div className="my-6 max-w-md relative">
                <Search className="w-4 h-4 text-neutral-textMuted absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={collegeSearch}
                  onChange={(e) => setCollegeSearch(e.target.value)}
                  placeholder="Search college name, district, or program..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-border bg-neutral-light text-xs focus:outline-none focus:border-primary"
                />
              </div>

              {/* College Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredColleges.map((col) => (
                  <div
                    key={col.id}
                    className="p-5 rounded-2xl bg-neutral-light border border-neutral-border/80 flex flex-col justify-between hover:bg-white hover:shadow-card transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            col.sector === 'Public'
                              ? 'bg-emerald-100 text-primary'
                              : 'bg-blue-100 text-blue-900'
                          }`}
                        >
                          {col.sector} Sector
                        </span>
                        <span className="text-[11px] font-semibold text-secondary-dark">
                          District {col.district}
                        </span>
                      </div>

                      <h4 className="font-serif font-bold text-sm text-neutral-dark mb-2">
                        {col.name}
                      </h4>

                      <div className="space-y-1 text-xs text-neutral-textMuted mb-3">
                        <p><strong>Principal: </strong> {col.principal}</p>
                        <p><strong>Contact: </strong> {col.contact}</p>
                      </div>

                      <div className="pt-2 border-t border-neutral-slate">
                        <span className="text-[10px] font-bold text-neutral-dark uppercase block mb-1">
                          Programs Offered:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {col.programsOffered.map((prog, idx) => (
                            <span
                              key={idx}
                              className="text-[9px] font-medium px-2 py-0.5 rounded bg-white border border-neutral-border text-neutral-charcoal"
                            >
                              {prog}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-neutral-slate">
                      <Link
                        href="/examinations"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-secondary-dark transition-colors"
                      >
                        <span>Exam Schedules & Results</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

