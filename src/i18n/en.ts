export const en = {
  nav: { home: 'Home', projects: 'Projects', cv: 'CV', contact: 'Contact' },
  home: {
    greeting: "Hi, I'm",
    role: 'Frontend developer · React and TypeScript',
    about:
      'I build web applications with React and TypeScript: reusable components, tests and version control with Git. After more than 20 years in industry I bring that same rigour to code, and I am looking for my first opportunity as a developer in a team.',
    cta: 'See my projects',
  },
  projects: {
    title: 'Projects',
    intro: 'Some of the things I have built.',
    visit: 'Visit site',
    code: 'View code',
    items: {
      pastisseria: {
        title: 'Pastisseria La Vall',
        description:
          'Full stack web app (in progress): public product catalogue with pagination, role-protected admin panel and its own REST API, with tests on frontend and backend.',
      },
      budget: {
        title: 'Digital services budget generator',
        description:
          'Dynamic pricing based on the chosen services, history with search and filters, and budgets shareable by URL.',
      },
      movies: {
        title: 'Movies platform',
        description: 'Interactive platform for exploring, rating and managing favourite movies.',
      },
      italumni: {
        title: 'ITAlumni',
        description:
          'Networking and jobs portal: multi-page site with real-time job search, filters and user sign-up, following Gitflow.',
      },
      gallery: {
        title: 'Image gallery',
        description: 'Responsive gallery with selection, batch delete and drag-and-drop reordering.',
      },
      portfolio: {
        title: 'This portfolio',
        description:
          'Multi-language website with a custom language Context and CV PDFs generated from the same texts.',
      },
      wordpress: {
        title: 'Academia FUNDAPICA',
        description: 'WordPress website built during my internship at FUNDAPICA.',
      },
    },
  },
  cv: {
    title: 'Curriculum vitae',
    download: 'Download PDF',
    summaryTitle: 'Profile',
    summary:
      'Junior frontend developer with official web development training and a specialisation in React and TypeScript. I come from more than 20 years in industrial settings, working with demanding processes, responsibility and attention to detail. I learn fast and I am looking for my first opportunity as a developer in a team.',
    experienceTitle: 'Experience',
    educationTitle: 'Education',
    skillsTitle: 'Skills',
    otherTitle: 'Other details',
    skillGroups: { frontend: 'Frontend', backend: 'Backend (entry level)', testing: 'Testing', tools: 'Tools' },
    experience: [
      {
        title: 'Web page designer (internship)',
        place: 'FUNDAPICA association, Barcelona',
        period: 'September 2025',
      },
      {
        title: 'Clean room operator',
        place: "F.A.E. - Francisco Albero, L'Hospitalet de Llobregat",
        period: 'August 2024 – January 2025',
      },
      {
        title: 'Factory specialist',
        place: 'Manufacturas Eléctricas y Cableados S.L., Barcelona',
        period: 'April 2014 – July 2024',
      },
      { title: 'Factory specialist', place: 'SEMAI S.L., Barcelona', period: 'June 2002 – October 2013' },
    ],
    education: [
      { title: 'Frontend specialisation with React', place: 'IT Academy, Barcelona Activa', period: '2026' },
      {
        title: 'Level 2 professional certificate: Creating and publishing web pages (480 h)',
        place: 'Grup CIEF, Barcelona · SOC course, web development with WordPress',
        period: '2025',
      },
      { title: 'Intermediate VET in Electronics (first year)', place: 'Escola Sopeña Barcelona', period: '2002' },
      { title: 'Compulsory secondary education', place: 'Escola Sopeña Barcelona', period: '' },
    ],
    other: ['Catalan and Spanish: native', 'English: basic', 'Category B driving licence', 'Available full time'],
  },
  contact: {
    title: 'Contact',
    intro: 'Do you have a project or an offer? Write to me.',
    email: 'Email',
  },
  footer: { madeWith: 'Built with React and TypeScript' },
  language: { label: 'Choose language' },
}

export type Translations = typeof en
