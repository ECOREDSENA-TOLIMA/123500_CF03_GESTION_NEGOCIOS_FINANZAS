(function(e){function a(a){for(var o,i,c=a[0],s=a[1],l=a[2],u=0,d=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(a);while(d.length)d.shift()();return t.push.apply(t,l||[]),n()}function n(){for(var e,a=0;a<t.length;a++){for(var n=t[a],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(t.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},r={app:0},t=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"5b28db28","chunk-0206bfa0":"6108c396","chunk-110f1f0b":"14de61aa","chunk-13a6037e":"84263748","chunk-179248a2":"9edcf98c","chunk-18f95272":"c0eb620e","chunk-2a9fce91":"38b23ec8","chunk-2c06842c":"f455c108","chunk-2d0c5615":"d60b8ef3","chunk-2d0e96ec":"c59b47ba","chunk-2d208d90":"1bae9f25","chunk-2d21d0e2":"28e9b3ff","chunk-2d22c123":"e87c0e45","chunk-2e80bb9a":"062b94b1","chunk-319206de":"c6a257d0","chunk-36769079":"741b1c43","chunk-4cdd78c0":"727e0af4","chunk-515a8379":"509c3fea","chunk-53ccb27e":"80b847bf","chunk-55d286b8":"8ab25299","chunk-59974754":"de79c833","chunk-5d1ce150":"a28e94e1","chunk-60cbc06b":"99e28ff0","chunk-623f2040":"a44c8f08","chunk-659152b8":"31952837","chunk-6a43ec24":"dd979d25","chunk-6e1e538a":"e6b4d96d","chunk-6e613899":"cd87ca87","chunk-766a929b":"89a10889","chunk-7794bb60":"4fb2d9ed","chunk-c796899c":"89d18d3a","chunk-e8a7823a":"5267626a","chunk-fde47172":"c0811666",comple:"9db5519f",creditos:"18a800db",glosario:"a1546f35",intro:"12b19ffa",referencias:"c6d0d706",sintesis:"d32cf173",tema1:"2249b398",tema2:"c1e8638f",tema3:"cfd6c3cb"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={actividad:1,"chunk-110f1f0b":1,"chunk-179248a2":1,"chunk-2a9fce91":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-5d1ce150":1,"chunk-60cbc06b":1,"chunk-623f2040":1,"chunk-6a43ec24":1,"chunk-6e1e538a":1,"chunk-6e613899":1,"chunk-766a929b":1,"chunk-7794bb60":1,comple:1,creditos:1,glosario:1,referencias:1,sintesis:1,tema1:1,tema2:1,tema3:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"e51bfe46","chunk-0206bfa0":"31d6cfe0","chunk-110f1f0b":"52141945","chunk-13a6037e":"31d6cfe0","chunk-179248a2":"52141945","chunk-18f95272":"31d6cfe0","chunk-2a9fce91":"52141945","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-36769079":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"60dfb1cc","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"8f30695b","chunk-5d1ce150":"52141945","chunk-60cbc06b":"09438581","chunk-623f2040":"52141945","chunk-659152b8":"31d6cfe0","chunk-6a43ec24":"52141945","chunk-6e1e538a":"3ba0a060","chunk-6e613899":"52141945","chunk-766a929b":"7d6759be","chunk-7794bb60":"52141945","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-fde47172":"31d6cfe0",comple:"6e2e524c",creditos:"35364e54",glosario:"90939b10",intro:"31d6cfe0",referencias:"12d74595",sintesis:"e51bfe46",tema1:"e51bfe46",tema2:"e51bfe46",tema3:"e51bfe46"}[e]+".css",r=s.p+o,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var l=t[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===r))return a()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===o||u===r)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var o=a&&a.target&&a.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=o,delete i[e],m.parentNode.removeChild(m),n(t)},m.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){i[e]=0})));var o=r[e];if(0!==o)if(o)a.push(o[2]);else{var t=new Promise((function(a,n){o=r[e]=[a,n]}));a.push(o[2]=t);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var d=new Error;l=function(a){u.onerror=u.onload=null,clearTimeout(m);var n=r[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",d.name="ChunkLoadError",d.type=o,d.request=i,n[1](d)}r[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=a,l=l.slice();for(var d=0;d<l.length;d++)a(l[d]);var m=u;t.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},r=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=t,s=n("2877"),l=Object(s["a"])(c,i,r,!1,null,null,null),u=l.exports,d=(n("b0c0"),n("d3b7"),n("3ca3"),n("ddb0"),n("2b0e")),m=n("8c4f"),f=n("ae58"),p=n("7e58");d["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema3").then(n.bind(null,"3eb5"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Estrategias de planeación y evaluación",descripcionCurso:"Las organizaciones pueden estar satisfaciendo necesidades inmediatas; sin embargo, no están asignando tiempo para predecir estratégicamente cuáles serán las necesidades de sus clientes en el futuro. Por ello, los colaboradores que tienen un alto desempeño o aquellos con un alto potencial son indispensables para la organización, ya que puedan abordar de manera más eficaz los objetivos y necesidades comerciales, a fin de mejorar el rendimiento a largo plazo, mientras que otros ven el talento como todos en una organización.",imagenBannerPrincipal:n("d756"),fondoBannerPrincipal:n("ce7c"),fondoBannerInterno:n("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:n("8f04")},{clases:["banner-principal-decorativo-2"],imagen:n("71f8")},{clases:["banner-principal-decorativo-3"],imagen:n("7d72")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Proceso administrativo",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Políticas organizacionales",hash:"politicas"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Gestión del talento humano",hash:"gestion"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Gestión comercial",hash:"comercial"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Planes tácticos",desarrolloContenidos:!0},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Planes operativos",desarrolloContenidos:!0},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Monitoreo y evaluación",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"4.1",titulo:"Indicadores de gestión",hash:"indicadores"},{icono:"far fa-file-alt",numero:"4.2",titulo:"Acciones de mejora",hash:"acciones"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis"},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar PDF",download:"downloads/CFA_03_123500.zip"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Luna, A. (2015). <em>Proceso administrativo.</em> Grupo Editorial Patria.",link:"https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/39415?page=59"},{referencia:"Reinoso, J. y Uribe, M. (2009). <em>Los indicadores de gestión y su relación con la cultura organizacional.</em> Sello Editorial Universidad del Tolima.",link:"https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/71131?page=17"},{referencia:"Taylor, A. y Feenstra, R. (2015). <em>Comercio internacional.</em> Editorial Reverté."},{referencia:"Torres, Z. (2015). <em>Planeación y control.</em> Grupo Editorial Patria.",link:"https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/39408?page=211"}],glosario:[{termino:"Balanza comercial",significado:"es la diferencia entre el valor total de sus exportaciones y el valor total de sus importaciones."},{termino:"Cultura",significado:"estudios de las organizaciones y de gestión que describen la psicología, las actitudes, experiencias, creencias y valores (personales y culturales) de una organización."},{termino:"Exportación",significado:"la venta de un bien o servicio a otro país, es decir, es un producto vendido por un país a otro."},{termino:"Expectativas",significado:"esperanza o posibilidad de conseguir una cosa. No actuar ni tomar ninguna determinación hasta ver lo que sucede."},{termino:"FODA",significado:"es una herramienta de estudio de la situación de una empresa analizando sus características internas y su situación externa en una matriz cuadrada."},{termino:"Importación",significado:"la compra de un bien o servicio procedente de otro país, es decir, es un producto comprado a otro país."},{termino:"Indicadores",significado:"datos o información que sirve para conocer o valorar las características y la intensidad de un hecho o para determinar su evolución futura."},{termino:"Manual de funciones",significado:"instrumento o herramienta de trabajo que contiene el conjunto de funciones, responsabilidades, competencias laborales y normas que desarrolla cada trabajador."},{termino:"Métodos de evaluación de desempeño",significado:"técnica que estudia los procesos de una empresa y cómo se pueden realizar de manera óptima por parte del empleado."},{termino:"Producto interno bruto",significado:"es el valor de los bienes y servicios finales producidos durante un año."},{termino:"Plan",significado:"modelo sistemático que detalla qué tareas se deben llevar a cabo para alcanzar un objetivo, para lo cual se establecen metas y tiempos de ejecución."},{termino:"Procedimiento",significado:"es un conjunto de acciones u operaciones que tienen que realizarse de la misma forma para obtener siempre el mismo resultado bajo las mismas circunstancias."},{termino:"Reclutamiento",significado:"proceso de atraer individuos oportunamente, en suficiente número y con los debidos atributos, y estimularlos para que soliciten empleo en la organización."},{termino:"Toma de decisiones",significado:"cubre cómo se involucran los miembros del grupo en la elección de alternativas de acción que afectan globalmente el trabajo y se concede libertad para acometer las tareas y solucionar los problemas cotidianos; incluye la pertinencia de las decisiones y la delegación entre niveles jerárquicos."}],complementario:[{tema:"Proceso administrativo",referencia:"Luna, A. (2015). Proceso administrativo. Grupo Editorial Patria. ",tipo:"Libro",link:"https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/39415?as_all=proceso__administrativo&as_all_op=unaccent__icontains&prev=as "},{tema:"Monitoreo y evaluación ",referencia:"Rodríguez, E. (2016). Planificación estratégica. <em>Fundamentos y herramientas de actuación.</em> Editorial Brujas.",tipo:"Libro",link:"https://revistas.unne.edu.ar/index.php/crn/article/view/3531"}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Líder Ecosistema de Recursos Educativos Digitales (RED)",centro:"Dirección General"},{nombre:"Liliana Victoria Morales Gualdrón",cargo:"Responsable de Línea de Producción",centro:"Centro de Comercio y Servicios - Regional Tolima"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Fabiola Sierra Sarmiento",cargo:"Experta Temática",centro:"CIES - Regional Norte de Santander"},{nombre:"Leydy Jhuliana Jaramillo Mejía ",cargo:"Diseñadora Instruccional ",centro:"Centro de Gestión Industrial - Regional Distrito Capital"},{nombre:"Silvia Milena Sequeda Cárdenas",cargo:"Evaluadora Instruccional",centro:"Centro de Gestión Industrial - Regional Distrito Capital"},{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor Metodológico y Pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Darío González",cargo:"Corrector de Estilo",centro:"Centro de Diseño y Metrología - Regional Distrito Capital"},{nombre:"Andrés Felipe Velandia Espitia",cargo:"Evaluación Instruccional",centro:"Centro de Comercio y Servicios - Regional Tolima"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable Equipo de Desarrollo Curricular",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Leyson Fabián Castaño Pérez",cargo:"Soporte Organizacional",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Zuleidy María Ruíz Torres",cargo:"Producción Audiovisual",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Wilson Andrés Arenales Cáceres",cargo:"Producción Audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Gilberto Junior Rodríguez Rodríguez",cargo:"Producción Audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Jorge Enrique Haylock Calderín",cargo:"Desarrollo Front-End",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"María Eugenia Mejía López",cargo:"Validación de Diseño y Contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"José Jaime Luis Tang Pinzón",cargo:"Diseño Web",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Oscar Daniel Espitia Marin",cargo:"Desarrollo Fullstack",centro:"Centro de Comercio y Servicios - Regional Tolima"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Norma Constanza Morales Cruz",cargo:"Evaluación de Contenidos Inclusivos y Accesibles",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Javier Mauricio Oviedo",cargo:"Validador y vinculador de recursos educativos digitales",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});o["a"].prototype.$config=v;var k=n("9224");o["a"].prototype.$package=k,new o["a"]({router:h,store:g["a"],render:function(e){return e(u)}}).$mount("#app")},"71f8":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-1.c64f6fa1.svg"},"7d72":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-3.63705af6.svg"},"8f04":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-2.a52e6d08.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.2","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.2","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,a,n){e.exports=n.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,a,n){},ce7c:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.e0470a93.png"},d756:function(e,a,n){e.exports=n.p+"img/banner-principal.b4143755.svg"}});
//# sourceMappingURL=app.f1e6656a.js.map