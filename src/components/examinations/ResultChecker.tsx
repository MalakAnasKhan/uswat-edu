'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Search,
  Printer,
  CheckCircle2,
  FileCheck2,
  AlertCircle,
  GraduationCap,
  Sparkles,
  RotateCcw,
  Download,
  Building,
} from 'lucide-react';

interface ResultRecord {
  rollNo: string;
  name: string;
  fatherName: string;
  regNo: string;
  institute: string;
  program: string;
  semester: string;
  sgpa: string;
  cgpa: string;
  status: 'PASSED' | 'PROMOTED' | 'FAILED';
  courses: {
    code: string;
    title: string;
    creditHours: number;
    marks: number;
    maxMarks: number;
    grade: string;
    gpa: string;
  }[];
}

const DEMO_RESULT: ResultRecord = {
  rollNo: '40912',
  name: 'Muhammad Bilal Khan',
  fatherName: 'Sardar Ali Khan',
  regNo: 'UoS-2022-CS-104',
  institute: 'Department of Computer Science & IT, Charbagh Campus',
  program: 'BS Computer Science (4 Years)',
  semester: '6th Semester Terminal Examination (Autumn 2026)',
  sgpa: '3.68',
  cgpa: '3.59',
  status: 'PASSED',
  courses: [
    {
      code: 'CS-301',
      title: 'Artificial Intelligence & Machine Learning',
      creditHours: 3,
      marks: 86,
      maxMarks: 100,
      grade: 'A',
      gpa: '4.00',
    },
    {
      code: 'CS-302',
      title: 'Computer Networks & Cloud Protocols',
      creditHours: 4,
      marks: 79,
      maxMarks: 100,
      grade: 'B+',
      gpa: '3.33',
    },
    {
      code: 'CS-303',
      title: 'Advanced Database Systems',
      creditHours: 4,
      marks: 92,
      maxMarks: 100,
      grade: 'A+',
      gpa: '4.00',
    },
    {
      code: 'CS-304',
      title: 'Software Quality Assurance & Testing',
      creditHours: 3,
      marks: 83,
      maxMarks: 100,
      grade: 'A-',
      gpa: '3.67',
    },
    {
      code: 'CS-305',
      title: 'Technical Report Writing & Ethics',
      creditHours: 3,
      marks: 77,
      maxMarks: 100,
      grade: 'B',
      gpa: '3.00',
    },
  ],
};

