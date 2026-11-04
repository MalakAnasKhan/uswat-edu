export interface ProgramDetail {
  title: string;
  level: 'Undergraduate (BS)' | 'Graduate (MS/MPhil)' | 'Doctoral (PhD)' | 'Diploma';
  duration: string;
  creditHours: number;
  eligibility: string;
}

export interface FacultyMember {
  name: string;
  designation: string;
  qualification: string;
  researchInterests: string[];
  email: string;
}

export interface Department {
  slug: string;
  name: string;
  faculty: string;
  hod: string;
  degreesOffered: string[];
  contactEmail: string;
  shortDescription: string;
  establishedYear?: number;
  location?: string;
  vision?: string;
  researchFocus?: string[];
  programsDetail?: ProgramDetail[];
  facultyMembers?: FacultyMember[];
}

export const FACULTIES = [
  'Faculty of Chemical Sciences',
  'Faculty of Physical & Numerical Sciences',
  'Faculty of Management & Social Sciences',
  'Faculty of Life Sciences',
] as const;

export const DEPARTMENTS: Department[] = [
  // 1. Department of Chemical Sciences
  {
    slug: 'chemical-sciences',
    name: 'Department of Chemical Sciences',
    faculty: 'Faculty of Chemical Sciences',
    hod: 'Prof. Dr. Muhammad Farooq',
    degreesOffered: ['BS Chemistry (4 Years)', 'MPhil Chemistry', 'PhD Chemistry'],
    contactEmail: 'chem@uswat.edu.pk',
    shortDescription:
      'Advancing fundamental and applied chemical sciences through state-of-the-art laboratory research, synthetic chemistry, and material sciences tailored to regional and global industrial needs.',
    establishedYear: 2011,
    location: 'Science Complex, Main Campus Charbagh',
    vision:
      'To be recognized as a premier center of chemical research, innovation, and indigenous natural product discovery in Pakistan.',
    researchFocus: [
      'Phytochemistry & Natural Products',
      'Nano-materials & Catalysis',
      'Synthetic Organic Chemistry',
      'Water Treatment & Environmental Chemistry',
    ],
    programsDetail: [
      {
        title: 'BS Chemistry',
        level: 'Undergraduate (BS)',
        duration: '4 Years (8 Semesters)',
        creditHours: 136,
        eligibility: 'F.Sc. Pre-Medical or Pre-Engineering with minimum 50% marks.',
      },
      {
        title: 'MPhil Chemistry',
        level: 'Graduate (MS/MPhil)',
        duration: '2 Years (4 Semesters)',
        creditHours: 30,
        eligibility: '16 years of education in Chemistry/related field with minimum 2.50 CGPA or 50% in annual system + UoS Entry Test.',
      },
      {
        title: 'PhD Chemistry',
        level: 'Doctoral (PhD)',
        duration: '3-5 Years',
        creditHours: 48,
        eligibility: '18 years of education (MS/MPhil) in Chemistry with minimum 3.0 CGPA + Subject GRE/GAT Subject Test.',
      },
    ],
    facultyMembers: [
      {
        name: 'Prof. Dr. Muhammad Farooq',
        designation: 'Professor & Chairman',
        qualification: 'PhD in Organic Chemistry (Univ. of Karachi / Post-doc Germany)',
        researchInterests: ['Natural Products Isolation', 'Bioactive Metabolites'],
        email: 'mfarooq@uswat.edu.pk',
      },
      {
        name: 'Dr. Afzal Shah',
        designation: 'Associate Professor',
        qualification: 'PhD in Physical Chemistry (HEC Approved PhD Supervisor)',
        researchInterests: ['Electrochemistry', 'Biosensors', 'Nanocomposites'],
        email: 'afzal.shah@uswat.edu.pk',
      },
      {
        name: 'Dr. Naveed Alam',
        designation: 'Assistant Professor',
        qualification: 'PhD in Inorganic Chemistry (China)',
        researchInterests: ['Coordination Polymers', 'Metal Organic Frameworks'],
        email: 'naveed.alam@uswat.edu.pk',
      },
      {
        name: 'Dr. Sumera Khan',
        designation: 'Assistant Professor',
        qualification: 'PhD in Analytical Chemistry (Peshawar)',
        researchInterests: ['Spectroscopy', 'Trace Metal Analysis'],
        email: 'sumera.khan@uswat.edu.pk',
      },
    ],
  },

  // 2. Department of Computer Science & IT
  {
    slug: 'computer-science-it',
    name: 'Department of Computer Science & Information Technology',
    faculty: 'Faculty of Physical & Numerical Sciences',
    hod: 'Dr. Shah Khalid',
    degreesOffered: [
      'BS Computer Science',
      'BS Information Technology',
      'BS Software Engineering',
      'MS Computer Science',
      'PhD Computer Science',
    ],
    contactEmail: 'csit@uswat.edu.pk',
    shortDescription:
      'Dedicated to high-impact computing education, modern software engineering, artificial intelligence, cybersecurity, and scalable data technologies driving the digital economy.',
    establishedYear: 2010,
    location: 'Academic Block B, Main Campus Charbagh',
    vision:
      'To build globally competitive computing professionals, software architects, and AI researchers empowering the digital ecosystem of Pakistan.',
    researchFocus: [
      'Artificial Intelligence & Deep Learning',
      'Cybersecurity & Network Forensics',
      'Computer Vision & Medical Imaging',
      'Distributed Systems & Cloud Computing',
    ],
    programsDetail: [
      {
        title: 'BS Computer Science',
        level: 'Undergraduate (BS)',
        duration: '4 Years (8 Semesters)',
        creditHours: 132,
        eligibility: 'Intermediate with Mathematics or Computer Science with minimum 50% marks as per NCEAC criteria.',
      },
      {
        title: 'BS Software Engineering',
        level: 'Undergraduate (BS)',
        duration: '4 Years (8 Semesters)',
        creditHours: 134,
        eligibility: 'F.Sc. Pre-Engineering / ICS with minimum 50% marks.',
      },
      {
        title: 'MS Computer Science',
        level: 'Graduate (MS/MPhil)',
        duration: '2 Years (4 Semesters)',
        creditHours: 30,
        eligibility: 'BSCS/BSSE/BSIT 4 years degree (min 130 credit hours) with CGPA 2.5/4.0 + Departmental Entry Test.',
      },
      {
        title: 'PhD Computer Science',
        level: 'Doctoral (PhD)',
        duration: '3-5 Years',
        creditHours: 48,
        eligibility: 'MS/MPhil in Computing disciplines with min 3.0 CGPA + Entry Test & Interview.',
      },
    ],
    facultyMembers: [
      {
        name: 'Dr. Shah Khalid',
        designation: 'Associate Professor & Chairman',
        qualification: 'PhD in Computer Science (UK / HEC Approved Supervisor)',
        researchInterests: ['Machine Learning', 'Semantic Web', 'Data Analytics'],
        email: 'shah.khalid@uswat.edu.pk',
      },
      {
        name: 'Dr. Tariq Rahim',
        designation: 'Assistant Professor',
        qualification: 'PhD in Computer Vision (South Korea)',
        researchInterests: ['Deep Learning', 'Autonomous Systems', 'Object Detection'],
        email: 'tariq.rahim@uswat.edu.pk',
      },
      {
        name: 'Dr. Sana Ullah',
        designation: 'Assistant Professor',
        qualification: 'PhD in Software Engineering (Italy)',
        researchInterests: ['Empirical Software Engineering', 'Cloud Reliability'],
        email: 'sana.ullah@uswat.edu.pk',
      },
      {
        name: 'Engr. Imran Khan',
        designation: 'Lecturer',
        qualification: 'MS Computer Systems (NUST)',
        researchInterests: ['Internet of Things (IoT)', 'Embedded Systems'],
        email: 'imran.khan@uswat.edu.pk',
      },
    ],
  },

  // 3. Department of Mathematics & Statistics
  {
    slug: 'mathematics',
    name: 'Department of Mathematics & Statistics',
    faculty: 'Faculty of Physical & Numerical Sciences',
    hod: 'Dr. Imtiaz Ahmad',
    degreesOffered: ['BS Mathematics', 'MPhil Mathematics', 'PhD Mathematics'],
    contactEmail: 'math@uswat.edu.pk',
    shortDescription:
      'Cultivating rigorous analytical and computational expertise across pure and applied mathematics, numerical modeling, fluid dynamics, and statistical algorithms.',
    establishedYear: 2012,
    location: 'Main Campus, Charbagh',
    vision:
      'To advance fundamental mathematical inquiries and mathematical modeling applications for engineering and social solutions.',
    researchFocus: [
      'Fluid Dynamics & Computational Physics',
      'Differential Equations & Numerical Analysis',
      'Algebraic Structures & Graph Theory',
    ],
    programsDetail: [
      {
        title: 'BS Mathematics',
        level: 'Undergraduate (BS)',
        duration: '4 Years (8 Semesters)',
        creditHours: 130,
        eligibility: 'Intermediate with Mathematics with minimum 45% marks.',
      },
      {
        title: 'MPhil Mathematics',
        level: 'Graduate (MS/MPhil)',
        duration: '2 Years (4 Semesters)',
        creditHours: 30,
        eligibility: '16 years of education in Mathematics with minimum 2.5 CGPA.',
      },
    ],
    facultyMembers: [
      {
        name: 'Dr. Imtiaz Ahmad',
        designation: 'Associate Professor & Chairman',
        qualification: 'PhD in Applied Mathematics (HEC Approved)',
        researchInterests: ['Numerical Simulations', 'Fluid Flow Models'],
        email: 'imtiaz@uswat.edu.pk',
      },
      {
        name: 'Dr. Noor Rehman',
        designation: 'Assistant Professor',
        qualification: 'PhD in Pure Mathematics (Peshawar)',
        researchInterests: ['Algebraic Geometry', 'Functional Analysis'],
        email: 'noor.rehman@uswat.edu.pk',
      },
    ],
  },

  // 4. Department of Physics
  {
    slug: 'physics',
    name: 'Department of Physics',
    faculty: 'Faculty of Physical & Numerical Sciences',
    hod: 'Dr. Niaz Muhammad',
    degreesOffered: ['BS Physics', 'MPhil Physics', 'PhD Physics'],
    contactEmail: 'physics@uswat.edu.pk',
    shortDescription:
      'Equipping researchers with rigorous foundations in condensed matter physics, renewable energy materials, quantum mechanics, and optoelectronics.',
    establishedYear: 2011,
    location: 'Main Campus, Charbagh',
    vision:
      'To build a state-of-the-art center for material science and renewable energy experimental research.',
    researchFocus: [
      'Renewable Energy & Photovoltaics',
      'Semiconductor Thin Films',
      'Plasma Physics & Laser Technologies',
    ],
    programsDetail: [
      {
        title: 'BS Physics',
        level: 'Undergraduate (BS)',
        duration: '4 Years (8 Semesters)',
        creditHours: 134,
        eligibility: 'F.Sc. Pre-Engineering with minimum 50% marks.',
      },
      {
        title: 'MPhil Physics',
        level: 'Graduate (MS/MPhil)',
        duration: '2 Years (4 Semesters)',
        creditHours: 30,
        eligibility: 'BS 4 years in Physics with 2.50 CGPA + Entry Test.',
      },
    ],
    facultyMembers: [
      {
        name: 'Dr. Niaz Muhammad',
        designation: 'Chairman & Associate Professor',
        qualification: 'PhD in Solid State Physics (China)',
        researchInterests: ['Perovskite Solar Cells', 'Nanomaterials'],
        email: 'niaz@uswat.edu.pk',
      },
      {
        name: 'Dr. Zahid Khan',
        designation: 'Assistant Professor',
        qualification: 'PhD in Theoretical Physics (Islamabad)',
        researchInterests: ['Quantum Optics', 'Mathematical Physics'],
        email: 'zahid.khan@uswat.edu.pk',
      },
    ],
  },

  // 5. Department of Management Sciences
  {
    slug: 'management-sciences',
    name: 'Department of Management Sciences',
    faculty: 'Faculty of Management & Social Sciences',
    hod: 'Dr. Muhammad Naveed',
    degreesOffered: ['BBA (Hons)', 'BS Accounting & Finance', 'MBA (Executive)', 'MS Management Sciences', 'PhD Management Sciences'],
    contactEmail: 'ms@uswat.edu.pk',
    shortDescription:
      'Developing innovative business leaders, entrepreneurs, and ethical corporate managers through practical case studies, finance laboratories, and strategic management.',
    establishedYear: 2010,
    location: 'Management Complex, Main Campus Charbagh',
    vision:
      'To be the preferred business school in the region known for leadership, ethical enterprise, and sustainable entrepreneurship.',
    researchFocus: [
      'Corporate Governance & Islamic Finance',
      'Sustainable Enterprise & Regional SMEs',
      'Digital Marketing & Consumer Psychology',
    ],
    programsDetail: [
      {
        title: 'BBA (Hons)',
        level: 'Undergraduate (BS)',
        duration: '4 Years (8 Semesters)',
        creditHours: 132,
        eligibility: 'FA/F.Sc/I.Com with minimum 45% marks.',
      },
      {
        title: 'MS Management Sciences',
        level: 'Graduate (MS/MPhil)',
        duration: '2 Years (4 Semesters)',
        creditHours: 30,
        eligibility: 'BBA 4 years or equivalent 16 years business degree with 2.5 CGPA.',
      },
    ],
    facultyMembers: [
      {
        name: 'Dr. Muhammad Naveed',
        designation: 'Associate Professor & HOD',
        qualification: 'PhD in Finance (Malaysia)',
        researchInterests: ['Financial Econometrics', 'Banking Risk'],
        email: 'naveed@uswat.edu.pk',
      },
      {
        name: 'Dr. Bilal Khan',
        designation: 'Assistant Professor',
        qualification: 'PhD in Marketing (UK)',
        researchInterests: ['Brand Equity', 'Digital Consumer Behavior'],
        email: 'bilal.khan@uswat.edu.pk',
      },
    ],
  },

  // 6. Department of Law
  {
    slug: 'law',
    name: 'Department of Law',
    faculty: 'Faculty of Management & Social Sciences',
    hod: 'Advocate Dr. Tariq Khan',
    degreesOffered: ['LLB (5 Years Integrated Program)', 'LLM Constitutional Law'],
    contactEmail: 'law@uswat.edu.pk',
    shortDescription:
      'Training ethically grounded jurists, legal scholars, and advocates with hands-on moot court training, jurisprudence, human rights, and constitutional law.',
    establishedYear: 2014,
    location: 'Main Campus, Charbagh',
    vision:
      'To provide transformative legal education dedicated to constitutional supremacy, access to justice, and human dignity.',
    researchFocus: [
      'Constitutional Jurisprudence',
      'Environmental Law & River Basin Treaties',
      'Comparative International Law',
    ],
    programsDetail: [
      {
        title: 'LLB (5-Year Integrated Program)',
        level: 'Undergraduate (BS)',
        duration: '5 Years (10 Semesters)',
        creditHours: 166,
        eligibility: 'Intermediate with min 50% marks + Law Admission Test (LAT) passed with min 50% score.',
      },
    ],
    facultyMembers: [
      {
        name: 'Advocate Dr. Tariq Khan',
        designation: 'Head of Department',
        qualification: 'LLM, PhD in Constitutional Law (UK)',
        researchInterests: ['Judicial Review', 'Human Rights Protections'],
        email: 'tariq.law@uswat.edu.pk',
      },
    ],
  },

  // 7. Tourism & Hospitality
  {
    slug: 'tourism-hospitality',
    name: 'Institute of Cultural Heritage, Tourism & Hospitality Management',
    faculty: 'Faculty of Management & Social Sciences',
    hod: 'Dr. Hazrat Bilal',
    degreesOffered: [
      'BS Tourism & Hospitality Management',
      'BS Archaeology & Cultural Heritage',
      'Diploma in Eco-Tourism & Hotel Operations',
    ],
    contactEmail: 'tourism@uswat.edu.pk',
    shortDescription:
      'Capitalizing on the world-renowned scenic beauty and rich Gandharan archaeological heritage of Swat valley to train world-class hospitality professionals and heritage conservators.',
    establishedYear: 2012,
    location: 'Main Campus, Charbagh',
    vision:
      'To champion eco-tourism development and preserve the historical Gandharan heritage of Swat valley.',
    researchFocus: [
      'Gandhara Civilization Archaeological Surveys',
      'Eco-Tourism & Mountain Sustainable Management',
      'Hospitality Services Operations',
    ],
    programsDetail: [
      {
        title: 'BS Tourism & Hospitality Management',
        level: 'Undergraduate (BS)',
        duration: '4 Years (8 Semesters)',
        creditHours: 130,
        eligibility: 'Intermediate or equivalent with minimum 45% marks.',
      },
      {
        title: 'BS Archaeology & Cultural Heritage',
        level: 'Undergraduate (BS)',
        duration: '4 Years (8 Semesters)',
        creditHours: 130,
        eligibility: 'FA/F.Sc with minimum 45% marks.',
      },
    ],
    facultyMembers: [
      {
        name: 'Dr. Hazrat Bilal',
        designation: 'Director & Associate Professor',
        qualification: 'PhD in Tourism Economics (Italy)',
        researchInterests: ['Sustainable Destination Planning', 'Cultural Tourism'],
        email: 'hbilal@uswat.edu.pk',
      },
    ],
  },

  // 8. Department of Economics
  {
    slug: 'economics',
    name: 'Department of Economics',
    faculty: 'Faculty of Management & Social Sciences',
    hod: 'Dr. Zahoor Ul Haq',
    degreesOffered: ['BS Economics', 'BS Development Economics', 'MPhil Economics'],
    contactEmail: 'economics@uswat.edu.pk',
    shortDescription:
      'Fostering macro and microeconomic research, public policy analysis, econometric modeling, and sustainable development strategies for regional and national prosperity.',
    establishedYear: 2011,
    location: 'Main Campus, Charbagh',
    vision:
      'To deliver impactful socio-economic research, fiscal insights, and policy prescriptions for Khyber Pakhtunkhwa.',
    researchFocus: [
      'Regional Economic Disparities',
      'Agricultural & Natural Resource Economics',
      'Public Finance & Monetary Policy',
    ],
    programsDetail: [
      {
        title: 'BS Economics',
        level: 'Undergraduate (BS)',
        duration: '4 Years (8 Semesters)',
        creditHours: 130,
        eligibility: 'Intermediate with Economics or Mathematics with minimum 45% marks.',
      },
      {
        title: 'MPhil Economics',
        level: 'Graduate (MS/MPhil)',
        duration: '2 Years (4 Semesters)',
        creditHours: 30,
        eligibility: 'BS in Economics or related field with 2.50 CGPA + UoS Admission Test.',
      },
    ],
    facultyMembers: [
      {
        name: 'Dr. Zahoor Ul Haq',
        designation: 'Associate Professor & Chairman',
        qualification: 'PhD in Agricultural Economics (USA)',
        researchInterests: ['Trade Policy', 'Food Security Economics'],
        email: 'zahoor@uswat.edu.pk',
      },
    ],
  },

  // 9. Department of Applied Microbiology
  {
    slug: 'applied-microbiology',
    name: 'Department of Applied Microbiology & Biotechnology',
    faculty: 'Faculty of Life Sciences',
    hod: 'Prof. Dr. Akhtar Rasheed',
    degreesOffered: [
      'BS Microbiology',
      'BS Biotechnology',
      'MPhil Microbiology',
      'PhD Biotechnology',
    ],
    contactEmail: 'microbio@uswat.edu.pk',
    shortDescription:
      'Pioneering research in molecular diagnostics, antimicrobial resistance, genomics, industrial fermentation, and infectious disease surveillance.',
    establishedYear: 2011,
    location: 'Life Sciences Complex, Main Campus Charbagh',
    vision:
      'To lead biotechnology innovation and microbiological solutions combating regional infectious pathogens and industrial needs.',
    researchFocus: [
      'Antimicrobial Resistance & Clinical Surveillance',
      'Plant Biotechnology & Genetic Engineering',
      'Bioprocess Engineering & Fermentation',
    ],
    programsDetail: [
      {
        title: 'BS Microbiology',
        level: 'Undergraduate (BS)',
        duration: '4 Years (8 Semesters)',
        creditHours: 136,
        eligibility: 'F.Sc. Pre-Medical with minimum 50% marks.',
      },
      {
        title: 'BS Biotechnology',
        level: 'Undergraduate (BS)',
        duration: '4 Years (8 Semesters)',
        creditHours: 136,
        eligibility: 'F.Sc. Pre-Medical with minimum 50% marks.',
      },
      {
        title: 'MPhil Microbiology',
        level: 'Graduate (MS/MPhil)',
        duration: '2 Years (4 Semesters)',
        creditHours: 30,
        eligibility: 'BS 4-Year in Microbiology/Biotech with 2.50 CGPA + Entry Test.',
      },
    ],
    facultyMembers: [
      {
        name: 'Prof. Dr. Akhtar Rasheed',
        designation: 'Professor & Dean Life Sciences',
        qualification: 'PhD in Molecular Biology (Germany)',
        researchInterests: ['Microbial Genomics', 'Enzyme Biotechnology'],
        email: 'arasheed@uswat.edu.pk',
      },
      {
        name: 'Dr. Khalid Mehmood',
        designation: 'Assistant Professor',
        qualification: 'PhD in Biotechnology (China)',
        researchInterests: ['Vaccine Delivery Systems', 'Infectious Diseases'],
        email: 'khalid.m@uswat.edu.pk',
      },
    ],
  },

  // 10. Department of Environmental Sciences
  {
    slug: 'environmental-sciences',
    name: 'Department of Environmental & Conservation Sciences',
    faculty: 'Faculty of Life Sciences',
    hod: 'Dr. Arshad Ali',
    degreesOffered: [
      'BS Environmental Sciences',
      'BS Forestry & Wildlife Conservation',
      'MPhil Environmental Sciences',
    ],
    contactEmail: 'envsciences@uswat.edu.pk',
    shortDescription:
      'Addressing climate resilience, watershed management, alpine biodiversity conservation, and environmental impact assessments in the Hindu Kush and Swat river basin.',
    establishedYear: 2013,
    location: 'Life Sciences Complex, Main Campus Charbagh',
    vision:
      'To foster conservation ecology and sustainable environmental solutions for high-altitude river basins and fragile mountain ecosystems.',
    researchFocus: [
      'Climate Change Mitigation & Alpine Forests',
      'Swat River Water Quality & Hydro-geology',
      'Wildlife Ecology & Conservation Genetics',
    ],
    programsDetail: [
      {
        title: 'BS Environmental Sciences',
        level: 'Undergraduate (BS)',
        duration: '4 Years (8 Semesters)',
        creditHours: 132,
        eligibility: 'F.Sc. Pre-Medical or Pre-Engineering with minimum 45% marks.',
      },
      {
        title: 'MPhil Environmental Sciences',
        level: 'Graduate (MS/MPhil)',
        duration: '2 Years (4 Semesters)',
        creditHours: 30,
        eligibility: 'BS 4-Year in Environmental Sciences or related discipline with 2.50 CGPA.',
      },
    ],
    facultyMembers: [
      {
        name: 'Dr. Arshad Ali',
        designation: 'Associate Professor & Chairman',
        qualification: 'PhD in Environmental Ecology (China / Post-doc France)',
        researchInterests: ['Forest Biomass Modeling', 'Ecosystem Services'],
        email: 'arshad.ali@uswat.edu.pk',
      },
      {
        name: 'Dr. Faisal Hayat',
        designation: 'Assistant Professor',
        qualification: 'PhD in Watershed Management (Australia)',
        researchInterests: ['Hydrological Modeling', 'Sediment Transport'],
        email: 'faisal.hayat@uswat.edu.pk',
      },
    ],
  },
];
