'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  ChevronDown,
  Menu,
  X,
  GraduationCap,
  Sparkles,
  BookOpen,
  Award,
  Layers,
  FileCheck2,
  Building2,
  Calendar,
  ExternalLink,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  title: string;
  href?: string;
  items?: {
    name: string;
    description?: string;
    href: string;
    badge?: string;
  }[];
}

const NAVIGATION_ITEMS: NavItem[] = [
  {
    title: 'About',
    items: [
      {
        name: "Vice Chancellor's Desk",
        description: 'Message from the Vice Chancellor & Leadership Profile',
        href: '/about/vc-message',
      },
      {
        name: 'Vision & Mission',
        description: 'Core institutional values and long-term academic vision',
        href: '/about/vision-mission',
      },
      {
        name: 'Syndicate & Senate',
        description: 'Statutory bodies, university governance & administrative council',
        href: '/about/governance',
      },
      {
        name: 'Campuses',
        description: 'Main Campus Charbagh, Shangla Campus & specialized sub-campuses',
        href: '/about/campuses',
      },
      {
        name: 'Affiliated Colleges',
        description: 'Registered public and private degree colleges across Malakand division',
        href: '/about/affiliated-colleges',
      },
    ],
  },
  {
    title: 'Academics',
    items: [
      {
        name: 'Faculties',
        description: 'Overview of all academic faculties & faculties leadership',
        href: '/academics/faculties',
      },
      {
        name: 'Academic Departments',
        description: 'Explore all specialized academic departments and disciplines',
        href: '/departments',
      },
      {
        name: 'Academic Calendar',
        description: 'Semester schedules, enrollment deadlines, and examination timelines',
        href: '/academics/calendar',
      },
      {
        name: 'Quality Enhancement Cell (QEC)',
        description: 'HEC compliance, institutional audits, and accreditation standards',
        href: '/academics/qec',
      },
    ],
  },
  {
    title: 'Admissions',
    items: [
      {
        name: 'Prospectus 2026-27',
        description: 'Official undergraduate and postgraduate admissions guide',
        href: '/admissions/prospectus',
        badge: 'New',
      },
      {
        name: 'Eligibility Criteria',
        description: 'Requirements for BS, MS/MPhil, and PhD program admissions',
        href: '/admissions/eligibility',
      },
      {
        name: 'Fee Structure',
        description: 'Comprehensive semester tuition, hostel fees, and deposit details',
        href: '/admissions/fee-structure',
      },
      {
        name: 'Merit Lists',
        description: 'Check latest provisional and finalized admission merit rosters',
        href: '/admissions/merit-lists',
        badge: 'Live',
      },
      {
        name: 'Apply Online',
        description: 'Direct entry via the central student application portal',
        href: 'https://cms1.uswat.edu.pk',
      },
    ],
  },
  {
    title: 'Examinations',
    items: [
      {
        name: 'Date Sheets',
        description: 'Annual and semester terminal examination schedules',
        href: '/examinations/date-sheets',
      },
      {
        name: 'Results Portal',
        description: 'Online semester and annual degree results verification',
        href: '/examinations/results',
      },
      {
        name: 'Duplicate DMC / Degrees',
        description: 'Official application process for duplicate mark sheets and diplomas',
        href: '/downloads',
      },
      {
        name: 'Migration Certificates',
        description: 'Inter-university and college migration NOC processing guidelines',
        href: '/downloads',
      },
    ],
  },
  {
    title: 'Research & ORIC',
    items: [
      {
        name: 'Research Journals',
        description: 'HEC-recognized peer-reviewed multidisciplinary academic journals',
        href: '/oric/journals',
      },
      {
        name: 'Research Centers',
        description: 'Swat herbal, cultural archaeology & computing research labs',
        href: '/oric/centers',
      },
      {
        name: 'Publications & Grants',
        description: 'Faculty research outputs, conference proceedings, and funded projects',
        href: '/oric/publications',
      },
    ],
  },
  {
    title: 'News & Media',
    items: [
      {
        name: 'Latest News & Stories',
        description: 'Weekly photo stories, research breakthroughs & event chronicles',
        href: '/news',
        badge: 'New',
      },
      {
        name: 'Official Notifications',
        description: 'Tenders, statutory circulars, and departmental notifications',
        href: '/notices',
      },
      {
        name: 'Admin Post Desk',
        description: 'Publish and curate news stories (Authorized Personnel)',
        href: '/admin/news',
      },
    ],
  },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const toggleMobileAccordion = (title: string) => {
    setMobileExpandedSection(mobileExpandedSection === title ? null : title);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 bg-white ${
        isScrolled ? 'shadow-md border-b border-neutral-border' : 'border-b border-neutral-slate'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Title Area */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Image
                src="/images/Logo.png"
                alt="University of Swat Crest"
                fill
                sizes="(max-width: 640px) 48px, 56px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-primary font-serif">
                  University of Swat
                </span>
                <span className="hidden xs:inline-block px-1.5 py-0.5 rounded text-[11px] font-medium bg-secondary/15 text-secondary-dark font-sans">
                  پوهنتون
                </span>
              </div>
              <span className="text-[11px] sm:text-xs text-neutral-textMuted tracking-normal">
                Aspiring for Quality Education with Relevance
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Dropdowns */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {NAVIGATION_ITEMS.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold transition-colors rounded-lg ${
                    activeDropdown === item.title
                      ? 'text-primary bg-primary-muted/60'
                      : 'text-neutral-dark hover:text-primary hover:bg-neutral-slate/80'
                  }`}
                  aria-expanded={activeDropdown === item.title}
                >
                  <span>{item.title}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.title ? 'rotate-180 text-secondary' : 'text-neutral-textMuted'
                    }`}
                  />
                </button>

                {/* Dropdown Panel */}
                <AnimatePresence>
                  {activeDropdown === item.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className="absolute left-0 mt-1 w-72 xl:w-80 rounded-2xl bg-white shadow-dropdown border border-neutral-border/80 p-2 z-50 overflow-hidden"
                    >
                      <div className="text-[10px] uppercase font-bold tracking-wider text-secondary px-3 pt-2 pb-1">
                        {item.title} Directory
                      </div>
                      <div className="space-y-0.5">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            target={subItem.href.startsWith('http') ? '_blank' : undefined}
                            rel={subItem.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="group/item flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-neutral-slate transition-all"
                          >
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-neutral-dark group-hover/item:text-primary transition-colors">
                                  {subItem.name}
                                </span>
                                {subItem.badge && (
                                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-secondary text-primary">
                                    {subItem.badge}
                                  </span>
                                )}
                                {subItem.href.startsWith('http') && (
                                  <ExternalLink className="w-3.5 h-3.5 text-neutral-textMuted group-hover/item:text-primary" />
                                )}
                              </div>
                              {subItem.description && (
                                <p className="text-xs text-neutral-textMuted line-clamp-1 mt-0.5 font-normal">
                                  {subItem.description}
                                </p>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right Action: Apply Now Button & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="https://cms1.uswat.edu.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-secondary hover:bg-secondary-dark text-primary font-bold text-sm shadow-soft transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Apply Now</span>
              <Sparkles className="w-4 h-4 text-primary" />
            </Link>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              type="button"
              className="lg:hidden p-2.5 rounded-xl bg-neutral-slate text-neutral-dark hover:text-primary hover:bg-neutral-border/60 transition-colors"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Responsive Drawer with Accessible Accordions) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-neutral-dark/60 backdrop-blur-sm"
            />

            {/* Sliding Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 240 }}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col z-10 overflow-hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-4 border-b border-neutral-slate bg-neutral-light">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
                    <Image
                      src="/images/icon.png"
                      alt="University of Swat"
                      fill
                      sizes="40px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-primary font-serif">University of Swat</h3>
                    <p className="text-[11px] text-neutral-textMuted">Charbagh, Swat</p>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  type="button"
                  className="p-2 rounded-lg text-neutral-textMuted hover:text-neutral-dark hover:bg-neutral-slate transition-colors"
                  aria-label="Close Navigation Drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Body: Accessible Accordion Nav */}
              <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {NAVIGATION_ITEMS.map((item) => {
                  const isExpanded = mobileExpandedSection === item.title;
                  return (
                    <div
                      key={item.title}
                      className="border border-neutral-slate rounded-xl overflow-hidden bg-white"
                    >
                      <button
                        onClick={() => toggleMobileAccordion(item.title)}
                        type="button"
                        className="w-full flex items-center justify-between p-3.5 text-left text-sm font-semibold text-neutral-dark hover:text-primary hover:bg-neutral-slate/50 transition-colors"
                        aria-expanded={isExpanded}
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-neutral-textMuted transition-transform duration-200 ${
                            isExpanded ? 'rotate-180 text-secondary-dark' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="bg-neutral-light/60 border-t border-neutral-slate px-3 py-2 space-y-1"
                          >
                            {item.items?.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                target={sub.href.startsWith('http') ? '_blank' : undefined}
                                rel={sub.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center justify-between p-2 rounded-lg text-xs font-medium text-neutral-dark hover:bg-white hover:text-primary transition-colors"
                              >
                                <span>{sub.name}</span>
                                {sub.badge && (
                                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-secondary text-primary">
                                    {sub.badge}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                {/* Additional Quick Links */}
                <div className="pt-4 border-t border-neutral-slate space-y-2">
                  <a
                    href="https://cms1.uswat.edu.pk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 text-primary border border-emerald-100 text-xs font-semibold"
                  >
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      <span>Student Portal / CMS</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-primary" />
                  </a>

                  <Link
                    href="/downloads"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl bg-neutral-slate text-neutral-dark text-xs font-semibold"
                  >
                    <div className="flex items-center gap-2">
                      <FileCheck2 className="w-4 h-4 text-secondary-dark" />
                      <span>Examination Downloads & Forms</span>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="p-4 border-t border-neutral-slate bg-neutral-light">
                <Link
                  href="https://cms1.uswat.edu.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-secondary hover:bg-secondary-dark text-primary font-bold text-sm shadow-md transition-all"
                >
                  <span>Apply Now Online</span>
                  <Sparkles className="w-4 h-4" />
                </Link>
                <div className="mt-3 text-center text-[11px] text-neutral-textMuted">
                  Inquiries: info@uswat.edu.pk | +92 946 9240446
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}

