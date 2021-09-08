<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Pensamiento innovador y tendencias en la animación 

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/tema4-banner.png", alt="Pensamiento innovador y tendencias en la animación")

    p(data-aos="fade") En tiempos de una constante transformación tecnológica es muy importante estar al tanto de los desarrollos que generan cambios en todos los ámbitos de la sociedad y poder ver las situaciones desde una nueva perspectiva en busca de una mejora. La animación y la tecnología alrededor de ella no es la excepción. Nos podemos referir a que algo es innovador en el momento que tiene un potencial de usufructo y rentabilidad mientras se le está dando solución a una necesidad identificable en el entorno tanto local como global.

    p.mb-5(data-aos="fade") Los siguientes son unas de las aplicaciones más recientes de la animación:

    .titulo-sexto.color-primario.mb-4(data-aos="fade-right") 
      h3.mb-0 a. Aplicaciones más recientes de la animación

    AcordeonB.mb-5(tipo="b" clase-tarjeta="tarjeta--blanco border-bottom acordeon-tema4")
      .row.px-lg-5(titulo="Fondos y gráficos animados")
        .row
          .col-md-6
            p Los fondos animados se han convertido en una de las mejores cartas de presentación para una página 
              italic web, 
              | sobre todo, para los sitios especializados en tecnología, 
              italic ecommerce, 
              | educación 
              italic online.
          .col-md-6    
            img(src="@/assets/curso/tema4-acordeon1.jpg", alt="Pensamiento innovador y tendencias en la animación")

      .row.px-lg-5(titulo="Logos animados")
        .row
          .col-md-6  
            p Cada vez más marcas le apuestan a la presentación de sus logos en versiones animadas con el fin de reforzar su imagen y personalidad. Un logo animado en 3D podría otorgarle un aspecto moderno, divertido y amigable.   
          .col-md-6    
            img(src="@/assets/curso/tema4-acordeon2.jpg", alt="Logos animados") 

      .row.px-lg-5(titulo="Surrealismo digital")
        .row
          .col-md-6
            p A través de animaciones potentes, inesperadas y entretenidas, esta tendencia de animación nos trae ejemplos que van desde la evaporación de objetos, la aparición mágica de objetos, hasta burbujas que nunca explotan y objetos que cambian de estado.  
          .col-md-6    
            img(src="@/assets/curso/tema4-acordeon3.jpg", alt="Surrealismo digital")   

      .row.px-lg-5(titulo="Live Data")
        .row
          .col-md-6
            p Animar datos ayuda a que los gráficos sean más comprensibles, asimismo, más divertidos, por ende, las personas mantendrán su atención en la página o presentación por un mayor rango de tiempo.
          .col-md-6    
            img(src="@/assets/curso/tema4-acordeon4.jpg", alt="Live Data") 

      .row.px-lg-5(titulo="Infografías animadas")
        .row
          .col-md-6
            p Las infografías animadas te ayudan a presentar información de manera entretenida, lo cual hace que esta sea más fácil de entender. En ellas, puedes combinar imágenes, textos y datos para generar un efecto de storytelling, lo cual involucra más al usuario con lo que se le está mostrando.
          .col-md-6    
            img(src="@/assets/curso/tema4-acordeon5.jpg", alt="Infografías animadas") 

      .row.px-lg-5(titulo="Texto en movimiento")
        .row
          .col-md-6
            p El texto en movimiento es una forma sencilla y efectiva de captar la atención de los usuarios.     
          .col-md-6    
            img(src="@/assets/curso/tema4-acordeon6.jpg", alt="Texto en movimiento") 


    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10    
        .tarjeta.color-degrade.p-3.px-lg-5
          .row.justify-content-around.align-items-center
            .col-4.col-sm-3.col-lg-2.px-lg-4
              img(src="@/assets/curso/tema4-cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  p.mb-1 Estimado aprendiz, para profundizar sobre el tema puede consultar el siguiente video: 
                  h5.mb-0 “Theory of creativity - Duncan Wardle”
                  h5 “The art of innovation”
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://youtu.be/Mtjatz9r-Vc')" target="_blank")
                    span Enlace
                    i.fas.fa-link

</template>

<script>
import AcordeonB from '../components/AcordeonB'
export default {
  name: 'Tema4',
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
