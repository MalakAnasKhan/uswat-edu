export type DownloadCategory =
  | 'Examination'
  | 'Registration'
  | 'DMC/Degree'
  | 'Affiliation'
  | 'Scholarship';

export type FileFormat = 'PDF' | 'DOCX';

export interface DownloadItem {
  id: string;
  title: string;
  category: DownloadCategory;
  fileType: FileFormat;
  size: string;
  downloadCount: number;
  downloadUrl: string;
  lastUpdated: string;
}

export const DOWNLOADS: DownloadItem[] = [
  {
    id: 'dl-1',
    title: 'Detailed Marks Certificate (DMC) Application Form',
    category: 'DMC/Degree',
    fileType: 'PDF',
    size: '420 KB',
    downloadCount: 14250,
    downloadUrl: '/downloads/dmc-application-form.pdf',
    lastUpdated: 'August 2026',
  },
  {
    id: 'dl-2',
    title: 'Application Form for Degree in Absentia / Urgency',
    category: 'DMC/Degree',
    fileType: 'PDF',
    size: '560 KB',
    downloadCount: 9810,
    downloadUrl: '/downloads/degree-in-absentia-form.pdf',
    lastUpdated: 'September 2026',
  },
  {
    id: 'dl-3',
    title: 'Migration Certificate / No Objection Certificate (NOC) Form',
    category: 'Registration',
    fileType: 'PDF',
    size: '340 KB',
    downloadCount: 11420,
    downloadUrl: '/downloads/migration-certificate-noc-form.pdf',
    lastUpdated: 'July 2026',
  },
  {
    id: 'dl-4',
    title: 'Re-checking of Answer Books Application Form',
    category: 'Examination',
    fileType: 'PDF',
    size: '290 KB',
    downloadCount: 6540,
    downloadUrl: '/downloads/rechecking-answer-books-form.pdf',
    lastUpdated: 'October 2026',
  },
  {
    id: 'dl-5',
    title: 'BS Semester Examination Admission Form (Affiliated Colleges)',
    category: 'Examination',
    fileType: 'PDF',
    size: '610 KB',
    downloadCount: 18760,
    downloadUrl: '/downloads/bs-semester-exam-admission-form.pdf',
    lastUpdated: 'August 2026',
  },
  {
    id: 'dl-6',
    title: 'HEC Need Based & Ehsaas Scholarship Application Dossier',
    category: 'Scholarship',
    fileType: 'DOCX',
    size: '1.2 MB',
    downloadCount: 8430,
    downloadUrl: '/downloads/hec-scholarship-application-form.docx',
    lastUpdated: 'September 2026',
  },
  {
    id: 'dl-7',
    title: 'Application Form for Grant of Affiliation to Colleges / Institutions',
    category: 'Affiliation',
    fileType: 'DOCX',
    size: '850 KB',
    downloadCount: 2150,
    downloadUrl: '/downloads/affiliation-proforma-institution.docx',
    lastUpdated: 'June 2026',
  },
  {
    id: 'dl-8',
    title: 'Duplicate Registration Card & Correction in Academic Bio-data Form',
    category: 'Registration',
    fileType: 'PDF',
    size: '315 KB',
    downloadCount: 4790,
    downloadUrl: '/downloads/duplicate-registration-card-form.pdf',
    lastUpdated: 'July 2026',
  },
];

