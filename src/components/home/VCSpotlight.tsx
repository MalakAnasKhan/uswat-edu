'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Quote, ArrowRight, Award, MapPin, Sparkles, ShieldCheck } from 'lucide-react';

export default function VCSpotlight() {
  return (
    <section className="py-16 sm:py-20 bg-neutral-light">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="bg-white rounded-3xl border border-neutral-border p-6 sm:p-10 lg:p-12 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: VC Portrait Frame */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden shadow-card border-4 border-primary ring-4 ring-primary/10 mb-4 group">
                <Image
                  src="/images/Vice Chancellor.jpeg"
                  alt="Prof. Dr. Husnul Amin - Vice Chancellor University of Swat"
                  fill
                  sizes="(max-width: 640px) 192px, 224px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary/15 text-secondary-dark text-[11px] font-bold border border-secondary/30">
                  <ShieldCheck className="w-3.5 h-3.5 text-secondary-dark" />
                  <span>Executive Leadership</span>
                </div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-primary">
                  Prof. Dr. Husnul Amin
                </h3>
                <p className="text-xs font-semibold text-neutral-dark">Vice Chancellor</p>
                <p className="text-[11px] text-neutral-textMuted flex items-center justify-center gap-1">
                  <MapPin className="w-3 h-3 text-secondary" />
                  <span>University of Swat, Charbagh</span>
                </p>
              </div>
            </div>

            {/* Right: VC Quote & Context */}
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-primary-muted text-primary text-xs font-bold uppercase tracking-wider">
                  Vice Chancellor's Strategic Vision
                </span>
                <span className="px-3 py-1 rounded-md bg-secondary/15 text-secondary-dark text-xs font-bold uppercase tracking-wider border border-secondary/30">
                  "Work Hard. Work Smart. Deliver Results."
                </span>
              </div>

              <div className="relative">
                <Quote className="w-10 h-10 text-secondary/30 absolute -top-3 -left-2 -z-0 pointer-events-none" />
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-dark leading-snug relative z-10">
                  Leading Institutional Transformation & Regional Impact
                </h2>
              </div>

              <blockquote className="text-sm sm:text-base text-neutral-charcoal leading-relaxed space-y-3 font-normal border-l-2 border-secondary/60 pl-4 py-1 italic">
                <p>
                  "Our core institutional roadmap for the University of Swat rests on a clear principle:{' '}
                  <strong className="text-primary not-italic font-bold">
                    Work Hard. Work Smart. Deliver Results.
                  </strong>{' '}
                  We are driving full-scale digital transformation, campus automation, good governance,
                  and impactful research commercialization across our purpose-built Charbagh facilities."
                </p>
                <p className="not-italic text-xs sm:text-sm text-neutral-textMuted">
                  Together with our Registrar, Dr. Arshad Ali Khan, distinguished faculty, and statutory
                  bodies, we are empowering the youth of Khyber Pakhtunkhwa with 21st-century competencies.
                </p>
              </blockquote>

              <div className="pt-2 flex items-center">
                <Link
                  href="/about/vc-message"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-semibold shadow-soft hover:shadow-card transition-all group"
                >
                  <span>Read Full Message from the VC Desk</span>
                  <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
