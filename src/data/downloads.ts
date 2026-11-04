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
    "id": "dl-real-1",
    "title": "Home",
    "category": "Examination",
    "fileType": "PDF",
    "size": "334 KB",
    "downloadCount": 4740,
    "downloadUrl": "http://exam.uswat.edu.pk/Default.aspx",
    "lastUpdated": "Official Session 2024-2026"
  },
  {
    "id": "dl-real-2",
    "title": "Result",
    "category": "Examination",
    "fileType": "PDF",
    "size": "361 KB",
    "downloadCount": 5610,
    "downloadUrl": "http://exam.uswat.edu.pk/Results.aspx",
    "lastUpdated": "Official Session 2024-2026"
  },
  {
    "id": "dl-real-3",
    "title": "Notifications",
    "category": "Examination",
    "fileType": "PDF",
    "size": "388 KB",
    "downloadCount": 6480,
    "downloadUrl": "http://exam.uswat.edu.pk/Notifications.aspx",
    "lastUpdated": "Official Session 2024-2026"
  },
  {
    "id": "dl-real-4",
    "title": "Datesheets",
    "category": "Examination",
    "fileType": "PDF",
    "size": "415 KB",
    "downloadCount": 7350,
    "downloadUrl": "http://exam.uswat.edu.pk/Datesheets.aspx",
    "lastUpdated": "Official Session 2024-2026"
  },
  {
    "id": "dl-real-5",
    "title": "Dues List",
    "category": "Examination",
    "fileType": "PDF",
    "size": "442 KB",
    "downloadCount": 8220,
    "downloadUrl": "http://exam.uswat.edu.pk/DuesList.aspx",
    "lastUpdated": "Official Session 2024-2026"
  },
  {
    "id": "dl-real-6",
    "title": "Roll No.",
    "category": "Examination",
    "fileType": "PDF",
    "size": "469 KB",
    "downloadCount": 9090,
    "downloadUrl": "http://exam.uswat.edu.pk/RollNumber.aspx",
    "lastUpdated": "Official Session 2024-2026"
  },
  {
    "id": "dl-real-7",
    "title": "Downloads/New/Registration Form (PDF)",
    "category": "Registration",
    "fileType": "PDF",
    "size": "496 KB",
    "downloadCount": 9960,
    "downloadUrl": "http://exam.uswat.edu.pk/Downloads/New/Registration%20Form%20(PDF).pdf",
    "lastUpdated": "Official Session 2024-2026"
  },
  {
    "id": "dl-real-8",
    "title": "Downloads/New/Registration Form (Word)",
    "category": "Registration",
    "fileType": "DOCX",
    "size": "1.2 MB",
    "downloadCount": 10830,
    "downloadUrl": "http://exam.uswat.edu.pk/Downloads/New/Registration%20Form%20(Word).docx",
    "lastUpdated": "Official Session 2024-2026"
  },
  {
    "id": "dl-real-9",
    "title": "Admission Form for BA/BSc (Part-I)",
    "category": "Examination",
    "fileType": "PDF",
    "size": "550 KB",
    "downloadCount": 11700,
    "downloadUrl": "http://exam.uswat.edu.pk/Downloads/dl_new_2024/BA%20BSc(Part-I).pdf",
    "lastUpdated": "Official Session 2024-2026"
  },
  {
    "id": "dl-real-10",
    "title": "Admission Form for BA/BSc (Part-II)",
    "category": "Examination",
    "fileType": "PDF",
    "size": "577 KB",
    "downloadCount": 12570,
    "downloadUrl": "http://exam.uswat.edu.pk/Downloads/dl_new_2024/BA%20BSc(Part-II).pdf",
    "lastUpdated": "Official Session 2024-2026"
  },
  {
    "id": "dl-real-11",
    "title": "Admission Form for MA/MSc (Previous)",
    "category": "Examination",
    "fileType": "PDF",
    "size": "604 KB",
    "downloadCount": 13440,
    "downloadUrl": "http://exam.uswat.edu.pk/Downloads/dl_new_2024/M.A%20M.Sc%20(Previous).pdf",
    "lastUpdated": "Official Session 2024-2026"
  },
  {
    "id": "dl-real-12",
    "title": "Admission Form for MA/MSc (Final)",
    "category": "Examination",
    "fileType": "PDF",
    "size": "631 KB",
    "downloadCount": 14310,
    "downloadUrl": "http://exam.uswat.edu.pk/Downloads/dl_new_2024/M.A%20M.Sc%20(Final).pdf",
    "lastUpdated": "Official Session 2024-2026"
  },
  {
    "id": "dl-real-13",
    "title": "Complete Fee Structure",
    "category": "Examination",
    "fileType": "PDF",
    "size": "658 KB",
    "downloadCount": 15180,
    "downloadUrl": "http://exam.uswat.edu.pk/Downloads/New/WhatsApp%20Image%202024-08-23%20at%2010.05.49.jpeg",
    "lastUpdated": "Official Session 2024-2026"
  },
  {
    "id": "dl-real-14",
    "title": "Duty Proforma",
    "category": "Examination",
    "fileType": "PDF",
    "size": "685 KB",
    "downloadCount": 16050,
    "downloadUrl": "http://exam.uswat.edu.pk/Downloads/New/Duty%20Proforma%20(2).pdf",
    "lastUpdated": "Official Session 2024-2026"
  },
  {
    "id": "dl-real-15",
    "title": "Fee slip NBP-Bank Al-Habib",
    "category": "Examination",
    "fileType": "PDF",
    "size": "712 KB",
    "downloadCount": 16920,
    "downloadUrl": "http://exam.uswat.edu.pk/Downloads/New/Feee%20slip%20NBP-Bank%20Al-Habib%20(1).pdf",
    "lastUpdated": "Official Session 2024-2026"
  },
  {
    "id": "dl-real-16",
    "title": "Name Correction Requirements",
    "category": "Registration",
    "fileType": "PDF",
    "size": "289 KB",
    "downloadCount": 17790,
    "downloadUrl": "http://exam.uswat.edu.pk/Downloads/New/Name%20Correction%20Requirments%20(2).pdf",
    "lastUpdated": "Official Session 2024-2026"
  },
  {
    "id": "dl-real-17",
    "title": "UNDERTAKING for degree",
    "category": "DMC/Degree",
    "fileType": "PDF",
    "size": "316 KB",
    "downloadCount": 3660,
    "downloadUrl": "http://exam.uswat.edu.pk/Downloads/New/UNDERTAKING%20for%20degree%20(1).pdf",
    "lastUpdated": "Official Session 2024-2026"
  },
  {
    "id": "dl-real-18",
    "title": "Appilication form for Registration Cancellation",
    "category": "Registration",
    "fileType": "PDF",
    "size": "343 KB",
    "downloadCount": 4530,
    "downloadUrl": "http://exam.uswat.edu.pk/Downloads/New/Appilication%20form%20for%20Registration%20Cancellation.pdf",
    "lastUpdated": "Official Session 2024-2026"
  },
  {
    "id": "dl-real-19",
    "title": "Application for Combined DMC",
    "category": "DMC/Degree",
    "fileType": "PDF",
    "size": "370 KB",
    "downloadCount": 5400,
    "downloadUrl": "http://exam.uswat.edu.pk/Downloads/New/Application%20for%20Combine%20DMC.pdf",
    "lastUpdated": "Official Session 2024-2026"
  },
  {
    "id": "dl-real-20",
    "title": "Application for Inter University Migration",
    "category": "Registration",
    "fileType": "PDF",
    "size": "397 KB",
    "downloadCount": 6270,
    "downloadUrl": "http://exam.uswat.edu.pk/Downloads/New/Application%20for%20Inter%20University%20Migration.pdf",
    "lastUpdated": "Official Session 2024-2026"
  },
  {
    "id": "dl-real-21",
    "title": "Application form for Degree",
    "category": "DMC/Degree",
    "fileType": "PDF",
    "size": "424 KB",
    "downloadCount": 7140,
    "downloadUrl": "http://exam.uswat.edu.pk/Downloads/New/Application%20form%20for%20Degree%20(1).pdf",
    "lastUpdated": "Official Session 2024-2026"
  },
  {
    "id": "dl-real-22",
    "title": "Application form for Duplicate Transcript",
    "category": "DMC/Degree",
    "fileType": "PDF",
    "size": "451 KB",
    "downloadCount": 8010,
    "downloadUrl": "http://exam.uswat.edu.pk/Downloads/New/Application%20form%20for%20Duplicate%20Transcript%20(1).pdf",
    "lastUpdated": "Official Session 2024-2026"
  },
  {
    "id": "dl-real-23",
    "title": "Application form for Duplicated DMC",
    "category": "DMC/Degree",
    "fileType": "PDF",
    "size": "478 KB",
    "downloadCount": 8880,
    "downloadUrl": "http://exam.uswat.edu.pk/Downloads/New/Application%20form%20for%20Duplicated%20DMC.pdf",
    "lastUpdated": "Official Session 2024-2026"
  },
  {
    "id": "dl-real-24",
    "title": "Application form for English Proficiency Certificate",
    "category": "Examination",
    "fileType": "PDF",
    "size": "505 KB",
    "downloadCount": 9750,
    "downloadUrl": "http://exam.uswat.edu.pk/Downloads/New/Application%20form%20for%20English%20Proficiency%20Certificate.pdf",
    "lastUpdated": "Official Session 2024-2026"
  },
  {
    "id": "dl-real-25",
    "title": "Application form for Fresh/IOG/Incomplete Transcript",
    "category": "DMC/Degree",
    "fileType": "PDF",
    "size": "532 KB",
    "downloadCount": 10620,
    "downloadUrl": "http://exam.uswat.edu.pk/Downloads/New/Application%20form%20for%20Fresh.IOG.Incomplete%20Transcript.pdf",
    "lastUpdated": "Official Session 2024-2026"
  },
  {
    "id": "dl-real-26",
    "title": "Application form for Provisional Certificate",
    "category": "Examination",
    "fileType": "PDF",
    "size": "559 KB",
    "downloadCount": 11490,
    "downloadUrl": "http://exam.uswat.edu.pk/Downloads/New/Application%20form%20for%20Provisional%20Certificate%20(1).pdf",
    "lastUpdated": "Official Session 2024-2026"
  },
  {
    "id": "dl-real-27",
    "title": "Application form for Verification of DMC,Transcipt,Degree",
    "category": "DMC/Degree",
    "fileType": "PDF",
    "size": "586 KB",
    "downloadCount": 12360,
    "downloadUrl": "http://exam.uswat.edu.pk/Downloads/New/Application%20form%20for%20Verification%20of%20DMC,Transcipt,Degree%20(1).pdf",
    "lastUpdated": "Official Session 2024-2026"
  },
  {
    "id": "dl-real-28",
    "title": "Authority Letter for Receiving Degree",
    "category": "DMC/Degree",
    "fileType": "PDF",
    "size": "613 KB",
    "downloadCount": 13230,
    "downloadUrl": "http://exam.uswat.edu.pk/Downloads/New/Authority%20Letter%20for%20Recieving%20Degree.pdf",
    "lastUpdated": "Official Session 2024-2026"
  }
];
