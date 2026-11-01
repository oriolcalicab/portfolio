import type { Translations } from './en'

export const es: Translations = {
  nav: { home: 'Inicio', projects: 'Proyectos', cv: 'CV', contact: 'Contacto' },
  home: {
    greeting: 'Hola, soy',
    role: 'Desarrollador frontend · React y TypeScript',
    about:
      'Creo aplicaciones web con React y TypeScript: componentes reutilizables, tests y control de versiones con Git. Después de más de 20 años en la industria, aplico ese mismo rigor al código, y busco mi primera oportunidad como desarrollador en un equipo.',
    cta: 'Ver mis proyectos',
  },
  projects: {
    title: 'Proyectos',
    intro: 'Algunas de las cosas que he hecho.',
    visit: 'Visitar la web',
    items: {
      pastisseria: {
        title: 'Pastisseria La Vall',
        description:
          'Aplicación web full stack (en desarrollo): catálogo público de productos con paginación, panel de administración protegido por roles y API REST propia, con tests en frontend y backend.',
      },
      budget: {
        title: 'Generador de presupuestos de servicios digitales',
        description:
          'Cálculo dinámico según los servicios elegidos, historial con búsqueda y filtros, y presupuestos compartibles por URL.',
      },
      movies: {
        title: 'Plataforma de películas',
        description: 'Plataforma interactiva para explorar, valorar y gestionar películas favoritas.',
      },
      italumni: {
        title: 'ITAlumni',
        description:
          'Portal de networking y empleo: web multipágina con buscador de ofertas en tiempo real, filtros y registro de usuarios, siguiendo Gitflow.',
      },
      gallery: {
        title: 'Galería de imágenes',
        description: 'Galería responsive con selección, borrado múltiple y reordenación con drag and drop.',
      },
      portfolio: {
        title: 'Este portfolio',
        description:
          'Web multiidioma con un Context propio para los idiomas y CV en PDF generados a partir de los mismos textos.',
      },
      wordpress: {
        title: 'Academia FUNDAPICA',
        description: 'Web realizada con WordPress durante las prácticas en FUNDAPICA.',
      },
    },
  },
  cv: {
    title: 'Currículum',
    download: 'Descargar PDF',
    summaryTitle: 'Perfil',
    summary:
      'Desarrollador frontend junior con formación oficial en desarrollo web y especialización en React y TypeScript. Vengo de más de 20 años en entornos industriales, donde he trabajado con procesos exigentes, responsabilidad y atención al detalle. Aprendo rápido y busco mi primera oportunidad como desarrollador en un equipo.',
    experienceTitle: 'Experiencia',
    educationTitle: 'Formación',
    skillsTitle: 'Conocimientos técnicos',
    otherTitle: 'Otros datos',
    skillGroups: { frontend: 'Frontend', backend: 'Backend (nivel inicial)', testing: 'Testing', tools: 'Herramientas' },
    experience: [
      {
        title: 'Diseñador de páginas web (prácticas)',
        place: 'Asociación de FUNDAPICA, Barcelona',
        period: 'Septiembre 2025',
      },
      {
        title: 'Operario de sala limpia',
        place: "F.A.E. - Francisco Albero, L'Hospitalet de Llobregat",
        period: 'Agosto 2024 – Enero 2025',
      },
      {
        title: 'Especialista de fábrica',
        place: 'Manufacturas Eléctricas y Cableados S.L., Barcelona',
        period: 'Abril 2014 – Julio 2024',
      },
      { title: 'Especialista de fábrica', place: 'SEMAI S.L., Barcelona', period: 'Junio 2002 – Octubre 2013' },
    ],
    education: [
      { title: 'Especialización Frontend con React', place: 'IT Academy, Barcelona Activa', period: '2026' },
      {
        title: 'Certificado de profesionalidad Nivel 2: Confección y publicación de páginas web (480 h)',
        place: 'Grup CIEF, Barcelona · Curso del SOC, con desarrollo web en WordPress',
        period: '2025',
      },
      { title: 'Grado Medio de Electrónica (primer curso)', place: 'Escola Sopeña Barcelona', period: '2002' },
      { title: 'Educación Secundaria Obligatoria', place: 'Escola Sopeña Barcelona', period: '' },
    ],
    other: ['Catalán y castellano: nativo', 'Inglés: nivel básico', 'Carnet de conducir B', 'Disponibilidad de jornada completa'],
  },
  contact: {
    title: 'Contacto',
    intro: '¿Tienes un proyecto o una oferta? Escríbeme.',
    email: 'Correo',
  },
  footer: { madeWith: 'Hecho con React y TypeScript' },
  language: { label: 'Elige el idioma' },
}
