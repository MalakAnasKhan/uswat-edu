'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Building2,
  Clock,
  CheckCircle2,
  HelpCircle,
  Bus,
  Sparkles,
  ShieldCheck,
  Headphones,
} from 'lucide-react';

interface ContactDirectoryCard {
  wing: string;
  head: string;
  phone: string;
  ext: string;
  email: string;
  location: string;
}

const DIRECTORY: ContactDirectoryCard[] = [
  {
    wing: 'Vice Chancellor Secretariat',
    head: 'Staff Officer to Vice Chancellor',
    phone: '+92 (0946) 9240448',
    ext: 'Ext. 101',
    email: 'vc@uswat.edu.pk',
    location: 'Executive Wing, Main Admin Block',
  },
  {
    wing: 'Office of the Registrar',
    head: 'Registrar & Academic Council',
    phone: '+92 (0946) 9240446',
    ext: 'Ext. 105',
    email: 'registrar@uswat.edu.pk',
    location: 'Ground Floor, Administration Complex',
  },
  {
    wing: 'Controller of Examinations',
    head: 'Controller of Examinations',
    phone: '+92 (0946) 9240445',
    ext: 'Ext. 110',
    email: 'ce@uswat.edu.pk',
    location: 'Examination Complex, Charbagh',
  },
  {
    wing: 'Directorate of Admissions',
    head: 'In-charge Admissions & CMS',
    phone: '+92 (0946) 9240446',
    ext: 'Ext. 112',
    email: 'admissions@uswat.edu.pk',
    location: 'Student Facilitation Center',
  },
  {
    wing: 'Student Financial Aid Office (SFAO)',
    head: 'Scholarship Coordinator',
    phone: '+92 (0946) 9240447',
    ext: 'Ext. 115',
    email: 'sfao@uswat.edu.pk',
    location: 'Student Services Building',
  },
  {
    wing: 'IT Services & CMS Helpdesk',
    head: 'Director IT / Network Administrator',
    phone: '+92 (0946) 9240449',
    ext: 'Ext. 120',
    email: 'support@uswat.edu.pk',
    location: 'Computer Center Block B',
  },
];

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [department, setDepartment] = useState('Admissions');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTicketNumber(`UOS-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 700);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setIdNumber('');
    setDepartment('Admissions');
    setSubject('');
    setMessage('');
    setIsSubmitted(false);
  };

  return (
    <div className="py-10 bg-neutral-light min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-neutral-textMuted">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-primary font-semibold">Contact & Campus Directory</span>
        </nav>

        {/* Hero Banner */}
        <div className="bg-gradient-to-br from-[#073620] via-[#0A4D2E] to-[#0F172A] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-dropdown relative overflow-hidden border border-emerald-900/40">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-secondary/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-secondary-light border border-white/15">
              <Phone className="w-3.5 h-3.5 text-secondary" />
              <span>Campus Secretariat & Directory</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-extrabold tracking-tight leading-tight">
              Get in Touch with University of Swat
            </h1>

            <p className="text-sm sm:text-base text-white/85 leading-relaxed">
              Find direct contact numbers, official email addresses, and departmental extensions, or submit
              an inquiry ticket to our centralized student facilitation team.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-white/90">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-secondary shrink-0" />
                <span>Main Campus, Charbagh, District Swat, Khyber Pakhtunkhwa</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-secondary shrink-0" />
                <span>Monday – Friday: 08:00 AM – 04:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Central Directory Cards */}
        <section className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Departmental Directory
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-dark mt-1">
              Administrative Wings & Key Contacts
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIRECTORY.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl bg-white border border-neutral-border shadow-soft hover:shadow-card hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-primary-muted text-primary">
                      {item.ext}
                    </span>
                    <Building2 className="w-4 h-4 text-secondary" />
                  </div>

                  <h3 className="font-serif font-bold text-base text-neutral-dark">
                    {item.wing}
                  </h3>
                  <p className="text-xs text-neutral-textMuted mt-0.5 mb-3">{item.head}</p>

                  <div className="space-y-2 pt-3 border-t border-neutral-slate text-xs text-neutral-charcoal">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-secondary shrink-0" />
                      <a href={`tel:${item.phone}`} className="hover:text-primary transition-colors font-medium">
                        {item.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-secondary shrink-0" />
                      <a
                        href={`mailto:${item.email}`}
                        className="text-primary hover:underline font-medium truncate"
                      >
                        {item.email}
                      </a>
                    </div>
                    <div className="flex items-start gap-2 text-[11px] text-neutral-textMuted">
                      <MapPin className="w-3.5 h-3.5 text-neutral-textMuted shrink-0 mt-0.5" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Inquiry Form & Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-neutral-border p-6 sm:p-10 shadow-soft">
            <span className="px-3 py-1 rounded-md bg-primary-muted text-primary text-xs font-bold uppercase tracking-wider">
              Student & Public Inquiry
            </span>
            <h2 className="text-2xl font-serif font-bold text-neutral-dark mt-2 mb-2">
              Send an Online Inquiry
            </h2>
            <p className="text-xs sm:text-sm text-neutral-textMuted mb-6 leading-relaxed">
              Have questions regarding admissions, verification, results, or fee challans? Fill out the form
              below to generate an inquiry ticket.
            </p>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-primary mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-lg text-emerald-900">
                    Inquiry Lodged Successfully!
                  </h3>
                  <p className="text-xs text-emerald-800">
                    Your ticket tracking number is{' '}
                    <span className="font-mono font-bold text-primary">{ticketNumber}</span>.
                  </p>
                  <p className="text-xs text-neutral-textMuted mt-2">
                    A confirmation email has been dispatched to <strong>{email}</strong>. Our facilitation desk
                    will respond within 24 to 48 business hours.
                  </p>
                </div>
                <button
                  onClick={handleReset}
                  type="button"
                  className="px-5 py-2.5 rounded-xl bg-primary text-white font-bold text-xs shadow-soft hover:bg-primary-hover transition-all"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-dark mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Asad Ullah"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-border bg-neutral-light text-xs font-medium focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-dark mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. asad@gmail.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-border bg-neutral-light text-xs font-medium focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-dark mb-1">
                      Roll Number or CNIC (Optional)
                    </label>
                    <input
                      type="text"
                      value={idNumber}
                      onChange={(e) => setIdNumber(e.target.value)}
                      placeholder="e.g. 40912 or 15602-xxxxxxx-x"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-border bg-neutral-light text-xs font-medium focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-dark mb-1">
                      Concerned Department / Wing
                    </label>
                    <select
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-border bg-neutral-light text-xs font-medium focus:outline-none focus:border-primary"
                    >
                      <option value="Admissions">Directorate of Admissions</option>
                      <option value="Examinations">Examinations & Results</option>
                      <option value="Registrar">Registrar Office & Verification</option>
                      <option value="SFAO">Scholarships & Financial Aid</option>
                      <option value="IT Support">CMS & IT Helpdesk</option>
                      <option value="General">General Campus Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-dark mb-1">
                    Inquiry Subject
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Admission form payment verification"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-border bg-neutral-light text-xs font-medium focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-dark mb-1">
                    Your Message / Query *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Please describe your inquiry in detail..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-border bg-neutral-light text-xs font-medium focus:outline-none focus:border-primary"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-xs shadow-soft transition-all disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-secondary" />
                  <span>{isSubmitting ? 'Submitting Inquiry...' : 'Submit Inquiry Ticket'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Campus Location & Transit */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-neutral-border p-6 sm:p-8 shadow-soft space-y-4">
              <span className="px-3 py-1 rounded-md bg-secondary/15 text-secondary-dark text-xs font-bold uppercase tracking-wider">
                Geographic Location
              </span>
              <h3 className="font-serif font-bold text-lg text-neutral-dark">
                Main Campus, Charbagh
              </h3>
              <p className="text-xs text-neutral-textMuted leading-relaxed">
                The university main campus is situated on the main Mingora-Kalam highway in Charbagh, Swat, easily accessible from Mingora city (15 km) and Saidu Sharif Airport.
              </p>

              {/* Map Container */}
              <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-neutral-border shadow-sm">
                <iframe
                  title="University of Swat Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104523.4779644335!2d72.38006883296215!3d34.84711698748348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dc228ff0b1d3ef%3A0xebe77b218fb63e79!2sUniversity%20of%20Swat%2C%20Charbagh%20Campus!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Shuttle & Transit Info */}
              <div className="p-4 rounded-2xl bg-neutral-light border border-neutral-border space-y-2 text-xs">
                <div className="flex items-center gap-2 font-bold text-neutral-dark">
                  <Bus className="w-4 h-4 text-secondary" />
                  <span>University Point Buses & Public Transit</span>
                </div>
                <p className="text-neutral-textMuted leading-relaxed text-[11px]">
                  University shuttle buses operate daily starting at 07:00 AM from Mingora Bypass, Saidu Sharif, Barikot, and Matta terminals directly into Charbagh Campus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

