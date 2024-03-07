<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch(data-aos="fade-down-right")
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/curso/iconos/falso-verdadero.svg")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo(data-aos="fade-down-left")
          h2 FORTALECIENDO LAS GESTIONES ADMINISTRATIVAS
        p.mb-4(data-aos="fade-down-right") Identificar los diferentes procesos y procedimientos que realizan los colaboradores para aumentar la efectividad en las tareas diarias de las unidades administrativas de acuerdo con políticas organizacionales.
        .tarjeta.actividad.p-3(data-aos="fade-down-left")
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 VERDADERO/FALSO
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad01/index.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Actividad',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass"></style>
