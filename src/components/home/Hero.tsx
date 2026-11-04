'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, BookOpen, Sparkles, ChevronRight, GraduationCap } from 'lucide-react';
import { NOTICES } from '@/data/notices';

export default function Hero() {
  // Find the latest notice flagged as urgent
  const urgentNotice = NOTICES.find((n) => n.isUrgent) || NOTICES[0];

  const handleScrollToPrograms = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elem = document.getElementById('programs');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full bg-[#073620] text-white overflow-hidden">
      {/* Background Campus Visual with High-Resolution Fallback */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Main Gate.jpg"
          alt="University of Swat Campus Grounds"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Emerald to Charcoal Overlay for Crisp Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#073620]/95 via-[#073620]/88 to-[#0F172A]/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#073620] via-transparent to-black/30" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-20 sm:pb-28">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          {/* Institutional Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs text-secondary-light font-medium tracking-wide shadow-sm">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="uppercase tracking-wider font-semibold text-[11px]">
              Khyber Pakhtunkhwa • Charbagh Campus
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight leading-[1.15] sm:leading-[1.15]">
            Preserving Heritage,{' '}
            <span className="text-secondary">Cultivating Knowledge</span>,{' '}
            Shaping the Future
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-white/85 font-normal leading-relaxed max-w-2xl">
            A premier public sector university empowering Khyber Pakhtunkhwa through
            academic excellence, innovation, and leadership.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-2">
            <a
              href="#programs"
              onClick={handleScrollToPrograms}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-secondary hover:bg-secondary-dark text-primary font-bold text-sm shadow-dropdown transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <BookOpen className="w-4 h-4 text-primary" />
              <span>Explore Programs</span>
            </a>

            <a
              href="https://cms1.uswat.edu.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 backdrop-blur-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-soft group"
            >
              <GraduationCap className="w-4 h-4 text-secondary-light" />
              <span>Student CMS Portal</span>
              <ExternalLink className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        {/* Live Urgent Notice Ticker Bar */}
        {urgentNotice && (
          <div className="mt-12 sm:mt-16 pt-4 border-t border-white/15">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-black/40 backdrop-blur-md p-3 sm:px-4 sm:py-2.5 rounded-2xl border border-white/10 shadow-soft">
              {/* Pulsing Red Dot & Label */}
              <div className="flex items-center gap-2 shrink-0">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-300 bg-rose-950/60 border border-rose-800/60 px-2 py-0.5 rounded-md">
                  Urgent Notice
                </span>
              </div>

              {/* Ticker Text */}
              <div className="flex-1 min-w-0">
                <Link
                  href={urgentNotice.href}
                  className="group flex items-center gap-2 text-xs sm:text-sm text-white/95 hover:text-secondary-light transition-colors"
                >
                  <span className="truncate font-medium">{urgentNotice.title}</span>
                  <span className="hidden md:inline text-xs text-white/50 shrink-0">
                    ({urgentNotice.date})
                  </span>
                  <ChevronRight className="w-4 h-4 text-secondary shrink-0 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

