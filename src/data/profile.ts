export interface ProfileData {
  name: string;
  alias: string;
  title: string;
  location: string;
  bio: string;
  contact: {
    email: string;
    phone: string;
    whatsappUrl: string;
    github: string;
    githubUrl: string;
    linkedin: string;
    linkedinUrl: string;
  };
  skills: {
    category: string;
    items: { name: string; level?: string; icon?: string }[];
  }[];
  education: {
    title: string;
    institution: string;
    location: string;
  }[];
  languages: {
    language: string;
    level: string;
  }[];
}

export const profileData: ProfileData = {
  name: "Edward Cristóbal Díaz Valda",
  alias: "CodEDD",
  title: "Software Developer",
  location: "Sucre, Bolivia",
  bio: "Desarrollador de aplicaciones de escritorio, web y móviles con 3 años de experiencia en Flutter, 2 años en C#, 1 año en JavaScript/TypeScript y desarrollo backend con Node.js, SQLite, Supabase MongoDB.",
  contact: {
    email: "edward.cristob@gmail.com",
    phone: "+591 71171741",
    whatsappUrl: "https://wa.me/59171171741?text=Hola%20Edward,%20vi%20tu%20portafolio%20y%20quiero%20contactarme%20contigo",
    github: "edd86",
    githubUrl: "https://github.com/edd86",
    linkedin: "edward-cristobal-diaz-valda",
    linkedinUrl: "https://linkedin.com/in/edward-cristobal-diaz-valda",
  },
  skills: [
    {
      category: "Frontend & Web",
      items: [
        { name: "Astro" },
        { name: "TypeScript" },
        { name: "JavaScript" },
        { name: "HTML5 & CSS3" },
        { name: "Tailwind CSS" },
        { name: "XAML" },
      ],
    },
    {
      category: "Móvil & Multiplataforma",
      items: [
        { name: "Flutter", level: "3 años exp" },
        { name: "Dart" },
        { name: "Android Native" },
      ],
    },
    {
      category: "Backend & APIs",
      items: [
        { name: "Node.js" },
        { name: "REST APIs" },
        { name: "C# / .NET", level: "2 años exp" },
        { name: "Express" },
      ],
    },
    {
      category: "Bases de Datos & IoT",
      items: [
        { name: "MongoDB" },
        { name: "SQLite" },
        { name: "Supabase" },
        { name: "Arduino / Bluetooth" },
        { name: "NFC Tech" },
      ],
    },
    {
      category: "Infraestructura & Herramientas",
      items: [
        { name: "Cableado Estructurado" },
        { name: "Photoshop" },
        { name: "GitHub" },
        { name: "SCRUM" },
      ],
    },
  ],
  education: [
    {
      title: "Ingeniería de Sistemas",
      institution: "Universidad Mayor Real y Pontificia de San Francisco Xavier",
      location: "Sucre, Bolivia",
    },
    {
      title: "Instalación y Administración de Redes de Computadoras",
      institution: "Ingeniería de Sistemas & PC-Soft",
      location: "Sucre, Bolivia",
    },
    {
      title: "Introducción a la Programación en Java",
      institution: "Ingeniería de Sistemas & CISCO Networking",
      location: "Sucre, Bolivia",
    },
    {
      title: "SCRUM — Marco Ágil de Trabajo",
      institution: "CAEM",
      location: "Sucre, Bolivia",
    },
    {
      title: "Curso de Extensión Universitaria de Inglés",
      institution: "Facultad de Humanidades — Carrera de Idiomas",
      location: "Sucre, Bolivia",
    },
  ],
  languages: [
    { language: "Español", level: "Nativo" },
    { language: "Inglés", level: "Nivel Medio" },
  ],
};