export default function ResultChecker() {
  const [examType, setExamType] = useState('Semester');
  const [program, setProgram] = useState('BS Computer Science');
  const [session, setSession] = useState('Fall 2026');
  const [rollNo, setRollNo] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [result, setResult] = useState<ResultRecord | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rollNo.trim()) return;

    setHasSearched(true);
    // Return sample student data formatted with student roll number
    setResult({
      ...DEMO_RESULT,
      rollNo: rollNo.trim(),
    });
  };

  const handleFillDemo = () => {
    setRollNo('40912');
    setExamType('Semester');
    setProgram('BS Computer Science');
    setSession('Fall 2026');
    setHasSearched(true);
    setResult(DEMO_RESULT);
  };

  const handleReset = () => {
    setRollNo('');
    setHasSearched(false);
    setResult(null);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white rounded-3xl border border-neutral-border p-6 sm:p-8 lg:p-10 shadow-soft">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-neutral-slate">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-muted text-primary text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Official Examination Portal
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-dark mt-2">
            Online Result Verification
          </h2>
          <p className="text-xs sm:text-sm text-neutral-textMuted mt-1">
            Search terminal semester and annual examination gazettes across all teaching departments and affiliated colleges.
          </p>
        </div>

        <button
          onClick={handleFillDemo}
          type="button"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-secondary/15 hover:bg-secondary/25 text-secondary-dark font-bold text-xs border border-secondary/30 transition-all self-start sm:self-auto"
        >
          <span>Load Sample Roll No (40912)</span>
        </button>
      </div>

      {/* Query Form */}
      <form onSubmit={handleSearch} className="space-y-4 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-xs font-semibold text-neutral-dark mb-1.5">
              Examination System
            </label>
            <select
              value={examType}
              onChange={(e) => setExamType(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-border bg-neutral-light text-xs font-medium focus:outline-none focus:border-primary"
            >
              <option value="Semester">Semester Terminal System</option>
              <option value="Annual">Annual Degree Examination</option>
              <option value="Affiliated">Affiliated Colleges System</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-dark mb-1.5">
              Program / Discipline
            </label>
            <select
              value={program}
              onChange={(e) => setProgram(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-border bg-neutral-light text-xs font-medium focus:outline-none focus:border-primary"
            >
              <option value="BS Computer Science">BS Computer Science</option>
              <option value="BS Software Engineering">BS Software Engineering</option>
              <option value="BS Chemistry">BS Chemistry</option>
              <option value="BBA (Hons)">BBA (Hons)</option>
              <option value="LLB (5 Years)">LLB (5-Year Integrated)</option>
              <option value="BA/BSc Annual">BA / BSc Annual Degree</option>
              <option value="MA/MSc Annual">MA / MSc Annual Degree</option>
              <option value="B.Ed 1.5 Year">B.Ed (1.5 Years)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-dark mb-1.5">
              Examination Session
            </label>
            <select
              value={session}
              onChange={(e) => setSession(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-border bg-neutral-light text-xs font-medium focus:outline-none focus:border-primary"
            >
              <option value="Fall 2026">Fall Semester 2026</option>
              <option value="Spring 2026">Spring Semester 2026</option>
              <option value="Annual 2026">Annual 2026</option>
              <option value="Supplementary 2025">Supplementary 2025</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-dark mb-1.5">
              Roll No / Registration No
            </label>
            <input
              type="text"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              placeholder="e.g. 40912 or 2022-CS-104"
              className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-border bg-neutral-light text-xs font-medium focus:outline-none focus:border-primary"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-xs shadow-soft transition-all"
          >
            <Search className="w-4 h-4 text-secondary" />
            <span>Search Examination Result</span>
          </button>

          {hasSearched && (
            <button
              onClick={handleReset}
              type="button"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-neutral-slate hover:bg-neutral-border text-neutral-dark text-xs font-semibold transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5 text-neutral-textMuted" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </form>

      {/* Result Display Card (DMC Display) */}
      {result && (
        <div className="mt-8 border-2 border-primary/20 rounded-3xl overflow-hidden bg-white shadow-card print:border-none print:shadow-none">
          {/* DMC Header */}
          <div className="bg-[#073620] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="relative w-12 h-12 shrink-0 flex items-center justify-center">
                <Image
                  src="/images/icon.png"
                  alt="University of Swat Seal"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-secondary">
                  Provisional Detailed Marks Certificate (DMC)
                </span>
                <h3 className="font-serif font-bold text-xl sm:text-2xl mt-1">
                  University of Swat — Examination Directorate
                </h3>
                <p className="text-xs text-white/80 mt-1">{result.semester}</p>
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/40">
                {result.status}
              </span>
              <button
                onClick={handlePrint}
                type="button"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-secondary hover:bg-secondary-dark text-primary font-bold text-xs shadow-soft transition-all"
              >
                <Printer className="w-4 h-4" />
                <span>Print DMC</span>
              </button>
            </div>
          </div>

          {/* Student Profile Info Grid */}
          <div className="p-6 sm:p-8 bg-neutral-light border-b border-neutral-slate grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div>
              <span className="text-neutral-textMuted block font-medium">Candidate Name:</span>
              <span className="font-bold text-neutral-dark text-sm">{result.name}</span>
            </div>
            <div>
              <span className="text-neutral-textMuted block font-medium">Father's Name:</span>
              <span className="font-bold text-neutral-dark text-sm">{result.fatherName}</span>
            </div>
            <div>
              <span className="text-neutral-textMuted block font-medium">Roll Number:</span>
              <span className="font-bold text-primary text-sm font-mono">{result.rollNo}</span>
            </div>
            <div>
              <span className="text-neutral-textMuted block font-medium">Registration No:</span>
              <span className="font-bold text-neutral-dark">{result.regNo}</span>
            </div>
            <div>
              <span className="text-neutral-textMuted block font-medium">Academic Program:</span>
              <span className="font-bold text-neutral-dark">{result.program}</span>
            </div>
            <div>
              <span className="text-neutral-textMuted block font-medium">Department / College:</span>
              <span className="font-bold text-neutral-dark truncate block">{result.institute}</span>
            </div>
          </div>

          {/* Course Grades Table */}
          <div className="overflow-x-auto p-4 sm:p-6">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-neutral-slate font-serif font-bold text-neutral-dark text-[11px] uppercase tracking-wider">
                  <th className="py-3 px-3">Course Code</th>
                  <th className="py-3 px-3">Course Title</th>
                  <th className="py-3 px-3 text-center">Cr. Hours</th>
                  <th className="py-3 px-3 text-center">Marks (100)</th>
                  <th className="py-3 px-3 text-center">Letter Grade</th>
                  <th className="py-3 px-3 text-center">GPA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-slate">
                {result.courses.map((c) => (
                  <tr key={c.code} className="hover:bg-neutral-light/50 transition-colors">
                    <td className="py-3 px-3 font-mono font-semibold text-primary">{c.code}</td>
                    <td className="py-3 px-3 font-medium text-neutral-dark">{c.title}</td>
                    <td className="py-3 px-3 text-center text-neutral-charcoal">{c.creditHours}</td>
                    <td className="py-3 px-3 text-center font-bold text-neutral-dark">{c.marks}</td>
                    <td className="py-3 px-3 text-center font-bold text-primary">{c.grade}</td>
                    <td className="py-3 px-3 text-center font-semibold text-secondary-dark">
                      {c.gpa}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* GPA Summary Strip */}
          <div className="p-6 bg-neutral-light border-t border-neutral-slate flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-center sm:text-left">
              <div>
                <span className="text-[11px] text-neutral-textMuted uppercase font-semibold">
                  Semester GPA (SGPA)
                </span>
                <div className="text-2xl font-serif font-bold text-primary">{result.sgpa}</div>
              </div>
              <div className="border-l border-neutral-slate pl-6">
                <span className="text-[11px] text-neutral-textMuted uppercase font-semibold">
                  Cumulative GPA (CGPA)
                </span>
                <div className="text-2xl font-serif font-bold text-secondary-dark">{result.cgpa}</div>
              </div>
            </div>

            <div className="text-xs text-neutral-textMuted text-center sm:text-right">
              <p>Verified by Controller of Examinations Secretariat</p>
              <p className="text-[10px] mt-0.5">Disclaimer: This provisional result is issued as a notice only.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

