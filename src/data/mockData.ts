import type { Center, Lab } from '../types';

export const researchCenters: Center[] = [
  {
    id: 'c1',
    name: 'Centro de Aguas y Saneamiento Ambiental',
  description: 'Centro dedicado al estudio y mejora de la calidad del agua, los sistemas de saneamiento y la gestión sostenible de recursos hídricos urbanos y rurales.',
    logo: 'droplet',
  history: 'Funciona en la UMSS desde hace más de dos décadas, apoyando proyectos de investigación y consultoría sobre agua potable, aguas residuales, saneamiento básico y resiliencia hídrica comunitaria.',
  mission: 'Generar estudios, propuestas y tecnologías que mejoren la gestión del agua y el saneamiento en la región, articulando a investigadores, gobiernos locales y organizaciones sociales.',
  usefulInfo: 'Horario de atención: lunes a viernes de 08:00 a 17:00. Servicios: análisis básicos de calidad de agua, apoyo a proyectos locales y asesoría técnica en saneamiento.',
    publications: [
      {
        title: 'Evaluación de la calidad de agua en sistemas rurales de Cochabamba',
        authors: 'E. López, M. Vargas',
        year: 2023,
        journal: 'Revista Boliviana de Recursos Hídricos',
        abstract: 'Analiza parámetros fisicoquímicos y microbiológicos en sistemas rurales de abastecimiento para proponer estrategias de mejora en la región de Cochabamba.'
      },
      {
        title: 'Tecnologías de saneamiento ecológico para comunidades andinas',
        authors: 'R. Aguilar, P. Quispe',
        year: 2022,
        journal: 'Ingeniería Ambiental UMSS',
        abstract: 'Evalúa soluciones de saneamiento ecológico de bajo costo implementadas en comunidades andinas, destacando aprendizajes y resultados de adopción.'
      },
      {
        title: 'Gestión integrada de cuencas urbanas en ciudades intermedias',
        authors: 'L. Céspedes, V. Morales',
        year: 2021,
        journal: 'Cuadernos de Investigación en Agua',
        abstract: 'Presenta un modelo de gestión participativa para cuencas urbanas que combina monitoreo, gobernanza y mitigación de riesgos hídricos.'
      }
    ],
    contact: {
      phone: '+591 4 0000001',
      email: 'aguas.saneamiento@umss.edu.bo',
      address: 'Campus central UMSS, Cochabamba'
    },
    popularity: 80
  },
  {
    id: 'c2',
    name: 'Centro de Alimentos y Productos Naturales',
  description: 'Investiga la calidad, procesamiento y aprovechamiento de alimentos y productos naturales, impulsando cadenas productivas saludables y sostenibles.',
    logo: 'utensils',
  history: 'Trabaja con productores, asociaciones y proyectos de valor agregado a alimentos bolivianos, acompañando procesos de innovación y certificación de calidad.',
  mission: 'Apoyar la seguridad alimentaria y el desarrollo de productos con valor nutricional y comercial mediante investigación aplicada, transferencia tecnológica y capacitación continua.',
  usefulInfo: 'Horario de atención: lunes a viernes de 08:30 a 16:30. Servicios: análisis fisicoquímicos de alimentos, asesoramiento técnico a pymes y programas de capacitación en inocuidad.',
    publications: [
      {
        title: 'Caracterización nutricional de snacks a base de quinua',
        authors: 'G. Rojas, L. Salinas',
        year: 2024,
        journal: 'Alimentos y Desarrollo',
        abstract: 'Estudia propiedades nutricionales y aceptación sensorial de snacks elaborados con quinua para promover alternativas saludables.'
      },
      {
        title: 'Fermentaciones controladas para bebidas funcionales andinas',
        authors: 'C. Ponce, D. Herrera',
        year: 2022,
        journal: 'Journal de Tecnología Alimentaria',
        abstract: 'Explora cultivos iniciadores autóctonos y parámetros fermentativos para desarrollar bebidas funcionales con identidad andina.'
      }
    ],
    contact: {
      phone: '+591 4 0000002',
      email: 'alimentos.naturales@umss.edu.bo',
      address: 'Facultad de Ciencias y Tecnología, UMSS'
    },
    popularity: 75
  },
  {
    id: 'c3',
    name: 'Centro de Biodiversidad y Genética',
  description: 'Centro orientado al estudio de la biodiversidad boliviana y sus recursos genéticos, con énfasis en conservación, bioprospección y educación ambiental.',
    logo: 'leaf',
  history: 'Desarrolla proyectos relacionados con especies nativas, conservación de ecosistemas estratégicos y recuperación de saberes locales vinculados a la biodiversidad.',
  mission: 'Contribuir al conocimiento y uso responsable de la biodiversidad del país mediante investigación científica, manejo participativo y herramientas de genética molecular.',
  usefulInfo: 'Horario de atención: lunes a viernes de 09:00 a 17:00. Servicios: inventarios biológicos, acceso a colecciones de referencia y apoyo metodológico a tesis de grado.',
    publications: [
      {
        title: 'Inventario florístico de bosques montanos en el trópico de Cochabamba',
        authors: 'M. Terrazas, Y. Mamani',
        year: 2023,
        journal: 'Biodiversidad Andina',
        abstract: 'Documenta la composición florística y patrones de endemismo de bosques montanos para orientar planes de conservación regional.'
      },
      {
        title: 'Análisis genético de variedades nativas de papa',
        authors: 'S. Flores, P. Huayta',
        year: 2021,
        journal: 'Revista de Recursos Genéticos',
        abstract: 'Evalúa diversidad genética de variedades nativas de papa mediante marcadores moleculares para fortalecer su conservación in situ.'
      }
    ],
    contact: {
      phone: '+591 4 0000003',
      email: 'biodiversidad.genetica@umss.edu.bo',
      address: 'Campus UMSS, Cochabamba'
    },
    popularity: 78
  },
  {
    id: 'c4',
    name: 'Centro de Biotecnología',
  description: 'Aplica herramientas de biotecnología en agricultura, salud y medio ambiente, integrando plataformas de laboratorio, transferencia tecnológica y formación especializada.',
    logo: 'microscope',
  history: 'Integra a docentes y estudiantes de distintas áreas biológicas y de ingeniería, consolidando laboratorios de cultivo de tejidos, biología molecular y bioinformática aplicada.',
  mission: 'Desarrollar proyectos biotecnológicos aplicados a necesidades locales con impacto en productividad agrícola, salud pública y mitigación ambiental.',
  usefulInfo: 'Horario de atención: lunes a viernes de 08:00 a 18:00. Servicios: laboratorios equipados para prácticas, acompañamiento a proyectos de investigación y asesorías en bioprocesos.',
    publications: [
      {
        title: 'Micropropagación de especies forestales para restauración',
        authors: 'F. Quiroga, T. Maldonado',
        year: 2024,
        journal: 'Biotecnología Aplicada',
        abstract: 'Describe protocolos de micropropagación para especies forestales nativas empleadas en programas de restauración ecológica.'
      },
      {
        title: 'Uso de marcadores moleculares en cultivos de alto valor',
        authors: 'I. Rejas, V. Cárdenas',
        year: 2022,
        journal: 'Revista Latinoamericana de Genómica',
        abstract: 'Analiza la eficiencia de marcadores moleculares para selección temprana de rasgos agronómicos en cultivos de alto valor económico.'
      }
    ],
    contact: {
      phone: '+591 4 0000004',
      email: 'biotecnologia@umss.edu.bo',
      address: 'Facultad de Ciencias y Tecnología, UMSS'
    },
    popularity: 82
  },
  {
    id: 'c5',
    name: 'Centro de Mejoramiento de la Enseñanza de la Matemática e Informática',
  description: 'Mejora la enseñanza de la matemática y la informática en distintos niveles educativos mediante investigación pedagógica y acompañamiento a docentes.',
    logo: 'calculator',
  history: 'Realiza talleres, cursos y apoyo a docentes en metodologías activas desde hace más de quince años, articulando redes académicas nacionales.',
  mission: 'Fortalecer las competencias docentes y el aprendizaje de estudiantes en matemática e informática a través de recursos didácticos innovadores y asesoramiento curricular.',
  usefulInfo: 'Horario de atención: lunes a viernes de 08:30 a 17:30. Servicios: cursos cortos, seminarios especializados, préstamo de materiales y asesoría pedagógica.',
    publications: [
      {
        title: 'Modelos didácticos para el aprendizaje de álgebra en secundaria',
        authors: 'L. Mercado, R. Pérez',
        year: 2023,
        journal: 'Educación Matemática Hoy',
        abstract: 'Propone modelos didácticos basados en resolución de problemas y recursos digitales para fortalecer el aprendizaje de álgebra.'
      }
    ],
    contact: {
      phone: '+591 4 0000005',
      email: 'cemei@umss.edu.bo',
      address: 'UMSS, Cochabamba'
    },
    popularity: 77
  },
  {
    id: 'c6',
    name: 'Centro de Tecnología Agroindustrial',
  description: 'Apoya proyectos de transformación y tecnología aplicada a productos agropecuarios, promoviendo innovación en cadenas de valor rurales.',
    logo: 'factory',
  history: 'Trabaja con productores, cooperativas y pequeñas empresas en procesos agroindustriales, brindando asistencia técnica desde 2005.',
  mission: 'Mejorar procesos de producción y transformación de productos agropecuarios mediante investigación aplicada, formación técnica y acompañamiento a emprendimientos.',
  usefulInfo: 'Horario de atención: lunes a viernes de 08:00 a 16:00. Servicios: asesoría técnica, acompañamiento a proyectos piloto y laboratorios de control de calidad.',
    publications: [
      {
        title: 'Optimización de procesos de deshidratado de frutas tropicales',
        authors: 'A. Céspedes, F. Cuéllar',
        year: 2022,
        journal: 'Tecnología Agroindustrial',
        abstract: 'Optimiza parámetros de deshidratado para frutas tropicales bolivianas con el fin de mejorar calidad y vida útil.'
      },
      {
        title: 'Valor agregado en derivados lácteos artesanales',
        authors: 'M. Ávila, D. Zamora',
        year: 2021,
        journal: 'Agroindustria en Desarrollo',
        abstract: 'Propone buenas prácticas y formulaciones para derivados lácteos artesanales orientados a mercados especializados.'
      }
    ],
    contact: {
      phone: '+591 4 0000006',
      email: 'tec.agroindustrial@umss.edu.bo',
      address: 'Campus UMSS, Cochabamba'
    },
    popularity: 74
  },
  {
    id: 'c7',
    name: 'Centro Universitario de Investigaciones en Energías',
  description: 'Investiga y desarrolla soluciones en energías convencionales y alternativas, impulsando proyectos de eficiencia energética y renovables.',
    logo: 'bolt',
  history: 'Incluye proyectos de energía solar, eficiencia energética y redes eléctricas, colaborando con municipios y empresas distribuidoras de la región.',
  mission: 'Contribuir a un uso más eficiente y sostenible de la energía en Bolivia mediante investigación aplicada, formación especializada y asistencia técnica.',
  usefulInfo: 'Horario de atención: lunes a viernes de 09:00 a 18:00. Servicios: mediciones energéticas, asesoría en sistemas solares y diseño de proyectos renovables.',
    publications: [
      {
        title: 'Diseño de microredes solares en zonas periurbanas',
        authors: 'H. Bustos, C. Camacho',
        year: 2024,
        journal: 'Energías Renovables en Bolivia',
        abstract: 'Desarrolla criterios de diseño para microredes solares destinadas a barrios periurbanos con baja cobertura eléctrica.'
      },
      {
        title: 'Auditorías energéticas en edificios universitarios',
        authors: 'R. Soria, E. Castro',
        year: 2022,
        journal: 'Ingeniería Energética UMSS',
        abstract: 'Presenta resultados de auditorías energéticas integrales realizadas en edificios universitarios y recomendaciones de eficiencia.'
      }
    ],
    contact: {
      phone: '+591 4 0000007',
      email: 'energias@umss.edu.bo',
      address: 'Facultad de Ingeniería Eléctrica, UMSS'
    },
    popularity: 81
  },
  {
    id: 'c8',
    name: 'Laboratorio de Geotecnia',
  description: 'Centro/laboratorio para ensayos de suelos y materiales de construcción, especializado en caracterización geotécnica para proyectos civiles.',
    logo: 'mountain',
  history: 'Apoya proyectos de ingeniería civil relacionados con mecánica de suelos desde su creación en la década de 1990, atendiendo consultorías y trabajos de grado.',
  mission: 'Brindar soporte técnico a estudios de estabilidad y diseño de obras civiles mediante ensayos controlados, interpretación de resultados y recomendaciones constructivas.',
  usefulInfo: 'Horario de atención: lunes a viernes de 08:00 a 15:00. Servicios: ensayos de suelos, informes técnicos y alquiler de equipos para prácticas académicas.',
    publications: [
      {
        title: 'Ensayos de consolidación en suelos arcillosos del valle central',
        authors: 'N. Paredes, V. Aguilera',
        year: 2023,
        journal: 'Revista de Geotecnia Aplicada',
        abstract: 'Presenta resultados de ensayos de consolidación en suelos arcillosos locales y recomendaciones para diseños de cimentaciones.'
      }
    ],
    contact: {
      phone: '+591 4 0000008',
      email: 'lab.geotecnia@umss.edu.bo',
      address: 'Facultad de Ingeniería Civil, UMSS'
    },
    popularity: 70
  },
  {
    id: 'c9',
    name: 'Laboratorio de Hidráulica',
  description: 'Centro utilizado para prácticas y estudios de flujo de agua en canales y tuberías, con infraestructura para simulaciones hidráulicas a escala.',
    logo: 'tornado',
  history: 'Sirve de apoyo a cursos de hidráulica e hidrología y participa en proyectos de infraestructura hidráulica regional desde hace más de quince años.',
  mission: 'Permitir experimentos avanzados sobre comportamiento del agua en diferentes condiciones, impulsando investigación y transferencia de conocimientos a instituciones públicas.',
  usefulInfo: 'Horario de atención: lunes a viernes de 08:30 a 17:00. Servicios: módulos didácticos, equipos de medición y apoyo a proyectos de diseño de obras hidráulicas.',
    publications: [
      {
        title: 'Modelación de pérdidas de energía en canales trapezoidales',
        authors: 'J. Arce, P. Rivero',
        year: 2022,
        journal: 'Hidráulica Andina',
        abstract: 'Modela pérdidas de energía en canales trapezoidales mediante ensayos físicos y simulaciones hidráulicas para optimizar diseños.'
      },
      {
        title: 'Control de caudales en redes presurizadas universitarias',
        authors: 'E. López, M. Irahola',
        year: 2021,
        journal: 'Ingeniería Civil UMSS',
        abstract: 'Analiza estrategias de control de caudales en redes presurizadas internas de campus universitarios para reducir pérdidas y mejorar servicio.'
      }
    ],
    contact: {
      phone: '+591 4 0000009',
      email: 'lab.hidraulica@umss.edu.bo',
      address: 'Facultad de Ingeniería Civil, UMSS'
    },
    popularity: 72
  },
  {
    id: 'c10',
    name: 'Programa de Desarrollo de Tecnologías de Fabricación',
  description: 'Programa/centro orientado a procesos de manufactura y tecnologías de producción, impulsando innovación industrial y prototipado avanzado.',
    logo: 'factory',
  history: 'Apoya trabajos en mecanizado, diseño de procesos y prototipado desde su creación en 2003, colaborando con empresas y redes académicas.',
  mission: 'Mejorar las capacidades de fabricación en entornos industriales y académicos mediante transferencia tecnológica, asesorías y formación especializada.',
  usefulInfo: 'Horario de atención: lunes a viernes de 08:00 a 18:00. Servicios: acceso a talleres de fabricación, asesoría en procesos y apoyo a prototipos estudiantiles.',
    publications: [
      {
        title: 'Diseño de celdas robotizadas para manufactura local',
        authors: 'J. Mallea, A. Rivas',
        year: 2024,
        journal: 'Procesos y Fabricación',
        abstract: 'Expone una metodología para diseñar celdas robotizadas adaptadas a pymes locales, evaluando costos y retorno de inversión.'
      },
      {
        title: 'Uso de impresión 3D en prototipado de piezas industriales',
        authors: 'T. Franco, M. Soria',
        year: 2023,
        journal: 'Ingeniería Mecánica Actual',
        abstract: 'Analiza el impacto de la impresión 3D en el prototipado rápido de piezas industriales y su integración en talleres universitarios.'
      }
    ],
    contact: {
      phone: '+591 4 0000010',
      email: 'fabricacion@umss.edu.bo',
      address: 'Facultad de Ingeniería Mecánica, UMSS'
    },
    popularity: 74
  },
  {
    id: 'c11',
    name: 'Programa Elektro',
  description: 'Programa relacionado con proyectos en ingeniería eléctrica y electrónica, integrando laboratorios de automatización, control y electrónica de potencia.',
    logo: 'zap',
  history: 'Incluye proyectos de automatización, control y sistemas eléctricos desarrollados junto a empresas, municipalidades y comunidades educativas.',
  mission: 'Apoyar el desarrollo de soluciones eléctricas y electrónicas de aplicación práctica, fortaleciendo competencias profesionales y promoviendo innovación tecnológica.',
  usefulInfo: 'Horario de atención: lunes a viernes de 09:00 a 18:00. Servicios: acompañamiento a proyectos estudiantiles, convenios con instituciones y laboratorios especializados.',
    publications: [
      {
        title: 'Sistemas de monitoreo inteligente para redes eléctricas',
        authors: 'B. Torrez, P. Rocabado',
        year: 2024,
        journal: 'Electrotecnia y Control',
        abstract: 'Propone una arquitectura de monitoreo inteligente para redes eléctricas utilizando sensores IoT y analítica en tiempo real.'
      }
    ],
    contact: {
      phone: '+591 4 0000011',
      email: 'elektro@umss.edu.bo',
      address: 'Facultad de Ingeniería Eléctrica, UMSS'
    },
    popularity: 76
  },
 
  {
    id: 'c13',
    name: 'Incubadora de Empresas de Base Tecnológica',
  description: 'Apoya a estudiantes y egresados en el desarrollo de emprendimientos tecnológicos con enfoque en soluciones digitales y hardware aplicado.',
    logo: 'rocket',
  history: 'Acompaña ideas de negocio desde el prototipo hasta la validación inicial mediante mentorías, acceso a redes de inversión y programas de incubación intensiva.',
  mission: 'Fomentar el emprendimiento de base tecnológica dentro de la comunidad universitaria, generando capacidades empresariales y articulando alianzas estratégicas.',
  usefulInfo: 'Horario de atención: lunes a viernes de 09:00 a 19:00. Servicios: mentorías personalizadas, espacios de coworking y talleres de validación de modelos de negocio.',
    publications: [
      {
        title: 'Metodologías de preincubación para startups universitarias',
        authors: 'C. Ledezma, F. Ortega',
        year: 2023,
        journal: 'Emprendimiento Tecnológico',
        abstract: 'Comparte metodologías de preincubación aplicadas en la UMSS y resultados de emprendimientos tecnológicos acompañados.'
      }
    ],
    contact: {
      phone: '+591 4 0000013',
      email: 'incubadora.tecnologica@umss.edu.bo',
      address: 'Campus central UMSS'
    },
    popularity: 79
  },
  {
    id: 'c14',
    name: 'Centro de Investigación en Tecnología Aplicada',
  description: 'Proyectos de tecnología aplicada en software, hardware y procesos, articulando equipos multidisciplinarios para resolver retos públicos y privados.',
    logo: 'cpu',
  history: 'Integra docentes y estudiantes de ingeniería para resolver problemas prácticos desde 2010, incubando soluciones que han escalado a alianzas con empresas.',
  mission: 'Transformar ideas en soluciones tecnológicas útiles para instituciones y empresas, promoviendo investigación aplicada, prototipado ágil y transferencia tecnológica.',
  usefulInfo: 'Horario de atención: lunes a viernes de 08:00 a 18:30. Servicios: apoyo a proyectos integradores, mentorías técnicas y acceso a laboratorios de software y hardware.',
    publications: [
      {
        title: 'Integración de sensores IoT en procesos agroindustriales',
        authors: 'S. Gutiérrez, R. Salazar',
        year: 2024,
        journal: 'Tecnología Aplicada',
        abstract: 'Integra sensores IoT en cadenas agroindustriales para monitorear variables críticas y mejorar la toma de decisiones.'
      },
      {
        title: 'Plataformas de software para gestión académica universitaria',
        authors: 'K. Villarroel, N. Ríos',
        year: 2022,
        journal: 'Innovación Digital',
        abstract: 'Describe el desarrollo e implementación de plataformas de software para gestionar procesos académicos en universidades públicas.'
      }
    ],
    contact: {
      phone: '+591 4 0000014',
      email: 'cita@umss.edu.bo',
      address: 'Facultad de Ciencias y Tecnología, UMSS'
    },
    popularity: 83
  }
];

