// Fuente única de datos del currículum.
// La web (index), la versión imprimible (/print) y la versión en inglés (/print-en)
// se generan desde aquí: al actualizar el CV basta con editar este archivo.

export type Lang = 'es' | 'en';
export type L = Record<Lang, string>;

export interface Experience {
  title: L;
  period: L;
  company: string;
  description: L;
  /** Descripción breve usada en la versión imprimible. Si falta, se usa `description`. */
  short?: L;
  responsibilities?: L[];
  /** false = no aparece en la versión imprimible (para que quepa en la hoja). */
  print?: boolean;
}

export interface Education {
  degree: L;
  period: string;
  institution: string;
  status?: L;
  print?: boolean;
}

export interface Course {
  title: string;
  description?: L;
  period?: L;
  institution?: string;
  /** Texto de una línea para la versión imprimible. */
  short: L;
  print?: boolean;
}

export interface SkillGroup {
  category: L;
  skills: L[];
  /**
   * Dónde se ha aplicado esta área (certificaciones, ramos, cargos). Si tiene valor,
   * el área se muestra como principal en la web, con esta línea de respaldo.
   */
  evidence?: L[];
}

// ─── Datos personales ────────────────────────────────────────────────
// `public`: se muestra en la web.
// `private`: solo en las versiones imprimibles (/print y /print-en), que no se indexan en Google.
export const personal = {
  name: 'Félix Rodrigo Vilches Acuña',
  shortName: 'Félix Vilches',
  title: {
    es: 'Ingeniero Civil en Computación e Informática',
    en: 'Computer Science and Informatics Engineer',
  },
  subtitle: {
    es: 'Profesor Técnico Profesional | Especialista en Telecomunicaciones',
    en: 'Technical Professional Teacher | Telecommunications Specialist',
  },
  email: 'felix.vilches.a@gmail.com',
  phone: '+56962090131',
  phoneDisplay: '+56 9 6209 0131',
  website: 'www.fvilches.cl',
  url: 'https://www.fvilches.cl',
  city: 'Temuco, Araucanía, Chile',
  // Enlaces opcionales: se muestran solo si tienen valor.
  linkedin: '',
  github: '',
  private: {
    rut: '16.317.431-6',
    address: 'Rio Orinoco 610, Temuco, Araucanía, Chile',
    birthDate: { es: 'Octubre 1986', en: 'October 1986' },
    status: { es: 'Soltero', en: 'Single' },
    nationality: { es: 'Chilena', en: 'Chilean' },
  },
};

export const profile: L = {
  es: 'Ingeniero Civil en Computación e Informática y Técnico en Telecomunicaciones, con experiencia en docencia técnico profesional y en educación superior, soporte TI y redes. Combino la práctica técnica —certificación Ubiquiti UEWA, infraestructura de redes y asesorías informáticas desde 2005— con la enseñanza activa a través de la robótica educativa con Arduino. Más de dos décadas de liderazgo comunitario me han dado experiencia en coordinación de equipos y formación de jóvenes.',
  en: 'Computer Science and Informatics Engineer and Telecommunications Technician, experienced in technical-professional and higher-education teaching, IT support and networking. I combine hands-on technical work —Ubiquiti UEWA certification, network infrastructure and IT consulting since 2005— with active teaching through educational robotics with Arduino. More than two decades of community leadership have given me experience in team coordination and youth development.',
};

