<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.align-items-center.mb-5
      .col-lg-6.tarjeta.color-secundario.p-5.mb-4.mb-lg-0(data-aos="fade-right")
        p.parrafo-intro.mb-0 En el presente componente tendrá la posibilidad de abordar los fundamentos de la 
          strong animación 
          | y elementos determinantes para comprender las técnicas para su aplicación. A continuación, le invitamos a visualizar el video de introducción:
      .col-lg-6.img-intro(data-aos="fade-left")
        figure
          img(src='@/assets/curso/intro.svg', alt='Introducción')


    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
  

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
