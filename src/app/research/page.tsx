'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Microscope,
  BookOpen,
  Award,
  Globe,
  FileText,
  Sparkles,
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Leaf,
  FlaskConical,
} from 'lucide-react';

interface Journal {
  title: string;
  issn: string;
  frequency: string;
  recognition: string;
  chiefEditor: string;
  description: string;
  scope: string[];
}

const JOURNALS: Journal[] = [
  {
    title: 'Journal of Plant & Environmental Sciences (JPES)',
    issn: 'ISSN: 2708-5430 (Online) | 2708-5422 (Print)',
    frequency: 'Bi-Annual (June & December)',
    recognition: 'HEC Recognized (Y-Category)',
    chiefEditor: 'Prof. Dr. Hassan Sher (TI)',
    description:
      'Premier peer-reviewed international scientific journal dedicated to botanical discoveries, alpine biodiversity, conservation biology, and climate change resilience in high-altitude environments.',
    scope: ['Plant Ecology', 'Alpine Conservation', 'Watershed Sciences', 'Phytochemistry'],
  },
  {
    title: 'Swat Journal of Social Sciences & Humanities (SJSSH)',
    issn: 'ISSN: 2617-8923 (Print) | 2617-8931 (Online)',
    frequency: 'Bi-Annual (Spring & Autumn)',
    recognition: 'HEC Recognized Journal',
    chiefEditor: 'Dr. Muhammad Naveed',
    description:
      'Multidisciplinary academic journal covering regional economics, Gandharan sociology, governance, constitutional law, and peace & conflict resolution across South and Central Asia.',
    scope: ['Regional Economics', 'Sociology & Culture', 'Constitutional Law', 'Development Studies'],
  },
  {
    title: 'Gandhara International Journal of Archaeology & Heritage',
    issn: 'ISSN: 2521-778X',
    frequency: 'Annual Publication',
    recognition: 'International Editorial Board',
    chiefEditor: 'Dr. Hazrat Bilal',
    description:
      'Dedicated to Gandhara Buddhist art, epigraphy, archaeological excavations, museum conservation, and sustainable heritage tourism management in the Hindu Kush.',
    scope: ['Gandharan Art', 'Epigraphy', 'Museum Conservation', 'Cultural Tourism'],
  },
  {
    title: 'Journal of Pure & Applied Computational Sciences (JPACS)',
    issn: 'ISSN: 2812-4021',
    frequency: 'Bi-Annual (May & November)',
    recognition: 'Peer-Reviewed Computing Journal',
    chiefEditor: 'Dr. Shah Khalid',
    description:
      'Publishing cutting-edge discoveries in artificial intelligence, neural computing, applied numerical methods, mathematical modeling, and distributed algorithms.',
    scope: ['Machine Learning', 'Cybersecurity', 'Numerical Modeling', 'Cloud Computing'],
  },
];

interface GrantProject {
  title: string;
  fundingAgency: string;
  allocation: string;
  pi: string;
  duration: string;
  summary: string;
}

const GRANTS: GrantProject[] = [
  {
    title: 'Commercial Phytochemical Extraction & Value Addition of High-Altitude Medicinal Flora of Swat Valley',
    fundingAgency: 'HEC Technology Development Fund (TDF)',
    allocation: 'PKR 18.2 Million',
    pi: 'Prof. Dr. Hassan Sher (TI), Department of Environmental Sciences',
    duration: '2024 - 2027',
    summary:
      'Developing indigenous pharmaceutical extracts, pilot-scale herbal processing protocols, and rural collector training for sustainable economic empowerment in Malakand division.',
  },
  {
    title: 'Genomic Profiling and Antimicrobial Resistance Surveillance of Swat River Watershed Microbiota',
    fundingAgency: 'HEC National Research Program for Universities (NRPU)',
    allocation: 'PKR 14.8 Million',
    pi: 'Prof. Dr. Akhtar Rasheed, Dept. of Applied Microbiology',
    duration: '2025 - 2027',
    summary:
      'Next-generation metagenomic sequencing of municipal effluent and alpine runoff to track antimicrobial resistance genes and design ecological bioremediation strategies.',
  },
  {
    title: 'AI-Powered IoT Early Warning System for Glacial Lake Outburst Floods (GLOF) in the Hindu Kush Region',
    fundingAgency: 'KP Higher Education Research & Innovation Grant',
    allocation: 'PKR 9.5 Million',
    pi: 'Dr. Shah Khalid, Department of Computer Science & IT',
    duration: '2025 - 2026',
    summary:
      'Deploying solar-powered edge computing sensors and satellite telemetry across high-altitude glacial tributaries to predict real-time flash floods with high accuracy.',
  },
];