// ─── Experiencia ─────────────────────────────────────────────────────
export const experiences: Experience[] = [
  {
    title: { es: 'Profesor Part-Time', en: 'Part-Time Lecturer' },
    period: { es: 'Otoño y Primavera 2026', en: 'Autumn and Spring 2026' },
    company: 'TEC-UCT',
    description: {
      es: 'Docente en educación superior en modalidad part-time, impartiendo ramos de infraestructura tecnológica, redes y robótica.',
      en: 'Part-time higher-education lecturer teaching technology infrastructure, networking and robotics courses.',
    },
    short: {
      es: 'Ramos: Hardware y Sistemas Operativos, Interconectividad de Redes (Otoño) y Programación Robótica (Primavera).',
      en: 'Courses: Hardware and Operating Systems, Network Interconnectivity (Autumn) and Robotics Programming (Spring).',
    },
    responsibilities: [
      {
        es: 'Hardware y Sistemas Operativos (Semestre Otoño 2026)',
        en: 'Hardware and Operating Systems (Autumn 2026)',
      },
      { es: 'Interconectividad de Redes (Semestre Otoño 2026)', en: 'Network Interconnectivity (Autumn 2026)' },
      { es: 'Programación Robótica (Semestre Primavera 2026)', en: 'Robotics Programming (Spring 2026)' },
    ],
  },
  {
    title: {
      es: 'Profesor Reemplazante – Tecnología y Módulo TP de Contabilidad',
      en: 'Substitute Teacher – Technology and Accounting TP Module',
    },
    period: { es: 'Octubre 2025', en: 'October 2025' },
    company: 'Liceo Comercial Temuco Bicentenario de Excelencia',
    description: {
      es: 'Reemplazo en la asignatura de Tecnología y en el módulo Organización y Métodos de Trabajo en la Oficina de la especialidad de Contabilidad.',
      en: 'Substitute for the Technology subject and the Office Organization and Work Methods module of the Accounting specialty.',
    },
    short: {
      es: 'Asignatura de Tecnología y módulos técnico profesionales de la especialidad Contabilidad.',
      en: 'Technology subject and technical-professional modules in the Accounting specialty.',
    },
    responsibilities: [
      { es: 'Asignatura de Tecnología para 1° y 2° medio', en: 'Technology subject for 9th and 10th grade' },
      {
        es: 'Módulo Organización y Métodos de Trabajo en la Oficina para 3° medio',
        en: 'Office Organization and Work Methods module for 11th grade',
      },
    ],
  },
  {
    title: { es: 'Reemplazo Profesor Técnico Profesional', en: 'Substitute Technical Professional Teacher' },
    period: { es: 'Abril 2025 – Junio 2025', en: 'April 2025 – June 2025' },
    company: 'Complejo Educacional La Granja de Vilcún',
    description: {
      es: 'Reemplazo en la especialidad de Telecomunicaciones, impartiendo módulos y talleres de la especialidad, además de actividades de JEC (Jornada Escolar Completa) en el área de robótica.',
      en: 'Substitute in the Telecommunications specialty, teaching specialty modules and workshops, plus full-school-day (JEC) robotics activities.',
    },
    short: {
      es: 'Especialidad de Telecomunicaciones, módulos específicos y actividades de JEC en robótica.',
      en: 'Telecommunications specialty, specific modules and JEC robotics activities.',
    },
  },
  {
    title: { es: 'Profesor Técnico Profesional', en: 'Technical Professional Teacher' },
    period: { es: 'Marzo 2023 – Febrero 2025', en: 'March 2023 – February 2025' },
    company: 'Colegio Las Américas Temuco',
    description: {
      es: 'Múltiples roles como profesor del área técnico profesional, contribuyendo al desarrollo educativo de los estudiantes en diversos niveles y especialidades.',
      en: 'Multiple roles as a technical-professional teacher, supporting students across several levels and specialties.',
    },
    short: {
      es: 'Profesor jefe de terceros medios. Módulos: Programación y BD, Configuración de Equipos, Soporte de Usuarios, Sistemas Operativos. Tutor de Robótica.',
      en: 'Homeroom teacher for 11th grade. Modules: Programming and Databases, Equipment Configuration, User Support, Operating Systems. Robotics workshop tutor.',
    },
    responsibilities: [
      { es: 'Profesor jefe de terceros medios', en: 'Homeroom teacher for 11th grade' },
      {
        es: 'Módulos: Programación y Base de Datos, Instalación y Configuración de Equipos Informáticos, Soporte de Usuarios y Productividad, y Sistemas Operativos',
        en: 'Modules: Programming and Databases, Computer Equipment Installation and Configuration, User Support and Productivity, and Operating Systems',
      },
      { es: 'Asignatura de Tecnología de 7° básico a 2° medio', en: 'Technology subject from 7th to 10th grade' },
      { es: 'Tutor del taller de Robótica', en: 'Robotics workshop tutor' },
    ],
  },
  {
    title: { es: 'Reemplazo Profesional TIC', en: 'IT Professional (Replacement)' },
    period: { es: 'Diciembre 2022 – Enero 2023', en: 'December 2022 – January 2023' },
    company: 'Hospital de Villarrica',
    description: {
      es: 'Soporte de TI y gestión del soporte externo, asegurando el funcionamiento de la infraestructura tecnológica hospitalaria.',
      en: 'IT support and management of external support providers, keeping the hospital technology infrastructure running.',
    },
    short: { es: 'Soporte de TI y gestión del soporte externo.', en: 'IT support and external support management.' },
  },
  {
    title: { es: 'Práctica Profesional', en: 'Professional Internship' },
    period: { es: 'Enero 2018 – Marzo 2018', en: 'January 2018 – March 2018' },
    company: 'CTR Telefonía Regional',
    description: {
      es: 'Práctica en el área de transmisión, monitoreo y soporte de red backhaul.',
      en: 'Internship in transmission, monitoring and support of the backhaul network.',
    },
    print: false,
  },
  {
    title: { es: 'Asesor/Consultor Informático Independiente', en: 'Independent IT Consultant' },
    period: { es: 'Diciembre 2005 – A la fecha', en: 'December 2005 – Present' },
    company: 'Trabajo Independiente',
    description: {
      es: 'Asesorías en compra, mantenimiento y soporte técnico de computadores para clientes particulares y empresas.',
      en: 'Consulting on computer purchasing, maintenance and technical support for individuals and businesses.',
    },
    short: {
      es: 'Asesorías en compra, mantenimiento y soporte técnico de computadores.',
      en: 'Consulting on computer purchasing, maintenance and technical support.',
    },
  },
  {
    title: { es: 'Práctica – Instalación de Alarmas', en: 'Internship – Alarm Installation' },
    period: { es: 'Mayo 2005 – Agosto 2005', en: 'May 2005 – August 2005' },
    company: 'Redes de Chile',
    description: {
      es: 'Instalación de sistemas de alarmas monitoreadas, desarrollando competencias en seguridad electrónica.',
      en: 'Installation of monitored alarm systems, building skills in electronic security.',
    },
    print: false,
  },
];

