export interface ProjectImage {
  url: string;
  alt?: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  role: string;
  period: string;
  location: string;
  companyOrClient?: string;
  description: string;
  fullDescription?: string;
  category: 'web' | 'mobile' | 'backend' | 'instruction' | 'infrastructure';
  tags: string[];
  repository?: string;
  demoUrl?: string;
  privacyPolicyUrl?: string;
  featured?: boolean;
  images: ProjectImage[];
}

export const projects: Project[] = [
  {
    id: "riskhub-tech",
    title: "RiskHub – Plataforma Web Corporativa & Ciberseguridad",
    role: "Desarrollador Web Frontend & UI/UX",
    period: "2024 – Presente",
    location: "Sucre, Bolivia",
    companyOrClient: "RiskHub Tech",
    description: "Plataforma web oficial para consultora líder en ciberseguridad, pentesting, auditorías ISO 27001 y continuidad del negocio en Bolivia y LATAM.",
    fullDescription: "Diseño y desarrollo de la plataforma web corporativa de RiskHub (https://riskhub.tech/). Cuenta con arquitectura frontend moderna y optimizada en React, TypeScript y Tailwind CSS; diseño UI/UX responsivo con paleta especializada en ciberseguridad, catálogo interactivo de servicios (Red Team, Pentesting OWASP, Auditorías ISO 27001/22301, OSINT y planes DRP/BCP), desglose metodológico por fases con cálculo de severidad CVSS 4.0, alta optimización SEO con metadatos OpenGraph y Schema.org estructurados, y rendimiento de carga ultrarrápido.",
    category: "web",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Ciberseguridad", "UI/UX", "SEO", "Responsive"],
    demoUrl: "https://riskhub.tech/",
    featured: true,
    images: [
      {
        url: "/images/projects/risk_hub/landing_1.png",
        alt: "Plataforma Web RiskHub Ciberseguridad - Hero y Servicios",
        caption: "Hero principal y catálogo de servicios de ciberseguridad en RiskHub Tech"
      },
      {
        url: "/images/projects/risk_hub/landing_2.png",
        alt: "RiskHub Ciberseguridad - Servicios Red Team y Metodología",
        caption: "Sección de servicios Red Team y fases metodológicas de auditoría y pentesting"
      }
    ]
  },
  {
    id: "meow-meow-pos",
    title: "Meow Meow – Sistema POS & Gestión Kawaii Boutique",
    role: "Desarrollador Full Stack & Frontend",
    period: "Octubre 2024 – Presente",
    location: "Sucre, Bolivia",
    companyOrClient: "Meow Meow Boutique",
    description: "Sistema web de Punto de Venta (POS) y panel administrativo para boutique y papelería kawaii con métricas y stock en tiempo real.",
    fullDescription: "Plataforma web integral diseñada para la venta minorista y control operativo de tiendas kawaii. Integra un terminal de Punto de Venta (POS) de alta velocidad con lectura de códigos de barras, atajos de teclado (F2, F4, F9) y compatibilidad táctil; módulo de cobros multidivisa (efectivo, tarjeta, QR) y tickets con descuentos por cupón; control de inventario en tiempo real con semáforos de stock crítico; arqueo de caja diario y un dashboard con analíticas de ingresos semanales y ranking de productos.",
    category: "web",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "POS", "Vercel", "Dashboard", "E-commerce"],
    repository: "https://github.com/edd86/web_meow_meow.git",
    demoUrl: "https://web-meow-meow-86pt.vercel.app/",
    featured: true,
    images: [
      {
        url: "/images/projects/meow_meow_1.svg",
        alt: "Terminal POS Meow Meow",
        caption: "Terminal Punto de Venta (POS) interactivo con carrito, cupones y atajos rápidos"
      },
      {
        url: "/images/projects/meow_meow_2.svg",
        alt: "Dashboard Administrativo Meow Meow",
        caption: "Panel de control principal con métricas de ventas, arqueo de caja y stock en vivo"
      }
    ]
  },
  {
    id: "invitaciones-virtuales",
    title: "Invitaciones Virtuales Solemnes & Personalizadas",
    role: "Desarrollador Frontend & Diseñador Web",
    period: "Octubre 2024",
    location: "Sucre, Bolivia",
    companyOrClient: "Freelance / Eventos",
    description: "Aplicación web de invitaciones solemnes interactivas con temporizador protocolar en tiempo real, itinerario y mapas.",
    fullDescription: "Diseño y desarrollo frontend de una experiencia web de invitaciones virtuales personalizadas para eventos de alta distinción (titulaciones, bodas y galas). Desarrollada con HTML5 semántico, CSS3 moderno (arquitectura de variables, animaciones fluidas con IntersectionObserver, efectos dorados y diseño mobile-first) y JavaScript modular. Integra un temporizador protocolar en tiempo real con micro-animaciones, itinerario protocolar con ubicación satelital mediante Google Maps interactivo, tarjetas de gratitud y soporte para formatos de imagen de última generación (AVIF y WebP).",
    category: "web",
    tags: ["JavaScript", "CSS3", "HTML5", "Vercel", "UI/UX", "Mobile First", "Google Maps", "Animaciones"],
    demoUrl: "https://invitacion-sigma-eight.vercel.app/",
    featured: true,
    images: [
      {
        url: "/images/projects/invitacion_1.svg",
        alt: "Invitación Virtual Solemne & Temporizador",
        caption: "Diseño editorial elegante con temporizador dinámico en tiempo real y vista móvil"
      },
      {
        url: "/images/projects/invitacion_2.svg",
        alt: "Itinerario Protocolar y Mapas",
        caption: "Itinerario del evento con geolocalización interactiva en Google Maps y tarjeta de gratitud"
      }
    ]
  },
  {
    id: "chat-stats",
    title: "Chats Stats – Analítica & Estadísticas de Chats",
    role: "Desarrollador Móvil Flutter & Creador",
    period: "2024 – Presente",
    location: "Sucre, Bolivia",
    companyOrClient: "CodEDD (Google Play)",
    description: "Aplicación móvil para analizar historiales de chat de WhatsApp con métricas avanzadas, modo versus, heatmaps y Chat Wrapped 100% local.",
    fullDescription: "Aplicación móvil Android e iOS desarrollada en Flutter y Dart para el procesamiento y visualización estadística de conversaciones exportadas de WhatsApp (.txt y .zip). Cuenta con arquitectura 100% local basada en SQLite (chat_stats.db) sin backend externo para garantizar privacidad absoluta por diseño; generación de mapas de calor horarios, rankings de participantes, conteo léxico y de emojis, comparativa 'versus' entre remitentes, resúmenes anuales 'Chat Wrapped' listos para compartir con share_plus, bloqueo de seguridad biométrico mediante local_auth e integración publicitaria con Google AdMob.",
    category: "mobile",
    tags: ["Flutter", "Dart", "Android", "iOS", "SQLite", "Local Auth", "Google AdMob", "Privacy by Design"],
    privacyPolicyUrl: "/privacy-policy",
    featured: true,
    images: [
      {
        url: "/images/projects/chat_stats_1.svg",
        alt: "Chats Stats - Panel Principal y Estadísticas",
        caption: "Dashboard analítico de chats con métricas de mensajes, rankings y heatmaps horarios"
      },
      {
        url: "/images/projects/chat_stats_2.svg",
        alt: "Chats Stats - Chat Wrapped y Modo Versus",
        caption: "Generador de tarjetas 'Chat Wrapped' y comparativas versus entre participantes"
      }
    ]
  },
  {
    id: "qbo-dice-games",
    title: "Qbo – Suite de Juegos de Mesa con Dados & Motor 2D",
    role: "Lead Mobile Developer & Arquitecto de Software",
    period: "2024 – Presente",
    location: "Sucre, Bolivia",
    companyOrClient: "CodEDD (Google Play)",
    description: "Suite móvil de juegos de mesa tradicionales (Cacho Alalay, Dudo, Todis) construida en Flutter con motor Flame 2D, Clean Architecture, acelerómetro y 69 tests unitarios.",
    fullDescription: "Diseño y desarrollo integral de Qbo (dev.codedd.qbo), una aplicación móvil social offline-first para Android orientada a partidas presenciales locales (Pass & Play) bajo una cuidada estética 'Nocturnal Tabletop'. Implementa una Clean Architecture híbrida que desacopla el motor gráfico de física 2D (Flame Engine) de la lógica de negocio en Dart puro gestionada reactivamente con Riverpod (Code Generation). Integra lanzamiento por movimiento físico mediante acelerómetro (sensors_plus con filtrado vectorial de fuerza G y cooldown adaptativo), motor de audio de baja latencia con buffers circulares, suite de 69 tests automatizados (flutter_test), compras integradas (IAP con Google Play Billing para eliminar publicidad) y monetización ética con Google AdMob (UMP SDK / RGPD).",
    category: "mobile",
    tags: ["Flutter", "Flame Engine", "Riverpod", "Dart", "Google Play Billing", "AdMob", "Sensors", "Clean Architecture"],
    privacyPolicyUrl: "/qbo/privacy-policy",
    featured: true,
    images: [
      {
        url: "/images/projects/qbo_1.svg",
        alt: "Qbo - Tablero de Dados 2D y Cacho Alalay",
        caption: "Simulador de dados en tiempo real con motor Flame 2D, acelerómetro y libreta de Cacho Alalay"
      },
      {
        url: "/images/projects/qbo_2.svg",
        alt: "Qbo - Modos Dudo, Todis y Arquitectura",
        caption: "Modo multijugador local Pass & Play, compras integradas y 69 pruebas automatizadas"
      }
    ]
  },
  {
    id: "financial-project",
    title: "App Flutter de Gestión Contable",
    role: "Desarrollador Móvil",
    period: "Septiembre 2025 – Noviembre 2025",
    location: "Sucre, Bolivia",
    companyOrClient: "Freelance",
    description: "Aplicación móvil que facilita el control contable, registro de ingresos/egresos y reportes financieros para oficina.",
    fullDescription: "Desarrollo completo en Flutter con enfoque en usabilidad rápida, gráficos de balance contable, categorías presupuestarias y persistencia local eficiente.",
    category: "mobile",
    tags: ["Flutter", "Dart", "Contabilidad", "Android", "Finanzas"],
    repository: "https://github.com/edd86/financial_project.git",
    featured: true,
    images: [
      {
        url: "/images/projects/financial_1.svg",
        alt: "Panel de Gestión Contable",
        caption: "Dashboard financiero y balances en tiempo real"
      },
      {
        url: "/images/projects/financial_2.svg",
        alt: "Registro de Transacciones",
        caption: "Formulario ágil de ingresos y gastos categorizados"
      }
    ]
  },
  {
    id: "inprosur-teach-app",
    title: "App Flutter para Plataforma Educativa",
    role: "Desarrollador Móvil",
    period: "Julio 2025 – Agosto 2025",
    location: "Sucre, Bolivia",
    companyOrClient: "Freelance",
    description: "Aplicación móvil Android desarrollada en Flutter para consumir la API educativa y facilitar el aprendizaje móvil.",
    fullDescription: "Diseño e implementación frontend multiplataforma en Flutter para Android. Incluye módulos de cursos, evaluaciones, perfil de estudiante y sincronización de datos en tiempo real.",
    category: "mobile",
    tags: ["Flutter", "Dart", "Android", "REST API", "Mobile App"],
    repository: "https://github.com/edd86/inprosur_teach_app.git",
    featured: true,
    images: [
      {
        url: "/images/projects/teach_app_1.svg",
        alt: "App Flutter Educativa",
        caption: "Interfaz principal de la App Educativa en Flutter"
      },
      {
        url: "/images/projects/teach_app_2.svg",
        alt: "Vista de Cursos",
        caption: "Módulo de lecciones y recursos interactivos"
      }
    ]
  },
  {
    id: "project-api-edu",
    title: "Backend API Restful para Plataforma Educativa",
    role: "Desarrollador Backend",
    period: "Junio 2025 – Agosto 2025",
    location: "Sucre, Bolivia",
    companyOrClient: "Freelance",
    description: "API Restful robusta construida con Node.js y TypeScript para la gestión integral de una plataforma educativa.",
    fullDescription: "Desempeño como desarrollador backend principal estructurando endpoints seguros, autenticación de usuarios, gestión de contenidos académicos y consumo optimizado para la aplicación móvil.",
    category: "backend",
    tags: ["Node.js", "TypeScript", "REST API", "Express", "Backend"],
    repository: "https://github.com/edd86/project_api.git",
    featured: true,
    images: [
      {
        url: "/images/projects/project_api_1.svg",
        alt: "Arquitectura API Educativa",
        caption: "Endpoints REST API Node.js & TypeScript"
      },
      {
        url: "/images/projects/project_api_2.svg",
        alt: "Documentación y Tests",
        caption: "Respuestas JSON estructuradas y middleware"
      }
    ]
  },
  {
    id: "virtual-cards-api",
    title: "Plataforma & API Restful Tarjetas Virtuales (NFC)",
    role: "Desarrollador Full Stack",
    period: "Mayo 2024 – Julio 2024",
    location: "Sucre, Bolivia",
    companyOrClient: "Freelance",
    description: "Servicio de tarjetas de presentación virtuales inteligentes asociadas a chips de contacto NFC.",
    fullDescription: "Desarrollo de API Restful con Node.js, MongoDB y JavaScript junto con vistas dinámicas en Astro para mostrar perfiles interactivos al escanear la tarjeta NFC de cada cliente.",
    category: "web",
    tags: ["Node.js", "MongoDB", "JavaScript", "Astro", "NFC", "Full Stack"],
    repository: "https://github.com/edd86/virtual_cards_api.git",
    featured: true,
    images: [
      {
        url: "/images/projects/virtual_cards_1.svg",
        alt: "Tarjeta Virtual NFC",
        caption: "Perfil interactivo para tarjeta de presentación NFC"
      },
      {
        url: "/images/projects/virtual_cards_2.svg",
        alt: "Panel de Administración",
        caption: "Gestión de clientes y redes sociales desde API REST"
      }
    ]
  },
  {
    id: "ine-capacitador",
    title: "Instructor para Agentes Censales - Chuquisaca",
    role: "Instructor / Capacitador",
    period: "Enero 2024 – Marzo 2024",
    location: "Sucre, Bolivia",
    companyOrClient: "INE (Instituto Nacional de Estadística)",
    description: "Formación e instrucción técnica para los agentes censales del Censo de Población y Vivienda Bolivia 2025.",
    fullDescription: "Capacitación en uso de herramientas digitales de recolección de datos, metodología de censado y resolución de incidencias en campo.",
    category: "instruction",
    tags: ["Capacitación", "INE Bolivia", "Liderazgo", "Censo 2025"],
    featured: false,
    images: [
      {
        url: "/images/projects/ine_capacitador_1.svg",
        alt: "Capacitación INE",
        caption: "Instrucción de agentes censales Chuquisaca"
      }
    ]
  },
  {
    id: "komando-swimming-school",
    title: "App Móvil de Control Administrativo Komando",
    role: "Desarrollador Móvil",
    period: "Diciembre 2023",
    location: "Sucre, Bolivia",
    companyOrClient: "Escuela de Natación Komando",
    description: "Aplicación Android para la gestión administrativa, control de estudiantes y horarios de la escuela de natación.",
    fullDescription: "Diseño y codificación de aplicación móvil orientada al registro de asistencia, seguimiento de mensualidades y control de grupos de natación.",
    category: "mobile",
    tags: ["Flutter", "Android", "Gestión Escolar", "Dart"],
    repository: "https://github.com/edd86/Komando_Swiming_School.git",
    featured: false,
    images: [
      {
        url: "/images/projects/komando_1.svg",
        alt: "App Komando Swimming",
        caption: "Gestión de estudiantes y grupos de natación"
      }
    ]
  },
  {
    id: "fisqui-boot-arduino",
    title: "App Móvil Control Dispositivo Arduino Bluetooth",
    role: "Desarrollador Móvil / Hardware",
    period: "Septiembre 2023 – Noviembre 2023",
    location: "Sucre, Bolivia",
    companyOrClient: "Proyecto de Robótica",
    description: "App Android para el control inalámbrico y envío de comandos a dispositivos robóticos Arduino mediante Bluetooth.",
    fullDescription: "Integración de protocolos Bluetooth Serial en Flutter con comandos personalizados para interactuar con actuadores y sensores en tiempo real.",
    category: "mobile",
    tags: ["Flutter", "Bluetooth Serial", "Arduino", "Android", "IoT"],
    repository: "https://github.com/edd86/fisqui_boot.git",
    featured: false,
    images: [
      {
        url: "/images/projects/fisqui_boot_1.svg",
        alt: "Control Fisqui Boot Arduino",
        caption: "Panel de mandos robóticos mediante Bluetooth"
      }
    ]
  },
  {
    id: "itec-mantenimiento-docente",
    title: "Instructor de Ensamblaje y Mantenimiento de Computadoras",
    role: "Instructor / Docente",
    period: "Septiembre 2022 – Diciembre 2022",
    location: "Sucre, Bolivia",
    companyOrClient: "Instituto ITEC",
    description: "Docencia práctica y teórica sobre arquitectura de PCs, diagnóstico de fallos y mantenimiento preventivo/correctivo.",
    fullDescription: "Elaboración de planes de estudio, talleres prácticos de ensamblaje, instalación de sistemas operativos y diagnóstico de hardware.",
    category: "instruction",
    tags: ["Hardware", "Mantenimiento PC", "Docencia", "ITEC"],
    featured: false,
    images: [
      {
        url: "/images/projects/itec_mantenimiento_1.svg",
        alt: "Taller Mantenimiento ITEC",
        caption: "Prácticas de ensamblaje e instalación de computadoras"
      }
    ]
  },
  {
    id: "licoreria-graphql-server",
    title: "Servidor Backend Node.js & GraphQL Licorería",
    role: "Desarrollador Backend",
    period: "Marzo 2019 – Diciembre 2019",
    location: "Sucre, Bolivia",
    companyOrClient: "Autónomo",
    description: "Servidor de comercio electrónico basado en Node.js y GraphQL para la gestión de productos y pedidos.",
    fullDescription: "Diseño de esquemas GraphQL, mutaciones, consultas eficientes y estructura de datos para catálogo comercial en línea.",
    category: "backend",
    tags: ["Node.js", "GraphQL", "JavaScript", "E-commerce"],
    featured: false,
    images: [
      {
        url: "/images/projects/graphql_licoreria_1.svg",
        alt: "GraphQL Schema Playground",
        caption: "Consultas y mutaciones GraphQL para licorería"
      }
    ]
  },
  {
    id: "tecorp-redes",
    title: "Técnico de Cableado Estructurado & Redes",
    role: "Técnico Especialista",
    period: "Junio 2018 – Noviembre 2018",
    location: "Sucre, Bolivia",
    companyOrClient: "TECORP S.A.",
    description: "Montaje de infraestructura de comunicaciones, switches y sistemas de seguridad en el Centro Cultural 'La Sombrerería'.",
    fullDescription: "Instalación de puntos de red categoría 6A, peinado de patch panels, certificación de cableado y montaje de rack de switches principales.",
    category: "infrastructure",
    tags: ["Cableado Estructurado", "Switches", "Redes", "Rack Systems"],
    featured: false,
    images: [
      {
        url: "/images/projects/tecorp_redes_1.svg",
        alt: "Montaje Rack TECORP",
        caption: "Cableado estructurado y montaje de switches de red"
      }
    ]
  },
  {
    id: "csharp-desktop-apps",
    title: "Desarrollador de Aplicaciones Desktop C# & XAML",
    role: "Desarrollador C#",
    period: "Agosto 2013 – Abril 2015",
    location: "Sucre, Bolivia",
    companyOrClient: "Autónomo",
    description: "Diseño y codificación de software de escritorio con C# y XAML para interfaces interactivas y sistemas locales.",
    fullDescription: "Creación de software de escritorio en arquitectura .NET con foco en interfaces dinámicas, base de datos local y lógica de negocio.",
    category: "infrastructure",
    tags: ["C#", "XAML", ".NET Framework", "Desktop"],
    featured: false,
    images: [
      {
        url: "/images/projects/csharp_desktop_1.svg",
        alt: "Interfaz C# XAML Desktop",
        caption: "Aplicación de escritorio C# con diseño WPF/XAML"
      }
    ]
  },
  {
    id: "ofimatica-docente",
    title: "Instructor de Ofimática & Computación",
    role: "Instructor / Docente",
    period: "2011 – 2017",
    location: "Sucre, Bolivia",
    companyOrClient: "Institutos ITEC & CCA",
    description: "Desarrollo de contenidos bibliográficos y capacitación en herramientas de productividad y computación.",
    fullDescription: "Enseñanza de procesamiento de texto, hojas de cálculo, presentaciones y conceptos fundamentales de computación.",
    category: "instruction",
    tags: ["Ofimática", "Docencia", "Informática Básica"],
    featured: false,
    images: [
      {
        url: "/images/projects/ofimatica_docente_1.svg",
        alt: "Clases de Ofimática",
        caption: "Capacitación en computación y herramientas digitales"
      }
    ]
  }
];
