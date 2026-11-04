'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  BookOpen,
  Monitor,
  Bus,
  Home,
  Trophy,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

const FACILITIES = [
  {
    id: 'library',
    title: 'Central Library & Digital Repository',
    category: 'Academic Resource',
    image: '/images/Department.jpeg',
    description:
      'Over 25,000 physical volumes, subscriptions to international research journals, and 24/7 access to the HEC National Digital Library with dedicated quiet study carrels.',
    icon: BookOpen,
  },
  {
    id: 'computer-labs',
    title: 'High-Tech Computing & AI Laboratories',
    category: 'Technology',
    image: '/images/Meeting 2.jpg',
    description:
      'Equipped with modern high-performance workstations, dedicated gigabit fiber backbone, neural network accelerators, and specialized cyber-forensics toolkits.',
    icon: Monitor,
  },
  {
    id: 'transport',
    title: 'University Transport Fleet',
    category: 'Mobility',
    image: '/images/Main Gate.jpg',
    description:
      'A dedicated fleet of modern buses ensuring safe, timely, and subsidized daily commuting across Mingora, Saidu Sharif, Barikot, Kabal, and Matta to Charbagh campus.',
    icon: Bus,
  },
  {
    id: 'hostels',
    title: 'Purpose-Built Residential Hostels',
    category: 'Accommodation',
    image: '/images/Department.jpeg',
    description:
      'Separate, well-furnished hostels for male and female students featuring communal dining halls, study lounges, 24/7 backup power, and stringent CCTV security.',
    icon: Home,
  },
  {
    id: 'sports',
    title: 'Sports Grounds & Fitness Pavilion',
    category: 'Athletics',
    image: '/images/Meeting.jpg',
    description:
      'Expansive lush cricket and football grounds, indoor badminton courts, table tennis halls, and fitness pavilions promoting wholesome student athletics.',
    icon: Trophy,
  },
];

export default function CampusLife() {
  return (
    <section className="py-16 sm:py-24 bg-white border-t border-neutral-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/15 text-secondary-dark text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-secondary-dark" />
            <span>Vibrant Student Experience</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-neutral-dark">
            Campus Life & World-Class Facilities
          </h2>
          <p className="text-xs sm:text-sm text-neutral-textMuted mt-2 leading-relaxed">
            Situated amidst the serene peaks of Charbagh, the University of Swat provides an inclusive,
            enriching, and modern environment where academic and co-curricular pursuits flourish hand-in-hand.
          </p>
        </div>

        {/* Statistics Counter Band */}
        <div className="bg-[#073620] text-white rounded-3xl p-6 sm:p-10 mb-14 shadow-dropdown relative overflow-hidden border border-emerald-900/50">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-72 h-72 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/10 relative z-10">
            <div className="space-y-1">
              <div className="text-3xl sm:text-5xl font-serif font-extrabold text-secondary">
                8,000+
              </div>
              <div className="text-xs sm:text-sm text-white/85 font-medium">Enrolled Scholars</div>
            </div>

            <div className="space-y-1 pt-4 sm:pt-0">
              <div className="text-3xl sm:text-5xl font-serif font-extrabold text-secondary">
                30+
              </div>
              <div className="text-xs sm:text-sm text-white/85 font-medium">Degree Programs</div>
            </div>

            <div className="space-y-1 pt-4 sm:pt-0">
              <div className="text-3xl sm:text-5xl font-serif font-extrabold text-secondary">
                150+
              </div>
              <div className="text-xs sm:text-sm text-white/85 font-medium">Distinguished Faculty</div>
            </div>

            <div className="space-y-1 pt-4 sm:pt-0">
              <div className="text-3xl sm:text-5xl font-serif font-extrabold text-secondary">
                200+
              </div>
              <div className="text-xs sm:text-sm text-white/85 font-medium">Kanal Charbagh Campus</div>
            </div>
          </div>
        </div>

        {/* Visual Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FACILITIES.map((facility) => {
            const Icon = facility.icon;
            return (
              <div
                key={facility.id}
                className="group rounded-3xl bg-neutral-light border border-neutral-border overflow-hidden hover:shadow-card hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Facility Visual Banner */}
                  <div className="relative h-48 w-full overflow-hidden bg-neutral-slate">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <span className="absolute bottom-3 left-4 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-secondary text-primary">
                      {facility.category}
                    </span>
                  </div>

                  {/* Body Text */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 rounded-lg bg-primary-muted text-primary">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-serif font-bold text-base text-neutral-dark group-hover:text-primary transition-colors">
                        {facility.title}
                      </h3>
                    </div>

                    <p className="text-xs text-neutral-textMuted leading-relaxed mt-2">
                      {facility.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <div className="pt-3 border-t border-neutral-slate flex items-center justify-between text-xs font-semibold text-primary">
                    <span className="flex items-center gap-1 text-[11px] text-neutral-textMuted">
                      <ShieldCheck className="w-3.5 h-3.5 text-secondary" />
                      Maintained by Estate Section
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