// ─── Formación ───────────────────────────────────────────────────────
export const education: Education[] = [
  {
    degree: { es: 'Ingeniero Civil en Computación e Informática', en: 'Computer Science and Informatics Engineer' },
    period: '2012 – 2021',
    institution: 'Universidad Mayor',
  },
  {
    degree: {
      es: 'Ingeniero de Ejecución en Computación e Informática',
      en: 'Computer Engineering Technologist',
    },
    period: '2006 – 2008',
    institution: 'Universidad Mayor',
    status: { es: '(no terminada)', en: '(not completed)' },
    print: false,
  },
  {
    degree: { es: 'Técnico de Nivel Medio en Telecomunicaciones', en: 'Mid-Level Technician in Telecommunications' },
    period: '2000 – 2004',
    institution: 'Liceo Politécnico Pueblo Nuevo, Temuco',
  },
];

export const courses: Course[] = [
  {
    title: 'Certificación UEWA',
    description: { es: 'Ubiquiti Enterprise Wireless Admin', en: 'Ubiquiti Enterprise Wireless Admin' },
    short: {
      es: 'Certificación UEWA – Ubiquiti Enterprise Wireless Admin',
      en: 'UEWA Certification – Ubiquiti Enterprise Wireless Admin',
    },
  },
  {
    title: 'PotencIA el Cambio',
    description: {
      es: 'Inteligencia Artificial para potenciar tus prácticas pedagógicas',
      en: 'Artificial Intelligence to enhance teaching practice',
    },
    institution: 'Fundación Forge',
    short: {
      es: 'PotencIA el Cambio – IA para prácticas pedagógicas (Fundación Forge)',
      en: 'PotencIA el Cambio – AI for teaching practice (Fundación Forge)',
    },
  },
  {
    title: 'Tu pasión inspira',
    description: {
      es: 'Herramientas para la orientación vocacional y laboral de jóvenes en transición a la vida adulta',
      en: 'Tools for vocational and career guidance for young people transitioning to adulthood',
    },
    institution: 'Fundación Forge',
    short: {
      es: 'Tu pasión inspira – Orientación vocacional y laboral (Fundación Forge)',
      en: 'Tu pasión inspira – Vocational and career guidance (Fundación Forge)',
    },
    print: false,
  },
  {
    title: 'Didácticas para reforzar habilidades socioemocionales en el aula',
    period: { es: 'Septiembre – Noviembre 2023', en: 'September – November 2023' },
    institution: 'Centro de Desarrollo para la Educación Media (CEDEM) – INACAP Sede Temuco',
    short: {
      es: 'Didácticas para habilidades socioemocionales – INACAP (2023)',
      en: 'Didactics for socio-emotional skills – INACAP (2023)',
    },
  },
  {
    title: 'Liderando la Alternancia con la Educación Superior',
    period: { es: 'Primer semestre 2023', en: 'First semester 2023' },
    description: { es: '20 horas pedagógicas', en: '20 teaching hours' },
    institution: 'Centro de Innovación en Liderazgo Educativo CILED – INACAP',
    short: {
      es: 'Liderando la Alternancia con Educación Superior – CILED INACAP (2023)',
      en: 'Leading Alternation with Higher Education – CILED INACAP (2023)',
    },
  },
  {
    title: 'Primera Respuesta frente a Emergencias de Salud',
    period: { es: '10/08/2023', en: '08/10/2023' },
    description: { es: 'Duración: 3 horas – Nota: 7,0', en: 'Duration: 3 hours – Grade: 7.0/7.0' },
    institution: 'Asociación Chilena de Seguridad (ACHS)',
    short: {
      es: 'Primera Respuesta frente a Emergencias – ACHS (2023)',
      en: 'First Response to Health Emergencies – ACHS (2023)',
    },
  },
];

