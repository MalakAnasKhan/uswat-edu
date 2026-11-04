# University of Swat (uswat.edu.pk) Modern Web Portal

Official modern web application for the **University of Swat**, Charbagh, Khyber Pakhtunkhwa, Pakistan. Built using **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS**, and **TypeScript**.

---

## 🌟 Key Features

- **Executive Alignment:** Reflects the institutional leadership of **Prof. Dr. Husnul Amin (Vice Chancellor)** and **Dr. Arshad Ali Khan (Registrar)** under the roadmap motto: *"Work Hard. Work Smart. Deliver Results."*
- **Ultra-Fast Global Search (`Ctrl+K`):** Client-side fuzzy search powered by Fuse.js scanning departments, notices, and downloads in under 50ms.
- **Interactive Examination Result Checker:** Supports Semester and Annual systems with sample presets, course grade tables, and printable provisional DMCs.
- **Dynamic Academic Department Portals:** 10 pre-rendered department routes (`/departments/[slug]`) across 4 faculties with program prerequisites and faculty directories.
- **Admissions Hub:** 4-step visual application workflow, eligibility breakdown (BS, MS, PhD), fee schedules, and live merit lists.
- **Research & ORIC:** Comprehensive showcase of 4 peer-reviewed university journals, multi-million rupee HEC grants, and specialized Charbagh laboratories.
- **100% WCAG Accessible & Mobile-First:** Responsive drawer with accessible accordions, focus rings, reduced-motion guards, and official emerald/gold theme tokens.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router, Server & Client Components) |
| **Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS v3](https://tailwindcss.com/) with custom University Theme Tokens |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Search Engine** | [Fuse.js](https://www.fusejs.io/) (Zero-latency fuzzy search) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Type Safety** | TypeScript 5.7+ |
| **Deployment** | Vercel & Multi-Stage Docker (Alpine Linux) |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.18.0 or later (v20+ recommended)
- **npm** or **pnpm**

### Installation

```bash
# Clone the repository
git clone https://github.com/uswat-edu-pk/university-website.git
cd university-website

# Install dependencies
npm install
```

### Development Server

```bash
# Start dev server on port 3000
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

---

## 📁 Project Directory Structure

```
university-of-swat/
├── public/                 # Static assets (University Crest, campus photography)
│   └── images/             # Optimized JPEG and PNG images
├── src/
│   ├── app/                # Next.js 15 App Router pages & metadata
│   │   ├── about/          # History, Governance, Campuses, VC Message
│   │   ├── admissions/     # Online Admissions Hub, Fee Table, Merit Rosters
│   │   ├── contact/        # Campus Directory, Inquiry Ticket Form & Transit Map
│   │   ├── departments/    # Academic Directory & [slug] dynamic portals
│   │   ├── downloads/      # Examination & administrative forms repository
│   │   ├── examinations/   # Result verification portal & date sheets
│   │   ├── notices/        # University Gazette & tender announcements
│   │   ├── oric/           # Research journals & publications
│   │   ├── research/       # ORIC Hub & funded grants showcase
│   │   ├── not-found.tsx   # University-branded custom 404 page
│   │   ├── sitemap.ts      # Dynamic XML sitemap generation
│   │   └── robots.ts       # Robots indexing rules
│   ├── components/         # Reusable modular UI components
│   │   ├── layout/         # TopBar, Navbar, Footer
│   │   ├── home/           # Hero, QuickLinks, NoticeBoard, VCSpotlight, CampusLife
│   │   ├── examinations/   # ResultChecker widget
│   │   ├── departments/    # DepartmentView tabbed showcase
│   │   └── search/         # SearchModal (Fuse.js engine)
│   ├── data/               # Strongly typed data stores (Admin Editable)
│   │   ├── notices.ts      # University circulars, tenders & admissions notices
│   │   ├── downloads.ts    # Official downloadable PDF and DOCX forms
│   │   └── departments.ts  # 10 departments, faculty profiles, and degree criteria
│   └── lib/                # Utility helpers (clsx, twMerge)
├── docs/                   # Contest submission & video walkthrough script
├── Dockerfile              # Multi-stage production container configuration
├── vercel.json             # Edge security headers & caching configuration
└── tailwind.config.ts      # University color tokens & typography config
```

---

## 📝 Guide for University Administrators: Updating Content

Administrators can update university notices, download forms, and department details **without writing React code**. All data resides in strongly typed files inside `src/data/`:

### 1. Adding a New Notice (`src/data/notices.ts`)
Open `src/data/notices.ts` and add a new item to `NOTICES`:
```ts
{
  id: 'notice-fall-2026',
  title: 'Admissions Open for Undergraduate Programs - Fall 2026',
  category: 'Admissions', // 'Admissions' | 'Examination' | 'General' | 'Tender'
  date: 'November 10, 2026',
  isUrgent: true, // Displays pulsating red badge on the homepage hero ticker
  href: '/admissions',
  department: 'Directorate of Admissions',
}
```

### 2. Adding a New Downloadable Form (`src/data/downloads.ts`)
Open `src/data/downloads.ts` and add an entry to `DOWNLOADS`:
```ts
{
  id: 'dl-rechecking',
  title: 'Application Form for Re-checking of Answer Books',
  category: 'Examination', // 'Examination' | 'Registration' | 'DMC/Degree' | 'Affiliation' | 'Scholarship'
  fileType: 'PDF', // 'PDF' | 'DOCX'
  size: '320 KB',
  downloadCount: 4500,
  downloadUrl: '/downloads/rechecking-form.pdf',
  lastUpdated: 'November 2026',
}
```

### 3. Modifying Department Information (`src/data/departments.ts`)
Update department chairpersons, research focus, degree requirements, or contact emails inside `DEPARTMENTS`. All dynamic pages (`/departments/[slug]`) automatically regenerate at build time.

---

## 🐳 Docker Deployment

To build and run the production container:

```bash
# Build the Docker image
docker build -t university-of-swat-portal .

# Run the container on port 3000
docker run -p 3000:3000 university-of-swat-portal
```

---

## 🔒 Security & Performance Features

- **Strict HTTP Security Headers:** Configured with `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, and strict `Referrer-Policy`.
- **Zero-Vulnerability Static Generation:** Prerendered static pages ensure lightning-fast load times while eliminating SQL injection and server-side execution attack surfaces.
- **Long-Term Asset Caching:** 1-year immutable caching on static image assets in `public/images/`.

---

## 📄 License & Attribution

Copyright © 2026 University of Swat (uswat.edu.pk). All rights reserved.  
Main Campus, Charbagh, District Swat, Khyber Pakhtunkhwa, Pakistan.

