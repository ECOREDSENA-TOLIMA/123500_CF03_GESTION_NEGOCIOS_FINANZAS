export default {
  global: {
    componenteFormativo: 'Estrategias de planeación y evaluación',
    descripcionCurso:
      'Las organizaciones pueden estar satisfaciendo necesidades inmediatas, sin embargo, no están asignando tiempo para predecir estratégicamente cuáles serán las necesidades de sus clientes en el futuro. Por ello, los colaboradores que tienen un alto desempeño o aquellos con un alto potencial son indispensables para la organización, ya que puedan abordar de manera más eficaz los objetivos y necesidades comerciales, a fin de mejorar el rendimiento a largo plazo, mientras que otros ven el talento como todos en una organización.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    fondoBannerInterno: require('@/assets/curso/portada/fondo-banner-interno.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        titulo: 'Proceso administrativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Políticas organizacionales',
            hash: 'politicas',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Gestión del talento humano',
            hash: 'gestion',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Gestión comercial',
            hash: 'comercial',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Planes tácticos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Planes operativos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Monitoreo y evaluación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Indicadores de gestión',
            hash: 'indicadores',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Acciones de mejora',
            hash: 'acciones',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
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
  referencias: [
    {
      referencia:
        'Luna, A. (2015). Proceso administrativo. Grupo Editorial Patria.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/39415?page=59',
    },
    {
      referencia:
        'Reinoso, J. y Uribe, M. (2009). Los indicadores de gestión y su relación con la cultura organizacional. Sello Editorial Universidad del Tolima.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/71131?page=17',
    },
    {
      referencia:
        'Taylor, A. y Feenstra, R. (2015). Comercio internacional. Editorial Reverté.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/46774?page=43',
    },
    {
      referencia:
        'Torres, Z. (2015). Planeación y control. Grupo Editorial Patria.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/39408?page=211',
    },
  ],
  glosario: [
    {
      termino: 'Balanza comercial',
      significado:
        'es la diferencia entre el valor total de sus exportaciones y el valor total de sus importaciones.',
    },
    {
      termino: 'Cultura',
      significado:
        'estudios de las organizaciones y de gestión que describen la psicología, las actitudes, experiencias, creencias y valores (personales y culturales) de una organización.',
    },
    {
      termino: 'Exportación',
      significado:
        'la venta de un bien o servicio a otro país, es decir, es un producto vendido por un país a otro.',
    },
    {
      termino: 'Expectativas',
      significado:
        'esperanza o posibilidad de conseguir una cosa. No actuar ni tomar ninguna determinación hasta ver lo que sucede.',
    },
    {
      termino: 'FODA',
      significado:
        'es una herramienta de estudio de la situación de una empresa analizando sus características internas y su situación externa en una matriz cuadrada.',
    },
    {
      termino: 'Importación',
      significado:
        'la compra de un bien o servicio procedente de otro país, es decir, es un producto comprado a otro país.',
    },
    {
      termino: 'Indicadores',
      significado:
        'datos o información que sirve para conocer o valorar las características y la intensidad de un hecho o para determinar su evolución futura.',
    },
    {
      termino: 'Manual de funciones',
      significado:
        'instrumento o herramienta de trabajo que contiene el conjunto de funciones, responsabilidades, competencias laborales y normas que desarrolla cada trabajador.',
    },
    {
      termino: 'Métodos de evaluación de desempeño',
      significado:
        'técnica que estudia los procesos de una empresa y cómo se pueden realizar de manera óptima por parte del empleado.',
    },
    {
      termino: 'Producto interno bruto',
      significado:
        'es el valor de los bienes y servicios finales producidos durante un año.',
    },
    {
      termino: 'Plan',
      significado:
        'modelo sistemático que detalla qué tareas se deben llevar a cabo para alcanzar un objetivo, para lo cual se establecen metas y tiempos de ejecución.',
    },
    {
      termino: 'Procedimiento',
      significado:
        'es un conjunto de acciones u operaciones que tienen que realizarse de la misma forma para obtener siempre el mismo resultado bajo las mismas circunstancias.',
    },
    {
      termino: 'Reclutamiento',
      significado:
        'proceso de atraer individuos oportunamente, en suficiente número y con los debidos atributos, y estimularlos para que soliciten empleo en la organización.',
    },
    {
      termino: 'Toma de decisiones',
      significado:
        'cubre cómo se involucran los miembros del grupo en la elección de alternativas de acción que afectan globalmente el trabajo y se concede libertad para acometer las tareas y solucionar los problemas cotidianos; incluye la pertinencia de las decisiones y la delegación entre niveles jerárquicos.',
    },
  ],
  complementario: [
    {
      tema: 'Proceso administrativo',
      referencia:
        'Luna, A. (2015). Proceso administrativo. Grupo Editorial Patria. ',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/39415?as_all=proceso__administrativo&as_all_op=unaccent__icontains&prev=as ',
    },
    {
      tema: 'Monitoreo y evaluación ',
      referencia:
        'Rodríguez, E. (2016). Planificación estratégica. Fundamentos y herramientas de actuación. Editorial Brujas.',
      tipo: 'Libro',
      link:
        'https://www-digitaliapublishing-com.bdigital.sena.edu.co/visor/41904 ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'María Camila García Santamaría',
        cargo: 'Líder del equipo',
        centro: 'Dirección general',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Fabiola Sierra Sarmiento',
        cargo: 'Experta temática',
        centro: 'CIES Regional Norte de Santander',
      },
      {
        nombre: 'Leydy Jhuliana Jaramillo Mejía ',
        cargo: 'Diseñadora instruccional ',
        centro: 'Centro de Gestión Industrial Regional Distrito Capital',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de Gestión Industrial Regional Distrito Capital',
      },
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabián Castaño Pérez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jorge Enrique Haylock Calderín',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Eugenia Mejía López',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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
