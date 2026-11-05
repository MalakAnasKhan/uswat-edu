'use client';

import React from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  Award,
  FileSpreadsheet,
  Microscope,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

interface QuickLinkItem {
  id: string;
  title: string;
  description: string;
  href: string;
  isExternal?: boolean;
  icon: React.ElementType;
  badge?: string;
}

const QUICK_LINKS: QuickLinkItem[] = [
  {
    id: 'admissions',
    title: 'Online Admissions',
    description: 'Apply for undergraduate and graduate programs with verified eligibility and merit lists.',
    href: 'https://cms1.uswat.edu.pk',
    isExternal: true,
    icon: GraduationCap,
    badge: 'Fall 2026',
  },
  {
    id: 'examinations',
    title: 'Examination & Results',
    description: 'Access official terminal semester results, date sheets, roll number slips, and notifications.',
    href: '/downloads',
    icon: Award,
  },
  {
    id: 'challans',
    title: 'Fee Challans & Proformas',
    description: 'Download standard fee challans, duplicate DMC, and migration certificate forms.',
    href: '/downloads',
    icon: FileSpreadsheet,
  },
  {
    id: 'oric',
    title: 'Research & ORIC',
    description: 'Explore HEC recognized university journals, research centers, and innovation projects.',
    href: '/oric/journals',
    icon: Microscope,
  },
];

export default function QuickLinks() {
  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {QUICK_LINKS.map((item) => {
          const Icon = item.icon;
          const Component = item.isExternal ? 'a' : Link;
          const extraProps = item.isExternal
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {};

          return (
            <Component
              key={item.id}
              href={item.href}
              {...extraProps}
              className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white border border-neutral-border shadow-soft hover:shadow-card hover:border-secondary hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-muted text-primary group-hover:bg-secondary group-hover:text-primary transition-colors flex items-center justify-center shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  {item.badge && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-secondary/15 text-secondary-dark border border-secondary/30">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold font-serif text-neutral-dark group-hover:text-primary transition-colors flex items-center gap-1.5">
                  <span>{item.title}</span>
                  {item.isExternal && (
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-textMuted group-hover:text-primary opacity-70" />
                  )}
                </h3>

                <p className="text-xs text-neutral-textMuted mt-1.5 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-neutral-slate flex items-center justify-between text-xs font-semibold text-primary group-hover:text-secondary-dark transition-colors">
                <span>Access Portal</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Component>
          );
        })}
      </div>
    </section>
  );
}

