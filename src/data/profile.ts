export const profile = {
  name: 'Oriol Calí',
  email: 'oriolcalicab@gmail.com',
  github: 'https://github.com/oriolcalicab',
  linkedin: 'https://www.linkedin.com/in/oriol-calí',
  // Es generen amb: npm run cv
  cvPdf: { en: '/cv-en.pdf', ca: '/cv-ca.pdf', es: '/cv-es.pdf' },
}

export const skillGroups = [
  {
    id: 'frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS / SCSS', 'Tailwind CSS', 'React Router', 'Vite'],
  },
  { id: 'backend', items: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Firebase Authentication'] },
  { id: 'testing', items: ['Vitest', 'Testing Library', 'Gherkin'] },
  { id: 'tools', items: ['Git', 'GitHub', 'Gitflow', 'Trello', 'ESLint', 'Prettier', 'WordPress'] },
] as const

// Els textos de cada projecte son a src/i18n. Si un enllac esta buit, no es mostra.
export const projects = [
  {
    id: 'pastisseria',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Express', 'Prisma', 'PostgreSQL', 'Firebase', 'Vitest'],
    url: '',
    repo: 'https://github.com/oriolcalicab/pastisseria-la-vall',
  },
  {
    id: 'budget',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'React Router', 'Vitest'],
    url: '',
    repo: 'https://github.com/oriolcalicab/PROJECTE-BUDGET-PRESSUPOSTOS-DE-SERVEIS-DIGITALS',
  },
  {
    id: 'movies',
    tech: ['TypeScript'],
    url: '',
    repo: 'https://github.com/oriolcalicab/Project-Movies_itAcademy',
  },
  {
    id: 'italumni',
    tech: ['HTML', 'CSS', 'TypeScript', 'localStorage'],
    url: '',
    repo: 'https://github.com/oriolcalicab/-Projecte-ITAlumni',
  },
  {
    id: 'gallery',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    url: '',
    repo: 'https://github.com/oriolcalicab/image-gallery',
  },
  {
    id: 'portfolio',
    tech: ['React', 'TypeScript', 'React Router', 'SCSS', 'Vite'],
    url: 'https://portfolio-oriol-cali.netlify.app/',
    repo: 'https://github.com/oriolcalicab/portfolio',
  },
  { id: 'wordpress', tech: ['WordPress'], url: 'https://academia-fundapica.kesug.com/?i=1', repo: '' },
] as const
