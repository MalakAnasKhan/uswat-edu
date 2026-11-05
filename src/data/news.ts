export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
  imageCaption?: string;
  category: 'Academics' | 'Research' | 'Campus Life' | 'Events' | 'Administration';
  publishedAt: string;
  author: string;
  isFeatured?: boolean;
  tags?: string[];
}

export const INITIAL_NEWS: NewsArticle[] = [
  {
    id: 'news-1',
    slug: 'vc-inaugurates-ai-computing-research-lab',
    title: 'Vice Chancellor Prof. Dr. Husnul Amin Inaugurates Advanced Computing & AI Research Laboratory',
    summary:
      'The purpose-built computing facility at Main Campus Charbagh features high-performance workstations, neural network testbeds, and dedicated incubation space for final year researchers.',
    content: `In a landmark step toward academic modernization, Vice Chancellor Prof. Dr. Husnul Amin officially inaugurated the Advanced Computing & Artificial Intelligence Research Laboratory at the Main Campus, Charbagh. The facility was established under the university's digital transformation roadmap, "Work Hard. Work Smart. Deliver Results."

Speaking on the occasion, Prof. Dr. Husnul Amin highlighted that the lab will bridge theoretical computer science with real-world industry demands. Equipped with GPU-accelerated computing nodes, the center will support graduate students and faculty in machine learning, natural language processing for regional languages, computer vision, and geospatial data modeling for the Swat valley.

"Our mission is to empower the youth of Khyber Pakhtunkhwa with cutting-edge tools so they can compete in the global digital economy," the Vice Chancellor stated. Registrar Dr. Arshad Ali Khan, Dean of Sciences, and faculty members from the Department of Computer and Software Technology attended the ribbon-cutting ceremony.

The lab will also host collaborative research with national incubation centers and serve as an open sandbox for student startups developing solutions in agri-tech, tourism digitization, and flood monitoring systems.`,
    imageUrl: '/images/Meeting 2.jpg',
    imageCaption: 'Vice Chancellor Prof. Dr. Husnul Amin chairing the inauguration ceremony at Main Campus Charbagh.',
    category: 'Research',
    publishedAt: 'November 4, 2026',
    author: 'Public Relations Office',
    isFeatured: true,
    tags: ['AI Research', 'Computing', 'Charbagh', 'Innovation'],
  },
  {
    id: 'news-2',
    slug: 'university-signs-industry-mou-for-tech-incubation',
    title: 'University of Swat Signs Strategic MoUs with Regional Tech Firms for Graduate Placement',
    summary:
      'New bilateral partnerships will create over 250 paid internship slots annually, student mentorship pipelines, and sponsored final year research grants for software and management graduates.',
    content: `The University of Swat Directorate of ORIC (Office of Research, Innovation, and Commercialization) has formalized strategic Memoranda of Understanding (MoUs) with leading Khyber Pakhtunkhwa technology firms and national IT consortiums.

The agreements focus on creating structured industry-academia linkages, providing undergraduate students with hands-on exposure to enterprise software engineering, cloud architecture, and digital marketing. Under the provisions of the MoU, selected final-year projects will receive seed funding and mentorship from industry tech leads.

Vice Chancellor Prof. Dr. Husnul Amin emphasized that university education must remain relevant to market requirements: "We do not merely confer degrees; we cultivate employable problem-solvers who can immediately contribute to regional economic growth."

Representatives from the partner tech firms commended the university's proactive approach and pledged to conduct on-campus recruitment drives starting this spring semester.`,
    imageUrl: '/images/Meeting.jpg',
    imageCaption: 'Signing ceremony between University of Swat administration and regional IT industry leaders.',
    category: 'Administration',
    publishedAt: 'November 2, 2026',
    author: 'Directorate of ORIC',
    isFeatured: true,
    tags: ['MoU', 'Placements', 'Industry Linkages', 'Internships'],
  },
  {
    id: 'news-3',
    slug: 'spring-orientation-welcomes-new-scholars',
    title: 'Orientation Week Welcomes Over 1,500 Incoming Students Across Main and Women Campuses',
    summary:
      'Dean of Academic Affairs and department heads introduced newly admitted scholars to campus facilities, academic integrity guidelines, LMS tools, and extracurricular student societies.',
    content: `The University of Swat commenced its academic orientation sessions welcoming more than 1,500 undergraduate and graduate students enrolled across 14 academic departments at Main Campus Charbagh and the Women Campus.

The multi-day orientation featured campus tours, briefings on the university's Credit Based Semester System (CBSS), and training on the Student CMS Portal (cms1.uswat.edu.pk). Students were introduced to the library repository, sporting facilities, and the Student Financial Aid Office (SFAO).

Addressing the gathering, the Registrar Dr. Arshad Ali Khan congratulated the admitted scholars for earning their place through competitive merit. He reiterated the administration's zero-tolerance policy on campus discipline and highlighted the counseling and career services available to all students.

The event concluded with an interactive Q&A session where student proctors and society presidents shared tips for academic success and community service participation.`,
    imageUrl: '/images/Main Gate.jpg',
    imageCaption: 'Incoming students entering the Main Campus Charbagh for Orientation Week.',
    category: 'Campus Life',
    publishedAt: 'October 28, 2026',
    author: 'Directorate of Student Affairs',
    isFeatured: false,
    tags: ['Admissions', 'Orientation', 'Students', 'Campus Life'],
  },
  {
    id: 'news-4',
    slug: 'oric-international-conference-biodiversity',
    title: 'ORIC Hosts 3-Day International Symposium on Himalayan Flora, Conservation & Climate Change',
    summary:
      'Eminent botanists, conservation biologists, and environmental scientists presented 45 peer-reviewed papers on sustainable preservation of the Swat river basin ecosystem.',
    content: `The Office of Research, Innovation & Commercialization (ORIC) in collaboration with the Department of Environmental and Conservation Sciences hosted a 3-day International Symposium on Himalayan Biodiversity and Ecological Resilience.

Researchers from national and international universities shared ground-breaking studies on medicinal plants indigenous to Swat Valley, watershed management, and climate-induced flash flood mitigation. Over 45 scientific papers and poster presentations were delivered across six technical sessions.

In his keynote address, Prof. Dr. Husnul Amin commended the organizers for addressing pressing ecological vulnerabilities of Northern Pakistan. "Swat is an ecological sanctuary. It is the responsibility of our scientific community to formulate evidence-based policies that conserve this heritage for future generations," he remarked.

The conference concluded with the formulation of the "Swat Valley Conservation Declaration 2026", recommending policy actions to provincial authorities and the Higher Education Commission.`,
    imageUrl: '/images/ORIC.jpg',
    imageCaption: 'Technical session participants and keynote speakers at the ORIC International Symposium.',
    category: 'Research',
    publishedAt: 'October 21, 2026',
    author: 'ORIC Secretariat',
    isFeatured: false,
    tags: ['Ecology', 'Symposium', 'Himalayan Flora', 'Climate'],
  },
  {
    id: 'news-5',
    slug: 'annual-sports-gala-and-cultural-festival-announced',
    title: 'University Announces Dates for Annual All-Campus Sports Gala & Cultural Expo 2026',
    summary:
      'Inter-departmental cricket, volleyball, football, badminton, and traditional Swati cultural exhibitions scheduled from November 20 to 26 at Main Campus athletic grounds.',
    content: `The Directorate of Sports at the University of Swat has announced the official schedule for the Annual All-Campus Sports Gala & Youth Cultural Festival 2026. The week-long extravaganza will run from November 20 to November 26, 2026.

Teams representing all 14 teaching departments, affiliated colleges, and the Women Campus will compete across 12 athletic disciplines, including cricket, football, volleyball, badminton, table tennis, and athletics. In addition, an evening cultural pavilion will showcase traditional Gandhara and Swati crafts, poetry recitals (Mushaira), and culinary heritage.

The Vice Chancellor approved special budgetary provisions for sports gear, awards, and shields for winning athletes. "Sports cultivate character, resilience, and camaraderie," said Director of Sports. Registration for trials is now open through departmental sports coordinators.`,
    imageUrl: '/images/Department.jpeg',
    imageCaption: 'Departmental sports teams gearing up for the 2026 University Gala.',
    category: 'Events',
    publishedAt: 'October 15, 2026',
    author: 'Directorate of Sports',
    isFeatured: false,
    tags: ['Sports Gala', 'Athletics', 'Culture', 'Festival'],
  },
  {
    id: 'news-6',
    slug: 'syndicate-approves-need-based-endowment-expansion',
    title: 'University Syndicate Approves 40% Increase in Need-Based Scholarships & Endowment Funds',
    summary:
      'The 28th meeting of the University Syndicate expanded financial assistance quotas to ensure that no qualified student from disadvantaged backgrounds is denied education.',
    content: `The 28th statutory meeting of the University of Swat Syndicate, chaired by Vice Chancellor Prof. Dr. Husnul Amin, approved an unprecedented 40% increase in the university's internal need-based scholarship fund for the 2026–2027 fiscal year.

The Syndicate also approved the establishment of the 'Swat Educational Endowment Fund', seeded with philanthropic contributions and commercialization revenues. This endowment will provide full-tuition waivers, book allowances, and hostel fee subsidies to meritorious students from remote tehsils of Swat, Shangla, and Kohistan.

"Poverty must never be an impediment to academic pursuit in this university," affirmed the Vice Chancellor. The Syndicate also sanctioned revised departmental research budgets and ratified promotions recommended by the Selection Board.`,
    imageUrl: '/images/VC 2.png',
    imageCaption: 'Members of the University Syndicate convening at the Executive Council Chamber.',
    category: 'Administration',
    publishedAt: 'October 08, 2026',
    author: 'Registrar Office',
    isFeatured: false,
    tags: ['Syndicate', 'Scholarships', 'Governance', 'Endowment'],
  },
];

