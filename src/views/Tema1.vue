<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span.text-dark 1
      h1 Proceso administrativo
    p.mb-5(data-aos="fade-right") Son las funciones administrativas que, bien desarrolladas, aseguran el eficiente provecho de los recursos disponibles en la organización, así como la satisfacción de las áreas involucradas, por lo que los procesos administrativos tienen como finalidad potenciar la eficiencia, consistencia y contabilidad de sus recursos humanos, técnicos y materiales.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/imagen1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Fayol, destacado por ser el generador de los procesos administrativos y abanderado de los diferentes niveles de gestión, las funciones administrativas y una lista de principios para administrar correctamente, como lo expresa Luna González (2015, p. 59), es considerado el padre de la teoría administrativa, enfocándose en la administración de toda la organización y las funciones de la administración: planeación, organización, posición de mando, coordinación y control, que se utilizan para describir la posición administrativa.
    p.mt-5(data-aos="fade-right") Por otra parte, los procedimientos administrativos son un conjunto o sistema de reglas que rigen los procedimientos para la gestión de una organización. Estos procedimientos están destinados a establecer la eficiencia, la coherencia, la responsabilidad y la rendición de cuentas.
    p.mb-5(data-aos="fade-left") El proceso administrativo se comprende mediante los siguientes elementos administrativos:
    .tarjeta.fondo2.p-4.mb-5(data-aos="fade-right")
      SlyderA(tipo="b")
        .row.justify-content-around
          .col-xxl-4.col-xl-5.col-lg-6.col-11.mb-4.mb-md-0
            h4.mt-0.mt-lg-4.ms-4.mb-4 Planeación
            p.ms-4 Es donde se pronostican los objetivos y metas que debe cumplir la empresa y los métodos a llevar a cabo. Se elabora un plan que contiene de forma objetiva las diferentes actividades futuras a realizar; predefine y predice los objetivos y metas que se quiere alcanzar durante un tiempo determinado y actúa frente a problemas futuros.
          .col-xxl-7.col-xl-6.col-lg-5.col-11
            figure
              img.mt-1.mt-lg-4(src='@/assets/curso/tema1/slider1.png')
        .row.justify-content-around
          .col-xxl-4.col-xl-5.col-lg-6.col-11.mb-4.mb-md-0
            h4.mt-4.ms-4.mb-4 Organización
            p.ms-4   Después de planificar los objetivos y futuras actividades a realizar para alcanzar las metas propuestas, lo siguiente que se debe realizar es asignar actividades a los diferentes grupos de trabajo que conforman la empresa. La finalidad de la organización es que el objetivo asignado a cada actividad de la empresa pueda cumplirse con los mínimos gastos y, a su vez, con el máximo grado de satisfacción en cada empleado.
            p.ms-4   Para ello, analice y realice una selección de los trabajadores potenciales para la labor, divida cada tarea en unidades administrativas y encargue responsabilidades al líder de cada área de trabajo.
          .col-xxl-7.col-xl-6.col-lg-5.col-11
            figure
              img.mt-4(src='@/assets/curso/tema1/slider2.png')
        .row.justify-content-around
          .col-xxl-4.col-xl-5.col-lg-6.col-11.mb-4.mb-md-0
            h4.mt-4.ms-4.mb-4 Ejecución
            p.ms-4 En la ejecución, se busca dar el primer paso en la realización de las actividades asignadas a cada grupo de trabajo y que continúen realizando estas actividades de manera periódica y eficaz; cada grupo de trabajo se rige por normas y medidas que mejoran su funcionamiento. 
            p.ms-4 Dentro de las actividades de la ejecución se encuentra: Ofrecer un carácter motivador al personal y recompensar a cada empleado con el salario correspondiente.
          .col-xxl-7.col-xl-6.col-lg-5.col-11
            figure
              img.mt-4(src='@/assets/curso/tema1/slider3.png')
        .row.justify-content-around
          .col-xxl-4.col-xl-5.col-lg-6.col-11.mb-4.mb-md-0
            h4.mt-4.ms-4.mb-4 Control
            p.ms-4 Si bien cada función nombrada anteriormente se puede realizar al pie de la letra, esto no asegura que los resultados financieros sean optimistas. El control es una tarea administrativa, que debe ejercerse con profesionalidad y transparencia. El control de las actividades que se ejecutan en la empresa dictamina los sectores de mayor fortaleza y cuáles se están debilitando. 
            p.ms-4 Dentro de las actividades de control se encuentra: comparar los resultados obtenidos con planes realizados previamente, evaluar y analizar los resultados obtenidos, iniciar las acciones de corrección correspondientes.
          .col-xxl-7.col-xl-6.col-lg-5.col-11
            figure
              img.mt-4(src='@/assets/curso/tema1/slider4.png')
    p.text-center.my-5(data-aos="fade-left") Además, el proceso se define a partir de:
    .row.justify-content-center(data-aos="fade-right")
      .col-xxl-8.col-lg-9.col-md-11
        .titulo-sexto.color-acento-contenido
          h5 Figura 1. 
          i Proceso administrativo
        figure.d-lg-flex.d-none
          img(src='@/assets/curso/tema1/figura1.svg')
        figure.d-lg-none.d-flex
          img(src='@/assets/curso/tema1/figura1r.svg')
    .row.my-5(data-aos="fade-left")
      .col-auto
        h4.ps-5.pb-2.mb-0.fondo6 La importancia del proceso administrativo:
    p(data-aos="fade-right") Para que el mundo empresarial conserve su eficiencia en los procesos, se requiere de una buena gestión administrativa, en la que no solo se conformen con un adecuado trabajo, sino que las actividades se produzcan a través de fases y técnicas que le den norte al desempeño de los funcionarios y así alcanzar el cumplimiento de los objetivos y metas trazadas por la empresa.
    p.mb-5(data-aos="fade-right") Aunque las definiciones de los procesos administrativos conducen a la misma finalidad de generar excelencia en las unidades administrativas que conforman una organización, lo cierto es que la importancia de utilizar los procesos administrativos radica en:
    .row.justify-content-center(data-aos="fade-up")
      .col-xl-8.col-lg-9.col-md-11.col-sm-12.col-12 
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/infografica1.svg')

          .tarjeta.fondotarjeta.p-3(x="9.5%" y="89%" numero="+")
            p Adaptarse de acuerdo con las necesidades y con el entorno en el que se mueve, realizando los ajustes a que diera lugar, para alcanzar el equilibrio y obtener los resultados que se esperan.

          .tarjeta.fondotarjeta.p-3(x="43%" y="89%" numero="+")
            p Variar de acuerdo con la actividad económica a la que se dedica, al producto o servicio que comercializa; esto permite que los procesos administrativos fluctúen en cada empresa dependiendo de las capacidades de quienes lideran dichas acciones administrativas.

          .tarjeta.fondotarjeta.p-3(x="81.5%" y="89%" numero="+")
            p Estudiar y transformar los problemas o circunstancias de riesgo en la empresa en situaciones de oportunidad; por tanto, la creación de secuencias y relaciones que entrega el proceso administrativo ofrece la coordinación y control de actividades en la empresa.
    p.text-center.mb-5(data-aos="fade-right") Aquí, algunas de las ventajas de aplicar el proceso administrativo:
    SlyderF(data-aos="fade-left").my-5(columnas="col-lg-4 col-xl-4")
      .tarjeta-avatar
        img.imgsize(src='@/assets/curso/tema1/slider2-1.svg')
        .tarjeta.otra.color-primario
          .text-dark.p-4
            p.text-center Permite sistematizar y controlar operaciones continuas.
      .tarjeta-avatar
        img.imgsize(src='@/assets/curso/tema1/slider2-2.svg')
        .tarjeta.otra.color-primario
          .text-dark.p-4
            p.text-center Sienta las bases para organizar el trabajo y dividirlo en departamentos y jerarquías según las necesidades y recursos de las empresas.
      .tarjeta-avatar
        img.imgsize(src='@/assets/curso/tema1/slider2-3.svg')
        .tarjeta.otra.color-primario
          .text-dark.p-4
            p.text-center Permite establecer un sistema de selección de personas según las necesidades de la empresa.
      .tarjeta-avatar
        img.imgsize(src='@/assets/curso/tema1/slider2-4.svg')
        .tarjeta.otra.color-primario
          .text-dark.p-4
            p.text-center Facilita el desarrollo de habilidades y destrezas laborales. 
      .tarjeta-avatar
        img.imgsize(src='@/assets/curso/tema1/slider2-5.svg')
        .tarjeta.otra.color-primario
          .text-dark.p-4
            p.text-center Permite la dirección, dando estrategia y control a quienes la conducen.
      .tarjeta-avatar
        img.imgsize(src='@/assets/curso/tema1/slider2-6.svg')
        .tarjeta.otra.color-primario
          .text-dark.p-4
            p.text-center Potencia el análisis de problemas para su solución.
    p.my-5.text-center(data-aos="fade-left") Ejemplo de proceso administrativo:
    ImagenInfografica.color-secundario.mb-5(data-aos="fade-right")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema1/infografica2.svg')

      .tarjeta.fondotarjeta.p-3(x="28.8%" y="22.4%" numero="1")
        p Suponga que es deportista en el ciclismo. Su objetivo es llegar a la meta del Tour de Francia para consagrarse como el mejor ciclista del mundo. El objetivo es claro, pero necesita un proceso para lograr sus objetivos de la forma más segura posible. 

      .tarjeta.fondotarjeta.p-3(x="50%" y="7.7%" numero="2")
        p Por lo tanto, necesitará un proceso para lograr su objetivo final: llegar a la meta. Aunque cada carrera es diferente, a su vez, seguirá una serie de etapas para avanzar hacia la llegada final (metas intermedias). A esta serie de etapas, que son comunes en el logro de los objetivos, se les llama proceso administrativo.

      .tarjeta.fondotarjeta.p-3(x="71%" y="22.4%" numero="3")
        p En este sentido, toda empresa u organización que pretenda alcanzar metas debe aplicar un proceso administrativo, sin este es muy difícil lograr los objetivos propuestos. Imagine irse de viaje sin tener nada planeado, sin haber revisado agenda de hoteles, sitios turísticos, zonas de alimentación, entre otros… todo fuera de control; lo mismo sucede con los negocios.
    separador
    #politicas.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.1. Políticas organizacionales
    p.mb-5(data-aos="fade-right") Las organizaciones utilizan políticas y procedimientos para diseñar reglas, diseñar cursos de acción para abordar los problemas.
    
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-6
        .tarjeta.fondo2.p-3.mb-4.mt-3
          SlyderA(tipo="b")
            .row.justify-content-center
              .col-xl-10.col-lg-12.mb-lg-0.mb-4
                p.mt-4 1. Las políticas y procedimientos de la organización son utilizados para que los empleados entiendan los puntos de vista y valores sobre temas específicos y lo que ocurrirá si no se siguen.
            .row.justify-content-center
              .col-lg-10.mb-lg-0.mb-4
                p.mt-4 2. Las políticas son explicaciones generales de cómo quiere comportarse una organización, y los procedimientos definen exactamente cómo hacer una tarea o realizarla paso a paso. 
            .row.justify-content-center
              .col-lg-10.mb-lg-0.mb-4
                p.mt-4 3. Las políticas organizacionales también se definen como las reglas que los colaboradores deben seguir para que el negocio funcione sin problemas; algunas están destinadas a proporcionar orientación y ser útiles para los colaboradores.
      .col-xl-5.col-lg-6
        .row
          .col-xl-10
            img(src='@/assets/curso/tema1/imagen2.png')

    p.mt-5(data-aos="fade-right") Otras apuntan a proteger el negocio de amenazas legales y advierten a los empleados que no hagan ciertas cosas.
    p.mb-5(data-aos="fade-left") Ejemplo: la organización puede tener una política para efectuar seguridad y evitar el acceso no autorizado a las instalaciones de la organización. La política puede establecer que el público puede acceder solo hasta la recepción, y más allá de la recepción, solo se permite el ingreso a colaboradores. Lo anterior se fortalece complementando la política así:  todos los empleados deben identificarse haciendo uso del carné de trabajo y con escaneo biométrico de huellas dactilares para ingresar a las diferentes oficinas de la organización.
    .row.justify-content-center
      .col-lg-6.col-md-11.col-sm-12.col-12
        img(src='@/assets/curso/tema1/noentrar.jpg')
    p.mt-5(data-aos="fade-right") Las políticas comunican las responsabilidades individuales y de equipo, permitiendo así que todos trabajen juntos hacia los objetivos de la empresa. Los empleados entienden cómo realizar sus tareas de forma rápida y sencilla; de esta forma, los gerentes aplican el control en lugar de tener que fiscalizar las actividades de sus empleados.
    p.mb-5.text-center(data-aos="fade-left") Estos son algunos de los puntos de la organización en los que se suele aplicar políticas:
    SlyderF(data-aos="fade-up").my-5(columnas="col-lg-4")
      .tarjeta-avatar
        img.imgsize(src='@/assets/curso/tema1/slider3-1.svg')
        .tarjeta.otra1.color-primario
          .text-dark.p-4
            p.text-center Manejo de los activos de la empresa.
      .tarjeta-avatar
        img.imgsize(src='@/assets/curso/tema1/slider3-2.svg')
        .tarjeta.otra1.color-primario
          .text-dark.p-4
            p.text-center Seguridad en los procesos.
      .tarjeta-avatar
        img.imgsize(src='@/assets/curso/tema1/slider3-3.svg')
        .tarjeta.otra1.color-primario
          .text-dark.p-4
            p.text-center Vestuario.
      .tarjeta-avatar
        img.imgsize(src='@/assets/curso/tema1/slider3-4.svg')
        .tarjeta.otra1.color-primario
          .text-dark.p-4
            p.text-center Pautas para entrega y recepción de documentos.
      .tarjeta-avatar
        img.imgsize(src='@/assets/curso/tema1/slider3-5.svg')
        .tarjeta.otra1.color-primario
          .text-dark.p-4
            p.text-center Variedad en la contratación.
      .tarjeta-avatar
        img.imgsize(src='@/assets/curso/tema1/slider3-6.svg')
        .tarjeta.otra1.color-primario
          .text-dark.p-4
            p.text-center Presentación de PQRS.
      .tarjeta-avatar
        img.imgsize(src='@/assets/curso/tema1/slider3-7.svg')
        .tarjeta.otra1.color-primario
          .text-dark.p-4
            p.text-center Jornada laboral.
    .row.mb-5(data-aos="fade-right")
      .col-xxl-7.col-xl-8.col-lg-12.col-md-12
        h4.ps-5.mb-0.fondo5 Beneficios que obtiene la organización con la implementación de las políticas:
    TabsA.color-acento-contenido.mb-5(data-aos="fade-up-left")
      .tarjeta.otra2.color-acento-botones.p-4(titulo="Reducir los costos")
        h4 Reducir los costos
        p Las empresas implementan políticas en circunstancias de viajes y trabajos fuera de la organización, con el fin de enviar presupuestos de viaje y obtener la aprobación de tiquetes aéreos, hospedaje, transporte y demás.  El área de talento humano le facilita al colaborador que viaja todo lo necesario a razón de economía, diluyendo cualquier posibilidad de que el colaborador pueda sacar provecho de la situación de viaje.
      .tarjeta.otra2.color-acento-botones.p-4(titulo="Mejorar las operaciones")
        h4 Mejorar las operaciones
        p Algunas políticas están destinadas a ayudar a los colaboradores a comprender cómo comenzar y finalizar su jornada laboral, enviar órdenes de trabajo, usar el <i>software</i> y realizar otras tareas que ayudan a que la empresa funcione sin problemas.
      .tarjeta.otra2.color-acento-botones.p-4(titulo="Expresan las operaciones legales")
        h4 Expresan las operaciones legales
        p Es valioso dar a conocer a los colaboradores las normas y obligaciones legales. Esto puede incluir pautas para prácticas de seguridad, políticas de contratación, acoso, seguridad de datos y discriminación. Esta es una de las razones por las que las empresas hacen que sus colaboradores firmen un documento en el que indican que leyeron la guía de políticas, entendieron el contenido y aceptaron los términos. Por lo anterior, un empleado no podrá decir que desconocía estas políticas.
      .tarjeta.otra2.color-acento-botones.p-4(titulo="Dan a conocer los procedimientos")
        h4 Dan a conocer los procedimientos
        p Algunas políticas exponen a los colaboradores cómo operar en la empresa. Por ejemplo, la empresa puede tener cronogramas específicos para solicitar vacaciones e inscribirse en programas de beneficios. La empresa puede tener procedimientos específicos para otorgar aumentos y despedir empleados.
    p.my-5(data-aos="fade-up-right") Las políticas bien redactadas ofrecen a los colaboradores de nivel subordinado una forma de manejar problemas y conflictos al tener que involucrar constantemente a la gerencia cada vez que necesitan tomar una decisión; de esta manera, los empleados entienden las limitaciones de sus puestos de trabajo. Las políticas definen los límites de la toma de decisiones y trazan las alternativas.
    .row.mb-5(data-aos="fade-right")
      .col-auto
        h4.ps-5.pb-2.mb-0.fondo6 Clases de políticas existentes en la organización:
    p.my-5(data-aos="fade-left") Cada empresa asume la formulación de políticas partiendo de la cultura organizacional que quiere reflejar al exterior y de los lineamientos que desea trazar dentro de ella para mantener todo bajo control. Todas las políticas son importantes, pero algunas son más importantes que otras, algunas hacen que las empresas cumplan con las normas laborales y orientan los aspectos principales de la empresa.
    
    .row.justify-content-center(data-aos="fade-right")
      .col-xl-6.col-lg-7.col-11
        img(src='@/assets/curso/tema1/linea1.svg')
    .row.justify-content-center(data-aos="fade-up")   
      .col-auto
        p.text-center.mt-3 A continuación, se describe una lista de políticas comunes en la empresa:
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-xl-6.col-lg-7.col-11
        img(src='@/assets/curso/tema1/linea2.svg')

    .tarjeta.fondo7.p-4
      PasosB.color-acento-botones
        .row.px-4(titulo="")
          .col-md-6.mb-4.mb-md-0
            p.text-bold 1. Políticas de vestuario
            p Varias empresas requieren que los empleados se vistan de una manera particular cuando están en el trabajo, a los hombres se les puede exigir que usen corbata y a las mujeres se les puede pedir que se vistan de manera adecuada. Si los trabajadores están tratando con el público, se les podría exigir que usen uniformes que promuevan la imagen de la empresa y afiancen la identidad corporativa.
            p Las empresas tienen derecho a establecer pautas para el código de vestimenta de sus colaboradores, siempre que las reglas no sean discriminatorias. Es posible que se requieran algunas políticas de vestuario por razones de seguridad, como que los colaboradores usen zapatos cerrados.
        
          .col-md-6
            figure
              img(src='@/assets/curso/tema1/tiempo1.png')

        .row.px-4(titulo="")
          .col-md-6.mb-4.mb-md-0
            p.text-bold 2. Políticas de valoración de desempeño
            p El objetivo de estas políticas es identificar áreas de mejora y motivar a los trabajadores para lograr mejores resultados. Por ello, se diseñan políticas que describan la frecuencia y observación de desempeño del colaborador. Las observaciones de desempeño aclaran las responsabilidades de un empleado y establecen metas, además, describen la base para medir el desempeño y los pasos necesarios para recibir una bonificación o un aumento de salario.
        
          .col-md-6
            figure
              img(src='@/assets/curso/tema1/tiempo2.png')

        .row.px-4(titulo="")
          .col-md-6.mb-4.mb-md-0
            p.text-bold 3. Políticas comerciales
            p Las políticas comerciales establecen las reglas de conducta de una empresa. Estas sí que son importantes en el clima organizacional, ya que no solo describen las responsabilidades del jefe y los colaboradores, sino que también crean un marco de referencia para manejar el acervo de problemas que surgen en una organización.
        
          .col-md-6
            figure
              img(src='@/assets/curso/tema1/tiempo3.png')

        .row.px-4(titulo="")
          .col-md-6.mb-4.mb-md-0
            p.text-bold 4. Políticas de imparcialidad
            p La empresa debe dejar muy claro que ella promueve el trato justo en el lugar de trabajo. Estas políticas prohíben el comportamiento discriminatorio de los supervisores y empleados por motivos de raza, sexo, creencias religiosas u orientación sexual. Cuando existen políticas de igualdad, ellos tienen actitudes más positivas hacia su trabajo y son más productivos.
        
          .col-md-6
            figure
              img(src='@/assets/curso/tema1/tiempo4.png')

        .row.px-4(titulo="")
          .col-md-6.mb-4.mb-md-0
            p.text-bold 5. Políticas de seguridad de información
            p Dado que la mayoría de empresas trabajan ahora bajo la compañía de un <i>software</i> y este se usa en casi todos los trabajos, las empresas necesitan políticas que rijan el uso de la información de los equipos que disponen de este <i>software</i> para actividades personales. Por motivos de seguridad, las empresas pueden pedir a los empleados que firmen un documento que permita a una empresa controlar la actividad de Internet y los correos electrónicos de sus trabajadores.
        
          .col-md-6
            figure
              img(src='@/assets/curso/tema1/tiempo5.png')


    p.my-5(data-aos="fade-right") Las políticas organizacionales bien escritas promueven el cumplimiento, agilizan los procesos internos y limitan los riesgos de responsabilidad, también establecen la cultura de la empresa y guían las funciones diarias.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/imagen3.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La creación de políticas en la empresa puede parecer el comienzo de exigencias y lineamientos, pero puede comenzar como un proceso simple, que ayuda a crear una empresa más organizada. La formulación de políticas de la empresa tiene muchos usos, entre ellos, ayudar a orientar a los nuevos trabajadores, dar a sus gerentes pautas escritas y ayudar a sus empleados a operar sin confusión. Tenga en cuenta las siguientes pautas para manifestar adecuadamente las políticas de su negocio:
    .row.justify-content-center
      .col-xxl-10.col-lg-10.col-md-12
        AcordionA(data-aos="fade-up-left").my-5(tipo="a" clase-tarjeta="tarjeta fondo4")
          .row.justify-content-center(titulo="Examine los compromisos legales")
            .col-md-4
              figure
                img(src='@/assets/curso/tema1/imagen4.png')
            .col-md-7.mb-4.mb-md-0
              p Según la normativa del país, hay estipuladas leyes con respecto a las horas de trabajo, las condiciones y el salario; también se deben seguir las pautas estatales que rigen su negocio. Se sugiere visitar el portal web del Ministerio del Trabajo para buscar las reglas y pautas que lo cobijan, con el fin de obtener recomendaciones sobre qué redactar en la política organizacional.    
          .row.justify-content-center(titulo="Analice las necesidades del entorno")
            .col-md-4
              figure
                img(src='@/assets/curso/tema1/imagen5.png')
            .col-md-7.mb-4.mb-md-0
              p Cada empresa debe adecuar las mejores prácticas de los empleados a su situación concreta; examine los problemas y las preguntas que surgen en el lugar de trabajo y apúntelos para tenerlos en cuenta a la hora de diseñar la política. Tenga en cuenta la asistencia, vestuario, tiempo libre pagado, revisiones anuales, procesos de quejas, descansos, política de fumar, uso personal de los activos de la empresa, uso de Internet y correo electrónico, cadena de mando, estacionamiento, otorgamiento de beneficios y conflicto de intereses.    
          .row.justify-content-center(titulo="Socialice las políticas a los miembros de la organización")
            .col-md-4
              figure
                img(src='@/assets/curso/tema1/imagen6.png')
            .col-md-7.mb-4.mb-md-0
              p Organice una reunión en la empresa para darlas a conocer; los líderes tendrán la gran responsabilidad de contribuir en la implementación y obediencia de estas nuevas políticas. Informe la necesidad que existió de formular estos lineamientos y brinde un resumen de los detalles más importantes; haga uso de unas semanas pedagógicas para la inserción de las nuevas políticas en el área de trabajo.
    .row.ampliar.fondo8(data-aos="fade-right")
      .col-xxl-12.px-5
        separador
        #gestion.titulo-segundo.color-acento-contenido
          h2 1.2. Gestión del talento humano
        p.mb-5 El propósito principal de la gestión del talento es crear una fuerza laboral motivada, que permanezca en su empresa a largo plazo, superando a la competencia a través de un sistema integrado de prácticas de gestión del talento que sean difíciles de copiar o imitar. La importancia que tiene el talento humano para la organización es que capitaliza a los empleados, posiblemente, el activo más importante de su empresa.
        .row.justify-content-center
          .col-xxl-4.col-xl-4.col-lg-5.col-md-10.col-sm-11.col-11.mb-5
            img(src='@/assets/curso/tema1/figura3.svg')
    .row.mb-5(data-aos="fade-right")
      .col-auto
        h4.ps-5.pb-2.mb-0.fondo6 Proceso de gestión del talento
    p.mb-5(data-aos="fade-up-right") Para todas las empresas, es fundamental que se gestione el talento humano desde cada una de las áreas, evaluando el desempeño y analizando las situaciones que ameritan riesgo o alerta en el contexto laboral.  Los colaboradores se sienten parte de la organización cuando esta resalta las destrezas y habilidades, optimiza los procesos y tiene en cuenta la experiencia del trabajador para futuros puestos vacantes. Por lo anterior, se relacionan a continuación los pasos para desarrollar el proceso de gestión de talento:
    SlyderF(data-aos="fade-up").my-5(columnas="col-xl-4 col-lg-6")
      .tarjeta-avatar
        img.imgsize(src='@/assets/curso/tema1/slider4-1.svg')
        .tarjeta.otra3.color-primario
          .text-dark.p-4
            span.text-bold Habilidades que necesita la organización: 
            span debe determinar qué tipo de contrataciones necesita y qué requisitos deben cumplir, describir las habilidades que se requieren para el desempeño del cargo, así como los conocimientos técnicos o específicos del área de trabajo. Se sugiere que, antes de contratar una nueva persona, se considere el talento humano actual, es decir, los ascensos, partiendo de la experiencia y la antigüedad que ya posee.
      .tarjeta-avatar
        img.imgsize(src='@/assets/curso/tema1/slider4-2.svg')
        .tarjeta.otra3.color-primario
          .text-dark.p-4
            span.text-bold Reclutar al talento humano apropiado: 
            span utilice las herramientas necesarias para dar a conocer las vacantes que ofrece la empresa y los requisitos que se exigen; para ello, cree anuncios y publíquelos en los principales sitios de trabajo. Se recomienda realizar evaluaciones de personalidad, referencias y pruebas que requieran que los candidatos se desempeñen en situaciones de la vida real. Brinde la oportunidad de trabajo a las mejores opciones.
      .tarjeta-avatar
        img.imgsize(src='@/assets/curso/tema1/slider4-3.svg')
        .tarjeta.otra3.color-primario
          .text-dark.p-4
            span.text-bold Incorporación y organización del trabajo: 
            span una vez el colaborador es parte de la empresa, el área de talento humano orienta y capacita en los procesos de la labor para que esté listo. Entregue tareas que pueda desarrollar, programe sesiones de capacitación y asigne empleados actuales para ayudar a los nuevos trabajadores a instalarse
      .tarjeta-avatar
        img.imgsize(src='@/assets/curso/tema1/slider4-4.svg')
        .tarjeta.otra3.color-primario
          .text-dark.p-4
            span.text-bold Actualización de conocimientos: 
            span es más importante mantener capacitado y desarrollando habilidades al talento humano contratado, ya que será mucho más fácil ascender a una persona que conoce ya el negocio que los costos que genera reclutar nuevo personal y capacitarlo para el cargo disponible.
      .tarjeta-avatar
        img.imgsize(src='@/assets/curso/tema1/slider4-5.svg')
        .tarjeta.otra3.color-primario
          .text-dark.p-4
            span.text-bold Efectúe evaluaciones de desempeño: 
            span verifique el desempeño de los empleados con regularidad, esto le permite ver si los trabajadores pueden administrar responsabilidades adicionales, además de verificar el cumplimiento de las actividades encomendadas para el logro de los objetivos de la empresa.
      .tarjeta-avatar
        img.imgsize(src='@/assets/curso/tema1/slider4-6.svg')
        .tarjeta.otra3.color-primario
          .text-dark.p-4
            span.text-bold Conserve a su mejor talento: 
            span la mayoría de las empresas cuentan con los medios para retener a los colaboradores potenciales, haciendo que estos trabajen motivados en la labor encomendada, ofreciéndoles beneficios y compensaciones por las metas alcanzadas, motivando y resaltando los logros y actividades en las que se desempeñó eficientemente, asegurando la satisfacción laboral y mejorando la cultura de la empresa. 
    .row.mb-5(data-aos="fade-right")
      .col-auto
        h4.ps-5.pb-2.mb-0.fondo6 Actividades de la gestión del talento humano
    p.mb-5(data-aos="fade-left") Dentro de la gestión del talento humano, se encuentran acciones que van desde la incorporación de colaboradores, pasando por la gestión del desempeño, hasta la retención. Aquí, se presentan las actividades más relevantes de esta gestión:
    
    
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-11.col-lg-9.col-12
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 2. </b> <i>Actividades de la gestión del talento</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/tema1/fig-1a.svg', alt='')  
          img.d-block.d-md-none(src='@/assets/curso/tema1/fig-1b.svg', alt='') 

    //- .row.justify-content-center(data-aos="fade-left")
    //-   .col-xxl-8.col-xxl-8.col-lg-9.col-md-11.col-sm-12.col-12
    //-     .titulo-sexto.color-acento-contenido
    //-       h5 Figura 2. 
    //-       i Actividades de la gestión del talento
    //-     .row.justify-content-center
    //-       .col-xxl-3.col-xl-3.col-lg-3.col-md-3.col-sm-3.col-3
    //-         img(src='@/assets/curso/tema1/actividad1.svg')
    //-       .col-xxl-3.col-xl-3.col-lg-3.col-md-3.col-sm-3.col-3
    //-         img(src='@/assets/curso/tema1/actividad2.svg')
    //-       .col-xxl-3.col-xl-3.col-lg-3.col-md-3.col-sm-3.col-3
    //-         img(src='@/assets/curso/tema1/actividad3.svg')
    //-       .col-xxl-3.col-xl-3.col-lg-3.col-md-3.col-sm-3.col-3
    //-         img(src='@/assets/curso/tema1/actividad4.svg')
    .row.my-5(data-aos="fade-left")
      .col-auto
        h4.ps-5.pb-2.mb-0.fondo6 Modelo integrado de gestión de talento humano            
    p(data-aos="fade-right") Se tiene en cuenta que la gestión del talento necesita transformarse para adaptarse a las últimas tendencias de talento, las disrupciones digitales y las expectativas de los empleados; teniendo en cuenta este ambiente, se diseñan los modelos para gestionar mejor los colaboradores. Por lo tanto, debe poder adaptarse a las necesidades cambiantes de la organización, las expectativas de talento en evolución y el ritmo establecido por los cambios dentro del negocio. 
    p.mb-5(data-aos="fade-right") Esta estructura de componentes es cíclica, teniendo en cuenta el clima interno dentro de la organización y el entorno externo en el que opera. Se describen seguidamente los componentes principales del modelo:
    .row.justify-content-center(data-aos="fade-right")
      .col-xxl-3.col-lg-5.col-md-11
        ul.lista-ul--color
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-check-circle(style="color: #3AE3FE;")
            p.mb-0 #[b Obtener:] reclutamiento e incorporación.
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-check-circle(style="color: #3AE3FE;")
            p.mb-0 #[b Evaluar:] planificar períodos para aplicar evaluación, analizar el desempeño del talento.
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-check-circle(style="color: #3AE3FE;")
            p.mb-0 #[b Efectuar:] seguimiento y ejecución de cultura y políticas organizacionales, planificación de la fuerza laboral, compromiso y retención.
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-check-circle(style="color: #3AE3FE;")
            p.mb-0 #[b Implementar:] aprendizaje y desarrollo, gestión del conocimiento, distribución de objetivos.

      .col-xxl-5.col-lg-6.col-md-11
        img(src='@/assets/curso/tema1/imagen7.png')
    .row.my-5(data-aos="fade-left")
      .col-auto
        h4.ps-5.pb-2.mb-0.fondo6 Beneficios de aplicar gestión de talento humano en las empresas
    p.mb-5(data-aos="fade-right") La empresa no puede asumir que ya tiene cubierta la gestión del talento solo porque tiene recursos humanos en su empresa; por ende, debe gestionarlo, lo cual implica identificar brechas de talento, vacantes, buscar e incorporar a los candidatos adecuados, crecimiento del colaborador a través del desarrollo de habilidades y las capacitaciones necesarias para involucrarlos, retenerlos y motivarlos adecuadamente como piezas fundamentales de la empresa. Es así como el logro de estos procesos de gestión de talento suministra a la organización los siguientes beneficios:
    .row.justify-content-center(data-aos="fade-up-left")
      figure.d-lg-flex.d-none
        img(src='@/assets/curso/tema1/beneficios1.svg')
      .col-md-8.col-sm-10.d-lg-none.d-flex
        img(src='@/assets/curso/tema1/beneficios2.svg')
    .row.my-5(data-aos="fade-right")
      .col-auto
        h4.ps-5.pb-2.mb-0.fondo6 Estrategias de gestión de talento humano
    p.mb-5(data-aos="fade-up-left") La gestión estratégica del talento es una necesidad en el entorno actual. La gestión del talento y el capital humano ha llevado a un renacimiento de los elementos: lugar de trabajo-trabajo-trabajador. Hay una serie de elementos y subprocesos que deben trabajar acordes para garantizar el éxito de la organización. Aquí se presentan algunas estrategias para que escoja la más conveniente:
    .tabla-c(data-aos="fade-right")
      table
        tr
          th.fondoEncabezado 
            h4 Estrategias
          td.fondoEncabezado 
            h4 Ventajas
        tr
          th 
            h4 Vincular a los mejores colaboradores.
          td 
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | Se desempeñarán bien y alcanzarán un alto rendimiento. 
              li
                i.lista-ul__vineta
                | Crecimiento de la empresa más rápido.
              li 
                i.lista-ul__vineta
                | Preparado para los desafíos y riesgos.
        tr
          th 
            h4 Contratar expertos capacitados y desarrollarlos.
          td 
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | Ahorro de dinero en salarios.
              li
                i.lista-ul__vineta
                | Tiene el potencial de convertirse en un profesional hábil y leal.
              li 
                i.lista-ul__vineta
                | Necesario si tiene una necesidad urgente de talento.
        tr
          th 
            h4 Explotar la colaboración, tenacidad y respeto mutuo en el equipo de trabajo.
          td 
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | Aprovechar nuevas contrataciones y talento existente.
              li
                i.lista-ul__vineta
                | Los mejores colaboradores pueden enseñar a los nuevos.
              li 
                i.lista-ul__vineta
                | Ayudará al talento humano a crecer más rápido y mantenerlos motivados.
    .row.my-5(data-aos="fade-right")
      .col-auto
        h4.ps-5.pb-2.mb-0.fondo6 Elementos esenciales de la gestión de talento humano
    .row.justify-content-center.my-5(data-aos="fade-left")
      .col-lg-6.col-md-11.col-sm-11.col-12.mt-3
        LineaTiempoD
          .row(numero="1" titulo="Cada organización tiene sus propias metas únicas")
            .col-md-5.mt-3
              figure
                img(src='@/assets/curso/tema1/imagen9.svg')
            .col-md-7.mb-4.mb-md-0.mt-3
              p.text-small Ya sea que se relacionen con un mejor rendimiento o mayores ingresos, sus objetivos deben estar claramente definidos y ser alcanzables. También necesita saber exactamente cómo los empleados desempeñarán un papel para ayudarlo a alcanzar sus objetivos.

          .row(numero="2" titulo="Medir los resultados")
            .col-md-5.mb-4
              figure
                img(src='@/assets/curso/tema1/imagen10.svg')
            .col-md-7.mb-4.mb-md-4
              p.text-small Necesita saber cómo medir los resultados para ver si su estrategia está funcionando. Defina las métricas que usará y con qué frecuencia tomará medidas.

          .row(numero="3" titulo="Asignar responsabilidades")
            .col-md-5.mb-4
              figure
                img(src='@/assets/curso/tema1/imagen11.svg')
            .col-md-7.mb-4.mb-md-4
              p.text-small Necesita saber cómo colaborador cuáles serán sus obligaciones dentro de la entidad, para ello, lo que se describe en el manual de funciones, adicional a la información que entrega el líder de área, quien además le puede adicionar ciertas responsabilidades de acuerdo al cargo que ocupe.

          .row(numero="4" titulo="Comunicarse con los empleados")
            .col-md-5.mb-4
              figure
                img(src='@/assets/curso/tema1/imagen12.svg')
            .col-md-7
              p.text-small No olvide que interactuar como equipo mantiene la claridad de lo que se desea lograr y asimismo el colaborador entiende que la exigencia está ligada con el desempeño que se espera de él. Hable con ellos sobre sus objetivos profesionales para asegurarse de que su empresa esté creando las oportunidades adecuadas.

      .col-lg-6.col-md-11.col-sm-11.col-12.mt-3
        img(src='@/assets/curso/tema1/imagen8.png')
    separador
    #comercial.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.3. Gestión comercial
    p.mb-5(data-aos="fade-right") La gestión comercial es la disciplina que informa e implementa la estrategia y las políticas comerciales, se implementa asegurando procedimientos operativos efectivos y eficientes, que establecen y mantienen esas capacidades. La gerencia comercial o los representantes comerciales se ocupan de las ventas, adquisiciones, <i>marketing</i>, contratación, gastos e ingresos, con un enfoque en las pérdidas y ganancias. Ahora bien, el papel de la gestión comercial varía según el tipo/modelo de negocio de una organización, y también el tipo de clientes o socios.
    .bloque-texto-g.fondo1.p-3.p-sm-4.p-md-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/imagen13.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La gestión comercial establece el marco y la guía para las organizaciones que entregan y reciben servicios o proyectos desde el inicio hasta la finalización de cada ciclo comercial. Básicamente, es un punto focal para garantizar que los intereses de la organización estén salvaguardados en todas sus actividades comerciales y que las políticas de la empresa se implementen y se sigan adecuadamente en cada transacción individual con clientes, proveedores y socios.
    p.my-5(data-aos="fade-right") Al salir al mercado, cualquier producto o servicio debe estar respaldado por compromisos de desempeño que sean relevantes para sus clientes y consumidores. Esos compromisos pueden ser específicos del producto/servicio o genéricos de la organización:
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-6.col-md-8.col-sm-11.col-12
        table
          tr.align-items-centee.colorborde
            td.colorborde
              h4.text-center Específicos
            td.colorborde2
              h4.text-center Genéricos
          tr
            td.colorborde
              .row.justify-content-center.align-items-center.pb-2
                .col-xxl-7.col-xl-7.col-lg-7.col-md-7.col-sm-7.col-7
                  p.ms-5 Precio
                .col-xxl-4.col-xl-4.col-lg-4.col-md-4.col-sm-4.col-4
                  img.nomostrar(src='@/assets/curso/tema1/precio.svg')
              .row.justify-content-center.align-items-center.py-2
                .col-xxl-7.col-xl-7.col-lg-7.col-md-7.col-sm-7.col-7
                  p.ms-5 Entrega
                .col-xxl-4.col-xl-4.col-lg-4.col-md-4.col-sm-4.col-4
                  img.nomostrar(src='@/assets/curso/tema1/entrega.svg')
              .row.justify-content-center.align-items-center.py-2
                .col-xxl-7.col-xl-7.col-lg-7.col-md-7.col-sm-7.col-7
                  p.ms-0.ms-sm-3 Mantenimiento
                .col-xxl-4.col-xl-4.col-lg-4.col-md-4.col-sm-4.col-4
                  img.nomostrar(src='@/assets/curso/tema1/mtto.svg')
              .row.justify-content-center.align-items-center.pt-2
                .col-xxl-7.col-xl-7.col-lg-7.col-md-7.col-sm-7.col-7
                  p.ms-5 Soporte
                .col-xxl-4.col-xl-4.col-lg-4.col-md-4.col-sm-4.col-4
                  img.nomostrar(src='@/assets/curso/tema1/soporte.svg')
            td.colorborde3.pt-0
              .row.justify-content-center.align-items-center.pb-2
                .col-xxl-4.col-xl-4.col-lg-4.col-md-4.col-sm-4.col-4.pt-0
                  img.mt-0(src='@/assets/curso/tema1/marca.svg')
                .col-xxl-7.col-xl-7.col-lg-7.col-md-7.col-sm-7.col-7.pt-0
                  p Marca
              .row.justify-content-center.align-items-center.py-2
                .col-xxl-4.col-xl-4.col-lg-4.col-md-4.col-sm-4.col-4
                  img(src='@/assets/curso/tema1/standares.svg')
                .col-xxl-7.col-xl-7.col-lg-7.col-md-7.col-sm-7.col-8
                  p.desborde Estándares éticos
              .row.justify-content-center.align-items-center.pt-2
                .col-xxl-4.col-xl-4.col-lg-4.col-md-4.col-sm-4.col-4
                  img(src='@/assets/curso/tema1/norma.svg')
                .col-xxl-7.col-xl-7.col-lg-7.col-md-7.col-sm-7.col-8
                  p.desborde Normativa
              .row.justify-content-center.align-items-center.pt-2
                .col-xxl-12.margencelda

    p.mt-5(data-aos="fade-right") La gestión comercial es el proceso a través del cual se reúnen, evalúan y concilian los compromisos de desempeño requeridos, teniendo en cuenta las necesidades e intereses de todas las partes interesadas relevantes y asegurando su sostenibilidad.
    p.mb-5(data-aos="fade-left") En algunas empresas, la función de gestión comercial se limita a las actividades relacionadas con:
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-xxl-10.col-xl-10.col-lg-11.col-md-12.col-sm-12.col-12
        img(src='@/assets/curso/tema1/figura4.svg')

    p(data-aos="fade-right") Algunas de las organizaciones públicas y privadas no tienen un departamento de gestión comercial, solo cuentan con un área de contratación. En tales casos, las actividades previas al contrato están a cargo principalmente del equipo jurídico y técnico, que cuenta con el respaldo de finanzas para la revisión de la oferta.
    p.mb-5(data-aos="fade-left") La gestión comercial ayuda a la empresa con las siguientes tareas esenciales:

    .row.justify-content-center(data-aos="fade-right")
      .col-xxl-5.col-xxl-5.col-lg-5.col-md-11.col-sm-12.col-12
        ul.lista-ul--color
          li 
            i.lista-ul__vineta
            | Aplicar los estándares de la empresa y que se sigan los procedimientos durante todo el proceso de trabajo.
          li 
            i.lista-ul__vineta
            | Ejecutar y administrar la competencia según las mejores prácticas comerciales.
          li 
            i.lista-ul__vineta
            | Asegurarse de que los costos se comparen y representen la relación calidad-precio dentro de la competencia y el proceso de selección.
          li 
            i.lista-ul__vineta
            | Evitar disputas futuras y gestionarlas a través de los términos aplicables.
          li 
            i.lista-ul__vineta
            | Que la solución o servicio esté bien definido y avalado por el departamento competente.
          li 
            i.lista-ul__vineta
            | Tener presentes las leyes, reglamentos y normativa.
      .col-xxl-5.col-xxl-5.col-lg-6.col-md-11.col-sm-12.col-12
        img(src='@/assets/curso/tema1/imagen14.png')
    p.mt-5(data-aos="fade-right") El área comercial, en la mayoría de las organizaciones, es un punto de encuentro que funciona como canal formal para las comunicaciones externas y está autorizada para acordar asuntos comerciales.
    .row.justify-content-center(data-aos="fade-left")
      .col-xxl-10.col-lg-10.col-md-12
        .bloque-texto-c.fondo9.p-4.my-5
          i.fas.fa-quote-right
          h4.m-2 De acuerdo con el pensamiento de Taylor y Feenstra (2015, p. 43), las barreras comerciales son el conjunto de elementos que influyen sobre los bienes y servicios que se intercambian entre países. Por lo anterior, es apreciable que las barreras comerciales sean perjudiciales para la economía mundial y disminuyan la eficiencia económica general, dejando un bloqueo o acuerdo político que limita la capacidad de exportación o importación de un país extranjero.
    .row.mb-5(data-aos="fade-right")
      .col-auto
        h4.ps-5.pb-2.mb-0.fondo6 Comercio internacional
    p.mt-5(data-aos="fade-left") El comercio global brinda a los consumidores y países la oportunidad de estar expuestos a bienes y servicios que no están disponibles en sus propios países, o que son más costosos a nivel nacional, ofreciendo la oportunidad de adquirir estos productos y servicios en el exterior. Es así como, a través de la necesidad de un país, el comercio internacional genera el intercambio de productos en otros territorios, produciendo la economía internacional.
    p.mb-5(data-aos="fade-right") En otras palabras, el comercio internacional es la relación existente de compra y venta entre países. Ahora bien, dentro de lo que es el comercio internacional, se describen dos palabras claves para que exista la economía internacional:

    .row.justify-content-center(data-aos="fade-right")
      .col-xxl-4.col-xl-4.col-lg-5.col-md-5.col-sm-11.col-11.fondo10.margender
        .row.justify-content-center
          .col-xxl-10.col-md-10.col-sm-10.col-10
            img.my-5(src='@/assets/curso/tema1/figura5.svg')
        h4.text-center Importación
        p.text-center.mx-5 Son los productos y servicios que se adquieren de otras empresas fuera del país; por ejemplo, algunas empresas compran su materia prima en el exterior para fabricar sus productos y comercializarlos.
      .col-xxl-4.col-xl-4.col-lg-5.col-md-5.col-sm-11.col-11.fondo10.margenizq
        .row.justify-content-center
          .col-xxl-10.col-md-10.col-sm-10.col-10
            img.my-5(src='@/assets/curso/tema1/figura6.svg')
        h4.text-center Exportación
        p.text-center.mx-5 Son los productos y servicios que ofrecen las empresas a otros países, es decir, que sus potenciales consumidores se encuentran en el exterior y que las ventas que se registran obedecen a otros territorios.
    p.my-5(data-aos="fade-right") Importar y exportar puede ayudar a que su negocio se expanda en el país o en el extranjero, pero es importante cumplir con todas las leyes y reglamentos que exigen los países involucrados. Conozca cuáles son los requisitos de importación y exportación, además de otra información sobre el proceso.
    .row.justify-content-center(data-aos="fade-right")
      .col-xxl-5.col-xxl-5.col-lg-5.col-md-11.col-sm-12.col-12
        p.mb-4.text-bold Ventajas de importar y exportar:
        ul.lista-ul--color
          li 
            i.fas.fa-folder-open
            | Formas de entrar en el comercio mundial.
          li 
            i.fas.fa-folder-open
            | Ayuda a los países a acceder a las tecnologías, los mejores productos y servicios del mundo.
          li 
            i.fas.fa-folder-open
            | Brinda un mejor control sobre el comercio que establecer un mercado y el riesgo es considerablemente bajo.
        p.mb-4.text-bold Limitaciones de importación y exportación:
        ul.lista-ul--color
          li 
            i.fas.fa-folder-open
            | Incluye costos adicionales de embalaje, transporte, protección y seguro que acumulan el costo total de los artículos.
          li 
            i.fas.fa-folder-open
            | Las mercancías están sujetas a estándares de calidad. Cualquier mercancía de baja calidad que se exporte dará como resultado la reputación del país y comentarios sobre los países.
          li 
            i.fas.fa-folder-open
            | Si no tiene cuidado, puede perder el control del mercado interno y de los clientes existentes.
      .col-xxl-5.col-xxl-5.col-lg-6.col-md-11.col-sm-12.col-12
        img(src='@/assets/curso/tema1/imagen15.png')
    p.mt-5(data-aos="fade-right") Las empresas prefieren importar y exportar porque es una de las rutas más simples para ingresar al comercio global. Requiere menos inversión en términos de tiempo y dinero en comparación con otros métodos para ingresar al comercio global. Es comparativamente menos riesgoso en comparación con diferentes rutas de ingreso al negocio internacional.
    p.mb-5(data-aos="fade-left") La operación para establecer la balanza comercial es la divergencia entre el valor de las exportaciones y el valor de las importaciones, así:
    .row.justify-content-center(data-aos="fade-right")
      .col-xxl-6.col-xxl-6.col-lg-7.col-md-11.col-sm-11.col-12
        img(src='@/assets/curso/tema1/balanza.svg')
      .col-xxl-8.col-xxl-8.col-lg-8.col-md-11.col-sm-11.col-12
        h4.text-center Balanza comercial = valor de las exportaciones - valor de las importaciones
    .row.justify-content-center(data-aos="fade-right")
      .col-xxl-10.col-lg-10.col-md-12
        .bloque-texto-c.fondo9.p-4.my-5
          i.fas.fa-quote-right
          h4.m-2 Taylor y Feenstra (2015, p. 35) definen la balanza comercial de acuerdo con el cálculo diferencial entre el valor total de las exportaciones de un país y el valor total de las importaciones, y está influida por las condiciones macroeconómicas del país. Todos los países están llamados a comercializar entre ellos para subsanar la falta de productos o servicios.
    .row.mb-5(data-aos="fade-left")
      .col-auto
        h4.ps-5.pb-2.mb-0.fondo6 Política comercial
    p.mb-5(data-aos="fade-right") La política comercial promueve el crecimiento económico a través de regulaciones y acuerdos que controlan las importaciones y exportaciones con otros países, desde acuerdos de libre comercio hasta tratados, impactando así la economía y las finanzas.
    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/FWXq-BjMpAQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p(data-aos="fade-right") La política comercial se refiere a los acuerdos y regulaciones que rodean las importaciones y exportaciones entre diferentes países, se utiliza para promover el crecimiento económico y la competitividad.
    p.mb-5(data-aos="fade-right") Los principales instrumentos de la política comercial son:
    .row.justify-content-center(data-aos="fade-right")
      .col-xxl-6.col-xxl-6.col-lg-6.col-md-11.col-sm-12.col-12
        ul.lista-ul--color
          li 
            i.fas.fa-folder-open
            | La negociación de acuerdos.
          li 
            i.fas.fa-folder-open
            | El establecimiento de reglas, el cumplimiento de las leyes y compromisos comerciales.
          li 
            i.fas.fa-folder-open
            | Apoyar la financiación y concesión de licencias de exportación.
          li 
            i.fas.fa-folder-open
            | La investigación de mercado y las misiones comerciales.
          li 
            i.fas.fa-folder-open
            | Reglamentar y adecuar las leyes sobre importaciones y exportaciones.
          li 
            i.fas.fa-folder-open
            | Fomentar el comercio y el crecimiento con los países en desarrollo.
          li 
            i.fas.fa-folder-open
            | Protección y promoción a través de tratados y acuerdos de inversión.
      .col-xxl-6.col-xxl-6.col-lg-6.col-md-11.col-sm-12.col-12
        img(src='@/assets/curso/tema1/imagen16.png')
    .row.mb-5.mt-5(data-aos="fade-left")
      .col-auto
        h4.ps-5.pb-2.mb-0.fondo6 Los acuerdos comerciales
    p.mb-5(data-aos="fade-left") Los acuerdos comerciales pueden crear oportunidades para ayudar a hacer crecer la economía. Establecen reglas para las empresas que participan de estos acuerdos y que buscan hacer negocios en los mercados de todo el mundo, mediante la reducción de las barreras a las exportaciones, la protección de los intereses y la mejora del estado de derecho en los países socios del acuerdo comercial. Hay muchos tipos de acuerdos comerciales, incluyendo: 
    .tarjeta.fondo2.p-4.mb-5(data-aos="fade-right")
      SlyderA(tipo="b")
        .row.justify-content-around
          .col-xxl-7.col-xl-7.col-lg-7.col-11.mb-4.mb-md-0
            h4.mt-4.ms-4.mb-4 1. Acuerdos de la Organización Mundial del Comercio (OMC)
            p.ms-4 Establecen normas que rigen el comercio entre los muchos miembros de la OMC. Según lo expresado por Taylor y Feenstra (2015, p. 425), la OMC es un acuerdo multilateral entre muchos países, con el objetivo de recortar los aranceles entre todos los países miembros. Estos acuerdos cubren bienes, servicios, propiedad intelectual, estándares, inversión y otros temas que impactan el flujo de comercio, además de crear un marco legal de comercio internacional para muchísimas economías de todo el mundo.
          .col-xxl-5.col-xl-5.col-lg-5.col-11
            figure
              img.mt-0.mt-lg-4(src='@/assets/curso/tema1/slider2-1.png')
        .row.justify-content-around
          .col-xxl-7.col-xl-7.col-lg-7.col-11.mb-4.mb-md-0
            h4.mt-4.ms-4.mb-4 2. Tratados de Libre Comercio (TLC)
            p.ms-4 Se construyen sobre la base del Acuerdo de la OMC, brindando aún más protecciones y derechos a las empresas; se suscribe entre varios países cercanos. Si está buscando exportar un producto o servicio, es posible que deba negociar un trato favorable a través de un TLC, para hacerlo más fácil y económico para usted. Acceder a los beneficios del TLC para el producto también puede darles una ventaja competitiva frente a los productos de otros países.
          .col-xxl-5.col-xl-5.col-lg-5.col-11
            figure
              img.mt-0.mt-lg-4(src='@/assets/curso/tema1/slider2-2.png')
        .row.justify-content-around
          .col-xxl-7.col-xl-7.col-lg-7.col-11.mb-4.mb-md-0
            h4.mt-4.ms-4.mb-4 3. Tratados Bilaterales de Inversión (TBI)
            p.ms-4 Ayudan a proteger la inversión privada, desarrollar políticas orientadas al mercado en los países socios y promover las exportaciones de los países.
          .col-xxl-5.col-xl-5.col-lg-5.col-11
            figure
              img.mt-0.mt-lg-4(src='@/assets/curso/tema1/slider2-3.png')
    p.mt-5(data-aos="fade-right") Los derechos de aduana sobre las importaciones de mercancías se denominan aranceles, el arancel es considerado un impuesto que se le asigna a los bienes y servicios que provienen de otros países. Los aranceles a menudo tienen consecuencias tales como precios más altos al consumidor.
    p.mb-5(data-aos="fade-right-lef") Los aranceles se utilizan para restringir las importaciones y que, de esta manera, se compre lo que se fabrica y se produce en el país; es así como los consumidores ven menos atractivas las importaciones, debido al aumento de precio que estos productos importados poseen. Si el consumidor nacional sigue eligiendo el producto importado, el arancel esencialmente ha elevado el costo para el consumidor nacional.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/imagen17.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los gobiernos pueden imponer aranceles para aumentar los ingresos o para proteger las industrias nacionales, especialmente las incipientes, de la competencia extranjera. Los aranceles también pueden utilizarse como una extensión de la política exterior, ya que su imposición sobre las principales exportaciones de un socio comercial puede utilizarse para ejercer influencia económica.

</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema1',
  components: {
    BannerInterno,
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
