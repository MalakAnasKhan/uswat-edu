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
  campus?: 'Main Campus (Charbagh)' | 'Women Campus';
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
  'Faculty of Humanities & Arts',
  'Faculty of Agricultural Sciences',
] as const;

export const UNIVERSITY_MOTTO = {
  english: 'Aspiring for Quality Education with Relevance',
  urdu: 'مطابقت کے ساتھ معیاری تعلیم کے لئے خواہشمند',
};

export const DEPARTMENTS: Department[] = [
  // 1. Computer and Software Technology
  {
    slug: 'computer-and-software-technology',
    name: 'Department of Computer and Software Technology',
    faculty: 'Faculty of Physical & Numerical Sciences',
    hod: 'Dr. Shah Khalid',
    degreesOffered: [
      'BS Computer Science (4 Years)',
      'BS Software Engineering (4 Years)',
      'MS Computer Science',
      'PhD Computer Science',
    ],
    contactEmail: 'csit@uswat.edu.pk',
    shortDescription:
      'Premier computing institute in Malakand division focusing on Software Engineering, Artificial Intelligence, Cybersecurity, and Cloud Data Architecture.',
    establishedYear: 2010,
    location: 'Academic Block B, Main Campus Charbagh',
    campus: 'Main Campus (Charbagh)',
    vision:
      'To empower regional and international technology ecosystems with ethical, world-class computer scientists and software engineers.',
    researchFocus: ['Machine Learning & Deep Neural Nets', 'Edge Computing for Disaster Alert', 'Cybersecurity Forensics'],
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
        eligibility: 'F.Sc Pre-Engineering or ICS with minimum 50% marks.',
      },
      {
        title: 'MS Computer Science',
        level: 'Graduate (MS/MPhil)',
        duration: '2 Years (4 Semesters)',
        creditHours: 30,
        eligibility: '16 years of computing education with minimum 2.50 CGPA + Entry Test.',
      },
      {
        title: 'PhD Computer Science',
        level: 'Doctoral (PhD)',
        duration: '3-5 Years',
        creditHours: 48,
        eligibility: '18 years MS/MPhil in Computing with minimum 3.00 CGPA + Subject Test.',
      },
    ],
    facultyMembers: [
      {
        name: 'Dr. Shah Khalid',
        designation: 'Associate Professor & Chairman',
        qualification: 'PhD in Computer Science (UK / HEC Approved)',
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
    ],
  },

  // 2. Mathematics & Statistics
  {
    slug: 'mathematics-statistics',
    name: 'Department of Mathematics & Statistics',
    faculty: 'Faculty of Physical & Numerical Sciences',
    hod: 'Dr. Imtiaz Ahmad',
    degreesOffered: ['BS Mathematics', 'BS Statistics & Data Analytics', 'MPhil Mathematics', 'PhD Mathematics'],
    contactEmail: 'math@uswat.edu.pk',
    shortDescription:
      'Dedicated to rigorous analytical inquiry across pure and applied mathematics, computational fluid dynamics, numerical simulations, and statistical data sciences.',
    establishedYear: 2012,
    location: 'Main Campus, Charbagh',
    campus: 'Main Campus (Charbagh)',
    vision:
      'To be recognized internationally for high-caliber mathematical analysis and interdisciplinary quantitative modeling.',
    researchFocus: ['Fluid Flow & Differential Equations', 'Numerical Methods', 'Statistical Probability Models'],
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
        eligibility: '16 years education in Mathematics with minimum 2.50 CGPA.',
      },
    ],
    facultyMembers: [
      {
        name: 'Dr. Imtiaz Ahmad',
        designation: 'Associate Professor & Chairman',
        qualification: 'PhD in Applied Mathematics',
        researchInterests: ['Numerical Simulations', 'Fluid Dynamics'],
        email: 'imtiaz@uswat.edu.pk',
      },
    ],
  },

  // 3. Physics
  {
    slug: 'physics',
    name: 'Department of Physics',
    faculty: 'Faculty of Physical & Numerical Sciences',
    hod: 'Dr. Niaz Muhammad',
    degreesOffered: ['BS Physics', 'MPhil Physics', 'PhD Physics'],
    contactEmail: 'physics@uswat.edu.pk',
    shortDescription:
      'Advancing experimental and theoretical physics, thin-film nanotechnology, renewable photovoltaic materials, and optoelectronics.',
    establishedYear: 2011,
    location: 'Science Complex, Main Campus Charbagh',
    campus: 'Main Campus (Charbagh)',
    vision:
      'To spearhead sustainable materials and renewable energy innovations in the mountain ecosystems of Pakistan.',
    researchFocus: ['Perovskite Photovoltaics', 'Condensed Matter Physics', 'Plasma Physics'],
    programsDetail: [
      {
        title: 'BS Physics',
        level: 'Undergraduate (BS)',
        duration: '4 Years (8 Semesters)',
        creditHours: 134,
        eligibility: 'F.Sc Pre-Engineering with minimum 50% marks.',
      },
    ],
    facultyMembers: [
      {
        name: 'Dr. Niaz Muhammad',
        designation: 'Associate Professor & Chairman',
        qualification: 'PhD in Solid State Physics (China)',
        researchInterests: ['Nanomaterials', 'Solar Cell Materials'],
        email: 'niaz@uswat.edu.pk',
      },
    ],
  },

  // 4. Chemistry
  {
    slug: 'chemistry',
    name: 'Department of Chemistry',
    faculty: 'Faculty of Chemical Sciences',
    hod: 'Prof. Dr. Muhammad Farooq',
    degreesOffered: ['BS Chemistry (4 Years)', 'MPhil Chemistry', 'PhD Chemistry'],
    contactEmail: 'chem@uswat.edu.pk',
    shortDescription:
      'Equipped with advanced chromatography, atomic absorption, and spectrometry facilities researching indigenous natural products, synthetic chemistry, and material catalysis.',
    establishedYear: 2011,
    location: 'Central Chemical Labs, Charbagh',
    campus: 'Main Campus (Charbagh)',
    vision:
      'To deliver impactful chemical discoveries utilizing the rich natural botanical and mineral wealth of Swat valley.',
    researchFocus: ['Phytochemistry of Alpine Flora', 'Nanocatalysis', 'Bioactive Natural Products'],
    programsDetail: [
      {
        title: 'BS Chemistry',
        level: 'Undergraduate (BS)',
        duration: '4 Years (8 Semesters)',
        creditHours: 136,
        eligibility: 'F.Sc Pre-Medical or Pre-Engineering with minimum 50% marks.',
      },
      {
        title: 'PhD Chemistry',
        level: 'Doctoral (PhD)',
        duration: '3-5 Years',
        creditHours: 48,
        eligibility: '18 years MS/MPhil in Chemistry with minimum 3.00 CGPA.',
      },
    ],
    facultyMembers: [
      {
        name: 'Prof. Dr. Muhammad Farooq',
        designation: 'Professor & Dean',
        qualification: 'PhD in Organic Chemistry (Post-doc Germany)',
        researchInterests: ['Natural Products Isolation', 'Bioactive Metabolites'],
        email: 'mfarooq@uswat.edu.pk',
      },
    ],
  },

  // 5. Environmental and Conservation Sciences
  {
    slug: 'environmental-conservation-sciences',
    name: 'Department of Environmental and Conservation Sciences',
    faculty: 'Faculty of Life Sciences',
    hod: 'Dr. Arshad Ali',
    degreesOffered: ['BS Environmental Sciences', 'BS Forestry & Conservation', 'MPhil Environmental Sciences', 'PhD Environmental Sciences'],
    contactEmail: 'envsciences@uswat.edu.pk',
    shortDescription:
      'Pioneering alpine conservation, climate resilience, watershed assessment of Swat River basin, and high-altitude forestry genetics.',
    establishedYear: 2013,
    location: 'Life Sciences Block, Charbagh',
    campus: 'Main Campus (Charbagh)',
    vision:
      'To safeguard Hindu Kush mountain biodiversity and develop climate change mitigation frameworks.',
    researchFocus: ['Swat River Basin Watershed Analysis', 'Glacial Lake Monitoring', 'Forest Biomass Dynamics'],
    programsDetail: [
      {
        title: 'BS Environmental Sciences',
        level: 'Undergraduate (BS)',
        duration: '4 Years (8 Semesters)',
        creditHours: 132,
        eligibility: 'F.Sc Pre-Medical or Pre-Engineering with minimum 45% marks.',
      },
    ],
    facultyMembers: [
      {
        name: 'Dr. Arshad Ali',
        designation: 'Associate Professor & Chairman',
        qualification: 'PhD in Environmental Ecology (Post-doc France)',
        researchInterests: ['Ecosystem Services', 'Alpine Forest Carbon'],
        email: 'arshad.ali@uswat.edu.pk',
      },
    ],
  },

  // 6. Management & Commerce
  {
    slug: 'management-commerce',
    name: 'Department of Management & Commerce',
    faculty: 'Faculty of Management & Social Sciences',
    hod: 'Dr. Muhammad Naveed',
    degreesOffered: ['BBA (Hons)', 'BS Commerce & Accounting', 'MBA (Executive)', 'MS Management Sciences', 'PhD Management Sciences'],
    contactEmail: 'ms@uswat.edu.pk',
    shortDescription:
      'Training entrepreneurial corporate managers, finance analysts, and business leaders through practical case pedagogy and digital finance labs.',
    establishedYear: 2010,
    location: 'Management Complex, Charbagh',
    campus: 'Main Campus (Charbagh)',
    vision:
      'To foster regional small-and-medium enterprise (SME) development and ethical corporate leadership.',
    researchFocus: ['Islamic Banking & SME Finance', 'Corporate Governance', 'Digital Marketing'],
    programsDetail: [
      {
        title: 'BBA (Hons)',
        level: 'Undergraduate (BS)',
        duration: '4 Years (8 Semesters)',
        creditHours: 132,
        eligibility: 'FA/F.Sc/I.Com with minimum 45% marks.',
      },
    ],
    facultyMembers: [
      {
        name: 'Dr. Muhammad Naveed',
        designation: 'Associate Professor & Chairman',
        qualification: 'PhD in Finance (Malaysia)',
        researchInterests: ['Financial Econometrics', 'Banking Risk'],
        email: 'naveed@uswat.edu.pk',
      },
    ],
  },

  // 7. Tourism and Hospitality
  {
    slug: 'tourism-hospitality',
    name: 'Department of Tourism and Hospitality Management',
    faculty: 'Faculty of Management & Social Sciences',
    hod: 'Dr. Hazrat Bilal',
    degreesOffered: [
      'BS Tourism & Hospitality Management',
      'BS Archaeology & Heritage Conservation',
      'Diploma in Eco-Tourism & Hotel Administration',
    ],
    contactEmail: 'tourism@uswat.edu.pk',
    shortDescription:
      'Capitalizing on the world-famous natural splendor and Gandhara Buddhist cultural relics of Swat valley to train internationally competitive hospitality leaders.',
    establishedYear: 2012,
    location: 'Main Campus, Charbagh',
    campus: 'Main Campus (Charbagh)',
    vision:
      'To establish Swat as the premier national hub for sustainable eco-tourism and Gandhara heritage conservation.',
    researchFocus: ['Eco-Tourism Destination Modeling', 'Gandhara Excavation Documentation', 'Hospitality Operations'],
    programsDetail: [
      {
        title: 'BS Tourism & Hospitality Management',
        level: 'Undergraduate (BS)',
        duration: '4 Years (8 Semesters)',
        creditHours: 130,
        eligibility: 'Intermediate or equivalent with minimum 45% marks.',
      },
    ],
    facultyMembers: [
      {
        name: 'Dr. Hazrat Bilal',
        designation: 'Director & Associate Professor',
        qualification: 'PhD in Tourism Economics (Italy)',
        researchInterests: ['Sustainable Tourism Planning', 'Heritage Preservation'],
        email: 'hbilal@uswat.edu.pk',
      },
    ],
  },

  // 8. Law & Sharia'h
  {
    slug: 'law-shariah',
    name: "Department of Law & Sharia'h",
    faculty: 'Faculty of Management & Social Sciences',
    hod: 'Advocate Dr. Tariq Khan',
    degreesOffered: ['LLB (5 Years Integrated Program)', 'LLM Constitutional & Shariah Law'],
    contactEmail: 'law@uswat.edu.pk',
    shortDescription:
      'Dedicated to constitutional jurisprudence, access to justice, human rights advocacy, and comparative Shariah law with a state-of-the-art moot court facility.',
    establishedYear: 2014,
    location: 'Main Campus, Charbagh',
    campus: 'Main Campus (Charbagh)',
    vision:
      'To educate ethically principled legal advocates and jurists upholding the rule of law and constitutional protections.',
    researchFocus: ['Constitutional Law of Pakistan', 'Human Rights & Criminal Jurisprudence', 'Islamic Commercial Law'],
    programsDetail: [
      {
        title: 'LLB (5 Years Integrated Program)',
        level: 'Undergraduate (BS)',
        duration: '5 Years (10 Semesters)',
        creditHours: 166,
        eligibility: 'Intermediate with minimum 50% marks + Law Admission Test (LAT) passed with 50% score.',
      },
    ],
    facultyMembers: [
      {
        name: 'Advocate Dr. Tariq Khan',
        designation: 'Head of Department',
        qualification: 'LLM, PhD in Constitutional Law (UK)',
        researchInterests: ['Judicial Independence', 'Constitutional Rights'],
        email: 'tariq.law@uswat.edu.pk',
      },
    ],
  },

  // 9. Economics and Development Studies
  {
    slug: 'economics-development-studies',
    name: 'Department of Economics and Development Studies',
    faculty: 'Faculty of Management & Social Sciences',
    hod: 'Dr. Zahoor Ul Haq',
    degreesOffered: ['BS Economics', 'BS Development Studies', 'MPhil Economics'],
    contactEmail: 'economics@uswat.edu.pk',
    shortDescription:
      'Delivering rigorous econometric analysis, regional fiscal policy insights, and sustainable development strategies for Khyber Pakhtunkhwa.',
    establishedYear: 2011,
    location: 'Main Campus, Charbagh',
    campus: 'Main Campus (Charbagh)',
    vision:
      'To provide actionable macro and microeconomic research driving regional prosperity and poverty alleviation.',
    researchFocus: ['Regional Economic Disparities', 'Agricultural Economics', 'Monetary Policy'],
    programsDetail: [
      {
        title: 'BS Economics',
        level: 'Undergraduate (BS)',
        duration: '4 Years (8 Semesters)',
        creditHours: 130,
        eligibility: 'Intermediate with Economics or Mathematics with minimum 45% marks.',
      },
    ],
    facultyMembers: [
      {
        name: 'Dr. Zahoor Ul Haq',
        designation: 'Associate Professor & Chairman',
        qualification: 'PhD in Agricultural Economics (USA)',
        researchInterests: ['Development Economics', 'Trade Policy'],
        email: 'zahoor@uswat.edu.pk',
      },
    ],
  },

  // 10. English and Foreign Languages
  {
    slug: 'english-foreign-languages',
    name: 'Department of English and Foreign Languages',
    faculty: 'Faculty of Humanities & Arts',
    hod: 'Dr. Nasreen Begum',
    degreesOffered: ['BS English (Linguistics & Literature)', 'BS Foreign Languages', 'MPhil English'],
    contactEmail: 'english@uswat.edu.pk',
    shortDescription:
      'Fostering critical discourse, literary studies, multilingual translation, applied linguistics, and academic writing competencies across the university.',
    establishedYear: 2011,
    location: 'Women Campus & Charbagh',
    campus: 'Women Campus',
    vision:
      'To develop articulate, critical thinkers and global communicators bridging regional cultures with world literature.',
    researchFocus: ['Postcolonial Literature', 'Sociolinguistics & Language Pedagogy', 'Comparative Translation Studies'],
    programsDetail: [
      {
        title: 'BS English',
        level: 'Undergraduate (BS)',
        duration: '4 Years (8 Semesters)',
        creditHours: 130,
        eligibility: 'Intermediate or equivalent with minimum 45% marks.',
      },
    ],
    facultyMembers: [
      {
        name: 'Dr. Nasreen Begum',
        designation: 'Chairperson & Associate Professor',
        qualification: 'PhD in Applied Linguistics (UK)',
        researchInterests: ['Second Language Acquisition', 'Discourse Analysis'],
        email: 'nasreen.english@uswat.edu.pk',
      },
    ],
  },

  // 11. Allied Health Sciences
  {
    slug: 'allied-health-sciences',
    name: 'Department of Allied Health Sciences',
    faculty: 'Faculty of Life Sciences',
    hod: 'Dr. Farman Ullah',
    degreesOffered: [
      'BS Medical Lab Technology (MLT)',
      'BS Radiology & Imaging Technology',
      'BS Anesthesia Technology',
      'BS Human Nutrition & Dietetics',
    ],
    contactEmail: 'ahs@uswat.edu.pk',
    shortDescription:
      'Meeting the critical demand for healthcare professionals through clinical laboratories, pathology diagnostics, and patient care technology.',
    establishedYear: 2018,
    location: 'Health Sciences Complex, Charbagh',
    campus: 'Main Campus (Charbagh)',
    vision:
      'To provide state-of-the-art allied clinical education elevating hospital healthcare delivery across Khyber Pakhtunkhwa.',
    researchFocus: ['Clinical Hematology', 'Pathogen Molecular Screening', 'Nutritional Epidemiology'],
    programsDetail: [
      {
        title: 'BS Medical Lab Technology (MLT)',
        level: 'Undergraduate (BS)',
        duration: '4 Years (8 Semesters)',
        creditHours: 138,
        eligibility: 'F.Sc Pre-Medical with minimum 50% marks.',
      },
    ],
    facultyMembers: [
      {
        name: 'Dr. Farman Ullah',
        designation: 'Assistant Professor & Coordinator',
        qualification: 'PhD in Medical Molecular Sciences (China)',
        researchInterests: ['Clinical Diagnostics', 'Biomarkers'],
        email: 'farman.ahs@uswat.edu.pk',
      },
    ],
  },

  // 12. Zoology
  {
    slug: 'zoology',
    name: 'Department of Zoology',
    faculty: 'Faculty of Life Sciences',
    hod: 'Dr. Fazal Maula',
    degreesOffered: ['BS Zoology', 'MPhil Zoology', 'PhD Zoology'],
    contactEmail: 'zoology@uswat.edu.pk',
    shortDescription:
      'Pioneering research in alpine fauna, freshwater fisheries of Swat River, wildlife entomology, and parasitological epidemiology.',
    establishedYear: 2012,
    location: 'Women Campus & Charbagh Complex',
    campus: 'Women Campus',
    vision:
      'To conserve the unique alpine fauna and aquatic ecosystems of Northern Pakistan through rigorous scientific research.',
    researchFocus: ['Swat River Trout & Ichthyology', 'Wildlife Ecology', 'Medical Parasitology'],
    programsDetail: [
      {
        title: 'BS Zoology',
        level: 'Undergraduate (BS)',
        duration: '4 Years (8 Semesters)',
        creditHours: 134,
        eligibility: 'F.Sc Pre-Medical with minimum 45% marks.',
      },
    ],
    facultyMembers: [
      {
        name: 'Dr. Fazal Maula',
        designation: 'Associate Professor & Chairman',
        qualification: 'PhD in Zoology (Parasitology)',
        researchInterests: ['Aquatic Parasitology', 'Freshwater Biodiversity'],
        email: 'fmaula@uswat.edu.pk',
      },
    ],
  },

  // 13. Botany
  {
    slug: 'botany',
    name: 'Department of Botany',
    faculty: 'Faculty of Life Sciences',
    hod: 'Prof. Dr. Akhtar Rasheed',
    degreesOffered: ['BS Botany', 'MPhil Botany', 'PhD Botany'],
    contactEmail: 'botany@uswat.edu.pk',
    shortDescription:
      'Houses the Swat Alpine Herbarium and Plant Physiology laboratories researching high-altitude ethnobotany, taxonomy, and flora conservation.',
    establishedYear: 2011,
    location: 'Life Sciences Block, Charbagh',
    campus: 'Main Campus (Charbagh)',
    vision:
      'To be the foremost research authority on the flora of the Hindu Kush and Karakoram regions.',
    researchFocus: ['Ethnobotany of Swat', 'Plant Physiology & Stress Tolerance', 'Flora Conservation Genomics'],
    programsDetail: [
      {
        title: 'BS Botany',
        level: 'Undergraduate (BS)',
        duration: '4 Years (8 Semesters)',
        creditHours: 134,
        eligibility: 'F.Sc Pre-Medical with minimum 45% marks.',
      },
    ],
    facultyMembers: [
      {
        name: 'Prof. Dr. Akhtar Rasheed',
        designation: 'Professor & Dean',
        qualification: 'PhD in Plant Molecular Biology (Germany)',
        researchInterests: ['Plant Genomics', 'Medicinal Plants'],
        email: 'arasheed@uswat.edu.pk',
      },
    ],
  },

  // 14. Agricultural Sciences
  {
    slug: 'agricultural-sciences',
    name: 'Department of Agricultural Sciences',
    faculty: 'Faculty of Agricultural Sciences',
    hod: 'Dr. Muhammad Saeed',
    degreesOffered: [
      'BSc (Hons) Agriculture (Horticulture)',
      'BSc (Hons) Agriculture (Agronomy)',
      'BSc (Hons) Agriculture (Plant Breeding & Genetics)',
      'MPhil Agriculture',
    ],
    contactEmail: 'agri@uswat.edu.pk',
    shortDescription:
      'Advancing modern mountain horticulture, orchard disease management (Swat apples and peaches), climate-smart seed genetics, and soil fertility.',
    establishedYear: 2015,
    location: 'Agricultural Research Complex, Charbagh',
    campus: 'Main Campus (Charbagh)',
    vision:
      'To revitalize the agricultural and fruit-orchard economy of Swat valley through modern horticultural technology.',
    researchFocus: ['Deciduous Fruit Orchard Disease Management', 'Soil Fertility & Micro-irrigation', 'Crop Climate Resilience'],
    programsDetail: [
      {
        title: 'BSc (Hons) Agriculture (4 Years)',
        level: 'Undergraduate (BS)',
        duration: '4 Years (8 Semesters)',
        creditHours: 140,
        eligibility: 'F.Sc Pre-Medical or Pre-Engineering with minimum 50% marks.',
      },
    ],
    facultyMembers: [
      {
        name: 'Dr. Muhammad Saeed',
        designation: 'Associate Professor & Chairman',
        qualification: 'PhD in Horticulture (China)',
        researchInterests: ['Fruit Physiology', 'Postharvest Management'],
        email: 'saeed.agri@uswat.edu.pk',
      },
    ],
  },
];