export const laboratories: Lab[] = [
  {
    id: 'l1',
    name: 'Laboratorio de Geotecnia',
  description: 'Laboratorio para ensayos de suelos y materiales de construcción con equipamiento actualizado para caracterización geomecánica.',
    logo: 'mountain',
  history: 'Apoya proyectos de ingeniería civil relacionados con mecánica de suelos desde hace más de veinte años, brindando soporte a consultoras y programas académicos.',
  mission: 'Brindar soporte técnico a estudios de estabilidad y diseño de obras civiles mediante ensayos especializados, interpretación de resultados y recomendaciones constructivas.',
  usefulInfo: 'Horario de atención: lunes a viernes de 08:00 a 16:30. Servicios: ensayos de laboratorio, supervisión de prácticas y asistencia para informes geotécnicos.',
    publications: [
      {
        title: 'Determinación de parámetros de resistencia en suelos cohesivos',
        authors: 'L. Andrade, C. Villca',
        year: 2023,
        journal: 'Geotecnia y Construcción',
        abstract: 'Caracteriza parámetros de resistencia en suelos cohesivos mediante ensayos triaxiales y direct shear para obras civiles.'
      },
      {
        title: 'Monitoreo de asentamientos en obras geotécnicas',
        authors: 'S. Velasco, M. Cardozo',
        year: 2022,
        journal: 'Ingeniería Civil UMSS',
        abstract: 'Presenta técnicas de instrumentación para monitorear asentamientos en obras geotécnicas y su impacto estructural.'
      }
    ],
    contact: {
      phone: '+591 4 0000101',
      email: 'lab.geotecnia@umss.edu.bo',
      address: 'Facultad de Ingeniería Civil, UMSS'
    },
    popularity: 70
  },
  {
    id: 'l2',
    name: 'Laboratorio de Hidráulica',
  description: 'Laboratorio utilizado para prácticas y estudios de flujo de agua en canales y tuberías, con bancadas experimentales y sistemas de control automatizado.',
    logo: 'tornado',
  history: 'Sirve de apoyo a cursos de hidráulica e hidrología y contribuye a proyectos de modernización de redes de agua desde su fundación en 2001.',
  mission: 'Permitir experimentos y modelaciones avanzadas sobre comportamiento del agua en diferentes condiciones, facilitando soluciones para infraestructura urbana y rural.',
  usefulInfo: 'Horario de atención: lunes a viernes de 08:30 a 17:30. Servicios: módulos didácticos, calibración de equipos y asesoría para proyectos hidráulicos.',
    publications: [
      {
        title: 'Evaluación de turbulencia en modelos físicos de vertederos',
        authors: 'G. Reyes, E. Guzmán',
        year: 2024,
        journal: 'Hidráulica Andina',
        abstract: 'Estudia patrones de turbulencia en modelos físicos de vertederos para optimizar diseños hidráulicos a escala real.'
      }
    ],
    contact: {
      phone: '+591 4 0000102',
      email: 'lab.hidraulica@umss.edu.bo',
      address: 'Facultad de Ingeniería Civil, UMSS'
    },
    popularity: 72
  },
  {
    id: 'l3',
    name: 'Programa de Desarrollo de Tecnologías de Fabricación',
  description: 'Programa orientado a procesos de manufactura y tecnologías de producción con énfasis en automatización, diseño y prototipado rápido.',
    logo: 'factory',
  history: 'Apoya trabajos en mecanizado, diseño de procesos y prototipado desde 2005, integrando alianzas con industrias locales y proyectos estudiantiles.',
  mission: 'Mejorar las capacidades de fabricación en entornos industriales y académicos mediante acceso a laboratorios especializados, capacitación y consultoría.',
  usefulInfo: 'Horario de atención: lunes a viernes de 08:00 a 18:00. Servicios: uso de maquinaria CNC, asesoría en procesos y acompañamiento a prototipos.',
    publications: [
      {
        title: 'Implementación de celdas de manufactura flexible',
        authors: 'R. Caballero, J. Uzquiano',
        year: 2023,
        journal: 'Manufactura Avanzada',
        abstract: 'Describe el despliegue de celdas de manufactura flexible en líneas piloto para reducir tiempos de cambio y aumentar la personalización.'
      }
    ],
    contact: {
      phone: '+591 4 0000103',
      email: 'fabricacion@umss.edu.bo',
      address: 'Facultad de Ingeniería Mecánica, UMSS'
    },
    popularity: 74
  },
  {
    id: 'l4',
    name: 'Programa Elektro',
  description: 'Programa relacionado con proyectos en ingeniería eléctrica y electrónica, abarcando automatización, robótica educativa y sistemas embebidos.',
    logo: 'zap',
  history: 'Incluye proyectos de automatización, control y sistemas eléctricos desarrollados con empresas, municipios y clubes tecnológicos universitarios.',
  mission: 'Apoyar el desarrollo de soluciones eléctricas y electrónicas de aplicación práctica, potenciando competencias profesionales y acompañando innovación estudiantil.',
  usefulInfo: 'Horario de atención: lunes a viernes de 09:00 a 19:00. Servicios: acompañamiento a proyectos estudiantiles, capacitación en automatización y acceso a laboratorios especializados.',
    publications: [
      {
        title: 'Control adaptativo de sistemas mecatrónicos educativos',
        authors: 'E. Claure, T. Poma',
        year: 2024,
        journal: 'Electrónica Aplicada',
        abstract: 'Presenta un enfoque de control adaptativo para kits mecatrónicos educativos que mejora la comprensión de conceptos avanzados.'
      }
    ],
    contact: {
      phone: '+591 4 0000104',
      email: 'elektro@umss.edu.bo',
      address: 'Facultad de Ingeniería Eléctrica, UMSS'
    },
    popularity: 76
  }
];