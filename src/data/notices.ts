export type NoticeCategory = 'Admissions' | 'Examination' | 'General' | 'Tender';

export interface Notice {
  id: string;
  title: string;
  category: NoticeCategory;
  date: string;
  isUrgent?: boolean;
  href: string;
  fileUrl?: string;
  department?: string;
}

export const NOTICES: Notice[] = [
  {
    id: 'notice-1',
    title: 'Fall 2026 Merit List - Undergraduate & Graduate Programs Announced',
    category: 'Admissions',
    date: 'November 02, 2026',
    isUrgent: true,
    href: '/admissions/merit-lists',
    department: 'Directorate of Admissions',
  },
  {
    id: 'notice-2',
    title: 'Submission of Examination Admission Forms & Fee for BA/BSc Annual Exam 2026',
    category: 'Examination',
    date: 'October 28, 2026',
    isUrgent: true,
    href: '/examinations/forms',
    department: 'Office of the Controller of Examinations',
  },
  {
    id: 'notice-3',
    title: 'Tender Notice: Procurement of High-End Laboratory Equipment for Department of Chemistry',
    category: 'Tender',
    date: 'October 25, 2026',
    isUrgent: false,
    href: '/tenders/lab-procurement-chem-2026',
    department: 'Procurement & Stores Section',
  },
  {
    id: 'notice-4',
    title: 'Establishment of Central Student Financial Aid Office (SFAO) & Need-Based Scholarship Notification',
    category: 'General',
    date: 'October 20, 2026',
    isUrgent: false,
    href: '/scholarships/sfao-announcement',
    department: 'Registrar Office',
  },
  {
    id: 'notice-5',
    title: 'Revised Date Sheet for BS Semester Terminal Examinations (Autumn 2026)',
    category: 'Examination',
    date: 'October 18, 2026',
    isUrgent: false,
    href: '/examinations/date-sheets',
    department: 'Examinations Department',
  },
  {
    id: 'notice-6',
    title: 'Call for Research Proposals - ORIC Faculty Research Grant Program 2026-27',
    category: 'General',
    date: 'October 12, 2026',
    isUrgent: false,
    href: '/oric/grants',
    department: 'Office of Research, Innovation & Commercialization (ORIC)',
  },
  {
    id: 'notice-7',
    title: 'Tender Notice: Construction and Rehabilitation of Solar Energy Systems at Main Campus Charbagh',
    category: 'Tender',
    date: 'October 08, 2026',
    isUrgent: false,
    href: '/tenders/solar-system-charbagh',
    department: 'Works & Services Department',
  },
  {
    id: 'notice-8',
    title: 'Schedule for Verification of Academic Documents and Migration Certificates',
    category: 'Admissions',
    date: 'October 02, 2026',
    isUrgent: false,
    href: '/admissions/verification-schedule',
    department: 'Academic Section',
  },
];

