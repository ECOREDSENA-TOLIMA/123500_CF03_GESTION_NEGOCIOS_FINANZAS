<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span.text-dark 4
      h1 Monitoreo y evaluación
    p(data-aos="fade-right") El monitoreo y la evaluación son una combinación de recopilación, análisis de datos y evaluación de hasta qué punto un plan y programa o ciclo han cumplido o no sus objetivos. El monitoreo y la evaluación se han utilizado para evaluar el desempeño del proyecto, programa e iniciativas sociales. 
    p.mb-5(data-aos="fade-left") Pueden fortalecer significativamente la planeación, el diseño, el seguimiento y la evaluación de un plan, programa o proyecto, sin embargo, existen muchos desafíos prácticos para implementar y optimizar la recopilación de datos de extremo a extremo para la generación de informes. Ayudan a las organizaciones a determinar si las actividades se están llevando a cabo cuándo y en qué medida.
    AcordionA(data-aos="fade-right").otroacordion(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
      .row.justify-content-center(titulo="Ejemplo")
        .col-md-11.mb-4.mb-md-0
          p Una empresa ofrece capacitación y cursos para sus colaboradores del área de servicio al cliente, por tanto, se podría hacer seguimiento mensual de la cantidad de PQRS que se reciben, la cantidad de cursos aprobados, el número de colaboradores capacitados.
      .row.justify-content-center(titulo="Monitoreo")
        .col-md-11.mb-4.mb-md-0
          p El monitoreo es periódico y continuo, realizado después del inicio del plan y durante la duración de ese plan o momento. Un monitoreo generalmente se enfoca en los procesos que ocurren durante la implementación de un plan. Estos pueden incluir el seguimiento de las siguientes actividades:
          ul.lista-ul--color
            li 
              i.fas.fa-folder-open
              | Cuándo se implementaron los planes.
            li 
              i.fas.fa-folder-open
              | Qué departamentos o equipos entregaron actividades.
            li 
              i.fas.fa-folder-open
              | Con qué frecuencia ocurrieron ciertas actividades.
            li 
              i.fas.fa-folder-open
              | Número de productos entregados u horas de servicio.
            li 
              i.fas.fa-folder-open
              | Costos de implementación del plan.   
    //- .row.my-5(data-aos="fade-right")
    //-   .col-xxl-2.col-xl-2.col-lg-3.col-md-3.col-sm-4.col-5.ps-md-1
    //-     h4.ps-5.mb-1.fondo17.pb-1 Evaluación
    .h4.mb-4.mt-5(data-aos="zoom-down-right")
      span.titulo-herramientas Evaluación
    p(data-aos="fade-left") La evaluación de los planes y programas se enfoca en el desempeño y se usa principalmente para determinar si los beneficiarios realmente se han beneficiado debido a esas actividades. Por lo general, analiza los resultados y evalúa si se produjo un cambio entre el inicio y la finalización de un período. Idealmente, ese cambio debería poder atribuirse a las actividades realizadas.
    p.mb-5(data-aos="fade-right") Al inicio de un plan y un programa, es importante adquirir datos de referencia, que se utilizarán para comparar el progreso en cada momento de evaluación y al final del período del plan y/o programa. Al pensar en cómo medir los resultados, considere lo siguiente:
    .titulo-quinto.color-primario
      h5.color-texto Evaluación
        
    .row.justify-content-around(data-aos="fade-left")
      .col-xl-2.col-lg-3.mb-xl-0.mb-4
        .row.justify-content-center.align-items-center
          .col-lg-9.col-md-2.col-3.mb-lg-2.mb-0
            img(src='@/assets/curso/tema4/cerebro.svg')
          .col-lg-12.col-9.tarjeta.fondo15.hg-02.p-3
            p.text-center Comprenda cómo las actividades y acciones generan cambios.
      .col-xl-2.col-lg-3.mb-xl-0.mb-4
        .row.justify-content-center.align-items-center
          .col-lg-9.col-md-2.col-3.mb-lg-2.mb-0
            img(src='@/assets/curso/tema4/disene.svg')
          .col-lg-12.col-9.tarjeta.fondo15.hg-02.p-3
            p.text-center Diseñe
      .col-xl-2.col-lg-3.mb-xl-0.mb-4
        .row.justify-content-center.align-items-center
          .col-lg-9.col-md-2.col-3.mb-lg-2.mb-0
            img(src='@/assets/curso/tema4/engranaje.svg')
          .col-lg-12.col-9.tarjeta.fondo15.hg-02.p-3
            p.text-center Use resultados que sean relevantes para sus colaboradores.
      .col-xl-2.col-lg-3.mb-xl-0.mb-4
        .row.justify-content-center.align-items-center
          .col-lg-9.col-md-2.col-3.mb-lg-2.mb-0
            img(src='@/assets/curso/tema4/organigrama.svg')
          .col-lg-12.col-9.tarjeta.fondo15.hg-02.p-3
            p.text-center Incentive a los colaboradores para que le proporcionen datos importantes.
      .col-xl-2.col-lg-3.mb-xl-0.mb-4
        .row.justify-content-center.align-items-center
          .col-lg-9.col-md-2.col-3.mb-lg-2.mb-0
            img(src='@/assets/curso/tema4/blanco.svg')
          .col-lg-12.col-9.tarjeta.fondo15.hg-02.p-3
            p.text-center Asegúrese de tener herramientas adecuadas de gestión y análisis de datos y personal capacitado que tenga conocimiento de cómo usarlas.
    p.my-5(data-aos="fade-right") Cuando se realiza de manera efectiva, la implementación del seguimiento y la evaluación genera ventajas para las partes interesadas en todas las actividades realizadas por una organización. En general, orienta la toma de decisiones estratégicas tanto durante como después de la ejecución de los planes.
    .row(data-aos="fade-left")
      .col-lg-6
        .tarjeta-avatar-b.mb-5.nuevoalto
          .tarjeta-avatar-b__img
            img.imgsize3(src='@/assets/curso/tema4/avatar1.svg')
          .tarjeta.color-primario
            .p-4
              h4 Los procesos de seguimiento (recopilación de datos): 
              p Pueden significar que la organización realmente se preocupa por los resultados y la mejora continua.
              p Los datos se pueden utilizar para mejorar la eficiencia de la implementación, así como el diseño de la implementación.

      .col-lg-6
        .tarjeta-avatar-b.mb-5.nuevoalto
          .tarjeta-avatar-b__img
            img.imgsize3(src='@/assets/curso/tema4/avatar2.svg')
          .tarjeta.color-primario
            .p-4
              h4 Colaboradores:
              p Puede generar más aceptación y confianza en el compromiso de la organización con la misión si hay un esfuerzo claro, no solo para evaluar el progreso, sino también para usar esa evaluación para mejorar la generación de impacto. La realización de evaluaciones también puede generar más confianza entre los colaboradores y la organización.

      .col-lg-6
        .tarjeta-avatar-b.mb-5.nuevoalto
          .tarjeta-avatar-b__img
            img.imgsize3(src='@/assets/curso/tema4/avatar3.svg')
          .tarjeta.color-primario
            .p-4
              h4 Gestión ejecutiva:
              p Idealmente, la adaptación se vuelve más ágil.
              p Con datos relevantes y completos, los ejecutivos pueden construir argumentos mucho más persuasivos.

      .col-lg-6
        .tarjeta-avatar-b.mb-5.nuevoalto
          .tarjeta-avatar-b__img
            img.imgsize3(src='@/assets/curso/tema4/avatar4.svg')
          .tarjeta.color-primario
            .p-4
              h4 Finanzas:
              p El dinero para el impacto fluye hacia donde están los datos, y una buena implementación de monitoreo y evaluación puede abrir ese flujo, porque genera credibilidad en el impacto y, por supuesto, una comprensión más transparente de cuánto impacto se puede generar por valor de inversión.
    p(data-aos="fade-right") Cómo implementar monitoreo y evaluación en su organización:
    p.mb-5(data-aos="fade-right") La mayoría de las organizaciones comienzan con una estrategia de impacto. Dependiendo de sus antecedentes, diseñarán un enfoque orientado a los resultados.
    .row.justify-content-center(data-aos="fade-right")
      .col-xxl-4.col-xxl-4.col-lg-5.col-md-6.col-sm-10.col-12
        img.mb-4(src='@/assets/curso/tema4/imagen1.png')  
      .col-xxl-4.col-xxl-4.col-lg-5.col-md-6.col-sm-10.col-12
        ul.lista-ul--color
          li 
            i.fas.fa-folder-open
            | Operaciones basadas en resultados.
          li 
            i.fas.fa-folder-open
            | Diseñar métricas de calidad.
          li 
            i.fas.fa-folder-open
            | Uso de herramientas cuantitativas o cualitativas.
          li 
            i.fas.fa-folder-open
            | Definir los indicadores correctos para medir.
          li 
            i.fas.fa-folder-open
            | Distribuir los indicadores a lo largo de los procesos de seguimiento y evaluación.
    //- .row.my-5(data-aos="fade-left")
    //-   .col-xxl-3.col-xl-3.col-lg-4.col-md-5.col-sm-6.col-7.ps-md-1
    //-     h4.ps-5.mb-1.fondo17.pb-1 ¿Qué es un indicador?
    .h4.mb-4.mt-5(data-aos="zoom-down-right")
      span.titulo-herramientas ¿Qué es un indicador?

    p.mb-5(data-aos="fade-right") Un indicador es utilizado para medir algún aspecto de los planes, programas o proyectos en las etapas de planeación de la organización. Esto permite medir verdaderamente hasta qué punto lo que piensan o quieren que suceda realmente sucede. Los indicadores pueden ser tanto cuantitativos como cualitativos; según lo que se necesite medir y de qué manera, se puede ampliar a partir de:
    .row.justify-content-center(data-aos="fade-left")
      .col-12
        .titulo-sexto.color-acento-contenido
          p.mb-0 <b>Figura 11. </b> <i>Indicadores de seguimiento y evaluación</i>
        img.nomostrar1.my-2(src='@/assets/curso/tema4/imagencompleta.svg' alt="En la figura se describen los indicadores de seguimiento y evaluación")
        img.nomostrar2.my-2(src='@/assets/curso/tema4/imagen2.svg' alt="En la figura se describen los indicadores de seguimiento y evaluación")

    //- .row.my-5(data-aos="fade-left")
    //-   .col-xxl-4.col-xl-4.col-lg-5.col-md-7.col-sm-8.col-10.ps-md-1
    //-     h4.ps-5.mb-1.fondo17.pb-1 Métodos y diseños de evaluación
    .h4.mb-4.mt-5(data-aos="zoom-down-right")
      span.titulo-herramientas Métodos y diseños de evaluación
    p.mt-5(data-aos="fade-right") Determinar un método de evaluación requiere, primero, definir los objetivos únicos de la organización o programa específico. En general, esos objetivos se determinan a través del impacto y lo que se desea evaluar.
    p.mb-5(data-aos="fade-left") Ahora bien, se relacionan a continuación varias perspectivas de evaluación que logran los objetivos organizacionales:
    
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-8.col-md-11.col-sm-12.col-12
        .titulo-sexto.color-acento-contenido
          p.mb-0 <b>Figura 12. </b> <i>Perspectivas de una evaluación</i>
        figure
          img.d-lg-flex.d-none(src='@/assets/curso/tema4/imagen6.svg' alt='EN la figura se relaccionan las 4 perspectivas de una evaluación: formativa, de procesos, de resultados y de impacto.')
          img.d-lg-none.d-flex(src='@/assets/curso/tema4/imagen5.svg' alt='EN la figura se relaccionan las 4 perspectivas de una evaluación: formativa, de procesos, de resultados y de impacto.')
    
    p.my-5(data-aos="fade-left") Parte de la importancia de una evaluación formativa es que puede mejorar la probabilidad de éxito de la planeación porque alienta a confirmar la viabilidad y detectar posibles áreas problemáticas desde el principio, al mismo tiempo que promueve la rendición de cuentas durante la implementación.
    //- .row.my-5(data-aos="fade-right")
    //-   .col-xxl-4.col-xl-5.col-lg-6.col-md-7.col-sm-10.col-12.ps-md-1
    //-     h4.ps-5.mb-1.fondo17.pb-1 Informes de seguimiento y evaluación
    .h4.mb-4.mt-5(data-aos="zoom-down-right")
      span.titulo-herramientas Informes de seguimiento y evaluación
    p.mb-5(data-aos="fade-up") El monitoreo y la evaluación implementados correctamente pueden generar mejores resultados para las partes interesadas y un mejor retorno de la inversión para descubrir tendencias y tomar decisiones; generalmente, se piensa en recopilar datos en una hoja de cálculo e introducirlos en herramientas de visualización comunes para presentar los informes de este monitoreo y evaluación.
    .row.justify-content-center(data-aos="fade-right")
      .col-xxl-10.col-lg-10.col-xl-10.col-md-12
        .cajon.color-primario.p-4.mb-4.fondo16
          p Los informes de seguimiento y evaluación son presentados a la parte directiva de la organización, este documento contiene la información recolectada a través de las actividades y funciones desempeñadas para el cumplimiento de los objetivos que se describen en los diferentes planes. Los directivos utilizan esta información para tomar medidas en la corrección de posibles situaciones que estén fuera de control y que perjudiquen el alcance de las metas. Para llevar a cabo estos informes, previamente se estipularon las intervenciones que suministrarán los datos que se analizan y se plasman en el documento.
    separador
    #indicadores.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 4.1. Indicadores de gestión
    p(data-aos="fade-right") Los indicadores tienen la misión de comunicar, de forma sencilla y a través de la cuantificación, los resultados del proceso o de la operación. Una gestión se basa en el adecuado seguimiento de mediciones preestablecidas también conocidas. Esto se debe a que asegura un seguimiento recurrente del desempeño en tareas esenciales para el crecimiento y la sostenibilidad del negocio. Reinoso y Uribe (2009, p. 17) definen los indicadores de gestión como la medida gerencial que evalúa el desempeño de la organización de cara a los objetivos y metas establecidas.
    p(data-aos="fade-left") Algunos indicadores de gestión:
    p.mb-5(data-aos="fade-right") Hay que tener en cuenta que de poco sirven si no forman parte de la planificación estratégica de la empresa:
    .tarjeta--container.row.mb-5.justify-content-center(data-aos="fade-right")
      .col-md.tarjeta.fondo4A.p-5.mx-2.mb-4
        .row.justify-content-center.mb-4
          .col-5.col-xxl-9.col-xl-9.col-lg-8.col-md-7.col-sm-5
            figure
              img(src='@/assets/curso/tema4/imagen7.svg')
          
        h4.text-center Rentabilidad
        p.text-center Mide la proporción porcentual entre las ventas totales y la utilidad. Relación entre la ganancia y la inversión.

      .col-md.tarjeta.fondo4B.p-5.mx-2.mb-4
        .row.justify-content-center.mb-4
          .col-5.col-xxl-9.col-xl-9.col-lg-8.col-md-7.col-sm-5
            figure
              img(src='@/assets/curso/tema4/imagen8.svg')
          
        h4.text-center Productividad
        p.text-center Mide los diversos recursos - financieros, laborales, de espacio y tiempo- para generar un producto o servicio.

      .col-md.tarjeta.fondo4A.p-5.mx-2.mb-4
        .row.justify-content-center.mb-4
          .col-5.col-xxl-9.col-xl-9.col-lg-8.col-md-7.col-sm-5
            figure
              img(src='@/assets/curso/tema4/imagen9.svg')
          
        h4.text-center Rotación
        p.text-center Mide la rotación de los colaboradores de la empresa; si es muy alta, es un problema que requiere revisar estrategias de retención, capacitación, entre otros.

      .col-md.tarjeta.fondo4B.p-5.mx-2.mb-4.col-lg-4.col-xl-3.col-xxl-3
        .row.justify-content-center.mb-4
          .col-5.col-xxl-9.col-xl-9.col-lg-8.col-md-7.col-sm-5
            figure
              img(src='@/assets/curso/tema4/imagen10.svg')
          
        h4.text-center Conversión
        p.text-center Mide la cantidad de personas que se convierten en clientes potenciales de la organización.
    p.my-5(data-aos="fade-right") Características de los indicadores de gestión:
    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-xxl-4.col-xxl-4.col-lg-4.col-md-10.col-sm-10.col-12
        img.mb-5(src='@/assets/curso/tema4/imagen21.png')  
      .col-xxl-8.col-xxl-8.col-lg-8.col-md-12.col-sm-12.col-12
        ul.lista-ul--color
          li 
            i.fas.fa-folder-open.mb-4
            | Considere lo que necesitan saber para establecer los indicadores de gestión.
          li 
            i.fas.fa-folder-open.mb-4
            | Deben realizar un seguimiento de cómo progresan regularmente los objetivos de toda la empresa.
          li 
            i.fas.fa-folder-open.mb-4
            | Simples de entender y medir.
          li 
            i.fas.fa-folder-open.mb-4
            | Los colaboradores han de tener conocimiento de qué se les mide y cómo se calcula.
          li 
            i.fas.fa-folder-open.mb-4
            | Han de estar filtrados con los objetivos estratégicos, tácticos y operativos.
          li 
            i.fas.fa-folder-open.mb-4
            | Que sean medibles para analizar el desempeño de los colaboradores.
          li 
            i.fas.fa-folder-open.mb-4
            | Presentar informes sobre los resultados arrojados para que se puedan tomar decisiones oportunas.
          li 
            i.fas.fa-folder-open.mb-5
            | Que sean visibles en toda una organización para manifestarles a los colaboradores cómo su trabajo está afectando los objetivos generales de la organización.
    separador
    #acciones.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 4.2. Acciones de mejora
    p.mb-5(data-aos="fade-right") Las acciones de mejora son gestionadas por la organización para centralizar las actividades y alinearlas con las normas, estándares y la protección de datos. Las acciones de mejora se pueden asignar a los colaboradores de la organización para realizar trabajos de implementación. Para hablar de una adecuada implementación de acciones de mejora, es necesario contar con la utilización de las diferentes técnicas de análisis de causas que permiten conocer los síntomas y problemas que están dando paso a las vulnerabilidades y riesgos de la organización.
    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ZhwkNEQWqx8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mt-5(data-aos="fade-right") Las técnicas de análisis de causas son procedimientos para identificar los factores de los problemas y cómo poder responder a ellos, se basan en la idea de que la gestión eficaz debe encontrar una manera de prevenir los problemas antes de que ocurran y afecten el trabajo de la organización. Por lo anterior, son un referente en la resolución de problemas para analizar, mejorar y controlar, ya que, al identificar la causa, la organización puede encontrar una solución permanente para reducir o eliminar la posibilidad de que vuelvan a ocurrir en el futuro. Juegan un papel importante en el desarrollo lógico de acciones de mejora para resolver los problemas.
    p.mb-5(data-aos="fade-left") A continuación, se indican algunas de estas técnicas útiles para poder formular acciones de mejora pertinentes:
    .tarjeta.fondo2.p-4.mb-5(data-aos="fade-right")
      SlyderA(tipo="b")
        .row.justify-content-around
          .col-lg-7.col-md-7.col-sm-11.col-12.mb-4.mb-md-0
            h4.mt-4.ms-0.ms-lg-4.mb-4 Diagrama de Pareto
            p.ms-0.ms-lg-4 Esta herramienta se usa para destapar los problemas y las alternativas de soluciones a realizar, ya que arroja como resultado un gráfico de barras en el que el tamaño de las barras refleja la huella de los problemas (de izquierda a derecha: impacto más alto hasta el impacto más bajo). De esta manera, ayuda a comprender hacia dónde dirigir los esfuerzos de mejora.  El propósito es disminuir las barras más grandes plasmadas en el gráfico, ya que su eliminación contribuye más a la mejora general que reducir primero las barras más pequeñas. Una opción para crear un diagrama de Pareto es a través de la herramienta ofimática de Excel, puesto que este programa ya incorpora dentro de sus gráficas el diagrama de Pareto.
          .col-lg-5.col-md-11.col-sm-11.col-12
            figure
              img.mt-4(src='@/assets/curso/tema4/imagen11.png')
        .row.justify-content-around
          .col-lg-7.col-md-7.col-sm-11.col-12.mb-4.mb-md-0
            h4.mt-4.ms-0.ms-lg-4.mb-4 Diagrama de dispersión
            p.ms-0.ms-lg-4 Conjunto de datos numéricos con una variable en cada eje según su relación.  Se usa ampliamente para analizar problemas, ya que muestra cómo las variables se relacionan entre sí; el eje horizontal representa el tiempo, es decir, fechas, y el eje vertical representa el tiempo calculado en días. Por ende, cada punto que se refleja en el diagrama representa una actividad, además de reflejar la correlación entre el problema y la causa, permitiendo así evaluar cuál tiene el mayor impacto y urge resolver de inmediato. Se puede realizar en Excel o PowerPoint.
          .col-lg-5.col-md-11.col-sm-11.col-12
            figure
              img.mt-4(src='@/assets/curso/tema4/imagen12.png')
        .row.justify-content-around
          .col-lg-7.col-md-7.col-sm-11.col-12.mb-4.mb-md-0
            h4.mt-4.ms-0.ms-lg-4.mb-4 Diagrama de espina de pescado
            p.ms-0.ms-lg-4 Diagrama de causa y efecto en forma de espina de pescado, donde el problema se representa como la cabeza del pez y las espinas representan las principales causas identificadas. Puede ser efectivo para la mejora general del proceso y útil para generar lluvia de ideas en las situaciones en que se carece de suficientes datos para respaldar los esfuerzos en la resolución de los problemas. Ofrece visualmente la existencia de un problema, sus principales causas y las divisiones de estas causas en subcausas de apoyo, además, una perspectiva de la raíz del problema, para que la organización, en cabeza del equipo que hace uso de esta herramienta, analice las acciones de mejora para mitigar y controlar la existencia de las causas que germinan el problema.
          .col-lg-5.col-md-11.col-sm-11.col-12
            figure
              img.mt-4(src='@/assets/curso/tema4/imagen13.png')
        .row.justify-content-around
          .col-lg-7.col-md-7.col-sm-11.col-12.mb-4.mb-md-0
            h4.mt-4.ms-0.ms-lg-4.mb-4 Método de los 5 porqués
            p.ms-0.ms-lg-4 Permite llegar a la esencia del problema y luego solucionarlo, además de lograr una mejora continua en cualquier nivel de la organización. Para efectuar este método, ha de reunirse un equipo de trabajo, para que comprendan lo que realmente sucede en el lugar de trabajo y recopilar la información necesaria para descifrar el problema, el alcance y encontrar una solución efectiva al finalizar. La pregunta se repite tantas veces como sea necesario, por parte del líder del equipo, para revelar el problema inicial y tomar las medidas necesarias para implementar la mejor acción de mejora.
          .col-lg-5.col-md-11.col-sm-11.col-12
            figure
              img.mt-4(src='@/assets/curso/tema4/imagen14.png')
        .row.justify-content-around
          .col-lg-7.col-md-7.col-sm-11.col-12.mb-4.mb-md-0
            h4.mt-4.ms-0.ms-lg-4.mb-4 Árbol del problema
            p.ms-0.ms-lg-4 A través del diseño de un árbol que recopila la información de lo que está pasando, por qué está pasando y qué lo provocó. Sustenta en la raíz las causas; en el tronco, presenta el problema principal; y en las ramas u hojas, los efectos como resultados de las causas. Permite establecer el problema, las causas y los efectos, para interpretar, comprender y analizar mejor el problema. Con la información que arroja el árbol del problema, permite hacer varias cosas en la planificación de las acciones de mejora.
          .col-lg-5.col-md-11.col-sm-11.col-12
            figure
              img.mt-4(src='@/assets/curso/tema4/imagen15.png')
    //- .row.my-5(data-aos="fade-right")
    //-   .col-xxl-3.col-xl-4.col-lg-5.col-md-6.col-sm-9.col-10.ps-md-1
    //-     h4.ps-5.mb-1.fondo17.pb-1 Tipos de acciones de mejora
    .h4.mb-4.mt-5(data-aos="zoom-down-right")
      span.titulo-herramientas Tipos de acciones de mejora
    .row.justify-content-center(data-aos="fade-left")
      .col-xxl-8.col-xl-9.col-lg-10.col-sm-12.col-md-12.col-12
        p.px-2.px-sm-3.py-0.py-sm-1.p-sm-2.p-xxl-3.fondo14.mx-1.mx-sm-2.mx-xxl-3.margenadicional Son recursos que se utilizan para aprovechar la productividad, reducir los errores y orientar el camino de la organización hacia la efectividad de los procesos en las unidades administrativas de la organización. Hay muchos modelos de mejora para desafiar los problemas, alcanzar los ideales propuestos, ofrecer control de calidad y mejorar la eficiencia, además de contribuir en la gestión de los procesos.
        img.px-1.py-0.py-sm-0(src='@/assets/curso/tema4/imagen16.png')

    AcordionA.otroacordion(data-aos="fade-right").my-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
      .row.justify-content-center(titulo="Acciones preventivas")
        .col-md-11.mb-4.mb-md-0
          p Se toman medidas preventivas para solucionar la causa de un problema o de un proceso antes de que suceda, es decir, descifrar el problema antes de que aparezca y tomar las medidas necesarias para atacar la causa del problema. En síntesis, se utiliza:
          ul.lista-ul--color
            li 
              i.fas.fa-folder-open
              | Antes de que suceda el problema, es decir, ante el hallazgo de un riesgo.
            li 
              i.fas.fa-folder-open
              | Para reemplazar el riesgo inminente por la mejora continua en el momento adecuado.
            li 
              i.fas.fa-folder-open
              | Para evaluar la causa y establecer acciones de mejora para prevenir la ocurrencia.
          p.my-5 En conclusión, las medidas preventivas son recursos útiles activos ante un problema potencial que se puede prever antes de que ocurra.
      .row.justify-content-center(titulo="Acciones correctivas")
        .col-md-11.mb-4.mb-md-0
          p Son actividades que se establecen para corregir el problema presentado, son las acciones efectuadas para neutralizar el problema y controlarlo a través de las medidas necesarias para evitar que vuelva a suceder. En síntesis, se utiliza:
          ul.lista-ul--color
            li 
              i.fas.fa-folder-open
              | Después de que sucede el problema.
            li 
              i.fas.fa-folder-open
              | Para evaluar la causa y un plan para prevenir la irregularidad.
            li 
              i.fas.fa-folder-open
              | Como actividad propuesta después de la ocurrencia del hecho.
    
    .row.justify-content-center(data-aos="fade-left")
      .col-xxl-10.col-xl-10.col-lg-11
        img.nomostrar1.my-2(src='@/assets/curso/tema4/imagenentera.svg')
      .col-md-8.col-sm-8.col-8
        img.nomostrar2.my-2(src='@/assets/curso/tema4/imagen17.svg')
      .row.justify-content-center
        .col-md-2.col-sm-2.col-2
          img.nomostrar2.my-2(src='@/assets/curso/tema4/mas.svg')
      .col-md-8.col-sm-8.col-8
        img.nomostrar2.my-2(src='@/assets/curso/tema4/imagen18.svg')
      .row.justify-content-center
        .col-md-2.col-sm-2.col-2
          img.nomostrar2.my-2(src='@/assets/curso/tema4/igual.svg')
      .col-md-8.col-sm-8.col-8
        img.nomostrar2.my-2(src='@/assets/curso/tema4/imagen19.svg')

    p.my-5(data-aos="fade-right") Ahora bien, las acciones de mejora impulsan los procesos de la organización que suelen estar sujetos a la existencia de problemas y situaciones que ponen en riesgo la rentabilidad de la organización; es por ello que las acciones que se planteen deben conducir a resultados positivos y oportunidades de inhibir el riesgo en los procesos. Las acciones de mejora han de contar con el siguiente esquema:
    .row.justify-content-center(data-aos="fade-left")
      .col-xxl-5.col-xxl-5.col-lg-5.col-md-12.col-sm-12.col-12
        ul.lista-ul--color
          li 
            i.fas.fa-folder-open
            | <p style="font-weight: 700;">Planificación de las acciones: <span style="font-weight: 500;">basados en el análisis de las técnicas de causas, se procede a formular las acciones que se implementarán para corregir los síntomas y problemas latentes en la organización.</span></p>
          li 
            i.fas.fa-folder-open
            |  <p style="font-weight: 700;">Estado de la acción: <span style="font-weight: 500;">acción implementada, aún por implementar.</span></p>
          li 
            i.fas.fa-folder-open
            | <p style="font-weight: 700;">Fecha de implementación de la acción: <span style="font-weight: 500;">una vez la acción se haya planificado y su estado sea aún por implementar.</span></p>
          li 
            i.fas.fa-folder-open
            | <p style="font-weight: 700;">Notas: <span style="font-weight: 500;">espacio para detallar observaciones sobre la implementación.</span></p>

      .col-xxl-5.col-xxl-5.col-lg-5.col-md-10.col-sm-10.col-12
        img.mb-4(src='@/assets/curso/tema4/imagen20.png')
    .row.justify-content-center.my-5(data-aos="fade")
      .col-xxl-10.col-lg-10.col-xl-10.col-md-12
        .cajon.color-primario.p-4.mb-4.fondo16
          p Las acciones de mejora llevan a la solución que se requiere ante la detección de las causas que sitúan el riesgo, por ello, las acciones brindan una adecuada guía de implementación detallada, para que sea efectuada por los colaboradores que fueron asignados para realizar el trabajo de puesta en marcha.         
</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema4',
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
