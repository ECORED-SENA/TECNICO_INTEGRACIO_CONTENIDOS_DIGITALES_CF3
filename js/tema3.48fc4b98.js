(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tema3"],{"025b":function(a,e,i){a.exports=i.p+"img/tema3-2-tabs3.371704b1.svg"},"0372":function(a,e,i){a.exports=i.p+"img/tema3-acordeon3.47f851e0.svg"},"1b09":function(a,e,i){a.exports=i.p+"img/tema3-acordeon5.c426b88d.svg"},"1ecb":function(a,e,i){a.exports=i.p+"img/tema3-acordeon7.e688cbed.svg"},2482:function(a,e,i){"use strict";i("f4bb")},"26c6":function(a,e,i){a.exports=i.p+"img/tema3-2-tabs1.e2f124d6.svg"},"5d20":function(a,e,i){a.exports=i.p+"img/tema3-2-tabs2.857f645a.svg"},6225:function(a,e,i){a.exports=i.p+"img/tema3-2-tabs7.7572bfca.svg"},"6c18":function(a,e,i){a.exports=i.p+"img/tema3-banner.f6341e35.png"},"91e3":function(a,e,i){"use strict";var t=function(){var a=this,e=a.$createElement,i=a._self._c||e;return i("div",{staticClass:"acordion"},[a._l(a.elements,(function(e,t){return i("div",{key:e.id,staticClass:"p-3 pb-0 p-md-4 pb-md-0",class:[{acordeon__selected:a.selected===e.id},a.cardClass,"mb-3"]},[i("div",{staticClass:"acordion__header mb-3 mb-md-4",on:{click:function(i){a.selected=a.selected!=e.id?e.id:0},mouseover:function(e){a.mostrarIndicador=(!a.mostrarIndicador||1!==t)&&a.mostrarIndicador}}},[i("div",{staticClass:"d-flex align-items-center"},["a"===a.tipo?i("div",{staticClass:"acordion__accion"},[i("div",{staticClass:"acordion__accion__btn--a h3 mb-0 me-3"},[a.selected===e.id?i("i",{staticClass:"fas fa-minus"}):i("i",{staticClass:"fas fa-plus"}),a.mostrarIndicador&&1===t?i("div",{staticClass:"indicador__container"},[i("div",{staticClass:"indicador--click indicador--sm"})]):a._e()])]):a._e(),i("div",{staticClass:"acordion__titulo"},[i("h4",{staticClass:"mb-0"},[a._v(a._s(e.titulo))])])]),"b"===a.tipo?i("div",{staticClass:"acordion__accion"},[i("div",{staticClass:"acordion__accion__btn--b h4 mb-0"},[a.selected===e.id?i("i",{staticClass:"fas fa-angle-up"}):i("i",{staticClass:"fas fa-angle-down"}),a.mostrarIndicador&&1===t?i("div",{staticClass:"indicador__container indicador--left"},[i("div",{staticClass:"indicador--click indicador--sm"})]):a._e()])]):a._e()]),i("div",{staticClass:"acordion__contenido",style:{height:a.rendered&&a.selected===e.id?a.getActiveHeight(e.id):0}},[i("div",{directives:[{name:"child",rawName:"v-child",value:e.elm,expression:"elm.elm"}],ref:e.id,refInFor:!0,staticClass:"acordion__contenido__item pb-3 pb-md-4"})])])})),i("div",{staticClass:"hidden-slot"},[a._t("default")],2)],2)},s=[],o=i("ab14"),r={name:"AcordeonB",mixins:[o["a"]],props:{claseTarjeta:{type:String,default:""},tipo:{type:String,default:"a"}},data:function(){return{mostrarIndicador:!0}},computed:{cardClass:function(){return this.claseTarjeta.length?this.claseTarjeta:"tarjeta tarjeta--blanca mb-3"}},mounted:function(){var a=this;this.$nextTick((function(){setTimeout((function(){a.domUpdated()}),5e3)}))}},n=r,c=(i("2482"),i("2877")),d=Object(c["a"])(n,t,s,!1,null,null,null);e["a"]=d.exports},"960b":function(a,e,i){a.exports=i.p+"img/tema3-acordeon8.211df58b.svg"},aafc:function(a,e,i){a.exports=i.p+"img/tema3-2-tabs6.d9e5a570.svg"},ab14:function(a,e,i){"use strict";e["a"]={data:()=>({mainId:Math.floor(1e7*Math.random()),selected:0,elements:[],stateStr:"",rendered:!1,firstSelection:!0}),watch:{menuState(){this.domUpdated()}},created(){window.addEventListener("resize",this.domUpdated)},mounted(){this.$nextTick(()=>{this.crearElementos()})},computed:{menuState(){return this.$store.getters.isMenuOpen},navObj(){if(!this.elements.length||!this.secuencial)return{};const a=this.elements.map(a=>a.id),e=a.indexOf(this.selected);if(e<0)return{};const i={};return 0===e?i.next=a[e+1]:(e+1===a.length||(i.next=a[e+1]),i.back=a[e-1]),i}},beforeDestroy(){window.removeEventListener("resize",this.domUpdated)},updated(){this.$nextTick(()=>{this.getStateStr()!=this.stateStr&&this.crearElementos()})},methods:{crearElementos(){return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((a,e)=>{const i=a.data&&a.data.attrs?a.data.attrs:[];return{id:this.mainId+e+1,elm:a.elm,...i}}),this.firstSelection&&(this.selected=this.selected>0?this.selected:this.elements[0].id),void(this.stateStr=this.getStateStr())):[]},getActiveHeight(a){return this.$refs[a][0].scrollHeight+"px"},getStateStr(){return this.$slots.default.map(a=>a.elm.outerHTML).join("")},domUpdated(){this.rendered=!1,setTimeout(()=>{this.rendered=!0},100)}}}},ab8bf:function(a,e,i){a.exports=i.p+"img/tema3-acordeon1.ca0a5038.svg"},be38:function(a,e,i){a.exports=i.p+"img/tema3-2-tabs4.7e4d15f0.svg"},c4de:function(a,e,i){a.exports=i.p+"img/tema3-acordeon2.8f3e3e8e.svg"},db60:function(a,e,i){a.exports=i.p+"img/tema3-acordeon6.1c256ed2.svg"},df8c:function(a,e,i){a.exports=i.p+"img/tema3-acordeon4.0f56913d.svg"},eb46:function(a,e,i){"use strict";i.r(e);var t=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"curso-main-container pb-3"},[t("BannerInterno"),t("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[a._m(0),a._m(1),t("p",{attrs:{"data-aos":"fade"}},[t("span",{staticClass:"etiqueta"},[a._v("Una imagen digital, ")]),a._v("es una representación bidimensional, resultado del proceso que genera un computador por medio de una matriz numérica binaria (ceros y unos), esta puede ser estática o en movimiento. Para entenderlo mejor, "),t("span",{staticClass:"etiqueta"},[a._v("se puede definir como una imagen que ha sido procesada y generada por computador o medios digitales, ")]),a._v("ya sea obtenida por medio de dispositivos o periféricos de entrada como escáneres y cámaras digitales (digitalización) o directamente mediante "),t("italic",[a._v("software ")]),a._v("especializado resultado de dibujarlo con el ratón del computador y tablas digitalizadoras. Las imágenes digitales poseen atributos tales como tamaño, ancho y alto y tipo de codificación; lo que permite definir qué programa informático puede editarlo; la profundidad de paleta de colores, y la cantidad de detalle de píxeles.")],1),t("p",{attrs:{"data-aos":"fade"}},[a._v("Partiendo de dicho proceso, se identifican varios tipos de imagen digital, como los descritos a continuación: ")]),t("Separador"),a._m(2),t("p",{attrs:{"data-aos":"fade"}},[a._v("La información digital se almacena en archivos que se componen de un nombre, un punto y una extensión que hacen referencia al programa donde dicho archivo se puede reproducir y editar. Esto define si los archivos son de texto, de audio, de video, de ejecución o de sistema, comprimido, de lectura o de imagen, que es lo que concierne a este tema. ")]),t("p",{staticClass:"mb-4",attrs:{"data-aos":"fade"}},[a._v("Los formatos digitales de imagen más importantes son:")]),t("AcordeonB",{attrs:{tipo:"a","clase-tarjeta":"tarjeta back1"}},[t("div",{staticClass:"row px-lg-5",attrs:{titulo:"JPG o JPEG"}},[t("div",{staticClass:"col-lg-2 px-lg-4"},[t("img",{staticClass:"px-lg-3",attrs:{src:i("ab8bf"),alt:"JPG o JPEG"}})]),t("div",{staticClass:"col-lg-10"},[t("p",[a._v("Su nombre surge de la sigla del comité de expertos que creó este estándar de compresión y codificación de imágenes fijas, "),t("italic",[a._v("Joint Photographic Experts Group ")]),a._v("(Grupo de expertos de fotografía conjunta, sería su traducción al español). Es un formato que comprime la información digital de la imagen, tanto en color como en escala de grises, conservando una alta calidad contra su peso de archivo liviano. Es el formato de imagen más común y en el cual resultan y comprimen las capturas de las cámaras fotográficas digitales. ")],1)])]),t("div",{staticClass:"row px-lg-5",attrs:{titulo:"GIF"}},[t("div",{staticClass:"col-lg-2 px-lg-4"},[t("img",{staticClass:"px-lg-3",attrs:{src:i("c4de"),alt:"GIF"}})]),t("div",{staticClass:"col-lg-10"},[t("p",[t("italic",[a._v("Graphics Interchange Format ")]),a._v("(en español «Formato de Intercambio de Gráficos») es un formato de imagen digital utilizado ampliamente en internet debido a su rápida carga y descarga a través de páginas web, tanto para imágenes como para animaciones. Este es un formato que no pierde calidad para imágenes de una paleta de hasta 256 colores. En los años 2000 fue desplazada por el formato SWF de "),t("italic",[a._v("Flash, ")]),a._v("como el formato de animación para internet de mayor preferencia, ya que además de superarlo en conservación de calidad y alta posibilidad de paleta de colores, también permitía integrar interactividad y audio. Sin embargo, al caer este nuevo formato también en la obsolescencia por incompatibilidad con los dispositivos móviles que iban saliendo al mercado, el GIF recobró uso e importancia. Técnicamente, al conservarse sencillo y liviano, es un formato que parece no pasar de moda. Según Katherine Martin, responsable del diccionario de "),t("italic",[a._v("Oxford, ")]),a._v("el GIF, además de haberse convertido en un medio de expresión de la cultura pop, también se ha convertido en una herramienta de investigación digital que se mantiene vigente. Permite la conservación de parámetros de alfa, más conocida como información de transparencia. ")],1)])]),t("div",{staticClass:"row px-lg-5",attrs:{titulo:"BMP"}},[t("div",{staticClass:"col-lg-2 px-lg-4"},[t("img",{staticClass:"px-lg-3",attrs:{src:i("0372"),alt:"BMP"}})]),t("div",{staticClass:"col-lg-10"},[t("p",[t("italic",[a._v("Bit Maps Protocol ")]),a._v("o imagen de mapa de bits es un formato propio del sistema operativo "),t("italic",[a._v("Microsoft Windows. ")]),a._v("Se caracteriza por tener un rango alto de paletas de colores que van desde los 16,7 millones (24 "),t("italic",[a._v("bits) ")]),a._v("hasta menos de 256 colores (8 "),t("italic",[a._v("bits), ")]),a._v("por lo cual puede tener nula pérdida de calidad pero esto conlleva a poca eficiencia en su uso de espacio de disco y movimiento en internet. En caso de requerir su fácil manipulación tanto en software como en internet, se recomienda su uso cuando se requiere conservar una alta calidad y resolución de la imagen, de lo contrario es mejor convertirlo a formatos más livianos tales como JPG, GIF o PNG. ")],1)])]),t("div",{staticClass:"row px-lg-5",attrs:{titulo:"PNG"}},[t("div",{staticClass:"col-lg-2 px-lg-4"},[t("img",{staticClass:"px-lg-3",attrs:{src:i("df8c"),alt:"PNG"}})]),t("div",{staticClass:"col-lg-10"},[t("p",[a._v("Los gráficos portátiles de red o "),t("italic",[a._v("Portable Network Graphics, ")]),a._v("fueron desarrollados principalmente para solucionar las carencias del formato GIF, al permitir almacenar una mayor profundidad de colores conservando un peso liviano y la información de canal alfa que, a diferencia del GIF, que solo permite dos estados alfa (totalmente transparente o totalmente opaco) también permite canal alfa de semi transparencia, propios de objetos translúcidos. Se recomienda usarlo como secuencia de imágenes para compilarlo como video animado con silueteado de transparencia, propicio para componer sobre otro video o imagen. Como por ejemplo el logotipo del noticiero girando en una esquina de la pantalla.")],1)])]),t("div",{staticClass:"row px-lg-5",attrs:{titulo:"TIFF"}},[t("div",{staticClass:"col-lg-2 px-lg-4"},[t("img",{staticClass:"px-lg-3",attrs:{src:i("1b09"),alt:"TIFF"}})]),t("div",{staticClass:"col-lg-10"},[t("p",[a._v("Es la sigla en inglés de "),t("italic",[a._v("Tagged Image Format ")]),a._v("(Formato de imagen etiquetada), es la precursora del formato PDF. Es un formato de imagen que conserva una alta calidad y compresión no destructiva, por lo que también posee un alto peso de archivo. Es un formato de predilección en el área del periodismo gráfico ya que permite almacenar más de una imagen de excelente calidad en un mismo archivo, tal como lo es el PDF en la actualidad. Una de las ventajas del formato TIFF es que no usa compresión, lo que resulta en la nula pérdida en el detalle de la imagen al ser guardada. Si una imagen en otro formato se guarda varias veces, esta pierde calidad progresivamente; esto no sucede con el formato TIFF, lo cual la convierte en uno de los mejores formatos para almacenamiento e intercambio de datos gráficos.")],1)])]),t("div",{staticClass:"row px-lg-5",attrs:{titulo:"PSD"}},[t("div",{staticClass:"col-lg-2 px-lg-4"},[t("img",{staticClass:"px-lg-3",attrs:{src:i("db60"),alt:"PSD"}})]),t("div",{staticClass:"col-lg-10"},[t("p",[a._v("Los archivos de imagen "),t("italic",[a._v("Photoshop Document ")]),a._v("o "),t("italic",[a._v("Documento Photoshop ")]),a._v("es el archivo nativo editable de la herramienta de edición de imagen digital, "),t("italic",[a._v("Adobe Photoshop. ")]),a._v("Al ser el archivo editable esta conserva las características del "),t("italic",[a._v("software ")]),a._v("como capas, efectos y máscaras, entre otros. Posee grandes posibilidades de integración y compatibilidad con otros productos de la casa "),t("italic",[a._v("Adobe, ")]),a._v("tales como "),t("italic",[a._v("Illustrator, After Effects, InDesign y Premiere. ")]),a._v("Hay que entender que es un formato de imagen rasterizada, lo que quiere decir que es una imagen compuesta de píxeles, por lo que según la resolución (pixeles/pulgada), puede llegar a perder calidad al ser expandida o impresa fuera de sus dimensiones originales.")],1)])]),t("div",{staticClass:"row px-lg-5",attrs:{titulo:"RAW"}},[t("div",{staticClass:"col-lg-2 px-lg-4"},[t("img",{staticClass:"px-lg-3",attrs:{src:i("1ecb"),alt:"RAW"}})]),t("div",{staticClass:"col-lg-10"},[t("p",[a._v("Como su nombre lo indica, este formato de imagen contiene la información en bruto o “cruda”, lo que quiere decir que conserva la totalidad de los datos de la imagen tal cual ha sido captada por el sensor digital de la cámara, sea fotográfica o de otro tipo. Igualmente posee, a través de "),t("italic",[a._v("software ")]),a._v("de revelado digital, como lo es "),t("italic",[a._v("Lightroom, ")]),a._v("la facultad de edición posterior a la captura de la imagen, por lo que se pueden modificar parámetros propios de la cámara, como lente, obturación y sensibilidad para mejorar o modificar estas propiedades en la imagen ya grabada, gracias a estas posibilidades, este tipo de archivo también recibe el nombre de “negativo digital”. Por lo general contiene una profundidad de color de 36 a 48 bits/píxel y un tamaño de archivo muy grande. ")],1)])]),t("div",{staticClass:"row px-lg-5",attrs:{titulo:"PDF"}},[t("div",{staticClass:"col-lg-2 px-lg-4"},[t("img",{staticClass:"px-lg-3",attrs:{src:i("960b"),alt:"PDF"}})]),t("div",{staticClass:"col-lg-10"},[t("p",[a._v("Como su nombre lo indica, el Formato de Documento Portátil "),t("italic",[a._v("(Portable Document Format) ")]),a._v("se creó buscando pasar del papel al formato digital y mucho más. La meta consistía en que cualquier persona pudiera guardar documentos de cualquier aplicación y convertirlo a una versión electrónica de estos para ser enviados, revisados, editados e impresos desde cualquier máquina. Hoy en día es el formato de archivo más usado por las compañías y editoriales para compilar su información. Ahora los documentos PDF, además de compilar información gráfica de gran profundidad de colores y calidad, también contienen hipervínculos, botones, campos de formulario, audio y video, entre otras. ")],1)])])]),t("Separador"),a._m(3),t("p",{staticClass:"mb-4",attrs:{"data-aos":"fade"}},[a._v("Hoy en día, la tecnología permea la cotidianidad, en el trabajo, hogar, comunidad, familia y en general, creando un vínculo en todas las formas de relacionarse con el entorno. Por ello, es impensable desarrollarse y convivir en sociedad sin la presencia y utilización de herramientas tecnológicas y digitales. En este caso, el uso adecuado de programas informáticos de diseño audiovisual, ayudan a adquirir y desarrollar las habilidades necesarias para poder expandir nuestra fuerza creativa e innovadora. Así pues, al hablar de los programas más representativos para hacer animación digital, en este caso se hace necesario hacer referencia a las aplicaciones de escritorio de "),t("italic",[a._v("Adobe Creative Cloud y Autodesk. ")]),a._v("A continuación, se realiza un acercamiento a cada una de ellas:")],1),t("TabsC",{staticClass:"color-acento-contenido",attrs:{"data-aos":"fade-down"}},[t("div",{staticClass:"py-3 py-md-4",attrs:{titulo:"Adobe After Effects "}},[t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-md-11 mb-4 mb-md-0"},[t("h4",[a._v("Adobe After Effects ")]),t("p",[a._v("Este "),t("italic",[a._v("software ")]),a._v("fue creado para la elaboración, desarrollo, diseño audiovisual y composición digital, que permite aplicar movimiento a los recursos gráficos; su uso es principalmente para la posproducción de imágenes en movimiento, animar, alterar y componer creaciones en formatos 2D y 3D. Es una buena opción, si ya se está familiarizado con el entorno de Adobe. ")],1)]),t("div",{staticClass:"col-md-6 mb-4 mb-md-0"},[t("div",{staticClass:"cajon color-acento-botones p-4 mb-4"},[t("p",[a._v("Con After Effects se pueden realizar tareas, tales como: ")]),t("ul",{staticClass:"lista-ul--color"},[t("li",[t("i",{staticClass:"fas fa-circle"}),a._v("Animación de figuras y objetos 2D.")]),t("li",[t("i",{staticClass:"fas fa-circle"}),a._v("Animación por trazo de vectores.")]),t("li",[t("i",{staticClass:"fas fa-circle"}),a._v("Crear y animar textos tales como créditos, introducciones y generarles transiciones en movimiento.")]),t("li",[t("i",{staticClass:"fas fa-circle"}),a._v("Efectos especiales integrados a video.")]),t("li",[t("i",{staticClass:"fas fa-circle"}),a._v("Posproducción de video: ajustes de color, efectos de imagen, inclusión de gráficas animadas, efectos de audio, etc. ")])])])]),t("div",{staticClass:"col-md-5"},[t("figure",[t("img",{staticClass:"mb-2",attrs:{src:i("26c6"),alt:"Adobe After Effects"}}),t("figcaption",{staticClass:"back-primario"},[a._v("Nota. https://bit.ly/2W0SRq3")])])])])]),t("div",{staticClass:"py-3 py-md-4",attrs:{titulo:"Adobe Animate"}},[t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-md-11 mb-4 mb-md-0"},[t("h4",[a._v("Adobe Animate")])]),t("div",{staticClass:"col-md-6 mb-4 mb-md-0"},[t("p",[a._v("Anteriormente conocido como "),t("italic",[a._v("Adobe Flash Professional, Animate ")]),a._v("es una aplicación de creación y manipulación de gráficos vectoriales (2D) gráficos rasterizados, sonido, flujo de vídeo, audio y animaciones en formato HTML5. "),t("italic",[a._v("Animate ")]),a._v("es un estudio de animación que trabaja sobre fotogramas y está destinado a la producción de contenido interactivo para videojuegos, aplicaciones y también para la web. ")],1)]),t("div",{staticClass:"col-md-5"},[t("figure",[t("img",{staticClass:"mb-2",attrs:{src:i("5d20"),alt:"Adobe Animate"}}),t("figcaption",{staticClass:"back-primario"},[a._v("Nota. https://bit.ly/2W0Gf2a")])])])])]),t("div",{staticClass:"py-3 py-md-4 italic",attrs:{titulo:"Character Animator"}},[t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-md-11 mb-4 mb-md-0"},[t("h4",[a._v("Character Animator")])]),t("div",{staticClass:"col-md-6 mb-4 mb-md-0"},[t("p",[a._v("Este programa también hace parte de las aplicaciones de escritorio de "),t("italic",[a._v("Adobe Creative Cloud. ")]),a._v("Este "),t("italic",[a._v("software ")]),a._v("combina la captura de movimiento en vivo "),t("italic",[a._v("(MoCap) ")]),a._v("utilizando la cámara "),t("italic",[a._v("web ")]),a._v("y el micrófono, con un sistema de grabación de múltiples pistas para animar automáticamente a un personaje en tiempo real. Como no requiere mucha experiencia en animación, por parte del usuario, esta es una buena opción para principiantes. ")],1)]),t("div",{staticClass:"col-md-5"},[t("figure",[t("img",{staticClass:"mb-2",attrs:{src:i("025b"),alt:"Character Animator"}}),t("figcaption",{staticClass:"back-primario"},[a._v("Nota. https://bit.ly/2W0Mbs4 ")])])])])]),t("div",{staticClass:"py-3 py-md-4",attrs:{titulo:"3D Max"}},[t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-md-11 mb-4 mb-md-0"},[t("h4",[a._v("3D Max ")])]),t("div",{staticClass:"col-md-6 mb-4 mb-md-0"},[t("p",[t("italic",[a._v("Software ")]),a._v("de diseño y animación 3D para industrias de manufacturas, construcción, medios y entretenimiento. Posee una variedad de herramientas para procesar escenas y personajes complejos, produce animaciones, renderizado y modelado 3D para la visualización en videojuegos, arquitectura y diseño. ")],1)]),t("div",{staticClass:"col-md-5"},[t("figure",[t("img",{staticClass:"mb-2",attrs:{src:i("be38"),alt:"3D Max"}}),t("figcaption",{staticClass:"back-primario"},[a._v("Nota. https://bit.ly/3CTzsbj")])])])])]),t("div",{staticClass:"py-3 py-md-4",attrs:{titulo:"Autodesk Maya"}},[t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-md-11 mb-4 mb-md-0"},[t("h4",[a._v("Autodesk Maya ")])]),t("div",{staticClass:"col-md-6 mb-4 mb-md-0"},[t("p",[a._v("Con las herramientas integradas permite hacer: animación 3D profesionalmente, modelado, simulación, ambientes, gráficos en movimiento, realidad virtual y creación de personajes para cine, juegos y televisión.")])]),t("div",{staticClass:"col-md-5"},[t("figure",[t("img",{staticClass:"mb-2",attrs:{src:i("f70a"),alt:"Autodesk Maya"}}),t("figcaption",{staticClass:"back-primario"},[a._v("Nota. https://bit.ly/3CSu48q ")])])])])]),t("div",{staticClass:"py-3 py-md-4",attrs:{titulo:"Cinema 4D"}},[t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-md-11 mb-4 mb-md-0"},[t("h4",[a._v("Cinema 4D ")])]),t("div",{staticClass:"col-md-6 mb-4 mb-md-0"},[t("p",[a._v("Ofrece la opción de trabajar de forma no destructiva. Es utilizado en el campo de gráficos en movimiento, diseño arquitectónico, visualización de productos, modelado paramétrico, sombreadores de procedimiento, texturas, animación y más. Posee una amplia gama de herramientas y funciones que permiten lograr resultados con calidad visual sorprendente. Gracias a la interfaz organizada de forma lógica, facilita su funcionamiento intuitivo y fácil de entender. ")])]),t("div",{staticClass:"col-md-5"},[t("figure",[t("img",{staticClass:"mb-2",attrs:{src:i("aafc"),alt:"Cinema 4D"}}),t("figcaption",{staticClass:"back-primario"},[a._v("Nota. https://bit.ly/2VW5mD7")])])])])]),t("div",{staticClass:"py-3 py-md-4",attrs:{titulo:"Blender"}},[t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-md-11 mb-4 mb-md-0"},[t("h4",[a._v("Blender ")])]),t("div",{staticClass:"col-md-6 mb-4 mb-md-0"},[t("p",[a._v("Es un programa 3D gratuito y de código abierto, proporciona una amplia gama de funciones de modelado, texturizado, iluminación, animación, procesamiento de video, renderizado, simulación, composición y seguimiento de movimiento. Permite, además, crear toda una postproducción desde el mismo programa con opciones de edición de vídeo, composición y efectos visuales. ")])]),t("div",{staticClass:"col-md-5"},[t("figure",[t("img",{staticClass:"mb-2",attrs:{src:i("6225"),alt:"Blender"}}),t("figcaption",{staticClass:"back-primario"},[a._v("Nota. https://bit.ly/2VZeOWk")])])])])])])],1)],1)},s=[function(){var a=this,e=a.$createElement,i=a._self._c||e;return i("div",{staticClass:"titulo-principal"},[i("div",{staticClass:"titulo-principal__numero"},[i("span",[a._v("3")])]),i("h1",[a._v("Imagen digital ")])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("figure",{staticClass:"mb-5",attrs:{"data-aos":"fade"}},[t("img",{attrs:{src:i("6c18"),alt:"Imagen digital"}})])},function(){var a=this,e=a.$createElement,i=a._self._c||e;return i("div",{staticClass:"titulo-segundo",attrs:{id:"t_3_1","data-aos":"fade-right"}},[i("div",{staticClass:"h2"},[a._v("3.1 Formatos digitales")])])},function(){var a=this,e=a.$createElement,i=a._self._c||e;return i("div",{staticClass:"titulo-segundo",attrs:{id:"t_3_2","data-aos":"fade-right"}},[i("div",{staticClass:"h2"},[a._v("3.2 Herramientas digitales")])])}],o=i("91e3"),r={name:"Tema3",components:{AcordeonB:o["a"]},data:function(){return{}},mounted:function(){var a=this;this.$nextTick((function(){a.$aosRefresh()}))},updated:function(){this.$aosRefresh()}},n=r,c=i("2877"),d=Object(c["a"])(n,t,s,!1,null,"0557b385",null);e["default"]=d.exports},f4bb:function(a,e,i){},f70a:function(a,e,i){a.exports=i.p+"img/tema3-2-tabs5.910f261b.svg"}}]);
//# sourceMappingURL=tema3.48fc4b98.js.map