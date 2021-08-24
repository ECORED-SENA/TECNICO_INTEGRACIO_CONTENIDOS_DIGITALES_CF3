export default {
  global: {
    componenteFormativo: 'Fundamentos de la animación',
    descripcionCurso:
      'Elementos estáticos, inanimados, que se presentan en secuencias rápidas que cobran “vida”, cuentan historias y transmiten sentimientos, eso es la animación. En la actualidad la animación es un negocio que mueve millones de dólares al año, a nivel mundial se destacan la industria americana, japonesa y europea. Por lo anterior, en el presente componente se abordan los elementos centrales para la comprensión del tema.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        titulo: 'Historia de la animación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Técnicas de animación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de animación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Principios de la animación',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Imagen digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Formatos digitales',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Herramientas digitales',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Pensamiento innovador y tendencias de la animación',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
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
      referencia: 'Adobe. (s.f.). Guía del usuario de After Effects. ',
      link: 'https://adobe.ly/2Qsctkm',
    },
    {
      referencia: 'Adobe. (s.f.). Adobe After Effects. ',
      link: 'https://adobe.ly/3tNC45I',
    },
    {
      referencia: 'Autodesk. (s.f.). ',
      link: 'https://latinoamerica.autodesk.com/',
    },
    {
      referencia:
        'Cortés, J. (2020, 14 de octubre). ¿Qué es la animación? Tipos y técnicas. Notodoanimacion. ',
      link:
        'https://www.notodoanimacion.es/que-es-la-animacion-tipos-y-tecnicas/',
    },
    {
      referencia:
        'Díaz Aguilar, A. M. (2014). Lenguajes audiovisual y escrito: Una propuesta educativa para su manejo integral. En UNID (ed.), Experiencias que transforman: XV años conectando vidas (pp. 5-15). UNID.',
    },
    {
      referencia:
        'Fernández Diez, F. y Barco, C. (2009). Producción cinematográfica. Del proyecto al producto. Funiber.',
    },
    {
      referencia:
        'Information & Communication Technology. (s.f.). Animation Adobe Animated CC 2020 Level 1 (English version): Animation. ',
      link:
        'https://books.google.com.co/books?id=GFzdDwAAQBAJ&printsec=frontcover&hl=es&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false',
    },
    {
      referencia:
        'Kerlow, I. (2009). The art of 3D Computer: animation and effects (4th ed.). Wiley.',
    },
    {
      referencia:
        'Real Academia Española. (2020). Componer. En Diccionario de la lengua española. ',
      link: 'https://dle.rae.es/componer',
    },
    {
      referencia:
        'Sánchez Navarro, J. (2006). Narrativa audiovisual. Editorial UOC.',
    },

    {
      referencia: 'Universidad Siglo 21. (2019). Interfaz de After Effects. ',
      link:
        'https://pensamientodigital.files.wordpress.com/2019/03/interfaz.pdf',
    },
    {
      referencia:
        'Velázquez Perea, L. E. (2018). Animación de gráficos con Adobe Animate CC: ejercicios prácticos. ',
      link: 'https://apple.co/3gzMHVP',
    },
  ],
  glosario: [
    {
      termino: 'Animatic',
      significado:
        'Es la versión animada del storyboard. No debe ser tan minuciosa, solo para detallar lo que no se pudo ver en el paso anterior.',
    },
    {
      termino: 'Animation',
      significado:
        'Proceso utilizado por uno o más animadores para dar la sensación de movimiento a imágenes o dibujos o a otro tipo de objetos inanimados.',
    },
    {
      termino: 'Compositing',
      significado:
        'Dentro de una animación existen diversas capas, el objetivo del compositing es agruparlas todas para convertirlas en una pieza individual donde todas las escenas trabajen en conjunto.',
    },
    {
      termino: 'Concept art',
      significado: 'Establece el estilo visual dentro de la animación.',
    },
    {
      termino: 'Frame',
      significado: 'Imagen en una sucesión de imágenes.',
    },
    {
      termino: 'Keyframes/Keys',
      significado:
        'Son las posiciones más importantes dentro de una escena. Dentro de un software son los puntos que estableces en el timeline para posicionar cambios de posición, escala, etc.',
    },
    {
      termino: 'Layout',
      significado:
        'Etapa en la cual se determina la posición de los personajes, se planifica la puesta en escena y los tiempos así como el ángulo y la posición de la cámara, de dónde proviene la luz y cómo se proyectan las sombras.',
    },
    {
      termino: 'Pixilación',
      significado:
        'Es una variante del stop motion, con la salvedad de que lo que se usan son personas.',
    },
    {
      termino: 'Postproducción',
      significado:
        'Etapa posterior a la producción la cual incluye edición, color, luminosidad y el contraste de los diferentes planos, efectos especiales.',
    },
    {
      termino: 'Preproducción',
      significado:
        'Etapa anterior a la producción en la cual se prepara el material: diseño, color script, animatic, storyboard.',
    },
    {
      termino: 'Producción',
      significado:
        'Etapa en la cual se realiza el proyecto: animación, iluminación, render.',
    },
    {
      termino: 'Rotoscopia',
      significado:
        'Técnica que consiste en reemplazar los fotogramas de una filmación real por dibujos calcados sobre cada fotograma.',
    },
    {
      termino: 'Script',
      significado:
        'Es la transcripción, en palabras, de tu historia. Te servirá como base antes de empezar la producción.',
    },
    {
      termino: 'Software',
      significado:
        'Conjunto de programas, instrucciones y reglas informáticas que permiten ejecutar distintas tareas en un sistema informático.',
    },
    {
      termino: 'Stop motion',
      significado:
        'Técnica de animación que consiste en fingir el movimiento de objetos que no se mueven mediante imágenes fijas sucesivas. Por lo general, también se le llama animación fotograma a fotograma y se usa para animar cualquier objeto.',
    },
    {
      termino: 'Storyboard',
      significado:
        'Conjunto de ilustraciones mostradas en secuencia para visualizar con mayor detalle cada escena y movimiento con la intención de servir de guía para entender una historia, previsualizar una animación o seguir la estructura de una película antes de realizarse o filmarse.',
    },
    {
      termino: 'Timeline',
      significado:
        'Es la recta de trabajo donde se realiza la animación, en ella especifica los movimientos y los organiza a través del tiempo.',
    },
  ],
  complementario: [
    {
      texto:
        'Díaz Aguilar, A. M. (2014). Lenguajes audiovisual y escrito: Una propuesta educativa para su manejo integral. En UNID (ed.), XV años conectando vidas. (pp. 5-15). UNID.',
      tipo: 'Capítulo de libro',
      link:
        'https://play.google.com/books/reader?id=6MWQCgAAQBAJ&hl=es_419&pg=GBS.PT4',
    },
    {
      texto:
        'Kerlow, I. (2009). The art of 3D Computer: animation and effects (4th ed.). Wiley.',
      tipo: 'Capítulo de libro',
      link:
        'https://books.google.com.co/books?id=7V87CwAAQBAJ&pg=PA305&dq=twelve+principles+of+animation&hl=es-419&sa=X&ved=2ahUKEwiMmPvy5IntAhVwdt8KHaR8DNQQ6AEwAXoECAEQAg#v=onepage&q=twelve%20principles%20of%20animation&f=false',
    },
    {
      texto:
        'Cortés, J. (2020, 14 de octubre). ¿Qué es la animación? Tipos y técnicas. Notodoanimacion.',
      tipo: 'Página web',
      link: 'https://bit.ly/3gGd7Wh',
    },
    {
      texto: 'Adobe. (s.f.). Guía del usuario de After Effects. ',
      tipo: 'Página web',
      link: 'https://adobe.ly/2Qsctkm',
    },
    {
      texto: 'Adobe. (s.f.). Adobe After Effects.',
      tipo: 'Página web',
      link: 'https://www.adobe.com/la/products/aftereffects.html',
    },
    {
      texto: 'Universidad Siglo 21. (2019). Interfaz de After Effects.',
      tipo: 'Documento',
      link: 'https://bit.ly/3dM7bZJ',
    },
    {
      texto:
        'Autodesk. (s.f.). Conecta todo el ciclo de vida del proyecto con el software de Autodesk.',
      tipo: 'Página web',
      link: 'https://bit.ly/3sNKnwU',
    },
    {
      texto:
        'Information & Communication Techonology. (s.f.). Animation Adobe Animated CC 2020 Level 1 (English version): Animation .',
      tipo: 'Libro',
      link: 'https://bit.ly/3gwFI05',
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
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Jorge Alberto García',
        cargo: 'Experto disciplinar',
        centro:
          'Centro para la Industria de la Comunicación Gráfica <br>Regional Distrito Capital',
      },
      {
        nombre: 'Jorge Iván Cabrera',
        cargo: 'Experto disciplinar',
        centro:
          'Centro para la Industria de la Comunicación Gráfica <br>Regional Distrito Capital',
      },
      {
        nombre: 'Carlos Mauricio Sánchez ',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica <br>Regional Distrito Capital ',
      },
      {
        nombre: 'Maryuri Agudelo Franco',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología <br>Regional Distrito Capital ',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología <br>Regional Distrito Capital ',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica <br>Regional Distrito Capital ',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Juan Carlos Tapias Rueda',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa	',
        cargo: 'Soporte front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Desarrollo front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: ' ',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
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