const LAB_FACILITIES = [
  {
    title: 'Central Chromatography & Spectrometry Facility',
    dept: 'Department of Chemical Sciences',
    specs: 'High Performance Liquid Chromatography (HPLC), GC-MS, FTIR Spectrophotometer, Atomic Absorption Spectrometer.',
    icon: FlaskConical,
  },
  {
    title: 'High-Performance Computing & GIS Remote Sensing Lab',
    dept: 'Department of Computer Science & IT',
    specs: 'Parallel GPU clusters, ArcGIS Pro spatial mapping workstations, drone thermal imaging processing engines.',
    icon: Cpu,
  },
  {
    title: 'Molecular Diagnostics & Microbiology Cleanroom',
    dept: 'Department of Applied Microbiology & Biotechnology',
    specs: 'Class II Biosafety cabinets, RT-PCR thermocyclers, gel documentation systems, -80°C ultra-low cryo-freezers.',
    icon: Microscope,
  },
  {
    title: 'Alpine Medicinal Flora Conservatory & Herbarium',
    dept: 'Centre for Plant Sciences & Biodiversity',
    specs: 'Houses over 12,000 categorized botanical specimens of Northern Pakistan, climate-controlled tissue culture chambers.',
    icon: Leaf,
  },
];

export default function ResearchPage() {
  return (
    <div className="py-10 bg-neutral-light min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-neutral-textMuted">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-primary font-semibold">Research, Innovation & Commercialization (ORIC)</span>
        </nav>

        {/* Hero Header */}
        <div className="bg-gradient-to-br from-[#073620] via-[#0A4D2E] to-[#0F172A] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-dropdown relative overflow-hidden border border-emerald-900/40">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-secondary/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-secondary-light border border-white/15">
              <Microscope className="w-3.5 h-3.5 text-secondary" />
              <span>Office of Research, Innovation & Commercialization (ORIC)</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-extrabold tracking-tight leading-tight">
              Pioneering High-Impact Research & Regional Innovation
            </h1>

            <p className="text-sm sm:text-base text-white/85 leading-relaxed">
              ORIC at the University of Swat facilitates faculty discoveries, manages HEC funded research
              grants, oversees academic journals, and bridges the gap between university laboratories and industrial enterprise.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#journals"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary hover:bg-secondary-dark text-primary font-bold text-xs shadow-soft transition-all"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explore University Journals</span>
              </a>
              <a
                href="#grants"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 backdrop-blur-md transition-all"
              >
                <span>Active Research Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* ORIC Director's Note & Mission */}
        <section className="bg-white rounded-3xl border border-neutral-border p-6 sm:p-10 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="px-3 py-1 rounded-md bg-primary-muted text-primary text-xs font-bold uppercase tracking-wider">
                Institutional Mandate
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-dark">
                Transforming Ideas into Societal & Economic Progress
              </h2>
              <p className="text-sm text-neutral-charcoal leading-relaxed">
                The Office of Research, Innovation and Commercialization (ORIC) functions as the nerve
                center for strategic research at the University of Swat. Our mandate includes fostering
                interdisciplinary collaborations, protecting intellectual property (IP), facilitating patent
                filings, and translating research from Charbagh laboratories into scalable solutions for Khyber Pakhtunkhwa.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-medium text-neutral-dark">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                  <span>HEC Policy Compliant Research Cell</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                  <span>University-Industry Collaboration Desk</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                  <span>Technology Incubation & Startup Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                  <span>Open Access Academic Journals Publication</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-neutral-light p-6 rounded-2xl border border-neutral-border/80 space-y-3">
              <h3 className="font-serif font-bold text-base text-neutral-dark">
                ORIC Secretariat
              </h3>
              <p className="text-xs text-neutral-textMuted leading-relaxed">
                Faculty members and research scholars may contact the ORIC helpdesk for grant proposal submissions and ethics clearance.
              </p>
              <div className="space-y-1.5 text-xs text-neutral-charcoal pt-2 border-t border-neutral-slate">
                <p><strong>Director: </strong> Prof. Dr. Muhammad Farooq</p>
                <p><strong>Email: </strong> <a href="mailto:oric@uswat.edu.pk" className="text-primary hover:underline">oric@uswat.edu.pk</a></p>
                <p><strong>Office: </strong> 2nd Floor, Admin Complex, Charbagh</p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Journals Showcase */}
        <section id="journals" className="scroll-mt-24 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Scholarly Publications
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-dark mt-1">
              Official University Research Journals
            </h2>
            <p className="text-xs sm:text-sm text-neutral-textMuted mt-1">
              Open-access, double-blind peer-reviewed journals indexed in national and international bibliographic databases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {JOURNALS.map((j, i) => (
              <div
                key={i}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-neutral-border shadow-soft hover:shadow-card hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-primary-muted text-primary border border-primary/20">
                      {j.recognition}
                    </span>
                    <span className="text-[11px] text-neutral-textMuted">{j.frequency}</span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-neutral-dark mb-1">
                    {j.title}
                  </h3>
                  <p className="text-xs font-mono text-secondary-dark font-medium mb-3">
                    {j.issn}
                  </p>
                  <p className="text-xs text-neutral-textMuted leading-relaxed mb-4">
                    {j.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-neutral-slate">
                    <span className="text-[10px] font-bold uppercase text-neutral-textMuted tracking-wider">
                      Subject Scopes:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {j.scope.map((s, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-medium px-2 py-0.5 rounded bg-neutral-slate text-neutral-charcoal"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-slate flex items-center justify-between">
                  <span className="text-[11px] text-neutral-textMuted">
                    Editor: <strong className="text-neutral-dark">{j.chiefEditor}</strong>
                  </span>
                  <a
                    href="mailto:oric@uswat.edu.pk?subject=Journal%20Manuscript%20Submission"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-secondary-dark transition-colors"
                  >
                    <span>Author Guidelines</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ongoing & Funded Research Projects */}
        <section id="grants" className="scroll-mt-24 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Competitive Grants
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-dark mt-1">
              Funded Research Projects & Grants
            </h2>
            <p className="text-xs sm:text-sm text-neutral-textMuted mt-1">
              Active projects funded by Higher Education Commission (HEC), government agencies, and industry partners.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {GRANTS.map((grant, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-neutral-border shadow-soft hover:shadow-card hover:border-secondary transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-secondary/15 text-secondary-dark border border-secondary/30">
                      {grant.duration}
                    </span>
                    <span className="text-xs font-bold text-primary font-mono">
                      {grant.allocation}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-base text-neutral-dark mb-2 leading-snug">
                    {grant.title}
                  </h3>

                  <div className="text-xs text-primary font-medium mb-3">
                    Grantor: {grant.fundingAgency}
                  </div>

                  <p className="text-xs text-neutral-textMuted leading-relaxed">
                    {grant.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-slate text-[11px] text-neutral-textMuted">
                  <strong>Principal Investigator: </strong>
                  <span className="text-neutral-dark block mt-0.5">{grant.pi}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Research Facilities & Labs */}
        <section className="bg-white rounded-3xl border border-neutral-border p-6 sm:p-10 shadow-soft space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Experimental Infrastructure
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-dark mt-1">
              State-of-the-Art Research Laboratories
            </h2>
            <p className="text-xs sm:text-sm text-neutral-textMuted mt-1">
              Specialized scientific instruments and analytical facilities at Main Campus Charbagh available for research scholars and regional industry testing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {LAB_FACILITIES.map((lab, i) => {
              const Icon = lab.icon;
              return (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-neutral-light border border-neutral-border/80 flex items-start gap-4 hover:bg-neutral-slate/40 transition-colors"
                >
                  <div className="p-3 rounded-xl bg-primary-muted text-primary shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-secondary-dark uppercase tracking-wider">
                      {lab.dept}
                    </span>
                    <h3 className="font-serif font-bold text-sm text-neutral-dark mt-0.5 mb-1">
                      {lab.title}
                    </h3>
                    <p className="text-xs text-neutral-textMuted leading-relaxed">
                      {lab.specs}
                    </p>
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