// ─── Habilidades ─────────────────────────────────────────────────────
// Las áreas con `evidence` se muestran como principales: herramientas + dónde se han aplicado.
// Las demás se muestran como etiquetas.
export const skillGroups: SkillGroup[] = [
  {
    category: { es: 'Redes y Telecomunicaciones', en: 'Networking & Telecom' },
    skills: [
      { es: 'Gestión de redes', en: 'Network management' },
      { es: 'Ubiquiti', en: 'Ubiquiti' },
      { es: 'Transmisión y backhaul', en: 'Transmission & backhaul' },
    ],
    evidence: [
      { es: 'Certificación UEWA', en: 'UEWA certification' },
      { es: 'Docente de Interconectividad de Redes (TEC-UCT)', en: 'Network Interconnectivity lecturer (TEC-UCT)' },
      { es: 'Técnico en Telecomunicaciones', en: 'Telecommunications technician' },
    ],
  },
  {
    category: { es: 'Soporte e Infraestructura TI', en: 'IT Support & Infrastructure' },
    skills: [
      { es: 'Soporte técnico', en: 'Technical support' },
      { es: 'Hardware', en: 'Hardware' },
      { es: 'Sistemas operativos', en: 'Operating systems' },
    ],
    evidence: [
      { es: 'Asesorías independientes desde 2005', en: 'Independent consulting since 2005' },
      { es: 'Profesional TIC, Hospital de Villarrica', en: 'IT professional, Hospital de Villarrica' },
      { es: 'Docente de Hardware y SO (TEC-UCT)', en: 'Hardware and OS lecturer (TEC-UCT)' },
    ],
  },
  {
    category: { es: 'Robótica', en: 'Robotics' },
    skills: [
      { es: 'Arduino', en: 'Arduino' },
      { es: 'Programación robótica', en: 'Robotics programming' },
      { es: 'Robótica educativa', en: 'Educational robotics' },
    ],
    evidence: [
      { es: 'Docente de Programación Robótica (TEC-UCT)', en: 'Robotics Programming lecturer (TEC-UCT)' },
      { es: 'Tutor del taller de Robótica escolar', en: 'School robotics workshop tutor' },
    ],
  },
  {
    category: { es: 'Docencia', en: 'Teaching' },
    skills: [
      { es: 'Metodologías de enseñanza', en: 'Teaching methodologies' },
      { es: 'IA aplicada a la educación', en: 'AI in education' },
    ],
    evidence: [
      { es: 'Profesor TP desde 2023', en: 'TP teacher since 2023' },
      { es: 'Docente en educación superior (TEC-UCT)', en: 'Higher-education lecturer (TEC-UCT)' },
    ],
  },
  {
    category: { es: 'Programación y Datos', en: 'Programming & Data' },
    skills: [
      { es: 'PHP', en: 'PHP' },
      { es: 'Java', en: 'Java' },
      { es: 'SQL / MySQL', en: 'SQL / MySQL' },
    ],
  },
];

