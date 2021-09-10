<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Historia de la animación 

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/tema1-banner.png", alt="Historia de la animación") 

    p.mb-5(data-aos="fade") Todo parte de una idea que quiere ser mostrada. El contenido, la forma, el tipo y la duración de la animación final dependen del público al que está dirigida. El proceso incluye desde la realización de un story board, hasta la elaboración de la animación final, pasando por la creación de personajes, el guion técnico y literario, entre otros. Por lo anterior, lo invitamos a profundizar y conocer la historia de la animación que le brinda elementos determinantes, para comprender lo que es hoy día la animación:

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/OHmqLzrsWFE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10    
        .tarjeta.color-degrade.p-3.px-lg-5
          .row.justify-content-around.align-items-center
            .col-4.col-sm-3.col-lg-2.px-lg-4
              img(src="@/assets/curso/tema1-cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h4.mb-1 Un siglo de animación
                  p.text-small Estimado aprendiz, para profundizar sobre el tema puede consultar el siguiente video.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://youtu.be/kj0ZfXEN96w')" target="_blank")
                    span Enlace
                    i.fas.fa-link


    h2.mb-4(data-aos="fade-right") Cronología de la animación

    p.mb-4(data-aos="fade") Para conocer un poco la forma en que ha venido avanzando la animación, es posible revisar la siguiente línea de tiempo:

    .row.back-verde.py-5
      LineaTiempoC.color-primario(text-small)
        .row.justify-content-center(titulo="36000-13000 a.d.C.")
          .col-md-4.mb-4.mb-md-0
            h5 Cuevas de Altamira. 36000-13000 a.d.C.
            p Se encuentran allí un jabalí con 8 patas y caballos con varias cabezas, con lo que se especula que fueron las primeras intenciones de ilustrar el movimiento. 
          .col-md-1
          .col-md-5
            figure
              img.mb-2(src='@/assets/curso/tema1-linea1.jpg', alt='36000-13000 a.d.C.')
              figcaption.back-primario Nota. https://acortar.link/wP1K7D
        .row.justify-content-center(titulo="2000 a.d.C ")
          .col-md-4.mb-4.mb-md-0
            h5 Egipto, (2000 a.d.C)
            p En las tiras encontradas en los templos egipcios se encuentran representaciones de personas y animales en posición secuenciada.
          .col-md-1
          .col-md-5
            figure
              img.mb-2(src='@/assets/curso/tema1-linea2.jpg', alt='Egipto, (2000 a.d.C)')
              figcaption.back-primario Nota. https://acortar.link/oSnM5f  
        .row.justify-content-center(titulo="1824")
          .col-md-4.mb-4.mb-md-0
            h5 Taumatropo, París 1824
            p Es un disco de cartón, con dos imágenes afines, una de cada lado, que se hace girar sobre su eje horizontal por medio de dos cordones atados a sus lados, para conseguir que las imágenes en ambos lados den la ilusión de unión y movimiento.
          .col-md-1
          .col-md-5
            figure
              img.mb-2(src='@/assets/curso/tema1-linea3.jpg', alt='Taumatropo, París 1824')
              figcaption.back-primario Nota. https://challengeacepted.files.wordpress.com/2011/03/taumatropo.jpg          
        .row.justify-content-center(titulo="1829")
          .col-md-4.mb-4.mb-md-0
            h5 Estroboscopio, Austria 1829
            p Es un disco giratorio que permite visualizar distintas fases del movimiento de un objeto o imagen en secuencia, cancelando la vista o iluminación en el momento preciso de transición, por lo que da la ilusión de un movimiento fluido. Inventado por 
              strong Simon von Stampfer.
          .col-md-1
          .col-md-5
            figure
              img.mb-2(src='@/assets/curso/tema1-linea4.jpg', alt='Estroboscopio, Austria 1829')
              figcaption.back-primario Nota. https://proyectoidis.org/el-fenaquitiscopio-de-plateau/ 
        .row.justify-content-center(titulo="1834")
          .col-md-4.mb-4.mb-md-0
            h5 Zootropo, 1834
            p Es una variación del estroboscopio, creada por 
              strong William George Horner, 
              | compuesta por un cilindro giratorio con rendijas espaciadas y una tira con imágenes en secuencia, bordeando internamente este tambor.
          .col-md-1
          .col-md-5
            figure
              img.mb-2(src='@/assets/curso/tema1-linea5.jpg', alt='Zootropo, 1834')           
        .row.justify-content-center(titulo="1877")
          .col-md-4.mb-4.mb-md-0
            h5 Praxinoscopio, 1877 
            p Inventado por 
              strong Emile Reynaud, 
              | es un artefacto con los mismos principios funcionales del zootropo, el cual se visualiza, por encima del cilindro, y no a través de rendijas.
          .col-md-1
          .col-md-5
            figure
              img.mb-2(src='@/assets/curso/tema1-linea6.jpg', alt='Praxinoscopio, 1877')
              figcaption.back-primario Nota. https://acortar.link/WgG76o
        .row.justify-content-center(titulo="1906")
          .col-md-4.mb-4.mb-md-0
            h5 Fases humorísticas de caras divertidas, 1906  
            p Con el sencillo recurso de un tablero y tiza, el estadounidense 
              strong Stuart Blackton, 
              | fue el primero en plasmar en un medio celuloide una animación. Dibujos en tiza sobre el tablero que se borran y redibujan, levemente desplazados, en fotogramas secuenciales para generar la ilusión de movimiento. 
          .col-md-1
          .col-md-5
            figure
              img.mb-2(src='@/assets/curso/tema1-linea7.jpg', alt='Fases humorísticas de caras divertidas, 1906 ')
              figcaption.back-primario Nota. https://acortar.link/RhExZU
        .row.justify-content-center(titulo="Años 20's ")
          .col-md-4.mb-4.mb-md-0
            h5 Felix el Gato y Gertie el dinosaurio, Años 20's  
            p Estas dos animaciones fueron las primeras en tener una trama, una narrativa lógica y personajes con personalidad propia, además de ser los primeros dibujos animados en ser creados utilizando fotogramas clave. 
          .col-md-1
          .col-md-5
            figure
              img.mb-2(src='@/assets/curso/tema1-linea8.jpg', alt='Felix el Gato y Gertie el dinosaurio, Años 20´s ')
              figcaption.back-primario Nota. https://gatopedia.fandom.com/es/wiki/El_gato_Félix?file=Gato_Felix.jpg  
        .row.justify-content-center(titulo="1928")
          .col-md-4.mb-4.mb-md-0
            h5 Steamboat Willie, 1928 
            p Es un corto animado dirigido por 
              strong Walt Disney 
              | y 
              strong Ub Iwerks, 
              | el cual es considerado, además del debut de 
              strong Mickey Mouse, 
              | fue el primer dibujo animado en tener sonidos completamente sincronizados con la acción en pantalla. 
          .col-md-1
          .col-md-5
            figure
              img.mb-2(src='@/assets/curso/tema1-linea9.jpg', alt='Steamboat Willie, 1928')
              figcaption.back-primario Nota. https://acortar.link/OdpLv4 
        .row.justify-content-center(titulo="1930-1969")
          .col-md-4.mb-4.mb-md-0
            h5 Cortometrajes Merrie Melodies, 1930-1969 
            p Creadores de gran cantidad de animaciones con sonido y a color, fueron los precursores, junto a los estudios 
              strong Walt Disney, 
              | de la producción masiva de dibujos animados. Posteriormente llamado estudios 
              strong Warner Brothers. 
          .col-md-1
          .col-md-5
            figure
              img.mb-2(src='@/assets/curso/tema1-linea10.jpg', alt='Cortometrajes Merrie Melodies, 1930-1969')
              figcaption.back-primario Nota. https://looneytunes.fandom.com/es/wiki/Merrie_Melodies 
        .row.justify-content-center(titulo="1939")
          .col-md-4.mb-4.mb-md-0
            h5 Primer largometraje animado, Blanca Nieves y los 7 enanitos, 1939 
            p Es el primer largometraje de animación producido por los estudios 
              strong Walt Disney. 
              | Es notable por que marca una gran innovación en la técnica y arte de la animación.  
          .col-md-1
          .col-md-5
            figure
              img.mb-2(src='@/assets/curso/tema1-linea11.jpg', alt='Primer largometraje animado, Blanca Nieves y los 7 enanitos, 1939')
              figcaption.back-primario Nota. https://acortar.link/tnSWN0 
        .row.justify-content-center(titulo="1988")
          .col-md-4.mb-4.mb-md-0
            h5 Quién engañó a Roger Rabbit, 1988 
            p Es la primera película, largometraje en combinar actores reales con dibujos animados.  
          .col-md-1
          .col-md-5
            figure
              img.mb-2(src='@/assets/curso/tema1-linea12.jpg', alt='Quién engañó a Roger Rabbit, 1988')
              figcaption.back-primario Nota. https://acortar.link/lsjyGi
        .row.justify-content-center(titulo="1995")
          .col-md-4.mb-4.mb-md-0
            h5 Animación por computador, 1995
            p La empresa de animación 
              strong PIXAR 
              | crea 
              strong Toy Story, 
              | la primera película animada hecha en su totalidad por medios digitales. 
          .col-md-1
          .col-md-5
            figure
              img.mb-2(src='@/assets/curso/tema1-linea13.jpg', alt='Animación por computador, 1995')
              figcaption.back-primario Nota. https://acortar.link/UEW9ML  
        .row.justify-content-center(titulo="Actualidad")
          .col-md-4.mb-4.mb-md-0
            h5 Animación digital realista, Actualidad 
            p La búsqueda de la animación siempre ha sido reproducir las dinámicas y físicas del mundo real, y cuando se trata de animación 3D, esta es la mayor referencia para producir.  Por lo mismo cada película en 3D conlleva un nuevo desarrollo tecnológico, tanto en 
              italic software y hardware, 
              | como en la complejidad narrativa y representativa. 
          .col-md-1
          .col-md-5
            figure
              img.mb-2(src='@/assets/curso/tema1-linea14.jpg', alt='Animación digital realista, Actualidad')
              figcaption.back-primario Nota. https://acortar.link/mii8Yq                                              



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
