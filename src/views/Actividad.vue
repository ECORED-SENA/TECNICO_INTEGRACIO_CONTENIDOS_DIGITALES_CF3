<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-segundo
      h2 Complete la frase
    .row.mb-5.justify-content-center.align-items-center
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0.mb-lg-5(data-aos="fade-right")
        .tarjeta.tarjeta--gris.h-100.d-flex.align-items-center.p-lg-2
          figure.px-lg-4
            img.px-lg-4.py-lg-5(src="@/assets/curso/actividad-didactica.svg", alt="Complete la frase")
      .col-12.col-md-8.col-lg-9.mb-lg-5(data-aos="fade-left")
        .col-lg-9
          p Apreciado aprendiz a continuación encontrará unos enunciados relacionados con la experiencia de aprendizaje del presente componente de formación.
          p.mb-4 Con la intención de identificar los conocimientos abordados le sugerimos arrastrar y soltar la respuesta correcta. Adelante.
        .tarjeta.color-degrade.p-2
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.text-white.fw-bold.mb-0.px-lg-2 Arrastrar y soltar completando la frase
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece


       

</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass" scoped></style>
