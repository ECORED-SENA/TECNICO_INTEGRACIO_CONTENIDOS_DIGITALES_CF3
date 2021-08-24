<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Imagen digital 

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/tema3-banner.png", alt="Imagen digital")

    p(data-aos="fade") 
      span.etiqueta Una imagen digital, 
      | es una representación bidimensional, resultado del proceso que genera un computador por medio de una matriz numérica binaria (ceros y unos) esta puede ser estática o en movimiento. Para entenderlo mejor, 
      span.etiqueta se puede definir como una imagen que ha sido procesada y generada por computador o medios digitales, 
      | ya sea obtenida por medio de dispositivos o periféricos de entrada como escáneres y cámaras digitales (digitalización) o directamente mediante software especializado resultado de dibujarlo con el ratón del computador y tablas digitalizadoras. Las imágenes digitales poseen atributos tales como tamaño, ancho y alto y tipo de codificación; lo que permite definir qué programa informático puede editarlo; la profundidad de paleta de colores, y la cantidad de detalle de píxeles.

    p(data-aos="fade") Partiendo de dicho proceso, se identifican varios tipos de imagen digital, como los descritos a continuación:  


    Separador


    // 3.1
    #t_3_1.titulo-segundo(data-aos="fade-right")
      .h2 3.1.  Formatos digitales

    p(data-aos="fade") La información digital se almacena en archivos que se componen de un nombre, un punto y una extensión que hacen referencia al programa donde dicho archivo se puede reproducir y editar. Esto define si los archivos son de texto, de audio, de video, de ejecución o de sistema, comprimido, de lectura o de imagen, que es lo que concierne a este tema. 

    p.mb-4(data-aos="fade") Los formatos digitales de imagen más importantes son:

    AcordeonB(tipo="a" clase-tarjeta="tarjeta back1")
      .row.px-lg-5(titulo="JPG o JPEG")
        .col-lg-2.px-lg-4
          img.px-lg-3(src="@/assets/curso/tema3-acordeon1.svg", alt="JPG o JPEG") 
        .col-lg-10
          p Su nombre surge de la sigla del comité de expertos que creó este estándar de compresión y codificación de imágenes fijas, 
            italic Joint Photographic Experts Group 
            | (Grupo de expertos de fotografía conjunta, sería su traducción al español).  Es un formato que comprime la información digital de la imagen, tanto en color como en escala de grises, conservando una alta calidad contra su peso de archivo liviano.  Es el formato de imagen más común y en el cual resultan y comprimen las capturas de las cámaras fotográficas digitales. 
      .row.px-lg-5(titulo="GIF")
        .col-lg-2.px-lg-4
          img.px-lg-3(src="@/assets/curso/tema3-acordeon2.svg", alt="GIF") 
        .col-lg-10
          p 
            italic Graphics Interchange Format 
            | (en español «Formato de Intercambio de Gráficos») es un formato de imagen digital utilizado ampliamente en internet debido a su rápida carga y descarga a través de páginas web , tanto para imágenes como para animaciones. Este es un formato que no pierde calidad para imágenes de una paleta de hasta 256 colores. En los años 2000 fue desplazada por el formato SWF de 
            italic Flash, 
            | como el formato de animación para internet de mayor preferencia, ya que además de superarlo en conservación de calidad y alta posibilidad de paleta de colores, también permitía integrar interactividad y audio. Sin embargo al caer este nuevo formato también en la obsolescencia por incompatibilidad con los dispositivos móviles que iban saliendo al mercado, el GIF recobró uso e importancia. Técnicamente, al conservarse sencillo y liviano, es un formato que parece no pasar de moda. Según Katherine Martin, responsable del diccionario de 
            italic Oxford, 
            | el GIF, además de haberse convertido en un medio de expresión de la cultura pop, también se ha convertido en una herramienta de investigación digital que se mantiene vigente.  Permite la conservación de parámetros de alfa, más conocida como información de transparencia. 
      .row.px-lg-5(titulo="BMP")
        .col-lg-2.px-lg-4
          img.px-lg-3(src="@/assets/curso/tema3-acordeon3.svg", alt="BMP") 
        .col-lg-10
          p 
            italic Bit Maps Protocol 
            | o imagen de mapa de bits es un formato propio del sistema operativo 
            italic Microsoft Windows. 
            | Se caracteriza por tener un rango alto de paletas de colores que van desde los 16,7 millones (24 
            italic bits) 
            | hasta menos de 256 colores (8 
            italic bits), 
            | por lo cual puede tener nula pérdida de calidad pero esto conlleva a poca eficiencia en su uso de espacio de disco y movimiento en internet.  En caso de requerir su fácil manipulación tanto en software como en internet, se recomienda su uso cuando se requiere conservar una alta calidad y resolución de la imagen, de lo contrario es mejor convertirlo a formatos más livianos tales como JPG, GIF o PNG.  

      .row.px-lg-5(titulo="PNG")
        .col-lg-2.px-lg-4
          img.px-lg-3(src="@/assets/curso/tema3-acordeon8.svg", alt="PNG") 
        .col-lg-10
          p Los gráficos portátiles de red o 
            italic Portable Network Graphics, 
            | fueron desarrollados principalmente para solucionar las carencias del formato GIF, al permitir almacenar una mayor profundidad de colores conservando un peso liviano y la información de canal alfa que, a diferencia del GIF, que solo permite dos estados alfa (totalmente transparente o totalmente opaco) también permite canal alfa de semi transparencia, propios de objetos translúcidos.  Se recomienda usarlo como secuencia de imágenes para compilarlo como video animado con silueteado de transparencia, propicio para componer sobre otro video o imagen. Como por ejemplo el logotipo del noticiero girando en una esquina de la pantalla.

      .row.px-lg-5(titulo="TIFF")
        .col-lg-2.px-lg-4
          img.px-lg-3(src="@/assets/curso/tema3-acordeon4.svg", alt="TIFF") 
        .col-lg-10
          p Es la sigla en inglés de 
            italic Tagged Image Format 
            | (Formato de imagen etiquetada), es la precursora del formato PDF.  Es un formato de imagen que conserva una alta calidad y compresión no destructiva, por lo que también posee un alto peso de archivo. Es un formato de predilección en el área del periodismo gráfico ya que permite almacenar más de una imagen de excelente calidad en un mismo archivo, tal como lo es el PDF en la actualidad.  Una de las ventajas del formato TIFF es que no usa compresión lo que resulta en la nula pérdida en el detalle de la imagen al ser guardada. Si una imagen en otro formato se guarda varias veces, esta pierde calidad progresivamente; esto no sucede con el formato TIFF, lo cual la convierte en uno de los mejores formatos para almacenamiento e intercambio de datos gráficos.

      .row.px-lg-5(titulo="PSD")
        .col-lg-2.px-lg-4
          img.px-lg-3(src="@/assets/curso/tema3-acordeon5.svg", alt="PSD") 
        .col-lg-10
          p Los archivos de imagen 
            italic Photoshop Document 
            | o 
            italic Documento Photoshop 
            | es el archivo nativo editable de la herramienta de edición de imagen digital, 
            italic Adobe Photoshop.  
            | Al ser el archivo editable esta conserva las características del 
            italic software 
            | como capas, efectos y máscaras, entre otros. Posee grandes posibilidades de integración y compatibilidad con otros productos de la casa 
            italic Adobe, 
            | tales como 
            italic Illustrator, After Effects, InDesign y Premiere.  
            | Hay que entender que es un formato de imagen rasterizada lo que quiere decir que es una imagen compuesta de píxeles, por lo que según la resolución (pixeles/pulgada), puede llegar a perder calidad al ser expandida o impresa fuera de sus dimensiones originales.

      .row.px-lg-5(titulo="RAW")
        .col-lg-2.px-lg-4
          img.px-lg-3(src="@/assets/curso/tema3-acordeon6.svg", alt="RAW") 
        .col-lg-10
          p Como su nombre lo indica, este formato de imagen contiene la información en bruto o “cruda”, lo que quiere decir que conserva la totalidad de los datos de la imagen tal cual ha sido captada por el sensor digital de la cámara, sea fotográfica o de otro tipo.  Igualmente posee, a través de 
            italic software 
            | de revelado digital, como lo es 
            italic Lightroom, 
            | la facultad de edición posterior a la captura de la imagen, por lo que se pueden modificar parámetros propios de la cámara, como lente, obturación y sensibilidad para mejorar o modificar estas propiedades en la imagen ya grabada, gracias a estas posibilidades, este tipo de archivo también recibe el nombre de “negativo digital”.  Por lo general contiene una profundidad de color de 36 a 48 bits/píxel y un tamaño de archivo muy grande.            

      .row.px-lg-5(titulo="PDF")
        .col-lg-2.px-lg-4
          img.px-lg-3(src="@/assets/curso/tema3-acordeon7.svg", alt="PDF") 
        .col-lg-10
          p Como su nombre lo indica, el Formato de Documento Portátil 
            italic (Portable Document Format) 
            | se creó buscando pasar del papel al formato digital y mucho más.  La meta consistía en que cualquier persona pudiera guardar documentos de cualquier aplicación y convertirlo a una versión electrónica de estos para ser enviados, revisados, editados e impresos desde cualquier máquina.  Hoy en día es el formato de archivo más usado por las compañías y editoriales para compilar su información.  Ahora los documentos PDF, además de compilar información gráfica de gran profundidad de colores y calidad, también contienen hipervínculos, botones, campos de formulario, audio y video, entre otras. 



    Separador


    // 3.2
    #t_3_2.titulo-segundo(data-aos="fade-right")
      .h2 3.2.  Herramientas digitales

    p(data-aos="fade") Hoy en día, la tecnología permea la cotidianidad, en el trabajo, hogar, comunidad, familia y en general, creando un vínculo en todas las formas de relacionarse con el entorno. Por ello, es impensable desarrollarse y convivir en sociedad sin la presencia y utilización de herramientas tecnológicas y digitales. En este caso, el uso adecuado de programas informáticos de diseño audiovisual, ayudan a adquirir y desarrollar las habilidades necesarias para poder expandir nuestra fuerza creativa e innovadora. Así pues, al hablar de los programas más representativos para hacer animación digital, en este caso se hace necesario hacer referencia a las aplicaciones de escritorio de 
      italic Adobe Creative Cloud y Autodesk. 
      | A continuación, se realiza un acercamiento a cada una de ellas:






</template>

<script>
import AcordeonB from '../components/AcordeonB'
export default {
  name: 'Tema3',
  components: {
    AcordeonB,
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

<style lang="sass" scoped></style>
