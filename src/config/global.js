export default {
  global: {
    componenteFormativo: 'Auditorías a las estrategias de ciberseguridad',
    descripcionCurso:
      'Este componente formativo aborda aspectos clave de las estrategias de seguridad de los activos más importantes para las organizaciones. Con su estudio responsable, el aprendiz se afianzará en lo relacionado con enfoques y cambios para seguridad, prevención de incidentes de ciberseguridad, atención, programas de auditoría y monitoreo efectivo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'La auditoría cibernética',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Técnicas de auditoría',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos de auditoría',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Definiciones y elementos fundamentales de la auditoría',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Consideraciones importantes para una auditoría',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Principios de la auditoría',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Fases de la auditoría',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Pruebas de vulnerabilidad cibernética',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Finalidad de las pruebas',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Pruebas y análisis',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Tipos de pruebas de efectividad',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Procedimiento de ejecución de pruebas de efectividad',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Alcance de las pruebas',
            hash: 't_2_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Procedimiento de ejecución de pruebas de efectividad.',
      referencia:
        'Ministerio de Tecnologías de la Información y Comunicaciones. (2016). Guía metodológica de pruebas de efectividad. ',
      tipo: 'Otro: Guía técnica ',
      link:
        'https://www.mintic.gov.co/gestionti/615/articles-5482_G1_Metodologia_pruebas_efectividad.pdf',
    },
    {
      tema: 'Principios de la auditoría',
      referencia:
        'Organización Internacional de Normalización (2013). Seguridad de la información, ciberseguridad y protección de la privacidad. (ISO 27001). ISO. ',
      tipo: 'Norma técnica',
      link: 'https://www.iso.org/standard/54534.html',
    },
  ],
  glosario: [
    {
      termino: 'Atributo',
      significado:
        'cualquier propiedad o característica que permite distinguir un objeto de otro.',
    },
    {
      termino: 'Auditoría',
      significado:
        'proceso de verificación y/o validación del cumplimiento de una actividad según lo planeado y las directrices estipuladas.',
    },
    {
      termino: 'Auditoría externa',
      significado:
        'auditoría realizada por compañías independientes de la organización o aquellas que son realizadas por personas ajenas a la empresa, contratadas para ello.',
    },
    {
      termino: 'Escala',
      significado:
        'rango de valores organizados con los cuales se evalúa un atributo.',
    },
    {
      termino: 'Evidencia',
      significado: 'información suficiente que respalda alguna acción.',
    },
    {
      termino: 'Indicador',
      significado:
        'unidad que permiten medir el desempeño o desarrollo de alguna acción o de algún control.',
    },
    {
      termino: 'Métrica',
      significado:
        'conjunto de criterios y condiciones necesarios para medir un control o una acción.',
    },
    {
      termino: 'Modelado de amenazas',
      significado:
        'acción que establece la relación entre el atacante y el activo intentando definir el beneficio que puede alcanzar el atacante si logra penetrar el sistema y afectar la información de alguna manera.',
    },
    {
      termino: 'Pruebas de efectividad',
      significado:
        'acciones que se enfocan en establecer una línea base del estado de seguridad de la organización, con el fin de facilitar la identificación de la brecha en la implementación del modelo de seguridad.',
    },
    {
      termino: 'SGSI',
      significado: ' Sistema de Gestión de la Seguridad de la Información.',
    },
  ],
  referencias: [
    {
      referencia: 'Avansis (2020). Auditoría de ciberseguridad. Avansis.',
      link:
        'https://www.avansis.es/ciberseguridad/auditoria-de-ciberseguridad/',
    },
    {
      referencia:
        'Ciberseguridad y Riesgos Digitales (2020). Normas ISO en auditoría informática: Cuáles son las más importantes. Ealde.',
      link: 'https://www.ealde.es/iso-auditoria-informatica/ ',
    },
    {
      referencia:
        'Instituto Nacional de Ciberseguridad (2015). ¿Sabes cómo se mide la seguridad de la información en tu empresa? Incibe.',
      link:
        'https://www.incibe.es/protege-tu-empresa/blog/mide-seguridad-informacion',
    },
    {
      referencia:
        'ISO (2020). Evaluación del desempeño en ISO 27001. (ISO 27001). ISO',
      link: 'https://normaiso27001.es/evaluacion-del-desempeno-en-iso-27001/ ',
    },
    {
      referencia:
        'ISO (2020). Fase 8 auditoría interna según ISO 27001. (ISO 27001). ISO',
      link:
        'https://normaiso27001.es/fase-8-auditoría-interna-segun-iso-27001/ ',
    },
    {
      referencia:
        'ISO (2018). Directrices para la auditoría de los sistemas de gestión. (ISO 19011). ISO.',
      link:
        'https://normaiso27001.es/fase-8-auditoría-interna-segun-iso-27001/ ',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y Comunicaciones. (2016). Guía de auditoría. Ministerio de Tecnologías de la Información y Comunicaciones.',
      link:
        'https://www.mintic.gov.co/gestionti/615/articles-5482_G15_Auditoria.pdf ',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y Comunicaciones. (2016). Guía metodológica de pruebas de efectividad. Ministerio de Tecnologías de la Información y Comunicaciones.',
      link:
        'https://www.mintic.gov.co/gestionti/615/articles-5482_G1_Metodologia_pruebas_efectividad.pdf',
    },
    {
      referencia:
        'Organización Internacional de Normalización (ISO, 2013). Tecnología de la información - Técnicas de seguridad - Sistemas de gestión de seguridad de la información - Requisitos.',
      link: 'https://www.iso.org/standard/54534.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable Equipo Desarrollo Curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ronald Alexander Vacca Ascanio',
        cargo: 'Experto Temático',
        centro: 'Centro - Regional Norte de Santander ',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador Instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander ',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora Metodológica ',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yerson Fabian Zarate Saavedra',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Sandra Milena Triana Pinto',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
