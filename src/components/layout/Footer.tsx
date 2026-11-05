import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Globe, ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#072d1b] text-white border-t-4 border-secondary">
      {/* Main Footer Container */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Col 1: University Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                <Image
                  src="/images/icon.png"
                  alt="University of Swat Emblem"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-white tracking-wide">
                  University of Swat
                </h3>
                <p className="text-xs text-secondary-light font-medium">د سوات پوهنتون</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1 max-w-sm">
              <span className="text-[10px] uppercase font-bold text-secondary tracking-wider block">Official Institutional Motto</span>
              <p className="text-xs font-serif text-white font-medium italic">"Aspiring for Quality Education with Relevance"</p>
              <p className="text-[11px] text-secondary-light font-sans" dir="rtl">"مطابقت کے ساتھ معیاری تعلیم کے لئے خواہشمند"</p>
            </div>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              Established in 2010 in the historic valley of Swat, Khyber Pakhtunkhwa. Committed
              to academic excellence, transformative research, ethical scholarship, and regional socio-economic empowerment.
            </p>

            <div className="pt-2 text-xs text-white/80 space-y-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span>Main Campus, Charbagh, District Swat, Khyber Pakhtunkhwa, Pakistan</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-secondary shrink-0" />
                <span>+92 (0946) 9240446 / 9240448</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-secondary shrink-0" />
                <span>info@uswat.edu.pk | registrar@uswat.edu.pk</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-secondary">
              Academic Wings
            </h4>
            <ul className="space-y-2 text-xs text-white/75">
              <li>
                <Link href="/departments" className="hover:text-secondary-light transition-colors">
                  Departments & Institutes
                </Link>
              </li>
              <li>
                <Link href="/academics/faculties" className="hover:text-secondary-light transition-colors">
                  Faculties of UoS
                </Link>
              </li>
              <li>
                <Link href="/academics/calendar" className="hover:text-secondary-light transition-colors">
                  Academic Calendar
                </Link>
              </li>
              <li>
                <Link href="/academics/qec" className="hover:text-secondary-light transition-colors">
                  Quality Enhancement (QEC)
                </Link>
              </li>
              <li>
                <Link href="/oric/journals" className="hover:text-secondary-light transition-colors">
                  Research Journals & ORIC
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Student & Exam Portals */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-secondary">
              Portals & Services
            </h4>
            <ul className="space-y-2 text-xs text-white/75">
              <li>
                <a
                  href="https://cms1.uswat.edu.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-secondary-light transition-colors"
                >
                  <span>Student CMS Portal</span>
                  <ArrowUpRight className="w-3 h-3 text-secondary" />
                </a>
              </li>
              <li>
                <Link href="/admissions/merit-lists" className="hover:text-secondary-light transition-colors">
                  Admissions Merit Lists
                </Link>
              </li>
              <li>
                <Link href="/examinations/results" className="hover:text-secondary-light transition-colors">
                  Semester & Annual Results
                </Link>
              </li>
              <li>
                <Link href="/downloads" className="hover:text-secondary-light transition-colors">
                  Official DMC & Degree Forms
                </Link>
              </li>
              <li>
                <a
                  href="https://webmail.uswat.edu.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-secondary-light transition-colors"
                >
                  <span>Faculty Webmail</span>
                  <ArrowUpRight className="w-3 h-3 text-secondary" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Statutory & Affiliations */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-secondary">
              Governance & Accreditations
            </h4>
            <ul className="space-y-2 text-xs text-white/75">
              <li>
                <Link href="/about/governance" className="hover:text-secondary-light transition-colors">
                  Syndicate & Senate
                </Link>
              </li>
              <li>
                <Link href="/about/vc-message" className="hover:text-secondary-light transition-colors">
                  Vice Chancellor Profile
                </Link>
              </li>
              <li>
                <Link href="/about/campuses" className="hover:text-secondary-light transition-colors">
                  Sub-Campuses & Facilities
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary-light transition-colors text-secondary">
                  Contact & Campus Directory
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-secondary-light transition-colors">
                  News & Media Directorate
                </Link>
              </li>
              <li>
                <Link href="/admin/news" className="hover:text-secondary-light transition-colors text-white/50 text-[11px]">
                  Admin Post Desk
                </Link>
              </li>
              <li>
                <span className="inline-flex items-center gap-1 text-[11px] text-white/60">
                  <ShieldCheck className="w-3.5 h-3.5 text-secondary" /> Recognized by HEC Pakistan
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-emerald-900/60 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>© {new Date().getFullYear()} University of Swat (uswat.edu.pk). All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

