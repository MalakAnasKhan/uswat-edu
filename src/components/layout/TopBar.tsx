'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, GraduationCap, Inbox, FileDown, Search, ExternalLink, Newspaper } from 'lucide-react';
import SearchModal from '@/components/search/SearchModal';

export default function TopBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <div className="bg-[#073620] text-white/90 text-xs border-b border-emerald-900/40 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-9 sm:h-10">
            {/* Left Utility Info */}
            <div className="flex items-center space-x-3 sm:space-x-6 overflow-x-auto py-1 scrollbar-none">
              <a
                href="tel:+929469240446"
                className="flex items-center gap-1.5 hover:text-secondary-light transition-colors shrink-0"
                title="Contact University Office"
              >
                <Phone className="w-3.5 h-3.5 text-secondary" />
                <span className="hidden md:inline">+92 946 9240446</span>
              </a>

              <a
                href="mailto:info@uswat.edu.pk"
                className="flex items-center gap-1.5 hover:text-secondary-light transition-colors shrink-0"
                title="Official Email Inquiries"
              >
                <Mail className="w-3.5 h-3.5 text-secondary" />
                <span>info@uswat.edu.pk</span>
              </a>

              <div className="hidden lg:flex items-center gap-1.5 text-white/75 shrink-0">
                <MapPin className="w-3.5 h-3.5 text-secondary" />
                <span>Main Campus, Charbagh, Swat</span>
              </div>
            </div>

            {/* Right Direct Links & Search */}
            <div className="flex items-center space-x-2 sm:space-x-4 shrink-0">
              <a
                href="https://cms1.uswat.edu.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-800/80 hover:bg-secondary hover:text-primary transition-all text-emerald-100"
                title="University CMS & Student Information System"
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Student Portal / CMS</span>
                <span className="xs:hidden">CMS</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-70" />
              </a>

              <a
                href="https://webmail.uswat.edu.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 hover:text-secondary-light transition-colors"
                title="Faculty & Staff Webmail"
              >
                <Inbox className="w-3.5 h-3.5 text-secondary" />
                <span>Webmail</span>
              </a>

              <Link
                href="/downloads"
                className="inline-flex items-center gap-1.5 hover:text-secondary-light transition-colors"
                title="Forms, Results & Downloads"
              >
                <FileDown className="w-3.5 h-3.5 text-secondary" />
                <span className="hidden sm:inline">Downloads / Examination</span>
                <span className="sm:hidden">Downloads</span>
              </Link>

              <Link
                href="/news"
                className="hidden md:inline-flex items-center gap-1.5 hover:text-secondary-light transition-colors"
                title="University News & Press Releases"
              >
                <Newspaper className="w-3.5 h-3.5 text-secondary" />
                <span>News</span>
              </Link>

              {/* Fast Modal Search Trigger */}
              <button
                onClick={() => setIsSearchOpen(true)}
                type="button"
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 active:scale-95 text-white px-2 py-1 rounded-md transition-all ml-1 border border-white/10"
                title="Search University of Swat (Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5 text-secondary" />
                <span className="hidden md:inline text-[11px] text-white/80">Search</span>
                <kbd className="hidden lg:inline-block text-[9px] px-1 py-0.2 bg-black/30 rounded text-white/60">
                  Ctrl+K
                </kbd>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}