/** Habilidades transversales: se muestran como etiquetas, sin nivel. */
export const softSkills: L[] = [
  { es: 'Liderazgo comunitario', en: 'Community leadership' },
  { es: 'Trabajo en equipo', en: 'Teamwork' },
  { es: 'Adaptabilidad', en: 'Adaptability' },
  { es: 'Comunicación efectiva', en: 'Effective communication' },
  { es: 'Coordinación de proyectos', en: 'Project coordination' },
];

// ─── Voluntariado ────────────────────────────────────────────────────
export const volunteerWork = [
  {
    title: { es: 'Líder y Servidor Comunitario', en: 'Community Leader and Volunteer' },
    period: '2000 – 2024',
    organization: {
      es: 'Iglesia Católica – Parroquia Jesús Obrero de Temuco',
      en: 'Catholic Church – Jesús Obrero Parish, Temuco',
    },
    description: {
      es: 'Funciones de liderazgo y servicio comunitario, desarrollando habilidades de coordinación, formación y acompañamiento.',
      en: 'Leadership and community service roles, building skills in coordination, training and mentoring.',
    },
    short: {
      es: 'Catequista, Coordinador de Pastoral Juvenil, Animador de Comunidad Eclesial y colaborador en iniciativas diocesanas.',
      en: 'Catechist, Youth Ministry Coordinator, Ecclesial Community Facilitator and collaborator in diocesan initiatives.',
    },
    responsibilities: [
      {
        es: 'Catequista: enseñanza y preparación para sacramentos',
        en: 'Catechist: teaching and sacrament preparation',
      },
      {
        es: 'Coordinador y Asesor de Pastoral Juvenil: organización y guía de actividades para jóvenes',
        en: 'Youth Ministry Coordinator and Advisor: organizing and guiding youth activities',
      },
      {
        es: 'Animador de Comunidad Eclesial: facilitación y liderazgo de grupos comunitarios',
        en: 'Ecclesial Community Facilitator: leading community groups',
      },
      { es: 'Colaborador en iniciativas diocesanas', en: 'Collaborator in diocesan initiatives' },
    ],
  },
];
