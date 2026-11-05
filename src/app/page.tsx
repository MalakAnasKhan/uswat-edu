import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  BookOpen,
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Users,
  Award,
  Building2,
  ExternalLink,
} from 'lucide-react';
import Hero from '@/components/home/Hero';
import QuickLinks from '@/components/home/QuickLinks';
import NoticeBoard from '@/components/home/NoticeBoard';
import LatestNews from '@/components/home/LatestNews';
import VCSpotlight from '@/components/home/VCSpotlight';
import CampusLife from '@/components/home/CampusLife';
import { DEPARTMENTS, FACULTIES } from '@/data/departments';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-light">
      {/* 1. Full-Width Hero Section */}
      <Hero />

      {/* 2. 4-Card Quick Links Elevation Grid */}
      <QuickLinks />

      {/* 3. Official Notice Board with Categorized Tabs */}
      <NoticeBoard />

      {/* 4. Latest News & Weekly Updates Showcase with Pictures */}
      <LatestNews />

      {/* 5. Vice Chancellor's Leadership Spotlight */}
      <VCSpotlight />

      {/* 5. Academic Programs & Faculties Showcase (Target for 'Explore Programs' anchor) */}
      <section id="programs" className="py-16 sm:py-20 bg-white border-y border-neutral-slate scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Faculties & Curricula
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-neutral-dark mt-1.5">
              Accredited Faculties & Academic Disciplines
            </h2>
            <p className="text-sm text-neutral-textMuted mt-2 leading-relaxed">
              Offering HEC recognized undergraduate, graduate, and doctoral degree programs
              geared towards scientific innovation, community leadership, and modern technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACULTIES.map((fac, idx) => {
              const deptsInFac = DEPARTMENTS.filter((d) => d.faculty === fac);
              return (
                <div
                  key={fac}
                  className="group relative p-6 sm:p-7 rounded-3xl bg-neutral-light border border-neutral-border hover:bg-white hover:border-primary/40 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-primary-muted text-primary group-hover:bg-primary group-hover:text-white transition-colors flex items-center justify-center font-bold text-base mb-5 shadow-sm">
                      0{idx + 1}
                    </div>

                    <h3 className="font-serif font-bold text-lg text-neutral-dark mb-2 group-hover:text-primary transition-colors">
                      {fac}
                    </h3>

                    <p className="text-xs text-neutral-textMuted mb-4 leading-relaxed">
                      {deptsInFac.length} Departments offering BS, MS/MPhil, and PhD research degrees.
                    </p>

                    <div className="space-y-2 pt-2 border-t border-neutral-slate">
                      {deptsInFac.slice(0, 3).map((d) => (
                        <div key={d.slug} className="flex items-start gap-2 text-xs text-neutral-charcoal">
                          <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                          <span className="truncate">{d.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-neutral-slate">
                    <Link
                      href="/departments"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-secondary-dark transition-colors"
                    >
                      <span>Explore Departments</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Campus Life & Key University Metrics Showcase */}
      <CampusLife />
    </div>
  );
}
