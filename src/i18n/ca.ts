import type { Translations } from './en'

export const ca: Translations = {
  nav: { home: 'Inici', projects: 'Projectes', cv: 'CV', contact: 'Contacte' },
  home: {
    greeting: 'Hola, sóc',
    role: 'Desenvolupador frontend · React i TypeScript',
    about:
      'Creo aplicacions web amb React i TypeScript: components reutilitzables, tests i control de versions amb Git. Després de més de 20 anys a la indústria, aplico aquell mateix rigor al codi, i busco la meva primera oportunitat com a desenvolupador en un equip.',
    cta: 'Mira els meus projectes',
  },
  projects: {
    title: 'Projectes',
    intro: 'Algunes de les coses que he fet.',
    visit: 'Visita la web',
    code: 'Mira el codi',
    items: {
      pastisseria: {
        title: 'Pastisseria La Vall',
        description:
          "Aplicació web full stack (en desenvolupament): catàleg públic de productes amb paginació, panell d'administració protegit per rols i API REST pròpia, amb tests al frontend i al backend.",
      },
      budget: {
        title: 'Generador de pressupostos de serveis digitals',
        description:
          'Càlcul dinàmic segons els serveis triats, historial amb cerca i filtres, i pressupostos compartibles per URL.',
      },
      movies: {
        title: 'Plataforma de pel·lícules',
        description: 'Plataforma interactiva per explorar, valorar i gestionar pel·lícules preferides.',
      },
      italumni: {
        title: 'ITAlumni',
        description:
          "Portal de networking i feina: web multipàgina amb cercador d'ofertes en temps real, filtres i registre d'usuaris, seguint Gitflow.",
      },
      gallery: {
        title: "Galeria d'imatges",
        description: 'Galeria responsive amb selecció, esborrat múltiple i reordenació amb drag and drop.',
      },
      portfolio: {
        title: 'Aquest portfoli',
        description:
          'Web multiidioma amb un Context propi per als idiomes i CV en PDF generats a partir dels mateixos textos.',
      },
      wordpress: {
        title: 'Acadèmia FUNDAPICA',
        description: 'Web feta amb WordPress durant les pràctiques a FUNDAPICA.',
      },
    },
  },
  cv: {
    title: 'Currículum',
    download: 'Descarrega el PDF',
    summaryTitle: 'Perfil',
    summary:
      'Desenvolupador frontend júnior amb formació oficial en desenvolupament web i especialització en React i TypeScript. Vinc de més de 20 anys en entorns industrials, on he treballat amb processos exigents, responsabilitat i atenció al detall. Aprenc ràpid i busco la meva primera oportunitat com a desenvolupador en un equip.',
    experienceTitle: 'Experiència',
    educationTitle: 'Formació',
    skillsTitle: 'Coneixements tècnics',
    otherTitle: 'Altres dades',
    skillGroups: { frontend: 'Frontend', backend: 'Backend (nivell inicial)', testing: 'Testing', tools: 'Eines' },
    experience: [
      {
        title: 'Dissenyador de pàgines web (pràctiques)',
        place: 'Associació FUNDAPICA, Barcelona',
        period: 'Setembre 2025',
      },
      {
        title: 'Operari de sala neta',
        place: "F.A.E. - Francisco Albero, L'Hospitalet de Llobregat",
        period: 'Agost 2024 – Gener 2025',
      },
      {
        title: 'Especialista de fàbrica',
        place: 'Manufacturas Eléctricas y Cableados S.L., Barcelona',
        period: 'Abril 2014 – Juliol 2024',
      },
      { title: 'Especialista de fàbrica', place: 'SEMAI S.L., Barcelona', period: 'Juny 2002 – Octubre 2013' },
    ],
    education: [
      { title: 'Especialització Frontend amb React', place: 'IT Academy, Barcelona Activa', period: '2026' },
      {
        title: 'Certificat de professionalitat Nivell 2: Confecció i publicació de pàgines web (480 h)',
        place: 'Grup CIEF, Barcelona · Curs del SOC, amb desenvolupament web en WordPress',
        period: '2025',
      },
      { title: "Grau Mitjà d'Electrònica (primer curs)", place: 'Escola Sopeña Barcelona', period: '2002' },
      { title: 'Educació Secundària Obligatòria', place: 'Escola Sopeña Barcelona', period: '' },
    ],
    other: ['Català i castellà: natiu', 'Anglès: nivell bàsic', 'Carnet de conduir B', 'Disponibilitat de jornada completa'],
  },
  contact: {
    title: 'Contacte',
    intro: 'Tens un projecte o una oferta? Escriu-me.',
    email: 'Correu',
  },
  footer: { madeWith: 'Fet amb React i TypeScript' },
  language: { label: "Tria l'idioma" },
}
