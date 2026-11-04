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
    "id": "notice-real-1",
    "title": "Fee Information MA/MSc Supplementary 2024",
    "category": "Examination",
    "date": "November 2026",
    "isUrgent": true,
    "href": "http://exam.uswat.edu.pk/Master_2024S/Master_2024S-Fee.pdf",
    "department": "Office of the Controller of Examinations"
  },
  {
    "id": "notice-real-2",
    "title": "Fee Information BA/BSc Supplementary 2024",
    "category": "Examination",
    "date": "November 2026",
    "isUrgent": false,
    "href": "http://exam.uswat.edu.pk/Bachelor_2024S/Bachelor_2024S-Fee.pdf",
    "department": "Office of the Controller of Examinations"
  },
  {
    "id": "notice-real-3",
    "title": "BS Registration for Fall 2024",
    "category": "Examination",
    "date": "November 2026",
    "isUrgent": false,
    "href": "http://exam.uswat.edu.pk/BS_registration_F2024/BS-Registration.pdf",
    "department": "Office of the Controller of Examinations"
  },
  {
    "id": "notice-real-4",
    "title": "PRACTICAL Date Sheet For BA/BSc Annual Exam 2024",
    "category": "Examination",
    "date": "November 2026",
    "isUrgent": false,
    "href": "http://exam.uswat.edu.pk/ViVa/PRACTICAL%20Date%20Sheet%20For%20BA.BSc%20Annual%20Exam%202024.pdf",
    "department": "Office of the Controller of Examinations"
  },
  {
    "id": "notice-real-5",
    "title": "VIVA VOCE Date Sheet For MA/MSc Annual Exam 2024",
    "category": "Examination",
    "date": "November 2026",
    "isUrgent": false,
    "href": "http://exam.uswat.edu.pk/ViVa/VIVA%20VOCE%20Date%20Sheet%20For%20MA.MSc%20Annual%20Exam%202024.pdf",
    "department": "Office of the Controller of Examinations"
  },
  {
    "id": "notice-real-6",
    "title": "MA/MSc Supplementary Examinations 2023",
    "category": "Examination",
    "date": "November 2026",
    "isUrgent": false,
    "href": "http://exam.uswat.edu.pk/Notifications/Notification_Master-2023.jpeg",
    "department": "Office of the Controller of Examinations"
  },
  {
    "id": "notice-real-7",
    "title": "BA/BSc Supplementary Examinations 2023",
    "category": "Examination",
    "date": "November 2026",
    "isUrgent": false,
    "href": "http://exam.uswat.edu.pk/Downloads/BA-BSc-Supply_2023.pdf",
    "department": "Office of the Controller of Examinations"
  },
  {
    "id": "notice-real-8",
    "title": "BS Registration 2023",
    "category": "Examination",
    "date": "November 2026",
    "isUrgent": false,
    "href": "http://exam.uswat.edu.pk/Downloads/BS-Registration-aff.pdf",
    "department": "Office of the Controller of Examinations"
  },
  {
    "id": "notice-real-9",
    "title": "Notfication MA/MSc Annual Examinations 2023",
    "category": "Examination",
    "date": "November 2026",
    "isUrgent": false,
    "href": "http://exam.uswat.edu.pk/Notifications/MA_MSc_2023A.pdf",
    "department": "Office of the Controller of Examinations"
  },
  {
    "id": "notice-real-10",
    "title": "Notfication BA/BSc Annual Examinations 2023",
    "category": "Examination",
    "date": "November 2026",
    "isUrgent": false,
    "href": "http://exam.uswat.edu.pk/Notifications/BA_BSc_2023A.pdf",
    "department": "Office of the Controller of Examinations"
  },
  {
    "id": "notice-real-11",
    "title": "BBA/BCom Supplementary Examinations 2022",
    "category": "Examination",
    "date": "November 2026",
    "isUrgent": false,
    "href": "http://exam.uswat.edu.pk/BBA_BCom_2022S/Notification%20for%20BBA%20supply%20exam%2022.pdf",
    "department": "Office of the Controller of Examinations"
  },
  {
    "id": "notice-real-12",
    "title": "BA/BSc Supplementary Examinations 2022",
    "category": "Examination",
    "date": "November 2026",
    "isUrgent": false,
    "href": "http://exam.uswat.edu.pk/BA_BSc_2022S/Notification%20for%20BA%20Bsc%20supply%20exam%2022.pdf",
    "department": "Office of the Controller of Examinations"
  },
  {
    "id": "notice-real-13",
    "title": "Revised BA/BSc Annual Examination 2022",
    "category": "Examination",
    "date": "November 2026",
    "isUrgent": false,
    "href": "http://exam.uswat.edu.pk/BA_BSc_2022A/Revised%20_Datesheet_BA%20BSc%20Examination%20(A)%202022%20(1).pdf",
    "department": "Office of the Controller of Examinations"
  },
  {
    "id": "notice-real-14",
    "title": "BS Semester-II Examinations Spring 2022",
    "category": "Examination",
    "date": "November 2026",
    "isUrgent": false,
    "href": "http://exam.uswat.edu.pk/BS/BS-4Year-2ndsemester.jpg",
    "department": "Office of the Controller of Examinations"
  },
  {
    "id": "notice-real-15",
    "title": "BBA/BCom Annaul Examinations 2022",
    "category": "Examination",
    "date": "November 2026",
    "isUrgent": false,
    "href": "http://exam.uswat.edu.pk/BBA_BCOM_2022A/Fee-notification.pdf",
    "department": "Office of the Controller of Examinations"
  },
  {
    "id": "notice-real-16",
    "title": "BA/BSc Annual Examinations 2022",
    "category": "Examination",
    "date": "November 2026",
    "isUrgent": false,
    "href": "http://exam.uswat.edu.pk/BA_BSc_2022A/Fee-Notification.jpeg",
    "department": "Office of the Controller of Examinations"
  },
  {
    "id": "notice-real-17",
    "title": "MA/MSc Annual Examinations 2022",
    "category": "Examination",
    "date": "November 2026",
    "isUrgent": false,
    "href": "http://exam.uswat.edu.pk/Master_2022/notification-R.pdf",
    "department": "Office of the Controller of Examinations"
  },
  {
    "id": "notice-real-18",
    "title": "BA/BSc & BBA/BCom Supplementary Examinations 2021",
    "category": "Examination",
    "date": "November 2026",
    "isUrgent": false,
    "href": "http://exam.uswat.edu.pk/BA_BSc_2021S/BA-BSc-BBA-BCom-S2021.pdf",
    "department": "Office of the Controller of Examinations"
  },
  {
    "id": "notice-real-19",
    "title": "BA/BSc Supplementary Examinations 2021",
    "category": "Examination",
    "date": "November 2026",
    "isUrgent": false,
    "href": "http://exam.uswat.edu.pk/BA_BSc_2021S/BA-BSc_21S_Notification.pdf",
    "department": "Office of the Controller of Examinations"
  },
  {
    "id": "notice-real-20",
    "title": "IoG Spring 2020",
    "category": "Examination",
    "date": "November 2026",
    "isUrgent": false,
    "href": "http://exam.uswat.edu.pk/Notifications/IoG-Spring-2020.jpeg",
    "department": "Office of the Controller of Examinations"
  },
  {
    "id": "notice-real-21",
    "title": "MA/MSc (Previous) Annual Examinations 2021",
    "category": "Examination",
    "date": "November 2026",
    "isUrgent": false,
    "href": "http://exam.uswat.edu.pk/Master_2021/DS-01%20(1).pdf",
    "department": "Office of the Controller of Examinations"
  },
  {
    "id": "notice-real-22",
    "title": "Revised MA/MSc (Final) Annual Examination 2021",
    "category": "Examination",
    "date": "November 2026",
    "isUrgent": false,
    "href": "http://exam.uswat.edu.pk/Master_2021/DS-01%20(2).pdf",
    "department": "Office of the Controller of Examinations"
  },
  {
    "id": "notice-real-23",
    "title": "B.Com (Part-I & II) Annual Examinations 2021",
    "category": "Examination",
    "date": "November 2026",
    "isUrgent": false,
    "href": "http://exam.uswat.edu.pk/BBA_BCom_21A/CamScanner%2010-06-2021%2011.13.pdf",
    "department": "Office of the Controller of Examinations"
  },
  {
    "id": "notice-real-24",
    "title": "BBA (Part-I, II, III & IV) Annual Examinations 2021",
    "category": "Examination",
    "date": "November 2026",
    "isUrgent": false,
    "href": "http://exam.uswat.edu.pk/BBA_BCom_21A/DS-BBA_21A.png",
    "department": "Office of the Controller of Examinations"
  },
  {
    "id": "notice-real-25",
    "title": "BA/BSc (Part-I & II) Annual Examinations 2021",
    "category": "Examination",
    "date": "November 2026",
    "isUrgent": false,
    "href": "http://exam.uswat.edu.pk/BA_BSc_21A/DS_21A.pdf",
    "department": "Office of the Controller of Examinations"
  }
];
