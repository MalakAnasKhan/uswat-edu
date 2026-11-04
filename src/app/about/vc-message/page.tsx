import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone, Award, BookOpen, GraduationCap, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function VCMessagePage() {
  return (
    <div className="py-12 bg-neutral-light min-h-[80vh]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs text-neutral-textMuted">
          <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            Home
          </Link>
          <span>/</span>
          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <span>/</span>
          <span className="text-primary font-semibold">Vice Chancellor's Desk</span>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-neutral-border shadow-soft space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-8 border-b border-neutral-slate">
            {/* VC Profile Frame */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-52 h-52 rounded-2xl overflow-hidden shadow-card border-4 border-primary ring-4 ring-primary/10 mb-4">
                <Image
                  src="/images/Vice Chancellor.jpeg"
                  alt="Prof. Dr. Husnul Amin - Vice Chancellor, University of Swat"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h2 className="text-lg font-bold font-serif text-primary">
                Prof. Dr. Husnul Amin
              </h2>
              <p className="text-xs font-semibold text-secondary-dark">Vice Chancellor</p>
              <p className="text-xs text-neutral-textMuted">University of Swat</p>

              <div className="mt-4 pt-3 border-t border-neutral-slate text-xs text-neutral-charcoal text-left w-full space-y-1">
                <p><strong>Registrar: </strong> Dr. Arshad Ali Khan</p>
                <p><strong>Secretariat: </strong> Admin Complex, Charbagh</p>
                <p><strong>Email: </strong> <a href="mailto:vc@uswat.edu.pk" className="text-primary hover:underline">vc@uswat.edu.pk</a></p>
              </div>
            </div>

            {/* VC Speech & Vision */}
            <div className="md:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-primary-muted text-primary text-xs font-bold uppercase tracking-wider">
                  Official Leadership Address
                </span>
                <span className="px-3 py-1 rounded-md bg-secondary/15 text-secondary-dark text-xs font-bold uppercase tracking-wider border border-secondary/30">
                  Roadmap: Work Hard. Work Smart. Deliver Results.
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-dark">
                Transforming the University of Swat into an Engine of Knowledge & Progress
              </h1>

              <p className="text-sm text-neutral-charcoal leading-relaxed">
                It is my distinct privilege to welcome scholars, students, parents, and visitors to
                the University of Swat. Our university stands in one of the most culturally revered
                and environmentally unique valleys of Pakistan. Our mission is to transform this
                natural seat of ancient learning into a cutting-edge hub of 21st-century education,
                scientific inquiry, and regional leadership.
              </p>

              <p className="text-sm text-neutral-charcoal leading-relaxed">
                To realize this vision, our administration operates under a rigorous four-point mandate:
                <strong className="text-primary font-bold"> "Work Hard. Work Smart. Deliver Results."</strong> We are
                steadfastly committed to institutional merit, absolute fiscal transparency, modern pedagogy,
                and nurturing an academic culture where innovation directly serves the community.
              </p>
            </div>
          </div>

          {/* Strategic Pillars */}
          <div className="space-y-6">
            <h3 className="font-serif font-bold text-xl text-neutral-dark">
              Strategic Institutional Roadmap Pillars
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-neutral-light border border-neutral-border">
                <div className="flex items-center gap-2 text-primary font-bold text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  <span>1. Full Campus Digital Transformation</span>
                </div>
                <p className="text-xs text-neutral-textMuted leading-relaxed">
                  Automating academic operations through our unified Campus Management System (CMS),
                  digitized examinations, computerized library systems, and paperless administrative e-office workflows.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-light border border-neutral-border">
                <div className="flex items-center gap-2 text-primary font-bold text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  <span>2. Good Governance & Accountability</span>
                </div>
                <p className="text-xs text-neutral-textMuted leading-relaxed">
                  Strengthening statutory bodies including Syndicate, Senate, and Academic Council
                  under the KP Universities Act, ensuring meritocracy, student welfare, and strict financial compliance.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-light border border-neutral-border">
                <div className="flex items-center gap-2 text-primary font-bold text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  <span>3. High-Impact Research Commercialization</span>
                </div>
                <p className="text-xs text-neutral-textMuted leading-relaxed">
                  Through ORIC, empowering faculty to patent indigenous discoveries in alpine medicinal
                  flora, climate-resilient water systems, Artificial Intelligence, and Gandharan archaeological tourism.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-light border border-neutral-border">
                <div className="flex items-center gap-2 text-primary font-bold text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  <span>4. Student-Centric Campus Expansion</span>
                </div>
                <p className="text-xs text-neutral-textMuted leading-relaxed">
                  Consolidating purpose-built faculties at Main Campus Charbagh, expanding residential hostels,
                  transportation routes, and the Student Financial Aid Office (SFAO) so no deserving scholar is left behind.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#073620] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-serif font-bold text-base text-secondary">
                  Office of the Vice Chancellor Secretariat
                </h4>
                <p className="text-xs text-white/80 mt-0.5">
                  University of Swat, Main Campus, Charbagh, Khyber Pakhtunkhwa, Pakistan
                </p>
              </div>
              <div className="text-xs font-semibold text-white/90 shrink-0">
                Direct: +92 (0946) 9240448 | vc@uswat.edu.pk
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
