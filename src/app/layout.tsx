import type { Metadata, Viewport } from 'next';
import './globals.css';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const viewport: Viewport = {
  themeColor: '#0A4D2E',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://uswat.edu.pk'),
  title: {
    default: 'University of Swat (uswat.edu.pk) | Premier Seat of Learning in Swat Valley',
    template: '%s | University of Swat',
  },
  description:
    'Official website of the University of Swat, Charbagh, Khyber Pakhtunkhwa. Explore academic departments, online admissions Fall 2026, examination results, student CMS portal, and ORIC research initiatives.',
  keywords: [
    'University of Swat',
    'uswat.edu.pk',
    'Swat University',
    'Charbagh Swat',
    'Admissions Fall 2026',
    'CMS University of Swat',
    'Examinations Swat',
    'HEC Pakistan',
    'Prof. Dr. Husnul Amin',
    'Malakand Division Universities',
  ],
  authors: [{ name: 'University of Swat Web Directorate' }],
  creator: 'University of Swat',
  publisher: 'University of Swat',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'University of Swat | Official University Portal',
    description:
      'Empowering minds, preserving heritage, and cultivating research in the valley of Swat.',
    url: 'https://uswat.edu.pk',
    siteName: 'University of Swat',
    images: [
      {
        url: '/images/Main Gate.jpg',
        width: 1200,
        height: 630,
        alt: 'University of Swat Main Campus Charbagh',
      },
    ],
    locale: 'en_PK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'University of Swat (uswat.edu.pk)',
    description:
      'Official portal of the University of Swat, Charbagh, Khyber Pakhtunkhwa.',
    images: ['/images/Main Gate.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/Logo.png',
    apple: '/images/Logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-neutral-light text-neutral-dark selection:bg-secondary selection:text-primary">
        {/* Top Utility Bar */}
        <TopBar />

        {/* Sticky University Navigation Bar */}
        <Navbar />

        {/* Main Application Content */}
        <main className="flex-1">{children}</main>

        {/* Official University Footer */}
        <Footer />
      </body>
    </html>
  );
}
